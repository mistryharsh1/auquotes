import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Project extends Component {
    render() {
        return (
            <section className="get-project s4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="featured-post animate-element wow delay5 fadeZooming" data-wow-delay="0.5s">
                                <img src="images/section/38.png" alt="images" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-inner animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                <h2 className="title mg-b14 color-d11">Say Hello!</h2>
                                <div className="site-list has-border">
                                    <Link to="#" className="bg-s1"><i className="fa fa-instagram" aria-hidden="true" /></Link>
                                    <Link to="#" className="bg-s2"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                                    <Link to="#" className="bg-s3"><i className="fa fa-linkedin" aria-hidden="true" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Project;
