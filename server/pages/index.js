"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CircleBounce": () => (/* binding */ CircleBounce)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "gsap"
const external_gsap_namespaceObject = require("gsap");
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_namespaceObject);
;// CONCATENATED MODULE: external "gsap/dist/ScrollTrigger"
const ScrollTrigger_namespaceObject = require("gsap/dist/ScrollTrigger");
;// CONCATENATED MODULE: external "gsap/dist/TextPlugin"
const TextPlugin_namespaceObject = require("gsap/dist/TextPlugin");
;// CONCATENATED MODULE: external "gsap/dist/ScrollToPlugin"
const ScrollToPlugin_namespaceObject = require("gsap/dist/ScrollToPlugin");
;// CONCATENATED MODULE: ./src/libs/animation/base/base.ts

/**
 * @NOTE distからimportしないとerrorになる。
 * @TODO これやる
 * https://devsakaso.com/gsap-non-loop-slider/
 */ 


class AppGSAP {
    /**
   * @desc 即時実行でPluginを登録してからgsapに入れる。
   */ static initialize = (()=>{
        external_gsap_default().registerPlugin(ScrollTrigger_namespaceObject.ScrollTrigger);
        external_gsap_default().registerPlugin(ScrollToPlugin_namespaceObject.ScrollToPlugin);
        external_gsap_default().registerPlugin(TextPlugin_namespaceObject.TextPlugin);
        AppGSAP.appGsap = (external_gsap_default());
    })();
}

;// CONCATENATED MODULE: ./src/libs/animation/base/index.ts


;// CONCATENATED MODULE: ./src/libs/animation/tween/index.ts
/**
 * @desc 無限リピートの縦スライダー
 */ const timeSlider = (gsap)=>{
    const tlSlide = gsap.timeline({
        repeat: -1
    });
    const tween = tlSlide.from(".vertical-slider p", {
        autoAlpha: 0,
        stagger: 0.5,
        duration: 0.5,
        y: 100
    }).to(".vertical-slider p", {
        autoAlpha: 0,
        stagger: 0.5,
        duration: 0.5,
        y: -100
    }, 0.5);
    return tween;
};
/**
 * @desc 無限リピートのyoyo
 */ const repeatYoyoStagger = (gsap, className = ".circle")=>{
    const tween = gsap.to(className, {
        y: 50,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: {
            each: 0.2
        }
    });
    return tween;
};
/**
 * @desc 上からポヨンと落ちてくるanimation header見れば分かる
 */ const bounceRepeat = (gsap, id)=>{
    const tween = gsap.to(`#${id}`, {
        autoAlpha: 1,
        duration: 2,
        y: 0,
        ease: "bounce",
        repeat: -1,
        repeatDelay: 3
    });
    return tween;
};

;// CONCATENATED MODULE: ./src/libs/animation/util/gsap.util.ts
/**
 * @desc 初期状態としてopacity: 0;とvisibility: hidden;が指定される
 * @use  to methodで autoAlpha: 1で表示させる。
 */ const setAlpha = (g, el, op)=>{
    return g.set(el, {
        autoAlpha: 0,
        ...op
    });
};
/**
 * @desc レスポンシブ対応
 */ const matchMedia = (g)=>{
    return g.matchMedia();
};

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/molecules/circle-bounce.tsx






const Wrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-214c2ceb-0"
})`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: red;
`;
/**
 * @desc y: -200 から y: 0で落ちてくる 丸の無限アニメーション
 */ const CircleBounce = ({ id , className =""  })=>{
    (0,external_react_.useEffect)(()=>{
        setAlpha(AppGSAP.appGsap, `#${id}`, {
            y: -200
        });
        bounceRepeat(AppGSAP.appGsap, id).play();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
        id: id,
        className: className
    });
};


/***/ }),

/***/ 505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Cube": () => (/* reexport */ Cube),
  "TopSection": () => (/* reexport */ TopSection)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./src/components/organisms/cube.tsx


// const Sketch = dynamic(
//   import('react-p5').then((mod) => mod.default),
//   {
//     ssr: false,
//   },
// );
const Sketch = dynamic_default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 919, 23)).then((mod)=>{
        // importing sound lib ONLY AFTER REACT-P5 is loaded
        __webpack_require__(522);
        // returning react-p5 default export
        return mod.default;
    }), {
    loadableGenerated: {
        modules: [
            "../components/organisms/cube.tsx -> " + "react-p5"
        ]
    },
    ssr: false
});
const Cube = ({ className =" "  })=>{
    // 画像などのロードを行う
    const preload = (p5)=>{
        if (false) {}
    };
    const setup = (p5, canvasParentRef)=>{
        if (false) {}
    };
    const draw = (p5)=>{
        if (false) { var x, y; }
    };
    // コンポーネントのレスポンシブ化
    const windowResized = (p5)=>{
        if (false) {}
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Sketch, {
        className: className,
        preload: preload,
        setup: setup,
        draw: draw,
        windowResized: windowResized
    });
};

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/styles/modules/index.ts + 3 modules
var modules = __webpack_require__(686);
;// CONCATENATED MODULE: ./src/components/organisms/top.section.tsx



const Wrapper = external_styled_components_default().section.withConfig({
    componentId: "sc-5f05e10a-0"
})`
  position: relative;
  width: 100%;
  height: 100vh;

  .top-wrap {
    ${(0,modules/* displayFlex */.j2)({})};
    height: 100%;

    .top-title {
      ${(0,modules/* displayFlex */.j2)({
    alignItems: "flex-start"
})};
      height: 100%;
      text-transform: uppercase;

      .title {
        font-size: 3rem;
        font-weight: bold;
      }

      .desc {
        line-height: 1;
        display: block;
        font-size: 1.5rem;
        font-weight: bold;
      }
    }

    .border {
      border-bottom: 1px solid #fff;
      display: block;
      height: 1px;
      width: 70%;
      margin: 15px 0;
    }
  }

  .scroll-down {
    position: absolute;
    left: 50%;
    bottom: 10px;
    height: 50px;

    span {
      position: absolute;
      left: -20px;
      top: -50px;
      color: #eee;
      font-size: 0.7rem;
      letter-spacing: 0.05em;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 1px;
      height: 50px;
      background: #eee;
      animation: path-move 1.4s ease-in-out infinite;
      opacity: 0;
    }
  }

  @keyframes path-move {
    0% {
      height: 0;
      top: 0;
      opacity: 0;
    }
    30% {
      height: 50px;
      opacity: 1;
    }
    100% {
      height: 0;
      top: 50px;
      opacity: 0;
    }
  }
`;
const TopSection = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
        className: className,
        "data-testid": "top-section",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "top-wrap",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "top-title",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "title",
                            children: "naohito-T.github.io"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "desc",
                            children: "Code as you design."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "desc",
                            children: "Software Engineer"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "border"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "scroll-down",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "Scroll"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/organisms/index.tsx




/***/ }),

/***/ 771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_page),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/configs/_base.config.ts
class _base_config_BaseConfig {
    static RUN_ENV = "production" ?? 0;
}

;// CONCATENATED MODULE: ./src/configs/app.config.ts

/**
 * @desc App Constraint
 * @NOTE envではなく、定数管理
 */ /**
 * @desc AppMetaConfig Meta管理
 * @NOTE 基本的には各pageで設定するが、設定しなかった場合のdefault値
 */ class AppMetaConfig extends _base_config_BaseConfig {
    /**
   * @desc Page default title
   */ static PAGE_TITLE = "NAOHITO-T.GITHUB.IO";
    /**
   * @desc Page default description
   */ static PAGE_DESCRIPTION = "千葉出身。都内（銀座）での美容師経験があるソフトウェアエンジニア。モデル撮影のために購入したmacを使っていたらPCの仕組みが気になり始め、気づいたらエンジニアに。人生まるごとクリエイティブだと思っている。人の髪をデザインしていた経験をIT業界へ活かせることはないか日々模索中。";
    /**
   * @desc Page default url
   */ static PAGE_URL = this.RUN_ENV === "development" ? "http://localhost:3000/" : "https://moderato.vercel.app/";
    /**
   * @desc Page default og image
   */ static PAGE_OG_IMAGE = "/images/about_me.jpg";
    /**
   * @desc copyright
   */ static COPYRIGHT = "\xa9NAOHITO-T.GITHUB.IO";
}
class AppGSAPMatchMediaConfig extends (/* unused pure expression or super */ null && (BaseConfig)) {
    /**
   * @desc 769px以上
   */ static MEDIA_PC = (/* unused pure expression or super */ null && ("(min-width: 769px)"));
    /**
   * @desc 768px以下
   */ static MEDIA_SP = (/* unused pure expression or super */ null && ("(max-width: 768px)"));
    /**
   * @desc 768px以下
   */ static MEDIA_SMALL_SP = (/* unused pure expression or super */ null && ("(max-width: 375px)"));
}

;// CONCATENATED MODULE: ./src/configs/env.config.ts

class AppEnvConfig extends _base_config_BaseConfig {
    static MICRO_CMS_DOMAIN = process.env.MICRO_CMS_DOMAIN ?? "";
    static MICRO_CMS_API_KEY = process.env.MICRO_CMS_API_KEY ?? "";
    static PUBLIC_URL = process.env.PUBLIC_URL ?? "http://localhost:3000";
}

;// CONCATENATED MODULE: ./src/configs/index.ts




;// CONCATENATED MODULE: ./src/components/molecules/meta.tsx



/**
 * @desc 各pageでincludeし使用する（defaultを使用する場合は引数に含めないこと）
 */ const Meta = ({ pageFullPath , pageAsPath , pageTitle , pageDesc , ogpImage , noIndex =false  })=>{
    const title = pageTitle ?? AppMetaConfig.PAGE_TITLE;
    const description = pageDesc ?? AppMetaConfig.PAGE_DESCRIPTION;
    const type = pageAsPath === "/" ? "blog" : "article";
    const url = pageFullPath ?? AppMetaConfig.PAGE_URL;
    const siteName = AppMetaConfig.PAGE_TITLE;
    const ogImg = ogpImage ?? AppMetaConfig.PAGE_OG_IMAGE;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: type
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: siteName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: ogImg
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:locale",
                content: "ja_JP"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "fb:app_id",
                content: ""
            }),
            noIndex && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "noindex"
            })
        ]
    });
};

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/styles/modules/index.ts + 3 modules
var modules = __webpack_require__(686);
;// CONCATENATED MODULE: ./src/components/molecules/header.tsx





const CircleBounce = dynamic_default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 270)).then((module)=>module.CircleBounce), {
    loadableGenerated: {
        modules: [
            "../components/molecules/header.tsx -> " + "./circle-bounce"
        ]
    },
    loading: ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
    ssr: false
});
const Wrapper = external_styled_components_default().header.withConfig({
    componentId: "sc-4c510791-0"
})`
  ${(0,modules/* displayFlex */.j2)({
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start"
})}
  background: transparent;
  z-index: 10;
  user-select: none;
  height: 80px;

  .timeline-wrapper {
    position: relative;
    padding: 0 2rem;

    .timeline {
      position: absolute;

      .circle {
      }
    }
  }

  .title {
    height: 100%;
    line-height: 80px;
  }
`;
const Header = ({ className =""  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
        className: className,
        "data-testid": "header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "timeline-wrapper",
                children: /*#__PURE__*/ jsx_runtime_.jsx(CircleBounce, {
                    id: "circle-bounce"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "title",
                children: AppMetaConfig.PAGE_TITLE
            })
        ]
    });
};

;// CONCATENATED MODULE: external "@mui/icons-material/Twitter"
const Twitter_namespaceObject = require("@mui/icons-material/Twitter");
;// CONCATENATED MODULE: external "@mui/icons-material/GitHub"
const GitHub_namespaceObject = require("@mui/icons-material/GitHub");
;// CONCATENATED MODULE: external "@mui/icons-material/RssFeed"
const RssFeed_namespaceObject = require("@mui/icons-material/RssFeed");
;// CONCATENATED MODULE: ./src/components/atoms/icon.tsx




const Icon = ({ typeIcon , fontSize ="small"  })=>{
    switch(typeIcon){
        case "blog":
            return /*#__PURE__*/ _jsx(RssFeedIcon, {
                fontSize: fontSize
            });
        case "twitter":
            return /*#__PURE__*/ _jsx(TwitterIcon, {
                fontSize: fontSize
            });
        case "github":
            return /*#__PURE__*/ _jsx(GitHubIcon, {
                fontSize: fontSize
            });
        default:
            return /*#__PURE__*/ _jsx(_Fragment, {});
    }
};

;// CONCATENATED MODULE: ./src/components/atoms/copyright.tsx



const copyright_Wrapper = external_styled_components_default().p.withConfig({
    componentId: "sc-89fb79d6-0"
})`
  font-size: ${(props)=>props.size};
  letter-spacing: 0.05rem;
`;
const Copyright = ({ className ="" , size  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(copyright_Wrapper, {
        className: className,
        size: size,
        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
            children: AppMetaConfig.COPYRIGHT
        })
    });
};

;// CONCATENATED MODULE: ./src/components/atoms/index.tsx



;// CONCATENATED MODULE: ./src/components/molecules/footer.tsx




const footer_Wrapper = external_styled_components_default().footer.withConfig({
    componentId: "sc-e0b2a830-0"
})`
  height: 100vh;
  width: 100%;

  .footer-inner {
    ${(0,modules/* displayFlex */.j2)({
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
})};
    height: 90%;
  }

  .footer-mail {
    ${(0,modules/* displayFlex */.j2)({})};
    width: 100%;
    overflow: hidden;

    .mail-text {
      font-size: 2rem;
      overflow: hidden;
      ${modules/* MediaSP */.tL`
        font-size: 1.5rem;
      `}
    }
  }

  .footer-copyright {
    height: 10%;
    text-align: center;
  }
`;
const Footer = ({ className =""  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(footer_Wrapper, {
        className: className,
        "data-testid": "footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer-inner",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footer-mail",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "mail-text",
                            children: "WORK CONTACT"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "mail-text",
                            children: "NAOHITO-T"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Copyright, {
                className: "footer-copyright",
                size: "1rem"
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/components/molecules/circle-bounce.tsx + 8 modules
var circle_bounce = __webpack_require__(270);
;// CONCATENATED MODULE: ./src/components/molecules/index.tsx





;// CONCATENATED MODULE: ./src/components/templates/layout/layout.tpl.tsx




const Cube = dynamic_default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 505)).then((module)=>module.Cube), {
    loadableGenerated: {
        modules: [
            "../components/templates/layout/layout.tpl.tsx -> " + "@/components/organisms"
        ]
    },
    ssr: false
});
const layout_tpl_Wrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-ccff19c4-0"
})`
  width: 100%;

  .header {
    position: fixed;
    width: 100%;
    height: 80px;
  }

  .cube {
    position: absolute;
    z-index: -10;
  }

  .main {
    padding-top: 80px;
    width: 100%;
  }
`;
const Layout = ({ disableRightClick =false , children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_tpl_Wrapper, {
        className: "layout",
        onContextMenu: (e)=>disableRightClick && e.preventDefault(),
        "data-testid": "layout",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                className: "header"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Cube, {
                className: "cube"
            }),
            children
        ]
    });
};

// EXTERNAL MODULE: ./src/components/organisms/index.tsx + 2 modules
var organisms = __webpack_require__(505);
;// CONCATENATED MODULE: ./src/components/templates/top/top.tpl.tsx





const top_tpl_Wrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-f9edcded-0"
})`
  width: 100%;
  ${(0,modules/* displayFlex */.j2)({})}
  .top {
    height: 100%;
  }

  .content {
    width: 100%;
    padding: 10vw 5% 5vw;
  }

  .item {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 10vw;
  }

  .item:nth-child(odd) {
    flex-direction: row-reverse;
  }

  .item .image {
    width: 35%;
    max-height: 300px;
    height: 15vw;
    overflow: visible;
  }

  .item .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .item .text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 0 5%;
    background: rgb(32 32 32 / 75%);
    border-radius: 8px;
  }
`;
const TopTpl = ({ className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(top_tpl_Wrapper, {
            className: className,
            "data-testid": "top-tpl",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(organisms.TopSection, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image",
                                    "data-scroll-speed": "-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text",
                                    "data-y": "-8rem",
                                    "data-scroll-speed": "-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Fashion"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text",
                                    "data-y": "-50",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Nature"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image",
                                    "data-y": "-100",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Fashion"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "separate",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "",
                        "data-y": "-20vw",
                        src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                    className: "footer"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/templates/index.tsx



;// CONCATENATED MODULE: external "microcms-js-sdk"
const external_microcms_js_sdk_namespaceObject = require("microcms-js-sdk");
;// CONCATENATED MODULE: ./src/apis/services/cms.service.ts
class CMSService {
    constructor(client){
        this.mCMSClient = client;
    }
}

;// CONCATENATED MODULE: ./src/apis/resources/guest.ts

class GuestResource extends CMSService {
    fetchSns() {
        ;
    }
}

;// CONCATENATED MODULE: ./src/apis/containers/guest.ts



const client = (0,external_microcms_js_sdk_namespaceObject.createClient)({
    serviceDomain: AppEnvConfig.MICRO_CMS_DOMAIN,
    apiKey: AppEnvConfig.MICRO_CMS_API_KEY
});
const GuestAPI = new GuestResource(client);

;// CONCATENATED MODULE: ./src/apis/containers/index.ts


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "react-locomotive-scroll"
const external_react_locomotive_scroll_namespaceObject = require("react-locomotive-scroll");
;// CONCATENATED MODULE: ./src/context/rls.context.tsx



const RLSProvider = ({ children  })=>{
    const containerRef = (0,external_react_.useRef)(null);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_locomotive_scroll_namespaceObject.LocomotiveScrollProvider, {
        options: {
            smooth: true
        },
        watch: [],
        containerRef: containerRef,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/context/index.tsx
/**
 * @desc react-locomotive-scroll context
 */ 

;// CONCATENATED MODULE: ./src/pages/index.page.tsx






const getStaticProps = async ()=>{
    GuestAPI.fetchSns();
    return {
        props: {}
    };
};
const Top = ({})=>{
    const { pathname , asPath  } = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta, {
                pageFullPath: pathname,
                pageAsPath: asPath
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                disableRightClick: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(RLSProvider, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-scroll-container": true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TopTpl, {})
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const index_page = (Top);


/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 522:
/***/ ((module) => {

module.exports = require("p5/lib/addons/p5.sound");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 919:
/***/ ((module) => {

module.exports = require("react-p5");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 908:
/***/ ((module) => {

module.exports = require("styled-media-query");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,152,686], () => (__webpack_exec__(771)));
module.exports = __webpack_exports__;

})();