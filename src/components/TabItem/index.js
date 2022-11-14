
import Slider from "react-slick";
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './TabItem.module.scss'
import images from '../../assets'
import { QrcodeOutlined, SaveOutlined } from '@ant-design/icons'
import { Carousel } from 'antd'
import "slick-carousel/slick/slick.css";

const cx = classNames.bind(styles)
const contentStyle = {
    margin: 0,
    height: '160px',

    lineHeight: '160px',
    textAlign: 'center',

};

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3
};
function TabItem(props) {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <div className={cx('wrapper')}>
           <div style={{display:'flex', justifyContent:"center"}}>
                <div className={cx('qr-address')}>
                    <div className={cx('link')}>
                        <h3>
                            Địa chỉ cược
                        </h3>
                        <span> - Ví tiền phi tập trung</span>
                        <p className={cx('code')}>TXW7UNgbRdntaJKCMR4swGEdL9GCidWwWr</p>
                    </div>
                    <div className={cx('qr')}>
                        <QrcodeOutlined />
                    </div>
                    <div className={cx('save')}>
                        <SaveOutlined />
                    </div>
                </div>
           </div>

            <div className={cx('hash')}>
                <img src='https://obhash.gaotuprofessional.com/_nuxt/img/game-2.e2a9c67.jpg' />
            </div>

            <div className={cx('role')}>
                <div>
                    <span> tỷ lệ cược </span>
                    <strong> 1x95</strong>
                </div>
                <div>
                    <span> hạn mức CK</span>
                    <strong> 10-10000 USDT 100-100000 TRX</strong>

                </div>
                <div>
                    <span>
                        Phần số nguyên của số tiền chuyển khoản sẽ tham dự rút thưởng, phần lẻ thập phân sẽ bị khấu trừ
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
                                vd1
                            </h3>
                            <div>Nhận biết cược tai < strong>1000</strong></div>
                            <div>Chữ số cuối cùng của Block hash là "1" nhận biết là Xỉu < strong>1000</strong></div>
                            <div>Chữ số cuối cùng của Block hash là "1" nhận biết là Xỉu< strong>1000</strong></div>
                            <div>Kết quả  < strong> tiền hệ thống CK là：1000*1.95=1950</strong></div>

                        </div>
                    </div>
                    <div>
                        <div className={cx('item')}>
                            <h3 className={cx('title')}>
                                vd1
                            </h3>
                            <div>Nhận biết cược tai < strong>1000</strong></div>
                            <div>Chữ số cuối cùng của Block hash là "1" nhận biết là Xỉu < strong>1000</strong></div>
                            <div>Chữ số cuối cùng của Block hash là "1" nhận biết là Xỉu< strong>1000</strong></div>
                            <div>Kết quả  < strong> tiền hệ thống CK là：1000*1.95=1950</strong></div>

                        </div>
                    </div>
                    <div>
                        <div className={cx('item')}>
                            <h3 className={cx('title')}>
                                vd1
                            </h3>
                            <div>Nhận biết cược tai < strong>1000</strong></div>
                            <div>Chữ số cuối cùng của Block hash là "1" nhận biết là Xỉu < strong>1000</strong></div>
                            <div>Chữ số cuối cùng của Block hash là "1" nhận biết là Xỉu< strong>1000</strong></div>
                            <div>Kết quả  < strong> tiền hệ thống CK là：1000*1.95=1950</strong></div>

                        </div>
                    </div>
                    <div>
                        <div className={cx('item')}>
                            <h3 className={cx('title')}>
                                vd1
                            </h3>
                            <div>Nhận biết cược tai < strong>1000</strong></div>
                            <div>Chữ số cuối cùng của Block hash là "1" nhận biết là Xỉu < strong>1000</strong></div>
                            <div>Chữ số cuối cùng của Block hash là "1" nhận biết là Xỉu< strong>1000</strong></div>
                            <div>Kết quả  < strong> tiền hệ thống CK là：1000*1.95=1950</strong></div>

                        </div>
                    </div>

                </Slider>

            </div>
        </div>
    )
}

TabItem.propTypes = {}

export default TabItem
