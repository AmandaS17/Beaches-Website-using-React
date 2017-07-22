import React from 'react';
import Panel from './Panel';

export default class PanelContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        return (
          <div className="panelContainer" id="panels">
            <Panel src="https://media-cdn.tripadvisor.com/media/photo-s/0e/85/48/e6/seven-mile-beach-grand.jpg"/>
            <Panel src="https://media-cdn.tripadvisor.com/media/photo-s/0e/85/48/e6/seven-mile-beach-grand.jpg"/>
            <Panel src="https://media-cdn.tripadvisor.com/media/photo-s/0e/85/48/e6/seven-mile-beach-grand.jpg"/>
          </div>
        )
      }
    }
