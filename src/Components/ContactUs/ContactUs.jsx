import React, { useState } from "react";
import "./ContactUs.css";
import messageicon from "../../assets/msg-icon.png";
import phoneicon from "../../assets/phone-icon.png";
import mailicon from "../../assets/mail-icon.png";
import locationicon from "../../assets/location-icon.png";

const ContactUs = () => {

  const[hideMessage,setHideMessage] = useState(true);  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    setHideMessage(false);
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "82becccb-c2f8-4530-b91c-ec0e6d9521d1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    setTimeout(()=>{
        setHideMessage(true)
    },3000);

  };

  return (
    <div className="contactus">
      <div className="contactus-col">
        <h3>
          Send Message <img className="msg-icon" src={messageicon} />
        </h3>
        <p>
          We value your feedback and inquiries. Whether you have questions,
          suggestions, or concerns, we're here to help. Please feel free to
          reach out to us by filling out the contact form below. Our dedicated
          team will review your message and respond promptly to assist you.
          Thank you for choosing us!
        </p>
        <div className="support-info">
          <ul>
            <li>
              <img src={mailicon} alt="" />
              customercare@educity
            </li>
            <li>
              <img src={phoneicon} alt="" />
              +1-220-321-9980
            </li>
            <li>
              <img src={locationicon} alt="" />
              Carlyle Hall 25 Union Square W, <br /> New York, NY 10003, USA
            </li>
          </ul>
        </div>
      </div>
      <div className="contactus-col">
        <form onSubmit={onSubmit} className="contact-us-form">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" placeholder="Enter Your Name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" placeholder="Enter Your Email" />
          <label>Write your message here</label>
          <textarea name="message" rows="6"></textarea>
          <button className="btn dark-btn">Submit Now</button>
        </form>
        <p className={hideMessage?'hide-message':'show-message'}>{result}</p>
      </div>
    </div>
  );
};

export default ContactUs;
