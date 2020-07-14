import styled from 'styled-components';

export const SuccessfulContainer = styled.div`
    margin-top: 5%; 
    padding: 8px 15px 8px 15px;
    background-color: rgb(0, 128, 0);
    color: white;
    text-align: center;
    border-radius: 5px;
    animation: cssAnimation 0s 5s forwards;
    visibility: visible;

    @keyframes cssAnimation {
        to   { visibility: hidden; }
    }
`;