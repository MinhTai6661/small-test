import classNames from 'classnames/bind'
import styles from './Notify.module.scss'
import React from 'react'
import Wings from '../Wings'

const cx = classNames.bind(styles)

const notifies = [
    ' To ensure user gaming experience & fairness of OB Hash.  We reject pro bet teams, reject machine bet etc. unusual behavior.  Will deduct 1k transaction fee, refund & being warned. if bet behaviour as above occur. Will be handled based on seriousness of circumstances, if insist illegal.',
    ' To ensure user gaming experience & fairness of OB Hash.  We reject pro bet teams, reject machine bet etc. unusual behavior.  Will deduct 1k transaction fee, refund & being warned. if bet behaviour as above occur. Will be handled based on seriousness of circumstances, if insist illegal.',
    ' To ensure user gaming experience & fairness of OB Hash.  We reject pro bet teams, reject machine bet etc. unusual behavior.  Will deduct 1k transaction fee, refund & being warned. if bet behaviour as above occur. Will be handled based on seriousness of circumstances, if insist illegal.',
]

export default function Notify({ onClose }) {
    return (
        <div className={cx('wrapper')}>
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
                <button className={cx('btn')} handleClose={onClose} >
                    Xác nhận
                </button>
            </div>
        </div>
    )
}
