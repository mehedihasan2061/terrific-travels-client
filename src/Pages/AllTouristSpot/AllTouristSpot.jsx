import { useLoaderData } from "react-router-dom";
import AllCard from "../../layouts/AllCard/AllCard";


const AllTouristSpot = () => {
    const spotItem =useLoaderData()
    return (
        <div>
            <h1>AllTourist Spot {spotItem.length}</h1>
            <div className="w-[90%] mx-auto my-16 grid md: grid-cols-2 gap-8">
                {
                    spotItem.map(item => <AllCard key={item._id} item={item}></AllCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;