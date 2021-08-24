import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            profile: [
                {
                    id: 1,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/05.png',
                    alt: 'images',
                    name: 'Dribbble',
                    normal: 'Follow Me'
                },
                {
                    id: 2,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/06.png',
                    alt: 'images',
                    name: 'Behance',
                    normal: 'See My Design'
                },
                {
                    id: 3,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/07.png',
                    alt: 'images',
                    name: 'Uplabs',
                    normal: 'Download Here'
                },
                {
                    id: 4,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/08.png',
                    alt: 'images',
                    name: 'Skype',
                    normal: 'Connect with me'
                }
            ]
        }
    }
    render() {
        return (
            <div className="background-white">
                <div className="d-lg-flex">
                    <div className="col-left">
                        <div className="featured-post animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                            <img src="images/section/03.png" alt="images"/>
                        </div>
                    </div>
                    <div className="col-right">
                        <div className="flat-spacer" data-desktop="105" data-mobile="50" data-smobile="50"></div>
                        <div className="flat-title t1">
                            <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                <h4 className="sub-title mg-b22">About Me</h4>
                                <h2 className="title-section mg-b26 color-d12">Hi, I am here to <span className="color-d4">help you.</span></h2>
                                <p>
                                    Hi, if you need  PSD template, landing page or Website design within a day? then you can tell me, I'm here to help you. I can design any kind of PSD template. Check my portfolio.
                                </p>
                            </div>
                            <div className="animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                <div className="fl-btn btn-general">
                                    <Link to="#" className="f-w500 color-1 lt-sp07">Hire Me</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-list">
                    <div className="flat-carousel-box data-effect clearfix" data-gap="30" data-column="4" data-column2="3" data-column3="2" data-column4="1" data-column5="1" data-dots="false" data-auto="false" data-nav="false" data-loop="true">
                        <div className="owl-carousel">
                            {
                                this.state.profile.map(data => (
                                    <div className={data.classname} key={data.id}>
                                        <div className="featured-post">
                                            <img src={data.images} alt={data.alt}/>
                                        </div>
                                        <div className="content-inside">
                                            <h3 className="name"><Link to="#">{data.name}</Link></h3>
                                            <span className="t-normal">{data.normal}</span>
                                        </div>
                                    </div>    
                                ))
                            }                                                          
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
