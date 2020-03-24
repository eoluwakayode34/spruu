import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.style.scss';

import {Link} from 'react-router-dom';

class SignIn extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value })
    }

    render(){
        return(
            <div className="sign-in">
           
            <form action="" onSubmit={this.handleSubmit}>
                <FormInput 
                type="email" 
                name='email' 
                onChange={this.handleChange}
                value={this.state.email} 
                placeholder='Email'
                required/>
            
                <FormInput type="password"
                 name='password' 
                 placeholder='Password'

                 value={this.state.password}
                onChange={this.handleChange}
                required/>

            <CustomButton type='submit' > SIGN IN </CustomButton>
            </form>

            <div className="forget-password">
                <div className='b-r flex-1 mt' > Forget my Password? </div>
                <div className='flex-1 mt' >  Don’t have an account?
                    <Link href='#signUp' className='sign-up-link' >Sign Up</Link>
                </div>
            </div>


            </div>
        )
    }
}

export default SignIn;