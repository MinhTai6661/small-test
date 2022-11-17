import { LeftOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderChildPage.scss'

export default function HeaderChildPage({ content }) {
    return (
        <header className='header__child'>
            {content}
            <Link to='/' className='header__child-icon'><LeftOutlined /></Link>
        </header>
    )
}
