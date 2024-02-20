import classNames from "classnames";
import Icon from "./photo.png";
import style from "./index.module.css";
import Logo from "../../../atoms/logo";

const MainBanner = ({ className }) => {
  return (
    <div className={classNames(style.wrapper, className)}>
      <div className="container">
        <header>
          <Logo />
          <p>Доступ до 31 мая (включительно)</p>
        </header>
        <div className={style.textBlock}>
          <h1 className={classNames(style.growthGroup, "t-inter-bold")}>
            ГРУППА РОСТА
          </h1>
          <h3 className="t-inter-semi-bold">
            место твоих профеcсиональных и <br />
            личностных перемен
          </h3>
          <p>Личный кабинет курса</p>
          <img src={Icon} alt="" className={style.photo} />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
