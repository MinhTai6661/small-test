import React from 'react'
import HeaderChildPage from '../../components/HeaderChildPage'
import './ActivitiesList.scss'
import images from '../../assets'

export default function ActivitiesList() {
  return (
    <div className='activities-page'>
      <HeaderChildPage content='Danh sách hoạt động' />
    <div className='activities-page__list'>
        {
          images.activities.map((item) => (
            <img src={item} key={item} />
          ))
        }
    </div>
    </div>
  )
}
