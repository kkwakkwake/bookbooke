import { useNavigate } from "react-router-dom";
import { ItemContainer, ItemSection, ItemImgs, ItemTitle, ItemInfos, ItemText, ItemButton } from './styled';

import { FaRegCheckCircle } from "react-icons/fa";

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
        <ItemImgs >
          <img src={thumbnail} alt={title} />
        </ItemImgs>
        <div>
          <ItemTitle>{title}</ItemTitle>
          <ItemInfos>지은이: {authors.length >= 2 ? authors.join(',') : authors}</ItemInfos>
          <ItemInfos>출판사: {publisher}</ItemInfos>
          <ItemText>{`${contents.slice(0, 55)}···`}</ItemText>
        </div>
        <ItemButton>
          <FaRegCheckCircle onClick={registerNew} />
        </ItemButton>
      </ItemSection>
    </ItemContainer>
  );
};

export default SearchItem;
