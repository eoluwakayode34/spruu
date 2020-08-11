import React from "react";
import FormContainer from "../../component/form-container/form-container.compoent";
import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import "./find-a-lecturer.style.scss";
import Autosuggest from "react-autosuggest";
import {  Link} from "react-router-dom";
import axios from 'axios'


class FindALecturer extends React.Component {
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
     
      

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions, isLoaded} = this.state;
    const inputProps = {
      placeholder: "Find a Lecturer" ,
      value,
      onChange: this.onChange
    };


    return (
      <div className="content">
        <FormContainer>
          <div className="find-lecturer-container">
            <h2>Find a Lecturer</h2>
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
            className='suggestion-list'
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

export default FindALecturer;
