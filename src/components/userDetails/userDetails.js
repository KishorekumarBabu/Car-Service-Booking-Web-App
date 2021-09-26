import React, { Component } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = {
  textFieldStyle: {
    backgroundColor: "rgb(240, 240, 240)",
    margin: 10,
    "@media only screen and (min-width: 600px)": {
      width: 500
    },
    width: 305,
    "& label.Mui-focused": {
      color: "#339AC2"
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#339AC2"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#339AC2"
      }
    }
  },
  textAreaStyle: {
    minHeight: "56px !important",
    font: "inherit",
    fontSize: 16,
    borderRadius: 2,
    backgroundColor: "rgb(240, 240, 240)",
    margin: 10,
    "@media only screen and (min-width: 600px)": {
      width: 500
    },
    width: 305,
    "&:hover": {
      borderColor: "#339AC2"
    },
    "&:focus": {
      borderColor: "#339AC2"
    },
    padding: "18.5px 14px"
  },
  buttonContainer: {
    margin: 10,
    "@media only screen and (min-width: 600px)": {
      width: 500
    },
    width: 305,
    textAlign: "center"
  },
  buttonStyle: {
    backgroundColor: "#339AC2",
    border: 1,
    borderRadius: 25,
    color: "#ffffff"
  },
  formStyle: {
    padding: "35px 0 !important",
    minHeight: "100%"
  }
};

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobileNumber: "",
      emailId: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMobileNumberChange = this.handleMobileNumberChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleMobileNumberChange(e) {
    const mobileNumber = e.target.value;
    const regexp = /^[0-9\b]+$/;

    // if value is not blank, then test the regex
    if (
      mobileNumber === "" ||
      (mobileNumber.length < 11 && regexp.test(mobileNumber))
    ) {
      this.setState({ [e.target.name]: mobileNumber });
    }
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.mobileNumber.length < 10) {
      this.setState({ error: true });
    }
    console.log(this.state);
    console.log("onSubmit");
  }

  render() {
    const { classes } = this.props;
    const { name, mobileNumber, emailId, message, error } = this.state;
    return (
      <Grid item xs={12} lg={6} className={classes.formStyle}>
        <form onSubmit={this.onSubmit} autoComplete="off">
          <TextField
            id="outlined-basic 1"
            name="name"
            className={classes.textFieldStyle}
            placeholder="YOUR NAME"
            variant="outlined"
            onChange={this.handleChange}
            value={name}
            required
          />
          <TextField
            id="outlined-basic 2"
            name="emailId"
            className={classes.textFieldStyle}
            placeholder="YOUR EMAIL"
            variant="outlined"
            onChange={this.handleChange}
            value={emailId}
            type="email"
          />
          <TextField
            id="outlined-basic 3"
            name="mobileNumber"
            className={classes.textFieldStyle}
            placeholder="YOUR CONTACT NO."
            variant="outlined"
            error={error}
            onChange={this.handleMobileNumberChange}
            value={mobileNumber}
            helperText={error ? "Please Enter Valid Mobile Number" : ""}
            required
          />
          <TextareaAutosize
            id="message"
            name="message"
            className={classes.textAreaStyle}
            rowsMax={3}
            placeholder="YOUR MESSAGE."
            onChange={this.handleChange}
            value={message}
            required
          />
          <div className={classes.buttonContainer}>
            <Button
              type="submit"
              className={classes.buttonStyle}
              size="large"
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </form>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(UserDetails);
