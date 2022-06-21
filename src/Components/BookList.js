import React from "react";
import styled from 'styled-components';

import BookItem from "./BookItem";

const BookListCtl = styled.div`
margin-top: 50px;
display: grid;
grid-template-columns: repeat(3, 33%);
`;

const BookList = ({ bookList }) => {
  return (
    <BookListCtl className="BookList">
      {bookList && bookList.map((book) => <BookItem key={book.id} {...book} />)}
    </BookListCtl>
  );
};

export default React.memo(BookList);
