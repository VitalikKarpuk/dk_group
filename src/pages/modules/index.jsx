import { additionsBlock, modulesList } from "../../common/constants";
import SubHeader from "../../components/atoms/subheader/inde";
import Modules from "../../components/organisms/modules/modules";

import style from "./index.module.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <SubHeader title="МОДУЛИ КУРСА" />
        <Modules modules={modulesList} />
      </div>
      <div className={style.additionsBlocks}>
        <div className="container">
          <SubHeader title="ДОПОЛНИТЕЛНЫЕ БЛОКИ" />
          <Modules modules={additionsBlock} isBlue/>
        </div>
      </div>
    </>
  );
};

export default Home;
