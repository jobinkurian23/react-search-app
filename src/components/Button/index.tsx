import styles from "./index.module.scss";
const Button = (props: any) => {
  const { className = "", type = "button", text, clickHandler } = props;
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={clickHandler ? clickHandler : () => false}
    >
      {text}
    </button>
  );
};
export default Button;
