import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <section className="banner-section s2" id="home">
                <div className="custom-container d-flex">
                    <div className="featured-post-left">
                        <div className="fl-btn btn-general btn-download-resume animate-element wow delay5 fadeZooming" data-wow-delay="0.3s">
                            <Link to="#" className="bg-white f-w500"><i className="fa fa-download" aria-hidden="true" />Download Resume</Link>
                        </div>
                    </div>
                    <div className="featured-post-right">
                        <div className="content-text">
                            <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.3s">
                                <div className="tag lt-sp53 mg-b24 text-white">Product Designer</div>                                    
                                <h1 className="cd-headline clip is-full-width title mg-b29 text-white">
                                <span>Hello, </span>
                                <span className="cd-words-wrapper color-d4">
                                    <b className="is-visible">I’m Perry!</b>
                                    <b>I’m Olivia!</b>
                                    <b>I’m Amelia!</b>
                                </span>
                                </h1>
                                <p className="mg-b53 text-white">
                                Hi, Do you need  PSD template, landing page or Website design within a day? I will deliver Web <br />template with fully layered PSD file, easily converted into HTML templates, WordPress, etc.
                                </p>                                    
                            </div>
                            <div className="animate-element wow delay5 fadeInUp" data-wow-delay="0.3s">
                                <div className="site-list has-border">
                                <Link to="#" className="bg-s1"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                                <Link to="#" className="bg-s2"><i className="fa fa-behance" aria-hidden="true" /></Link>
                                <Link to="#" className="bg-s3"><span className="icon-dribble" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="iconbox-s4 t2 color-s1 border-corner5">
                            <div className="avatar position-relative">
                                <img src="images/footer/01.jpg" alt="images" />
                            </div>
                            <div className="content-inner">
                                <h4 className="name lt-sp04 mg-b16 text-white position-relative">Available for Project</h4>
                                <div className="fl-btn btn-general">
                                <Link to="#" className="text-white border-corner2">Hire Me</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
