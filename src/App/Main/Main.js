import React from "react"
import {Route} from "react-router-dom"
import CategoryPage from "../Component/CategoryPages/CategoryPage"
import DarkSection from "./DarkSection/DarkSection"
import PortfolioDarkSection from "./PortfolioDarkSection/PortfolioDarkSection"
import ImgSection from "./ImgSection/ImgSection"
import SliderFeddback from "./SliderFeedback/SliderFeedback"
import LikedArticle from "../Component/LikeArticle/LikedArticle"
import Slider from "../Header/Slider/Slider"
import ReadMore from "../Component/ReadMore/ReadMore"



const Main = ({
    match,
}) =>{
    return(
        <div>
            <Route  path="/" exact component ={Slider}/>
            <Route path = "/" exact component={DarkSection}/>
            <Route path = "/" exact component={PortfolioDarkSection}/>
            <Route path = "/" exact component={ImgSection}/>
            <Route path="/" exact component={SliderFeddback}/>
            <Route path ="/category"  exact render ={()=>(
                 <CategoryPage
               />
            )}/> 
            <Route path="/liked_post" component={LikedArticle}/>  
            <Route path="/read_more_about/:arrCategory" exact render={(match)=>(
                <ReadMore
                match={match}
            />
            )}/>          
        </div>
    )
}


export default Main