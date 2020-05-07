import React, { Component } from 'react';
import './Product.scss';
import CardContext from '../contexts/CardContext';
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
        <CardContext.Consumer>
          {({ addToCard }) => (
            <button
              className='addToCard-btn'
              onClick={() => {
                addToCard(product);
              }}
            >
              Add to card
            </button>
          )}
        </CardContext.Consumer>
      </article>
    );
  }
}
