import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

const Container = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: solid 1px grey;
`;

const ScrollContainer = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

const Category = styled.thead`
    font-size: 24px;
    font-weight: 600;
`;

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
    width: inherit;
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

export {
    ImageContainer,
    Container,
    Category,
    Image,
    BSCol,
    BSRow,
    Label,
    ScrollContainer
};
