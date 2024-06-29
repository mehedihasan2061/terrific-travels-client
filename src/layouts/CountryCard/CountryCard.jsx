
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
    const { photo, country_name, short_description } = country;
    return (
      <div>
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <img
            src={photo}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8 h-96">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                {country_name}
              </h2>
              <p className="dark:text-gray-800">{short_description}</p>
            </div>
            <Link to={`/spots/${country_name}`}>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 bg-green-600 hover:bg-green-400 hover:font-bold text-white font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Explore Country
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

CountryCard.propTypes = {
    country:PropTypes.object
};

export default CountryCard;