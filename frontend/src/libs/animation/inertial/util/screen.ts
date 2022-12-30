/**
 * Screen
 * ウィンドウサイズ
 */
type Size = {
  x: number;
  y: number;
};

export class Screen {
  public size: Size;

  /**
   * devicePixelRatio macOSなら2
   */
  public dpr: number = 0;

  constructor() {
    this.size = { x: 0, y: 0 };
    this.resize();
  }

  /**
   * @desc ブラウザで開いているページの真ん中
   */
  get center() {
    return { x: this.size.x / 2, y: this.size.y / 2 };
  }

  /**
   * @desc x / y でアスペクト比がわかる
   */
  get aspect() {
    return this.size.x / this.size.y;
  }

  /**
   * @desc x or y どちらか最小のものを返す。
   */
  get min() {
    return Math.min(this.size.x, this.size.y);
  }

  /**
   * @desc x or y どちらか最大のものを返す。
   */
  get max() {
    return Math.max(this.size.x, this.size.y);
  }

  /**
   * @desc リサイズ
   */
  public resize() {
    this.size.x = window.innerWidth;
    this.size.y = window.innerHeight;
    this.dpr = window.devicePixelRatio;
  }
}
