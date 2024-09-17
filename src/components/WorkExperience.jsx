import React from "react";
import DesktopCard from "./common/DesktopCard";

function WorkExperience(){
    return(
        <div className='card-element d-flex flex-column'>
            <div>
                <div className="position-relative">
                    <div className="gradient-background darkened px-1 pb-2 pt-3 d-flex align-items-center justify-content-around">
                        <div className="p-1 position-absolute end-0 top-0">
                            <i className="fas fa-info-circle fs-4 text-light" data-bs-toggle="tooltip" title={``} />
                        </div>
                        
                        <div className="text-center flex-shrink-0">
                            WorkExperience
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-1 flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="flex-grow-1 text-center">
                    
                    <div>
                        
                    </div>
                    <div>
                        <div className="d-grid m-1 mt-2">
                            <a
                                href="/desktop/resume"
                                className="btn btn-secondary btn-lg fw-bold"
                            >
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience;