import React from "react";
import {saveAs} from "file-saver"
import '../resumebtn/resume.css';
function Resume() {

       const handleDownload = () => {
        const resumeBlob = new Blob(
            ["Your resume content here..."], 
            { type: "First_Name_Last_Name_cv.pdf" }
        );
        saveAs(resumeBlob, "First_Name_Last_Name_cv.pdf");
    }

    return<>
   
   <button onClick={handleDownload}className="resume">MY RESUME</button>


    </>
    
}

export default Resume;