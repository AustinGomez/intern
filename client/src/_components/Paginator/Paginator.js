import React, { useCallback } from "react";
import "./Paginator.css";

const Paginator = ({ onClickGoToPage, currentPageNumber, pageCount }) => {
  const handleClickNext = useCallback(() => {
    if (currentPageNumber !== pageCount) {
      onClickGoToPage(currentPageNumber + 1);
    }
  }, [onClickGoToPage, currentPageNumber, pageCount]);

  const handleClickPrev = useCallback(() => {
    if (currentPageNumber !== 1) {
      onClickGoToPage(currentPageNumber - 1);
    }
  }, [onClickGoToPage, currentPageNumber]);

  const handleClickGoTo = useCallback(
    pageNumber => {
      onClickGoToPage(pageNumber);
    },
    [onClickGoToPage]
  );
  return (
    <div className="columns is-centered">
      <div className="column ">
        <nav
          className="pagination is-centered"
          role="navigation"
          aria-label="pagination"
        >
          <span
            onClick={handleClickPrev}
            className="pagination-previous"
            disabled={currentPageNumber === 1}
          >
            Prev
          </span>
          <span
            onClick={handleClickNext}
            className="pagination-next"
            disabled={currentPageNumber === pageCount}
          >
            Next
          </span>
          <ul className="pagination-list">
            {[...Array(pageCount)].map((_, index) => {
              return (
                <span
                  key={index}
                  onClick={() => handleClickGoTo(index + 1)}
                  className={`pagination-link ${
                    currentPageNumber === index + 1 ? "is-current" : ""
                  }`}
                  aria-label={`goto page 45`}
                >
                  {index + 1}
                </span>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Paginator;
