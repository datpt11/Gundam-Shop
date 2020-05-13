import React, { Component } from 'react';
import './Home.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      banner: {},
    };
  }
  componentDidMount() {
    axios.get('http://localhost:8080/banner').then((res) => {
      this.setState({
        banner: res.data,
      });
    });
  }

  render() {
    const { banner } = this.state;
    return (
      <div>
        <div className='home-container'>
          <img src={banner.img} alt='' />
          <div className='home-overlay'></div>
          <div className='home-heading'>
            <h1>{banner.des}</h1>
            <Link to='/gundam' className='btn' type='button'>
              Shoping Now
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
