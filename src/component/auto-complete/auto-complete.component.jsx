import React from "react";
import Autosuggest from "react-autosuggest";
import "./auto-complete.style.scss";
import { Link } from "react-router-dom";
import axios from 'axios'




class AutoComplete extends React.Component {
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
      placeholder: "Type name of Lecturer" ,
      value,
      onChange: this.onChange
    };







    return (
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
    );
  }
}



export default AutoComplete;
