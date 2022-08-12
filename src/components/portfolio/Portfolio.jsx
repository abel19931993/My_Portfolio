import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./portfolio.css";
import portfolioImg1 from "../../assets/React_Admin.jpg";
import portfolioImg2 from "../../assets/Web_Front.jpg";
const portfolioData = [
  {
    imgUrl: portfolioImg1,
    title: "React LoadingPage",
    url: "#",
  },
  {
    imgUrl: portfolioImg2,
    title: "React LoadingPage",
    url: "#",
  },
  {
    imgUrl: portfolioImg1,
    title: "React LoadingPage",
    url: "#",
  },
  {
    imgUrl: portfolioImg2,
    title: "React LoadingPage",
    url: "#",
  },
  {
    imgUrl: portfolioImg2,
    title: "React LoadingPage",
    url: "#",
  },
  {
    imgUrl: portfolioImg2,
    title: "React LoadingPage",
    url: "#",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio__top mb-5">
            <h6>Explore my work and give a feedback</h6>
            <h2>Portfolio</h2>
          </Col>
          {
            portfolioData.map((item,index)=>(
              <Col lg="4" md="6" sm="6" key={index}>
              <div className="portfolio__card">
                <div className="portfolio__img">
                  <img src={item.imgUrl} alt="" className="w-100" />
                </div>
                <div className="portfolio__content">
                  <h5>{item.title}</h5>
                  <a href={item.url}>View live demo</a>
                </div>
              </div>
            </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
