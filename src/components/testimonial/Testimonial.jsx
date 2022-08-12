import React from "react";
import "./testimonial.css";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
const testimonialData = [
  {
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla a temporibus, quas, sunt voluptas molestias eos est tempore quibusdam similique saepe mollitia voluptates sequi repellendus quidem. At velit aperiam ducimus.",
    name: "Eleni Tadesse",
    title: "Web Developer",
  },
  {
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla a temporibus, quas, sunt voluptas molestias eos est tempore quibusdam similique saepe mollitia voluptates sequi repellendus quidem. At velit aperiam ducimus.",
    name: "Eleni Tadesse",
    title: "Web Developer",
  },
  {
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla a temporibus, quas, sunt voluptas molestias eos est tempore quibusdam similique saepe mollitia voluptates sequi repellendus quidem. At velit aperiam ducimus.",
    name: "Eleni Tadesse",
    title: "Web Developer",
  },
  {
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla a temporibus, quas, sunt voluptas molestias eos est tempore quibusdam similique saepe mollitia voluptates sequi repellendus quidem. At velit aperiam ducimus.",
    name: "Eleni Tadesse",
    title: "Web Developer",
  },
];
const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5 text-center">
            <h2>What my clients says</h2>
          </Col>
          <Col lg="6" className="m-auto">
            <Slider {...settings}>
              {testimonialData.map((item, index) => (
                <div>
                  <div className="single__testimonial" key={index}>
                    <p>{item.desc}</p>
                    <h6>{item.name}</h6>
                    <p className="title">{item.title}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
