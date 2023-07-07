import classNames from 'classnames/bind';
import styles from './TestimonialsBox.module.scss';

const cx = classNames.bind(styles);

const TestimonialsBox = ({data}) => {
    const {avatar, name, desc } = data;
  return (
    <div className={cx('wrapper')}>
        <div className={cx('image')}>
            <img src={avatar} alt="avatar" />
        </div>
        <h4 className={cx('name')}>{name}</h4>
        <p className={cx('desc')}>{desc}</p>
    </div>
  )
}

export default TestimonialsBox