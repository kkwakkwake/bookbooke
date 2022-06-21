import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

import { FaRegCheckCircle } from "react-icons/fa";

const SearchItemCtrl = styled.div`
display: flex;
border: 1px solid none;
background-color: #fefae0;
padding: 7px;
margin-bottom: 15px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;

const Section = styled.section`
display: flex;
`;

const Image = styled.div`
display: flex;
align-items: center;
margin-right: 20px;
`;

const Detail = styled.div`
  & h3 {
    margin-bottom: 10px;
  }

  & p {
    margin-bottom: 2px;
    margin-top: 0;
    font-size: 15px;
  }

  & div {
    padding-top: 5px;
    font-size: 15px;
  }
`;

const SectionBtn = styled.div`
width: 60px;
font - size: 20px;
cursor: pointer;
margin - top: 10px;
display: flex;
justify - content: space - around;
`;



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
    <SearchItemCtrl className="SearchItem" onClick={registerNew}>
      <Section>
        <Image className="section_img">
          <img src={thumbnail} alt={title} />
        </Image>
        <Detail className="section_detail">
          <h3>{title}</h3>
          <p>지은이: {authors.length >= 2 ? authors.join(',') : authors}</p>
          <p>출판사: {publisher}</p>
          <div>{`${contents.slice(0, 55)}···`}</div>
        </Detail>
        <SectionBtn className="section_btn">
          <FaRegCheckCircle onClick={registerNew} />
        </SectionBtn>
      </Section>
    </SearchItemCtrl>
  );
};

export default SearchItem;
