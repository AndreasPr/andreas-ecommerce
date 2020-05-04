import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartdropdownContainer = styled.div`
    position: absolute;
    width: 340px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`;

export const CartitemsStyles = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const EmptymessageStyles = styled.span`
    font-size: 18px;
    margin: 80px auto;
`;

export const CheckoutButtonStyles = styled(CustomButton)`
    margin-top: auto;
`;