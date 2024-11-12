import React from "react";

function Search(){

    return (
        <div className='card-element-search d-flex flex-column text-end'>
            <form className="p-1">   
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative ms-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <i className="fa-solid fa-magnifying-glass text-gray-900" />
                    </div>
                    <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search" required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-opacity-70 hover:bg-opacity-50 bg-indigo-700 hover:bg-blue-700 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search;