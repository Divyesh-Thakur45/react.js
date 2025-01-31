import React from 'react'
import "./randome.css"
import light from "../../assets/images/light.jpg";
import clock from "../../assets/SVGS/clock.svg"
import costumize from "../../assets/SVGS/customize.svg"
import innovation from "../../assets/SVGS/innovation.svg"
import landingPage from "../../assets/SVGS/svgexport-4.svg"
import star from "../../assets/images/star.png"
// import star2 from "../../assets/images/star-2.png"
// import star3 from "../../assets/images/star-3.png"
// import star4 from "../../assets/images/star-4.png"

const Randome = () => {
    return (
        <div>
            <>
                <div className="hero_section">
                    <div className="background">
                        <div className="SettingIconSvg">
                        <img
                                src={light}
                                alt="landingpageImage"
                                className=""
                            />
                            
                        </div>
                        <div className="image-carrier">
                        <img src={landingPage} alt="" />
                            <div className="glow star-1">
                                <img src={star} alt="star" />
                            </div>
                            <div className="glow star-3">
                                <img src={star} alt="star" />
                            </div>
                            <div className="glow star-2">
                                <img src={star} alt="star" />
                            </div>
                            <div className="glow star-4">
                                <img src={star} alt="star" />
                            </div>
                            <div className="glow star-5">
                                <img src={star} alt="star" />
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 flex items-end lg:top-1/3 2xl:top-[45%] top-1/2 md:top-[60%] lg:pt-10 2xl:pt-0 lg:-translate-y-1/2 h-fit lg:items-center justify-center z-10">
                        <div className="w-full flex flex-col lg:flex-row justify-end items-center lg:items-start">

                            {/* Right Content */}
                            <div className="w-full lg:w-1/2 text-center lg:text-left bg-transparent">

                                <p className="text-white pb-1 text-3xl lg:text-6xl md:text-5xl 2xl:text-6xl uppercase text-shadow-glow tracking-wide">
                                    Dendrites
                                </p>
                                <p className="text-white pb-1 text-4xl lg:text-6xl md:text-5xl 2xl:text-6xl uppercase text-shadow-glow tracking-wide font-bold">
                                    Technology
                                </p>
                                <p className="text-[#80acd3] text-lg lg:text-3xl md:text-3xl 2xl:text-3xl lg:pt-9 2xl:pt-3 pt-4 tracking-wide font-bold">
                                    Think Different
                                </p>

                                <div className="glowmain big-star">
                                    {/* <img className="w-24 h-24" src={light} alt="light" /> */}
                                </div>

                                <div className="flex md:flex justify-center lg:hidden gap-5 py-10">
                                    <div className="border border-[#80acd3] w-[80px] h-[80px] lg:w-[130px] lg:h-[130px] md:w-[110px] md:h-[110px] rounded-full flex justify-center items-center cursor-pointer">
                                        <div className="hover:bg-[#80acd3] hover:opacity-70 duration-1000 w-[60px] h-[60px] lg:w-[110px] lg:h-[100px] md:w-[90px] md:h-[90px] rounded-full flex justify-center items-center">
                                            <div className="text-center ">
                                                <div className="hidden lg:flex justify-center">
                                                    {clock}
                                                </div>
                                                <p className="text-white font-bold text-[12px] md:text-[16px] lg:text-[16px] leading-[15px] md:leading-[17px]">
                                                    Time to Market
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-[#80acd3] w-[80px] h-[80px] lg:w-[130px] lg:h-[130px] md:w-[110px] md:h-[110px] rounded-full flex justify-center items-center cursor-pointer">
                                        <div className="hover:bg-[#80acd3] hover:opacity-70 duration-1000 w-[60px] h-[60px] lg:w-[110px] lg:h-[110px] md:w-[90px] md:h-[90px] rounded-full flex justify-center items-center">
                                            <div className="text-center ">
                                                <div className="hidden lg:flex justify-center">
                                                    {costumize}
                                                </div>
                                                <p className="text-white font-medium text-[12px] lg:text-[16px] md:text-[16px] leading-[15px] md:leading-[17px]">
                                                    Customized Solutions
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-[#80acd3] w-[80px] h-[80px] lg:w-[130px] lg:h-[130px] md:w-[110px] md:h-[110px] rounded-full flex justify-center items-center cursor-pointer">
                                        <div className="hover:bg-[#80acd3] hover:opacity-70 duration-1000 w-[60px] h-[60px] lg:w-[110px] lg:h-[110px] md:w-[90px] md:h-[90px] rounded-full flex justify-center items-center">
                                            <div className="text-center ">
                                                <div className="hidden lg:flex justify-center">
                                                    {innovation}
                                                </div>
                                                <p className="text-white font-medium text-[12px] lg:text-[16px] md:text-[16px] leading-[15px] md:leading-[17px]">
                                                    Innovation Driver
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="absolute inset-0 hidden lg:flex items-end lg:left-[20%] lg:justify-start z-10 lg:bottom-[5%] 2xl:bottom-[8%]"> */}
                    <div className="absolute inset-0 hidden lg:flex items-end lg:justify-center z-10 lg:bottom-[5%] lg:pl-5 2xl:pl-20 pl-0">
                        <div className="pb-20 lg:w-[222.5px] 2xl:w-[200px]">
                            {/* <img className="h-99" src={mainline} alt="" srcSet="" /> */}
                        </div>
                        <div className="border border-[#80acd3] lg:w-[166px] lg:h-[166px] 2xl:w-[176px] 2xl:h-[176px] rounded-full flex justify-center items-center cursor-pointer">
                            <div className="lg:w-[145px] lg:h-[145px] 2xl:w-[157px] 2xl:h-[157px] hover:bg-[#dfdffa80] hover:opacity-70 duration-300 rounded-full flex justify-center items-center">
                                <div className="lg:w-50 lg:h-50 2xl:w-56 2xl:h-56 rounded-full flex justify-center items-center">
                                    <div className="text-center">
                                        <div className="hidden lg:flex justify-center pb-1">
                                            {clock}
                                        </div>
                                        <p className="text-white font-semibold text-[12px] lg:text-[18px] 2xl:text-[18px] pt-2 leading-[20px]">
                                            Time to <br /> Market
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[1px] w-10 2xl:w-14 bg-[#80acd3] mb-20 2xl:mb-[84px]"></div>

                        <div className="border border-[#80acd3] lg:w-[166px] lg:h-[166px] 2xl:w-[176px] 2xl:h-[176px] rounded-full flex justify-center items-center cursor-pointer">
                            <div className="lg:w-[145px] lg:h-[145px] 2xl:w-[157px] 2xl:h-[157px] hover:bg-[#dfdffa80] hover:opacity-70 duration-300 rounded-full flex justify-center items-center">
                                <div className="lg:w-50 lg:h-50 2xl:w-56 2xl:h-56 rounded-full flex justify-center items-center">
                                    <div className="text-center pb-1">
                                        <div className="hidden lg:flex justify-center">
                                            {costumize}
                                        </div>
                                        <p className="text-white font-semibold text-[12px] lg:text-[18px] 2xl:text-[18px] pt-3 leading-[20px]">
                                            Customized Solutions
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[1px] 2xl:w-14 w-10 bg-[#80acd3] mb-20 2xl:mb-[84px]"></div>

                        <div className="border border-[#80acd3] lg:w-[166px] lg:h-[166px] 2xl:w-[176px] 2xl:h-[176px] rounded-full flex justify-center items-center cursor-pointer">
                            <div className="lg:w-[145px] lg:h-[145px] 2xl:w-[157px] 2xl:h-[157px] hover:bg-[#dfdffa80] hover:opacity-70 duration-300 rounded-full flex justify-center items-center">
                                <div className="lg:w-50 lg:h-50 2xl:w-56 2xl:h-56 rounded-full flex justify-center items-center">
                                    <div className="text-center pb-1">
                                        <div className="hidden lg:flex justify-center">
                                            {innovation}
                                        </div>
                                        <p className="text-white font-semibold text-[12px] lg:text-[18px] 2xl:text-[18px] pt-3 leading-[20px]">
                                            Innovation <br /> Driver
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 flex lg:items-end justify-start gap-5 z-10 top-[100px] lg:top-[140px] lg:bottom-[170px] left-[15px] lg:left-[50px]">
                    <div className="w-[120px] h-[120px] lg:w-[190px] lg:h-[190px] border border-[#80acd3a1] flex justify-center items-center rounded-full">
                        <div className="w-[105px] h-[105px] lg:w-[170px] lg:h-[170px] bg-[#E9E9F880] flex justify-center items-center rounded-full">
                            <div className="border border-[#00223e] w-[142px] h-[142px] rounded-full flex justify-center items-center">
                                <div className="text-center">
                                    <p className="text-[25px] text-white lg:text-[40px] font-bold">
                                        72
                                    </p>
                                    <p className="text-[#00223e] font-bold text-[12px] lg:text-[13px]">
                                        vacancies
                                        <div className="font-normal">available!</div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Randome