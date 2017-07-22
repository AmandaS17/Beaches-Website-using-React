import React from 'react';
import PanelContainer from './PanelContainer.js'
import MainBanner from './MainBanner'
import ImagesGrid1 from './ImagesGrid1'
import UserProfileForm from './UserProfileForm'
import Divider from './Divider'


export default class ContentContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div className="contentContainer">
            <MainBanner/>
            <ImagesGrid1 title="Some Beaches"/>
            <PanelContainer/>
            <ImagesGrid1 title="Some More Beaches"/>
            <UserProfileForm/>
          </div>
        )
      }
    }
