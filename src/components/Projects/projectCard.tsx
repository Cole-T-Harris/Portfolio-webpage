import React, { useEffect, useState, useRef } from 'react';
import viteLogo from '/images/AWS-Cloud.png'

interface CardProps {
  title: string;
  content: string;
}

const ProjectCard: React.FC<CardProps> = ({ title, content }) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
  return (
      <div 
        ref={domRef} 
        className={`col-12 col-md-6 col-lg-4 card-styling ${isVisible ? 'isVisibile' : ''} d-flex justify-content-center`}>
        <div
          className='rounded shadow-lg card scale-on-hover card-background'
        >
          <img src={viteLogo} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
  );
};

export default ProjectCard;
