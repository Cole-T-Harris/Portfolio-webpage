import ProjectCard from "./projectCard"


export default function Projects() {
  const testCards = Array.from({length: 100}, (_, index) => ({
    id: String(index + 1),
    title: `Card ${index + 1}`,
    content: `Content for Card ${index + 1}`,
  }))

  return (
<div className="p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
    {testCards.map((project) => (
      <ProjectCard key={project.id} title={project.title} content={project.content} />
    ))}
  </div>
</div>
  )
}
