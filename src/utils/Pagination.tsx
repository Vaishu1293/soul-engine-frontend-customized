import Link from 'next/link';
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const prevPage = () => onPageChange(currentPage - 1);
  const nextPage = () => onPageChange(currentPage + 1);

  const getPageRange = () => {
    const maxVisible = 3;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="basic-pagination mt-20 mb-30">
      <ul>
        <li>
          <Link
            href="#"
            className={`prev page-numbers ${currentPage === 1 ? "disabled" : ""}`}
            onClick={e => {
              e.preventDefault();
              if (currentPage > 1) prevPage();
            }}
          >
            <i className="fal fa-angle-left"></i>
          </Link>
        </li>

        {/* First page shortcut */}
        {currentPage > 3 && (
          <li>
            <Link
              href="#"
              className="page-numbers"
              onClick={e => {
                e.preventDefault();
                onPageChange(1);
              }}
            >
              01
            </Link>
          </li>
        )}

        {/* Dots before */}
        {currentPage > 4 && <li><span className="page-numbers dots">…</span></li>}

        {/* Revolving page numbers */}
        {getPageRange().map((page) => (
          <li key={page}>
            {page === currentPage ? (
              <span className="page-numbers current">{page.toString().padStart(2, '0')}</span>
            ) : (
              <Link
                href="#"
                className="page-numbers"
                onClick={e => {
                  e.preventDefault();
                  onPageChange(page);
                }}
              >
                {page.toString().padStart(2, '0')}
              </Link>
            )}
          </li>
        ))}

        {/* Dots after */}
        {currentPage < totalPages - 3 && <li><span className="page-numbers dots">…</span></li>}

        {/* Last page shortcut */}
        {currentPage < totalPages - 2 && (
          <li>
            <Link
              href="#"
              className="page-numbers"
              onClick={e => {
                e.preventDefault();
                onPageChange(totalPages);
              }}
            >
              {totalPages.toString().padStart(2, '0')}
            </Link>
          </li>
        )}

        <li>
          <Link
            href="#"
            className={`next page-numbers ${currentPage === totalPages ? "disabled" : ""}`}
            onClick={e => {
              e.preventDefault();
              if (currentPage < totalPages) nextPage();
            }}
          >
            <i className="fal fa-angle-right"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
