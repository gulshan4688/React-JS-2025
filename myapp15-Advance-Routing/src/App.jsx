import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom";
import Product from './pages/Product';
import About from './pages/About';
import Men from './pages/Men';
import Women from './pages/Women';
import NotFound from './pages/NotFound';
import Kids from './pages/Kids';
import Course from './pages/Course';
import CourseDetails from './pages/CourseDetails';
import Navbar2 from './components/Navbar2';


const App = () => {
  return (
    <div className='bg-black min-h-screen  ' >
      <Navbar />
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids/>} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/courses' element={<Course/>} />
        <Route path='/courses/:courseId' element={<CourseDetails/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
