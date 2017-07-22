import React from 'react';


export default class TopMenuRight extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        return (
          <div id="topMenuRight">
            <div className="topMenuItem">
              <a href= '#frontPage'>Home</a>
            </div>
            <div className="topMenuItem">
              <a href="#gridBox">Pics</a>
            </div>
            <div className="topMenuItem">
              <a href="#panels">Info</a>
            </div>
            <div className="topMenuItem">
              <a href="#userProfileForm">Visit</a>
            </div>
            <div className="topMenuItem">
              <a href="#submitButton">More</a>
            </div>
          </div>
        )
      }
    }
