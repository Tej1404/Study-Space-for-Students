import {Routes,Route,Link,Navigate} from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer';
import Notes from './components/Notes';
import Timetable from './components/Timetable';
import Notes1stsem from './components/Notes1stsem';
import Notes2ndsem from './components/Notes2ndsem';
import Dummy from './components/Dummy'
import Ece from './components/Timetables/Ece';
import Cse from './components/Timetables/Cse';
import Civil from './components/Timetables/Civil';
import Eee from './components/Timetables/Eee';
import Mechanical from './components/Timetables/Mechanical';
import Notes3rdsem from './components/Notes3rdsem';
import Notes4thsem from './components/Notes4thsem';
import Notes5thsem from './components/Notes5thsem';
import clgspace from "./images/college_space_icon.png"

function App() {
  return (
    <div >
     {/* <Home/> */}
     {/* <Timetable /> */}
     <nav className="navbar navbar-expand-md navbar-dark bg-dark text-white">
        <div className='container-fluid'>
        <a className="navbar-brand" to="#">
          <img src={clgspace} style={{width:"25%"}}/>
          Study Space
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="notes">Notes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="timeTable">Timetable</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='http://www.vnrvjiet.ac.in/' target={'_blank'}>OfficialSite</a>
            </li>
          </ul>

        </div>
        </div>
      </nav>
     {/* <Footer/> */}
     {/* Routes */}
     <Routes>
      <Route path="" element={<Navigate replace to="home"></Navigate>}/>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/dummy' element={<Dummy/>}></Route>

      <Route path='/notes' element={<Notes/>}>
        <Route path="/notes" element={<Navigate replace to="1stsemnotes"></Navigate>}/>
        <Route path='/notes/1stsemnotes' element={<Notes1stsem/>}/>
        <Route path='/notes/2ndsemnotes' element={<Notes2ndsem/>}/>
        <Route path="/notes/3rdsemnotes" element={<Notes3rdsem/>}/>
        <Route path="/notes/4thsemnotes" element={<Notes4thsem/>}/>
        <Route path="/notes/5thsemnotes" element={<Notes5thsem/>}/>
      </Route>
      <Route path='/timetable' element={<Timetable/>}>
          {/* <Route path="cse" element={<Cse />}></Route> */}
          <Route path="1stsem" element={<Cse />}></Route>
          {/* <Route path="ece" element={<Ece />}></Route> */}
          <Route path="2ndsem" element={<Ece />}></Route>
          <Route path="3rdsem" element={<Eee />}></Route>
          <Route path="4thsem" element={<Civil />}></Route>
          <Route path="5thsem" element={<Mechanical />}></Route>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
