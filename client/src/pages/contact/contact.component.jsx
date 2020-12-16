import React, {useState, useEffect} from 'react';

import {ContactContainer, ContactTitle} from './contact.styles';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {contactStart} from '../../redux/contact/contact.actions';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {getSuccessOrFail} from '../../redux/contact/contact.selectors';
import SuccessfulMessage from '../../components/successful-message/successful-message.component';
import {useTranslation} from 'react-i18next';

const Contact = ({contactStart, getSuccessOrFail}) => {
    const [t] = useTranslation('common');
    const [contactInfo, setContactInfo] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: ''
    });

    const {firstname, lastname, email, message} = contactInfo;
    
    const handleSubmit = async event => {
        event.preventDefault();        
        contactStart({firstname, lastname, email, message});
        setContactInfo({
            firstname: '',
            lastname: '',
            email: '',
            message: ''
        });
    };

    const handleChange = event => {
        const {value, name} = event.target;
        setContactInfo({...contactInfo, [name]:value});
    };

    // useEffect(() => {
    //     const abortController = new AbortController();
    //     //const signal = abortController.signal; 
        
    //     setTimeout(() => {
    //         //setRenderGetSuccessOrFail(undefined);
            
    //         abortController.abort();
    //         console.log("5 seconds");
    //     }, 5000);
    // }, []);


    return(
        <ContactContainer>
            <ContactTitle>{t('contact.title')}</ContactTitle>
            <form className="contact-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="firstname" value={firstname} onChange={handleChange} autocomplete="off" label={t('contact.firstname')} required />
                <FormInput type="text" name="lastname" value={lastname} onChange={handleChange} autocomplete="off" label={t('contact.lastname')} required />
                <FormInput type="text" name="email" value={email} onChange={handleChange} autocomplete="off" label={t('contact.email')} required />
                <FormInput type="text" name="message" value={message} onChange={handleChange} autocomplete="off" label={t('contact.message')} required />

                <div className="contactButton">
                    <CustomButton type="submit">{t('contact.submit')}</CustomButton>
                </div>
                {
                    getSuccessOrFail
                    ? <SuccessfulMessage /> 
                    : null
                }
            </form>
        </ContactContainer>
    );

};

const mapDispatchToProps = dispatch => ({
    contactStart: (contactInfo) => dispatch(contactStart(contactInfo))
});

const mapStateToProps = createStructuredSelector({
    getSuccessOrFail: getSuccessOrFail
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);