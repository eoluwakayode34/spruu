import React from 'react';

import RatingButton from '../../component/button/button.component';
import FormInput from '../../component/form-input/form-input.component';
import CustomButton from '../../component/custom-button/custom-button.component';
import {Link} from 'react-router-dom'

import './review.styles.scss'

const Review = (props) => (
    <div as='form' className='review-container'>

        <div className='rating-name-container'>
            <h3>IT YOUR TURN TO RATE <br/>
            <span className='name'>{props.match.params.slug}</span></h3>
        </div>
       

        <form action="">
        <div className="rating-container">
      
        <div className="rating-box">
        <h4 className='rating-heading'> Classroom Interaction</h4>
        <RatingButton></RatingButton>
        </div>

        <div className="rating-box">
        <h4 className='rating-heading'> Communication</h4>
        <RatingButton></RatingButton>
        </div>

        <div className="rating-box">
        <h4 className='rating-heading'>Patience</h4>
        <RatingButton></RatingButton>
        </div>

        <div className="rating-box">
        <h4 className='rating-heading'> Knowledge of Medical</h4>
        <RatingButton></RatingButton>
        </div>

        <div className="rating-box">
        <h4 className='rating-heading'> Organization</h4>
        <RatingButton></RatingButton>
        </div>

        <div className="rating-box">
        <h4 className='rating-heading'>  Authority</h4>
        <RatingButton></RatingButton>
        </div>

        <div className="rating-box">
        <h4 className='rating-heading'>  Compassion</h4>
        <RatingButton></RatingButton>
        </div>

        <div className="rating-box">
        <h4 className='rating-heading'>  Rapport</h4>
        <RatingButton></RatingButton>
        </div>

        <div className="rating-box">
        <h4 className='rating-heading'>   Difficulty</h4>
        <RatingButton></RatingButton>
        </div>

        <div className="">
        <h4 className='rating-heading'>Would you take this Lecturer Again ? </h4>
            <div>

            </div>
        </div>

        <div className="rating-box-review">
        <h4 className='rating-heading'>Review</h4>
        <textarea placeholder='write your review'>
        </textarea>
        </div>

        
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