import React, { Component } from 'react';
import Footer from './Footer';

class About extends Component {
    render() {
        // let v = "this is not ";
        return (
            <>
            <div className="about">
                <h1 id='intro'>About</h1>

                <p id='int'>Pacific Northwest X-Ray Inc provides x-ray equipment. The Company offers
                    portable radiographic, cabinetry, eyewear, gloves, aprons, and other related products.
                    Pacific Northwest X-Ray serves customers in the United States. X-Ray and Radiology? You are
                    at the source! Here you will find hundreds of pages of
                    X-Ray related accessories, parts, supplies, and equipment
                    . Accessories from Lead Aprons to Lead Markers. X-Ray
                    equipment including portables. Not to mention X-Ray parts
                    . Be sure to keep checking back as our web design team is
                    constantly updating the information on the current items
                    and adding new products as they become available.</p>
            </div>
            <Footer/>
            </>
        );
    }
}

export default About;