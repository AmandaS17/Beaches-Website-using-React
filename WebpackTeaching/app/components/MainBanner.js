import React from 'react';


export default class MainBanner extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div id="banner">
            <div className="mainBanner">
              <img src="http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_720/images/live/p0/52/j5/p052j5kp.jpg"/>
            </div>
          </div>
        )
      }
    }
