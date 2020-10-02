import React, { Component, Fragment } from "react"
import todos from "./todos"
import "./ts.css"


class ts extends Component {
    state={
        isOpents: false,
        inputText:"",
        showData:{
            text:'',
        }
    }
    
    // Відкриття і закриття коментарів при натисканні на іконку коментарів
    togglets (){
        this.setState({
            isOpents : !this.state.isOpents
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
                <div className="t_post" onClick={()=> this.togglets()}><i class="far fa-t"></i> 25+ ts</div>

             

{/*Якщо true  то будується дана структура, тобто вікно з коментарями відкривається. */}
                {this.state.isOpents && 
                
                <div className="ts_pages">

                    <form className ="t_item">
                        <input type="text" value={inputText} onChange={this.handleInputChange}/>
                        <button  type="submit" onClick={this.handleShow}>Send</button>
                    </form>

                    <div className="t_item">
                        <div className="user_icon"></div>
                        <p>{text}</p>
                    </div>
                    
                {
                    todos.map(({id,text}) =>(//перебирання масиву з коментарями і деструктуризація
                        <div className="t_item" key={id}>
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

export default ts