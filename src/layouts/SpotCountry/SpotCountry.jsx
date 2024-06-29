
import { useLoaderData, useParams } from "react-router-dom";
import TouristSpot from "../TouristSpot/TouristSpot";


const SpotCountry = () => {
    const loadedCountry = useLoaderData()
    
    const { country_name } = useParams()
    const spot_country = country_name;
    
   
    const spots = loadedCountry.filter(country => country.country_name === spot_country)
    console.log(spots);
    


   
    return (
      <div className="container mx-auto grid md:grid-cols-3 gap-6 ">
            {
                spots.map(spot => <TouristSpot key={spot._id} spot={spot}></TouristSpot>)
       }
      </div>
    );
};

export default SpotCountry;