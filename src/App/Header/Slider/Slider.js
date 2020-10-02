import React, { Fragment, Component } from "react"
import "./Slider.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import slider1 from "./back_1.png"
import slider2 from "./back_2.png"
import slider3 from "./back_3.png"



class Slider extends Component{
render(){
    return(
        <Fragment>
            <AliceCarousel mouseTrackingEnabled="true" mouseDragEnabled="true" autoPlay autoPlayInterval="5000" buttonsDisabled="false" showSlideInfo="true">
                <div>
                     <img className="sliderimg" src={slider1} alt="slider 1"/>
                
                    <div className="content_slider">
                        <span></span>
                        <p className="title_content_slider">Dream Heaven City</p>
                        <p>if you are looking at blank cassettes on the we Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div className="btn_det">
                            <button className = "details">details</button>
                        </div>
                    </div>
                </div>
               
                <div>
                    <img className="sliderimg" src={slider2} alt="slider 2"/>
                        <div className="content_slider">
                            <span></span>
                            <p className="title_content_slider">Dream Heaven City</p>
                            <p>if you are looking at blank cassettes on the we Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <div className="btn_det">
                                <button className = "details">details</button>
                            </div>
                        </div>
                </div>
                <div>
                    <img className="sliderimg"  src={slider3} alt="slider 3"/>
                        <div className="content_slider">
                            <span></span>
                            <p className="title_content_slider">Dream Heaven City</p>
                            <p>if you are looking at blank cassettes on the we Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <div className="btn_det">
                                <button className = "details">details</button>
                            </div>
                        </div>

                </div>
            </AliceCarousel>
</Fragment>
    )
}
}
    

export default Slider


