// import { remove } from "firebase/database";
import PropTypes from "prop-types";

import { FaLocationDot } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const ListItem = ({ item, remove, setRemove }) => {
  const {
    _id,
    photo,
    country_name,
    location,
    touristsSpotName,
    short_description,
  } = item;

  const handleDelete = (id) => {
    console.log("delete", id);
    fetch(
      `https://terrific-travels-server-1kyxzyfu9-mehedihasan2061s-projects.vercel.app/mySpot/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setRemove(!remove);
        }
      });
  };
  return (
    <div>
      <div className="relative max-w-xs w-[90%] mx-auto my-10  rounded-md shadow-md dark:bg-gray-300 dark:text-gray-800">
        <img
          src={photo}
          alt=""
          className="object-cover object-center  rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {country_name}
            </h2>
            <p className="font-bold">
              Spot_name:{" "}
              <span className="font-semibold">{touristsSpotName}</span>
            </p>
            {location ? (
              <p className="flex items-center font-bold gap-2">
                <FaLocationDot className="text-red-600"></FaLocationDot>{" "}
                <span className="text-green-600">{touristsSpotName}</span>
              </p>
            ) : (
              <p>Not found data</p>
            )}
            <p className="text-gray-500">{short_description}</p>
          </div>
          <Link to={`/update/${_id}`}>
            <button
              type="button"
              className="flex bg-orange-600 text-white hover:bg-orange-500 items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Update
            </button>
          </Link>
        </div>
        <div
          onClick={() => handleDelete(_id)}
          className="absolute top-0 right-0 cursor-pointer"
        >
          <MdDelete className="text-5xl bg-red-600   p-2 rounded-full"></MdDelete>
        </div>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.object,
  remove: PropTypes.bool,
  setRemove: PropTypes.func,
};

export default ListItem;
