import React from 'react'
import styles from './CustommerCare.module.scss'
import classNames from 'classnames/bind'
import HeaderChildPage from '../../components/HeaderChildPage'
import images from '../../assets'
import { RightOutlined } from '@ant-design/icons'

const cx = classNames.bind(styles)

export default function CustommerCare() {
  return (
    <div className={cx('wrapper')}>
        <HeaderChildPage content='CSKH'  />
        <div className={cx('banner')}>
            <img  src={images.cskh} />
        </div>
        <div className={cx('advise')}>
            <div className={cx('item')}>
                <img src={images.icons.cskh}/>
                <h4 className={cx('title')}> CSKH online</h4>
                <button className={cx('btn')}>Click để tư vấn <span><RightOutlined /></span> </button>

            </div>
            <div className={cx('item')}>
                <img src={images.icons.telegram}/>
                <h4 className={cx('title')}> Telegram</h4>
                <button className={cx('btn')}>Click để tư vấn <span><RightOutlined /></span> </button>
            </div>
        </div>
    </div>
  )
}
