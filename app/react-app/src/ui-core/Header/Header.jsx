import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styledComponents';

const Header = props => {
    const { title } = props;
    return <Container>{title}</Container>;
};

Header.displayName = 'Header';

Header.defaultProps = {};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;
