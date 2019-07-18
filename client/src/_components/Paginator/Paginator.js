import React, { useCallback } from "react";

const Paginator = ({ onClickGoToPage, currentPageNumber, pageCount }) => {
  const handleClickNext = useCallback(() => {
    if (currentPageNumber !== pageCount) {
      onClickGoToPage(currentPageNumber + 1);
    }
  }, [onClickGoToPage, currentPageNumber, pageCount]);

  const handleClickPrev = useCallback(() => {
    console.log(currentPageNumber + 1);
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
    <nav className="pagination" role="navigation" aria-label="pagination">
      <span
        onClick={handleClickPrev}
        className="pagination-previous"
        disabled={currentPageNumber === 1}
      >
        Previous
      </span>
      <span
        onClick={handleClickNext}
        className="pagination-next"
        disabled={currentPageNumber === pageCount}
      >
        Next page
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
  );
};

export default Paginator;
