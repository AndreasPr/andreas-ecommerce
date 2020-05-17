import React from 'react';
//import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInContainer, SignInButtons} from './sign-in.styles';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';

class SignIn extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;
        emailSignInStart(email, password);
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]:value });
    };

    render(){
        const {googleSignInStart} = this.props;
        return(
            <SignInContainer>
                <h2>I already have an account </h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' 
                        type='email' 
                        value={this.state.email} 
                        required 
                        label='email'
                        handleChange={this.handleChange}/>
                    
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        required 
                        label='password'
                        handleChange={this.handleChange} />
                    <SignInButtons>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                    </SignInButtons>
                </form>
            </SignInContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);