import React from "react";
import "./experience.css";
import { Container, Row, Col } from "reactstrap";
const developmentExperienceData = [
  {
    year:"2020-2021",
    title:"FrontEnd & BackEnd Developer",
    desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt omnis unde rerum reprehenderit at, molestias, nulla dignissimos maiores quae nostrum maxime recusandae voluptatibus deleniti explicabo numquam deserunt. Dolor, mollitia commodi.'
  }
]
const Experience = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <h2>Experience</h2>
          </Col>
          <Col lg='6' md='6'>
          <div className="single__experience-container">
           {
            developmentExperienceData.map((item)=>(
             
              <div className="single__experience">
                 <span className="experience__icon"><i class="ri-briefcase-line"></i></span>
                 <h6>{item.year}</h6>
                 <h5>{item.title}</h5>
                 <p>{item.desc}</p>
              </div>
            
            ))
           }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
