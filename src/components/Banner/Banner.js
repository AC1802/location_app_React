import PropTypes from "prop-types";
import styles from "../../styles/Banner.module.css";

export default function Banner({ className, backgroundImage, title }) {
  return (
    <div
      className={`${styles.img_container} ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <p className={styles.p}>{title}</p>
    </div>
  );
}

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
}