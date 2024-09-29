import React, { useRef } from "react";
import "./Testimonials.css";
import backicon from "../../assets/back-icon.png";
import nexticon from "../../assets/next-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const moveForward = () =>{
        if(tx > -50){
            tx -= 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const moveBackward = () =>{
        if(tx < 0){
            tx += 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`;
        
    }


  return (
    <div className="testimonials">
      <img src={nexticon} alt="" className="next-icon" onClick={moveForward}/>
      <img src={backicon} alt="" className="back-icon" onClick={moveBackward}/>
      <div className="sliders">
        <ul ref={slider}>
          <li className="slide">
            <div className="user-info">
              <img src={user1} alt="" className="profile" />
              <div>
                <h3>Jenny Williams</h3>
                <span>Washington DC,USA</span>
              </div>
            </div>
            <p className="description">
              Attending this College has been a life-changing experience for me.
              The supportive community, dedicated faculty, and diverse student
              body have created an environment where I've been able to grow both
              academically and personally.
            </p>
          </li>
          <li className="slide">
            <div className="user-info">
              <img src={user2} alt="" className="profile" />
              <div>
                <h3>Josh Salt</h3>
                <span>Texas,USA</span>
              </div>
            </div>
            <p className="description">
              I couldn't be happier with my decision to enroll at XYZ College.
              The small class sizes and personalized attention from professors
              have allowed me to thrive academically and build meaningful
              relationships with my peers and mentors.
            </p>
          </li>
          <li className="slide">
            <div className="user-info">
              <img src={user3} alt="" className="profile" />
              <div>
                <h3>Kite Bolt</h3>
                <span>New York,USA</span>
              </div>
            </div>
            <p className="description">
              The hands-on learning experiences, internships, and research
              opportunities offered by the college have helped me gain practical
              skills and real-world experience that will undoubtedly benefit me
              in my future career.
            </p>
          </li>
          <li className="slide">
            <div className="user-info">
              <img src={user4} alt="" className="profile" />
              <div>
                <h3>Kane Williams</h3>
                <span>Maryland, USA</span>
              </div>
            </div>
            <p className="description">
              The college's extensive support services, including tutoring,
              counseling, and financial aid assistance, have helped me overcome
              challenges and stay on track towards achieving my academic and
              career goals.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
