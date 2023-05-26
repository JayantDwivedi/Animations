import { Expo, Power3, TweenMax, gsap } from "gsap";
import React, { useEffect } from "react";

import "./style.css";

const HeroAnimations = () => {
  gsap.registerPlugin(TweenMax);

  useEffect(() => {
    const ctx = gsap.context(() => {
      TweenMax.from(".logo", 1, {
        opacity: 0,
        x: -10,
        ease: Expo.easeInOut,
      });

      TweenMax.staggerFrom(
        "nav ul li",
        1,
        {
          opacity: 0,
          x: -20,
          ease: Power3.easeInOut,
        },
        0.08
      );

      TweenMax.from(".search", 1, {
        opacity: 0,
        delay: 0.5,
        x: -20,
        ease: Expo.easeInOut,
      });

      TweenMax.from(".menu", 1, {
        opacity: 0,
        delay: 0.6,
        x: -20,
        ease: Expo.easeInOut,
      });

      TweenMax.from(".title", 1, {
        opacity: 0,
        delay: 1,
        y: 20,
        ease: Expo.easeInOut,
      });

      TweenMax.from(".btn", 1, {
        opacity: 0,
        delay: 1.6,
        y: 20,
        ease: Expo.easeInOut,
      });

      TweenMax.from(".line-one", 1, {
        opacity: 0,
        delay: 2,
        y: -800,
        ease: Expo.easeInOut,
      });
      TweenMax.from(".line-two", 1, {
        opacity: 0,
        delay: 2.5,
        y: -800,
        ease: Expo.easeInOut,
      });

      TweenMax.from(".img", 2, {
        opacity: 0,
        delay: 2.9,
        y: -800,
        ease: Expo.easeInOut,
      });

      TweenMax.from(".year", 1, {
        opacity: 0,
        delay: 1.4,
        y: -20,
        ease: Expo.easeInOut,
      });

      TweenMax.staggerFrom(
        ".media ul li",
        2,
        {
          opacity: 0,
          delay: 3.2,
          y: 40,
          ease: Expo.easeInOut,
        },
        0.2
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <div class="container">
      <div class="stripes">
        <div class="line-one"></div>
        <div class="line-two"></div>
      </div>
      {/* <!-- navbar============== --> */}
      <nav>
        <div class="logo">
          <span>Omega</span>
        </div>
        <ul>
          <li>
            <a href="#">collection</a>
          </li>
          <li>
            <a href="#">products</a>
          </li>
          <li>
            <a href="#">offers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div class="search">
          <i class="fa fa-search"></i>
        </div>
        <div class="menu">
          <i class="fa fa-bars"></i>
        </div>
      </nav>

      <div class="img">
        <img src="watch.png" alt="" />
      </div>

      <div class="title">
        <p>speedmaster</p>
        <span>Moonwatch.</span>
      </div>

      <div class="btn">
        <a href="#">Order Now</a>
      </div>

      <div class="year">{new Date().getFullYear()}*</div>

      {/* <div class="media">
        <ul>
          <li>
            <i class="fa fa-facebook"></i>
          </li>
          <li>
            <i class="fa fa-instagram"></i>
          </li>
          <li>
            <i class="fa fa-twitter"></i>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default HeroAnimations;
