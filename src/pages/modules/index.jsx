import { Link } from "react-router-dom";
import { additionsBlock, modulesList } from "../../common/constants";
import SubHeader from "../../components/atoms/subheader/inde";
import Video from "../../components/moleculs/video/video";
import Modules from "../../components/organisms/modules/modules";

import style from "./index.module.css";
import Button from "../../components/atoms/button";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className={style.initModule}>
          <SubHeader title="ВВОДНЫЙ МОДУЛЬ" />
          <Video link="https://youtu.be/2MJbZs6Ckt0" />
          <Link
            to={
              "https://docs.google.com/forms/d/e/1FAIpQLSfyhEOga2_AaErFDRKpKJOl1SWDBPMJG49ydcLzaam6gkcvSA/viewform?usp=sharing"
            }
            className={style.button}
            target="_blank"
          >
            <Button text="Анкета" />
          </Link>
          <Link
            to={
              "https://docs.google.com/spreadsheets/d/17EcGSWig6qse4GM3TXqoAg0q9j5dt8mbDJB8QQhgwR4/edit?usp=drive_link"
            }
            className={style.button}
            target="_blank"
          >
            <Button text={"Расписание"} />
          </Link>
        </div>
        <SubHeader title="МОДУЛИ КУРСА" />
        <Modules modules={modulesList} />
      </div>
      <div className={style.additionsBlocks}>
        <div className="container">
          <SubHeader title="ДОПОЛНИТЕЛНЫЕ БЛОКИ" />
          <Modules modules={additionsBlock} isBlue />
        </div>
      </div>
    </>
  );
};

export default Home;
