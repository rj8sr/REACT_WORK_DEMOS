import React ,{Component} from 'react'

class welcom extends Component {
    constructor(){
super()
this.state={
message:'hello world new'


    }}
changeMethod() {
    this.setState({
    
    message:'thans for the action'
    
    
    })}

    
    render() {
       
      return (
      <div>
      
      <h1>{this.state.message}</h1>
      <button onClick={()=>this.changeMethod()}>ActionButton</button>
          
     </div>   
          
          
          )
    }
  }
  
  export default welcom;