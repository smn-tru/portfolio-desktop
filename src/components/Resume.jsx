import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs} from 'react-pdf';
import Sandra_Truong_Full_Stack_Software_Developer from '../resources/assets/Sandra_Truong_Full_Stack_Software_Developer.pdf'
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

function Resume({ setShowResume }){
    return (
        <div id="large-modal" data-modal-placement="top-center" tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-4xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="p-4 md:p-5 space-y-4">
                        <Document file={Sandra_Truong_Full_Stack_Software_Developer}>
                            <Page 
                                pageNumber={1}
                                scale={1.4}               
                                renderAnnotationLayer={false} 
                                renderTextLayer={false}
                            />
                        </Document>
                    </div>
                    <div className="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                        <a href={Sandra_Truong_Full_Stack_Software_Developer} download="Sandra_Truong_Full_Stack_Software_Developer" target='_blank'>
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download</button>
                        </a>
                        <button onClick={() => setShowResume(false)} data-modal-hide="large-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;