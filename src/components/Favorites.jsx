import React from "react";

function Favorites(){
    return (
        <div className='card-element d-flex flex-column'>
            <div className="grid grid-cols-3 grid-rows-2 gap-y-3 p-3 text-center">
                <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-square fa-stack-2x text-white"></i>
                    <i className="far fa-file fa-stack-1x fa-inverse text-pink-700"></i>
                </span>
                <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-square fa-stack-2x text-white"></i>
                    <i className="far fa-file fa-stack-1x fa-inverse text-pink-700"></i>
                </span>
                <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-square fa-stack-2x text-white"></i>
                    <i className="far fa-file fa-stack-1x fa-inverse text-pink-700"></i>
                </span>
                <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-square fa-stack-2x text-white"></i>
                    <i className="far fa-file fa-stack-1x fa-inverse text-pink-700"></i>
                </span>
                <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-square fa-stack-2x text-white"></i>
                    <i className="far fa-file fa-stack-1x fa-inverse text-pink-700"></i>
                </span>
                <span className="fa-stack fa-2x">
                    <i className="fa-solid fa-square fa-stack-2x text-white"></i>
                    <i className="far fa-file fa-stack-1x fa-inverse text-pink-700"></i>
                </span>
            </div>
        </div>
    )
}

export default Favorites;