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
    level: 1,
    name: "ngô minh tài   ",
    money: 3000,
  },
  {
    level: 2,
    name: "Bắp minh ngô  ",
    money: 500,
  },
  {
    level: 3,
    name: "petter",
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
