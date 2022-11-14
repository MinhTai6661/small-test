import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Wings from '../Wings'
import styles from './Turtorial.module.scss'
import classNames from 'classnames/bind'
import { Timeline } from 'antd'
import TurtorialItem from './TurtorialItem'

const cx = classNames.bind(styles)

const tutorials = [
    {
        heading: 'Đăng ký ví',
        items: [
            {
                logo: 'https://obhash.gaotuprofessional.com/_nuxt/img/platform_trustwallet.b3f73ef.png',
                link: ' trustwallet.com/',
            },
            {
                logo: 'https://obhash.gaotuprofessional.com/_nuxt/img/platform_tronlink.0b60510.png',
                link: 'trustwallet.com/',
            },
        ]
    },
    {
        heading: 'Mua tiền ảo',
        items: [
            {
                logo: 'https://obhash.gaotuprofessional.com/_nuxt/img/platform_yibifu.bd66b96.png',
                link: 'trustwallet.com/',
            },
            {
                logo: 'https://obhash.gaotuprofessional.com/_nuxt/img/platform_gate.8338574.png',
                link: 'trustwallet.com/',
            },
            {
                logo: 'https://obhash.gaotuprofessional.com/_nuxt/img/platform_yibifu.bd66b96.png',
                link: 'trustwallet.com/',
            },
        ]
    },

    {
        heading: 'Trúng thưởng trả về',

    },

]

function Turtorial(props) {
    const [mode, setMode] = useState('left');
    const onChange = (e) => {
        setMode(e.target.value);
    };


    return (
        <div className={cx('wrapper')}>

            <div className={cx('heading')}>
                <Wings  >
                    Quy trinh tham gia
                </Wings>
            </div>
            <div className={cx('content')}>
                <Timeline mode={mode}>

                    {
                        tutorials.map((line) => (
                            <Timeline.Item  >

                                <h2 className={cx('time-line')}>{line.heading}</h2>
                                {
                                    line?.items && line?.items.map(item => (

                                        <TurtorialItem logo={item?.logo} link={item?.link} />
                                    ))
                                }


                            </Timeline.Item>
                        ))
                    }
                </Timeline>
                    <div className={cx('bingo')}>
                        <h3>Sau khi trúng thưởng hệ thống sẽ tự động trả tiền</h3>
                        
                        <img src='https://obhash.gaotuprofessional.com/_nuxt/img/progress-4-title.968de16.png'/>
                    </div>

            </div>
        </div>
    )
}

Turtorial.propTypes = {}

export default Turtorial
