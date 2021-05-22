import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    height: 100%;
    display: flex;
`;

const Cart = styled.table`
    position: relative;
    width: 100%;
    height: 100%;
`;

const Category = styled.thead`
    font-weight: 600;
`;

const Row = styled.tr`
    display: flex;
    padding: 16px 0;
`;
const Col = styled.td`
    padding: 0 4px;
    &.counter {
        width: 25%;
    }
    &.item-label {
        width: 65%;
    }
    &.price {
        width: 10%;
    }
`;

export { Container, Cart, Category, Row, Col };
