 import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Icon } from '../home02/about/index';
import { NumberCount } from './about/index';

class About extends Component {
    render() {
        return (
            <section className="about-me t2 s3 shape-am position-relative" id="about">
                <div className="section-icons">
                    <Icon />
                </div>
                <div className="container">
                <div className="row position-relative">
                    <div className="col-lg-7 animate-element wow delay5 fadeInDown">
                        <div className="flat-title t2">
                            <h4 className="sub-title mg-b22">About Me</h4>
                            <h2 className="title-section color-d11 mg-b41">Hi, I am here to help your next project!</h2>
                            <div className="description">
                                <p className="color-d13 lt-sp01">
                                    Hi, if you need Web templates, landing page or Website design within a day? then you can tell me, I'm here to help you. I can design any kind of Website. Check my portfolio.
                                </p>
                                <p className="color-d13 lt-sp01">
                                    See my designs on dribbble, isomeric, neumorphism, 3D and much more design trends i love to design. <br/>
                                </p>
                                <p className="color-d13 lt-sp01">
                                    SEO - quality backlinks making, social media management & Marketing, On-Page SEO, Off-Page SEO, managing PBNs  
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="fact">
                        <NumberCount />
                        <div className="btn-contact bg-s2 text-center">
                            <h4 className="title color-d11">Get a project? Let’s talk.</h4>
                            <Link to="#" className="email color-s2 color-d15">mistryharsh06@gmail.com</Link> <br/>
                            
                        </div>
                    </div>
                </div>
                </div>
                <div className="featured-post animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                <img src="images/section/51.png" alt="images" />
                </div>
            </section>
        );
    }
}

export default About;
