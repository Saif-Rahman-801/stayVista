/* eslint-disable react/prop-types */
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const Categorybox = ({ label, icon: Icon }) => {
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    // Summary
    /* 
Goal -> on clicking on the div we want to navigate it by a query string url and we also want to access the value of query string in any components

Steps ->
1. To get the search params use react-router hook useSearchParams(); it returns URLSearchParams object 

2. check if params object exists; if it exists then get the existing query by converting it to String and parse it to object using query string and hold it in a object

3. Now create a updatedQuery object, copy the existing query object and update the category by the label on a click event. update it because there can be other query parameters that you don't want to change

4. Now create a Url from updatedQuery by using qs.stringifyUrl() from query string and navigate to the url

5. Now you can access the query parameter in any component by using params.get(query key)


*/

    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
      // console.log(currentQuery);

      const updatedQuery = {
        ...currentQuery,
        category: label,
      };
      // console.log(updatedQuery);

      const url = qs.stringifyUrl({
        url: "/",
        query: updatedQuery,
      });
      // console.log(url);
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
