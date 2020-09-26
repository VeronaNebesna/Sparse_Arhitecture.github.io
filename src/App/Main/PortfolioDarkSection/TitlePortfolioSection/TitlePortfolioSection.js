import { keys } from "lodash"
import React, { Component, Fragment } from "react"
import {Link} from "react-router-dom"


class TitlePortfolioSection extends Component{
    render(){
        const{
            like,
        }=this.props
        console.log(like)
        return(
        <Fragment>
            <div class="column_caption">
                <p class="title">about portfolio</p>
                <div class="subtitle">Latest Completed Project
                    <div className="liked_post_btn">
                        <button><Link to="/liked_post"> liked posts: {
                            keys(like).reduce((accObj, id)=>(
                                accObj + like[id]
                            ),0 )
                        }                  
                            </Link></button>
                    </div>
                </div>
                    <div class="yellow_line"></div>
            </div>
        </Fragment>
    )
    }
    
}

export default TitlePortfolioSection