import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class EducationLeft extends Component {
    render() {
        return (
            <div className="col-left">
                <div className="flat-spacer" data-desktop={97} data-mobile={0} data-smobile={0} />
                <div className="featured-post position-relative animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                    <img src="images/section/11.png" alt="images" />
                    <div className="flat-spacer" data-desktop={0} data-mobile={0} data-smobile={30} />
                    <div className="">
                        <Link to="#" className="color-s1"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                        <Link to="#" className="color-s2"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                        <Link to="#" className="color-s3"><i className="fa fa-instagram" aria-hidden="true" /></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default EducationLeft;
