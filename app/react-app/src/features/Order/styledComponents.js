import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const ScrollContainer = styled.div`
    position: relative;
    height: 100%;
    overflow-y: auto;
`;

export { Container, ScrollContainer };
