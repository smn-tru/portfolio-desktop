import React from "react";
import stickyNote from '../resources/images/pink-sticky-note.png';

function Notes(){
    return (
        <div className='card-element-notes d-flex flex-column'>
            <div className="text-white">
                <span className="text-2xl ps-2">Hello, I'm Sandra!</span>
                <div>I am a Full-Stack Developer with experience in front-end and back-end technologies. 
                    <br/> I specialize in developing end-to-end applications that provide an optimal user experience. 
                    <br/> Some of my favorite hobbies are working on cars, baking macarons, and traveling.
                </div>
            </div>
        </div>
    )
}

export default Notes;