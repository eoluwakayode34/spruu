import React from 'react';

import RatingButton from '../../component/button/button.component';
import FormInput from '../../component/form-input/form-input.component';
import CustomButton from '../../component/custom-button/custom-button.component';
import {Link} from 'react-router-dom'

import './review.styles.scss'

const Review = ({name}) => (
    <div as='form' className='review-container'>

        <div className='rating-name-container'>
            <h3>IT YOUR TURN TO RATE <br/>
            <span className='name'>john kennedy</span></h3>
        </div>

        <form action="">
        <div className="rating-container">
        <RatingButton>
        Classroom Interaction
        </RatingButton>
        <RatingButton>
        Communication
        </RatingButton>
        <RatingButton>
        Patience
        </RatingButton>
        <RatingButton>
        Knowledge of Medical
        </RatingButton>
        <RatingButton>
        Organization
        </RatingButton>
        <RatingButton>
        Authority
        </RatingButton>
        <RatingButton>
        Compassion
        </RatingButton>
        <RatingButton>
        Rapport
        </RatingButton>
        <RatingButton>
        Difficulty
        </RatingButton>


        </div>

       
        <div>
        <p className='anonymous-text' >Remember, you'll always be anonymous when posting ratings, so there's no downside!</p>

        <div>
        <FormInput 
                type="email" 
                name='email'                
                placeholder='EMAIL (Optional)'
                required/>
        <FormInput 
                type="password" 
                name='password'                
                placeholder='PASSWORD (Optional)'
                required/>
         <FormInput 
                type="password" 
                name='password'                
                placeholder='CONFIRM PASSWORD (Optional)'
                required/>     

            
        </div>

        <div className="terms">
        <input type="checkbox" name="terms" id="agree"/>
        <label htmlFor="agree">I agree to the Terms of Use and Privacy Policy.</label>
        </div>
       
        </div>

        <CustomButton type='submit'>SUBMIT</CustomButton>
        <Link to='/review' className='cancelBtn'>CANCEL</Link>
        

        
        </form>
       

    </div>
    
)
export default Review;