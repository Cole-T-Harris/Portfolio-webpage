import { Dispatch, SetStateAction } from "react";
import { ReactTyped } from 'react-typed';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { ASPIRING_JOB_TITLES, LINKEDIN_URL, GITHUB_URL } from "../../utils/constants"

interface GreetingsProps {
    setViewProjects: Dispatch<SetStateAction<boolean>>
    setViewResume: Dispatch<SetStateAction<boolean>>
}

const Greeting: React.FC<GreetingsProps> = ({setViewProjects, setViewResume}) => {
    const handleProjectsClick = () => {
      setViewResume(false)
      setViewProjects(true)
    }

    const handleResumeClick = () => {
      setViewResume(true)
      setViewProjects(false)
    }

    return (
      <div className="greeting">
        <h1>Hi, I'm <span>Cole Harris</span></h1>
        <h2>I'm interested in{' '}
            <ReactTyped 
                strings={ASPIRING_JOB_TITLES}
                typeSpeed={60}
                backSpeed={35}
                backDelay={500}
                loop
            />{' '}
        </h2>
        <button className="raise btn-spacing" 
            onClick={handleResumeClick}>Resume</button>
        <button className="raise btn-spacing" 
            onClick={handleProjectsClick}>Projects</button>
        <div className="networks">
          <div className="netbox">
            <a className="icon" href={LINKEDIN_URL}><IoLogoLinkedin size={40}/></a>
            <a className="icon" href={GITHUB_URL}><IoLogoGithub size={40}/></a>
          </div>
        </div>
      </div>
    )
  }
  
export default Greeting