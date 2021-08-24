import React, { Component } from 'react';
import { ContentEducation, ProjectEducation, TopEducation } from './education/index';

class Education extends Component {
    render() {
        return (
            <div id="c_education" className="tf-modalbox-wrapper">
                <div className="tf-modal-content">
                    <section className="flat-education s2" id="resume">
                        <div className="container">
                            <TopEducation />
                            <div className="flat-spacer" data-desktop="99" data-mobile="50" data-smobile="50"></div>
                            <ContentEducation />
                        </div>
                    </section>
                    <ProjectEducation />
                </div>
            </div>
        );
    }
}

export default Education;
