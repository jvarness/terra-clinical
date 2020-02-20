# Terra Clinical Flowsheet Result Cell

The Clinical Result is a standardized view for single result values added to a Patient's Medical Chart. The flowsheet result cell is specifically for the grid display of a result collection, and can handle displaying an indication of multiple results.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
```
$ npm install terra-clinical-result
```

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
<!-- AUTO-GENERATED-CONTENT:END -->

## Component Features

* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
* [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)

## Usage Guide

The flowsheet cell for clinical results is constructed by providing the same structured object as the clinical result in an array, allowing for multiple results to be indicated in the same time cell.

Currently the Flowsheet expects an array of one or more results - and if there are multiple, it will display the first in the array, with an indication of additional results. Updates are in progress to also look at the performedDateTime value if provided to evaluate which result is the most recent to appropriately display, regardless of which order index position in the array it is.


```jsx
  /**
   *  A set of clinical results.                                                          .
   */
  resultDataSet: PropTypes.arrayOf(PropTypes.shape({
    /**
     *  A single clinical result or blood pressure result.
     */
    resultData: observationPropShape,
  })),
```


An example of a single clinical result value:
```jsx
import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';

const singleResultValue = [
  {
    eventId: '1574537491',
    result: {
      value: '101.9',
      unit: 'degC',
    },
    interpretation: 'CRITICAL',
    type: 'NUMERIC',
    performedDateTime: '2019-11-23T13:31:31-06:00',
    updateDateTime: '2019-11-23T13:31:31-06:00',
    isModified: true,
    hasComment: true,
    isUnverified: true,
    conceptDisplay: 'Temperature Oral',
    datetimeDisplay: 'Nov 23, 2019 13:31:31',
  },
];

export default () => <FlowsheetResultCell resultDataSet={singleResultValue} />;

```


An example of multiple clinical blood pressure result values:
```jsx
import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const multipleResultBPValues = [
  {
    id: '1577895000-1',
    systolic: {
      eventId: '1577895000-1.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'HIGH',
      performedDateTime: '2020-01-01T10:10:00-06:00',
      updateDateTime: '2020-01-01T10:10:00-06:00',
      isModified: true,
      hasComment: true,
      resultDateTime: '01/01/2020 10:10:00',
    },
    diastolic: {
      eventId: '1577895000-1.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'LOW',
      performedDateTime: '2020-01-01T10:10:00-06:00',
      updateDateTime: '2020-01-01T10:10:00-06:00',
      isModified: true,
      hasComment: true,
      resultDateTime: '01/01/2020 10:10:00',
    },
  },
  {
    id: '1577895000-2',
    systolic: {
      eventId: '1577895000-2.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'CRITICAL',
      performedDateTime: '2020-01-01T10:10:00-06:00',
      updateDateTime: '2020-01-01T10:10:00-06:00',
      isModified: true,
      hasComment: true,
      resultDateTime: '01/01/2020 10:10:00',
    },
    diastolic: {
      eventId: '1577895000-2.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      performedDateTime: '2020-01-01T10:10:00-06:00',
      updateDateTime: '2020-01-01T10:10:00-06:00',
      isModified: true,
      hasComment: true,
      resultDateTime: '01/01/2020 10:10:00',
    },
  },
  {
    id: '1577895000-3',
    systolic: {
      eventId: '1577895000-3.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'CRITICAL',
      performedDateTime: '2020-01-01T10:10:00-06:00',
      updateDateTime: '2020-01-01T10:10:00-06:00',
      isModified: true,
      hasComment: true,
      resultDateTime: '01/01/2020 10:10:00',
    },
    diastolic: {
      eventId: '1577895000-3.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      performedDateTime: '2020-01-01T10:10:00-06:00',
      updateDateTime: '2020-01-01T10:10:00-06:00',
      isModified: true,
      hasComment: true,
      resultDateTime: '01/01/2020 10:10:00',
    },
  },
];

export default () => <FlowsheetResultCell resultDataSet={multipleResultBPValues} hideUnit />;

```