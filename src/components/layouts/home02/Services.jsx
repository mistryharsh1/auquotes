import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Services extends Component {
    
    render() {
        return (                  
                <div className="col-lg-4 col-12 animate-element wow delay5 fadeInUp" data-wow-delay={this.props.data.wowdelay}>
                    <div className={this.props.data.classcard}>
                        <div className="featured-post mg-b43"><img src={this.props.data.image} alt={this.props.data.alt} /></div>
                        <h3 className="title mg-b21"><Link to="#">{this.props.data.title}</Link></h3>
                        <p>
                            {this.props.data.text}
                        </p>
                    </div>
                </div>                                                  
        );
    }
}

export default Services;
