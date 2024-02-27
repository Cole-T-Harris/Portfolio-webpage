import ProjectCard from "./projectCard"


export default function Projects() {
  const testCards = Array.from({length: 100}, (_, index) => ({
    id: String(index + 1),
    title: `Card ${index + 1}`,
    content: `Content for Card ${index + 1}`,
  }))

  return (
<div className="container p-6">
  <div className="row mb-4">
    {testCards.map((project) => (
      <ProjectCard key={project.id} title={project.title} content={project.content} />
    ))}
  </div>
</div>
  )
}
