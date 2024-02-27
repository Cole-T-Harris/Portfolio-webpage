import { useState } from 'react';
import Helmet from 'react-helmet';
import Collapse from 'react-collapse'
import './App.css'
import Greeting from './components/Greeting/greeting'
import Projects from './components/Projects/projects'
import { BACKGROUND_COLOR } from './utils/constants'

function App() {
  const [viewProjects, setViewProjects] = useState(false)
  return (
    <>
      <Helmet>
        <style>{`body { background-color: ${BACKGROUND_COLOR}; }`}</style>
      </Helmet>
      <Greeting setViewProjects={setViewProjects}/>
      <Collapse isOpened={viewProjects}>
        <Projects/>
      </Collapse>
    </>
  )
}

export default App
