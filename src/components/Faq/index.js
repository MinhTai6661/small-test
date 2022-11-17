
import classNames from 'classnames/bind'
import styles from './Faq.module.scss'
import React from 'react'
import Wings from '../Wings'
import { useTranslate } from 'react-redux-multilingual'


const cx = classNames.bind(styles)

export default function Faq() {
   
    const translate = useTranslate()


    return (
        <div className={cx('wrapper')}>
            <div class={cx('header')}>
                <Wings>Faq</Wings>
            </div>
            <div className={cx('content')}>
                <div className={cx('question-item')}>
                    <h3>
                      {translate('faq.q1.title')}
                    </h3>
                    <p>
                    {translate('faq.q1.answ')}

                    </p>
                </div>
                <div className={cx('question-item')}>

                    <h3>
                    {translate('faq.q2.title')}

                    </h3>
                    <p>
                    {translate('faq.q2.answ')}

                    </p>
                </div>
                <div className={cx('question-item')}>

                    <h3>
                    {translate('faq.q3.title')}
                    </h3>
                    <p>
                    {translate('faq.q3.answ')}

                    </p>
                </div>
                <div className={cx('question-item')}>
                    <h3>
                    {translate('faq.q4.title')}
                    </h3>
                    <p>
                    {translate('faq.q4.answ')}

                    </p>
                </div>

            </div>
        </div>
    )
}
