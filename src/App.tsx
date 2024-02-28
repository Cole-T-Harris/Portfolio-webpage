import { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import Collapse from 'react-collapse';
import './App.css'
import Greeting from './components/Greeting/greeting'
import Projects from './components/Projects/projects'
import Resume from './components/Resume/resume';
import { BACKGROUND_COLOR } from './utils/constants'

function App() {
  const [viewProjects, setViewProjects] = useState(false)
  const [viewResume, setViewResume] = useState(false)
  const [resumeOpacity, setResumeOpacity] = useState(0)
  /* Using the following useEffect to provide a fade in transition. useState is delayed on changing value thus
  that delay allows the opacity to be 0 initially on a collpase open and then a transition to opacity 1 which allows the
  CSS transition rule fade-in to work.
  */
  useEffect(() => {
    setResumeOpacity(viewResume ? 1 : 0);
  }, [viewResume]);
  return (
    <>
      <Helmet>
        <style>{`body { background-color: ${BACKGROUND_COLOR}; }`}</style>
      </Helmet>
      <Greeting setViewProjects={setViewProjects} setViewResume={setViewResume}/>
      <Collapse 
        isOpened={viewResume}
      >
        <div className='fade-in' style={{"opacity" : resumeOpacity}}>
          <Resume/>
        </div>
      </Collapse>
      <Collapse isOpened={viewProjects}>
        <Projects/>
      </Collapse>
    </>
  )
}

export default App
