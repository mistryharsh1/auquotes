import React, { Component } from 'react';
import { EducationLeft, EducationRight } from './education/index';

class Education extends Component {
    render() {
        return (
            <div className="section slide-personal-Intro-fifth slide-dark bg-white">
                <section className="flat-education flex s1 position-relative" id="resume">
                    <div className="shape-right"><img src="images/section/16.png" alt="images"/></div>
                    <div className="container">
                        <div className="d-lg-flex">
                            <EducationLeft />
                            <EducationRight />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Education;
