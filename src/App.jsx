import "./App.css";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import DATA from "../data/MOCK_DATA.json";

function App() {
  const [users, setUsers] = useState(DATA.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const perPage = 10;
  const pagesVisited = pageNumber * perPage;

  const displayCards = users
    .slice(pagesVisited, pagesVisited + perPage)
    .map((user) => {
      return (
        <div className="card">
          <h2>{user.first_name}</h2>
          <h2>{user.last_name}</h2>
          <h2>{user.email}</h2>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / perPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      <div className="wrapper">
        {displayCards}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationButtons"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          activeClassName={"activeButton"}
        />
      </div>
    </div>
  );
}

export default App;
