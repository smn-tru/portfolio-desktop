import React, { useState } from "react";

function Clock(){
    let time  = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const [ctime, setTime] = useState(time);

    const UpdateTime=()=>{
        time =  new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        setTime(time)
    };
    
    setInterval(UpdateTime)

    return (
        <div className='card-element-clock p-3 d-flex flex-column text-white text-end'>
            <span className="clock">{ctime}</span>
        </div>
    )
}

export default Clock;