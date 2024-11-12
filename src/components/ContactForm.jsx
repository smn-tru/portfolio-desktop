import React, { useState } from "react";
import emailjs from 'emailjs-com';
import swal from 'sweetalert2';

function ContactForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => {
            let data = { ...prevState };
            data[name] = value;
            return data;
        });
    };

    const sendEmail = (e) => {
        e.preventDefault(); 
    
        emailjs.sendForm('service_zcu4q5p', 'template_r97wcao', e.target, 'pHjyvkO7w9Q7xvy3F')
          .then((result) => {
            swal.fire({
                icon: 'success',
                title: 'Sweet!',
                text: `Your message is on it's way`,
                showConfirmButton: false,
                timer: 2500,
                color: "#000",
                background: "white",
            });
            setTimeout(()=>{
                window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, 2500)    
          }, (error) => {
              console.log(error.text);
              swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'please try again or select another form of communication',
                confirmButtonColor: "#ea6cff",
                color: "#000",
                background: "white",
            })
        });
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
    };

    return (
        <div className='card-element d-flex flex-column'>
            <form className="p-3 grid grid-cols-3 gap-2 emailForm" onSubmit={sendEmail}>
                <div className="col-span-1">
                    <input 
                        required 
                        type='text' 
                        id="nameField" 
                        name="name" 
                        placeholder='Name' 
                        onChange={changeHandler} 
                        value={formData.name} 
                        className="mb-1 w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 text-sm outline-blue-500" 
                    />
                    <input 
                        required 
                        type="email" 
                        id="emailField" 
                        name="email" 
                        value={formData.email} 
                        className="mb-1 w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 text-sm outline-blue-500" 
                        placeholder="Email" 
                        onChange={changeHandler}
                    />
                    <input 
                        required 
                        type="text" 
                        id="subjectField" 
                        name="subject" 
                        value={formData.subject} 
                        className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 text-sm outline-blue-500" 
                        placeholder="Subject" 
                        onChange={changeHandler} 
                    />
                </div>
                <div className="col-span-2 md-form">
                    <textarea 
                        required 
                        type="textarea" 
                        id="messageField" 
                        name="message" 
                        value={formData.message} 
                        className="md-textarea w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 text-sm outline-blue-500" 
                        rows="6" 
                        placeholder="Message" 
                        onChange={changeHandler}
                    />
                    <div className="justify-self-end">
                        <button 
                            type="submit" 
                            className="text-white bg-opacity-70 hover:bg-opacity-50 bg-indigo-700 hover:bg-blue-700 focus:ring-blue-300 text-sm rounded-lg text-sm px-4 py-2 sendForm me-2"
                        >
                            Send
                        </button>
                        <button 
                            onClick={resetForm} 
                            type="button" 
                            className="text-black bg-white hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm rounded-lg text-sm px-4 py-2"
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;