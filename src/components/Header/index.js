import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '../../assets'
import Dropdown from '../Dropdown'
import { Link } from 'react-router-dom'


const cx = classNames.bind(styles)

function Header(props) {

  const [isShow, setShow] = useState(false)


  useEffect(() => {
    const handleEvent = () => {
      setShow(window.scrollY > 50 ? true : false);
    };
    window.addEventListener('scroll', handleEvent);

    return () => {
      window.removeEventListener('scroll', handleEvent);
    };
  }, []);

  return (
    <header className={cx('header', { isShow })} >
      <span className={cx('logo')}>
        <img src={images.logo} />
      </span>
      <div className={cx('right-header')}>
        <div className='language'>
          < Dropdown />
        </div>
        <div className={cx('group-icon')}>
          <Link to='/activities-list' className={cx('icon')}>
            <img src={images.icons.activity} />
          </Link>
          <span className={cx('icon')}>
            <img src={images.icons.user} />
          </span>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header
