import './Contact.css';

const Contact = () => {
  return (
    <main translate="no">
      <div className="container ready" id="container">
        <section className="contact" id="contact">
          <h2 className="heading">
            Contact <span>Me!</span>
          </h2>
          <form action="mailto:email@dominio.com" method="POST">
            <div className="input-box">
              <input type="text" name="Full Name" placeholder="Full Name"></input>
              <input
                type="email"
                name="Email Address"
                placeholder="Email Address"
              ></input>
            </div>
            <div className="input-box">
              <input type="tel" name="Mobile Number" placeholder="Mobile Number"></input>
              <input type="text" name="Email Subject" placeholder="Email Subject"></input>
            </div>
            <textarea
              name="Message"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <input type="submit" value="Send Message" className="btn"></input>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Contact;
