import styled from 'styled-components';

//BookEditor
export const BookEditorWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`;

export const BookTitleInfo = styled.h2`
    margin:10px auto;
`;

export const BookEditorImg = styled.img`
  margin: 10px auto;
`;

export const BookInfo = styled.p`
  margin: 10px auto;
	color: gray;
`;

export const BookEditorText = styled.textarea`
  margin-top: 20px;
	box-sizing: border-box;
	font-family: "SUIT";
	width: 100%;
	min-height: 300px;
	resize: vertical;
	border: none;
	border-radius: 10px;
  background-color: #fefae0;

	padding: 10px;
	font-size: 18px;
	line-height: 1.5; 
`;

//BookItem
export const BookItemContainer = styled.div`
	display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;
  cursor: pointer;  
`;

export const BookItemImg = styled.img`
	width: 130px;
`;

export const BookItemWrapper = styled.div`
	display: flex;
  width: 70%;
	height: 100px;
  flex-direction: column;
	justify-content: space-between;
  align-items: flex-start; 
  gap: 5px;
`;

export const BookItemStars = styled.div`
	display: flex;
  justify-content: center;
`;

export const BookListContainer = styled.div`
	margin-top: 50px;
	display: grid;
	grid-template-columns: repeat(3, 33%);
`;

//SearchItem
export const ItemContainer = styled.div`
	display: flex;
	border: 1px solid none;
	background-color: #fefae0;
	padding: 7px;
	margin-bottom: 15px;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;

export const ItemSection = styled.section`
	display: flex;
`;

export const ItemImgs = styled.div`
	display: flex;
	align-items: center;
	margin-right: 20px;
`;

export const ItemTitle = styled.h3`
	margin-bottom: 10px;
`;

export const ItemInfos = styled.p`
	margin-bottom: 2px;
  margin-top: 0;
  font-size: 15px;
`;
export const ItemText = styled.div`
	padding-top: 5px;
  font-size: 15px;
`;

export const ItemButton = styled.div`
	width: 60px;
	font-size: 20px;
	cursor: pointer;
	margin-top: 10px;
	display: flex;
	justify-content: space-around;
`;

//SearchList 
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

//MyButton
export const HeaderBtn = styled.button`
	padding: 10px 15px;
  font-size: 18px;
  font-weight: bold;
  background-color: #ffd60a;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  margin-left:7px;
`;

//MyHeader
export const HeaderContainer = styled.div`
	height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderChild = styled.div`
	font-size: 25px;
  font-weight: bold;
  font-family: "Hahmlet";
`;

//YearList
export const YearSelection = styled.select`
  border: none;
  width: 110px;
  font-size: 32px;
  cursor: pointer;
  font-family: "Hahmlet";

  &:focus {
    outline:none;
  }
`;

export const YearOption = styled.option`
  font-size: 15px;
  text-align: right;
`;