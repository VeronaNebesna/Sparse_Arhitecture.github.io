import React, {Component} from 'react';
import Header from "./App/Header/Header"
import Main from "./App/Main/Main"
import Footer from "./App/Footer/Footer"
import {omit} from "lodash"
import "./App.css"
import "./App/StylesCSS/Grid.css"
import "./App/StylesCSS/Reset.css"
import "./App/Header/Menu/Burger/DarkTheme.css"


class App extends Component{
  state={
    articleCategory:{
    },
    likedPosts:{
      
    },
    colorTheme: true
  }

  changeCategory = (categoryId, category) =>{
    this.setState(() =>({
      articleCategory:{
        [categoryId]: category
      }
    }))
  } 

  addLikedBtn=(id)=>{
    this.setState( (prevState)=>({
      likedPosts:{
        ...prevState.likedPosts,
        [id]:true,
      }
    }))
  }
 removeLikedBtn=(id)=>{
    this.setState( (prevState)=>({
      likedPosts:{
        ...prevState.likedPosts,
        [id]:false,
      }
    }))
  }
  changeColorTheme = ()=>{
    this.setState( (prevState)=>({
      colorTheme: !prevState.colorTheme
    })
    )
  }
  removeLikPosts = (id)=>{
    this.setState ((prevState)=>({
      likedPosts:omit(prevState.likedPosts, id)
      
    }))
  }
    render(){
      return(
        <div className={this.state.colorTheme ? "dark" :" light"}>
          <Header
            like={this.state.likedPosts}
            changeColorTheme={this.changeColorTheme}
            color ={this.state.colorTheme}
            />
          <Main
              articleCategory={this.state.articleCategory}
              changeCategory={this.changeCategory}
              like={this.state.likedPosts}
              // changeLikedBtn={this.changeLikedBtn}
              addLike ={this.addLikedBtn}
              removeLike={this.removeLikedBtn}
              removeLikPosts={this.removeLikPosts}
          />
          <Footer/>
        </div>
      )
    }
}
export default App;
