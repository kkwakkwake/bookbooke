import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchInputWrapper, SearchInput, SearchButton } from './styled';

import SearchingContext from '../../contexts/SearchingContext';
//import SearchingContext from '../../contexts/SearchStateContext';
import SearchList from '../../components/SearchList';
import MyHeader from '../../components/MyHeader';
import MyButton from '../../components/MyButton';
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  const { searchBook, books } = useContext(SearchingContext);
  const navigate = useNavigate();

  const [text, setText] = useState('');
  const [searching, setSearching] = useState(false);

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      searchBook(text);
      setSearching(true);
    }
  };

  const onTextUpdate = (e) => {
    setText(e.target.value);
  };

  const handleSearchClick = () => {
    searchBook(text);
    setSearching(true);
  };

  useEffect(() => {
    //검색기록이 있으면 (books배열에 아이템이 존재하면) 
    //이전 검색 기록이 나오는데, 그걸 막아주기 위해서 사용함
    setSearching(false);
  }, []);

  return (
    <>
      <MyHeader leftChild={<MyButton text={'<'} onClick={() => navigate(-1)} />}
        textHead={'책 검색 중...'} />
      <SearchInputWrapper>
        <SearchInput
          type='search'
          autoComplete='off'
          placeholder='책 제목을 입력해주세요!'
          name='query'
          onKeyDown={onEnter}
          onChange={onTextUpdate}
          value={text} />
        <SearchButton
          onClick={handleSearchClick}><BiSearchAlt /></SearchButton>
      </SearchInputWrapper>
      {books.length >= 1 && searching ? <SearchList books={books} /> : null}
    </>)
}

export default Search;