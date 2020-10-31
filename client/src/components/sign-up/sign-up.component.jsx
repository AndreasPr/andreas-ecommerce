import React, {useState} from 'react';
import {connect}  from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signUpStart} from '../../redux/user/user.actions';
import {SignUpContainer, SignUpTitle} from './sign-up.styles';
import {useTranslation} from 'react-i18next';

const SignUp = ({signUpStart}) => {
    const [t, i18n] = useTranslation('common');
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
    
        if(password !== confirmPassword){
            alert("Password doesn't match with Confirm Password!") ;
            return;
        }
        signUpStart({displayName, email, password});

    };

    const handleChange = event =>{
        const {value, name} = event.target;
        setUserCredentials({...userCredentials, [name]:value });
    };
    
    return(
        <SignUpContainer>
            <SignUpTitle>{t('signin.signup.heading')}</SignUpTitle>
            <span>{t('signin.signup.sub-heading')}</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type='text' name='displayName' 
                value={displayName} onChange={handleChange} label={t('signin.signup.displayname')} required />
                <FormInput type='email' name='email' 
                value={email} onChange={handleChange} label={t('signin.signup.email')} required />
                <FormInput type='password' name='password' 
                value={password} onChange={handleChange} label={t('signin.signup.password')} required />
                <FormInput type='password' name='confirmPassword' 
                value={confirmPassword} onChange={handleChange} label={t('signin.signup.confirmpassword')} required />
                
                <div className='buttons'>
                    <CustomButton type='submit'>{t('signin.signup.signup')}</CustomButton>
                </div>
            </form>
        </SignUpContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})
export default connect(null, mapDispatchToProps)(SignUp);