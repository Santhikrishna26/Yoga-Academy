
import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import LoginForm from './components/Login'
import SignUp from './components/Signup'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import HomePage from './components/Home'
import Course from './components/Course'
import Profile from './components/Profile'
import ActionAreaCard from './components/Classes'
import EventPage from './components/event'
import ParticipateForm from './components/eventform'
import AdminDashboard from './components/adminDash'
import AdminSidebar from './components/AdminSidebar'
import Contacts from './components/Contacts'
function App() {


  return (
    <>
  
      <div className="App">
     <Router>
       <Routes>
       <Route path="/"element={<LoginForm/>}/>
       <Route path="/SignUp"element={<SignUp/>}/>
       <Route path="/"element={<Topbar/>}/>
       <Route path="/Sidebar"element={<Sidebar/>}/>
       <Route path="/HomePage"element={<HomePage/>}/>
       <Route path='/Course'element={<Course/>}/>
       <Route path='/Profile'element={<Profile/>}/>
       <Route path='/event'element={<EventPage/>}/>
       <Route path='/EventForm'element={<ParticipateForm/>}></Route>
       <Route path='/classes'element={<ActionAreaCard/>}/>
       <Route path='/AdminDashboard'element={<AdminDashboard/>}/>
       <Route path='/AdminSidebar'element={<AdminSidebar/>}/>
       <Route path='/Contacts'element={<Contacts/>}/>
       </Routes>
     </Router>
      </div>
      
    </>
  )
}

export default App
