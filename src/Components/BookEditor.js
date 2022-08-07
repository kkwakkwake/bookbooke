import { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BookEditorWrapper, BookTitleInfo, BookInfo, BookEditorImg, BookEditorText } from './styled';

import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import { MyBookStateContext } from "../App";
import Stars from "../assets/Stars";


const BookEditor = ({ selectedBook, editState, newBook }) => {
  const { onCreate, onEdit } = useContext(MyBookStateContext);
  const navigate = useNavigate();

  const [origindata, setOrigindata] = useState({});

  const contentRef = useRef();

  useEffect(() => {
    if (editState) {
      if (selectedBook) {
        setOrigindata({ ...selectedBook });
        for (let i = 0; i < origindata.rating; i++) {
          Stars[i].star_img = process.env.PUBLIC_URL + "/img/yellow.png";
        }
        for (let j = origindata.rating; j < 5; j++) {
          Stars[j].star_img = process.env.PUBLIC_URL + "/img/gray2.png";
        }
      }
    } else {
      if (newBook) {
        setOrigindata({
          ...newBook,
          rating: 3,
          content: "",
        });

        for (let i = 0; i < 3; i++) {
          Stars[i].star_img = process.env.PUBLIC_URL + "/img/yellow.png";
        }
        for (let j = 3; j < 5; j++) {
          Stars[j].star_img = process.env.PUBLIC_URL + "/img/gray2.png";
        }
      }
    }
  }, [editState]);

  const handleEdit = () => {
    const { title, authors, thumbnail, content, rating, publisher } =
      origindata;
    if (origindata.content.length < 5) {
      contentRef.current.focus();
      return;
    }
    if (
      window.confirm(
        editState ? "독서기록을 수정하겠습니까?" : "독서기록이 추가됩니다!"
      )
    ) {
      if (!editState) {
        onCreate(title, authors, thumbnail, rating, content, publisher);
      } else {
        onEdit(
          origindata.id,
          title,
          authors,
          thumbnail,
          rating,
          content,
          publisher,
          origindata.date
        );
      }
    }
    navigate("/", { replace: true });
  };

  const onValueChange = (e) => {
    setOrigindata({
      ...origindata,
      [e.target.name]: e.target.value,
    });
    console.log(origindata);
  };

  console.log(origindata);

  const handleStar = (e) => {
    const order = parseInt(e.target.alt);
    const starArr = e.target.parentNode.childNodes;
    const yellow = process.env.PUBLIC_URL + "/img/yellow.png";
    const gray = process.env.PUBLIC_URL + "/img/gray2.png";

    if (order < origindata.rating) {
      for (let j = order; j < origindata.rating; j++) {
        starArr[j].src = gray;
      }
    }
    for (let i = 0; i < order; i++) {
      starArr[i].src = yellow;
    }

    setOrigindata({
      ...origindata,
      [e.target.name]: parseInt(order),
    });
  };

  console.log(origindata.authors);

  return (
    <>
      <MyHeader
        leftChild={<MyButton text={"<"} onClick={() => navigate(-1)} />}
        rightChild={
          editState ? (
            <MyButton text="수정완료" onClick={handleEdit} />
          ) : (
            <MyButton text="서재에 추가" onClick={handleEdit} />
          )
        }
      />
      <section>
        <BookEditorWrapper>
          <BookTitleInfo>{origindata.title}</BookTitleInfo>
          <BookInfo>
            지은이 :
            {origindata.authors &&
              origindata.authors.length &&
              origindata.authors.join(",")}
          </BookInfo>
          <BookInfo>출판사 : {origindata.publisher}</BookInfo>
          <BookEditorImg src={origindata.thumbnail} alt="1" />
          <div>
            {Stars.map((item) => (
              <BookEditorImg
                name="rating"
                value={origindata.rating}
                onClick={handleStar}
                alt={item.star_id}
                key={item.star_id}
                src={item.star_img}
              />
            ))}
          </div>
          <BookEditorText
            name="content"
            value={origindata.content}
            ref={contentRef}
            onChange={onValueChange}
          />
        </BookEditorWrapper>
      </section>
    </>
  );
};

export default BookEditor;
