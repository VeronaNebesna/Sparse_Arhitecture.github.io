import React from "react"
import {Route} from "react-router-dom"
import CategoryPage from "./CategoryPage/CategoryPage"
import DarkSection from "./DarkSection/DarkSection"
import PortfolioDarkSection from "./PortfolioDarkSection/PortfolioDarkSection"
import ImgSection from "./ImgSection/ImgSection"
import SliderFeddback from "./SliderFeedback/SliderFeedback"
import LikedArticle from "../Components/LikedArticle/LikedArticle"
import Slider from "../Header/Slider/Slider"


const Main = ({
    articleCategory,
    changeCategory,
    like,
    changeLikedBtn,
}) =>{
    return(
        <div>
            <Route  path="/" exact render ={()=>(
                    <Slider/>
                )}/>
                <Route path = "/" exact render={()=>(
                     <DarkSection/>
                )}/>
                <Route path = "/" exact render={()=>(
                    <PortfolioDarkSection
                        changeCategory={ changeCategory}
                        like={like}
                        changeLikedBtn={changeLikedBtn}
                     />
                )}/>
                <Route path = "/" exact render={()=>(
                    <ImgSection/>
                )}/>
                <Route path="/" exact render ={()=>(
                    <SliderFeddback/>
                )}/>
                <Route path ="/category" render ={()=>(
                        <CategoryPage
                            articleCategory={articleCategory} 
                        /> 
                    )}/> 
                 <Route path="/liked_post" render={()=>(
                     <LikedArticle
                        like={like}
                        />
                 )}/>          
        </div>
    )
}

export default Main