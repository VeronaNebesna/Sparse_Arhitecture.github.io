import React from "react"
import "./ImgSection.css"

const ImgSection =()=>{
    return(
        <section class ="img_section">
        <div class="blur">
            <div class="container">
                <div class="row content_row yellow_row">
                    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                        <div class="estimate_block">
                            <p class="title_estimate">Get to Know Project Estimate?</p>
                            <p class="content_estimate">There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station whether that is on the deck.</p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                        <div class="btn_estimate">
                            <button>get estimate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ImgSection