import classNames from 'classnames/bind';
import styles from './About.module.scss';
import { aboutBox } from '../../assets/data';
import aboutImage from '../../assets/images/avatar.png';
import AboutBox from '../AboutBox/AboutBox';
import Button from '../Button/Button';
import { MyMail } from '../../constant';

const cx = classNames.bind(styles);

const About = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={aboutImage} alt='aboutImage' />
            </div>

            <div className={cx('content')}>
                <div className={cx('box')}>
                    {aboutBox.map((about) => (
                        <AboutBox data={about} key={about.id} />
                    ))}
                </div>
                <p className={cx('text')}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur sit dolores, placeat fugiat quibusdam facilis
                    laborum reiciendis inventore hic doloribus, commodi iusto
                    nihil nostrum aut consequuntur perferendis sequi voluptatem
                    necessitatibus?
                </p>
                <Button href={`mailto:${MyMail}`}>Let's Talk</Button>
            </div>
        </div>
    );
};

export default About;
