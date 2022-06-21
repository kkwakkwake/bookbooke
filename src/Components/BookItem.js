import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

import Yellows from "../assets/Yellows";
import StarItem from "./StarItem";

const BookItemCtl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;
  cursor: pointer;  

  & img {
    width: 130px;
  }

  & .BookItem_info {
    display: flex;
    width: 70%;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  & .BookItem_stars {
    display: flex;
    justify-content: center;
  }

  & .BookItem_stars img {
    width: 20px;
  }
  
`;

const BookItem = ({ id, title, thumbnail, authors, rating }) => {
  const navigate = useNavigate();
  const FixedYellow = Yellows.slice(0, rating);

  return (
    <BookItemCtl className="BookItem" onClick={() => navigate(`/detail/${id}`)}>
      <img src={thumbnail} alt={title} width="100px" />
      <div className="BookItem_info">
        <h4>{title.length >= 22 ? `${title.slice(0, 22)}···` : title}</h4>
        <p>
          {authors.length >= 2
            ? `${authors.slice(0, 2).join(",")}···`
            : authors}
        </p>
        <div className="BookItem_stars">
          {FixedYellow.map((item) => (
            <StarItem key={item.star_id} {...item} />
          ))}
        </div>
      </div>
    </BookItemCtl>
  );
};

export default React.memo(BookItem);
