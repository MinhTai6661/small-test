

import classNames from 'classnames/bind'
import styles from './TextSlide.module.scss'
import React from 'react'
import { LikeFilled, LikeOutlined } from '@ant-design/icons'
import { useTranslate } from 'react-redux-multilingual'

const cx = classNames.bind(styles)

export default function TextSlide({ listText }) {

    const translate = useTranslate()
    console.log("🚀 ~ file: index.js ~ line 14 ~ TextSlide ~ translate", translate('notification.winLevel1',{name:'bắp minh ngô', price:2000}))

    return (
        <div className={cx('wrapper')}>
            
            {
                listText.map((item) => (
                    item.level === 1 ?
                        <marquee>

                            <span className={cx('item', { lv1: true })}>
                                <span className={cx('icon')}><LikeFilled /></span>

                                <span className={cx('content')}>
                                    {/* {item.name}   <strong > {item.money}  </strong>TRX */}
                                    {translate('notification.winLevel1',{name:item.name, price:item.money})}
                                </span>


                        </span>
                        </marquee>
                        :
                        item.level === 2 ?
                            <marquee >
                                <span className={cx('item', { lv2: true })}>
                                    <span className={cx('icon')}><LikeFilled /></span>

                                    <span className={cx('content')}>
                                {translate('notification.winLevel2',{name:item.name, price:item.money})}

                                    </span>


                                </span>

                            </marquee> :

                            <marquee >
                                <span className={cx('item', { lv3: true })}>
                                    {translate('notification.winLevel3',{name:item.name})}
                                </span>
                            </marquee>
                ))
            }
        </div >
    )
}
