import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
 
import TestComponent from './TestComponent.js';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <TestComponent/>
        </MuiThemeProvider>
      </div>
    );
  }
}
injectTapEventPlugin();
export default App;
