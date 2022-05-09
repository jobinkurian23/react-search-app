import styles from "./index.module.scss";
import Image from "../Image/index";
const Loader = () => {
  return (
    <>
      <div className={`${styles.overlay}`}>
        <Image
          imgSrc={"/assets/icons/Loading.gif"}
          className={styles.loadingIcon}
          alt={"loading"}
          width={80}
        />
        <div className={styles.backDrop}></div>
      </div>
    </>
  );
};
export default Loader;
