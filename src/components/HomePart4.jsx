import "./style.css";

export const HomePart4 = () => {
  return (
    <div className="home-part4">
      <h2 className="contact-title">Contact Us</h2>

      <h1 className="contact-heading">
        Get in touch <strong className="gradient-text">With Us</strong>
      </h1>

      <p className="contact-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </p>

      <form className="contact-form">
        <div className="input-row">
          <input className="contact-input" />
          <input className="contact-input" />
        </div>

        <div className="message-row">
          <input className="message-input" />
        </div>

        <div className="submit-wrapper">
          <button className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};
