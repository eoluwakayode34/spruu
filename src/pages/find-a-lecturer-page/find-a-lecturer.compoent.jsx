import React from "react";
import FormContainer from "../../component/form-container/form-container.compoent";
import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import "./find-a-lecturer.style.scss";
import Autosuggest from "react-autosuggest";
import schoolData from "../../data/data";
import {  Link} from "react-router-dom";

const schoolDetails = schoolData.find((element) => element.title === "lecturer").schoolData

console.log(schoolDetails);
const data = schoolDetails;

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return data.filter((data) => regex.test(data.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return <Link key={suggestion.id} to={suggestion.url + '/' + suggestion.id} className='search-result__link'> {suggestion.name}<div>{suggestion.subData}</div></Link>;
}

class FindALecturer extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Find a lecturer",
      value,
      onChange: this.onChange,
    };

    return (
      <div className="content">
        <FormContainer>
          <div className="container">
            <h2>Find a Lecturer</h2>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />           
            <CustomButton type="submit">SUBMIT</CustomButton>
          </div>
        </FormContainer>
      </div>
    );
  }
}

export default FindALecturer;
