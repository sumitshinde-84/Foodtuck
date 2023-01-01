/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/MenuPage.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/MenuPage.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/header.png */ "./src/images/header.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/totalInfoSect.png */ "./src/images/totalInfoSect.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.bodyPage {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    background-color: black;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size:100%;\n    background-position-x: 100px;\n    background-repeat: no-repeat;\n    overflow: auto;\n    overflow-x: hidden;\n    opacity: 1;\n    background-position: top;\n    \n}\n\n.headerForNav{\n    \n    grid-column: 1/14;\n    grid-row: 1/2;\n    background-color: var(--black-bg-clr);\n    display: flex;\n    align-items: center;\n    \n}\n\n\n\n.logoForHeader{\n    margin-left: 60px;\n}\n\n.navForHeader{\n\n    margin-left: 400px;\n}\n\n.headerForNav h1{\n    position: absolute;\n    top: 150px;\n    left: 570px;\n    font-family:  Helvetica, sans-serif;\n    color: white;\n}\n\n.headerForNav p{\n    position: absolute;\n    top: 190px;\n    left: 596px;\n    font-family:  Helvetica, sans-serif;\n    color:var(--primary-clr);\n}\n\n.headerForNav span{\n  \n    font-family:  Helvetica, sans-serif;\n    color:var(--white-clr);\n}\n\n\n.MenuBody{\n    grid-column: 1/14;\n    grid-row: 5/50;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n}\n\n.MenuBody img{\n    width: 380px;\n    height: 100%;\n    opacity: 1;\n}\n\n.MenuBody .one{\n    width: 940px;\n    height: 500px;\n    \n    display: flex;\n    gap: 25px;\n    margin-top: 100px\n   \n    ;\n}\n\n\n\n.MenuBody  li{\n    margin: 20px 20px;\n    display: grid;\n    \n    grid-auto-flow: column;\n    grid-template-columns: 6fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    \n }\n\n .MenuBody  p:first-child{\n    grid-column: 1/6;\n    grid-row: 1/2;\n    color: black;\n    font-size: 15px;\n    font-family: 'Inter',sans-serif;\n    \n\n }\n\n\n\n .MenuBody  p:nth-child(2){\n    grid-column: 1/6;\n    grid-row: 2/3;\n    color: black;\n    font-family: 'Inter',sans-serif;\n    font-size: 12px;\n    font-weight: 300;\n    margin-top: -17px;\n }\n \n\n .MenuBody  p:nth-child(3){\n    \n    color: var(--primary-clr);\n    margin-left:100px;\n }\n\n .MenuBody h2{\n    font-size: 40px;\n    margin-left: 20px;\n    margin-bottom: 20px;\n    \n }\n\n\n .restrauInfoSectForHeader{\n   grid-column: 1 /14;\n   grid-row: 24/28;\n   background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n;\n}\n\n.MenuBody div:nth-child(3){\n\n    margin-top: 500px;\n    ;\n}\n\n.MenuBody .workWith{\n    \n    display: flex;\n    \n    gap: 50px;\n    position: absolute;\n    top:-350px;\n    left: 150px;\n    \n   \n}\n\n\n\n.MenuBody .workWith img{\n    width: 130px;\n    height: 130px;;\n\n    \n}\n\n.partner{\n    width: 100vw;\n    height: 400px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n   \n    \n}\n\n.partner p{\n   \nmargin-left: 43%;\nmargin-top: 60px;\n}\n\n.partner h2{\n    margin-left: 30%;\n    \n    }\n\n.contentSecondStyle{\n    width: 100vw;\nbackground-color:rgba(0, 0, 0, 0.804);\nheight: 120%;\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-template-columns: repeat(12,88px);\ngrid-template-rows: repeat(60,70px);\ngap:0px 24px;\nz-index: 1;\n}\n\n.footerClass{\n    grid-column: 1/14;\n    grid-row: 48/54;\n    padding: 30px  20px;\n    position: absolute;\n    top: 130px;\n    /* border: 1px var(--white-clr) solid; */\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/css/MenuPage.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,yDAA6C;IAC7C,oBAAoB;IACpB,4BAA4B;IAC5B,4BAA4B;IAC5B,cAAc;IACd,kBAAkB;IAClB,UAAU;IACV,wBAAwB;;AAE5B;;AAEA;;IAEI,iBAAiB;IACjB,aAAa;IACb,qCAAqC;IACrC,aAAa;IACb,mBAAmB;;AAEvB;;;;AAIA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,mCAAmC;IACnC,wBAAwB;AAC5B;;AAEA;;IAEI,mCAAmC;IACnC,sBAAsB;AAC1B;;;AAGA;IACI,iBAAiB;IACjB,cAAc;IACd,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;AAEvB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,SAAS;IACT;;IAEA;AACJ;;;;AAIA;IACI,iBAAiB;IACjB,aAAa;;IAEb,sBAAsB;IACtB,8BAA8B;IAC9B,2BAA2B;;CAE9B;;CAEA;IACG,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,eAAe;IACf,+BAA+B;;;CAGlC;;;;CAIA;IACG,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,+BAA+B;IAC/B,eAAe;IACf,gBAAgB;IAChB,iBAAiB;CACpB;;;CAGA;;IAEG,yBAAyB;IACzB,iBAAiB;CACpB;;CAEA;IACG,eAAe;IACf,iBAAiB;IACjB,mBAAmB;;CAEtB;;;CAGA;GACE,kBAAkB;GAClB,eAAe;GACf,yDAAoD;;AAEvD;;AAEA;;IAEI,iBAAiB;;AAErB;;AAEA;;IAEI,aAAa;;IAEb,SAAS;IACT,kBAAkB;IAClB,UAAU;IACV,WAAW;;;AAGf;;;;AAIA;IACI,YAAY;IACZ,aAAa;;;AAGjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,kBAAkB;;;AAGtB;;AAEA;;AAEA,gBAAgB;AAChB,gBAAgB;AAChB;;AAEA;IACI,gBAAgB;;IAEhB;;AAEJ;IACI,YAAY;AAChB,qCAAqC;AACrC,YAAY;AACZ,aAAa;AACb,sBAAsB;AACtB,sCAAsC;AACtC,mCAAmC;AACnC,YAAY;AACZ,UAAU;AACV;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,wCAAwC;IACxC,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["\n.bodyPage {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    background-color: black;\n    background-image: url('../images/header.png');\n    background-size:100%;\n    background-position-x: 100px;\n    background-repeat: no-repeat;\n    overflow: auto;\n    overflow-x: hidden;\n    opacity: 1;\n    background-position: top;\n    \n}\n\n.headerForNav{\n    \n    grid-column: 1/14;\n    grid-row: 1/2;\n    background-color: var(--black-bg-clr);\n    display: flex;\n    align-items: center;\n    \n}\n\n\n\n.logoForHeader{\n    margin-left: 60px;\n}\n\n.navForHeader{\n\n    margin-left: 400px;\n}\n\n.headerForNav h1{\n    position: absolute;\n    top: 150px;\n    left: 570px;\n    font-family:  Helvetica, sans-serif;\n    color: white;\n}\n\n.headerForNav p{\n    position: absolute;\n    top: 190px;\n    left: 596px;\n    font-family:  Helvetica, sans-serif;\n    color:var(--primary-clr);\n}\n\n.headerForNav span{\n  \n    font-family:  Helvetica, sans-serif;\n    color:var(--white-clr);\n}\n\n\n.MenuBody{\n    grid-column: 1/14;\n    grid-row: 5/50;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n}\n\n.MenuBody img{\n    width: 380px;\n    height: 100%;\n    opacity: 1;\n}\n\n.MenuBody .one{\n    width: 940px;\n    height: 500px;\n    \n    display: flex;\n    gap: 25px;\n    margin-top: 100px\n   \n    ;\n}\n\n\n\n.MenuBody  li{\n    margin: 20px 20px;\n    display: grid;\n    \n    grid-auto-flow: column;\n    grid-template-columns: 6fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    \n }\n\n .MenuBody  p:first-child{\n    grid-column: 1/6;\n    grid-row: 1/2;\n    color: black;\n    font-size: 15px;\n    font-family: 'Inter',sans-serif;\n    \n\n }\n\n\n\n .MenuBody  p:nth-child(2){\n    grid-column: 1/6;\n    grid-row: 2/3;\n    color: black;\n    font-family: 'Inter',sans-serif;\n    font-size: 12px;\n    font-weight: 300;\n    margin-top: -17px;\n }\n \n\n .MenuBody  p:nth-child(3){\n    \n    color: var(--primary-clr);\n    margin-left:100px;\n }\n\n .MenuBody h2{\n    font-size: 40px;\n    margin-left: 20px;\n    margin-bottom: 20px;\n    \n }\n\n\n .restrauInfoSectForHeader{\n   grid-column: 1 /14;\n   grid-row: 24/28;\n   background-image: url('../images/totalInfoSect.png');\n;\n}\n\n.MenuBody div:nth-child(3){\n\n    margin-top: 500px;\n    ;\n}\n\n.MenuBody .workWith{\n    \n    display: flex;\n    \n    gap: 50px;\n    position: absolute;\n    top:-350px;\n    left: 150px;\n    \n   \n}\n\n\n\n.MenuBody .workWith img{\n    width: 130px;\n    height: 130px;;\n\n    \n}\n\n.partner{\n    width: 100vw;\n    height: 400px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n   \n    \n}\n\n.partner p{\n   \nmargin-left: 43%;\nmargin-top: 60px;\n}\n\n.partner h2{\n    margin-left: 30%;\n    \n    }\n\n.contentSecondStyle{\n    width: 100vw;\nbackground-color:rgba(0, 0, 0, 0.804);\nheight: 120%;\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-template-columns: repeat(12,88px);\ngrid-template-rows: repeat(60,70px);\ngap:0px 24px;\nz-index: 1;\n}\n\n.footerClass{\n    grid-column: 1/14;\n    grid-row: 48/54;\n    padding: 30px  20px;\n    position: absolute;\n    top: 130px;\n    /* border: 1px var(--white-clr) solid; */\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/WhyChoose.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/WhyChoose.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Hamburger.png */ "./src/images/Hamburger.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Cookie.png */ "./src/images/Cookie.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Wine.png */ "./src/images/Wine.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n}\n\n.mainSect{\n    grid-column: 2 /11;\n    grid-row: 26/34;\n    display: flex;\n    gap:30px;\n    margin: 20px;\n    \n}\n\n.mainSect div:nth-child(1){\n    width: 50%;\n    height:100%;\n    display: grid;\n    grid-auto-flow:row;\n    gap: 10px;\n    grid-template-rows: 1fr 3fr 1fr 1fr 1fr ;\n    grid-template-columns: 3fr 1fr 1fr 2fr;\n\n}\n\n.mainSect div:nth-child(2){\n    width: 50%;\n    height:100%;\n    display: flex;\n    flex-direction: column;\n\n}\n\n\n.mainSect div:nth-child(2) h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 10px 35px;\n}\n\n.mainSect div:nth-child(2) h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    margin: 10px 35px;\n}\n\n.mainSect div:nth-child(2) span{\n    color: var(--primary-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n}\n\n.mainSect div:nth-child(2) > p{font-size: 14px;\n    color: var(--white-clr);\n    width: 360px;\n    margin: 10px 35px;\n    font-family:'Inter', sans-serif;}\n\n.mainSect div:nth-child(1) img:first-child{\n    width:250px;\n    grid-column: 1/3;\n    grid-row: 1/3;\n  \n}\n\n.mainSect div:nth-child(1) img:nth-child(2){\n    width:190px;\n    grid-column: 3/5;\n    grid-row: 2/3;\n    margin-top: 80px;\n    margin-left: -10px;\n}\n\n\n\n\n.mainSect div:nth-child(1) img:nth-child(3){\n    grid-column: 1/2;\n    grid-row: 3/5;\n    width:180px;\n}\n\n.mainSect div:nth-child(1) img:nth-child(4){\n    grid-column: 2/4;\n    grid-row: 3/4;\n    width:150px;\n    \n}\n\n.mainSect div:nth-child(1) img:nth-child(5){\n    grid-column: 4/5;\n    grid-row: 3/4;\n    width:100px;\n}\n\n.mainSect div:nth-child(1) img:nth-child(6){\n    grid-column: 4/5;\n    grid-row: 4/5;\n    width:100px;\n    margin-right: 100px;\n    margin-bottom: 100px;\n    position: relative;\n    bottom: 50px;\n}\n\n.mealCatSect{\n    display: flex;\n    width: 300px;\n    height: 100px;\n    gap: 25px;\n    margin:30px 10px ;\n    justify-content: center;\n    align-items: center;\n}\n\n.mealCatSect >div:first-child{\n    background-color: var(--primary-clr);\n    height: 65px;\n    width: 60px;\n    border-radius: 5px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: 80%;\n    background-position: center;\n}\n\n.mealCatSect >div:nth-child(2){\n    background-color: var(--primary-clr);\n    height: 65px;\n    width: 60px;\n    border-radius: 5px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-size: 80%;\n    background-position: center;\n}\n\n.mealCatSect >div:nth-child(3){\n    background-color: var(--primary-clr);\n    height: 65px;\n    width: 60px;\n    border-radius: 5px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-repeat: no-repeat;\n    background-size: 80%;\n    background-position: center;\n}\n.FastFoodP{\n    color: white;\n    position: relative;\n    bottom: 30px;\n    left: 5px;\n\n    font-weight: 400;\n}\n\n.LunchP{\n    color: white;\n    position: relative;\n    bottom: 68px;\n    left: 105px;\n    \n    font-weight: 400;\n}\n\n.DinnerP{\n    color: white;\n    position: relative;\n    bottom: 105px;\n    left: 188px;\n    \n    font-weight: 400;\n}\n\n.ExperianceSect{\n    width: 230px;\n    \n    position: relative;\n    bottom: 100px;\n    margin-left: 35px;\n    background-color: var(--white-clr);\n    border-radius: 5px;\n    border-left: 5px var(--primary-clr) solid;\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Inter';\n}\n\n.ExperianceSect p:first-child{\n    font-size: 30px;\n    font-weight: 700;\n    color: var(--primary-clr); \n}\n\n.ExperianceSect p:nth-child(2){\n    padding: 5px;\n    font-size: 16px;\n    font-weight: 700;\n    color:black; \n}\n\n.ExperianceSect p:nth-child(2) span{\n    font-size: 13px;\n    font-weight: 200;\n\n    color:black; \n}\n\n\n", "",{"version":3,"sources":["webpack://./src/css/WhyChoose.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,QAAQ;IACR,YAAY;;AAEhB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,wCAAwC;IACxC,sCAAsC;;AAE1C;;AAEA;IACI,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;;AAE1B;;;AAGA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,mCAAmC;IACnC,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,kCAAkC;IAClC,YAAY;IACZ,eAAe;AACnB;;AAEA,+BAA+B,eAAe;IAC1C,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,+BAA+B,CAAC;;AAEpC;IACI,WAAW;IACX,gBAAgB;IAChB,aAAa;;AAEjB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,gBAAgB;IAChB,kBAAkB;AACtB;;;;;AAKA;IACI,gBAAgB;IAChB,aAAa;IACb,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,WAAW;;AAEf;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,SAAS;IACT,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,yDAAgD;IAChD,4BAA4B;IAC5B,oBAAoB;IACpB,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,yDAA6C;IAC7C,4BAA4B;IAC5B,oBAAoB;IACpB,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,yDAA2C;IAC3C,4BAA4B;IAC5B,oBAAoB;IACpB,2BAA2B;AAC/B;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,SAAS;;IAET,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,WAAW;;IAEX,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,WAAW;;IAEX,gBAAgB;AACpB;;AAEA;IACI,YAAY;;IAEZ,kBAAkB;IAClB,aAAa;IACb,iBAAiB;IACjB,kCAAkC;IAClC,kBAAkB;IAClB,yCAAyC;IACzC,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,gBAAgB;;IAEhB,WAAW;AACf","sourcesContent":["*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n}\n\n.mainSect{\n    grid-column: 2 /11;\n    grid-row: 26/34;\n    display: flex;\n    gap:30px;\n    margin: 20px;\n    \n}\n\n.mainSect div:nth-child(1){\n    width: 50%;\n    height:100%;\n    display: grid;\n    grid-auto-flow:row;\n    gap: 10px;\n    grid-template-rows: 1fr 3fr 1fr 1fr 1fr ;\n    grid-template-columns: 3fr 1fr 1fr 2fr;\n\n}\n\n.mainSect div:nth-child(2){\n    width: 50%;\n    height:100%;\n    display: flex;\n    flex-direction: column;\n\n}\n\n\n.mainSect div:nth-child(2) h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 10px 35px;\n}\n\n.mainSect div:nth-child(2) h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    margin: 10px 35px;\n}\n\n.mainSect div:nth-child(2) span{\n    color: var(--primary-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n}\n\n.mainSect div:nth-child(2) > p{font-size: 14px;\n    color: var(--white-clr);\n    width: 360px;\n    margin: 10px 35px;\n    font-family:'Inter', sans-serif;}\n\n.mainSect div:nth-child(1) img:first-child{\n    width:250px;\n    grid-column: 1/3;\n    grid-row: 1/3;\n  \n}\n\n.mainSect div:nth-child(1) img:nth-child(2){\n    width:190px;\n    grid-column: 3/5;\n    grid-row: 2/3;\n    margin-top: 80px;\n    margin-left: -10px;\n}\n\n\n\n\n.mainSect div:nth-child(1) img:nth-child(3){\n    grid-column: 1/2;\n    grid-row: 3/5;\n    width:180px;\n}\n\n.mainSect div:nth-child(1) img:nth-child(4){\n    grid-column: 2/4;\n    grid-row: 3/4;\n    width:150px;\n    \n}\n\n.mainSect div:nth-child(1) img:nth-child(5){\n    grid-column: 4/5;\n    grid-row: 3/4;\n    width:100px;\n}\n\n.mainSect div:nth-child(1) img:nth-child(6){\n    grid-column: 4/5;\n    grid-row: 4/5;\n    width:100px;\n    margin-right: 100px;\n    margin-bottom: 100px;\n    position: relative;\n    bottom: 50px;\n}\n\n.mealCatSect{\n    display: flex;\n    width: 300px;\n    height: 100px;\n    gap: 25px;\n    margin:30px 10px ;\n    justify-content: center;\n    align-items: center;\n}\n\n.mealCatSect >div:first-child{\n    background-color: var(--primary-clr);\n    height: 65px;\n    width: 60px;\n    border-radius: 5px;\n    background-image: url('../images/Hamburger.png');\n    background-repeat: no-repeat;\n    background-size: 80%;\n    background-position: center;\n}\n\n.mealCatSect >div:nth-child(2){\n    background-color: var(--primary-clr);\n    height: 65px;\n    width: 60px;\n    border-radius: 5px;\n    background-image: url('../images/Cookie.png');\n    background-repeat: no-repeat;\n    background-size: 80%;\n    background-position: center;\n}\n\n.mealCatSect >div:nth-child(3){\n    background-color: var(--primary-clr);\n    height: 65px;\n    width: 60px;\n    border-radius: 5px;\n    background-image: url('../images/Wine.png');\n    background-repeat: no-repeat;\n    background-size: 80%;\n    background-position: center;\n}\n.FastFoodP{\n    color: white;\n    position: relative;\n    bottom: 30px;\n    left: 5px;\n\n    font-weight: 400;\n}\n\n.LunchP{\n    color: white;\n    position: relative;\n    bottom: 68px;\n    left: 105px;\n    \n    font-weight: 400;\n}\n\n.DinnerP{\n    color: white;\n    position: relative;\n    bottom: 105px;\n    left: 188px;\n    \n    font-weight: 400;\n}\n\n.ExperianceSect{\n    width: 230px;\n    \n    position: relative;\n    bottom: 100px;\n    margin-left: 35px;\n    background-color: var(--white-clr);\n    border-radius: 5px;\n    border-left: 5px var(--primary-clr) solid;\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Inter';\n}\n\n.ExperianceSect p:first-child{\n    font-size: 30px;\n    font-weight: 700;\n    color: var(--primary-clr); \n}\n\n.ExperianceSect p:nth-child(2){\n    padding: 5px;\n    font-size: 16px;\n    font-weight: 700;\n    color:black; \n}\n\n.ExperianceSect p:nth-child(2) span{\n    font-size: 13px;\n    font-weight: 200;\n\n    color:black; \n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/about.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/about.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_varriables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./varriables.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/varriables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_varriables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".aboutUsSectMain{\n\n    grid-column: 2/11;\n  grid-row: 10/19;\n  margin-top: 200px;\n  margin-bottom: 200px;\n  justify-content: center;\n  display: flex;\n  margin-right: 20px;\n  gap: 50px;\n  \n  \n  \n}\n\n.aboutUsSectMain div:first-child{\n    \n    width: 50%;\n    height:120%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n   \n    \n}\n\n.aboutUsSectMain div:nth-child(2)\n{\n    height: 120%;\n    width: 50%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows:1fr 1fr;\n    gap: 8px;  \n    align-content: center;\n    justify-content: center;\n}\n\n.aboutUsSectMain div:nth-child(2) img:first-child{\n    grid-column: 1 / 3;\n    grid-row: 1/2 ;\n    height: 250px;\n    width: 100%;\n}\n.aboutUsSectMain div:nth-child(2) img:nth-child(2){\n    grid-column: 1 /2;\n    grid-row: 2/3 ;\n   \n    width: 100%;\n}\n\n.aboutUsSectMain div:nth-child(2) img:nth-child(3){\n    grid-column: 2 /3;\n    grid-row: 2/3 ;\n   \n    width: 100%;\n}\n\n.aboutUsSectMain  ul{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    list-style: none;;\n  \n     \n}\n\n.aboutUsSectMain button{\n    \n    padding: 12px 20px;\n    width:120px;\n    color: var(--white-clr);\n    background-color: var(--primary-clr);\n    border-radius: 20px;\n    border: none;\n    margin-left: 35px;\n    margin-top: 20px;\n}\n\n.aboutUsSect div:nth-child(2){\n    width: 50%;\n    height: 100%;\n}\n\n.aboutUsSectMain li{\n    font-size: 14px;\n    color: var(--white-clr);\n    font-weight: 300;\n    font-family:'Inter', sans-serif;\n}\n\n.aboutUsSectMain li::before{\n    content: '✓ ';\n    font-size: 20px;\n    margin-left: 15px;\n}\n\n.aboutUsSectMain p{\n    font-size: 14px;\n    color: var(--white-clr);\n    width: 360px;\n    margin: 10px 35px;\n    font-family:'Inter', sans-serif;\n}\n\n.aboutUsSectMain h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    margin: 10px 35px;\n\n}\n\n.aboutUsSectMain h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 10px 35px;\n\n}\n\n.aboutUsSectMain span{\n    color: var(--primary-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    \n\n}", "",{"version":3,"sources":["webpack://./src/css/about.css"],"names":[],"mappings":"AAEA;;IAEI,iBAAiB;EACnB,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;EACb,kBAAkB;EAClB,SAAS;;;;AAIX;;AAEA;;IAEI,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;;;AAG3B;;AAEA;;IAEI,YAAY;IACZ,UAAU;IACV,aAAa;IACb,8BAA8B;IAC9B,0BAA0B;IAC1B,QAAQ;IACR,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,aAAa;IACb,WAAW;AACf;AACA;IACI,iBAAiB;IACjB,cAAc;;IAEd,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,cAAc;;IAEd,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,gBAAgB;;;AAGpB;;AAEA;;IAEI,kBAAkB;IAClB,WAAW;IACX,uBAAuB;IACvB,oCAAoC;IACpC,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,gBAAgB;IAChB,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA;IACI,uBAAuB;IACvB,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,iBAAiB;;AAErB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,mCAAmC;IACnC,iBAAiB;;AAErB;;AAEA;IACI,yBAAyB;IACzB,kCAAkC;IAClC,YAAY;IACZ,eAAe;;;AAGnB","sourcesContent":["@import './varriables.css';\n\n.aboutUsSectMain{\n\n    grid-column: 2/11;\n  grid-row: 10/19;\n  margin-top: 200px;\n  margin-bottom: 200px;\n  justify-content: center;\n  display: flex;\n  margin-right: 20px;\n  gap: 50px;\n  \n  \n  \n}\n\n.aboutUsSectMain div:first-child{\n    \n    width: 50%;\n    height:120%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n   \n    \n}\n\n.aboutUsSectMain div:nth-child(2)\n{\n    height: 120%;\n    width: 50%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows:1fr 1fr;\n    gap: 8px;  \n    align-content: center;\n    justify-content: center;\n}\n\n.aboutUsSectMain div:nth-child(2) img:first-child{\n    grid-column: 1 / 3;\n    grid-row: 1/2 ;\n    height: 250px;\n    width: 100%;\n}\n.aboutUsSectMain div:nth-child(2) img:nth-child(2){\n    grid-column: 1 /2;\n    grid-row: 2/3 ;\n   \n    width: 100%;\n}\n\n.aboutUsSectMain div:nth-child(2) img:nth-child(3){\n    grid-column: 2 /3;\n    grid-row: 2/3 ;\n   \n    width: 100%;\n}\n\n.aboutUsSectMain  ul{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    list-style: none;;\n  \n     \n}\n\n.aboutUsSectMain button{\n    \n    padding: 12px 20px;\n    width:120px;\n    color: var(--white-clr);\n    background-color: var(--primary-clr);\n    border-radius: 20px;\n    border: none;\n    margin-left: 35px;\n    margin-top: 20px;\n}\n\n.aboutUsSect div:nth-child(2){\n    width: 50%;\n    height: 100%;\n}\n\n.aboutUsSectMain li{\n    font-size: 14px;\n    color: var(--white-clr);\n    font-weight: 300;\n    font-family:'Inter', sans-serif;\n}\n\n.aboutUsSectMain li::before{\n    content: '✓ ';\n    font-size: 20px;\n    margin-left: 15px;\n}\n\n.aboutUsSectMain p{\n    font-size: 14px;\n    color: var(--white-clr);\n    width: 360px;\n    margin: 10px 35px;\n    font-family:'Inter', sans-serif;\n}\n\n.aboutUsSectMain h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    margin: 10px 35px;\n\n}\n\n.aboutUsSectMain h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 10px 35px;\n\n}\n\n.aboutUsSectMain span{\n    color: var(--primary-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    \n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/blog.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/blog.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n}\n\n.blogSect{\ngrid-column: 2 / 11;\ngrid-row:68/74 ;\n/* border: 1px var(--primary-clr) solid; */\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\ntext-align: center;\n\n\n\n}\n\n.blogSect h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 3px 25px;\n\n}\n\n\n.blogSect h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 30px;\n    margin: 3px 25px\n}\n\n.blogSect span{\n    color: var(--primary-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 30px;\n    \n}\n\n.blogCardSect{\n    width: 800px;\n    height: 450px;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n   align-items: center;\n}\n\n.blogCard{\n    width: 230px;\n    height: 300px;\n    border: 1px var(--white-clr) solid;\n    text-align: left;\n    color: var(--white-clr);\n    font-family: 'Inter',sans-serif;\n    \n}\n\n.blogCard:hover{\n    width: 230px;\n    height: 300px;\n    border: 1px var(--white-clr) solid;\n    text-align: left;\n    color: var(--white-clr);\n    font-family: 'Inter',sans-serif;\n    box-shadow: 2px 2px 5px white;\n    \n}\n\n.blogCard img{\n    width: 228px;\n    height: 170px;\n   \n}\n\n.blogCard p:nth-child(2){\n    margin-top: 10px;\n    margin-left: 20px;\n    margin-bottom: 13px;\n    font-size: 15px;\n    color: var(--primary-clr);\n    \n}\n\n.blogCard p:nth-child(3){\n    margin-top: 10px;\n    margin-left: 20px;\n    margin-bottom: 13px;\n    font-size: 15px;\n    color: var(--white-clr);\n    \n}\n\n\n.blogCard p:nth-child(4){\n    margin-top: 10px;\n    margin-left: 20px;\n    margin-bottom: 13px;\n    font-size: 12px;\n    color: var(--white-clr);\n    \n}\n\n.blogCard p{\n    margin-left: 20px;\n\n}\n\n.iconSect{\n    width: 80px;\n    height: 50px;\n    display: flex;\n    gap: 7px;\n    position: relative;\n    bottom: 28px;\n    left: 150px;\n\n}\n\n.iconSect img{\n    width: 15px;\n    height: 15px;\n    \n\n}", "",{"version":3,"sources":["webpack://./src/css/blog.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;AACA,mBAAmB;AACnB,eAAe;AACf,0CAA0C;AAC1C,aAAa;AACb,sBAAsB;AACtB,mBAAmB;AACnB,kBAAkB;;;;AAIlB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,mCAAmC;IACnC,gBAAgB;;AAEpB;;;AAGA;IACI,uBAAuB;IACvB,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf;AACJ;;AAEA;IACI,yBAAyB;IACzB,kCAAkC;IAClC,YAAY;IACZ,eAAe;;AAEnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,0CAA0C;IAC1C,aAAa;IACb,SAAS;IACT,uBAAuB;GACxB,mBAAmB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kCAAkC;IAClC,gBAAgB;IAChB,uBAAuB;IACvB,+BAA+B;;AAEnC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kCAAkC;IAClC,gBAAgB;IAChB,uBAAuB;IACvB,+BAA+B;IAC/B,6BAA6B;;AAEjC;;AAEA;IACI,YAAY;IACZ,aAAa;;AAEjB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;IACf,yBAAyB;;AAE7B;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;IACf,uBAAuB;;AAE3B;;;AAGA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;IACf,uBAAuB;;AAE3B;;AAEA;IACI,iBAAiB;;AAErB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,QAAQ;IACR,kBAAkB;IAClB,YAAY;IACZ,WAAW;;AAEf;;AAEA;IACI,WAAW;IACX,YAAY;;;AAGhB","sourcesContent":["*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n}\n\n.blogSect{\ngrid-column: 2 / 11;\ngrid-row:68/74 ;\n/* border: 1px var(--primary-clr) solid; */\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\ntext-align: center;\n\n\n\n}\n\n.blogSect h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 3px 25px;\n\n}\n\n\n.blogSect h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 30px;\n    margin: 3px 25px\n}\n\n.blogSect span{\n    color: var(--primary-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 30px;\n    \n}\n\n.blogCardSect{\n    width: 800px;\n    height: 450px;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n   align-items: center;\n}\n\n.blogCard{\n    width: 230px;\n    height: 300px;\n    border: 1px var(--white-clr) solid;\n    text-align: left;\n    color: var(--white-clr);\n    font-family: 'Inter',sans-serif;\n    \n}\n\n.blogCard:hover{\n    width: 230px;\n    height: 300px;\n    border: 1px var(--white-clr) solid;\n    text-align: left;\n    color: var(--white-clr);\n    font-family: 'Inter',sans-serif;\n    box-shadow: 2px 2px 5px white;\n    \n}\n\n.blogCard img{\n    width: 228px;\n    height: 170px;\n   \n}\n\n.blogCard p:nth-child(2){\n    margin-top: 10px;\n    margin-left: 20px;\n    margin-bottom: 13px;\n    font-size: 15px;\n    color: var(--primary-clr);\n    \n}\n\n.blogCard p:nth-child(3){\n    margin-top: 10px;\n    margin-left: 20px;\n    margin-bottom: 13px;\n    font-size: 15px;\n    color: var(--white-clr);\n    \n}\n\n\n.blogCard p:nth-child(4){\n    margin-top: 10px;\n    margin-left: 20px;\n    margin-bottom: 13px;\n    font-size: 12px;\n    color: var(--white-clr);\n    \n}\n\n.blogCard p{\n    margin-left: 20px;\n\n}\n\n.iconSect{\n    width: 80px;\n    height: 50px;\n    display: flex;\n    gap: 7px;\n    position: relative;\n    bottom: 28px;\n    left: 150px;\n\n}\n\n.iconSect img{\n    width: 15px;\n    height: 15px;\n    \n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/foodCat.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/foodCat.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".FoodCatSect {\n    grid-column: 2/11;\n    grid-row: 20/25;\n    \n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    \n    \n    \n}\n\n.FoodCatSect >div:first-child{\n    width: 100%;\n    \n    display: flex;\n    justify-content: center;\n    height: 80%;\n    margin-top: auto;\n    \n   \n}\n\n.FoodCatSect div:nth-child(2){\n    font-family: Helvetica, sans-serif;\n    border-radius: 5px;\n   width: 100px;\n   height: 35px;\n   position:absolute;\n   top: 200px;\n   left: 80px;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   background-color: var(--white-clr);\n   color: var(--primary-clr);\n   font-weight: 600;\n   \n}\n\n.FoodCatSect div:nth-child(3){\n    font-family: Helvetica, sans-serif;\n    font-weight: 600;\n    position:absolute;\n    top: 245px;\n    left: 25px;\n    height: 35px;\n    width: 170px;\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--primary-clr);\n    color: var(--white-clr);\n    \n}\n.FoodCatSect > div img{\n   width: 220px;\n   margin: 0px 10px;\n   \n}\n\n.sideGrassImg{\n   position: absolute;\n   right: -200px;\n   top:180px;\n}\n\n.FoodCatSect  h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin-right: 25px;\n    \n }\n\n .FoodCatSect  h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    margin-bottom: 30px;\n    margin-left: 100px;\n    \n }\n\n .FoodCatSect span{\n    color: var(--primary-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n }", "",{"version":3,"sources":["webpack://./src/css/foodCat.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,eAAe;;IAEf,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;;;;AAItB;;AAEA;IACI,WAAW;;IAEX,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX,gBAAgB;;;AAGpB;;AAEA;IACI,kCAAkC;IAClC,kBAAkB;GACnB,YAAY;GACZ,YAAY;GACZ,iBAAiB;GACjB,UAAU;GACV,UAAU;GACV,aAAa;GACb,uBAAuB;GACvB,mBAAmB;GACnB,kCAAkC;GAClC,yBAAyB;GACzB,gBAAgB;;AAEnB;;AAEA;IACI,kCAAkC;IAClC,gBAAgB;IAChB,iBAAiB;IACjB,UAAU;IACV,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,oCAAoC;IACpC,uBAAuB;;AAE3B;AACA;GACG,YAAY;GACZ,gBAAgB;;AAEnB;;AAEA;GACG,kBAAkB;GAClB,aAAa;GACb,SAAS;AACZ;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,mCAAmC;IACnC,kBAAkB;;CAErB;;CAEA;IACG,uBAAuB;IACvB,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,kBAAkB;;CAErB;;CAEA;IACG,yBAAyB;IACzB,kCAAkC;IAClC,YAAY;IACZ,eAAe;CAClB","sourcesContent":[".FoodCatSect {\n    grid-column: 2/11;\n    grid-row: 20/25;\n    \n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    \n    \n    \n}\n\n.FoodCatSect >div:first-child{\n    width: 100%;\n    \n    display: flex;\n    justify-content: center;\n    height: 80%;\n    margin-top: auto;\n    \n   \n}\n\n.FoodCatSect div:nth-child(2){\n    font-family: Helvetica, sans-serif;\n    border-radius: 5px;\n   width: 100px;\n   height: 35px;\n   position:absolute;\n   top: 200px;\n   left: 80px;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   background-color: var(--white-clr);\n   color: var(--primary-clr);\n   font-weight: 600;\n   \n}\n\n.FoodCatSect div:nth-child(3){\n    font-family: Helvetica, sans-serif;\n    font-weight: 600;\n    position:absolute;\n    top: 245px;\n    left: 25px;\n    height: 35px;\n    width: 170px;\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--primary-clr);\n    color: var(--white-clr);\n    \n}\n.FoodCatSect > div img{\n   width: 220px;\n   margin: 0px 10px;\n   \n}\n\n.sideGrassImg{\n   position: absolute;\n   right: -200px;\n   top:180px;\n}\n\n.FoodCatSect  h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin-right: 25px;\n    \n }\n\n .FoodCatSect  h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    margin-bottom: 30px;\n    margin-left: 100px;\n    \n }\n\n .FoodCatSect span{\n    color: var(--primary-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/footer.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/footer.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/fb-f.png */ "./src/images/fb-f.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/twitter-f.png */ "./src/images/twitter-f.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/insta-f.png */ "./src/images/insta-f.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/yt-f.png */ "./src/images/yt-f.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pin-f.png */ "./src/images/pin-f.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Clock.png */ "./src/images/Clock.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer{\n  padding: 30px  20px;\n  grid-column: 1/14;\n  grid-row: 75/81;\n  /* border: 1px var(--white-clr) solid; */\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n \n}\n\n.grassCorner {\n    height: 200px;\n   position: absolute;\n   right: 0px;\n   bottom: 0px;\n   opacity: .5;\n   \n}\n\n.footerBelt{\n    height: 60px;\n    width: 100%;\n    background-color: var(--primary-clr);\n    position: absolute;\n    bottom: 0px;\n    display: flex;\n    align-items: center;\n   \n}\n\n.socialMedSec{\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  margin-right: 140px;\n}\n\n.socialMedSec div:nth-child(1){\nbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\nwidth: 27px;\nheight: 27px;\nbackground-color:var(--white-clr);\nbackground-repeat: no-repeat;\nbackground-position: center;\nbackground-size: 30%;\nmargin: 0px 6px;\n\n\n}\n\n.socialMedSec div:nth-child(2){\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  width: 27px;\n  height: 27px;\n  background-color:var(--white-clr);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 45%;\n  margin: 0px 6px;\n  \n  }\n\n.socialMedSec div:nth-child(3){\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    width: 27px;\n    height: 27px;\n    background-color:var(--white-clr);\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 45%;\n    margin: 0px 6px;\n    \n    }\n.socialMedSec div:nth-child(4){\n      background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n      width: 27px;\n      height: 27px;\n      background-color:var(--white-clr);\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: 45%;\n      margin: 0px 6px;\n      \n      }\n.socialMedSec div:nth-child(5){\n        background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n        width: 27px;\n        height: 27px;\n        background-color:var(--white-clr);\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: 45%;\n        margin: 0px 6px;\n        \n        }\n\n.footerBelt p{\n          color: var(--white-clr);\n          font-size:17px;\n          font-weight: 500;\n          margin-left: 140px;\n          font-family: 'Inter', sans-serif; \n        }\n\n.footerContent{\n\nwidth: 85%;\nheight: 100%;\n/* border: 1px var(--white-clr) solid; */\ndisplay: flex;\nalign-items: center;\nmargin-top: -20px;\n\n}\n\n.footerTxtContent{\n   width: 100%;\n   height: 50%;\n   /* border: 1px var(--primary-clr) solid; */\n   display: flex;\n   gap: 40px;\n   margin-right: 60px\n   ;\n}\n\n.footerTxtContent > div{\n  height: 200px;\n  width: 200px;\n  /* border: 1px red solid; */\n  margin-left: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 10px 0px;\n}\n\n.RctPost div{\n  \n  font-family:'Inter', sans-serif; ;\n  display: grid;\n  height: 54px;\n  grid-template-columns: 50px 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 0px 8px;\n}\n\n.RctPost img{\nheight: 40px;\nwidth: 40px;\ngrid-column: 1/2;\ngrid-row: 1/3;\n\n}\n\n.RctPost div p:nth-child(2){\n  color:rgba(255, 255, 255, 0.543);\n  font-size: 14px;\n}\n\n.RctPost div p:nth-child(3){\n  color:var(--white-clr);\n  font-size: 15px;\n  font-weight: 400;\n  \n}\n\n.RctPost h2{\n  color: var(--white-clr);\n  font-size: 18px;\n  font-family:  Helvetica, sans-serif;\n  margin-bottom: 13px;\n  font-weight: 400;\n}\n\n.helpSect h2{\n  color:var(--white-clr);\n  font-family:  Helvetica, sans-serif;\n  font-size: 18px;\n  \n  margin-bottom: 13px;\n  font-weight: 400;\n}\n\n.helpSect p{\n  color:var(--white-clr);\n  font-size: 15px;\n  font-weight: 300;\n  font-family:'Inter', sans-serif; \n  line-height: 20px;\n}\n\n\n.useFullSect p{\n  color:var(--white-clr);\n  font-size: 15px;\n  font-weight: 300;\n  font-family:'Inter', sans-serif; \n  line-height: 20px;\n}\n\n.useFullSect h2{\n  color:var(--white-clr);\n  font-family:  Helvetica, sans-serif;\n  font-size: 18px;\n  font-family:  Helvetica, sans-serif;\n  margin-bottom: 13px;\n  font-weight: 400;\n}\n\n\n\n\n\n.aboutUsSect > p{\ncolor: var(--white-clr);\nfont-weight: 300;\nfont-family: 'Inter', sans-serif ;\nfont-size: 12px !important;\nmargin-top: 8px;\n  \n}\n\n.aboutUsSect > h2{\n  color: var(--white-clr);\n  font-size: 18px;\n  font-family:  Helvetica, sans-serif;\n  margin-bottom: 13px;\n  font-weight: 400;\n    \n  }\n\n.openHrSectMain{\n display: flex;\n gap: 0px 10px;\n color: var(--white-clr);\n\n}\n\n.openHrSectIcon{\n  height: 40px;\n  width: 50px;\n  \n  background-color: var(--primary-clr);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-repeat: no-repeat;\n  border-radius: 3px;\n  background-size: 70%;\n  background-position: center;\n\n}\n\n.aboutUsSect p:nth-child(1){\n  font-size: 15px;\n\n}\n\n.aboutUsSect p:nth-child(2){\n  font-size: 10px;\n\n}\n\n.aboutUsSect p:nth-child(3){\n  font-size: 10px;\n\n}\n\n.openHrSect{\n  grid-column: 2/3;\n  grid-row: 1/4;\n}\n\n.supportSect{\n  width: 69%;\n  height: 60px;\n  border: 1px var(--white-clr) solid;\n  margin-bottom:-40px;\n  color: aliceblue;\n  border: none;\n  border-bottom: 1px var(--primary-clr) solid;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 0px 300px;\n  height: 100px;\n}\n\n.supportSect span{\ncolor: var(--primary-clr);\nfont-size: 20px;\n}\n\n.supportSect p:first-child{\n  color: var(--white-clr);\n  font-size: 19px;\n  font-family:  Helvetica, sans-serif;\n  font-weight: 900;\n  }\n\n  .supportSect p:nth-child(2){\n    color: var(--white-clr);\n    font-size: 11px;\n    font-family:  Helvetica, sans-serif;\n    \n    }\n\n    .supportSect div{\n    grid-column: 2/3;\n    grid-row: 1 / 3;\n    width: 300px;\n    height: 40px;\n    background-color: var(--primary-clr);\n    border-radius: 10px;\n    display: flex;\n      }\n\n      .supportSect input{\n        width: 200px;\n        background-color: var(--primary-clr);\n        border: none;\n        border-radius: 5px;\n        padding: 10px;\n\n          }\n\n          .supportSect input:focus{\n            width: 200px;\n            background-color: var(--primary-clr);\n            border: none;\n            border-radius: 5px;\n            padding: 10px;\n            border: none;\n            outline: none;\n    \n              }\n\n          .supportSect input::placeholder{\n            font-family: 'Inter', sans-serif;\n            color: var(--white-clr);\n           \n            \n              }\n\n      .supportSect button{\n       width: 100px;\n        background-color: var(--white-clr);\n        border: none;\n        outline: none;\n        border-radius: 5px;\n        color: var(--primary-clr);\n        font-size: 13px;\n        ;\n          }\n\n          .supportSect button:hover{\n            width: 100px;\n             background-color: var(--white-clr);\n             border: none;\n             outline: none;\n             border-radius: 5px;\n             color: var(--primary-clr);\n             font-size: 13px;\n             background-color: rgb(235, 233, 233)\n             ;\n               }\n\n    \n\n\n\n\n\n\n\n            ", "",{"version":3,"sources":["webpack://./src/css/footer.css"],"names":[],"mappings":"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","sourcesContent":[".footer{\n  padding: 30px  20px;\n  grid-column: 1/14;\n  grid-row: 75/81;\n  /* border: 1px var(--white-clr) solid; */\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n \n}\n\n.grassCorner {\n    height: 200px;\n   position: absolute;\n   right: 0px;\n   bottom: 0px;\n   opacity: .5;\n   \n}\n\n.footerBelt{\n    height: 60px;\n    width: 100%;\n    background-color: var(--primary-clr);\n    position: absolute;\n    bottom: 0px;\n    display: flex;\n    align-items: center;\n   \n}\n\n.socialMedSec{\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  margin-right: 140px;\n}\n\n.socialMedSec div:nth-child(1){\nbackground: url('../images/fb-f.png');\nwidth: 27px;\nheight: 27px;\nbackground-color:var(--white-clr);\nbackground-repeat: no-repeat;\nbackground-position: center;\nbackground-size: 30%;\nmargin: 0px 6px;\n\n\n}\n\n.socialMedSec div:nth-child(2){\n  background: url('../images/twitter-f.png');\n  width: 27px;\n  height: 27px;\n  background-color:var(--white-clr);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 45%;\n  margin: 0px 6px;\n  \n  }\n\n.socialMedSec div:nth-child(3){\n    background: url('../images/insta-f.png');\n    width: 27px;\n    height: 27px;\n    background-color:var(--white-clr);\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 45%;\n    margin: 0px 6px;\n    \n    }\n.socialMedSec div:nth-child(4){\n      background: url('../images/yt-f.png');\n      width: 27px;\n      height: 27px;\n      background-color:var(--white-clr);\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: 45%;\n      margin: 0px 6px;\n      \n      }\n.socialMedSec div:nth-child(5){\n        background: url('../images/pin-f.png');\n        width: 27px;\n        height: 27px;\n        background-color:var(--white-clr);\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: 45%;\n        margin: 0px 6px;\n        \n        }\n\n.footerBelt p{\n          color: var(--white-clr);\n          font-size:17px;\n          font-weight: 500;\n          margin-left: 140px;\n          font-family: 'Inter', sans-serif; \n        }\n\n.footerContent{\n\nwidth: 85%;\nheight: 100%;\n/* border: 1px var(--white-clr) solid; */\ndisplay: flex;\nalign-items: center;\nmargin-top: -20px;\n\n}\n\n.footerTxtContent{\n   width: 100%;\n   height: 50%;\n   /* border: 1px var(--primary-clr) solid; */\n   display: flex;\n   gap: 40px;\n   margin-right: 60px\n   ;\n}\n\n.footerTxtContent > div{\n  height: 200px;\n  width: 200px;\n  /* border: 1px red solid; */\n  margin-left: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 10px 0px;\n}\n\n.RctPost div{\n  \n  font-family:'Inter', sans-serif; ;\n  display: grid;\n  height: 54px;\n  grid-template-columns: 50px 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 0px 8px;\n}\n\n.RctPost img{\nheight: 40px;\nwidth: 40px;\ngrid-column: 1/2;\ngrid-row: 1/3;\n\n}\n\n.RctPost div p:nth-child(2){\n  color:rgba(255, 255, 255, 0.543);\n  font-size: 14px;\n}\n\n.RctPost div p:nth-child(3){\n  color:var(--white-clr);\n  font-size: 15px;\n  font-weight: 400;\n  \n}\n\n.RctPost h2{\n  color: var(--white-clr);\n  font-size: 18px;\n  font-family:  Helvetica, sans-serif;\n  margin-bottom: 13px;\n  font-weight: 400;\n}\n\n.helpSect h2{\n  color:var(--white-clr);\n  font-family:  Helvetica, sans-serif;\n  font-size: 18px;\n  \n  margin-bottom: 13px;\n  font-weight: 400;\n}\n\n.helpSect p{\n  color:var(--white-clr);\n  font-size: 15px;\n  font-weight: 300;\n  font-family:'Inter', sans-serif; \n  line-height: 20px;\n}\n\n\n.useFullSect p{\n  color:var(--white-clr);\n  font-size: 15px;\n  font-weight: 300;\n  font-family:'Inter', sans-serif; \n  line-height: 20px;\n}\n\n.useFullSect h2{\n  color:var(--white-clr);\n  font-family:  Helvetica, sans-serif;\n  font-size: 18px;\n  font-family:  Helvetica, sans-serif;\n  margin-bottom: 13px;\n  font-weight: 400;\n}\n\n\n\n\n\n.aboutUsSect > p{\ncolor: var(--white-clr);\nfont-weight: 300;\nfont-family: 'Inter', sans-serif ;\nfont-size: 12px !important;\nmargin-top: 8px;\n  \n}\n\n.aboutUsSect > h2{\n  color: var(--white-clr);\n  font-size: 18px;\n  font-family:  Helvetica, sans-serif;\n  margin-bottom: 13px;\n  font-weight: 400;\n    \n  }\n\n.openHrSectMain{\n display: flex;\n gap: 0px 10px;\n color: var(--white-clr);\n\n}\n\n.openHrSectIcon{\n  height: 40px;\n  width: 50px;\n  \n  background-color: var(--primary-clr);\n  background-image: url('../images/Clock.png');\n  background-repeat: no-repeat;\n  border-radius: 3px;\n  background-size: 70%;\n  background-position: center;\n\n}\n\n.aboutUsSect p:nth-child(1){\n  font-size: 15px;\n\n}\n\n.aboutUsSect p:nth-child(2){\n  font-size: 10px;\n\n}\n\n.aboutUsSect p:nth-child(3){\n  font-size: 10px;\n\n}\n\n.openHrSect{\n  grid-column: 2/3;\n  grid-row: 1/4;\n}\n\n.supportSect{\n  width: 69%;\n  height: 60px;\n  border: 1px var(--white-clr) solid;\n  margin-bottom:-40px;\n  color: aliceblue;\n  border: none;\n  border-bottom: 1px var(--primary-clr) solid;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 0px 300px;\n  height: 100px;\n}\n\n.supportSect span{\ncolor: var(--primary-clr);\nfont-size: 20px;\n}\n\n.supportSect p:first-child{\n  color: var(--white-clr);\n  font-size: 19px;\n  font-family:  Helvetica, sans-serif;\n  font-weight: 900;\n  }\n\n  .supportSect p:nth-child(2){\n    color: var(--white-clr);\n    font-size: 11px;\n    font-family:  Helvetica, sans-serif;\n    \n    }\n\n    .supportSect div{\n    grid-column: 2/3;\n    grid-row: 1 / 3;\n    width: 300px;\n    height: 40px;\n    background-color: var(--primary-clr);\n    border-radius: 10px;\n    display: flex;\n      }\n\n      .supportSect input{\n        width: 200px;\n        background-color: var(--primary-clr);\n        border: none;\n        border-radius: 5px;\n        padding: 10px;\n\n          }\n\n          .supportSect input:focus{\n            width: 200px;\n            background-color: var(--primary-clr);\n            border: none;\n            border-radius: 5px;\n            padding: 10px;\n            border: none;\n            outline: none;\n    \n              }\n\n          .supportSect input::placeholder{\n            font-family: 'Inter', sans-serif;\n            color: var(--white-clr);\n           \n            \n              }\n\n      .supportSect button{\n       width: 100px;\n        background-color: var(--white-clr);\n        border: none;\n        outline: none;\n        border-radius: 5px;\n        color: var(--primary-clr);\n        font-size: 13px;\n        ;\n          }\n\n          .supportSect button:hover{\n            width: 100px;\n             background-color: var(--white-clr);\n             border: none;\n             outline: none;\n             border-radius: 5px;\n             color: var(--primary-clr);\n             font-size: 13px;\n             background-color: rgb(235, 233, 233)\n             ;\n               }\n\n    \n\n\n\n\n\n\n\n            "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/fromMenu.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/fromMenu.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n\n.FromMenuMain{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    grid-column: 2/11;\n    grid-row: 42/45;\n   \n    position: relative;\n}\n\n.FromMenuMain h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 10px 35px;;\n    position: absolute;\n    left: 40%;\n    top: -110px;\n}\n\n.FromMenuMain h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    margin: 10px 35px;\n    position: absolute;\n    left: 30%;\n    top: -80px;\n}\n\n.FromMenuMain span{\n    color: var(--primary-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n}\n\n.nav{\n    /* position: absolute;\n    top: 25%; */\n}\n.nav ul li{\n    padding: 0px 20px;\n}\n\n.menuListSect{\n    width: 750px;\n    height: 320px;\n   \n    display: flex;\n    /* margin-top: auto */\n}\n\n\n.menuListSect div:first-child{\n    width: 250px;\n    height: 320px;\n    \n    \n}\n\n.menuSect{\n    width:750px;\n    height: 320px;\n    margin-top: 20px;\n    \n}\n\n.menuSect img{\n    width: 40px;\n}\n\n.menuSect ul{\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px 0px;\n    flex-wrap: wrap;\n}\n\n.menuSect li{\n    display: flex;\n    gap: 10px;\n    align-items: flex-start;\n    width:fit-content;\n   \n    justify-content: center;\n    align-items: center;\n}\n\n.foodItemImgSect{\n    width: 45px !important;\n    height: 45px !important;\n}\n\n.menuSect li img{\n    \n    \n\n}\n.menuSect li p:nth-child(1){\nfont-size: 12px;\n\n}\n\n.menuSect li p:nth-child(2){\n    font-size: 10px;\n    font-weight: 300;\n    \n    }\n\n.menuSect li p:nth-child(3){\n        font-size: 11px;\n        color: var(--primary-clr);\n}\n\n\n.displayDish img{\n    width: 200px;\n    margin-top: 20px;\n}\n\n", "",{"version":3,"sources":["webpack://./src/css/fromMenu.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,iBAAiB;IACjB,eAAe;;IAEf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,mCAAmC;IACnC,iBAAiB;IACjB,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,uBAAuB;IACvB,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,kCAAkC;IAClC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI;eACW;AACf;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,qBAAqB;AACzB;;;AAGA;IACI,YAAY;IACZ,aAAa;;;AAGjB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,gBAAgB;;AAEpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,iBAAiB;;IAEjB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;;;;AAIA;AACA;AACA,eAAe;;AAEf;;AAEA;IACI,eAAe;IACf,gBAAgB;;IAEhB;;AAEJ;QACQ,eAAe;QACf,yBAAyB;AACjC;;;AAGA;IACI,YAAY;IACZ,gBAAgB;AACpB","sourcesContent":["*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n\n.FromMenuMain{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    grid-column: 2/11;\n    grid-row: 42/45;\n   \n    position: relative;\n}\n\n.FromMenuMain h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 10px 35px;;\n    position: absolute;\n    left: 40%;\n    top: -110px;\n}\n\n.FromMenuMain h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    margin: 10px 35px;\n    position: absolute;\n    left: 30%;\n    top: -80px;\n}\n\n.FromMenuMain span{\n    color: var(--primary-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n}\n\n.nav{\n    /* position: absolute;\n    top: 25%; */\n}\n.nav ul li{\n    padding: 0px 20px;\n}\n\n.menuListSect{\n    width: 750px;\n    height: 320px;\n   \n    display: flex;\n    /* margin-top: auto */\n}\n\n\n.menuListSect div:first-child{\n    width: 250px;\n    height: 320px;\n    \n    \n}\n\n.menuSect{\n    width:750px;\n    height: 320px;\n    margin-top: 20px;\n    \n}\n\n.menuSect img{\n    width: 40px;\n}\n\n.menuSect ul{\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px 0px;\n    flex-wrap: wrap;\n}\n\n.menuSect li{\n    display: flex;\n    gap: 10px;\n    align-items: flex-start;\n    width:fit-content;\n   \n    justify-content: center;\n    align-items: center;\n}\n\n.foodItemImgSect{\n    width: 45px !important;\n    height: 45px !important;\n}\n\n.menuSect li img{\n    \n    \n\n}\n.menuSect li p:nth-child(1){\nfont-size: 12px;\n\n}\n\n.menuSect li p:nth-child(2){\n    font-size: 10px;\n    font-weight: 300;\n    \n    }\n\n.menuSect li p:nth-child(3){\n        font-size: 11px;\n        color: var(--primary-clr);\n}\n\n\n.displayDish img{\n    width: 200px;\n    margin-top: 20px;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/header.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_varriables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./varriables.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/varriables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_varriables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@200&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nheader{\n\n    display: flex;\n    grid-column: 2/12;\n    grid-row: 1/3;\n    align-items: center;\n    position: relative;\n}\n\n.logo img{\n    position: absolute;\n    top: 20px;\n    left:47%;\n}\n\nul{\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  margin-left: 20px;\n  \n}\n\nli{\n    text-decoration: none;\n    list-style: none;\n    color: #fff;\n    font-family: 'Inter', sans-serif;;\n    cursor: pointer;\n    font-weight: 500;\n}\n\n.searchSect{\n    display: flex;\n    width: 300px;\n    position: absolute;\n    top: 46px;\n    right: 1px;\n    align-items: center;\n     \n    \n}\n\n\n.searchBar{\n    display: flex;\n    align-items: center;\n    border: 1px var(--primary-clr) solid;\n    height: 35px;\n    width: 200px;\n    border-radius: 20px; \n    cursor: pointer;\n    \n}\n\n#handBag{\n    height: 20px;\n    margin: 3px;\n    cursor: pointer;\n}\n\n.searchIcon {\n    height: 20px;\n    \n    margin-right: 17px;\n}\n\n.searchBar input{\n    background: transparent;\n    border: none;\n    outline: none;\n    width: 166px;\n    \n}\n\n.searchBar input::placeholder{\n    color: #fff;\n}\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;;IAEI,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;AACZ;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,iBAAiB;;AAEnB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,WAAW;IACX,gCAAgC;IAChC,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,mBAAmB;;;AAGvB;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,oCAAoC;IACpC,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,eAAe;;AAEnB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,YAAY;;IAEZ,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,YAAY;;AAEhB;;AAEA;IACI,WAAW;AACf","sourcesContent":["@import './varriables.css';\n@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@200&display=swap');\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nheader{\n\n    display: flex;\n    grid-column: 2/12;\n    grid-row: 1/3;\n    align-items: center;\n    position: relative;\n}\n\n.logo img{\n    position: absolute;\n    top: 20px;\n    left:47%;\n}\n\nul{\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  margin-left: 20px;\n  \n}\n\nli{\n    text-decoration: none;\n    list-style: none;\n    color: #fff;\n    font-family: 'Inter', sans-serif;;\n    cursor: pointer;\n    font-weight: 500;\n}\n\n.searchSect{\n    display: flex;\n    width: 300px;\n    position: absolute;\n    top: 46px;\n    right: 1px;\n    align-items: center;\n     \n    \n}\n\n\n.searchBar{\n    display: flex;\n    align-items: center;\n    border: 1px var(--primary-clr) solid;\n    height: 35px;\n    width: 200px;\n    border-radius: 20px; \n    cursor: pointer;\n    \n}\n\n#handBag{\n    height: 20px;\n    margin: 3px;\n    cursor: pointer;\n}\n\n.searchIcon {\n    height: 20px;\n    \n    margin-right: 17px;\n}\n\n.searchBar input{\n    background: transparent;\n    border: none;\n    outline: none;\n    width: 166px;\n    \n}\n\n.searchBar input::placeholder{\n    color: #fff;\n}\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/home.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_varriables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./varriables.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/varriables.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/homeDish.png */ "./src/images/homeDish.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_varriables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@200;300;400;500;600;700;800;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "main{\n\n    grid-column: 2/13;\n  grid-row: 3/8;\n  display: flex;\n \n  \n}\n\nmain .textContent{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 48%;\n    height: 100%;\n    border: none;\n    outline: none;\n    border-left:1px var(--white-clr) solid;\n    position: relative;\n    \n}\n\n.socialSect{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    background-color: black;\n    height: 150px;\n   align-items: center;\n   justify-content: center;\n    position: absolute;\n    top:30%;\n    left: -10px;\n   \n}\n\n.socialSect img{\n    height: 14px;\n    width:14px;\n    \n}\n\n.textContent button {\n    background-color: var(--primary-clr);\n    outline: none;\n    border: none;\n    padding: 12px 20px;\n    width:120px;\n    border-radius: 20px;\n    margin:10px  35px;\n    font-size: 15px;\n    color: var(--white-clr);\n}\n\n.textContent p{\n    font-size: 14px;\ncolor: var(--white-clr);\nwidth: 390px;\nmargin: 10px 35px;\nfont-family:'Inter', sans-serif;\n}\n\n.textContent .heading2{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 350px;\n    font-size: 40px;\n    margin: 10px 35px;\n}\n\n\n.textContent .heading1{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 10px 35px;\n    \n}\n\n\n.imageSect{\n    width: 50%;\n    height: 130%;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-size: 98%;\n    background-position-x: center;\n    margin-right: 10%;\n    background-repeat: no-repeat;\n    \n}\n\n", "",{"version":3,"sources":["webpack://./src/css/home.css"],"names":[],"mappings":"AAGA;;IAEI,iBAAiB;EACnB,aAAa;EACb,aAAa;;;AAGf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,uBAAuB;IACvB,aAAa;GACd,mBAAmB;GACnB,uBAAuB;IACtB,kBAAkB;IAClB,OAAO;IACP,WAAW;;AAEf;;AAEA;IACI,YAAY;IACZ,UAAU;;AAEd;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB,uBAAuB;AACvB,YAAY;AACZ,iBAAiB;AACjB,+BAA+B;AAC/B;;AAEA;IACI,uBAAuB;IACvB,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;;AAGA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,mCAAmC;IACnC,iBAAiB;;AAErB;;;AAGA;IACI,UAAU;IACV,YAAY;IACZ,mDAAyC;IACzC,sBAAsB;IACtB,oBAAoB;IACpB,6BAA6B;IAC7B,iBAAiB;IACjB,4BAA4B;;AAEhC","sourcesContent":["@import './varriables.css';\n@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@200;300;400;500;600;700;800;900&display=swap');\n\nmain{\n\n    grid-column: 2/13;\n  grid-row: 3/8;\n  display: flex;\n \n  \n}\n\nmain .textContent{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 48%;\n    height: 100%;\n    border: none;\n    outline: none;\n    border-left:1px var(--white-clr) solid;\n    position: relative;\n    \n}\n\n.socialSect{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    background-color: black;\n    height: 150px;\n   align-items: center;\n   justify-content: center;\n    position: absolute;\n    top:30%;\n    left: -10px;\n   \n}\n\n.socialSect img{\n    height: 14px;\n    width:14px;\n    \n}\n\n.textContent button {\n    background-color: var(--primary-clr);\n    outline: none;\n    border: none;\n    padding: 12px 20px;\n    width:120px;\n    border-radius: 20px;\n    margin:10px  35px;\n    font-size: 15px;\n    color: var(--white-clr);\n}\n\n.textContent p{\n    font-size: 14px;\ncolor: var(--white-clr);\nwidth: 390px;\nmargin: 10px 35px;\nfont-family:'Inter', sans-serif;\n}\n\n.textContent .heading2{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 350px;\n    font-size: 40px;\n    margin: 10px 35px;\n}\n\n\n.textContent .heading1{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 10px 35px;\n    \n}\n\n\n.imageSect{\n    width: 50%;\n    height: 130%;\n    background: url('../images/homeDish.png');\n    background-size: cover;\n    background-size: 98%;\n    background-position-x: center;\n    margin-right: 10%;\n    background-repeat: no-repeat;\n    \n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_varriables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./varriables.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/varriables.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/home.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/footer.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./about.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/about.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_foodCat_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./foodCat.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/foodCat.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_WhyChoose_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./WhyChoose.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/WhyChoose.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_restrauInfoSect_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./restrauInfoSect.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/restrauInfoSect.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fromMenu_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./fromMenu.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/fromMenu.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ourChef_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./ourChef.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/ourChef.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_testimonial_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./testimonial.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/testimonial.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_restrauActive_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./restrauActive.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/restrauActive.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blog_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./blog.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/blog.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_MenuPage_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./MenuPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/MenuPage.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_16__);
// Imports

















var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/mainbg.png */ "./src/images/mainbg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_varriables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_foodCat_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_WhyChoose_css__WEBPACK_IMPORTED_MODULE_8__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_restrauInfoSect_css__WEBPACK_IMPORTED_MODULE_9__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fromMenu_css__WEBPACK_IMPORTED_MODULE_10__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ourChef_css__WEBPACK_IMPORTED_MODULE_11__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_testimonial_css__WEBPACK_IMPORTED_MODULE_12__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_restrauActive_css__WEBPACK_IMPORTED_MODULE_13__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blog_css__WEBPACK_IMPORTED_MODULE_14__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_MenuPage_css__WEBPACK_IMPORTED_MODULE_15__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_16___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.body{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    background-color: var(--black-bg-clr);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-position-x: 100px;\n    background-repeat: no-repeat;\n    overflow: auto;\n   \n   overflow-x: hidden;\n    background-position: top;\n    \n}\n\n\n\n.content{\nwidth: 100vw;\nbackground-color:rgba(0, 0, 0, 0.804);\nheight: 120%;\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-template-columns: repeat(12,88px);\ngrid-template-rows: repeat(80,70px);\ngap:0px 24px;\nz-index: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAeA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,qCAAqC;IACrC,yDAA6C;IAC7C,sBAAsB;IACtB,4BAA4B;IAC5B,4BAA4B;IAC5B,cAAc;;GAEf,kBAAkB;IACjB,wBAAwB;;AAE5B;;;;AAIA;AACA,YAAY;AACZ,qCAAqC;AACrC,YAAY;AACZ,aAAa;AACb,sBAAsB;AACtB,sCAAsC;AACtC,mCAAmC;AACnC,YAAY;AACZ,UAAU;AACV","sourcesContent":["@import './varriables.css';\n@import \"./header.css\";\n@import './home.css';\n@import './footer.css';\n@import './about.css';\n@import './foodCat.css';\n@import './WhyChoose.css';\n@import './restrauInfoSect.css';\n@import './fromMenu.css';\n@import './ourChef.css';\n@import './testimonial.css';\n@import './restrauActive.css';\n@import './blog.css';\n@import './MenuPage.css';\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.body{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    background-color: var(--black-bg-clr);\n    background-image: url('../images/mainbg.png');\n    background-size: cover;\n    background-position-x: 100px;\n    background-repeat: no-repeat;\n    overflow: auto;\n   \n   overflow-x: hidden;\n    background-position: top;\n    \n}\n\n\n\n.content{\nwidth: 100vw;\nbackground-color:rgba(0, 0, 0, 0.804);\nheight: 120%;\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-template-columns: repeat(12,88px);\ngrid-template-rows: repeat(80,70px);\ngap:0px 24px;\nz-index: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/ourChef.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/ourChef.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n\n.ourChefSect{\n    grid-column: 2/11;\n    grid-row: 47/52;\n   \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n}\n\n.ourChefSect h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 10px 35px;;\n    position: absolute;\n    \n}\n\n.ourChefSect h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    margin: 10px 35px;\n    position: absolute;\n    top: 30px;\n    left: 320px;\n}\n\n.ourChefSect span{\n    color: var(--primary-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n}\n\n.chefList{\n    width: 100%;\n    height: 250px;\n  \n    margin-top: auto;\n    display: flex;\n    gap: 16px;\n    justify-content: center;\n   position: relative;\n   top: 20px;\n    \n}\n\n .ourChefSect button {\n    \n    padding: 12px 20px;\n    position: absolute;\n    bottom: -80px;\n    border-radius: 20px;\n    background-color: transparent;\n    color: var(--white-clr);\n    font-weight: 400;\n    outline: none;\n    border: 1px var(--primary-clr) solid;\n    transition: .4s;\n}\n\n.ourChefSect button:hover {\n    \n    padding: 12px 20px;\n    position: absolute;\n    bottom: -80px;\n    border-radius: 20px;\n    background-color: var(--primary-clr);\n    color: var(--white-clr);\n    font-weight: 400;\n    outline: none;\n    border: 1px var(--primary-clr) solid;\n}\n\n.chefList .chefSect{\n    overflow: hidden;\n    width: 170px;\n    height: 230px;\n}\n\n.chefList img{\n    width: 170px;\n    height: 230px;\n    scale: 1;\n    \n    transition: .5s;\n}\n\n.chefList img:hover{\n    width: 170px;\n    height: 230px;\n    scale: 1.2;\n}\n\n.chefList .info{\n\n    width: 0px;\n    height: 50px;\n    background-color: var(--white-clr);\n    color: var(--black-clr);\n    position: absolute;\n    bottom: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    transition: .5s;\n}\n\n.chefList .info p:first-child{\n    font-family:'Inter', sans-serif;\n    font-size: 12px;\n    font-weight: 600;\n    display: none;\n    \n\n}\n\n.chefList .info p:nth-child(2){\n    font-family:'Inter', sans-serif;\n    font-size:10px;\n    display: none;\n    \n}\n", "",{"version":3,"sources":["webpack://./src/css/ourChef.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;;AAGA;IACI,iBAAiB;IACjB,eAAe;;IAEf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,mCAAmC;IACnC,iBAAiB;IACjB,kBAAkB;;AAEtB;;AAEA;IACI,uBAAuB;IACvB,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,kCAAkC;IAClC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,aAAa;;IAEb,gBAAgB;IAChB,aAAa;IACb,SAAS;IACT,uBAAuB;GACxB,kBAAkB;GAClB,SAAS;;AAEZ;;CAEC;;IAEG,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;IACb,oCAAoC;IACpC,eAAe;AACnB;;AAEA;;IAEI,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,oCAAoC;IACpC,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,QAAQ;;IAER,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,UAAU;AACd;;AAEA;;IAEI,UAAU;IACV,YAAY;IACZ,kCAAkC;IAClC,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,+BAA+B;IAC/B,eAAe;IACf,gBAAgB;IAChB,aAAa;;;AAGjB;;AAEA;IACI,+BAA+B;IAC/B,cAAc;IACd,aAAa;;AAEjB","sourcesContent":["*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n\n.ourChefSect{\n    grid-column: 2/11;\n    grid-row: 47/52;\n   \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n}\n\n.ourChefSect h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 10px 35px;;\n    position: absolute;\n    \n}\n\n.ourChefSect h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    margin: 10px 35px;\n    position: absolute;\n    top: 30px;\n    left: 320px;\n}\n\n.ourChefSect span{\n    color: var(--primary-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n}\n\n.chefList{\n    width: 100%;\n    height: 250px;\n  \n    margin-top: auto;\n    display: flex;\n    gap: 16px;\n    justify-content: center;\n   position: relative;\n   top: 20px;\n    \n}\n\n .ourChefSect button {\n    \n    padding: 12px 20px;\n    position: absolute;\n    bottom: -80px;\n    border-radius: 20px;\n    background-color: transparent;\n    color: var(--white-clr);\n    font-weight: 400;\n    outline: none;\n    border: 1px var(--primary-clr) solid;\n    transition: .4s;\n}\n\n.ourChefSect button:hover {\n    \n    padding: 12px 20px;\n    position: absolute;\n    bottom: -80px;\n    border-radius: 20px;\n    background-color: var(--primary-clr);\n    color: var(--white-clr);\n    font-weight: 400;\n    outline: none;\n    border: 1px var(--primary-clr) solid;\n}\n\n.chefList .chefSect{\n    overflow: hidden;\n    width: 170px;\n    height: 230px;\n}\n\n.chefList img{\n    width: 170px;\n    height: 230px;\n    scale: 1;\n    \n    transition: .5s;\n}\n\n.chefList img:hover{\n    width: 170px;\n    height: 230px;\n    scale: 1.2;\n}\n\n.chefList .info{\n\n    width: 0px;\n    height: 50px;\n    background-color: var(--white-clr);\n    color: var(--black-clr);\n    position: absolute;\n    bottom: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    transition: .5s;\n}\n\n.chefList .info p:first-child{\n    font-family:'Inter', sans-serif;\n    font-size: 12px;\n    font-weight: 600;\n    display: none;\n    \n\n}\n\n.chefList .info p:nth-child(2){\n    font-family:'Inter', sans-serif;\n    font-size:10px;\n    display: none;\n    \n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/restrauActive.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/restrauActive.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/restrauActive.png */ "./src/images/restrauActive.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/play.png */ "./src/images/play.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@200;300;400;500;600;700;800;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n}\n\n.restrauActiveSect{\n    grid-column: 1 /14;\n    grid-row: 62/66;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: center;\n}\n\n.restrauActiveSect h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin-right: 260px;\n    text-align: right;\n\n}\n\n.restrauActiveSect h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 26px;\n    text-align: right;\n    margin-right: 260px;\n    \n\n}\n\n.restrauActiveSect span{\n    color: var(--primary-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 26px;\n}\n\n.restrauActiveSect p{\n    font-family: 'Inter', sans-serif;\n    font-weight: 300;\n    font-size: 13px;\n    text-align: right;\n    margin-right: 260px;\n    color: var(--white-clr);\n    margin-top: 10px;\n}\n\n.btnSect {\n    width: auto;\n    \n  \n    margin-right: 230px;\n    display: flex;\n    align-items: center;\n    \n    \n\n}\n\n.btn1 {\n    position: relative;\n    right: -290px;\n    margin-top: 20px;\n    padding: 11px 28px;\n    background-color: transparent;\n    border: 1px var(--primary-clr) solid;\n    border-radius: 20px;\n    color: var(--white-clr);\n    outline: none;\n    transition: .3s;\n    margin-right: 15px;\n    margin-left: 200px;\n\n}\n\n.btn1:hover{\n    padding: 11px 28px;\n    background-color: var(--primary-clr);\n    border: 1px var(--primary-clr) solid;\n    border-radius: 20px;\n    color: var(--white-clr);\n    outline: none;\n    margin-left: auto;\n    margin-left: 200px;\n\n}\n\n.btn2{\n    position: relative;\n   right: -315px;\n   margin-top: 20px;\n    padding:18px;\n    background-color: var(--primary-clr);\n    border: none;\n    border-radius: 50%;\n    outline: none;\n    transition: .3s;\n    margin-left: auto;\n    margin-right: 100px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-position-x: 12px;\n\n\n}\n\n.btn2:hover{\n    padding:18px;\n    background-color: var(--primary-clr);\n    margin-top: 20px;\n    border-radius: 50%;\n    outline: none;\n    transition: .3s;\n    margin-left: auto;\n    margin-right: 100px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-position-x: 12px;\n    background-color:rgb(184, 131, 77);\n\n}\n\n.Vidplay  {\n   position: relative;\n   right: -230px;\n    width:fit-content;\n    margin-left: auto;\n    margin-right: 350px;\n    font-family: 'Inter',sans-serif;\n    font-weight:800;\n\n}\n\n.playVidSect{\n    margin-top: 17px;\n}\n\n", "",{"version":3,"sources":["webpack://./src/css/restrauActive.css"],"names":[],"mappings":"AAKA;;IAEI,WAAW;IACX,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,yDAAoD;IACpD,sBAAsB;IACtB,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,mCAAmC;IACnC,mBAAmB;IACnB,iBAAiB;;AAErB;;AAEA;IACI,uBAAuB;IACvB,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,mBAAmB;;;AAGvB;;AAEA;IACI,yBAAyB;IACzB,kCAAkC;IAClC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,WAAW;;;IAGX,mBAAmB;IACnB,aAAa;IACb,mBAAmB;;;;AAIvB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,6BAA6B;IAC7B,oCAAoC;IACpC,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,kBAAkB;;AAEtB;;AAEA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,oCAAoC;IACpC,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,iBAAiB;IACjB,kBAAkB;;AAEtB;;AAEA;IACI,kBAAkB;GACnB,aAAa;GACb,gBAAgB;IACf,YAAY;IACZ,oCAAoC;IACpC,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,yDAA2C;IAC3C,4BAA4B;IAC5B,2BAA2B;IAC3B,2BAA2B;;;AAG/B;;AAEA;IACI,YAAY;IACZ,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,yDAA2C;IAC3C,4BAA4B;IAC5B,2BAA2B;IAC3B,2BAA2B;IAC3B,kCAAkC;;AAEtC;;AAEA;GACG,kBAAkB;GAClB,aAAa;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,+BAA+B;IAC/B,eAAe;;AAEnB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@200;300;400;500;600;700;800;900&display=swap');\n\n\n\n\n*{\n\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n}\n\n.restrauActiveSect{\n    grid-column: 1 /14;\n    grid-row: 62/66;\n    background-image: url('../images/restrauActive.png');\n    background-size: cover;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: center;\n}\n\n.restrauActiveSect h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin-right: 260px;\n    text-align: right;\n\n}\n\n.restrauActiveSect h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 26px;\n    text-align: right;\n    margin-right: 260px;\n    \n\n}\n\n.restrauActiveSect span{\n    color: var(--primary-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 26px;\n}\n\n.restrauActiveSect p{\n    font-family: 'Inter', sans-serif;\n    font-weight: 300;\n    font-size: 13px;\n    text-align: right;\n    margin-right: 260px;\n    color: var(--white-clr);\n    margin-top: 10px;\n}\n\n.btnSect {\n    width: auto;\n    \n  \n    margin-right: 230px;\n    display: flex;\n    align-items: center;\n    \n    \n\n}\n\n.btn1 {\n    position: relative;\n    right: -290px;\n    margin-top: 20px;\n    padding: 11px 28px;\n    background-color: transparent;\n    border: 1px var(--primary-clr) solid;\n    border-radius: 20px;\n    color: var(--white-clr);\n    outline: none;\n    transition: .3s;\n    margin-right: 15px;\n    margin-left: 200px;\n\n}\n\n.btn1:hover{\n    padding: 11px 28px;\n    background-color: var(--primary-clr);\n    border: 1px var(--primary-clr) solid;\n    border-radius: 20px;\n    color: var(--white-clr);\n    outline: none;\n    margin-left: auto;\n    margin-left: 200px;\n\n}\n\n.btn2{\n    position: relative;\n   right: -315px;\n   margin-top: 20px;\n    padding:18px;\n    background-color: var(--primary-clr);\n    border: none;\n    border-radius: 50%;\n    outline: none;\n    transition: .3s;\n    margin-left: auto;\n    margin-right: 100px;\n    background-image: url('../images/play.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-position-x: 12px;\n\n\n}\n\n.btn2:hover{\n    padding:18px;\n    background-color: var(--primary-clr);\n    margin-top: 20px;\n    border-radius: 50%;\n    outline: none;\n    transition: .3s;\n    margin-left: auto;\n    margin-right: 100px;\n    background-image: url('../images/play.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-position-x: 12px;\n    background-color:rgb(184, 131, 77);\n\n}\n\n.Vidplay  {\n   position: relative;\n   right: -230px;\n    width:fit-content;\n    margin-left: auto;\n    margin-right: 350px;\n    font-family: 'Inter',sans-serif;\n    font-weight:800;\n\n}\n\n.playVidSect{\n    margin-top: 17px;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/restrauInfoSect.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/restrauInfoSect.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/totalInfoSect.png */ "./src/images/totalInfoSect.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n.restrauInfoSect{\n    grid-column: 1 /14;\n    grid-row: 35/39;\n\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n;\n}\n\n.restrauInfoSectBlackLayer{\n    justify-content: space-around;\n    margin-right: 60px;\n    align-items: center;\n    display: flex;\n    width: 100%;\n    height: 100%;\n  background-color: rgba(0, 0, 0, 0.722);\n  z-index: 1;\n\n}\n\n.restrauInfoSectBlackLayer div{\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    width: 200px;\n    height: 200px;\n   \n    align-items: center;\n    justify-content: center;\n}\n\n.restrauInfoSectBlackLayer div img{\n   width: 80px; \n   ;\n}\n\n.restrauInfoSectBlackLayer div p:nth-child(2){\n   color: white;\n   font-size: 19px;\n   font-family:  Helvetica, sans-serif;\n   font-weight: 600;\n }\n\n .restrauInfoSectBlackLayer div p:nth-child(3){\n    color: white;\n    font-size: 23px;\n    font-weight: 900;\n    font-family:  Helvetica, sans-serif;\n  }\n\n", "",{"version":3,"sources":["webpack://./src/css/restrauInfoSect.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,eAAe;;EAEjB,yDAAoD;;AAEtD;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,WAAW;IACX,YAAY;EACd,sCAAsC;EACtC,UAAU;;AAEZ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;IACZ,aAAa;;IAEb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;GACG,WAAW;;AAEd;;AAEA;GACG,YAAY;GACZ,eAAe;GACf,mCAAmC;GACnC,gBAAgB;CAClB;;CAEA;IACG,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,mCAAmC;EACrC","sourcesContent":["*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n.restrauInfoSect{\n    grid-column: 1 /14;\n    grid-row: 35/39;\n\n  background-image: url('../images/totalInfoSect.png');\n;\n}\n\n.restrauInfoSectBlackLayer{\n    justify-content: space-around;\n    margin-right: 60px;\n    align-items: center;\n    display: flex;\n    width: 100%;\n    height: 100%;\n  background-color: rgba(0, 0, 0, 0.722);\n  z-index: 1;\n\n}\n\n.restrauInfoSectBlackLayer div{\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    width: 200px;\n    height: 200px;\n   \n    align-items: center;\n    justify-content: center;\n}\n\n.restrauInfoSectBlackLayer div img{\n   width: 80px; \n   ;\n}\n\n.restrauInfoSectBlackLayer div p:nth-child(2){\n   color: white;\n   font-size: 19px;\n   font-family:  Helvetica, sans-serif;\n   font-weight: 600;\n }\n\n .restrauInfoSectBlackLayer div p:nth-child(3){\n    color: white;\n    font-size: 23px;\n    font-weight: 900;\n    font-family:  Helvetica, sans-serif;\n  }\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/testimonial.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/testimonial.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Quotes.png */ "./src/images/Quotes.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n\n}\n\n.Testimonial{\n    grid-column: 2/11;\n    grid-row: 54/60;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column;\n   \n   \n}\n\n\n.Testimonial h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 10px 35px;;\n    \n}\n\n.Testimonial h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 30px;\n    margin: 0px 35px;\n}\n\n.testimonialCardSect{\n    width: 600px;\n    height: 350px;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    align-self: center;\n    margin-top: 80px;\n   \n}\n\n.testimonialCards{\n    width: 400px;\n    height: 230px;\n    background-color: var(--white-clr);\n    border-radius: 2px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position-y: 50px;\n    background-position-x: center;\n    background-size: 25px;\n    \n}\n\n.testimonialCards p:nth-child(2){\n    font-size: 12px;\n    margin-top: 80px;\n    font-family: 'Inter',sans-serif;\n    width: 320px;\n    font-weight: 200;\n}\n\n.design{\n    font-size: 12px;\n    font-family: 'Inter',sans-serif;\n    font-weight:lighter;\n\n    \n}\n\n.testimonialCards p:nth-child(4){\n\n    font-size: 14px;\n    font-family: 'Inter',sans-serif;\n    font-weight: 500;\n    \n}\n\n.profile {\n    width: 70px;\n \n    position: absolute;\n    top: -30px\n;\n\n}\n\n.testimonialGreen{\n    z-index: 10;\n    position: absolute;\n    width: 350px;\n    left: 580px;\n}\n\n.starSect{\n    \n    display: flex;\n    gap: 2px;\n    align-items: center;\n    align-self: center;\n    margin-top: 3px;\n    margin-bottom: 5px;\n}\n\n.starSect img{\n    width: 15px;\n}\n\n.testimonialCardSect .SliderDot {\nwidth: 150px;\nheight: 30px;\n/* border: 1px var(--primary-clr) solid; */\nmargin-top: 20px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ngap: 5px;\n\n}\n\n.SliderDot > div:first-child{\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: var(--primary-clr);\n    opacity: 1;\n}\n\n.SliderDot > div{\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: var(--primary-clr);\n    opacity: .4;\n}\n\n.grassCornerImg{\n    position: absolute;\n    width: 25%;\n    left: -50px;\n    top: 3300px;\n    \n}", "",{"version":3,"sources":["webpack://./src/css/testimonial.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;;AAE1B;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;;;AAG1B;;;AAGA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,mCAAmC;IACnC,iBAAiB;;AAErB;;AAEA;IACI,uBAAuB;IACvB,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;;AAEpB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kCAAkC;IAClC,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yDAA6C;IAC7C,4BAA4B;IAC5B,2BAA2B;IAC3B,6BAA6B;IAC7B,qBAAqB;;AAEzB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,+BAA+B;IAC/B,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,+BAA+B;IAC/B,mBAAmB;;;AAGvB;;AAEA;;IAEI,eAAe;IACf,+BAA+B;IAC/B,gBAAgB;;AAEpB;;AAEA;IACI,WAAW;;IAEX,kBAAkB;IAClB;AACJ;;AAEA;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;;AAEA;;IAEI,aAAa;IACb,QAAQ;IACR,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;AACA,YAAY;AACZ,YAAY;AACZ,0CAA0C;AAC1C,gBAAgB;AAChB,aAAa;AACb,uBAAuB;AACvB,mBAAmB;AACnB,QAAQ;;AAER;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,WAAW;;AAEf","sourcesContent":["*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n\n}\n\n.Testimonial{\n    grid-column: 2/11;\n    grid-row: 54/60;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column;\n   \n   \n}\n\n\n.Testimonial h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 10px 35px;;\n    \n}\n\n.Testimonial h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 30px;\n    margin: 0px 35px;\n}\n\n.testimonialCardSect{\n    width: 600px;\n    height: 350px;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    align-self: center;\n    margin-top: 80px;\n   \n}\n\n.testimonialCards{\n    width: 400px;\n    height: 230px;\n    background-color: var(--white-clr);\n    border-radius: 2px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url('../images/Quotes.png');\n    background-repeat: no-repeat;\n    background-position-y: 50px;\n    background-position-x: center;\n    background-size: 25px;\n    \n}\n\n.testimonialCards p:nth-child(2){\n    font-size: 12px;\n    margin-top: 80px;\n    font-family: 'Inter',sans-serif;\n    width: 320px;\n    font-weight: 200;\n}\n\n.design{\n    font-size: 12px;\n    font-family: 'Inter',sans-serif;\n    font-weight:lighter;\n\n    \n}\n\n.testimonialCards p:nth-child(4){\n\n    font-size: 14px;\n    font-family: 'Inter',sans-serif;\n    font-weight: 500;\n    \n}\n\n.profile {\n    width: 70px;\n \n    position: absolute;\n    top: -30px\n;\n\n}\n\n.testimonialGreen{\n    z-index: 10;\n    position: absolute;\n    width: 350px;\n    left: 580px;\n}\n\n.starSect{\n    \n    display: flex;\n    gap: 2px;\n    align-items: center;\n    align-self: center;\n    margin-top: 3px;\n    margin-bottom: 5px;\n}\n\n.starSect img{\n    width: 15px;\n}\n\n.testimonialCardSect .SliderDot {\nwidth: 150px;\nheight: 30px;\n/* border: 1px var(--primary-clr) solid; */\nmargin-top: 20px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ngap: 5px;\n\n}\n\n.SliderDot > div:first-child{\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: var(--primary-clr);\n    opacity: 1;\n}\n\n.SliderDot > div{\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: var(--primary-clr);\n    opacity: .4;\n}\n\n.grassCornerImg{\n    position: absolute;\n    width: 25%;\n    left: -50px;\n    top: 3300px;\n    \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/varriables.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/varriables.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n:root{\n    --black-bg-clr:rgba(0, 0, 0, 700);\n    --white-clr:#FFFFFF;\n    --primary-clr:#FF9F0D;\n    --primary-drk-clr:#ea900a;\n}", "",{"version":3,"sources":["webpack://./src/css/varriables.css"],"names":[],"mappings":";;AAEA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,qBAAqB;IACrB,yBAAyB;AAC7B","sourcesContent":["\n\n:root{\n    --black-bg-clr:rgba(0, 0, 0, 700);\n    --white-clr:#FFFFFF;\n    --primary-clr:#FF9F0D;\n    --primary-drk-clr:#ea900a;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "loadAllhomeComponents": () => (/* binding */ loadAllhomeComponents)
/* harmony export */ });
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ "./src/modules/header.js");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/footer */ "./src/modules/footer.js");
/* harmony import */ var _modules_aboutUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/aboutUs */ "./src/modules/aboutUs.js");
/* harmony import */ var _modules_foodCat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/foodCat */ "./src/modules/foodCat.js");
/* harmony import */ var _modules_whyChoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/whyChoose */ "./src/modules/whyChoose.js");
/* harmony import */ var _modules_restrauInfoSect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/restrauInfoSect */ "./src/modules/restrauInfoSect.js");
/* harmony import */ var _modules_fromMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/fromMenu */ "./src/modules/fromMenu.js");
/* harmony import */ var _modules_testimonial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/testimonial */ "./src/modules/testimonial.js");
/* harmony import */ var _modules_restrauActive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/restrauActive */ "./src/modules/restrauActive.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _modules_ourChef__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/ourChef */ "./src/modules/ourChef.js");
/* harmony import */ var _modules_blog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/blog */ "./src/modules/blog.js");













const content = document.querySelector('#content')


function loadAllhomeComponents(){
content.removeAttribute('class')
content.className='content'

const body = document.querySelector('body');
body.className='body'
content.style.background='black'
content.style.opacity='0.8'

    function removeAllChildNodesFromDisplay() {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }}


removeAllChildNodesFromDisplay()
;(0,_modules_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)();
(0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.createHome)()
;(0,_modules_aboutUs__WEBPACK_IMPORTED_MODULE_3__.createAboutUs)()
;(0,_modules_foodCat__WEBPACK_IMPORTED_MODULE_4__.createFoodCat)()
;(0,_modules_whyChoose__WEBPACK_IMPORTED_MODULE_5__.createWhyChoose)()
;(0,_modules_restrauInfoSect__WEBPACK_IMPORTED_MODULE_6__.createRestrauInfo)()
;(0,_modules_fromMenu__WEBPACK_IMPORTED_MODULE_7__.createFromMenu)()
;(0,_modules_ourChef__WEBPACK_IMPORTED_MODULE_11__.createOurChef)()
;(0,_modules_testimonial__WEBPACK_IMPORTED_MODULE_8__.createTestimonial)()
;(0,_modules_restrauActive__WEBPACK_IMPORTED_MODULE_9__.createRestrauActive)()
;(0,_modules_blog__WEBPACK_IMPORTED_MODULE_12__.createBlog)()
;(0,_modules_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)();


const footer = document.querySelector('footer')
footer.removeAttribute('class')
footer.className='footer'

}

loadAllhomeComponents()

/***/ }),

/***/ "./src/modules/aboutUs.js":
/*!********************************!*\
  !*** ./src/modules/aboutUs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAboutUs": () => (/* binding */ createAboutUs)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/modules/images.js");


function createAboutUs(){


    const aboutUsSect = document.createElement('div')
    aboutUsSect.className='aboutUsSectMain'

    const textContent = document.createElement('div')
    const Title1 = document.createElement('h2')
    const Title2 = document.createElement('h1')
    Title1.textContent='About us'
    Title2.innerHTML='<span>We</span> Create The Best foody product'
    const para = document.createElement('p')
    para.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'

    const aboutBtn = document.createElement('button')
    aboutBtn.textContent='Read More'  
    
    const aboutList = document.createElement('ul')
    const list1 = document.createElement('li')
    list1.textContent=' Lacus nisi, et ac dapibus sit eu velit in consequat.'
    const list2 = document.createElement('li')
    list2.textContent=' Quisque diam pellentesque bibendum non dui volutpat fringilla '
    const list3 = document.createElement('li')
    list3.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit'

    aboutList.appendChild(list1)
    aboutList.appendChild(list2)
    aboutList.appendChild(list3)
    textContent.appendChild(Title1)
    textContent.appendChild(Title2)
    textContent.appendChild(para)
    textContent.appendChild(aboutList)
    textContent.appendChild(aboutBtn)

    




    const mediaSect = document.createElement('div')
    const aboutImg1 = document.createElement('img')
    aboutImg1.src=_images__WEBPACK_IMPORTED_MODULE_1__.aboutImg[0]
    const aboutImg2 = document.createElement('img')
    aboutImg2.src=_images__WEBPACK_IMPORTED_MODULE_1__.aboutImg[1]
    const aboutImg3 = document.createElement('img')
    aboutImg3.src=_images__WEBPACK_IMPORTED_MODULE_1__.aboutImg[2]


    mediaSect.appendChild(aboutImg1)
    mediaSect.appendChild(aboutImg2)
    mediaSect.appendChild(aboutImg3)



    aboutUsSect.appendChild(textContent)
    aboutUsSect.appendChild(mediaSect)
    
    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(aboutUsSect)




}

/***/ }),

/***/ "./src/modules/blog.js":
/*!*****************************!*\
  !*** ./src/modules/blog.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBlog": () => (/* binding */ createBlog)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/modules/images.js");



function createBlog(){

const blogSect = document.createElement('div')
blogSect.className='blogSect'
const title1 = document.createElement('h2')
title1.textContent='Blog Post'
const title2 = document.createElement('h1')
title2.innerHTML='<span>Lat</span>est News & Blog'

const blogCardSect = document.createElement('div')
blogCardSect.className='blogCardSect'

createBlogCard(_images__WEBPACK_IMPORTED_MODULE_1__.blogImg[0],'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis')
createBlogCard(_images__WEBPACK_IMPORTED_MODULE_1__.blogImg[1],'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis')
createBlogCard(_images__WEBPACK_IMPORTED_MODULE_1__.blogImg[2],'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis')

function createBlogCard(BLOGimg,description){
    let blogCard = document.createElement('div')
    blogCard.className='blogCard'
    let img = document.createElement('img')
    img.src = BLOGimg
    let date = document.createElement('p')
    date.textContent= '10 Feb 2022'
    let desc = document.createElement('p')
    desc.textContent=description
    let learnMore = document.createElement('p')
    learnMore.textContent='Learn More'
    let iconSect = document.createElement('div')
    iconSect.className='iconSect'
    
    let like = document.createElement('img')
    like.src = _images__WEBPACK_IMPORTED_MODULE_1__.blogImg[3]
    let comment = document.createElement('img')
    comment.src = _images__WEBPACK_IMPORTED_MODULE_1__.blogImg[4]
    let share = document.createElement('img')
    share.src = _images__WEBPACK_IMPORTED_MODULE_1__.blogImg[5]
    
    iconSect.appendChild(like)
    iconSect.appendChild(comment)
    iconSect.appendChild(share)

    blogCard.appendChild(img)
    blogCard.appendChild(date)
    blogCard.appendChild(desc)
    blogCard.appendChild(learnMore)
    blogCard.appendChild(iconSect)
    blogCardSect.appendChild(blogCard)
    
}


blogSect.appendChild(title1)
blogSect.appendChild(title2)
blogSect.appendChild(blogCardSect)
_index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(blogSect)



}

/***/ }),

/***/ "./src/modules/foodCat.js":
/*!********************************!*\
  !*** ./src/modules/foodCat.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFoodCat": () => (/* binding */ createFoodCat)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/modules/images.js");


function createFoodCat(){

    const FoodCatSect = document.createElement('div')
    FoodCatSect.className='FoodCatSect'
    const sideGrassImg = document.createElement('img')
    sideGrassImg.className='sideGrassImg'
    sideGrassImg.src=_images__WEBPACK_IMPORTED_MODULE_1__.CategoryImg[4]
    const Category = document.createElement('div')
    const Title1 = document.createElement('h2')
    Title1.textContent='Food Category'
    const Title2 = document.createElement('h1')
    Title2.innerHTML='<span>Ch</span>oose Food Item'

    const discountTag = document.createElement('div')
    const discountTagP = document.createElement('p')
    discountTagP.textContent='Save 30%'
    discountTag.appendChild(discountTagP)
    const discountTag2 = document.createElement('div')
    const discountTagP2 = document.createElement('p')
    discountTagP2.textContent='Fast Food Dish'
    discountTag2.appendChild(discountTagP2)
    FoodCatSect.appendChild(sideGrassImg)
    FoodCatSect.appendChild(discountTag)
    FoodCatSect.appendChild(discountTag2)
    FoodCatSect.appendChild(Title1)
    FoodCatSect.appendChild(Title2)

    const CategoryImg1 = document.createElement('img')
    CategoryImg1.src=_images__WEBPACK_IMPORTED_MODULE_1__.CategoryImg[1]
    const CategoryImg2 = document.createElement('img')
    CategoryImg2.src=_images__WEBPACK_IMPORTED_MODULE_1__.CategoryImg[0]
    const CategoryImg3 = document.createElement('img')
    CategoryImg3.src=_images__WEBPACK_IMPORTED_MODULE_1__.CategoryImg[2]
    const CategoryImg4 = document.createElement('img')
    CategoryImg4.src=_images__WEBPACK_IMPORTED_MODULE_1__.CategoryImg[3]
    
    Category.appendChild(CategoryImg1)
    Category.appendChild(CategoryImg2)
    Category.appendChild(CategoryImg3)
    Category.appendChild(CategoryImg4)
 

    FoodCatSect.appendChild(Category)

    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(FoodCatSect)



}

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/modules/images.js");




function createFooter(){
    const footer =  document.createElement('footer')
    footer.className='footer'
    const grassCorner = document.createElement('img')
    grassCorner.className='grassCorner'
    grassCorner.src=_images__WEBPACK_IMPORTED_MODULE_1__.footerImg[0];

    const footerBelt= document.createElement('div')
    footerBelt.className='footerBelt'
    const footerContent = document.createElement('div')
    footerContent.className='footerContent'
    const footerTxtContent = document.createElement('div')
    footerTxtContent.className='footerTxtContent'

    // recent post section

    const recentPost = document.createElement('div')
    recentPost.className='RctPost'
    const recentPostTitle = document.createElement('h2')
    recentPostTitle.textContent='Recent Post'

    const firstPost = document.createElement('div')
    const firstPostImg = document.createElement('img')
    firstPostImg.src=_images__WEBPACK_IMPORTED_MODULE_1__.footerImg[1]
    const postpara = document.createElement('p')
    postpara.textContent='20 Feb 2022'
    const postdesc = document.createElement('p')
    postdesc.textContent='Keep Your Business'

    firstPost.appendChild(firstPostImg)

    const firstPost1 = document.createElement('div')
    const firstPostImg1 = document.createElement('img')
    firstPostImg1.src=_images__WEBPACK_IMPORTED_MODULE_1__.footerImg[2]
    const postpara1 = document.createElement('p')
    postpara1.textContent='20 Feb 2022'
    const postdesc1 = document.createElement('p')
    postdesc1.textContent='Keep Your Business'

    firstPost1.appendChild(firstPostImg1)

    const firstPost2 = document.createElement('div')
    const firstPostImg2 = document.createElement('img')
    firstPostImg2.src=_images__WEBPACK_IMPORTED_MODULE_1__.footerImg[3]
    const postpara2 = document.createElement('p')
    postpara2.textContent='20 Feb 2022'
    const postdesc2 = document.createElement('p')
    postdesc2.textContent='Keep Your Business'

    firstPost2.appendChild(firstPostImg2)

    // help sect
    
    const helpSect = document.createElement('div')
    helpSect.className='helpSect'
    const helpSectTittle = document.createElement('h2');
    helpSectTittle.textContent='Help?';

    helpSect.appendChild(helpSectTittle);

    const FaqPara = document.createElement('p')
    FaqPara.textContent='FAQ'
    const termPara = document.createElement('p')
    termPara.textContent='Term & condition'
    const reportPara = document.createElement('p')
    reportPara.textContent='Reporting'
    const documentPara = document.createElement('p')
    documentPara.textContent='Documentation'
    const supportPara = document.createElement('p')
    supportPara.textContent='Support Policy'
    const Privacy = document.createElement('p')
    Privacy.textContent='Privacy'

    helpSect.appendChild(FaqPara)
    helpSect.appendChild(termPara)
    helpSect.appendChild(reportPara)
    helpSect.appendChild(documentPara)
    helpSect.appendChild(supportPara)
    helpSect.appendChild(Privacy)


    const useFullSect = document.createElement('div')
    useFullSect.className='useFullSect'
    const useFullSectTitle = document.createElement('h2')
    useFullSectTitle.textContent='Useful Link'

    const aboutLink = document.createElement('p')
    aboutLink.textContent='About'
    const newsLink = document.createElement('p')
    newsLink.textContent='News'
    const partnerLink = document.createElement('p')
    partnerLink.textContent='Partners'
    const teamLink = document.createElement('p')
    teamLink.textContent='Team'
    const menuLink = document.createElement('p')
    menuLink.textContent='Menu'
    const contactLink = document.createElement('p')
    contactLink.textContent='Contact'

    useFullSect.appendChild(useFullSectTitle)
    useFullSect.appendChild(aboutLink)
    useFullSect.appendChild(newsLink)
    useFullSect.appendChild(partnerLink)
    useFullSect.appendChild(teamLink)
    useFullSect.appendChild(menuLink)
    useFullSect.appendChild(contactLink)

    const aboutUsSect = document.createElement('div')
    aboutUsSect.className='aboutUsSect'

    const supportSect = document.createElement('div')
    supportSect.className='supportSect'
    const inputSect = document.createElement('div')
    const supportP1 = document.createElement('p')
    supportP1.innerHTML='<span>S</span>till You Need Our Support ?'
    const supportP2 = document.createElement('p')
    supportP2.textContent='Don’t wait make a smart & logical quote here. Its pretty easy.'
    const supportIpt = document.createElement('input')
    supportIpt.placeholder='Enter Your Email'
    const supportBtn = document.createElement('button')
    supportBtn.textContent='Subcribe Now'

    supportSect.appendChild(supportP1)
    supportSect.appendChild(supportP2)
    supportSect.appendChild(inputSect)
    inputSect.appendChild(supportIpt)
    inputSect.appendChild(supportBtn)

    const openHrSectMain = document.createElement('div');
    openHrSectMain.className='openHrSectMain';
    const openHrSect = document.createElement('div');

    openHrSect.className='openHrSect'
    const openHrSectP1 = document.createElement('p')
    openHrSectP1.textContent='Opening Hours'
    const openHrSectP2 = document.createElement('p')
    openHrSectP2.textContent='MON - SAT(8.00 6.00)';
    const openHrSectP3 = document.createElement('p')
    openHrSectP3.textContent='Sunday - Closed'

    const openHrSectIcon = document.createElement('div')
    openHrSectIcon.className='openHrSectIcon'

    const aboutDesc = document.createElement('p')
    
    aboutDesc.textContent=`orporate clients and leisure travelers has
    been relying on Groundlink for dependab
    safe, and professional chauffeured car
    service in major cities across World.`

    const aboutDescTitle = document.createElement('h2')
    aboutDescTitle.textContent='About Us'

    aboutUsSect.appendChild(aboutDescTitle)

    aboutUsSect.appendChild(aboutDesc)

    openHrSect.appendChild(openHrSectP1)
    openHrSect.appendChild(openHrSectP2)
    openHrSect.appendChild(openHrSectP3)
    
    openHrSectMain.appendChild(openHrSectIcon);
    openHrSectMain.appendChild(openHrSect);
    
    aboutUsSect.appendChild(openHrSectMain);

    const socialMedSec = document.createElement('div')
    socialMedSec.className='socialMedSec'
    const copyRight = document.createElement('p')
    const year = new Date().getFullYear()
    copyRight.textContent=`Copyright @ ${year} by Roni. All Rights reserved`

    const socialMediaIcon1 = document.createElement('div')
    socialMediaIcon1.className='mediaIcon'
    const socialMediaIcon2 = document.createElement('div')
    socialMediaIcon2.className='mediaIcon'
    const socialMediaIcon3 = document.createElement('div')
    socialMediaIcon3.className='mediaIcon'
    const socialMediaIcon4 = document.createElement('div')
    socialMediaIcon4.className='mediaIcon'
    const socialMediaIcon5 = document.createElement('div')
    socialMediaIcon5.className='mediaIcon'


   socialMedSec.appendChild(socialMediaIcon1)
   socialMedSec.appendChild(socialMediaIcon2)
   socialMedSec.appendChild(socialMediaIcon3)
   socialMedSec.appendChild(socialMediaIcon4)
   socialMedSec.appendChild(socialMediaIcon5)
   footerBelt.appendChild(copyRight)
   footerBelt.appendChild(socialMedSec)
    
   firstPost.appendChild(postpara)
   firstPost.appendChild(postdesc)

   firstPost1.appendChild(postpara1)
   firstPost1.appendChild(postdesc1)

   firstPost2.appendChild(postpara2)
   firstPost2.appendChild(postdesc2)
   
   recentPost.appendChild(recentPostTitle)
   recentPost.appendChild(firstPost)
   recentPost.appendChild(firstPost1)
   recentPost.appendChild(firstPost2)
   
   footerTxtContent.appendChild(aboutUsSect)
   footerTxtContent.appendChild(useFullSect)
   footerTxtContent.appendChild(helpSect)
   footerTxtContent.appendChild(recentPost)
    footer.appendChild(supportSect)
    footerContent.appendChild(footerTxtContent)
    footer.appendChild(footerContent)
    footer.appendChild(footerBelt)
    footer.appendChild(grassCorner)
    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(footer)



}

/***/ }),

/***/ "./src/modules/fromMenu.js":
/*!*********************************!*\
  !*** ./src/modules/fromMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFromMenu": () => (/* binding */ createFromMenu)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/modules/images.js");










function createFromMenu(){

    const FromMenuMain = document.createElement('div')
    FromMenuMain.className='FromMenuMain'
    const menuNav = document.createElement('div')
    menuNav.className='nav'
    const ul = document.createElement('ul')
    const li1 = document.createElement('li')
    li1.addEventListener('click',Breakfast)
    li1.textContent='Breakfast'
    const li2 = document.createElement('li')
    li2.addEventListener('click',lunch)
    li2.textContent='Lunch'
    const li3 = document.createElement('li')
    li3.addEventListener('click',Dinner)
    li3.textContent='Dinner'
    const li4 = document.createElement('li')
    li4.addEventListener('click',Dessert)
    li4.textContent='Dessert'
    const li5 = document.createElement('li')
    li5.addEventListener('click',Drink)
    li5.textContent='Drink'
    const li6 = document.createElement('li')
    li6.addEventListener('click',Snack)
    li6.textContent='Snack'
    const li7 = document.createElement('li')
    li7.addEventListener('click',Suops)
    li7.textContent='Suops'

    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    ul.appendChild(li5)
    ul.appendChild(li6)
    ul.appendChild(li7)

    menuNav.appendChild(ul)
    const menuListSect = document.createElement('div')
    menuListSect.className='menuListSect'
    const displayDish = document.createElement('div')
    displayDish.className='displayDish'
    const displayImg = document.createElement('img')
    displayImg.src=_images__WEBPACK_IMPORTED_MODULE_1__.menuItemImg[1]

    displayDish.appendChild(displayImg)
    const menu = document.createElement('div')
    menu.className='menuSect'

    const menuUl =document.createElement('ul')
    
     Breakfast()


    menu.appendChild(menuUl)
    menuListSect.appendChild(displayDish)
    menuListSect.appendChild(menu)

    const Title1 = document.createElement('h2')
    Title1.textContent='Choose & pick'
    const Title2 = document.createElement('h1')
    Title2.innerHTML='<span>Fr</span>om Our Menu'

    
    FromMenuMain.appendChild(Title1)
    FromMenuMain.appendChild(Title2)
    FromMenuMain.appendChild(menuNav)
    FromMenuMain.appendChild(menuListSect)
    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(FromMenuMain)

    function Breakfast(){

        removeAllChildNodes()
        foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuItemImg[0],'Soya Deep.','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuItemImg[1],'Fresh Breakfast','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuItemImg[2],'Mild Butter','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuItemImg[3],'Fresh Bread','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuItemImg[4],'Glow Cheese','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuItemImg[5],'Italian Pizza','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuItemImg[6],'Sllice Beef','Lacus nisi, et ac dapibus velit in consequat.','14$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuItemImg[7],'Mushaom Pizza','Lacus nisi, et ac dapibus velit in consequat.','11.5$')
    }

    function lunch(){


        removeAllChildNodes()
        foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuLunchImg[0],'Kokan Thali','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuLunchImg[1],'paneer Masala','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuLunchImg[2],'Jeera Rice','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuLunchImg[3],'Pulav','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuLunchImg[4],'Tukda Paneer','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuLunchImg[5],'Italian Pizza','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
 
   
    }

    function Dinner(){

        removeAllChildNodes()
        foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuDinnerImg[0],'Bahubali Thali','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuDinnerImg[1],'Shahi Pakvan','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuDinnerImg[2],'Darbari Thali','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuDinnerImg[3],'Puri Bhaji','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuDinnerImg[4],'Chicken Kofta','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuDinnerImg[5],'Hulk Thali','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
   
    }

    function Dessert(){

        removeAllChildNodes()
        foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuDesertImg[0],'French Pudding','12.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuDesertImg[1],'Yoghurt','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    
    }

    function Drink(){

        removeAllChildNodes()
        foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuDrinkImg[0],'Fruit Mix','12.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuDrinkImg[1],'Gulab Sharbat','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuDrinkImg[2],'Ruapja','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
    
    }

    function Snack(){

        removeAllChildNodes()
        foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuSnackImg[0],'Mix Nut','12.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuSnackImg[1],'Salted Peanut','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
   
    }

    function Suops(){

        removeAllChildNodes()
        foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuSoupImg[0],'Machau Soup','12.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuSoupImg[1],'Chineese Soup','Lacus nisi, et ac dapibus velit in consequat.','14.5$')
    foodItem(_images__WEBPACK_IMPORTED_MODULE_1__.menuSoupImg[2],'Vegi Soup','Lacus nisi, et ac dapibus velit in consequat.','12.5$')
   
    }
    function foodItem(img,Name,desc,price){
        let foodItemList = document.createElement(`li`)
        let foodItemSect = document.createElement('div')
        let foodItemImgSect =document.createElement('div')
        foodItemImgSect.className='foodItemImgSect'
        let listPara = document.createElement('div')

        let foodItemImg =document.createElement('img')
        foodItemImg.addEventListener('click',displayItemImg)
        foodItemImg.src = img
        foodItemImgSect.appendChild(foodItemImg)
        let foodItemName = document.createElement('p')
        foodItemName.textContent=Name
        let foodItemDesc = document.createElement('p')
        foodItemDesc.textContent=desc
        let foodItemPrice = document.createElement('p')
        foodItemPrice.textContent=price

        
        listPara.appendChild(foodItemName)
        listPara.appendChild(foodItemDesc)
        listPara.appendChild(foodItemPrice)
        foodItemList.appendChild(foodItemImgSect)
        foodItemList.appendChild(listPara)

        menuUl.appendChild(foodItemList)
    
        }

function displayItemImg(event){
    removeAllChildNodesFromDisplay()
    let imgForDisplay = document.createElement('img')
    imgForDisplay.src=event.target.src
    displayDish.appendChild(imgForDisplay)
    
}
        function removeAllChildNodes() {
            while (menuUl.firstChild) {
                menuUl.removeChild(menuUl.firstChild);
            }      
        }

        function removeAllChildNodesFromDisplay() {
            while (displayDish.firstChild) {
                displayDish.removeChild(displayDish.firstChild);
            }}
}



/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images */ "./src/modules/images.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuPage */ "./src/modules/menuPage.js");





function createHeader(){

    
   _index__WEBPACK_IMPORTED_MODULE_1__.content.className='content'
    const header = document.createElement('header')

    const logoSection = document.createElement('div')
    logoSection.className='logo';

    const nav = document.createElement('nav')
    const ul = document.createElement('ul')

    const logo = document.createElement('img')
    logo.src=_images__WEBPACK_IMPORTED_MODULE_0__.headerImg[0];

   const searchSect = document.createElement('div')
   searchSect.className='searchSect'

   const search = document.createElement('div')
   search.className='searchBar'
   
   const searchIcon = document.createElement('img')
   searchIcon.className='searchIcon'
   searchIcon.src=_images__WEBPACK_IMPORTED_MODULE_0__.headerImg[2]

   const searchInput =document.createElement('input')
   searchInput.placeholder='  Search...'

   const handBag = document.createElement('img')
   handBag.id='handBag'
   handBag.src=_images__WEBPACK_IMPORTED_MODULE_0__.headerImg[1]

    // list 

   const list1 = document.createElement('li')
   list1.textContent='Home'
   list1.addEventListener('click',_home__WEBPACK_IMPORTED_MODULE_2__.createHome)

   const list2 = document.createElement('li')
   list2.addEventListener('click',_menuPage__WEBPACK_IMPORTED_MODULE_3__.createMenuPage)
   list2.textContent='Menu'

   const list3 = document.createElement('li')
   list3.textContent='Blog'

   const list4 = document.createElement('li')
   list4.textContent='Pages'

   const list5 = document.createElement('li')
   list5.textContent='About'

   const list6 = document.createElement('li')
   list6.textContent='Shop'

   const list7 = document.createElement('li')
   list7.textContent='Contact'

    ul.appendChild(list1)
    ul.appendChild(list2)
    ul.appendChild(list3)
    ul.appendChild(list4)
    ul.appendChild(list5)
    ul.appendChild(list6)
    ul.appendChild(list7)


 nav.appendChild(ul)
 search.appendChild(searchInput)
search.appendChild(searchIcon)

 searchSect.appendChild(search)
 searchSect.appendChild(handBag)
 logoSection.appendChild(logo)
 
 header.appendChild(nav)
 header.appendChild(logoSection)
 header.appendChild(searchSect)
   _index__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(header)
}


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/modules/images.js");
/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutUs */ "./src/modules/aboutUs.js");




function createHome(){

const mainContent = document.createElement('main')
const textContent = document.createElement('div')
textContent.className='textContent'
const imageSect = document.createElement('div')
imageSect.className='imageSect'


const socialMedia = document.createElement('div')
socialMedia.className='socialSect'
const facebook = document.createElement('img')
facebook.src=_images__WEBPACK_IMPORTED_MODULE_1__.homeImg[0]
const twitter = document.createElement('img')
twitter.src=_images__WEBPACK_IMPORTED_MODULE_1__.homeImg[1]
const pinterest = document.createElement('img')
pinterest.src=_images__WEBPACK_IMPORTED_MODULE_1__.homeImg[2]

const button = document.createElement('button')
button.textContent='See Menu'

const description = document.createElement('p')
description.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue'

const heading2 = document.createElement('h1')
heading2.className='heading2'
heading2.textContent='The Art of speed food Quality'

const heading1 = document.createElement('h2')
heading1.className='heading1'
heading1.textContent='Its Quick & Amusing!'


socialMedia.appendChild(pinterest)
socialMedia.appendChild(twitter)
socialMedia.appendChild(facebook)

textContent.appendChild(socialMedia)
textContent.appendChild(heading1)
textContent.appendChild(heading2)
textContent.appendChild(description)
textContent.appendChild(button)
mainContent.appendChild(textContent)
mainContent.appendChild(imageSect)
_index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(mainContent)

;(0,_aboutUs__WEBPACK_IMPORTED_MODULE_2__.createAboutUs)()
}

/***/ }),

/***/ "./src/modules/images.js":
/*!*******************************!*\
  !*** ./src/modules/images.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryImg": () => (/* binding */ CategoryImg),
/* harmony export */   "MenuImg": () => (/* binding */ MenuImg),
/* harmony export */   "WhyImg": () => (/* binding */ WhyImg),
/* harmony export */   "aboutImg": () => (/* binding */ aboutImg),
/* harmony export */   "blogImg": () => (/* binding */ blogImg),
/* harmony export */   "brands": () => (/* binding */ brands),
/* harmony export */   "chefImg": () => (/* binding */ chefImg),
/* harmony export */   "footerImg": () => (/* binding */ footerImg),
/* harmony export */   "headerImg": () => (/* binding */ headerImg),
/* harmony export */   "homeImg": () => (/* binding */ homeImg),
/* harmony export */   "menuDesertImg": () => (/* binding */ menuDesertImg),
/* harmony export */   "menuDinnerImg": () => (/* binding */ menuDinnerImg),
/* harmony export */   "menuDrinkImg": () => (/* binding */ menuDrinkImg),
/* harmony export */   "menuItemImg": () => (/* binding */ menuItemImg),
/* harmony export */   "menuLunchImg": () => (/* binding */ menuLunchImg),
/* harmony export */   "menuSnackImg": () => (/* binding */ menuSnackImg),
/* harmony export */   "menuSoupImg": () => (/* binding */ menuSoupImg),
/* harmony export */   "profileImg": () => (/* binding */ profileImg),
/* harmony export */   "restrauInfoSectImg": () => (/* binding */ restrauInfoSectImg)
/* harmony export */ });
/* harmony import */ var _images_Foodtuck_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/Foodtuck.png */ "./src/images/Foodtuck.png");
/* harmony import */ var _images_Handbag_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Handbag.png */ "./src/images/Handbag.png");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/search.png */ "./src/images/search.png");
/* harmony import */ var _images_facebook_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/facebook.png */ "./src/images/facebook.png");
/* harmony import */ var _images_twitter_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/twitter.png */ "./src/images/twitter.png");
/* harmony import */ var _images_pinterest_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/pinterest.png */ "./src/images/pinterest.png");
/* harmony import */ var _images_cornerGrass_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/cornerGrass.png */ "./src/images/cornerGrass.png");
/* harmony import */ var _images_firstP_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/firstP.png */ "./src/images/firstP.png");
/* harmony import */ var _images_secondP_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/secondP.png */ "./src/images/secondP.png");
/* harmony import */ var _images_thirdP_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/thirdP.png */ "./src/images/thirdP.png");
/* harmony import */ var _images_about1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/about1.png */ "./src/images/about1.png");
/* harmony import */ var _images_about2_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/about2.png */ "./src/images/about2.png");
/* harmony import */ var _images_about3_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/about3.png */ "./src/images/about3.png");
/* harmony import */ var _images_category1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/category1.png */ "./src/images/category1.png");
/* harmony import */ var _images_category2_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/category2.png */ "./src/images/category2.png");
/* harmony import */ var _images_category3_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/category3.png */ "./src/images/category3.png");
/* harmony import */ var _images_category4_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../images/category4.png */ "./src/images/category4.png");
/* harmony import */ var _images_sideGrass_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../images/sideGrass.png */ "./src/images/sideGrass.png");
/* harmony import */ var _images_why_1_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../images/why_1.png */ "./src/images/why_1.png");
/* harmony import */ var _images_why_2_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../images/why_2.png */ "./src/images/why_2.png");
/* harmony import */ var _images_why_3_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../images/why_3.png */ "./src/images/why_3.png");
/* harmony import */ var _images_why_4_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../images/why_4.png */ "./src/images/why_4.png");
/* harmony import */ var _images_why_5_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../images/why_5.png */ "./src/images/why_5.png");
/* harmony import */ var _images_why_6_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../images/why_6.png */ "./src/images/why_6.png");
/* harmony import */ var _images_chefCap_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../images/chefCap.png */ "./src/images/chefCap.png");
/* harmony import */ var _images_foodProduct_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../images/foodProduct.png */ "./src/images/foodProduct.png");
/* harmony import */ var _images_pizza_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../images/pizza.png */ "./src/images/pizza.png");
/* harmony import */ var _images_spoon_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../images/spoon.png */ "./src/images/spoon.png");
/* harmony import */ var _images_item1_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../images/item1.png */ "./src/images/item1.png");
/* harmony import */ var _images_item2_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../images/item2.png */ "./src/images/item2.png");
/* harmony import */ var _images_item3_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../images/item3.png */ "./src/images/item3.png");
/* harmony import */ var _images_item4_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../images/item4.png */ "./src/images/item4.png");
/* harmony import */ var _images_item5_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../images/item5.png */ "./src/images/item5.png");
/* harmony import */ var _images_item6_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../images/item6.png */ "./src/images/item6.png");
/* harmony import */ var _images_item7_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../images/item7.png */ "./src/images/item7.png");
/* harmony import */ var _images_item8_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../images/item8.png */ "./src/images/item8.png");
/* harmony import */ var _images_lunch1_jpg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../images/lunch1.jpg */ "./src/images/lunch1.jpg");
/* harmony import */ var _images_lunch2_jpeg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../images/lunch2.jpeg */ "./src/images/lunch2.jpeg");
/* harmony import */ var _images_lunch3_jpeg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../images/lunch3.jpeg */ "./src/images/lunch3.jpeg");
/* harmony import */ var _images_lunch4_jpeg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../images/lunch4.jpeg */ "./src/images/lunch4.jpeg");
/* harmony import */ var _images_lunch5_jpeg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../images/lunch5.jpeg */ "./src/images/lunch5.jpeg");
/* harmony import */ var _images_lunch6_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../images/lunch6.png */ "./src/images/lunch6.png");
/* harmony import */ var _images_dinner1_jpeg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../images/dinner1.jpeg */ "./src/images/dinner1.jpeg");
/* harmony import */ var _images_dinner2_jpeg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../images/dinner2.jpeg */ "./src/images/dinner2.jpeg");
/* harmony import */ var _images_dinner3_jpeg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../images/dinner3.jpeg */ "./src/images/dinner3.jpeg");
/* harmony import */ var _images_dinner4_jpeg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../images/dinner4.jpeg */ "./src/images/dinner4.jpeg");
/* harmony import */ var _images_dinner5_jpeg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../images/dinner5.jpeg */ "./src/images/dinner5.jpeg");
/* harmony import */ var _images_dinner6_jpeg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../images/dinner6.jpeg */ "./src/images/dinner6.jpeg");
/* harmony import */ var _images_desert1_jpeg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../images/desert1.jpeg */ "./src/images/desert1.jpeg");
/* harmony import */ var _images_desert2_jpeg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../images/desert2.jpeg */ "./src/images/desert2.jpeg");
/* harmony import */ var _images_drink1_jpeg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../images/drink1.jpeg */ "./src/images/drink1.jpeg");
/* harmony import */ var _images_drink2_jpeg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../images/drink2.jpeg */ "./src/images/drink2.jpeg");
/* harmony import */ var _images_drink3_jpeg__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../images/drink3.jpeg */ "./src/images/drink3.jpeg");
/* harmony import */ var _images_snack1_jpeg__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../images/snack1.jpeg */ "./src/images/snack1.jpeg");
/* harmony import */ var _images_snack2_jpeg__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../images/snack2.jpeg */ "./src/images/snack2.jpeg");
/* harmony import */ var _images_soup1_jpeg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../images/soup1.jpeg */ "./src/images/soup1.jpeg");
/* harmony import */ var _images_soup2_jpeg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../images/soup2.jpeg */ "./src/images/soup2.jpeg");
/* harmony import */ var _images_soup3_jpeg__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../images/soup3.jpeg */ "./src/images/soup3.jpeg");
/* harmony import */ var _images_chef1_png__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../images/chef1.png */ "./src/images/chef1.png");
/* harmony import */ var _images_chef2_png__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../images/chef2.png */ "./src/images/chef2.png");
/* harmony import */ var _images_chef3_png__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../images/chef3.png */ "./src/images/chef3.png");
/* harmony import */ var _images_chef4_png__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../images/chef4.png */ "./src/images/chef4.png");
/* harmony import */ var _images_profile1_png__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../images/profile1.png */ "./src/images/profile1.png");
/* harmony import */ var _images_profile2_png__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../images/profile2.png */ "./src/images/profile2.png");
/* harmony import */ var _images_profile3_png__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../images/profile3.png */ "./src/images/profile3.png");
/* harmony import */ var _images_profile4_png__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../images/profile4.png */ "./src/images/profile4.png");
/* harmony import */ var _images_testimonial_png__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../images/testimonial.png */ "./src/images/testimonial.png");
/* harmony import */ var _images_star_png__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../images/star.png */ "./src/images/star.png");
/* harmony import */ var _images_emptyStar_png__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../images/emptyStar.png */ "./src/images/emptyStar.png");
/* harmony import */ var _images_grass2_png__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../images/grass2.png */ "./src/images/grass2.png");
/* harmony import */ var _images_blog1_png__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../images/blog1.png */ "./src/images/blog1.png");
/* harmony import */ var _images_blog2_png__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../images/blog2.png */ "./src/images/blog2.png");
/* harmony import */ var _images_blog3_png__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../images/blog3.png */ "./src/images/blog3.png");
/* harmony import */ var _images_like_png__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../images/like.png */ "./src/images/like.png");
/* harmony import */ var _images_comment_png__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../images/comment.png */ "./src/images/comment.png");
/* harmony import */ var _images_share_png__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ../images/share.png */ "./src/images/share.png");
/* harmony import */ var _images_categoryForMenu1_png__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../images/categoryForMenu1.png */ "./src/images/categoryForMenu1.png");
/* harmony import */ var _images_categoryForMenu2_png__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../images/categoryForMenu2.png */ "./src/images/categoryForMenu2.png");
/* harmony import */ var _images_categoryForMenu3_png__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ../images/categoryForMenu3.png */ "./src/images/categoryForMenu3.png");
/* harmony import */ var _images_categoryForMenu4_png__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ../images/categoryForMenu4.png */ "./src/images/categoryForMenu4.png");
/* harmony import */ var _images_Coffee_png__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ../images/Coffee.png */ "./src/images/Coffee.png");
/* harmony import */ var _images_brand1_png__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ../images/brand1.png */ "./src/images/brand1.png");
/* harmony import */ var _images_brand2_png__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ../images/brand2.png */ "./src/images/brand2.png");
/* harmony import */ var _images_brand3_png__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../images/brand3.png */ "./src/images/brand3.png");
/* harmony import */ var _images_brand4_png__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ../images/brand4.png */ "./src/images/brand4.png");
/* harmony import */ var _images_brand5_png__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../images/brand5.png */ "./src/images/brand5.png");
/* harmony import */ var _images_brand6_png__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ../images/brand6.png */ "./src/images/brand6.png");

























































































const headerImg = [_images_Foodtuck_png__WEBPACK_IMPORTED_MODULE_0__,_images_Handbag_png__WEBPACK_IMPORTED_MODULE_1__,_images_search_png__WEBPACK_IMPORTED_MODULE_2__]

const homeImg = [_images_facebook_png__WEBPACK_IMPORTED_MODULE_3__,_images_twitter_png__WEBPACK_IMPORTED_MODULE_4__,_images_pinterest_png__WEBPACK_IMPORTED_MODULE_5__]

const footerImg = [_images_cornerGrass_png__WEBPACK_IMPORTED_MODULE_6__,_images_firstP_png__WEBPACK_IMPORTED_MODULE_7__,_images_secondP_png__WEBPACK_IMPORTED_MODULE_8__,_images_thirdP_png__WEBPACK_IMPORTED_MODULE_9__]

const aboutImg = [_images_about1_png__WEBPACK_IMPORTED_MODULE_10__,_images_about2_png__WEBPACK_IMPORTED_MODULE_11__,_images_about3_png__WEBPACK_IMPORTED_MODULE_12__]

const CategoryImg = [_images_category1_png__WEBPACK_IMPORTED_MODULE_13__,_images_category2_png__WEBPACK_IMPORTED_MODULE_14__,_images_category3_png__WEBPACK_IMPORTED_MODULE_15__,_images_category4_png__WEBPACK_IMPORTED_MODULE_16__,_images_sideGrass_png__WEBPACK_IMPORTED_MODULE_17__]

const WhyImg = [_images_why_1_png__WEBPACK_IMPORTED_MODULE_18__,_images_why_2_png__WEBPACK_IMPORTED_MODULE_19__,_images_why_3_png__WEBPACK_IMPORTED_MODULE_20__,_images_why_4_png__WEBPACK_IMPORTED_MODULE_21__,_images_why_5_png__WEBPACK_IMPORTED_MODULE_22__,_images_why_6_png__WEBPACK_IMPORTED_MODULE_23__]

const restrauInfoSectImg = [_images_chefCap_png__WEBPACK_IMPORTED_MODULE_24__,_images_foodProduct_png__WEBPACK_IMPORTED_MODULE_25__,_images_pizza_png__WEBPACK_IMPORTED_MODULE_26__,_images_spoon_png__WEBPACK_IMPORTED_MODULE_27__]

const menuItemImg = [_images_item1_png__WEBPACK_IMPORTED_MODULE_28__,_images_item2_png__WEBPACK_IMPORTED_MODULE_29__,_images_item3_png__WEBPACK_IMPORTED_MODULE_30__,_images_item4_png__WEBPACK_IMPORTED_MODULE_31__,_images_item5_png__WEBPACK_IMPORTED_MODULE_32__,_images_item6_png__WEBPACK_IMPORTED_MODULE_33__,_images_item7_png__WEBPACK_IMPORTED_MODULE_34__,_images_item8_png__WEBPACK_IMPORTED_MODULE_35__]

const menuLunchImg = [_images_lunch1_jpg__WEBPACK_IMPORTED_MODULE_36__,_images_lunch2_jpeg__WEBPACK_IMPORTED_MODULE_37__,_images_lunch3_jpeg__WEBPACK_IMPORTED_MODULE_38__,_images_lunch4_jpeg__WEBPACK_IMPORTED_MODULE_39__,_images_lunch5_jpeg__WEBPACK_IMPORTED_MODULE_40__,_images_lunch6_png__WEBPACK_IMPORTED_MODULE_41__]

const menuDinnerImg = [_images_dinner1_jpeg__WEBPACK_IMPORTED_MODULE_42__,_images_dinner2_jpeg__WEBPACK_IMPORTED_MODULE_43__,_images_dinner3_jpeg__WEBPACK_IMPORTED_MODULE_44__,_images_dinner4_jpeg__WEBPACK_IMPORTED_MODULE_45__,_images_dinner5_jpeg__WEBPACK_IMPORTED_MODULE_46__,_images_dinner6_jpeg__WEBPACK_IMPORTED_MODULE_47__]

const menuDesertImg = [_images_desert1_jpeg__WEBPACK_IMPORTED_MODULE_48__,_images_desert2_jpeg__WEBPACK_IMPORTED_MODULE_49__]

const menuDrinkImg = [_images_drink1_jpeg__WEBPACK_IMPORTED_MODULE_50__,_images_drink2_jpeg__WEBPACK_IMPORTED_MODULE_51__,_images_drink3_jpeg__WEBPACK_IMPORTED_MODULE_52__]

const menuSnackImg = [_images_snack1_jpeg__WEBPACK_IMPORTED_MODULE_53__,_images_snack2_jpeg__WEBPACK_IMPORTED_MODULE_54__]

const menuSoupImg = [_images_soup1_jpeg__WEBPACK_IMPORTED_MODULE_55__,_images_soup2_jpeg__WEBPACK_IMPORTED_MODULE_56__,_images_soup3_jpeg__WEBPACK_IMPORTED_MODULE_57__]

const chefImg = [_images_chef1_png__WEBPACK_IMPORTED_MODULE_58__,_images_chef2_png__WEBPACK_IMPORTED_MODULE_59__,_images_chef3_png__WEBPACK_IMPORTED_MODULE_60__,_images_chef4_png__WEBPACK_IMPORTED_MODULE_61__]

const profileImg = [_images_profile1_png__WEBPACK_IMPORTED_MODULE_62__,_images_testimonial_png__WEBPACK_IMPORTED_MODULE_66__,_images_star_png__WEBPACK_IMPORTED_MODULE_67__,_images_emptyStar_png__WEBPACK_IMPORTED_MODULE_68__,_images_profile2_png__WEBPACK_IMPORTED_MODULE_63__,_images_profile3_png__WEBPACK_IMPORTED_MODULE_64__,_images_profile4_png__WEBPACK_IMPORTED_MODULE_65__,_images_grass2_png__WEBPACK_IMPORTED_MODULE_69__,_images_grass2_png__WEBPACK_IMPORTED_MODULE_69__]

const blogImg  = [_images_blog1_png__WEBPACK_IMPORTED_MODULE_70__,_images_blog2_png__WEBPACK_IMPORTED_MODULE_71__,_images_blog3_png__WEBPACK_IMPORTED_MODULE_72__,_images_like_png__WEBPACK_IMPORTED_MODULE_73__,_images_comment_png__WEBPACK_IMPORTED_MODULE_74__,_images_share_png__WEBPACK_IMPORTED_MODULE_75__]

const MenuImg = [_images_categoryForMenu1_png__WEBPACK_IMPORTED_MODULE_76__,_images_categoryForMenu2_png__WEBPACK_IMPORTED_MODULE_77__,_images_categoryForMenu3_png__WEBPACK_IMPORTED_MODULE_78__,_images_categoryForMenu4_png__WEBPACK_IMPORTED_MODULE_79__,_images_Coffee_png__WEBPACK_IMPORTED_MODULE_80__]

const brands = [_images_brand1_png__WEBPACK_IMPORTED_MODULE_81__,_images_brand2_png__WEBPACK_IMPORTED_MODULE_82__,_images_brand3_png__WEBPACK_IMPORTED_MODULE_83__,_images_brand4_png__WEBPACK_IMPORTED_MODULE_84__,_images_brand5_png__WEBPACK_IMPORTED_MODULE_85__,_images_brand6_png__WEBPACK_IMPORTED_MODULE_86__]

/***/ }),

/***/ "./src/modules/menuPage.js":
/*!*********************************!*\
  !*** ./src/modules/menuPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuPage": () => (/* binding */ createMenuPage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/modules/images.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/modules/footer.js");
/* harmony import */ var _restrauInfoSect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restrauInfoSect */ "./src/modules/restrauInfoSect.js");










function createMenuPage(){

  
    removeAllChildNodesFromDisplay()
_index__WEBPACK_IMPORTED_MODULE_0__.content.style.background='transparent'
const body = document.querySelector('body')
body.removeAttribute('class')
body.classList='bodyPage'


const header = document.createElement('div')
header.className='headerForNav'

const logo = document.createElement('img')
logo.src = _images__WEBPACK_IMPORTED_MODULE_1__.headerImg[0]
logo.classList='logoForHeader'

   const ul = document.createElement('ul')
   ul.className='navForHeader'
   const list1 = document.createElement('li')
   list1.addEventListener('click',_index__WEBPACK_IMPORTED_MODULE_0__.loadAllhomeComponents)
   list1.textContent='Home'

   const list2 = document.createElement('li')
   list2.textContent='Menu'

   const list3 = document.createElement('li')
   list3.textContent='Blog'

   const list4 = document.createElement('li')
   list4.textContent='Pages'

   const list5 = document.createElement('li')
   list5.textContent='About'

   const list6 = document.createElement('li')
   list6.textContent='Shop'

   const list7 = document.createElement('li')
   list7.textContent='Contact'

   const iconSect = document.createElement('div')
   const para  = document.createElement('h1')
   para.textContent='Our Menu'

   const para2 = document.createElement('p')
   para2.innerHTML='<span>Home</span> > Menu'

   ul.appendChild(list1)
   ul.appendChild(list2)
   ul.appendChild(list3) 
   ul.appendChild(list4)
   ul.appendChild(list5)
   ul.appendChild(list6)
   ul.appendChild(list7)

header.appendChild(logo)
header.appendChild(ul)
header.appendChild(para)

const MenuBody = document.createElement('div')
MenuBody.className='MenuBody'

_index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(header)
header.appendChild(para2)
_index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(MenuBody)

createMenuCategory('Starter Menu',_images__WEBPACK_IMPORTED_MODULE_1__.MenuImg[0])
createMenuCategory2('Main Course',_images__WEBPACK_IMPORTED_MODULE_1__.MenuImg[1])
createMenuCategory('Desserts',_images__WEBPACK_IMPORTED_MODULE_1__.MenuImg[2])
createMenuCategory2('Drinks',_images__WEBPACK_IMPORTED_MODULE_1__.MenuImg[3])



function createMenuCategory(TITLE,IMG){
let one = document.createElement('div')
one.className='one'
let title = document.createElement('h2')
title.textContent=TITLE


let mediaSect = document.createElement('div')
let img = document.createElement('img')
img.src=IMG

mediaSect.appendChild(img)

let textContent = document.createElement('div')
// let img2 = document.createElement('img')
// img2.src = MenuImg[4]
textContent.appendChild(title)
createItem('Alder Grilled Chinook Salmon','<p>Toasted French bread topped with romano, cheddar <br>500CAL</p>','32$')
createItem('Alder Grilled Chinook Salmon','<p>Toasted French bread topped with romano, cheddar <br>500CAL</p>','32$')
createItem('Alder Grilled Chinook Salmon','<p>Toasted French bread topped with romano, cheddar <br>500CAL</p>','32$')
createItem('Alder Grilled Chinook Salmon','<p>Toasted French bread topped with romano, cheddar <br>500CAL</p>','32$')

function createItem(NAME,DESC,PRICE){
let item1 = document.createElement('li')
let name = document.createElement('p')
name.className='name'
name.textContent = NAME
let desc = document.createElement('p')
desc.innerHTML = DESC
let price = document.createElement('p')
price.textContent = PRICE
item1.appendChild(name)
item1.appendChild(desc)
item1.appendChild(price)
textContent.appendChild(item1)
}
one.appendChild(mediaSect)

one.appendChild(textContent)

MenuBody.appendChild(one)
}


function createMenuCategory2(TITLE,IMG){
    let one = document.createElement('div')
    one.className='one'
    let title = document.createElement('h2')
    title.textContent=TITLE
    
    
    let mediaSect = document.createElement('div')
    let img = document.createElement('img')
    img.src=IMG
    
    mediaSect.appendChild(img)
    
    let textContent = document.createElement('div')
    // let img2 = document.createElement('img')
    // img2.src = MenuImg[4]
    textContent.appendChild(title)
    createItem('Alder Grilled Chinook Salmon','<p>Toasted French bread topped with romano, cheddar <br>500CAL</p>','32$')
    createItem('Alder Grilled Chinook Salmon','<p>Toasted French bread topped with romano, cheddar <br>500CAL</p>','32$')
    createItem('Alder Grilled Chinook Salmon','<p>Toasted French bread topped with romano, cheddar <br>500CAL</p>','32$')
    createItem('Alder Grilled Chinook Salmon','<p>Toasted French bread topped with romano, cheddar <br>500CAL</p>','32$')
    
    function createItem(NAME,DESC,PRICE){
    let item1 = document.createElement('li')
    let name = document.createElement('p')
    name.className='name'
    name.textContent = NAME
    let desc = document.createElement('p')
    desc.innerHTML = DESC
    let price = document.createElement('p')
    price.textContent = PRICE
    item1.appendChild(name)
    item1.appendChild(desc)
    item1.appendChild(price)
    textContent.appendChild(item1)
    }
    
    
    one.appendChild(textContent)
    one.appendChild(mediaSect)
    MenuBody.appendChild(one)
    }
    const partner = document.createElement('div')
    partner.className='partner'

    const title1 = document.createElement('p')
    title1.textContent='Partners and Clients'
    const title2 = document.createElement('h2')
    title2.textContent='We work with the best people'
    
    partner.appendChild(title1)
    partner.appendChild(title2)
    
    const workWith = document.createElement('div')
    workWith.className='workWith';

    const brand1 = document.createElement('img')
    brand1.src=_images__WEBPACK_IMPORTED_MODULE_1__.brands[0]
    const brand2 = document.createElement('img')
    brand2.src=_images__WEBPACK_IMPORTED_MODULE_1__.brands[1]
    const brand3 = document.createElement('img')
    brand3.src=_images__WEBPACK_IMPORTED_MODULE_1__.brands[2]
    const brand4 = document.createElement('img')
     brand4.src=_images__WEBPACK_IMPORTED_MODULE_1__.brands[3]
     const brand5 = document.createElement('img')
     brand5.src=_images__WEBPACK_IMPORTED_MODULE_1__.brands[4]
     const brand6 = document.createElement('img')
     brand6.src=_images__WEBPACK_IMPORTED_MODULE_1__.brands[5]


  workWith.appendChild(brand1)
  workWith.appendChild(brand2)
  workWith.appendChild(brand3)
  workWith.appendChild(brand4)
  workWith.appendChild(brand5)
  workWith.appendChild(brand6)
  
  partner.appendChild(workWith)  
  MenuBody.appendChild(partner)
  _index__WEBPACK_IMPORTED_MODULE_0__.content.removeAttribute('class')
  _index__WEBPACK_IMPORTED_MODULE_0__.content.className='contentSecondStyle'

 

function removeAllChildNodesFromDisplay() {
    while (_index__WEBPACK_IMPORTED_MODULE_0__.content.firstChild) {
        _index__WEBPACK_IMPORTED_MODULE_0__.content.removeChild(_index__WEBPACK_IMPORTED_MODULE_0__.content.firstChild);
    }}
    (0,_restrauInfoSect__WEBPACK_IMPORTED_MODULE_3__.createRestrauInfo)()
    const  infoSect = document.querySelector('.restrauInfoSect')
    infoSect.removeAttribute('class')
    infoSect.className='restrauInfoSectForHeader'
     
    ;(0,_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)()
    const footer = document.querySelector('footer')
    footer.className='footerClass'
    
}



/***/ }),

/***/ "./src/modules/ourChef.js":
/*!********************************!*\
  !*** ./src/modules/ourChef.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOurChef": () => (/* binding */ createOurChef)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/modules/images.js");


 

function createOurChef(){

const ourChefSect = document.createElement('div')
ourChefSect.className='ourChefSect'
const button = document.createElement('button')
    button.textContent='See More'
const Title1 = document.createElement('h2')
Title1.textContent='Chefs'
const Title2 = document.createElement('h1')
Title2.innerHTML='<span>Me</span>et Our Chef'
ourChefSect.appendChild(Title1)
ourChefSect.appendChild(Title2)
let chefList = document.createElement('div')
chefList.className='chefList'
makeChefSect(_images__WEBPACK_IMPORTED_MODULE_1__.chefImg[0],'D.Estwood','Chief Chef')
makeChefSect(_images__WEBPACK_IMPORTED_MODULE_1__.chefImg[1],'D.Estwood','Chief Chef')
makeChefSect(_images__WEBPACK_IMPORTED_MODULE_1__.chefImg[2],'D.Estwood','Chief Chef')
makeChefSect(_images__WEBPACK_IMPORTED_MODULE_1__.chefImg[3],'D.Estwood','Chief Chef')


function makeChefSect(img,Name,designation){

    let chefSect = document.createElement('div')
    chefSect.className='chefSect'
    let chefSectImg  = document.createElement('img')
    chefSectImg.src=img
    let info = document.createElement('div')
    info.className='info'
    chefSect.addEventListener('mouseover',infoAnimation)
    chefSect.addEventListener('mouseout',infoAnimationLeave)
    function infoAnimation(){
        info.style.width='100px'
        infoName.style.display='block'
        infoDesignation.style.display='block'
    }

    function infoAnimationLeave(){
        info.style.width='0px'
        infoName.style.display='none'
        infoDesignation.style.display='none'
    }
    let infoName = document.createElement('p')
    
    infoName.textContent=Name
    let infoDesignation = document.createElement('p')
    infoDesignation.textContent=designation
  
    info.appendChild(infoName)
    info.appendChild(infoDesignation)
    chefSect.appendChild(chefSectImg)
    chefSect.appendChild(info)

    chefList.appendChild(chefSect)
    

}

ourChefSect.appendChild(button)

ourChefSect.appendChild(chefList)
_index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(ourChefSect)




}

/***/ }),

/***/ "./src/modules/restrauActive.js":
/*!**************************************!*\
  !*** ./src/modules/restrauActive.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRestrauActive": () => (/* binding */ createRestrauActive)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");



function createRestrauActive(){
const restrauActiveSect = document.createElement('div')
restrauActiveSect.className='restrauActiveSect'

const title1 = document.createElement('h2')
title1.textContent='Restaurant Active Process'

const para  = document.createElement('p')
para.innerHTML='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque<br> bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,'


const title2 = document.createElement('h1')
title2.innerHTML='<span>We</span> Document Every Food<br> Bean Process untile it is saved'

const btnSect = document.createElement('div')
btnSect.className='btnSect'
const btn1 = document.createElement('button')
btn1.className='btn1'
btn1.textContent='Read More'
const playVidSect = document.createElement('div')
playVidSect.className='playVidSect'

const btn2 = document.createElement('button')
btn2.className='btn2'

playVidSect.appendChild(btn2)

const vidPara = document.createElement('p')
vidPara.className='Vidplay'
vidPara.textContent='Play Video'
playVidSect.appendChild(vidPara)


restrauActiveSect.appendChild(title1)
restrauActiveSect.appendChild(title2)
restrauActiveSect.appendChild(para)

btnSect.appendChild(btn1)
btnSect.appendChild(btn2)
btnSect.appendChild(playVidSect)

restrauActiveSect.appendChild(btnSect)
_index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(restrauActiveSect)
}

/***/ }),

/***/ "./src/modules/restrauInfoSect.js":
/*!****************************************!*\
  !*** ./src/modules/restrauInfoSect.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRestrauInfo": () => (/* binding */ createRestrauInfo)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/modules/images.js");



function createRestrauInfo(){

    const restrauInfoSect = document.createElement('div')
    restrauInfoSect.className='restrauInfoSect'
    const restrauInfoSectBlackLayer = document.createElement('div')
    restrauInfoSectBlackLayer.className='restrauInfoSectBlackLayer'

    const infoSubDiv1 = document.createElement('div')

    const img1 = document.createElement('img')
    img1.src = _images__WEBPACK_IMPORTED_MODULE_1__.restrauInfoSectImg[0]
    const infoName = document.createElement('p')
    infoName.textContent='Professional Chefs'
    const number = document.createElement('p')
    number.textContent='420'

    infoSubDiv1.appendChild(img1)
    infoSubDiv1.appendChild(infoName)
    infoSubDiv1.appendChild(number)

    const infoSubDiv2 = document.createElement('div')
    const img2 = document.createElement('img')
    img2.src = _images__WEBPACK_IMPORTED_MODULE_1__.restrauInfoSectImg[1]
    const infoName2 = document.createElement('p')
    infoName2.textContent='Items Of Food'
    const number2 = document.createElement('p')
    number2.textContent='320'
    infoSubDiv2.appendChild(img2)
    infoSubDiv2.appendChild(infoName2)
    infoSubDiv2.appendChild(number2)

    const infoSubDiv3 = document.createElement('div')
    const img3 = document.createElement('img')
    img3.src = _images__WEBPACK_IMPORTED_MODULE_1__.restrauInfoSectImg[2]
    const infoName3 = document.createElement('p')
    infoName3.textContent='Years Of Experienced'
    const number3 = document.createElement('p')
    number3.textContent='30+'
    infoSubDiv3.appendChild(img3)
    infoSubDiv3.appendChild(infoName3)
    infoSubDiv3.appendChild(number3)

    const infoSubDiv4 = document.createElement('div')
    const img4 = document.createElement('img')
    img4.src = _images__WEBPACK_IMPORTED_MODULE_1__.restrauInfoSectImg[3]
    const infoName4 = document.createElement('p')
    infoName4.textContent='Happy customers'
    const number4 = document.createElement('p')
    number4.textContent='220'
    infoSubDiv4.appendChild(img4)
    infoSubDiv4.appendChild(infoName4)
    infoSubDiv4.appendChild(number4)

    restrauInfoSectBlackLayer.appendChild(infoSubDiv1)
    restrauInfoSectBlackLayer.appendChild(infoSubDiv2)
    restrauInfoSectBlackLayer.appendChild(infoSubDiv3)
    restrauInfoSectBlackLayer.appendChild(infoSubDiv4)


    restrauInfoSect.appendChild(restrauInfoSectBlackLayer)
    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(restrauInfoSect)

}

/***/ }),

/***/ "./src/modules/testimonial.js":
/*!************************************!*\
  !*** ./src/modules/testimonial.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTestimonial": () => (/* binding */ createTestimonial)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/modules/images.js");




function createTestimonial(){
const testimonialSect = document.createElement('div')
testimonialSect.className='Testimonial'
const title1 = document.createElement('h2')
title1.textContent='Testimonials'
const title2 = document.createElement('h1')
title2.textContent='What our client are saying'
const testimonialCardSect = document.createElement('div')
testimonialCardSect.className='testimonialCardSect'
const testimonialCards = document.createElement('div')
testimonialCards.className='testimonialCards'
const profile = document.createElement('img')
profile.className='profile'
profile.src = _images__WEBPACK_IMPORTED_MODULE_1__.profileImg[0]

const grassCorner = document.createElement('img')
grassCorner.className='grassCornerImg'
grassCorner.src = _images__WEBPACK_IMPORTED_MODULE_1__.profileImg[7]

const reviwePara = document.createElement('p')
reviwePara.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'

const testimonialGreen = document.createElement('img')
testimonialGreen.className='testimonialGreen'
testimonialGreen.src=_images__WEBPACK_IMPORTED_MODULE_1__.profileImg[1]
const starSect = document.createElement('div')
starSect.className='starSect'

const star1 = document.createElement('img')
star1.src = _images__WEBPACK_IMPORTED_MODULE_1__.profileImg[2]

const star2 = document.createElement('img')
star2.src = _images__WEBPACK_IMPORTED_MODULE_1__.profileImg[2]

const star3 = document.createElement('img')
star3.src = _images__WEBPACK_IMPORTED_MODULE_1__.profileImg[2]

const star4 = document.createElement('img')
star4.src = _images__WEBPACK_IMPORTED_MODULE_1__.profileImg[2]

const star5 = document.createElement('img')
star5.src=_images__WEBPACK_IMPORTED_MODULE_1__.profileImg[2]
const name = document.createElement('p')
name.textContent = 'Alamin Hasan'

const designation = document.createElement('p')
designation.className='design'
designation.textContent='Food Specialist'

const sliderDotSect = document.createElement('div')
sliderDotSect.className='SliderDot'

const dot1 = document.createElement('div')
const dot2 = document.createElement('div')
const dot3 = document.createElement('div')
const dot4 = document.createElement('div')

sliderDotSect.appendChild(dot1)
sliderDotSect.appendChild(dot2)
sliderDotSect.appendChild(dot3)
sliderDotSect.appendChild(dot4)

starSect.appendChild(star1)
starSect.appendChild(star2)
starSect.appendChild(star3)
starSect.appendChild(star4)

testimonialSect.appendChild(title1)
testimonialSect.appendChild(title2)
testimonialCards.appendChild(profile)
testimonialCardSect.appendChild(testimonialCards)
testimonialCardSect.appendChild(sliderDotSect)
testimonialCards.appendChild(reviwePara)
testimonialCards.appendChild(starSect)
testimonialCards.appendChild(name)
testimonialCards.appendChild(designation)
testimonialCardSect.appendChild(testimonialGreen)
testimonialSect.appendChild(grassCorner)
testimonialSect.appendChild(testimonialCardSect)
_index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(testimonialSect)

setTimeout(animation,3000)
function animation(){
    profile.src=_images__WEBPACK_IMPORTED_MODULE_1__.profileImg[0]
    name.textContent='Alamin Hasan'
    designation.textContent='Food Specialist'
    reviwePara.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'
    dot1.style.opacity='1'
    dot4.style.opacity='0.4'
    setTimeout(slider1,3000)




function slider1(){
    profile.src=_images__WEBPACK_IMPORTED_MODULE_1__.profileImg[4]
    dot4.style.opacity='0.4'
    name.textContent = 'Tom warner'
    designation.textContent='Customer'
    reviwePara.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non et ac dapibus sit eu velit in consequat.'
    dot1.style.opacity='0.4'
    dot2.style.opacity='1'
    starSect.removeChild(star4)

    setTimeout(slider2,3000)
    
    }
    
    function slider2(){
        profile.src=_images__WEBPACK_IMPORTED_MODULE_1__.profileImg[5]
        name.textContent='Chris gell'
        designation.textContent='Customer'
        reviwePara.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam  elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'
        dot2.style.opacity='0.4'
        dot3.style.opacity='1'
        starSect.appendChild(star4)
        starSect.appendChild(star5)
        setTimeout(slider3,3000)
        
        }
    
        function slider3(){
            profile.src=_images__WEBPACK_IMPORTED_MODULE_1__.profileImg[6]
            name.textContent='Tokoya walker'
            designation.textContent='Customer'
            reviwePara.textContent='volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'
            dot3.style.opacity ='.4'
            dot4.style.opacity='1'
            starSect.removeChild(star5)
            setTimeout(animation,3000)
            }
         
                
               
            }

}

/***/ }),

/***/ "./src/modules/whyChoose.js":
/*!**********************************!*\
  !*** ./src/modules/whyChoose.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWhyChoose": () => (/* binding */ createWhyChoose)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/modules/images.js");



function createWhyChoose(){

    const mainSect = document.createElement('main')
    mainSect.className ='mainSect'

    const mediaSect = document.createElement('div')
    const why1Img = document.createElement('img')
    why1Img.src=_images__WEBPACK_IMPORTED_MODULE_1__.WhyImg[0]
    const why2Img = document.createElement('img')
    why2Img.src=_images__WEBPACK_IMPORTED_MODULE_1__.WhyImg[1]
    const why3Img = document.createElement('img')
    why3Img.src=_images__WEBPACK_IMPORTED_MODULE_1__.WhyImg[2]
    const why4Img = document.createElement('img')
    why4Img.src=_images__WEBPACK_IMPORTED_MODULE_1__.WhyImg[3]
    const why5Img = document.createElement('img')
    why5Img.src=_images__WEBPACK_IMPORTED_MODULE_1__.WhyImg[4]
    const why6Img = document.createElement('img')
    why6Img.src=_images__WEBPACK_IMPORTED_MODULE_1__.WhyImg[5]

    mediaSect.appendChild(why1Img)
    mediaSect.appendChild(why2Img)
    mediaSect.appendChild(why3Img)
    mediaSect.appendChild(why4Img)
    mediaSect.appendChild(why5Img)
    mediaSect.appendChild(why6Img)

    mainSect.appendChild(mediaSect)

    const textContent = document.createElement('div')
    textContent.className='texContent'
    const Title1 = document.createElement('h2')
    Title1.textContent='Why Choose us'
    const Title2 = document.createElement('h1')
    Title2.innerHTML='<span>Ex</span>tra ordinary taste <br> And Experiance'

    const desc = document.createElement('p')
    desc.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.'

    textContent.appendChild(Title1)
    textContent.appendChild(Title2)
    textContent.appendChild(desc)

    const mealCatSect = document.createElement('div')
    mealCatSect.className='mealCatSect'
    const fastFood = document.createElement('div')
    const Lunch = document.createElement('div')
    const Dinner = document.createElement('div')

    const FastFoodP = document.createElement('p')
    FastFoodP.className='FastFoodP'
    FastFoodP.textContent='Fast Food'
    const LunchP = document.createElement('p')
    LunchP.className='LunchP'
    LunchP.textContent='Lunch'
    const DinnerP = document.createElement('p')
    DinnerP.className='DinnerP'
    DinnerP.textContent='Dinner'
    const ExperianceSect = document.createElement('div')
    ExperianceSect.className='ExperianceSect'

    const ExperianceP = document.createElement('p')
    ExperianceP.textContent='30+'
    const ExperianceP2 = document.createElement('p')
    ExperianceP2.innerHTML='<span>years of</span> <br> Experianced'
    mealCatSect.appendChild(fastFood)
    mealCatSect.appendChild(Lunch)
    mealCatSect.appendChild(Dinner)
    

    textContent.appendChild(mealCatSect)
    textContent.appendChild(FastFoodP)
    textContent.appendChild(LunchP)
    textContent.appendChild(DinnerP)
    ExperianceSect.appendChild(ExperianceP)
    ExperianceSect.appendChild(ExperianceP2)
    textContent.appendChild(ExperianceSect)
    mainSect.appendChild(textContent)
    

    
    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(mainSect)





}

/***/ }),

/***/ "./src/images/Clock.png":
/*!******************************!*\
  !*** ./src/images/Clock.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03ac31579af972d75461.png";

/***/ }),

/***/ "./src/images/Coffee.png":
/*!*******************************!*\
  !*** ./src/images/Coffee.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4f6440a5d8bd886b56a.png";

/***/ }),

/***/ "./src/images/Cookie.png":
/*!*******************************!*\
  !*** ./src/images/Cookie.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9bfa846c54502533242.png";

/***/ }),

/***/ "./src/images/Foodtuck.png":
/*!*********************************!*\
  !*** ./src/images/Foodtuck.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9974b4ebcfd2d4f057d4.png";

/***/ }),

/***/ "./src/images/Hamburger.png":
/*!**********************************!*\
  !*** ./src/images/Hamburger.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7fc4a496c6d57ffcaa23.png";

/***/ }),

/***/ "./src/images/Handbag.png":
/*!********************************!*\
  !*** ./src/images/Handbag.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "785840729116c5a1863b.png";

/***/ }),

/***/ "./src/images/Quotes.png":
/*!*******************************!*\
  !*** ./src/images/Quotes.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ccac7ca1cd5d5ba688c2.png";

/***/ }),

/***/ "./src/images/Wine.png":
/*!*****************************!*\
  !*** ./src/images/Wine.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d155135bc65e53d57fc.png";

/***/ }),

/***/ "./src/images/about1.png":
/*!*******************************!*\
  !*** ./src/images/about1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d1dc73698cea65f1c72.png";

/***/ }),

/***/ "./src/images/about2.png":
/*!*******************************!*\
  !*** ./src/images/about2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4bbcb5444b17cae1c192.png";

/***/ }),

/***/ "./src/images/about3.png":
/*!*******************************!*\
  !*** ./src/images/about3.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93bd1950614494313ca1.png";

/***/ }),

/***/ "./src/images/blog1.png":
/*!******************************!*\
  !*** ./src/images/blog1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f85450385e5ee9f5964.png";

/***/ }),

/***/ "./src/images/blog2.png":
/*!******************************!*\
  !*** ./src/images/blog2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8c76f148c865258d451.png";

/***/ }),

/***/ "./src/images/blog3.png":
/*!******************************!*\
  !*** ./src/images/blog3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "658d9d33cde534e6a6bb.png";

/***/ }),

/***/ "./src/images/brand1.png":
/*!*******************************!*\
  !*** ./src/images/brand1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b480290cfca51df5e9a.png";

/***/ }),

/***/ "./src/images/brand2.png":
/*!*******************************!*\
  !*** ./src/images/brand2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d52b12d02ed3f91407b7.png";

/***/ }),

/***/ "./src/images/brand3.png":
/*!*******************************!*\
  !*** ./src/images/brand3.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8508b86cc7d5d7e200b.png";

/***/ }),

/***/ "./src/images/brand4.png":
/*!*******************************!*\
  !*** ./src/images/brand4.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "604c27adfd446a5e25c9.png";

/***/ }),

/***/ "./src/images/brand5.png":
/*!*******************************!*\
  !*** ./src/images/brand5.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d145fa9c9e2bbfa602bd.png";

/***/ }),

/***/ "./src/images/brand6.png":
/*!*******************************!*\
  !*** ./src/images/brand6.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e05b35b03c12faaf83c.png";

/***/ }),

/***/ "./src/images/category1.png":
/*!**********************************!*\
  !*** ./src/images/category1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f85450385e5ee9f5964.png";

/***/ }),

/***/ "./src/images/category2.png":
/*!**********************************!*\
  !*** ./src/images/category2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b21df158f9d2f6b6a0d.png";

/***/ }),

/***/ "./src/images/category3.png":
/*!**********************************!*\
  !*** ./src/images/category3.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f5773a41ce6e4d9e84e.png";

/***/ }),

/***/ "./src/images/category4.png":
/*!**********************************!*\
  !*** ./src/images/category4.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e8c9ca77b62ff81d2a9.png";

/***/ }),

/***/ "./src/images/categoryForMenu1.png":
/*!*****************************************!*\
  !*** ./src/images/categoryForMenu1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c1e82eb7a57c451a94ea.png";

/***/ }),

/***/ "./src/images/categoryForMenu2.png":
/*!*****************************************!*\
  !*** ./src/images/categoryForMenu2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04322aec846e3024a492.png";

/***/ }),

/***/ "./src/images/categoryForMenu3.png":
/*!*****************************************!*\
  !*** ./src/images/categoryForMenu3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8fe7c1686a86eb81889e.png";

/***/ }),

/***/ "./src/images/categoryForMenu4.png":
/*!*****************************************!*\
  !*** ./src/images/categoryForMenu4.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "980fe4d2137a9da22866.png";

/***/ }),

/***/ "./src/images/chef1.png":
/*!******************************!*\
  !*** ./src/images/chef1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c741c61f773d71cb63a.png";

/***/ }),

/***/ "./src/images/chef2.png":
/*!******************************!*\
  !*** ./src/images/chef2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "436ddd8446fc1017d5eb.png";

/***/ }),

/***/ "./src/images/chef3.png":
/*!******************************!*\
  !*** ./src/images/chef3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67bf39b575012a54d2e7.png";

/***/ }),

/***/ "./src/images/chef4.png":
/*!******************************!*\
  !*** ./src/images/chef4.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8272f77db05e40f6192.png";

/***/ }),

/***/ "./src/images/chefCap.png":
/*!********************************!*\
  !*** ./src/images/chefCap.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4753d06308ded0f68789.png";

/***/ }),

/***/ "./src/images/comment.png":
/*!********************************!*\
  !*** ./src/images/comment.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60b9ae9c4fdb9f0b5859.png";

/***/ }),

/***/ "./src/images/cornerGrass.png":
/*!************************************!*\
  !*** ./src/images/cornerGrass.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3acebf26e65a0630f0aa.png";

/***/ }),

/***/ "./src/images/desert1.jpeg":
/*!*********************************!*\
  !*** ./src/images/desert1.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d134fd283e70836c9a43.jpeg";

/***/ }),

/***/ "./src/images/desert2.jpeg":
/*!*********************************!*\
  !*** ./src/images/desert2.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c1344b840b3612ae94a2.jpeg";

/***/ }),

/***/ "./src/images/dinner1.jpeg":
/*!*********************************!*\
  !*** ./src/images/dinner1.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e65f3cd124b70877bff.jpeg";

/***/ }),

/***/ "./src/images/dinner2.jpeg":
/*!*********************************!*\
  !*** ./src/images/dinner2.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "570b5359e7f8a10a4c30.jpeg";

/***/ }),

/***/ "./src/images/dinner3.jpeg":
/*!*********************************!*\
  !*** ./src/images/dinner3.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5cd7f19009301079d3e.jpeg";

/***/ }),

/***/ "./src/images/dinner4.jpeg":
/*!*********************************!*\
  !*** ./src/images/dinner4.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d21037a19d0666adaf6.jpeg";

/***/ }),

/***/ "./src/images/dinner5.jpeg":
/*!*********************************!*\
  !*** ./src/images/dinner5.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "043b2bb4989b7972865b.jpeg";

/***/ }),

/***/ "./src/images/dinner6.jpeg":
/*!*********************************!*\
  !*** ./src/images/dinner6.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8384d51493252b9f086d.jpeg";

/***/ }),

/***/ "./src/images/drink1.jpeg":
/*!********************************!*\
  !*** ./src/images/drink1.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c23f29067fe0c2ac992c.jpeg";

/***/ }),

/***/ "./src/images/drink2.jpeg":
/*!********************************!*\
  !*** ./src/images/drink2.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5ac58375afe5f176113.jpeg";

/***/ }),

/***/ "./src/images/drink3.jpeg":
/*!********************************!*\
  !*** ./src/images/drink3.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "317b29707130eae55ed8.jpeg";

/***/ }),

/***/ "./src/images/emptyStar.png":
/*!**********************************!*\
  !*** ./src/images/emptyStar.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c69e6abb8160325ceee9.png";

/***/ }),

/***/ "./src/images/facebook.png":
/*!*********************************!*\
  !*** ./src/images/facebook.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dff28a67883340311506.png";

/***/ }),

/***/ "./src/images/fb-f.png":
/*!*****************************!*\
  !*** ./src/images/fb-f.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0da312d5713aa938538.png";

/***/ }),

/***/ "./src/images/firstP.png":
/*!*******************************!*\
  !*** ./src/images/firstP.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1eef26b423cb82e5f57b.png";

/***/ }),

/***/ "./src/images/foodProduct.png":
/*!************************************!*\
  !*** ./src/images/foodProduct.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cf41cfd85844a31eee0.png";

/***/ }),

/***/ "./src/images/grass2.png":
/*!*******************************!*\
  !*** ./src/images/grass2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2348dd6bf1fd70a25089.png";

/***/ }),

/***/ "./src/images/header.png":
/*!*******************************!*\
  !*** ./src/images/header.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee8e3db60e3c4c0ee464.png";

/***/ }),

/***/ "./src/images/homeDish.png":
/*!*********************************!*\
  !*** ./src/images/homeDish.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3c4576e5391a0af7e9b.png";

/***/ }),

/***/ "./src/images/insta-f.png":
/*!********************************!*\
  !*** ./src/images/insta-f.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07e97d561296c583dc39.png";

/***/ }),

/***/ "./src/images/item1.png":
/*!******************************!*\
  !*** ./src/images/item1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "647985b2e18178ca32c4.png";

/***/ }),

/***/ "./src/images/item2.png":
/*!******************************!*\
  !*** ./src/images/item2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac01965c2a922b150359.png";

/***/ }),

/***/ "./src/images/item3.png":
/*!******************************!*\
  !*** ./src/images/item3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57bcb42b527d040f7219.png";

/***/ }),

/***/ "./src/images/item4.png":
/*!******************************!*\
  !*** ./src/images/item4.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c44fdff2dce3a4d5170a.png";

/***/ }),

/***/ "./src/images/item5.png":
/*!******************************!*\
  !*** ./src/images/item5.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5af8944dd0a5474c0c8e.png";

/***/ }),

/***/ "./src/images/item6.png":
/*!******************************!*\
  !*** ./src/images/item6.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "060458d99c9dc650283c.png";

/***/ }),

/***/ "./src/images/item7.png":
/*!******************************!*\
  !*** ./src/images/item7.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cae97ac06b10063b5e4.png";

/***/ }),

/***/ "./src/images/item8.png":
/*!******************************!*\
  !*** ./src/images/item8.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7077dc6b97e3392d0ba.png";

/***/ }),

/***/ "./src/images/like.png":
/*!*****************************!*\
  !*** ./src/images/like.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8beef86c3f8116cb867.png";

/***/ }),

/***/ "./src/images/lunch1.jpg":
/*!*******************************!*\
  !*** ./src/images/lunch1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "980efb4e490713e47aa7.jpg";

/***/ }),

/***/ "./src/images/lunch2.jpeg":
/*!********************************!*\
  !*** ./src/images/lunch2.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c22703eb7eb0682676c7.jpeg";

/***/ }),

/***/ "./src/images/lunch3.jpeg":
/*!********************************!*\
  !*** ./src/images/lunch3.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3df199a524eada9f50d.jpeg";

/***/ }),

/***/ "./src/images/lunch4.jpeg":
/*!********************************!*\
  !*** ./src/images/lunch4.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "907b3f65a0c8a5683921.jpeg";

/***/ }),

/***/ "./src/images/lunch5.jpeg":
/*!********************************!*\
  !*** ./src/images/lunch5.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b61dca632eb251294238.jpeg";

/***/ }),

/***/ "./src/images/lunch6.png":
/*!*******************************!*\
  !*** ./src/images/lunch6.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e9b10856a70358cdf21.png";

/***/ }),

/***/ "./src/images/mainbg.png":
/*!*******************************!*\
  !*** ./src/images/mainbg.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3fdcee5913ec018d0860.png";

/***/ }),

/***/ "./src/images/pin-f.png":
/*!******************************!*\
  !*** ./src/images/pin-f.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5e4cc83dd24b30280f8.png";

/***/ }),

/***/ "./src/images/pinterest.png":
/*!**********************************!*\
  !*** ./src/images/pinterest.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7f52b702ecb304d459b.png";

/***/ }),

/***/ "./src/images/pizza.png":
/*!******************************!*\
  !*** ./src/images/pizza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "681b1c0ddd57ce5a6677.png";

/***/ }),

/***/ "./src/images/play.png":
/*!*****************************!*\
  !*** ./src/images/play.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11d7ff087c53738dc2da.png";

/***/ }),

/***/ "./src/images/profile1.png":
/*!*********************************!*\
  !*** ./src/images/profile1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05267dd06d1c64072bdf.png";

/***/ }),

/***/ "./src/images/profile2.png":
/*!*********************************!*\
  !*** ./src/images/profile2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ce2d6baa120c260ca30.png";

/***/ }),

/***/ "./src/images/profile3.png":
/*!*********************************!*\
  !*** ./src/images/profile3.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98a128fe932337a976e4.png";

/***/ }),

/***/ "./src/images/profile4.png":
/*!*********************************!*\
  !*** ./src/images/profile4.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e36f3b8ef4456046343d.png";

/***/ }),

/***/ "./src/images/restrauActive.png":
/*!**************************************!*\
  !*** ./src/images/restrauActive.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92f6231b01069a9832b3.png";

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfd131376e789508b4f8.png";

/***/ }),

/***/ "./src/images/secondP.png":
/*!********************************!*\
  !*** ./src/images/secondP.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f180dc34762b7871f7a4.png";

/***/ }),

/***/ "./src/images/share.png":
/*!******************************!*\
  !*** ./src/images/share.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "903039ed701de7989af1.png";

/***/ }),

/***/ "./src/images/sideGrass.png":
/*!**********************************!*\
  !*** ./src/images/sideGrass.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98baf6fcf278d33ef4a3.png";

/***/ }),

/***/ "./src/images/snack1.jpeg":
/*!********************************!*\
  !*** ./src/images/snack1.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a47346b635428af20b4.jpeg";

/***/ }),

/***/ "./src/images/snack2.jpeg":
/*!********************************!*\
  !*** ./src/images/snack2.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4dae6a0783e5164f137b.jpeg";

/***/ }),

/***/ "./src/images/soup1.jpeg":
/*!*******************************!*\
  !*** ./src/images/soup1.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "727f470811d652f6650f.jpeg";

/***/ }),

/***/ "./src/images/soup2.jpeg":
/*!*******************************!*\
  !*** ./src/images/soup2.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76892b86669936b02293.jpeg";

/***/ }),

/***/ "./src/images/soup3.jpeg":
/*!*******************************!*\
  !*** ./src/images/soup3.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbcac951f5a7c561cbb0.jpeg";

/***/ }),

/***/ "./src/images/spoon.png":
/*!******************************!*\
  !*** ./src/images/spoon.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "791f4e69fb77c4897a59.png";

/***/ }),

/***/ "./src/images/star.png":
/*!*****************************!*\
  !*** ./src/images/star.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01428900d9cca0a9d5b9.png";

/***/ }),

/***/ "./src/images/testimonial.png":
/*!************************************!*\
  !*** ./src/images/testimonial.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25cff4a7cf8ef7a76b49.png";

/***/ }),

/***/ "./src/images/thirdP.png":
/*!*******************************!*\
  !*** ./src/images/thirdP.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1620f0dd43a255616c35.png";

/***/ }),

/***/ "./src/images/totalInfoSect.png":
/*!**************************************!*\
  !*** ./src/images/totalInfoSect.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2076140ead32c57b72fe.png";

/***/ }),

/***/ "./src/images/twitter-f.png":
/*!**********************************!*\
  !*** ./src/images/twitter-f.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "388dd83253c2c96a6a8d.png";

/***/ }),

/***/ "./src/images/twitter.png":
/*!********************************!*\
  !*** ./src/images/twitter.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69cfc75f755965c4090c.png";

/***/ }),

/***/ "./src/images/why_1.png":
/*!******************************!*\
  !*** ./src/images/why_1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8c76f148c865258d451.png";

/***/ }),

/***/ "./src/images/why_2.png":
/*!******************************!*\
  !*** ./src/images/why_2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1737272dc07a38645d0.png";

/***/ }),

/***/ "./src/images/why_3.png":
/*!******************************!*\
  !*** ./src/images/why_3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e105bc5788af4dbbdd5.png";

/***/ }),

/***/ "./src/images/why_4.png":
/*!******************************!*\
  !*** ./src/images/why_4.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac01965c2a922b150359.png";

/***/ }),

/***/ "./src/images/why_5.png":
/*!******************************!*\
  !*** ./src/images/why_5.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7077dc6b97e3392d0ba.png";

/***/ }),

/***/ "./src/images/why_6.png":
/*!******************************!*\
  !*** ./src/images/why_6.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d1191d2d94fa3618ca3.png";

/***/ }),

/***/ "./src/images/yt-f.png":
/*!*****************************!*\
  !*** ./src/images/yt-f.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4633b65d9e55cce9b6f3.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFL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QTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE1BQU07O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFtQjs7OztBQUl2Qjs7Ozs7Ozs7Ozs7Ozs7OztB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Ozs7OztBQU12Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvTWVudVBhZ2UuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9XaHlDaG9vc2UuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9hYm91dC5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL2Jsb2cuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9mb29kQ2F0LmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvZm9vdGVyLmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvZnJvbU1lbnUuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9oZWFkZXIuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9ob21lLmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL291ckNoZWYuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9yZXN0cmF1QWN0aXZlLmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvcmVzdHJhdUluZm9TZWN0LmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvdGVzdGltb25pYWwuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy92YXJyaWFibGVzLmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL2Fib3V0VXMuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvbW9kdWxlcy9ibG9nLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvZm9vZENhdC5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL2Zyb21NZW51LmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL21lbnVQYWdlLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvb3VyQ2hlZi5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL3Jlc3RyYXVBY3RpdmUuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvbW9kdWxlcy9yZXN0cmF1SW5mb1NlY3QuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvbW9kdWxlcy90ZXN0aW1vbmlhbC5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL3doeUNob29zZS5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zvb2R0dWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Zvb2R0dWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Zvb2R0dWNrL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hlYWRlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvdG90YWxJbmZvU2VjdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJvZHlQYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxuICAgIFxcbn1cXG5cXG4uaGVhZGVyRm9yTmF2e1xcbiAgICBcXG4gICAgZ3JpZC1jb2x1bW46IDEvMTQ7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWJnLWNscik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG4ubG9nb0ZvckhlYWRlcntcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxufVxcblxcbi5uYXZGb3JIZWFkZXJ7XFxuXFxuICAgIG1hcmdpbi1sZWZ0OiA0MDBweDtcXG59XFxuXFxuLmhlYWRlckZvck5hdiBoMXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE1MHB4O1xcbiAgICBsZWZ0OiA1NzBweDtcXG4gICAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhlYWRlckZvck5hdiBwe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTkwcHg7XFxuICAgIGxlZnQ6IDU5NnB4O1xcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6dmFyKC0tcHJpbWFyeS1jbHIpO1xcbn1cXG5cXG4uaGVhZGVyRm9yTmF2IHNwYW57XFxuICBcXG4gICAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxufVxcblxcblxcbi5NZW51Qm9keXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMTQ7XFxuICAgIGdyaWQtcm93OiA1LzUwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5NZW51Qm9keSBpbWd7XFxuICAgIHdpZHRoOiAzODBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uTWVudUJvZHkgLm9uZXtcXG4gICAgd2lkdGg6IDk0MHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweFxcbiAgIFxcbiAgICA7XFxufVxcblxcblxcblxcbi5NZW51Qm9keSAgbGl7XFxuICAgIG1hcmdpbjogMjBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIFxcbiB9XFxuXFxuIC5NZW51Qm9keSAgcDpmaXJzdC1jaGlsZHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIFxcblxcbiB9XFxuXFxuXFxuXFxuIC5NZW51Qm9keSAgcDpudGgtY2hpbGQoMil7XFxuICAgIGdyaWQtY29sdW1uOiAxLzY7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcXG4gfVxcbiBcXG5cXG4gLk1lbnVCb2R5ICBwOm50aC1jaGlsZCgzKXtcXG4gICAgXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIG1hcmdpbi1sZWZ0OjEwMHB4O1xcbiB9XFxuXFxuIC5NZW51Qm9keSBoMntcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgXFxuIH1cXG5cXG5cXG4gLnJlc3RyYXVJbmZvU2VjdEZvckhlYWRlcntcXG4gICBncmlkLWNvbHVtbjogMSAvMTQ7XFxuICAgZ3JpZC1yb3c6IDI0LzI4O1xcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuO1xcbn1cXG5cXG4uTWVudUJvZHkgZGl2Om50aC1jaGlsZCgzKXtcXG5cXG4gICAgbWFyZ2luLXRvcDogNTAwcHg7XFxuICAgIDtcXG59XFxuXFxuLk1lbnVCb2R5IC53b3JrV2l0aHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICBnYXA6IDUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOi0zNTBweDtcXG4gICAgbGVmdDogMTUwcHg7XFxuICAgIFxcbiAgIFxcbn1cXG5cXG5cXG5cXG4uTWVudUJvZHkgLndvcmtXaXRoIGltZ3tcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6IDEzMHB4OztcXG5cXG4gICAgXFxufVxcblxcbi5wYXJ0bmVye1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICBcXG4gICAgXFxufVxcblxcbi5wYXJ0bmVyIHB7XFxuICAgXFxubWFyZ2luLWxlZnQ6IDQzJTtcXG5tYXJnaW4tdG9wOiA2MHB4O1xcbn1cXG5cXG4ucGFydG5lciBoMntcXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcXG4gICAgXFxuICAgIH1cXG5cXG4uY29udGVudFNlY29uZFN0eWxle1xcbiAgICB3aWR0aDogMTAwdnc7XFxuYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuODA0KTtcXG5oZWlnaHQ6IDEyMCU7XFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLDg4cHgpO1xcbmdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYwLDcwcHgpO1xcbmdhcDowcHggMjRweDtcXG56LWluZGV4OiAxO1xcbn1cXG5cXG4uZm9vdGVyQ2xhc3N7XFxuICAgIGdyaWQtY29sdW1uOiAxLzE0O1xcbiAgICBncmlkLXJvdzogNDgvNTQ7XFxuICAgIHBhZGRpbmc6IDMwcHggIDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMzBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDsgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9NZW51UGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix5REFBNkM7SUFDN0Msb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysd0JBQXdCOztBQUU1Qjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsbUJBQW1COztBQUV2Qjs7OztBQUlBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLG1DQUFtQztJQUNuQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLHdCQUF3QjtBQUM1Qjs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7O0lBRWIsYUFBYTtJQUNiLFNBQVM7SUFDVDs7SUFFQTtBQUNKOzs7O0FBSUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTs7SUFFYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLDJCQUEyQjs7Q0FFOUI7O0NBRUE7SUFDRyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsK0JBQStCOzs7Q0FHbEM7Ozs7Q0FJQTtJQUNHLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjs7O0NBR0E7O0lBRUcseUJBQXlCO0lBQ3pCLGlCQUFpQjtDQUNwQjs7Q0FFQTtJQUNHLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1COztDQUV0Qjs7O0NBR0E7R0FDRSxrQkFBa0I7R0FDbEIsZUFBZTtHQUNmLHlEQUFvRDs7QUFFdkQ7O0FBRUE7O0lBRUksaUJBQWlCOztBQUVyQjs7QUFFQTs7SUFFSSxhQUFhOztJQUViLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7OztBQUdmOzs7O0FBSUE7SUFDSSxZQUFZO0lBQ1osYUFBYTs7O0FBR2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjs7O0FBR3RCOztBQUVBOztBQUVBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCOztBQUVKO0lBQ0ksWUFBWTtBQUNoQixxQ0FBcUM7QUFDckMsWUFBWTtBQUNaLGFBQWE7QUFDYixzQkFBc0I7QUFDdEIsc0NBQXNDO0FBQ3RDLG1DQUFtQztBQUNuQyxZQUFZO0FBQ1osVUFBVTtBQUNWOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uYm9keVBhZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvaGVhZGVyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICBcXG59XFxuXFxuLmhlYWRlckZvck5hdntcXG4gICAgXFxuICAgIGdyaWQtY29sdW1uOiAxLzE0O1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jbHIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuLmxvZ29Gb3JIZWFkZXJ7XFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbn1cXG5cXG4ubmF2Rm9ySGVhZGVye1xcblxcbiAgICBtYXJnaW4tbGVmdDogNDAwcHg7XFxufVxcblxcbi5oZWFkZXJGb3JOYXYgaDF7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNTBweDtcXG4gICAgbGVmdDogNTcwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXJGb3JOYXYgcHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE5MHB4O1xcbiAgICBsZWZ0OiA1OTZweDtcXG4gICAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktY2xyKTtcXG59XFxuXFxuLmhlYWRlckZvck5hdiBzcGFue1xcbiAgXFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbn1cXG5cXG5cXG4uTWVudUJvZHl7XFxuICAgIGdyaWQtY29sdW1uOiAxLzE0O1xcbiAgICBncmlkLXJvdzogNS81MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uTWVudUJvZHkgaW1ne1xcbiAgICB3aWR0aDogMzgwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLk1lbnVCb2R5IC5vbmV7XFxuICAgIHdpZHRoOiA5NDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHhcXG4gICBcXG4gICAgO1xcbn1cXG5cXG5cXG5cXG4uTWVudUJvZHkgIGxpe1xcbiAgICBtYXJnaW46IDIwcHggMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBcXG4gfVxcblxcbiAuTWVudUJvZHkgIHA6Zmlyc3QtY2hpbGR7XFxuICAgIGdyaWQtY29sdW1uOiAxLzY7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBcXG5cXG4gfVxcblxcblxcblxcbiAuTWVudUJvZHkgIHA6bnRoLWNoaWxkKDIpe1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XFxuIH1cXG4gXFxuXFxuIC5NZW51Qm9keSAgcDpudGgtY2hpbGQoMyl7XFxuICAgIFxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBtYXJnaW4tbGVmdDoxMDBweDtcXG4gfVxcblxcbiAuTWVudUJvZHkgaDJ7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIFxcbiB9XFxuXFxuXFxuIC5yZXN0cmF1SW5mb1NlY3RGb3JIZWFkZXJ7XFxuICAgZ3JpZC1jb2x1bW46IDEgLzE0O1xcbiAgIGdyaWQtcm93OiAyNC8yODtcXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy90b3RhbEluZm9TZWN0LnBuZycpO1xcbjtcXG59XFxuXFxuLk1lbnVCb2R5IGRpdjpudGgtY2hpbGQoMyl7XFxuXFxuICAgIG1hcmdpbi10b3A6IDUwMHB4O1xcbiAgICA7XFxufVxcblxcbi5NZW51Qm9keSAud29ya1dpdGh7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDotMzUwcHg7XFxuICAgIGxlZnQ6IDE1MHB4O1xcbiAgICBcXG4gICBcXG59XFxuXFxuXFxuXFxuLk1lbnVCb2R5IC53b3JrV2l0aCBpbWd7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiAxMzBweDs7XFxuXFxuICAgIFxcbn1cXG5cXG4ucGFydG5lcntcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgXFxuICAgIFxcbn1cXG5cXG4ucGFydG5lciBwe1xcbiAgIFxcbm1hcmdpbi1sZWZ0OiA0MyU7XFxubWFyZ2luLXRvcDogNjBweDtcXG59XFxuXFxuLnBhcnRuZXIgaDJ7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxuICAgIFxcbiAgICB9XFxuXFxuLmNvbnRlbnRTZWNvbmRTdHlsZXtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbmJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjgwNCk7XFxuaGVpZ2h0OiAxMjAlO1xcbmRpc3BsYXk6IGdyaWQ7XFxuZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiw4OHB4KTtcXG5ncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2MCw3MHB4KTtcXG5nYXA6MHB4IDI0cHg7XFxuei1pbmRleDogMTtcXG59XFxuXFxuLmZvb3RlckNsYXNze1xcbiAgICBncmlkLWNvbHVtbjogMS8xNDtcXG4gICAgZ3JpZC1yb3c6IDQ4LzU0O1xcbiAgICBwYWRkaW5nOiAzMHB4ICAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTMwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0hhbWJ1cmdlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvQ29va2llLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9XaW5lLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1haW5TZWN0e1xcbiAgICBncmlkLWNvbHVtbjogMiAvMTE7XFxuICAgIGdyaWQtcm93OiAyNi8zNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjMwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgXFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDEpe1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6cm93O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnIgMWZyIDFmciA7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmciAxZnIgMmZyO1xcblxcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgyKXtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDIpIGgye1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IFZpYmVzJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDIpIGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgyKSBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMikgPiBwe2ZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIHdpZHRoOiAzNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7fVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDEpIGltZzpmaXJzdC1jaGlsZHtcXG4gICAgd2lkdGg6MjUwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICBcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCgyKXtcXG4gICAgd2lkdGg6MTkwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAzLzU7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG59XFxuXFxuXFxuXFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCgzKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDMvNTtcXG4gICAgd2lkdGg6MTgwcHg7XFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDEpIGltZzpudGgtY2hpbGQoNCl7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIHdpZHRoOjE1MHB4O1xcbiAgICBcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCg1KXtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgd2lkdGg6MTAwcHg7XFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDEpIGltZzpudGgtY2hpbGQoNil7XFxuICAgIGdyaWQtY29sdW1uOiA0LzU7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIHdpZHRoOjEwMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDUwcHg7XFxufVxcblxcbi5tZWFsQ2F0U2VjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIG1hcmdpbjozMHB4IDEwcHggO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lYWxDYXRTZWN0ID5kaXY6Zmlyc3QtY2hpbGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubWVhbENhdFNlY3QgPmRpdjpudGgtY2hpbGQoMil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubWVhbENhdFNlY3QgPmRpdjpudGgtY2hpbGQoMyl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG4uRmFzdEZvb2RQe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgICBsZWZ0OiA1cHg7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5MdW5jaFB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDY4cHg7XFxuICAgIGxlZnQ6IDEwNXB4O1xcbiAgICBcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLkRpbm5lclB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEwNXB4O1xcbiAgICBsZWZ0OiAxODhweDtcXG4gICAgXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdHtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItbGVmdDogNXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdCBwOmZpcnN0LWNoaWxke1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7IFxcbn1cXG5cXG4uRXhwZXJpYW5jZVNlY3QgcDpudGgtY2hpbGQoMil7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjpibGFjazsgXFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdCBwOm50aC1jaGlsZCgyKSBzcGFue1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuXFxuICAgIGNvbG9yOmJsYWNrOyBcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9XaHlDaG9vc2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixRQUFRO0lBQ1IsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHdDQUF3QztJQUN4QyxzQ0FBc0M7O0FBRTFDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQSwrQkFBK0IsZUFBZTtJQUMxQyx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwrQkFBK0IsQ0FBQzs7QUFFcEM7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7Ozs7QUFLQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXOztBQUVmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlEQUFnRDtJQUNoRCw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5REFBNkM7SUFDN0MsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseURBQTJDO0lBQzNDLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTOztJQUVULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7O0lBRVgsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVzs7SUFFWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZOztJQUVaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7O0lBRWhCLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWFpblNlY3R7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8xMTtcXG4gICAgZ3JpZC1yb3c6IDI2LzM0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MzBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSl7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzpyb3c7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmciAxZnIgMWZyIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyIDFmciAyZnI7XFxuXFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMikgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMikgaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDIpIHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgyKSA+IHB7Zm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgd2lkdGg6IDM2MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjt9XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOmZpcnN0LWNoaWxke1xcbiAgICB3aWR0aDoyNTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gIFxcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgxKSBpbWc6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDoxOTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNTtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgxKSBpbWc6bnRoLWNoaWxkKDMpe1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMy81O1xcbiAgICB3aWR0aDoxODBweDtcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCg0KXtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgd2lkdGg6MTUwcHg7XFxuICAgIFxcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgxKSBpbWc6bnRoLWNoaWxkKDUpe1xcbiAgICBncmlkLWNvbHVtbjogNC81O1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICB3aWR0aDoxMDBweDtcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCg2KXtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogNTBweDtcXG59XFxuXFxuLm1lYWxDYXRTZWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbWFyZ2luOjMwcHggMTBweCA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVhbENhdFNlY3QgPmRpdjpmaXJzdC1jaGlsZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBoZWlnaHQ6IDY1cHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL0hhbWJ1cmdlci5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLm1lYWxDYXRTZWN0ID5kaXY6bnRoLWNoaWxkKDIpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGhlaWdodDogNjVweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvQ29va2llLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubWVhbENhdFNlY3QgPmRpdjpudGgtY2hpbGQoMyl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9XaW5lLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG4uRmFzdEZvb2RQe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgICBsZWZ0OiA1cHg7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5MdW5jaFB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDY4cHg7XFxuICAgIGxlZnQ6IDEwNXB4O1xcbiAgICBcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLkRpbm5lclB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEwNXB4O1xcbiAgICBsZWZ0OiAxODhweDtcXG4gICAgXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdHtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItbGVmdDogNXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdCBwOmZpcnN0LWNoaWxke1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7IFxcbn1cXG5cXG4uRXhwZXJpYW5jZVNlY3QgcDpudGgtY2hpbGQoMil7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjpibGFjazsgXFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdCBwOm50aC1jaGlsZCgyKSBzcGFue1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuXFxuICAgIGNvbG9yOmJsYWNrOyBcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZhcnJpYWJsZXMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYWJvdXRVc1NlY3RNYWlue1xcblxcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gIGdyaWQtcm93OiAxMC8xOTtcXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBnYXA6IDUwcHg7XFxuICBcXG4gIFxcbiAgXFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gZGl2OmZpcnN0LWNoaWxke1xcbiAgICBcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OjEyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIFxcbiAgICBcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBkaXY6bnRoLWNoaWxkKDIpXFxue1xcbiAgICBoZWlnaHQ6IDEyMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnI7XFxuICAgIGdhcDogOHB4OyAgXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gZGl2Om50aC1jaGlsZCgyKSBpbWc6Zmlyc3QtY2hpbGR7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEvMiA7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uYWJvdXRVc1NlY3RNYWluIGRpdjpudGgtY2hpbGQoMikgaW1nOm50aC1jaGlsZCgyKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLzI7XFxuICAgIGdyaWQtcm93OiAyLzMgO1xcbiAgIFxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBkaXY6bnRoLWNoaWxkKDIpIGltZzpudGgtY2hpbGQoMyl7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8zO1xcbiAgICBncmlkLXJvdzogMi8zIDtcXG4gICBcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gIHVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTs7XFxuICBcXG4gICAgIFxcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIGJ1dHRvbntcXG4gICAgXFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgd2lkdGg6MTIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5hYm91dFVzU2VjdCBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gbGl7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gbGk6OmJlZm9yZXtcXG4gICAgY29udGVudDogJ+KckyAnO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIHB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIHdpZHRoOiAzNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuXFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG5cXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgXFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYWJvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOztJQUVJLGlCQUFpQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTOzs7O0FBSVg7O0FBRUE7O0lBRUksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7O0FBRzNCOztBQUVBOztJQUVJLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjOztJQUVkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjOztJQUVkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjs7O0FBR3BCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7OztBQUduQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL3ZhcnJpYWJsZXMuY3NzJztcXG5cXG4uYWJvdXRVc1NlY3RNYWlue1xcblxcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gIGdyaWQtcm93OiAxMC8xOTtcXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBnYXA6IDUwcHg7XFxuICBcXG4gIFxcbiAgXFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gZGl2OmZpcnN0LWNoaWxke1xcbiAgICBcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OjEyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIFxcbiAgICBcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBkaXY6bnRoLWNoaWxkKDIpXFxue1xcbiAgICBoZWlnaHQ6IDEyMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnI7XFxuICAgIGdhcDogOHB4OyAgXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gZGl2Om50aC1jaGlsZCgyKSBpbWc6Zmlyc3QtY2hpbGR7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEvMiA7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uYWJvdXRVc1NlY3RNYWluIGRpdjpudGgtY2hpbGQoMikgaW1nOm50aC1jaGlsZCgyKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLzI7XFxuICAgIGdyaWQtcm93OiAyLzMgO1xcbiAgIFxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBkaXY6bnRoLWNoaWxkKDIpIGltZzpudGgtY2hpbGQoMyl7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8zO1xcbiAgICBncmlkLXJvdzogMi8zIDtcXG4gICBcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gIHVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTs7XFxuICBcXG4gICAgIFxcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIGJ1dHRvbntcXG4gICAgXFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgd2lkdGg6MTIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5hYm91dFVzU2VjdCBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gbGl7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gbGk6OmJlZm9yZXtcXG4gICAgY29udGVudDogJ+KckyAnO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIHB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIHdpZHRoOiAzNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuXFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG5cXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgXFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ibG9nU2VjdHtcXG5ncmlkLWNvbHVtbjogMiAvIDExO1xcbmdyaWQtcm93OjY4Lzc0IDtcXG4vKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcblxcblxcblxcbn1cXG5cXG4uYmxvZ1NlY3QgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDNweCAyNXB4O1xcblxcbn1cXG5cXG5cXG4uYmxvZ1NlY3QgaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAzcHggMjVweFxcbn1cXG5cXG4uYmxvZ1NlY3Qgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIFxcbn1cXG5cXG4uYmxvZ0NhcmRTZWN0e1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYmxvZ0NhcmR7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIFxcbn1cXG5cXG4uYmxvZ0NhcmQ6aG92ZXJ7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHdoaXRlO1xcbiAgICBcXG59XFxuXFxuLmJsb2dDYXJkIGltZ3tcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBoZWlnaHQ6IDE3MHB4O1xcbiAgIFxcbn1cXG5cXG4uYmxvZ0NhcmQgcDpudGgtY2hpbGQoMil7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIFxcbn1cXG5cXG4uYmxvZ0NhcmQgcDpudGgtY2hpbGQoMyl7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBcXG59XFxuXFxuXFxuLmJsb2dDYXJkIHA6bnRoLWNoaWxkKDQpe1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgXFxufVxcblxcbi5ibG9nQ2FyZCBwe1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG5cXG59XFxuXFxuLmljb25TZWN0e1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDdweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDI4cHg7XFxuICAgIGxlZnQ6IDE1MHB4O1xcblxcbn1cXG5cXG4uaWNvblNlY3QgaW1ne1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBcXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ibG9nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZiwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixtQkFBbUI7QUFDbkIsa0JBQWtCOzs7O0FBSWxCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsZ0JBQWdCOztBQUVwQjs7O0FBR0E7SUFDSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7R0FDeEIsbUJBQW1CO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QiwrQkFBK0I7O0FBRW5DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QiwrQkFBK0I7SUFDL0IsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1Qjs7QUFFM0I7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVzs7QUFFZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOzs7QUFHaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmJsb2dTZWN0e1xcbmdyaWQtY29sdW1uOiAyIC8gMTE7XFxuZ3JpZC1yb3c6NjgvNzQgO1xcbi8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFxuXFxufVxcblxcbi5ibG9nU2VjdCBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogM3B4IDI1cHg7XFxuXFxufVxcblxcblxcbi5ibG9nU2VjdCBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW46IDNweCAyNXB4XFxufVxcblxcbi5ibG9nU2VjdCBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgXFxufVxcblxcbi5ibG9nQ2FyZFNlY3R7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiA0NTBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ibG9nQ2FyZHtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgXFxufVxcblxcbi5ibG9nQ2FyZDpob3ZlcntcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggd2hpdGU7XFxuICAgIFxcbn1cXG5cXG4uYmxvZ0NhcmQgaW1ne1xcbiAgICB3aWR0aDogMjI4cHg7XFxuICAgIGhlaWdodDogMTcwcHg7XFxuICAgXFxufVxcblxcbi5ibG9nQ2FyZCBwOm50aC1jaGlsZCgyKXtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgXFxufVxcblxcbi5ibG9nQ2FyZCBwOm50aC1jaGlsZCgzKXtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIFxcbn1cXG5cXG5cXG4uYmxvZ0NhcmQgcDpudGgtY2hpbGQoNCl7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBcXG59XFxuXFxuLmJsb2dDYXJkIHB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcblxcbn1cXG5cXG4uaWNvblNlY3R7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogN3B4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMjhweDtcXG4gICAgbGVmdDogMTUwcHg7XFxuXFxufVxcblxcbi5pY29uU2VjdCBpbWd7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIFxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuRm9vZENhdFNlY3Qge1xcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gICAgZ3JpZC1yb3c6IDIwLzI1O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgXFxuICAgIFxcbiAgICBcXG59XFxuXFxuLkZvb2RDYXRTZWN0ID5kaXY6Zmlyc3QtY2hpbGR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBcXG4gICBcXG59XFxuXFxuLkZvb2RDYXRTZWN0IGRpdjpudGgtY2hpbGQoMil7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICB3aWR0aDogMTAwcHg7XFxuICAgaGVpZ2h0OiAzNXB4O1xcbiAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgIHRvcDogMjAwcHg7XFxuICAgbGVmdDogODBweDtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgXFxufVxcblxcbi5Gb29kQ2F0U2VjdCBkaXY6bnRoLWNoaWxkKDMpe1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOiAyNDVweDtcXG4gICAgbGVmdDogMjVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIFxcbn1cXG4uRm9vZENhdFNlY3QgPiBkaXYgaW1ne1xcbiAgIHdpZHRoOiAyMjBweDtcXG4gICBtYXJnaW46IDBweCAxMHB4O1xcbiAgIFxcbn1cXG5cXG4uc2lkZUdyYXNzSW1ne1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICByaWdodDogLTIwMHB4O1xcbiAgIHRvcDoxODBweDtcXG59XFxuXFxuLkZvb2RDYXRTZWN0ICBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG4gICAgXFxuIH1cXG5cXG4gLkZvb2RDYXRTZWN0ICBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICAgIFxcbiB9XFxuXFxuIC5Gb29kQ2F0U2VjdCBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZm9vZENhdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTs7SUFFZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCOzs7O0FBSXRCOztBQUVBO0lBQ0ksV0FBVzs7SUFFWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxnQkFBZ0I7OztBQUdwQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxrQkFBa0I7R0FDbkIsWUFBWTtHQUNaLFlBQVk7R0FDWixpQkFBaUI7R0FDakIsVUFBVTtHQUNWLFVBQVU7R0FDVixhQUFhO0dBQ2IsdUJBQXVCO0dBQ3ZCLG1CQUFtQjtHQUNuQixrQ0FBa0M7R0FDbEMseUJBQXlCO0dBQ3pCLGdCQUFnQjs7QUFFbkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyx1QkFBdUI7O0FBRTNCO0FBQ0E7R0FDRyxZQUFZO0dBQ1osZ0JBQWdCOztBQUVuQjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixhQUFhO0dBQ2IsU0FBUztBQUNaOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsa0JBQWtCOztDQUVyQjs7Q0FFQTtJQUNHLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCOztDQUVyQjs7Q0FFQTtJQUNHLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7Q0FDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkZvb2RDYXRTZWN0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTE7XFxuICAgIGdyaWQtcm93OiAyMC8yNTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcbiAgICBcXG4gICAgXFxufVxcblxcbi5Gb29kQ2F0U2VjdCA+ZGl2OmZpcnN0LWNoaWxke1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgXFxuICAgXFxufVxcblxcbi5Gb29kQ2F0U2VjdCBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgd2lkdGg6IDEwMHB4O1xcbiAgIGhlaWdodDogMzVweDtcXG4gICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICB0b3A6IDIwMHB4O1xcbiAgIGxlZnQ6IDgwcHg7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICBmb250LXdlaWdodDogNjAwO1xcbiAgIFxcbn1cXG5cXG4uRm9vZENhdFNlY3QgZGl2Om50aC1jaGlsZCgzKXtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDogMjQ1cHg7XFxuICAgIGxlZnQ6IDI1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBcXG59XFxuLkZvb2RDYXRTZWN0ID4gZGl2IGltZ3tcXG4gICB3aWR0aDogMjIwcHg7XFxuICAgbWFyZ2luOiAwcHggMTBweDtcXG4gICBcXG59XFxuXFxuLnNpZGVHcmFzc0ltZ3tcXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgcmlnaHQ6IC0yMDBweDtcXG4gICB0b3A6MTgwcHg7XFxufVxcblxcbi5Gb29kQ2F0U2VjdCAgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxuICAgIFxcbiB9XFxuXFxuIC5Gb29kQ2F0U2VjdCAgaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgICBcXG4gfVxcblxcbiAuRm9vZENhdFNlY3Qgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9mYi1mLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy90d2l0dGVyLWYucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2luc3RhLWYucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3l0LWYucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3Bpbi1mLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9DbG9jay5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mb290ZXJ7XFxuICBwYWRkaW5nOiAzMHB4ICAyMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEvMTQ7XFxuICBncmlkLXJvdzogNzUvODE7XFxuICAvKiBib3JkZXI6IDFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkOyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIFxcbn1cXG5cXG4uZ3Jhc3NDb3JuZXIge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICByaWdodDogMHB4O1xcbiAgIGJvdHRvbTogMHB4O1xcbiAgIG9wYWNpdHk6IC41O1xcbiAgIFxcbn1cXG5cXG4uZm9vdGVyQmVsdHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIFxcbn1cXG5cXG4uc29jaWFsTWVkU2Vje1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMTQwcHg7XFxufVxcblxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCgxKXtcXG5iYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbndpZHRoOiAyN3B4O1xcbmhlaWdodDogMjdweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuYmFja2dyb3VuZC1zaXplOiAzMCU7XFxubWFyZ2luOiAwcHggNnB4O1xcblxcblxcbn1cXG5cXG4uc29jaWFsTWVkU2VjIGRpdjpudGgtY2hpbGQoMil7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgd2lkdGg6IDI3cHg7XFxuICBoZWlnaHQ6IDI3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0NSU7XFxuICBtYXJnaW46IDBweCA2cHg7XFxuICBcXG4gIH1cXG5cXG4uc29jaWFsTWVkU2VjIGRpdjpudGgtY2hpbGQoMyl7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIHdpZHRoOiAyN3B4O1xcbiAgICBoZWlnaHQ6IDI3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQ1JTtcXG4gICAgbWFyZ2luOiAwcHggNnB4O1xcbiAgICBcXG4gICAgfVxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCg0KXtcXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICAgIHdpZHRoOiAyN3B4O1xcbiAgICAgIGhlaWdodDogMjdweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1zaXplOiA0NSU7XFxuICAgICAgbWFyZ2luOiAwcHggNnB4O1xcbiAgICAgIFxcbiAgICAgIH1cXG4uc29jaWFsTWVkU2VjIGRpdjpudGgtY2hpbGQoNSl7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICAgICAgd2lkdGg6IDI3cHg7XFxuICAgICAgICBoZWlnaHQ6IDI3cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0NSU7XFxuICAgICAgICBtYXJnaW46IDBweCA2cHg7XFxuICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4uZm9vdGVyQmVsdCBwe1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgICAgZm9udC1zaXplOjE3cHg7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNDBweDtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7IFxcbiAgICAgICAgfVxcblxcbi5mb290ZXJDb250ZW50e1xcblxcbndpZHRoOiA4NSU7XFxuaGVpZ2h0OiAxMDAlO1xcbi8qIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7ICovXFxuZGlzcGxheTogZmxleDtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbm1hcmdpbi10b3A6IC0yMHB4O1xcblxcbn1cXG5cXG4uZm9vdGVyVHh0Q29udGVudHtcXG4gICB3aWR0aDogMTAwJTtcXG4gICBoZWlnaHQ6IDUwJTtcXG4gICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgZGlzcGxheTogZmxleDtcXG4gICBnYXA6IDQwcHg7XFxuICAgbWFyZ2luLXJpZ2h0OiA2MHB4XFxuICAgO1xcbn1cXG5cXG4uZm9vdGVyVHh0Q29udGVudCA+IGRpdntcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICAvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4IDBweDtcXG59XFxuXFxuLlJjdFBvc3QgZGl2e1xcbiAgXFxuICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmOyA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA1NHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogMHB4IDhweDtcXG59XFxuXFxuLlJjdFBvc3QgaW1ne1xcbmhlaWdodDogNDBweDtcXG53aWR0aDogNDBweDtcXG5ncmlkLWNvbHVtbjogMS8yO1xcbmdyaWQtcm93OiAxLzM7XFxuXFxufVxcblxcbi5SY3RQb3N0IGRpdiBwOm50aC1jaGlsZCgyKXtcXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDMpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uUmN0UG9zdCBkaXYgcDpudGgtY2hpbGQoMyl7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIFxcbn1cXG5cXG4uUmN0UG9zdCBoMntcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlbHBTZWN0IGgye1xcbiAgY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgXFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlbHBTZWN0IHB7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7IFxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi51c2VGdWxsU2VjdCBwe1xcbiAgY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmOyBcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udXNlRnVsbFNlY3QgaDJ7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4uYWJvdXRVc1NlY3QgPiBwe1xcbmNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbmZvbnQtd2VpZ2h0OiAzMDA7XFxuZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWYgO1xcbmZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xcbm1hcmdpbi10b3A6IDhweDtcXG4gIFxcbn1cXG5cXG4uYWJvdXRVc1NlY3QgPiBoMntcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgXFxuICB9XFxuXFxuLm9wZW5IclNlY3RNYWlue1xcbiBkaXNwbGF5OiBmbGV4O1xcbiBnYXA6IDBweCAxMHB4O1xcbiBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG5cXG59XFxuXFxuLm9wZW5IclNlY3RJY29ue1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1zaXplOiA3MCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFxufVxcblxcbi5hYm91dFVzU2VjdCBwOm50aC1jaGlsZCgxKXtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG5cXG59XFxuXFxuLmFib3V0VXNTZWN0IHA6bnRoLWNoaWxkKDIpe1xcbiAgZm9udC1zaXplOiAxMHB4O1xcblxcbn1cXG5cXG4uYWJvdXRVc1NlY3QgcDpudGgtY2hpbGQoMyl7XFxuICBmb250LXNpemU6IDEwcHg7XFxuXFxufVxcblxcbi5vcGVuSHJTZWN0e1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzQ7XFxufVxcblxcbi5zdXBwb3J0U2VjdHtcXG4gIHdpZHRoOiA2OSU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBib3JkZXI6IDFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkO1xcbiAgbWFyZ2luLWJvdHRvbTotNDBweDtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogMHB4IDMwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLnN1cHBvcnRTZWN0IHNwYW57XFxuY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG5mb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zdXBwb3J0U2VjdCBwOmZpcnN0LWNoaWxke1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICBmb250LXNpemU6IDE5cHg7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB9XFxuXFxuICAuc3VwcG9ydFNlY3QgcDpudGgtY2hpbGQoMil7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBcXG4gICAgfVxcblxcbiAgICAuc3VwcG9ydFNlY3QgZGl2e1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgfVxcblxcbiAgICAgIC5zdXBwb3J0U2VjdCBpbnB1dHtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLnN1cHBvcnRTZWN0IGlucHV0OmZvY3Vze1xcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICBcXG4gICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLnN1cHBvcnRTZWN0IGlucHV0OjpwbGFjZWhvbGRlcntcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgfVxcblxcbiAgICAgIC5zdXBwb3J0U2VjdCBidXR0b257XFxuICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgICAgIDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAuc3VwcG9ydFNlY3QgYnV0dG9uOmhvdmVye1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjMzLCAyMzMpXFxuICAgICAgICAgICAgIDtcXG4gICAgICAgICAgICAgICB9XFxuXFxuICAgIFxcblxcblxcblxcblxcblxcblxcblxcbiAgICAgICAgICAgIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1COztBQUVyQjs7QUFFQTtJQUNJLGFBQWE7R0FDZCxrQkFBa0I7R0FDbEIsVUFBVTtHQUNWLFdBQVc7R0FDWCxXQUFXOztBQUVkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1COztBQUV2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtBQUNBLG1EQUFxQztBQUNyQyxXQUFXO0FBQ1gsWUFBWTtBQUNaLGlDQUFpQztBQUNq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QWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDJDQUEyQztFQUMzQyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCLGVBQWU7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsbUNBQW1DOztJQUVuQzs7SUFFQTtJQUNBLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGFBQWE7TUFDWDs7TUFFQTtRQUNFLFlBQVk7UUFDWixvQ0FBb0M7UUFDcEMsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixhQUFhOztVQUVYOztVQUVBO1lBQ0UsWUFBWTtZQUNaLG9DQUFvQztZQUNwQyxZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixZQUFZO1lBQ1osYUFBYTs7Y0FFWDs7VUFFSjtZQUNFLGdDQUFnQztZQUNoQyx1QkFBdUI7OztjQUdyQjs7TUFFUjtPQUNDLFlBQVk7UUFDWCxrQ0FBa0M7UUFDbEMsWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7O1VBRWI7O1VBRUE7WUFDRSxZQUFZO2FBQ1gsa0NBQWtDO2FBQ2xDLFlBQVk7YUFDWixhQUFhO2FBQ2Isa0JBQWtCO2FBQ2xCLHlCQUF5QjthQUN6QixlQUFlO2FBQ2Y7YUFDQTtlQUNFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXJ7XFxuICBwYWRkaW5nOiAzMHB4ICAyMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEvMTQ7XFxuICBncmlkLXJvdzogNzUvODE7XFxuICAvKiBib3JkZXI6IDFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkOyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIFxcbn1cXG5cXG4uZ3Jhc3NDb3JuZXIge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICByaWdodDogMHB4O1xcbiAgIGJvdHRvbTogMHB4O1xcbiAgIG9wYWNpdHk6IC41O1xcbiAgIFxcbn1cXG5cXG4uZm9vdGVyQmVsdHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIFxcbn1cXG5cXG4uc29jaWFsTWVkU2Vje1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMTQwcHg7XFxufVxcblxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCgxKXtcXG5iYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9mYi1mLnBuZycpO1xcbndpZHRoOiAyN3B4O1xcbmhlaWdodDogMjdweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuYmFja2dyb3VuZC1zaXplOiAzMCU7XFxubWFyZ2luOiAwcHggNnB4O1xcblxcblxcbn1cXG5cXG4uc29jaWFsTWVkU2VjIGRpdjpudGgtY2hpbGQoMil7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy90d2l0dGVyLWYucG5nJyk7XFxuICB3aWR0aDogMjdweDtcXG4gIGhlaWdodDogMjdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDQ1JTtcXG4gIG1hcmdpbjogMHB4IDZweDtcXG4gIFxcbiAgfVxcblxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCgzKXtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvaW5zdGEtZi5wbmcnKTtcXG4gICAgd2lkdGg6IDI3cHg7XFxuICAgIGhlaWdodDogMjdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDUlO1xcbiAgICBtYXJnaW46IDBweCA2cHg7XFxuICAgIFxcbiAgICB9XFxuLnNvY2lhbE1lZFNlYyBkaXY6bnRoLWNoaWxkKDQpe1xcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL3l0LWYucG5nJyk7XFxuICAgICAgd2lkdGg6IDI3cHg7XFxuICAgICAgaGVpZ2h0OiAyN3B4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDQ1JTtcXG4gICAgICBtYXJnaW46IDBweCA2cHg7XFxuICAgICAgXFxuICAgICAgfVxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCg1KXtcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL3Bpbi1mLnBuZycpO1xcbiAgICAgICAgd2lkdGg6IDI3cHg7XFxuICAgICAgICBoZWlnaHQ6IDI3cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0NSU7XFxuICAgICAgICBtYXJnaW46IDBweCA2cHg7XFxuICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4uZm9vdGVyQmVsdCBwe1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgICAgZm9udC1zaXplOjE3cHg7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNDBweDtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7IFxcbiAgICAgICAgfVxcblxcbi5mb290ZXJDb250ZW50e1xcblxcbndpZHRoOiA4NSU7XFxuaGVpZ2h0OiAxMDAlO1xcbi8qIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7ICovXFxuZGlzcGxheTogZmxleDtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbm1hcmdpbi10b3A6IC0yMHB4O1xcblxcbn1cXG5cXG4uZm9vdGVyVHh0Q29udGVudHtcXG4gICB3aWR0aDogMTAwJTtcXG4gICBoZWlnaHQ6IDUwJTtcXG4gICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgZGlzcGxheTogZmxleDtcXG4gICBnYXA6IDQwcHg7XFxuICAgbWFyZ2luLXJpZ2h0OiA2MHB4XFxuICAgO1xcbn1cXG5cXG4uZm9vdGVyVHh0Q29udGVudCA+IGRpdntcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICAvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4IDBweDtcXG59XFxuXFxuLlJjdFBvc3QgZGl2e1xcbiAgXFxuICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmOyA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA1NHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogMHB4IDhweDtcXG59XFxuXFxuLlJjdFBvc3QgaW1ne1xcbmhlaWdodDogNDBweDtcXG53aWR0aDogNDBweDtcXG5ncmlkLWNvbHVtbjogMS8yO1xcbmdyaWQtcm93OiAxLzM7XFxuXFxufVxcblxcbi5SY3RQb3N0IGRpdiBwOm50aC1jaGlsZCgyKXtcXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDMpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uUmN0UG9zdCBkaXYgcDpudGgtY2hpbGQoMyl7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIFxcbn1cXG5cXG4uUmN0UG9zdCBoMntcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlbHBTZWN0IGgye1xcbiAgY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgXFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlbHBTZWN0IHB7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7IFxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi51c2VGdWxsU2VjdCBwe1xcbiAgY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmOyBcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udXNlRnVsbFNlY3QgaDJ7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4uYWJvdXRVc1NlY3QgPiBwe1xcbmNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbmZvbnQtd2VpZ2h0OiAzMDA7XFxuZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWYgO1xcbmZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xcbm1hcmdpbi10b3A6IDhweDtcXG4gIFxcbn1cXG5cXG4uYWJvdXRVc1NlY3QgPiBoMntcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgXFxuICB9XFxuXFxuLm9wZW5IclNlY3RNYWlue1xcbiBkaXNwbGF5OiBmbGV4O1xcbiBnYXA6IDBweCAxMHB4O1xcbiBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG5cXG59XFxuXFxuLm9wZW5IclNlY3RJY29ue1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL0Nsb2NrLnBuZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogNzAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcbn1cXG5cXG4uYWJvdXRVc1NlY3QgcDpudGgtY2hpbGQoMSl7XFxuICBmb250LXNpemU6IDE1cHg7XFxuXFxufVxcblxcbi5hYm91dFVzU2VjdCBwOm50aC1jaGlsZCgyKXtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG5cXG59XFxuXFxuLmFib3V0VXNTZWN0IHA6bnRoLWNoaWxkKDMpe1xcbiAgZm9udC1zaXplOiAxMHB4O1xcblxcbn1cXG5cXG4ub3BlbkhyU2VjdHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS80O1xcbn1cXG5cXG4uc3VwcG9ydFNlY3R7XFxuICB3aWR0aDogNjklO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDtcXG4gIG1hcmdpbi1ib3R0b206LTQwcHg7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDBweCAzMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5zdXBwb3J0U2VjdCBzcGFue1xcbmNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc3VwcG9ydFNlY3QgcDpmaXJzdC1jaGlsZHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgfVxcblxcbiAgLnN1cHBvcnRTZWN0IHA6bnRoLWNoaWxkKDIpe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgXFxuICAgIH1cXG5cXG4gICAgLnN1cHBvcnRTZWN0IGRpdntcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIH1cXG5cXG4gICAgICAuc3VwcG9ydFNlY3QgaW5wdXR7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5zdXBwb3J0U2VjdCBpbnB1dDpmb2N1c3tcXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgXFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5zdXBwb3J0U2VjdCBpbnB1dDo6cGxhY2Vob2xkZXJ7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgICAgICAgICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAgIH1cXG5cXG4gICAgICAuc3VwcG9ydFNlY3QgYnV0dG9ue1xcbiAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgICAgICA7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLnN1cHBvcnRTZWN0IGJ1dHRvbjpob3ZlcntcXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzMywgMjMzKVxcbiAgICAgICAgICAgICA7XFxuICAgICAgICAgICAgICAgfVxcblxcbiAgICBcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4gICAgICAgICAgICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG4uRnJvbU1lbnVNYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gICAgZ3JpZC1yb3c6IDQyLzQ1O1xcbiAgIFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5Gcm9tTWVudU1haW4gaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDs7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICB0b3A6IC0xMTBweDtcXG59XFxuXFxuLkZyb21NZW51TWFpbiBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIHRvcDogLTgwcHg7XFxufVxcblxcbi5Gcm9tTWVudU1haW4gc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5uYXZ7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyNSU7ICovXFxufVxcbi5uYXYgdWwgbGl7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4ubWVudUxpc3RTZWN0e1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIG1hcmdpbi10b3A6IGF1dG8gKi9cXG59XFxuXFxuXFxuLm1lbnVMaXN0U2VjdCBkaXY6Zmlyc3QtY2hpbGR7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4ubWVudVNlY3R7XFxuICAgIHdpZHRoOjc1MHB4O1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBcXG59XFxuXFxuLm1lbnVTZWN0IGltZ3tcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5tZW51U2VjdCB1bHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweCAwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm1lbnVTZWN0IGxpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXG4gICBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb29kSXRlbUltZ1NlY3R7XFxuICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWVudVNlY3QgbGkgaW1ne1xcbiAgICBcXG4gICAgXFxuXFxufVxcbi5tZW51U2VjdCBsaSBwOm50aC1jaGlsZCgxKXtcXG5mb250LXNpemU6IDEycHg7XFxuXFxufVxcblxcbi5tZW51U2VjdCBsaSBwOm50aC1jaGlsZCgyKXtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBcXG4gICAgfVxcblxcbi5tZW51U2VjdCBsaSBwOm50aC1jaGlsZCgzKXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxufVxcblxcblxcbi5kaXNwbGF5RGlzaCBpbWd7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9mcm9tTWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZUFBZTs7SUFFZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJO2VBQ1c7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osYUFBYTs7O0FBR2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGlCQUFpQjs7SUFFakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7O0lBRWhCOztBQUVKO1FBQ1EsZUFBZTtRQUNmLHlCQUF5QjtBQUNqQzs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcbi5Gcm9tTWVudU1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtY29sdW1uOiAyLzExO1xcbiAgICBncmlkLXJvdzogNDIvNDU7XFxuICAgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLkZyb21NZW51TWFpbiBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4OztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIHRvcDogLTExMHB4O1xcbn1cXG5cXG4uRnJvbU1lbnVNYWluIGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgdG9wOiAtODBweDtcXG59XFxuXFxuLkZyb21NZW51TWFpbiBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLm5hdntcXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI1JTsgKi9cXG59XFxuLm5hdiB1bCBsaXtcXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XFxufVxcblxcbi5tZW51TGlzdFNlY3R7XFxuICAgIHdpZHRoOiA3NTBweDtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogbWFyZ2luLXRvcDogYXV0byAqL1xcbn1cXG5cXG5cXG4ubWVudUxpc3RTZWN0IGRpdjpmaXJzdC1jaGlsZHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICBcXG4gICAgXFxufVxcblxcbi5tZW51U2VjdHtcXG4gICAgd2lkdGg6NzUwcHg7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIFxcbn1cXG5cXG4ubWVudVNlY3QgaW1ne1xcbiAgICB3aWR0aDogNDBweDtcXG59XFxuXFxuLm1lbnVTZWN0IHVse1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4IDBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubWVudVNlY3QgbGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb2RJdGVtSW1nU2VjdHtcXG4gICAgd2lkdGg6IDQ1cHggIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tZW51U2VjdCBsaSBpbWd7XFxuICAgIFxcbiAgICBcXG5cXG59XFxuLm1lbnVTZWN0IGxpIHA6bnRoLWNoaWxkKDEpe1xcbmZvbnQtc2l6ZTogMTJweDtcXG5cXG59XFxuXFxuLm1lbnVTZWN0IGxpIHA6bnRoLWNoaWxkKDIpe1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIFxcbiAgICB9XFxuXFxuLm1lbnVTZWN0IGxpIHA6bnRoLWNoaWxkKDMpe1xcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG59XFxuXFxuXFxuLmRpc3BsYXlEaXNoIGltZ3tcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdmFycmlhYmxlcy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyZWF0K1ZpYmVzJmZhbWlseT1JbnRlcjp3Z2h0QDIwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmhlYWRlcntcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxvZ28gaW1ne1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjBweDtcXG4gICAgbGVmdDo0NyU7XFxufVxcblxcbnVse1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIFxcbn1cXG5cXG5saXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5zZWFyY2hTZWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0NnB4O1xcbiAgICByaWdodDogMXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgXFxuICAgIFxcbn1cXG5cXG5cXG4uc2VhcmNoQmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG59XFxuXFxuI2hhbmRCYWd7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlYXJjaEljb24ge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIFxcbiAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XFxufVxcblxcbi5zZWFyY2hCYXIgaW5wdXR7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHdpZHRoOiAxNjZweDtcXG4gICAgXFxufVxcblxcbi5zZWFyY2hCYXIgaW5wdXQ6OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsaUJBQWlCOztBQUVuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7OztBQUd2Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7O0lBRVosa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi92YXJyaWFibGVzLmNzcyc7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PUludGVyOndnaHRAMjAwJmRpc3BsYXk9c3dhcCcpO1xcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaGVhZGVye1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubG9nbyBpbWd7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICBsZWZ0OjQ3JTtcXG59XFxuXFxudWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgXFxufVxcblxcbmxpe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjs7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnNlYXJjaFNlY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQ2cHg7XFxuICAgIHJpZ2h0OiAxcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICBcXG4gICAgXFxufVxcblxcblxcbi5zZWFyY2hCYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbn1cXG5cXG4jaGFuZEJhZ3tcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VhcmNoSWNvbiB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgXFxuICAgIG1hcmdpbi1yaWdodDogMTdweDtcXG59XFxuXFxuLnNlYXJjaEJhciBpbnB1dHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IDE2NnB4O1xcbiAgICBcXG59XFxuXFxuLnNlYXJjaEJhciBpbnB1dDo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdmFycmlhYmxlcy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hvbWVEaXNoLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PUludGVyOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwibWFpbntcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDIvMTM7XFxuICBncmlkLXJvdzogMy84O1xcbiAgZGlzcGxheTogZmxleDtcXG4gXFxuICBcXG59XFxuXFxubWFpbiAudGV4dENvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNDglO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6MXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgXFxufVxcblxcbi5zb2NpYWxTZWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjMwJTtcXG4gICAgbGVmdDogLTEwcHg7XFxuICAgXFxufVxcblxcbi5zb2NpYWxTZWN0IGltZ3tcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbiAgICB3aWR0aDoxNHB4O1xcbiAgICBcXG59XFxuXFxuLnRleHRDb250ZW50IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIHdpZHRoOjEyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXJnaW46MTBweCAgMzVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG59XFxuXFxuLnRleHRDb250ZW50IHB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG5jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG53aWR0aDogMzkwcHg7XFxubWFyZ2luOiAxMHB4IDM1cHg7XFxuZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRleHRDb250ZW50IC5oZWFkaW5nMntcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG59XFxuXFxuXFxuLnRleHRDb250ZW50IC5oZWFkaW5nMXtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbiAgICBcXG59XFxuXFxuXFxuLmltYWdlU2VjdHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMzAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDk4JTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTs7SUFFSSxpQkFBaUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7OztBQUdmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGFBQWE7R0FDZCxtQkFBbUI7R0FDbkIsdUJBQXVCO0lBQ3RCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVOztBQUVkOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25CLHVCQUF1QjtBQUN2QixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLCtCQUErQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsaUJBQWlCOztBQUVyQjs7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1EQUF5QztJQUN6QyxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsNEJBQTRCOztBQUVoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL3ZhcnJpYWJsZXMuY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZmYW1pbHk9SW50ZXI6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbm1haW57XFxuXFxuICAgIGdyaWQtY29sdW1uOiAyLzEzO1xcbiAgZ3JpZC1yb3c6IDMvODtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuIFxcbiAgXFxufVxcblxcbm1haW4gLnRleHRDb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQ4JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OjFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcbn1cXG5cXG4uc29jaWFsU2VjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDozMCU7XFxuICAgIGxlZnQ6IC0xMHB4O1xcbiAgIFxcbn1cXG5cXG4uc29jaWFsU2VjdCBpbWd7XFxuICAgIGhlaWdodDogMTRweDtcXG4gICAgd2lkdGg6MTRweDtcXG4gICAgXFxufVxcblxcbi50ZXh0Q29udGVudCBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICB3aWR0aDoxMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWFyZ2luOjEwcHggIDM1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxufVxcblxcbi50ZXh0Q29udGVudCBwe1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxud2lkdGg6IDM5MHB4O1xcbm1hcmdpbjogMTBweCAzNXB4O1xcbmZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50ZXh0Q29udGVudCAuaGVhZGluZzJ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxufVxcblxcblxcbi50ZXh0Q29udGVudCAuaGVhZGluZzF7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgXFxufVxcblxcblxcbi5pbWFnZVNlY3R7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMTMwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvaG9tZURpc2gucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogOTglO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIFxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdmFycmlhYmxlcy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF81X19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vZENhdC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzZfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9XaHlDaG9vc2UuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF83X19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzdHJhdUluZm9TZWN0LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfOF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zyb21NZW51LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfOV9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL291ckNoZWYuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rlc3RpbW9uaWFsLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXN0cmF1QWN0aXZlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTJfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ibG9nLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTNfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9NZW51UGFnZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL21haW5iZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF81X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF82X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF83X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF84X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF85X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEyX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY2xyKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgXFxuICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG4uY29udGVudHtcXG53aWR0aDogMTAwdnc7XFxuYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuODA0KTtcXG5oZWlnaHQ6IDEyMCU7XFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLDg4cHgpO1xcbmdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgwLDcwcHgpO1xcbmdhcDowcHggMjRweDtcXG56LWluZGV4OiAxO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLHlEQUE2QztJQUM3QyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixjQUFjOztHQUVmLGtCQUFrQjtJQUNqQix3QkFBd0I7O0FBRTVCOzs7O0FBSUE7QUFDQSxZQUFZO0FBQ1oscUNBQXFDO0FBQ3JDLFlBQVk7QUFDWixhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLHNDQUFzQztBQUN0QyxtQ0FBbUM7QUFDbkMsWUFBWTtBQUNaLFVBQVU7QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL3ZhcnJpYWJsZXMuY3NzJztcXG5AaW1wb3J0IFxcXCIuL2hlYWRlci5jc3NcXFwiO1xcbkBpbXBvcnQgJy4vaG9tZS5jc3MnO1xcbkBpbXBvcnQgJy4vZm9vdGVyLmNzcyc7XFxuQGltcG9ydCAnLi9hYm91dC5jc3MnO1xcbkBpbXBvcnQgJy4vZm9vZENhdC5jc3MnO1xcbkBpbXBvcnQgJy4vV2h5Q2hvb3NlLmNzcyc7XFxuQGltcG9ydCAnLi9yZXN0cmF1SW5mb1NlY3QuY3NzJztcXG5AaW1wb3J0ICcuL2Zyb21NZW51LmNzcyc7XFxuQGltcG9ydCAnLi9vdXJDaGVmLmNzcyc7XFxuQGltcG9ydCAnLi90ZXN0aW1vbmlhbC5jc3MnO1xcbkBpbXBvcnQgJy4vcmVzdHJhdUFjdGl2ZS5jc3MnO1xcbkBpbXBvcnQgJy4vYmxvZy5jc3MnO1xcbkBpbXBvcnQgJy4vTWVudVBhZ2UuY3NzJztcXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9tYWluYmcucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgIFxcbiAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuLmNvbnRlbnR7XFxud2lkdGg6IDEwMHZ3O1xcbmJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjgwNCk7XFxuaGVpZ2h0OiAxMjAlO1xcbmRpc3BsYXk6IGdyaWQ7XFxuZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiw4OHB4KTtcXG5ncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4MCw3MHB4KTtcXG5nYXA6MHB4IDI0cHg7XFxuei1pbmRleDogMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuLm91ckNoZWZTZWN0e1xcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gICAgZ3JpZC1yb3c6IDQ3LzUyO1xcbiAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5vdXJDaGVmU2VjdCBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4OztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBcXG59XFxuXFxuLm91ckNoZWZTZWN0IGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzBweDtcXG4gICAgbGVmdDogMzIwcHg7XFxufVxcblxcbi5vdXJDaGVmU2VjdCBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmNoZWZMaXN0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gIFxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICB0b3A6IDIwcHg7XFxuICAgIFxcbn1cXG5cXG4gLm91ckNoZWZTZWN0IGJ1dHRvbiB7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtODBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLm91ckNoZWZTZWN0IGJ1dHRvbjpob3ZlciB7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtODBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbn1cXG5cXG4uY2hlZkxpc3QgLmNoZWZTZWN0e1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxufVxcblxcbi5jaGVmTGlzdCBpbWd7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgc2NhbGU6IDE7XFxuICAgIFxcbiAgICB0cmFuc2l0aW9uOiAuNXM7XFxufVxcblxcbi5jaGVmTGlzdCBpbWc6aG92ZXJ7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgc2NhbGU6IDEuMjtcXG59XFxuXFxuLmNoZWZMaXN0IC5pbmZve1xcblxcbiAgICB3aWR0aDogMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jbHIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IC41cztcXG59XFxuXFxuLmNoZWZMaXN0IC5pbmZvIHA6Zmlyc3QtY2hpbGR7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgXFxuXFxufVxcblxcbi5jaGVmTGlzdCAuaW5mbyBwOm50aC1jaGlsZCgyKXtcXG4gICAgZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOjEwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIFxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL291ckNoZWYuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhOztJQUViLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtHQUN4QixrQkFBa0I7R0FDbEIsU0FBUzs7QUFFWjs7Q0FFQzs7SUFFRyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25COztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFROztJQUVSLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7OztBQUdqQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsYUFBYTs7QUFFakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuLm91ckNoZWZTZWN0e1xcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gICAgZ3JpZC1yb3c6IDQ3LzUyO1xcbiAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5vdXJDaGVmU2VjdCBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4OztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBcXG59XFxuXFxuLm91ckNoZWZTZWN0IGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzBweDtcXG4gICAgbGVmdDogMzIwcHg7XFxufVxcblxcbi5vdXJDaGVmU2VjdCBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmNoZWZMaXN0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gIFxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICB0b3A6IDIwcHg7XFxuICAgIFxcbn1cXG5cXG4gLm91ckNoZWZTZWN0IGJ1dHRvbiB7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtODBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLm91ckNoZWZTZWN0IGJ1dHRvbjpob3ZlciB7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtODBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbn1cXG5cXG4uY2hlZkxpc3QgLmNoZWZTZWN0e1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxufVxcblxcbi5jaGVmTGlzdCBpbWd7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgc2NhbGU6IDE7XFxuICAgIFxcbiAgICB0cmFuc2l0aW9uOiAuNXM7XFxufVxcblxcbi5jaGVmTGlzdCBpbWc6aG92ZXJ7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgc2NhbGU6IDEuMjtcXG59XFxuXFxuLmNoZWZMaXN0IC5pbmZve1xcblxcbiAgICB3aWR0aDogMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jbHIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IC41cztcXG59XFxuXFxuLmNoZWZMaXN0IC5pbmZvIHA6Zmlyc3QtY2hpbGR7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgXFxuXFxufVxcblxcbi5jaGVmTGlzdCAuaW5mbyBwOm50aC1jaGlsZCgyKXtcXG4gICAgZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOjEwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIFxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9yZXN0cmF1QWN0aXZlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9wbGF5LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PUludGVyOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuXFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5yZXN0cmF1QWN0aXZlU2VjdHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLzE0O1xcbiAgICBncmlkLXJvdzogNjIvNjY7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5yZXN0cmF1QWN0aXZlU2VjdCBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbi1yaWdodDogMjYwcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcblxcbn1cXG5cXG4ucmVzdHJhdUFjdGl2ZVNlY3QgaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjYwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ucmVzdHJhdUFjdGl2ZVNlY3Qgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxufVxcblxcbi5yZXN0cmF1QWN0aXZlU2VjdCBwe1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5idG5TZWN0IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIFxcbiAgXFxuICAgIG1hcmdpbi1yaWdodDogMjMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICBcXG5cXG59XFxuXFxuLmJ0bjEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiAtMjkwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDExcHggMjhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuXFxufVxcblxcbi5idG4xOmhvdmVye1xcbiAgICBwYWRkaW5nOiAxMXB4IDI4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG5cXG59XFxuXFxuLmJ0bjJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICByaWdodDogLTMxNXB4O1xcbiAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmc6MThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEycHg7XFxuXFxuXFxufVxcblxcbi5idG4yOmhvdmVye1xcbiAgICBwYWRkaW5nOjE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTg0LCAxMzEsIDc3KTtcXG5cXG59XFxuXFxuLlZpZHBsYXkgIHtcXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgcmlnaHQ6IC0yMzBweDtcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDM1MHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDo4MDA7XFxuXFxufVxcblxcbi5wbGF5VmlkU2VjdHtcXG4gICAgbWFyZ2luLXRvcDogMTdweDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZXN0cmF1QWN0aXZlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseURBQW9EO0lBQ3BELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjs7O0FBR3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7OztJQUdYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1COzs7O0FBSXZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxrQkFBa0I7R0FDbkIsYUFBYTtHQUNiLGdCQUFnQjtJQUNmLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseURBQTJDO0lBQzNDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsMkJBQTJCOzs7QUFHL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlEQUEyQztJQUMzQyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixrQ0FBa0M7O0FBRXRDOztBQUVBO0dBQ0csa0JBQWtCO0dBQ2xCLGFBQWE7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PUludGVyOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG5cXG5cXG4qe1xcblxcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ucmVzdHJhdUFjdGl2ZVNlY3R7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8xNDtcXG4gICAgZ3JpZC1yb3c6IDYyLzY2O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9yZXN0cmF1QWN0aXZlLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucmVzdHJhdUFjdGl2ZVNlY3QgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI2MHB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG5cXG59XFxuXFxuLnJlc3RyYXVBY3RpdmVTZWN0IGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI2MHB4O1xcbiAgICBcXG5cXG59XFxuXFxuLnJlc3RyYXVBY3RpdmVTZWN0IHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4ucmVzdHJhdUFjdGl2ZVNlY3QgcHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjYwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uYnRuU2VjdCB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBcXG4gIFxcbiAgICBtYXJnaW4tcmlnaHQ6IDIzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgXFxuXFxufVxcblxcbi5idG4xIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogLTI5MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMXB4IDI4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xcblxcbn1cXG5cXG4uYnRuMTpob3ZlcntcXG4gICAgcGFkZGluZzogMTFweCAyOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuXFxufVxcblxcbi5idG4ye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgcmlnaHQ6IC0zMTVweDtcXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nOjE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3BsYXkucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMnB4O1xcblxcblxcbn1cXG5cXG4uYnRuMjpob3ZlcntcXG4gICAgcGFkZGluZzoxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvcGxheS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE4NCwgMTMxLCA3Nyk7XFxuXFxufVxcblxcbi5WaWRwbGF5ICB7XFxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgIHJpZ2h0OiAtMjMwcHg7XFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAzNTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6ODAwO1xcblxcbn1cXG5cXG4ucGxheVZpZFNlY3R7XFxuICAgIG1hcmdpbi10b3A6IDE3cHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3RvdGFsSW5mb1NlY3QucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnJlc3RyYXVJbmZvU2VjdHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLzE0O1xcbiAgICBncmlkLXJvdzogMzUvMzk7XFxuXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbjtcXG59XFxuXFxuLnJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXJ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzIyKTtcXG4gIHotaW5kZXg6IDE7XFxuXFxufVxcblxcbi5yZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyIGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucmVzdHJhdUluZm9TZWN0QmxhY2tMYXllciBkaXYgaW1ne1xcbiAgIHdpZHRoOiA4MHB4OyBcXG4gICA7XFxufVxcblxcbi5yZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyIGRpdiBwOm50aC1jaGlsZCgyKXtcXG4gICBjb2xvcjogd2hpdGU7XFxuICAgZm9udC1zaXplOiAxOXB4O1xcbiAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuIH1cXG5cXG4gLnJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIgZGl2IHA6bnRoLWNoaWxkKDMpe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICB9XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZXN0cmF1SW5mb1NlY3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTs7RUFFakIseURBQW9EOztBQUV0RDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtFQUNkLHNDQUFzQztFQUN0QyxVQUFVOztBQUVaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7O0lBRWIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtHQUNHLFdBQVc7O0FBRWQ7O0FBRUE7R0FDRyxZQUFZO0dBQ1osZUFBZTtHQUNmLG1DQUFtQztHQUNuQyxnQkFBZ0I7Q0FDbEI7O0NBRUE7SUFDRyxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQ0FBbUM7RUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnJlc3RyYXVJbmZvU2VjdHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLzE0O1xcbiAgICBncmlkLXJvdzogMzUvMzk7XFxuXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy90b3RhbEluZm9TZWN0LnBuZycpO1xcbjtcXG59XFxuXFxuLnJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXJ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzIyKTtcXG4gIHotaW5kZXg6IDE7XFxuXFxufVxcblxcbi5yZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyIGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucmVzdHJhdUluZm9TZWN0QmxhY2tMYXllciBkaXYgaW1ne1xcbiAgIHdpZHRoOiA4MHB4OyBcXG4gICA7XFxufVxcblxcbi5yZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyIGRpdiBwOm50aC1jaGlsZCgyKXtcXG4gICBjb2xvcjogd2hpdGU7XFxuICAgZm9udC1zaXplOiAxOXB4O1xcbiAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuIH1cXG5cXG4gLnJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIgZGl2IHA6bnRoLWNoaWxkKDMpe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICB9XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvUXVvdGVzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxufVxcblxcbi5UZXN0aW1vbmlhbHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTE7XFxuICAgIGdyaWQtcm93OiA1NC82MDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIFxcbiAgIFxcbn1cXG5cXG5cXG4uVGVzdGltb25pYWwgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDs7XFxuICAgIFxcbn1cXG5cXG4uVGVzdGltb25pYWwgaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAwcHggMzVweDtcXG59XFxuXFxuLnRlc3RpbW9uaWFsQ2FyZFNlY3R7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgIFxcbn1cXG5cXG4udGVzdGltb25pYWxDYXJkc3tcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xcbiAgICBcXG59XFxuXFxuLnRlc3RpbW9uaWFsQ2FyZHMgcDpudGgtY2hpbGQoMil7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4uZGVzaWdue1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XFxuXFxuICAgIFxcbn1cXG5cXG4udGVzdGltb25pYWxDYXJkcyBwOm50aC1jaGlsZCg0KXtcXG5cXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBcXG59XFxuXFxuLnByb2ZpbGUge1xcbiAgICB3aWR0aDogNzBweDtcXG4gXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMzBweFxcbjtcXG5cXG59XFxuXFxuLnRlc3RpbW9uaWFsR3JlZW57XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgbGVmdDogNTgwcHg7XFxufVxcblxcbi5zdGFyU2VjdHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uc3RhclNlY3QgaW1ne1xcbiAgICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnRlc3RpbW9uaWFsQ2FyZFNlY3QgLlNsaWRlckRvdCB7XFxud2lkdGg6IDE1MHB4O1xcbmhlaWdodDogMzBweDtcXG4vKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxubWFyZ2luLXRvcDogMjBweDtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuZ2FwOiA1cHg7XFxuXFxufVxcblxcbi5TbGlkZXJEb3QgPiBkaXY6Zmlyc3QtY2hpbGR7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uU2xpZGVyRG90ID4gZGl2e1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgb3BhY2l0eTogLjQ7XFxufVxcblxcbi5ncmFzc0Nvcm5lckltZ3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBsZWZ0OiAtNTBweDtcXG4gICAgdG9wOiAzMzAwcHg7XFxuICAgIFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Rlc3RpbW9uaWFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMENBQTBDO0lBQzFDLGFBQWE7SUFDYixzQkFBc0I7OztBQUcxQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIseURBQTZDO0lBQzdDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLCtCQUErQjtJQUMvQixtQkFBbUI7OztBQUd2Qjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxXQUFXOztJQUVYLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0FBQ0EsWUFBWTtBQUNaLFlBQVk7QUFDWiwwQ0FBMEM7QUFDMUMsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CLFFBQVE7O0FBRVI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7O0FBRWZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuXFxuLlRlc3RpbW9uaWFse1xcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gICAgZ3JpZC1yb3c6IDU0LzYwO1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgXFxuICAgXFxufVxcblxcblxcbi5UZXN0aW1vbmlhbCBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4OztcXG4gICAgXFxufVxcblxcbi5UZXN0aW1vbmlhbCBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW46IDBweCAzNXB4O1xcbn1cXG5cXG4udGVzdGltb25pYWxDYXJkU2VjdHtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgXFxufVxcblxcbi50ZXN0aW1vbmlhbENhcmRze1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9RdW90ZXMucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjVweDtcXG4gICAgXFxufVxcblxcbi50ZXN0aW1vbmlhbENhcmRzIHA6bnRoLWNoaWxkKDIpe1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuLmRlc2lnbntcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDpsaWdodGVyO1xcblxcbiAgICBcXG59XFxuXFxuLnRlc3RpbW9uaWFsQ2FyZHMgcDpudGgtY2hpbGQoNCl7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgXFxufVxcblxcbi5wcm9maWxlIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMwcHhcXG47XFxuXFxufVxcblxcbi50ZXN0aW1vbmlhbEdyZWVue1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGxlZnQ6IDU4MHB4O1xcbn1cXG5cXG4uc3RhclNlY3R7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnN0YXJTZWN0IGltZ3tcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi50ZXN0aW1vbmlhbENhcmRTZWN0IC5TbGlkZXJEb3Qge1xcbndpZHRoOiAxNTBweDtcXG5oZWlnaHQ6IDMwcHg7XFxuLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbm1hcmdpbi10b3A6IDIwcHg7XFxuZGlzcGxheTogZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbmdhcDogNXB4O1xcblxcbn1cXG5cXG4uU2xpZGVyRG90ID4gZGl2OmZpcnN0LWNoaWxke1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLlNsaWRlckRvdCA+IGRpdntcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIG9wYWNpdHk6IC40O1xcbn1cXG5cXG4uZ3Jhc3NDb3JuZXJJbWd7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgbGVmdDogLTUwcHg7XFxuICAgIHRvcDogMzMwMHB4O1xcbiAgICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuOnJvb3R7XFxuICAgIC0tYmxhY2stYmctY2xyOnJnYmEoMCwgMCwgMCwgNzAwKTtcXG4gICAgLS13aGl0ZS1jbHI6I0ZGRkZGRjtcXG4gICAgLS1wcmltYXJ5LWNscjojRkY5RjBEO1xcbiAgICAtLXByaW1hcnktZHJrLWNscjojZWE5MDBhO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3ZhcnJpYWJsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuOnJvb3R7XFxuICAgIC0tYmxhY2stYmctY2xyOnJnYmEoMCwgMCwgMCwgNzAwKTtcXG4gICAgLS13aGl0ZS1jbHI6I0ZGRkZGRjtcXG4gICAgLS1wcmltYXJ5LWNscjojRkY5RjBEO1xcbiAgICAtLXByaW1hcnktZHJrLWNscjojZWE5MDBhO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gXCIuL21vZHVsZXMvaGVhZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSBcIi4vbW9kdWxlcy9ob21lXCI7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2Zvb3RlclwiO1xuaW1wb3J0IHsgY3JlYXRlQWJvdXRVcyB9IGZyb20gXCIuL21vZHVsZXMvYWJvdXRVc1wiO1xuaW1wb3J0IHsgY3JlYXRlRm9vZENhdCB9IGZyb20gXCIuL21vZHVsZXMvZm9vZENhdFwiO1xuaW1wb3J0IHsgY3JlYXRlV2h5Q2hvb3NlIH0gZnJvbSBcIi4vbW9kdWxlcy93aHlDaG9vc2VcIjtcbmltcG9ydCB7IGNyZWF0ZVJlc3RyYXVJbmZvIH0gZnJvbSBcIi4vbW9kdWxlcy9yZXN0cmF1SW5mb1NlY3RcIjtcbmltcG9ydCB7Y3JlYXRlRnJvbU1lbnUgfSBmcm9tICcuL21vZHVsZXMvZnJvbU1lbnUnXG5pbXBvcnQgeyBjcmVhdGVUZXN0aW1vbmlhbCB9IGZyb20gXCIuL21vZHVsZXMvdGVzdGltb25pYWxcIjtcbmltcG9ydCB7IGNyZWF0ZVJlc3RyYXVBY3RpdmUgfSBmcm9tIFwiLi9tb2R1bGVzL3Jlc3RyYXVBY3RpdmVcIjtcbmltcG9ydCAnLi9jc3MvbWFpbi5jc3MnXG5pbXBvcnQgeyBjcmVhdGVPdXJDaGVmIH0gZnJvbSBcIi4vbW9kdWxlcy9vdXJDaGVmXCI7XG5pbXBvcnQge2NyZWF0ZUJsb2d9ICAgZnJvbSAnLi9tb2R1bGVzL2Jsb2cnXG5leHBvcnQgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRBbGxob21lQ29tcG9uZW50cygpe1xuY29udGVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJylcbmNvbnRlbnQuY2xhc3NOYW1lPSdjb250ZW50J1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuYm9keS5jbGFzc05hbWU9J2JvZHknXG5jb250ZW50LnN0eWxlLmJhY2tncm91bmQ9J2JsYWNrJ1xuY29udGVudC5zdHlsZS5vcGFjaXR5PScwLjgnXG5cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzRnJvbURpc3BsYXkoKSB7XG4gICAgICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfX1cblxuXG5yZW1vdmVBbGxDaGlsZE5vZGVzRnJvbURpc3BsYXkoKVxuY3JlYXRlSGVhZGVyKCk7XG5jcmVhdGVIb21lKClcbmNyZWF0ZUFib3V0VXMoKVxuY3JlYXRlRm9vZENhdCgpXG5jcmVhdGVXaHlDaG9vc2UoKVxuY3JlYXRlUmVzdHJhdUluZm8oKVxuY3JlYXRlRnJvbU1lbnUoKVxuY3JlYXRlT3VyQ2hlZigpXG5jcmVhdGVUZXN0aW1vbmlhbCgpXG5jcmVhdGVSZXN0cmF1QWN0aXZlKClcbmNyZWF0ZUJsb2coKVxuY3JlYXRlRm9vdGVyKCk7XG5cblxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJylcbmZvb3Rlci5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJylcbmZvb3Rlci5jbGFzc05hbWU9J2Zvb3RlcidcblxufVxuXG5sb2FkQWxsaG9tZUNvbXBvbmVudHMoKSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIlxuaW1wb3J0IHsgYWJvdXRJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIlxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFib3V0VXMoKXtcblxuXG4gICAgY29uc3QgYWJvdXRVc1NlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0VXNTZWN0LmNsYXNzTmFtZT0nYWJvdXRVc1NlY3RNYWluJ1xuXG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IFRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBjb25zdCBUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgVGl0bGUxLnRleHRDb250ZW50PSdBYm91dCB1cydcbiAgICBUaXRsZTIuaW5uZXJIVE1MPSc8c3Bhbj5XZTwvc3Bhbj4gQ3JlYXRlIFRoZSBCZXN0IGZvb2R5IHByb2R1Y3QnXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBhcmEudGV4dENvbnRlbnQ9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgZGlhbSBwZWxsZW50ZXNxdWUgYmliZW5kdW0gbm9uIGR1aSB2b2x1dHBhdCBmcmluZ2lsbGEgYmliZW5kdW0uIFVybmEsIGVsaXQgYXVndWUgdXJuYSwgdml0YWUgZmV1Z2lhdCBwcmV0aXVtIGRvbmVjIGlkIGVsZW1lbnR1bS4gVWx0cmljZXMgbWF0dGlzIHNlZCB2aXRhZSBtdXMgcmlzdXMuIExhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgc2l0IGV1IHZlbGl0IGluIGNvbnNlcXVhdC4nXG5cbiAgICBjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWJvdXRCdG4udGV4dENvbnRlbnQ9J1JlYWQgTW9yZScgIFxuICAgIFxuICAgIGNvbnN0IGFib3V0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBjb25zdCBsaXN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaXN0MS50ZXh0Q29udGVudD0nIExhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgc2l0IGV1IHZlbGl0IGluIGNvbnNlcXVhdC4nXG4gICAgY29uc3QgbGlzdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGlzdDIudGV4dENvbnRlbnQ9JyBRdWlzcXVlIGRpYW0gcGVsbGVudGVzcXVlIGJpYmVuZHVtIG5vbiBkdWkgdm9sdXRwYXQgZnJpbmdpbGxhICdcbiAgICBjb25zdCBsaXN0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaXN0My50ZXh0Q29udGVudD0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCdcblxuICAgIGFib3V0TGlzdC5hcHBlbmRDaGlsZChsaXN0MSlcbiAgICBhYm91dExpc3QuYXBwZW5kQ2hpbGQobGlzdDIpXG4gICAgYWJvdXRMaXN0LmFwcGVuZENoaWxkKGxpc3QzKVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKFRpdGxlMSlcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChUaXRsZTIpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYSlcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dExpc3QpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRCdG4pXG5cbiAgICBcblxuXG5cblxuICAgIGNvbnN0IG1lZGlhU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWJvdXRJbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBhYm91dEltZzEuc3JjPWFib3V0SW1nWzBdXG4gICAgY29uc3QgYWJvdXRJbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBhYm91dEltZzIuc3JjPWFib3V0SW1nWzFdXG4gICAgY29uc3QgYWJvdXRJbWczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBhYm91dEltZzMuc3JjPWFib3V0SW1nWzJdXG5cblxuICAgIG1lZGlhU2VjdC5hcHBlbmRDaGlsZChhYm91dEltZzEpXG4gICAgbWVkaWFTZWN0LmFwcGVuZENoaWxkKGFib3V0SW1nMilcbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQoYWJvdXRJbWczKVxuXG5cblxuICAgIGFib3V0VXNTZWN0LmFwcGVuZENoaWxkKHRleHRDb250ZW50KVxuICAgIGFib3V0VXNTZWN0LmFwcGVuZENoaWxkKG1lZGlhU2VjdClcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0VXNTZWN0KVxuXG5cblxuXG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgYmxvZ0ltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmxvZygpe1xuXG5jb25zdCBibG9nU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5ibG9nU2VjdC5jbGFzc05hbWU9J2Jsb2dTZWN0J1xuY29uc3QgdGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxudGl0bGUxLnRleHRDb250ZW50PSdCbG9nIFBvc3QnXG5jb25zdCB0aXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG50aXRsZTIuaW5uZXJIVE1MPSc8c3Bhbj5MYXQ8L3NwYW4+ZXN0IE5ld3MgJiBCbG9nJ1xuXG5jb25zdCBibG9nQ2FyZFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuYmxvZ0NhcmRTZWN0LmNsYXNzTmFtZT0nYmxvZ0NhcmRTZWN0J1xuXG5jcmVhdGVCbG9nQ2FyZChibG9nSW1nWzBdLCdQZWxsZW50ZXNxdWUgTm9uIEVmZmljaXR1ciBNaSBBbGlxdWFtIENvbnZhbGxpcyBNaSBRdWlzJylcbmNyZWF0ZUJsb2dDYXJkKGJsb2dJbWdbMV0sJ1BlbGxlbnRlc3F1ZSBOb24gRWZmaWNpdHVyIE1pIEFsaXF1YW0gQ29udmFsbGlzIE1pIFF1aXMnKVxuY3JlYXRlQmxvZ0NhcmQoYmxvZ0ltZ1syXSwnUGVsbGVudGVzcXVlIE5vbiBFZmZpY2l0dXIgTWkgQWxpcXVhbSBDb252YWxsaXMgTWkgUXVpcycpXG5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2dDYXJkKEJMT0dpbWcsZGVzY3JpcHRpb24pe1xuICAgIGxldCBibG9nQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYmxvZ0NhcmQuY2xhc3NOYW1lPSdibG9nQ2FyZCdcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcuc3JjID0gQkxPR2ltZ1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGF0ZS50ZXh0Q29udGVudD0gJzEwIEZlYiAyMDIyJ1xuICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGVzYy50ZXh0Q29udGVudD1kZXNjcmlwdGlvblxuICAgIGxldCBsZWFybk1vcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsZWFybk1vcmUudGV4dENvbnRlbnQ9J0xlYXJuIE1vcmUnXG4gICAgbGV0IGljb25TZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpY29uU2VjdC5jbGFzc05hbWU9J2ljb25TZWN0J1xuICAgIFxuICAgIGxldCBsaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBsaWtlLnNyYyA9IGJsb2dJbWdbM11cbiAgICBsZXQgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgY29tbWVudC5zcmMgPSBibG9nSW1nWzRdXG4gICAgbGV0IHNoYXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBzaGFyZS5zcmMgPSBibG9nSW1nWzVdXG4gICAgXG4gICAgaWNvblNlY3QuYXBwZW5kQ2hpbGQobGlrZSlcbiAgICBpY29uU2VjdC5hcHBlbmRDaGlsZChjb21tZW50KVxuICAgIGljb25TZWN0LmFwcGVuZENoaWxkKHNoYXJlKVxuXG4gICAgYmxvZ0NhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgIGJsb2dDYXJkLmFwcGVuZENoaWxkKGRhdGUpXG4gICAgYmxvZ0NhcmQuYXBwZW5kQ2hpbGQoZGVzYylcbiAgICBibG9nQ2FyZC5hcHBlbmRDaGlsZChsZWFybk1vcmUpXG4gICAgYmxvZ0NhcmQuYXBwZW5kQ2hpbGQoaWNvblNlY3QpXG4gICAgYmxvZ0NhcmRTZWN0LmFwcGVuZENoaWxkKGJsb2dDYXJkKVxuICAgIFxufVxuXG5cbmJsb2dTZWN0LmFwcGVuZENoaWxkKHRpdGxlMSlcbmJsb2dTZWN0LmFwcGVuZENoaWxkKHRpdGxlMilcbmJsb2dTZWN0LmFwcGVuZENoaWxkKGJsb2dDYXJkU2VjdClcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYmxvZ1NlY3QpXG5cblxuXG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb29kQ2F0KCl7XG5cbiAgICBjb25zdCBGb29kQ2F0U2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgRm9vZENhdFNlY3QuY2xhc3NOYW1lPSdGb29kQ2F0U2VjdCdcbiAgICBjb25zdCBzaWRlR3Jhc3NJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHNpZGVHcmFzc0ltZy5jbGFzc05hbWU9J3NpZGVHcmFzc0ltZydcbiAgICBzaWRlR3Jhc3NJbWcuc3JjPUNhdGVnb3J5SW1nWzRdXG4gICAgY29uc3QgQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IFRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBUaXRsZTEudGV4dENvbnRlbnQ9J0Zvb2QgQ2F0ZWdvcnknXG4gICAgY29uc3QgVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIFRpdGxlMi5pbm5lckhUTUw9JzxzcGFuPkNoPC9zcGFuPm9vc2UgRm9vZCBJdGVtJ1xuXG4gICAgY29uc3QgZGlzY291bnRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGRpc2NvdW50VGFnUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRpc2NvdW50VGFnUC50ZXh0Q29udGVudD0nU2F2ZSAzMCUnXG4gICAgZGlzY291bnRUYWcuYXBwZW5kQ2hpbGQoZGlzY291bnRUYWdQKVxuICAgIGNvbnN0IGRpc2NvdW50VGFnMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZGlzY291bnRUYWdQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRpc2NvdW50VGFnUDIudGV4dENvbnRlbnQ9J0Zhc3QgRm9vZCBEaXNoJ1xuICAgIGRpc2NvdW50VGFnMi5hcHBlbmRDaGlsZChkaXNjb3VudFRhZ1AyKVxuICAgIEZvb2RDYXRTZWN0LmFwcGVuZENoaWxkKHNpZGVHcmFzc0ltZylcbiAgICBGb29kQ2F0U2VjdC5hcHBlbmRDaGlsZChkaXNjb3VudFRhZylcbiAgICBGb29kQ2F0U2VjdC5hcHBlbmRDaGlsZChkaXNjb3VudFRhZzIpXG4gICAgRm9vZENhdFNlY3QuYXBwZW5kQ2hpbGQoVGl0bGUxKVxuICAgIEZvb2RDYXRTZWN0LmFwcGVuZENoaWxkKFRpdGxlMilcblxuICAgIGNvbnN0IENhdGVnb3J5SW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgQ2F0ZWdvcnlJbWcxLnNyYz1DYXRlZ29yeUltZ1sxXVxuICAgIGNvbnN0IENhdGVnb3J5SW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgQ2F0ZWdvcnlJbWcyLnNyYz1DYXRlZ29yeUltZ1swXVxuICAgIGNvbnN0IENhdGVnb3J5SW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgQ2F0ZWdvcnlJbWczLnNyYz1DYXRlZ29yeUltZ1syXVxuICAgIGNvbnN0IENhdGVnb3J5SW1nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgQ2F0ZWdvcnlJbWc0LnNyYz1DYXRlZ29yeUltZ1szXVxuICAgIFxuICAgIENhdGVnb3J5LmFwcGVuZENoaWxkKENhdGVnb3J5SW1nMSlcbiAgICBDYXRlZ29yeS5hcHBlbmRDaGlsZChDYXRlZ29yeUltZzIpXG4gICAgQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoQ2F0ZWdvcnlJbWczKVxuICAgIENhdGVnb3J5LmFwcGVuZENoaWxkKENhdGVnb3J5SW1nNClcbiBcblxuICAgIEZvb2RDYXRTZWN0LmFwcGVuZENoaWxkKENhdGVnb3J5KVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChGb29kQ2F0U2VjdClcblxuXG5cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCJcbmltcG9ydCB7IGZvb3RlckltZyB9IGZyb20gXCIuL2ltYWdlc1wiXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlciA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgIGZvb3Rlci5jbGFzc05hbWU9J2Zvb3RlcidcbiAgICBjb25zdCBncmFzc0Nvcm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZ3Jhc3NDb3JuZXIuY2xhc3NOYW1lPSdncmFzc0Nvcm5lcidcbiAgICBncmFzc0Nvcm5lci5zcmM9Zm9vdGVySW1nWzBdO1xuXG4gICAgY29uc3QgZm9vdGVyQmVsdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb290ZXJCZWx0LmNsYXNzTmFtZT0nZm9vdGVyQmVsdCdcbiAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb290ZXJDb250ZW50LmNsYXNzTmFtZT0nZm9vdGVyQ29udGVudCdcbiAgICBjb25zdCBmb290ZXJUeHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb290ZXJUeHRDb250ZW50LmNsYXNzTmFtZT0nZm9vdGVyVHh0Q29udGVudCdcblxuICAgIC8vIHJlY2VudCBwb3N0IHNlY3Rpb25cblxuICAgIGNvbnN0IHJlY2VudFBvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJlY2VudFBvc3QuY2xhc3NOYW1lPSdSY3RQb3N0J1xuICAgIGNvbnN0IHJlY2VudFBvc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICByZWNlbnRQb3N0VGl0bGUudGV4dENvbnRlbnQ9J1JlY2VudCBQb3N0J1xuXG4gICAgY29uc3QgZmlyc3RQb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBmaXJzdFBvc3RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGZpcnN0UG9zdEltZy5zcmM9Zm9vdGVySW1nWzFdXG4gICAgY29uc3QgcG9zdHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwb3N0cGFyYS50ZXh0Q29udGVudD0nMjAgRmViIDIwMjInXG4gICAgY29uc3QgcG9zdGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwb3N0ZGVzYy50ZXh0Q29udGVudD0nS2VlcCBZb3VyIEJ1c2luZXNzJ1xuXG4gICAgZmlyc3RQb3N0LmFwcGVuZENoaWxkKGZpcnN0UG9zdEltZylcblxuICAgIGNvbnN0IGZpcnN0UG9zdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGZpcnN0UG9zdEltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGZpcnN0UG9zdEltZzEuc3JjPWZvb3RlckltZ1syXVxuICAgIGNvbnN0IHBvc3RwYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBvc3RwYXJhMS50ZXh0Q29udGVudD0nMjAgRmViIDIwMjInXG4gICAgY29uc3QgcG9zdGRlc2MxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcG9zdGRlc2MxLnRleHRDb250ZW50PSdLZWVwIFlvdXIgQnVzaW5lc3MnXG5cbiAgICBmaXJzdFBvc3QxLmFwcGVuZENoaWxkKGZpcnN0UG9zdEltZzEpXG5cbiAgICBjb25zdCBmaXJzdFBvc3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBmaXJzdFBvc3RJbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBmaXJzdFBvc3RJbWcyLnNyYz1mb290ZXJJbWdbM11cbiAgICBjb25zdCBwb3N0cGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwb3N0cGFyYTIudGV4dENvbnRlbnQ9JzIwIEZlYiAyMDIyJ1xuICAgIGNvbnN0IHBvc3RkZXNjMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBvc3RkZXNjMi50ZXh0Q29udGVudD0nS2VlcCBZb3VyIEJ1c2luZXNzJ1xuXG4gICAgZmlyc3RQb3N0Mi5hcHBlbmRDaGlsZChmaXJzdFBvc3RJbWcyKVxuXG4gICAgLy8gaGVscCBzZWN0XG4gICAgXG4gICAgY29uc3QgaGVscFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhlbHBTZWN0LmNsYXNzTmFtZT0naGVscFNlY3QnXG4gICAgY29uc3QgaGVscFNlY3RUaXR0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlbHBTZWN0VGl0dGxlLnRleHRDb250ZW50PSdIZWxwPyc7XG5cbiAgICBoZWxwU2VjdC5hcHBlbmRDaGlsZChoZWxwU2VjdFRpdHRsZSk7XG5cbiAgICBjb25zdCBGYXFQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgRmFxUGFyYS50ZXh0Q29udGVudD0nRkFRJ1xuICAgIGNvbnN0IHRlcm1QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGVybVBhcmEudGV4dENvbnRlbnQ9J1Rlcm0gJiBjb25kaXRpb24nXG4gICAgY29uc3QgcmVwb3J0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHJlcG9ydFBhcmEudGV4dENvbnRlbnQ9J1JlcG9ydGluZydcbiAgICBjb25zdCBkb2N1bWVudFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkb2N1bWVudFBhcmEudGV4dENvbnRlbnQ9J0RvY3VtZW50YXRpb24nXG4gICAgY29uc3Qgc3VwcG9ydFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzdXBwb3J0UGFyYS50ZXh0Q29udGVudD0nU3VwcG9ydCBQb2xpY3knXG4gICAgY29uc3QgUHJpdmFjeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIFByaXZhY3kudGV4dENvbnRlbnQ9J1ByaXZhY3knXG5cbiAgICBoZWxwU2VjdC5hcHBlbmRDaGlsZChGYXFQYXJhKVxuICAgIGhlbHBTZWN0LmFwcGVuZENoaWxkKHRlcm1QYXJhKVxuICAgIGhlbHBTZWN0LmFwcGVuZENoaWxkKHJlcG9ydFBhcmEpXG4gICAgaGVscFNlY3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnRQYXJhKVxuICAgIGhlbHBTZWN0LmFwcGVuZENoaWxkKHN1cHBvcnRQYXJhKVxuICAgIGhlbHBTZWN0LmFwcGVuZENoaWxkKFByaXZhY3kpXG5cblxuICAgIGNvbnN0IHVzZUZ1bGxTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB1c2VGdWxsU2VjdC5jbGFzc05hbWU9J3VzZUZ1bGxTZWN0J1xuICAgIGNvbnN0IHVzZUZ1bGxTZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdXNlRnVsbFNlY3RUaXRsZS50ZXh0Q29udGVudD0nVXNlZnVsIExpbmsnXG5cbiAgICBjb25zdCBhYm91dExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhYm91dExpbmsudGV4dENvbnRlbnQ9J0Fib3V0J1xuICAgIGNvbnN0IG5ld3NMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbmV3c0xpbmsudGV4dENvbnRlbnQ9J05ld3MnXG4gICAgY29uc3QgcGFydG5lckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwYXJ0bmVyTGluay50ZXh0Q29udGVudD0nUGFydG5lcnMnXG4gICAgY29uc3QgdGVhbUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0ZWFtTGluay50ZXh0Q29udGVudD0nVGVhbSdcbiAgICBjb25zdCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG1lbnVMaW5rLnRleHRDb250ZW50PSdNZW51J1xuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29udGFjdExpbmsudGV4dENvbnRlbnQ9J0NvbnRhY3QnXG5cbiAgICB1c2VGdWxsU2VjdC5hcHBlbmRDaGlsZCh1c2VGdWxsU2VjdFRpdGxlKVxuICAgIHVzZUZ1bGxTZWN0LmFwcGVuZENoaWxkKGFib3V0TGluaylcbiAgICB1c2VGdWxsU2VjdC5hcHBlbmRDaGlsZChuZXdzTGluaylcbiAgICB1c2VGdWxsU2VjdC5hcHBlbmRDaGlsZChwYXJ0bmVyTGluaylcbiAgICB1c2VGdWxsU2VjdC5hcHBlbmRDaGlsZCh0ZWFtTGluaylcbiAgICB1c2VGdWxsU2VjdC5hcHBlbmRDaGlsZChtZW51TGluaylcbiAgICB1c2VGdWxsU2VjdC5hcHBlbmRDaGlsZChjb250YWN0TGluaylcblxuICAgIGNvbnN0IGFib3V0VXNTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhYm91dFVzU2VjdC5jbGFzc05hbWU9J2Fib3V0VXNTZWN0J1xuXG4gICAgY29uc3Qgc3VwcG9ydFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHN1cHBvcnRTZWN0LmNsYXNzTmFtZT0nc3VwcG9ydFNlY3QnXG4gICAgY29uc3QgaW5wdXRTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBzdXBwb3J0UDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzdXBwb3J0UDEuaW5uZXJIVE1MPSc8c3Bhbj5TPC9zcGFuPnRpbGwgWW91IE5lZWQgT3VyIFN1cHBvcnQgPydcbiAgICBjb25zdCBzdXBwb3J0UDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzdXBwb3J0UDIudGV4dENvbnRlbnQ9J0RvbuKAmXQgd2FpdCBtYWtlIGEgc21hcnQgJiBsb2dpY2FsIHF1b3RlIGhlcmUuIEl0cyBwcmV0dHkgZWFzeS4nXG4gICAgY29uc3Qgc3VwcG9ydElwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBzdXBwb3J0SXB0LnBsYWNlaG9sZGVyPSdFbnRlciBZb3VyIEVtYWlsJ1xuICAgIGNvbnN0IHN1cHBvcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1cHBvcnRCdG4udGV4dENvbnRlbnQ9J1N1YmNyaWJlIE5vdydcblxuICAgIHN1cHBvcnRTZWN0LmFwcGVuZENoaWxkKHN1cHBvcnRQMSlcbiAgICBzdXBwb3J0U2VjdC5hcHBlbmRDaGlsZChzdXBwb3J0UDIpXG4gICAgc3VwcG9ydFNlY3QuYXBwZW5kQ2hpbGQoaW5wdXRTZWN0KVxuICAgIGlucHV0U2VjdC5hcHBlbmRDaGlsZChzdXBwb3J0SXB0KVxuICAgIGlucHV0U2VjdC5hcHBlbmRDaGlsZChzdXBwb3J0QnRuKVxuXG4gICAgY29uc3Qgb3BlbkhyU2VjdE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcGVuSHJTZWN0TWFpbi5jbGFzc05hbWU9J29wZW5IclNlY3RNYWluJztcbiAgICBjb25zdCBvcGVuSHJTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBvcGVuSHJTZWN0LmNsYXNzTmFtZT0nb3BlbkhyU2VjdCdcbiAgICBjb25zdCBvcGVuSHJTZWN0UDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBvcGVuSHJTZWN0UDEudGV4dENvbnRlbnQ9J09wZW5pbmcgSG91cnMnXG4gICAgY29uc3Qgb3BlbkhyU2VjdFAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgb3BlbkhyU2VjdFAyLnRleHRDb250ZW50PSdNT04gLSBTQVQoOC4wMCA2LjAwKSc7XG4gICAgY29uc3Qgb3BlbkhyU2VjdFAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgb3BlbkhyU2VjdFAzLnRleHRDb250ZW50PSdTdW5kYXkgLSBDbG9zZWQnXG5cbiAgICBjb25zdCBvcGVuSHJTZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb3BlbkhyU2VjdEljb24uY2xhc3NOYW1lPSdvcGVuSHJTZWN0SWNvbidcblxuICAgIGNvbnN0IGFib3V0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIFxuICAgIGFib3V0RGVzYy50ZXh0Q29udGVudD1gb3Jwb3JhdGUgY2xpZW50cyBhbmQgbGVpc3VyZSB0cmF2ZWxlcnMgaGFzXG4gICAgYmVlbiByZWx5aW5nIG9uIEdyb3VuZGxpbmsgZm9yIGRlcGVuZGFiXG4gICAgc2FmZSwgYW5kIHByb2Zlc3Npb25hbCBjaGF1ZmZldXJlZCBjYXJcbiAgICBzZXJ2aWNlIGluIG1ham9yIGNpdGllcyBhY3Jvc3MgV29ybGQuYFxuXG4gICAgY29uc3QgYWJvdXREZXNjVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgYWJvdXREZXNjVGl0bGUudGV4dENvbnRlbnQ9J0Fib3V0IFVzJ1xuXG4gICAgYWJvdXRVc1NlY3QuYXBwZW5kQ2hpbGQoYWJvdXREZXNjVGl0bGUpXG5cbiAgICBhYm91dFVzU2VjdC5hcHBlbmRDaGlsZChhYm91dERlc2MpXG5cbiAgICBvcGVuSHJTZWN0LmFwcGVuZENoaWxkKG9wZW5IclNlY3RQMSlcbiAgICBvcGVuSHJTZWN0LmFwcGVuZENoaWxkKG9wZW5IclNlY3RQMilcbiAgICBvcGVuSHJTZWN0LmFwcGVuZENoaWxkKG9wZW5IclNlY3RQMylcbiAgICBcbiAgICBvcGVuSHJTZWN0TWFpbi5hcHBlbmRDaGlsZChvcGVuSHJTZWN0SWNvbik7XG4gICAgb3BlbkhyU2VjdE1haW4uYXBwZW5kQ2hpbGQob3BlbkhyU2VjdCk7XG4gICAgXG4gICAgYWJvdXRVc1NlY3QuYXBwZW5kQ2hpbGQob3BlbkhyU2VjdE1haW4pO1xuXG4gICAgY29uc3Qgc29jaWFsTWVkU2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzb2NpYWxNZWRTZWMuY2xhc3NOYW1lPSdzb2NpYWxNZWRTZWMnXG4gICAgY29uc3QgY29weVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgIGNvcHlSaWdodC50ZXh0Q29udGVudD1gQ29weXJpZ2h0IEAgJHt5ZWFyfSBieSBSb25pLiBBbGwgUmlnaHRzIHJlc2VydmVkYFxuXG4gICAgY29uc3Qgc29jaWFsTWVkaWFJY29uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc29jaWFsTWVkaWFJY29uMS5jbGFzc05hbWU9J21lZGlhSWNvbidcbiAgICBjb25zdCBzb2NpYWxNZWRpYUljb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzb2NpYWxNZWRpYUljb24yLmNsYXNzTmFtZT0nbWVkaWFJY29uJ1xuICAgIGNvbnN0IHNvY2lhbE1lZGlhSWNvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNvY2lhbE1lZGlhSWNvbjMuY2xhc3NOYW1lPSdtZWRpYUljb24nXG4gICAgY29uc3Qgc29jaWFsTWVkaWFJY29uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc29jaWFsTWVkaWFJY29uNC5jbGFzc05hbWU9J21lZGlhSWNvbidcbiAgICBjb25zdCBzb2NpYWxNZWRpYUljb241ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzb2NpYWxNZWRpYUljb241LmNsYXNzTmFtZT0nbWVkaWFJY29uJ1xuXG5cbiAgIHNvY2lhbE1lZFNlYy5hcHBlbmRDaGlsZChzb2NpYWxNZWRpYUljb24xKVxuICAgc29jaWFsTWVkU2VjLmFwcGVuZENoaWxkKHNvY2lhbE1lZGlhSWNvbjIpXG4gICBzb2NpYWxNZWRTZWMuYXBwZW5kQ2hpbGQoc29jaWFsTWVkaWFJY29uMylcbiAgIHNvY2lhbE1lZFNlYy5hcHBlbmRDaGlsZChzb2NpYWxNZWRpYUljb240KVxuICAgc29jaWFsTWVkU2VjLmFwcGVuZENoaWxkKHNvY2lhbE1lZGlhSWNvbjUpXG4gICBmb290ZXJCZWx0LmFwcGVuZENoaWxkKGNvcHlSaWdodClcbiAgIGZvb3RlckJlbHQuYXBwZW5kQ2hpbGQoc29jaWFsTWVkU2VjKVxuICAgIFxuICAgZmlyc3RQb3N0LmFwcGVuZENoaWxkKHBvc3RwYXJhKVxuICAgZmlyc3RQb3N0LmFwcGVuZENoaWxkKHBvc3RkZXNjKVxuXG4gICBmaXJzdFBvc3QxLmFwcGVuZENoaWxkKHBvc3RwYXJhMSlcbiAgIGZpcnN0UG9zdDEuYXBwZW5kQ2hpbGQocG9zdGRlc2MxKVxuXG4gICBmaXJzdFBvc3QyLmFwcGVuZENoaWxkKHBvc3RwYXJhMilcbiAgIGZpcnN0UG9zdDIuYXBwZW5kQ2hpbGQocG9zdGRlc2MyKVxuICAgXG4gICByZWNlbnRQb3N0LmFwcGVuZENoaWxkKHJlY2VudFBvc3RUaXRsZSlcbiAgIHJlY2VudFBvc3QuYXBwZW5kQ2hpbGQoZmlyc3RQb3N0KVxuICAgcmVjZW50UG9zdC5hcHBlbmRDaGlsZChmaXJzdFBvc3QxKVxuICAgcmVjZW50UG9zdC5hcHBlbmRDaGlsZChmaXJzdFBvc3QyKVxuICAgXG4gICBmb290ZXJUeHRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0VXNTZWN0KVxuICAgZm9vdGVyVHh0Q29udGVudC5hcHBlbmRDaGlsZCh1c2VGdWxsU2VjdClcbiAgIGZvb3RlclR4dENvbnRlbnQuYXBwZW5kQ2hpbGQoaGVscFNlY3QpXG4gICBmb290ZXJUeHRDb250ZW50LmFwcGVuZENoaWxkKHJlY2VudFBvc3QpXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHN1cHBvcnRTZWN0KVxuICAgIGZvb3RlckNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyVHh0Q29udGVudClcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudClcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQmVsdClcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ3Jhc3NDb3JuZXIpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpXG5cblxuXG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IG1lbnVJdGVtSW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgeyBtZW51THVuY2hJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IG1lbnVEaW5uZXJJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IG1lbnVEZXNlcnRJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IG1lbnVEcmlua0ltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHttZW51U291cEltZyB9IGZyb20gJy4vaW1hZ2VzJ1xuaW1wb3J0IHsgbWVudVNuYWNrSW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGcm9tTWVudSgpe1xuXG4gICAgY29uc3QgRnJvbU1lbnVNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBGcm9tTWVudU1haW4uY2xhc3NOYW1lPSdGcm9tTWVudU1haW4nXG4gICAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudU5hdi5jbGFzc05hbWU9J25hdidcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGkxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxCcmVha2Zhc3QpXG4gICAgbGkxLnRleHRDb250ZW50PSdCcmVha2Zhc3QnXG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbHVuY2gpXG4gICAgbGkyLnRleHRDb250ZW50PSdMdW5jaCdcbiAgICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGkzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxEaW5uZXIpXG4gICAgbGkzLnRleHRDb250ZW50PSdEaW5uZXInXG4gICAgY29uc3QgbGk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpNC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRGVzc2VydClcbiAgICBsaTQudGV4dENvbnRlbnQ9J0Rlc3NlcnQnXG4gICAgY29uc3QgbGk1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpNS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRHJpbmspXG4gICAgbGk1LnRleHRDb250ZW50PSdEcmluaydcbiAgICBjb25zdCBsaTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGk2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxTbmFjaylcbiAgICBsaTYudGV4dENvbnRlbnQ9J1NuYWNrJ1xuICAgIGNvbnN0IGxpNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaTcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFN1b3BzKVxuICAgIGxpNy50ZXh0Q29udGVudD0nU3VvcHMnXG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaTEpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkyKVxuICAgIHVsLmFwcGVuZENoaWxkKGxpMylcbiAgICB1bC5hcHBlbmRDaGlsZChsaTQpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGk1KVxuICAgIHVsLmFwcGVuZENoaWxkKGxpNilcbiAgICB1bC5hcHBlbmRDaGlsZChsaTcpXG5cbiAgICBtZW51TmF2LmFwcGVuZENoaWxkKHVsKVxuICAgIGNvbnN0IG1lbnVMaXN0U2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUxpc3RTZWN0LmNsYXNzTmFtZT0nbWVudUxpc3RTZWN0J1xuICAgIGNvbnN0IGRpc3BsYXlEaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXNwbGF5RGlzaC5jbGFzc05hbWU9J2Rpc3BsYXlEaXNoJ1xuICAgIGNvbnN0IGRpc3BsYXlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGRpc3BsYXlJbWcuc3JjPW1lbnVJdGVtSW1nWzFdXG5cbiAgICBkaXNwbGF5RGlzaC5hcHBlbmRDaGlsZChkaXNwbGF5SW1nKVxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnUuY2xhc3NOYW1lPSdtZW51U2VjdCdcblxuICAgIGNvbnN0IG1lbnVVbCA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIFxuICAgICBCcmVha2Zhc3QoKVxuXG5cbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVVbClcbiAgICBtZW51TGlzdFNlY3QuYXBwZW5kQ2hpbGQoZGlzcGxheURpc2gpXG4gICAgbWVudUxpc3RTZWN0LmFwcGVuZENoaWxkKG1lbnUpXG5cbiAgICBjb25zdCBUaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgVGl0bGUxLnRleHRDb250ZW50PSdDaG9vc2UgJiBwaWNrJ1xuICAgIGNvbnN0IFRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBUaXRsZTIuaW5uZXJIVE1MPSc8c3Bhbj5Gcjwvc3Bhbj5vbSBPdXIgTWVudSdcblxuICAgIFxuICAgIEZyb21NZW51TWFpbi5hcHBlbmRDaGlsZChUaXRsZTEpXG4gICAgRnJvbU1lbnVNYWluLmFwcGVuZENoaWxkKFRpdGxlMilcbiAgICBGcm9tTWVudU1haW4uYXBwZW5kQ2hpbGQobWVudU5hdilcbiAgICBGcm9tTWVudU1haW4uYXBwZW5kQ2hpbGQobWVudUxpc3RTZWN0KVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRnJvbU1lbnVNYWluKVxuXG4gICAgZnVuY3Rpb24gQnJlYWtmYXN0KCl7XG5cbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcygpXG4gICAgICAgIGZvb2RJdGVtKG1lbnVJdGVtSW1nWzBdLCdTb3lhIERlZXAuJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVJdGVtSW1nWzFdLCdGcmVzaCBCcmVha2Zhc3QnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxNC41JCcpXG4gICAgZm9vZEl0ZW0obWVudUl0ZW1JbWdbMl0sJ01pbGQgQnV0dGVyJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVJdGVtSW1nWzNdLCdGcmVzaCBCcmVhZCcsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51SXRlbUltZ1s0XSwnR2xvdyBDaGVlc2UnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxNC41JCcpXG4gICAgZm9vZEl0ZW0obWVudUl0ZW1JbWdbNV0sJ0l0YWxpYW4gUGl6emEnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudUl0ZW1JbWdbNl0sJ1NsbGljZSBCZWVmJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTQkJylcbiAgICBmb29kSXRlbShtZW51SXRlbUltZ1s3XSwnTXVzaGFvbSBQaXp6YScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzExLjUkJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsdW5jaCgpe1xuXG5cbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcygpXG4gICAgICAgIGZvb2RJdGVtKG1lbnVMdW5jaEltZ1swXSwnS29rYW4gVGhhbGknLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudUx1bmNoSW1nWzFdLCdwYW5lZXIgTWFzYWxhJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTQuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVMdW5jaEltZ1syXSwnSmVlcmEgUmljZScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51THVuY2hJbWdbM10sJ1B1bGF2JywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVMdW5jaEltZ1s0XSwnVHVrZGEgUGFuZWVyJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTQuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVMdW5jaEltZ1s1XSwnSXRhbGlhbiBQaXp6YScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiBcbiAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIERpbm5lcigpe1xuXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoKVxuICAgICAgICBmb29kSXRlbShtZW51RGlubmVySW1nWzBdLCdCYWh1YmFsaSBUaGFsaScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51RGlubmVySW1nWzFdLCdTaGFoaSBQYWt2YW4nLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxNC41JCcpXG4gICAgZm9vZEl0ZW0obWVudURpbm5lckltZ1syXSwnRGFyYmFyaSBUaGFsaScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51RGlubmVySW1nWzNdLCdQdXJpIEJoYWppJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVEaW5uZXJJbWdbNF0sJ0NoaWNrZW4gS29mdGEnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxNC41JCcpXG4gICAgZm9vZEl0ZW0obWVudURpbm5lckltZ1s1XSwnSHVsayBUaGFsaScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIERlc3NlcnQoKXtcblxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKClcbiAgICAgICAgZm9vZEl0ZW0obWVudURlc2VydEltZ1swXSwnRnJlbmNoIFB1ZGRpbmcnLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudURlc2VydEltZ1sxXSwnWW9naHVydCcsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzE0LjUkJylcbiAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBEcmluaygpe1xuXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoKVxuICAgICAgICBmb29kSXRlbShtZW51RHJpbmtJbWdbMF0sJ0ZydWl0IE1peCcsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51RHJpbmtJbWdbMV0sJ0d1bGFiIFNoYXJiYXQnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxNC41JCcpXG4gICAgZm9vZEl0ZW0obWVudURyaW5rSW1nWzJdLCdSdWFwamEnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU25hY2soKXtcblxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKClcbiAgICAgICAgZm9vZEl0ZW0obWVudVNuYWNrSW1nWzBdLCdNaXggTnV0JywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVTbmFja0ltZ1sxXSwnU2FsdGVkIFBlYW51dCcsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzE0LjUkJylcbiAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFN1b3BzKCl7XG5cbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcygpXG4gICAgICAgIGZvb2RJdGVtKG1lbnVTb3VwSW1nWzBdLCdNYWNoYXUgU291cCcsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51U291cEltZ1sxXSwnQ2hpbmVlc2UgU291cCcsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzE0LjUkJylcbiAgICBmb29kSXRlbShtZW51U291cEltZ1syXSwnVmVnaSBTb3VwJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgXG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvb2RJdGVtKGltZyxOYW1lLGRlc2MscHJpY2Upe1xuICAgICAgICBsZXQgZm9vZEl0ZW1MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgbGlgKVxuICAgICAgICBsZXQgZm9vZEl0ZW1TZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbGV0IGZvb2RJdGVtSW1nU2VjdCA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZm9vZEl0ZW1JbWdTZWN0LmNsYXNzTmFtZT0nZm9vZEl0ZW1JbWdTZWN0J1xuICAgICAgICBsZXQgbGlzdFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgIGxldCBmb29kSXRlbUltZyA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgZm9vZEl0ZW1JbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRpc3BsYXlJdGVtSW1nKVxuICAgICAgICBmb29kSXRlbUltZy5zcmMgPSBpbWdcbiAgICAgICAgZm9vZEl0ZW1JbWdTZWN0LmFwcGVuZENoaWxkKGZvb2RJdGVtSW1nKVxuICAgICAgICBsZXQgZm9vZEl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGZvb2RJdGVtTmFtZS50ZXh0Q29udGVudD1OYW1lXG4gICAgICAgIGxldCBmb29kSXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgZm9vZEl0ZW1EZXNjLnRleHRDb250ZW50PWRlc2NcbiAgICAgICAgbGV0IGZvb2RJdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgZm9vZEl0ZW1QcmljZS50ZXh0Q29udGVudD1wcmljZVxuXG4gICAgICAgIFxuICAgICAgICBsaXN0UGFyYS5hcHBlbmRDaGlsZChmb29kSXRlbU5hbWUpXG4gICAgICAgIGxpc3RQYXJhLmFwcGVuZENoaWxkKGZvb2RJdGVtRGVzYylcbiAgICAgICAgbGlzdFBhcmEuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1QcmljZSlcbiAgICAgICAgZm9vZEl0ZW1MaXN0LmFwcGVuZENoaWxkKGZvb2RJdGVtSW1nU2VjdClcbiAgICAgICAgZm9vZEl0ZW1MaXN0LmFwcGVuZENoaWxkKGxpc3RQYXJhKVxuXG4gICAgICAgIG1lbnVVbC5hcHBlbmRDaGlsZChmb29kSXRlbUxpc3QpXG4gICAgXG4gICAgICAgIH1cblxuZnVuY3Rpb24gZGlzcGxheUl0ZW1JbWcoZXZlbnQpe1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXNGcm9tRGlzcGxheSgpXG4gICAgbGV0IGltZ0ZvckRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZ0ZvckRpc3BsYXkuc3JjPWV2ZW50LnRhcmdldC5zcmNcbiAgICBkaXNwbGF5RGlzaC5hcHBlbmRDaGlsZChpbWdGb3JEaXNwbGF5KVxuICAgIFxufVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKCkge1xuICAgICAgICAgICAgd2hpbGUgKG1lbnVVbC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgbWVudVVsLnJlbW92ZUNoaWxkKG1lbnVVbC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH0gICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXNGcm9tRGlzcGxheSgpIHtcbiAgICAgICAgICAgIHdoaWxlIChkaXNwbGF5RGlzaC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheURpc2gucmVtb3ZlQ2hpbGQoZGlzcGxheURpc2guZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9fVxufVxuXG4iLCJpbXBvcnQge2hlYWRlckltZ30gIGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudVBhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuXG4gICAgXG4gICBjb250ZW50LmNsYXNzTmFtZT0nY29udGVudCdcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuXG4gICAgY29uc3QgbG9nb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxvZ29TZWN0aW9uLmNsYXNzTmFtZT0nbG9nbyc7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgbG9nby5zcmM9aGVhZGVySW1nWzBdO1xuXG4gICBjb25zdCBzZWFyY2hTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIHNlYXJjaFNlY3QuY2xhc3NOYW1lPSdzZWFyY2hTZWN0J1xuXG4gICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgc2VhcmNoLmNsYXNzTmFtZT0nc2VhcmNoQmFyJ1xuICAgXG4gICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgIHNlYXJjaEljb24uY2xhc3NOYW1lPSdzZWFyY2hJY29uJ1xuICAgc2VhcmNoSWNvbi5zcmM9aGVhZGVySW1nWzJdXG5cbiAgIGNvbnN0IHNlYXJjaElucHV0ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlcj0nICBTZWFyY2guLi4nXG5cbiAgIGNvbnN0IGhhbmRCYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgaGFuZEJhZy5pZD0naGFuZEJhZydcbiAgIGhhbmRCYWcuc3JjPWhlYWRlckltZ1sxXVxuXG4gICAgLy8gbGlzdCBcblxuICAgY29uc3QgbGlzdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBsaXN0MS50ZXh0Q29udGVudD0nSG9tZSdcbiAgIGxpc3QxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVIb21lKVxuXG4gICBjb25zdCBsaXN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3QyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVNZW51UGFnZSlcbiAgIGxpc3QyLnRleHRDb250ZW50PSdNZW51J1xuXG4gICBjb25zdCBsaXN0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3QzLnRleHRDb250ZW50PSdCbG9nJ1xuXG4gICBjb25zdCBsaXN0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3Q0LnRleHRDb250ZW50PSdQYWdlcydcblxuICAgY29uc3QgbGlzdDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBsaXN0NS50ZXh0Q29udGVudD0nQWJvdXQnXG5cbiAgIGNvbnN0IGxpc3Q2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgbGlzdDYudGV4dENvbnRlbnQ9J1Nob3AnXG5cbiAgIGNvbnN0IGxpc3Q3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgbGlzdDcudGV4dENvbnRlbnQ9J0NvbnRhY3QnXG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0MSlcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0MilcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0MylcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0NClcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0NSlcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0NilcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0NylcblxuXG4gbmF2LmFwcGVuZENoaWxkKHVsKVxuIHNlYXJjaC5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dClcbnNlYXJjaC5hcHBlbmRDaGlsZChzZWFyY2hJY29uKVxuXG4gc2VhcmNoU2VjdC5hcHBlbmRDaGlsZChzZWFyY2gpXG4gc2VhcmNoU2VjdC5hcHBlbmRDaGlsZChoYW5kQmFnKVxuIGxvZ29TZWN0aW9uLmFwcGVuZENoaWxkKGxvZ28pXG4gXG4gaGVhZGVyLmFwcGVuZENoaWxkKG5hdilcbiBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb1NlY3Rpb24pXG4gaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaFNlY3QpXG4gICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcbn1cbiIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IGhvbWVJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUFib3V0VXMgfSBmcm9tIFwiLi9hYm91dFVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lKCl7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG5jb25zdCB0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG50ZXh0Q29udGVudC5jbGFzc05hbWU9J3RleHRDb250ZW50J1xuY29uc3QgaW1hZ2VTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmltYWdlU2VjdC5jbGFzc05hbWU9J2ltYWdlU2VjdCdcblxuXG5jb25zdCBzb2NpYWxNZWRpYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5zb2NpYWxNZWRpYS5jbGFzc05hbWU9J3NvY2lhbFNlY3QnXG5jb25zdCBmYWNlYm9vayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5mYWNlYm9vay5zcmM9aG9tZUltZ1swXVxuY29uc3QgdHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG50d2l0dGVyLnNyYz1ob21lSW1nWzFdXG5jb25zdCBwaW50ZXJlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxucGludGVyZXN0LnNyYz1ob21lSW1nWzJdXG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5idXR0b24udGV4dENvbnRlbnQ9J1NlZSBNZW51J1xuXG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuZGVzY3JpcHRpb24udGV4dENvbnRlbnQ9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZhcml1cyBzZWQgcGhhcmV0cmEgZGljdHVtIG5lcXVlIG1hc3NhIGNvbmd1ZSdcblxuY29uc3QgaGVhZGluZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG5oZWFkaW5nMi5jbGFzc05hbWU9J2hlYWRpbmcyJ1xuaGVhZGluZzIudGV4dENvbnRlbnQ9J1RoZSBBcnQgb2Ygc3BlZWQgZm9vZCBRdWFsaXR5J1xuXG5jb25zdCBoZWFkaW5nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbmhlYWRpbmcxLmNsYXNzTmFtZT0naGVhZGluZzEnXG5oZWFkaW5nMS50ZXh0Q29udGVudD0nSXRzIFF1aWNrICYgQW11c2luZyEnXG5cblxuc29jaWFsTWVkaWEuYXBwZW5kQ2hpbGQocGludGVyZXN0KVxuc29jaWFsTWVkaWEuYXBwZW5kQ2hpbGQodHdpdHRlcilcbnNvY2lhbE1lZGlhLmFwcGVuZENoaWxkKGZhY2Vib29rKVxuXG50ZXh0Q29udGVudC5hcHBlbmRDaGlsZChzb2NpYWxNZWRpYSlcbnRleHRDb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcxKVxudGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZzIpXG50ZXh0Q29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbnRleHRDb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbilcbm1haW5Db250ZW50LmFwcGVuZENoaWxkKHRleHRDb250ZW50KVxubWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2VTZWN0KVxuY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudClcblxuY3JlYXRlQWJvdXRVcygpXG59IiwiaW1wb3J0IGxvZ29JY29uIGZyb20gJy4uL2ltYWdlcy9Gb29kdHVjay5wbmcnXG5pbXBvcnQgaGFuZEJhZ0ljb24gZnJvbSAnLi4vaW1hZ2VzL0hhbmRiYWcucG5nJ1xuaW1wb3J0IHNlYXJjaEljb24gZnJvbSAnLi4vaW1hZ2VzL3NlYXJjaC5wbmcnXG5pbXBvcnQgZmFjZWJvb2tJY29uIGZyb20gJy4uL2ltYWdlcy9mYWNlYm9vay5wbmcnXG5pbXBvcnQgdHdpdHRlckljb24gZnJvbSAnLi4vaW1hZ2VzL3R3aXR0ZXIucG5nJ1xuaW1wb3J0IHBpbnRlcmVzdEljb24gZnJvbSAnLi4vaW1hZ2VzL3BpbnRlcmVzdC5wbmcnXG5pbXBvcnQgZ3Jhc3NDb3JuZXIgZnJvbSAnLi4vaW1hZ2VzL2Nvcm5lckdyYXNzLnBuZydcbmltcG9ydCBmaXJzdFBvc3QgZnJvbSAnLi4vaW1hZ2VzL2ZpcnN0UC5wbmcnXG5pbXBvcnQgc2Vjb25kUG9zdCBmcm9tICcuLi9pbWFnZXMvc2Vjb25kUC5wbmcnXG5pbXBvcnQgdGhpcmRQb3N0IGZyb20gJy4uL2ltYWdlcy90aGlyZFAucG5nJ1xuaW1wb3J0IGFib3V0MSBmcm9tICcuLi9pbWFnZXMvYWJvdXQxLnBuZydcbmltcG9ydCBhYm91dDIgZnJvbSAnLi4vaW1hZ2VzL2Fib3V0Mi5wbmcnXG5pbXBvcnQgYWJvdXQzIGZyb20gJy4uL2ltYWdlcy9hYm91dDMucG5nJ1xuaW1wb3J0IENhdGVnb3J5MSBmcm9tICcuLi9pbWFnZXMvY2F0ZWdvcnkxLnBuZydcbmltcG9ydCBDYXRlZ29yeTIgZnJvbSAnLi4vaW1hZ2VzL2NhdGVnb3J5Mi5wbmcnXG5pbXBvcnQgQ2F0ZWdvcnkzIGZyb20gJy4uL2ltYWdlcy9jYXRlZ29yeTMucG5nJ1xuaW1wb3J0IENhdGVnb3J5NCBmcm9tICcuLi9pbWFnZXMvY2F0ZWdvcnk0LnBuZydcbmltcG9ydCBzaWRlR3Jhc3NJbWcgZnJvbSAnLi4vaW1hZ2VzL3NpZGVHcmFzcy5wbmcnXG5pbXBvcnQgd2h5MSBmcm9tICcuLi9pbWFnZXMvd2h5XzEucG5nJ1xuaW1wb3J0IHdoeTIgZnJvbSAnLi4vaW1hZ2VzL3doeV8yLnBuZydcbmltcG9ydCB3aHkzIGZyb20gJy4uL2ltYWdlcy93aHlfMy5wbmcnXG5pbXBvcnQgd2h5NCBmcm9tICcuLi9pbWFnZXMvd2h5XzQucG5nJ1xuaW1wb3J0IHdoeTUgZnJvbSAnLi4vaW1hZ2VzL3doeV81LnBuZydcbmltcG9ydCB3aHk2IGZyb20gJy4uL2ltYWdlcy93aHlfNi5wbmcnXG5pbXBvcnQgaW5mbzEgZnJvbSAnLi4vaW1hZ2VzL2NoZWZDYXAucG5nJ1xuaW1wb3J0IGluZm8yIGZyb20gJy4uL2ltYWdlcy9mb29kUHJvZHVjdC5wbmcnXG5pbXBvcnQgaW5mbzMgZnJvbSAnLi4vaW1hZ2VzL3BpenphLnBuZydcbmltcG9ydCBpbmZvNCBmcm9tICcuLi9pbWFnZXMvc3Bvb24ucG5nJ1xuaW1wb3J0IGl0ZW0xIGZyb20gJy4uL2ltYWdlcy9pdGVtMS5wbmcnXG5pbXBvcnQgaXRlbTIgZnJvbSAnLi4vaW1hZ2VzL2l0ZW0yLnBuZydcbmltcG9ydCBpdGVtMyBmcm9tICcuLi9pbWFnZXMvaXRlbTMucG5nJ1xuaW1wb3J0IGl0ZW00IGZyb20gJy4uL2ltYWdlcy9pdGVtNC5wbmcnXG5pbXBvcnQgaXRlbTUgZnJvbSAnLi4vaW1hZ2VzL2l0ZW01LnBuZydcbmltcG9ydCBpdGVtNiBmcm9tICcuLi9pbWFnZXMvaXRlbTYucG5nJ1xuaW1wb3J0IGl0ZW03IGZyb20gJy4uL2ltYWdlcy9pdGVtNy5wbmcnXG5pbXBvcnQgaXRlbTggZnJvbSAnLi4vaW1hZ2VzL2l0ZW04LnBuZydcbmltcG9ydCBsdW5jaDEgZnJvbSAnLi4vaW1hZ2VzL2x1bmNoMS5qcGcnXG5pbXBvcnQgbHVuY2gyIGZyb20gJy4uL2ltYWdlcy9sdW5jaDIuanBlZydcbmltcG9ydCBsdW5jaDMgZnJvbSAnLi4vaW1hZ2VzL2x1bmNoMy5qcGVnJ1xuaW1wb3J0IGx1bmNoNCBmcm9tICcuLi9pbWFnZXMvbHVuY2g0LmpwZWcnXG5pbXBvcnQgbHVuY2g1IGZyb20gJy4uL2ltYWdlcy9sdW5jaDUuanBlZydcbmltcG9ydCBsdW5jaDYgZnJvbSAnLi4vaW1hZ2VzL2x1bmNoNi5wbmcnXG5pbXBvcnQgZGlubmVyMSBmcm9tICcuLi9pbWFnZXMvZGlubmVyMS5qcGVnJ1xuaW1wb3J0IGRpbm5lcjIgZnJvbSAnLi4vaW1hZ2VzL2Rpbm5lcjIuanBlZydcbmltcG9ydCBkaW5uZXIzIGZyb20gJy4uL2ltYWdlcy9kaW5uZXIzLmpwZWcnXG5pbXBvcnQgZGlubmVyNCBmcm9tICcuLi9pbWFnZXMvZGlubmVyNC5qcGVnJ1xuaW1wb3J0IGRpbm5lcjUgZnJvbSAnLi4vaW1hZ2VzL2Rpbm5lcjUuanBlZydcbmltcG9ydCBkaW5uZXI2IGZyb20gJy4uL2ltYWdlcy9kaW5uZXI2LmpwZWcnXG5pbXBvcnQgZGVzZXJ0MSBmcm9tICcuLi9pbWFnZXMvZGVzZXJ0MS5qcGVnJ1xuaW1wb3J0IGRlc2VydDIgZnJvbSAnLi4vaW1hZ2VzL2Rlc2VydDIuanBlZydcbmltcG9ydCBkcmluazEgZnJvbSAnLi4vaW1hZ2VzL2RyaW5rMS5qcGVnJ1xuaW1wb3J0IGRyaW5rMiBmcm9tICcuLi9pbWFnZXMvZHJpbmsyLmpwZWcnXG5pbXBvcnQgZHJpbmszIGZyb20gJy4uL2ltYWdlcy9kcmluazMuanBlZydcbmltcG9ydCBzbmFjazEgZnJvbSAnLi4vaW1hZ2VzL3NuYWNrMS5qcGVnJ1xuaW1wb3J0IHNuYWNrMiBmcm9tICcuLi9pbWFnZXMvc25hY2syLmpwZWcnXG5pbXBvcnQgc291cDEgZnJvbSAnLi4vaW1hZ2VzL3NvdXAxLmpwZWcnXG5pbXBvcnQgc291cDIgZnJvbSAnLi4vaW1hZ2VzL3NvdXAyLmpwZWcnXG5pbXBvcnQgc291cDMgZnJvbSAnLi4vaW1hZ2VzL3NvdXAzLmpwZWcnXG5pbXBvcnQgY2hlZjEgZnJvbSAnLi4vaW1hZ2VzL2NoZWYxLnBuZydcbmltcG9ydCBjaGVmMiBmcm9tICcuLi9pbWFnZXMvY2hlZjIucG5nJ1xuaW1wb3J0IGNoZWYzIGZyb20gJy4uL2ltYWdlcy9jaGVmMy5wbmcnXG5pbXBvcnQgY2hlZjQgZnJvbSAnLi4vaW1hZ2VzL2NoZWY0LnBuZydcbmltcG9ydCBwcm9maWxlMSBmcm9tICcuLi9pbWFnZXMvcHJvZmlsZTEucG5nJ1xuaW1wb3J0IHByb2ZpbGUyIGZyb20gJy4uL2ltYWdlcy9wcm9maWxlMi5wbmcnXG5pbXBvcnQgcHJvZmlsZTMgZnJvbSAnLi4vaW1hZ2VzL3Byb2ZpbGUzLnBuZydcbmltcG9ydCBwcm9maWxlNCBmcm9tICcuLi9pbWFnZXMvcHJvZmlsZTQucG5nJ1xuaW1wb3J0IHRlc3RpbW9uaWFsR3JlZW4gZnJvbSAnLi4vaW1hZ2VzL3Rlc3RpbW9uaWFsLnBuZydcbmltcG9ydCBzdGFyMSBmcm9tICcuLi9pbWFnZXMvc3Rhci5wbmcnXG5pbXBvcnQgRW1wdHlzdGFyIGZyb20gJy4uL2ltYWdlcy9lbXB0eVN0YXIucG5nJ1xuaW1wb3J0IGdyYXNzQ29ybmVyMiBmcm9tICcuLi9pbWFnZXMvZ3Jhc3MyLnBuZydcbmltcG9ydCBibG9nMSBmcm9tICcuLi9pbWFnZXMvYmxvZzEucG5nJ1xuaW1wb3J0IGJsb2cyIGZyb20gJy4uL2ltYWdlcy9ibG9nMi5wbmcnXG5pbXBvcnQgYmxvZzMgZnJvbSAnLi4vaW1hZ2VzL2Jsb2czLnBuZydcbmltcG9ydCBsaWtlIGZyb20gJy4uL2ltYWdlcy9saWtlLnBuZydcbmltcG9ydCBjb21tZW50IGZyb20gJy4uL2ltYWdlcy9jb21tZW50LnBuZydcbmltcG9ydCBzaGFyZSBmcm9tICcuLi9pbWFnZXMvc2hhcmUucG5nJ1xuaW1wb3J0IE1lbnVJbWcxIGZyb20gJy4uL2ltYWdlcy9jYXRlZ29yeUZvck1lbnUxLnBuZydcbmltcG9ydCBNZW51SW1nMiBmcm9tICcuLi9pbWFnZXMvY2F0ZWdvcnlGb3JNZW51Mi5wbmcnXG5pbXBvcnQgTWVudUltZzMgZnJvbSAnLi4vaW1hZ2VzL2NhdGVnb3J5Rm9yTWVudTMucG5nJ1xuaW1wb3J0IE1lbnVJbWc0IGZyb20gJy4uL2ltYWdlcy9jYXRlZ29yeUZvck1lbnU0LnBuZydcbmltcG9ydCBjb2ZmZWUgZnJvbSAnLi4vaW1hZ2VzL0NvZmZlZS5wbmcnXG5pbXBvcnQgYnJhbmQxIGZyb20gJy4uL2ltYWdlcy9icmFuZDEucG5nJ1xuaW1wb3J0IGJyYW5kMiBmcm9tICcuLi9pbWFnZXMvYnJhbmQyLnBuZydcbmltcG9ydCBicmFuZDMgZnJvbSAnLi4vaW1hZ2VzL2JyYW5kMy5wbmcnXG5pbXBvcnQgYnJhbmQ0IGZyb20gJy4uL2ltYWdlcy9icmFuZDQucG5nJ1xuaW1wb3J0IGJyYW5kNSBmcm9tICcuLi9pbWFnZXMvYnJhbmQ1LnBuZydcbmltcG9ydCBicmFuZDYgZnJvbSAnLi4vaW1hZ2VzL2JyYW5kNi5wbmcnXG5cblxuZXhwb3J0IGNvbnN0IGhlYWRlckltZyA9IFtsb2dvSWNvbixoYW5kQmFnSWNvbixzZWFyY2hJY29uXVxuXG5leHBvcnQgY29uc3QgaG9tZUltZyA9IFtmYWNlYm9va0ljb24sdHdpdHRlckljb24scGludGVyZXN0SWNvbl1cblxuZXhwb3J0IGNvbnN0IGZvb3RlckltZyA9IFtncmFzc0Nvcm5lcixmaXJzdFBvc3Qsc2Vjb25kUG9zdCx0aGlyZFBvc3RdXG5cbmV4cG9ydCBjb25zdCBhYm91dEltZyA9IFthYm91dDEsYWJvdXQyLGFib3V0M11cblxuZXhwb3J0IGNvbnN0IENhdGVnb3J5SW1nID0gW0NhdGVnb3J5MSxDYXRlZ29yeTIsQ2F0ZWdvcnkzLENhdGVnb3J5NCxzaWRlR3Jhc3NJbWddXG5cbmV4cG9ydCBjb25zdCBXaHlJbWcgPSBbd2h5MSx3aHkyLHdoeTMsd2h5NCx3aHk1LHdoeTZdXG5cbmV4cG9ydCBjb25zdCByZXN0cmF1SW5mb1NlY3RJbWcgPSBbaW5mbzEsaW5mbzIsaW5mbzMsaW5mbzRdXG5cbmV4cG9ydCBjb25zdCBtZW51SXRlbUltZyA9IFtpdGVtMSxpdGVtMixpdGVtMyxpdGVtNCxpdGVtNSxpdGVtNixpdGVtNyxpdGVtOF1cblxuZXhwb3J0IGNvbnN0IG1lbnVMdW5jaEltZyA9IFtsdW5jaDEsbHVuY2gyLGx1bmNoMyxsdW5jaDQsbHVuY2g1LGx1bmNoNl1cblxuZXhwb3J0IGNvbnN0IG1lbnVEaW5uZXJJbWcgPSBbZGlubmVyMSxkaW5uZXIyLGRpbm5lcjMsZGlubmVyNCxkaW5uZXI1LGRpbm5lcjZdXG5cbmV4cG9ydCBjb25zdCBtZW51RGVzZXJ0SW1nID0gW2Rlc2VydDEsZGVzZXJ0Ml1cblxuZXhwb3J0IGNvbnN0IG1lbnVEcmlua0ltZyA9IFtkcmluazEsZHJpbmsyLGRyaW5rM11cblxuZXhwb3J0IGNvbnN0IG1lbnVTbmFja0ltZyA9IFtzbmFjazEsc25hY2syXVxuXG5leHBvcnQgY29uc3QgbWVudVNvdXBJbWcgPSBbc291cDEsc291cDIsc291cDNdXG5cbmV4cG9ydCBjb25zdCBjaGVmSW1nID0gW2NoZWYxLGNoZWYyLGNoZWYzLGNoZWY0XVxuXG5leHBvcnQgY29uc3QgcHJvZmlsZUltZyA9IFtwcm9maWxlMSx0ZXN0aW1vbmlhbEdyZWVuLHN0YXIxLEVtcHR5c3Rhcixwcm9maWxlMixwcm9maWxlMyxwcm9maWxlNCxncmFzc0Nvcm5lcjIsZ3Jhc3NDb3JuZXIyXVxuXG5leHBvcnQgY29uc3QgYmxvZ0ltZyAgPSBbYmxvZzEsYmxvZzIsYmxvZzMsbGlrZSxjb21tZW50LHNoYXJlXVxuXG5leHBvcnQgY29uc3QgTWVudUltZyA9IFtNZW51SW1nMSxNZW51SW1nMixNZW51SW1nMyxNZW51SW1nNCxjb2ZmZWVdXG5cbmV4cG9ydCBjb25zdCBicmFuZHMgPSBbYnJhbmQxLGJyYW5kMixicmFuZDMsYnJhbmQ0LGJyYW5kNSxicmFuZDZdIiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHtoZWFkZXJJbWd9ICBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IGxvYWRBbGxob21lQ29tcG9uZW50cyB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVSZXN0cmF1SW5mbyB9IGZyb20gXCIuL3Jlc3RyYXVJbmZvU2VjdFwiO1xuaW1wb3J0IHsgTWVudUltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgYnJhbmRzIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKXtcblxuICBcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzRnJvbURpc3BsYXkoKVxuY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kPSd0cmFuc3BhcmVudCdcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbmJvZHkucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG5ib2R5LmNsYXNzTGlzdD0nYm9keVBhZ2UnXG5cblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmhlYWRlci5jbGFzc05hbWU9J2hlYWRlckZvck5hdidcblxuY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5sb2dvLnNyYyA9IGhlYWRlckltZ1swXVxubG9nby5jbGFzc0xpc3Q9J2xvZ29Gb3JIZWFkZXInXG5cbiAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgdWwuY2xhc3NOYW1lPSduYXZGb3JIZWFkZXInXG4gICBjb25zdCBsaXN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3QxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxsb2FkQWxsaG9tZUNvbXBvbmVudHMpXG4gICBsaXN0MS50ZXh0Q29udGVudD0nSG9tZSdcblxuICAgY29uc3QgbGlzdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBsaXN0Mi50ZXh0Q29udGVudD0nTWVudSdcblxuICAgY29uc3QgbGlzdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBsaXN0My50ZXh0Q29udGVudD0nQmxvZydcblxuICAgY29uc3QgbGlzdDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBsaXN0NC50ZXh0Q29udGVudD0nUGFnZXMnXG5cbiAgIGNvbnN0IGxpc3Q1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgbGlzdDUudGV4dENvbnRlbnQ9J0Fib3V0J1xuXG4gICBjb25zdCBsaXN0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3Q2LnRleHRDb250ZW50PSdTaG9wJ1xuXG4gICBjb25zdCBsaXN0NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3Q3LnRleHRDb250ZW50PSdDb250YWN0J1xuXG4gICBjb25zdCBpY29uU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBjb25zdCBwYXJhICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgIHBhcmEudGV4dENvbnRlbnQ9J091ciBNZW51J1xuXG4gICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgcGFyYTIuaW5uZXJIVE1MPSc8c3Bhbj5Ib21lPC9zcGFuPiA+IE1lbnUnXG5cbiAgIHVsLmFwcGVuZENoaWxkKGxpc3QxKVxuICAgdWwuYXBwZW5kQ2hpbGQobGlzdDIpXG4gICB1bC5hcHBlbmRDaGlsZChsaXN0MykgXG4gICB1bC5hcHBlbmRDaGlsZChsaXN0NClcbiAgIHVsLmFwcGVuZENoaWxkKGxpc3Q1KVxuICAgdWwuYXBwZW5kQ2hpbGQobGlzdDYpXG4gICB1bC5hcHBlbmRDaGlsZChsaXN0NylcblxuaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pXG5oZWFkZXIuYXBwZW5kQ2hpbGQodWwpXG5oZWFkZXIuYXBwZW5kQ2hpbGQocGFyYSlcblxuY29uc3QgTWVudUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuTWVudUJvZHkuY2xhc3NOYW1lPSdNZW51Qm9keSdcblxuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpXG5oZWFkZXIuYXBwZW5kQ2hpbGQocGFyYTIpXG5jb250ZW50LmFwcGVuZENoaWxkKE1lbnVCb2R5KVxuXG5jcmVhdGVNZW51Q2F0ZWdvcnkoJ1N0YXJ0ZXIgTWVudScsTWVudUltZ1swXSlcbmNyZWF0ZU1lbnVDYXRlZ29yeTIoJ01haW4gQ291cnNlJyxNZW51SW1nWzFdKVxuY3JlYXRlTWVudUNhdGVnb3J5KCdEZXNzZXJ0cycsTWVudUltZ1syXSlcbmNyZWF0ZU1lbnVDYXRlZ29yeTIoJ0RyaW5rcycsTWVudUltZ1szXSlcblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDYXRlZ29yeShUSVRMRSxJTUcpe1xubGV0IG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5vbmUuY2xhc3NOYW1lPSdvbmUnXG5sZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG50aXRsZS50ZXh0Q29udGVudD1USVRMRVxuXG5cbmxldCBtZWRpYVNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxubGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5pbWcuc3JjPUlNR1xuXG5tZWRpYVNlY3QuYXBwZW5kQ2hpbGQoaW1nKVxuXG5sZXQgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gbGV0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuLy8gaW1nMi5zcmMgPSBNZW51SW1nWzRdXG50ZXh0Q29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSlcbmNyZWF0ZUl0ZW0oJ0FsZGVyIEdyaWxsZWQgQ2hpbm9vayBTYWxtb24nLCc8cD5Ub2FzdGVkIEZyZW5jaCBicmVhZCB0b3BwZWQgd2l0aCByb21hbm8sIGNoZWRkYXIgPGJyPjUwMENBTDwvcD4nLCczMiQnKVxuY3JlYXRlSXRlbSgnQWxkZXIgR3JpbGxlZCBDaGlub29rIFNhbG1vbicsJzxwPlRvYXN0ZWQgRnJlbmNoIGJyZWFkIHRvcHBlZCB3aXRoIHJvbWFubywgY2hlZGRhciA8YnI+NTAwQ0FMPC9wPicsJzMyJCcpXG5jcmVhdGVJdGVtKCdBbGRlciBHcmlsbGVkIENoaW5vb2sgU2FsbW9uJywnPHA+VG9hc3RlZCBGcmVuY2ggYnJlYWQgdG9wcGVkIHdpdGggcm9tYW5vLCBjaGVkZGFyIDxicj41MDBDQUw8L3A+JywnMzIkJylcbmNyZWF0ZUl0ZW0oJ0FsZGVyIEdyaWxsZWQgQ2hpbm9vayBTYWxtb24nLCc8cD5Ub2FzdGVkIEZyZW5jaCBicmVhZCB0b3BwZWQgd2l0aCByb21hbm8sIGNoZWRkYXIgPGJyPjUwMENBTDwvcD4nLCczMiQnKVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKE5BTUUsREVTQyxQUklDRSl7XG5sZXQgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5sZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxubmFtZS5jbGFzc05hbWU9J25hbWUnXG5uYW1lLnRleHRDb250ZW50ID0gTkFNRVxubGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbmRlc2MuaW5uZXJIVE1MID0gREVTQ1xubGV0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5wcmljZS50ZXh0Q29udGVudCA9IFBSSUNFXG5pdGVtMS5hcHBlbmRDaGlsZChuYW1lKVxuaXRlbTEuYXBwZW5kQ2hpbGQoZGVzYylcbml0ZW0xLmFwcGVuZENoaWxkKHByaWNlKVxudGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbTEpXG59XG5vbmUuYXBwZW5kQ2hpbGQobWVkaWFTZWN0KVxuXG5vbmUuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpXG5cbk1lbnVCb2R5LmFwcGVuZENoaWxkKG9uZSlcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVNZW51Q2F0ZWdvcnkyKFRJVExFLElNRyl7XG4gICAgbGV0IG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb25lLmNsYXNzTmFtZT0nb25lJ1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aXRsZS50ZXh0Q29udGVudD1USVRMRVxuICAgIFxuICAgIFxuICAgIGxldCBtZWRpYVNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5zcmM9SU1HXG4gICAgXG4gICAgbWVkaWFTZWN0LmFwcGVuZENoaWxkKGltZylcbiAgICBcbiAgICBsZXQgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vIGxldCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAvLyBpbWcyLnNyYyA9IE1lbnVJbWdbNF1cbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBjcmVhdGVJdGVtKCdBbGRlciBHcmlsbGVkIENoaW5vb2sgU2FsbW9uJywnPHA+VG9hc3RlZCBGcmVuY2ggYnJlYWQgdG9wcGVkIHdpdGggcm9tYW5vLCBjaGVkZGFyIDxicj41MDBDQUw8L3A+JywnMzIkJylcbiAgICBjcmVhdGVJdGVtKCdBbGRlciBHcmlsbGVkIENoaW5vb2sgU2FsbW9uJywnPHA+VG9hc3RlZCBGcmVuY2ggYnJlYWQgdG9wcGVkIHdpdGggcm9tYW5vLCBjaGVkZGFyIDxicj41MDBDQUw8L3A+JywnMzIkJylcbiAgICBjcmVhdGVJdGVtKCdBbGRlciBHcmlsbGVkIENoaW5vb2sgU2FsbW9uJywnPHA+VG9hc3RlZCBGcmVuY2ggYnJlYWQgdG9wcGVkIHdpdGggcm9tYW5vLCBjaGVkZGFyIDxicj41MDBDQUw8L3A+JywnMzIkJylcbiAgICBjcmVhdGVJdGVtKCdBbGRlciBHcmlsbGVkIENoaW5vb2sgU2FsbW9uJywnPHA+VG9hc3RlZCBGcmVuY2ggYnJlYWQgdG9wcGVkIHdpdGggcm9tYW5vLCBjaGVkZGFyIDxicj41MDBDQUw8L3A+JywnMzIkJylcbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVJdGVtKE5BTUUsREVTQyxQUklDRSl7XG4gICAgbGV0IGl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbmFtZS5jbGFzc05hbWU9J25hbWUnXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IE5BTUVcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRlc2MuaW5uZXJIVE1MID0gREVTQ1xuICAgIGxldCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHByaWNlLnRleHRDb250ZW50ID0gUFJJQ0VcbiAgICBpdGVtMS5hcHBlbmRDaGlsZChuYW1lKVxuICAgIGl0ZW0xLmFwcGVuZENoaWxkKGRlc2MpXG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQocHJpY2UpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbTEpXG4gICAgfVxuICAgIFxuICAgIFxuICAgIG9uZS5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudClcbiAgICBvbmUuYXBwZW5kQ2hpbGQobWVkaWFTZWN0KVxuICAgIE1lbnVCb2R5LmFwcGVuZENoaWxkKG9uZSlcbiAgICB9XG4gICAgY29uc3QgcGFydG5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcGFydG5lci5jbGFzc05hbWU9J3BhcnRuZXInXG5cbiAgICBjb25zdCB0aXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0aXRsZTEudGV4dENvbnRlbnQ9J1BhcnRuZXJzIGFuZCBDbGllbnRzJ1xuICAgIGNvbnN0IHRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aXRsZTIudGV4dENvbnRlbnQ9J1dlIHdvcmsgd2l0aCB0aGUgYmVzdCBwZW9wbGUnXG4gICAgXG4gICAgcGFydG5lci5hcHBlbmRDaGlsZCh0aXRsZTEpXG4gICAgcGFydG5lci5hcHBlbmRDaGlsZCh0aXRsZTIpXG4gICAgXG4gICAgY29uc3Qgd29ya1dpdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdvcmtXaXRoLmNsYXNzTmFtZT0nd29ya1dpdGgnO1xuXG4gICAgY29uc3QgYnJhbmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBicmFuZDEuc3JjPWJyYW5kc1swXVxuICAgIGNvbnN0IGJyYW5kMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgYnJhbmQyLnNyYz1icmFuZHNbMV1cbiAgICBjb25zdCBicmFuZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGJyYW5kMy5zcmM9YnJhbmRzWzJdXG4gICAgY29uc3QgYnJhbmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgYnJhbmQ0LnNyYz1icmFuZHNbM11cbiAgICAgY29uc3QgYnJhbmQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgYnJhbmQ1LnNyYz1icmFuZHNbNF1cbiAgICAgY29uc3QgYnJhbmQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgYnJhbmQ2LnNyYz1icmFuZHNbNV1cblxuXG4gIHdvcmtXaXRoLmFwcGVuZENoaWxkKGJyYW5kMSlcbiAgd29ya1dpdGguYXBwZW5kQ2hpbGQoYnJhbmQyKVxuICB3b3JrV2l0aC5hcHBlbmRDaGlsZChicmFuZDMpXG4gIHdvcmtXaXRoLmFwcGVuZENoaWxkKGJyYW5kNClcbiAgd29ya1dpdGguYXBwZW5kQ2hpbGQoYnJhbmQ1KVxuICB3b3JrV2l0aC5hcHBlbmRDaGlsZChicmFuZDYpXG4gIFxuICBwYXJ0bmVyLmFwcGVuZENoaWxkKHdvcmtXaXRoKSAgXG4gIE1lbnVCb2R5LmFwcGVuZENoaWxkKHBhcnRuZXIpXG4gIGNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gIGNvbnRlbnQuY2xhc3NOYW1lPSdjb250ZW50U2Vjb25kU3R5bGUnXG5cbiBcblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2Rlc0Zyb21EaXNwbGF5KCkge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH19XG4gICAgY3JlYXRlUmVzdHJhdUluZm8oKVxuICAgIGNvbnN0ICBpbmZvU2VjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0cmF1SW5mb1NlY3QnKVxuICAgIGluZm9TZWN0LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICAgIGluZm9TZWN0LmNsYXNzTmFtZT0ncmVzdHJhdUluZm9TZWN0Rm9ySGVhZGVyJ1xuICAgICBcbiAgICBjcmVhdGVGb290ZXIoKVxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpXG4gICAgZm9vdGVyLmNsYXNzTmFtZT0nZm9vdGVyQ2xhc3MnXG4gICAgXG59XG5cbiIsImltcG9ydCB7Y29udGVudH0gZnJvbSAnLi4vaW5kZXgnXG5pbXBvcnQgeyBjaGVmSW1nIH0gZnJvbSAnLi9pbWFnZXMnXG4gXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPdXJDaGVmKCl7XG5cbmNvbnN0IG91ckNoZWZTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbm91ckNoZWZTZWN0LmNsYXNzTmFtZT0nb3VyQ2hlZlNlY3QnXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudD0nU2VlIE1vcmUnXG5jb25zdCBUaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG5UaXRsZTEudGV4dENvbnRlbnQ9J0NoZWZzJ1xuY29uc3QgVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuVGl0bGUyLmlubmVySFRNTD0nPHNwYW4+TWU8L3NwYW4+ZXQgT3VyIENoZWYnXG5vdXJDaGVmU2VjdC5hcHBlbmRDaGlsZChUaXRsZTEpXG5vdXJDaGVmU2VjdC5hcHBlbmRDaGlsZChUaXRsZTIpXG5sZXQgY2hlZkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY2hlZkxpc3QuY2xhc3NOYW1lPSdjaGVmTGlzdCdcbm1ha2VDaGVmU2VjdChjaGVmSW1nWzBdLCdELkVzdHdvb2QnLCdDaGllZiBDaGVmJylcbm1ha2VDaGVmU2VjdChjaGVmSW1nWzFdLCdELkVzdHdvb2QnLCdDaGllZiBDaGVmJylcbm1ha2VDaGVmU2VjdChjaGVmSW1nWzJdLCdELkVzdHdvb2QnLCdDaGllZiBDaGVmJylcbm1ha2VDaGVmU2VjdChjaGVmSW1nWzNdLCdELkVzdHdvb2QnLCdDaGllZiBDaGVmJylcblxuXG5mdW5jdGlvbiBtYWtlQ2hlZlNlY3QoaW1nLE5hbWUsZGVzaWduYXRpb24pe1xuXG4gICAgbGV0IGNoZWZTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGVmU2VjdC5jbGFzc05hbWU9J2NoZWZTZWN0J1xuICAgIGxldCBjaGVmU2VjdEltZyAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGNoZWZTZWN0SW1nLnNyYz1pbWdcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaW5mby5jbGFzc05hbWU9J2luZm8nXG4gICAgY2hlZlNlY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJyxpbmZvQW5pbWF0aW9uKVxuICAgIGNoZWZTZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JyxpbmZvQW5pbWF0aW9uTGVhdmUpXG4gICAgZnVuY3Rpb24gaW5mb0FuaW1hdGlvbigpe1xuICAgICAgICBpbmZvLnN0eWxlLndpZHRoPScxMDBweCdcbiAgICAgICAgaW5mb05hbWUuc3R5bGUuZGlzcGxheT0nYmxvY2snXG4gICAgICAgIGluZm9EZXNpZ25hdGlvbi5zdHlsZS5kaXNwbGF5PSdibG9jaydcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbmZvQW5pbWF0aW9uTGVhdmUoKXtcbiAgICAgICAgaW5mby5zdHlsZS53aWR0aD0nMHB4J1xuICAgICAgICBpbmZvTmFtZS5zdHlsZS5kaXNwbGF5PSdub25lJ1xuICAgICAgICBpbmZvRGVzaWduYXRpb24uc3R5bGUuZGlzcGxheT0nbm9uZSdcbiAgICB9XG4gICAgbGV0IGluZm9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgXG4gICAgaW5mb05hbWUudGV4dENvbnRlbnQ9TmFtZVxuICAgIGxldCBpbmZvRGVzaWduYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpbmZvRGVzaWduYXRpb24udGV4dENvbnRlbnQ9ZGVzaWduYXRpb25cbiAgXG4gICAgaW5mby5hcHBlbmRDaGlsZChpbmZvTmFtZSlcbiAgICBpbmZvLmFwcGVuZENoaWxkKGluZm9EZXNpZ25hdGlvbilcbiAgICBjaGVmU2VjdC5hcHBlbmRDaGlsZChjaGVmU2VjdEltZylcbiAgICBjaGVmU2VjdC5hcHBlbmRDaGlsZChpbmZvKVxuXG4gICAgY2hlZkxpc3QuYXBwZW5kQ2hpbGQoY2hlZlNlY3QpXG4gICAgXG5cbn1cblxub3VyQ2hlZlNlY3QuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuXG5vdXJDaGVmU2VjdC5hcHBlbmRDaGlsZChjaGVmTGlzdClcbmNvbnRlbnQuYXBwZW5kQ2hpbGQob3VyQ2hlZlNlY3QpXG5cblxuXG5cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlc3RyYXVBY3RpdmUoKXtcbmNvbnN0IHJlc3RyYXVBY3RpdmVTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnJlc3RyYXVBY3RpdmVTZWN0LmNsYXNzTmFtZT0ncmVzdHJhdUFjdGl2ZVNlY3QnXG5cbmNvbnN0IHRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbnRpdGxlMS50ZXh0Q29udGVudD0nUmVzdGF1cmFudCBBY3RpdmUgUHJvY2VzcydcblxuY29uc3QgcGFyYSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbnBhcmEuaW5uZXJIVE1MPSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGRpYW0gcGVsbGVudGVzcXVlPGJyPiBiaWJlbmR1bSBub24gZHVpIHZvbHV0cGF0IGZyaW5naWxsYSBiaWJlbmR1bS4gVXJuYSwgZWxpdCBhdWd1ZSB1cm5hLCdcblxuXG5jb25zdCB0aXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG50aXRsZTIuaW5uZXJIVE1MPSc8c3Bhbj5XZTwvc3Bhbj4gRG9jdW1lbnQgRXZlcnkgRm9vZDxicj4gQmVhbiBQcm9jZXNzIHVudGlsZSBpdCBpcyBzYXZlZCdcblxuY29uc3QgYnRuU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5idG5TZWN0LmNsYXNzTmFtZT0nYnRuU2VjdCdcbmNvbnN0IGJ0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYnRuMS5jbGFzc05hbWU9J2J0bjEnXG5idG4xLnRleHRDb250ZW50PSdSZWFkIE1vcmUnXG5jb25zdCBwbGF5VmlkU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5wbGF5VmlkU2VjdC5jbGFzc05hbWU9J3BsYXlWaWRTZWN0J1xuXG5jb25zdCBidG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmJ0bjIuY2xhc3NOYW1lPSdidG4yJ1xuXG5wbGF5VmlkU2VjdC5hcHBlbmRDaGlsZChidG4yKVxuXG5jb25zdCB2aWRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG52aWRQYXJhLmNsYXNzTmFtZT0nVmlkcGxheSdcbnZpZFBhcmEudGV4dENvbnRlbnQ9J1BsYXkgVmlkZW8nXG5wbGF5VmlkU2VjdC5hcHBlbmRDaGlsZCh2aWRQYXJhKVxuXG5cbnJlc3RyYXVBY3RpdmVTZWN0LmFwcGVuZENoaWxkKHRpdGxlMSlcbnJlc3RyYXVBY3RpdmVTZWN0LmFwcGVuZENoaWxkKHRpdGxlMilcbnJlc3RyYXVBY3RpdmVTZWN0LmFwcGVuZENoaWxkKHBhcmEpXG5cbmJ0blNlY3QuYXBwZW5kQ2hpbGQoYnRuMSlcbmJ0blNlY3QuYXBwZW5kQ2hpbGQoYnRuMilcbmJ0blNlY3QuYXBwZW5kQ2hpbGQocGxheVZpZFNlY3QpXG5cbnJlc3RyYXVBY3RpdmVTZWN0LmFwcGVuZENoaWxkKGJ0blNlY3QpXG5jb250ZW50LmFwcGVuZENoaWxkKHJlc3RyYXVBY3RpdmVTZWN0KVxufSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7ICByZXN0cmF1SW5mb1NlY3RJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlc3RyYXVJbmZvKCl7XG5cbiAgICBjb25zdCByZXN0cmF1SW5mb1NlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJlc3RyYXVJbmZvU2VjdC5jbGFzc05hbWU9J3Jlc3RyYXVJbmZvU2VjdCdcbiAgICBjb25zdCByZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyLmNsYXNzTmFtZT0ncmVzdHJhdUluZm9TZWN0QmxhY2tMYXllcidcblxuICAgIGNvbnN0IGluZm9TdWJEaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZzEuc3JjID0gcmVzdHJhdUluZm9TZWN0SW1nWzBdXG4gICAgY29uc3QgaW5mb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpbmZvTmFtZS50ZXh0Q29udGVudD0nUHJvZmVzc2lvbmFsIENoZWZzJ1xuICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG51bWJlci50ZXh0Q29udGVudD0nNDIwJ1xuXG4gICAgaW5mb1N1YkRpdjEuYXBwZW5kQ2hpbGQoaW1nMSlcbiAgICBpbmZvU3ViRGl2MS5hcHBlbmRDaGlsZChpbmZvTmFtZSlcbiAgICBpbmZvU3ViRGl2MS5hcHBlbmRDaGlsZChudW1iZXIpXG5cbiAgICBjb25zdCBpbmZvU3ViRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nMi5zcmMgPSByZXN0cmF1SW5mb1NlY3RJbWdbMV1cbiAgICBjb25zdCBpbmZvTmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpbmZvTmFtZTIudGV4dENvbnRlbnQ9J0l0ZW1zIE9mIEZvb2QnXG4gICAgY29uc3QgbnVtYmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG51bWJlcjIudGV4dENvbnRlbnQ9JzMyMCdcbiAgICBpbmZvU3ViRGl2Mi5hcHBlbmRDaGlsZChpbWcyKVxuICAgIGluZm9TdWJEaXYyLmFwcGVuZENoaWxkKGluZm9OYW1lMilcbiAgICBpbmZvU3ViRGl2Mi5hcHBlbmRDaGlsZChudW1iZXIyKVxuXG4gICAgY29uc3QgaW5mb1N1YkRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZzMuc3JjID0gcmVzdHJhdUluZm9TZWN0SW1nWzJdXG4gICAgY29uc3QgaW5mb05hbWUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaW5mb05hbWUzLnRleHRDb250ZW50PSdZZWFycyBPZiBFeHBlcmllbmNlZCdcbiAgICBjb25zdCBudW1iZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbnVtYmVyMy50ZXh0Q29udGVudD0nMzArJ1xuICAgIGluZm9TdWJEaXYzLmFwcGVuZENoaWxkKGltZzMpXG4gICAgaW5mb1N1YkRpdjMuYXBwZW5kQ2hpbGQoaW5mb05hbWUzKVxuICAgIGluZm9TdWJEaXYzLmFwcGVuZENoaWxkKG51bWJlcjMpXG5cbiAgICBjb25zdCBpbmZvU3ViRGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgaW1nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nNC5zcmMgPSByZXN0cmF1SW5mb1NlY3RJbWdbM11cbiAgICBjb25zdCBpbmZvTmFtZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpbmZvTmFtZTQudGV4dENvbnRlbnQ9J0hhcHB5IGN1c3RvbWVycydcbiAgICBjb25zdCBudW1iZXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbnVtYmVyNC50ZXh0Q29udGVudD0nMjIwJ1xuICAgIGluZm9TdWJEaXY0LmFwcGVuZENoaWxkKGltZzQpXG4gICAgaW5mb1N1YkRpdjQuYXBwZW5kQ2hpbGQoaW5mb05hbWU0KVxuICAgIGluZm9TdWJEaXY0LmFwcGVuZENoaWxkKG51bWJlcjQpXG5cbiAgICByZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyLmFwcGVuZENoaWxkKGluZm9TdWJEaXYxKVxuICAgIHJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIuYXBwZW5kQ2hpbGQoaW5mb1N1YkRpdjIpXG4gICAgcmVzdHJhdUluZm9TZWN0QmxhY2tMYXllci5hcHBlbmRDaGlsZChpbmZvU3ViRGl2MylcbiAgICByZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyLmFwcGVuZENoaWxkKGluZm9TdWJEaXY0KVxuXG5cbiAgICByZXN0cmF1SW5mb1NlY3QuYXBwZW5kQ2hpbGQocmVzdHJhdUluZm9TZWN0QmxhY2tMYXllcilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHJlc3RyYXVJbmZvU2VjdClcblxufSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IHByb2ZpbGVJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGVzdGltb25pYWwoKXtcbmNvbnN0IHRlc3RpbW9uaWFsU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG50ZXN0aW1vbmlhbFNlY3QuY2xhc3NOYW1lPSdUZXN0aW1vbmlhbCdcbmNvbnN0IHRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbnRpdGxlMS50ZXh0Q29udGVudD0nVGVzdGltb25pYWxzJ1xuY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxudGl0bGUyLnRleHRDb250ZW50PSdXaGF0IG91ciBjbGllbnQgYXJlIHNheWluZydcbmNvbnN0IHRlc3RpbW9uaWFsQ2FyZFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudGVzdGltb25pYWxDYXJkU2VjdC5jbGFzc05hbWU9J3Rlc3RpbW9uaWFsQ2FyZFNlY3QnXG5jb25zdCB0ZXN0aW1vbmlhbENhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnRlc3RpbW9uaWFsQ2FyZHMuY2xhc3NOYW1lPSd0ZXN0aW1vbmlhbENhcmRzJ1xuY29uc3QgcHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5wcm9maWxlLmNsYXNzTmFtZT0ncHJvZmlsZSdcbnByb2ZpbGUuc3JjID0gcHJvZmlsZUltZ1swXVxuXG5jb25zdCBncmFzc0Nvcm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5ncmFzc0Nvcm5lci5jbGFzc05hbWU9J2dyYXNzQ29ybmVySW1nJ1xuZ3Jhc3NDb3JuZXIuc3JjID0gcHJvZmlsZUltZ1s3XVxuXG5jb25zdCByZXZpd2VQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5yZXZpd2VQYXJhLnRleHRDb250ZW50PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGRpYW0gcGVsbGVudGVzcXVlIGJpYmVuZHVtIG5vbiBkdWkgdm9sdXRwYXQgZnJpbmdpbGxhIGJpYmVuZHVtLiBVcm5hLCBlbGl0IGF1Z3VlIHVybmEsIHZpdGFlIGZldWdpYXQgcHJldGl1bSBkb25lYyBpZCBlbGVtZW50dW0uIFVsdHJpY2VzIG1hdHRpcyBzZWQgdml0YWUgbXVzIHJpc3VzLiBMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHNpdCBldSB2ZWxpdCBpbiBjb25zZXF1YXQuJ1xuXG5jb25zdCB0ZXN0aW1vbmlhbEdyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbnRlc3RpbW9uaWFsR3JlZW4uY2xhc3NOYW1lPSd0ZXN0aW1vbmlhbEdyZWVuJ1xudGVzdGltb25pYWxHcmVlbi5zcmM9cHJvZmlsZUltZ1sxXVxuY29uc3Qgc3RhclNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuc3RhclNlY3QuY2xhc3NOYW1lPSdzdGFyU2VjdCdcblxuY29uc3Qgc3RhcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuc3RhcjEuc3JjID0gcHJvZmlsZUltZ1syXVxuXG5jb25zdCBzdGFyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5zdGFyMi5zcmMgPSBwcm9maWxlSW1nWzJdXG5cbmNvbnN0IHN0YXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbnN0YXIzLnNyYyA9IHByb2ZpbGVJbWdbMl1cblxuY29uc3Qgc3RhcjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuc3RhcjQuc3JjID0gcHJvZmlsZUltZ1syXVxuXG5jb25zdCBzdGFyNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5zdGFyNS5zcmM9cHJvZmlsZUltZ1syXVxuY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxubmFtZS50ZXh0Q29udGVudCA9ICdBbGFtaW4gSGFzYW4nXG5cbmNvbnN0IGRlc2lnbmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5kZXNpZ25hdGlvbi5jbGFzc05hbWU9J2Rlc2lnbidcbmRlc2lnbmF0aW9uLnRleHRDb250ZW50PSdGb29kIFNwZWNpYWxpc3QnXG5cbmNvbnN0IHNsaWRlckRvdFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuc2xpZGVyRG90U2VjdC5jbGFzc05hbWU9J1NsaWRlckRvdCdcblxuY29uc3QgZG90MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBkb3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IGRvdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgZG90NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbnNsaWRlckRvdFNlY3QuYXBwZW5kQ2hpbGQoZG90MSlcbnNsaWRlckRvdFNlY3QuYXBwZW5kQ2hpbGQoZG90MilcbnNsaWRlckRvdFNlY3QuYXBwZW5kQ2hpbGQoZG90MylcbnNsaWRlckRvdFNlY3QuYXBwZW5kQ2hpbGQoZG90NClcblxuc3RhclNlY3QuYXBwZW5kQ2hpbGQoc3RhcjEpXG5zdGFyU2VjdC5hcHBlbmRDaGlsZChzdGFyMilcbnN0YXJTZWN0LmFwcGVuZENoaWxkKHN0YXIzKVxuc3RhclNlY3QuYXBwZW5kQ2hpbGQoc3RhcjQpXG5cbnRlc3RpbW9uaWFsU2VjdC5hcHBlbmRDaGlsZCh0aXRsZTEpXG50ZXN0aW1vbmlhbFNlY3QuYXBwZW5kQ2hpbGQodGl0bGUyKVxudGVzdGltb25pYWxDYXJkcy5hcHBlbmRDaGlsZChwcm9maWxlKVxudGVzdGltb25pYWxDYXJkU2VjdC5hcHBlbmRDaGlsZCh0ZXN0aW1vbmlhbENhcmRzKVxudGVzdGltb25pYWxDYXJkU2VjdC5hcHBlbmRDaGlsZChzbGlkZXJEb3RTZWN0KVxudGVzdGltb25pYWxDYXJkcy5hcHBlbmRDaGlsZChyZXZpd2VQYXJhKVxudGVzdGltb25pYWxDYXJkcy5hcHBlbmRDaGlsZChzdGFyU2VjdClcbnRlc3RpbW9uaWFsQ2FyZHMuYXBwZW5kQ2hpbGQobmFtZSlcbnRlc3RpbW9uaWFsQ2FyZHMuYXBwZW5kQ2hpbGQoZGVzaWduYXRpb24pXG50ZXN0aW1vbmlhbENhcmRTZWN0LmFwcGVuZENoaWxkKHRlc3RpbW9uaWFsR3JlZW4pXG50ZXN0aW1vbmlhbFNlY3QuYXBwZW5kQ2hpbGQoZ3Jhc3NDb3JuZXIpXG50ZXN0aW1vbmlhbFNlY3QuYXBwZW5kQ2hpbGQodGVzdGltb25pYWxDYXJkU2VjdClcbmNvbnRlbnQuYXBwZW5kQ2hpbGQodGVzdGltb25pYWxTZWN0KVxuXG5zZXRUaW1lb3V0KGFuaW1hdGlvbiwzMDAwKVxuZnVuY3Rpb24gYW5pbWF0aW9uKCl7XG4gICAgcHJvZmlsZS5zcmM9cHJvZmlsZUltZ1swXVxuICAgIG5hbWUudGV4dENvbnRlbnQ9J0FsYW1pbiBIYXNhbidcbiAgICBkZXNpZ25hdGlvbi50ZXh0Q29udGVudD0nRm9vZCBTcGVjaWFsaXN0J1xuICAgIHJldml3ZVBhcmEudGV4dENvbnRlbnQ9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgZGlhbSBwZWxsZW50ZXNxdWUgYmliZW5kdW0gbm9uIGR1aSB2b2x1dHBhdCBmcmluZ2lsbGEgYmliZW5kdW0uIFVybmEsIGVsaXQgYXVndWUgdXJuYSwgdml0YWUgZmV1Z2lhdCBwcmV0aXVtIGRvbmVjIGlkIGVsZW1lbnR1bS4gVWx0cmljZXMgbWF0dGlzIHNlZCB2aXRhZSBtdXMgcmlzdXMuIExhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgc2l0IGV1IHZlbGl0IGluIGNvbnNlcXVhdC4nXG4gICAgZG90MS5zdHlsZS5vcGFjaXR5PScxJ1xuICAgIGRvdDQuc3R5bGUub3BhY2l0eT0nMC40J1xuICAgIHNldFRpbWVvdXQoc2xpZGVyMSwzMDAwKVxuXG5cblxuXG5mdW5jdGlvbiBzbGlkZXIxKCl7XG4gICAgcHJvZmlsZS5zcmM9cHJvZmlsZUltZ1s0XVxuICAgIGRvdDQuc3R5bGUub3BhY2l0eT0nMC40J1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSAnVG9tIHdhcm5lcidcbiAgICBkZXNpZ25hdGlvbi50ZXh0Q29udGVudD0nQ3VzdG9tZXInXG4gICAgcmV2aXdlUGFyYS50ZXh0Q29udGVudD0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBkaWFtIHBlbGxlbnRlc3F1ZSBiaWJlbmR1bSBub24gZXQgYWMgZGFwaWJ1cyBzaXQgZXUgdmVsaXQgaW4gY29uc2VxdWF0LidcbiAgICBkb3QxLnN0eWxlLm9wYWNpdHk9JzAuNCdcbiAgICBkb3QyLnN0eWxlLm9wYWNpdHk9JzEnXG4gICAgc3RhclNlY3QucmVtb3ZlQ2hpbGQoc3RhcjQpXG5cbiAgICBzZXRUaW1lb3V0KHNsaWRlcjIsMzAwMClcbiAgICBcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2xpZGVyMigpe1xuICAgICAgICBwcm9maWxlLnNyYz1wcm9maWxlSW1nWzVdXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQ9J0NocmlzIGdlbGwnXG4gICAgICAgIGRlc2lnbmF0aW9uLnRleHRDb250ZW50PSdDdXN0b21lcidcbiAgICAgICAgcmV2aXdlUGFyYS50ZXh0Q29udGVudD0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBkaWFtICBlbGVtZW50dW0uIFVsdHJpY2VzIG1hdHRpcyBzZWQgdml0YWUgbXVzIHJpc3VzLiBMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHNpdCBldSB2ZWxpdCBpbiBjb25zZXF1YXQuJ1xuICAgICAgICBkb3QyLnN0eWxlLm9wYWNpdHk9JzAuNCdcbiAgICAgICAgZG90My5zdHlsZS5vcGFjaXR5PScxJ1xuICAgICAgICBzdGFyU2VjdC5hcHBlbmRDaGlsZChzdGFyNClcbiAgICAgICAgc3RhclNlY3QuYXBwZW5kQ2hpbGQoc3RhcjUpXG4gICAgICAgIHNldFRpbWVvdXQoc2xpZGVyMywzMDAwKVxuICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBzbGlkZXIzKCl7XG4gICAgICAgICAgICBwcm9maWxlLnNyYz1wcm9maWxlSW1nWzZdXG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50PSdUb2tveWEgd2Fsa2VyJ1xuICAgICAgICAgICAgZGVzaWduYXRpb24udGV4dENvbnRlbnQ9J0N1c3RvbWVyJ1xuICAgICAgICAgICAgcmV2aXdlUGFyYS50ZXh0Q29udGVudD0ndm9sdXRwYXQgZnJpbmdpbGxhIGJpYmVuZHVtLiBVcm5hLCBlbGl0IGF1Z3VlIHVybmEsIHZpdGFlIGZldWdpYXQgcHJldGl1bSBkb25lYyBpZCBlbGVtZW50dW0uIFVsdHJpY2VzIG1hdHRpcyBzZWQgdml0YWUgbXVzIHJpc3VzLiBMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHNpdCBldSB2ZWxpdCBpbiBjb25zZXF1YXQuJ1xuICAgICAgICAgICAgZG90My5zdHlsZS5vcGFjaXR5ID0nLjQnXG4gICAgICAgICAgICBkb3Q0LnN0eWxlLm9wYWNpdHk9JzEnXG4gICAgICAgICAgICBzdGFyU2VjdC5yZW1vdmVDaGlsZChzdGFyNSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYW5pbWF0aW9uLDMwMDApXG4gICAgICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiXG5pbXBvcnQgeyBXaHlJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIlxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV2h5Q2hvb3NlKCl7XG5cbiAgICBjb25zdCBtYWluU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICAgIG1haW5TZWN0LmNsYXNzTmFtZSA9J21haW5TZWN0J1xuXG4gICAgY29uc3QgbWVkaWFTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB3aHkxSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICB3aHkxSW1nLnNyYz1XaHlJbWdbMF1cbiAgICBjb25zdCB3aHkySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICB3aHkySW1nLnNyYz1XaHlJbWdbMV1cbiAgICBjb25zdCB3aHkzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICB3aHkzSW1nLnNyYz1XaHlJbWdbMl1cbiAgICBjb25zdCB3aHk0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICB3aHk0SW1nLnNyYz1XaHlJbWdbM11cbiAgICBjb25zdCB3aHk1SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICB3aHk1SW1nLnNyYz1XaHlJbWdbNF1cbiAgICBjb25zdCB3aHk2SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICB3aHk2SW1nLnNyYz1XaHlJbWdbNV1cblxuICAgIG1lZGlhU2VjdC5hcHBlbmRDaGlsZCh3aHkxSW1nKVxuICAgIG1lZGlhU2VjdC5hcHBlbmRDaGlsZCh3aHkySW1nKVxuICAgIG1lZGlhU2VjdC5hcHBlbmRDaGlsZCh3aHkzSW1nKVxuICAgIG1lZGlhU2VjdC5hcHBlbmRDaGlsZCh3aHk0SW1nKVxuICAgIG1lZGlhU2VjdC5hcHBlbmRDaGlsZCh3aHk1SW1nKVxuICAgIG1lZGlhU2VjdC5hcHBlbmRDaGlsZCh3aHk2SW1nKVxuXG4gICAgbWFpblNlY3QuYXBwZW5kQ2hpbGQobWVkaWFTZWN0KVxuXG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRleHRDb250ZW50LmNsYXNzTmFtZT0ndGV4Q29udGVudCdcbiAgICBjb25zdCBUaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgVGl0bGUxLnRleHRDb250ZW50PSdXaHkgQ2hvb3NlIHVzJ1xuICAgIGNvbnN0IFRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBUaXRsZTIuaW5uZXJIVE1MPSc8c3Bhbj5FeDwvc3Bhbj50cmEgb3JkaW5hcnkgdGFzdGUgPGJyPiBBbmQgRXhwZXJpYW5jZSdcblxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkZXNjLnRleHRDb250ZW50PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGRpYW0gcGVsbGVudGVzcXVlIGJpYmVuZHVtIG5vbiBkdWkgdm9sdXRwYXQgZnJpbmdpbGxhIGJpYmVuZHVtLiBVcm5hLCBlbGl0IGF1Z3VlIHVybmEsIHZpdGFlIGZldWdpYXQgcHJldGl1bSBkb25lYyBpZCBlbGVtZW50dW0uIFVsdHJpY2VzIG1hdHRpcyBzZWQgdml0YWUgbXVzIHJpc3VzLiBMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHNpdCBldSB2ZWxpdCBpbiBjb25zZXF1YXQuJ1xuXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoVGl0bGUxKVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKFRpdGxlMilcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChkZXNjKVxuXG4gICAgY29uc3QgbWVhbENhdFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lYWxDYXRTZWN0LmNsYXNzTmFtZT0nbWVhbENhdFNlY3QnXG4gICAgY29uc3QgZmFzdEZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IEx1bmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBEaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgRmFzdEZvb2RQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgRmFzdEZvb2RQLmNsYXNzTmFtZT0nRmFzdEZvb2RQJ1xuICAgIEZhc3RGb29kUC50ZXh0Q29udGVudD0nRmFzdCBGb29kJ1xuICAgIGNvbnN0IEx1bmNoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIEx1bmNoUC5jbGFzc05hbWU9J0x1bmNoUCdcbiAgICBMdW5jaFAudGV4dENvbnRlbnQ9J0x1bmNoJ1xuICAgIGNvbnN0IERpbm5lclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBEaW5uZXJQLmNsYXNzTmFtZT0nRGlubmVyUCdcbiAgICBEaW5uZXJQLnRleHRDb250ZW50PSdEaW5uZXInXG4gICAgY29uc3QgRXhwZXJpYW5jZVNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIEV4cGVyaWFuY2VTZWN0LmNsYXNzTmFtZT0nRXhwZXJpYW5jZVNlY3QnXG5cbiAgICBjb25zdCBFeHBlcmlhbmNlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIEV4cGVyaWFuY2VQLnRleHRDb250ZW50PSczMCsnXG4gICAgY29uc3QgRXhwZXJpYW5jZVAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgRXhwZXJpYW5jZVAyLmlubmVySFRNTD0nPHNwYW4+eWVhcnMgb2Y8L3NwYW4+IDxicj4gRXhwZXJpYW5jZWQnXG4gICAgbWVhbENhdFNlY3QuYXBwZW5kQ2hpbGQoZmFzdEZvb2QpXG4gICAgbWVhbENhdFNlY3QuYXBwZW5kQ2hpbGQoTHVuY2gpXG4gICAgbWVhbENhdFNlY3QuYXBwZW5kQ2hpbGQoRGlubmVyKVxuICAgIFxuXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQobWVhbENhdFNlY3QpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoRmFzdEZvb2RQKVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKEx1bmNoUClcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChEaW5uZXJQKVxuICAgIEV4cGVyaWFuY2VTZWN0LmFwcGVuZENoaWxkKEV4cGVyaWFuY2VQKVxuICAgIEV4cGVyaWFuY2VTZWN0LmFwcGVuZENoaWxkKEV4cGVyaWFuY2VQMilcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChFeHBlcmlhbmNlU2VjdClcbiAgICBtYWluU2VjdC5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudClcbiAgICBcblxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpblNlY3QpXG5cblxuXG5cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==