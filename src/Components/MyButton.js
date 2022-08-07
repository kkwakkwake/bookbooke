import React from 'react';

import { HeaderBtn } from './styled';

const MyButton = ({ text, onClick }) => {
  return <HeaderBtn onClick={onClick}>{text}</HeaderBtn>
}

export default React.memo(MyButton);