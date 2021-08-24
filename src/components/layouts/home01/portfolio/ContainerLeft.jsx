import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ContainerLeft extends Component {
    render() {
        return (
            <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                <div className="flat-title t1">
                    <h4 className="sub-title mb-2">Web Ui Design</h4>
                    <h2 className="title-section color-d12 mg-b34">Instagram growth landing page</h2>
                    <div className="description">
                        <p className="lt-sp01">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
                        </p>
                        <p className="lt-sp01">
                        The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled.
                        </p>
                    </div>
                    <div className="fl-btn btn-general btn-hv-border">
                        <Link to="#" className="f-w500 text-one color-1 lt-sp1 border-corner2">View Case Study</Link>
                    </div>
                </div>
          </div>
        );
    }
}

export default ContainerLeft;
