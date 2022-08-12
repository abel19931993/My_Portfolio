import React,{useRef,useEffect} from "react";
import './hero-section.css'
import { Container,Row,Col } from "reactstrap";
import {init} from "ityped"
import heroImg from '../../assets/hana.png'
const HeroSection = ()=>{
    const textRef = useRef()

    useEffect(()=>{
        init(textRef.current,{
            backDelay:1500,
            showCursor:true,
            strings:[
                "Abel Argaw",
                "a Web Developer",
                "Content Creater"
            ]
        })

    },[])
    return(
     <section className="hero__section" id="home"> 
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero_content">
                        <p className="mb-3">Welcome to my world</p>
                        {/* <h5 className="mb-4">Hi</h5> */}
                        <h2 className="hero_title mb-4">I'm <span ref={textRef}></span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quod repellat, eveniet quasi praesentium veniam vitae fugiat. Ab vel et, quas, repellendus delectus sint est, officia doloribus maiores alias provident.</p>
                        <div className=" mt-5 hero_btns d-flex align-items-center gap-4" >
                            <button className="btn hire_btn" style={{background:'#31260e', color: 'white'}}> <a href="#">Hire Me</a></button>
                            <button className="btn">Contact</button>
                        </div>
                   </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="hero_img">
                        <img src={heroImg} alt="pisssss" className='w-100' style={{  flex: 1,width: '100%',  height: '100%',resizeMode: 'contain',background:"#7865ff"}}/>
                    </div>
                </Col>
            </Row>
        </Container>
     </section>
    )
}
export default HeroSection