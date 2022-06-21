import axios from 'axios';

const DAUM_KEY = `4c05068b551059a91563b4015d008313`;

const Kakao = axios.create({
  baseURL: `https://dapi.kakao.com`,
  headers: {
    Authorization: `KakaoAK ${DAUM_KEY}`,
  },
});

export const bookSearch = (params) => {
  return Kakao.get('/v3/search/book?target=title', { params });
};

export const book = () => {
  return Kakao.get('/v3/search/book?target=title');
};