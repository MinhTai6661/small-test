

import classNames from 'classnames/bind'
import styles from './TextSlide.module.scss'
import React, { useEffect, useState } from 'react'
import { LikeFilled, LikeOutlined } from '@ant-design/icons'
import { useTranslate } from 'react-redux-multilingual'

const cx = classNames.bind(styles)
const getRandomText = (list) => {
    const randomIndex = Math.floor(Math.random() * list.length)
   return list[randomIndex]
}
export default function TextSlide({ listText }) {
   console.log( getRandomText(listText).name)
    const translate = useTranslate()

    const [currentLine1 , setCurrentLine1] = useState( getRandomText(listText))
    const [currentLine2, setCurrentLine2] = useState( getRandomText(listText))
    const [currentLine3 , setCurrentLine3] = useState( getRandomText(listText))

    useEffect(() => {
      const intervalID = setInterval(()=>{
        setCurrentLine1(getRandomText(listText))
        setCurrentLine2(getRandomText(listText))
        setCurrentLine2(getRandomText(listText))
      },20000)
    
      return () => {
        clearInterval(intervalID)
      }
    }, [])


    return (
        <div className={cx('wrapper')}>
            <marquee  >
            <span className={cx('item', { lv1: currentLine1.money >=3000, lv2:currentLine1.money ,lv3 :!currentLine1.money})}>
                    {currentLine1.money && <span className={cx('icon')}><LikeFilled /></span> }      
                    <span className={cx('content')}>            
                        {translate(currentLine1.money >=3000 ? 'notification.winLevel1': currentLine1.money ? 'notification.winLevel2': 'notification.winLevel3', { name: currentLine1.name })}
                        <strong>{currentLine1.money}</strong>
                        {currentLine1.money && 'TRX'}

                    </span>
                </span>
            </marquee>

            <marquee  >
            <span className={cx('item', { lv1: currentLine2.money >=3000, lv2:currentLine2.money >500 ,lv3 :!currentLine2.money})}>
                    {currentLine2.money && <span className={cx('icon')}><LikeFilled /></span> }                
                    <span className={cx('content')}>            
                        {translate(currentLine2.money >=3000 ? 'notification.winLevel1': currentLine2.money ? 'notification.winLevel2': 'notification.winLevel3', { name: currentLine2.name })}
                        <strong>{currentLine2.money}</strong>
                        {currentLine2.money && 'TRX'}
                    </span>
                </span>
            </marquee>
            
            <marquee  >
                <span className={cx('item', { lv1: currentLine3.money >=3000, lv2:currentLine3.money ,lv3 :!currentLine3.money})}>
                    {currentLine3.money && <span className={cx('icon')}><LikeFilled /></span> }           
                    <span className={cx('content')}>            
                        {translate(currentLine3.money >=3000 ? 'notification.winLevel1': currentLine3.money ? 'notification.winLevel2': 'notification.winLevel3', { name: currentLine3.name })}
                        <strong>{currentLine3.money}</strong>
                        {currentLine3.money && 'TRX'}

                    </span>
                </span>
            </marquee>
            {
                // listText.map((item,index) => (
                //     item.money >=3000 ?
                //         <marquee key={index}>
                //             <span className={cx('item', { lv1: true })}>
                //                 <span className={cx('icon')}><LikeFilled /></span>

                //                 <span className={cx('content')}>
                //                     {/* {item.name}   <strong > {item.money}  </strong>TRX */}
                //                     {translate('notification.winLevel1',{name:item.name })}<strong>{item.money}</strong>TRX
                //                 </span>
                //         </span>
                //         </marquee>
                //         :
                //         item.money >=500 ?
                //         <marquee key={index}>
                //                 <span className={cx('item', { lv2: true })}>
                //                     <span className={cx('icon')}><LikeFilled /></span>

                //                     <span className={cx('content')}>
                //                 {translate('notification.winLevel2',{name:item.name })}<strong>{item.money}</strong>TRX
                //                     </span>
                //                 </span>
                //             </marquee> :
                //         <marquee key={index}>

                //                 <span className={cx('item', { lv3: true })}>
                //                     {translate('notification.winLevel3',{name:item.name})}
                //                 </span>
                //             </marquee>
                // ))
            }
        </div >
    )
}
