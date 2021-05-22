import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

const Container = styled.div`
    height: 100%;
    border: solid 1px red;
`;

const Category = styled.div``;

const ImageContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    border-radius: 6px;
    padding: 8px;
    :hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

const Image = styled.img`
    height: 9rem;
    width: 9rem;
    margin: auto;
    border-radius: 6px;
`;

const BSCol = styled(Col)`
    flex-grow: 0;
    margin: 24px 0;
    display: flex;
    justify-content: flex-start;
`;

const BSRow = styled(Row)``;

const Label = styled.div`
    text-align: center;
`;

export { ImageContainer, Container, Category, Image, BSCol, BSRow, Label };
