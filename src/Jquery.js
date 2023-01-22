import React, { Component } from 'react';
// import Contact from './Components/Navbar';

import $ from 'jquery';

class Jquery extends Component {
    componentDidMount() {
      $("h1").m(function() {
        $("h1").toggleClass("red");
      });
    }
    render() {
      return (
        <div className="App">
          <h1>jquery in React App</h1>
          
        </div>
      );
    }
  }
  export default Jquery;