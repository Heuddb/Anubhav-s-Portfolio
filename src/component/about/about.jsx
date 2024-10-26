import "./about.css";

function Aboutme() {
  return (
    <>
    <div id="about" className="about_e" style={{marginTop:'24%'}}>
    
      <div  className="header">
        <h1 className="abt">ABOUT</h1>
      </div>
      <div className="about_container">
       
        <div className="about_section">
      
          <div className="right">
            <p className="right1">
              Passionate about creating responsive, user-friendly websites and
              collaborating with back-end developers to enhance performance and
              functionality
            </p>

            <p className="right1">
              I'm a Front End Developer skilled in HTML, CSS, JavaScript,React
              js and manymore.
            </p>

            <div className="about_skills">
              <div className="skills">
                <p>HTML & CSS</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="skills">
                <p>JAVASCRIPT</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="skills">
                <p>REACT JS</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="skills">
                <p>BOOTSTRAP</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="skills">
                <p>REDUX</p>
                <hr style={{ width: "60%" }} />
              </div>

              <div className="skills">
                <p>RESPONSIVENESS</p>
                <hr style={{ width: "80%" }} />
              </div>

            </div>
          </div>
        </div>
      </div>
      
      </div>
    </>
  );
}

export default Aboutme;
