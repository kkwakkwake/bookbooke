import React from "react";
import { useNavigate } from "react-router-dom";
import { BookItemContainer, BookItemImg, BookItemWrapper, BookItemStars } from './styled';

import Yellows from "../assets/Yellows";
import StarItem from "./StarItem";

const BookItem = ({ id, title, thumbnail, authors, rating }) => {
  const navigate = useNavigate();
  const FixedYellow = Yellows.slice(0, rating);

  return (
    <BookItemContainer onClick={() => navigate(`/detail/${id}`)}>
      <BookItemImg src={thumbnail} alt={title} width="100px" />
      <BookItemWrapper >
        <h4>{title.length >= 22 ? `${title.slice(0, 22)}···` : title}</h4>
        <p>
          {authors.length >= 2
            ? `${authors.slice(0, 2).join(",")}···`
            : authors}
        </p>
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
