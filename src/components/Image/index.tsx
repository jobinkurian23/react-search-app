import styles from "./index.module.scss";
const Image = (props: any) => {
  const {
    className = "",
    onClick = null,
    imgSrc,
    title = "",
    width = "auto",
    height = "auto",
    alt = "",
    wrapperClass = null,
  } = props;
  return (
    <>
      {wrapperClass ? (
        <div className={wrapperClass ? wrapperClass : styles.imgWrapper}>
          <img
            onClick={onClick}
            src={imgSrc}
            width={width}
            title={title}
            height={height}
            alt={alt}
            className={className}
          />
        </div>
      ) : (
        <img
          onClick={onClick}
          src={imgSrc}
          title={title}
          width={width}
          height={height}
          alt={alt}
          className={className}
        />
      )}
    </>
  );
};
export default Image;
