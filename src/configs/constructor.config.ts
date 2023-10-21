// import { BaseEnv } from './_base.config';
import { EnvVar } from '@/libs/decorator';

/** @description 定数 */
export class Constructor {
  /** @description Page default title */
  public static readonly PAGE_TITLE = 'NAOHITO-T.GITHUB.IO';

  /** @description Page default description */
  public static readonly PAGE_DESCRIPTION =
    '千葉出身。都内（銀座）での美容師経験があるソフトウェアエンジニア。モデル撮影のために購入したmacを使っていたらPCの仕組みが気になり始め、気づいたらエンジニアに。人生まるごとクリエイティブだと思っている。人の髪をデザインしていた経験をIT業界へ活かせることはないか日々模索中。';

  /** @description Page default url */
  @EnvVar({
    local: 'http://localhost:2000/',
    prod: 'https://naohito-t.github.io/',
  })
  public static readonly PAGE_URL: string;

  /** @description Page default og image */
  public static readonly PAGE_OG_IMAGE = '/about_me.jpg';

  /** @description copyright */
  public static readonly COPYRIGHT = '©NAOHITO-T.GITHUB.IO';

  public static readonly ABOUT_HOVER_STALKER_IMAGES = [
    './images/fashion-01.jpg',
    './images/fashion-02.jpg',
    './images/fashion-03.jpg',
    './images/fashion-04.jpg',
  ];
}
