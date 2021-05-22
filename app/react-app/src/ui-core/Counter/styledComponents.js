import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Button = styled.button`
    border: none;
    height: 32px;
    width: 32px;
    border-radius: 8px;
    :hover,
    :active {
        background-color: rgba(0, 0, 0, 0.15);
    }
`;

const Value = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 4px;
`;

export { Container, Button, Value };
