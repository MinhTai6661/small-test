

import classNames from 'classnames/bind'
import styles from './TextSlide.module.scss'
import React from 'react'
import { LikeFilled, LikeOutlined } from '@ant-design/icons'

const cx = classNames.bind(styles)

export default function TextSlide({ listText }) {

    console.log(listText)
    return (
        <div className={cx('wrapper')}>
            {
                listText.map((item) => (
                    item.level === 1 ?
                    <marquee>

                        <span className={cx('item', { lv1: true })}>
                            <span className={cx('icon')}><LikeFilled /></span>

                            <span className={cx('content')}>
                                {item.title}
                            </span>

                            <strong > {item.money}  </strong>TRX
                        </span>
                    </marquee>
                        :
                        item.level === 2 ?
                            <marquee >
                                   <span className={cx('item', { lv2: true })}>
                            <span className={cx('icon')}><LikeFilled /></span>

                            <span className={cx('content')}>
                                {item.title}
                            </span>

                            <strong > {item.money}  </strong>TRX
                        </span>

                            </marquee> :

                            <marquee >
                                <span className={cx('item', { lv3: true })}>
                                    {item.title}
                                </span>
                            </marquee>
                ))
            }
        </div >
    )
}
