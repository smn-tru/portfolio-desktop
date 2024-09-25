import React, { useEffect, useState } from "react";

function Weather(){
    const [city, setCity] = useState('Denver');
    const [weatherData, setWeatherData] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [temperature, setTemperature] = useState('');
    const [feelsLikeTemperature, setFeelsLikeTemperature] = useState('');
    const [timeOfDay, setTimeOfDay] = useState('');

    const apiKey = '818269799927db81f94d73a80d45c370'

    const fetchData = async () => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
        );

        if (response.ok) {
            let data = await response.json()
            setWeatherData(data);
            setTemperature(data.main.temp);
            setFeelsLikeTemperature(data.main.feels_like);
            let tod = (data.weather[0].icon).slice(-1);
            setTimeOfDay(tod);
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
        setIsChecked(false);
        fetchData();
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);

        if(!isChecked){
            const feelsLikeInFarenheit = (feelsLikeTemperature * 9 / 5) + 32;
            const temperatureInFarenheit = (temperature * 9 / 5) + 32;
            
            setFeelsLikeTemperature(feelsLikeInFarenheit);
            setTemperature(temperatureInFarenheit);
        }
        else{
            setTemperature(weatherData.main.temp);
            setFeelsLikeTemperature(weatherData.main.feels_like);
        }
        
    };

    return (
        <div className='card-element d-flex flex-column p-3 prose'>
            <div className={`rounded-2xl ${timeOfDay == 'd' ? 'bg-sky-400' : 'bg-sky-950'} opacity-90`}>
                <div className="p-3 grid grid-cols-5">
                    <input 
                        type="text"
                        placeholder="Enter city name"
                        value={city}
                        onChange={handleInputChange}  
                        id="small-input" 
                        className="col-span-3 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    />
                    <button type="submit" onClick={handleSubmit} className="text-white col-span-1 bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ms-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <i className="fas fa-magnifying-glass" />
                    </button>
                    <div className="flex col-span-1 ms-3">
                        <label className='themeSwitcherThree relative inline-flex cursor-pointer select-none items-center'>
                            <input
                            type='checkbox'
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className='sr-only'
                            />
                            <div className='shadow-card flex h-[46px] w-[82px] items-center justify-center rounded-md bg-white'>
                            <span
                                className={`flex h-9 w-9 items-center justify-center rounded ${
                                !isChecked ? 'bg-indigo-700 text-white' : 'text-body-color'
                                }`}
                            >
                                °C
                            </span>
                            <span
                                className={`flex h-9 w-9 items-center justify-center rounded ${
                                isChecked ? 'bg-indigo-700 text-white' : 'text-body-color'
                                }`}
                            >
                                °F
                            </span>
                            </div>
                        </label>
                    </div>
                </div>
                {weatherData ? (
                    <div className="grid grid-rows-2 pt-3 ps-3 pe-3">
                        <div className="grid grid-cols-4 text-center weather-header">
                            <img className="col-span-1 m-0" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
                            <span className="col-span-3 text-white weather-description">{weatherData.weather[0].description}</span>
                        </div>
                        <div className="grid grid-cols-2 text-center">
                            <div className="">
                                <span className="text-white temperature">{Math.floor(temperature)}°</span>
                            </div>
                            <div className="p-0 grid grid-cols-2 grid-rows-5 text-white">
                                <div className="text-start content-end">Feels like</div>
                                <div className="text-end content-end">{Math.floor(feelsLikeTemperature)}°</div>
                                <div className="text-start content-end">Humidity</div>
                                <div className="text-end content-end">{weatherData.main.humidity}%</div>
                                <div className="text-start content-end">Pressure</div> 
                                <div className="text-end content-end">{weatherData.main.pressure}</div>
                                <div className="text-start content-end">Wind Speed</div> 
                                <div className="text-end content-end">{weatherData.wind.speed}m/s</div>
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