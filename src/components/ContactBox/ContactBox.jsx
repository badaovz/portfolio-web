import classNames from 'classnames/bind';
import styles from './ContactBox.module.scss';

const cx = classNames.bind(styles);

const ContactBox = ({data}) => {
    const {icon, title, desc, link } = data;
  return (
    <div className={cx('wrapper')}>
        <div className={cx('icon')}>
            {icon}
        </div>
        <h4 className={cx('name')}>{title}</h4>
        <p className={cx('desc')}>{desc}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className={cx('link')}>Send a message</a>
    </div>
  )
}

export default ContactBox