import React, {useState} from 'react';
import './subscription.styles.css';
import {connect} from 'react-redux';
import {addSubscription} from '../../redux/subscription/subscription.actions';

const Subscription = ({addSubscription}) => {

    const [userInputEmail, setUserInputEmail] = useState({
        email: ''
    });

    const {email} = userInputEmail;

    const handleSubmit = event => {
        event.preventDefault();
        addSubscription({email});
        setUserInputEmail({
            email: ''
        });
    };

    const handleChange = event =>{
        const {value, name} = event.target;
        setUserInputEmail({...userInputEmail, [name]:value });
    };

    return(
        <div className="input-group mb-3">
            <form className='subscription-form' onSubmit={handleSubmit}>
                <input type="email" className="form-control shadow-none" onChange={handleChange} name="email" value={email} placeholder="Enter your email" id="subscribeConnection" required/>
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary btnOfSubscribe" type="submit">Subscribe</button>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addSubscription: (userInputEmail) => dispatch(addSubscription(userInputEmail))
});

export default connect(null, mapDispatchToProps)(Subscription);