import { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { TotalBook } from "../../App";
import BookEditor from "../../components/BookEditor";


const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const bookList = useContext(TotalBook);
  const [selectedBook, setSelectedBook] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `bookbooke | ${parseInt(id) + 1}번 책 수정 중..`;
  }, []);

  useEffect(() => {
    if (bookList.length >= 1) {
      const targetBook = bookList.find(
        (item) => parseInt(item.id) === parseInt(id)
      );

      if (targetBook) {
        setSelectedBook(targetBook);
      } else {
        alert("존재하지 않는 독서기록입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [bookList, id, navigate]);

  return (
    <div>
      {selectedBook && <BookEditor editState={true} selectedBook={selectedBook} />}
    </div>
  );
};

export default Edit;
