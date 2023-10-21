import type { NextComponentType, NextPageContext } from 'next';
import { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Constructor as C } from '@/configs';
import { gsap } from '@/core/infrastructures/gsap';
import s from '@/styles/scss/modules/organisms/about.module.scss';

type Props = {
  className?: string;
};

/** @description 中段のセクション */
export const About: NextComponentType<NextPageContext, null, Props> = ({ className }) => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const image = imageRef.current;
    const wrapper = wrapperRef.current;

    if (!image) throw new Error('Not Element Image');
    if (!wrapper) throw new Error('Not Element Wrapper');

    const items = wrapper.querySelectorAll(`.${s.item}`);

    const handleMouseEnter = () => {
      gsap.to(image, {
        opacity: 0.5,
        visibility: 'visible',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        autoAlpha: 0,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(image, {
        duration: 2,
        x: e.pageX + 300,
        y: e.pageY - 100,
        ease: 'Power4.easeOut',
      });
    };

    wrapper.addEventListener('mouseenter', handleMouseEnter);
    wrapper.addEventListener('mouseleave', handleMouseLeave);
    wrapper.addEventListener('mousemove', handleMouseMove);

    // 子要素にeventを定義していく
    items.forEach((item, i) => {
      item.addEventListener('mouseenter', () => {
        image.style.backgroundImage = `url("${C.ABOUT_HOVER_STALKER_IMAGES[i]}")`;
        gsap.set(image, {
          backgroundPosition: 'center',
        });
        gsap.to(image, {
          repeat: -1,
          ease: 'liner',
        });
      });
    });

    return () => {
      wrapper.removeEventListener('mouseenter', handleMouseEnter);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
      wrapper.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className={classNames(className, s.about)} data-testid='About' data-scroll-section>
      <ul className={s.categoryList} id='section' ref={wrapperRef}>
        <li className={s.item}>
          <a href='https://github.com/naohito-T' target='_blank' rel='noreferrer'>
            <p>category</p>
            <div className={s.text}>
              <h2>GitHub</h2>
              <p>2016.08.10</p>
            </div>
          </a>
        </li>
        <li className={s.item}>
          <a href='https://naopedia.netlify.app/' target='_blank' rel='noreferrer'>
            <p>category</p>
            <div className={s.text}>
              <h2>Knowledge book</h2>
              <p>2017: launch</p>
            </div>
          </a>
        </li>
        <li className={s.item}>
          <a href='https://moderato.vercel.app/' target='_blank' rel='noreferrer'>
            <p>category</p>
            <div className={s.text}>
              <h2>Blog</h2>
              <p>2021: launch</p>
            </div>
          </a>
        </li>
        <li className={s.item}>
          <a href='#'>
            <p>category</p>
            <div className={s.text}>
              <h2>（WIP）Portfolio</h2>
              <p>2024: Coming Soon</p>
            </div>
          </a>
        </li>
        <div className={s.hoverStalkerImg} id='hover-stalker-img' ref={imageRef}></div>
      </ul>
    </section>
  );
};
