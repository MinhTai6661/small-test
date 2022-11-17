import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Warning.module.scss'
import { ExclamationCircleFilled } from '@ant-design/icons'
import Notify from '../Noify'
import Wings from '../Wings'
import { useTranslate } from 'react-redux-multilingual'

const cx = classNames.bind(styles)


const notifies = [
  ' To ensure user gaming experience & fairness of OB Hash.  We reject pro bet teams, reject machine bet etc. unusual behavior.  Will deduct 1k transaction fee, refund & being warned. if bet behaviour as above occur. Will be handled based on seriousness of circumstances, if insist illegal.',
  ' To ensure user gaming experience & fairness of OB Hash.  We reject pro bet teams, reject machine bet etc. unusual behavior.  Will deduct 1k transaction fee, refund & being warned. if bet behaviour as above occur. Will be handled based on seriousness of circumstances, if insist illegal.',
  ' To ensure user gaming experience & fairness of OB Hash.  We reject pro bet teams, reject machine bet etc. unusual behavior.  Will deduct 1k transaction fee, refund & being warned. if bet behaviour as above occur. Will be handled based on seriousness of circumstances, if insist illegal.',
]


function Warning({ content }) {

  const translate = useTranslate()

  const warnings = translate('warning')
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

      
      <span className={cx('icon')}><ExclamationCircleFilled /></span>

      <p className={cx('content')}>
      {warnings[currentwarning]}
      </p>
     
      <div className={cx('popup',{showNotify})}>
            <div className={cx('group-notify')}>
                {
                    notifies.map((content, index) => (
                        <div className={cx('item')} key={index}>
                            <span className={cx('title')}>
                                <Wings>
                                    Sự thông báo {index + 1}
                                </Wings>
                            </span>
                            <p className={cx('content')}>
                                {content}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className={cx('footer')}>
                <button className={cx('btn')} onClick={handleClose}  >
                    Xác nhận
                </button>
            </div>
        </div>

      <button className={cx('check')} onClick={handleShow}>Kiểm tra</button>
    </div>
  )
}

Warning.propTypes = {}

export default Warning
