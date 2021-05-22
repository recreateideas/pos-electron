import React from 'react';
import { Container as BSContainer, Row as BSRow } from 'react-bootstrap';
import { Order, Products } from '../../features';
import { Container, BSCol } from './styledComponents';

const Shop = () => {
    return (
        <Container>
            <BSContainer>
                <BSRow>
                    <BSCol {...{ md: 12, lg: 8 }}>
                        <Products />
                    </BSCol>
                    <BSCol {...{ md: 12, lg: 4 }}>
                        <Order />
                    </BSCol>
                </BSRow>
            </BSContainer>
        </Container>
    );
};

Shop.displayName = 'Shop';

Shop.defaultProps = {};

Shop.propTypes = {};

export default Shop;
