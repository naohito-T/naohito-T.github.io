import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';

/**
 * @NOTE distからimportしないとerrorになる。
 * @TODO これやる
 * https://devsakaso.com/gsap-non-loop-slider/
 */
export class GsapClient {
  constructor(private readonly globalGsap: GSAP = gsap) {
    this.globalGsap.registerPlugin(ScrollTrigger);
    this.globalGsap.registerPlugin(ScrollToPlugin);
    this.globalGsap.registerPlugin(TextPlugin);
  }

  public gsapClient = () => this.globalGsap;
}
