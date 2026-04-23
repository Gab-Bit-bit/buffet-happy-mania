import React, { useMemo } from "react";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
}) => {
  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(totalItems / pageSize)),
    [totalItems, pageSize]
  );

  const pages = useMemo(() => {
    const result: number[] = [];
    for (let i = 1; i <= totalPages; i += 1) {
      result.push(i);
    }
    return result;
  }, [totalPages]);

  if (totalPages <= 1) {
    return null;
  }

  const handleChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  return (
    <div className="pagination">
      <button
        type="button"
        className="pagination-button pagination-prev"
        onClick={() => handleChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`pagination-button ${
            page === currentPage ? "active" : ""
          }`}
          onClick={() => handleChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="pagination-button pagination-next"
        onClick={() => handleChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Próximo
      </button>
    </div>
  );
};

export default Pagination;

