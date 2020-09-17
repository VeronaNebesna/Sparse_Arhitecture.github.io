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
    }
  }

  changeCategory = (categoryId, category) =>{
    this.setState(() =>({
      articleCategory:{
        [categoryId]: category
      }
    }))
  } 

    render(){
      return(
        <div>
          <Header/>
          <Main
              articleCategory={this.state.articleCategory}
              changeCategory={this.changeCategory}
          />
          <Footer/>
        </div>
      )
    }
}
export default App;
