import React from 'react';
import classNames from 'classnames/bind';
import styles from './Portfolio.module.scss';
import { portfolios } from '../../assets/data';
import PortfolioBox from '../PortfolioBox';

const cx = classNames.bind(styles);

const Portfolio = () => {
  return (
    <div className={cx('wrapper')}>
        {
            portfolios.map(item => (
                <PortfolioBox data={item} key={item.id} />
            ))
        }
    </div>
  )
}

export default Portfolio