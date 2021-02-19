import React, { Component } from "react";

class hellu extends Component {
  render() {
      console.log(this.props)
    return (
    <div>
    
    <h1>{this.props.name}  ..c..  {this.props.heroName} </h1>
   <h6> {this.props.children} ..helloworld ...</h6>
        
   </div>   
        
        
        )
  }
}

export default hellu;
