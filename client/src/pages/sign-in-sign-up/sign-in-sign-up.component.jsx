import React from 'react';
import './sign-in-sign-up.styles.css';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className="container-fluid containerSignInSignUp">
        <div className="row">
            <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-7 offset-md-3 col-lg-5 ml-lg-auto col-xl-3 offset-xl-6  containerSignIn">
                <SignIn />
            </div>
            <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-7 offset-md-3 col-lg-5 ml-lg-auto col-xl-3 mr-xl-auto  containerSignUp">
                <SignUp />
            </div>
        </div>
    </div>
);

export default SignInAndSignUpPage;