import React, {Dispatch, SetStateAction} from 'react';
import { Modal, Table, Button } from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid'
import { IoLogoGithub } from "react-icons/io";

interface CardProps {
  title: string;
  content: string;
  image: string;
  description: string;
  gitHubLink: string;
  techStack: object;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ProjectCardModal: React.FC<CardProps> = ({ title, content, image, description, gitHubLink, techStack, modalOpen, setModalOpen }) => {
    console.log(title,content,image,description,gitHubLink,techStack, modalOpen)
    const paragraphs = description.split('\n').map((paragraph, index) => (
        <React.Fragment key={index}>
          {index > 0} {/* Add a <br /> except for the first paragraph */}
          <p>{paragraph}</p>
        </React.Fragment>
      ));
    return (
        <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
            <Modal.Header closeButton />
            <Modal.Body>
                <h2>{title}</h2>
                <img src={`/images/${image}`} className="card-img-top" alt="..."/>
                <h3>Techstack:</h3>
                <Table>
                    <tbody>
                        {
                            Object.entries(techStack).map(([key, values]) => (
                                values.length > 0 && (
                                    <tr key={key}>
                                        <td><strong>{key}: </strong></td>
                                        <td>
                                            <ul>
                                                {values.map((value: string) => (
                                                    <li key={uuidv4()}>{value}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                )
                            ))
                        }
                    </tbody>
                </Table>
                <h3>Description: </h3>
                <div>
                    {paragraphs}
                </div>
                <div className='d-flex justify-content-center'>
                    <a className="icon" href={gitHubLink}><IoLogoGithub size={40} color='black'/></a>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='dark' onClick={() => setModalOpen(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ProjectCardModal;