import React, { Component } from 'react';
import ControlledCarousel from './Prodect';
import GroupExample from './Productcard';
// import Footer from './Footer';

export default class Home extends Component {
  render() {
    return (
      <div >
        <form className='srch'>
        <input className='iinput' type='text' placeholder='Search'/>
        <button className='subbtn' type='submit'>Search</button>
      </form>
      <ControlledCarousel/>
      <GroupExample/>
    
      </div>
    )
  }
}
