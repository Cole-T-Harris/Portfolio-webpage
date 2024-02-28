import React, { useEffect, useState, useRef } from 'react';
import ProjectCardModal from './projectModal';

interface CardProps {
  title: string;
  content: string;
  image: string;
  description: string;
  gitHubLink: string;
  link: string | null;
  techStack: object;
}

const ProjectCard: React.FC<CardProps> = ({ title, content, image, description, gitHubLink, link, techStack }) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true)
        observer.unobserve(domRef.current!);
      }
    })
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect()
  }, [domRef]);
  console.log(description, gitHubLink, link, techStack)
  return (
      <div 
        ref={domRef} 
        className={`col-12 col-md-6 col-lg-4 card-styling ${isVisible ? 'isVisibile' : ''} d-flex justify-content-center`}>
        <div
          className='rounded shadow-lg card scale-on-hover card-background'
        >
          <img src={`/images/${image}`} className="card-img-top" alt="..."/>
          <div className="card-body text-start">
            <h5 className="card-title">{title}</h5>
            <p className="card-text card-content">{content}</p>
            <button className='learn-more-button learn-more-button-location' onClick={() => setModalOpen(true)}>Learn More</button>
            {link ? <a href={link} className='learn-more-button project-link-button-location'>Navigate To</a> : <></>}
            <ProjectCardModal
              title={title}
              content={content}
              image={image}
              description={description}
              gitHubLink={gitHubLink}
              techStack={techStack}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
          </div>
        </div>
      </div>
  );
};

export default ProjectCard;
