import type { NextComponentType, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import type p5Types from 'p5';

const Sketch = dynamic(
  () =>
    import('react-p5').then((mod) => {
      // importing sound lib ONLY AFTER REACT-P5 is loaded
      require('p5/lib/addons/p5.sound');
      // returning react-p5 default export
      return mod.default;
    }),
  {
    ssr: false,
  },
);

export type CubeProps = {
  className?: string;
};

export const Cube: NextComponentType<NextPageContext, null, CubeProps> = ({ className = ' ' }) => {
  // 画像などのロードを行う
  const preload = (p5: p5Types) => {
    if (typeof window !== 'undefined') {
      console.log(p5);
    }
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    if (typeof window !== 'undefined') {
      console.log(`p5.windowWidth${p5.windowWidth}`);
      console.log(`p5.windowHeight${p5.windowHeight}`);
      p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(canvasParentRef);
    }
  };

  const draw = (p5: p5Types) => {
    if (typeof window !== 'undefined') {
      p5.background(0);
      for (var y = 0; y <= 1000; y = y + 500) {
        for (var x = 0; x <= 1000; x = x + 500) {
          p5.noFill();
          p5.stroke(255, 147, 206);
          p5.rotateX(p5.frameCount * 0.01);
          p5.rotateY(p5.frameCount * 0.01);
          // tabletサイズからは小さくする
          if (p5.windowWidth < 768) {
            p5.box(80, 80, 80);
          } else {
            p5.box(150, 150, 150);
          }
        }
      }
    }
  };

  // コンポーネントのレスポンシブ化
  const windowResized = (p5: p5Types) => {
    if (typeof window !== 'undefined') {
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }
  };

  return (
    <Sketch
      className={className}
      preload={preload}
      setup={setup}
      draw={draw}
      windowResized={windowResized}
    />
  );
};
