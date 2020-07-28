import React from 'react';
import './button.style.scss'

const RatingButton = (props) => (
    

        <div className="form-group">
            <div className="form-radio__group">
                <label >
                <input type='radio' name={props.name} id='poor'  className='form-radio__input' value='poor' />
                <span className='button red'>Very Poor</span>
                </label>
            </div> 



            <div className="form-radio__group">
                <label>
                <input type='radio' name={props.name} id='fair'  className='form-radio__input' value='fair' />
                <span className='button orange'> Fair</span>
                </label>            
            </div>

            <div className="form-radio__group">
                <label>
                <input type='radio' name={props.name} id='neutral' className='form-radio__input' value='neutral' />
                <span className='button yellow'>Neutral</span>
                </label>                
            </div> 

            <div className="form-radio__group">
            <label>
            <input type='radio' name={props.name} id='good' className='form-radio__input' value='poor' />
            <span className='button lemon'>Good</span>
            </label> 
            </div>  

            <div className="form-radio__group">
                <label>
                <input type='radio' name={props.name} id='excellent' className='form-radio__input' value='poor' />
                <span className='button green'>Excellent</span>
                </label>            
            </div>                 

        </div>

      
        
        
  
   
)


export default RatingButton;