import React from 'react';


export default class TopMenuLeft extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        return (
          <div id="topMenuLeft">
            <div className="branding">
              <a href="index.html">Beaches</a>
            </div>
          </div>
        )
      }
    }
