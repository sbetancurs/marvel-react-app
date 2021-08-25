/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

function usePagination(max) {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    offset: 0,
  });

  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    setMaxPage(max);
    setPagination({ ...pagination, currentPage: max === 0 ? 0 : 1, offset: 0 });
  }, [max]);

  function next() {
    setPagination({
      ...pagination,
      offset: (pagination.offset += 10),
      currentPage: pagination.currentPage + 1,
    });
  }

  function prev() {
    if (pagination.currentPage > 1) {
      setPagination({
        ...pagination,
        offset: (pagination.offset -= 10),
        currentPage: pagination.currentPage - 1,
      });
    }
  }
  function jump(e, index) {
    if (!index) {
      setPagination({
        ...pagination,
        offset: maxPage * 10 - 10,
        currentPage: maxPage,
      });
    } else {
      setPagination({
        ...pagination,
        offset: 1 * 10 - 10,
        currentPage: 1,
      });
    }
  }
  return { next, prev, jump, pagination, setPagination, maxPage };
}
export default usePagination;
