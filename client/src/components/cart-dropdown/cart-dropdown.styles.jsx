import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartdropdownContainer = styled.div`
    position: absolute;
    width: 320px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 50px;
    right: 20px;
    z-index: 5;

    @media (max-width: 450px) and (min-width: 350px) {
        width: 320px;
        right: 0px;
    }
`;

export const CartitemsStyles = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto;

    @media (max-width: 450px) and (min-width: 350px) {
        height: 250px;
        width: 270px;
        overflow-y: scroll;
        z-index: 6;
        -webkit-overflow-scrolling: touch; // mobile safari
        height: calc(100% + 1px);
    }

`;

export const EmptymessageStyles = styled.span`
    font-size: 18px;
    margin: 80px auto;
`;

export const CheckoutButtonStyles = styled(CustomButton)`
    margin-top: auto;
    @media (max-width: 450px) and (min-width: 350px) {
        font-size: 12px;
    }
`;

export const CheckoutPageTotal = styled.div`
    border-top: 1px solid #e5e5e5;
    padding-top: 15px;
    padding-bottom: 15px;
`;
export const CheckoutTotal = styled.span`
    float: left;
    color: #e7ab3c;
`;
export const CheckoutTotalPrice = styled.span`
    float: right;
    color: #e7ab3c;
`;