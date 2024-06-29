
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const AllCard = ({ item }) => {
    const {
      _id,
      country_name,
      photo,
      touristsSpotName,
      average_cost,
      totalVisitorsPerYear,
      travel_time,
      seasonality,
    } = item;
    return (
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex space-x-4">
          <img
            alt=""
            src={photo}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {touristsSpotName}
            </a>
            <span className="text-xs dark:text-gray-600">
              <span className="font-bold">Per Day Cost:</span>
              {totalVisitorsPerYear}
            </span>
          </div>
        </div>
        <div>
          <img
            src={photo}
            alt=""
            className="object-cover w-full rounded-xl mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold text-green-600">
            {country_name}
          </h2>
          <h2 className="mb-1 text-xl font-bold text-orange-600">
            {seasonality}
          </h2>
          <p className="text-sm dark:text-gray-600">
            <span className="font-semibold text-green-400">Travel Time: </span>{" "}
            {travel_time}
          </p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <button
              aria-label="Share this post"
              type="button"
              className="p-2 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current dark:text-violet-600"
              >
                <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
              </svg>
            </button>
            <button
              aria-label="Bookmark this post"
              type="button"
              className="p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current dark:text-violet-600"
              >
                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
              </svg>
            </button>
          </div>
          <div>
            <p>
              <span className="font-bold text-green-500">Average Cost: </span>{" "}
              {average_cost}
            </p>
          </div>
        </div>
        <div>
          <Link to={`/detail/${_id}`}>
            <button className="btn w-full  bg-purple-700 text-white p-3 rounded-xl">
              View Details
            </button>
          </Link>
        </div>
      </div>
    );
};

AllCard.propTypes = {
    item:PropTypes.object
};

export default AllCard;