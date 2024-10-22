import React from "react";
import './Section.css'



function Section(){
    return(
        <div className="container">
            <div className="left-section">
                <h1 className="content">ZERO TO AN EIGHT-FIGURE</h1>
                <h1 className="content-bl">VALUATION IN 365 DAYS</h1>
                <p className="content-para">We built an AI-driven workflow for DailyAI, a platform for <br />
                mortgage professionals, and helped them grow from zero <br />
                to an eight-figure valuation within a year</p>
                <button className="content-btn">view case study</button>
            </div>
            <div className="left-section new-section md-section">
                <span className="content-span-or">FOUNDERS   </span>
                <span className="content-span-md">TRUST US FROM</span><br />
                <span className="content-span-bl">   VISION TO REALITY</span>
                <p className="content-para-two">The <strong>faster + affordable + better</strong> ways SaaS founders <br />
                build their products<br /></p>
                <button className="content-btn">See Why</button>
            </div>
            <div className="left-section new-section">
                <span className="content-span-or">A UX AND TECH REVAMP   </span>
                <span className="content-span-md">FOR</span><br />
                <span className="content-span-bl">   SEEMLESS SCALABILITY</span>
                <p className="content-para-two">Learn how we helped StoryD, a Generative AI-powered<br />
                presentation maker, to achieve 3x growth in users with our<br />
                scalable approach to product revamp</p>
                <button className="content-btn">Learn How</button>
            </div>
        </div>
    )
}



export default Section