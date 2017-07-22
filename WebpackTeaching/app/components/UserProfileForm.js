import React from 'react'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import NumberOfPpl from './NumberOfPpl';
import SubmitButton from './SubmitButton'
import $ from 'jquery'


const styles = {
  raisedbutton: {
    margin: 12,
  },
  block: {
    maxWidth: 300,
  },
  radioButton: {
    marginBottom: 16,
  },
};


export default class UserProfileForm extends React.Component{
  constructor(props){
    super(props);
    const submittedData = [];
    this.state = {submittedData};

    this.firstname = "";
    this.getFirstNameData = this.getFirstNameData.bind(this);
    this.lastname = "";
    this.getLastNameData = this.getLastNameData.bind(this);
    this.email = "";
    this.getEmailData = this.getEmailData.bind(this);
    this.numppl = 3;
    this.userSubmitted = this.userSubmitted.bind(this);
  }

  componentDidMount(){
    console.log("mounted")
    $.ajax({
      "url": "http://localhost:8080/user_profile",
      "crossDomain": true,
      "async": true,
      "method": "GET",
      "types": "json",
    }).done(
      function(response){
        console.log("this is a response " + response)
        this.setState({submittedData: response})
        console.log('data2')
      }.bind(this)
    )
  }

  getFirstNameData(e, text){
    this.firstname = text
  }

  getLastNameData(e, text){
    this.lastname = text
  }

  getEmailData(e, text){
    this.email = text
  }

  userSubmitted(){
    var previousState = this.state.submittedData;
    previousState.push({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      numppl: 3,
    })
    this.setState({submittedData: previousState})

    $.ajax({
      "url": "http://127.0.0.1:8000/user_profile/",
      "crossDomain": true,
      "async": true,
      "method": "POST",
      "types": "json",
      "data": {
        "firstname": this.firstname,
        "lastname": this.lastname,
        "email": this.email,
        "numppl": this.numppl,
      }
    })

  }

  render(){
    console.log(this.state)

    var theListOfItems=this.state.submittedData.map(
      (data) => {
        return (
          <ListItem primaryText = {data.firstname, data.lastname, data.email, data.numppl}/>
        )
      }
    );

    return(
      <div id="userProfileForm">
      <h1>Want to relax on a beach?</h1>
      Enter your information:
      <div id="whichHouse">
        <div className = "buttonQuestion">
          Which beach?
        </div>
        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" className = "buttons" >
          <RadioButton
            value="hot"
            label="hot"
            style={styles.radioButton}
            onChange={this.getHouseData}
            />
            <RadioButton
              value="canada"
              label="canada"
              style={styles.radioButton}
              onChange={this.getHouseData}
              />
        </RadioButtonGroup>
      </div>
      <div id="name">
        <div id="firstname">
          <TextField
            hintText="Enter first name here"
            floatingLabelText="What is your first name?"
            onChange = {this.getFirstNameData}
          />
        </div>
        <div id="lastname">
          <TextField
            hintText="Enter last name here"
            floatingLabelText="What is your last name?"
            onChange = {this.getLastNameData}
          />
        </div>
      </div>
      <div id="email">
          <TextField
            hintText="Enter your email here"
            floatingLabelText="What is your email?"
            onChange = {this.getEmailData}
          />
      </div>
      <div id="numPpl">
          <NumberOfPpl/>
      </div>
      <div id="startDate">
        <DatePicker hintText="Arrival" floatingLabelText="What day would you like to arrive?"/>
      </div>
      <div id="startDate">
        <DatePicker hintText="Depature" floatingLabelText="What day would you like to depart?"/>
      </div>
      <div id="addInfo">
          <TextField
            hintText="Any other important details?"
            floatingLabelText="Additional Details"
            onChange = {this.getEmailData}
          />
      </div>
      <div id="submitButton">
        <RaisedButton label="Submit" primary={true} style={styles.raisedbutton} onTouchTap ={this.userSubmitted}/>
      </div>
      <List>
        {theListOfItems}
      </List>
    </div>
    )
  }
}
