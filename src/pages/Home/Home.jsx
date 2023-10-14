import "./Home.css"

const Home = () => {

    return (
<main>

<section className="home" id="home">
        <div className="home-content">
          <h3>Hello, I am</h3>
          <div id="text-animate">
          <h1>
          Manuel <span className="animate" style={{ "--i": 3 }}>Jimena</span>
        </h1>
                
            </div>
          <p>
          Currently, I am studying web development. I live in Madrid, Spain, and I love learning and creating content.
          </p>
          <div className="social-media">
            <a
              className="github"
              href="https://github.com/ManuelJimena"
              target="_blank"
              ><i className="bx bxl-github" alt="Github icon"></i></a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/manuel-jimena-garcía/"
              target="_blank"
              ><i className="bx bxl-linkedin" alt="Linkedin icon"></i></a>
          </div>
          <a href="./src/assets/pdf/ManuelJimenaGarcíaCV.pdf" className="btn" target="_blank">Download CV</a>
        </div>
        <div className="profession-container">
          <div className="profession-box">
            <div className="profession" style={{ "--i": 0 }}>
              <h3>Backend</h3>
            </div>
            <div className="profession" style={{ "--i": 1 }}>
            <h3>Developer</h3>
            </div>
              <div className="profession" style={{ "--i": 2 }}>
              <h3>Fullstack</h3>
            </div>
               <div className="profession" style={{ "--i": 3 }}>
               <h3>Frontend</h3>
            </div>
          <div className="circle"></div>
            </div>

            <div className="overlay"></div>
        </div>

        <div className="home-img">
            <img id="image-element" src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1697286725/Portfolio/1_b5a1vc.webp" alt="Imagen de Manuel Jimena"></img>
        </div>
    </section>

</main>
    );
};

export default Home;