import React from 'react';

import styled from 'styled-components';

const Header = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .textHead {
    font-size: 25px;
    font-weight: bold;
    font-family: "Hahmlet";
  }
`;

const MyHeader = ({ leftChild, textHead, rightChild }) => {
  return <Header className='MyHeader'>
    <div className='leftChild'>{leftChild}</div>
    <div className='textHead'>{textHead}</div>
    <div className='rightChild'>{rightChild}</div>
  </Header>
}

export default React.memo(MyHeader);