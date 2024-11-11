import React, { useState, useEffect } from "react";
import DesktopCard from "./common/DesktopCard";

function Skills(){
    const [selectedCategory, setSelectedCategory] = useState({});

    const data = [
        {
            Id: 1,
            Category: 'Languages',
            Items: [
                { name: 'C#', level: 8 },
                { name: 'JavaScript', level: 8 },
            ]
        },
        {
            Id: 2,
            Category: 'Frameworks',
            Items: [
                { name: 'ASP.NET', level: 8 },
                { name: 'ASP.NET Core', level: 8 },
                { name: 'ASP.NET MVC', level: 8 },
                { name: 'ASP.NET Razor', level: 8 },
                { name: 'Node.js', level: 8 },
                { name: 'Bootstrap', level: 8 },
                { name: 'Tailwind CSS', level: 8 },
            ]
        },
        {
            Id: 3,
            Category: 'Databases',
            Items: [
                { name: 'SQL', level: 7 },
            ]
        },
        {
            Id: 4,
            Category: 'Libraries',
            Items: [
                { name: 'Reactjs', level: 7 },
                { name: 'jQuery', level: 7 },
                { name: 'Entity Framework', level: 7 },
            ]
        },
        {
            Id: 5,
            Category: 'Markup',
            Items: [
                { name: 'HTML', level: 8 },
                { name: 'CSS/SCSS', level: 8 },
            ]
        }
    ];

    useEffect(() => {
        setSelectedCategory(data[0]);
    }, []);

    return(
        <div className='card-element p-3 d-flex flex-column'>
            <div id="indicators-carousel" className="relative w-full" data-carousel="static">
                <div className="bg-amber-300 rounded-t-lg">
                    <div className="grid grid-cols-2 text-gray-400">
                        <div className="text-start p-1 ms-1">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                        <div className="text-end p-1 me-1">
                            <i className="fa-solid fa-ellipsis me-2"></i>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                </div>
                <div className="carousel relative h-56 md:h-70 bg-amber-100">
                    {data.map((category, idx) => (
                        <div key={category.Id} className={`${category.Id !== selectedCategory.Id ? "hidden" : ""} carousel-item duration-700 ease-in-out`} data-carousel-item={category.Id == selectedCategory.Id ? "active" : ""}>
                            <div className="absolute block w-full">
                                <div className="text-sm text-black-600 bg-amber-100 p-2">
                                    <span className="uppercase p-2 underline font-bold">{category.Category}</span>
                                    <ul className="list-group list-group-flush list-disc ms-2 p-2">
                                        {category.Items.map((item, idx) => (
                                            <li key={idx} className="list-group-item">{item.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-200 bg-amber-100 rounded-b-lg">
                    <div className="grid grid-cols-7 text-gray-400 text-center pt-1">
                        <div className="col-span-1 mt-1"><i className="fa-solid fa-bold"></i></div>
                        <div className="col-span-1 mt-1"><i className="fa-solid fa-italic"></i></div>
                        <div className="col-span-1 mt-1"><i className="fa-solid fa-underline"></i></div>
                        <div className="col-span-1 mt-1"><i className="fa-solid fa-strikethrough"></i></div>
                        <div className="col-span-1 mt-1"><i className="fa-solid fa-list"></i></div>
                        <div className="col-span-1 mt-1"><i className="fa-regular fa-image"></i></div>
                    </div>
                </div>
                <button disabled={selectedCategory.Id == 1 ? true : false} onClick={() => setSelectedCategory(data[data.findIndex(i => i.Id == selectedCategory.Id) -1])} type="button" className="carousel-btn absolute top-0 start-0 z-30 flex items-end justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-800/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button disabled={selectedCategory.Id == data.length ? true : false} onClick={() => setSelectedCategory(data[data.findIndex(i => i.Id == selectedCategory.Id) +1])} type="button" className="carousel-btn absolute top-0 end-0 z-30 flex items-end justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-800/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Skills;