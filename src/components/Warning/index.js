import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Warning.module.scss'
import { ExclamationCircleFilled } from '@ant-design/icons'
import Notify from '../Noify'

const cx = classNames.bind(styles)



function Warning({ content }) {
  const [showNotify, setShowNotify] = useState(false)
  const handleShow = () => {
    setShowNotify(true)
  }
  const handleClose = ()=>{
    setShowNotify(false)
    console.log('ddd')
     
  }


  return (
    <div className={cx('wrapper')}>
      <span className={cx('icon')}><ExclamationCircleFilled /></span>

      <p className={cx('content')}>
        {content}
      </p>
    { showNotify &&  <Notify  isShow ={true} onClose={handleClose} /> }

      <button className={cx('check')} onClick={handleShow}>Kiểm tra</button>
    </div>
  )
}

Warning.propTypes = {}

export default Warning
