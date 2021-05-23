import { forwardRef, useReducer, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { Container, ScrollContainer } from './styledComponents';
import Checkout from './Checkout';
import { Header } from '../../ui-core';
import Basket from './Basket';

const Order = forwardRef((props, ref) => {
    const { products } = props;
    const [orderStatus, addToOrder] = useReducer((oldState, update) => {
        if (update) {
            return {
                ...oldState,
                ...update
            };
        }
        return undefined;
    }, {});
    /**
     * To have Products and Orders be able to share state we need to lift the state up from Order
     * but this goes against the requirements of this exercise. Either in Shop or in redux.
     */
    useImperativeHandle(
        ref,
        () => ({
            addItem: (id, price) => {
                const countValue = (orderStatus[id]?.countValue || 0) + 1;
                const itemValue = countValue * price;
                addToOrder({ [id]: { countValue, itemValue } });
            }
        }),
        [orderStatus]
    );
    return (
        <Container className="order">
            <Header {...{ title: 'Order' }} />
            <ScrollContainer className="scroll-container">
                <Basket {...{ products, orderStatus, addToOrder }} />
            </ScrollContainer>
            <Checkout {...{ orderStatus }} />
        </Container>
    );
});

Order.displayName = 'Order';

Order.propTypes = {
    products: PropTypes.object
};

export default Order;
