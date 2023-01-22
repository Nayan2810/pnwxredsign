import React, { Component } from 'react';
import Footer from './Footer';
import img1 from './Images/card6.jpg';
import img2 from './Images/supply1.jpg';
import img3 from './Images/supply2.jpg'

class Project extends Component {
    render() {
        return (
            <> <h1 className='assa1'>X-Ray Parts/Components Main Page</h1>

                <div className='box1'>
                    <img className="pics" src={img1} alt='p1' />
                    <div className='b1s'>
                        <h5 className='btitle'>Aluminum Interspaced X-Ray Grids.</h5>
                        <p className='bparag'>Superior construction of lead strips and aluminum inter-spacers, with smooth, enameled aluminum covers, sealed against dirt and moisture</p>
                    </div>
                </div>


                <div className='box1'>
                    <img className="pics " src={img2} alt='p2' />
                    <div className='b1s'>
                        <h5 className='btitle'>Aluminum Interspaced X-Ray Grids.</h5>
                        <p className='bparag'>Superior construction of lead strips and aluminum inter-spacers, with smooth, enameled aluminum covers, sealed against dirt and moisture</p>
                    </div>
                </div>
                <div className='box1'>
                    <img className="pics " src={img3} alt='p2' />
                    <div className='b1s'>
                        <h5 className='btitle'>X-Ray High Voltage / High Tension Cables.</h5>
                        <p className='bparag'>Low capacitance.
                            3 Pin - Federal Standard Ends.
                            Cables come standard with straight ends.</p>
                    </div>


<div className='bl'></div>
                </div>

                <Footer />
            </>

        );
    }
}

export default Project;