import { Link } from "react-router-dom";
import Button from "../../components/atoms/button";

import style from "./index.module.css";

const Page404 = () => {
  return (
    <div className={style.wrapper}>
      <h2>ERROR 404</h2>
      <p className="t-inter-semi-bold">Страница не найдена</p>
      <Link to="/">
        <Button text={"HOME"} />
      </Link>
    </div>
  );
};

export default Page404;
