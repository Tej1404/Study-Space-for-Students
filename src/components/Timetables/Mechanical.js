import React, { useState } from "react";
import y3CSE3 from "../vendor/y3CSE3.jpeg"
import Popup from "./Popup";
import "../style.css";

const Location = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text">MECH1</p>

            <button type="button" className="btn-primary" onClick={togglePopup}>
              {" "}
              View TimeTable{" "}
            </button>
            <div>
              {isOpen && (
                <Popup
                  content={
                    <>
                      <img
                        className="img-fluid"
                        src={y3CSE3}
                        style={{ position: "relative" }}
                        width="70%"
                        height="auto"
                        alt="y3cse1"
                      />
                    </>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text">MECH2</p>

            <button type="button" className="btn-primary" onClick={togglePopup}>
              {" "}
              View TimeTable{" "}
            </button>
            <div>
              {isOpen && (
                <Popup
                  content={
                    <>
                      <img
                        className="img-fluid"
                        src={y3CSE3}
                        style={{ position: "relative" }}
                        width="70%"
                        height="auto"
                        alt="y3cse2"
                      />
                    </>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text">MECH3</p>
            <button type="button" className="btn-primary" onClick={togglePopup}>
              {" "}
              View TimeTable{" "}
            </button>
            <div>
              {isOpen && (
                <Popup
                  content={
                    <>
                      <img
                        className="img-fluid"
                        src={y3CSE3}
                        style={{ position: "relative" }}
                        width="70%"
                        height="auto"
                        alt="y3cse2"
                      />
                    </>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text">MECH4</p>
            <button type="button" className="btn-primary" onClick={togglePopup}>
              {" "}
              View TimeTable{" "}
            </button>
            <div>
              {isOpen && (
                <Popup
                  content={
                    <>
                      <img
                        className="img-fluid"
                        src={y3CSE3}
                        style={{ position: "relative" }}
                        width="70%"
                        height="auto"
                        alt="y3cse2"
                      />
                    </>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;