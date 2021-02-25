import styled from 'styled-components';

const ErrorLabel = styled.div`
    font-size: 30px;
    color: crimson;
    text-align: center;
    width: 100%;
    text-transform: uppercase;
`;

const Error = () => {
    return <ErrorLabel>Error</ErrorLabel>;
};

export default Error;
