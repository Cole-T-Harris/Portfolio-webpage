import { useState, useEffect } from 'react';
import resumeFile from '../../static/Website_Resume.pdf'

const Resume = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <div className='resume'>
            <h2>
                I am a <span>recent Computer Science graduate</span> and formerly a Controls Engineer with a Chemical Engineering background.
                I have many different <span>interests ranging from Software Engineering to Cloud engineering</span>. What all of it has in common
                is that <span>I have a passion and eagerness to learn new technologies</span>.
            </h2>
            <h2>
                I bring a unique skillset of having a Computer science and Chemical Engineering degree and having worked in industry formerly
                as a Chemical Engineer (Controls Engineer). If you want to learn more about me you can select about me page or navigate
                to my resume webpage!

            </h2>
            <button className='raise'>About Me</button>
            <button className='raise'>Resume Webpage</button>
            <div className='resume-pdf'>
                {windowWidth >= 800 ?
                    <embed src={resumeFile} width="800px" height="1150"/>
                    :
                    <a href={resumeFile}>
                        <button className='raise'>Download Resume</button>
                    </a>
                }
            </div>
        </div>
    )
  }
  
export default Resume