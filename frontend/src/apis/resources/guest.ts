import { CMSService } from '@/apis/services';
import { IGuestResource } from '@/apis/interfaces';
export class GuestResource extends CMSService implements IGuestResource {
  public fetchSns() {
    console.log('haello');
  }
}
