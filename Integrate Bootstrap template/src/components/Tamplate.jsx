import React from "react";
import Image from "../components/image/man.png";

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
