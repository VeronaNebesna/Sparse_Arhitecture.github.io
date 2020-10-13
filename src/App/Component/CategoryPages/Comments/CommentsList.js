// import React, { Component, Fragment } from "react"
// import "./Comments.css"


// class  CommentsList extends Component{
//     state={
//         isOpen: false,
//         comments: [],
//         form: {
//           name: '',
//           comment: ''
//         }
//     }
    
//     toggleComment = () => {
//         this.setState({
//             isOpen : !this.state.isOpen
//         })
//     }
//     handleInputChange = (e) => {
//         console.log(e.target.value)
//         this.setState({
//             form:{
//                 ...this.state.form,
//                 comment:e.target.value
//             }
//         })
      
//     }
//     addComents = ()=>{
//         this.setState({
//             comments:[
//                 ...this.state.comments,
//                 {
//                     comment: this.state.form.comment
//                 }
//             ]
//         })
//     }


//     render(){
//         return(
//            <Fragment>
//                 <div className="comment_post" onClick={()=> this.toggleComment()}>10 Comments <i class="fas fa-comments"></i> </div>
//                   { this.state.isOpen && <div className="comments_list">
//                         <div className="comment_list_input">
//                             <input value={this.state.form.comment} onChange={(e)=>this.handleInputChange(e)}/>
//                             <button onClick={()=>this.addComents()}>send</button>
//                         </div>
//                         <div className="comments_list_items">
//                             {this.state.comments.map(comment => 
//                                 <div key={comment.id} className="comments_item">
//                             <div className="user">
//                                 <div className="users_img"><i class="far fa-user"></i></div>
//                                 <div className="users_name">User name</div>
//                             </div>
//                             <div className="text_comment">
//                                 <span>{comment.comment}</span>
//                             </div>
// 				            </div>)}
//                         </div>
//                     </div>}
//            </Fragment>)}
// }

// export default CommentsList