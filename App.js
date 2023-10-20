import React from 'react';
// Import data and WeatherCard here
import WeatherCard from "./components/WeatherCard";
import Location from './components/Location'
import cities from "./data";
import { useState } from 'react'


function App() {

    const [location, setLocation] = useState('Amsterdam')

    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {/* Render components here */}
                <Location cities={cities} location={location} setLocation={setLocation}/>
                {/* {cities.map(city => (
                    <>
                        
                        <WeatherCard city={city}/>
                    </> 
                ))} */}
            </div>
            
        </>
    )
}

export default App;