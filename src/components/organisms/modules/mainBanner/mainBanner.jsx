import classNames from "classnames";
import Icon from "./photo.png";
import style from "./index.module.css";

const MainBanner = ({ className }) => {
  return (
    <div className={classNames(style.wrapper, className)}>
      <div className="container">
        <div className={style.row}>
          <div className={style.textBlock}>
            <div className={style.textInner}>
              <p className={style.label}>Личный кабинет курса</p>
              <h1 className={classNames(style.growthGroup, "t-inter-bold")}>
                Я ЛИДЕР
              </h1>
              <p className={style.tagline}>
                Место твоих профессиональных и личностных перемен
              </p>
            </div>
          </div>
          <div className={style.photoWrap}>
            <img src={Icon} alt="" className={style.photo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
