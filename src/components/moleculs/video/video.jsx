import { useState } from "react";
import ReactPlayer from "react-player";

import style from "./index.module.css";
import BubbleLoading from "../../atoms/loading";

const Video = ({ link }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={style.wrapper}>
      {loading && (
        <div className={style.videoLoader}>
          <BubbleLoading className={style.loadingIcon}/>
        </div>
      )}
      <ReactPlayer
        width="100%"
        height="250px"
        controls
        url={link}
        onReady={(e) => setLoading(false)}
      />
    </div>
  );
};

export default Video;
