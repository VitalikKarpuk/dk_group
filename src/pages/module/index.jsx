import { useParams, Link, Navigate } from "react-router-dom";
import { additionsBlock, modulesList } from "../../common/constants";

import style from "./index.module.css";
import Button from "../../components/atoms/button";
import Video from "../../components/moleculs/video/video";

const Module = () => {
  const params = useParams();
  const module = modulesList.find(
    ({ id, disabled }) => id === params.id && !disabled
  );
  const additionBlock = additionsBlock.find(
    ({ id, disabled }) => id === params.id && !disabled
  );
  const block = module || additionBlock;

  if (!block) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className={style.wrapper}>
      <div className="container">
        <Link to="/" className={style.backLink}>
          ← К модулям
        </Link>

        <header className={style.header}>
          <h1 className={style.title}>{block.title}</h1>
          {block.description && (
            <p className={style.description}>{block.description}</p>
          )}
        </header>

        <div className={style.lessons}>
          {block.links.map((lesson, index) => (
            <section
              key={lesson.url || index}
              className={style.lesson}
              aria-labelledby={`lesson-${index}`}
            >
              <h2 id={`lesson-${index}`} className={style.lessonTitle}>
                {lesson.title || block.title}
              </h2>
              <div className={style.videoWrap}>
                <Video link={lesson.url} />
              </div>
              {lesson.dz?.length > 0 && (
                <div className={style.actions}>
                  {lesson.dz.map((item) => (
                    <a
                      key={item.link}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.actionLink}
                    >
                      <Button
                        text={item.buttonText || "Домашнее задание"}
                        variant="primary"
                      />
                    </a>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Module;
