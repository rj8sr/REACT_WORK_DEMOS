import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
export class idcs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idcs: "",
      telephone: "",
      otpGenrated: "",
      otpVerified: "",
      otp: "",
      regexp: /^[0-9\b]+$/,
      value: true,
    };
    this.onHandleTelephoneChange = this.onHandleTelephoneChange.bind(this);
    this.onHandleIdcsChange = this.onHandleIdcsChange.bind(this);
    //    this.generateOtp = this.generateOtp.bind(this);
    this.backToMenu = this.backToMenu.bind(this);

    this.submitOtp = this.submitOtp.bind(this);
    this.setOtp = this.setOtp.bind(this);
  }
  onHandleTelephoneChange(e) {
    let telephone = e.target.value;
    if (telephone === "" || this.state.regexp.test(telephone)) {
      this.setState({ [e.target.name]: telephone });
    }
  }
  submitOtp(e) {
    this.setState({ value: false });
  }
  onHandleIdcsChange(e) {
    let idcs = e.target.value;
    if (idcs === "" || this.state.regexp.test(idcs)) {
      this.setState({ [e.target.name]: idcs });
    }
  }
  setOtp(e) {
    let otpVal = e.target.value;
    this.setState({ otp: otpVal });
  }
  backToMenu(e) {
    this.idcs.value = "";
    this.setState({
      idcs: "",
    });
  }
  render() {
    return (
      <div id="outer">
        <FormControl>
          <TextField
          className="inner"
            inputRef={(el) => (this.idcs = el)}
            id="idcs"
            label="Enter IDCS"
            onChange={this.onHandleIdcsChange}
            inputProps={{ maxLength: 10 }}
          />
          <TextField
          className="inner"
            inputRef={(el) => (this.telephone = el)}
            id="telephone"
            label="Enter Telephone"
            onChange={this.onHandleTelephoneChange}
            inputProps={{ maxLength: 10 }}
          />

          <div className="inner">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={this.generateOtp}
            >
              Generate OTP
            </Button>
          </div>

          <TextField
         
            inputRef={(el) => (this.otp = el)}
            id="otp"
            label="Enter OTP"
            onChange={this.setOtp}
            inputProps={{ maxLength: 10 }}
          />

          <div className="inner">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={this.submitOtp}
            >
              Submit
            </Button>
            &nbsp;&nbsp;
            <Button
              variant="contained"
              color="primary"
              className="button"
              onClick={this.backToMenu}
              type="submit"
            >
              Cancel
            </Button>
          </div>
          <div className="inner">
            <Button
              disabled={this.state.value}
              variant="contained"
              color="primary"
              className="button"
              type="Submit"
            >
              Download
            </Button>
          </div>
        </FormControl>
      </div>
    );
  }
}

export default idcs;
