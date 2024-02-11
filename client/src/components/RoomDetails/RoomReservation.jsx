import PropTypes from "prop-types";
import Calender from "./Calender";
import Button from "../Button/Button";


const RoomReservation = ({ room }) => {
 /*  const totalDays = formatDistance(
    new Date(room?.to),
    new Date(room?.from)
  ).split(" ")[0];

  const totalPrice = parseInt(totalDays) * room?.price;

  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "selection",
  }); */

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white shadow-lg">
      <div className="flex items-center gap-1 p-4">
        <div className="font-semibold text-2xl">${room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender />
      </div>
      <hr />
      <div className="p-4">
        <Button label={"Reserve"} />
      </div>
      <hr />
      <div className="flex items-center justify-between font-semibold text-lg p-4">
        <div>Total</div>
        <div>${room?.price}</div>
      </div>
    </div>
  );
};

RoomReservation.propTypes = {
  room: PropTypes.any,
};

export default RoomReservation;
