import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

const Container = styled.div`
    display: flex;
    height: 100%;
    overflow: auto;
`;

const BSCol = styled(Col)`
    padding: 0%;
    overflow: hidden;
    height: 100%;
`;

const BSRow = styled(Row)`
    border: solid 1px grey;
    height: 100%;
`;

export { Container, BSCol, BSRow };
