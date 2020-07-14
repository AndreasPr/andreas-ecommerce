import React, {useState, useEffect} from 'react';

import {ContactContainer, ContactTitle} from './contact.styles';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {contactStart} from '../../redux/contact/contact.actions';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {getSuccessOrFail} from '../../redux/contact/contact.selectors';
import SuccessfulMessage from '../../components/successful-message/successful-message.component';


const Contact = ({contactStart, getSuccessOrFail}) => {
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

    //const [renderGetSuccessOrFail, setRenderGetSuccessOrFail] = useState(getSuccessOrFail);

    useEffect(() => {
        const abortController = new AbortController();
        //const signal = abortController.signal; 
        
        setTimeout(() => {
            //setRenderGetSuccessOrFail(undefined);
            
            abortController.abort();
            console.log("5 seconds");
        }, 5000);
    }, []);


    return(
        <ContactContainer>
            <ContactTitle>Contact Us</ContactTitle>
            <form className="contact-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="firstname" value={firstname} onChange={handleChange} autocomplete="off" label="Firstname" required />
                <FormInput type="text" name="lastname" value={lastname} onChange={handleChange} autocomplete="off" label="Lastname" required />
                <FormInput type="text" name="email" value={email} onChange={handleChange} autocomplete="off" label="Email" required />
                <FormInput type="text" name="message" value={message} onChange={handleChange} autocomplete="off" label="Message" required />

                <div className="contactButton">
                    <CustomButton type="submit">Submit</CustomButton>
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