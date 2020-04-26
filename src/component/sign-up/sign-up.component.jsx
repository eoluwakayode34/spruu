import React, {useState} from 'react';
import CustomButton from '../custom-button/custom-button.component';
import EmailInput from "../email-input/email-input.component";
import PasswordInput from "../password-input/password-input.component";

const SignUp = () => {
    
    const [signUp, setSignUp] = useState({
        email: '',
        password: ''
    })
       







 
        return(

            <div>

           
            <EmailInput placeholder='Email'  type="email" 
                name='email' />
            <PasswordInput placeholder='Password' type="password" />
            <PasswordInput   placeholder='Confirm Password'  type="password"/>
            <CustomButton>SIGN UP</CustomButton>
            </div>
        
        )
    

}

export default SignUp;