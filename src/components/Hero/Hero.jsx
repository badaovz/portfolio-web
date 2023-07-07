import classNames from 'classnames/bind';
import Button from '../Button/Button';
import styles from './Hero.module.scss';
import { FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa';
import { TbMinusVertical } from 'react-icons/tb';
import avatar from '../../assets/images/avatar.png';
import cvFile from '../../assets/cv.pdf';

const cx = classNames.bind(styles);

const Hero = ({ name, job, id }) => {
    return (
        <div className={cx('wrapper')} id={id}>
            <p>Hello, I'm</p>
            <h2 className={cx('name')}>{name}</h2>
            <p className={cx('job')}>{job}</p>
            <div className={cx('btns')}>
                <Button outline href={cvFile} download={cvFile}>
                    Download CV
                </Button>
                <Button href='#contact'>Let's Talk</Button>
            </div>
            <div className={cx('content')}>
                <div className={cx('socials')}>
                    <a href='https://linkedin.com'>
                        <FaLinkedin />
                    </a>
                    <a href='https://github.com'>
                        <FaGithub />
                    </a>
                    <a href='https://dribble.com'>
                        <FaDribbble />
                    </a>
                    <a href='https://dribble.com'>
                        <TbMinusVertical />
                    </a>
                </div>
                <div className={cx('image')}>
                    <img src={avatar} alt='aboutImg' />
                </div>
                <a href='#contact' className={cx('text')}>
                    Scroll Down
                </a>
            </div>
        </div>
    );
};

export default Hero;
