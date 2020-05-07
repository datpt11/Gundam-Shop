import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginate = ({ products, productsPerPage, currentPage, onChangePage }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination aria-label='Page navigation'>
      <PaginationItem disabled={currentPage <= 1}>
        <PaginationLink first href='#' />
      </PaginationItem>
      <PaginationItem disabled={currentPage <= 1}>
        <PaginationLink previous href='#' />
      </PaginationItem>
      {pageNumbers.map((number, i) => {
        return (
          <PaginationItem active={i === currentPage - 1}>
            <PaginationLink
              onClick={() => onChangePage(number)}
              key={number}
              href={`#`}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        );
      })}
      <PaginationItem disabled={currentPage >= pageNumbers.length}>
        <PaginationLink next href='#' />
      </PaginationItem>
      <PaginationItem disabled={currentPage >= pageNumbers.length}>
        <PaginationLink last href='#' />
      </PaginationItem>
    </Pagination>
  );
};

export default Paginate;
