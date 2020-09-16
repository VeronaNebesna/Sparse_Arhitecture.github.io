import React from "react"


const FooterLinks = () =>{
    return(
        <div class="row footer_row border_btm_row">
            <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                <div class="copyright_ftr">
                    <p>Copyright  &#169;2020</p>
                </div>
            </div>

            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <div class="links_footer">
                    <div><i class="fab fa-facebook-f"></i></div>
                    <div><i class="fab fa-twitter"></i></div>
                    <div><i class="fab fa-dribbble"></i></div>
                    <div><i class="fab fa-behance"></i></div>
                </div>
            </div>
        </div>
    )
}



export default FooterLinks