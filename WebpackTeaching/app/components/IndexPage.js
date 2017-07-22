import React from 'react';


const style = {
}


// creates a new component
export default class IndexPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){

        return (
          <div id="frontPage">

          <div className="content">
            <div className="mainBanner">
            </div>
            <div className="panelContainer">
              <div className="panel">
                <div className="panelBanner">
                </div>
                <div className="panelText">
                </div>
              </div>
              <div className="panel">
                <div className="panelBanner">
                </div>
                <div className="panelText">
                </div>
              </div>
              <div className="panel">
                <div className="panelBanner">
                </div>
                <div className="panelText">
                </div>
              </div>
            </div>
          </div>
          </div>
        )
    }
}
