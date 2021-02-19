import React, { Component } from 'react'

 class Test extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            fields: {},
            errors: {},
            emailid:'',
            mobileno:''
         }
         this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
     }
     handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
      
        }
      
    submituserRegistrationForm(e) {
        console.log(this.validateForm());
                e.preventDefault();
        if (this.validateForm()) {
            console.log(this.state);
           this.setState({fields:this.fields});
            console.log(this.state);
            alert("Form submitted");
        }
  
      }
      validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        
        if (!fields["emailid"]) {
          formIsValid = false;
          errors["emailid"] = "*Please enter your email-ID.";
        }
  
        if (typeof fields["emailid"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["emailid"])) {
            formIsValid = false;
            errors["emailid"] = "*Please enter valid email-ID.";
          }
        }
  
        if (!fields["mobileno"]) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter your mobile no.";
        }
  
        if (typeof fields["mobileno"] !== "undefined") {
          if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter valid mobile no.";
          }
        }
  
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }
     
    render() {
        return (
            <div>
              <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
       
       <label>Email ID:</label>
       <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
       <div className="errorMsg">{this.state.errors.emailid}</div>
       <label>Mobile No:</label>
       <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
       <div className="errorMsg">{this.state.errors.mobileno}</div>
      
       <input type="submit" className="button"  value="Register"/>
       </form>
            </div>
        )
    }
}

export default Test
