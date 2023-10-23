import React from "react";
import sunny from "../assets/Sunny.svg"
import cloudy from "../assets/Cloudy.svg";
import partlyCloudy from '../assets/PartlyCloudy.svg';
import rainy from "../assets/Rainy.svg";
import WeatherCard from './WeatherCard'

function Location({cities, location, setLocation}) {
    const imgObj = {
        'Sunny': sunny,
        'Rainy': rainy, 
        'Partly cloudy': partlyCloudy, 
        "Cloudy": cloudy 
    }
    const myCity = cities.find(({city}) => city == location)
    return(  
        <>
          {myCity ?  
            (<div className = "card">
                <h3 className="card-title" style={{margin: "auto"}}>Your location's weather</h3>
                <div className = "img-container">
                    <img className="card-img-top" src = {imgObj[myCity.forecast]} alt="Card image cap" id = "icon"/>
                </div>
                <div class="card-body">
                    
                    <h5 className="card-text">The weather in {myCity.city} is: </h5>
                    <h5 className="card-text">{myCity.temperature}°C</h5>
                    <h5 className="card-text">The forecast is {myCity.forecast}</h5>
                </div>
            </div>): (
                <>
            <h1>City Not Found</h1>
            {cities.map((city, idx) => (
                <>   
                    <WeatherCard key={idx} city={city}/>
                </> 
            ))}
            </>
        )}
        </>   
    )
}

module.exports = Location;