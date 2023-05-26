import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";

import "./style.css";

const PinnedAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {}, []);
  return (
    <>
      <div className="space"></div>
      <div className="container">
        <h1 className="heading">Heading 1 </h1>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          cumque repellat delectus reiciendis consectetur dolor provident nisi
          officiis ut voluptatem eligendi, maiores exercitationem ea magnam?
          Debitis aspernatur aliquam blanditiis repellendus sed pariatur earum
          totam accusamus neque ducimus ipsam, molestiae nobis hic nulla quam
          voluptatem. Quos aliquid beatae asperiores provident voluptatum?
        </p>
      </div>
      <div className="space"></div>
    </>
  );
};

export default PinnedAnimation;
