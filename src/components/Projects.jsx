import React, { useState, useEffect } from "react";
import DesktopCard from "./common/DesktopCard";

function Projects(){
    const [projects, setProjects] = useState([]);
    return(
        <div className='card-element p-3 d-flex flex-column'>
            <div className="text-center align-items-center">
                <img src="https://placehold.co/600x400" />
            </div>
            <div className="text-center mt-3">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                    Prev
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                    Next
                </button>
            </div>
        </div>
    )
}

export default Projects;