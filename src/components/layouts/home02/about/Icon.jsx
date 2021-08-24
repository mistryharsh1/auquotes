import React, { Component } from 'react';

class Icon extends Component {
    constructor(props){
        super(props);
        this.state = {
            shape: [
                {
                    id: 1,
                    classname: 'shape-one',
                    images: './images/testimonial/01.png',
                    alt: 'images',
                },
                {
                    id: 2,
                    classname: 'shape-two',
                    images: './images/testimonial/02.png',
                    alt: 'images',
                },
                {
                    id: 3,
                    classname: 'shape-three',
                    images: './images/testimonial/03.png',
                    alt: 'images',
                },
                {
                    id: 4,
                    classname: 'shape-four',
                    images: './images/testimonial/04.png',
                    alt: 'images',
                },
                {
                    id: 5,
                    classname: 'shape-five',
                    images: './images/testimonial/05.png',
                    alt: 'images',
                },
                {
                    id: 6,
                    classname: 'shape-six',
                    images: './images/testimonial/06.png',
                    alt: 'images',
                }
            ]
        }
    }
    render() {
        return (
            <div className="section-icons">
                {
                    this.state.shape.map(data => (
                        <div className={data.classname} key={data.id}><img src={data.images} alt={data.alt} /></div> 
                    ))
                }
               
            </div>
        );
    }
}

export default Icon;
