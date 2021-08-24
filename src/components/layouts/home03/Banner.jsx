import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Banner extends Component {
    render() {
        return (
            <section className="banner-section s3 two-home" id="home">
                <div className="container">
                    <div className="content-text position-relative">
                        <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.3s">
                            <div className="tag color-d1 lt-sp53 mg-b24">Product Designer</div>
                            <h1 className="cd-headline clip is-full-width title color-d2 mg-b31">
                                <span>Hello, </span>
                                <span className="cd-words-wrapper color-d6">
                                <b className="is-visible">I’m Perry!</b>
                                <b>I’m Olivia!</b>
                                <b>I’m Amelia!</b>
                                </span>
                            </h1>
                            <p className="lt-sp02 mg-b51">
                                Hi, i m perry, professional ux designer with 4 years <br />of experience. Need any help?
                            </p>
                        </div>
                        <div className="animate-element wow delay5 fadeInUp" data-wow-delay="0.3s">
                            <div className="fl-btn btn-general btn-hv-common color-s1">
                                <Link to="#" className="btn-inner f-w500 color-d6 border-corner5 lt-sp01">Download Resume</Link>
                            </div>
                        </div>
                    </div>
                    <div className="featured-post border-corner-bl">
                        <img src="images/section/35.jpg" alt="images" />
                        <div className="site-list has-border text-center animate-element wow delay5 fadeInUp" data-wow-delay="0.3s">
                            <Link to="#" className="bg-s1"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                            <Link to="#" className="bg-s2"><i className="fa fa-behance" aria-hidden="true" /></Link>
                            <Link to="#" className="bg-s3"><span className="icon-dribble" /></Link>
                        </div>
                    </div>
                    </div>
                    <div className="iconbox-s4 t2 color-s2 border-corner5 animate-element wow delay5 fadeZooming" data-wow-delay="0.3s">
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
            </section>
        );
    }
}

export default Banner;
