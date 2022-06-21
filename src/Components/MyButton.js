import React from 'react';

import styled from 'styled-components';

const HeaderBtn = styled.button`
  padding: 10px 15px;
  font-size: 18px;
  font-weight: bold;
  background-color: #ffd60a;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  margin-left:7px;
`;

const MyButton = ({ text, onClick }) => {
  return <HeaderBtn className='MyButton' onClick={onClick}>{text}</HeaderBtn>
}

export default React.memo(MyButton);