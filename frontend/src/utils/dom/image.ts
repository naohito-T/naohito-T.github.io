/**
 * @desc 対象の画像読み込み待ち
 * @param {Image} img
 */
export const watchImageLoaded = async (img: HTMLImageElement) => {
  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(img);
    };
    img.onerror = (err: unknown) => {
      reject(err);
    };
  });
};

/**
 * @desc element内（子要素）の画像読み込み待ち
 * @param {HTMLElement} element
 */
export const imagesLoaded = async (element: HTMLElement, cb: () => void) => {
  const unloadedImageArr: HTMLImageElement[] = [...element.querySelectorAll('img')].filter(
    (img: HTMLImageElement) => !img.complete,
  );

  if (unloadedImageArr.length === 0) return;

  const promiseArr = await Promise.all([
    unloadedImageArr.map((img) => watchImageLoaded(img).then(cb)),
  ]);
  await Promise.all(promiseArr);
};
