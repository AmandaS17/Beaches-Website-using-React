import React from 'react';
import TopMenuLeft from './TopMenuLeft'
import TopMenuRight from './TopMenuRight'


export default class TopMenu extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div className="topMenu">
            <TopMenuLeft/>
            <TopMenuRight/>
          </div>
        )
    }
}
