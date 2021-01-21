import React, {Component} from 'react'
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

const submitTranslations = {
  "english": "Submit",
  "dutch": "Voorleggen"
}

class Button extends Component {
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({language}) => submitTranslations[language]}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {

    return (
      <ColorContext.Consumer>
        {(color) => {
          return this.renderButton(color);
        }}
      </ColorContext.Consumer>
    )
  }
}

export default Button