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
      {/* Секция 1: Вводный модуль — отдельная полоса, граница под ней */}
      <div className={style.sectionStrip} data-section="intro">
        <div className="container">
          <section className={`${style.section} ${style.sectionIntro}`} aria-label="Вводный модуль">
            <div className={style.sectionHeader}>
              <SubHeader title="ВВОДНЫЙ МОДУЛЬ" />
            </div>
            <div className={style.initModule}>
              <div className={style.initModuleVideo}>
                <Video link="https://youtu.be/w6TqvgY5478" />
              </div>
              <div className={style.initModuleActions}>
                <div className={style.initModuleButtons}>
                  <Link
                    to={
                      "https://docs.google.com/forms/d/e/1FAIpQLSfyhEOga2_AaErFDRKpKJOl1SWDBPMJG49ydcLzaam6gkcvSA/viewform?usp=sharing"
                    }
                    className={style.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button text="Анкета" variant="primary" />
                  </Link>
                  <Link
                    to={
                      "https://docs.google.com/spreadsheets/d/1npc30rf6g4ySJypBHJggkOFf3bNxf4WfAT7FuVflUCo/edit?usp=drive_link"
                    }
                    className={style.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button text="Расписание" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Разделитель между секциями */}
      <div className={style.sectionDivider} aria-hidden="true" />

      {/* Секция 2: Модули курса — отдельная полоса, граница под ней */}
      <div className={style.sectionStrip} data-section="modules">
        <div className="container">
          <section className={`${style.section} ${style.sectionModules}`} aria-label="Модули курса">
            <div className={style.sectionHeader}>
              <SubHeader title="МОДУЛИ КУРСА" />
            </div>
            <Modules modules={modulesList} />
          </section>
        </div>
      </div>

      {/* Разделитель перед доп. блоком */}
      <div className={style.sectionDivider} aria-hidden="true" />

      {/* Секция 3: Дополнительные блоки */}
      <section className={style.additionsBlocks} aria-label="Дополнительные блоки">
        <div className="container">
          <div className={style.sectionHeaderAdditions}>
            <SubHeader title="ДОПОЛНИТЕЛНЫЕ БЛОКИ" />
          </div>
          <Modules modules={additionsBlock} isBlue />
        </div>
      </section>
    </>
  );
};

export default Home;
