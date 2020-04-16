import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state={
            email: '',
            password: ''
        }
    }







    render(){
        return(

            <div>

           
            <FormInput placeholder='Email'  type="email" 
                name='email' />
            <FormInput placeholder='Password' type="password" />
            <FormInput placeholder='Confirm Password'  type="password"/>
            <CustomButton>SIGN UP</CustomButton>
            </div>
        
        )
    }

}

export default SignUp;