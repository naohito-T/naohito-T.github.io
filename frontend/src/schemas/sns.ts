import { z } from 'zod';
import { CMSAutoSchema } from './cms-auto';

export const SnsSchema = CMSAutoSchema.extend({
  /**
   * @desc 対象のSNS名を記載
   */
  slug: z.string(),
  /**
   * @desc snsで一意に振られるID
   */
  snsId: z.string(),
  /**
   * @desc SNSに記載する概要
   */
  description: z.string(),
  /**
   * @desc SNSのURL
   */
  url: z.string(),
  /**
   * @desc SNSサムネイル（ogpなどにも使いたい）
   */
  thumbnail: z.string(),
  /**
   * @desc 他プロジェクトで使用するアイコン
   */
  icon: z.string(),
  /**
   * @desc 公開日時
   */
  publishedAt: z.string(),
});

export type Sns = z.infer<typeof SnsSchema>;
