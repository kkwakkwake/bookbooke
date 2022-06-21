import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from 'styled-components';

import { TotalBook } from "../App";
import { MyBookStateContext } from "../App";

import MyButton from "../Components/MyButton";
import MyHeader from "../Components/MyHeader";
import Stars from "../assets/Stars";

const DetailInfo = styled.div`
display: flex;
flex-direction: column;
text-align: center;
align-items: center;

& h2{
  margin:10px auto;
}

& p {
  margin: 10px auto;
	color: gray;
}

& div {
  margin-top: 20px;
}
`;

const DetailContent = styled.div`
width: 100%;
background-color: #fefae0;
	border-radius: 10px;
	word-break: keep-all;
	overflow-wrap: break-word;

  & p {
    padding: 10px;
    text-align: left;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
  }
`;

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useContext(TotalBook);
  const { onRemove } = useContext(MyBookStateContext);

  const [book, setBook] = useState();

  const goToEdit = () => {
    navigate(`/edit/${id}`);
    //console.log(book);
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
    return <div>로딩 중 입니다...</div>;
  } else {
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
      <div className="Detail">
        <MyHeader
          className="MyHeader"
          leftChild={<MyButton text={"<"} onClick={() => navigate("/")} />}
          textHead={writtenDate}
          rightChild={
            <div>
              <MyButton text={"수정"} onClick={goToEdit} />
              <MyButton text={"삭제"} onClick={goToDelete} />
            </div>
          }
        />
        <DetailInfo className="Detail_Infos">
          <h2>{title}</h2>
          <p>지은이: {authors.length >= 2 ? authors.join(",") : authors}</p>
          <p>출판사: {publisher}</p>
          <img src={thumbnail} alt={title} />
          <div>
            {Stars.map((item) => (
              <img
                value={rating}
                alt={item.star_id}
                key={item.star_id}
                src={item.star_img}
              />
            ))}
          </div>
          <DetailContent className="Detail_info_content">
            <p>{content}</p>
          </DetailContent>
        </DetailInfo>
      </div>
    );
  }
};

export default Detail;
