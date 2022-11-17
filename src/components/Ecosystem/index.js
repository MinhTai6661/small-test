import React from 'react'
import styles from './Ecosystem.module.scss'
import classNames from 'classnames/bind'
import Wings from '../Wings'
import { useTranslate } from 'react-redux-multilingual'


const cx = classNames.bind(styles)


export default function Ecosystem() {

  const translate = useTranslate()

  return (
    <div className={cx('wrapper')}>

      <div className={cx('heading')}>
        <Wings  >
          {translate('ecoSystem.title')}
        </Wings>
      </div>


      <div className={cx('content')}>
        <p> {translate('ecoSystem.introduce')}</p>
        <img className={cx('img')} src='https://obhash.gaotuprofessional.com/_nuxt/img/ob-ecology.8fd08a5.jpg' />
      </div>
    </div>
  )
}
