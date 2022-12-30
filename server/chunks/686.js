"use strict";
exports.id = 686;
exports.ids = [686];
exports.modules = {

/***/ 686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$G": () => (/* reexport */ MediaPC),
  "tL": () => (/* reexport */ MediaSP),
  "j2": () => (/* reexport */ displayFlex),
  "rS": () => (/* reexport */ theme)
});

// UNUSED EXPORTS: MediaSmallPC, MediaSmallSP, maxInline, posLowLeft, posLowRight, posUpLeft, posUpRight

// EXTERNAL MODULE: external "styled-media-query"
var external_styled_media_query_ = __webpack_require__(908);
var external_styled_media_query_default = /*#__PURE__*/__webpack_require__.n(external_styled_media_query_);
;// CONCATENATED MODULE: ./src/styles/modules/media.ts

/**
 * @see https://github.com/morajabi/styled-media-query
 * default 設定
 * {
 *    huge: '1440px',
 *    large: '1170px',
 *    medium: '768px',
 *    small: '450px',
 * }
 */ /**
 * @desc 1024px以下の小さいPC
 */ // @ts-ignore
const MediaSmallPC = external_styled_media_query_default().lessThan("1024px");
/**
 * @desc 769px以上
 */ // @ts-ignore
const MediaPC = external_styled_media_query_default().greaterThan("769px");
/**
 * @desc 768px以下
 */ // @ts-ignore
const MediaSP = external_styled_media_query_default().lessThan("768px");
/**
 * @desc 768px以下
 */ // @ts-ignore
const MediaSmallSP = external_styled_media_query_default().lessThan("375px");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
;// CONCATENATED MODULE: ./src/styles/modules/mixin.ts

const displayFlex = ({ alignItems ="center" , justifyContent ="center" , flexDirection ="column"  })=>external_styled_components_.css`
  display: flex;
  align-items: ${alignItems};
  justify-content: ${justifyContent};
  flex-direction: ${flexDirection};
`;
/**
 * @desc flexだとwrapするelementが必要だが、これだと要らないとのこと。
 * @see https://coliss.com/articles/build-websites/operation/css/centering-side-aligned-using-modern-css.html
 */ const maxInline = ({})=>css`
  max-inline-size: max-content;
  margin-inline: auto;
`;
/**
 * @desc 左上を起点
 */ const posUpLeft = ({ top ="0" , left ="0"  })=>css`
  position: absolute;
  top: ${top};
  left: ${left};
`;
/**
 * @desc 右上を起点
 */ const posUpRight = ({ top ="0" , right ="0"  })=>css`
  position: absolute;
  top: ${top};
  right: ${right};
`;
/**
 * @desc 右下を起点
 */ const posLowRight = ({ right ="0" , bottom ="0"  })=>css`
  position: absolute;
  right: ${right};
  bottom: ${bottom};
`;
/**
 * @desc 左下を起点
 */ const posLowLeft = ({ bottom ="0" , left ="0"  })=>css`
  position: absolute;
  bottom: ${bottom};
  left: ${left};
`;

;// CONCATENATED MODULE: ./src/styles/modules/theme.ts

const theme = {
    black: "#000",
    blackRgb: "0, 0, 0",
    white: "#fff",
    whiteRgb: "255, 255, 255"
};

;// CONCATENATED MODULE: ./src/styles/modules/index.ts





/***/ })

};
;