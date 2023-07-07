import classNames from 'classnames/bind';
import styles from './WrapComponent.module.scss';

const cx = classNames.bind(styles);

const WrapComponent = ({children, text,title, id }) => {
  return (
    <div className={cx('wrapper')} id={id}>
        <p className={cx('text')}>{text}</p>
        <h4 className={cx('title')}>{title}</h4>
        {children}
    </div>
  )
}

export default WrapComponent