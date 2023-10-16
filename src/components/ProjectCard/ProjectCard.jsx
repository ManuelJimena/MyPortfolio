import './ProjectCard.css';

export const ProjectCard = ({ project }) => (
  <div className="portfolio-box">
    <img src={project.image} alt={project.title} />
    <div className="portfolio-layer">
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <div id="portfolio-links">
        <a href={project.github} target="_blank" rel="noreferrer">
          <i className="bx bxl-github"></i>
        </a>
        <a href={project.link} target="_blank" rel="noreferrer">
          <i className="bx bx-link-external"></i>
        </a>
      </div>
      <p id="tech">{project.tech.join(' - ')}</p>
    </div>
  </div>
);
