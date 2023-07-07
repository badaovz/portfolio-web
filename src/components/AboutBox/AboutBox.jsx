import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AboutBox.module.scss';

const cx = classNames.bind(styles);

const AboutBox = ({ data }) => {
    const { icon, title, desc } = data;
    return (
        <div className={cx('wrapper')}>
            <p className={cx('icon')}>{icon}</p>
            <h4 className={cx('title')}>{title}</h4>
            <p className={cx('desc')}>{desc}</p>
        </div>
    );
};

AboutBox.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AboutBox;
