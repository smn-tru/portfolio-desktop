import React, { useEffect, useState } from "react";

function Clock(){
    const [ctime, setTime] = useState();

    let time  = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    useEffect(() => {
        setTime(time);
    }, []);

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