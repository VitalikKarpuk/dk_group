import classNames from 'classnames';
import style from './index.module.css'

const SubHeader = ({ title }) => {
  return <div className={classNames(style.subheader, 't-inter-bold')}>
    {title}
  </div>;
};

export default SubHeader;
