import { useParams } from "react-router";
import { modulesList } from "../../common/constants";

import style from "./index.module.css";
import Button from "../../components/atoms/button";
import Video from "./video";
import { Link } from "react-router-dom";

const Module = () => {
  let params = useParams();

  const module = modulesList.find(
    ({ id, disabled }) => id === params.id && !disabled
  );

  if (!module) {
    window.location.href = "/404";
  }

  return (
    <div className={style.wrapper}>
      {module.links.map(({ url, title, dz, buttonText }) => {
        return (
          <>
            <h1>{title}</h1>
            <div className={style.videoWrapper}>
              <Video link={url} />

              {buttonText && (
                <Link to={dz} className={style.button} target="_blank">
                  <Button text={buttonText || "Домашнее задание"} />
                </Link>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Module;
