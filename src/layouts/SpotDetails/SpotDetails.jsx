import { FaArrowLeft, FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";


const SpotDetails = () => {
    const spotCard = useLoaderData()   
    const { id } = useParams();
    const singleCard = spotCard.find((item) => item._id === id);

    const {
      photo,
      touristsSpotName,
      country_name,
      location,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      totalVisitorsPerYear,
    } = singleCard;
    
    return (
      <div>
        <div className="relative my-16 p-6 md:w-[60%] mx-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
          <img
            src={photo}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2 md:flex justify-between">
            <div>
              <span className="block md:text-xl  font-medium tracking-widest uppercase dark:text-violet-600">
                <span className="  font-bold">Country:</span> {country_name}
              </span>
              <h2 className="text-xl text-orange-600 font-semibold tracking-wide">
                {touristsSpotName}
              </h2>
              <p>
                <span className="font-semibold">Season: </span>
                {seasonality}
              </p>
              <p className="dark:text-gray-800">{short_description}</p>
            </div>
            <div>
              <div className="flex md:justify-center items-center  text-xl font-bold">
                <FaLocationDot className="text-red-600 "></FaLocationDot>
                <span className="ml-2">{location}</span>
              </div>

              <div>
                <p>
                  <span className="font-semibold text-green-500 mr-2">
                    Travel Time:
                  </span>
                  {travel_time}
                </p>
                <p>
                  <span className="font-semibold text-green-500 mr-2">
                    Cost:
                  </span>
                  {average_cost}
                </p>
                <p>
                  <span className="font-semibold text-green-500 mr-2">
                    Per Year:
                  </span>
                  {totalVisitorsPerYear}
                </p>
              </div>
            </div>
          </div>
          <Link to="/">
            <button>
              <div className="absolute flex items-center  top-2 bg-orange-600 hover:bg-orange-400 p-2 text-white rounded-xl">
                <span className="mr-2">
                  <FaArrowLeft></FaArrowLeft>
                </span>
                <p>Back To Home</p>
              </div>
            </button>
          </Link>
        </div>
      </div>
    );
};

export default SpotDetails;