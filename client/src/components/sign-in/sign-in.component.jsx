import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInContainer, SignInButtons} from './sign-in.styles';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';

const SignIn  = ({emailSignInStart, googleSignInStart}) => {
    const [t] = useTranslation('common');
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
                <h2>{t('signin.login.heading')}</h2>
                <span>{t('signin.login.sub-heading')}</span>
                <form onSubmit={handleSubmit}>
                    <FormInput name='email' 
                        type='email' 
                        value={email} 
                        required 
                        label={t('signin.login.email')}
                        handleChange={handleChange}/>
                    
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={password} 
                        required 
                        label={t('signin.login.password')}
                        handleChange={handleChange} />
                    <SignInButtons>
                        <CustomButton type='submit'>{t('signin.login.signin')}</CustomButton>
                        {/* <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Google</CustomButton> */}
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