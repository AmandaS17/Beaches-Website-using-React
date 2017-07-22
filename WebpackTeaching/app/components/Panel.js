import React from 'react';


export default class Panel extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        return (
            <div className="panel">
              <div className="panelBanner">
                <img src={this.props.src}/>
              </div>
              <div className="panelText">
                This is a beach. Beaches are fun.
              </div>
            </div>
        )
      }
    }
