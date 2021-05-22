import React, { useEffect } from 'react';
import { useDispatch, actions, useSelector, selectors } from '../../redux';
import { Container } from './styledComponents';

const Products = props => {
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
    return products ? <Container>Products</Container> : <div>loading...</div>;
};

Products.displayName = 'Products';

export default Products;
