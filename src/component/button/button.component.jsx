import React from 'react';
import './button.style.scss'

const RatingButton = () => (

    
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
        
  
   
)


export default RatingButton;