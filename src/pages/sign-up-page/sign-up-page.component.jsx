import React from 'react';
import SignUp from '../../component/sign-up/sign-up.component'; 
import FormContainer from '../../component/form-container/form-container.compoent';

const SignUpPage = () => (

    <div className="sign-in-and-sign-up">

    
<FormContainer>
<div className='button-box'>
    <div className="button-toggle">SIGN UP</div>
    
    
</div>

<div className="sign-container">
<div className="input-group">        

<SignUp />
</div>      

</div>
</FormContainer>
</div>
);


export default SignUpPage;