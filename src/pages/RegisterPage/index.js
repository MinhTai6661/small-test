import React from 'react'
import HeaderChildPage from '../../components/HeaderChildPage'
import styles from './RegisterPage.module.scss'
import classNames from 'classnames/bind'
import images from '../../assets'
import InputField from '../../components/InputField'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)


export default function RegisterPage() {
    return (
        <div className={cx('wrapper')}>
            <HeaderChildPage content='Đăng ký' />
            <div className={cx('banner')}>
                <img src={images.logo} />
            </div>
            <div className={cx('content')}>
                <form>
                    <InputField label='Mời nhập địa chỉ TRC20' icon={<UserOutlined />} />
                    <InputField type='password' label='Mời nhập mật khẩu của bạn' icon={<LockOutlined />} />
                    <InputField type='password' label='Mời nhập lại mật khẩu của bạn' icon={<LockOutlined />} />
                    <div className={cx('register-login')}>
                        <button className={cx('btn-register')} type='submit'>Đăng ký</button>
                        <Link to='/login' className={cx('login-now')}>Đã có tài khoản? đăng nhập ngay</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
