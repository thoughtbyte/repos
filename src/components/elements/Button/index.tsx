import { FC, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button className={styles.button} {...props} />;
};

export default Button;
