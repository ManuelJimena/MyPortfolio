import './Skills.css';

const Skills = () => {
  return (
    <main translate="no">
      <section className="skills" id="skills">
        <h2 className="heading">
          My <span>Skills</span>
        </h2>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              {' '}
              <i className="bx bx-code-alt"></i>
              <div className="text">Web Development</div>
              <p className="par-card">HTML5 | CSS3 | JavaScript | React</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              {' '}
              <i className="bx bxs-data"></i>
              <div className="text">Database</div>
              <p className="par-card">Node.js | Express.js | Mongo DB</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              {' '}
              <i className="bx bxs-wrench"></i>
              <div className="text">Tools</div>
              <p className="par-card">
                {' '}
                Vite | Tailwind | Adobe Photoshop | Sony Vegas | GitHub
              </p>
            </div>
          </div>
        </div>
        <div className="skills-icons">
          <div className="icons">
            <ul>
              <li>
                <a
                  href="https://es.wikipedia.org/wiki/HTML5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459750/Portfolio/html5-logo-240_ozkbzy.png"
                    alt="Html5 icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://es.wikipedia.org/wiki/CSS"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459750/Portfolio/css3-logo-240_ytkblc.png"
                    alt="Css3 icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://es.wikipedia.org/wiki/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459750/Portfolio/javascript-logo-240._zvqvq1.png"
                    alt="Javascript icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://react.dev/" target="_blank" rel="noreferrer">
                  <img
                    src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459751/Portfolio/react-logo-240_c3dkda.png"
                    alt="React icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">
                  <img
                    src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459750/Portfolio/nodejs-logo-240_vkc0jd.png"
                    alt="Nodejs icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459750/Portfolio/Expressjs-logo-240_x1ioei.png"
                    alt="Expressjs icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.mongodb.com/es" target="_blank" rel="noreferrer">
                  <img
                    src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459751/Portfolio/mongodb-logo-240_hjrlyu.png"
                    alt="Mongo db icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
                  <img
                    src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459751/Portfolio/vite-logo-240_y72ctj.png"
                    alt="Vite icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459751/Portfolio/tailwind-logo-240_tgxugk.png"
                    alt="Tailwind icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.adobe.com/en/products/photoshop/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459750/Portfolio/photoshop-logo-240_daqlau.png"
                    alt="Photoshop icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.vegascreativesoftware.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459751/Portfolio/vegas-logo-240_ueu8h0.png"
                    alt="Sony vegas icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ManuelJimena"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1690459751/Portfolio/github-logo-240_kvziui.png"
                    alt="Github icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
