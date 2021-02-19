import React,{Component} from 'react';
import './App.css';
//import axios from 'axios';
//import Greeto from './components/greet'
//import Hello from './components/helloclass'
//import Welcom from './components/welcom'
//import Count from './components/counter'
//import Form from './components/form'
//import Popup from './components/pop'
//import Tst from './components/Test'
//import DemoForm from './components/DemoForm';
//import 'bootstrap/dist/css/bootstrap.min.css';
import IDCS from './components/idcs'
import  AuthAdd from './components/AuthAddressForm'
class App extends Component{
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        showPopup: false,
//        persons:[],
//        regexp : /^[0-9\b]+$/,
//        idcs: ''
//     }
//     this.togglePopup=this.togglePopup.bind(this)
//     this.onHandleIdcsChange = this.onHandleIdcsChange.bind(this);
//   }
//   onHandleIdcsChange(e) {
    	 
//     let idcs = e.target.value;       
//     if (idcs === '' || this.state.regexp.test(idcs)) {
//         this.setState({ [e.target.name]: idcs })
//         let url = "localhost:8080/o/auth/emailandmobile/";
//         let optUrl = url+idcs
//         axios.get(optUrl)
//         .then(res => {   
//           const persons = res.data
//           this.setState({persons})
//           console.log(persons);
//     }) 
//     }
// };
//   togglePopup() {



//     this.setState(prevState => ({
//       showPopup: !prevState.showPopup
//     }));
//   }
render(){
return (
<div className="App">

<p>hllo world</p>

<IDCS/>

{/* <AuthAdd/> */}



























{/* <label>Enter IDCS:</label>
                     <input type="text" id="idcs" placeholder="Enter IDCS"
                        value={this.state.idcs}
                        onChange={this.onHandleIdcsChange} name="idcs" maxLength="10"/>
                            <ul>
                     { this.state.persons.map(person => <li>{person.email}  {person.number}</li>)
                    	 
                     }
                   </ul>
<input type="button" value="click me"  onClick={this.togglePopup}/>
        {this.state.showPopup ? 
          <Popup
            text='Details:'
            closePopup={this.togglePopup}
          />
          : null
        } */}
     



{/* <Form/> */}













  {/* <Count/>
   */}
          {/* <Welcom/><Greeto name="bruc wyane" heroName="batman"/>
         
         <p>kkkkkkk</p>
    
        <Hello name="clarke " heroName="superman"/> */}
   </div>
);
}
}

/* 
//function App() {
//   return (
//     <div className="App">
//       learn 
//          <Greeto name="bruc wyane" heroName="batman"/>
//          <Greeto name="clarke " heroName="superman"/>
      
//         <Hello name="bruc wyane" heroName="batman">
//         <p>kkkkkkk</p>


//         </Hello>
//         <Hello name="clarke " heroName="superman"/>

//     </div>


//   );
// }
 */

export default App;