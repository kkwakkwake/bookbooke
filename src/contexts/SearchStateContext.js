import React, { useState, useEffect } from 'react';

import SearchingContext from './SearchingContext';
import { bookSearch } from '../components/Api';


const SearchStateContext = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  const bookSearchHttpHandler = async (query, reset) => {
    const params = {
      query,
      sort: 'accuracy',
      page: 1,
      size: 15,
    }
    const { data } = await bookSearch(params);

    if (reset) {
      setBooks(data.documents);
    } else {
      setBooks(books.concat(data.documents));
    }
  }

  const searchBook = (text) => {
    setQuery(text);
  }


  useEffect(() => {
    if (query.length > 0) {
      bookSearchHttpHandler(query, true);
    }
  }, [query]);

  return (
    <SearchingContext.Provider
      value={{ books, query, bookSearchHttpHandler, searchBook }}>
      {children}
    </SearchingContext.Provider>
  )
}

export default SearchStateContext;