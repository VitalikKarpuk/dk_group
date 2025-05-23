import classNames from "classnames";
import logo from "./logo.png";

import style from "./index.module.css";
import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <Link to={"/"}>
      <img src={logo} alt="" className={classNames(style.logo, className)} />
    </Link>
  );
};

export default Logo;
