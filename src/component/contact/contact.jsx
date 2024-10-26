import { IoIosMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import React from "react";
import "./contact.css"
function Contact() {

    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "73014cc6-0fa9-4976-9114-52f3731e25a9");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        alert(data.message)
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    
    return <>
    <div id="Contact" className="contact">
        <div className="contact_title">
            <h2>CONTACT ME </h2>
        </div>
        <div className="contact_section">
            <div className="left">
                <h2>LETS'S TALK</h2>
                <p>I'm currently available to make on new frontend projects, so feel free to send me a message about anything you want me to work on.</p>
                <div className="details">
                <div className="more_detail">
                <IoIosMail /> <p>anubhavdubey918@gmail.com</p>
                </div>
                <div className="more_detail">
                <IoMdCall /> <p>+91-9770570892</p>
                </div>
                <div className="more_detail">
                <FaLocationDot /> <p>Balaghat M.P , INDIA</p>
                </div>
            </div>
            </div>
           
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">your name</label>
                <input type="text" placeholder="Enter Your Name" name="name" />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter Your Email" name="email" />
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows={6} placeholder="Enter Your message"></textarea>
                <button type="submit" className="sbmit">Submit</button>
            </form>
        </div>
    </div>
       
     

    </>
    
}

export default Contact;