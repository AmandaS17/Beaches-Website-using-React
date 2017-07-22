import React from 'react';
import ReactDOM from 'react-dom';

import IndexPage from './components/IndexPage';
import LandingPage from './components/LandingPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('./sass/braincubator.sass');

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


ReactDOM.render(
    <MuiThemeProvider>
        <LandingPage/>
    </MuiThemeProvider>,
    document.getElementById('app')
)

//jsx javascript + XML
