import styled from 'styled-components';

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;
    -webkit-overflow-scrolling: touch;
`;

export const CartItemImageStyles = styled.img`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: flex-start; /* new */
`;

export const CartItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`;

export const CartItemName = styled.span`
    font-size: 16px;
    padding-bottom: 10px;
`;
export const CartItemMultiple = styled.span`
    color: #e7ab3c;
`;
