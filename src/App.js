import React, {Component} from 'react';
import Header from "./App/Header/Header"
import Main from "./App/Main/Main"
import Footer from "./App/Footer/Footer"
import "./App.css"
import "./Grid.css"
import "./Reset.css"


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

  changeLikedBtn=(id)=>{
    this.setState( (prevState)=>({
      likedPosts:{
        ...prevState.likedPosts,
        [id]:!prevState.likedPosts[id],
      }
    }))
  }

    render(){
      return(
        <div>
          <Header
            like={this.state.likedPosts}/>
          <Main
              articleCategory={this.state.articleCategory}
              changeCategory={this.changeCategory}
              like={this.state.likedPosts}
              changeLikedBtn={this.changeLikedBtn}
          />
          <Footer/>
        </div>
      )
    }
}
export default App;
