import React from 'react'
import classNames from 'classnames/bind';
import styles from './Experience.module.scss';
import { experiences } from '../../assets/data';
import ExperienceBox from '../ExperienceBox/ExperienceBox';

const cx = classNames.bind(styles);

const Experience = () => {
  return (
    <div className={cx('wrapper')}>
        <ExperienceBox data={experiences.frontend} title='Frontend Developer'/>
        <ExperienceBox data={experiences.backend} title='Backend Developer' />
    </div>
  )
}

export default Experience