import React from 'react'
import {Link,Outlet,useNavigate} from 'react-router-dom'
import "./style.css"
function Notes() {
  let navigate=useNavigate()
  return (
    <div>
      <div className='container shadow mt-4'>
        <div className="dropdown mb-5 text-center">
          <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Select Semister
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><Link className="dropdown-item" to="1stsemnotes"  >1st Sem</Link></li>
            <li><Link className="dropdown-item" to="2ndsemnotes">2nd Sem</Link></li>
            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Notes