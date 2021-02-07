import React from "react";
import { Parallax } from "react-parallax";
import Title from "../comps/title";

const Parallaximg = ({ text, img }) => {
  return (
    <div className="parallax-style">
      <Parallax blur={{ min: -15, max: 15 }} bgImage={img} strength={-200}>
        <div style={{ height: "400px", background: `rgba(0, 0, 0, 0.5)`, }} />
        {/* <Title title={text} /> */}
      </Parallax>
    </div>
  );
};

export default Parallaximg;
