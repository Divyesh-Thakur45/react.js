import React, { useContext } from 'react'
import { ThemeContext, ColorChangeContext } from '../ContextAPI/ContextAPI';
import ContributeImage from '../Assets/Images/GithubContribute.jpg'

export default function GithubStatus() {
    const {themeChange} = useContext(ThemeContext);
    const { colorHandle } = useContext(ColorChangeContext);
  return (
    <section id="GithubStatus" className={`${themeChange ? "bg-[#ecf0f3]" : "bg-[#111111]"}`}>
      <div className="w-[90%] md:max-w-[68%] m-auto pt-1 pb-20 md:py-28">
        <p className="uppercase tracking-widest font-bold text-[14px] md:text-[16px]" style={{color: colorHandle}}>Github Status</p>
        <h1 className="mt-1 text-3xl md:text-4xl lg:text-5xl font-Montserratt font-[600]" style={{color: themeChange ? "black" : "white"}}>
            Github Contribution
        </h1>
        <div className='mt-2 md:mt-10'>
            <div className='flex flex-col md:flex-row md:justify-between'>
                <img src="https://camo.githubusercontent.com/71bebb9fad24a012a69eee1ac5931166a125b9866992f2667acb8dff9a022b30/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d6173686969697368332673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" alt="" className='md:w-[35%] mb-1 md:mb-0' />
                <img src="https://camo.githubusercontent.com/4e1bbdb976e4f8a6a449fda0fe81df605336513a2f5b4e14119176a06f85f8a1/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d61736869696973683326" alt="" className='md:w-[48%] mb-2 md:mb-0' />
            </div>
            <div className='md:mt-5'>
                <img src={ContributeImage} alt="" className='w-full' />
            </div>
        </div>
      </div>
    </section>
  )
}