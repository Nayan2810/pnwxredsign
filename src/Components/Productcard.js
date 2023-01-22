import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img1 from './Images/card3.jpg';
import img2 from './Images/card1.jpg';
import img3 from './Images/gloves.jpg';
import img4 from './Images/card4.jpg';
import img5 from './Images/card5.jpg';
import img6 from './Images/card6.jpg';
import Footer from './Footer';
// import { Route, Router } from 'react-router-dom';


function GroupExample() {
    return (
        <div>
            <CardGroup>
                <Card className='crds'>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title><h1>Line Pair / Resolution Test Phantoms.</h1></Card.Title>
                        <Card.Text>
                        These test patterns are designed for quick quantitative assessments of the limiting spatial resolution of an X-Ray system. The line pair patterns consist of a thin foil of Lead sandwiched between plastic plates
                        </Card.Text>
                        
                    </Card.Body>

                </Card>
                <Card className='crds'>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title><h1>X-Ray Glazing Tape</h1></Card.Title>
                        <Card.Text>
                        X-Ray Glass Glazing Tape is 3/8" x 3/8" (0.375" x 0.375") and available in 25' 0" (300") length rolls. This product is adhesive backed for ease of installation in hollow metal frames and removable stops.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className='crds'>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        
                          <Card.Title><h1>Exam and Surgical Radiation Reducing Gloves</h1></Card.Title>
                          <Card.Text>
                          Ideal for all high exposure procedures where sensitivity and protection are essential. Color - warm gray. Order as many or as few as one pair at a time.
                          </Card.Text>
                     </Card.Body>

                </Card>
            </CardGroup>

            <CardGroup>
                <Card className='crds'>
                    <Card.Img variant="top" src={img4} />
                    <Card.Body>
                        <Card.Title  ><h1>ECC Series 820 kVp, mA, Time/mAs Meters</h1></Card.Title>
                        <Card.Text>
                        The new 820 kVp / mAs Meter combines all the features of ECC's Model 815 kVp Meter, and adds the mA and mAs measurement function in one compact unit.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='crds'>
                    <Card.Img variant="top" src={img5} />
                    <Card.Body>
                        <Card.Title><h1>Standard X-Ray Table Pads.</h1></Card.Title>
                        <Card.Text><p>Techno-Aide!Standard Dimension Table Pads, 72"long x 23 ¼" wide.
1" or 2" thick.</p>
<p>Available in "Plus", larger size: 80"long x 30" wide.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='crds'>
                    <Card.Img variant="top" src={img6} />
                    <Card.Body>
                        <Card.Title><h1>Standard X-Ray Grids</h1></Card.Title>
                        <Card.Text>
                            Superior construction of lead strips and aluminum inter-spacers, with smooth, enameled aluminum covers, sealed against dirt and moisture.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <Footer/>
        </div>
    );
}

export default GroupExample;