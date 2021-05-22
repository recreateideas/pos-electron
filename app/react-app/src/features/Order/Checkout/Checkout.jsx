import { useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, actions } from '../../../redux';
import {
    Container,
    TotalSection,
    GreatBigButton,
    Label
} from './styledComponents';

const Checkout = memo(props => {
    const { orderStatus } = props;
    const dispatch = useDispatch();
    const {
        data: { checkout }
    } = actions;
    const total = useMemo(() => {
        if (!orderStatus) {
            return 0;
        }
        return Object.values(orderStatus).reduce((tot, item) => {
            const { itemValue } = item;
            return tot + itemValue;
        }, 0);
    }, [orderStatus]);

    const onCheckout = () => {
        dispatch(checkout(orderStatus));
    };
    return (
        <Container className="checkout">
            <TotalSection className="total-section">
                <Label>Total</Label>
                <Label>${total}.00</Label>
            </TotalSection>
            <GreatBigButton
                className="great-big-button"
                {...{ show: !!total, onClick: onCheckout }}
            >
                Checkout
            </GreatBigButton>
        </Container>
    );
});

Checkout.displayName = 'Checkout';

Checkout.defaultProps = {};

Checkout.propTypes = {
    orderStatus: PropTypes.object
};

export default Checkout;
