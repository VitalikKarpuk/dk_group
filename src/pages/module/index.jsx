import { useParams } from "react-router";
import { additionsBlock, modulesList } from "../../common/constants";

import style from "./index.module.css";
import Button from "../../components/atoms/button";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Video from "../../components/moleculs/video/video";

const Module = () => {
  let params = useParams();

  const module = modulesList.find(
    ({ id, disabled }) => id === params.id && !disabled
  );

  const additionBlock = additionsBlock.find(
    ({ id, disabled }) => id === params.id && !disabled
  );

  const block = module || additionBlock;

  if (!block) {
    window.location.href = "/404";
  }

  return (
    <div className={classNames(style.wrapper, "container")}>
      {block.links.map(({ url, title, dz }) => {
        return (
          <>
            <h1>{title}</h1>
            <div className={style.videoWrapper}>
              <Video link={url} />
              {dz?.map(({ buttonText, link }) => {
                return (
                  <Link to={link} className={style.button} target="_blank">
                    <Button text={buttonText || "Домашнее задание"} />
                  </Link>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Module;
