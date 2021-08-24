import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Specilizing extends Component {
    constructor(props) {
        super(props);
        this.state= {
            card : [
                {
                    id: 1,
                    classimg: 'featured-post mg-b43',
                    srcimg: './images/section/20.png',
                    altimg: 'images',
                    title: 'Web Developer',
                    text01: "I'm a professional UX designer with",
                    text02: "4 years of experience."
                },
                {
                    id: 2,
                    classimg: 'featured-post mg-b42',
                    srcimg: './images/section/21.png',
                    altimg: 'images',
                    title: 'Web UI Design',
                    text01: "I'm a professional UX designer with",
                    text02: "4 years of experience."
                },
                {
                    id: 3,
                    classimg: 'featured-post mg-b40',
                    srcimg: './images/section/22.png',
                    altimg: 'images',
                    title: 'SEO',
                    text01: "I'm a professional UX designer with",
                    text02: "4 years of experience."
                }
            ]
        }
    }
    
    render() {
        return (              
            <section className="experienced s3" id="services">
                <div className="container">
                    <div className="background-inner bg-s2">
                        <div className="flat-title animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                        <h2 className="title-section color-d11 mg-b44 text-center">SPECILIZING IN</h2>
                        </div>
                        <div className="row animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                            {
                                this.state.card.map(data => (
                                    <div className="col-lg-4" key={data.id}>
                                        <div className="iconbox-s2">
                                            <div className={data.classimg}><img src={data.srcimg} alt={data.altimg} /></div>
                                            <h3 className="title mg-b21"><Link to="#" className="color-d11">{data.title}</Link></h3>
                                            <p className="color-d13">
                                            {data.text01} <br />{data.text02}
                                            </p>
                                        </div>
                                    </div>  
                                ))
                            }                       
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Specilizing;
