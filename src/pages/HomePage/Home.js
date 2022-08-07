import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

import BookList from "../../components/BookList";
import MyHeader from "../../components/MyHeader";
import MyButton from "../../components/MyButton";
import YearList from '../../components/YearList';
import { TotalBook } from "../../App";


const Home = () => {
  const navigate = useNavigate();
  const bookList = useContext(TotalBook);
  const [yearlyBooks, setYearlyBooks] = useState();

  const [date, setDate] = useState(new Date());

  const yearRef = useRef(new Date().getFullYear());
  const curDate = date.getFullYear();

  const years = [
    { value: parseInt(yearRef.current) },
    { value: parseInt(yearRef.current - 1) },
    { value: parseInt(yearRef.current - 2) },
  ];

  useEffect(() => {
    if (bookList.length >= 1) {
      const firstMonth = new Date(curDate, 0, 1, 0, 0).getTime();
      const lastMonth = new Date(curDate, 11, 31, 23, 59, 59).getTime();
      setYearlyBooks(
        bookList.filter(
          (item) => item.date >= firstMonth && item.date <= lastMonth
        )
      );
    }
  }, [bookList, curDate]);

  const handleYearList = useCallback((e) => {
    setDate(new Date(e.target.value, 0));
  }, []);

  return (
    <div>
      <MyHeader
        leftChild={
          <YearList
            value={curDate}
            list={years}
            onChange={handleYearList}
          />
        }
        rightChild={
          <MyButton text={"책 추가"} onClick={() => navigate("/search")} />
        }
      />
      {yearlyBooks && <BookList bookList={yearlyBooks} />}
    </div>
  );
};

export default React.memo(Home);
