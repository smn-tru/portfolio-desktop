import React, { useState } from "react";

function Clock(){
    let time  = new Date().toLocaleTimeString();

    const [ctime,setTime] = useState(time);

    const UpdateTime=()=>{
        time =  new Date().toLocaleTimeString()
        setTime(time)
    };
    
    setInterval(UpdateTime)

    return (
        <div className='card-element-clock p-3 d-flex flex-column text-white'>
            <span className="weather-description weather-header">{ctime}</span>
        </div>
    )
}

export default Clock;