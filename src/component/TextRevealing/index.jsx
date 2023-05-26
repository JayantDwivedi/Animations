import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";

import "./style.css";

const TextRevealing = () => {
  console.clear();

  gsap.registerPlugin(ScrollTrigger);
  const Splitting = require("splitting");
  const split = Splitting({ target: ".wrapper p" });
  // const split = new SplitText(".wrapper p", {
  //   type: "chars",
  //   charsClass: "char",
  //   position: "absolute",
  // });
  gsap.set(".wrapper p.hidden", { opacity: 1 });

  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#textSection",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 0.75,
        markers: true,
      },
    })
    .set(
      ".hidden .char",
      {
        opacity: 1,
        stagger: 0.1,
      },
      0.1
    )
    .set(
      ".white .char",
      {
        opacity: 0,
        stagger: 0.1,
      },
      0.1
    );

  return (
    <>
      <section class="blue"></section>
      <section id="textSection">
        <div class="container">
          <div class="wrapper">
            <p class="white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis consectetur voluptatem quae ea similique adipisci
              reprehenderit vero voluptatum, debitis exercitationem nisi ad
              mollitia? Molestias veniam sint quisquam ea et dolorum nesciunt
              rem saepe id, amet vero, necessitatibus esse reiciendis molestiae.
            </p>
            <p class="hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis consectetur voluptatem quae ea similique adipisci
              reprehenderit vero voluptatum, debitis exercitationem nisi ad
              mollitia? Molestias veniam sint quisquam ea et dolorum nesciunt
              rem saepe id, amet vero, necessitatibus esse reiciendis molestiae.
            </p>
          </div>
        </div>
      </section>
      <section class="green"></section>
    </>
  );
};

export default TextRevealing;
