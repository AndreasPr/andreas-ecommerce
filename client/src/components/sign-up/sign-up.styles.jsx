import styled from 'styled-components';

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    @media (max-width: 450px) and (min-width: 350px) {
        width: 100%;
        margin: auto;
    }
`;
export const SignUpTitle = styled.h2`
    margin: 10px 0;
`;