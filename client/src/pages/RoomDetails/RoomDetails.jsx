import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(false);

  // send it from the server on refactoring
  useEffect(() => {
    setLoading(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singleRoom = data.find((room) => room._id === id);
        setRoom(singleRoom);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <Header roomData={room} />
        </div>
        <div className="my-3 grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
          {/* Room Info */}
          <RoomInfo roomData={room} />
          <div className="md:col-span-3 order-first md:order-last">
            {/* Room Reservation */}
            <RoomReservation room={room} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
