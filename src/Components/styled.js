import styled from 'styled-components';
import { FaRegCheckCircle } from "react-icons/fa";

//BookEditor
export const BookEditorWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`;

export const BookTitleInfo = styled.h3`
  margin:1rem auto;
  font-size:1.6rem;
`;

export const BookEditorImg = styled.img`
  margin: 1rem auto;
`;

export const BookInfo = styled.h3`
  margin: 1rem auto;
	color: gray;
  font-size:1.4rem;
  font-weight:300 ;
`;

export const BookEditorText = styled.textarea`
  margin-top: 1rem;
	box-sizing: border-box;
	font-family: "SUIT";
	width: 100%;
	min-height: 30rem;
	resize: vertical;
	border: none;
	border-radius: 10px;
  background-color: #fefae0;

	padding: 1rem;
	font-size: 1.5rem;
	line-height: 1.5; 
`;

//BookItem
export const BookItemContainer = styled.div`
	display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  cursor: pointer;
  flex-shrink:1;
  /* padding:1.5rem; */
`;

export const BookItemImg = styled.div`
	/* width: 12em;
  height: 15em; */
  width: 13rem;
  height: 18rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media(min-width:480px) and (max-width:640px) {
    &{
      width: 12rem;
      height: 15rem;
    }
  } 

  @media (max-width: 480px) {
	& {
  width: 11rem;
  height: 13rem;
	}
}
`;

export const BookItemWrapper = styled.div`
	display: flex;
  width: 90%;
	/* height: 10rem; */
  flex-direction: column;
	justify-content: space-between;
  align-items: flex-start; 
  padding-right: 1rem;
  padding-left: 1rem;
  flex-basis: 12rem;

  @media(min-width:480px) and (max-width:640px) {
    &{
       padding-right:1.5rem;
       padding-left: 1.5rem;
    }
  } 
`;

export const BookItemTitle = styled.h3`
  font-size: 1.6rem;
  margin-top: 0.8rem;

  @media (max-width: 480px) {
	& {
  font-size: 1.3rem;
	}
}
`;

export const BookItemAuthor = styled.h3`
  font-size: 1.4rem;
  color: gray;
  font-weight: 500;

  @media (max-width: 480px) {
	& {
  font-size: 1.2rem;
	}
}
`;

export const BookItemStars = styled.div`
	display: flex;
  justify-content: center;

  img{
    width: 2rem;
  }

  @media (max-width: 480px) {
  img{
    width: 1.5rem;
  }
}
`;

export const BookListContainer = styled.div`
	margin-top:3rem;
	display: grid;
	grid-template-columns: repeat(3, 33%);
  gap:1.5rem 0.3rem ;
`;

//SearchItem
export const ItemContainer = styled.div`
	display: flex;
	border:  none;
	background-color: #fefae0;
	padding: 0.7rem;
	margin-bottom: 1.5rem;
	border-radius: 1rem;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  position: relative;
`;

export const ItemSection = styled.section`
	display: flex;
  margin-right: 3rem;
`;

export const ItemImgs = styled.div`
	display: flex;
	align-items: center;
  justify-content: center;
	margin-right: 2rem;
`;

export const ItemTitle = styled.h3`
	margin-bottom: 1rem;
  font-size: 2rem;

  @media (max-width: 480px) {
		font-size: 1.7rem;
	}
`;

export const ItemInfos = styled.p`
	margin-bottom: 0.2rem;
  margin-top: 0;
  font-size: 1.5rem;
  color: gray;
  font-weight: 500;

  @media (max-width: 480px) {
		font-size: 1.3rem;
	}
`;
export const ItemText = styled.div`
	padding-top: 0.5rem;
  font-size: 1.5rem;
  color: gray;

  @media (max-width: 480px) {
		font-size: 1.2rem;
	}
`;

export const ItemButton = styled(FaRegCheckCircle)`
  position: absolute;
  top:1rem;
  right:1.5rem;
  font-size: large;
  cursor: pointer;
  color:black;
`;

//SearchList 
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

//MyButton
export const HeaderBtn = styled.button`
	padding: 1rem 1.5rem;
  font-size:1.8rem;
  font-weight: bold;
  background-color: #ffd60a;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  margin-left:0.7rem;
  color:black;

  @media (max-width: 480px) {
	& {
    padding: 0.8rem 1.2rem;
    font-size: 1.6rem;
    margin-left:0.3rem;
	}
}
`;

//MyHeader
export const HeaderContainer = styled.div`
	height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderChild = styled.div`
	font-size: 2.5rem;
  font-weight: bold;
  font-family: "Hahmlet";

  @media (max-width: 480px) {
	& {
  font-size: 2rem;
	}
}
`;

//YearList
export const YearSelection = styled.select`
  border: none;
  font-size: 3.2rem;
  cursor: pointer;
  font-family: "Hahmlet";
  background-color: #fff;
  color:black;

  &:focus {
    outline:none;
  }

  @media (max-width: 480px) {
	& {
  font-size: 2rem;
	}
}
`;

export const YearOption = styled.option`
  font-size: 1.5rem;
  text-align: right;

  @media (max-width: 480px) {
	& {
  font-size: 1rem;
	}
}
`;

//noResult
export const NoResultContainer = styled.div`
  width: 60%;
  margin:0 auto;
  text-align:center;

  h3 {
    font-weight: 500;
    font-size: 1.2rem;
  }
`;