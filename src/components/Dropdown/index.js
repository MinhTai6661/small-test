

import classNames from 'classnames/bind'
import styles from './Dropdown.module.scss'
import React, { useState } from 'react'
import DropdownItem from './DropdownItem'
import images from '../../assets'

const cx = classNames.bind(styles)



const listLanguages = [
  {
    id: 1,
    title: 'Việt Nam',
    flag: images.flag.vietnam
  },
  {
    id: 2,
    title: 'China',
    flag: images.flag.china
  },
  {
    id: 3,
    title: 'USA',
    flag: images.flag.usa
  },
]


export default function Dropdown() {
  console.log(listLanguages)

  const [isOpen, setIsOpen] = useState(false);
  const [currentNational, setCurentNational] = useState({...listLanguages[0]})


  const handleClickDropdown = () => {
    setIsOpen(prev => !prev)
  }

  const handleChangeLanguage = (id)=>{
    setCurentNational(id)
  }


  return (
    <div className={cx('wrapper', { isOpen })} onClick={handleClickDropdown}>
      <div className={cx('box')}>
        <DropdownItem title={ currentNational.title} flag={currentNational.flag} arrow />
      </div>
      <ul className={cx('list')}>
        {
          listLanguages.map(item=>(
            item.id !==currentNational.id &&  <DropdownItem title={item.title} flag={item.flag} onClick={()=>handleChangeLanguage(item)} />
          ))
        }
      </ul>
    </div>
  )
}
