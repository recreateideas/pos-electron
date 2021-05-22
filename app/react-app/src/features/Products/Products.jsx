import PropTypes from 'prop-types';
import { Container as BSContainer } from 'react-bootstrap';
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
    const { products } = props;
    const bootstrap = {
        xs: 6,
        md: 4,
        lg: 3
    };
    return (
        <Container>
            <Header {...{ title: 'Products' }} />
            {Object.keys(products).map((categoryName, j) => {
                const category = products[categoryName];
                const { items } = category;
                return (
                    <BSContainer key={j}>
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
                                                <Label>{name}</Label>
                                                <Label className="price">
                                                    ${price}
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
    );
};

Products.displayName = 'Products';

Products.propTypes = {
    products: PropTypes.object
};

export default Products;
