import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer footer-s1">
                <div id="footer-widget" className="footer-widget-s2 footer-widget-line bg-s1 position-relative">
                    <div className="container">
                        <div className="iconbox-s4 t1 color-s1 border-corner5 d-flex">
                            <div className="avatar position-relative">
                                <img src="images/footer/01.jpg" alt="images" />
                            </div>
                            <div className="content-inner">
                                <h4 className="name lt-sp04 mg-b16 text-white position-relative">Available for Project</h4>
                                <div className="fl-btn btn-general btn-hv-common">
                                    <Link to="#" className="btn-inner text-white border-corner2">Hire Me</Link>
                                </div>
                            </div>
                        </div>
                        <div className="site-list site-list-center text-center">
                            <Link to="#" className="bg-s1"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                            <Link to="#" className="bg-s2"><i className="fa fa-behance" aria-hidden="true" /></Link>
                            <Link to="#" className="bg-s3"><span className="icon-dribble" /></Link>
                        </div>
                    </div>
                </div>
                <div id="bottom" className="bottom-s2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="copyright lt-sp02">
                                © Roy Design, 2020 All rights reserved.
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ul className="widget-nav-menu color-s1">
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">Portfolio</Link></li>
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-2">
                                <div className="socials-list color-s1">
                                    <Link to="#"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                                    <Link to="#"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                                    <Link to="#"><i className="fa fa-instagram" aria-hidden="true" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
