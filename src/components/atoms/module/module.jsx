import { Link } from "react-router-dom";
import style from "./index.module.css";
import classNames from "classnames";
import Button from "../button";

const Module = ({ title, id, description, isBlue, disabled }) => {
  return (
    <article
      className={classNames(style.wrapper, {
        [style.wrapperAdditions]: isBlue,
        [style.wrapperDisabled]: disabled,
      })}
    >
      <div className={style.badgeRow}>
        <span className={classNames(style.badge, { [style.blueBadge]: isBlue })}>
          Модуль {id}
        </span>
        {disabled && <span className={style.soonBadge}>Скоро</span>}
      </div>
      {disabled ? (
        <h3 className={classNames(style.title, "t-inter-medium")}>{title}</h3>
      ) : (
        <Link to={id} className={style.titleLink}>
          <h3 className={classNames(style.title, "t-inter-medium")}>{title}</h3>
        </Link>
      )}
      <p className={style.description}>{description}</p>
      <div className={style.cta}>
        {disabled ? (
          <Button
            text="Переход к уроку"
            variant={isBlue ? "primary" : undefined}
            className={style.button}
            disabled
          />
        ) : (
          <Link to={id} className={style.ctaLink}>
            <Button
              text="Переход к уроку"
              variant={isBlue ? "primary" : undefined}
              className={style.button}
            />
          </Link>
        )}
      </div>
    </article>
  );
};

export default Module;
