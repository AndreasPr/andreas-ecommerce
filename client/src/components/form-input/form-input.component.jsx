import React from 'react';
import {FormInputGroupStyles, FormInputInputTag, FormInputLabel} from './form-input.styles';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <FormInputGroupStyles>
        <FormInputInputTag onChange={handleChange} {...otherProps}/>
        {
            label ?
            (<FormInputLabel className={otherProps.value.length ? 'shrink' : '' } >
                {label}
            </FormInputLabel>)
            : null
        }
    </FormInputGroupStyles>
)
export default FormInput;