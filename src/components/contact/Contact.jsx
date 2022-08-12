import React from 'react'
import './contact.css'
import {Container,Row,Col} from 'reactstrap'
import Form from '../form/Form'
function Contact() {
  return <section id='contact'>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <h2>Get In Touch</h2>
        </Col>
        <Col lg='6' md='6'>
          <div className="contact__info-container d-flex align-items-center gap-5">
            <div className="single__info-box w-50">
              <h6>Address</h6>
              <p>Ethiopa, Adiss Ababa</p>
            </div>
            <div className="single__info-box w-50">
              <h6>Phone</h6>
              <p>+251 99 121 9569</p>
            </div>
          </div>
          <div className="contact__info-container d-flex align-items-center gap-5">
            <div className="single__info-box w-50">
              <h6>Email</h6>
              <p>abelargaw1993@gmail.com</p>
            </div>
            <div className="single__info-box w-50">
              <h6>Location</h6>
              <p>Kotebe-02, Adiss Ababa</p>
            </div>
          </div>
        </Col>
        <Col lg='6' md='6'>
          <Form/>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Contact