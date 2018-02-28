// src/App.js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from './components/UI/Navigation'
// import Routes from './routes' <Route />
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createMuiTheme from './styles/theme'
import Map from './components/Map'
import Places from './components/Places'

class App extends Component {
  static childContextTypes = {
    createMuiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { createMuiTheme }
  }

  render() {
    const location = { lat: 0, lng: 0 }
    return (
      <MuiThemeProvider theme={createMuiTheme}>
        <div className="App">
          <Navigation />
          <div style={{width: 300, height: 600}}>
            <Map center={location}/>
          </div>
          <Places />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
