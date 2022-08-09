import { useNavigate } from "react-router-dom";
import { ItemContainer, ItemSection, ItemImgs, ItemTitle, ItemInfos, ItemText, ItemButton } from './styled';

const SearchItem = ({ title, publisher, thumbnail, authors, contents }) => {
  const navigate = useNavigate();
  const registerNew = () => {
    navigate("/new", {
      state: {
        title,
        publisher,
        thumbnail,
        authors,
        contents,
        editState: false,
      },
    });
  };

  return (
    <ItemContainer onClick={registerNew}>
      <ItemSection>
        <ItemImgs>
          <img src={thumbnail ? thumbnail : process.env.PUBLIC_URL + '/img/holdingbook.png'} alt={title} />
        </ItemImgs>
        <div>
          <ItemTitle>{title}</ItemTitle>
          <ItemInfos>지은이: {authors.length >= 2 ? authors.join(',') : authors}</ItemInfos>
          <ItemInfos>출판사: {publisher}</ItemInfos>
          <ItemText>{`${contents.slice(0, 55)}···`}</ItemText>
        </div>
      </ItemSection>
      <ItemButton onClick={registerNew}></ItemButton>
    </ItemContainer>
  );
};

export default SearchItem;
