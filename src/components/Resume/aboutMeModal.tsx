import React, {Dispatch, SetStateAction} from 'react';
import { Modal, Button } from 'react-bootstrap';

interface AboutMeModal {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const AboutMeModal: React.FC<AboutMeModal> = ({ modalOpen, setModalOpen }) => {
    return (
        <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
            <Modal.Header closeButton />
            <Modal.Body>
                <div className='about-me'>
                    <img src={'/images/Profile-pic.jpg'} className="card-img-top" alt="..."/>
                    <h3>Hey there,</h3>
                    <p>
                        &ensp; Thank you for visiting my site! I am a recent Computer Science graduate. I previously worked as a Chemical Engineer 
                        (Controls Engineer) working on industrial control systems. Most recently I was a Software Test Engineer Intern for Visa and 
                        got the opportunity to work on an internal full-stack website. I have many interests ranging from Software Development to DevOps 
                        and am eager to learn and grow within this industry!
                    </p>
                    <br></br>
                    <p>
                        &ensp; In 2020, I graduated with a B.S. in Chemical and Biological Engineering from Colorado State University. At the time I knew
                        I liked the coding aspects of the degree but was not sure how to apply this to an industry job. This then led me to fall into a 
                        Controls Engineering role.
                    </p>
                    <br></br>
                    <p>
                        &ensp; This Controls Engineering role proved to be a perfect stepping-off point for me. In this role, I was immediately introduced 
                        to solving and debugging complex real-world problems. This involved debugging new and existing control systems, setting up industrial 
                        networking equipment, designing and developing control system code, designing SCADA operator screens, documenting control system designs,
                        designing control system electrical schematics, and collaborating with engineers, contractors, and clients on projects. As can be seen, 
                        I got introduced to a large scope of work and had to wear many hats.
                    </p>
                    <br></br>
                    <p>
                        &ensp; In 2022 after about 1.5 years of being a Controls Engineer, I wanted to make a career switch and transition fully to a computer 
                        science field and to obtain my B.S in Computer Science. This proved to be an exciting and fulfilling transition as I was introduced to 
                        many different technologies. My main motivation in my career is all based on learning. I am a person who finds an immense amount of 
                        satisfaction in learning and building new things. I know with whatever path I take with my new Computer Science degree, that I will be 
                        challenged and excited by the many different technologies that I work with.
                    </p>
                    <br></br>
                    <p>
                        &ensp; I am excited to take this next step to a full-time role whether that is Software Engineering or DevOps engineering. If you see 
                        a fit for me in your team and are inspired by my passion for technology, please don't hesitate to reach out at cole.t.harr@gmail.com. 
                        Thank you for reading!
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='dark' onClick={() => setModalOpen(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default AboutMeModal;