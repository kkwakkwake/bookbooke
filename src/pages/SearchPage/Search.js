import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchInputWrapper, SearchInput, SearchButton } from './styled';

import SearchingContext from '../../contexts/SearchingContext';
import SearchList from '../../components/SearchList';
import MyHeader from '../../components/MyHeader';
import MyButton from '../../components/MyButton';
import { BiSearchAlt } from "react-icons/bi";



const Search = () => {
  const { searchBook } = useContext(SearchingContext);
  const navigate = useNavigate();
  const { books } = useContext(SearchingContext);

  const [text, setText] = useState('');
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      searchBook(text);
    }
  };

  const onTextUpdate = (e) => {
    setText(e.target.value);
  }

  const handleSearchClick = () => {
    searchBook(text);
  };

  return (
    <>
      <MyHeader leftChild={<MyButton text={'<'} onClick={() => navigate(-1)} />}
        textHead={'책 검색 중...'} />
      <SearchInputWrapper>
        <SearchInput type='search' autoComplete='off' placeholder='책 제목을 입력해주세요!' name='query' onKeyDown={onEnter} onChange={onTextUpdate} value={text} />
        <SearchButton className='searchBtn' onClick={handleSearchClick}><BiSearchAlt /></SearchButton>
      </SearchInputWrapper>
      {books.length >= 1 && <SearchList books={books} />}
    </>)
}

export default Search;