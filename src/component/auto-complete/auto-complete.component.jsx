import React from 'react';
import './auto-complete.style.scss';

export default class AutoComplete extends React.Component{
    constructor(props){
        super(props);


        
            this.items = [
                'Henry',
                 'Olagundoye Emmanuel',
                 'Meyer',
                 'David Oghi',
                 'Abraham',
                 'Daniel',
                 'David',
                 'Dodo',
                 'Dosumu'


            ]

            this.state={
                suggestions: [],
                text: ''
            }
        }
        
            onTextChange = (e) => {
                const value = e.target.value;
                let suggestions = [];

                if(value.length > 0 ){
                    const regex = new RegExp(`^${value}`, 'i');
                     suggestions = this.items.sort().filter(v => regex.test(v));                                       
                }
                this.setState(() => ({suggestions, text:value }))
            }

            suggestionSelected (value){
                this.setState(() => ({
                    text:value,
                    suggestions: []
                }))
            }

            renderSuggestion(){
                 const{suggestions} = this.state;

                 if(suggestions.length === 0 ){
                     return null;
                 }
                 return(
                    <ul>
                    { suggestions.map( (item) => <li onClick={() => this.suggestionSelected(item)} className='suggestion'>{item}</li>  ) }
                            </ul>
                 )
            }
    

    

    render(){
        const {text} = this.state;
        return(
            <div className='autocomplete' >
                <input value={text} type='text' className='search' onChange={this.onTextChange} placeholder='Search for lecturer or school' />
                {this.renderSuggestion()}
            </div>
        )
    }}