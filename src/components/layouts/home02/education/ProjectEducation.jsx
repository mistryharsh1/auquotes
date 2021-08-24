import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ProjectEducation extends Component {
    render() {
        return (          
            <section className="get-project s2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="featured-post animate-element wow delay5 fadeZooming" data-wow-delay="0.5s">
                            <img src="images/section/23.png" alt="images" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-12">
                            <div className="content-inner d-lg-flex">
                                <div className="col-left">
                                    <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                        <h2 className="title mg-b14 text-white">Say Hello!</h2>
                                        <div className="site-list has-border">
                                            <Link to="#" className="bg-s1"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                                            <Link to="#" className="bg-s2"><i className="fa fa-behance" aria-hidden="true" /></Link>
                                            <Link to="#" className="bg-s3"><span className="icon-dribble" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-right animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                    <div className="flat-spacer" data-desktop={69} data-mobile={50} data-smobile={50} />
                                    <form action="#" className="get-project-f2 position-relative">
                                    <input type="email" placeholder="Enter your email" />
                                    <button className="btn-submit"><i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectEducation;
