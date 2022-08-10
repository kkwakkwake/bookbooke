import { NoResultContainer } from './styled';

const NoResult = () => {
  return (
    <NoResultContainer>
      <img src={process.env.PUBLIC_URL + '/img/holdingbook.png'} alt='책을 추가해주세요.' />
      <h3>'책 추가' 버튼을 눌러 책을 추가해보세요!</h3>
    </NoResultContainer>
  );
}

export default NoResult;