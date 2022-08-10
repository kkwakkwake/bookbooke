import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  width: 32rem;
	/* max-width: 100%; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 2.5rem auto;
`;

export const SearchInput = styled.input`
  padding: 2px;
	width: 25rem;
	height: 3rem;
	font-size: 1.8rem;
	font-family: "SUIT";
	border: none;
	background-color: white;
	border-bottom: 3px solid #ffd60a;

  &:focus {
	outline: none;
	background-color: white;
}

	@media (max-width: 480px) {
		font-size: 1.5rem;
	}
`;

export const SearchButton = styled.button`
  width: 5rem;
	height: 3rem;
	border: none;
	border-radius: 5px;
	padding: 0.5rem;
	font-size: 2rem;
	font-weight: bold;
	background-color: #f3dad8;
	cursor: pointer;
	color:black;
`;