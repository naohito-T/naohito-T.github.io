import { Page } from './page';

const init = () => {
  new Page();
};

export const main = () => {
  if (document.readyState !== 'loading') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      init();
    });
  }
};
