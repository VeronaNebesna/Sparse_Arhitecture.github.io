import React, {useEffect} from "react"
import Aos from "aos"
import "./Components_2.css"

const Component_2 = () => {
    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    }, []);  
    return(
        <div>
             <div className="about_our_company" data-aos="slide-left">
                <div className="column_caption">
                    <p className="title">about our company</p>
                    <p className="subtitle">We've been creating <br/>Awesome Since 1992</p>
                </div>
                <div className="text_column">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, velit fuga  cumque facere esse ratione reiciendis tempore earum porro et nesciunt animi! Dolorem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero placeat doloremque, quam sed quod qui! Rem nam praesentium dolorem provident labore repellendus sed possimus eos veritatis totam, ex odit perspiciatis!</p>
                    <p>Sit, cumque. Quo, molestias dolorem placeat nostrum magni totam reiciendis tempore delectus libero autem explicabo sapiente veniam corrupti repudiandae voluptas! Aperiam pariatur a maxime debitis!</p>
                </div>
                <div className="btn_read_more">
                    <button>Read more</button>
                </div>
            </div>
        </div>
    )
}
export default Component_2