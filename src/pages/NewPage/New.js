import { useLocation } from "react-router-dom";

import BookEditor from "../../components/BookEditor";

const New = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <BookEditor newBook={state} />
    </>
  );
};

export default New;
