import React from 'react';
import Image from 'next/image';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import Slider from 'react-slick';
import Link from 'next/link';
import portfolioInfo from './portfolioData.json';
import styles from '../styles/card.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PortCard(props) {
  const porfolioData = portfolioInfo.info;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: false,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Slider key={porfolioData.length} {...settings}>
      {porfolioData?.map((info) => {
        if (info.category.includes(props.category)) {
          return (
            <div key={info.id} className={styles.superCont}>
              <div className={styles.imageContainer}>
                <div className={styles.img}>
                  <Image
                    src={`/portfolio/portfolioImage${info.id}.PNG`}
                    alt='portfolio1'
                    width={500}
                    height={400}
                  />
                </div>
              </div>
              <div className='flex-1 pl-4' style={{ color: '#9F9F9F', backgroundColor: '#000F19', height: '200px' }}>
                <div className='flex justify-start items-center mb-6 mt-0 p-2'>
                  <BsFillPersonFill size={25} color='#707070' />
                  <p className='inline ml-3 font-bold pt-3 pl-3 pr-3 pb-3' style={{ fontSize: '13px', color: '#707070' }}>
                    {info.websiteName}
                  </p>
                </div>
                <p className='font-bold mb-6' style={{ inlineSize: '250px', overflowWrap: 'break-word', fontSize: '16px' }}>
                  {info.desc}
                </p>
                <span className='flex'>
                  <Link href={info.linkUrl} target="_blank">
                    <p className='mb-4 mr-6 font-bold' style={{ fontSize: '10px' }}>
                      EXPLORE PROJECT
                    </p>
                  </Link>
                  <FiArrowRight />
                </span>
              </div>
            </div>
          );
        }
      })}
    </Slider>
  );
}


