import React from "react";
import Image from "../components/image/man.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Tamplate = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-8 m-auto text-start">
            <h1>Hi , Hi I'm John Deo </h1>
            <p>
              A freelancer who developer from london . I convert custum <br/> webpage
              designs to bootstrap templates
            </p>
            <p>I make youtube video and Blog</p>
            <button className="btn btn-primary">I'M AVAILABLE</button>
            <div className="w-25 d-flex justify-content-between mt-3 fs-6">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaGithub />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <img src={Image} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tamplate;
