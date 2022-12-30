/**
 * @desc 初期状態としてopacity: 0;とvisibility: hidden;が指定される
 * @use  to methodで autoAlpha: 1で表示させる。
 */
export const setAlpha = (g: GSAP, el: gsap.TweenTarget, op?: gsap.TweenVars): gsap.core.Tween => {
  return g.set(el, { autoAlpha: 0, ...op });
};

/**
 * @desc レスポンシブ対応
 */
export const matchMedia = (g: GSAP) => {
  return g.matchMedia();
};
