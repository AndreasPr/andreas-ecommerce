import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInContainer, SignInButtons} from './sign-in.styles';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';

const SignIn  = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setUserCredentials] = useState({email: '', password: ''});
    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const {value, name} = event.target;
        setUserCredentials({ ...userCredentials, [name]:value });
    };

        return(
            <SignInContainer>
                <h2>I already have an account </h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput name='email' 
                        type='email' 
                        value={email} 
                        required 
                        label='email'
                        handleChange={handleChange}/>
                    
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={password} 
                        required 
                        label='password'
                        handleChange={handleChange} />
                    <SignInButtons>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Google</CustomButton>
                    </SignInButtons>
                </form>
            </SignInContainer>
        );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);