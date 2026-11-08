function ProjectCard({ title, description, imageUrl }) {
  return (
    <article className="project-card">
      <img src={imageUrl} alt={`${title} project`} className="project-card__image" />
      <div className="project-card__content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default ProjectCard
