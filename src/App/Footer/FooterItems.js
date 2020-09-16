import React from "react"

const FooterItems = ({
    id,
    p,
    li1,
    li2,
    li3,
    li4,
}) =>{
    return(
    <div class="col-xs-12 col-sm-4 col-md-2 col-lg-2" key={id}>
        <div class="list">
            <ul>
                <p>{p}</p>
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
                <li>{li4}</li>
            </ul>
        </div>
    </div>

    )
}


export default FooterItems