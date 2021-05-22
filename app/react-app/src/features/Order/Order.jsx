import React from 'react';
import { Container } from './styledComponents';
import { Header } from '../../ui-core';

const Order = props => {
    return (
        <Container>
            <Header {...{ title: 'Order' }} />
        </Container>
    );
};

Order.displayName = 'Order';

export default Order;
