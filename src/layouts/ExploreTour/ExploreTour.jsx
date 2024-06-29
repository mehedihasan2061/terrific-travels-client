
import Lottie from 'react-lottie';
import lottieData from '../../../src/lottie/Animation - 1719686527988.json'
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const ExploreTour = () => {
    const [text] = useTypewriter({
      words: [" Explore_Tour_and_Enjoy_Your_Mind"],
      loop: 0,
    });
       
     const defaultOptions = {
       loop: true,
       autoplay: true,
       animationData: lottieData,
       rendererSettings: {
         preserveAspectRatio: "xMidYMid slice",
       },
     };
    return (
      <div>
        <h1 className="text-center md:text-3xl font-bold bg-gray-200 p-3 rounded-xl text-green-600 mt-10">
                {text}
                <Cursor cursorColor='red'></Cursor>
        </h1>
        <Lottie options={defaultOptions} height={500} width={400} />
        <p className='text-center text-xl font-semibold text-gray-500'>
          Welcome to an unforgettable journey through Southeast Asia, where
          you will explore vibrant cultures, stunning landscapes, and rich
          histories across several countries. This 10-day tour will take you
          through Thailand, Cambodia, and Vietnam.
        </p>
      </div>
    );
};

export default ExploreTour;