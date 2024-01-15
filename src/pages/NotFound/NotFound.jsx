import './NotFound.css';

const NotFound = () => {
  return (
    <main translate="no">
      <div className="container" id="container">
      <section id="not-found">
        <div id="title">404 Error Page Not Found</div>
        <div className="circles">
          <p>404</p>
          <p>
            <small>PAGE NOT FOUND</small>
          </p>
          <span className="circle big"></span>
          <span className="circle med"></span>
          <span className="circle small"></span>
        </div>
      </section>
      </div>
    </main>
  );
};

export default NotFound;
