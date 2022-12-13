import type { CMSClient } from '@/apis';

export abstract class CMSService {
  protected readonly mCMSClient: CMSClient;

  // TODO ここで注入しているのがいかんなあ
  constructor(client: CMSClient) {
    this.mCMSClient = client;
  }
}
