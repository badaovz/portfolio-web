import classNames from 'classnames/bind';
import ContactBox from '../ContactBox/ContactBox';
import styles from './Contact.module.scss';
import { socials } from '../../assets/data';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const Contact = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('socials')}>
        {
          socials.map(item => (
            <ContactBox data={item} key={item.id} className={cx('item')}/>
          ))
        }
      </div>
      <div className={cx('form')}>
        <form action="">
          <input type="text" placeholder='Your Full Name'/>
          <input type="email" placeholder='Your Email'/>
          <textarea name="message" id="mes" placeholder='Your Message' cols="30" rows="10"></textarea>
          <Button>Send Message</Button>
        </form>
      </div>
    </div>
  )
}

export default Contact