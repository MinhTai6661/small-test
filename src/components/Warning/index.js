import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Warning.module.scss'
import { ExclamationCircleFilled, WarningOutlined } from '@ant-design/icons'
import Notify from '../Noify'
import Wings from '../Wings'
import { useTranslate } from 'react-redux-multilingual'

const cx = classNames.bind(styles)

 
function Warning( ) {

  const translate = useTranslate()

  const warnings = translate('warning.warningList')
  const notificationsList = translate('warning.notifications')

  const [showNotify, setShowNotify] = useState(false)
  const [currentwarning, setCurrentWarning] = useState(0)
  const handleShow = () => {
    setShowNotify(true)
  }
  const handleClose = () => {
    setShowNotify(false)

  }

  useEffect(() => {
   const intervalId = setInterval(()=>{
     setCurrentWarning(prev => prev===0 ?1 : 0 )
   },2000)
  
    return () => {
       clearInterval(intervalId)
    }
  }, [])
  


  return (
    <div className={cx('wrapper')}>

      
      <span className={cx('icon')}><WarningOutlined /></span>

      <p className={cx('content')}>
      {warnings[currentwarning]}
      </p>
     
      <div className={cx('popup',{showNotify})}>
       <div className={cx('overlay')} onClick={handleClose }></div>
            <div className={cx('popup__content')}>
              <div className={cx('group-notify')}>
                  {
                      notificationsList.map((content, index) => (
                          <div className={cx('item')} key={index}>
                              <span className={cx('title')}>
                                  <Wings>
                                      {translate('warning.notificationTitle',{i:index+1})} 
                                  </Wings>
                              </span>
                              <p className={cx('content')}>
                                  {content}
                              </p>
                          </div>
                      ))
                  }
              </div>
              <div className={cx('notify__footer')}>
                  <button className={cx('btn')} onClick={handleClose}  >
                     {translate('warning.confirm')}
                  </button>
              </div>
            </div>
        </div>

      <button className={cx('check')} onClick={handleShow}>{translate('warning.check')}</button>
    </div>
  )
}

Warning.propTypes = {}

export default Warning
