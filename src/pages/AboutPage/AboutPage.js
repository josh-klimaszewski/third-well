import React from 'react';
import './style.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="item1">
                <div className="title">About Us</div>
                <div className="image">image</div>
                <div className="text">
                Third Well, LLC is a veteran owned, business development and 
                market execution-based consulting company. Third Well assists 
                tier supply manufacturers across a wide variety of industries, 
                identify critical business weaknesses, then drive execution to 
                achieve maximum results and catalyze growth. We are a results 
                driven team with an array of expertise in Organizational 
                Transformation & Design, Leadership, Strategic Planning and 
                Business Development that we leverage to dig deep into your 
                value chain to help extract hidden opportunities, and achieve 
                business development excellence at highly competitive rates. Our 
                core values drive us to partnerships with our customers, that 
                enable them to showcase their very best to the greater marketplace, 
                greatly improve Cash Flow, EBITDA, and Bottom Line Results - And we 
                never stop digging!
                </div>
            </div>
            <div className="item2">
                <div className="title">Core Competencies</div>
                <div className="text">
                    <ul>
                        <li>Manufacturer’s Representation</li>
                        <li>Business Development Consulting</li>
                        <li>Start up Organizational Design</li>
                        <li>Problem Solving</li>
                        <li>Strategic Planning</li>
                        <li>Automotive Industry Liaison</li>
                        <li>Aerospace Industry Liaison</li>
                        <li>Advanced Materials Industry Liaison</li>
                        <li>Alternative Energy Industry Liaison</li>
                        <li>Defense Industry Liaison</li>
                        <li>Military Business Dev/Marketing/Sales</li>
                        <li>Market Development</li>
                    </ul>
                </div>
                <div className="image">image</div>
            </div>
            <div className="item3">
                <div className="title">Industry Experience</div>
                <div className="image">image</div>
                <div className="text">
                    <ul>
                        <li>Composite Applications for: Aerospace, Automotive, Specialty & Defense Vehicles</li>
                        <li>Facility Design & Continuous Improvement for: Automotive paint systems, torque conversion and powertrain manufacturing</li>
                        <li>Injection Molding for: Specialty & Electric Vehicle and Consumer Products</li>
                    </ul>
                </div>
            </div>
            <div className="item4">
                <div className="title1">Value Proposition</div>
                <div className="title2">NAICS & Product Codes</div>
                <div className="chart">chart</div>
                <div className="text">
                    <ul>
                        <li>42510		Wholesale Trade Agents</li>
                        <li>54161		Management Consulting Services</li>
                        <li>L015		Tech Rep Aircraft</li>
                        <li>L016		Tech Rep Aircraft Components</li>
                        <li>L093		Tech Rep Nonmetallic Crude Materials</li>
                        <li>R408		Support-Professional: Program Management</li>
                        <li>U008		Education Training-Training Curriculum Dev.</li>
                    </ul>
                </div>
            </div>
        </div> 
       );
}

export default AboutPage;