
import Slider from "react-slick";
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './TabItem.module.scss'
import images from '../../assets'
import { CloseCircleOutlined, QrcodeOutlined, SaveOutlined } from '@ant-design/icons'
import { Carousel } from 'antd'
import "slick-carousel/slick/slick.css";
import Container from '../Container'
import { useTranslate } from 'react-redux-multilingual'

const cx = classNames.bind(styles)
 
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
};
function TabItem(props) {
  const translate = useTranslate()

    const [isShowDetail, setShowDetail] = useState(false)
    const handeShowDetail = () => {
        setShowDetail(true)
    }
    const handeCloseDetail = () => {
        setShowDetail(false)
    }
    return (
        <div className={cx('wrapper')}>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <div className={cx('qr-address')}>
                    <div className={cx('link')}>
                        <h3>
                        {translate('games.address')}
                        </h3>
                        <span> - {translate('games.use')}</span>
                        <p className={cx('code')}>TXW7UNgbRdntaJKCMR4swGEdL9GCidWwWr</p>
                    </div>
                    <div className={cx('qr')} onClick={handeShowDetail}>
                        <QrcodeOutlined />
                    </div>
                    <div className={cx('save')}>
                        <SaveOutlined />
                    </div>
                    <div className={cx('qr-detail', { isShowDetail })}>

                        <button className={cx('btn-close')} onClick={handeCloseDetail}>
                            <CloseCircleOutlined />
                        </button>
                        <img src={images.qr} />
                        <div className={cx('copy')}>
                            <div className={cx('qr-text')}>
                                <h3 >{translate('games.address')}</h3>
                                <p>TLneRBe5xNr79JuuVKd9j4nEKsxt9Pkjsc</p>
                            </div>
                            <button className={cx('btn-copy')}><SaveOutlined /></button>
                        </div>
                        <button className={cx('btn-save')}>{translate('games.saveToAlbum')}</button>

                    </div>


                </div>
            </div>

            <div className={cx('hash')}>
                <img src='https://obhash.gaotuprofessional.com/_nuxt/img/game-2.e2a9c67.jpg' />
            </div>

            <div className={cx('rule')}>
                <div>
                    <span> {translate('games.ratio')} </span>
                    <strong> 1x95</strong>
                </div>
                <div>
                <span> {translate('games.limit')} </span>

                    <strong> 10-10000 USDT 100-100000 TRX</strong>
                </div>
                <div>
                    <span>
                    <span> {translate('games.int')} </span>

                    </span>
                </div>


            </div>


            <div className={cx('video')}>
                <img src='https://obhash.gaotuprofessional.com/_nuxt/img/video-2.80e0a43.jpg' />
            </div>

            <div className={cx('example')}>

                <Slider {...settings}>
                
               
                    <div>
                        <div className={cx('item')}>

                       
                            <h3 className={cx('title')}>
                                {translate('games.example.title',{num:1})}
                            </h3>
                                {translate('games.example.know')}
                           < strong> 1000</strong> 
                            <div>{translate('games.example.lastDigit')}< strong>1000</strong></div>
                            <div>{translate('games.example.result')} < strong> {translate('games.example.money')}*1.95=1950</strong></div>

                        </div>
                    </div>
               
                    <div>
                        <div className={cx('item')}>

                       
                            <h3 className={cx('title')}>
                                {translate('games.example.title',{num:2})}
                            </h3>
                                {translate('games.example.know')}
                             < strong> 1000</strong> 
                            <div>{translate('games.example.lastDigit')}< strong>1000</strong></div>
                            <div>{translate('games.example.result')} < strong> {translate('games.example.money')}*1.95=1950</strong></div>

                        </div>
                    </div>
               
                    <div>
                        <div className={cx('item')}>

                       
                            <h3 className={cx('title')}>
                                {translate('games.example.title',{num:3})}
                            </h3>
                                {translate('games.example.know')} 
                              <strong> 1000</strong> 
                            <div>{translate('games.example.lastDigit')}< strong>1000</strong></div>
                            <div>{translate('games.example.result')} < strong> {translate('games.example.money')}*1.95=1950</strong></div>

                        </div>
                    </div>
               
                     
                </Slider>

            </div>
        </div>
    )
}

TabItem.propTypes = {}

export default TabItem
