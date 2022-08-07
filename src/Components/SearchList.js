import { ListContainer } from './styled';

import SearchItem from './SearchItem';

const SearchList = ({ books }) => {
  if (!books) {
    return <p>검색결과에 일치하는 도서가 존재하지 않습니다.</p>
  } else {
    return <ListContainer>
      {books.map((item, idx) => <SearchItem key={idx} {...item} />)}
    </ListContainer>
  }
}

export default SearchList;