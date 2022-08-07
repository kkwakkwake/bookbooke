import React from 'react';

import { HeaderContainer, HeaderChild } from './styled';

const MyHeader = ({ leftChild, textHead, rightChild }) => {
  return <HeaderContainer >
    <HeaderChild>{leftChild}</HeaderChild>
    <HeaderChild>{textHead}</HeaderChild>
    <HeaderChild>{rightChild}</HeaderChild>
  </HeaderContainer>
}

export default React.memo(MyHeader);