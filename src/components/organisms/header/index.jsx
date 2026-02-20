import Logo from "../../atoms/logo";
import style from "./index.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerInner}>
          <Logo />
          <span className={style.badge}>
            Доступ до 1 июня (включительно)
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
