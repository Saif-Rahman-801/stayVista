import PropTypes from "prop-types"
import { DateRange } from "react-date-range";

const Calender = ({ value, handleSelect }) => {
    console.log(value, handleSelect);
  return (
    <DateRange
      rangeColors={["#F43F5E"]}
      direction="vertical"
      showDateDisplay={false}
    />
  );
};

Calender.propTypes = {
  handleSelect: PropTypes.any,
  value: PropTypes.any
}

export default Calender;
