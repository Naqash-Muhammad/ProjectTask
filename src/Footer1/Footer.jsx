import React from 'react';
import {Container,Col,Row} from 'react-bootstrap';
import LanguageIcon from '@mui/icons-material/Language';
import './Footer.css';
import SpaIcon from '@mui/icons-material/Spa';


const Footer = () => {
  return (
    <div>
        <Container fluid className="bg-dark p-5 border-bottom">
                <Row md={6}>
                   <Col>
                   <div className="ggh">
                             <ul>
                                <li>
                                  <h3>envato market</h3>
                                </li>
                                <li>
                                  <a href="">terms</a>
                                </li>
                                <li>
                                  <a href="">licenses</a>
                                </li>
                                <li>
                                  <a href="">market api</a>
                                </li>
                                <li>
                                  <a href="">become an affiliate</a>
                                </li>
                              </ul>
                    </div>
                   </Col>
                   <Col>
                   <div className="ggh">
                             <ul>
                                <li>
                                  <h3>HELP</h3>
                                </li>
                                <li>
                                  <a href="">help center</a>
                                </li>
                                <li>
                                  <a href="">authors</a>
                                </li>
                              </ul>
                    </div>
                   </Col>
                   <Col>
                   <div className="ggh">
                             <ul>
                                <li>
                                  <h3>our community</h3>
                                </li>
                                <li>
                                  <a href="">community</a>
                                </li>
                                <li>
                                  <a href="">blog</a>
                                </li>
                                <li>
                                  <a href="">forums</a>
                                </li>
                                <li>
                                  <a href="">meetups</a>
                                </li>
                              </ul>
                    </div>
                   </Col>
                   <Col>
                   <div className="ggh">
                             <ul>
                                <li>
                                  <h3>meet envato</h3>
                                </li>
                                <li>
                                  <a href="">about envato</a>
                                </li>
                                <li>
                                  <a href="">careers</a>
                                </li>
                                <li>
                                  <a href="">privacy    policy</a>
                                </li>
                                <li>
                                  <a href="">sitemap</a>
                                </li>
                              </ul>
                    </div>
                   </Col>
                   <Col>
                   <div className="ggh">
                             <ul>
                                <li>
                                  <h2><SpaIcon id="leaveIcon"/> envato<b id="leaveIcon">market</b></h2>
                                </li>
                                <li>
                                  <a href="">03070468097</a>
                                </li>
                                <li>
                                  <a href="">licenses</a>
                                </li>
                               
                              </ul>
                    </div>
                   </Col>

                   <Col>
                   <div className="ggh">
                             <ul>
                                <li>
                                  <h3>certified</h3>
                                </li>
                                <li>
                                   <a href=""><LanguageIcon /></a>
                                </li>                              
                              </ul>
                    </div>
                   </Col>

                    
                </Row>    
        </Container>
    </div>
  )
}

export default Footer;