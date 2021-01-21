import './App.css';
import React, {Component} from 'react'
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";


class App extends Component {

  state = {language: 'english'}

  onLanguageChange = language => {
    this.setState({language: language})
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select Language
          <br/>
          <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
          <span> ({this.state.language})</span>
        </div>
        <ColorContext.Provider value={"red"}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate/>
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  }
}

export default App;
