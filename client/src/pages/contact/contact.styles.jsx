import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: auto;
    padding-top: 50px;
    padding-bottom: 50px;
    @media (max-width: 450px) and (min-width: 350px) {
        width: 80%;
        margin-left: 10%;
    }
    @media (max-width: 768px) and (min-width: 450px) {
        width: 100%;
        padding-left: 10%;
        padding-right: 10%;
    }
`;

export const ContactTitle = styled.h2`
    margin: 10px 0;
    @media (max-width: 450px) and (min-width: 350px) {
        font-size: 34px;
    }
`;