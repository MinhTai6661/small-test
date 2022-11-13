import classNames from 'classnames/bind'
import styles from './Notify.module.scss'
import React from 'react'
import Wings from '../Wings'

const cx = classNames.bind(styles)

export default function Notify({callback,isShow,onClose}) {

    
    return (
        <div className={cx('wrapper' )}>
            <div className={cx('group-notify')}>
                <div className={cx('item')}>
                    <span className={cx('title')}>
                        <Wings>
                            <h2>Sự thông báo 1</h2>
                        </Wings>
                    </span>
                    <p className={cx('content')}>
                        To ensure user gaming experience & fairness of OB Hash.  We reject pro bet teams, reject machine bet etc. unusual behavior.  Will deduct 1k transaction fee, refund & being warned. if bet behaviour as above occur. Will be handled based on seriousness of circumstances, if insist illegal.
                    </p>
                </div>

                <div className={cx('item')}>
                    <span className={cx('title')}>
                        <Wings>
                            <h2>Sự thông báo 1</h2>
                        </Wings>
                    </span>
                    <p className={cx('content')}>
                        To ensure user gaming experience & fairness of OB Hash.  We reject pro bet teams, reject machine bet etc. unusual behavior.  Will deduct 1k transaction fee, refund & being warned. if bet behaviour as above occur. Will be handled based on seriousness of circumstances, if insist illegal.
                    </p>
                </div>
                <div className={cx('item')}>
                    <span className={cx('title')}>
                        <Wings>
                            <h2>Sự thông báo 1</h2>
                        </Wings>
                    </span>
                    <p className={cx('content')}>
                        To ensure user gaming experience & fairness of OB Hash.  We reject pro bet teams, reject machine bet etc. unusual behavior.  Will deduct 1k transaction fee, refund & being warned. if bet behaviour as above occur. Will be handled based on seriousness of circumstances, if insist illegal.
                    </p>
                </div>
                <div className={cx('item')}>
                    <span className={cx('title')}>
                        <Wings>
                            <h2>Sự thông báo 1</h2>
                        </Wings>
                    </span>
                    <p className={cx('content')}>
                        To ensure user gaming experience & fairness of OB Hash.  We reject pro bet teams, reject machine bet etc. unusual behavior.  Will deduct 1k transaction fee, refund & being warned. if bet behaviour as above occur. Will be handled based on seriousness of circumstances, if insist illegal.
                    </p>
                </div>
            </div>
            <div className={cx('footer')}>
                <button className={cx('btn')} handleClose={onClose} >
                    Xác nhận
                </button>
            </div>

        </div>
    )
}
