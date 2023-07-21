import "./ProjectCard.css";
export const ProjectCard = (project) => `
<div class="portfolio-box">
      <img src=${project.image} alt=${project.title}/>
    <div class="portfolio-layer">
      <h4>${project.title}</h4>
      <p>${project.description}</p>
      <a href=${project.link}>
    </div>
        <div class="detail">
            <p class="tech">${project.tech.join(" - ")}</p>
        </div>
</div>
`;