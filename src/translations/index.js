const translations = {

  vi: {
    locale: 'vi',

    messages: {
      hello: 'xin chào {name}',
      notification: {
        winLevel1: 'chúc mừng {name} đã trúng lớn nha, số tiền thưởng là {price} TRX',
        winLevel2: 'chúc mừng {name} đã thắng {price} TRX',
        winLevel3: 'chúc mừng {name} đã tham gia',
      },
      warning: [
        'cảnh báo có rât nhiều hình thức lừa đảo ',
        'hãy đảm bảo bạn đang an toàn ',
      ],
      games: {
        luckyNumber: 'LuckyNumber',
        luckyBP: 'Lucky B-P',
        hashBull: 'Hash Bull',
        luckyHash: 'Lucky Hash',
        address: 'địa chỉ cược ',
        use: 'ví tiền tập trung ',
        ratio: 'tỷ lệ cược  ',
        limit: 'Hạn mức CK',
        int: 'Phần số nguyên của số tiền chuyển khoản sẽ tham dự rút thưởng, phần lẻ thập phân sẽ bị khấu trừ',
        example: {
          title: 'VD{num}',
          know: 'Nhận biết cược tại ',
          lastDigit: 'Chữ số cuối cùng của Block hash là "1" nhận biết là Xỉu ',
          result: 'Kết quả',
          money: 'Tiền hệ thông CK là: '
        }
      },
      tutorials: {
        title: 'QUY TRÌNH THAM GIA',
        signIn: 'Đăng ký ví',
        buy: 'Mua tiền ảo',
        win: 'Trúng thưởng trả về',
        btn: 'Hướng dẫn',
        return: 'Sau khi trúng thưởng hệ thống sẽ tự động trả tiền'
      },
      ecoSystem: {
        title: 'Hệ sinh thái OB',
        introduce: 'OB Games cam kết tạo ra những trò chơi triển vọng trong ngành. Công ty là đối tác chiến lược với hàng nghìn công ty, phục vụ hơn 30 khu vực và phát triển thành công nhiều trò chơi được ưa chuộng nhất. Với dịch vụ chuyên nghiệp và an toàn, OB Games được người chơi trên toàn thế giới tin tưởng và dẫn đầu sự phát triển của ngành giải trí toàn cầu.'
      },
      faq: {
        q1: {
          title: 'Q1: Block hash là gì?',
          answ: 'Hàm Block hash là DNA của một đoạn dữ liệu, mỗi Block hash đều là duy nhất, ngẫu nhiên và không thể phá vỡ.'
        },
        q2: {
          title: 'Q2: BlockChain là gì?',
          answ: ' Blockchain về cơ bản là một cơ sở dữ liệu được chia sẻ trong đó dữ liệu hoặc thông tin được lưu trữ. Nó có các đặc điểm không thể ngụy tạo, lưu vết suốt quá trình, có thể truy xuất nguồn gốc, công khai minh bạch, và duy trì tập thể.'
        },
        q3: {
          title: 'Q3: Ví tập trung? Ví phi tập trung? Tại sao ví tập trung không thể truy vấn CK? ',
          answ: 'Ví dụ: Địa chỉ ví của bạn là A, bạn chuyển 10USDT đến địa chỉ E, nhưng bạn sử dụng giá trị hash của giao dịch để truy vấn, bạn chỉ có thể truy vấn địa chỉ sổ tài khoản ngẫu nhiên B (hoặc C hoặc D,...) chuyển cho E. Tương tự E không thể biết 10USDT có phải là bạn chuyển hay không, vì E chỉ có thể thấy địa chỉ sổ tài khoản B đã chuyển 10USDT cho anh ta. Đây là lý do tại sao ví tập trung không thể truy vấn thông tin CK thực trên blockchain.'
        },
        q4: {
          title: 'Q4: Tại sao tôi trúng liên tục hoặc mãi không trúng?',
          answ: 'Trước hết, không trúng nhiều lần liên tiếp là vấn đề về xác suất nhỏ , trúng hay không trúng cũng đều là do xác xuất ngẫu nhiên. Tần suất của các sự kiện ngẫu nhiên có xu hướng hướng đến một giá trị ổn định. Trong trường hợp không lặp lại, xác suất xuất hiện của mọi thứ là ngang nhau, trong trường hợp này, cơ hội của mọi người đều giống nhau. Đồng thời, các sự kiện ngẫu nhiên sẽ tuân theo định luật số lớn (trong điều kiện không thay đổi, lặp lại thử nghiệm nhiều lần, tần suất của các sự kiện ngẫu nhiên tương tự như định nghĩa xác suất của quy luật số lớn), và trong trường hợp tần suất CK ngày càng tăng, việc trúng hay không trúng sẽ có xu hướng ổn định. Vì vậy, hãy tiếp tục CK, khi tần suất chuyển tiền tăng lên thì tổng xác suất trúng cũng sẽ tăng lên',
          small: 'định nghĩa về xác suất '
        },
      },
      partner: {
        title: 'Đối tác'
      }
    }

  },

  en: {
    locale: 'en',
    messages: {
      hello: 'hello {name}',
      notification: {
        winLevel1: 'congrats {name} for winning the big prize, the prize amount is {price} TRX',
        winLevel2: 'congrats {name} for winning {price} TRX',
        winLevel3: 'congrats {name} for joining',
      },
      warning: [
        'warning there are many forms of fraud',
        'make sure you are safe',
      ],
      games: {
        luckyNumber: 'LuckyNumber',
        luckyBP: 'Lucky B-P',
        hashBull: 'Hash Bull',
        luckyHash: 'Lucky Hash',
        address: 'bet address',
        use: 'centralized wallet',
        ratio: ' the odds',
        limit: 'CK limit',
        int: 'The integer part of the transfer amount will participate in the draw, the decimal part will be deducted',
        example: {
          title: 'Example{num}',
          know: 'Recognize bets at',
          lastDigit: 'The last digit of the Block hash is "1" identified as Less ',
          result: 'Result',
          money: 'CK system currency is: '
        }
      },
      tutorials: {
        title: 'JOIN PROCESS',
        signIn: 'Register wallet',
        buy: 'Buy virtual currency',
        win: 'Return winning',
        btn: 'Instructions',
        return: 'After winning the system will automatically pay'
      },

      ecoSystem: {
        title: 'OB Ecosystem',
        introduce: 'OB Games is committed to creating promising games in the industry. The company is a strategic partner with thousands of companies, serves more than 30 regions and successfully develops many of the most popular games. With professional and safe service, OB Games is trusted by players worldwide and leads the development of the global entertainment industry.'
      },
      faq: {
        q1: {
          title: 'Q1: What is block hash?',
          answ: 'The Block hash function is the DNA of a piece of data, each Block hash is unique, random and unbreakable.'
        },
        q2: {
          title: 'Q2: What is BlockChain?',
          answ: ' Blockchain is basically a shared database in which data or information is stored. It has the characteristics of being unfaxable, traceable, traceable, open to transparency, and collectively maintained.'
        },
        q3: {
          title: 'Q3: Centralized wallet? Decentralized wallet? Why cant centralized wallets query CK ',
          answ: 'Example: Your wallet address is A, you transfer 10USDT to address E, but you use transaction hash value to query, you can just query random account book address B (or C or D,...) transferred to E. Similarly E cannot know if 10USDT is your transfer, because E can only see the address book of account B that transferred 10USDT to him. This is why centralized wallets cannot query real CK information on the blockchain.'
        },
        q4: {
          title: 'Q4: Why do I win continuously or forever?',
          answ: 'First of all, not hitting many times in a row is a matter of small probability, hitting or not hitting is also due to random probability. The frequency of random events tends to a steady value. In the non-repeating case, the probability of everything happening is equal, in this case everyone\'s chances are the same. At the same time, random events will obey the law of large numbers (under constant conditions, repeating the experiment many times, the frequency of random events is similar to the probabilistic definition of the law of large numbers. ), and in case the frequency of CK is increasing, the hit or not hit will tend to be stable. So keep on CK, as the frequency of money transfers increases, the total probability of winning will also increase',
          small: 'definition of probability'
        },
      },
      partner: {
        title: 'Partner'
      }

    },
  },

  china: {
    locale: 'china',
    messages: {
      hello: 'ni hao {name}',
      notification: {

        winLevel1: '恭喜 {name} 赢得大奖，奖金为 {price} TRX',
        winLevel2: '恭喜 {name} 赢得 {price} TRX',
        winLevel3: '恭喜 {name} 加入',
      },
      warning: [
        '警告有多种形式的欺诈',
        '确保你是安全的',
      ],
      games: {
        luckyNumber: '幸运数字',
        luckyBP: '幸运BP',
        hashBull: '哈希公牛',
        luckyHash: '幸运哈希',
        address: '投注地址',
        use: '集中钱包',
        ratio: '赔率 ',
        limit: 'CK限制',
        int: '转账金额整数部分参与抽奖，小数部分扣除',
        example: {
          title: '例子{num}',
          know: '识别赌注',
          lastDigit: 'Block hash的最后一位为“1”标识为Less',
          result: '结果',
          money: 'CK系统货币为'
        }
      },

      tutorials: {
        title: '加入流程',
        signIn: '注册钱包',
        buy: '购买虚拟货币',
        win: '返回中奖',
        btn: '说明',
        return: '中奖后系统会自动支付'
      },
      ecoSystem: {
        title: 'OB生态系统',
        introduce: 'OB Games致力于打造业界有前途的游戏。 公司是上千家企业的战略合作伙伴，服务于30多个地区，成功开发了多款热门游戏。 OB Games以专业、安全的服务，受到全球玩家的信赖，引领全球娱乐产业的发展',
      },
      faq: {
        q1: {
          title: 'Q1: 什么是区块哈希？',
          answ: 'Block hash function是一段数据的DNA，每个Block hash都是唯一的，随机的，牢不可破的。',
        },
        q2: {
          title: 'Q2: 什么是区块链？',
          回答: '区块链基本上是一个共享数据库，其中存储数据或信息。具有不可传真、可追溯、可溯源、公开透明、集体维护等特点。',
        },
        q3: {
          title: 'Q3: 中心化钱包？去中心化钱包？为什么中心化钱包查询不到CK？ ',
          answ: '例子：你的钱包地址是A，你转了10USDT到地址E，但是你用交易哈希值查询，你可以随便查询一个转账到E的账本地址B（或者C或者D，...）。同样E无法知道10USDT是不是你的转账，因为E只能看到转账10USDT给他的账户B的通讯录。这就是中心化钱包无法在区块链上查询真实CK信息的原因。',
        },
        q4: {
          title: 'Q4: 为什么我连续赢或者永远赢？',
          answ: '首先，连续多次不中是小概率问题，中不中也是随机概率。随机事件的频率趋于稳定值。在不重复的情况下，所有事情发生的概率都是相等的，在这种情况下每个人的机会都是一样的。同时，随机事件会服从大数定律（在一定条件下，多次重复实验，随机事件出现的频率类似于大数定律的概率定义。），如果频率CK的增加，命中与未命中会趋于稳定。所以继续CK，随着转账频率的增加，总的中奖概率也会增加',
          small: '概率的定义'
        },
      },
      partner: {
        title: '合作伙伴'
      }
    }
  }
}
export default translations