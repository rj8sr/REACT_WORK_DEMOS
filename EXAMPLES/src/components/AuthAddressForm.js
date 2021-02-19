import axios from "axios";
import React from "react";

import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import ErrorIcon from "@material-ui/icons/Error";
import CheckTwoToneIcon from "@material-ui/icons/CheckTwoTone";

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

class AuthAddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idcs: "",
      telephone: "",
      email: "",
      tooltip: "",
      regexp: /^[0-9\b]+$/,
      authstatus: "",
      emailmask: "",
      mobilemask: "",
      isAlert: false,
      errorMessage: "",
      successMessage: "",
      success: false,
    };
    this.onHandleTelephoneChange = this.onHandleTelephoneChange.bind(this);
    this.onHandleIdcsChange = this.onHandleIdcsChange.bind(this);
    this.onHandleEmailChange = this.onHandleEmailChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onHandleDialogClose = this.onHandleDialogClose.bind(this);
    this.onHandleSucessDialogClose = this.onHandleSucessDialogClose.bind(this);
  }

  onHandleIdcsChange(e) {
    let idcs = e.target.value;
    if (this.state.regexp.test(idcs)) {
      this.setState({ idcs: idcs });
      if (idcs.length === 10) {
        var url = "/o/userAuth/getHintsByIdcs/" + idcs;
        axios.post(url, {}).then((res) => {
          console.log(res.data);
          if (res.data !== "") {
            console.log(res.data);
            this.setState({ authstatus: "VALID" });
            this.setState({ emailmask: res.data.email });
            this.setState({ mobilemask: res.data.mobile });
          } else {
            this.setState({ authstatus: "INVALID" });
            this.setState({ emailmask: "" });
            this.setState({ mobilemask: "" });
          }
        });
      } else {
        this.setState({ authstatus: "" });
        this.setState({ emailmask: "" });
        this.setState({ mobilemask: "" });
      }
    } else {
      this.setState({ isAlert: true });
      this.setState({
        errorMessage: "Please enter valid  10 digit numeric value for IDCS.",
      });
      this.setState({ idcs: "" });
    }
    console.log(this.state.email);
  }

  onHandleDialogClose(e) {
    this.setState({ isAlert: false });
  }

  onHandleSucessDialogClose(e) {
    this.setState({ success: false });
  }

  onHandleTelephoneChange(e) {
    let telephone = e.target.value;
    if (this.state.regexp.test(telephone)) {
      this.setState({ telephone: telephone });
    } else {
      this.setState({ isAlert: true });
      this.setState({
        errorMessage:
          "Please enter valid 10 digit numaric value for Telephone.",
      });
      this.setState({ telephone: "" });
    }
  }

  onHandleEmailChange(e) {
    let email = e.target.value;
    if (email !== "") {
      this.setState({ email: email });
    }
  }

  onSubmit(e) {
    if (
      this.state.regexp.test(this.state.idcs) &&
      this.state.idcs.length === 10
    ) {
      var validInputs = true;
      if (this.state.telephone.length > 0) {
        console.log("1");
        if (
          this.state.regexp.test(this.state.telephone) &&
          this.state.telephone.length !== 10
        ) {
          console.log("2");
          validInputs = false;
          this.setState({ isAlert: true });
          this.setState({
            errorMessage:
              "Please enter valid 10 digit numaric value for Telephone.",
          });
        }
      }
      if (this.state.email.length > 0) {
        console.log("3");
        var pattern = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        if (!pattern.test(this.state.email)) {
          console.log("4");
          validInputs = false;
          this.setState({ isAlert: true });
          this.setState({
            errorMessage: "Please enter valid value for Address email.",
          });
        }
      }

      if (validInputs) {
        this.setState({ success: true });
    //     let url = "/o/userAuth/validateAddress/";
    //     let idcs = this.state.idcs;
    //     let telephone = this.state.telephone;
    //     let email = this.state.email;
    //     console.log(this.state);
    //     axios
    //       .post(url, null, { params: { idcs, telephone, email } })
    //       .then((res) => {
    //         console.log(res.data);
    //         if (res.data) {
    //           this.setState({ success: true });
    //           this.setState({
    //             successMessage: "Your address validation done successfully.",
    //           });
    //         } else {
    //           this.setState({ isAlert: true });
    //           this.setState({
    //             errorMessage: "Fail to validate address for enterd IDCS.",
    //           });
    //         }
    //       });
    //   }
    } else {
      this.setState({ isAlert: true });
      this.setState({
        errorMessage: "Please enter valid  10 digit numeric value for IDCS.",
      });
    }
  }
  }
  render() {
    return (
      <form>
    

        <div className="vspace">
          <div>
            <FormControl>
              <InputLabel htmlFor="idcs">Sisissez NIP</InputLabel>
              <Input
                id="idcs"
                value={this.state.idcs}
                onChange={this.onHandleIdcsChange}
                inputProps={{ maxLength: 10 }}
              />
            </FormControl>
          </div>
          <div className="vspace">
            <FormControl>
              <InputLabel htmlFor="telephone">Numero de telephone</InputLabel>
              <Input
                id="telephone"
                value={this.state.telephone}
                onChange={this.onHandleTelephoneChange}
                inputProps={{ maxLength: 10 }}
              />
            </FormControl>
          </div>
          <div className="addressEmail">
            <FormControl>
              <InputLabel htmlFor="addressemail">Adresse Email</InputLabel>
              <Input id="email" onChange={this.onHandleEmailChange} />
            </FormControl>
          </div>
          <ThemeProvider theme={theme}>
            <div className="vspace">
              <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={this.onSubmit}
              >
                SOUMETTRE
              </Button>
              <Button variant="contained" color="primary" type="button">
                CANCEL
              </Button>
            </div>
          </ThemeProvider>
        </div>
        <div>
          <Dialog open={this.state.isAlert}>
            <DialogTitle>
              <ErrorIcon />
              INVALID Input
            </DialogTitle>
            <DialogContent>{this.state.errorMessage}</DialogContent>
            <DialogActions>
              <Button onClick={this.onHandleDialogClose} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog open={this.state.success}>
            <DialogContent>
              <CheckTwoToneIcon />
              {this.state.successMessage}
            </DialogContent>
            <DialogActions>
              <Button onClick={this.onHandleSucessDialogClose} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </form>
    );
  }
}
export default AuthAddressForm;
