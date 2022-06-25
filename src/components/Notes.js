import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./style.css";
function Notes() {
  let navigate = useNavigate();
  // let [sem,setSem]=useState(sessionStorage.getItem("semTitle"))
  // useEffect(()=>{
  //   setSem(sessionStorage.getItem("semTitle"))
  //   console.log("hello")
  // },[sem])
  return (
    <div>
      <div className="container shadow mt-4">
        <div className="dropdown mb-5 text-center">
          <button
            className="btn btn-success dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Semester
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link className="dropdown-item" to="1stsemnotes">
                1st Sem
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="2ndsemnotes">
                2nd Sem
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="3rdsemnotes">
                3rd Sem
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="4thsemnotes">
                4th Sem
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="5thsemnotes">
                5th Sem
              </Link>
            </li>
            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Notes;
