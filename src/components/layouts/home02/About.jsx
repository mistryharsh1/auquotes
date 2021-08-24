import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { AboutMe, Icon, NumberCount } from './about/index';

class About extends Component {
    
    render() {
        return (
            <div id="c_about" className="tf-modalbox-wrapper">                    
                <div className="tf-modal-content">
                    <section className="about-me t2 s2 shape-am position-relative" id="about">
                        <Icon />
                        <div className="container">
                            <div className="row position-relative">
                                <AboutMe />
                                <div className="flat-spacer" data-desktop="0" data-mobile="50" data-smobile="50"></div>
                                <div className="fact">
                                    <NumberCount />
                                    <div className="btn-contact bg-s1 text-center">
                                        <h4 className="title color-d12">Get a project? Let’s talk.</h4>
                                        <Link to="#" className="email color-s1 color-d14">yourmail@email.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="featured-post animate-element wow delay5 fadeInRight" data-wow-delay="0.5s">
                            <img src="images/section/09.png" alt="images" />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default About;
