import React from 'react';
import classNames from 'classnames/bind';
import styles from './PortfolioBox.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const PortfolioBox = ({data}) => {
  const {image, title, linkGit, liveLink} = data;
  return (
    <div className={cx('wrapper')}>
        <div className={cx('header')}>
          <img src={image} alt="img" />
          <h4 className={cx('title')}>{title}</h4>
        </div>
        <div className={cx('btns')}>
          <Button href={linkGit} outline target="_blank" rel="noopener noreferrer">Github</Button>
          <Button href={liveLink} target="_blank" rel="noopener noreferrer" >Live Demo</Button>
        </div>
    </div>
  )
}

export default PortfolioBox