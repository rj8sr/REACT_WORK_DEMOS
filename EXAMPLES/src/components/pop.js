import React, { Component } from 'react'

 class pop extends Component {
        render() {
        return (
            <div className='popup'>
            <div className='popup_inner'>
              <h1>{this.props.text}</h1>
              <label>Your Email:</label><br/>
              <input type='text' /><br/><br/>
           
              <br/>
              <label>Your Number:</label>
              <br/>
              <input type='text' /><br/>
            
              <br/>
              <br/>
            <button onClick={this.props.closePopup}>close me</button>
            </div>
          </div>
         
        )
    }
}

export default pop
