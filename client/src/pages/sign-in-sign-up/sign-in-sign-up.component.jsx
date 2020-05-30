import React from 'react';
//import './sign-in-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import {SignInSignUpContainer} from './sign-in-sign-up.styles';

const SignInAndSignUpPage = () => (
    <SignInSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInSignUpContainer>
);

export default SignInAndSignUpPage;