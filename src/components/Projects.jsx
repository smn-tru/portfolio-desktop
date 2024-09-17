import React, { useState, useEffect } from "react";
import DesktopCard from "./common/DesktopCard";

function Projects(){
    const [projects, setProjects] = useState([]);
    return(
        <div className='card-element d-flex flex-column'>
            <div>
                <div className="position-relative">
                    <div className="px-1 pb-2 d-flex align-items-center justify-content-around">
                        <div className="p-1 position-absolute end-0 top-0 text-end">
                            <i className="fas fa-info-circle fs-4 text-light" data-bs-toggle="tooltip" title={``} />
                        </div>
                        
                        <div className="grid grid-cols-3 text-center">
                            <i className="fas fa-folder fa-3x"></i>
                            <i className="fas fa-folder fa-3x"></i>
                            <i className="fas fa-folder fa-3x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;