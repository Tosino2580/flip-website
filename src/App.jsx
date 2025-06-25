import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import NavBar from './component/NavBar'
import ContactUs from './Pages/ContactUs'
import Gallery from './Pages/Gallery'
import GetInvolved from './Pages/GetInvolved'
import FlipAnnouncementBar from './component/FlipAnnouncementBar'


function App() {
 return(
  <Router>
    <NavBar/>
    <FlipAnnouncementBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about us' element={<AboutUs/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/get involved' element={<GetInvolved/>}></Route>
      <Route path='/contact us' element={<ContactUs/>}></Route>
    </Routes>
  </Router>
 )
}

export default App
