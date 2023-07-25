import "./NotFound.css";

const template = () => {
  return `
  <section id="not-found">
    <div id="title">Simple Pure CSS3 &bull; 404 Error Page</div>
    <div class="circles">
      <p>404<br>
       <small>PAGE NOT FOUND</small>
      </p>
    </div>
  </section>
</div>
  `;
};

const NotFound = () => {
  document.querySelector("main").innerHTML = template();
};

export default NotFound;