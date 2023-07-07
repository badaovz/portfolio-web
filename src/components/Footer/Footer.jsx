import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const cx = classNames.bind(styles);

const navs = [
    {

        id: 1,
        link: '#home' ,       
        name: 'Home',
    },
    {
        id: 2,
        link: '#about' ,       
        name: 'About',
    },
    {
        id: 3,
        link: '#experience' ,       
        name: 'Experience',
    },
    {
        id: 4,
        link: '#services' ,       
        name: 'Services',
    },
    {
        id: 5,
        link: '#portfolio' ,       
        name: 'Portfolio',
    },
    {
        id: 6,
        link: '#testimonials' ,       
        name: 'Testimonials',
    },

]

const Footer = () => {
  return (
    <div className={cx('wrapper')}>
        <h3 className={cx('header')}>Dao Nguyen</h3>
        <div className={cx('navs')}>
            {
                navs.map(nav => (
                    <a href={nav.link} className={cx('nav')} key={nav.id}>
                        {nav.name}
                    </a>
                ))
            }
        </div>
        <div className={cx('socials')}>
            <a href="https://faccebook.com" className={cx('social')}><FaFacebookF /></a>
            <a href="https://instagram.com" className={cx('social')}><FaInstagram /></a>
            <a href="https://twitter.com" className={cx('social')}><FaTwitter /></a>
        </div>
        <p className={cx('text')}>2022 DaoNguyen © All Rights Reserved</p>
    </div>
  )
}

export default Footer