import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
    children,
    href,
    className,
    large = false,
    outline = false,
    disabled = false,
    onClick,
    ...passProps
}) => {
    let Com = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // remove event when button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (href) {
        props.href = href;
        Com = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        large,
        outline,
        disabled,
    });

    return (
        <Com className={classes} {...props}>
            {children}
        </Com>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    large: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Button;
