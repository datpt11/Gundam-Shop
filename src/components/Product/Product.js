import React, { Component } from 'react';
import './Product.scss';
export default class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <article className='product'>
        <div className='img-container'>
          <img src={product.img} alt='' />
          <div className='wrap-price'>
            <span className='product-price'>{product.price} VND</span>
          </div>
        </div>
        <div className='product-info'>
          <h3>{product.name}</h3>
          <p>{product.des}</p>
        </div>
        <button className='addToCard-btn'>Add to card</button>
      </article>
    );
  }
}
