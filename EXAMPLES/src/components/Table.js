import React, { Component } from 'react'
import ListItem from './components/Table';
 class Table extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              data:tableData
         }
     }
     getData = (rowData) => {
       
          console.log(rowData);
        }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
const ListItem = (props) => {
    return(
       // Using Props handleClick as callback function
             <div onClick={()=> props.handleClick(props.rowData)}>
                   <p> {props.rowData.company} </p>
                   <p> {props.rowData.contact} </p>
                   <p> {props.rowData.country} </p>
              </div>
    );
   }
export default Table
