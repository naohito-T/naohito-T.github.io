import { Screen } from '@/libs/animation/inertial/util/screen';
import { InertialScroller } from './inertial.scroller';

export class Page {
  public screen = new Screen();

  constructor() {
    /**
     * @des
     */
    const containerElement =
      document.querySelector<HTMLElement>('.js-inertial-scroll') ?? ({} as HTMLElement);
    const contentElement =
      document.querySelector<HTMLElement>('.js-inertial-scroll_content') ?? ({} as HTMLElement);

    new InertialScroller(containerElement, contentElement);

    this.onResize();
    // passive: trueを使ってevent.preventDefault()を関数内で使用していないことをブラウザに教えてあげます。
    window.addEventListener('resize', this.onResize, { passive: true });
  }

  onResize() {
    this.screen.resize();
  }
}
