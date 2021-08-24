import React, { Component } from 'react';

class SliderImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: [
                {
                    id: 1,
                    image: './images/section/29.png',
                    alt: 'images'
                },
                {
                    id: 2,
                    image: './images/section/30.png',
                    alt: 'images'
                },
                {
                    id: 3,
                    image: './images/section/31.png',
                    alt: 'images'
                },
                {
                    id: 4,
                    image: './images/section/32.png',
                    alt: 'images'
                },
                {
                    id: 5,
                    image: './images/section/33.png',
                    alt: 'images'
                },
                {
                    id: 6,
                    image: './images/section/29.png',
                    alt: 'images'
                }
            ]
        }
    }
    
    render() {
        return (          
            <section className="sponsor s2">
                <div className="container">
                    <div className="flat-carousel-box data-effect clearfix" data-gap={68} data-column={6} data-column2={4} data-column3={4} data-column4={2} data-column5={2} data-dots="false" data-auto="false" data-nav="false" data-loop="true">
                        <div className="owl-carousel">
                            {
                                this.state.image.map(data => (
                                    <img src={data.image} alt={data.alt} key={data.id} />
                                ))
                            }                         
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SliderImage;
