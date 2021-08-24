import React, { Component } from 'react';
import { Header,Banner, About, Services, Education, CaseStudy, Testimonial, SliderImage, Footer } from '../layouts/home02';

class Home02 extends Component {
    constructor(props){
        super(props);
        this.state= {
            card: [
                {
                    id: 1,                   
                    classcard: "iconbox-s2 iconbox-s2-t1 bg-white",
                    wowdelay: '0.5s',
                    image: './images/section/20.png',
                    alt: 'images',
                    title: 'Web UI Design',
                    text: "I'm a professional UX designer with 4 years of experience. My main focus is on listening."
                },
                {
                    id: 2,
                    classcard: "iconbox-s2 iconbox-s2-t1 bg-white active",
                    wowdelay: '0.8s',
                    image: './images/section/21.png',
                    alt: 'images',
                    title: 'Mobile UI Design',
                    text: "I'm a professional UX designer with 4 years of experience. My main focus is on listening."
                },
                {
                    id: 3,
                    classcard: "iconbox-s2 iconbox-s2-t1 bg-white",
                    wowdelay: '1.1s',
                    image: './images/section/22.png',
                    alt: 'images',
                    title: 'Branding Design',
                    text: "I'm a professional UX designer with 4 years of experience. My main focus is on listening."
                }
            ]
        }
    }
    render() {
        return (
            <div className="body-copyright-light fixed counter-scroll has-one-page">               
                <div id="mobile-menu-overlay"><span className="tf-close"></span></div>
                <Header />
                <div id="content" className="content"> 
                    <div className="homepage-personal">
                        <Banner />
                        <About />
                        <div id="c_specialization" className="tf-modalbox-wrapper">
                            <div className="tf-modal-content">
                                <section className="experienced s2" id="services">
                                    <div className="container">
                                        <div className="flat-title mg-b98 animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                            <h2 className="title-section color-d12 mg-b41 text-center">I am Specialized in</h2>
                                        </div>
                                        <div className="row">  
                                            {
                                                this.state.card.map(data => (
                                                    <Services key={data.id} data={data}/>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>                       
                        <Education />   
                        <CaseStudy />      
                        <Testimonial />
                        <div id="c_contact" className="tf-modalbox-wrapper">
                            <div className="tf-modal-content modal-content-footer justify-content-end">
                                <SliderImage />
                                <Footer />
                            </div>
                        </div>          
                    </div>
                </div>
            </div>
        );
    }
}

export default Home02;
