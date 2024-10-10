import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import emailIcon from "../../assets/mail_icon.svg";
import callIcon from "../../assets/call_icon.svg";
import locationIcon from "../../assets/location_icon.svg";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a3896bdc-a86b-4124-8ff8-4f33839d8537");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(result);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={emailIcon} alt="" />
              <p>mrkartik1st@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={callIcon} alt="" />
              <p>+918653336744</p>
            </div>
            <div className="contact-detail">
              <img src={locationIcon} alt="" />
              <p>Mathabhanga, Coochbehar, West Bengal, 736146</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form onSubmit={onSubmit}>
            <label htmlFor="">Your Name </label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder="Enter your email" name="email" />
            <label htmlFor="">Write your message here</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
