import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import NavBar from './component/NavBar'
import ContactUs from './Pages/ContactUs'
import GetInvolved from './Pages/GetInvolved'
// import FlipAnnouncementBar from './component/FlipAnnouncementBar'
import Flip2Page from './component/Flip2Page'
import ScrollToTop from './component/ScrollToTop'
import Flip from './Pages/GalleryPages/Flip1'
import Flip2 from './Pages/GalleryPages/Flip2'



function App() {
 return(
  <Router>
    <ScrollToTop/>
    <NavBar/>
    {/* <FlipAnnouncementBar/> */}
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about us' element={<AboutUs/>}></Route>
      <Route path='/gallery/flip1' element={<Flip/>}></Route>
      <Route path='/gallery/flip2' element={<Flip2/>}></Route>
      <Route path='/get involved' element={<GetInvolved/>}></Route>
      <Route path='/contact us' element={<ContactUs/>}></Route>
      <Route path='/flip-2.0' element={<Flip2Page/>}></Route>
    </Routes>
  </Router>
 ) 
}

export default App
