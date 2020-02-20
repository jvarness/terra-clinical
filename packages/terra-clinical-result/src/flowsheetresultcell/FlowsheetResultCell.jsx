import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconComment from 'terra-icon/lib/icon/IconComment';
import IconModified from 'terra-icon/lib/icon/IconModified';
import IconUnverified from 'terra-icon/lib/icon/IconDiamond';
import ClinicalResult from '../ClinicalResult';
import ClinicalResultBloodPressure from '../ClinicalResultBloodPressure';
import observationPropShape from '../proptypes/observationPropTypes';
import ResultError from '../common/other/_ResultError';
import NoData from '../common/other/_KnownNoData';
import styles from './FlowsheetResultCell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   *  A set of clinical results.                                                          .
   */
  resultDataSet: PropTypes.arrayOf(PropTypes.shape({
    /**
     *  A single clinical result or blood pressure result id.
     */
    id: PropTypes.string,
    /**
     *  A single clinical result or blood pressure result.
     */
    resultData: observationPropShape,
  })),
  /**
   * Visually hides the unit of measure when presented in a series of side-by-side columns of the same unit.
   */
  hideUnit: PropTypes.bool,
  /**
   * The padding styling to apply to the Time Column Header Cell.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
  /**
   * Override that shows an Error display. Used when there is a known error or problem when retrieving or assembling the clinical result data.
   */
  hasResultError: PropTypes.bool,
  /**
   * Override that shows a known "No Data" display. Used when there is known to be no value for a given clinical result concept at a specific datetime.
   */
  hasResultNoData: PropTypes.bool,
};

const defaultProps = {
  resultDataSet: [],
  hideUnit: false,
  paddingStyle: 'compact',
  hasResultError: false,
  hasResultNoData: false,
};

const isEmpty = (str) => (!str || str.length === 0);

const FlowsheetResultCell = (props) => {
  const {
    resultDataSet,
    hideUnit,
    paddingStyle,
    hasResultError,
    hasResultNoData,
    ...customProps
  } = props;

  let flowsheetResultCellDisplay = null;

  if (hasResultError || hasResultNoData) {
    flowsheetResultCellDisplay = hasResultError ? (<div className={cx('single-result-display')}><ResultError /></div>) : (<div className={cx('single-result-display')}><NoData /></div>);
  } else {
    const createResultsDisplay = (resultSet) => {
      let resultKeyID;
      let resultsDisplay = [];
      let resultsInnerDisplay;
      let additionalResultCount = 0;
      let additionalResultInnerDisplay;
      const additionalResultInterpretations = [];
      let additionalResultInterpretationIndicator;
      let endAccessoryIcons;
      let singleResultHasComment = false;
      let singleResultIsModified = false;
      let singleResultIsUnverified = false;

      if (!resultSet || !resultSet.length) {
        resultKeyID = 'Error';
        resultsDisplay.push(<div key={(`ClinicalResultDisplay-${resultKeyID}`)} className={cx('single-result-display ')}><ResultError /></div>);
      } else {
        resultsDisplay = [];
        additionalResultCount = resultSet.length - 1;
        for (let i = 0; i < resultSet.length; i += 1) {
          const hasStandardResult = resultSet[i].result;
          const hasSystolic = resultSet[i].systolic;
          const hasDiastolic = resultSet[i].diastolic;
          if (hasStandardResult) {
            if (i === 0) {
              const resultItem = resultSet[i];
              if (resultSet[i].hasComment) { singleResultHasComment = true; resultItem.hasComment = false; }
              if (resultSet[i].isModified) { singleResultIsModified = true; resultItem.isModified = false; }
              if (resultSet[i].isUnverified) { singleResultIsUnverified = true; resultItem.isUnverified = false; }
              if (resultSet[i].eventId) resultKeyID = resultSet[i].eventId;
              else if (resultSet[i].id) resultKeyID = resultSet[i].id;
              resultsInnerDisplay = (<ClinicalResult key={(`ClinicalResult-${resultKeyID}`)} resultData={resultItem} hideUnit={hideUnit} isTruncated />);
            } else if (i > 0) {
              const hasInterpretation = !isEmpty(resultSet[i].interpretation) ? resultSet[i].interpretation : null;
              additionalResultInterpretations.push(hasInterpretation);
            }
          } else if (hasSystolic || hasDiastolic) {
            if (i === 0) {
              const resultItem = resultSet[i];
              if (hasSystolic) {
                if (resultSet[i].systolic.hasComment) { singleResultHasComment = true; resultItem.systolic.hasComment = false; }
                if (resultSet[i].systolic.isModified) { singleResultIsModified = true; resultItem.systolic.isModified = false; }
                if (resultSet[i].systolic.isUnverified) { singleResultIsUnverified = true; resultItem.systolic.isUnverified = false; }
              }
              if (hasDiastolic) {
                if (resultSet[i].diastolic.hasComment) { singleResultHasComment = true; resultItem.diastolic.hasComment = false; }
                if (resultSet[i].diastolic.isModified) { singleResultIsModified = true; resultItem.diastolic.isModified = false; }
                if (resultSet[i].diastolic.isUnverified) { singleResultIsUnverified = true; resultItem.diastolic.isUnverified = false; }
              }
              if (resultSet[i].id) resultKeyID = resultSet[i].id;
              else if (hasSystolic && resultSet[i].systolic.eventId) resultKeyID = resultSet[i].systolic.eventId;
              else if (hasDiastolic && resultSet[i].diastolic.eventId) resultKeyID = resultSet[i].diastolic.eventId;
              resultsInnerDisplay = (<ClinicalResultBloodPressure key={(`ClinicalResultBloodPressure-${resultKeyID}`)} resultData={resultItem} hideUnit={hideUnit} isTruncated />);
            } else if (i > 0) {
              const sysInterpretation = !isEmpty(resultSet[i].systolic.interpretation) ? resultSet[i].systolic.interpretation : null;
              const diaInterpretation = !isEmpty(resultSet[i].diastolic.interpretation) ? resultSet[i].diastolic.interpretation : null;
              additionalResultInterpretations.push(sysInterpretation);
              additionalResultInterpretations.push(diaInterpretation);
            }
          }
        }

        if (additionalResultInterpretations.length > 0) {
          if (additionalResultInterpretations.includes('CRITICAL')
            || additionalResultInterpretations.includes('EXTREMEHIGH')
            || additionalResultInterpretations.includes('EXTREMELOW')
            || additionalResultInterpretations.includes('PANICHIGH')
            || additionalResultInterpretations.includes('PANICLOW')
            || additionalResultInterpretations.includes('VABNORMAL')
          ) {
            additionalResultInterpretationIndicator = 'CRITICAL';
          } else if (additionalResultInterpretations.includes('POSITIVE')
            || additionalResultInterpretations.includes('ABNORMAL')
            || additionalResultInterpretations.includes('HIGH')
            || additionalResultInterpretations.includes('LOW')
          ) {
            additionalResultInterpretationIndicator = 'HIGH';
          }
        }

        const additionalResultClassNames = cx([
          'additional-results-display',
          { 'add-end-accessory-space': !(singleResultHasComment || singleResultIsModified || singleResultIsUnverified) },
          { 'interpretation-critical': additionalResultInterpretationIndicator === 'CRITICAL' },
          { 'interpretation-high': additionalResultInterpretationIndicator === 'HIGH' },
        ]);

        if (additionalResultCount > 0) {
          const additionalCountDisplayValue = ((additionalResultCount + 1) > 99)
            ? (<span className={cx(['additional-results-value', 'additional-results-max-value'])}>99+</span>)
            : (<span className={cx('additional-results-value')}>{additionalResultCount + 1}</span>);
          additionalResultInnerDisplay = (
            <div key={(`AdditionalResultsDisplay-${resultKeyID}`)} className={additionalResultClassNames}>
              <div className={cx('additional-results-stack')}>
                {additionalCountDisplayValue}
                {additionalCountDisplayValue}
              </div>
            </div>
          );
        }

        resultsDisplay.push(<div key={(`ClinicalResultDisplay-${resultKeyID}`)} className={cx('single-result-display')}>{resultsInnerDisplay}</div>);
        resultsDisplay.push(additionalResultInnerDisplay);

        const commentIconElement = singleResultHasComment ? (<IconComment className={cx('icon-comment')} />) : null;
        const modifiedIconElement = singleResultIsModified ? (<IconModified className={cx('icon-modified')} />) : null;
        const unverifiedIconElement = singleResultIsUnverified ? (<IconUnverified className={cx('icon-unverified')} />) : null;
        if (singleResultHasComment || singleResultIsModified || singleResultIsUnverified) {
          endAccessoryIcons = (singleResultIsUnverified)
            ? (
              <div key={(`EndAccessoryIcons-${resultDataSet[0].id}`)} className={cx('end-accessory-icons')}>
                <div className={cx('end-accessory-stack')}>
                  {unverifiedIconElement}
                </div>
              </div>
            ) : (
              <div key={(`EndAccessoryIcons-${resultDataSet[0].id}`)} className={cx('end-accessory-icons')}>
                <div className={cx('end-accessory-stack')}>
                  {commentIconElement}
                  {modifiedIconElement}
                </div>
              </div>
            );
        } else {
          endAccessoryIcons = null;
        }
        resultsDisplay.push(endAccessoryIcons);
      }
      return resultsDisplay;
    };

    flowsheetResultCellDisplay = createResultsDisplay(resultDataSet);
  }

  const flowsheetCellClassNames = cx([
    'flowsheet-result-cell',
    { 'padding-standard': paddingStyle === 'standard' },
    { 'padding-compact': paddingStyle === 'compact' },
    customProps.className,
  ]);

  return (
    <div {...customProps} className={flowsheetCellClassNames}>
      {flowsheetResultCellDisplay}
    </div>
  );
};

FlowsheetResultCell.propTypes = propTypes;
FlowsheetResultCell.defaultProps = defaultProps;

export default FlowsheetResultCell;