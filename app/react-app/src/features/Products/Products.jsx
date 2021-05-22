import React, { useEffect } from 'react';
import { Container as BSContainer } from 'react-bootstrap';
import { useDispatch, actions, useSelector, selectors } from '../../redux';
import { Header } from '../../ui-core';
import {
    ImageContainer,
    Container,
    Category,
    Image,
    BSCol,
    BSRow,
    Label
} from './styledComponents';

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
    console.log(products);
    const bootstrap = {
        xs: 6,
        md: 4,
        lg: 3
    };
    return products ? (
        <Container>
            <Header {...{ title: 'Products' }} />
            {Object.keys(products).map(categoryName => {
                const category = products[categoryName];
                const { items } = category;
                return (
                    <BSContainer>
                        <Category>
                            <BSRow>
                                {items.map((item, i) => {
                                    const { name, price, imageUrl } = item;
                                    return (
                                        <BSCol key={i} {...bootstrap}>
                                            <ImageContainer>
                                                <Image
                                                    alt={name}
                                                    src={imageUrl}
                                                />
                                                <Label>
                                                    {name} - ${price}
                                                </Label>
                                            </ImageContainer>
                                        </BSCol>
                                    );
                                })}
                            </BSRow>
                        </Category>
                    </BSContainer>
                );
            })}
        </Container>
    ) : (
        <div>loading products...</div>
    );
};

Products.displayName = 'Products';

export default Products;
