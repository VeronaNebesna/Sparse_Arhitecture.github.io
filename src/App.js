import React, {Component} from 'react';
import Header from "./App/Header/Header"
import Main from "./App/Main/Main"
import Footer from "./App/Footer/Footer"
import "./App.css"
import "./App/StylesCSS/Grid.css"
import "./App/StylesCSS/Reset.css"


class App extends Component{
  state={
    articleCategory:{
    },
    likedPosts:{
      
    },
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

    render(){
      // console.log(this.state.likedPosts)
      return(
        <div>
          <Header
            like={this.state.likedPosts}/>
          <Main
              articleCategory={this.state.articleCategory}
              changeCategory={this.changeCategory}
              like={this.state.likedPosts}
              // changeLikedBtn={this.changeLikedBtn}
              addLike ={this.addLikedBtn}
              removeLike={this.removeLikedBtn}
          />
          <Footer/>
        </div>
      )
    }
}
export default App;
