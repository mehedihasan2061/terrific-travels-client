// import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
// import Tourist from "../../layouts/TouristCard/Tourist";
import About from "../../layouts/About/About";
import CountryName from "../../layouts/CountryName/CountryName";
import NewsLetter from "../../layouts/NewsLetter/NewsLetter";


const Home = () => {

    // const loadedUser=useLoaderData()
    return (
      <div className="container mx-auto">
        <Banner></Banner>

        {/* <div className="grid grid-cols-3 gap-5 shadow-xl my-10">
          {loadedUser.map((user) => (
            <Tourist key={user._id} user={user}></Tourist>
          ))}
        </div> */}
        <CountryName></CountryName>
        <About></About>
        <NewsLetter></NewsLetter>
      </div>
    );
};

export default Home;