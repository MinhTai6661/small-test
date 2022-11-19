import React from 'react'
import HeaderChildPage from '../../components/HeaderChildPage'
import styles from './Login.module.scss'
import classNames from 'classnames/bind'
import Input from 'antd/lib/input/Input'
import InputField from '../../components/InputField'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import images from '../../assets/'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

export default function Login() {
  return (
    <div className={cx('wrapper')}>
      
        <HeaderChildPage content='Đăng nhập' />
      
      <div className={cx('banner')}>
        <img src={images.logo} />
      </div>
      <div className={cx('content')}>
          <form>
            <InputField    label='Mời bạn nhập tài khoản' icon={<UserOutlined />}/>
            <InputField type='password' label='Mời bạn nhập mật khẩu' icon={<LockOutlined />} />
            <div className={cx('memorize')}>
              <input type="checkbox" id="memmorize" name="fav_language" value="HTML"/> 
              <label for='memmorize'>Ghi chép địa chỉ ví & mật khẩu</label>
            </div>     
            <button className={cx('btn-login')} type ='submit'>Đăng nhập</button>  
          </form>
          <div className={cx('forgot-register')}>
            <a href='https://chatweb.ox875.com/chat/text/chat_0UQlVI.html?skill=2c9482b68096785e0180a8e4352709c0&l=zh' className={cx('forgot')} target='blank'>Quên mật khẩu ?</a>
            <Link to='/register' className={cx('register')}>Không có tài khoản? đăng ký ngay</Link>
          </div>
      </div>
    </div>
  )
}
