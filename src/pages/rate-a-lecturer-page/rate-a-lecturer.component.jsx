import React from "react";
import FormContainer from "../../component/form-container/form-container.compoent";
import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import "./rate-a-lecturer.style.scss";
import Autosuggest from "react-autosuggest";
import schoolData from "../../data/data";
import {  Link} from "react-router-dom";
import axios from 'axios'

const schoolDetails = schoolData.find((element) => element.title === "lecturer").schoolData
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
  return <Link key={suggestion.id} to={'review/' + suggestion.id} className='search-result__link'> {suggestion.name}<div>{suggestion.subData}</div></Link>;
}

class RateALecturer extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      isLoaded: false
    };    
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {

      const escapedValue = value.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      if (escapedValue === '') {
        this.setState({
          suggestions: []
        });
      }
    
      
      const regex = new RegExp('^' + escapedValue, 'i');
    
      try{
        axios('http://13.244.78.114:4000/spruu/api/v1/user/lecturers')
               
        .then(users => {
          const lecturer = users.data.data.filter(name => regex.test(name.fullName))
          console.log(lecturer) 
          this.setState({
            suggestions: lecturer,
            isLoaded: true
          });
        
        })
       
    console.log(this.state)
      
      }catch(e){
        this.setState({
          suggestions: []
        });
      }}
     
  render() {
    const { value, suggestions, isLoaded } = this.state;
    const inputProps = {
      placeholder: "Rate a lecturer",
      value,
      onChange: this.onChange,
    };

    return (
      <div className="content">
        <FormContainer>
          <div className="container">
            <h2>Rate a Lecturer</h2>
            <Autosuggest 
        isLoaded={isLoaded}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={function getSuggestionValue(suggestion) {
          return suggestion.name;
        }}
        renderSuggestion={(suggestion) => {
          return (
            <Link
            to={ `/lecturer-review-result/${suggestion._id}`}
            key={suggestion._id}
            >
                          <span>{suggestion.fullName}</span>
                          <div>{suggestion.institution}</div>

            </Link>
          );
        }}
        inputProps={inputProps} /> 
            
            <CustomButton type="submit">SUBMIT</CustomButton>
          </div>
        </FormContainer>
      </div>
    );
  }
}

export default RateALecturer;
