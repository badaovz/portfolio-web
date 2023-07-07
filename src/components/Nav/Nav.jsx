import classNames from 'classnames/bind';
import styles from './Nav.module.scss';
import { navs } from '../../assets/data';
import { useState } from 'react';

const cx= classNames.bind(styles);

const Nav = () => {
    const [value, setValue] = useState(0);

  return (
    <div className={cx('wrapper')}>
        {
            navs.map((nav, index) => (
                <a href={nav.link} className={cx('icon', {
                    active: nav.id === value
                })} onClick={() => setValue(nav.id)} key={nav.id}>{nav.icon}</a>
            ))
        }
    </div>
  )
}

export default Nav