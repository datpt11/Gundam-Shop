import React, { useState } from 'react';
import logo from '../../logo.svg';
import './Navbar.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import CardContext from '../contexts/CardContext';
export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggle = (tab) => {
    if (isActive !== tab) setIsActive(tab);
  };

  return (
    <nav className='navbar'>
      <img src={logo} width='50px' height='50px' alt='' />
      <ul className='nav-links'>
        <li>
          <Link
            to='/'
            onClick={() => toggle('1')}
            className={classNames('nav-link', {
              'active': isActive === '1',
            })}
            alt=''
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to='/gundam'
            onClick={() => toggle('2')}
            className={classNames('nav-link', {
              'active': isActive === '2',
            })}
            alt=''
          >
            gundam
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            onClick={() => toggle('3')}
            className={classNames('nav-link', {
              'active': isActive === '3',
            })}
            alt=''
          >
            about us
          </Link>
        </li>
        <li>
          <Link
            to='/contact'
            onClick={() => toggle('4')}
            className={classNames('nav-link', {
              'active': isActive === '4',
            })}
            alt=''
          >
            contact
          </Link>
        </li>
        <li className='search-btn'>
          <Link
            to='/search'
            onClick={() => toggle('5')}
            className={classNames('nav-link', {
              'active': isActive === '5',
            })}
            alt=''
          >
            <i className='fas fa-search'></i>
          </Link>
        </li>
        <li className='card-btn'>
          <CardContext.Consumer>
            {({ card }) => (
              <Link
                to='/card'
                onClick={() => toggle('6')}
                className={classNames('nav-link', {
                  'active': isActive === '6',
                })}
                alt=''
              >
                <i className='fas fa-shopping-cart'></i> ( {card.length} )
              </Link>
            )}
          </CardContext.Consumer>
        </li>
      </ul>
    </nav>
  );
}
