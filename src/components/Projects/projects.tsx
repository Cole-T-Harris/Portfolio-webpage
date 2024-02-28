import ProjectCard from "./projectCard"
import projectInfo from "../../static/projects.json"
import {v4 as uuidv4} from 'uuid';


export default function Projects() {
  return (
<div className="container p-6">
  <div className="row mb-4">
    {projectInfo.projects.map((project) => (
      <ProjectCard 
        key={uuidv4()} 
        title={project.title} 
        content={project.quickDescription}
        image={project.image}
        description={project.description}
        gitHubLink={project.gitHubLink}
        link={project.link!}
        techStack={project.techstack}
         />
    ))}
  </div>
</div>
  )
}
