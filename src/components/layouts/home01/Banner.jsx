import React, { Component } from 'react';
import {Link} from 'react-router-dom' 
class Banner extends Component {
    render() {
        return (
            <div className="section slide-personal-Intro-first">
                <section className="banner-section s1" id="home">
                    <div className="container">
                    <div className="content-text position-relative">
                        <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.3s">
                        <h1 className="cd-headline clip is-full-width title mg-b29 text-white">
                            <span>Create </span>
                            <span className="cd-words-wrapper color-d4">
                            <b className="is-visible">Design!</b>
                            <b>Template!</b>
                            </span>
                        </h1>
                        <p className="lt-sp03 mg-b60 text-white">
                            Hi, Do you need  PSD template, landing page or Website design within a day? I will deliver Web<br />
                            template with fully layered PSD file, easily converted into HTML templates, WordPress, etc.
                        </p>
                        </div>
                        <div className="animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                            <div className="fl-btn btn-general btn-hv-border">
                                <Link to="#" className="border-corner5 f-w500 lt-sp095 text-white ">Download Resume</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Banner;

