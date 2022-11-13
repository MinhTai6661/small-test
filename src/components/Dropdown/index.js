

import classNames from 'classnames/bind'
import styles from './Dropdown.module.scss'
import React, { useState } from 'react'
import DropdownItem from './DropdownItem'
import images from '../../assets'

const cx = classNames.bind(styles)

export default function Dropdown() {

  const [isOpen, setIsOpen] = useState(false);
  


  const handleClickDropdown = () => {
    setIsOpen(prev => !prev)
  }
  

  return (
    <div className={cx('wrapper',{isOpen})} onClick={handleClickDropdown}>
      <div className={cx('box')}>
        <DropdownItem title='English' flag={images.flag.usa} arrow />
      </div>
      <ul className={cx('list')}>
        <DropdownItem title='Tiếng Việt' flag={images.flag.vietNam} />
        <DropdownItem title='China' flag={images.flag.china} />
      </ul>
    </div>
  )
}
