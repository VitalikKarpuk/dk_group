import { ReactComponent as InstagramIcon } from "./instagram.svg";
import { ReactComponent as TelegramIcon } from "./telegram.svg";

import style from "./index.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.mediaBlock}>
          <p className="t-inter-semi-bold">Связаться со мной:</p>
          <Link
            to={
              "https://www.instagram.com/daria_kushnerova.psy?igsh=ZWdtM2M3Zjc0MnBs"
            }
            target="_blank"
          >
            <InstagramIcon />
          </Link>
          <Link to={"https://t.me/dariakushnerova"} target="_blank">
            <TelegramIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
