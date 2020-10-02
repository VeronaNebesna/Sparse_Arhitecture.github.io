import React, { Component, Fragment } from "react"
import todos from "./todos"
import "./Comments.css"


class Comments extends Component {
    state={
        isOpenComments: false,
        inputText:"",
        showData:{
            text:'',
        }
    }
    
    // Відкриття і закриття коментарів при натисканні на іконку коментарів
    toggleComments (){
        this.setState({
            isOpenComments : !this.state.isOpenComments
        })
    }

    // Зміна input
    handleInputChange = ({target:{value}}) => {//????
        this.setState({
            inputText:value
        })
    }

    handleShow = (e) =>{
        e.preventDefault();// прибирає дефолтну поведінку е, при введенні значення не перезавантажує сторінку
        const{inputText} = this.state
        this.setState({
            inputText:"",//очищення input
            showData:{
                text:inputText
            }
        })
    }

    render(){
        const{inputText, showData} = this.state
        const{text} = showData
        return(
           <Fragment>
                <div className="comment_post" onClick={()=> this.toggleComments()}><i class="far fa-comment"></i> 25+ Comments</div>

             

{/*Якщо true  то будується дана структура, тобто вікно з коментарями відкривається. */}
                {this.state.isOpenComments && 
                
                <div className="comments_pages">

                    <form className ="comment_item">
                        <input type="text" value={inputText} onChange={this.handleInputChange}/>
                        <button  type="submit" onClick={this.handleShow}>Send</button>
                    </form>

                    <div className="comment_item">
                        <div className="user_icon"></div>
                        <p>{text}</p>
                    </div>
                    
                {
                    todos.map(({id,text}) =>(//перебирання масиву з коментарями і деструктуризація
                        <div className="comment_item" key={id}>
                                <div className="user_icon"></div>
                                <p>{text}</p>
                        </div>
                    ))
                }
                    </div>
                }
               
           </Fragment>
            )
    }
  
}

export default Comments