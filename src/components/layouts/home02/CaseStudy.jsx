import React, { Component } from 'react';
import {SlideCase, TopCase} from './casesudy/index'
class CaseStudy extends Component {
    render() {
        return (
            <div id="c_portfolio" className="tf-modalbox-wrapper">
                <div className="tf-modal-content">
                    <section className="flat-case-study s2 animation" id="portfolio">
                        <TopCase />
                        <div className="flat-spacer" data-desktop="97" data-mobile="50" data-smobile="50"></div>
                        <SlideCase />
                    </section>
                </div>
            </div>
        );
    }
}

export default CaseStudy;
