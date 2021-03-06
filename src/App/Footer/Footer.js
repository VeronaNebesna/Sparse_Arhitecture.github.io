import React, {Component} from "react"
import "./Footer.css"
import FooterData from "./FooterData"
import FooterItems from "./FooterItems"
import FooterEmail from "./FooterEmail"
import FooterLinks from "./FooterLinks"


class Footer extends Component {
    scrollToTop =()=>{
       window.scrollTo({
           top:0,
           behavior:"smooth"
       })
    }
    render(){
         return(
        <footer className="footer_section">
            <div className="footer_dark_section">
                <div className="container">
                    <div className="row footer_row">
                        {
                            FooterData.map(({
                                id,
                                p,
                                li1,
                                li2,
                                li3,
                                li4,
                            }) => (
                                <FooterItems
                                    id ={id}
                                    p={p}
                                    li1={li1}
                                    li2={li2}
                                    li3={li3}
                                    li4={li4}
                                />
                            ))
                        }
                        <FooterEmail/>
                    </div>
                   <FooterLinks/>
                </div>
                <div class="arrow_up" onClick={()=>this.scrollToTop()}>
                    <i class="fas fa-angle-up"></i>
                </div>
                </div>
        </footer>
    )
    }
   
}

export default Footer