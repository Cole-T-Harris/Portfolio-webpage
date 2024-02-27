import React, { useEffect, useState, useRef } from 'react';
import viteLogo from '/images/AWS-Cloud.png'

interface CardProps {
  title: string;
  content: string;
}

const ProjectCard: React.FC<CardProps> = ({ title, content }) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
        className={`rounded p-4 shadow-lg card ${isVisible ? 'isVisibile' : ''} ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col gap-2">
          <a href='#'>
            <div className='logo-container'>
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{content}</p>
          </a>
        </div>
      </div>
  );
};

export default ProjectCard;
