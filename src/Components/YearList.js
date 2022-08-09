import React from 'react';

import { YearSelection, YearOption } from './styled';

const YearList = ({ list, onChange }) => {
  return (
    <YearSelection onChange={onChange}>
      {list.map((year, idx) => (
        <YearOption key={idx}>{year.value}</YearOption>
      ))}
    </YearSelection>
  );
};

export default React.memo(YearList);