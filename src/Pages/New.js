import { useLocation } from "react-router-dom";

import BookEditor from "../Components/BookEditor";

const New = () => {
  const state = useLocation();

  return (
    <div className="New">
      <BookEditor newBook={state.state} />
    </div>
  );
};

export default New;
