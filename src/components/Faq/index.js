
import classNames from 'classnames/bind'
import styles from './Faq.module.scss'
import React from 'react'
import Wings from '../Wings'

const cx = classNames.bind(styles)

export default function index() {


    return (
        <div className={cx('wrapper')}>
            <div class={cx('header')}>
                <Wings>Faq</Wings>
            </div>
            <div className={cx('content')}>
                <div className={cx('question-item')}>
                    <h3>
                        Q1: Block hash là gì?
                    </h3>
                    <p>
                        Hàm Block hash là DNA của một đoạn dữ liệu, mỗi Block hash đều là duy nhất, ngẫu nhiên và không thể phá vỡ.
                    </p>
                </div>
                               <div className={cx('question-item')}>

                    <h3>
                        Q2: BlockChain là gì?
                    </h3>
                    <p>
                        Blockchain về cơ bản là một cơ sở dữ liệu được chia sẻ trong đó dữ liệu hoặc thông tin được lưu trữ. Nó có các đặc điểm không thể ngụy tạo, lưu vết suốt quá trình, có thể truy xuất nguồn gốc, công khai minh bạch, và duy trì tập thể.
                    </p>
                </div>
                               <div className={cx('question-item')}>

                    <h3>
                        Q3: Ví tập trung? Ví phi tập trung? Tại sao ví tập trung không thể truy vấn CK?
                    </h3>
                    <p>
                        Ví dụ: Địa chỉ ví của bạn là A, bạn chuyển 10USDT đến địa chỉ E, nhưng bạn sử dụng giá trị hash của giao dịch để truy vấn, bạn chỉ có thể truy vấn địa chỉ sổ tài khoản ngẫu nhiên B (hoặc C hoặc D,...) chuyển cho E. Tương tự E không thể biết 10USDT có phải là bạn chuyển hay không, vì E chỉ có thể thấy địa chỉ sổ tài khoản B đã chuyển 10USDT cho anh ta. Đây là lý do tại sao ví tập trung không thể truy vấn thông tin CK thực trên blockchain.
                    </p>
                </div>
                               <div className={cx('question-item')}>

                    <h3>
                        Q4: Tại sao tôi trúng liên tục hoặc mãi không trúng?
                    </h3>
                    <p>
                        Trước hết, không trúng nhiều lần liên tiếp là vấn đề về xác suất nhỏ
                        <a href="https://baike.baidu.com/item/%E5%B0%8F%E6%A6%82%E7%8E%87%E4%BA%8B%E4%BB%B6/7339473" target="_blank" class="c-link">định nghĩa về xác suất </a>
                        , trúng hay không trúng cũng đều là do xác xuất ngẫu nhiên. Tần suất của các sự kiện ngẫu nhiên có xu hướng hướng đến một giá trị ổn định. Trong trường hợp không lặp lại, xác suất xuất hiện của mọi thứ là ngang nhau, trong trường hợp này, cơ hội của mọi người đều giống nhau. Đồng thời, các sự kiện ngẫu nhiên sẽ tuân theo định luật số lớn (trong điều kiện không thay đổi, lặp lại thử nghiệm nhiều lần, tần suất của các sự kiện ngẫu nhiên tương tự như định nghĩa xác suất của quy luật số lớn), và trong trường hợp tần suất CK ngày càng tăng, việc trúng hay không trúng sẽ có xu hướng ổn định. Vì vậy, hãy tiếp tục CK, khi tần suất chuyển tiền tăng lên thì tổng xác suất trúng cũng sẽ tăng lên.
                    </p>
                </div>

            </div>
        </div>
    )
}
