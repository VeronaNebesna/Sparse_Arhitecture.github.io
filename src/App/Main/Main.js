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
    articleCategory,
    changeCategory,
    like,
    addLike,
    removeLike,
    removeLikPosts
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
                        // changeLikedBtn={changeLikedBtn}
                        removeLike={removeLike}
                        addLike = {addLike}
                        removeLikPosts={removeLikPosts}
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
                  <Route path="/read_more_about/:arrCategory" exact component={ReadMore}/>            
        </div>
    )
}


export default Main