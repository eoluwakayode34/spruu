import React from 'react';
import SignIn from '../../component/sign-in/sign-in.component';

import FormContainer from '../../component/form-container/form-container.compoent';
import './sign-in-and-sign-up.style.scss';

const SignInSignUp = () => (

   

    <div className="sign-in-and-sign-up">
        <FormContainer>
            <div className='button-box'>
                <div className="button-toggle">LOGIN</div>
                
                
            </div>

        <div className="sign-container">
           <div className="input-group" > 
           <SignIn />
           </div>        
        
        </div>
        </FormContainer>
    </div>

);



export default SignInSignUp;