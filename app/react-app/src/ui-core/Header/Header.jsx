import PropTypes from 'prop-types';
import { Container, Title } from './styledComponents';

const Header = props => {
    const { title } = props;
    return (
        <Container className="header">
            <Title className="title">{title}</Title>
        </Container>
    );
};

Header.displayName = 'Header';

Header.defaultProps = {};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;
