import React from 'react';
import {SuccessfulContainer} from './successful-message.styles';
const SuccessfulMessage = ({content}) => (
        <SuccessfulContainer>
            {content}
        </SuccessfulContainer>
);
export default SuccessfulMessage;