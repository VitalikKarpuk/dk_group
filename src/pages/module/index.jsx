import { useParams } from "react-router";
import { modulesList } from "../../common/constants";
import ReactPlayer from "react-player";
import { useState } from "react";

import style from "./index.module.css";
import Button from "../../components/atoms/button";
import Video from "./video";
import { Link } from "react-router-dom";

const Module = () => {
  const [loading, setLoading] = useState(true);
  let params = useParams();
  const module = modulesList.find(({ id }) => id === params.id);
  console.log(module);
  console.log(loading);
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
