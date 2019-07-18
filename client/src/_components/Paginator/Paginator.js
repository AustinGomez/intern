import React, { useCallback } from "react";

const Paginator = ({ onClickGoToPage, currentPageNumber, pageCount }) => {
  const handleClickNext = useCallback(() => {
    if (currentPageNumber !== pageCount) {
      onClickGoToPage(currentPageNumber => currentPageNumber + 1);
    }
  }, [onClickGoToPage, currentPageNumber]);

  const handleClickPrev = useCallback(() => {
    if (currentPageNumber !== 1) {
      onClickGoToPage(currentPageNumber => currentPageNumber + 1);
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
      <a onClick={handleClickPrev} className="pagination-previous">
        Previous
      </a>
      <a onClick={handleClickNext} className="pagination-next">
        Next page
      </a>
      <ul className="pagination-list">
        {[...Array(pageCount)].map((_, index) => {
          return (
            <a
              key={index}
              onClick={() => handleClickGoTo(index + 1)}
              className={`pagination-link ${
                currentPageNumber === index + 1 ? "is-current" : ""
              }`}
              aria-label={`goto page 45`}
            >
              {index + 1}
            </a>
          );
        })}
      </ul>
    </nav>
  );
};

export default Paginator;
