import React, { useContext } from "react";
import { skillsImagesData } from "../Constant/index";
import { ColorChangeContext, ThemeContext } from "../ContextAPI/ContextAPI";

export default function Skills() {
  const {themeChange} = useContext(ThemeContext);
  const { colorHandle } = useContext(ColorChangeContext);
  return (
    <section id="Skills" className={`${themeChange ? "bg-[#ecf0f3]" : "bg-[#111111]"}`}>
      <div className="max-w-[90%] lg:max-w-[68%] m-auto py-16 lg:py-28">
        <p className="uppercase tracking-widest font-bold text-[14px] md:text-[16px]" style={{color: colorHandle}}>Skills</p>
        <h1 className="mt-1 text-3xl md:text-4xl lg:text-5xl font-Montserratt font-[600]" style={{color: themeChange ? "black" : "white"}}>
          What I know
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 md:mt-10">
          {skillsImagesData.map((skill) => (
            <div key={skill.id} className={`skill-box p-4 md:py-5 bg-transparent rounded-full hover:border-[1px] hover:border-${colorHandle}`} style={{boxShadow: `0px 0px 8px -2px ${colorHandle}`}}>
              <div className="skill-images h-16 w-16 md:h-20 md:w-20">
                <img src={skill.image} alt=""/>
              </div>
              <h1 className="mt-3 sm:mt-5 text-lg md:text-2xl text-center" style={{color: themeChange ? "black" : "white"}}>{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
