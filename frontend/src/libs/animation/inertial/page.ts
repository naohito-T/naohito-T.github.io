import { screen } from '@/libs/animation/inertial/util/screen';
import { InertialScroller } from './inertial.scroller';

class Page {
  public boundResize;

  constructor() {
    const containerElement =
      document.querySelector<HTMLElement>('.js-inertial-scroll') ?? ({} as HTMLElement);
    const contentElement =
      document.querySelector<HTMLElement>('.js-inertial-scroll_content') ?? ({} as HTMLElement);

    new InertialScroller(containerElement, contentElement);
    this.boundResize = this.onResize;

    this.onResize();
    window.addEventListener('resize', this.boundResize, { passive: true });
  }

  onResize() {
    screen.resize();
  }
}

export { Page };
