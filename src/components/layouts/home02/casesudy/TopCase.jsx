import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class TopCase extends Component {
    render() {
        return (
            <div className="container">
                <div className="row d-lg-flex align-items-center animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                    <div className="col-lg-8">
                        <div className="flat-title t1">
                            <h4 className="sub-title mg-b13">Portfolio</h4>
                            <h2 className="title-section color-d12 mg-b20">Few selected works.</h2>
                            <p>
                                I'm a professional UX designer with 4 years of experience. My main focus <br />is on listening and understanding your users.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="flat-spacer" data-desktop={0} data-mobile={50} data-smobile={50} />
                        <div className="fl-btn btn-general"> 
                            <Link to="#" className="f-w500 lt-sp1 border-corner2">Explore More</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopCase;
