import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const DetailTitle = styled.h2`
  margin:1.5rem auto;
  font-size: 1.8rem;
`;

export const DetailInfos = styled.h3`
  font-weight: 300;
  margin: 1rem auto;
	color: gray;
  font-size: 1.5rem;
`;
export const DetailStars = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  img{
    width: 2rem;
  }
`;

export const DetailContentWrapper = styled.div`
  width: 100%;
  background-color: #fefae0;
	border-radius: 10px;
	word-break: keep-all;
	overflow-wrap: break-word;
`;

export const DetailContent = styled.p`
  padding: 1rem;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
`;