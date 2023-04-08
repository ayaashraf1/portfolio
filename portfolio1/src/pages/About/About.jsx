import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Typewriter from "typewriter-effect";
import aboutImg from "../../assets/aboutimg.png";
import "./About.css";


export default function About() {
 
    return < div id="about-container" data-testid="about-section">
        <img src={aboutImg} alt="aboutImg" />
        <div>
            <h2>ABOUT</h2>
            <h1 id="test">
                <Typewriter
                    options={{
                        strings: ["Software Developer", "Front-end Developer"],
                        autoStart: true,
                        loop: true,
                        pauseFor:1000
                    }}
                />
            </h1>
            <p>
                I&apos;m Aya, a passionate developer bringing you programming and design from the future.
                I am experienced in developing web for more than 5 years.
            </p>
        </div>
    </div>
}