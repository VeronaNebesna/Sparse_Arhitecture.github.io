import React, { Component } from "react"
import ContentPortfolio from "./ContentPortfolio/ContentPortfolio"
import TitlePortfolioSection from "./TitlePortfolioSection/TitlePortfolioSection"
import "./PortfolioDarkSection.css"




class PortfolioDarkSection extends Component{
    render(){
        const{
            changeCategory
        } = this.props
        return(
            <div>
                <section class = "dark_section">
                    <div class="container">
                        <div class="row dark_row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TitlePortfolioSection/>
                            </div>
                        </div>
                            <ContentPortfolio
                                changeCategory={ changeCategory}/>
                        <div class="row dark_row content_row ">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="btn_load_more">
                                    <button>load more project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default PortfolioDarkSection