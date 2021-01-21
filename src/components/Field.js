import React, {Component} from 'react'
import LanguageContext from "../context/LanguageContext";

const nameTranslations = {
  "english": "Name",
  "dutch": "Naam"
}

class Field extends Component {
  static contextType = LanguageContext
  render() {
    return (
      <div className={"ui field"}>
        <label>{nameTranslations[this.context]}</label>
        <input />
      </div>
    )
  }
}

export default Field