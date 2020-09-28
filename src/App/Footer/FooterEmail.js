import React, {Component} from "react"
import "./Footer.css"


class FooterEmail extends Component{
    state={
        isOpen:false,       
    }
    openModalWindow (){
        this.setState({
            isOpen:true
        })
    }
    closeModalWindow(){
        this.setState({
            isOpen:false
        })
    }

 
wrapperRef = React.createRef()

handleClickOutside = (event) => {
    if (this.wrapperRef.current === event.target) {
        this.closeModalWindow()
    }
    
}
   render(){
     return(
        <div class="col-xs-12 col-sm-8 col-md-4 col-lg-4">
            <div class="newsletter_column">
                <p>Newsletter</p>
                <span>You can trust us. We only send promo offers.</span>
                <div className="button_write_to_us" onClick={()=> this.openModalWindow()}>
                    <span className="write_to_us">Write to us!<i class="far fa-envelope"></i></span>
                </div>

               { this.state.isOpen && <div className="modal" ref={this.wrapperRef} onClick={ this.handleClickOutside} >
                   
                    <div className="modal-body">
                        <div className ="close_modal" onClick = {() => this.closeModalWindow()}>X</div>
                            <div class="email_btn">
                                <p>We are waiting for your email!</p>
                                <input type="email" placeholder="Text..."/>
                                <button class="email_send" onClick={()=>this.closeModalWindow()}><i class="fas fa-arrow-right"></i></button>
                            </div>
                    </div>
                </div>}
            </div>
        </div>
)
   }
}

export default FooterEmail