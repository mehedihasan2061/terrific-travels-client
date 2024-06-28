
import PropTypes from 'prop-types';

const Tourist = ({ user }) => {
    const {photo, location, country_name,touristSpotName,short_description} = user;
    return (
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{country_name}</h2>
         
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Visit</button>
          </div>
        </div>
      </div>
    );
};

Tourist.propTypes = {
    user:PropTypes.object
};

export default Tourist;