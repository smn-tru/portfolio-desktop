import React from 'react';

import Profile from './components/Profile';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import MediaPlayer from './components/MediaPlayer';
import Skills from './components/Skills';
import Search from './components/Search';
import Weather from './components/Weather';
import ContactForm from './components/ContactForm';
import Clock from './components/Clock';
import AboutMe from './components/AboutMe';

function App() {
    return (
        <div className='container App'>
            <div className='row component-board'>
                <div className="grid grid-cols-7 gap-0 mb-2">
                    <div className="col-span-3">
                        <Search />
                    </div>
                    <div className="col-span-2">
                        <Contact /> 
                    </div>
                    <div className="col-span-2">
                        <Clock />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">
                    <div className='grid grid-rows-2 col-span-2 gap-4'>
                        <div className="col-span-1">
                            <div className='row-span-2 mb-2'>
                                <Profile />
                            </div>
                            <div className='row-span-1'>
                                <AboutMe />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className='row-span-1 mb-2'>
                                <MediaPlayer />
                            </div>
                            <div className='row-span-2'>
                                <Skills />
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <ContactForm />
                        </div>
                    </div>
                    <div className="grid col-span-1">
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
