

const AddCountry = () => {

    const handleAddCountry = e => {
        e.preventDefault()
        const form = e.target;
        const photo = form.photo.value;
        
        const country_name = form.country_name.value;
        
        const short_description = form.short_description.value;
        const countryInfo = { photo, country_name, short_description }
        console.log(countryInfo);
        fetch("http://localhost:5000/country", {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(countryInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset('')
        })
    }
    return (
      <div>
        <section className="p-6 text-center w-[90%] mx-auto rounded-xl bg-gray-50 dark:bg-black dark:text-gray-900">
          <form
            onSubmit={handleAddCountry}
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
                
                
                
                
                
                
              </div>
            </fieldset>
            
            <button className="btn bg-blue-800 text-white hover:bg-blue-500 ">
              Added Tourist Spot
            </button>
          </form>
        </section>
      </div>
    );
};

export default AddCountry;