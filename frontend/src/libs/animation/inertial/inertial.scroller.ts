import { imagesLoaded } from '@/libs/animation/inertial/util/image-loaded';

/**
 * 慣性スクロール
 * ref: https://codepen.io/ReGGae/pen/pxMJLW
 */
class InertialScroller {
  public ease!: number;

  public scrollY!: number;

  public easeScrollY!: number;

  public containerElement!: HTMLElement;

  public contentElement!: HTMLElement;

  public frame!: number | null;

  public boundUpdate;

  public boundScroll;

  public boundResize;

  /**
   * コンストラクタ
   * @param {Object} param0
   * @param {HTMLElement} param0.containerElement コンテナ要素
   * @param {HTMLElement} param0.contentElement コンテンツ要素
   */
  constructor(containerElement: HTMLElement, contentElement: HTMLElement) {
    this.ease = 0.1;
    this.scrollY = 0.0;
    this.easeScrollY = 0.0;
    this.containerElement = containerElement;
    this.contentElement = contentElement;
    this.frame = null;
    this.boundUpdate = this.update.bind(this);
    this.boundScroll = this.onScroll.bind(this);
    this.boundResize = this.onResize.bind(this);

    this.init();
  }

  /**
   * @desc bodyの高さを更新 rect = 直系
   * @note getBoundingClientRect = ターゲット要素の位置をブラウザ表示領域の左上(0, 0)としてそこから相対位置で取得する。
   * */
  setBodyHeight() {
    const rect = this.contentElement.getBoundingClientRect();
    document.body.style.height = `${rect.height}px`;
  }

  /** 画像を一枚読み込み終わるたびにbodyの高さを更新 */
  async preload() {
    await imagesLoaded(this.contentElement, () => {
      this.setBodyHeight();
    });
  }

  /** コンテナのスタイル設定 */
  public setContainerStyles() {
    Object.assign(this.containerElement.style, {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      overflow: 'hidden',
    });
  }

  /** 更新 */
  public update() {
    this.easeScrollY += (this.scrollY - this.easeScrollY) * this.ease;
    const roundedScrollY = Math.round(this.easeScrollY * 100) / 100;
    const diff = this.scrollY - roundedScrollY;
    const vel = diff / this.contentElement.getBoundingClientRect().width;
    const skew = vel * 8;
    this.contentElement.style.transform = `translate3d(0, ${-roundedScrollY}px, 0) skewY(${skew}deg)`;

    this.requestAnimationFrame();
  }

  /** 適用 */
  on() {
    this.setContainerStyles();
    this.setBodyHeight();
    this.addEventListeners();

    this.requestAnimationFrame();
  }

  /** 解除 */
  off() {
    this.cancelAnimationFrame();
    this.removeEventListeners();
    document.body.style.height = '';
    this.contentElement.style.transform = '';
    // @ts-ignore
    this.containerElement.style = '';
  }

  /** 次のフレームを要求 */
  requestAnimationFrame() {
    this.frame = window.requestAnimationFrame(this.boundUpdate);
  }

  /** アニメーションキャンセル */
  cancelAnimationFrame() {
    // @ts-ignore
    window.cancelAnimationFrame(this.frame);
  }

  /** スクロール時 */
  onScroll() {
    // scrollYよりもpageYOffsetの方がブラウザ対応が進んでいるとのこと。
    this.scrollY = window.scrollY || window.pageYOffset;
  }

  /** リサイズ時 */
  onResize() {
    this.setBodyHeight();
    this.easeScrollY = this.scrollY;
  }

  /** イベント登録 */
  addEventListeners() {
    window.addEventListener('scroll', this.boundScroll, { passive: true });
    window.addEventListener('resize', this.boundResize, { passive: true });
  }

  /** イベント削除 */
  removeEventListeners() {
    // @ts-ignore
    window.removeEventListener('scroll', this.boundScroll, { passive: true });
    // @ts-ignore
    window.removeEventListener('resize', this.boundResize, { passive: true });
  }

  /** 初期化 */
  init() {
    this.onScroll();
    this.onResize();
    this.preload();
    this.on();
  }
}

export { InertialScroller };
