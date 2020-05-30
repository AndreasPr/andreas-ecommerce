import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;
export const CheckoutItemImageStylesContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`;
export const CheckoutItemImageStyles = styled.img`
    width: 100%;
    height: 100%;
`;
export const CheckoutItemNameStyles = styled.span`
    width: 23%;
`;
export const CheckoutItemQuantityStyles = styled.span`
    width: 23%;
    display: flex;
`;
export const CheckoutItemArrowStyles = styled.div`
    cursor: pointer;
`;
export const CheckoutItemValueStyles = styled.span`
    margin: 0 10px;
`;
export const CheckoutItemPriceStyles = styled.div`
    width: 23%;
`;
export const CheckoutItemRemoveButtonStyles = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;