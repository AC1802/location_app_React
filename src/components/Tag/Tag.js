import PropTypes from "prop-types";
import styles from "../../styles/Tag.module.css";

export default function Tag({ tag }) {
  return (
    <div className={styles.pContainer}>
      <p className={styles.p}>{tag}</p>
    </div>
  );
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired
}