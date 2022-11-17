import React from 'react'
import images from '../../assets'
import Container from '../../components/Container'
import './GuidePage.scss'
import { LeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import HeaderChildPage from '../../components/HeaderChildPage'

export default function GuidePage() {
    return (
        <div className='guide'>
            <HeaderChildPage content='huong dan' />

            <img className='guide__img' src={images.guide} />
        </div>
    )
}
