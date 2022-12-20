/**
 * @desc 無限リピートの縦スライダー
 */
export const timeSlider = (gsap: GSAP) => {
  const tlSlide = gsap.timeline({ repeat: -1 });

  const tween = tlSlide
    .from('.vertical-slider p', { autoAlpha: 0, stagger: 0.5, duration: 0.5, y: 100 })
    .to('.vertical-slider p', { autoAlpha: 0, stagger: 0.5, duration: 0.5, y: -100 }, 0.5);
  return tween;
};

/**
 * @desc 無限リピートのyoyo
 */
export const repeatYoyoStagger = (gsap: GSAP, className: string = '.circle') => {
  const tween = gsap.to(className, {
    y: 50,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
    stagger: {
      each: 0.2,
    },
  });
  return tween;
};
