import classNames from 'classnames/bind';
import styles from './Testimonials.module.scss';
import { testimonials } from '../../assets/data';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TestimonialsBox from '../TestimonialsBox/TestimonialsBox';

const cx = classNames.bind(styles);

const Testimonials = () => {
  return (
    <div className={cx('wrapper')}>
        <Swiper
      // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className={cx('swiper')}
      >
        {
          testimonials.map(item => (
            <SwiperSlide key={item.id}>
              <div className={cx('item')}>
                <TestimonialsBox data={item} />

              </div>
            </SwiperSlide>

          ))
        }
      </Swiper>
    </div>
  )
}

export default Testimonials