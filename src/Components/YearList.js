import React from 'react';

import styled from 'styled-components';

const StyledYear = styled.select`
  border: none;
  width: 110px;
  font-size: 32px;
  cursor: pointer;
  font-family: "Hahmlet";

  &:focus {
    outline:none;
  }

  & option {
    font-size: 15px;
    text-align: right;
  }

  & option:focus {
    outline: none;
  }

`;

const YearList = React.memo(({ list, onChange }) => {
  return (
    <StyledYear onChange={onChange}>
      {list.map((year, idx) => (
        <option key={idx}>{year.value}</option>
      ))}
    </StyledYear>
  );
});

export default YearList;