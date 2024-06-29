import { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";





const CountryName = () => {
   const [countries,setCountries]=useState([])
    useEffect(() => {
        fetch("http://localhost:5000/country")
            .then(res => res.json())
            .then(data => {
            setCountries(data)
        })
    }, [])
    
    return (
        <div className="my-16">
            <h1 className="text-3xl font-bold text-center">Explore Country</h1>
        <div className="grid md:grid-cols-3 gap-10 my-16  ">
          {countries.map((country) => (
            <CountryCard key={country._id} country={country}></CountryCard>
          ))}
        </div>
      </div>
    );
};

export default CountryName;