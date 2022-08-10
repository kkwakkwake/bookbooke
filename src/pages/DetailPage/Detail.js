import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DetailContainer, DetailTitle, DetailInfos, DetailStars, DetailContentWrapper, DetailContent } from './styled';

import { TotalBook } from "../../App";
import { MyBookStateContext } from "../../App";

import MyButton from "../../components/MyButton";
import MyHeader from "../../components/MyHeader";
import Stars from "../../assets/Stars";
import Loading from '../../components/Loading';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const books = useContext(TotalBook);
  const { onRemove } = useContext(MyBookStateContext);

  const [book, setBook] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `bookbooke | ${parseInt(id) + 1}번 책`;
  }, []);

  const goToEdit = () => {
    navigate(`/edit/${id}`);
  };

  const goToDelete = () => {
    if (window.confirm("해당 기록을 삭제하겠습니까?")) {
      onRemove(id);
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (books.length >= 1) {
      //filter배열로 나와서 0번째 인덱스 표기 필수
      //그래서 find로 찾음
      const targetBook = books.find(
        (book) => parseInt(book.id) === parseInt(id)
      );
      if (targetBook) {
        setBook(targetBook);
      } else {
        alert("존재하지 않는 페이지입니다! 홈화면으로 돌아갑니다.");
        navigate("/", { replace: true });
      }
    }
  }, [books, id, navigate]);

  if (!book) {
    return <Loading />;
  } else {
    //책이 존재할 때
    const { title, authors, rating, content, date, thumbnail, publisher } =
      book;
    const offset = new Date().getTimezoneOffset() * 60000;
    const writtenDate = new Date(parseInt(date) - parseInt(offset))
      .toISOString()
      .slice(0, 10);
    if (rating) {
      for (let i = 0; i < rating; i++) {
        Stars[i].star_img = process.env.PUBLIC_URL + "/img/yellow.png";
      }
      for (let j = rating; j < 5; j++) {
        Stars[j].star_img = process.env.PUBLIC_URL + "/img/gray2.png";
      }
    }

    return (
      <>
        <MyHeader
          leftChild={<MyButton text={"<"} onClick={() => navigate("/")} />}
          textHead={writtenDate}
          rightChild={
            <div>
              <MyButton text={"수정"} onClick={goToEdit} />
              <MyButton text={"삭제"} onClick={goToDelete} />
            </div>
          }
        />
        <DetailContainer>
          <DetailTitle>{title}</DetailTitle>
          <DetailInfos>지은이: {authors.length >= 2 ? authors.join(",") : authors}</DetailInfos>
          <DetailInfos>출판사: {publisher}</DetailInfos>
          <img src={thumbnail} alt={title} />
          <DetailStars>
            {Stars.map((item) => (
              <img
                value={rating}
                alt='ratingStars'
                key={item.star_id}
                src={item.star_img}
              />
            ))}
          </DetailStars>
          <DetailContentWrapper>
            <DetailContent>{content}</DetailContent>
          </DetailContentWrapper>
        </DetailContainer>
      </>
    );
  }
};

export default Detail;
