import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const spotCard=useLoaderData()
    const { id } = useParams()
    console.log(spotCard[0]._id, id);
    
    const singleCard = spotCard.find(item => item._id === id)
    console.log(singleCard);
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
        <div className="my-16 p-6 w-[60%] mx-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
          <img
            src={photo}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2 flex justify-between">
            <div>
              <span className="block text-xl  font-medium tracking-widest uppercase dark:text-violet-600">
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
              <div className="flex justify-center items-center  text-xl font-bold">
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
        </div>
      </div>
    );
};

export default ViewDetails;