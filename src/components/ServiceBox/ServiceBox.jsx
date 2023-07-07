import classNames from "classnames/bind"
import styles from './ServiceBox.module.scss';
import { FaCheck } from 'react-icons/fa';

const cx = classNames.bind(styles);

const ServiceBox = ({data,title}) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        {
          data.map((item, index) => (
            <div className={cx('item')} key={index}>
              <FaCheck className={cx('icon')} />
              <p className={cx('text')}>{item}</p>
            </div>
          ))
        }
      </div>
      <div className={cx('header')}>
        <h5 className={cx('title')}>{title}</h5>
      </div>
    </div>
  )
}

export default ServiceBox