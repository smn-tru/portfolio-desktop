import React from 'react';

import AboutMe from './components/AboutMe';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import MediaPlayer from './components/MediaPlayer';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Search from './components/Search';
import Notes from './components/Notes';
import Weather from './components/Weather';
import Favorites from './components/Favorites';
import Clock from './components/Clock';

function App() {
  return (
    <div className='container App'>
      <div className='row component-board'>
        <div className="grid grid-cols-7 gap-0 mb-2">
          <div className="col-span-3">
            <Search />
          </div>
          <div className="col-span-3">
            <Contact /> 
          </div>
          <div className="col-span-1">
            <Clock />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">
          <div className="col-span-1 grid grid-rows-3 gap-4">
            <AboutMe />
            <Notes />
            <Favorites />
          </div>
          <div className="col-span-1 grid grid-rows-1 gap-4">
            <Projects />
            <MediaPlayer />
            <Weather />
          </div>
          <div className="col-span-1">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
