import React from 'react'
import styles from './Partner.module.scss'
import classNames from 'classnames/bind'
import Wings from '../Wings'
import images from '../../assets'
import { useTranslate } from 'react-redux-multilingual'

const cx = classNames.bind(styles)

export default function Partner() {

    const translate = useTranslate()
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <Wings >{translate('partner.title')}</Wings>
            </div>
        <div className={cx('logos')}>
            <img src={images.partner}/>
        </div>

            {/* <div className={cx('list-icon')}>
                <div className={cx('item')}>
                    <img  src='https://obhash.gaotuprofessional.com/_nuxt/img/platform_imtoken.5067268.png'/>
                </div>
                <div className={cx('item')}>
                    <img  src='https://obhash.gaotuprofessional.com/_nuxt/img/title-cooperate.428383d.png '/>
                </div>
                <div className={cx('item')}>
                    <img  src='https://obhash.gaotuprofessional.com/_nuxt/img/platform_trustwallet.b3f73ef.png '/>
                </div>
                <div className={cx('item')}>
                    <img  src=' https://obhash.gaotuprofessional.com/_nuxt/img/platform_tronlink.0b60510.png'/>
                </div>
                <div className={cx('item')}>
                    <img  src=' https://obhash.gaotuprofessional.com/_nuxt/img/platform_bitpie.62cd260.png'/>
                </div>
                <div className={cx('item')}>
                    <img  src=' https://obhash.gaotuprofessional.com/_nuxt/img/platform_bitpie.62cd260.png'/>
                </div>
                <div className={cx('item')}>
                    <img  src='https://obhash.gaotuprofessional.com/_nuxt/img/platform_huobi.9c6eb54.png'/>
                </div>
            </div> */}
        </div>
    )
}
