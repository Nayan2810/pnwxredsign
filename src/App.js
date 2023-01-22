import {  Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import "./index.css";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Resume from'./Components/Resume';
import Project from'./Components/Project';
import Home from './Components/Home';
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";



class App extends Component  {render(){
    
  return (
   <> <Navbar /> 
   
      <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path='/cont' element={<Contact />}></Route>
          <Route path='/resume' element={<Resume/>}></Route>
          <Route path='/project' element={<Project/>}></Route>
      </Routes>
    {/* <Footer />  */}
        

   </>
     
    
  );
  
  
 
}}
export default App;