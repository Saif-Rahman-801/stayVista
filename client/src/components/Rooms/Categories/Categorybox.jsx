/* eslint-disable react/prop-types */
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const Categorybox = ({ label, icon: Icon }) => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
      const updatedQuery = {
        ...currentQuery,
        category: label,
      };

      const url = qs.stringifyUrl({
        url: "/",
        query: updatedQuery,
      });
      navigate(url);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col justify-center items-center p-3 gap-2 border-b-2 cursor-pointer hover:text-neutral-800 transition"
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label} </div>
    </div>
  );
};

export default Categorybox;
