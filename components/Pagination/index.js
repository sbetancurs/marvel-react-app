const Pagination = ({
  currentPage,
  totalPages,
  handleChangePage,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <>
      <div className='pagination'>
        <div className='pages'>
          <a className='number' onClick={handlePrevPage}>
            {"<"}
          </a>
          <div
            className={currentPage > 1 ? "number" : "number nohover"}
            onClick={(e) => handleChangePage(e, 1)}
          >
            {currentPage}
          </div>
          <div className='number nohover'>of</div>
          <div
            className={currentPage !== totalPages ? "number" : "number nohover"}
            onClick={() => handleChangePage()}
          >
            {totalPages}
          </div>
          <div className='number' onClick={handleNextPage}>
            {">"}
          </div>
        </div>
      </div>
      <style jsx>{`
        .pagination {
          display: flex;
          justify-content: center;
        }
        .pages {
          display: flex;
          justify-content: space-around;
          max-width: 400px;
          padding: 1rem 0;
        }
        .nohover {
          pointer-events: none;
        }
        .number {
          background-color: gray;
          color: white;
          padding: 0.5rem;
          margin-right: 0.5rem;
          cursor: pointer;
        }
        .number:hover {
          transform: scale(1.1);
          transition: 0.3s;
          background-color: #484848;
        }
        .number:first-child {
          display: ${currentPage === 1 || currentPage === 0 ? "none" : "block"};
        }
        .number:last-child {
          margin-right: 0;
          display: ${currentPage === totalPages ? "none" : "block"};
        }
      `}</style>
    </>
  );
};

export default Pagination;
