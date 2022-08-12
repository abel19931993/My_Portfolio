import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import './services.css'
const serviceData = [
  {
    icon:'ri-code-line',
    title:'web Design',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis aliquid unde quibusdam, delectus dolore libero sunt vero voluptatibus assumenda iste dolorem iusto perspiciatis cum! Magni porro perspiciatis voluptates illum sed'
  },
  {
    icon:'ri-code-s-slash-line',
    title:'web Development',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis aliquid unde quibusdam, delectus dolore libero sunt vero voluptatibus assumenda iste dolorem iusto perspiciatis cum! Magni porro perspiciatis voluptates illum sed.'
  },
  {
    icon:'ri-qr-code-line',
    title:'App Development',
    desc: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis aliquid unde quibusdam, delectus dolore libero sunt vero voluptatibus assumenda iste dolorem iusto perspiciatis cum! Magni porro perspiciatis voluptates illum sed.'
  },
 
]
const Services = () => {
  return <section id="services">
    <Container>
      <Row>
        <Col lg='12' className='services__top mb-5'>
          <h6>Features</h6>
          <h2>What service I provide</h2>
        </Col>
        {
            serviceData.map((item,index)=>(
              <Col lg='4' md="6" sm="6" key={index} className='mb-4'>
              <div className="single__service">
          <span className="service__icon">
          <i class={item.icon}></i>
          </span>
          <h2>{item.title}</h2>
          <p>
           {item.desc}
          </p>
        </div>
        </Col>
            ))
         
          }
      
       
        
     
      
      </Row>
    </Container>
  </section>
}

export default Services