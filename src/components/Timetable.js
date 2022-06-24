import React from 'react'
import { Route, Routes, Link, Outlet } from 'react-router-dom'
// import logo from '../logo.svg' 

function Timetable() {
  return (
    <div className='container mt-5'>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="cse">CSE</Link>
        </li>
        <li className="list-group-item">
          <Link to="ece">ECE</Link>
        </li>
        <li className="list-group-item">
          <Link to="eee">EEE</Link>
        </li>
        <li className="list-group-item">
          <Link to="civil">CIVIL</Link>
        </li>
        <li className="list-group-item">
          <Link to="mechanical">MECHANICAL</Link>
        </li>
      </ul>
      <Outlet />
        
    </div>
  )
}

export default Timetable