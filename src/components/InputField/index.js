import React, { useState } from 'react'
import styles from './InputField.module.scss'
import classNames from 'classnames/bind'
import { CloseOutlined } from '@ant-design/icons'

const cx = classNames.bind(styles)


export default function InputField({type,icon,label}) {

  const [input,setInput]= useState('')
  const handleSetInput = (value)=>{
    setInput(value)
  }
  const handleClear =()=>{
    setInput('')
  }

  return (
    <div className={cx('wrapper')}>
      <span className={cx("icon")}>
        {icon}
      </span>
        <input type={type} placeholder={label} value={input} onChange={(e)=>{handleSetInput(e.target.value)}}/>
        <span className={cx("btn-clear")} onClick={handleClear}> <CloseOutlined /></span>
    </div>
  )
}
