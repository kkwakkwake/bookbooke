import styled from 'styled-components';

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const DetailTitle = styled.h2`
  margin:10px auto;
`;

export const DetailInfos = styled.p`
  margin: 10px auto;
	color: gray;
`;
export const DetailStars = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const DetailContentWrapper = styled.div`
  width: 100%;
  background-color: #fefae0;
	border-radius: 10px;
	word-break: keep-all;
	overflow-wrap: break-word;
`;

export const DetailContent = styled.p`
  padding: 10px;
  text-align: left;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
`;