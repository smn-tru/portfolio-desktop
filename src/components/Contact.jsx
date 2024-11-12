import React, { useState, useEffect } from "react";

function Contact(){
    
    

    return(
        <div className='card-element-contact d-flex flex-column'>
                <div className="">
                    <div className="col-span-12 p-3 text-center">
                        <ul className="grid grid-cols-7">
                            <li className="nav-item">
                                <a href='#' 
                                id="messageForm" 
                                className="nav-link active contact-item"
                                data-bs-toggle="tab"
                                data-bs-target="#emailForm" 
                                role="tab">
                                    <i className="fa-regular fa-message fa-2x text-green-600"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href='https://www.linkedin.com/in/sandramytruong/' 
                                target="_blank" 
                                id="linkedIn" 
                                className="nav-link contact-item">
                                    <i className="fa-brands fa-linkedin fa-2x text-sky-600"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href='https://github.com/smn-tru' 
                                target="_blank" 
                                id="github" 
                                className="nav-link contact-item">
                                    <i className="fa-brands fa-github fa-2x text-black"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href='#' 
                                id="slack" 
                                className="nav-link contact-item"
                                data-bs-toggle="tab"
                                data-bs-target="#slackInfoCard">
                                    <i className="fa-brands fa-slack fa-2x text-orange-600"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href='#' 
                                id="phoneNumber" 
                                className="nav-link contact-item"
                                data-bs-toggle="tab"
                                data-bs-target="#phoneInfoCard">
                                    <i className="fa-solid fa-phone fa-2x text-yellow-400"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href='#' 
                                id="emailAddress" 
                                className="nav-link contact-item"
                                data-bs-toggle="tab"
                                data-bs-target="#emailInfoCard">
                                    <i className="fa-regular fa-at fa-2x text-pink-950"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-12 hidden">
                        <div className="tab-content" id="tabContent">
                            <div className="tab-pane fade" id="slackInfoCard" role="tabpanel">
                                <div className="card slackInfo">
                                    <div className="card-header">slack handler</div>
                                    <div className="card-body">
                                        @Sandra Truong
                                        <a className="copy-to-clipboard" 
                                        onClick={() => {
                                            navigator.clipboard.writeText("@Sandra Truong"); 
                                            toastr.info("Copied to clipboard.");}}>
                                                <i className="fa-regular fa-copy m-2"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        <div className="tab-pane fade" id="phoneInfoCard" role="tabpanel">
                            <div className="card phoneInfo">
                                <div className="card-header">contact number</div>
                                <div className="card-body">
                                    3038018019
                                    <a className="copy-to-clipboard" 
                                    onClick={() => {
                                        navigator.clipboard.writeText("3038018019"); 
                                        toastr.info("Copied to clipboard.");}}>
                                            <i className="fa-regular fa-copy m-2"/>
                                    </a>
                                </div>
                            </div> 
                        </div>
                        <div className="tab-pane fade" id="emailInfoCard" role="tabpanel">
                            <div className="card emailInfo">
                                <div className="card-header">email address</div>
                                <div className="card-body">
                                    sandra.mntru@gmail.com
                                    <a className="copy-to-clipboard" 
                                    onClick={() => {
                                        navigator.clipboard.writeText("sandra.mntru@gmail.com"); 
                                        toastr.info("Copied to clipboard.");}}>
                                            <i className="fa-regular fa-copy m-2"/>
                                    </a>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;