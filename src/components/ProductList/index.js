import React, { Component } from 'react';
import Product from '../Product/Product';
import { ProductData } from '../ProductData';
import './ProductList.scss';
export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ProductData,
    };
  }
  render() {
    const { products } = this.state;
    return (
      <section className='productList'>
        {products.map((product) => {
          return <Product key={product.key} product={product} />;
        })}
      </section>
    );
  }
}
