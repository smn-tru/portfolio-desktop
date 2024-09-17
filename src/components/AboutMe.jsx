import React from "react";
import DesktopCard from "./common/DesktopCard";

function AboutMe(){
    return(
        <div className='card-element d-flex flex-column'>
            <div className="">
                <div className="position-relative">
                    <div className="px-1 pb-2 pt-3 d-flex align-items-center justify-content-around">
                        <div className="text-center flex-shrink-0">
                            About Me
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;