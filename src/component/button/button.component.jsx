import React, {useState} from 'react';
import './button.style.scss'

const RatingButton = (props) => {
    const [selected, setSelected] = useState({
        name: '',
        option: ''
    })
    const onFieldChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setSelected({option: e.target.value,
                    name: e.target.name})


        props.handleChange(fieldName, fieldValue)
    }

    

        return(
            <div className="form-group">
            <div className="form-radio__group">
                <label >
                <input type='radio' name={props.name} 
                id='poor'  
                className='form-radio__input' 
                value='1'
                checked={selected.option === '1'}
                onChange={onFieldChange} />
                <span className='button red'>Very Poor</span>
                </label>
            </div> 



            <div className="form-radio__group">
                <label>
                <input type='radio' 
                name={props.name} 
                id='fair'  
                className='form-radio__input' 
                value='2'
                checked={selected.option === '2'}
                onChange={onFieldChange} />
                <span className='button orange'> Fair</span>
                </label>            
            </div>

            <div className="form-radio__group">
                <label>
                <input type='radio' 
                name={props.name} 
                id='neutral' className='form-radio__input' 
                value='3'
                checked={selected.option === '3'}
                onChange={onFieldChange}/>
                <span className='button yellow'>Neutral</span>
                </label>                
            </div> 

            <div className="form-radio__group">
            <label>
            <input type='radio' 
            name={props.name} 
            id='good' 
            className='form-radio__input' 
              value='4'
            checked={selected.option === '4'}
            onChange={onFieldChange} />
            <span className='button lemon'>Good</span>
            </label> 
            </div>  

            <div className="form-radio__group">
                <label>
                <input 
                type='radio' 
                name={props.name} 
                id='excellent' 
                className='form-radio__input' 
                  value='5'
                checked={selected.option === '5'}
                onChange={onFieldChange} />
                <span className='button green'>Excellent</span>
                </label>            
            </div>                 

        </div>

      
        
        
  
   
        )
}


export default RatingButton;