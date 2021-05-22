import PropTypes from 'prop-types';
import { Container, Button, Value } from './styledComponents';

const Counter = props => {
    const { value, onChange } = props;
    const update = action => () => {
        const map = {
            add: value + 1,
            remove: value - 1
        };
        onChange(map[action]);
    };
    return (
        <Container>
            <Button {...{ onClick: update('remove') }}>-</Button>
            <Value>{value}</Value>
            <Button {...{ onClick: update('add') }}>+</Button>
        </Container>
    );
};

Counter.displayName = 'Counter';

Counter.defaultProps = {};

Counter.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func
};

export default Counter;
