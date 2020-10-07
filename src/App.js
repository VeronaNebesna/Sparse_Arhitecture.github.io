import React from 'react';
import Header from "./App/Header/Header"
import Main from "./App/Main/Main"
import Footer from "./App/Footer/Footer"
import "./App.css"
import "./App/StylesCSS/Grid.css"
import "./App/StylesCSS/Reset.css"
import "./App/Header/Menu/Burger/DarkTheme.css"
import { connect } from 'react-redux';


const App =({
    color 
})=>{
      return(
        <div className={ color ? "light" : "dark" }>
          <Header/>
          <Main/>
          <Footer/>
        </div>
      )
    }


const mapStateToProps=(state,props)=>({
  color:state.colorTheme[props.color]
})

export default connect(
  mapStateToProps
)(App);
