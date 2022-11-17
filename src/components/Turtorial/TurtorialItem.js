import { useState } from 'react'
import PropTypes from 'prop-types'
import Wings from '../Wings'
import styles from './Turtorial.module.scss'
import classNames from 'classnames/bind'
import { Timeline } from 'antd'
import { Link } from 'react-router-dom'
import { useTranslate } from 'react-redux-multilingual'
 
const cx = classNames.bind(styles)

function TurtorialItem({ logo, logoName, link }) {
    const translate = useTranslate()
    
    return (
        <div className={cx('item')}>
            <span className={cx('logo')}>
                <img src={logo} />
            </span>
            <a className={cx('link')} href={`http://${link}`} target='blank'>{link}</a>
            <Link to='guide' className={cx('btn')}>
            {translate('tutorials.btn')}
            </Link>
        </div>
    )
}

TurtorialItem.propTypes = {}

export default TurtorialItem
