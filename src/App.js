import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
 
import TestComponent from './TestComponent.js';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <TestComponent/>
      </MuiThemeProvider>
    );
  }
}
export default App;
