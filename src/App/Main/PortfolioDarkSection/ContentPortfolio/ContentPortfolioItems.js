import React from "react"
import {Link} from "react-router-dom"





const ContentPortfolioItems = ({
    id,
    img,
    headline,
    p1,
    p2,
    category,
}) =>{
    return(
        <div  className ={ id%2==0 ? "row dark_row content_row reverse_row" :"row dark_row content_row"}>
            <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
                <div className="pic_portfolio">
                    <img src={img}  alt=""/>
                </div>
            </div>
            <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                <div className="desc_portfolio">
                    <div className="headline_desc_portfolio">
                        <p>{headline}</p>
                    </div>
                    <div className="title_portfolio">
                        <p>{p1}</p>
                        <p>{p2}</p>
                    </div>
                    <div className="btn_read_more" key={id}>
                        <button>Read more</button>
                        <div className="category_name">
                            Category: {
                                    category == "city" ? 
                            <Link  to="/category">{category}</Link> : <Link to = "/category_home"> {category}</Link>
                                    }   
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentPortfolioItems