import React, { useContext, useState } from 'react'
import { ThemeContext } from '../ContextAPI/ContextAPI';
import { LuLinkedin } from 'react-icons/lu';
import { FaXTwitter } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { MdOutlinePhone } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { NavLink } from "react-router-dom";

export default function Contacts() {
  const { themeChange } = useContext(ThemeContext);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();
    const service_id = "service_vdl3ybt"
    const template_id = "template_6yi0ccc"
    const publicKey = "BjDb6bIh4VZb74fbm"

    const userObj = {
      from_name: name,
      from_email: email,
      to_name: "Divyesh Thakur",
      message: message
    }
    emailjs.send(service_id, template_id, userObj, publicKey)
      .then((res) => {
        alert("Email sent Successfully.")
          setName('')
          setEmail('')
          setMessage('')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="Contact" className={`${themeChange ? "bg-[#ecf0f3]" : "bg-[#111111]"}`}>
      <div className='w-[90%] md:max-w-[68%] m-auto md:pt-28 md:pb-40 pt-1'>
        <p className='mt-1  text-3xl md:text-4xl lg:text-5xl font-Montserratt font-[600]' style={{ color: themeChange ? "black" : "white" }}>
          Contact Me
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-10">
          <div className="grid grid-cols-2 gap-6 w-full lg:w-1/2 relative md:left-16">
            <div className={`p-4 md:p-6 rounded-lg shadow-lg ${themeChange ? "bg-white" : "bg-gray-800"}`} style={{ color: themeChange ? "black" : "white" }}>
              <div className="text-center">
              <NavLink to={"https://www.linkedin.com/in/divyesh-thakur-a7b1b62b1/"} target="_blank">
                <LuLinkedin className='m-auto text-4xl mb-1' />
                <h3 className="text-sm md:text-lg font-medium">LinkedIn</h3>
                <p className='text-[13px] md:text-[16px]'>DivyeshThakur</p>
                </NavLink>
              </div>
            </div>
            <div className={`p-4 md:p-6 rounded-lg shadow-lg ${themeChange ? "bg-white" : "bg-gray-800"}`} style={{ color: themeChange ? "black" : "white" }}>
              <div className="text-center">
                  <MdOutlinePhone className="m-auto text-4xl mb-1" />
                <h3 className="text-sm md:text-lg font-medium">Phone Number</h3>
                <p className='text-[13px] md:text-[16px]'>+91 8511827576</p>
              </div>
            </div>
            <div className={`p-4 md:p-6 rounded-lg shadow-lg ${themeChange ? "bg-white" : "bg-gray-800"}`} style={{ color: themeChange ? "black" : "white" }}>
              <div className="text-center">
                <NavLink to={"https://x.com/_Divyesh_Thakur"} target="_blank">
                  <FaXTwitter className='m-auto text-4xl mb-1' />
                <h3 className="text-sm md:text-lg font-medium">Twitter</h3>
                <p className='text-[13px] md:text-[16px]'>@_Divyesh_Thakur</p>
                </NavLink>
              </div>
            </div>
            <div className={`p-4 md:p-6 rounded-lg shadow-lg ${themeChange ? "bg-white" : "bg-gray-800"}`} style={{ color: themeChange ? "black" : "white" }}>
              <div className="text-center">
                <NavLink to={"https://github.com/Divyesh-Thakur45"} target="_blank">
                    <FiGithub className='m-auto text-4xl mb-1' />
                <h3 className="text-sm md:text-lg font-medium">Github</h3>
                <p className='text-[13px] md:text-[16px]'>Divyesh-Thakur45</p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="contact-box w-full lg:w-full p-8 rounded-lg mt-8 lg:mt-0">
            <form className="md:mt-8 space-y-4 md:w-[80%] m-auto" onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Enter your Name"
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${themeChange ? "bg-white" : "bg-gray-800 border-gray-600"}`}
                required
              />
              <input
                type="email"
                placeholder="Enter a valid email address"
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${themeChange ? "bg-white" : "bg-gray-800 border-gray-600"}`}
                required
              />
              <textarea
                placeholder="Your message here"
                rows="4"
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${themeChange ? "bg-white" : "bg-gray-800 border-gray-600"}`}
                required
              ></textarea>
              <input
                type="submit"
                value={"Send"}
                className={`BannerIcon button ${themeChange ? "text-black shadow-boxShadowLightMode bg-gradient-to-tl from-[#ffffff] to-[#e2e8ec]" : "shadow-boxShadowDarkMode bg-black text-white"} cursor-pointer px-6 py-2 rounded-md transition`}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}