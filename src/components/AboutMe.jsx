import React from "react";
import DesktopCard from "./common/DesktopCard";

import profilePic from "../resources/images/profile-picture.jpeg"

function AboutMe(){
    return(
        <div className='card-element p-3 d-flex flex-column'>
            <div className="text-white grid grid-cols-3">
                <div className="ps-3 col-span-2">
                    <img className="profile-pic" src={profilePic} alt="profile"/>
                </div>
                <div className="col-span-1 grid grid-rows-5 gap-3 p-3">
                    <button className="bg-indigo-700 hover:bg-blue-700 text-white py-1 px-3 rounded-lg">
                        Resume
                    </button>
                    <button className="bg-indigo-700 hover:bg-blue-700 text-white py-1 px-3 rounded-lg">
                        Skills
                    </button>
                    <button className="bg-indigo-700 hover:bg-blue-700 text-white py-1 px-3 rounded-lg">
                        Experience
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;