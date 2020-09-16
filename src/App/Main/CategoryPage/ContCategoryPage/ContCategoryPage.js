import React from "react"
import Comments from "./Comments"




const ContCategoryPage = ({
    id,
    img,
    p1,
    p2,
    headline,
}) =>{
    return(
        <div className="row_category" key={id}>
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="title_port_category">
                    <p>{p1}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem officiis voluptatum eos veniam eligendi voluptates error consectetur quas quae ut nemo maiores pariatur cum, sed aperiam iusto molestias repudiandae voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat temporibus maxime modi ipsum quo, eligendi ut officia aliquid? Aspernatur vero doloremque sint quo repudiandae. Libero culpa velit eveniet ipsum neque!</p>
                </div>
            </div>
            <div className ="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div className="pic_portfolio_category">
                    <img src={img} alt=""/>
                </div>
                <div className="category_bottom">
                    <div className="data_post">{headline}</div>
                    <div className ="views_post"> <i className="far fa-eye"></i> 50+ Views</div>
                    <div className ="user_post"><i class="far fa-user"></i>Mishell</div>
                    <Comments/>
                </div>
            </div>
     </div>
    
        
    )
}

export default ContCategoryPage