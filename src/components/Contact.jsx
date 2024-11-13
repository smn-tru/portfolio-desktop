import React, { useState, useEffect } from "react";
import toastr from "toastr";

function Contact(){
    const [showContactInfoDiv, setShowContactInfoDiv] = useState(false);
    const [showContactDetailFor, setShowContactDetailFor] = useState("");

    toastr.options = {
        "positionClass" : "toast-top-center",
        "timeOut" : "2000",
    }
    
    const onContactIconClick = (type) => {
        if(showContactDetailFor.length == 0 || showContactDetailFor !== type){
            setShowContactInfoDiv(true);
            setShowContactDetailFor(type);
        }
        else{
            setShowContactInfoDiv(false);
            setShowContactDetailFor("");
        }
    };

    return(
        <div className='card-element-contact d-flex flex-column'>
            <div className="grid md:grid-cols-2 lg:grid-cols-2">
                <div className="col-span-1 p-3 text-center">
                    <ul className="grid grid-cols-5">
                        <li className="nav-item">
                            <a 
                                href='https://www.linkedin.com/in/sandramytruong/' 
                                target="_blank" 
                                id="linkedIn" 
                                className="nav-link contact-item"
                            >
                                <i className="fa-brands fa-linkedin fa-2x text-sky-600" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                href='https://github.com/smn-tru' 
                                target="_blank" 
                                id="github" 
                                className="nav-link contact-item"
                            >
                                <i className="fa-brands fa-github fa-2x text-black" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                href='#' 
                                id="slack" 
                                className="nav-link contact-item"
                                onClick={() => onContactIconClick("slack")}
                            >
                                <i className="fa-brands fa-slack fa-2x text-orange-600" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                href='#' 
                                id="phoneNumber" 
                                className="nav-link contact-item"
                                onClick={() => onContactIconClick("phone")}
                            >
                                <i className="fa-solid fa-phone fa-2x text-yellow-400" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                href='#' 
                                id="emailAddress" 
                                className="nav-link contact-item"
                                onClick={() => onContactIconClick("email")}
                            >
                                <i className="fa-regular fa-at fa-2x text-pink-950" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1 p-3">
                    {showContactInfoDiv && <div>
                        {showContactDetailFor == 'slack' && <div className="bg-white rounded-lg text-center">
                            @Sandra Truong
                            <a 
                                className="copy-to-clipboard" 
                                onClick={() => {
                                    navigator.clipboard.writeText("@Sandra Truong"); 
                                    toastr.info("Copied to clipboard.");
                                }}
                            >
                                <i className="fa-regular fa-copy m-2"/>
                            </a>
                        </div>}
                        {showContactDetailFor == 'phone' && <div className="bg-white rounded-lg text-center">
                            3038018019
                            <a 
                                className="copy-to-clipboard" 
                                onClick={() => {
                                    navigator.clipboard.writeText("3038018019"); 
                                    toastr.info("Copied to clipboard.");
                                }}
                            >
                                <i className="fa-regular fa-copy m-2"/>
                            </a>
                        </div>}
                        {showContactDetailFor == 'email' && <div className="bg-white rounded-lg text-center">
                            sandra.mntru@gmail.com
                            <a 
                                className="copy-to-clipboard" 
                                onClick={() => {
                                    navigator.clipboard.writeText("sandra.mntru@gmail.com"); 
                                    toastr.info("Copied to clipboard.");
                                }}
                            >
                                <i className="fa-regular fa-copy m-2"/>
                            </a>
                        </div>}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Contact;