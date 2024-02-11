import { useEffect, useState } from "react";
import RoomsCard from "./RoomsCard";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const category = params.get("category");

  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/shakilahmedatik/stay-vista-resources/main/data/rooms.json")
      .then((response) => {
        const data = response.data;
        if (category) {
          const filteredData = data.filter(
            (item) => item.category === category
          );
          setRooms(filteredData);
          // setLoading(false);
        } else {
          setRooms(data);
          // setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [category]);

  if(rooms.length < 0){
    setLoading(true)
  }

  if (loading) {
    return <Loader smallHeight={true} />;
  }

  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {rooms.map((room) => (
            <RoomsCard room={room} key={room._id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col h-[50vh] justify-center">
        <Heading
          title={"Category is not avaiable"}
          subtitle={"please search other categories"}
          center={true}
        />
        </div>

      )}
    </Container>
  );
};

export default Rooms;
