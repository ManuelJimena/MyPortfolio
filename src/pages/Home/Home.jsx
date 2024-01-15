import './Home.css';

import React from 'react';

const Home = () => {
  const darkModeLocalStorageKey = 'darkMode';
  const currentMode = localStorage.getItem(darkModeLocalStorageKey);
  const isDarkMode = currentMode === 'enabled';

  const logoUrl = isDarkMode
    ? 'https://res.cloudinary.com/dhjmt9vvq/image/upload/v1697300018/Portfolio/logodeveloper_dark_j3j2cy.webp'
    : 'https://res.cloudinary.com/dhjmt9vvq/image/upload/v1697297300/Portfolio/logodeveloper_ppqmat.webp';

  return (
    <main translate="no">
      <div className="container ready" id="container">
        <section className="home" id="home">
          <div className="home-content">
            <h3>Hello, I am</h3>
            <div id="text-animate">
              <h1>
                Manuel{' '}
                <span className="animate" style={{ '--i': 3 }}>
                  Jimena
                </span>
              </h1>
            </div>
            <p>
              Currently, I am studying web development. I live in Madrid, Spain, and I
              love learning and creating content.
            </p>
            <div className="social-media">
              <a
                className="github"
                href="https://github.com/ManuelJimena"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-github" alt="Github icon"></i>
              </a>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/manuel-jimena-garcía/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-linkedin" alt="Linkedin icon"></i>
              </a>
            </div>
            <a href="/ManuelJimenaGarcíaCV.pdf" className="btn" target="_blank">
              Download CV
            </a>
          </div>
          <div className="profession-container">
            <div className="profession-box">
              <div className="profession" style={{ '--i': 0 }}>
                <h3>Backend</h3>
              </div>
              <div className="profession" style={{ '--i': 1 }}>
                <h3>Developer</h3>
              </div>
              <div className="profession" style={{ '--i': 2 }}>
                <h3>Fullstack</h3>
              </div>
              <div className="profession" style={{ '--i': 3 }}>
                <h3>Frontend</h3>
              </div>
              <div className="circle"></div>
            </div>
            <div className="overlay"></div>
          </div>
          <div className="home-img">
            <img id="image-element" src={logoUrl} alt="Imagen de Manuel Jimena"></img>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
