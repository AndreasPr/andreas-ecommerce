import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './testimonials.styles.css';
import {Carousel} from 'react-responsive-carousel';
import testimonialFirst from '../../assets/testimonial1.png';
import testimonialSecond from '../../assets/testimonial2.png';
import testimonialThird from '../../assets/testimonial3.png';

const Testimonials = () => {

        return (
            <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={6100}>
                <div>
                    <img src={testimonialFirst} alt="testimonial1"/>
                    <div className="myCarousel">
                        <h3>Michelle Ant</h3>
                        <h4>Web Developer</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                </div>
                <div>
                    <img src={testimonialSecond} alt="testimonial2"/>
                    <div className="myCarousel">
                        <h3>Stephanie Lincoln</h3>
                        <h4>Cashier</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                </div>
                <div>
                    <img src={testimonialThird} alt="testimonial3"/>
                    <div className="myCarousel">
                        <h3>Al Johnson</h3>
                        <h4>Private Employee</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                </div>
            </Carousel>
        );
}
export default Testimonials;
