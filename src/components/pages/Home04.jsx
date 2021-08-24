import React, { Component } from 'react';
import {About, Banner, CaseStudy, Education, Footer, Header, Project, Specilizing, Testimonial} from '../layouts/home04/index';

class Home04 extends Component {
    render() {
        return (
            <div className="counter-scroll background-wrap-home4 fixed counter-scroll home4 has-one-page">               
                <div id="mobile-menu-overlay" />
                <Header />
                <div id="content" className="content">
                    <div className="homepage-personal">
                        <Banner />
                        <About />
                        <Specilizing />
                        <Project />
                        <Education />
                        <CaseStudy />
                        <Testimonial />
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home04;
