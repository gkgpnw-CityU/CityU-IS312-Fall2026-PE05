import ProjectCard from './ProjectCard.jsx'
import projects from '../../projects.json'
import './App.css'

function App() {
  return (
    <main className="portfolio">
      <header className="portfolio__header">
        <p className="portfolio__eyebrow">Griffin Gallagher - IS312 - PE05</p>
        <h1>Project Portfolio</h1>
        <p className="portfolio__intro">
          A compendium of completed personal projects I've worked on related to IT and cybersecurity.
        </p>
      </header>

      <section className="portfolio-grid" aria-label="Projects">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl.replace('./', '/images/')}
          />
        ))}
      </section>
    </main>
  )
}

export default App
