//import './resources/styles/index.css';

import AboutMe from './components/AboutMe';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import MediaPlayer from './components/MediaPlayer';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className='App'>
      <div className='row'>
        <div className='col-12 col-md-6 pt-2 order-0'>
          <AboutMe/>
        </div>
        <div className='col-12 col-md-6 pt-2 order-2 order-md-1'>
          <Calendar/>
        </div>
        <div className='col-12 col-md-6 pt-2 order-1 order-md-2'>
          <Contact/>
        </div>
        <div className='col-12 col-md-6 pt-2 order-4 order-md-3'>
          <MediaPlayer/>
        </div>
        <div className='col-12 pt-2 order-3 order-md-4'>
          <Projects/>
        </div>
        <div className='col-12 pt-2 order-last'>
          <Resume/>
        </div>
        <div className='col-12 pt-2 order-last'>
          <Skills/>
        </div>
        <div className='col-12 pt-2 order-last'>
          <WorkExperience/>
        </div>
      </div>
    </div>
  );
}

export default App;
