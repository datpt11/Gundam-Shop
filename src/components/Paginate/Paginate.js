import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginate = ({ products, productsPerPage, currentPage, onChangePage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination aria-label='Page navigation'>
      <PaginationItem disabled={currentPage <= 1}>
        <PaginationLink
          first
          href={`#${currentPage}`}
          onClick={() => onChangePage(1)}
        >
          First
        </PaginationLink>
      </PaginationItem>
      <PaginationItem disabled={currentPage <= 1}>
        <PaginationLink
          previous
          href={`#${currentPage}`}
          onClick={() => onChangePage(currentPage - 1)}
        >
          Previous
        </PaginationLink>
      </PaginationItem>
      {pageNumbers.map((number, i) => {
        return (
          <PaginationItem active={i === currentPage - 1}>
            <PaginationLink
              href={`#${number}`}
              onClick={() => onChangePage(number)}
              key={number}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        );
      })}
      <PaginationItem disabled={currentPage >= pageNumbers.length}>
        <PaginationLink
          next
          href={`#${currentPage}`}
          onClick={() => onChangePage(currentPage + 1)}
        >
          Next
        </PaginationLink>
      </PaginationItem>
      <PaginationItem disabled={currentPage >= pageNumbers.length}>
        <PaginationLink
          last
          href={`#${currentPage}`}
          onClick={() => onChangePage(pageNumbers.length)}
        >
          Last
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default Paginate;
