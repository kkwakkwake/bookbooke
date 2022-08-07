import React from "react";
import { BookListContainer } from './styled';

import BookItem from "./BookItem";

const BookList = ({ bookList }) => {
  return (
    <BookListContainer>
      {bookList && bookList.map((book) => <BookItem key={book.id} {...book} />)}
    </BookListContainer>
  );
};

export default React.memo(BookList);
