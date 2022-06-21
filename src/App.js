import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useReducer, useRef, useEffect, useCallback } from "react";

import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Detail from "./Pages/Detail";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import SearchStateContext from "./contexts/SearchStateContext";

export const TotalBook = React.createContext();
export const MyBookStateContext = React.createContext();

const reducer = (state, action) => {
  let newList = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = { ...action.data };
      newList = [newItem, ...state];
      break;
    }
    case "REMOVE": {
      newList = state.filter(
        (item) => parseInt(item.id) !== parseInt(action.targetId)
      );
      break;
    }
    case "EDIT": {
      newList = state.map((item) =>
        parseInt(item.id) === parseInt(action.data.id)
          ? { ...action.data }
          : item
      );
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("myBooks", JSON.stringify(newList));
  return newList;
};

function App() {
  const [bookList, dispatch] = useReducer(reducer, []);
  const nextId = useRef(0);

  useEffect(() => {
    const originBookList = localStorage.getItem("myBooks");
    if (originBookList) {
      const originBooks = JSON.parse(originBookList).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );
      if (originBooks.length >= 1) {
        nextId.current = parseInt(originBooks[0].id) + 1;
        dispatch({ type: "INIT", data: originBooks });
      }
    }
  }, []);

  const onCreate = useCallback(
    (title, authors, thumbnail, rating, content, publisher) => {
      dispatch({
        type: "CREATE",
        data: {
          id: nextId.current,
          title,
          authors,
          thumbnail,
          rating,
          content,
          publisher,
          date: new Date().getTime(),
        },
      });
      nextId.current += 1;
    },
    []
  );

  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);

  const onEdit = useCallback(
    (targetId, title, authors, thumbnail, rating, content, publisher, date) => {
      dispatch({
        type: "EDIT",
        data: {
          id: targetId,
          title,
          authors,
          thumbnail,
          rating,
          content,
          publisher,
          date,
        },
      });
    },
    []
  );

  return (
    <TotalBook.Provider value={bookList}>
      <MyBookStateContext.Provider value={{ onCreate, onRemove, onEdit }}>
        <SearchStateContext>
          <BrowserRouter>
            <div className="App">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/detail/:id" element={<Detail />}></Route>
                <Route path="/new" element={<New />}></Route>
                <Route path="/edit/:id" element={<Edit />} />
              </Routes>
            </div>
          </BrowserRouter>
        </SearchStateContext>
      </MyBookStateContext.Provider>
    </TotalBook.Provider>
  );
}

export default App;
