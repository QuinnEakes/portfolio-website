import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
//import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/github-icon.svg";
import bitBucketIcon from "../assets/img/bitbucketIcon.svg";

//<MailchimpForm />

/*
  <Col size={12} sm={6}>
    <img src={logo} alt="Logo" />
  </Col> 
*/

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={12} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/quinn-eakes-460b53235"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/QuinnEakes"><img src={githubIcon} alt="Icon" /></a>
              <a href="https://bitbucket.org/QuinnEakes"><img src={bitBucketIcon} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
