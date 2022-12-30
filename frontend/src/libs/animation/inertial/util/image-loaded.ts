/**
 * 画像読み込み待ち
 * @param {Image} img
 */
const watchImageLoaded = (img: HTMLImageElement) => {
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
 * element内の画像読み込み待ち
 * @param {HTMLElement} element
 */
export const imagesLoaded = async (element: HTMLElement, cb: () => void) => {
  // @ts-ignore
  const unloadedImageArr: HTMLImageElement[] = [...element.querySelectorAll('img')].filter(
    (img: HTMLImageElement) => !img.complete,
  );
  if (unloadedImageArr.length === 0) return;

  const promiseArr = unloadedImageArr.map((img) => watchImageLoaded(img).then(cb));
  await Promise.all(promiseArr);
};