import React,{useState} from "react";
import './about.css'
 import {Container,Row,Col} from 'reactstrap'
 import aboutImg  from '../../assets/hana.png'
 import Education from "./Education";
 import Skills from "./Skills";
 import Award from "./Award";
 
const About = () =>{
    const [aboutFilter,setAboutFilter] =  useState('ABOUT')
    return (
        <section id="about">
                <Container>
                 <Row>
                    <Col lg='12' className="mb-5"><h2>About Me</h2></Col>
                    <Col lg='4' md='3'>
                    <div className="about__btns d-flex flex-column align-items-center ">
                          <button className={`about__btn ${aboutFilter === 'ABOUT' ? 'about__btn-active':''}`} onClick={()=>setAboutFilter('ABOUT')}>About me</button>   
                          <button  className={`about__btn ${aboutFilter === 'EDUCATION' ? 'about__btn-active':''}`} onClick={()=>setAboutFilter('EDUCATION')}>Education</button>  
                          <button  className={`about__btn ${aboutFilter === 'SKILLS' ? 'about__btn-active':''}`} onClick={()=>setAboutFilter('SKILLS')}>Skills</button>   
                          <button  className={`about__btn ${aboutFilter === 'AWARD' ? 'about__btn-active':''}`}onClick={()=>setAboutFilter('AWARD')}>Award</button>  
                        </div>  </Col>
                    <Col lg='8' md='9'> 
                    {
                      aboutFilter === 'ABOUT' && 
                      <div className="about__content__wrapper d-flex gap-5" style={{"height":260}}>
                      <div className="about__img w-25 ">
                               <img src={aboutImg} alt='' className="w-100" style={{"height":186,"borderRadius":10}}/>
                      </div>
                   <div className="about__content w-75" >
                      <h2>I'm Abel Argaw</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta aperiam, ducimus facere ab rem fugit sint odio at totam quae nobis porro itaque veritatis praesentium veniam, expedita, magnam vel?</p>
                     <div className="social__links">
                      <h6 className="mb-3">Connect with me</h6>
                         <span><a href="#"><i class="ri-facebook-fill"></i></a></span>
                         <span><a href="#"><i class="ri-instagram-fill"></i></a></span>
                         <span><a href="#"><i class="ri-linkedin-fill"></i></a></span>
                         <span><a href="#"><i class="ri-github-fill"></i></a></span>
                     </div>
                   </div>
                  </div>
                    }
                    {
                      aboutFilter === 'EDUCATION' && <Education/>
                    }
                    {
                      aboutFilter === 'SKILLS' && <Skills/>
                    }
                    {
                      aboutFilter === 'AWARD' &&
                      <Award/>
                    }
                    </Col>
                  
                 </Row>
               </Container> 
        </section>
     
    )
}
export default About