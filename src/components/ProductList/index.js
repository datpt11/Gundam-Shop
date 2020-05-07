import React, { Component } from 'react';
import Product from '../Product/Product';
import { ProductData } from '../ProductData';
import './ProductList.scss';
import Paginate from '../Paginate/Paginate';
export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ProductData,
      productsPerPage: 8,
      currentPage: 1,
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(pageNumber) {
    this.setState({
      currentPage: pageNumber,
    });
  }
  render() {
    const { products, productsPerPage, currentPage } = this.state;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const CurrentProducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    return (
      <div>
        <section className='productList'>
          {CurrentProducts.map((product) => {
            return <Product key={product.key} product={product} />;
          })}
        </section>
        <section className='paginate'>
          <Paginate
            products={products}
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            onChangePage={this.onChangePage}
          />
        </section>
      </div>
    );
  }
}
