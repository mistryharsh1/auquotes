import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class TopEducation extends Component {
    render() {
        return (
            <div className="row d-lg-flex align-items-center">
                <div className="col-lg-8">
                    <div className="flat-title t1 animate-element wow delay5 fadeInLeft" data-wow-delay="0.5s">
                        <h4 className="sub-title mg-b13">Educational qualification</h4>
                        <h2 className="title-section color-d12">Education &amp; Experience</h2>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="flat-spacer" data-desktop={0} data-mobile={50} data-smobile={50} />
                    <div className="fl-btn btn-general btn-hv-common animate-element wow delay5 fadeInRight" data-wow-delay="0.5s"> 
                        <Link to="#" className="btn-inner f-w500 lt-sp1 border-corner2">Download Resume</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopEducation;
