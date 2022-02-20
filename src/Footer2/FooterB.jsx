import React from 'react';
import {Container,Col,Row} from 'react-bootstrap';
import './FooterB.css';

const FooterB = () => {
  return (
    <div>
        <Container fluid className='bg-dark px-5'>
            <Row md={15} id="footer2" className='px-3'>
                <ul id="uderlist">
                    <li>
                    <Col>envato.Com</Col>
                    </li>
                    <li>
                    <Col>envato tuts</Col>
                    </li>
                    <li>
                    <Col>all products </Col>
                    </li>
                    <li>
                    <Col>sitemap </Col>
                    </li>
                    <li>
                    <Col>milkshake</Col>
                    </li>
                    <li>
                    <Col>envato elements</Col>
                    </li>
                    <li>
                    <Col>placeit by envato</Col>
                    </li>
                    <p className="px-3">Price is in US dollars and excludes tax</p>
                    <p className="px-3">© 2022 Envato Pty Ltd. Trademarks and brands are the property of their respective owners.</p>

                </ul>    
                                        
            </Row>
                   </Container>
    </div>
  )
}

export default FooterB;