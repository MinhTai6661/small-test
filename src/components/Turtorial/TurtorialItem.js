import { useState } from 'react'
import PropTypes from 'prop-types'
import Wings from '../Wings'
import styles from './Turtorial.module.scss'
import classNames from 'classnames/bind'
import { Timeline } from 'antd'




const cx = classNames.bind(styles)

function TurtorialItem({ logo, logoName, link }) {
    return (
        <div className={cx('item')}>
            <span className={cx('logo')}>
                <img src={logo} />  
            </span>
            <a className={cx('link')} href={link}>{link}</a>
            <buton className={cx('btn')}>hướng dẫn</buton>
        </div>
    )
}

TurtorialItem.propTypes = {}

export default TurtorialItem
