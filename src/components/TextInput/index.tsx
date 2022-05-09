import styles from "./index.module.scss";
const textInput = (props: any) => {
  const { placeHolder, name = "", className = "", handleChange = null } = props;
  return (
    <input
      type="text"
      placeholder={placeHolder}
      name={name}
      onChange={handleChange}
      className={`form-control border-0 ${styles.textInput} ${className}`}
    />
  );
};
export default textInput;
