import { useLocation } from "react-router-dom";

import BookEditor from "../../components/BookEditor";

const New = () => {
  const state = useLocation();

  return (
    <div>
      <BookEditor newBook={state.state} />
    </div>
  );
};

export default New;
