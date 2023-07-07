import React from 'react'
import classNames from 'classnames/bind';
import styles from './ExperienceBox.module.scss';
import { BsPatchCheckFill } from 'react-icons/bs';

const cx = classNames.bind(styles);

const ExperienceBox = ({data, title}) => {
  return (
    <div className={cx('wrapper')}>
        <h4 className={cx('title')}>{title}</h4>
        <div className={cx('contents')}>
            {
                data.map(item => (
                    <div className={cx('item')} key={item.id}>
                        <BsPatchCheckFill className={cx('icon')} />
                        <div className={cx('content')}>
                            <h4 className={cx('language')}>{item.language}</h4>
                            <p className={cx('desc')}>{item.level}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ExperienceBox