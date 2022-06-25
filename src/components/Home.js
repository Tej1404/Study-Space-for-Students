import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";
import { useNavigate } from "react-router-dom";
import studyspace from "../images/study_space.svg";
fontawesome.library.add(faCheckSquare, faCoffee);
function Home() {
  let Navigate = useNavigate();
  return (
    <div
      className="container text-center home pt-3"
      style={{ height: "100vh" }}
    >
      <p className="display-4 semTitle">
        <FontAwesomeIcon
          icon="book"
          style={{ width: "7%", display: "inline", color: "	#b8860b" }}
        ></FontAwesomeIcon>
        Study Space
      </p>
      {/* <hr/> */}
      <img src={studyspace} style={{ width: "30%" }} className="pt-3"></img>
      <p className="pt-5 para">
        Study Space is a Academic Portal with an aim to <br></br>provide{" "}
        <a href="/notes" className="text-dec">
          Notes
        </a>{" "}
        and{" "}
        <a href="/timetable" className="text-dec">
          Time tables
        </a>{" "}
        details to all the CSE students.
      </p>
    </div>
  );
}

export default Home;
