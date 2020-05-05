import React, { useState } from 'react';
import logo from '../../logo.svg';
import './Navbar.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggle = (tab) => {
    if (isActive !== tab) setIsActive(tab);
  };

  return (
    <nav className='navbar'>
      <img src={logo} width='100px' alt='' />
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
            to='/contact'
            onClick={() => toggle('3')}
            className={classNames('nav-link', {
              'active': isActive === '3',
            })}
            alt=''
          >
            contact
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            onClick={() => toggle('4')}
            className={classNames('nav-link', {
              'active': isActive === '4',
            })}
            alt=''
          >
            about
          </Link>
        </li>
        <li>
          <Link
            to='/card'
            onClick={() => toggle('5')}
            className={classNames('nav-link', {
              'active': isActive === '5',
            })}
            alt=''
          >
            Card ( 0 )
          </Link>
        </li>
      </ul>
    </nav>
  );
}
