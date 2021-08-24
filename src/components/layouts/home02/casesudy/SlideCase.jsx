import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class SlideCase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: [
                {
                    id: 1,
                    image: './images/section/45.jpg',
                    alt: 'images',
                    title: 'Portfolio',
                    view: 'Full view'
                },
                {
                    id: 2,
                    image: './images/section/27.jpg',
                    alt: 'images',
                    title: 'Portfolio',
                    view: 'Full view'
                },
                {
                    id: 3,
                    image: './images/section/28.jpg',
                    alt: 'images',
                    title: 'Drop',
                    view: 'Full view'
                },{
                    id: 4,
                    image: './images/section/46.jpg',
                    alt: 'images',
                    title: 'Design dive',
                    view: 'Full view'
                }

            ]
        }
    }
    
    render() {
        return (
            <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                <div className="flat-carousel-box data-effect clearfix" data-gap={67} data-column={4} data-column2={3} data-column3={2} data-column4={1} data-column5={1} data-dots="true" data-auto="false" data-nav="false" data-loop="true">
                    <div className="owl-carousel">
                        {
                            this.state.slider.map(data => (
                                <div className="image-box-t1" key={data.id}>
                                    <div className="featured-post">
                                        <img src={data.image} alt={data.alt} />
                                    </div>
                                    <h3 className="name">{data.title}</h3>
                                    <div className="full-view"><Link to="#">{data.view}</Link></div>
                                </div>
                            ))
                        }                      
                    </div>
                </div>
          </div>
        );
    }
}

export default SlideCase;
