import styled from 'styled-components';

import SearchItem from './SearchItem';

const SearchListCtrl = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const SearchList = ({ books }) => {
  if (!books) {
    return <p>검색결과에 일치하는 도서가 존재하지 않습니다.</p>
  } else {
    return <SearchListCtrl className='SearchList'>
      {books.map((item, idx) => <SearchItem key={idx} {...item} />)}
    </SearchListCtrl>
  }
}

export default SearchList;