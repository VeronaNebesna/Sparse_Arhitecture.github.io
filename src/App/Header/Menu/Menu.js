import React, {Component} from "react"
import Burger from "./Burger/Burger"
import SideDrawer from "./Burger/SideDrawer"


class Menu extends Component{
    state={
        sideDrawerOpen:false
    }
  drawerToggleClickHandler =() =>{
    this.setState((prevState) =>({
        sideDrawerOpen:!prevState.sideDrawerOpen
    }))
  }
  backdropClickHandler = () =>{
      this.setState({
        sideDrawerOpen:false
      })
  }
    render(){
         return(
            <div>
                <Burger drawerClickHandler ={this.drawerToggleClickHandler}/>
                <SideDrawer close={this.backdropClickHandler} show={this.state.sideDrawerOpen}/>
            </div>
            )
    }
}


export default Menu