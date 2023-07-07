import classNames from 'classnames/bind';
import styles from './Services.module.scss';
import { services } from '../../assets/data';
import ServiceBox from '../ServiceBox/ServiceBox';

const cx = classNames.bind(styles);

const Services = () => {
  return (
    <div className={cx('wrapper')}>
        {
          services.map((item, index) => (
            <ServiceBox data={item.content} title={item.title} key={index}/>
          ))
        }
    </div>
  )
}

export default Services