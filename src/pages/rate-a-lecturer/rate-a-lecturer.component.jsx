import React from 'react';
import FormContainer from '../../component/form-container/form-container.compoent';
import FormInput from '../../component/form-input/form-input.component';
import CustomButton from '../../component/custom-button/custom-button.component';
import './rate-a-lecturer.style.scss';

 const RateALecturer = () => (
       <div className="content">
        <FormContainer>
            <div className='container' >
            <h2>Rate a Lecturer</h2>
            <FormInput placeholder='Name of Lecturer' />
            <CustomButton type='submit'>SUBMIT</CustomButton>
            </div>
        </FormContainer>
    
        </div>
 );

 export default RateALecturer;