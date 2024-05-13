import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import backgrundPng from "../../../images/background.png";
import "./BusinessSummery.css";

const BusinessSummery = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="backgrundpng mt-12 ">
      <img className="backgroundImage" src={backgrundPng} alt="" />
      <ScrollTrigger
        className="backgroundMain"
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="business-main mt-10">
          <h1 className="text-center text-4xl font-bold tagProduct">
            <span className="text-primary">NUMBER OF PEOPLE</span> WHO TRUST US
          </h1>
          <div className="flex justify-around mt-14">
            <div className="text-center icon-ele-parent">
              <div className="counter-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  fill="#ffd20a"
                  viewBox="0 0 256 256"
                >
                  <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
                </svg>
              </div>
              <h2>
                {counterOn && (
                  <CountUp start={0} end={250} duration={2} delay={0}></CountUp>
                )}
                +
              </h2>
              <p>Customers</p>
            </div>
            <div className="text-center icon-ele-parent">
              <div className="counter-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="#ffd20a" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path></svg>
              </div>
              <h2>
                {counterOn && (
                  <CountUp start={0} end={120} duration={2} delay={0}></CountUp>
                )}
                M+
              </h2>
              <p>Annual revenue</p>
            </div>
            <div className="text-center icon-ele-parent">
              <div className="counter-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="#ffd20a" viewBox="0 0 256 256"><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H96a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm72,48H40a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm125.09-40.22-22.52,18.59,6.86,27.71a8,8,0,0,1-11.82,8.81L184,183.82l-25.61,15.07a8,8,0,0,1-11.82-8.81l6.85-27.71-22.51-18.59a8,8,0,0,1,4.47-14.14l29.84-2.31,11.43-26.5a8,8,0,0,1,14.7,0l11.43,26.5,29.84,2.31a8,8,0,0,1,4.47,14.14Zm-25.47.28-14.89-1.15a8,8,0,0,1-6.73-4.8l-6-13.92-6,13.92a8,8,0,0,1-6.73,4.8l-14.89,1.15,11.11,9.18a8,8,0,0,1,2.68,8.09l-3.5,14.12,13.27-7.81a8,8,0,0,1,8.12,0l13.27,7.81-3.5-14.12a8,8,0,0,1,2.68-8.09Z"></path></svg>
              </div>
              <h2>
                {counterOn && (
                  <CountUp start={0} end={33} duration={2} delay={0}></CountUp>
                )}
                K+
              </h2>
              <p>Reviews</p>
            </div>
            <div className="text-center icon-ele-parent">
              <div className="counter-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="#ffd20a" viewBox="0 0 256 256"><path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path></svg>
              </div>
              <h2>
                {counterOn && (
                  <CountUp start={0} end={50} duration={2} delay={0}></CountUp>
                )}
                +
              </h2>
              <p>Tools</p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default BusinessSummery;
