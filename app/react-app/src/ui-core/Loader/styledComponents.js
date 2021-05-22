import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    .react-spinner-material {
        margin: auto;
    }
`;

const Message = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    top: calc(50% + 40px);
`;

export { Container, Message };
