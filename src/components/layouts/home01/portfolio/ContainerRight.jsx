import React, { Component } from 'react';

class ContainerRight extends Component {
    constructor(props){
        super(props);
        this.state = {
            slider: [
                {
                    id: 1,
                    image: './images/section/10.jpg',
                    alt: 'images'
                },
                {
                    id: 2,
                    image: './images/section/10.jpg',
                    alt: 'images'
                },
                {
                    id: 3,
                    image: './images/section/10.jpg',
                    alt: 'images'
                }
            ]
        }
    }
    render() {
        return (
            <div className="col-right animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                <div className="flat-spacer" data-desktop="4" data-mobile="70" data-smobile="70"></div>
                <div className="slider-drop-apps custom-dot dot-t2 dot-s2 number-pages none-nav-default mg-dots-s2">
                    <div className="flat-carousel-box data-effect clearfix" data-gap="0" data-column="1" data-column2="1" data-column3="1" data-column4="1" data-column5="1" data-dots="true" data-auto="false" data-nav="false" data-loop="true">
                        <div className="owl-carousel">
                            {
                                this.state.slider.map(data => (
                                    <div className="featured-post" key={data.id}>
                                        <img src={data.image} alt={data.alt} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContainerRight;
