import React, { useState } from "react";

import profilePic from "../resources/images/profile-picture.jpeg"
import Resume from "./Resume";

function Profile(){
    const [showResume, setShowResume] = useState(false);

    return(<>
        <div className="grid grid-cols-3 gap-4 text-white">
            <div className='profile-pic-container col-span-2 card-element p-3 d-flex flex-column'>
                <img className="profile-pic" src={profilePic} alt="profile"/>
            </div>
            <div className='col-span-1 card-element p-3 d-flex flex-column'>
                <div className="grid grid-rows-2 gap-3">
                    <div className="text-xs">
                        <p className="font-bold">Name:</p>
                        <p className="text-center italic mb-1">Sandra Truong</p>
                        <p className="font-bold">Title:</p>
                        <p className="text-center italic mb-1">Full-Stack Software Developer</p>
                        <p className="font-bold">Location:</p>
                        <p className="text-center italic mb-1">Denver, CO USA</p>
                    </div>
                    <div className="resume-btn-container">
                        <p className="font-bold text-xs mb-1">Resume:</p>
                        <button onClick={() => setShowResume(true)} className="w-full bg-opacity-70 hover:bg-opacity-50 bg-indigo-700 hover:bg-blue-700 text-white py-1 px-1 rounded-lg">
                            <i className="fa-solid fa-download" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {showResume && <Resume setShowResume={setShowResume} />}
    </>)
}

export default Profile;