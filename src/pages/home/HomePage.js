

import Game from "../../components/Game";
import Header from "../../components/Header";
import Notify from "../../components/Noify";
import TextSlide from "../../components/TextSlide";
import Warning from "../../components/Warning";
import Wings from "../../components/Wings";
import 'antd/dist/antd.css';
import Turtorial from "../../components/Turtorial";


const notification = [
    {
        level: 1,
        title: 'ngô minh tài đã trúng lớn nha, số tiền thưởng là ',
        money: 3000,

    },
    {
        level: 2,
        title: 'Bắp minh ngô đã thắng ',
        money: 500,
    },
    {
        level: 3,
        title: 'chúc mừng đã tham gia'
    },
]
function Home() {
    return (
        <>

            <Header></Header>
            <TextSlide listText={
                notification
            } />
            <Warning content='cảnh báo có rât nhiều hình thức lừa đảo' />
            <Game />
           
            <Turtorial />

        </>
    );
}

export default Home;