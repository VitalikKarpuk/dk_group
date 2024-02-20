import { Link } from "react-router-dom";
import style from "./index.module.css";
import classNames from "classnames";
import Button from "../button";

const Module = ({ title, id, description, isBlue, disabled }) => {
  return (
    <div className={style.wrapper}>
      <div className={classNames(style.id, {
        [style.blueId]: isBlue
      })}>{id}</div>
      <Link to={id}>
        <p className={classNames(style.title, "t-inter-medium")}>{title}</p>
      </Link>
      <p className={style.description}>{description}</p>
      <div className={style.link}>
        <Link to={id}>
          <Button text={"Переход к уроку"} className={style.button} disabled={disabled}/>
        </Link>
      </div>
    </div>
  );
};

export default Module;
