import React from "react";
import './skills.css'
 const frontendSkills =[
    {
        title:"Javascript",
        percentage:"80%"
    },
    {
        title:"React.js",
        percentage:"80%"
    },
    {
        title:"Redux",
        percentage:"80%"
    },
    {
        title:"Next.js",
        percentage:"80%"
    }
 ]
 const backendSkills =[
    {
        title:"Node.js",
        percentage:"80%"
    },
    {
        title:"Express.js",
        percentage:"80%"
    },
    {
        title:"MongoDB",
        percentage:"80%"
    }
 ]
const Skills = ()=>{
    return <div className="skills__wrapper d-flex gap-5">
        <div className="frontend__skill w-50">
              {
                 frontendSkills.map((item,index)=>(
                   <SkillItem key={index } title={item.title} percentage={item.percentage}/>
                 ))
              }
        </div>
        <div className="backend__skill w-50">
              {
                backendSkills.map((item,index)=>(
                    <SkillItem
                    key={index}
                    title={item.title}
                    percentage={item.percentage}
                    />
                ))
              }
        </div>
    </div>

}
const SkillItem = ({title,percentage})=>{
  return   <div className="skill__data mb-3">
    <div className="skill__title d-flex align-items-center justify-content=between">
        <h6>{title}</h6>
        <span>{percentage}</span>
    </div>
    <div className="skill__bar">
        <span className="skill__bar-percentage" style={{"width":`${percentage}`}}></span>
    </div>
</div>

}
export default Skills