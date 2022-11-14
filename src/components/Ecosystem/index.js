import React from 'react'
import styles from './Ecosystem.module.scss'
import classNames from 'classnames/bind'
import Wings from '../Wings'

const cx = classNames.bind(styles)


export default function Ecosystem() {
  return (
    <div className={cx('wrapper')}>

      <div className={cx('heading')}>
        <Wings  >
          Hệ sinh thái OB
        </Wings>
      </div>


      <div className={cx('content')}>
        <p>OB Games cam kết tạo ra những trò chơi triển vọng trong ngành. Công ty là đối tác chiến lược với hàng nghìn công ty, phục vụ hơn 30 khu vực và phát triển thành công nhiều trò chơi được ưa chuộng nhất. Với dịch vụ chuyên nghiệp và an toàn, OB Games được người chơi trên toàn thế giới tin tưởng và dẫn đầu sự phát triển của ngành giải trí toàn cầu.</p>
        <img className={cx('img')} src='https://obhash.gaotuprofessional.com/_nuxt/img/ob-ecology.8fd08a5.jpg' />
      </div>
    </div>
  )
}
