import React, { Fragment } from "react"
import CommentsList from "./Comments/CommentsList"




const ContCategoryPage = ({
    id,
    img,
    p1,
}) =>{
    return(
        <Fragment>
            <div className=" row row_category" key={id}>  
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="category_bottom">
                        <div className="date_post"> 12 Dec, 2020<i class="fas fa-calendar-alt"></i></div>
                        <div className ="views_post">50+ Views <i className="far fa-eye"></i> </div>
                        <div className ="user_post">Mishell<i class="far fa-user"></i></div>
                        <div className="comment_post">
                            <CommentsList/>
                        </div>
                    </div>
                </div>
                <div className ="col-xs-12 col-sm-6 col-md-8 col-lg-8">
                    <div className="pic_portfolio_category">
                        <img src={img} alt=""/>
                    </div>
                    <div className="title_port_category">
                        <p>{p1}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem officiis voluptatum eos veniam eligendi voluptates error consectetur quas quae ut nemo maiores pariatur cum, sed aperiam iusto molestias repudiandae voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat temporibus maxime modi ipsum quo, eligendi ut officia aliquid? Aspernatur vero doloremque sint quo repudiandae. Libero culpa velit eveniet ipsum neque!</p>
                    </div> 
                </div>
                </div>                   
    </Fragment> 
    )
}


export default ContCategoryPage