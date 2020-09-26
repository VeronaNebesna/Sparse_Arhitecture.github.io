// import { render } from "@testing-library/react"
import React, { useEffect } from "react"
import AliceCarousel from "react-alice-carousel"
import Aos from "aos"

import "react-alice-carousel/lib/alice-carousel.css"
import img1 from "./port1.jpg"
import img2 from "./port2.jpg"
import img3 from "./port3.jpg"
import img4 from "./port4.jpg"
import img5 from "./port5.jpg"
import "./SliderFeedback.css"


const SliderFeedback = () =>{
    useEffect(()=>{
        Aos.init({
            duration:3000
        })
        }, [])  
        return(
            <section class = "dark_section" data-aos="fade">
                <div class="container">
                    <div class="row dark_row content_row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="column_caption">
                                <p class="title">our testimonial</p>
                                <p class="subtitle">What People Say About Us</p>
                                <div class="yellow_line">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row dark_row contant_row feedback_row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <AliceCarousel buttonsDisabled="false" autoPlay autoPlayInterval="5000" mouseTrackingEnabled="true" mouseDragEnabled="true"> 
                            <div className="slider_item">
                                <img src={img1} className="sliderimg feedback" alt="slider_1"/>
                                <div className="feedback_text">
                                    <p className="feedback_headline"> "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quos ad enim saepe in ipsam similique repellat, nobis quia quis qui officiis commodi veritatis, velit illo temporibus rerum maiores! Nisi." </p>
                                    <p>Natali L.</p>
                                </div>
                            </div>
                            
                            <div className="slider_item">
                                <img src={img2} className="sliderimg feedback" alt="slider_1"/>
                                <div className="feedback_text">
                                    <p className="feedback_headline"> "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quos ad enim saepe in ipsam similique repellat, nobis quia." </p>
                                    <p>Alex F.</p>
                                </div>
                            </div>
                            <div className="slider_item">
                                <img src={img3} className="sliderimg feedback" alt="slider_1"/>
                                <div className="feedback_text">
                                    <p className="feedback_headline"> "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quos ad enim saepe in ipsam similique repellat, nobis quia." </p>
                                    <p> Michael M.</p>
                                </div>
                            </div>
                            <div className="slider_item">
                                <img src={img4} className="sliderimg feedback" alt="slider_1"/>
                                <div className="feedback_text">
                                    <p className="feedback_headline"> "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quos ad enim saepe in ipsam similique repellat, nobis quia. Lorem quos ad enim saepe in ipsam. " </p>
                                    <p> Alice N.</p>
                                </div>
                            </div>
                            <div className="slider_item">
                                <img src={img5} className="sliderimg feedback" alt="slider_1"/>
                                <div className="feedback_text">
                                    <p className="feedback_headline"> "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quos ad enim saepe in ipsam similique repellat, nobis quia. Lorem quos ad enim saepe in ipsam. " </p>
                                    <p> Nick P.</p>
                                </div>
                            </div>
                           
                        </AliceCarousel>
                        </div>
                    </div>
                </div>
        </section>
        )
}

export default SliderFeedback