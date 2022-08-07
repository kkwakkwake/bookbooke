import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  width: 320px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 25px auto;
`;

export const SearchInput = styled.input`
  padding: 2px;
	width: 250px;
	height: 30px;
	font-size: 18px;
	font-family: "SUIT";
	border: none;
	background-color: white;
	border-bottom: 3px solid #ffd60a;

  &:focus {
	outline: none;
	background-color: white;
}
`;

export const SearchButton = styled.button`
  width: 50px;
	height: 30px;
	border: none;
	border-radius: 5px;
	padding: 5px;
	font-size: 20px;
	font-weight: bold;
	background-color: #f3dad8;
	cursor: pointer;
`;