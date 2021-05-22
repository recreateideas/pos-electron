import PropTypes from 'prop-types';
import { Container, Cart, Category, Row, Col } from './styledComponents';
import { Counter } from '../../../ui-core';

const Basket = props => {
    const { products, orderStatus, addToOrder } = props;
    return (
        <Container className="basket">
            {Object.keys(products).map((categoryName, j) => {
                const category = products[categoryName];
                const { items, label: categoryLabel } = category;
                return (
                    <Cart key={j}>
                        <Category>
                            <tr>
                                <td colSpan={3}>{categoryLabel}</td>
                            </tr>
                        </Category>
                        <tbody className="category">
                            {items.map((item, i) => {
                                const { name, id, price } = item;
                                const { countValue = 0, itemValue = 0 } =
                                    orderStatus[id] || {};
                                const onChange = count =>
                                    addToOrder({
                                        [id]: {
                                            countValue: Math.max(0, count),
                                            itemValue:
                                                price * Math.max(0, count)
                                        }
                                    });
                                return (
                                    <Row
                                        key={i}
                                        className="order-row"
                                        {...{ isHighlighted: countValue }}
                                    >
                                        <Col className="label counter">
                                            <Counter
                                                {...{
                                                    value: countValue,
                                                    onChange
                                                }}
                                            />
                                        </Col>
                                        <Col className="label item-label">
                                            <div>{name}</div>
                                        </Col>
                                        <Col className="label price">
                                            <div>${itemValue}</div>
                                        </Col>
                                    </Row>
                                );
                            })}
                        </tbody>
                    </Cart>
                );
            })}
        </Container>
    );
};

Basket.displayName = 'Basket';

Basket.propTypes = {
    products: PropTypes.object
};

export default Basket;
