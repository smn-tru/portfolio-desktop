import React from 'react';

const Profile = React.lazy(() => import('./components/Profile'));
const Calendar = React.lazy(() => import('./components/Calendar'));
const Contact = React.lazy(() => import('./components/Contact'));
const MediaPlayer = React.lazy(() => import('./components/MediaPlayer'));
const Skills = React.lazy(() => import('./components/Skills'));
const Weather = React.lazy(() => import('./components/Weather'));
const ContactForm = React.lazy(() => import('./components/ContactForm'));
const Clock = React.lazy(() => import('./components/Clock'));
const AboutMe = React.lazy(() => import('./components/AboutMe'));

function App() {
    return (
        <div className='container App p-2'>
            <div className='row component-board'>
                <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-0 mb-2">
                    <div className="sm:col-span-1 md:col-span-3 lg:col-span-4">
                        <Contact /> 
                    </div>
                    <div className="hidden md:block md:col-span-1 lg:block lg:col-span-3">
                        <Clock />
                    </div>
                </div>
                <div className="grid sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">
                    <div className='lg:grid grid-rows-2 col-span-2 gap-4'>
                        <div className="col-span-1 mt-2 lg:mt-0">
                            <div className='row-span-2 mb-2'>
                                <Profile />
                            </div>
                            <div className='row-span-1'>
                                <AboutMe />
                            </div>
                        </div>
                        <div className="col-span-1 mt-2 lg:mt-0">
                            <div className='hidden lg:block row-span-1 mb-2'>
                                <MediaPlayer />
                            </div>
                            <div className='row-span-2'>
                                <Skills />
                            </div>
                        </div>
                        <div className='col-span-2 mt-2 lg:mt-0'>
                            <ContactForm />
                        </div>
                    </div>
                    <div className="hidden lg:block grid col-span-1">
                        <div className="col-span-1">
                            <div className='row-span-1 mb-2'>
                                <Calendar />
                            </div>
                            <div className='row-span-1'>
                                <Weather />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
