import React, {useEffect} from "react"
import {Link} from "react-router-dom"
import Aos from "aos"



const ContentPortfolioItems = ({
    id,
    img,
    headline,
    p1,
    p2,
    category,
    changeCategory,
    like,
    changeLikedBtn,
}) =>{
    useEffect(()=>{
    Aos.init({
        duration:3000
    })
    }, [])  
    return(
        <div  className = { id%2===0 ? "row dark_row content_row reverse_row" :"row dark_row content_row"}
        data-aos= {id%2===0 ? "fade-up-left" : "fade-up-right" }>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                <div className="pic_portfolio">
                    <img src={img}  alt=""/>
                </div>
            </div>
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                <div className="desc_portfolio">
                    <div className="headline_desc_portfolio">
                        <p>{headline}</p>
                        <p className="like" onClick={()=>changeLikedBtn(id)}> {
                            like[id] ?  <i class="fas fa-heart"></i> : <i class="far fa-heart"></i>                           
                        }
                        </p>
                    </div>
                    <div className="title_portfolio">
                        <p>{p1}</p>
                        <p>{p2}</p>
                    </div>
                    <div className="btn_read_more" key={id}>
                        <button><Link to={`/read_more_about/${id}`}>Read more </Link></button>
                        <div className="category_name">
                            Category: 
                            <Link  to="/category" onClick={()=> changeCategory(id,category)}>{category}</Link>           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentPortfolioItems