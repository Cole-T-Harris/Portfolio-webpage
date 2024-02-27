import { ReactTyped } from 'react-typed';
import { ASPIRING_JOB_TITLES } from "../../utils/constants"

function Greeting() {
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
      </div>
    )
  }
  
export default Greeting