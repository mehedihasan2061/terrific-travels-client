import Swal from "sweetalert2";


const AddTouristSpot = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const photo = form.photo.value;
        const touristsSpotName = form.touristsSpotName.value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const email = form.email.value;
        const name = form.name.value;
        const user = { photo, touristsSpotName, country_name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, email, name }
        console.log(user);

        fetch("http://localhost:5000/spot", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
               Swal.fire({
                 title: "success",
                 text: "Spot added Successfully",
                 icon: "success",
                 confirmButtonText: "Ok",
               });
              form.reset()
            }
          });

    }
    return (
      <div>
        <section className="p-6 text-center w-[90%] mx-auto rounded-xl bg-gray-50 dark:bg-black dark:text-gray-900">
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="container flex  flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="photo" className="font-bold">
                    image
                  </label>
                  <input
                    id="photo"
                    type="text"
                    placeholder="image URL"
                    name="photo"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="touristSpot" className="font-bold">
                    touristsSpotName
                  </label>
                  <input
                    id="touristSpot"
                    type="text"
                    placeholder="tourists_spot_name"
                    name="touristsSpotName"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="country_name" className="font-bold">
                    country_Name
                  </label>
                  <input
                    id="country_name"
                    type="text"
                    placeholder="country_name"
                    name="country_name"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="location" className="font-bold">
                    location
                  </label>
                  <input
                    id="location"
                    type="text"
                    placeholder="location"
                    name="location"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="short_description" className="font-bold">
                    short_description
                  </label>
                  <input
                    id="short_description"
                    type="text"
                    placeholder="short_description"
                    name="short_description"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="average_cost" className="font-bold">
                    average_cost
                  </label>
                  <input
                    id="average_cost"
                    type="text"
                    placeholder="average_cost"
                    name="average_cost"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="seasonality " className="font-bold">
                    seasonality
                  </label>
                  <input
                    id="seasonality "
                    type="text"
                    placeholder="seasonality"
                    name="seasonality"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="travel_time" className="font-bold">
                    travel_time
                  </label>
                  <input
                    id="travel_time"
                    type="text"
                    placeholder="travel_time"
                    name="travel_time"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="totalVisitorsPerYear" className="font-bold">
                    totalVisitorsPerYear
                  </label>
                  <input
                    id="totalVisitorsPerYear"
                    type="text"
                    placeholder="totalVisitorsPerYear"
                    name="totalVisitorsPerYear"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="font-bold">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="name" className="font-bold">
                    Name
                  </label>
                  <input
                    id="text"
                    type="text"
                    placeholder="name"
                    name="name"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
              </div>
            </fieldset>
            {/* <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">Profile</p>
                <p className="text-xs">Adipisci fuga autem eum!</p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="username" className="text-sm">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="website" className="text-sm">
                    Website
                  </label>
                  <input
                    id="website"
                    type="text"
                    placeholder="https://"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="bio" className="text-sm">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    placeholder=""
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  ></textarea>
                </div>
                <div className="col-span-full">
                  <label htmlFor="bio" className="text-sm">
                    Photo
                  </label>
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://source.unsplash.com/30x30/?random"
                      alt=""
                      className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300"
                    />
                    <button
                      type="button"
                      className="px-4 py-2 border rounded-md dark:border-gray-800"
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </fieldset> */}
            <button className="btn bg-blue-800 text-white hover:bg-blue-500 ">
              Add
            </button>
          </form>
        </section>
      </div>
    );
};

export default AddTouristSpot;