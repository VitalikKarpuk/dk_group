import React from "react";
import Module from "../../atoms/module/module";

import style from "./index.module.css";
import classNames from "classnames";

const Modules = ({ modules, className, isBlue }) => {
  return (
    <div className={classNames(style.wrapper, className)}>
      {modules.map((item) => {
        return <Module {...item} isBlue={isBlue}/>;
      })}
    </div>
  );
};

export default Modules;
