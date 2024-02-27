import { Dispatch, SetStateAction } from "react";
import { ReactTyped } from 'react-typed';
import { ASPIRING_JOB_TITLES } from "../../utils/constants"

interface GreetingsProps {
    setViewProjects: Dispatch<SetStateAction<boolean>>
}

const Greeting: React.FC<GreetingsProps> = ({setViewProjects}) => {
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
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow btn-spacing" 
            onClick={() => setViewProjects(false)}>Resume</button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow btn-spacing" 
            onClick={() => setViewProjects(true)}>Projects</button>
      </div>
    )
  }
  
export default Greeting