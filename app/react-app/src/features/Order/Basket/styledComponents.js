import styled, { css } from 'styled-components';

const Container = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Cart = styled.table`
    margin-top: 8px;
    position: relative;
    width: 100%;
`;

const Category = styled.thead`
    font-weight: 600;
    height: 32px;
    padding: 0 8px;
    display: flex;
    border-bottom: solid 1px lightgrey;
`;

const Row = styled.tr`
    display: flex;
    padding: 16px 0;
    border-radius: 6px;
    margin: 4px;
    ${props => {
        const { isHighlighted } = props;
        return (
            isHighlighted &&
            css`
                background-color: rgba(254, 178, 54, 0.5);
                transition: background-color 0.3s ease;
            `
        );
    }}
`;
const Col = styled.td`
    padding: 0 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &.counter {
        width: 25%;
    }
    &.item-label {
        width: 65%;
    }
    &.price {
        width: 10%;
        padding: 0;
    }
`;

export { Container, Cart, Category, Row, Col };
