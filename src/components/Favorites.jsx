import React from "react";

function Favorites(){
    return (
        <div className='card-element d-flex flex-column'>
            <div className="grid grid-cols-3 grid-rows-2 gap-y-3 p-3 text-center">
                <i className="fas fa-square fa-4x" />
                <i className="fas fa-square fa-4x" />
                <i className="fas fa-square fa-4x" />
                <i className="fas fa-square fa-4x" />
                <i className="fas fa-square fa-4x" />
                <i className="fas fa-square fa-4x" />
            </div>
        </div>
    )
}

export default Favorites;