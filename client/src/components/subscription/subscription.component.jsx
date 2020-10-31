import React, {useState} from 'react';
import './subscription.styles.css';
import {connect} from 'react-redux';
import {addSubscription} from '../../redux/subscription/subscription.actions';
import emailjs from 'emailjs-com';
import {useTranslation} from 'react-i18next';

const Subscription = ({addSubscription}) => {

    const [t, i18n] = useTranslation('common');
    const [userInputEmail, setUserInputEmail] = useState({
        email: ''
    });
    const {email} = userInputEmail;

    
    const [sendEmail, setSendEmail] = useState({
        reply_to: '',
        from_name: 'Andreas.',
        to_name: 'Our New Subscriber',
        message_html: '<h1>We are so grateful you have joined us.</h1>'
     });


     const handleSubmit = event => {
        event.preventDefault();
        addSubscription({email});
        setUserInputEmail({
            email: ''
        });

        var service_id = "default_service";
        var template_id = "template_8Et5Rf44";
        var user_id = "user_TWYEmbkpe89OoQJEh7SSp";
        emailjs.send(service_id, template_id, sendEmail, user_id);
    };


    const handleChange = event =>{
        const {value, name} = event.target;
        setUserInputEmail({...userInputEmail, [name]:value });
        setSendEmail({...sendEmail, reply_to:value});
    };

    return(
        <form className='subscription-form' onSubmit={handleSubmit}>
            <input type="email" className="form-control shadow-none" onChange={handleChange} name="email" value={email} placeholder={t('footer.newsletter.placeholder')} id="subscribeConnection" required/>
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary btnOfSubscribe" type="submit">{t('footer.newsletter.button')}</button>
            </div>
        </form>
    );
};

const mapDispatchToProps = dispatch => ({
    addSubscription: (userInputEmail) => dispatch(addSubscription(userInputEmail))
});

export default connect(null, mapDispatchToProps)(Subscription);