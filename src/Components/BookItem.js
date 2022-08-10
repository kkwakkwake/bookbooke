import React from "react";
import { useNavigate } from "react-router-dom";
import { BookItemContainer, BookItemImg, BookItemWrapper, BookItemStars, BookItemTitle, BookItemAuthor } from './styled';

import Yellows from "../assets/Yellows";
import StarItem from "./StarItem";

const BookItem = ({ id, title, thumbnail, authors, rating }) => {
  const navigate = useNavigate();
  const FixedYellow = Yellows.slice(0, rating);

  return (
    <BookItemContainer onClick={() => navigate(`/detail/${id}`)}>
      <BookItemImg style={{ backgroundImage: `url(${thumbnail})` }} ></BookItemImg>
      <BookItemWrapper >
        <BookItemTitle>{title.length >= 22 ? `${title.slice(0, 22)}···` : title}</BookItemTitle>
        <BookItemAuthor>
          {authors.length >= 2
            ? `${authors.slice(0, 2).join(",")}···`
            : authors}
        </BookItemAuthor>
        <BookItemStars>
          {FixedYellow.map((item) => (
            <StarItem key={item.star_id} {...item} />
          ))}
        </BookItemStars>
      </BookItemWrapper>
    </BookItemContainer>
  );
};

export default React.memo(BookItem);
