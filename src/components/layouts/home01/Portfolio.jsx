import React, { Component } from 'react';
import {ContainerLeft,ContainerRight} from './portfolio/index';

class Portfolio extends Component {
    render() {
        return (
            <div className="section slide-personal-Intro-fourth slide-dark">
                <section className="flat-case-study flex s1 position-relative" id="portfolio">
                    <div className="background-left">
                        <div className="text-portfolio">Portfolio</div>
                    </div>
                    <div className="container d-lg-flex">
                        <ContainerLeft />
                        <ContainerRight />
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;
