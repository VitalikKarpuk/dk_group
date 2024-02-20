import classNames from "classnames";
import style from "./index.module.css";

const Button = ({ text, className, variant, disabled }) => {
  return (
    <button
      className={classNames(
        style.button,
        "t-inter-bold",
        style[variant],
        className,
      )}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
