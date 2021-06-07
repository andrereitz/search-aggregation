import PropTypes from 'prop-types';
import { LoaderStyles } from './loader.styles';

export const Loader = ({size, color}) => <LoaderStyles size={size} color={color} />;

Loader.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
};