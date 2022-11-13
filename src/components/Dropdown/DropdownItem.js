import classNames from 'classnames/bind'
import styles from './Dropdown.module.scss'
import React from 'react'
import PropTypes from 'prop-types'
import {CaretUpOutlined} from '@ant-design/icons'
 

const cx = classNames.bind(styles)



function DropdownItem({ title, arrow , flag}) {
    return (
        <button className={cx('item')}>
            <span className={cx('flag')}>
                <img src={flag}/>
            </span>
            {title}
           { arrow && <span className={cx('arrow')}>  <CaretUpOutlined /></span>}
        </button>
    )
}

DropdownItem.propTypes = {
    title: PropTypes.string,
    flag: PropTypes.string,

}

export default DropdownItem

