import React, { Component } from 'react';

class ShapeIcon extends Component {
    render() {
        return (
            <div className="section-icons">
                <div className={this.props.data.classname}><img src={this.props.data.images} alt={this.props.data.alt} /></div>      
            </div>
        );
    }
}

export default ShapeIcon;
