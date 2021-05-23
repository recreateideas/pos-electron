import PropTypes from 'prop-types';
import { Container as BSContainer } from 'react-bootstrap';
import { Header } from '../../ui-core';
import {
    ImageContainer,
    Container,
    ScrollContainer,
    Category,
    Image,
    BSCol,
    BSRow,
    Label
} from './styledComponents';

const Products = props => {
    const { products, onClick } = props;
    const bootstrap = {
        xs: 6,
        md: 4,
        lg: 3
    };
    return (
        <Container className="products">
            <Header {...{ title: 'Products' }} />
            <ScrollContainer className="product-grid">
                {Object.keys(products).map((categoryName, j) => {
                    const category = products[categoryName];
                    const { items, label: categoryLabel } = category;
                    return (
                        <BSContainer key={j}>
                            <Category className="category">
                                {categoryLabel}
                            </Category>
                            <BSRow>
                                {items.map((item, i) => {
                                    const { id, name, price, imageUrl } = item;
                                    return (
                                        <BSCol key={i} {...bootstrap}>
                                            <ImageContainer
                                                {...{
                                                    /**
                                                     * To have Products and Orders be able to share state we need to lift the state up from Order
                                                     * but this goes against the requirements of this exercise. Either in Shop or in redux.
                                                     */
                                                    onClick: onClick.bind(
                                                        null,
                                                        id,
                                                        price
                                                    )
                                                }}
                                            >
                                                <Image
                                                    alt={name}
                                                    src={imageUrl}
                                                />
                                                <Label>{name}</Label>
                                                <Label className="price">
                                                    ${price}
                                                </Label>
                                            </ImageContainer>
                                        </BSCol>
                                    );
                                })}
                            </BSRow>
                        </BSContainer>
                    );
                })}
            </ScrollContainer>
        </Container>
    );
};

Products.displayName = 'Products';

Products.propTypes = {
    products: PropTypes.object
};

export default Products;
