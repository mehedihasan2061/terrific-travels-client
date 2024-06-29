import { FaLocationDot } from "react-icons/fa6";
import photo1 from "../../assets/photo-1567883251222-651d554b880c.avif"
import photo2 from "../../assets/photo-1590716209211-ea74d5f63573.avif"
import photo3 from "../../assets/photo-1617409123168-8fb039dd3b39.avif"
import photo4 from "../../assets/photo-1674979725177-864aebe7e3d6.avif"
import { useTypewriter } from "react-simple-typewriter";


const Banner = () => {
      const [text] = useTypewriter({
        words: [" Sydney_NSW_Australia"],
        loop: 0,
      });

    return (
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={photo2} className=" md:w-full md:max-h-screen" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute bottom-16 p-2 md:bottom-10 md:left-16">
            <p className="md:text-3xl font-semibold my-4 text-blue-900 bg-gray-300 opacity-65 p-2 rounded-xl">
              An iconic symbol of Australia, offering world-class performances
              and tours.
            </p>
            <p className="flex items-center space-x-2 md:text-2xl font-bold">
              <FaLocationDot className="md:text-2xl text-red-600"></FaLocationDot>
              <span className="text-green-600">
                Sydney Opera House, <span className="text-orange-600">{text }</span>
              </span>
            </p>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={photo4} className="md:w-full md:max-h-screen" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute bottom-16 p-2 md:bottom-28 md:left-20">
            <p className="md:text-3xl font-semibold my-4 text-blue-900 bg-gray-300 opacity-65 p-2 rounded-xl">
              A magnificent architectural structure in Riyadh, Saudi Arabia
            </p>
            <p className="flex items-center space-x-2 md:text-2xl font-bold">
              <FaLocationDot className="md:text-2xl text-red-600"></FaLocationDot>
              <span className="text-green-600">Riyadh Saudi Arabia</span>
            </p>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={photo3} className="md:w-full md:max-h-screen  " />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>

          <div className="absolute bottom-16 p-2 md:bottom-16 md:left-20">
            <p className="md:text-3xl font-semibold my-4 text-blue-900 bg-gray-300 opacity-65 p-2 rounded-xl">
              The capsules are air-conditioned and equipped with interactive
              tablets that highlight various points of interest.
            </p>
            <p className="flex items-center space-x-2 md:text-2xl font-bold">
              <FaLocationDot className="md:text-2xl text-red-600"></FaLocationDot>
              <span className="text-green-600">
                Orlando Eye, International Drive, Orlando, FL, USA
              </span>
            </p>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={photo1} className=" md:w-full md:max-h-screen" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute bottom-16 p-2 md:bottom-20 md:left-20">
            <p className="md:text-3xl font-semibold my-4 text-blue-900 bg-gray-300  p-2 rounded-xl">
              The Temple of Heaven, located in the Dongcheng District of
              Beijing.
            </p>
            <p className="flex items-center space-x-2 md:text-2xl font-bold">
              <FaLocationDot className="md:text-2xl text-red-600"></FaLocationDot>
              <span className="text-green-600">
                Temple of Heaven South Gate, Dongcheng, China
              </span>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Banner;