import { useRef, useEffect } from 'react';
import { Container as BSContainer } from 'react-bootstrap';
import { useDispatch, actions, useSelector, selectors } from '../../redux';
import { Order, Products } from '../../features';
import { Loader } from '../../ui-core';
import { Container, BSCol, BSRow } from './styledComponents';

const Shop = () => {
    const ordersRef = useRef();
    const dispatch = useDispatch();
    const {
        data: { getProducts }
    } = actions;
    const { data: dataSelectors } = selectors;
    const products = useSelector(dataSelectors.products);
    useEffect(() => {
        dispatch(getProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);
    const addItem = (...args) => {
        ordersRef.current.addItem(...args);
    };
    return products ? (
        <Container>
            <BSContainer fluid>
                <BSRow>
                    <BSCol {...{ md: 12, lg: 8 }}>
                        <Products {...{ products, onClick: addItem }} />
                    </BSCol>
                    <BSCol {...{ md: 12, lg: 4 }}>
                        <Order {...{ ref: ordersRef, products }} />
                    </BSCol>
                </BSRow>
            </BSContainer>
        </Container>
    ) : (
        <Loader {...{ message: 'loading products...' }} />
    );
};

Shop.displayName = 'Shop';

Shop.defaultProps = {};

Shop.propTypes = {};

export default Shop;
