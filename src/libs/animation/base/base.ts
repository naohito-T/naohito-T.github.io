import gsap from 'gsap';

/**
 * @NOTE distからimportしないとerrorになる。
 * @TODO これやる
 * https://devsakaso.com/gsap-non-loop-slider/
 */
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

export abstract class AppGSAP {
  public static appGsap: typeof gsap;

  /**
   * @desc 即時実行でPluginを登録してからgsapに入れる。
   */
  private static initialize = (() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(TextPlugin);
    AppGSAP.appGsap = gsap;
  })();
}
