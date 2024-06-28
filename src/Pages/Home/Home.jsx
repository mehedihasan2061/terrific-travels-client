import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Tourist from "../../layouts/TouristCard/Tourist";
import About from "../../layouts/About/About";


const Home = () => {

    const loadedUser=useLoaderData()
    return (
      <div>
        <Banner></Banner>

        <div className="grid grid-cols-3 gap-5 shadow-xl my-10">
          {loadedUser.map((user) => (
            <Tourist key={user._id} user={user}></Tourist>
          ))}
        </div>
        <About></About>
      </div>
    );
};

export default Home;