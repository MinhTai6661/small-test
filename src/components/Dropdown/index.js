

import classNames from 'classnames/bind'
import styles from './Dropdown.module.scss'
import React, { useState } from 'react'
import DropdownItem from './DropdownItem'
import images from '../../assets'
import { IntlActions, useTranslate } from 'react-redux-multilingual'
import store from '../../redux/store'
import { useSelector } from 'react-redux'

const cx = classNames.bind(styles)



const listLanguages = [
  {
    locale: 'vi',
    title: 'Việt Nam',
    flag: images.flag.vietnam
  },
  {
    locale:'china',
    title: 'China',
    flag: images.flag.china
  },
  {
    locale:'en',
    title: 'USA',
    flag: images.flag.usa
  },
]


export default function Dropdown() {

  const translate = useTranslate()
  const currentLanguage = useSelector(state=>state.Intl.locale)
  
  const [isOpen, setIsOpen] = useState(false);
  const [currentNational, setCurentNational] = useState({...listLanguages[listLanguages.findIndex((item)=>item.locale === currentLanguage)]})

  const handleClickDropdown = () => {
    setIsOpen(prev => !prev)
  }

  const handleChangeLanguage = (language) => {
   
    setCurentNational(language)
    store.dispatch(IntlActions.setLocale(language.locale))
  }

  return (
    <div className={cx('wrapper', { isOpen })} onClick={handleClickDropdown}>
  
      
      <div className={cx('box')}>
        <DropdownItem title={ currentNational.title} flag={currentNational.flag} arrow />
      </div>
      <ul className={cx('list')}>
        {
          listLanguages.map(item=>(
            item.locale !==currentNational.locale &&  <DropdownItem title={item.title} flag={item.flag} onClick={()=>handleChangeLanguage(item)} />
          ))
        }
      </ul>
    </div>
  )
}
