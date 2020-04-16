import React from 'react';
import './button.style.scss'

const RatingButton = ({children}) => (

    <div className='rating-button-container'>
        <h4 className='rating-heading'>{children}</h4>
        <div className="button-group">
            <button type='button' className='button red'>    
                Very Poor
            </button>
            <button type='button' className='button orange'>    
                Fair
            </button>
            <button type='button' className='button yellow'>    
                Neutral
            </button>
            <button type='button' className='button lemon'>    
                Good
            </button>
            <button type='button' className='button green'>    
                Excellent
            </button>

        </div>
        
    </div>
   
)


export default RatingButton;