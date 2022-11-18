import React, { useEffect, useState, useTransition } from 'react'
import PropTypes from 'prop-types'
import Wings from '../Wings'
import styles from './Turtorial.module.scss'
import classNames from 'classnames/bind'
import { Timeline } from 'antd'
import TurtorialItem from './TurtorialItem'
import { useTranslate } from 'react-redux-multilingual'


const cx = classNames.bind(styles)

const tutorials = [
    {
        heading: 'Đăng ký ví',
        items: [
            {
                logo: 'https://obhash.gaotuprofessional.com/_nuxt/img/platform_trustwallet.b3f73ef.png',
                link: 'trustwallet.com/',
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
    const translate = useTranslate()
    
    const [mode, setMode] = useState('left');
    const onChange = (e) => {
        setMode(e.target.value);
    };

    tutorials[0].heading = translate('tutorials.signIn')
    tutorials[1].heading = translate('tutorials.buy')
    tutorials[2].heading = translate('tutorials.win')
    

    return (
        <div className={cx('wrapper')}>

            <div className={cx('heading')}>
                <Wings  >
                  { translate('tutorials.title')}
                </Wings>
            </div>
            <div className={cx('content')}>
                <Timeline mode={mode} >

                    {
                        tutorials.map((line,index) => (
                            <Timeline.Item  key={index} >
                                <h2 className={cx('time-line')}>{line.heading}</h2>
                                {
                                    line?.items && line?.items.map((item,index) => (
                                        <TurtorialItem key={index} logo={item?.logo} link={item?.link} />
                                    ))
                                }


                            </Timeline.Item>
                        ))
                    }
                </Timeline>
                <div className={cx('bingo')}>
                    <h3>{translate('tutorials.return')}</h3>
                    <img src='https://obhash.gaotuprofessional.com/_nuxt/img/progress-4-title.968de16.png' />
                </div>

            </div>
        </div>
    )
}

Turtorial.propTypes = {}

export default Turtorial
