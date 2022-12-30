import { createClient } from 'microcms-js-sdk';
import { GuestResource } from '@/apis/resources';
import { AppEnvConfig } from '@/configs';

const client = createClient({
  serviceDomain: AppEnvConfig.MICRO_CMS_DOMAIN,
  apiKey: AppEnvConfig.MICRO_CMS_API_KEY,
});
export type CMSClient = typeof client;

export const GuestAPI = new GuestResource(client);
