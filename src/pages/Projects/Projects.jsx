import './Projects.css';

import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { useProjects } from '../../hooks/useProjects';

const Projects = () => {
  const projects = useProjects();

  return (
    <main translate="no">
      <div className="container" id="container">
      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Project</span>
        </h2>
        <div className="portfolio-container">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>
      </div>
    </main>
  );
};

export default Projects;
