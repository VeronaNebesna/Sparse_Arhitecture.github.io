import React, { Fragment } from "react"
import "./Aside.css"
import userImg from "./user-info.png"
import img1 from "./pp1.jpg"
import img2 from "./pp2.jpg"
import img3 from "./pp3.jpg"
import img4 from "./pp4.jpg"


const Aside = ()=>{
    return(
        <Fragment>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="aside_box">
                    <div className="search_posts">
                        <div className="search_input">
                            <input type="text" placeholder="Search Posts"/>
                            <button className="search_button"><i class="fas fa-search"></i></button>
                        </div>
                        <p className="white_line"></p>
                    </div>
                    
                    <div className="author_posts">
                        <img src={userImg} />
                        <p className="name_of_author">Charlie Barber</p>
                        <p> Senior blog writer</p>
                        <div>
                            <ul className="social_net_icon">
                                <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a href=""><i class="fab fa-github"></i></a></li>
                                <li><a href=""><i class="fab fa-behance"></i></a></li>                                
                            </ul>
                        </div>
                        <p>A good architect should have a good understanding of the verbal sciences and history, be able to draw and know mathematics, stone-cutting and perspective;  but this is not enough, he must be an honest, reasonable and reasonable person;  must have liveliness and taste in his considerations;  without these qualities he cannot be a perfect architect or a person useful to society.</p>
                    </div>
                    <p className="white_line"></p>

                    <div className="popular_posts_list">
                        <button className="btn_posts">Popular Posts</button>
                        <div className="posts_list_item">
                            <img src={img1}/>
                            <p className="name_of_pop_posts">10 Best Architectural Solutions of 2019<span>02 Hours ago</span></p>
                        </div>
                        <div className="posts_list_item">
                            <img src={img2}/>
                            <p className="name_of_pop_posts">The Amazing Sensotec<span>03 Hours ago</span></p>
                        </div>
                        <div className="posts_list_item">
                            <img src={img3}/>
                            <p className="name_of_pop_posts">New York Architecture <span>03 Hours ago</span></p>
                        </div>
                        <div className="posts_list_item">
                            <img src={img4}/>
                            <p className="name_of_pop_posts">Suburb Architecture<span>03 Hours ago</span></p>
                        </div>
                    </div>
                    <p className="white_line"></p>

                    <div className="popular_posts_list">
                        <button className="btn_posts">Post Categories</button>
                                <div className="categoty_post_list">
                                    <span>Technology</span>
                                    <span>37</span>
                                </div>
                            <p className="white_dots_line"></p>
                                <div className="categoty_post_list">
                                    <span>Bridges</span>
                                    <span>24</span>
                                </div>
                            <p className="white_dots_line"></p>
                                <div className="categoty_post_list">
                                    <span>Hi-tech</span>
                                    <span>59</span>
                                </div>
                            <p className="white_dots_line"></p>
                                <div className="categoty_post_list">
                                    <span>Art</span>
                                    <span>29</span>
                                </div>
                            <p className="white_dots_line"></p>
                                <div className="categoty_post_list">
                                    <span>Minimalism</span>
                                    <span>15</span>
                                </div>
                            <p className="white_dots_line"></p>
                                <div className="categoty_post_list">
                                    <span>Architecture</span>
                                    <span>09</span>
                                </div>
                            <p className="white_dots_line"></p>
                                <div className="categoty_post_list">
                                    <span>Building</span>
                                    <span>37</span>
                                </div>
                            <p className="white_dots_line"></p>
                    </div>
                    <p className="white_line"></p>
                    <div className="popular_posts_list">
                        <button className="btn_posts">Newsletter</button>
                        <p className="text_subscribe">Here, I focus on a range of items and features that we use in life without giving them a second thought.</p>
                        <div className="box_subscribe">
                            <input type="text" placeholder="Enter email"/>
                            <button className="subscribe_button"> Subscribe </button>
                        </div>
                        <p className="text_subscribe">You can unsubscribe at any time</p>

                    </div>
                    <p className="white_line"></p>
                    <div className="popular_posts_list">
                        <button className="btn_posts">Tag Clouds</button>
                        <div className="list_of_tags">
                            <div>Сonstruction Еechnologies </div>
                            <div>Architectural minimalism</div>
                            <div>Digital architecture</div>
                            <div>Deconstructivism</div>
                            <div>Hi-tech</div>
                            <div>Suburb</div>
                            <div>City</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Aside