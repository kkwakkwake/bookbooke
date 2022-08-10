import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

import BookEditor from "../../components/BookEditor";

const New = () => {
  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `bookbooke | 책 추가 중..`;
  }, []);

  return (
    <>
      <BookEditor newBook={state} />
    </>
  );
};

export default New;
