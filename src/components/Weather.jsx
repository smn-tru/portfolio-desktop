import React, { useEffect, useState } from "react";

import { IconContext } from "react-icons";
import { TiWeatherPartlySunny } from "react-icons/ti";

function Weather(){
    const [city, setCity] = useState('Denver');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);

    const apiKey = '818269799927db81f94d73a80d45c370'

    const fetchData = async () => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
        );

        if (response.ok) {
            let data = await response.json()
            setWeatherData(data);
            console.log(data);
        }
        else
            console.error(error);
    };
    
    useEffect(() => {
    fetchData();
    }, []);

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <div className='card-element d-flex flex-column p-3 prose'>
            <div className=" rounded-2xl bg-blue-300 opacity-90">
                <div className="p-3 grid grid-cols-5">
                    <input 
                        type="text"
                        placeholder="Enter city name"
                        value={city}
                        onChange={handleInputChange}  
                        id="small-input" 
                        className="col-span-4 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    />
                    <button type="submit" className="text-white col-span-1 bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ms-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <i className="fas fa-magnifying-glass" />
                    </button>
                </div>
                {weatherData ? (
                    <div className="p-3">
                        <div className="grid grid-cols-4">
                            <IconContext.Provider value={{ className: "shared-class", size: 90, color: "white" }}>
                                <TiWeatherPartlySunny />
                            </IconContext.Provider>
                            <span className="col-span-3">{weatherData.weather[0].description}</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="p-0">
                                <span className="text-white" style={{fontSize: "90px", fontFamily: "Arial Narrow, sans-serif"}}>{Math.floor(weatherData.main.temp)}°</span>
                            </div>
                        <div className="p-0 grid grid-cols-2 grid-rows-4 text-white">
                            <div className="text-start">Feels like</div>
                            <div className="text-end">{weatherData.main.feels_like}°</div>
                            <div className="text-start">Humidity</div>
                            <div className="text-end">{weatherData.main.humidity}%</div>
                            <div className="text-start">Pressure</div> 
                            <div className="text-end">{weatherData.main.pressure}</div>
                            <div className="text-start">Wind Speed</div> 
                            <div className="text-end">{weatherData.wind.speed}m/s</div>
                        </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading weather data...</p>
                )}
            </div>
        </div>
    )
}

export default Weather;