import React from "react";
import Autosuggest from "react-autosuggest";
import "./auto-complete.style.scss";
import { Link } from "react-router-dom";
// import SchoolData from "../../data/data";

// const schoolData = SchoolData;

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  const response = await fetch('http://13.244.78.114:4000/spruu/api/v1/user/lecturers');
  const data = await response.json();
  
  // return data.data
  //   .filter((data) => {
  //     return {
  //       title: data.institution,
  //       schoolData: data.filter((language) =>
  //         regex.test(language.fullName)
  //       ),
  //     };
  //   })
  //   .filter((data) => data.data.length > 0);


    
  return data
    .map((section) => {
      return {
        title: section.title,
        schoolData: section.schoolData.filter((language) =>
          regex.test(language.name)
        )
      };
    })
    .filter((section) => section.schoolData.length > 0);
  
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <Link
      to={suggestion.url + "/" + suggestion._id}
      key={suggestion._id}
      className="search-result__link"
    >
      {suggestion.name} <div>{suggestion.subData}</div>
    </Link>
  );
}

function renderSectionTitle(section) {
  return <strong>{section.title}</strong>;
}

function getSectionSuggestions(section) {
  return section.schoolData;
}

class asdn extends React.Component {
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
      placeholder: "Search for Lecturer of School",
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        multiSection={true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
        inputProps={inputProps}
      />
    );
  }
}

export default asdn;
