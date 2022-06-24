import React from 'react'
import { Route, Routes, Link, Outlet } from 'react-router-dom'
import "./style.css"
// import logo from '../logo.svg' 

function Timetable() {
  return (
    <div className='container mt-5'>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="1stsem" className='text-dec'>1st Sem</Link>
        </li>
        <li className="list-group-item">
          <Link to="2ndsem" className='text-dec'>2nd Sem</Link>
        </li>
        <li className="list-group-item">
          <Link to="3rdsem" className='text-dec'>3rd Sem</Link>
        </li>
        <li className="list-group-item">
          <Link to="4thsem" className='text-dec'>4th Sem</Link>
        </li>
        <li className="list-group-item">
          <Link to="5thsem" className='text-dec'>5th sem</Link>
        </li>
      </ul>
      <Outlet />
        
    </div>
  )
}

export default Timetable