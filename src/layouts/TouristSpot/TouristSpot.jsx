
import PropTypes from 'prop-types';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const TouristSpot = ({ spot }) => {
    const {
         _id,
       photo,
       touristsSpotName,
       country_name,
       location,
       short_description,
       average_cost,
       seasonality,
     } = spot;
    return (
      <div>
        <div className=" max-w-xs rounded-md shadow-md p-3 dark:bg-gray-100 dark:text-gray-800">
          <img
            src={photo}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                {country_name}
              </h2>
              <p className="dark:text-gray-800">
                <span className="font-semibold text-orange-500">Spot:</span>{" "}
                {touristsSpotName}
              </p>

              <div className='flex items-center'>
                <FaLocationDot className='text-xl text-red-600 font-bold'></FaLocationDot>
                <p className="dark:text-gray-800 text-xl ml-2">{location}</p>
              </div>
              <p className="dark:text-gray-800 text-xl text-gray-500">{short_description}</p>
              <p className="dark:text-gray-800 text-xl font-semibold"><span>Cost:</span> {average_cost}</p>
              <p className="dark:text-gray-800 font-semibold"><span className='text-xl font-semibold'>Season:</span> {seasonality}</p>
            </div>
            <Link to={`/spotDetails/${_id}`}>
              <button
                type="button"
                className="flex bg-orange-500 text-white items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

TouristSpot.propTypes = {
    spot:PropTypes.object
};

export default TouristSpot;