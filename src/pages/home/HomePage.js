import Game from "../../components/Game";
import Header from "../../components/Header";
import Notify from "../../components/Noify";
import TextSlide from "../../components/TextSlide";
import Warning from "../../components/Warning";
import Wings from "../../components/Wings";
import "antd/dist/antd.css";
import Turtorial from "../../components/Turtorial";
import Ecosystem from "../../components/Ecosystem";
import Faq from "../../components/Faq";
import Partner from "../../components/Partner";
import images from "../../assets";
import "./home.scss";
import { Link } from "react-router-dom";
import Container from "../../components/Container";

const notification = [
  {
    name: "ngô minh tài",
    money: 3000,
  },
  {
    name: "ngô minh tài 2001",
    money: 2001,
  },
  {
    name: "ngô minh tài 123",
    money: 752,
  },
  {
    name: "ngô minh tài 2422275",
    money: 5000,
  },
  {
    name: "donal trump",
    money: 100000,
  },
  {
    name: "mark zurkerburt",
    money: 3,
  },
  {
    name: "Bắp minh ngô",
    money: 600,
  },
  {
    name: "petter",
  },
  {
    name: "lý gia kiệt",
  },
  {
    name: "ronaldo",
  },
  {
    name: "messi",
  },
];
function Home() {

  

  return (
    <>
      <Header />

      <TextSlide listText={notification} />
      <Warning   />
      <Game />

      <Turtorial />

      <Ecosystem />

      <Faq />

      <Partner />

      <Link to="/custommer-care" className="home__custom-cart">
        <img src={images.icons.customCare} />
      </Link>
    
    
    </>
  );
}

export default Home;
