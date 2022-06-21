import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import SearchingContext from '../contexts/SearchingContext';
import SearchList from '../Components/SearchList';
import MyHeader from '../Components/MyHeader';
import MyButton from '../Components/MyButton';
import { BiSearchAlt } from "react-icons/bi";

const SearchCtl = styled.div`
& .Search_input {
	width: 320px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 25px auto;
}

& .Search_input input {
	padding: 2px;
	width: 250px;
	height: 30px;
	font-size: 18px;
	font-family: "SUIT";
	border: none;
	background-color: white;
	border-bottom: 3px solid #ffd60a;
}

& .Search_input input:focus {
	outline: none;
	background-color: white;
}

& .searchBtn {
	width: 50px;
	height: 30px;
	border: none;
	border-radius: 5px;
	padding: 5px;
	font-size: 20px;
	font-weight: bold;
	background-color: #f3dad8;
	cursor: pointer;
}
`;

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

  return <SearchCtl className='Search'>
    <MyHeader leftChild={<MyButton text={'<'} onClick={() => navigate(-1)} />}
      textHead={'책 검색 중...'} />
    <div className='Search_input'>
      <input type='search' autoComplete='off' placeholder='책 제목을 입력해주세요!' name='query' onKeyDown={onEnter} onChange={onTextUpdate} value={text} />
      <button className='searchBtn' onClick={handleSearchClick}><BiSearchAlt /></button>
    </div>
    {books.length >= 1 && <SearchList books={books} />}
  </SearchCtl>
}

export default Search;