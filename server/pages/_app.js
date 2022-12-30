(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 26:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app_page)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/scss/reset.scss
var scss_reset = __webpack_require__(162);
// EXTERNAL MODULE: ./src/styles/scss/base.scss
var base = __webpack_require__(691);
// EXTERNAL MODULE: ./node_modules/locomotive-scroll/dist/locomotive-scroll.css
var locomotive_scroll = __webpack_require__(188);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
// EXTERNAL MODULE: ./src/styles/modules/index.ts + 3 modules
var modules = __webpack_require__(686);
;// CONCATENATED MODULE: ./src/components/templates/theme/theme.tpl.tsx



const GlobalStyle = external_styled_components_.createGlobalStyle`
  .pc {
    display: block;
    ${modules/* MediaSP */.tL`
      display: none;
    `}
  }
  .sp {
    display: block;
    ${modules/* MediaPC */.$G`
      display: none;
    `}
  }
`;
/**
 * @desc _app.page.tsxからstyleだけを抜いたtemplate
 */ const ThemeTpl = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
        theme: modules/* theme */.rS,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyle, {
                theme: modules/* theme */.rS
            }),
            children
        ]
    });
};

;// CONCATENATED MODULE: ./src/pages/_app.page.tsx

// css reset & base




const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(ThemeTpl, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
};
/* harmony default export */ const _app_page = (App);


/***/ }),

/***/ 188:
/***/ (() => {



/***/ }),

/***/ 691:
/***/ (() => {



/***/ }),

/***/ 162:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 908:
/***/ ((module) => {

"use strict";
module.exports = require("styled-media-query");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686], () => (__webpack_exec__(26)));
module.exports = __webpack_exports__;

})();