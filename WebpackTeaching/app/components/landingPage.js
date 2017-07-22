import React from 'react';
import TopMenu from './TopMenu';
import ContentContainer from './ContentContainer';



export default class LandingPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="frontPage">
        <TopMenu/>
        <ContentContainer/>
      </div>
    )
  }
}
