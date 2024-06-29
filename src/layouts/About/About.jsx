import img from "../../assets/mesut-kaya-eOcyhe5-9sQ-unsplash.jpg"

const About = () => {
    return (
      <div className="bg-cyan-50 p-10 w-[90%] mx-auto rounded-xl">
        <h1 className="text-3xl font-bold text-center my-10">
          Why Terrific Travels
        </h1>
        <p className="text-xl font-semibold">
          Why should you love terrific travel?
        </p>
        <div className="grid md:grid-cols-2  gap-2">
          <div className="text-gray-600">
            <p className="my-3">
              <span className="text-xl font-bold">
                Adventure and Discovery:
              </span>{" "}
              Travel allows you to explore new places, experience different
              cultures, and discover hidden gems that you wouldn't encounter in
              your everyday life. Terrific travel experiences can lead to
              unforgettable adventures and broaden your horizons.
            </p>
            <p className="my-3">
              <span className="text-xl font-bold">Cultural Immersion:</span> :
              Traveling exposes you to new languages, traditions, cuisines, and
              ways of life. This cultural immersion fosters understanding,
              appreciation, and empathy for people from diverse backgrounds.
            </p>
            <p>
              <span className="text-xl font-bold my-2">Personal Growth:</span>{" "}
              Travel challenges you to step out of your comfort zone, adapt to
              new environments, and solve unexpected problems. This can
              significantly contribute to your personal development, boosting
              confidence, independence, and resilience.
            </p>
            <p className="my-3">
              <span className="text-xl font-bold ">Memorable Experiences:</span>{" "}
              Terrific travel often involves unique and memorable experiences,
              such as witnessing natural wonders, attending local festivals, or
              participating in thrilling activities. These moments create
              lasting memories and stories to share.
            </p>
            <p className="my-3">
              <span className="text-xl font-bold"> Social Connections:</span>{" "}
              Traveling can help you meet new people and make friends from all
              over the world. These connections can enrich your life, expand
              your network, and sometimes lead to lifelong friendships.
            </p>
            <p className="my-3">
              <span className="text-xl font-bold ">Nature and Wildlife:</span>{" "}
              For nature enthusiasts, travel offers a chance to witness diverse
              landscapes, ecosystems, and wildlife. Whether it's hiking in the
              mountains, diving in coral reefs, or going on a safari, these
              experiences can be awe-inspiring and humbling.
            </p>
          </div>
          <div >
            <img className="md:w-96 md:h-96  md:rounded-full" src={img} alt="" />
            
          </div>
        </div>
      </div>
    );
};

export default About;