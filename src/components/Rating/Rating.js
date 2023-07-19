import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Rating.css";

export default function Rating({ note }) {
  const icons = Array.from(Array(5).keys());

  return (
    <div>
      {icons.map((index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={`${index + 1 > note ? "grey" : "red"}`}
        />
      ))}
    </div>
  );
}

Rating.propTypes = {
  note: PropTypes.number.isRequired
}
