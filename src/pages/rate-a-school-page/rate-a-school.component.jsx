import React from "react";
import FormContainer from "../../component/form-container/form-container.compoent";
import CustomButton from "../../component/custom-button/custom-button.component";
import "./rate-a-school.style.scss";
import Autosuggest from "react-autosuggest";
import { Link } from "react-router-dom";
import axios from 'axios'

class RateASchool extends React.Component {
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
        axios('http://13.244.171.145:4000/spruu/api/v1/user/institutions')
               
        .then(users => {
          const school = users.data.data.filter(name => regex.test(name.name))
          console.log(school) 
          this.setState({
            suggestions: school,
            isLoaded: true
          });
        
        })
       
     
      }catch(e){
        this.setState({
          suggestions: []
        });
      }}

      shouldRenderSuggestions(value) {
        return value.trim().length > 2;
      }
     
      

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions, isLoaded } = this.state;
    const inputProps = {
      placeholder: "Type Name of School",
      value,
      onChange: this.onChange,
    };

    return (
      <div className="content">
        <FormContainer>
          <div className="container">
            <h2>Rate A School</h2>
            <Autosuggest 
        isLoaded={isLoaded}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        shouldRenderSuggestions = {this.shouldRenderSuggestions}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        
        getSuggestionValue={function getSuggestionValue(suggestion) {
          return suggestion.name;
        }}
        renderSuggestion={(suggestion) => {
          return (
            <Link
            to={ `/school-review-result/${suggestion._id}`}
            key={suggestion._id}
            className='suggestion-list'
            >
                          <span className='title-case'>{suggestion.name}</span>
                          <div className='title-case'>{suggestion.state}, {suggestion.country}</div>

            </Link>
          );
        }}
        inputProps={inputProps} /> 
            <CustomButton type="submit" >SUBMIT</CustomButton>
          </div>
        </FormContainer>
      </div>
    );
  }
}

export default RateASchool;