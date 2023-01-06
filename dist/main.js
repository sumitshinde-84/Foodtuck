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
___CSS_LOADER_EXPORT___.push([module.id, "\n.bodyPage {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    background-color: black;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size:100%;\n    background-position-x: 100px;\n    background-repeat: no-repeat;\n    overflow: auto;\n    overflow-x: hidden;\n    opacity: 1;\n    background-position: top;\n    \n}\n\n.headerForNav{\n    \n    grid-column: 1/14;\n    grid-row: 1/2;\n    background-color: var(--black-bg-clr);\n    display: flex;\n    align-items: center;\n    \n}\n\n\n\n.logoForHeader{\n    margin-left: 60px;\n}\n\n.navForHeader{\n\n    margin-left: 400px;\n}\n\n.headerForNav h1{\n    position: absolute;\n    top: 150px;\n    left: 570px;\n    font-family:  Helvetica, sans-serif;\n    color: white;\n}\n\n.headerForNav p{\n    position: absolute;\n    top: 190px;\n    left: 596px;\n    font-family:  Helvetica, sans-serif;\n    color:var(--primary-clr);\n}\n\n.headerForNav span{\n  \n    font-family:  Helvetica, sans-serif;\n    color:var(--white-clr);\n}\n\n\n.MenuBody{\n    grid-column: 1/14;\n    grid-row: 5/50;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 10px;\n    \n}\n\n.MenuBody img{\n    width: 380px;\n    height: 100%;\n    opacity: 1;\n}\n\n.MenuBody .one{\n    width: 940px;\n    height: 500px;\n    display: flex;\n    gap: 25px;\n    margin-top: 100px\n   \n    ;\n}\n\n\n\n.MenuBody  li{\n    margin: 20px 20px;\n    display: grid;\n    \n    grid-auto-flow: column;\n    grid-template-columns: 6fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    \n }\n\n .MenuBody  p:first-child{\n    grid-column: 1/6;\n    grid-row: 1/2;\n    color: black;\n    font-size: 15px;\n    font-family: 'Inter',sans-serif;\n    \n\n }\n\n\n\n .MenuBody  p:nth-child(2){\n    grid-column: 1/6;\n    grid-row: 2/3;\n    color: black;\n    font-family: 'Inter',sans-serif;\n    font-size: 12px;\n    font-weight: 300;\n    margin-top: -17px;\n }\n \n\n .MenuBody  p:nth-child(3){\n    \n    color: var(--primary-clr);\n    margin-left:100px;\n }\n\n .MenuBody h2{\n    font-size: 40px;\n    margin-left: 20px;\n    margin-bottom: 20px;\n    \n }\n\n\n .restrauInfoSectForHeader{\n   grid-column: 1 /14;\n   grid-row: 24/28;\n   background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n;\n}\n\n.MenuBody div:nth-child(3){\n\n    margin-top: 500px;\n    ;\n}\n\n.MenuBody .workWith{\n    \n    display: flex;\n    \n    gap: 50px;\n    position: absolute;\n    top:-350px;\n    left: 150px;\n    \n   \n}\n\n\n\n.MenuBody .workWith img{\n    width: 130px;\n    height: 130px;;\n\n    \n}\n\n.partner{\n    width: 100vw;\n    height: 400px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n   \n    \n}\n\n.partner p{\n   \nmargin-left: 43%;\nmargin-top: 60px;\n}\n\n.partner h2{\n    margin-left: 30%;\n    \n    }\n\n.contentSecondStyle{\n    width: 100vw;\nbackground-color:rgba(0, 0, 0, 0.804);\nheight: 100%;\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-template-columns: repeat(12,88px);\ngrid-template-rows: repeat(60,70px);\ngap:0px 24px;\nz-index: 1;\n}\n\n.footerClass{\n    grid-column: 1/14;\n    grid-row: 48/54;\n    padding: 30px  20px;\n    position: absolute;\n    top: 130px;\n    /* border: 1px var(--white-clr) solid; */\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/css/MenuPage.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,yDAA6C;IAC7C,oBAAoB;IACpB,4BAA4B;IAC5B,4BAA4B;IAC5B,cAAc;IACd,kBAAkB;IAClB,UAAU;IACV,wBAAwB;;AAE5B;;AAEA;;IAEI,iBAAiB;IACjB,aAAa;IACb,qCAAqC;IACrC,aAAa;IACb,mBAAmB;;AAEvB;;;;AAIA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,mCAAmC;IACnC,wBAAwB;AAC5B;;AAEA;;IAEI,mCAAmC;IACnC,sBAAsB;AAC1B;;;AAGA;IACI,iBAAiB;IACjB,cAAc;IACd,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;;AAEpB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,SAAS;IACT;;IAEA;AACJ;;;;AAIA;IACI,iBAAiB;IACjB,aAAa;;IAEb,sBAAsB;IACtB,8BAA8B;IAC9B,2BAA2B;;CAE9B;;CAEA;IACG,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,eAAe;IACf,+BAA+B;;;CAGlC;;;;CAIA;IACG,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,+BAA+B;IAC/B,eAAe;IACf,gBAAgB;IAChB,iBAAiB;CACpB;;;CAGA;;IAEG,yBAAyB;IACzB,iBAAiB;CACpB;;CAEA;IACG,eAAe;IACf,iBAAiB;IACjB,mBAAmB;;CAEtB;;;CAGA;GACE,kBAAkB;GAClB,eAAe;GACf,yDAAoD;;AAEvD;;AAEA;;IAEI,iBAAiB;;AAErB;;AAEA;;IAEI,aAAa;;IAEb,SAAS;IACT,kBAAkB;IAClB,UAAU;IACV,WAAW;;;AAGf;;;;AAIA;IACI,YAAY;IACZ,aAAa;;;AAGjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,kBAAkB;;;AAGtB;;AAEA;;AAEA,gBAAgB;AAChB,gBAAgB;AAChB;;AAEA;IACI,gBAAgB;;IAEhB;;AAEJ;IACI,YAAY;AAChB,qCAAqC;AACrC,YAAY;AACZ,aAAa;AACb,sBAAsB;AACtB,sCAAsC;AACtC,mCAAmC;AACnC,YAAY;AACZ,UAAU;AACV;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,wCAAwC;IACxC,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["\n.bodyPage {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    background-color: black;\n    background-image: url('../images/header.png');\n    background-size:100%;\n    background-position-x: 100px;\n    background-repeat: no-repeat;\n    overflow: auto;\n    overflow-x: hidden;\n    opacity: 1;\n    background-position: top;\n    \n}\n\n.headerForNav{\n    \n    grid-column: 1/14;\n    grid-row: 1/2;\n    background-color: var(--black-bg-clr);\n    display: flex;\n    align-items: center;\n    \n}\n\n\n\n.logoForHeader{\n    margin-left: 60px;\n}\n\n.navForHeader{\n\n    margin-left: 400px;\n}\n\n.headerForNav h1{\n    position: absolute;\n    top: 150px;\n    left: 570px;\n    font-family:  Helvetica, sans-serif;\n    color: white;\n}\n\n.headerForNav p{\n    position: absolute;\n    top: 190px;\n    left: 596px;\n    font-family:  Helvetica, sans-serif;\n    color:var(--primary-clr);\n}\n\n.headerForNav span{\n  \n    font-family:  Helvetica, sans-serif;\n    color:var(--white-clr);\n}\n\n\n.MenuBody{\n    grid-column: 1/14;\n    grid-row: 5/50;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 10px;\n    \n}\n\n.MenuBody img{\n    width: 380px;\n    height: 100%;\n    opacity: 1;\n}\n\n.MenuBody .one{\n    width: 940px;\n    height: 500px;\n    display: flex;\n    gap: 25px;\n    margin-top: 100px\n   \n    ;\n}\n\n\n\n.MenuBody  li{\n    margin: 20px 20px;\n    display: grid;\n    \n    grid-auto-flow: column;\n    grid-template-columns: 6fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    \n }\n\n .MenuBody  p:first-child{\n    grid-column: 1/6;\n    grid-row: 1/2;\n    color: black;\n    font-size: 15px;\n    font-family: 'Inter',sans-serif;\n    \n\n }\n\n\n\n .MenuBody  p:nth-child(2){\n    grid-column: 1/6;\n    grid-row: 2/3;\n    color: black;\n    font-family: 'Inter',sans-serif;\n    font-size: 12px;\n    font-weight: 300;\n    margin-top: -17px;\n }\n \n\n .MenuBody  p:nth-child(3){\n    \n    color: var(--primary-clr);\n    margin-left:100px;\n }\n\n .MenuBody h2{\n    font-size: 40px;\n    margin-left: 20px;\n    margin-bottom: 20px;\n    \n }\n\n\n .restrauInfoSectForHeader{\n   grid-column: 1 /14;\n   grid-row: 24/28;\n   background-image: url('../images/totalInfoSect.png');\n;\n}\n\n.MenuBody div:nth-child(3){\n\n    margin-top: 500px;\n    ;\n}\n\n.MenuBody .workWith{\n    \n    display: flex;\n    \n    gap: 50px;\n    position: absolute;\n    top:-350px;\n    left: 150px;\n    \n   \n}\n\n\n\n.MenuBody .workWith img{\n    width: 130px;\n    height: 130px;;\n\n    \n}\n\n.partner{\n    width: 100vw;\n    height: 400px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n   \n    \n}\n\n.partner p{\n   \nmargin-left: 43%;\nmargin-top: 60px;\n}\n\n.partner h2{\n    margin-left: 30%;\n    \n    }\n\n.contentSecondStyle{\n    width: 100vw;\nbackground-color:rgba(0, 0, 0, 0.804);\nheight: 100%;\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-template-columns: repeat(12,88px);\ngrid-template-rows: repeat(60,70px);\ngap:0px 24px;\nz-index: 1;\n}\n\n.footerClass{\n    grid-column: 1/14;\n    grid-row: 48/54;\n    padding: 30px  20px;\n    position: absolute;\n    top: 130px;\n    /* border: 1px var(--white-clr) solid; */\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/aboutPage.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/aboutPage.css ***!
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/play.png */ "./src/images/play.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/whychooseUs2.png */ "./src/images/whychooseUs2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Student.png */ "./src/images/Student.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Coffee (1).png */ "./src/images/Coffee (1).png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Person.png */ "./src/images/Person.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".AboutSectPage{\n\n    width: 80vw;\n    height: 100%;\n    display: flex;\n}\n\n\n.AboutSectPage .mediaSect {\n\n width: 50%;\n height:550px;\n /* border: 1px var(--primary-clr) solid; */\n display: grid;\n grid-template-columns: 1fr 1fr;\n grid-template-rows: 1fr 1fr;\n align-items: center;\n justify-content: center;\n \n\n \n\n}\n\n.AboutSectPage .mediaSect img:first-child{\n    width: 200px;\n    height: 350px;\n    grid-column: 1 / 2;\n    grid-row: 1/3;\n   \n\n}\n\n.AboutSectPage .mediaSect img:nth-child(2){\n    width: 180px;\n    height: 180px;\n    position: relative;\n    top: 80px;\n    right: 40px;\n   \n\n}\n\n.AboutSectPage .mediaSect img:last-child{\n    width: 180px;\n    height: 250px;\n    position: relative;\n    top: 30px;\n    right: 40px;\n\n}\n\n.AboutSectPage .textContent {\n    padding-top: 150px;\n    width: 50%;\n    height:550px;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column;\n    \n     \n   \n   }\n\n\n   .AboutSectPage .textContent h2{\n    \n    font-size: 30px;\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: -14px 35px;\n    \n   }\n\n   .AboutSectPage .textContent h1{\n\n    color: rgba(0, 0, 0, 0.915);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    margin: 10px 35px;\n    margin-bottom: 20px;\n   \n   }\n\n   .AboutSectPage .textContent p{\n\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.892);\n    width: 360px;\n    margin: 10px 35px;\n    font-family:'Inter', sans-serif;\n   \n    \n     \n   \n   }\n\n\n\n  .AboutSectPage  .button1{\n    padding: 12px 20px;\n    border-radius: 3px;\n  \n\n   }\n\n\n   .AboutSectPage .button2{\n    \n    padding: 21px;\n    width: 10px;\n    border-radius: 50%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    position: relative;\n    top: -60px;\n    left: 140px;\n\n\n   }\n\n   .AboutSectPage .btnPara{\n    \n    font-family: 'Inter',sans-serif;\n    font-weight: 600;\n    position: relative;\n    top: -110px;\n    left: 190px;\n   }\n\n   .whyChooseUs{\n    font-family:  Helvetica, sans-serif;\n    position:absolute;\n    top: 1000px;\n    width: 1050px;\n    height: 500px;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-right: 100px;\n\n   }\n\n   .whyChooseUs p{\n    position: relative;\n    top: 20px;\n    font-family:  Helvetica, sans-serif;\n    font-family: 300;\n    width: 400px;\n    text-align: center;\n   }\n\n   .whyChooseUs .whyImg {\n    background-position: center;\n    height: 250px;\n    width: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    margin-top: 40px;\n\n   }\n\n   .whyChooseUs .features{\n    width: 100%;\n    height: 200px;\n    /* height: ; */\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    gap: 250px;\n    \n   }\n\n   \n\n\n   .whyChooseUs .features > div:first-child{\n    width: 200px;\n    height: 150px;\n    /* border: 1px black solid; */\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: top;\n    background-size: 70px;\n   }\n\n   .whyChooseUs .features > div:nth-child(2){\n    width: 200px;\n    height: 150px;\n    /* border: 1px black solid; */\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: top;\n    background-size: 70px;\n   }\n\n\n   .whyChooseUs .features > div:last-child{\n    width: 200px;\n    height: 150px;\n    /* border: 1px black solid; */\n    position: absolute;\n    top: -160px;\n    left: 900px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: top;\n    background-size: 70px;\n   }\n\n   .whyChooseUs .features > div {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    top: 15px;\n\n   }\n\n\n   .whyChooseUs .features > div h2 {\n    margin-top: 80px;\n    margin-right: 20px;\n    font-size: 20px;\n\n\n   }\n\n   .whyChooseUs .features > div p {\n    margin-top: 80px;\n    margin-right: 20px;\n    font-size: 20px;\n    width: 200px;\n    font-size: 13px;\n    text-align: center;\n    position: absolute;\n    top: 30px;\n    left: -10px;\n    \n\n\n   }\n\n   .TestimonialSECT{\n    \n    grid-column: 2/11;\n    grid-row:32/38;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column; \n\n}\n   \n\n   \n", "",{"version":3,"sources":["webpack://./src/css/aboutPage.css"],"names":[],"mappings":"AAAA;;IAEI,WAAW;IACX,YAAY;IACZ,aAAa;AACjB;;;AAGA;;CAEC,UAAU;CACV,YAAY;CACZ,0CAA0C;CAC1C,aAAa;CACb,8BAA8B;CAC9B,2BAA2B;CAC3B,mBAAmB;CACnB,uBAAuB;;;;;AAKxB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,aAAa;;;AAGjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,WAAW;;;AAGf;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,WAAW;;AAEf;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;;;;GAIvB;;;GAGA;;IAEC,eAAe;IACf,gBAAgB;IAChB,yBAAyB;IACzB,mCAAmC;IACnC,kBAAkB;;GAEnB;;GAEA;;IAEC,2BAA2B;IAC3B,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,mBAAmB;;GAEpB;;GAEA;;IAEC,eAAe;IACf,2BAA2B;IAC3B,YAAY;IACZ,iBAAiB;IACjB,+BAA+B;;;;;GAKhC;;;;EAID;IACE,kBAAkB;IAClB,kBAAkB;;;GAGnB;;;GAGA;;IAEC,aAAa;IACb,WAAW;IACX,kBAAkB;IAClB,yDAA2C;IAC3C,4BAA4B;IAC5B,2BAA2B;IAC3B,kBAAkB;IAClB,UAAU;IACV,WAAW;;;GAGZ;;GAEA;;IAEC,+BAA+B;IAC/B,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,WAAW;GACZ;;GAEA;IACC,mCAAmC;IACnC,iBAAiB;IACjB,WAAW;IACX,aAAa;IACb,aAAa;IACb,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;;GAEpB;;GAEA;IACC,kBAAkB;IAClB,SAAS;IACT,mCAAmC;IACnC,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;GACnB;;GAEA;IACC,2BAA2B;IAC3B,aAAa;IACb,WAAW;IACX,yDAAmD;IACnD,gBAAgB;;GAEjB;;GAEA;IACC,WAAW;IACX,aAAa;IACb,cAAc;IACd,0CAA0C;IAC1C,aAAa;IACb,UAAU;;GAEX;;;;;GAKA;IACC,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,yDAA8C;IAC9C,4BAA4B;IAC5B,6BAA6B;IAC7B,0BAA0B;IAC1B,qBAAqB;GACtB;;GAEA;IACC,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,yDAAoD;IACpD,4BAA4B;IAC5B,6BAA6B;IAC7B,0BAA0B;IAC1B,qBAAqB;GACtB;;;GAGA;IACC,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,yDAA6C;IAC7C,4BAA4B;IAC5B,6BAA6B;IAC7B,0BAA0B;IAC1B,qBAAqB;GACtB;;GAEA;IACC,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;;GAEV;;;GAGA;IACC,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;;;GAGhB;;GAEA;IACC,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,WAAW;;;;GAIZ;;GAEA;;IAEC,iBAAiB;IACjB,cAAc;IACd,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;;AAE1B","sourcesContent":[".AboutSectPage{\n\n    width: 80vw;\n    height: 100%;\n    display: flex;\n}\n\n\n.AboutSectPage .mediaSect {\n\n width: 50%;\n height:550px;\n /* border: 1px var(--primary-clr) solid; */\n display: grid;\n grid-template-columns: 1fr 1fr;\n grid-template-rows: 1fr 1fr;\n align-items: center;\n justify-content: center;\n \n\n \n\n}\n\n.AboutSectPage .mediaSect img:first-child{\n    width: 200px;\n    height: 350px;\n    grid-column: 1 / 2;\n    grid-row: 1/3;\n   \n\n}\n\n.AboutSectPage .mediaSect img:nth-child(2){\n    width: 180px;\n    height: 180px;\n    position: relative;\n    top: 80px;\n    right: 40px;\n   \n\n}\n\n.AboutSectPage .mediaSect img:last-child{\n    width: 180px;\n    height: 250px;\n    position: relative;\n    top: 30px;\n    right: 40px;\n\n}\n\n.AboutSectPage .textContent {\n    padding-top: 150px;\n    width: 50%;\n    height:550px;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column;\n    \n     \n   \n   }\n\n\n   .AboutSectPage .textContent h2{\n    \n    font-size: 30px;\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: -14px 35px;\n    \n   }\n\n   .AboutSectPage .textContent h1{\n\n    color: rgba(0, 0, 0, 0.915);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    margin: 10px 35px;\n    margin-bottom: 20px;\n   \n   }\n\n   .AboutSectPage .textContent p{\n\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.892);\n    width: 360px;\n    margin: 10px 35px;\n    font-family:'Inter', sans-serif;\n   \n    \n     \n   \n   }\n\n\n\n  .AboutSectPage  .button1{\n    padding: 12px 20px;\n    border-radius: 3px;\n  \n\n   }\n\n\n   .AboutSectPage .button2{\n    \n    padding: 21px;\n    width: 10px;\n    border-radius: 50%;\n    background-image: url('../images/play.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    position: relative;\n    top: -60px;\n    left: 140px;\n\n\n   }\n\n   .AboutSectPage .btnPara{\n    \n    font-family: 'Inter',sans-serif;\n    font-weight: 600;\n    position: relative;\n    top: -110px;\n    left: 190px;\n   }\n\n   .whyChooseUs{\n    font-family:  Helvetica, sans-serif;\n    position:absolute;\n    top: 1000px;\n    width: 1050px;\n    height: 500px;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-right: 100px;\n\n   }\n\n   .whyChooseUs p{\n    position: relative;\n    top: 20px;\n    font-family:  Helvetica, sans-serif;\n    font-family: 300;\n    width: 400px;\n    text-align: center;\n   }\n\n   .whyChooseUs .whyImg {\n    background-position: center;\n    height: 250px;\n    width: 100%;\n    background-image: url('../images/whychooseUs2.png');\n    margin-top: 40px;\n\n   }\n\n   .whyChooseUs .features{\n    width: 100%;\n    height: 200px;\n    /* height: ; */\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    gap: 250px;\n    \n   }\n\n   \n\n\n   .whyChooseUs .features > div:first-child{\n    width: 200px;\n    height: 150px;\n    /* border: 1px black solid; */\n    background-image: url('../images/Student.png');\n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: top;\n    background-size: 70px;\n   }\n\n   .whyChooseUs .features > div:nth-child(2){\n    width: 200px;\n    height: 150px;\n    /* border: 1px black solid; */\n    background-image: url('../images/Coffee\\ \\(1\\).png');\n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: top;\n    background-size: 70px;\n   }\n\n\n   .whyChooseUs .features > div:last-child{\n    width: 200px;\n    height: 150px;\n    /* border: 1px black solid; */\n    position: absolute;\n    top: -160px;\n    left: 900px;\n    background-image: url('../images/Person.png');\n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: top;\n    background-size: 70px;\n   }\n\n   .whyChooseUs .features > div {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    top: 15px;\n\n   }\n\n\n   .whyChooseUs .features > div h2 {\n    margin-top: 80px;\n    margin-right: 20px;\n    font-size: 20px;\n\n\n   }\n\n   .whyChooseUs .features > div p {\n    margin-top: 80px;\n    margin-right: 20px;\n    font-size: 20px;\n    width: 200px;\n    font-size: 13px;\n    text-align: center;\n    position: absolute;\n    top: 30px;\n    left: -10px;\n    \n\n\n   }\n\n   .TestimonialSECT{\n    \n    grid-column: 2/11;\n    grid-row:32/38;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column; \n\n}\n   \n\n   \n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/blogPage.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/blogPage.css ***!
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Calendar.png */ "./src/images/Calendar.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Chats.png */ "./src/images/Chats.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/admin.png */ "./src/images/admin.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n.blogSectPage{\n    height:100%;\n    width: 80vw;\n   display: flex;\n    margin-top: 100px;\n    /* border: 1px var(--primary-clr) solid; */\n    \n    \n}\n\n.blogPage{\n    height: 100%;\n    width: 70%;\n\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows:repeat(4,600px) ;\n\n   \n    gap: 50px 0px;\n    /* border: 1px var(--primary-clr) solid;  */\n}\n\n .blogSectPage .profileDetail{\n   \n    width: 30%;\n    height: 60%;\n    /* background: #000; */\n}\n\n.blogPage > div:nth-child(1){\n    grid-column: 1/2;\n    grid-row: 1/2;\n    /* border: 1px black solid; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n\n}\n\n.blogPage > div:nth-child(2){\n    grid-column: 1/2;\n    grid-row: 2/3;\n    /* border: 1px black solid; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n}\n\n.blogPage > div:nth-child(3){\n    grid-column: 1/2;\n    grid-row: 3/4;\n    position: relative;\n    bottom: 500px;\n    height: 680px;\n    \n    /* border: 1px black solid; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n   \n    \n}\n\n.blogPage > div:last-child{\n\n    grid-column: 1/2;\n    grid-row: 4/5;\n    /* border: 1px black solid; */\n    display: flex;\n    flex-direction: column;\n    height: 600px;\n    align-items: center;\n    margin-top: 100px;\n    position: relative;\n}\n\n .blogSectPage .card .imgOfBlog {\n    height: 70%;\n    width: 90%;\n   \n}\n\n.detail{\n    display: flex;\n    height: 30px;\n    /* gap: 20px; */\n    width: 770px;\n    /* border: 1px var(--primary-clr) solid; */\n    position: absolute;\n   bottom: 140px;\n   left: 40px;\n   font-family: 'Inter',sans-serif;\n   font-weight: 300;\n    \n\n}\n\n.detail .date{\n    background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    width: 130px;\n    background-repeat: no-repeat;\n    padding-left: 30px;\n    align-items: center;\n    background-position-y: center;\n    display: flex;\n}\n\n.detail .msg{\n    background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    width: 80px;\n    background-repeat: no-repeat;\n    padding-left: 30px;\n    align-items: center;\n    display: flex;\n    background-position-y: center;\n}\n\n.Admin{\n    background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    width: 130px;\n    height: 30px;\n    background-repeat: no-repeat;\n    padding-left: 30px;\n    display: flex;\n    align-items: center;\n    background-position-y: center;\n    \n    position: absolute;\n    bottom: 140px;\n   height: 30px;\n   left: 220px;\n   font-family: 'Inter',sans-serif;\n   font-weight: 300;\n}\n\n\n.TextcontentBlog{\n    width: 770px;\n    height: 150px;\n    /* border: 1px var(--primary-clr) solid; */\n    margin-top: 40px;\n    margin-left: 40px;\n}\n\n.TextcontentBlog p:first-child{\n    font-size: 20px;\n    font-family: 'Inter',sans-serif;\n    font-weight: bold;\n    \n}\n\n.TextcontentBlog p:nth-child(2){\n    font-size: 15px;\n    font-family: 'Inter',sans-serif;\n    font-weight: light;\n    margin-top: 20px;\n    width: 750px;\n}\n\n.TextcontentBlog button{\n    padding: 12px 20px;\n    background: transparent;\n    border: 1px var(--primary-clr) solid;\n    border-radius: 5px;\n    margin-top: 10px;\n    color: var(--primary-clr);\n    transition: .5s;\n}\n\n.TextcontentBlog button:hover{\n    padding: 12px 20px;\n    background: var(--primary-clr);\n    border: 1px var(--primary-clr) solid;\n    border-radius: 5px;\n    margin-top: 10px;\n    color: var(--white-clr);\n}\n\n.blogPage > div:nth-child(3) .detail,.blogPage > div:nth-child(3) .Admin{\n    position: absolute;\n    bottom: 170px;\n}\n\n.blogSectPage .pageNumber {\n\n\n    width: 300px;\n    height: 50px;\n   \n    position: relative;\n    bottom:-2300px;\n    left: -730px;\n    display: flex;\n     align-items: center;\n     gap: 5px;\n     color: var(--primary-clr);\n}\n\n.blogSectPage .pageNumber div {\n\n\n   width: 45px;\n   height: 40px;\n   border: .004em rgba(0, 0, 0, 0.248) solid;\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   \n   \n\n\n}\n\n.blogSectPage .pageNumber div:hover ,.blogSectPage .pageNumber  p:hover {\n\n\n    width: 45px;\n    height: 40px;\n    border: .004em rgba(0, 0, 0, 0.248) solid;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n   color: var(--white-clr);\n    background-color: var(--primary-clr);\n    \n    \n \n \n }\n\n.blogSectPage .pageNumber  p {\n\n\n    \n    color: var(--primary-clr);\n    padding: 20px;\n \n \n }\n\n.blogSectPage .pageNumber div:nth-child(3) {\n\n\n    width: 50px;\n    height: 40px;\n    \n    position: absolute;\n    left: -50px;\n    \n   \n \n \n }\n\n\n", "",{"version":3,"sources":["webpack://./src/css/blogPage.css"],"names":[],"mappings":";;AAEA;IACI,WAAW;IACX,WAAW;GACZ,aAAa;IACZ,iBAAiB;IACjB,0CAA0C;;;AAG9C;;AAEA;IACI,YAAY;IACZ,UAAU;;IAEV,aAAa;IACb,0BAA0B;IAC1B,mCAAmC;;;IAGnC,aAAa;IACb,2CAA2C;AAC/C;;CAEC;;IAEG,UAAU;IACV,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;;AAEtB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,aAAa;;IAEb,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;;AAGvB;;AAEA;;IAEI,gBAAgB;IAChB,aAAa;IACb,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;;CAEC;IACG,WAAW;IACX,UAAU;;AAEd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,0CAA0C;IAC1C,kBAAkB;GACnB,aAAa;GACb,UAAU;GACV,+BAA+B;GAC/B,gBAAgB;;;AAGnB;;AAEA;IACI,wDAA8C;IAC9C,YAAY;IACZ,4BAA4B;IAC5B,kBAAkB;IAClB,mBAAmB;IACnB,6BAA6B;IAC7B,aAAa;AACjB;;AAEA;IACI,wDAA2C;IAC3C,WAAW;IACX,4BAA4B;IAC5B,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,wDAA2C;IAC3C,YAAY;IACZ,YAAY;IACZ,4BAA4B;IAC5B,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,6BAA6B;;IAE7B,kBAAkB;IAClB,aAAa;GACd,YAAY;GACZ,WAAW;GACX,+BAA+B;GAC/B,gBAAgB;AACnB;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,0CAA0C;IAC1C,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,+BAA+B;IAC/B,iBAAiB;;AAErB;;AAEA;IACI,eAAe;IACf,+BAA+B;IAC/B,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,oCAAoC;IACpC,kBAAkB;IAClB,gBAAgB;IAChB,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,8BAA8B;IAC9B,oCAAoC;IACpC,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;;;IAGI,YAAY;IACZ,YAAY;;IAEZ,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,aAAa;KACZ,mBAAmB;KACnB,QAAQ;KACR,yBAAyB;AAC9B;;AAEA;;;GAGG,WAAW;GACX,YAAY;GACZ,yCAAyC;GACzC,aAAa;GACb,mBAAmB;GACnB,uBAAuB;;;;;AAK1B;;AAEA;;;IAGI,WAAW;IACX,YAAY;IACZ,yCAAyC;IACzC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;GACxB,uBAAuB;IACtB,oCAAoC;;;;;CAKvC;;AAED;;;;IAII,yBAAyB;IACzB,aAAa;;;CAGhB;;AAED;;;IAGI,WAAW;IACX,YAAY;;IAEZ,kBAAkB;IAClB,WAAW;;;;;CAKd","sourcesContent":["\n\n.blogSectPage{\n    height:100%;\n    width: 80vw;\n   display: flex;\n    margin-top: 100px;\n    /* border: 1px var(--primary-clr) solid; */\n    \n    \n}\n\n.blogPage{\n    height: 100%;\n    width: 70%;\n\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows:repeat(4,600px) ;\n\n   \n    gap: 50px 0px;\n    /* border: 1px var(--primary-clr) solid;  */\n}\n\n .blogSectPage .profileDetail{\n   \n    width: 30%;\n    height: 60%;\n    /* background: #000; */\n}\n\n.blogPage > div:nth-child(1){\n    grid-column: 1/2;\n    grid-row: 1/2;\n    /* border: 1px black solid; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n\n}\n\n.blogPage > div:nth-child(2){\n    grid-column: 1/2;\n    grid-row: 2/3;\n    /* border: 1px black solid; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n}\n\n.blogPage > div:nth-child(3){\n    grid-column: 1/2;\n    grid-row: 3/4;\n    position: relative;\n    bottom: 500px;\n    height: 680px;\n    \n    /* border: 1px black solid; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n   \n    \n}\n\n.blogPage > div:last-child{\n\n    grid-column: 1/2;\n    grid-row: 4/5;\n    /* border: 1px black solid; */\n    display: flex;\n    flex-direction: column;\n    height: 600px;\n    align-items: center;\n    margin-top: 100px;\n    position: relative;\n}\n\n .blogSectPage .card .imgOfBlog {\n    height: 70%;\n    width: 90%;\n   \n}\n\n.detail{\n    display: flex;\n    height: 30px;\n    /* gap: 20px; */\n    width: 770px;\n    /* border: 1px var(--primary-clr) solid; */\n    position: absolute;\n   bottom: 140px;\n   left: 40px;\n   font-family: 'Inter',sans-serif;\n   font-weight: 300;\n    \n\n}\n\n.detail .date{\n    background-image:url('../images/Calendar.png');\n    width: 130px;\n    background-repeat: no-repeat;\n    padding-left: 30px;\n    align-items: center;\n    background-position-y: center;\n    display: flex;\n}\n\n.detail .msg{\n    background-image:url('../images/Chats.png');\n    width: 80px;\n    background-repeat: no-repeat;\n    padding-left: 30px;\n    align-items: center;\n    display: flex;\n    background-position-y: center;\n}\n\n.Admin{\n    background-image:url('../images/admin.png');\n    width: 130px;\n    height: 30px;\n    background-repeat: no-repeat;\n    padding-left: 30px;\n    display: flex;\n    align-items: center;\n    background-position-y: center;\n    \n    position: absolute;\n    bottom: 140px;\n   height: 30px;\n   left: 220px;\n   font-family: 'Inter',sans-serif;\n   font-weight: 300;\n}\n\n\n.TextcontentBlog{\n    width: 770px;\n    height: 150px;\n    /* border: 1px var(--primary-clr) solid; */\n    margin-top: 40px;\n    margin-left: 40px;\n}\n\n.TextcontentBlog p:first-child{\n    font-size: 20px;\n    font-family: 'Inter',sans-serif;\n    font-weight: bold;\n    \n}\n\n.TextcontentBlog p:nth-child(2){\n    font-size: 15px;\n    font-family: 'Inter',sans-serif;\n    font-weight: light;\n    margin-top: 20px;\n    width: 750px;\n}\n\n.TextcontentBlog button{\n    padding: 12px 20px;\n    background: transparent;\n    border: 1px var(--primary-clr) solid;\n    border-radius: 5px;\n    margin-top: 10px;\n    color: var(--primary-clr);\n    transition: .5s;\n}\n\n.TextcontentBlog button:hover{\n    padding: 12px 20px;\n    background: var(--primary-clr);\n    border: 1px var(--primary-clr) solid;\n    border-radius: 5px;\n    margin-top: 10px;\n    color: var(--white-clr);\n}\n\n.blogPage > div:nth-child(3) .detail,.blogPage > div:nth-child(3) .Admin{\n    position: absolute;\n    bottom: 170px;\n}\n\n.blogSectPage .pageNumber {\n\n\n    width: 300px;\n    height: 50px;\n   \n    position: relative;\n    bottom:-2300px;\n    left: -730px;\n    display: flex;\n     align-items: center;\n     gap: 5px;\n     color: var(--primary-clr);\n}\n\n.blogSectPage .pageNumber div {\n\n\n   width: 45px;\n   height: 40px;\n   border: .004em rgba(0, 0, 0, 0.248) solid;\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   \n   \n\n\n}\n\n.blogSectPage .pageNumber div:hover ,.blogSectPage .pageNumber  p:hover {\n\n\n    width: 45px;\n    height: 40px;\n    border: .004em rgba(0, 0, 0, 0.248) solid;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n   color: var(--white-clr);\n    background-color: var(--primary-clr);\n    \n    \n \n \n }\n\n.blogSectPage .pageNumber  p {\n\n\n    \n    color: var(--primary-clr);\n    padding: 20px;\n \n \n }\n\n.blogSectPage .pageNumber div:nth-child(3) {\n\n\n    width: 50px;\n    height: 40px;\n    \n    position: absolute;\n    left: -50px;\n    \n   \n \n \n }\n\n\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n\n.FromMenuMain{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    grid-column: 2/11;\n    grid-row: 42/45;\n   \n    position: relative;\n}\n\n.FromMenuMain h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 10px 35px;;\n    position: absolute;\n    left: 40%;\n    top: -110px;\n}\n\n.FromMenuMain h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    margin: 10px 35px;\n    position: absolute;\n    left: 30%;\n    top: -80px;\n}\n\n.FromMenuMain span{\n    color: var(--primary-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n}\n\n.nav{\n    /* position: absolute;\n    top: 25%; */\n}\n.nav ul li{\n    padding: 0px 20px;\n}\n\n.menuListSect{\n    width: 750px;\n    height: 320px;\n   \n    display: flex;\n    /* margin-top: auto */\n}\n\n\n.menuListSect div:first-child{\n    width: 250px;\n    height: 320px;\n    \n    \n}\n\n.menuSect{\n    width:750px;\n    height: 320px;\n    margin-top: 20px;\n    \n}\n\n.menuSect img{\n    width: 40px;\n}\n\n.menuSect ul{\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px 0px;\n    flex-wrap: wrap;\n}\n\n.menuSect li{\n    display: flex;\n    gap: 10px;\n    align-items: flex-start;\n    width:fit-content;\n   \n    justify-content: center;\n    align-items: center;\n}\n\n.foodItemImgSect{\n    width: 45px !important;\n    height: 45px !important;\n}\n\n.menuSect li img{\n    \n    \n\n}\n.menuSect li p:nth-child(1){\nfont-size: 12px;\n\n}\n\n.menuSect li p:nth-child(2){\n    font-size: 10px;\n    font-weight: 300;\n    \n    }\n\n.menuSect li p:nth-child(3){\n        font-size: 11px;\n        color: var(--primary-clr);\n}\n\n\n.displayDish img{\n    width: 200px;\n    margin-top: 20px;\n}\n\n.TestimonialSECT{\n    \n    grid-column: 2/11;\n    grid-row: 54/60;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column; \n\n}", "",{"version":3,"sources":["webpack://./src/css/fromMenu.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,iBAAiB;IACjB,eAAe;;IAEf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,mCAAmC;IACnC,iBAAiB;IACjB,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,uBAAuB;IACvB,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,kCAAkC;IAClC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI;eACW;AACf;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,qBAAqB;AACzB;;;AAGA;IACI,YAAY;IACZ,aAAa;;;AAGjB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,gBAAgB;;AAEpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,iBAAiB;;IAEjB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;;;;AAIA;AACA;AACA,eAAe;;AAEf;;AAEA;IACI,eAAe;IACf,gBAAgB;;IAEhB;;AAEJ;QACQ,eAAe;QACf,yBAAyB;AACjC;;;AAGA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;;IAEI,iBAAiB;IACjB,eAAe;IACf,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;;AAE1B","sourcesContent":["*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n\n.FromMenuMain{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    grid-column: 2/11;\n    grid-row: 42/45;\n   \n    position: relative;\n}\n\n.FromMenuMain h2{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 10px 35px;;\n    position: absolute;\n    left: 40%;\n    top: -110px;\n}\n\n.FromMenuMain h1{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    margin: 10px 35px;\n    position: absolute;\n    left: 30%;\n    top: -80px;\n}\n\n.FromMenuMain span{\n    color: var(--primary-clr);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n}\n\n.nav{\n    /* position: absolute;\n    top: 25%; */\n}\n.nav ul li{\n    padding: 0px 20px;\n}\n\n.menuListSect{\n    width: 750px;\n    height: 320px;\n   \n    display: flex;\n    /* margin-top: auto */\n}\n\n\n.menuListSect div:first-child{\n    width: 250px;\n    height: 320px;\n    \n    \n}\n\n.menuSect{\n    width:750px;\n    height: 320px;\n    margin-top: 20px;\n    \n}\n\n.menuSect img{\n    width: 40px;\n}\n\n.menuSect ul{\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px 0px;\n    flex-wrap: wrap;\n}\n\n.menuSect li{\n    display: flex;\n    gap: 10px;\n    align-items: flex-start;\n    width:fit-content;\n   \n    justify-content: center;\n    align-items: center;\n}\n\n.foodItemImgSect{\n    width: 45px !important;\n    height: 45px !important;\n}\n\n.menuSect li img{\n    \n    \n\n}\n.menuSect li p:nth-child(1){\nfont-size: 12px;\n\n}\n\n.menuSect li p:nth-child(2){\n    font-size: 10px;\n    font-weight: 300;\n    \n    }\n\n.menuSect li p:nth-child(3){\n        font-size: 11px;\n        color: var(--primary-clr);\n}\n\n\n.displayDish img{\n    width: 200px;\n    margin-top: 20px;\n}\n\n.TestimonialSECT{\n    \n    grid-column: 2/11;\n    grid-row: 54/60;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column; \n\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "main{\n\n    grid-column: 2/13;\n  grid-row: 3/8;\n  display: flex;\n  \n  \n}\n\nmain .textContent{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 48%;\n    height: 100%;\n    border: none;\n    outline: none;\n    border-left:1px var(--white-clr) solid;\n    position: relative;\n    \n    \n}\n\n.socialSect{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    background-color: black;\n    height: 150px;\n   align-items: center;\n   justify-content: center;\n    position: absolute;\n    top:30%;\n    left: -10px;\n   \n}\n\n.socialSect img{\n    height: 14px;\n    width:14px;\n    \n}\n\n.textContent button {\n    background-color: var(--primary-clr);\n    outline: none;\n    border: none;\n    padding: 12px 20px;\n    width:120px;\n    border-radius: 20px;\n    margin:10px  35px;\n    font-size: 15px;\n    color: var(--white-clr);\n}\n\n.textContent p{\n    font-size: 14px;\ncolor: var(--white-clr);\nwidth: 390px;\nmargin: 10px 35px;\nfont-family:'Inter', sans-serif;\n}\n\n.textContent .heading2{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 350px;\n    font-size: 40px;\n    margin: 10px 35px;\n}\n\n\n.textContent .heading1{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 10px 35px;\n    \n}\n\n\n.imageSect{\n    width: 50%;\n    height: 130%;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-size: 98%;\n    background-position-x: center;\n    margin-right: 10%;\n    background-repeat: no-repeat;\n    \n}\n\n", "",{"version":3,"sources":["webpack://./src/css/home.css"],"names":[],"mappings":"AAGA;;IAEI,iBAAiB;EACnB,aAAa;EACb,aAAa;;;AAGf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,kBAAkB;;;AAGtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,uBAAuB;IACvB,aAAa;GACd,mBAAmB;GACnB,uBAAuB;IACtB,kBAAkB;IAClB,OAAO;IACP,WAAW;;AAEf;;AAEA;IACI,YAAY;IACZ,UAAU;;AAEd;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB,uBAAuB;AACvB,YAAY;AACZ,iBAAiB;AACjB,+BAA+B;AAC/B;;AAEA;IACI,uBAAuB;IACvB,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;;AAGA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,mCAAmC;IACnC,iBAAiB;;AAErB;;;AAGA;IACI,UAAU;IACV,YAAY;IACZ,mDAAyC;IACzC,sBAAsB;IACtB,oBAAoB;IACpB,6BAA6B;IAC7B,iBAAiB;IACjB,4BAA4B;;AAEhC","sourcesContent":["@import './varriables.css';\n@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@200;300;400;500;600;700;800;900&display=swap');\n\nmain{\n\n    grid-column: 2/13;\n  grid-row: 3/8;\n  display: flex;\n  \n  \n}\n\nmain .textContent{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 48%;\n    height: 100%;\n    border: none;\n    outline: none;\n    border-left:1px var(--white-clr) solid;\n    position: relative;\n    \n    \n}\n\n.socialSect{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    background-color: black;\n    height: 150px;\n   align-items: center;\n   justify-content: center;\n    position: absolute;\n    top:30%;\n    left: -10px;\n   \n}\n\n.socialSect img{\n    height: 14px;\n    width:14px;\n    \n}\n\n.textContent button {\n    background-color: var(--primary-clr);\n    outline: none;\n    border: none;\n    padding: 12px 20px;\n    width:120px;\n    border-radius: 20px;\n    margin:10px  35px;\n    font-size: 15px;\n    color: var(--white-clr);\n}\n\n.textContent p{\n    font-size: 14px;\ncolor: var(--white-clr);\nwidth: 390px;\nmargin: 10px 35px;\nfont-family:'Inter', sans-serif;\n}\n\n.textContent .heading2{\n    color: var(--white-clr);\n    font-family: Helvetica, sans-serif;\n    width: 350px;\n    font-size: 40px;\n    margin: 10px 35px;\n}\n\n\n.textContent .heading1{\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: 10px 35px;\n    \n}\n\n\n.imageSect{\n    width: 50%;\n    height: 130%;\n    background: url('../images/homeDish.png');\n    background-size: cover;\n    background-size: 98%;\n    background-position-x: center;\n    margin-right: 10%;\n    background-repeat: no-repeat;\n    \n}\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pageHeader_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./pageHeader.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/pageHeader.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blogPage_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./blogPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/blogPage.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shop_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./shop.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/shop.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_aboutPage_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./aboutPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/aboutPage.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_20__);
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
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_pageHeader_css__WEBPACK_IMPORTED_MODULE_16__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blogPage_css__WEBPACK_IMPORTED_MODULE_17__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_shop_css__WEBPACK_IMPORTED_MODULE_18__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_aboutPage_css__WEBPACK_IMPORTED_MODULE_19__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_20___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.body{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    background-color: var(--black-bg-clr);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-position-x: 100px;\n    background-repeat: no-repeat;\n    overflow: auto;\n   \n   overflow-x: hidden;\n    background-position: top;\n    \n}\n\n\n\n.content{\nwidth: 100vw;\nbackground-color:rgba(0, 0, 0, 0.804);\nheight: 120%;\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-template-columns: repeat(12,88px);\ngrid-template-rows: repeat(80,70px);\ngap:0px 24px;\nz-index: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAoBA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,qCAAqC;IACrC,yDAA6C;IAC7C,sBAAsB;IACtB,4BAA4B;IAC5B,4BAA4B;IAC5B,cAAc;;GAEf,kBAAkB;IACjB,wBAAwB;;AAE5B;;;;AAIA;AACA,YAAY;AACZ,qCAAqC;AACrC,YAAY;AACZ,aAAa;AACb,sBAAsB;AACtB,sCAAsC;AACtC,mCAAmC;AACnC,YAAY;AACZ,UAAU;AACV","sourcesContent":["@import './varriables.css';\n@import \"./header.css\";\n@import './home.css';\n@import './footer.css';\n@import './about.css';\n@import './foodCat.css';\n@import './WhyChoose.css';\n@import './restrauInfoSect.css';\n@import './fromMenu.css';\n@import './ourChef.css';\n@import './testimonial.css';\n@import './restrauActive.css';\n@import './blog.css';\n@import './MenuPage.css';\n@import './pageHeader.css';\n@import './blogPage.css';\n@import './shop.css';\n@import './aboutPage.css';\n\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.body{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    background-color: var(--black-bg-clr);\n    background-image: url('../images/mainbg.png');\n    background-size: cover;\n    background-position-x: 100px;\n    background-repeat: no-repeat;\n    overflow: auto;\n   \n   overflow-x: hidden;\n    background-position: top;\n    \n}\n\n\n\n.content{\nwidth: 100vw;\nbackground-color:rgba(0, 0, 0, 0.804);\nheight: 120%;\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-template-columns: repeat(12,88px);\ngrid-template-rows: repeat(80,70px);\ngap:0px 24px;\nz-index: 1;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/pageHeader.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/pageHeader.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/shop.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/shop.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/header.png */ "./src/images/header.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/search.png */ "./src/images/search.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Banner.png */ "./src/images/Banner.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.footerShop{\n    padding: 30px  20px;\n  grid-column: 1/14;\n  grid-row: 30/36;\n  /* border: 1px var(--white-clr) solid; */\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n\n.bodyPageForShop{\n    height: 80vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    background-color: black;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size:100%;\n    background-position-x: 100px;\n    background-repeat: no-repeat;\n    overflow: auto;\n    overflow-x: hidden;\n    opacity: 1;\n    background-position: top;  \n}\n\n\n.shopBody{\n    grid-column: 1/14;\n    grid-row: 5/30;\n    background-color: white;\n    display: flex;\n;\n    align-items: center;\n    margin-top: 10px;\n    justify-content: center;\n}\n\n.shopSect{\n    \n    width:80vw;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    margin-left: -200px;\n    \n    \n}\n\n.shopList{\n   \n    width: 50%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 15px;\n\n    margin-top: 80px;\n    margin-bottom: 100px;\n}\n\n.shopList .item:nth-child(3){\n  \n  display: none;\n    \n}\n\n.shopSect .item{\n    width: 200px;\n    height: 200px;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n   \n   \n}\n\n\n.shopSect .item img{\n    width: 195px;\n    height:150px ;\n}\n\n.shopSect .item .itemName{\n    position: relative;\n    top: 10px;\n    right: 55px;\n    font-size: 15px;\n    font-family: 'Inter',sans-serif;\n    font-weight: 400;\n\n}\n\n.shopSect .item p:last-child{\n    position: relative;\n    top: 15px;\n    right:80px;\n    font-size: 15px;\n    font-family: 'Inter',sans-serif;\n    font-weight: 400;\n\n}\n\n.shopBody .profileDetail{\n    display: flex;\n    flex-direction: column;\n    border: 1px solid rgba(0, 0, 0, 0.098);\n    width: 20%;\n    height: 60%;\n    margin-top: -540px;\n    align-items: center;\n    position: relative;\n    right: 100px;\n    \n    \n}\n\n.shopBody .profileDetail .inputSect input{\n    \n    width: 160px;\n    height: 30px;\n    /* border: 1px solid var(--primary-clr); */\n    outline: none;\n    border: none;\n    background-color: rgb(229, 227, 227);\n    padding-left: 10px;\n        \n    }\n\n.shopBody .profileDetail .inputSect{\n    \nwidth: 200px;\nheight: 34px;\n/* border: 1px solid black; */\nbackground-color: rgb(229, 227, 227);\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin-top: 30px;\n\n    \n}\n\n.shopBody .profileDetail .inputSect .InputICON{\n    width: 50px;\n    height: 35px;\n    background-color: var(--primary-clr);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-size: 20px;\n    background-position: center;\n    \n}\n\n.profileDetail .checkList{\n    display: flex;\n    flex-direction: column;\n    margin-right: auto;\n    margin-left: 40px;\n    margin-top: 20px;\n    font-family: 'Inter',sans-serif;\n    gap: 8px;\n}\n\n.profileDetail .checkList .checkPara{\n    display: flex;\n    gap: 5px;\n}\n\n.profileDetail .checkList h2{\n    font-size: 18px;\n    font-weight: 600\n    ;\n\n}\n\n.advertise{\nwidth: 200px;\nheight: 240px;\nmargin-top: 30px;\nbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\nbackground-size: contain;\nbackground-repeat: no-repeat;\n\n}\n\n.latestPr{\n    width: 150px;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Inter',sans-serif;\n    justify-content: flex-start;\n    margin-right: 30px;\n    \n\n}\n\n.listPr{\n    display: grid;\n    grid-template-columns: 40px 30px;\n    grid-template-rows: 1fr 1fr;\n    gap: 5px ;\n\n}\n\n.latestPr img{\n\n    width: 40px;\n    grid-column: 1/2;\n    grid-row: 1/3;\n    margin-right: 10px;\n}\n\n.latestPr .listPr p:last-child{\n\n    font-size: 12px;\n    \n   \n    \n}\n.profileDetail .latestPr h2{\n    font-size: 18px;\n    font-weight: 600;\n    margin-bottom: 15px;\n    margin-top: 20px;\n\n}", "",{"version":3,"sources":["webpack://./src/css/shop.css"],"names":[],"mappings":";AACA;IACI,mBAAmB;EACrB,iBAAiB;EACjB,eAAe;EACf,wCAAwC;EACxC,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;;AAGA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,yDAA6C;IAC7C,oBAAoB;IACpB,4BAA4B;IAC5B,4BAA4B;IAC5B,cAAc;IACd,kBAAkB;IAClB,UAAU;IACV,wBAAwB;AAC5B;;;AAGA;IACI,iBAAiB;IACjB,cAAc;IACd,uBAAuB;IACvB,aAAa;;IAEb,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;;IAEI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;;AAGvB;;AAEA;;IAEI,UAAU;IACV,aAAa;IACb,kCAAkC;IAClC,SAAS;;IAET,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;;EAEE,aAAa;;AAEf;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;;;AAGtB;;;AAGA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,eAAe;IACf,+BAA+B;IAC/B,gBAAgB;;AAEpB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,eAAe;IACf,+BAA+B;IAC/B,gBAAgB;;AAEpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sCAAsC;IACtC,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;;;AAGhB;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,0CAA0C;IAC1C,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;;IAElB;;AAEJ;;AAEA,YAAY;AACZ,YAAY;AACZ,6BAA6B;AAC7B,oCAAoC;AACpC,aAAa;AACb,uBAAuB;AACvB,mBAAmB;AACnB,gBAAgB;;;AAGhB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,yDAA6C;IAC7C,4BAA4B;IAC5B,qBAAqB;IACrB,2BAA2B;;AAE/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,+BAA+B;IAC/B,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf;IACA;;AAEJ;;AAEA;AACA,YAAY;AACZ,aAAa;AACb,gBAAgB;AAChB,yDAA6C;AAC7C,wBAAwB;AACxB,4BAA4B;;AAE5B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,+BAA+B;IAC/B,2BAA2B;IAC3B,kBAAkB;;;AAGtB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,2BAA2B;IAC3B,SAAS;;AAEb;;AAEA;;IAEI,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,kBAAkB;AACtB;;AAEA;;IAEI,eAAe;;;;AAInB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;;AAEpB","sourcesContent":["\n.footerShop{\n    padding: 30px  20px;\n  grid-column: 1/14;\n  grid-row: 30/36;\n  /* border: 1px var(--white-clr) solid; */\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n\n.bodyPageForShop{\n    height: 80vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    background-color: black;\n    background-image: url('../images/header.png');\n    background-size:100%;\n    background-position-x: 100px;\n    background-repeat: no-repeat;\n    overflow: auto;\n    overflow-x: hidden;\n    opacity: 1;\n    background-position: top;  \n}\n\n\n.shopBody{\n    grid-column: 1/14;\n    grid-row: 5/30;\n    background-color: white;\n    display: flex;\n;\n    align-items: center;\n    margin-top: 10px;\n    justify-content: center;\n}\n\n.shopSect{\n    \n    width:80vw;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    margin-left: -200px;\n    \n    \n}\n\n.shopList{\n   \n    width: 50%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 15px;\n\n    margin-top: 80px;\n    margin-bottom: 100px;\n}\n\n.shopList .item:nth-child(3){\n  \n  display: none;\n    \n}\n\n.shopSect .item{\n    width: 200px;\n    height: 200px;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n   \n   \n}\n\n\n.shopSect .item img{\n    width: 195px;\n    height:150px ;\n}\n\n.shopSect .item .itemName{\n    position: relative;\n    top: 10px;\n    right: 55px;\n    font-size: 15px;\n    font-family: 'Inter',sans-serif;\n    font-weight: 400;\n\n}\n\n.shopSect .item p:last-child{\n    position: relative;\n    top: 15px;\n    right:80px;\n    font-size: 15px;\n    font-family: 'Inter',sans-serif;\n    font-weight: 400;\n\n}\n\n.shopBody .profileDetail{\n    display: flex;\n    flex-direction: column;\n    border: 1px solid rgba(0, 0, 0, 0.098);\n    width: 20%;\n    height: 60%;\n    margin-top: -540px;\n    align-items: center;\n    position: relative;\n    right: 100px;\n    \n    \n}\n\n.shopBody .profileDetail .inputSect input{\n    \n    width: 160px;\n    height: 30px;\n    /* border: 1px solid var(--primary-clr); */\n    outline: none;\n    border: none;\n    background-color: rgb(229, 227, 227);\n    padding-left: 10px;\n        \n    }\n\n.shopBody .profileDetail .inputSect{\n    \nwidth: 200px;\nheight: 34px;\n/* border: 1px solid black; */\nbackground-color: rgb(229, 227, 227);\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin-top: 30px;\n\n    \n}\n\n.shopBody .profileDetail .inputSect .InputICON{\n    width: 50px;\n    height: 35px;\n    background-color: var(--primary-clr);\n    background-image: url('../images/search.png');\n    background-repeat: no-repeat;\n    background-size: 20px;\n    background-position: center;\n    \n}\n\n.profileDetail .checkList{\n    display: flex;\n    flex-direction: column;\n    margin-right: auto;\n    margin-left: 40px;\n    margin-top: 20px;\n    font-family: 'Inter',sans-serif;\n    gap: 8px;\n}\n\n.profileDetail .checkList .checkPara{\n    display: flex;\n    gap: 5px;\n}\n\n.profileDetail .checkList h2{\n    font-size: 18px;\n    font-weight: 600\n    ;\n\n}\n\n.advertise{\nwidth: 200px;\nheight: 240px;\nmargin-top: 30px;\nbackground-image: url('../images/Banner.png');\nbackground-size: contain;\nbackground-repeat: no-repeat;\n\n}\n\n.latestPr{\n    width: 150px;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Inter',sans-serif;\n    justify-content: flex-start;\n    margin-right: 30px;\n    \n\n}\n\n.listPr{\n    display: grid;\n    grid-template-columns: 40px 30px;\n    grid-template-rows: 1fr 1fr;\n    gap: 5px ;\n\n}\n\n.latestPr img{\n\n    width: 40px;\n    grid-column: 1/2;\n    grid-row: 1/3;\n    margin-right: 10px;\n}\n\n.latestPr .listPr p:last-child{\n\n    font-size: 12px;\n    \n   \n    \n}\n.profileDetail .latestPr h2{\n    font-size: 18px;\n    font-weight: 600;\n    margin-bottom: 15px;\n    margin-top: 20px;\n\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_shop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/shop */ "./src/modules/shop.js");
/* harmony import */ var _modules_aboutPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/aboutPage */ "./src/modules/aboutPage.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _modules_ourChef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/ourChef */ "./src/modules/ourChef.js");
/* harmony import */ var _modules_blog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/blog */ "./src/modules/blog.js");















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
;(0,_modules_ourChef__WEBPACK_IMPORTED_MODULE_13__.createOurChef)()
;(0,_modules_testimonial__WEBPACK_IMPORTED_MODULE_8__.createTestimonial)()
;(0,_modules_restrauActive__WEBPACK_IMPORTED_MODULE_9__.createRestrauActive)()
;(0,_modules_blog__WEBPACK_IMPORTED_MODULE_14__.createBlog)()
;(0,_modules_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)();


const footer = document.querySelector('footer')
footer.removeAttribute('class')
footer.className='footer'

}

loadAllhomeComponents()

/***/ }),

/***/ "./src/modules/aboutPage.js":
/*!**********************************!*\
  !*** ./src/modules/aboutPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAboutPage": () => (/* binding */ createAboutPage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _pageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageHeader */ "./src/modules/pageHeader.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images */ "./src/modules/images.js");
/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testimonial */ "./src/modules/testimonial.js");
/* harmony import */ var _fromMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fromMenu */ "./src/modules/fromMenu.js");



 
 
 function createAboutPage(){

    (0,_pageHeader__WEBPACK_IMPORTED_MODULE_1__.createPageHeader)('About','About Us')
    
    const aboutBody = document.querySelector('.MenuBody')
    
    const AboutSect = document.createElement('div')
    AboutSect.className='AboutSectPage'

    const mediaSect = document.createElement('div')
    mediaSect.className='mediaSect'

    const img1 = document.createElement('img')
    img1.src = _images__WEBPACK_IMPORTED_MODULE_2__.aboutPage[0]
    const img2 = document.createElement('img')
    img2.src = _images__WEBPACK_IMPORTED_MODULE_2__.aboutPage[1]
    const img3 = document.createElement('img')
    img3.src = _images__WEBPACK_IMPORTED_MODULE_2__.aboutPage[2]

    mediaSect.appendChild(img1)
    mediaSect.appendChild(img2)
    mediaSect.appendChild(img3)

    
    const textContent = document.createElement('div')
    textContent.className='textContent'

    const title1 = document.createElement('h2')
    title1.textContent='About us ___'

    const title2 = document.createElement('h1')
    title2.textContent='Food is an important part Of a balanced Diet'

    const para = document.createElement('p')
    para.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.`

    const btn1 = document.createElement('button')
    btn1.className='button1'
    btn1.textContent='Show more'
    

    const bnt2 = document.createElement('button')
    bnt2.className='button2'

    const btnpara = document.createElement('p')
    btnpara.textContent='Watch video'
    btnpara.className='btnPara'
    
    AboutSect.appendChild(mediaSect)
    AboutSect.appendChild(textContent)
    

    textContent.appendChild(title1)
    textContent.appendChild(title2)
    textContent.appendChild(para)

    textContent.appendChild(btn1)
    textContent.appendChild(bnt2)
    textContent.appendChild(btnpara)
    
    aboutBody.appendChild(AboutSect)
    
    ;(0,_fromMenu__WEBPACK_IMPORTED_MODULE_4__.createFromMenu)()

    const h1 = document.querySelector('.FromMenuMain h1')
    h1.style.color='black'
    const li = document.querySelectorAll('.menuSect li')
    for(let i=0;i<li.length;i++){
        li[i].style.color='black'
        
    }

    (0,_testimonial__WEBPACK_IMPORTED_MODULE_3__.createTestimonial)()
    const testimonialSect = document.querySelector('.Testimonial')
    testimonialSect.removeAttribute('class')
    testimonialSect.className='TestimonialSECT'
    const firstTitle = document.createElement('h1')
    firstTitle.textContent='Why Choose us'
    const secondTitle = document.createElement('p')
    secondTitle.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.'

    const whyChoose = document.createElement('div')
    whyChoose.className='whyChooseUs'


    const whyImg = document.createElement('img')
    whyImg.className='whyImg'

    const features = document.createElement('div')
    features.className='features'

    const feture1 = document.createElement('div')
    const titleFirst = document.createElement('h2')
    titleFirst.textContent='Best Cheif'
    const titleSecond=document.createElement('p')
    titleSecond.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat'
    feture1.appendChild(titleFirst)
    feture1.appendChild(titleSecond)
    
    const feture2 = document.createElement('div')
    const titleFirst2 = document.createElement('h2')
    titleFirst2.textContent='Best Cheif'
    const titleSecond2=document.createElement('p')
    titleSecond2.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat'
    feture2.appendChild(titleFirst2)
    feture2.appendChild(titleSecond2)

    const feture3 = document.createElement('div')
    const titleFirst3 = document.createElement('h2')
    titleFirst3.textContent='Best Cheif'
    const titleSecond3=document.createElement('p')
    titleSecond3.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat'
    feture3.appendChild(titleFirst3)
    feture3.appendChild(titleSecond3)

    features.appendChild(feture1)
    features.appendChild(feture2)
    features.appendChild(feture3)


        whyChoose.appendChild(firstTitle)
        whyChoose.appendChild(secondTitle)
        whyChoose.appendChild(whyImg)
        whyChoose.appendChild(features)
    aboutBody.appendChild(whyChoose)
}



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

/***/ "./src/modules/blogPage.js":
/*!*********************************!*\
  !*** ./src/modules/blogPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBlogPage": () => (/* binding */ createBlogPage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/modules/images.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ "./src/modules/menuPage.js");
/* harmony import */ var _pageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageHeader */ "./src/modules/pageHeader.js");






function createBlogPage(){

     
    (0,_pageHeader__WEBPACK_IMPORTED_MODULE_3__.createPageHeader)('Blog','Blog List')
        const one = document.querySelectorAll('.one')
        
//         removeChildFromMenuPage()
//     function removeChildFromMenuPage(){
       
//     const menuBody = document.querySelector('.menuBody')
//     while (one.firstChild) {
// //         one.removeChild(one.firstChild);
         
// //  }


//     while (menuBody.firstChild) {
//        menuBody.removeChild(menuBody.firstChild);
        
// }
//     }
    
    // blog creation
    const menuBody = document.querySelector('.MenuBody')
    const pageNumber = document.createElement('div')
    pageNumber.className='pageNumber'
    const forward =document.createElement('div')
    const One  = document.createElement('div')
    const Two = document.createElement('div')
    const Three = document.createElement('div')
    const backward = document.createElement('div')
    const bWard = document.createElement('div')
    const fWardP = document.createElement('p')
    fWardP.textContent='<<'
    const onep = document.createElement('p')
    onep.textContent='1'
    const twop = document.createElement('p')
    twop.textContent='2'
    const threep = document.createElement('p')
    threep.textContent='3'
    const bWardp = document.createElement('p')
    
    forward.appendChild(fWardP)
    One.appendChild(onep)
    backward.appendChild(threep)
    Three.appendChild(twop)
    bWard.appendChild(bWardp)

    bWard.textContent='>>'
    pageNumber.appendChild(forward)

    pageNumber.appendChild(One)
    pageNumber.appendChild(Two)
    
    pageNumber.appendChild(Three)
    pageNumber.appendChild(backward)
    pageNumber.appendChild(bWard)


    const blogSect = document.createElement('div')
    blogSect.className='blogSectPage'

    const blog = document.createElement('div')
    blog.className='blogPage'
    
    const profileDetail = document.createElement('div')
    profileDetail.className='profileDetail'

    menuBody.appendChild(blogSect)
    blogSect.appendChild(blog);
    blogSect.appendChild(profileDetail);
   
   
    createBlogCards(_images__WEBPACK_IMPORTED_MODULE_1__.blogImg[0],'10 Reasons To Do A Digital Detox Challenge')
    createBlogCards(_images__WEBPACK_IMPORTED_MODULE_1__.blogImg[1],'Traditional Soft Pretzels with Sweet Beer Cheese')
    createBlogCards(_images__WEBPACK_IMPORTED_MODULE_1__.blogImg[2],'The Ultimate Hangover Burger: Egg in a Hole Burger')
    createBlogCards(_images__WEBPACK_IMPORTED_MODULE_1__.blogImg[0],'My Favorite Easy Black Pizza Toast Recipe')
    function createBlogCards(IMG,title){
        const card = document.createElement('div')
        card.className='card'

        const img = document.createElement('img')
        img.className='imgOfBlog'
        img.src = IMG

        const detail = document.createElement('div')
        detail.className='detail'
        const date =  document.createElement('div')
        date.className='date'
        const dateP = document.createElement('p')
        
        dateP.textContent='FEB 14,2022 /'
        const msg = document.createElement('div')
        msg.className='msg'
        const mshP = document.createElement('p')
        mshP.textContent = '3/'
        const Admin = document.createElement('div')
        Admin.className='Admin'
        const AdminP = document.createElement('p')
        AdminP.textContent='Admin'
        const textContent =  document.createElement('div')
        textContent.className='TextcontentBlog'

        const Title = document.createElement('p')
        Title.textContent=title
        const paraBlog = document.createElement('p')
        paraBlog.textContent='At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'
        const button = document.createElement('button')
        button.textContent='Read More'

         textContent.appendChild(Title)
         textContent.appendChild(paraBlog)
         textContent.appendChild(button)


        date.appendChild(dateP)
        msg.appendChild(mshP)
        Admin.appendChild(AdminP)

        detail.appendChild(date)
        detail.appendChild(msg)
        card.appendChild(Admin)

        card.appendChild(img)
        card.appendChild(detail)
        card.appendChild(textContent)
        blog.appendChild(card)
    }

    blogSect.appendChild(pageNumber)

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
/* harmony import */ var _blogPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blogPage */ "./src/modules/blogPage.js");
/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop */ "./src/modules/shop.js");
/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aboutPage */ "./src/modules/aboutPage.js");







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
   list3.addEventListener('click',_blogPage__WEBPACK_IMPORTED_MODULE_4__.createBlogPage)
   list3.textContent='Blog'

   const list4 = document.createElement('li')
   list4.textContent='Pages'

   const list5 = document.createElement('li')
   list5.textContent='About'
   list5.addEventListener('click',_aboutPage__WEBPACK_IMPORTED_MODULE_6__.createAboutPage)

   const list6 = document.createElement('li')
   list6.textContent='Shop'
   list6.addEventListener('click',_shop__WEBPACK_IMPORTED_MODULE_5__.createShop)

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
/* harmony export */   "aboutPage": () => (/* binding */ aboutPage),
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
/* harmony import */ var _images_aboutPage_png__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../images/aboutPage.png */ "./src/images/aboutPage.png");
/* harmony import */ var _images_aboutPage2_png__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../images/aboutPage2.png */ "./src/images/aboutPage2.png");
/* harmony import */ var _images_aboutPage3_png__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../images/aboutPage3.png */ "./src/images/aboutPage3.png");




























































































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

const aboutPage = [_images_aboutPage_png__WEBPACK_IMPORTED_MODULE_87__,_images_aboutPage2_png__WEBPACK_IMPORTED_MODULE_88__,_images_aboutPage3_png__WEBPACK_IMPORTED_MODULE_89__]

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
/* harmony import */ var _blogPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blogPage */ "./src/modules/blogPage.js");
/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop */ "./src/modules/shop.js");
/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aboutPage */ "./src/modules/aboutPage.js");











function createMenuPage(){
    function removeAllChildNodesFromDisplay() {
        while (_index__WEBPACK_IMPORTED_MODULE_0__.content.firstChild) {
            _index__WEBPACK_IMPORTED_MODULE_0__.content.removeChild(_index__WEBPACK_IMPORTED_MODULE_0__.content.firstChild);
        }}
        
    const MenuBody = document.createElement('div')
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
   list2.addEventListener('click',createMenuPage)
   list2.textContent='Menu'

   const list3 = document.createElement('li')
   list3.addEventListener('click',_blogPage__WEBPACK_IMPORTED_MODULE_4__.createBlogPage)
   list3.textContent='Blog'

   const list4 = document.createElement('li')
   list4.textContent='Pages'

   const list5 = document.createElement('li')
   list5.textContent='About'
   list5.addEventListener('click',_aboutPage__WEBPACK_IMPORTED_MODULE_6__.createAboutPage)

   const list6 = document.createElement('li')
   list6.addEventListener('click',_shop__WEBPACK_IMPORTED_MODULE_5__.createShop)
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

 


    ;(0,_restrauInfoSect__WEBPACK_IMPORTED_MODULE_3__.createRestrauInfo)()
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

/***/ "./src/modules/pageHeader.js":
/*!***********************************!*\
  !*** ./src/modules/pageHeader.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPageHeader": () => (/* binding */ createPageHeader)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/modules/images.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/modules/footer.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuPage */ "./src/modules/menuPage.js");
/* harmony import */ var _blogPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blogPage */ "./src/modules/blogPage.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");
/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop */ "./src/modules/shop.js");
/* harmony import */ var _aboutPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aboutPage */ "./src/modules/aboutPage.js");









function createPageHeader(option,titleForHeader){
   
    _index__WEBPACK_IMPORTED_MODULE_0__.content.style.background='transparent'
    const body = document.querySelector('body')
    body.removeAttribute('class')
    body.classList='bodyPage'

    function removeAllChildNodesFromDisplay() {
        while (_index__WEBPACK_IMPORTED_MODULE_0__.content.firstChild) {
            _index__WEBPACK_IMPORTED_MODULE_0__.content.removeChild(_index__WEBPACK_IMPORTED_MODULE_0__.content.firstChild);
        }}

   
        removeAllChildNodesFromDisplay()
        const MenuBody = document.createElement('div')
        MenuBody.className='MenuBody'
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
           list2.addEventListener('click',_menuPage__WEBPACK_IMPORTED_MODULE_3__.createMenuPage)
           list2.textContent='Menu'
        
           const list3 = document.createElement('li')
           list3.addEventListener('click',_blogPage__WEBPACK_IMPORTED_MODULE_4__.createBlogPage)
           list3.textContent='Blog'
           
           
           const list4 = document.createElement('li')
           list4.textContent='Pages'
           
           const list5 = document.createElement('li')
           list5.textContent='About'
            list5.addEventListener('click',_aboutPage__WEBPACK_IMPORTED_MODULE_7__.createAboutPage)
           list5.textContent='About'
        
           const list6 = document.createElement('li')
           list6.textContent='Shop'
           list6.addEventListener('click',_shop__WEBPACK_IMPORTED_MODULE_6__.createShop)
        
           const list7 = document.createElement('li')
           list7.textContent='Contact'
        
           const iconSect = document.createElement('div')
           const para  = document.createElement('h1')
           para.textContent=`${titleForHeader}`
        
           const para2 = document.createElement('p')
           para2.innerHTML=`<span>Home</span> > ${option}`
        
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
        
       
        
        _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(header)
        header.appendChild(para2)
        _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(MenuBody)
    



        ;(0,_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)()
        const footer = document.querySelector('footer')
        footer.className='footerClass'
       
        


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

/***/ "./src/modules/shop.js":
/*!*****************************!*\
  !*** ./src/modules/shop.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createShop": () => (/* binding */ createShop)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _pageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageHeader */ "./src/modules/pageHeader.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images */ "./src/modules/images.js");




function createShop(){

    (0,_pageHeader__WEBPACK_IMPORTED_MODULE_1__.createPageHeader)('Shop','Shop List')
    
    const body  = document.querySelector('body')
    body.removeAttribute('class')
    body.className='bodyPageForShop'
    const shopBody = document.querySelector('.MenuBody')
    shopBody.removeAttribute('class')
    shopBody.className='shopBody'
    

    const shopSect = document.createElement('div')
    shopSect.className='shopSect'
    const shopList = document.createElement('div')
    shopList.className='shopList'
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    createItem(_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[7],'Fresh Lime','15$')
    
 
    function createItem(img,Name,Price){

        const item =document.createElement('div')
        item.className='item'

        const itemImg = document.createElement('img')
        itemImg.src = img

        const itemName = document.createElement('p')
        itemName.textContent=Name
        itemName.className='itemName'
        const itemPrice  = document.createElement('p')
        itemPrice.textContent=Price
        
        item.appendChild(itemImg)
        item.appendChild(itemName)
        item.appendChild(itemPrice)

        shopList.appendChild(item)
    }


   shopSect.appendChild(shopList)
   shopBody.appendChild(shopSect)

const footer = document.querySelector('footer')
footer.className='footerShop'

const profileDetail = document.createElement('div')
    profileDetail.className='profileDetail'

const inputSect = document.createElement('div')
inputSect.className='inputSect'

const input = document.createElement('input')
input.placeholder='Search Product'

const inputIcon = document.createElement('div')
inputIcon.className='InputICON'

inputSect.appendChild(input)
inputSect.appendChild(inputIcon)

profileDetail.appendChild(inputSect)

shopBody.appendChild(profileDetail)


const checkList = document.createElement('div')
const CategoryPara = document.createElement('h2')
CategoryPara.textContent='Category'
checkList.appendChild(CategoryPara)
checkList.className='checkList'
createCheck('Sandwiches')
createCheck('Burger')
createCheck('Chicken Chup')
createCheck('Drink')
createCheck('Pizza')
createCheck('Thi')
createCheck('Non veg')
createCheck('Uncategorize')


function createCheck(Name){
    const para = document.createElement('p')
    para.className='checkPara'

    const input = document.createElement('input')
    input.type='checkbox'

    const label = document.createElement('label')
    label.textContent=`${Name}`

    para.appendChild(input)
    para.appendChild(label)

    checkList.appendChild(para)
}

const add = document.createElement('div')
add.className='advertise'

const latestProduct = document.createElement('div')
latestProduct.className='latestPr'
const prTitle = document.createElement('h2')
prTitle.textContent='Latest Project'
latestProduct.appendChild(prTitle)
createPr('pizaa','12$',_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[4])
createPr('pizaa','12$',_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[4])
createPr('pizaa','12$',_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[4])
createPr('pizaa','12$',_images__WEBPACK_IMPORTED_MODULE_2__.menuItemImg[4])

function createPr(name,price,img){
    const pr1 = document.createElement('div')
    pr1.className='listPr'
    const Primg = document.createElement('img')
    Primg.src= img
    const prName = document.createElement('p')
    prName.textContent=name

    const prPrice =document.createElement('p')
    prPrice.textContent=price

    pr1.appendChild(Primg)
    pr1.appendChild(prName)
    pr1.appendChild(prPrice)

    latestProduct.appendChild(pr1)

}



profileDetail.appendChild(checkList)
profileDetail.appendChild(add)
profileDetail.appendChild(latestProduct)

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

/***/ "./src/images/Banner.png":
/*!*******************************!*\
  !*** ./src/images/Banner.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7cb87fb4d4cb0f1927e7.png";

/***/ }),

/***/ "./src/images/Calendar.png":
/*!*********************************!*\
  !*** ./src/images/Calendar.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "212e31fc8e13acd6d799.png";

/***/ }),

/***/ "./src/images/Chats.png":
/*!******************************!*\
  !*** ./src/images/Chats.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c518fedb4f8a21091f63.png";

/***/ }),

/***/ "./src/images/Clock.png":
/*!******************************!*\
  !*** ./src/images/Clock.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03ac31579af972d75461.png";

/***/ }),

/***/ "./src/images/Coffee (1).png":
/*!***********************************!*\
  !*** ./src/images/Coffee (1).png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f765ffd472c4decda4b2.png";

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

/***/ "./src/images/Person.png":
/*!*******************************!*\
  !*** ./src/images/Person.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72237bcc88baf18dd3d8.png";

/***/ }),

/***/ "./src/images/Quotes.png":
/*!*******************************!*\
  !*** ./src/images/Quotes.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ccac7ca1cd5d5ba688c2.png";

/***/ }),

/***/ "./src/images/Student.png":
/*!********************************!*\
  !*** ./src/images/Student.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c804b9f6974d46ec6c54.png";

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

/***/ "./src/images/aboutPage.png":
/*!**********************************!*\
  !*** ./src/images/aboutPage.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60d3c9b2e7649f14c6d5.png";

/***/ }),

/***/ "./src/images/aboutPage2.png":
/*!***********************************!*\
  !*** ./src/images/aboutPage2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66b708227aea86514be0.png";

/***/ }),

/***/ "./src/images/aboutPage3.png":
/*!***********************************!*\
  !*** ./src/images/aboutPage3.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73f2fd7ac999fc037bec.png";

/***/ }),

/***/ "./src/images/admin.png":
/*!******************************!*\
  !*** ./src/images/admin.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a414c49a92575978a10c.png";

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

/***/ "./src/images/whychooseUs2.png":
/*!*************************************!*\
  !*** ./src/images/whychooseUs2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5647b48d851d17fb37db.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBdUIscUJBQXFCLEdBQUcsYUFBYSx3RkFBd0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8saUJBQWlCLGFBQWEsV0FBVyxZQUFZLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxh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QVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLGVBQWUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLGlDQUFpQyx3QkFBd0Isc0JB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OENBQVM7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSx1REFBbUI7Ozs7OztBQU12Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9NZW51UGFnZS5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL1doeUNob29zZS5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL2Fib3V0LmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvYWJvdXRQYWdlLmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvYmxvZy5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL2Jsb2dQYWdlLmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvZm9vZENhdC5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL2Zyb21NZW51LmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9vdXJDaGVmLmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvcGFnZUhlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL3Jlc3RyYXVBY3RpdmUuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9yZXN0cmF1SW5mb1NlY3QuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9zaG9wLmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvdGVzdGltb25pYWwuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy92YXJyaWFibGVzLmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL2Fib3V0UGFnZS5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL2Fib3V0VXMuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvbW9kdWxlcy9ibG9nLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvYmxvZ1BhZ2UuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvbW9kdWxlcy9mb29kQ2F0LmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvZm9vdGVyLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvZnJvbU1lbnUuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvaW1hZ2VzLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvbWVudVBhZ2UuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvbW9kdWxlcy9vdXJDaGVmLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvcGFnZUhlYWRlci5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL3Jlc3RyYXVBY3RpdmUuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvbW9kdWxlcy9yZXN0cmF1SW5mb1NlY3QuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvbW9kdWxlcy9zaG9wLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvdGVzdGltb25pYWwuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvbW9kdWxlcy93aHlDaG9vc2UuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvb2R0dWNrL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvb2R0dWNrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Zvb2R0dWNrL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Zvb2R0dWNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Zvb2R0dWNrL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9oZWFkZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3RvdGFsSW5mb1NlY3QucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ib2R5UGFnZSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICBcXG59XFxuXFxuLmhlYWRlckZvck5hdntcXG4gICAgXFxuICAgIGdyaWQtY29sdW1uOiAxLzE0O1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jbHIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuLmxvZ29Gb3JIZWFkZXJ7XFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbn1cXG5cXG4ubmF2Rm9ySGVhZGVye1xcblxcbiAgICBtYXJnaW4tbGVmdDogNDAwcHg7XFxufVxcblxcbi5oZWFkZXJGb3JOYXYgaDF7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNTBweDtcXG4gICAgbGVmdDogNTcwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXJGb3JOYXYgcHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE5MHB4O1xcbiAgICBsZWZ0OiA1OTZweDtcXG4gICAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktY2xyKTtcXG59XFxuXFxuLmhlYWRlckZvck5hdiBzcGFue1xcbiAgXFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbn1cXG5cXG5cXG4uTWVudUJvZHl7XFxuICAgIGdyaWQtY29sdW1uOiAxLzE0O1xcbiAgICBncmlkLXJvdzogNS81MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIFxcbn1cXG5cXG4uTWVudUJvZHkgaW1ne1xcbiAgICB3aWR0aDogMzgwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLk1lbnVCb2R5IC5vbmV7XFxuICAgIHdpZHRoOiA5NDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweFxcbiAgIFxcbiAgICA7XFxufVxcblxcblxcblxcbi5NZW51Qm9keSAgbGl7XFxuICAgIG1hcmdpbjogMjBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIFxcbiB9XFxuXFxuIC5NZW51Qm9keSAgcDpmaXJzdC1jaGlsZHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIFxcblxcbiB9XFxuXFxuXFxuXFxuIC5NZW51Qm9keSAgcDpudGgtY2hpbGQoMil7XFxuICAgIGdyaWQtY29sdW1uOiAxLzY7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcXG4gfVxcbiBcXG5cXG4gLk1lbnVCb2R5ICBwOm50aC1jaGlsZCgzKXtcXG4gICAgXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIG1hcmdpbi1sZWZ0OjEwMHB4O1xcbiB9XFxuXFxuIC5NZW51Qm9keSBoMntcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgXFxuIH1cXG5cXG5cXG4gLnJlc3RyYXVJbmZvU2VjdEZvckhlYWRlcntcXG4gICBncmlkLWNvbHVtbjogMSAvMTQ7XFxuICAgZ3JpZC1yb3c6IDI0LzI4O1xcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuO1xcbn1cXG5cXG4uTWVudUJvZHkgZGl2Om50aC1jaGlsZCgzKXtcXG5cXG4gICAgbWFyZ2luLXRvcDogNTAwcHg7XFxuICAgIDtcXG59XFxuXFxuLk1lbnVCb2R5IC53b3JrV2l0aHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICBnYXA6IDUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOi0zNTBweDtcXG4gICAgbGVmdDogMTUwcHg7XFxuICAgIFxcbiAgIFxcbn1cXG5cXG5cXG5cXG4uTWVudUJvZHkgLndvcmtXaXRoIGltZ3tcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6IDEzMHB4OztcXG5cXG4gICAgXFxufVxcblxcbi5wYXJ0bmVye1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICBcXG4gICAgXFxufVxcblxcbi5wYXJ0bmVyIHB7XFxuICAgXFxubWFyZ2luLWxlZnQ6IDQzJTtcXG5tYXJnaW4tdG9wOiA2MHB4O1xcbn1cXG5cXG4ucGFydG5lciBoMntcXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcXG4gICAgXFxuICAgIH1cXG5cXG4uY29udGVudFNlY29uZFN0eWxle1xcbiAgICB3aWR0aDogMTAwdnc7XFxuYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuODA0KTtcXG5oZWlnaHQ6IDEwMCU7XFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLDg4cHgpO1xcbmdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYwLDcwcHgpO1xcbmdhcDowcHggMjRweDtcXG56LWluZGV4OiAxO1xcbn1cXG5cXG4uZm9vdGVyQ2xhc3N7XFxuICAgIGdyaWQtY29sdW1uOiAxLzE0O1xcbiAgICBncmlkLXJvdzogNDgvNTQ7XFxuICAgIHBhZGRpbmc6IDMwcHggIDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMzBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDsgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9NZW51UGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix5REFBNkM7SUFDN0Msb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysd0JBQXdCOztBQUU1Qjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsbUJBQW1COztBQUV2Qjs7OztBQUlBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLG1DQUFtQztJQUNuQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLHdCQUF3QjtBQUM1Qjs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLFNBQVM7SUFDVDs7SUFFQTtBQUNKOzs7O0FBSUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTs7SUFFYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLDJCQUEyQjs7Q0FFOUI7O0NBRUE7SUFDRyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsK0JBQStCOzs7Q0FHbEM7Ozs7Q0FJQTtJQUNHLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjs7O0NBR0E7O0lBRUcseUJBQXlCO0lBQ3pCLGlCQUFpQjtDQUNwQjs7Q0FFQTtJQUNHLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1COztDQUV0Qjs7O0NBR0E7R0FDRSxrQkFBa0I7R0FDbEIsZUFBZTtHQUNmLHlEQUFvRDs7QUFFdkQ7O0FBRUE7O0lBRUksaUJBQWlCOztBQUVyQjs7QUFFQTs7SUFFSSxhQUFhOztJQUViLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7OztBQUdmOzs7O0FBSUE7SUFDSSxZQUFZO0lBQ1osYUFBYTs7O0FBR2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjs7O0FBR3RCOztBQUVBOztBQUVBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCOztBQUVKO0lBQ0ksWUFBWTtBQUNoQixxQ0FBcUM7QUFDckMsWUFBWTtBQUNaLGFBQWE7QUFDYixzQkFBc0I7QUFDdEIsc0NBQXNDO0FBQ3RDLG1DQUFtQztBQUNuQyxZQUFZO0FBQ1osVUFBVTtBQUNWOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uYm9keVBhZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvaGVhZGVyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICBcXG59XFxuXFxuLmhlYWRlckZvck5hdntcXG4gICAgXFxuICAgIGdyaWQtY29sdW1uOiAxLzE0O1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jbHIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuLmxvZ29Gb3JIZWFkZXJ7XFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbn1cXG5cXG4ubmF2Rm9ySGVhZGVye1xcblxcbiAgICBtYXJnaW4tbGVmdDogNDAwcHg7XFxufVxcblxcbi5oZWFkZXJGb3JOYXYgaDF7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNTBweDtcXG4gICAgbGVmdDogNTcwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXJGb3JOYXYgcHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE5MHB4O1xcbiAgICBsZWZ0OiA1OTZweDtcXG4gICAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOnZhcigtLXByaW1hcnktY2xyKTtcXG59XFxuXFxuLmhlYWRlckZvck5hdiBzcGFue1xcbiAgXFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbn1cXG5cXG5cXG4uTWVudUJvZHl7XFxuICAgIGdyaWQtY29sdW1uOiAxLzE0O1xcbiAgICBncmlkLXJvdzogNS81MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIFxcbn1cXG5cXG4uTWVudUJvZHkgaW1ne1xcbiAgICB3aWR0aDogMzgwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLk1lbnVCb2R5IC5vbmV7XFxuICAgIHdpZHRoOiA5NDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweFxcbiAgIFxcbiAgICA7XFxufVxcblxcblxcblxcbi5NZW51Qm9keSAgbGl7XFxuICAgIG1hcmdpbjogMjBweCAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIFxcbiB9XFxuXFxuIC5NZW51Qm9keSAgcDpmaXJzdC1jaGlsZHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIFxcblxcbiB9XFxuXFxuXFxuXFxuIC5NZW51Qm9keSAgcDpudGgtY2hpbGQoMil7XFxuICAgIGdyaWQtY29sdW1uOiAxLzY7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcXG4gfVxcbiBcXG5cXG4gLk1lbnVCb2R5ICBwOm50aC1jaGlsZCgzKXtcXG4gICAgXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIG1hcmdpbi1sZWZ0OjEwMHB4O1xcbiB9XFxuXFxuIC5NZW51Qm9keSBoMntcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgXFxuIH1cXG5cXG5cXG4gLnJlc3RyYXVJbmZvU2VjdEZvckhlYWRlcntcXG4gICBncmlkLWNvbHVtbjogMSAvMTQ7XFxuICAgZ3JpZC1yb3c6IDI0LzI4O1xcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3RvdGFsSW5mb1NlY3QucG5nJyk7XFxuO1xcbn1cXG5cXG4uTWVudUJvZHkgZGl2Om50aC1jaGlsZCgzKXtcXG5cXG4gICAgbWFyZ2luLXRvcDogNTAwcHg7XFxuICAgIDtcXG59XFxuXFxuLk1lbnVCb2R5IC53b3JrV2l0aHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICBnYXA6IDUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOi0zNTBweDtcXG4gICAgbGVmdDogMTUwcHg7XFxuICAgIFxcbiAgIFxcbn1cXG5cXG5cXG5cXG4uTWVudUJvZHkgLndvcmtXaXRoIGltZ3tcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6IDEzMHB4OztcXG5cXG4gICAgXFxufVxcblxcbi5wYXJ0bmVye1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICBcXG4gICAgXFxufVxcblxcbi5wYXJ0bmVyIHB7XFxuICAgXFxubWFyZ2luLWxlZnQ6IDQzJTtcXG5tYXJnaW4tdG9wOiA2MHB4O1xcbn1cXG5cXG4ucGFydG5lciBoMntcXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcXG4gICAgXFxuICAgIH1cXG5cXG4uY29udGVudFNlY29uZFN0eWxle1xcbiAgICB3aWR0aDogMTAwdnc7XFxuYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuODA0KTtcXG5oZWlnaHQ6IDEwMCU7XFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLDg4cHgpO1xcbmdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYwLDcwcHgpO1xcbmdhcDowcHggMjRweDtcXG56LWluZGV4OiAxO1xcbn1cXG5cXG4uZm9vdGVyQ2xhc3N7XFxuICAgIGdyaWQtY29sdW1uOiAxLzE0O1xcbiAgICBncmlkLXJvdzogNDgvNTQ7XFxuICAgIHBhZGRpbmc6IDMwcHggIDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMzBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDsgKi9cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvSGFtYnVyZ2VyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9Db29raWUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL1dpbmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWFpblNlY3R7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8xMTtcXG4gICAgZ3JpZC1yb3c6IDI2LzM0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MzBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSl7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzpyb3c7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmciAxZnIgMWZyIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyIDFmciAyZnI7XFxuXFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMikgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMikgaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDIpIHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgyKSA+IHB7Zm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgd2lkdGg6IDM2MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjt9XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOmZpcnN0LWNoaWxke1xcbiAgICB3aWR0aDoyNTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gIFxcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgxKSBpbWc6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDoxOTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNTtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgxKSBpbWc6bnRoLWNoaWxkKDMpe1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMy81O1xcbiAgICB3aWR0aDoxODBweDtcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCg0KXtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgd2lkdGg6MTUwcHg7XFxuICAgIFxcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgxKSBpbWc6bnRoLWNoaWxkKDUpe1xcbiAgICBncmlkLWNvbHVtbjogNC81O1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICB3aWR0aDoxMDBweDtcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCg2KXtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogNTBweDtcXG59XFxuXFxuLm1lYWxDYXRTZWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbWFyZ2luOjMwcHggMTBweCA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVhbENhdFNlY3QgPmRpdjpmaXJzdC1jaGlsZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBoZWlnaHQ6IDY1cHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5tZWFsQ2F0U2VjdCA+ZGl2Om50aC1jaGlsZCgyKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBoZWlnaHQ6IDY1cHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5tZWFsQ2F0U2VjdCA+ZGl2Om50aC1jaGlsZCgzKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBoZWlnaHQ6IDY1cHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcbi5GYXN0Rm9vZFB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDMwcHg7XFxuICAgIGxlZnQ6IDVweDtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLkx1bmNoUHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogNjhweDtcXG4gICAgbGVmdDogMTA1cHg7XFxuICAgIFxcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uRGlubmVyUHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMTA1cHg7XFxuICAgIGxlZnQ6IDE4OHB4O1xcbiAgICBcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLkV4cGVyaWFuY2VTZWN0e1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMTAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJztcXG59XFxuXFxuLkV4cGVyaWFuY2VTZWN0IHA6Zmlyc3QtY2hpbGR7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTsgXFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdCBwOm50aC1jaGlsZCgyKXtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOmJsYWNrOyBcXG59XFxuXFxuLkV4cGVyaWFuY2VTZWN0IHA6bnRoLWNoaWxkKDIpIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG5cXG4gICAgY29sb3I6YmxhY2s7IFxcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL1doeUNob29zZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFFBQVE7SUFDUixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsd0NBQXdDO0lBQ3hDLHNDQUFzQzs7QUFFMUM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7O0FBRTFCOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBLCtCQUErQixlQUFlO0lBQzFDLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLCtCQUErQixDQUFDOztBQUVwQztJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7OztBQUtBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseURBQWdEO0lBQ2hELDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlEQUE2QztJQUM3Qyw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5REFBMkM7SUFDM0MsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7O0lBRVQsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVzs7SUFFWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXOztJQUVYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjs7SUFFaEIsV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5tYWluU2VjdHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLzExO1xcbiAgICBncmlkLXJvdzogMjYvMzQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDozMHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIFxcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgxKXtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OnJvdztcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyIDFmciAxZnIgO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgMWZyIDJmcjtcXG5cXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMil7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgyKSBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgyKSBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMikgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDIpID4gcHtmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICB3aWR0aDogMzYwcHg7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbiAgICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmO31cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgxKSBpbWc6Zmlyc3QtY2hpbGR7XFxuICAgIHdpZHRoOjI1MHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgXFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDEpIGltZzpudGgtY2hpbGQoMil7XFxuICAgIHdpZHRoOjE5MHB4O1xcbiAgICBncmlkLWNvbHVtbjogMy81O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxufVxcblxcblxcblxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDEpIGltZzpudGgtY2hpbGQoMyl7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAzLzU7XFxuICAgIHdpZHRoOjE4MHB4O1xcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgxKSBpbWc6bnRoLWNoaWxkKDQpe1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICB3aWR0aDoxNTBweDtcXG4gICAgXFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDEpIGltZzpudGgtY2hpbGQoNSl7XFxuICAgIGdyaWQtY29sdW1uOiA0LzU7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIHdpZHRoOjEwMHB4O1xcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgxKSBpbWc6bnRoLWNoaWxkKDYpe1xcbiAgICBncmlkLWNvbHVtbjogNC81O1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICB3aWR0aDoxMDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4ubWVhbENhdFNlY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBtYXJnaW46MzBweCAxMHB4IDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZWFsQ2F0U2VjdCA+ZGl2OmZpcnN0LWNoaWxke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGhlaWdodDogNjVweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvSGFtYnVyZ2VyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubWVhbENhdFNlY3QgPmRpdjpudGgtY2hpbGQoMil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9Db29raWUucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5tZWFsQ2F0U2VjdCA+ZGl2Om50aC1jaGlsZCgzKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBoZWlnaHQ6IDY1cHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL1dpbmUucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcbi5GYXN0Rm9vZFB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDMwcHg7XFxuICAgIGxlZnQ6IDVweDtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLkx1bmNoUHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogNjhweDtcXG4gICAgbGVmdDogMTA1cHg7XFxuICAgIFxcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uRGlubmVyUHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMTA1cHg7XFxuICAgIGxlZnQ6IDE4OHB4O1xcbiAgICBcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLkV4cGVyaWFuY2VTZWN0e1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMTAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJztcXG59XFxuXFxuLkV4cGVyaWFuY2VTZWN0IHA6Zmlyc3QtY2hpbGR7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTsgXFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdCBwOm50aC1jaGlsZCgyKXtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOmJsYWNrOyBcXG59XFxuXFxuLkV4cGVyaWFuY2VTZWN0IHA6bnRoLWNoaWxkKDIpIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG5cXG4gICAgY29sb3I6YmxhY2s7IFxcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdmFycmlhYmxlcy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5hYm91dFVzU2VjdE1haW57XFxuXFxuICAgIGdyaWQtY29sdW1uOiAyLzExO1xcbiAgZ3JpZC1yb3c6IDEwLzE5O1xcbiAgbWFyZ2luLXRvcDogMjAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIGdhcDogNTBweDtcXG4gIFxcbiAgXFxuICBcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBkaXY6Zmlyc3QtY2hpbGR7XFxuICAgIFxcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6MTIwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgXFxuICAgIFxcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIGRpdjpudGgtY2hpbGQoMilcXG57XFxuICAgIGhlaWdodDogMTIwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyIDFmcjtcXG4gICAgZ2FwOiA4cHg7ICBcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBkaXY6bnRoLWNoaWxkKDIpIGltZzpmaXJzdC1jaGlsZHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMS8yIDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5hYm91dFVzU2VjdE1haW4gZGl2Om50aC1jaGlsZCgyKSBpbWc6bnRoLWNoaWxkKDIpe1xcbiAgICBncmlkLWNvbHVtbjogMSAvMjtcXG4gICAgZ3JpZC1yb3c6IDIvMyA7XFxuICAgXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIGRpdjpudGgtY2hpbGQoMikgaW1nOm50aC1jaGlsZCgzKXtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLzM7XFxuICAgIGdyaWQtcm93OiAyLzMgO1xcbiAgIFxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiAgdWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBsaXN0LXN0eWxlOiBub25lOztcXG4gIFxcbiAgICAgXFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gYnV0dG9ue1xcbiAgICBcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICB3aWR0aDoxMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmFib3V0VXNTZWN0IGRpdjpudGgtY2hpbGQoMil7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBsaXtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBsaTo6YmVmb3Jle1xcbiAgICBjb250ZW50OiAn4pyTICc7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gcHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgd2lkdGg6IDM2MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG5cXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcblxcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBcXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9hYm91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7O0lBRUksaUJBQWlCO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7Ozs7QUFJWDs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCOzs7QUFHM0I7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7O0lBRWQsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7O0lBRWQsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZ0JBQWdCOzs7QUFHcEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTs7O0FBR25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vdmFycmlhYmxlcy5jc3MnO1xcblxcbi5hYm91dFVzU2VjdE1haW57XFxuXFxuICAgIGdyaWQtY29sdW1uOiAyLzExO1xcbiAgZ3JpZC1yb3c6IDEwLzE5O1xcbiAgbWFyZ2luLXRvcDogMjAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIGdhcDogNTBweDtcXG4gIFxcbiAgXFxuICBcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBkaXY6Zmlyc3QtY2hpbGR7XFxuICAgIFxcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6MTIwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgXFxuICAgIFxcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIGRpdjpudGgtY2hpbGQoMilcXG57XFxuICAgIGhlaWdodDogMTIwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6MWZyIDFmcjtcXG4gICAgZ2FwOiA4cHg7ICBcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBkaXY6bnRoLWNoaWxkKDIpIGltZzpmaXJzdC1jaGlsZHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMS8yIDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5hYm91dFVzU2VjdE1haW4gZGl2Om50aC1jaGlsZCgyKSBpbWc6bnRoLWNoaWxkKDIpe1xcbiAgICBncmlkLWNvbHVtbjogMSAvMjtcXG4gICAgZ3JpZC1yb3c6IDIvMyA7XFxuICAgXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIGRpdjpudGgtY2hpbGQoMikgaW1nOm50aC1jaGlsZCgzKXtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLzM7XFxuICAgIGdyaWQtcm93OiAyLzMgO1xcbiAgIFxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiAgdWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBsaXN0LXN0eWxlOiBub25lOztcXG4gIFxcbiAgICAgXFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gYnV0dG9ue1xcbiAgICBcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICB3aWR0aDoxMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmFib3V0VXNTZWN0IGRpdjpudGgtY2hpbGQoMil7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBsaXtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBsaTo6YmVmb3Jle1xcbiAgICBjb250ZW50OiAn4pyTICc7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gcHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgd2lkdGg6IDM2MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG5cXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcblxcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBcXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcGxheS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvd2h5Y2hvb3NlVXMyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9TdHVkZW50LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9Db2ZmZWUgKDEpLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9QZXJzb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5BYm91dFNlY3RQYWdle1xcblxcbiAgICB3aWR0aDogODB2dztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5cXG4uQWJvdXRTZWN0UGFnZSAubWVkaWFTZWN0IHtcXG5cXG4gd2lkdGg6IDUwJTtcXG4gaGVpZ2h0OjU1MHB4O1xcbiAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuIGRpc3BsYXk6IGdyaWQ7XFxuIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiBhbGlnbi1pdGVtczogY2VudGVyO1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gXFxuXFxuIFxcblxcbn1cXG5cXG4uQWJvdXRTZWN0UGFnZSAubWVkaWFTZWN0IGltZzpmaXJzdC1jaGlsZHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgXFxuXFxufVxcblxcbi5BYm91dFNlY3RQYWdlIC5tZWRpYVNlY3QgaW1nOm50aC1jaGlsZCgyKXtcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogODBweDtcXG4gICAgcmlnaHQ6IDQwcHg7XFxuICAgXFxuXFxufVxcblxcbi5BYm91dFNlY3RQYWdlIC5tZWRpYVNlY3QgaW1nOmxhc3QtY2hpbGR7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDMwcHg7XFxuICAgIHJpZ2h0OiA0MHB4O1xcblxcbn1cXG5cXG4uQWJvdXRTZWN0UGFnZSAudGV4dENvbnRlbnQge1xcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDo1NTBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgIFxcbiAgIFxcbiAgIH1cXG5cXG5cXG4gICAuQWJvdXRTZWN0UGFnZSAudGV4dENvbnRlbnQgaDJ7XFxuICAgIFxcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IC0xNHB4IDM1cHg7XFxuICAgIFxcbiAgIH1cXG5cXG4gICAuQWJvdXRTZWN0UGFnZSAudGV4dENvbnRlbnQgaDF7XFxuXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOTE1KTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgIFxcbiAgIH1cXG5cXG4gICAuQWJvdXRTZWN0UGFnZSAudGV4dENvbnRlbnQgcHtcXG5cXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg5Mik7XFxuICAgIHdpZHRoOiAzNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgXFxuICAgIFxcbiAgICAgXFxuICAgXFxuICAgfVxcblxcblxcblxcbiAgLkFib3V0U2VjdFBhZ2UgIC5idXR0b24xe1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIFxcblxcbiAgIH1cXG5cXG5cXG4gICAuQWJvdXRTZWN0UGFnZSAuYnV0dG9uMntcXG4gICAgXFxuICAgIHBhZGRpbmc6IDIxcHg7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC02MHB4O1xcbiAgICBsZWZ0OiAxNDBweDtcXG5cXG5cXG4gICB9XFxuXFxuICAgLkFib3V0U2VjdFBhZ2UgLmJ0blBhcmF7XFxuICAgIFxcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTExMHB4O1xcbiAgICBsZWZ0OiAxOTBweDtcXG4gICB9XFxuXFxuICAgLndoeUNob29zZVVze1xcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDogMTAwMHB4O1xcbiAgICB3aWR0aDogMTA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuXFxuICAgfVxcblxcbiAgIC53aHlDaG9vc2VVcyBwe1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtZmFtaWx5OiAzMDA7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIH1cXG5cXG4gICAud2h5Q2hvb3NlVXMgLndoeUltZyB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuXFxuICAgfVxcblxcbiAgIC53aHlDaG9vc2VVcyAuZmVhdHVyZXN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAvKiBoZWlnaHQ6IDsgKi9cXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI1MHB4O1xcbiAgICBcXG4gICB9XFxuXFxuICAgXFxuXFxuXFxuICAgLndoeUNob29zZVVzIC5mZWF0dXJlcyA+IGRpdjpmaXJzdC1jaGlsZHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBibGFjayBzb2xpZDsgKi9cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogdG9wO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwcHg7XFxuICAgfVxcblxcbiAgIC53aHlDaG9vc2VVcyAuZmVhdHVyZXMgPiBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiB0b3A7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzBweDtcXG4gICB9XFxuXFxuXFxuICAgLndoeUNob29zZVVzIC5mZWF0dXJlcyA+IGRpdjpsYXN0LWNoaWxke1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTE2MHB4O1xcbiAgICBsZWZ0OiA5MDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogdG9wO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwcHg7XFxuICAgfVxcblxcbiAgIC53aHlDaG9vc2VVcyAuZmVhdHVyZXMgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTVweDtcXG5cXG4gICB9XFxuXFxuXFxuICAgLndoeUNob29zZVVzIC5mZWF0dXJlcyA+IGRpdiBoMiB7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcblxcblxcbiAgIH1cXG5cXG4gICAud2h5Q2hvb3NlVXMgLmZlYXR1cmVzID4gZGl2IHAge1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMwcHg7XFxuICAgIGxlZnQ6IC0xMHB4O1xcbiAgICBcXG5cXG5cXG4gICB9XFxuXFxuICAgLlRlc3RpbW9uaWFsU0VDVHtcXG4gICAgXFxuICAgIGdyaWQtY29sdW1uOiAyLzExO1xcbiAgICBncmlkLXJvdzozMi8zODtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcXG5cXG59XFxuICAgXFxuXFxuICAgXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9hYm91dFBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7O0FBR0E7O0NBRUMsVUFBVTtD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SUFFQyxpQkFBaUI7SUFDakIsY0FBYztJQUNkLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQWJvdXRTZWN0UGFnZXtcXG5cXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuLkFib3V0U2VjdFBhZ2UgLm1lZGlhU2VjdCB7XFxuXFxuIHdpZHRoOiA1MCU7XFxuIGhlaWdodDo1NTBweDtcXG4gLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiBkaXNwbGF5OiBncmlkO1xcbiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuIFxcblxcbiBcXG5cXG59XFxuXFxuLkFib3V0U2VjdFBhZ2UgLm1lZGlhU2VjdCBpbWc6Zmlyc3QtY2hpbGR7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgIFxcblxcbn1cXG5cXG4uQWJvdXRTZWN0UGFnZSAubWVkaWFTZWN0IGltZzpudGgtY2hpbGQoMil7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgaGVpZ2h0OiAxODBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDgwcHg7XFxuICAgIHJpZ2h0OiA0MHB4O1xcbiAgIFxcblxcbn1cXG5cXG4uQWJvdXRTZWN0UGFnZSAubWVkaWFTZWN0IGltZzpsYXN0LWNoaWxke1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICByaWdodDogNDBweDtcXG5cXG59XFxuXFxuLkFib3V0U2VjdFBhZ2UgLnRleHRDb250ZW50IHtcXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6NTUwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgICBcXG4gICBcXG4gICB9XFxuXFxuXFxuICAgLkFib3V0U2VjdFBhZ2UgLnRleHRDb250ZW50IGgye1xcbiAgICBcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IFZpYmVzJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luOiAtMTRweCAzNXB4O1xcbiAgICBcXG4gICB9XFxuXFxuICAgLkFib3V0U2VjdFBhZ2UgLnRleHRDb250ZW50IGgxe1xcblxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkxNSk7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICBcXG4gICB9XFxuXFxuICAgLkFib3V0U2VjdFBhZ2UgLnRleHRDb250ZW50IHB7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44OTIpO1xcbiAgICB3aWR0aDogMzYwcHg7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbiAgICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgIFxcbiAgICBcXG4gICAgIFxcbiAgIFxcbiAgIH1cXG5cXG5cXG5cXG4gIC5BYm91dFNlY3RQYWdlICAuYnV0dG9uMXtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBcXG5cXG4gICB9XFxuXFxuXFxuICAgLkFib3V0U2VjdFBhZ2UgLmJ1dHRvbjJ7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAyMXB4O1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9wbGF5LnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtNjBweDtcXG4gICAgbGVmdDogMTQwcHg7XFxuXFxuXFxuICAgfVxcblxcbiAgIC5BYm91dFNlY3RQYWdlIC5idG5QYXJhe1xcbiAgICBcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMTBweDtcXG4gICAgbGVmdDogMTkwcHg7XFxuICAgfVxcblxcbiAgIC53aHlDaG9vc2VVc3tcXG4gICAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6IDEwMDBweDtcXG4gICAgd2lkdGg6IDEwNTBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcblxcbiAgIH1cXG5cXG4gICAud2h5Q2hvb3NlVXMgcHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LWZhbWlseTogMzAwO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICB9XFxuXFxuICAgLndoeUNob29zZVVzIC53aHlJbWcge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy93aHljaG9vc2VVczIucG5nJyk7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuXFxuICAgfVxcblxcbiAgIC53aHlDaG9vc2VVcyAuZmVhdHVyZXN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAvKiBoZWlnaHQ6IDsgKi9cXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI1MHB4O1xcbiAgICBcXG4gICB9XFxuXFxuICAgXFxuXFxuXFxuICAgLndoeUNob29zZVVzIC5mZWF0dXJlcyA+IGRpdjpmaXJzdC1jaGlsZHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBibGFjayBzb2xpZDsgKi9cXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvU3R1ZGVudC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogdG9wO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwcHg7XFxuICAgfVxcblxcbiAgIC53aHlDaG9vc2VVcyAuZmVhdHVyZXMgPiBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9Db2ZmZWVcXFxcIFxcXFwoMVxcXFwpLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiB0b3A7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzBweDtcXG4gICB9XFxuXFxuXFxuICAgLndoeUNob29zZVVzIC5mZWF0dXJlcyA+IGRpdjpsYXN0LWNoaWxke1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTE2MHB4O1xcbiAgICBsZWZ0OiA5MDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvUGVyc29uLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiB0b3A7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNzBweDtcXG4gICB9XFxuXFxuICAgLndoeUNob29zZVVzIC5mZWF0dXJlcyA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxNXB4O1xcblxcbiAgIH1cXG5cXG5cXG4gICAud2h5Q2hvb3NlVXMgLmZlYXR1cmVzID4gZGl2IGgyIHtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuXFxuXFxuICAgfVxcblxcbiAgIC53aHlDaG9vc2VVcyAuZmVhdHVyZXMgPiBkaXYgcCB7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzBweDtcXG4gICAgbGVmdDogLTEwcHg7XFxuICAgIFxcblxcblxcbiAgIH1cXG5cXG4gICAuVGVzdGltb25pYWxTRUNUe1xcbiAgICBcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTE7XFxuICAgIGdyaWQtcm93OjMyLzM4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxcblxcbn1cXG4gICBcXG5cXG4gICBcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYmxvZ1NlY3R7XFxuZ3JpZC1jb2x1bW46IDIgLyAxMTtcXG5ncmlkLXJvdzo2OC83NCA7XFxuLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG5cXG5cXG59XFxuXFxuLmJsb2dTZWN0IGgye1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IFZpYmVzJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luOiAzcHggMjVweDtcXG5cXG59XFxuXFxuXFxuLmJsb2dTZWN0IGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbjogM3B4IDI1cHhcXG59XFxuXFxuLmJsb2dTZWN0IHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBcXG59XFxuXFxuLmJsb2dDYXJkU2VjdHtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJsb2dDYXJke1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBcXG59XFxuXFxuLmJsb2dDYXJkOmhvdmVye1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCB3aGl0ZTtcXG4gICAgXFxufVxcblxcbi5ibG9nQ2FyZCBpbWd7XFxuICAgIHdpZHRoOiAyMjhweDtcXG4gICAgaGVpZ2h0OiAxNzBweDtcXG4gICBcXG59XFxuXFxuLmJsb2dDYXJkIHA6bnRoLWNoaWxkKDIpe1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBcXG59XFxuXFxuLmJsb2dDYXJkIHA6bnRoLWNoaWxkKDMpe1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgXFxufVxcblxcblxcbi5ibG9nQ2FyZCBwOm50aC1jaGlsZCg0KXtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIFxcbn1cXG5cXG4uYmxvZ0NhcmQgcHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuXFxufVxcblxcbi5pY29uU2VjdHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA3cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAyOHB4O1xcbiAgICBsZWZ0OiAxNTBweDtcXG5cXG59XFxuXFxuLmljb25TZWN0IGltZ3tcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgXFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYmxvZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2YsMENBQTBDO0FBQzFDLGFBQWE7QUFDYixzQkFBc0I7QUFDdEIsbUJBQW1CO0FBQ25CLGtCQUFrQjs7OztBQUlsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLGdCQUFnQjs7QUFFcEI7OztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0dBQ3hCLG1CQUFtQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsK0JBQStCOztBQUVuQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7O0FBRTNCOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7O0FBR2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ibG9nU2VjdHtcXG5ncmlkLWNvbHVtbjogMiAvIDExO1xcbmdyaWQtcm93OjY4Lzc0IDtcXG4vKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcblxcblxcblxcbn1cXG5cXG4uYmxvZ1NlY3QgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDNweCAyNXB4O1xcblxcbn1cXG5cXG5cXG4uYmxvZ1NlY3QgaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAzcHggMjVweFxcbn1cXG5cXG4uYmxvZ1NlY3Qgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIFxcbn1cXG5cXG4uYmxvZ0NhcmRTZWN0e1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYmxvZ0NhcmR7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIFxcbn1cXG5cXG4uYmxvZ0NhcmQ6aG92ZXJ7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHdoaXRlO1xcbiAgICBcXG59XFxuXFxuLmJsb2dDYXJkIGltZ3tcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBoZWlnaHQ6IDE3MHB4O1xcbiAgIFxcbn1cXG5cXG4uYmxvZ0NhcmQgcDpudGgtY2hpbGQoMil7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIFxcbn1cXG5cXG4uYmxvZ0NhcmQgcDpudGgtY2hpbGQoMyl7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBcXG59XFxuXFxuXFxuLmJsb2dDYXJkIHA6bnRoLWNoaWxkKDQpe1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgXFxufVxcblxcbi5ibG9nQ2FyZCBwe1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG5cXG59XFxuXFxuLmljb25TZWN0e1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDdweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDI4cHg7XFxuICAgIGxlZnQ6IDE1MHB4O1xcblxcbn1cXG5cXG4uaWNvblNlY3QgaW1ne1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBcXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvQ2FsZW5kYXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0NoYXRzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9hZG1pbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcbi5ibG9nU2VjdFBhZ2V7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB3aWR0aDogODB2dztcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBcXG4gICAgXFxufVxcblxcbi5ibG9nUGFnZXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNzAlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOnJlcGVhdCg0LDYwMHB4KSA7XFxuXFxuICAgXFxuICAgIGdhcDogNTBweCAwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgICovXFxufVxcblxcbiAuYmxvZ1NlY3RQYWdlIC5wcm9maWxlRGV0YWlse1xcbiAgIFxcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgLyogYmFja2dyb3VuZDogIzAwMDsgKi9cXG59XFxuXFxuLmJsb2dQYWdlID4gZGl2Om50aC1jaGlsZCgxKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgLyogYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG59XFxuXFxuLmJsb2dQYWdlID4gZGl2Om50aC1jaGlsZCgyKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgLyogYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJsb2dQYWdlID4gZGl2Om50aC1jaGlsZCgzKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDY4MHB4O1xcbiAgICBcXG4gICAgLyogYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgXFxuICAgIFxcbn1cXG5cXG4uYmxvZ1BhZ2UgPiBkaXY6bGFzdC1jaGlsZHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgLyogYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiAuYmxvZ1NlY3RQYWdlIC5jYXJkIC5pbWdPZkJsb2cge1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICBcXG59XFxuXFxuLmRldGFpbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAvKiBnYXA6IDIwcHg7ICovXFxuICAgIHdpZHRoOiA3NzBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgYm90dG9tOiAxNDBweDtcXG4gICBsZWZ0OiA0MHB4O1xcbiAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgXFxuXFxufVxcblxcbi5kZXRhaWwgLmRhdGV7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGV0YWlsIC5tc2d7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxufVxcblxcbi5BZG1pbntcXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG4gICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxNDBweDtcXG4gICBoZWlnaHQ6IDMwcHg7XFxuICAgbGVmdDogMjIwcHg7XFxuICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5cXG4uVGV4dGNvbnRlbnRCbG9ne1xcbiAgICB3aWR0aDogNzcwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbi5UZXh0Y29udGVudEJsb2cgcDpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgXFxufVxcblxcbi5UZXh0Y29udGVudEJsb2cgcDpudGgtY2hpbGQoMil7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB3aWR0aDogNzUwcHg7XFxufVxcblxcbi5UZXh0Y29udGVudEJsb2cgYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcbn1cXG5cXG4uVGV4dGNvbnRlbnRCbG9nIGJ1dHRvbjpob3ZlcntcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG59XFxuXFxuLmJsb2dQYWdlID4gZGl2Om50aC1jaGlsZCgzKSAuZGV0YWlsLC5ibG9nUGFnZSA+IGRpdjpudGgtY2hpbGQoMykgLkFkbWlue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTcwcHg7XFxufVxcblxcbi5ibG9nU2VjdFBhZ2UgLnBhZ2VOdW1iZXIge1xcblxcblxcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206LTIzMDBweDtcXG4gICAgbGVmdDogLTczMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIGdhcDogNXB4O1xcbiAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG59XFxuXFxuLmJsb2dTZWN0UGFnZSAucGFnZU51bWJlciBkaXYge1xcblxcblxcbiAgIHdpZHRoOiA0NXB4O1xcbiAgIGhlaWdodDogNDBweDtcXG4gICBib3JkZXI6IC4wMDRlbSByZ2JhKDAsIDAsIDAsIDAuMjQ4KSBzb2xpZDtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgXFxuICAgXFxuXFxuXFxufVxcblxcbi5ibG9nU2VjdFBhZ2UgLnBhZ2VOdW1iZXIgZGl2OmhvdmVyICwuYmxvZ1NlY3RQYWdlIC5wYWdlTnVtYmVyICBwOmhvdmVyIHtcXG5cXG5cXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAuMDA0ZW0gcmdiYSgwLCAwLCAwLCAwLjI0OCkgc29saWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIFxcbiAgICBcXG4gXFxuIFxcbiB9XFxuXFxuLmJsb2dTZWN0UGFnZSAucGFnZU51bWJlciAgcCB7XFxuXFxuXFxuICAgIFxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiBcXG4gXFxuIH1cXG5cXG4uYmxvZ1NlY3RQYWdlIC5wYWdlTnVtYmVyIGRpdjpudGgtY2hpbGQoMykge1xcblxcblxcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtNTBweDtcXG4gICAgXFxuICAgXFxuIFxcbiBcXG4gfVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYmxvZ1BhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztHQUNaLGFBQWE7SUFDWixpQkFBaUI7SUFDakIsMENBQTBDOzs7QUFHOUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTs7SUFFVixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1DQUFtQzs7O0lBR25DLGFBQWE7SUFDYiwyQ0FBMkM7QUFDL0M7O0NBRUM7O0lBRUcsVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7O0lBRWIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1COzs7QUFHdkI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0NBRUM7SUFDRyxXQUFXO0lBQ1gsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0dBQ25CLGFBQWE7R0FDYixVQUFVO0dBQ1YsK0JBQStCO0dBQy9CLGdCQUFnQjs7O0FBR25COztBQUVBO0lBQ0ksd0RBQThDO0lBQzlDLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdEQUEyQztJQUMzQyxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHdEQUEyQztJQUMzQyxZQUFZO0lBQ1osWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7O0lBRTdCLGtCQUFrQjtJQUNsQixhQUFhO0dBQ2QsWUFBWTtHQUNaLFdBQVc7R0FDWCwrQkFBK0I7R0FDL0IsZ0JBQWdCO0FBQ25COzs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osWUFBWTs7SUFFWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0tBQ1osbUJBQW1CO0tBQ25CLFFBQVE7S0FDUix5QkFBeUI7QUFDOUI7O0FBRUE7OztHQUdHLFdBQVc7R0FDWCxZQUFZO0dBQ1oseUNBQXlDO0dBQ3pDLGFBQWE7R0FDYixtQkFBbUI7R0FDbkIsdUJBQXVCOzs7OztBQUsxQjs7QUFFQTs7O0lBR0ksV0FBVztJQUNYLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7R0FDeEIsdUJBQXVCO0lBQ3RCLG9DQUFvQzs7Ozs7Q0FLdkM7O0FBRUQ7Ozs7SUFJSSx5QkFBeUI7SUFDekIsYUFBYTs7O0NBR2hCOztBQUVEOzs7SUFHSSxXQUFXO0lBQ1gsWUFBWTs7SUFFWixrQkFBa0I7SUFDbEIsV0FBVzs7Ozs7Q0FLZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4uYmxvZ1NlY3RQYWdle1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uYmxvZ1BhZ2V7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDcwJTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoNCw2MDBweCkgO1xcblxcbiAgIFxcbiAgICBnYXA6IDUwcHggMHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICAqL1xcbn1cXG5cXG4gLmJsb2dTZWN0UGFnZSAucHJvZmlsZURldGFpbHtcXG4gICBcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIC8qIGJhY2tncm91bmQ6ICMwMDA7ICovXFxufVxcblxcbi5ibG9nUGFnZSA+IGRpdjpudGgtY2hpbGQoMSl7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxufVxcblxcbi5ibG9nUGFnZSA+IGRpdjpudGgtY2hpbGQoMil7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ibG9nUGFnZSA+IGRpdjpudGgtY2hpbGQoMyl7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA2ODBweDtcXG4gICAgXFxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIFxcbiAgICBcXG59XFxuXFxuLmJsb2dQYWdlID4gZGl2Omxhc3QtY2hpbGR7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4gLmJsb2dTZWN0UGFnZSAuY2FyZCAuaW1nT2ZCbG9nIHtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgXFxufVxcblxcbi5kZXRhaWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgLyogZ2FwOiAyMHB4OyAqL1xcbiAgICB3aWR0aDogNzcwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIGJvdHRvbTogMTQwcHg7XFxuICAgbGVmdDogNDBweDtcXG4gICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIFxcblxcbn1cXG5cXG4uZGV0YWlsIC5kYXRle1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vaW1hZ2VzL0NhbGVuZGFyLnBuZycpO1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kZXRhaWwgLm1zZ3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uL2ltYWdlcy9DaGF0cy5wbmcnKTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxufVxcblxcbi5BZG1pbntcXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uL2ltYWdlcy9hZG1pbi5wbmcnKTtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTQwcHg7XFxuICAgaGVpZ2h0OiAzMHB4O1xcbiAgIGxlZnQ6IDIyMHB4O1xcbiAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuXFxuLlRleHRjb250ZW50QmxvZ3tcXG4gICAgd2lkdGg6IDc3MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4uVGV4dGNvbnRlbnRCbG9nIHA6Zmlyc3QtY2hpbGR7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIFxcbn1cXG5cXG4uVGV4dGNvbnRlbnRCbG9nIHA6bnRoLWNoaWxkKDIpe1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IDc1MHB4O1xcbn1cXG5cXG4uVGV4dGNvbnRlbnRCbG9nIGJ1dHRvbntcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIHRyYW5zaXRpb246IC41cztcXG59XFxuXFxuLlRleHRjb250ZW50QmxvZyBidXR0b246aG92ZXJ7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxufVxcblxcbi5ibG9nUGFnZSA+IGRpdjpudGgtY2hpbGQoMykgLmRldGFpbCwuYmxvZ1BhZ2UgPiBkaXY6bnRoLWNoaWxkKDMpIC5BZG1pbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDE3MHB4O1xcbn1cXG5cXG4uYmxvZ1NlY3RQYWdlIC5wYWdlTnVtYmVyIHtcXG5cXG5cXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOi0yMzAwcHg7XFxuICAgIGxlZnQ6IC03MzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICBnYXA6IDVweDtcXG4gICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxufVxcblxcbi5ibG9nU2VjdFBhZ2UgLnBhZ2VOdW1iZXIgZGl2IHtcXG5cXG5cXG4gICB3aWR0aDogNDVweDtcXG4gICBoZWlnaHQ6IDQwcHg7XFxuICAgYm9yZGVyOiAuMDA0ZW0gcmdiYSgwLCAwLCAwLCAwLjI0OCkgc29saWQ7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIFxcbiAgIFxcblxcblxcbn1cXG5cXG4uYmxvZ1NlY3RQYWdlIC5wYWdlTnVtYmVyIGRpdjpob3ZlciAsLmJsb2dTZWN0UGFnZSAucGFnZU51bWJlciAgcDpob3ZlciB7XFxuXFxuXFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogLjAwNGVtIHJnYmEoMCwgMCwgMCwgMC4yNDgpIHNvbGlkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBcXG4gICAgXFxuIFxcbiBcXG4gfVxcblxcbi5ibG9nU2VjdFBhZ2UgLnBhZ2VOdW1iZXIgIHAge1xcblxcblxcbiAgICBcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gXFxuIFxcbiB9XFxuXFxuLmJsb2dTZWN0UGFnZSAucGFnZU51bWJlciBkaXY6bnRoLWNoaWxkKDMpIHtcXG5cXG5cXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTUwcHg7XFxuICAgIFxcbiAgIFxcbiBcXG4gXFxuIH1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuRm9vZENhdFNlY3Qge1xcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gICAgZ3JpZC1yb3c6IDIwLzI1O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgXFxuICAgIFxcbiAgICBcXG59XFxuXFxuLkZvb2RDYXRTZWN0ID5kaXY6Zmlyc3QtY2hpbGR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBcXG4gICBcXG59XFxuXFxuLkZvb2RDYXRTZWN0IGRpdjpudGgtY2hpbGQoMil7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICB3aWR0aDogMTAwcHg7XFxuICAgaGVpZ2h0OiAzNXB4O1xcbiAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgIHRvcDogMjAwcHg7XFxuICAgbGVmdDogODBweDtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgXFxufVxcblxcbi5Gb29kQ2F0U2VjdCBkaXY6bnRoLWNoaWxkKDMpe1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOiAyNDVweDtcXG4gICAgbGVmdDogMjVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIFxcbn1cXG4uRm9vZENhdFNlY3QgPiBkaXYgaW1ne1xcbiAgIHdpZHRoOiAyMjBweDtcXG4gICBtYXJnaW46IDBweCAxMHB4O1xcbiAgIFxcbn1cXG5cXG4uc2lkZUdyYXNzSW1ne1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICByaWdodDogLTIwMHB4O1xcbiAgIHRvcDoxODBweDtcXG59XFxuXFxuLkZvb2RDYXRTZWN0ICBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG4gICAgXFxuIH1cXG5cXG4gLkZvb2RDYXRTZWN0ICBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICAgIFxcbiB9XFxuXFxuIC5Gb29kQ2F0U2VjdCBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZm9vZENhdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTs7SUFFZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCOzs7O0FBSXRCOztBQUVBO0lBQ0ksV0FBVzs7SUFFWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxnQkFBZ0I7OztBQUdwQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxrQkFBa0I7R0FDbkIsWUFBWTtHQUNaLFlBQVk7R0FDWixpQkFBaUI7R0FDakIsVUFBVTtHQUNWLFVBQVU7R0FDVixhQUFhO0dBQ2IsdUJBQXVCO0dBQ3ZCLG1CQUFtQjtHQUNuQixrQ0FBa0M7R0FDbEMseUJBQXlCO0dBQ3pCLGdCQUFnQjs7QUFFbkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyx1QkFBdUI7O0FBRTNCO0FBQ0E7R0FDRyxZQUFZO0dBQ1osZ0JBQWdCOztBQUVuQjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixhQUFhO0dBQ2IsU0FBUztBQUNaOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsa0JBQWtCOztDQUVyQjs7Q0FFQTtJQUNHLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCOztDQUVyQjs7Q0FFQTtJQUNHLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7Q0FDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkZvb2RDYXRTZWN0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTE7XFxuICAgIGdyaWQtcm93OiAyMC8yNTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcbiAgICBcXG4gICAgXFxufVxcblxcbi5Gb29kQ2F0U2VjdCA+ZGl2OmZpcnN0LWNoaWxke1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgXFxuICAgXFxufVxcblxcbi5Gb29kQ2F0U2VjdCBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgd2lkdGg6IDEwMHB4O1xcbiAgIGhlaWdodDogMzVweDtcXG4gICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICB0b3A6IDIwMHB4O1xcbiAgIGxlZnQ6IDgwcHg7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICBmb250LXdlaWdodDogNjAwO1xcbiAgIFxcbn1cXG5cXG4uRm9vZENhdFNlY3QgZGl2Om50aC1jaGlsZCgzKXtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDogMjQ1cHg7XFxuICAgIGxlZnQ6IDI1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBcXG59XFxuLkZvb2RDYXRTZWN0ID4gZGl2IGltZ3tcXG4gICB3aWR0aDogMjIwcHg7XFxuICAgbWFyZ2luOiAwcHggMTBweDtcXG4gICBcXG59XFxuXFxuLnNpZGVHcmFzc0ltZ3tcXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgcmlnaHQ6IC0yMDBweDtcXG4gICB0b3A6MTgwcHg7XFxufVxcblxcbi5Gb29kQ2F0U2VjdCAgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxuICAgIFxcbiB9XFxuXFxuIC5Gb29kQ2F0U2VjdCAgaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgICBcXG4gfVxcblxcbiAuRm9vZENhdFNlY3Qgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9mYi1mLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy90d2l0dGVyLWYucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2luc3RhLWYucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3l0LWYucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3Bpbi1mLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9DbG9jay5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mb290ZXJ7XFxuICBwYWRkaW5nOiAzMHB4ICAyMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEvMTQ7XFxuICBncmlkLXJvdzogNzUvODE7XFxuICAvKiBib3JkZXI6IDFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkOyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIFxcbn1cXG5cXG4uZ3Jhc3NDb3JuZXIge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICByaWdodDogMHB4O1xcbiAgIGJvdHRvbTogMHB4O1xcbiAgIG9wYWNpdHk6IC41O1xcbiAgIFxcbn1cXG5cXG4uZm9vdGVyQmVsdHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIFxcbn1cXG5cXG4uc29jaWFsTWVkU2Vje1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMTQwcHg7XFxufVxcblxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCgxKXtcXG5iYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbndpZHRoOiAyN3B4O1xcbmhlaWdodDogMjdweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuYmFja2dyb3VuZC1zaXplOiAzMCU7XFxubWFyZ2luOiAwcHggNnB4O1xcblxcblxcbn1cXG5cXG4uc29jaWFsTWVkU2VjIGRpdjpudGgtY2hpbGQoMil7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgd2lkdGg6IDI3cHg7XFxuICBoZWlnaHQ6IDI3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0NSU7XFxuICBtYXJnaW46IDBweCA2cHg7XFxuICBcXG4gIH1cXG5cXG4uc29jaWFsTWVkU2VjIGRpdjpudGgtY2hpbGQoMyl7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIHdpZHRoOiAyN3B4O1xcbiAgICBoZWlnaHQ6IDI3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQ1JTtcXG4gICAgbWFyZ2luOiAwcHggNnB4O1xcbiAgICBcXG4gICAgfVxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCg0KXtcXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICAgIHdpZHRoOiAyN3B4O1xcbiAgICAgIGhlaWdodDogMjdweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1zaXplOiA0NSU7XFxuICAgICAgbWFyZ2luOiAwcHggNnB4O1xcbiAgICAgIFxcbiAgICAgIH1cXG4uc29jaWFsTWVkU2VjIGRpdjpudGgtY2hpbGQoNSl7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICAgICAgd2lkdGg6IDI3cHg7XFxuICAgICAgICBoZWlnaHQ6IDI3cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0NSU7XFxuICAgICAgICBtYXJnaW46IDBweCA2cHg7XFxuICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4uZm9vdGVyQmVsdCBwe1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgICAgZm9udC1zaXplOjE3cHg7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNDBweDtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7IFxcbiAgICAgICAgfVxcblxcbi5mb290ZXJDb250ZW50e1xcblxcbndpZHRoOiA4NSU7XFxuaGVpZ2h0OiAxMDAlO1xcbi8qIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7ICovXFxuZGlzcGxheTogZmxleDtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbm1hcmdpbi10b3A6IC0yMHB4O1xcblxcbn1cXG5cXG4uZm9vdGVyVHh0Q29udGVudHtcXG4gICB3aWR0aDogMTAwJTtcXG4gICBoZWlnaHQ6IDUwJTtcXG4gICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgZGlzcGxheTogZmxleDtcXG4gICBnYXA6IDQwcHg7XFxuICAgbWFyZ2luLXJpZ2h0OiA2MHB4XFxuICAgO1xcbn1cXG5cXG4uZm9vdGVyVHh0Q29udGVudCA+IGRpdntcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICAvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4IDBweDtcXG59XFxuXFxuLlJjdFBvc3QgZGl2e1xcbiAgXFxuICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmOyA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA1NHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogMHB4IDhweDtcXG59XFxuXFxuLlJjdFBvc3QgaW1ne1xcbmhlaWdodDogNDBweDtcXG53aWR0aDogNDBweDtcXG5ncmlkLWNvbHVtbjogMS8yO1xcbmdyaWQtcm93OiAxLzM7XFxuXFxufVxcblxcbi5SY3RQb3N0IGRpdiBwOm50aC1jaGlsZCgyKXtcXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDMpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uUmN0UG9zdCBkaXYgcDpudGgtY2hpbGQoMyl7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIFxcbn1cXG5cXG4uUmN0UG9zdCBoMntcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlbHBTZWN0IGgye1xcbiAgY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgXFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlbHBTZWN0IHB7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7IFxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi51c2VGdWxsU2VjdCBwe1xcbiAgY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmOyBcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udXNlRnVsbFNlY3QgaDJ7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4uYWJvdXRVc1NlY3QgPiBwe1xcbmNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbmZvbnQtd2VpZ2h0OiAzMDA7XFxuZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWYgO1xcbmZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xcbm1hcmdpbi10b3A6IDhweDtcXG4gIFxcbn1cXG5cXG4uYWJvdXRVc1NlY3QgPiBoMntcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgXFxuICB9XFxuXFxuLm9wZW5IclNlY3RNYWlue1xcbiBkaXNwbGF5OiBmbGV4O1xcbiBnYXA6IDBweCAxMHB4O1xcbiBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG5cXG59XFxuXFxuLm9wZW5IclNlY3RJY29ue1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1zaXplOiA3MCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFxufVxcblxcbi5hYm91dFVzU2VjdCBwOm50aC1jaGlsZCgxKXtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG5cXG59XFxuXFxuLmFib3V0VXNTZWN0IHA6bnRoLWNoaWxkKDIpe1xcbiAgZm9udC1zaXplOiAxMHB4O1xcblxcbn1cXG5cXG4uYWJvdXRVc1NlY3QgcDpudGgtY2hpbGQoMyl7XFxuICBmb250LXNpemU6IDEwcHg7XFxuXFxufVxcblxcbi5vcGVuSHJTZWN0e1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzQ7XFxufVxcblxcbi5zdXBwb3J0U2VjdHtcXG4gIHdpZHRoOiA2OSU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBib3JkZXI6IDFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkO1xcbiAgbWFyZ2luLWJvdHRvbTotNDBweDtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogMHB4IDMwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLnN1cHBvcnRTZWN0IHNwYW57XFxuY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG5mb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zdXBwb3J0U2VjdCBwOmZpcnN0LWNoaWxke1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICBmb250LXNpemU6IDE5cHg7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB9XFxuXFxuICAuc3VwcG9ydFNlY3QgcDpudGgtY2hpbGQoMil7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBcXG4gICAgfVxcblxcbiAgICAuc3VwcG9ydFNlY3QgZGl2e1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgfVxcblxcbiAgICAgIC5zdXBwb3J0U2VjdCBpbnB1dHtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLnN1cHBvcnRTZWN0IGlucHV0OmZvY3Vze1xcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICBcXG4gICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLnN1cHBvcnRTZWN0IGlucHV0OjpwbGFjZWhvbGRlcntcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgfVxcblxcbiAgICAgIC5zdXBwb3J0U2VjdCBidXR0b257XFxuICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgICAgIDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAuc3VwcG9ydFNlY3QgYnV0dG9uOmhvdmVye1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjMzLCAyMzMpXFxuICAgICAgICAgICAgIDtcXG4gICAgICAgICAgICAgICB9XFxuXFxuICAgIFxcblxcblxcblxcblxcblxcblxcblxcbiAgICAgICAgICAgIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1COztBQUVyQjs7QUFFQTtJQUNJLGFBQWE7R0FDZCxrQkFBa0I7R0FDbEIsVUFBVTtHQUNWLFdBQVc7R0FDWCxXQUFXOztBQUVkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1COztBQUV2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtBQUNBLG1EQUFx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LGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDJDQUEyQztFQUMzQyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCLGVBQWU7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsbUNBQW1DOztJQUVuQzs7SUFFQTtJQUNBLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGFBQWE7TUFDWDs7TUFFQTtRQUNFLFlBQVk7UUFDWixvQ0FBb0M7UUFDcEMsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixhQUFhOztVQUVYOztVQUVBO1lBQ0UsWUFBWTtZQUNaLG9DQUFvQztZQUNwQyxZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixZQUFZO1lBQ1osYUFBYTs7Y0FFWDs7VUFFSjtZQUNFLGdDQUFnQztZQUNoQyx1QkFBdUI7OztjQUdyQjs7TUFFUjtPQUNDLFlBQVk7UUFDWCxrQ0FBa0M7UUFDbEMsWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7O1VBRWI7O1VBRUE7WUFDRSxZQUFZO2FBQ1gsa0NBQWtDO2FBQ2xDLFlBQVk7YUFDWixhQUFhO2FBQ2Isa0JBQWtCO2FBQ2xCLHlCQUF5QjthQUN6QixlQUFlO2FBQ2Y7YUFDQTtlQUNFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXJ7XFxuICBwYWRkaW5nOiAzMHB4ICAyMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEvMTQ7XFxuICBncmlkLXJvdzogNzUvODE7XFxuICAvKiBib3JkZXI6IDFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkOyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIFxcbn1cXG5cXG4uZ3Jhc3NDb3JuZXIge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICByaWdodDogMHB4O1xcbiAgIGJvdHRvbTogMHB4O1xcbiAgIG9wYWNpdHk6IC41O1xcbiAgIFxcbn1cXG5cXG4uZm9vdGVyQmVsdHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIFxcbn1cXG5cXG4uc29jaWFsTWVkU2Vje1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMTQwcHg7XFxufVxcblxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCgxKXtcXG5iYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9mYi1mLnBuZycpO1xcbndpZHRoOiAyN3B4O1xcbmhlaWdodDogMjdweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuYmFja2dyb3VuZC1zaXplOiAzMCU7XFxubWFyZ2luOiAwcHggNnB4O1xcblxcblxcbn1cXG5cXG4uc29jaWFsTWVkU2VjIGRpdjpudGgtY2hpbGQoMil7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy90d2l0dGVyLWYucG5nJyk7XFxuICB3aWR0aDogMjdweDtcXG4gIGhlaWdodDogMjdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDQ1JTtcXG4gIG1hcmdpbjogMHB4IDZweDtcXG4gIFxcbiAgfVxcblxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCgzKXtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvaW5zdGEtZi5wbmcnKTtcXG4gICAgd2lkdGg6IDI3cHg7XFxuICAgIGhlaWdodDogMjdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDUlO1xcbiAgICBtYXJnaW46IDBweCA2cHg7XFxuICAgIFxcbiAgICB9XFxuLnNvY2lhbE1lZFNlYyBkaXY6bnRoLWNoaWxkKDQpe1xcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL3l0LWYucG5nJyk7XFxuICAgICAgd2lkdGg6IDI3cHg7XFxuICAgICAgaGVpZ2h0OiAyN3B4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDQ1JTtcXG4gICAgICBtYXJnaW46IDBweCA2cHg7XFxuICAgICAgXFxuICAgICAgfVxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCg1KXtcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL3Bpbi1mLnBuZycpO1xcbiAgICAgICAgd2lkdGg6IDI3cHg7XFxuICAgICAgICBoZWlnaHQ6IDI3cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0NSU7XFxuICAgICAgICBtYXJnaW46IDBweCA2cHg7XFxuICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4uZm9vdGVyQmVsdCBwe1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgICAgZm9udC1zaXplOjE3cHg7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNDBweDtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7IFxcbiAgICAgICAgfVxcblxcbi5mb290ZXJDb250ZW50e1xcblxcbndpZHRoOiA4NSU7XFxuaGVpZ2h0OiAxMDAlO1xcbi8qIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7ICovXFxuZGlzcGxheTogZmxleDtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbm1hcmdpbi10b3A6IC0yMHB4O1xcblxcbn1cXG5cXG4uZm9vdGVyVHh0Q29udGVudHtcXG4gICB3aWR0aDogMTAwJTtcXG4gICBoZWlnaHQ6IDUwJTtcXG4gICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgZGlzcGxheTogZmxleDtcXG4gICBnYXA6IDQwcHg7XFxuICAgbWFyZ2luLXJpZ2h0OiA2MHB4XFxuICAgO1xcbn1cXG5cXG4uZm9vdGVyVHh0Q29udGVudCA+IGRpdntcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICAvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4IDBweDtcXG59XFxuXFxuLlJjdFBvc3QgZGl2e1xcbiAgXFxuICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmOyA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA1NHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogMHB4IDhweDtcXG59XFxuXFxuLlJjdFBvc3QgaW1ne1xcbmhlaWdodDogNDBweDtcXG53aWR0aDogNDBweDtcXG5ncmlkLWNvbHVtbjogMS8yO1xcbmdyaWQtcm93OiAxLzM7XFxuXFxufVxcblxcbi5SY3RQb3N0IGRpdiBwOm50aC1jaGlsZCgyKXtcXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDMpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uUmN0UG9zdCBkaXYgcDpudGgtY2hpbGQoMyl7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIFxcbn1cXG5cXG4uUmN0UG9zdCBoMntcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlbHBTZWN0IGgye1xcbiAgY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgXFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlbHBTZWN0IHB7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7IFxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi51c2VGdWxsU2VjdCBwe1xcbiAgY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmOyBcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udXNlRnVsbFNlY3QgaDJ7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4uYWJvdXRVc1NlY3QgPiBwe1xcbmNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbmZvbnQtd2VpZ2h0OiAzMDA7XFxuZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWYgO1xcbmZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xcbm1hcmdpbi10b3A6IDhweDtcXG4gIFxcbn1cXG5cXG4uYWJvdXRVc1NlY3QgPiBoMntcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgXFxuICB9XFxuXFxuLm9wZW5IclNlY3RNYWlue1xcbiBkaXNwbGF5OiBmbGV4O1xcbiBnYXA6IDBweCAxMHB4O1xcbiBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG5cXG59XFxuXFxuLm9wZW5IclNlY3RJY29ue1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL0Nsb2NrLnBuZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogNzAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcbn1cXG5cXG4uYWJvdXRVc1NlY3QgcDpudGgtY2hpbGQoMSl7XFxuICBmb250LXNpemU6IDE1cHg7XFxuXFxufVxcblxcbi5hYm91dFVzU2VjdCBwOm50aC1jaGlsZCgyKXtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG5cXG59XFxuXFxuLmFib3V0VXNTZWN0IHA6bnRoLWNoaWxkKDMpe1xcbiAgZm9udC1zaXplOiAxMHB4O1xcblxcbn1cXG5cXG4ub3BlbkhyU2VjdHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS80O1xcbn1cXG5cXG4uc3VwcG9ydFNlY3R7XFxuICB3aWR0aDogNjklO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDtcXG4gIG1hcmdpbi1ib3R0b206LTQwcHg7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDBweCAzMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5zdXBwb3J0U2VjdCBzcGFue1xcbmNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc3VwcG9ydFNlY3QgcDpmaXJzdC1jaGlsZHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgfVxcblxcbiAgLnN1cHBvcnRTZWN0IHA6bnRoLWNoaWxkKDIpe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgXFxuICAgIH1cXG5cXG4gICAgLnN1cHBvcnRTZWN0IGRpdntcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIH1cXG5cXG4gICAgICAuc3VwcG9ydFNlY3QgaW5wdXR7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5zdXBwb3J0U2VjdCBpbnB1dDpmb2N1c3tcXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgXFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5zdXBwb3J0U2VjdCBpbnB1dDo6cGxhY2Vob2xkZXJ7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgICAgICAgICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAgIH1cXG5cXG4gICAgICAuc3VwcG9ydFNlY3QgYnV0dG9ue1xcbiAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgICAgICA7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLnN1cHBvcnRTZWN0IGJ1dHRvbjpob3ZlcntcXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzMywgMjMzKVxcbiAgICAgICAgICAgICA7XFxuICAgICAgICAgICAgICAgfVxcblxcbiAgICBcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4gICAgICAgICAgICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG4uRnJvbU1lbnVNYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gICAgZ3JpZC1yb3c6IDQyLzQ1O1xcbiAgIFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5Gcm9tTWVudU1haW4gaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDs7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICB0b3A6IC0xMTBweDtcXG59XFxuXFxuLkZyb21NZW51TWFpbiBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIHRvcDogLTgwcHg7XFxufVxcblxcbi5Gcm9tTWVudU1haW4gc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5uYXZ7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyNSU7ICovXFxufVxcbi5uYXYgdWwgbGl7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4ubWVudUxpc3RTZWN0e1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIG1hcmdpbi10b3A6IGF1dG8gKi9cXG59XFxuXFxuXFxuLm1lbnVMaXN0U2VjdCBkaXY6Zmlyc3QtY2hpbGR7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4ubWVudVNlY3R7XFxuICAgIHdpZHRoOjc1MHB4O1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBcXG59XFxuXFxuLm1lbnVTZWN0IGltZ3tcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5tZW51U2VjdCB1bHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweCAwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm1lbnVTZWN0IGxpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXG4gICBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb29kSXRlbUltZ1NlY3R7XFxuICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWVudVNlY3QgbGkgaW1ne1xcbiAgICBcXG4gICAgXFxuXFxufVxcbi5tZW51U2VjdCBsaSBwOm50aC1jaGlsZCgxKXtcXG5mb250LXNpemU6IDEycHg7XFxuXFxufVxcblxcbi5tZW51U2VjdCBsaSBwOm50aC1jaGlsZCgyKXtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBcXG4gICAgfVxcblxcbi5tZW51U2VjdCBsaSBwOm50aC1jaGlsZCgzKXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxufVxcblxcblxcbi5kaXNwbGF5RGlzaCBpbWd7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLlRlc3RpbW9uaWFsU0VDVHtcXG4gICAgXFxuICAgIGdyaWQtY29sdW1uOiAyLzExO1xcbiAgICBncmlkLXJvdzogNTQvNjA7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZnJvbU1lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGVBQWU7O0lBRWYsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtlQUNXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhOztJQUViLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7OztBQUdqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixpQkFBaUI7O0lBRWpCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBLGVBQWU7O0FBRWY7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCOztJQUVoQjs7QUFFSjtRQUNRLGVBQWU7UUFDZix5QkFBeUI7QUFDakM7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG4uRnJvbU1lbnVNYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gICAgZ3JpZC1yb3c6IDQyLzQ1O1xcbiAgIFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5Gcm9tTWVudU1haW4gaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDs7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICB0b3A6IC0xMTBweDtcXG59XFxuXFxuLkZyb21NZW51TWFpbiBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIHRvcDogLTgwcHg7XFxufVxcblxcbi5Gcm9tTWVudU1haW4gc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5uYXZ7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyNSU7ICovXFxufVxcbi5uYXYgdWwgbGl7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4ubWVudUxpc3RTZWN0e1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIG1hcmdpbi10b3A6IGF1dG8gKi9cXG59XFxuXFxuXFxuLm1lbnVMaXN0U2VjdCBkaXY6Zmlyc3QtY2hpbGR7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4ubWVudVNlY3R7XFxuICAgIHdpZHRoOjc1MHB4O1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBcXG59XFxuXFxuLm1lbnVTZWN0IGltZ3tcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5tZW51U2VjdCB1bHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweCAwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm1lbnVTZWN0IGxpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXG4gICBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb29kSXRlbUltZ1NlY3R7XFxuICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWVudVNlY3QgbGkgaW1ne1xcbiAgICBcXG4gICAgXFxuXFxufVxcbi5tZW51U2VjdCBsaSBwOm50aC1jaGlsZCgxKXtcXG5mb250LXNpemU6IDEycHg7XFxuXFxufVxcblxcbi5tZW51U2VjdCBsaSBwOm50aC1jaGlsZCgyKXtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBcXG4gICAgfVxcblxcbi5tZW51U2VjdCBsaSBwOm50aC1jaGlsZCgzKXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxufVxcblxcblxcbi5kaXNwbGF5RGlzaCBpbWd7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLlRlc3RpbW9uaWFsU0VDVHtcXG4gICAgXFxuICAgIGdyaWQtY29sdW1uOiAyLzExO1xcbiAgICBncmlkLXJvdzogNTQvNjA7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi92YXJyaWFibGVzLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PUludGVyOndnaHRAMjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaGVhZGVye1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubG9nbyBpbWd7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICBsZWZ0OjQ3JTtcXG59XFxuXFxudWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgXFxufVxcblxcbmxpe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjs7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnNlYXJjaFNlY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQ2cHg7XFxuICAgIHJpZ2h0OiAxcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICBcXG4gICAgXFxufVxcblxcblxcbi5zZWFyY2hCYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbn1cXG5cXG4jaGFuZEJhZ3tcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VhcmNoSWNvbiB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgXFxuICAgIG1hcmdpbi1yaWdodDogMTdweDtcXG59XFxuXFxuLnNlYXJjaEJhciBpbnB1dHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IDE2NnB4O1xcbiAgICBcXG59XFxuXFxuLnNlYXJjaEJhciBpbnB1dDo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixpQkFBaUI7O0FBRW5COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjs7O0FBR3ZCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTs7SUFFWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL3ZhcnJpYWJsZXMuY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZmYW1pbHk9SW50ZXI6d2dodEAyMDAmZGlzcGxheT1zd2FwJyk7XFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5oZWFkZXJ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdyaWQtY29sdW1uOiAyLzEyO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sb2dvIGltZ3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIGxlZnQ6NDclO1xcbn1cXG5cXG51bHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBcXG59XFxuXFxubGl7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmOztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uc2VhcmNoU2VjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDZweDtcXG4gICAgcmlnaHQ6IDFweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIFxcbiAgICBcXG59XFxuXFxuXFxuLnNlYXJjaEJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgXFxufVxcblxcbiNoYW5kQmFne1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2hJY29uIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBcXG4gICAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xcbn1cXG5cXG4uc2VhcmNoQmFyIGlucHV0e1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB3aWR0aDogMTY2cHg7XFxuICAgIFxcbn1cXG5cXG4uc2VhcmNoQmFyIGlucHV0OjpwbGFjZWhvbGRlcntcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi92YXJyaWFibGVzLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaG9tZURpc2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZmYW1pbHk9SW50ZXI6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJtYWlue1xcblxcbiAgICBncmlkLWNvbHVtbjogMi8xMztcXG4gIGdyaWQtcm93OiAzLzg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgXFxuICBcXG59XFxuXFxubWFpbiAudGV4dENvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNDglO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6MXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uc29jaWFsU2VjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDozMCU7XFxuICAgIGxlZnQ6IC0xMHB4O1xcbiAgIFxcbn1cXG5cXG4uc29jaWFsU2VjdCBpbWd7XFxuICAgIGhlaWdodDogMTRweDtcXG4gICAgd2lkdGg6MTRweDtcXG4gICAgXFxufVxcblxcbi50ZXh0Q29udGVudCBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICB3aWR0aDoxMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWFyZ2luOjEwcHggIDM1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxufVxcblxcbi50ZXh0Q29udGVudCBwe1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxud2lkdGg6IDM5MHB4O1xcbm1hcmdpbjogMTBweCAzNXB4O1xcbmZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50ZXh0Q29udGVudCAuaGVhZGluZzJ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxufVxcblxcblxcbi50ZXh0Q29udGVudCAuaGVhZGluZzF7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgXFxufVxcblxcblxcbi5pbWFnZVNlY3R7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMTMwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA5OCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgXFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7O0lBRUksaUJBQWlCO0VBQ25CLGFBQWE7RUFDYixhQUFhOzs7QUFHZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsa0JBQWtCOzs7QUFHdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsYUFBYTtHQUNkLG1CQUFtQjtHQUNuQix1QkFBdUI7SUFDdEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxXQUFXOztBQUVmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIsdUJBQXVCO0FBQ3ZCLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsK0JBQStCO0FBQy9COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxpQkFBaUI7O0FBRXJCOzs7QUFHQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osbURBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQiw0QkFBNEI7O0FBRWhDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vdmFycmlhYmxlcy5jc3MnO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyZWF0K1ZpYmVzJmZhbWlseT1JbnRlcjp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxubWFpbntcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDIvMTM7XFxuICBncmlkLXJvdzogMy84O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIFxcbiAgXFxufVxcblxcbm1haW4gLnRleHRDb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQ4JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OjFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLnNvY2lhbFNlY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MzAlO1xcbiAgICBsZWZ0OiAtMTBweDtcXG4gICBcXG59XFxuXFxuLnNvY2lhbFNlY3QgaW1ne1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxuICAgIHdpZHRoOjE0cHg7XFxuICAgIFxcbn1cXG5cXG4udGV4dENvbnRlbnQgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgd2lkdGg6MTIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIG1hcmdpbjoxMHB4ICAzNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbn1cXG5cXG4udGV4dENvbnRlbnQgcHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbmNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbndpZHRoOiAzOTBweDtcXG5tYXJnaW46IDEwcHggMzVweDtcXG5mb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udGV4dENvbnRlbnQgLmhlYWRpbmcye1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbn1cXG5cXG5cXG4udGV4dENvbnRlbnQgLmhlYWRpbmcxe1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IFZpYmVzJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuICAgIFxcbn1cXG5cXG5cXG4uaW1hZ2VTZWN0e1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEzMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2hvbWVEaXNoLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDk4JTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZhcnJpYWJsZXMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNV9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb2RDYXQuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF82X19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vV2h5Q2hvb3NlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfN19fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc3RyYXVJbmZvU2VjdC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzhfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mcm9tTWVudS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzlfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9vdXJDaGVmLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZXN0aW1vbmlhbC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzExX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzdHJhdUFjdGl2ZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEyX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmxvZy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEzX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWVudVBhZ2UuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xNF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2VIZWFkZXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xNV9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jsb2dQYWdlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTZfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaG9wLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTdfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hYm91dFBhZ2UuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9tYWluYmcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfN19fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfOF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfOV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzExX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTNfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzE0X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xNV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTZfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzE3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICBcXG4gICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG4gICAgXFxufVxcblxcblxcblxcbi5jb250ZW50e1xcbndpZHRoOiAxMDB2dztcXG5iYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC44MDQpO1xcbmhlaWdodDogMTIwJTtcXG5kaXNwbGF5OiBncmlkO1xcbmdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsODhweCk7XFxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoODAsNzBweCk7XFxuZ2FwOjBweCAyNHB4O1xcbnotaW5kZXg6IDE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBb0JBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLHlEQUE2QztJQUM3QyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixjQUFjOztHQUVmLGtCQUFrQjtJQUNqQix3QkFBd0I7O0FBRTVCOzs7O0FBSUE7QUFDQSxZQUFZO0FBQ1oscUNBQXFDO0FBQ3JDLFlBQVk7QUFDWixhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLHNDQUFzQztBQUN0QyxtQ0FBbUM7QUFDbkMsWUFBWTtBQUNaLFVBQVU7QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL3ZhcnJpYWJsZXMuY3NzJztcXG5AaW1wb3J0IFxcXCIuL2hlYWRlci5jc3NcXFwiO1xcbkBpbXBvcnQgJy4vaG9tZS5jc3MnO1xcbkBpbXBvcnQgJy4vZm9vdGVyLmNzcyc7XFxuQGltcG9ydCAnLi9hYm91dC5jc3MnO1xcbkBpbXBvcnQgJy4vZm9vZENhdC5jc3MnO1xcbkBpbXBvcnQgJy4vV2h5Q2hvb3NlLmNzcyc7XFxuQGltcG9ydCAnLi9yZXN0cmF1SW5mb1NlY3QuY3NzJztcXG5AaW1wb3J0ICcuL2Zyb21NZW51LmNzcyc7XFxuQGltcG9ydCAnLi9vdXJDaGVmLmNzcyc7XFxuQGltcG9ydCAnLi90ZXN0aW1vbmlhbC5jc3MnO1xcbkBpbXBvcnQgJy4vcmVzdHJhdUFjdGl2ZS5jc3MnO1xcbkBpbXBvcnQgJy4vYmxvZy5jc3MnO1xcbkBpbXBvcnQgJy4vTWVudVBhZ2UuY3NzJztcXG5AaW1wb3J0ICcuL3BhZ2VIZWFkZXIuY3NzJztcXG5AaW1wb3J0ICcuL2Jsb2dQYWdlLmNzcyc7XFxuQGltcG9ydCAnLi9zaG9wLmNzcyc7XFxuQGltcG9ydCAnLi9hYm91dFBhZ2UuY3NzJztcXG5cXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9tYWluYmcucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgIFxcbiAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuLmNvbnRlbnR7XFxud2lkdGg6IDEwMHZ3O1xcbmJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjgwNCk7XFxuaGVpZ2h0OiAxMjAlO1xcbmRpc3BsYXk6IGdyaWQ7XFxuZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiw4OHB4KTtcXG5ncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4MCw3MHB4KTtcXG5nYXA6MHB4IDI0cHg7XFxuei1pbmRleDogMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuLm91ckNoZWZTZWN0e1xcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gICAgZ3JpZC1yb3c6IDQ3LzUyO1xcbiAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5vdXJDaGVmU2VjdCBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4OztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBcXG59XFxuXFxuLm91ckNoZWZTZWN0IGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzBweDtcXG4gICAgbGVmdDogMzIwcHg7XFxufVxcblxcbi5vdXJDaGVmU2VjdCBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmNoZWZMaXN0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gIFxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICB0b3A6IDIwcHg7XFxuICAgIFxcbn1cXG5cXG4gLm91ckNoZWZTZWN0IGJ1dHRvbiB7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtODBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLm91ckNoZWZTZWN0IGJ1dHRvbjpob3ZlciB7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtODBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbn1cXG5cXG4uY2hlZkxpc3QgLmNoZWZTZWN0e1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxufVxcblxcbi5jaGVmTGlzdCBpbWd7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgc2NhbGU6IDE7XFxuICAgIFxcbiAgICB0cmFuc2l0aW9uOiAuNXM7XFxufVxcblxcbi5jaGVmTGlzdCBpbWc6aG92ZXJ7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgc2NhbGU6IDEuMjtcXG59XFxuXFxuLmNoZWZMaXN0IC5pbmZve1xcblxcbiAgICB3aWR0aDogMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jbHIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IC41cztcXG59XFxuXFxuLmNoZWZMaXN0IC5pbmZvIHA6Zmlyc3QtY2hpbGR7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgXFxuXFxufVxcblxcbi5jaGVmTGlzdCAuaW5mbyBwOm50aC1jaGlsZCgyKXtcXG4gICAgZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOjEwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIFxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL291ckNoZWYuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhOztJQUViLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtHQUN4QixrQkFBa0I7R0FDbEIsU0FBUzs7QUFFWjs7Q0FFQzs7SUFFRyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25COztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFROztJQUVSLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7OztBQUdqQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsYUFBYTs7QUFFakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuLm91ckNoZWZTZWN0e1xcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gICAgZ3JpZC1yb3c6IDQ3LzUyO1xcbiAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5vdXJDaGVmU2VjdCBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4OztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBcXG59XFxuXFxuLm91ckNoZWZTZWN0IGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzBweDtcXG4gICAgbGVmdDogMzIwcHg7XFxufVxcblxcbi5vdXJDaGVmU2VjdCBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmNoZWZMaXN0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gIFxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICB0b3A6IDIwcHg7XFxuICAgIFxcbn1cXG5cXG4gLm91ckNoZWZTZWN0IGJ1dHRvbiB7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtODBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLm91ckNoZWZTZWN0IGJ1dHRvbjpob3ZlciB7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtODBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbn1cXG5cXG4uY2hlZkxpc3QgLmNoZWZTZWN0e1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxufVxcblxcbi5jaGVmTGlzdCBpbWd7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgc2NhbGU6IDE7XFxuICAgIFxcbiAgICB0cmFuc2l0aW9uOiAuNXM7XFxufVxcblxcbi5jaGVmTGlzdCBpbWc6aG92ZXJ7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgc2NhbGU6IDEuMjtcXG59XFxuXFxuLmNoZWZMaXN0IC5pbmZve1xcblxcbiAgICB3aWR0aDogMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jbHIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IC41cztcXG59XFxuXFxuLmNoZWZMaXN0IC5pbmZvIHA6Zmlyc3QtY2hpbGR7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgXFxuXFxufVxcblxcbi5jaGVmTGlzdCAuaW5mbyBwOm50aC1jaGlsZCgyKXtcXG4gICAgZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOjEwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIFxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9yZXN0cmF1QWN0aXZlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9wbGF5LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PUludGVyOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuXFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5yZXN0cmF1QWN0aXZlU2VjdHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLzE0O1xcbiAgICBncmlkLXJvdzogNjIvNjY7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5yZXN0cmF1QWN0aXZlU2VjdCBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbi1yaWdodDogMjYwcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcblxcbn1cXG5cXG4ucmVzdHJhdUFjdGl2ZVNlY3QgaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjYwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ucmVzdHJhdUFjdGl2ZVNlY3Qgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxufVxcblxcbi5yZXN0cmF1QWN0aXZlU2VjdCBwe1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5idG5TZWN0IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIFxcbiAgXFxuICAgIG1hcmdpbi1yaWdodDogMjMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICBcXG5cXG59XFxuXFxuLmJ0bjEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiAtMjkwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDExcHggMjhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuXFxufVxcblxcbi5idG4xOmhvdmVye1xcbiAgICBwYWRkaW5nOiAxMXB4IDI4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG5cXG59XFxuXFxuLmJ0bjJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICByaWdodDogLTMxNXB4O1xcbiAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmc6MThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEycHg7XFxuXFxuXFxufVxcblxcbi5idG4yOmhvdmVye1xcbiAgICBwYWRkaW5nOjE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTg0LCAxMzEsIDc3KTtcXG5cXG59XFxuXFxuLlZpZHBsYXkgIHtcXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgcmlnaHQ6IC0yMzBweDtcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDM1MHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDo4MDA7XFxuXFxufVxcblxcbi5wbGF5VmlkU2VjdHtcXG4gICAgbWFyZ2luLXRvcDogMTdweDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZXN0cmF1QWN0aXZlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseURBQW9EO0lBQ3BELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjs7O0FBR3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7OztJQUdYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1COzs7O0FBSXZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxrQkFBa0I7R0FDbkIsYUFBYTtHQUNiLGdCQUFnQjtJQUNmLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseURBQTJDO0lBQzNDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsMkJBQTJCOzs7QUFHL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlEQUEyQztJQUMzQyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixrQ0FBa0M7O0FBRXRDOztBQUVBO0dBQ0csa0JBQWtCO0dBQ2xCLGFBQWE7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PUludGVyOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG5cXG5cXG4qe1xcblxcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ucmVzdHJhdUFjdGl2ZVNlY3R7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8xNDtcXG4gICAgZ3JpZC1yb3c6IDYyLzY2O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9yZXN0cmF1QWN0aXZlLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucmVzdHJhdUFjdGl2ZVNlY3QgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI2MHB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG5cXG59XFxuXFxuLnJlc3RyYXVBY3RpdmVTZWN0IGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI2MHB4O1xcbiAgICBcXG5cXG59XFxuXFxuLnJlc3RyYXVBY3RpdmVTZWN0IHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4ucmVzdHJhdUFjdGl2ZVNlY3QgcHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjYwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uYnRuU2VjdCB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBcXG4gIFxcbiAgICBtYXJnaW4tcmlnaHQ6IDIzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgXFxuXFxufVxcblxcbi5idG4xIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogLTI5MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMXB4IDI4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xcblxcbn1cXG5cXG4uYnRuMTpob3ZlcntcXG4gICAgcGFkZGluZzogMTFweCAyOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuXFxufVxcblxcbi5idG4ye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgcmlnaHQ6IC0zMTVweDtcXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nOjE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3BsYXkucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMnB4O1xcblxcblxcbn1cXG5cXG4uYnRuMjpob3ZlcntcXG4gICAgcGFkZGluZzoxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvcGxheS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE4NCwgMTMxLCA3Nyk7XFxuXFxufVxcblxcbi5WaWRwbGF5ICB7XFxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgIHJpZ2h0OiAtMjMwcHg7XFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAzNTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6ODAwO1xcblxcbn1cXG5cXG4ucGxheVZpZFNlY3R7XFxuICAgIG1hcmdpbi10b3A6IDE3cHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3RvdGFsSW5mb1NlY3QucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnJlc3RyYXVJbmZvU2VjdHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLzE0O1xcbiAgICBncmlkLXJvdzogMzUvMzk7XFxuXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbjtcXG59XFxuXFxuLnJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXJ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzIyKTtcXG4gIHotaW5kZXg6IDE7XFxuXFxufVxcblxcbi5yZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyIGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucmVzdHJhdUluZm9TZWN0QmxhY2tMYXllciBkaXYgaW1ne1xcbiAgIHdpZHRoOiA4MHB4OyBcXG4gICA7XFxufVxcblxcbi5yZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyIGRpdiBwOm50aC1jaGlsZCgyKXtcXG4gICBjb2xvcjogd2hpdGU7XFxuICAgZm9udC1zaXplOiAxOXB4O1xcbiAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuIH1cXG5cXG4gLnJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIgZGl2IHA6bnRoLWNoaWxkKDMpe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICB9XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZXN0cmF1SW5mb1NlY3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTs7RUFFakIseURBQW9EOztBQUV0RDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtFQUNkLHNDQUFzQztFQUN0QyxVQUFVOztBQUVaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7O0lBRWIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtHQUNHLFdBQVc7O0FBRWQ7O0FBRUE7R0FDRyxZQUFZO0dBQ1osZUFBZTtHQUNmLG1DQUFtQztHQUNuQyxnQkFBZ0I7Q0FDbEI7O0NBRUE7SUFDRyxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQ0FBbUM7RUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnJlc3RyYXVJbmZvU2VjdHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLzE0O1xcbiAgICBncmlkLXJvdzogMzUvMzk7XFxuXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy90b3RhbEluZm9TZWN0LnBuZycpO1xcbjtcXG59XFxuXFxuLnJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXJ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzIyKTtcXG4gIHotaW5kZXg6IDE7XFxuXFxufVxcblxcbi5yZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyIGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucmVzdHJhdUluZm9TZWN0QmxhY2tMYXllciBkaXYgaW1ne1xcbiAgIHdpZHRoOiA4MHB4OyBcXG4gICA7XFxufVxcblxcbi5yZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyIGRpdiBwOm50aC1jaGlsZCgyKXtcXG4gICBjb2xvcjogd2hpdGU7XFxuICAgZm9udC1zaXplOiAxOXB4O1xcbiAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuIH1cXG5cXG4gLnJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIgZGl2IHA6bnRoLWNoaWxkKDMpe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICB9XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaGVhZGVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zZWFyY2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0Jhbm5lci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5mb290ZXJTaG9we1xcbiAgICBwYWRkaW5nOiAzMHB4ICAyMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEvMTQ7XFxuICBncmlkLXJvdzogMzAvMzY7XFxuICAvKiBib3JkZXI6IDFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkOyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5ib2R5UGFnZUZvclNob3B7XFxuICAgIGhlaWdodDogODB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7ICBcXG59XFxuXFxuXFxuLnNob3BCb2R5e1xcbiAgICBncmlkLWNvbHVtbjogMS8xNDtcXG4gICAgZ3JpZC1yb3c6IDUvMzA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaG9wU2VjdHtcXG4gICAgXFxuICAgIHdpZHRoOjgwdnc7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLnNob3BMaXN0e1xcbiAgIFxcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDE1cHg7XFxuXFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG4uc2hvcExpc3QgLml0ZW06bnRoLWNoaWxkKDMpe1xcbiAgXFxuICBkaXNwbGF5OiBub25lO1xcbiAgICBcXG59XFxuXFxuLnNob3BTZWN0IC5pdGVte1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgIFxcbiAgIFxcbn1cXG5cXG5cXG4uc2hvcFNlY3QgLml0ZW0gaW1ne1xcbiAgICB3aWR0aDogMTk1cHg7XFxuICAgIGhlaWdodDoxNTBweCA7XFxufVxcblxcbi5zaG9wU2VjdCAuaXRlbSAuaXRlbU5hbWV7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICByaWdodDogNTVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcblxcbn1cXG5cXG4uc2hvcFNlY3QgLml0ZW0gcDpsYXN0LWNoaWxke1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTVweDtcXG4gICAgcmlnaHQ6ODBweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcblxcbn1cXG5cXG4uc2hvcEJvZHkgLnByb2ZpbGVEZXRhaWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOTgpO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgbWFyZ2luLXRvcDogLTU0MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiAxMDBweDtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uc2hvcEJvZHkgLnByb2ZpbGVEZXRhaWwgLmlucHV0U2VjdCBpbnB1dHtcXG4gICAgXFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNscik7ICovXFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjI3LCAyMjcpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgICBcXG4gICAgfVxcblxcbi5zaG9wQm9keSAucHJvZmlsZURldGFpbCAuaW5wdXRTZWN0e1xcbiAgICBcXG53aWR0aDogMjAwcHg7XFxuaGVpZ2h0OiAzNHB4O1xcbi8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbmJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDIyNywgMjI3KTtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxubWFyZ2luLXRvcDogMzBweDtcXG5cXG4gICAgXFxufVxcblxcbi5zaG9wQm9keSAucHJvZmlsZURldGFpbCAuaW5wdXRTZWN0IC5JbnB1dElDT057XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ucHJvZmlsZURldGFpbCAuY2hlY2tMaXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnByb2ZpbGVEZXRhaWwgLmNoZWNrTGlzdCAuY2hlY2tQYXJhe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnByb2ZpbGVEZXRhaWwgLmNoZWNrTGlzdCBoMntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwXFxuICAgIDtcXG5cXG59XFxuXFxuLmFkdmVydGlzZXtcXG53aWR0aDogMjAwcHg7XFxuaGVpZ2h0OiAyNDBweDtcXG5tYXJnaW4tdG9wOiAzMHB4O1xcbmJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxufVxcblxcbi5sYXRlc3RQcntcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG4gICAgXFxuXFxufVxcblxcbi5saXN0UHJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdhcDogNXB4IDtcXG5cXG59XFxuXFxuLmxhdGVzdFByIGltZ3tcXG5cXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmxhdGVzdFByIC5saXN0UHIgcDpsYXN0LWNoaWxke1xcblxcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIFxcbiAgIFxcbiAgICBcXG59XFxuLnByb2ZpbGVEZXRhaWwgLmxhdGVzdFByIGgye1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc2hvcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksbUJBQW1CO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix5REFBNkM7SUFDN0Msb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysd0JBQXdCO0FBQzVCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGFBQWE7O0lBRWIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7O0FBR3ZCOztBQUVBOztJQUVJLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFNBQVM7O0lBRVQsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7RUFFRSxhQUFhOztBQUVmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCOzs7QUFHdEI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0QyxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7OztBQUdoQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7O0lBRWxCOztBQUVKOztBQUVBLFlBQVk7QUFDWixZQUFZO0FBQ1osNkJBQTZCO0FBQzdCLG9DQUFvQztBQUNwQyxhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQixnQkFBZ0I7OztBQUdoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLHlEQUE2QztJQUM3Qyw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLDJCQUEyQjs7QUFFL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0lBQ0E7O0FBRUo7O0FBRUE7QUFDQSxZQUFZO0FBQ1osYUFBYTtBQUNiLGdCQUFnQjtBQUNoQix5REFBNkM7QUFDN0Msd0JBQXdCO0FBQ3hCLDRCQUE0Qjs7QUFFNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IsMkJBQTJCO0lBQzNCLGtCQUFrQjs7O0FBR3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsU0FBUzs7QUFFYjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTs7OztBQUluQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCOztBQUVwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uZm9vdGVyU2hvcHtcXG4gICAgcGFkZGluZzogMzBweCAgMjBweDtcXG4gIGdyaWQtY29sdW1uOiAxLzE0O1xcbiAgZ3JpZC1yb3c6IDMwLzM2O1xcbiAgLyogYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uYm9keVBhZ2VGb3JTaG9we1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9oZWFkZXIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7ICBcXG59XFxuXFxuXFxuLnNob3BCb2R5e1xcbiAgICBncmlkLWNvbHVtbjogMS8xNDtcXG4gICAgZ3JpZC1yb3c6IDUvMzA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaG9wU2VjdHtcXG4gICAgXFxuICAgIHdpZHRoOjgwdnc7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLnNob3BMaXN0e1xcbiAgIFxcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDE1cHg7XFxuXFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG4uc2hvcExpc3QgLml0ZW06bnRoLWNoaWxkKDMpe1xcbiAgXFxuICBkaXNwbGF5OiBub25lO1xcbiAgICBcXG59XFxuXFxuLnNob3BTZWN0IC5pdGVte1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgIFxcbiAgIFxcbn1cXG5cXG5cXG4uc2hvcFNlY3QgLml0ZW0gaW1ne1xcbiAgICB3aWR0aDogMTk1cHg7XFxuICAgIGhlaWdodDoxNTBweCA7XFxufVxcblxcbi5zaG9wU2VjdCAuaXRlbSAuaXRlbU5hbWV7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICByaWdodDogNTVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcblxcbn1cXG5cXG4uc2hvcFNlY3QgLml0ZW0gcDpsYXN0LWNoaWxke1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTVweDtcXG4gICAgcmlnaHQ6ODBweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcblxcbn1cXG5cXG4uc2hvcEJvZHkgLnByb2ZpbGVEZXRhaWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOTgpO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgbWFyZ2luLXRvcDogLTU0MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiAxMDBweDtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uc2hvcEJvZHkgLnByb2ZpbGVEZXRhaWwgLmlucHV0U2VjdCBpbnB1dHtcXG4gICAgXFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNscik7ICovXFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjI3LCAyMjcpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgICBcXG4gICAgfVxcblxcbi5zaG9wQm9keSAucHJvZmlsZURldGFpbCAuaW5wdXRTZWN0e1xcbiAgICBcXG53aWR0aDogMjAwcHg7XFxuaGVpZ2h0OiAzNHB4O1xcbi8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbmJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDIyNywgMjI3KTtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxubWFyZ2luLXRvcDogMzBweDtcXG5cXG4gICAgXFxufVxcblxcbi5zaG9wQm9keSAucHJvZmlsZURldGFpbCAuaW5wdXRTZWN0IC5JbnB1dElDT057XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvc2VhcmNoLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5wcm9maWxlRGV0YWlsIC5jaGVja0xpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4ucHJvZmlsZURldGFpbCAuY2hlY2tMaXN0IC5jaGVja1BhcmF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvZmlsZURldGFpbCAuY2hlY2tMaXN0IGgye1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDBcXG4gICAgO1xcblxcbn1cXG5cXG4uYWR2ZXJ0aXNle1xcbndpZHRoOiAyMDBweDtcXG5oZWlnaHQ6IDI0MHB4O1xcbm1hcmdpbi10b3A6IDMwcHg7XFxuYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvQmFubmVyLnBuZycpO1xcbmJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbn1cXG5cXG4ubGF0ZXN0UHJ7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ubGlzdFBye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDVweCA7XFxuXFxufVxcblxcbi5sYXRlc3RQciBpbWd7XFxuXFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5sYXRlc3RQciAubGlzdFByIHA6bGFzdC1jaGlsZHtcXG5cXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBcXG4gICBcXG4gICAgXFxufVxcbi5wcm9maWxlRGV0YWlsIC5sYXRlc3RQciBoMntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9RdW90ZXMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuXFxuLlRlc3RpbW9uaWFse1xcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gICAgZ3JpZC1yb3c6IDU0LzYwO1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgXFxuICAgXFxufVxcblxcblxcbi5UZXN0aW1vbmlhbCBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4OztcXG4gICAgXFxufVxcblxcbi5UZXN0aW1vbmlhbCBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW46IDBweCAzNXB4O1xcbn1cXG5cXG4udGVzdGltb25pYWxDYXJkU2VjdHtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgXFxufVxcblxcbi50ZXN0aW1vbmlhbENhcmRze1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1cHg7XFxuICAgIFxcbn1cXG5cXG4udGVzdGltb25pYWxDYXJkcyBwOm50aC1jaGlsZCgyKXtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5kZXNpZ257XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcXG5cXG4gICAgXFxufVxcblxcbi50ZXN0aW1vbmlhbENhcmRzIHA6bnRoLWNoaWxkKDQpe1xcblxcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIFxcbn1cXG5cXG4ucHJvZmlsZSB7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0zMHB4XFxuO1xcblxcbn1cXG5cXG4udGVzdGltb25pYWxHcmVlbntcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBsZWZ0OiA1ODBweDtcXG59XFxuXFxuLnN0YXJTZWN0e1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5zdGFyU2VjdCBpbWd7XFxuICAgIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4udGVzdGltb25pYWxDYXJkU2VjdCAuU2xpZGVyRG90IHtcXG53aWR0aDogMTUwcHg7XFxuaGVpZ2h0OiAzMHB4O1xcbi8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG5tYXJnaW4tdG9wOiAyMHB4O1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5nYXA6IDVweDtcXG5cXG59XFxuXFxuLlNsaWRlckRvdCA+IGRpdjpmaXJzdC1jaGlsZHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5TbGlkZXJEb3QgPiBkaXZ7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBvcGFjaXR5OiAuNDtcXG59XFxuXFxuLmdyYXNzQ29ybmVySW1ne1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGxlZnQ6IC01MHB4O1xcbiAgICB0b3A6IDMzMDBweDtcXG4gICAgXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdGVzdGltb25pYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLHNCQUFzQjs7O0FBRzFCOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5REFBNkM7SUFDN0MsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLG1CQUFtQjs7O0FBR3ZCOztBQUVBOztJQUVJLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLFdBQVc7O0lBRVgsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaLDBDQUEwQztBQUMxQyxnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsUUFBUTs7QUFFUjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVzs7QUFFZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG5cXG4uVGVzdGltb25pYWx7XFxuICAgIGdyaWQtY29sdW1uOiAyLzExO1xcbiAgICBncmlkLXJvdzogNTQvNjA7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBcXG4gICBcXG59XFxuXFxuXFxuLlRlc3RpbW9uaWFsIGgye1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IFZpYmVzJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7O1xcbiAgICBcXG59XFxuXFxuLlRlc3RpbW9uaWFsIGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbjogMHB4IDM1cHg7XFxufVxcblxcbi50ZXN0aW1vbmlhbENhcmRTZWN0e1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICBcXG59XFxuXFxuLnRlc3RpbW9uaWFsQ2FyZHN7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL1F1b3Rlcy5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xcbiAgICBcXG59XFxuXFxuLnRlc3RpbW9uaWFsQ2FyZHMgcDpudGgtY2hpbGQoMil7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4uZGVzaWdue1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XFxuXFxuICAgIFxcbn1cXG5cXG4udGVzdGltb25pYWxDYXJkcyBwOm50aC1jaGlsZCg0KXtcXG5cXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBcXG59XFxuXFxuLnByb2ZpbGUge1xcbiAgICB3aWR0aDogNzBweDtcXG4gXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMzBweFxcbjtcXG5cXG59XFxuXFxuLnRlc3RpbW9uaWFsR3JlZW57XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgbGVmdDogNTgwcHg7XFxufVxcblxcbi5zdGFyU2VjdHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uc3RhclNlY3QgaW1ne1xcbiAgICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnRlc3RpbW9uaWFsQ2FyZFNlY3QgLlNsaWRlckRvdCB7XFxud2lkdGg6IDE1MHB4O1xcbmhlaWdodDogMzBweDtcXG4vKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxubWFyZ2luLXRvcDogMjBweDtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuZ2FwOiA1cHg7XFxuXFxufVxcblxcbi5TbGlkZXJEb3QgPiBkaXY6Zmlyc3QtY2hpbGR7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uU2xpZGVyRG90ID4gZGl2e1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgb3BhY2l0eTogLjQ7XFxufVxcblxcbi5ncmFzc0Nvcm5lckltZ3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBsZWZ0OiAtNTBweDtcXG4gICAgdG9wOiAzMzAwcHg7XFxuICAgIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG46cm9vdHtcXG4gICAgLS1ibGFjay1iZy1jbHI6cmdiYSgwLCAwLCAwLCA3MDApO1xcbiAgICAtLXdoaXRlLWNscjojRkZGRkZGO1xcbiAgICAtLXByaW1hcnktY2xyOiNGRjlGMEQ7XFxuICAgIC0tcHJpbWFyeS1kcmstY2xyOiNlYTkwMGE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdmFycmlhYmxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG46cm9vdHtcXG4gICAgLS1ibGFjay1iZy1jbHI6cmdiYSgwLCAwLCAwLCA3MDApO1xcbiAgICAtLXdoaXRlLWNscjojRkZGRkZGO1xcbiAgICAtLXByaW1hcnktY2xyOiNGRjlGMEQ7XFxuICAgIC0tcHJpbWFyeS1kcmstY2xyOiNlYTkwMGE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9oZWFkZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tIFwiLi9tb2R1bGVzL2hvbWVcIjtcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gXCIuL21vZHVsZXMvZm9vdGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVBYm91dFVzIH0gZnJvbSBcIi4vbW9kdWxlcy9hYm91dFVzXCI7XG5pbXBvcnQgeyBjcmVhdGVGb29kQ2F0IH0gZnJvbSBcIi4vbW9kdWxlcy9mb29kQ2F0XCI7XG5pbXBvcnQgeyBjcmVhdGVXaHlDaG9vc2UgfSBmcm9tIFwiLi9tb2R1bGVzL3doeUNob29zZVwiO1xuaW1wb3J0IHsgY3JlYXRlUmVzdHJhdUluZm8gfSBmcm9tIFwiLi9tb2R1bGVzL3Jlc3RyYXVJbmZvU2VjdFwiO1xuaW1wb3J0IHtjcmVhdGVGcm9tTWVudSB9IGZyb20gJy4vbW9kdWxlcy9mcm9tTWVudSdcbmltcG9ydCB7IGNyZWF0ZVRlc3RpbW9uaWFsIH0gZnJvbSBcIi4vbW9kdWxlcy90ZXN0aW1vbmlhbFwiO1xuaW1wb3J0IHsgY3JlYXRlUmVzdHJhdUFjdGl2ZSB9IGZyb20gXCIuL21vZHVsZXMvcmVzdHJhdUFjdGl2ZVwiO1xuaW1wb3J0IHsgY3JlYXRlU2hvcCB9IGZyb20gJy4vbW9kdWxlcy9zaG9wJ1xuaW1wb3J0IHtjcmVhdGVBYm91dFBhZ2V9IGZyb20gJy4vbW9kdWxlcy9hYm91dFBhZ2UnXG5pbXBvcnQgJy4vY3NzL21haW4uY3NzJ1xuaW1wb3J0IHsgY3JlYXRlT3VyQ2hlZiB9IGZyb20gXCIuL21vZHVsZXMvb3VyQ2hlZlwiO1xuaW1wb3J0IHtjcmVhdGVCbG9nfSAgIGZyb20gJy4vbW9kdWxlcy9ibG9nJ1xuZXhwb3J0ICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQWxsaG9tZUNvbXBvbmVudHMoKXtcbmNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG5jb250ZW50LmNsYXNzTmFtZT0nY29udGVudCdcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmJvZHkuY2xhc3NOYW1lPSdib2R5J1xuY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kPSdibGFjaydcbmNvbnRlbnQuc3R5bGUub3BhY2l0eT0nMC44J1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2Rlc0Zyb21EaXNwbGF5KCkge1xuICAgICAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH19XG5cblxucmVtb3ZlQWxsQ2hpbGROb2Rlc0Zyb21EaXNwbGF5KClcbmNyZWF0ZUhlYWRlcigpO1xuY3JlYXRlSG9tZSgpXG5jcmVhdGVBYm91dFVzKClcbmNyZWF0ZUZvb2RDYXQoKVxuY3JlYXRlV2h5Q2hvb3NlKClcbmNyZWF0ZVJlc3RyYXVJbmZvKClcbmNyZWF0ZUZyb21NZW51KClcbmNyZWF0ZU91ckNoZWYoKVxuY3JlYXRlVGVzdGltb25pYWwoKVxuY3JlYXRlUmVzdHJhdUFjdGl2ZSgpXG5jcmVhdGVCbG9nKClcbmNyZWF0ZUZvb3RlcigpO1xuXG5cbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpXG5mb290ZXIucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG5mb290ZXIuY2xhc3NOYW1lPSdmb290ZXInXG5cbn1cblxubG9hZEFsbGhvbWVDb21wb25lbnRzKCkiLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQge2NyZWF0ZVBhZ2VIZWFkZXJ9IGZyb20gJy4vcGFnZUhlYWRlcidcbmltcG9ydCB7YWJvdXRQYWdlfSBmcm9tICcuL2ltYWdlcydcbiBpbXBvcnQgeyBjcmVhdGVUZXN0aW1vbmlhbCB9IGZyb20gXCIuL3Rlc3RpbW9uaWFsXCI7XG4gaW1wb3J0IHsgY3JlYXRlRnJvbU1lbnUgfSBmcm9tIFwiLi9mcm9tTWVudVwiO1xuIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBYm91dFBhZ2UoKXtcblxuICAgIGNyZWF0ZVBhZ2VIZWFkZXIoJ0Fib3V0JywnQWJvdXQgVXMnKVxuICAgIFxuICAgIGNvbnN0IGFib3V0Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5NZW51Qm9keScpXG4gICAgXG4gICAgY29uc3QgQWJvdXRTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBBYm91dFNlY3QuY2xhc3NOYW1lPSdBYm91dFNlY3RQYWdlJ1xuXG4gICAgY29uc3QgbWVkaWFTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZWRpYVNlY3QuY2xhc3NOYW1lPSdtZWRpYVNlY3QnXG5cbiAgICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcxLnNyYyA9IGFib3V0UGFnZVswXVxuICAgIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZzIuc3JjID0gYWJvdXRQYWdlWzFdXG4gICAgY29uc3QgaW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nMy5zcmMgPSBhYm91dFBhZ2VbMl1cblxuICAgIG1lZGlhU2VjdC5hcHBlbmRDaGlsZChpbWcxKVxuICAgIG1lZGlhU2VjdC5hcHBlbmRDaGlsZChpbWcyKVxuICAgIG1lZGlhU2VjdC5hcHBlbmRDaGlsZChpbWczKVxuXG4gICAgXG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRleHRDb250ZW50LmNsYXNzTmFtZT0ndGV4dENvbnRlbnQnXG5cbiAgICBjb25zdCB0aXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGl0bGUxLnRleHRDb250ZW50PSdBYm91dCB1cyBfX18nXG5cbiAgICBjb25zdCB0aXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgdGl0bGUyLnRleHRDb250ZW50PSdGb29kIGlzIGFuIGltcG9ydGFudCBwYXJ0IE9mIGEgYmFsYW5jZWQgRGlldCdcblxuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwYXJhLnRleHRDb250ZW50PWBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGRpYW0gcGVsbGVudGVzcXVlIGJpYmVuZHVtIG5vbiBkdWkgdm9sdXRwYXQgZnJpbmdpbGxhIGJpYmVuZHVtLiBVcm5hLCBlbGl0IGF1Z3VlIHVybmEsIHZpdGFlIGZldWdpYXQgcHJldGl1bSBkb25lYyBpZCBlbGVtZW50dW0uIFVsdHJpY2VzIG1hdHRpcyB2aXRhZSBtdXMgcmlzdXMuIExhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgc2l0IGV1IHZlbGl0IGluIGNvbnNlcXVhdC5gXG5cbiAgICBjb25zdCBidG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidG4xLmNsYXNzTmFtZT0nYnV0dG9uMSdcbiAgICBidG4xLnRleHRDb250ZW50PSdTaG93IG1vcmUnXG4gICAgXG5cbiAgICBjb25zdCBibnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBibnQyLmNsYXNzTmFtZT0nYnV0dG9uMidcblxuICAgIGNvbnN0IGJ0bnBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBidG5wYXJhLnRleHRDb250ZW50PSdXYXRjaCB2aWRlbydcbiAgICBidG5wYXJhLmNsYXNzTmFtZT0nYnRuUGFyYSdcbiAgICBcbiAgICBBYm91dFNlY3QuYXBwZW5kQ2hpbGQobWVkaWFTZWN0KVxuICAgIEFib3V0U2VjdC5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudClcbiAgICBcblxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKHRpdGxlMSlcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZCh0aXRsZTIpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYSlcblxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKGJ0bjEpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoYm50MilcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChidG5wYXJhKVxuICAgIFxuICAgIGFib3V0Qm9keS5hcHBlbmRDaGlsZChBYm91dFNlY3QpXG4gICAgXG4gICAgY3JlYXRlRnJvbU1lbnUoKVxuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuRnJvbU1lbnVNYWluIGgxJylcbiAgICBoMS5zdHlsZS5jb2xvcj0nYmxhY2snXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudVNlY3QgbGknKVxuICAgIGZvcihsZXQgaT0wO2k8bGkubGVuZ3RoO2krKyl7XG4gICAgICAgIGxpW2ldLnN0eWxlLmNvbG9yPSdibGFjaydcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY3JlYXRlVGVzdGltb25pYWwoKVxuICAgIGNvbnN0IHRlc3RpbW9uaWFsU2VjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5UZXN0aW1vbmlhbCcpXG4gICAgdGVzdGltb25pYWxTZWN0LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICAgIHRlc3RpbW9uaWFsU2VjdC5jbGFzc05hbWU9J1Rlc3RpbW9uaWFsU0VDVCdcbiAgICBjb25zdCBmaXJzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGZpcnN0VGl0bGUudGV4dENvbnRlbnQ9J1doeSBDaG9vc2UgdXMnXG4gICAgY29uc3Qgc2Vjb25kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzZWNvbmRUaXRsZS50ZXh0Q29udGVudD0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBkaWFtIHBlbGxlbnRlc3F1ZSBiaWJlbmR1bSBub24gZHVpIHZvbHV0cGF0IGZyaW5naWxsYSBiaWJlbmR1bS4nXG5cbiAgICBjb25zdCB3aHlDaG9vc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdoeUNob29zZS5jbGFzc05hbWU9J3doeUNob29zZVVzJ1xuXG5cbiAgICBjb25zdCB3aHlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHdoeUltZy5jbGFzc05hbWU9J3doeUltZydcblxuICAgIGNvbnN0IGZlYXR1cmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmZWF0dXJlcy5jbGFzc05hbWU9J2ZlYXR1cmVzJ1xuXG4gICAgY29uc3QgZmV0dXJlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGVGaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aXRsZUZpcnN0LnRleHRDb250ZW50PSdCZXN0IENoZWlmJ1xuICAgIGNvbnN0IHRpdGxlU2Vjb25kPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRpdGxlU2Vjb25kLnRleHRDb250ZW50PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGRpYW0gcGVsbGVudGVzcXVlIGJpYmVuZHVtIG5vbiBkdWkgdm9sdXRwYXQnXG4gICAgZmV0dXJlMS5hcHBlbmRDaGlsZCh0aXRsZUZpcnN0KVxuICAgIGZldHVyZTEuYXBwZW5kQ2hpbGQodGl0bGVTZWNvbmQpXG4gICAgXG4gICAgY29uc3QgZmV0dXJlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGVGaXJzdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGl0bGVGaXJzdDIudGV4dENvbnRlbnQ9J0Jlc3QgQ2hlaWYnXG4gICAgY29uc3QgdGl0bGVTZWNvbmQyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRpdGxlU2Vjb25kMi50ZXh0Q29udGVudD0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBkaWFtIHBlbGxlbnRlc3F1ZSBiaWJlbmR1bSBub24gZHVpIHZvbHV0cGF0J1xuICAgIGZldHVyZTIuYXBwZW5kQ2hpbGQodGl0bGVGaXJzdDIpXG4gICAgZmV0dXJlMi5hcHBlbmRDaGlsZCh0aXRsZVNlY29uZDIpXG5cbiAgICBjb25zdCBmZXR1cmUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0aXRsZUZpcnN0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aXRsZUZpcnN0My50ZXh0Q29udGVudD0nQmVzdCBDaGVpZidcbiAgICBjb25zdCB0aXRsZVNlY29uZDM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGl0bGVTZWNvbmQzLnRleHRDb250ZW50PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGRpYW0gcGVsbGVudGVzcXVlIGJpYmVuZHVtIG5vbiBkdWkgdm9sdXRwYXQnXG4gICAgZmV0dXJlMy5hcHBlbmRDaGlsZCh0aXRsZUZpcnN0MylcbiAgICBmZXR1cmUzLmFwcGVuZENoaWxkKHRpdGxlU2Vjb25kMylcblxuICAgIGZlYXR1cmVzLmFwcGVuZENoaWxkKGZldHVyZTEpXG4gICAgZmVhdHVyZXMuYXBwZW5kQ2hpbGQoZmV0dXJlMilcbiAgICBmZWF0dXJlcy5hcHBlbmRDaGlsZChmZXR1cmUzKVxuXG5cbiAgICAgICAgd2h5Q2hvb3NlLmFwcGVuZENoaWxkKGZpcnN0VGl0bGUpXG4gICAgICAgIHdoeUNob29zZS5hcHBlbmRDaGlsZChzZWNvbmRUaXRsZSlcbiAgICAgICAgd2h5Q2hvb3NlLmFwcGVuZENoaWxkKHdoeUltZylcbiAgICAgICAgd2h5Q2hvb3NlLmFwcGVuZENoaWxkKGZlYXR1cmVzKVxuICAgIGFib3V0Qm9keS5hcHBlbmRDaGlsZCh3aHlDaG9vc2UpXG59XG5cbiIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIlxuaW1wb3J0IHsgYWJvdXRJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIlxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFib3V0VXMoKXtcblxuXG4gICAgY29uc3QgYWJvdXRVc1NlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0VXNTZWN0LmNsYXNzTmFtZT0nYWJvdXRVc1NlY3RNYWluJ1xuXG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IFRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBjb25zdCBUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgVGl0bGUxLnRleHRDb250ZW50PSdBYm91dCB1cydcbiAgICBUaXRsZTIuaW5uZXJIVE1MPSc8c3Bhbj5XZTwvc3Bhbj4gQ3JlYXRlIFRoZSBCZXN0IGZvb2R5IHByb2R1Y3QnXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBhcmEudGV4dENvbnRlbnQ9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgZGlhbSBwZWxsZW50ZXNxdWUgYmliZW5kdW0gbm9uIGR1aSB2b2x1dHBhdCBmcmluZ2lsbGEgYmliZW5kdW0uIFVybmEsIGVsaXQgYXVndWUgdXJuYSwgdml0YWUgZmV1Z2lhdCBwcmV0aXVtIGRvbmVjIGlkIGVsZW1lbnR1bS4gVWx0cmljZXMgbWF0dGlzIHNlZCB2aXRhZSBtdXMgcmlzdXMuIExhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgc2l0IGV1IHZlbGl0IGluIGNvbnNlcXVhdC4nXG5cbiAgICBjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWJvdXRCdG4udGV4dENvbnRlbnQ9J1JlYWQgTW9yZScgIFxuICAgIFxuICAgIGNvbnN0IGFib3V0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBjb25zdCBsaXN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaXN0MS50ZXh0Q29udGVudD0nIExhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgc2l0IGV1IHZlbGl0IGluIGNvbnNlcXVhdC4nXG4gICAgY29uc3QgbGlzdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGlzdDIudGV4dENvbnRlbnQ9JyBRdWlzcXVlIGRpYW0gcGVsbGVudGVzcXVlIGJpYmVuZHVtIG5vbiBkdWkgdm9sdXRwYXQgZnJpbmdpbGxhICdcbiAgICBjb25zdCBsaXN0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaXN0My50ZXh0Q29udGVudD0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCdcblxuICAgIGFib3V0TGlzdC5hcHBlbmRDaGlsZChsaXN0MSlcbiAgICBhYm91dExpc3QuYXBwZW5kQ2hpbGQobGlzdDIpXG4gICAgYWJvdXRMaXN0LmFwcGVuZENoaWxkKGxpc3QzKVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKFRpdGxlMSlcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChUaXRsZTIpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYSlcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dExpc3QpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRCdG4pXG5cbiAgICBcblxuXG5cblxuICAgIGNvbnN0IG1lZGlhU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWJvdXRJbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBhYm91dEltZzEuc3JjPWFib3V0SW1nWzBdXG4gICAgY29uc3QgYWJvdXRJbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBhYm91dEltZzIuc3JjPWFib3V0SW1nWzFdXG4gICAgY29uc3QgYWJvdXRJbWczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBhYm91dEltZzMuc3JjPWFib3V0SW1nWzJdXG5cblxuICAgIG1lZGlhU2VjdC5hcHBlbmRDaGlsZChhYm91dEltZzEpXG4gICAgbWVkaWFTZWN0LmFwcGVuZENoaWxkKGFib3V0SW1nMilcbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQoYWJvdXRJbWczKVxuXG5cblxuICAgIGFib3V0VXNTZWN0LmFwcGVuZENoaWxkKHRleHRDb250ZW50KVxuICAgIGFib3V0VXNTZWN0LmFwcGVuZENoaWxkKG1lZGlhU2VjdClcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0VXNTZWN0KVxuXG5cblxuXG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgYmxvZ0ltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmxvZygpe1xuXG5jb25zdCBibG9nU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5ibG9nU2VjdC5jbGFzc05hbWU9J2Jsb2dTZWN0J1xuY29uc3QgdGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxudGl0bGUxLnRleHRDb250ZW50PSdCbG9nIFBvc3QnXG5jb25zdCB0aXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG50aXRsZTIuaW5uZXJIVE1MPSc8c3Bhbj5MYXQ8L3NwYW4+ZXN0IE5ld3MgJiBCbG9nJ1xuXG5jb25zdCBibG9nQ2FyZFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuYmxvZ0NhcmRTZWN0LmNsYXNzTmFtZT0nYmxvZ0NhcmRTZWN0J1xuXG5jcmVhdGVCbG9nQ2FyZChibG9nSW1nWzBdLCdQZWxsZW50ZXNxdWUgTm9uIEVmZmljaXR1ciBNaSBBbGlxdWFtIENvbnZhbGxpcyBNaSBRdWlzJylcbmNyZWF0ZUJsb2dDYXJkKGJsb2dJbWdbMV0sJ1BlbGxlbnRlc3F1ZSBOb24gRWZmaWNpdHVyIE1pIEFsaXF1YW0gQ29udmFsbGlzIE1pIFF1aXMnKVxuY3JlYXRlQmxvZ0NhcmQoYmxvZ0ltZ1syXSwnUGVsbGVudGVzcXVlIE5vbiBFZmZpY2l0dXIgTWkgQWxpcXVhbSBDb252YWxsaXMgTWkgUXVpcycpXG5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2dDYXJkKEJMT0dpbWcsZGVzY3JpcHRpb24pe1xuICAgIGxldCBibG9nQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYmxvZ0NhcmQuY2xhc3NOYW1lPSdibG9nQ2FyZCdcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcuc3JjID0gQkxPR2ltZ1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGF0ZS50ZXh0Q29udGVudD0gJzEwIEZlYiAyMDIyJ1xuICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGVzYy50ZXh0Q29udGVudD1kZXNjcmlwdGlvblxuICAgIGxldCBsZWFybk1vcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBsZWFybk1vcmUudGV4dENvbnRlbnQ9J0xlYXJuIE1vcmUnXG4gICAgbGV0IGljb25TZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpY29uU2VjdC5jbGFzc05hbWU9J2ljb25TZWN0J1xuICAgIFxuICAgIGxldCBsaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBsaWtlLnNyYyA9IGJsb2dJbWdbM11cbiAgICBsZXQgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgY29tbWVudC5zcmMgPSBibG9nSW1nWzRdXG4gICAgbGV0IHNoYXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBzaGFyZS5zcmMgPSBibG9nSW1nWzVdXG4gICAgXG4gICAgaWNvblNlY3QuYXBwZW5kQ2hpbGQobGlrZSlcbiAgICBpY29uU2VjdC5hcHBlbmRDaGlsZChjb21tZW50KVxuICAgIGljb25TZWN0LmFwcGVuZENoaWxkKHNoYXJlKVxuXG4gICAgYmxvZ0NhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgIGJsb2dDYXJkLmFwcGVuZENoaWxkKGRhdGUpXG4gICAgYmxvZ0NhcmQuYXBwZW5kQ2hpbGQoZGVzYylcbiAgICBibG9nQ2FyZC5hcHBlbmRDaGlsZChsZWFybk1vcmUpXG4gICAgYmxvZ0NhcmQuYXBwZW5kQ2hpbGQoaWNvblNlY3QpXG4gICAgYmxvZ0NhcmRTZWN0LmFwcGVuZENoaWxkKGJsb2dDYXJkKVxuICAgIFxufVxuXG5cbmJsb2dTZWN0LmFwcGVuZENoaWxkKHRpdGxlMSlcbmJsb2dTZWN0LmFwcGVuZENoaWxkKHRpdGxlMilcbmJsb2dTZWN0LmFwcGVuZENoaWxkKGJsb2dDYXJkU2VjdClcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYmxvZ1NlY3QpXG5cblxuXG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgYmxvZ0ltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgY3JlYXRlTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51UGFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlUGFnZUhlYWRlciB9IGZyb20gXCIuL3BhZ2VIZWFkZXJcIjtcbmltcG9ydCB7IGJsb2dJbWdDYXJkIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCbG9nUGFnZSgpe1xuXG4gICAgIFxuICAgIGNyZWF0ZVBhZ2VIZWFkZXIoJ0Jsb2cnLCdCbG9nIExpc3QnKVxuICAgICAgICBjb25zdCBvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub25lJylcbiAgICAgICAgXG4vLyAgICAgICAgIHJlbW92ZUNoaWxkRnJvbU1lbnVQYWdlKClcbi8vICAgICBmdW5jdGlvbiByZW1vdmVDaGlsZEZyb21NZW51UGFnZSgpe1xuICAgICAgIFxuLy8gICAgIGNvbnN0IG1lbnVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVCb2R5Jylcbi8vICAgICB3aGlsZSAob25lLmZpcnN0Q2hpbGQpIHtcbi8vIC8vICAgICAgICAgb25lLnJlbW92ZUNoaWxkKG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgIFxuLy8gLy8gIH1cblxuXG4vLyAgICAgd2hpbGUgKG1lbnVCb2R5LmZpcnN0Q2hpbGQpIHtcbi8vICAgICAgICBtZW51Qm9keS5yZW1vdmVDaGlsZChtZW51Qm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgXG4vLyB9XG4vLyAgICAgfVxuICAgIFxuICAgIC8vIGJsb2cgY3JlYXRpb25cbiAgICBjb25zdCBtZW51Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5NZW51Qm9keScpXG4gICAgY29uc3QgcGFnZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcGFnZU51bWJlci5jbGFzc05hbWU9J3BhZ2VOdW1iZXInXG4gICAgY29uc3QgZm9yd2FyZCA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBPbmUgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBiYWNrd2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYldhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGZXYXJkUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGZXYXJkUC50ZXh0Q29udGVudD0nPDwnXG4gICAgY29uc3Qgb25lcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG9uZXAudGV4dENvbnRlbnQ9JzEnXG4gICAgY29uc3QgdHdvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHR3b3AudGV4dENvbnRlbnQ9JzInXG4gICAgY29uc3QgdGhyZWVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGhyZWVwLnRleHRDb250ZW50PSczJ1xuICAgIGNvbnN0IGJXYXJkcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIFxuICAgIGZvcndhcmQuYXBwZW5kQ2hpbGQoZldhcmRQKVxuICAgIE9uZS5hcHBlbmRDaGlsZChvbmVwKVxuICAgIGJhY2t3YXJkLmFwcGVuZENoaWxkKHRocmVlcClcbiAgICBUaHJlZS5hcHBlbmRDaGlsZCh0d29wKVxuICAgIGJXYXJkLmFwcGVuZENoaWxkKGJXYXJkcClcblxuICAgIGJXYXJkLnRleHRDb250ZW50PSc+PidcbiAgICBwYWdlTnVtYmVyLmFwcGVuZENoaWxkKGZvcndhcmQpXG5cbiAgICBwYWdlTnVtYmVyLmFwcGVuZENoaWxkKE9uZSlcbiAgICBwYWdlTnVtYmVyLmFwcGVuZENoaWxkKFR3bylcbiAgICBcbiAgICBwYWdlTnVtYmVyLmFwcGVuZENoaWxkKFRocmVlKVxuICAgIHBhZ2VOdW1iZXIuYXBwZW5kQ2hpbGQoYmFja3dhcmQpXG4gICAgcGFnZU51bWJlci5hcHBlbmRDaGlsZChiV2FyZClcblxuXG4gICAgY29uc3QgYmxvZ1NlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJsb2dTZWN0LmNsYXNzTmFtZT0nYmxvZ1NlY3RQYWdlJ1xuXG4gICAgY29uc3QgYmxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYmxvZy5jbGFzc05hbWU9J2Jsb2dQYWdlJ1xuICAgIFxuICAgIGNvbnN0IHByb2ZpbGVEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2ZpbGVEZXRhaWwuY2xhc3NOYW1lPSdwcm9maWxlRGV0YWlsJ1xuXG4gICAgbWVudUJvZHkuYXBwZW5kQ2hpbGQoYmxvZ1NlY3QpXG4gICAgYmxvZ1NlY3QuYXBwZW5kQ2hpbGQoYmxvZyk7XG4gICAgYmxvZ1NlY3QuYXBwZW5kQ2hpbGQocHJvZmlsZURldGFpbCk7XG4gICBcbiAgIFxuICAgIGNyZWF0ZUJsb2dDYXJkcyhibG9nSW1nWzBdLCcxMCBSZWFzb25zIFRvIERvIEEgRGlnaXRhbCBEZXRveCBDaGFsbGVuZ2UnKVxuICAgIGNyZWF0ZUJsb2dDYXJkcyhibG9nSW1nWzFdLCdUcmFkaXRpb25hbCBTb2Z0IFByZXR6ZWxzIHdpdGggU3dlZXQgQmVlciBDaGVlc2UnKVxuICAgIGNyZWF0ZUJsb2dDYXJkcyhibG9nSW1nWzJdLCdUaGUgVWx0aW1hdGUgSGFuZ292ZXIgQnVyZ2VyOiBFZ2cgaW4gYSBIb2xlIEJ1cmdlcicpXG4gICAgY3JlYXRlQmxvZ0NhcmRzKGJsb2dJbWdbMF0sJ015IEZhdm9yaXRlIEVhc3kgQmxhY2sgUGl6emEgVG9hc3QgUmVjaXBlJylcbiAgICBmdW5jdGlvbiBjcmVhdGVCbG9nQ2FyZHMoSU1HLHRpdGxlKXtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNhcmQuY2xhc3NOYW1lPSdjYXJkJ1xuXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGltZy5jbGFzc05hbWU9J2ltZ09mQmxvZydcbiAgICAgICAgaW1nLnNyYyA9IElNR1xuXG4gICAgICAgIGNvbnN0IGRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRldGFpbC5jbGFzc05hbWU9J2RldGFpbCdcbiAgICAgICAgY29uc3QgZGF0ZSA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkYXRlLmNsYXNzTmFtZT0nZGF0ZSdcbiAgICAgICAgY29uc3QgZGF0ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgXG4gICAgICAgIGRhdGVQLnRleHRDb250ZW50PSdGRUIgMTQsMjAyMiAvJ1xuICAgICAgICBjb25zdCBtc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtc2cuY2xhc3NOYW1lPSdtc2cnXG4gICAgICAgIGNvbnN0IG1zaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgbXNoUC50ZXh0Q29udGVudCA9ICczLydcbiAgICAgICAgY29uc3QgQWRtaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBBZG1pbi5jbGFzc05hbWU9J0FkbWluJ1xuICAgICAgICBjb25zdCBBZG1pblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgQWRtaW5QLnRleHRDb250ZW50PSdBZG1pbidcbiAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGV4dENvbnRlbnQuY2xhc3NOYW1lPSdUZXh0Y29udGVudEJsb2cnXG5cbiAgICAgICAgY29uc3QgVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgVGl0bGUudGV4dENvbnRlbnQ9dGl0bGVcbiAgICAgICAgY29uc3QgcGFyYUJsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgcGFyYUJsb2cudGV4dENvbnRlbnQ9J0F0IHZlcm8gZW9zIGV0IGFjY3VzYW0gZXQganVzdG8gZHVvIGRvbG9yZXMgZXQgZWEgcmVidW0uIFN0ZXQgY2xpdGEga2FzZCBndWJlcmdyZW4sIG5vIHNlYSB0YWtpbWF0YSBzYW5jdHVzIGVzdCBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3IgaW52aWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdXlhbSBlcmF0J1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQ9J1JlYWQgTW9yZSdcblxuICAgICAgICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoVGl0bGUpXG4gICAgICAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChwYXJhQmxvZylcbiAgICAgICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbilcblxuXG4gICAgICAgIGRhdGUuYXBwZW5kQ2hpbGQoZGF0ZVApXG4gICAgICAgIG1zZy5hcHBlbmRDaGlsZChtc2hQKVxuICAgICAgICBBZG1pbi5hcHBlbmRDaGlsZChBZG1pblApXG5cbiAgICAgICAgZGV0YWlsLmFwcGVuZENoaWxkKGRhdGUpXG4gICAgICAgIGRldGFpbC5hcHBlbmRDaGlsZChtc2cpXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoQWRtaW4pXG5cbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGV0YWlsKVxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRleHRDb250ZW50KVxuICAgICAgICBibG9nLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgfVxuXG4gICAgYmxvZ1NlY3QuYXBwZW5kQ2hpbGQocGFnZU51bWJlcilcblxufSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IENhdGVnb3J5SW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9vZENhdCgpe1xuXG4gICAgY29uc3QgRm9vZENhdFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIEZvb2RDYXRTZWN0LmNsYXNzTmFtZT0nRm9vZENhdFNlY3QnXG4gICAgY29uc3Qgc2lkZUdyYXNzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBzaWRlR3Jhc3NJbWcuY2xhc3NOYW1lPSdzaWRlR3Jhc3NJbWcnXG4gICAgc2lkZUdyYXNzSW1nLnNyYz1DYXRlZ29yeUltZ1s0XVxuICAgIGNvbnN0IENhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBUaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgVGl0bGUxLnRleHRDb250ZW50PSdGb29kIENhdGVnb3J5J1xuICAgIGNvbnN0IFRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBUaXRsZTIuaW5uZXJIVE1MPSc8c3Bhbj5DaDwvc3Bhbj5vb3NlIEZvb2QgSXRlbSdcblxuICAgIGNvbnN0IGRpc2NvdW50VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBkaXNjb3VudFRhZ1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkaXNjb3VudFRhZ1AudGV4dENvbnRlbnQ9J1NhdmUgMzAlJ1xuICAgIGRpc2NvdW50VGFnLmFwcGVuZENoaWxkKGRpc2NvdW50VGFnUClcbiAgICBjb25zdCBkaXNjb3VudFRhZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGRpc2NvdW50VGFnUDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkaXNjb3VudFRhZ1AyLnRleHRDb250ZW50PSdGYXN0IEZvb2QgRGlzaCdcbiAgICBkaXNjb3VudFRhZzIuYXBwZW5kQ2hpbGQoZGlzY291bnRUYWdQMilcbiAgICBGb29kQ2F0U2VjdC5hcHBlbmRDaGlsZChzaWRlR3Jhc3NJbWcpXG4gICAgRm9vZENhdFNlY3QuYXBwZW5kQ2hpbGQoZGlzY291bnRUYWcpXG4gICAgRm9vZENhdFNlY3QuYXBwZW5kQ2hpbGQoZGlzY291bnRUYWcyKVxuICAgIEZvb2RDYXRTZWN0LmFwcGVuZENoaWxkKFRpdGxlMSlcbiAgICBGb29kQ2F0U2VjdC5hcHBlbmRDaGlsZChUaXRsZTIpXG5cbiAgICBjb25zdCBDYXRlZ29yeUltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIENhdGVnb3J5SW1nMS5zcmM9Q2F0ZWdvcnlJbWdbMV1cbiAgICBjb25zdCBDYXRlZ29yeUltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIENhdGVnb3J5SW1nMi5zcmM9Q2F0ZWdvcnlJbWdbMF1cbiAgICBjb25zdCBDYXRlZ29yeUltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIENhdGVnb3J5SW1nMy5zcmM9Q2F0ZWdvcnlJbWdbMl1cbiAgICBjb25zdCBDYXRlZ29yeUltZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIENhdGVnb3J5SW1nNC5zcmM9Q2F0ZWdvcnlJbWdbM11cbiAgICBcbiAgICBDYXRlZ29yeS5hcHBlbmRDaGlsZChDYXRlZ29yeUltZzEpXG4gICAgQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoQ2F0ZWdvcnlJbWcyKVxuICAgIENhdGVnb3J5LmFwcGVuZENoaWxkKENhdGVnb3J5SW1nMylcbiAgICBDYXRlZ29yeS5hcHBlbmRDaGlsZChDYXRlZ29yeUltZzQpXG4gXG5cbiAgICBGb29kQ2F0U2VjdC5hcHBlbmRDaGlsZChDYXRlZ29yeSlcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRm9vZENhdFNlY3QpXG5cblxuXG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiXG5pbXBvcnQgeyBmb290ZXJJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIlxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXIgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgICBmb290ZXIuY2xhc3NOYW1lPSdmb290ZXInXG4gICAgY29uc3QgZ3Jhc3NDb3JuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGdyYXNzQ29ybmVyLmNsYXNzTmFtZT0nZ3Jhc3NDb3JuZXInXG4gICAgZ3Jhc3NDb3JuZXIuc3JjPWZvb3RlckltZ1swXTtcblxuICAgIGNvbnN0IGZvb3RlckJlbHQ9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9vdGVyQmVsdC5jbGFzc05hbWU9J2Zvb3RlckJlbHQnXG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9vdGVyQ29udGVudC5jbGFzc05hbWU9J2Zvb3RlckNvbnRlbnQnXG4gICAgY29uc3QgZm9vdGVyVHh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9vdGVyVHh0Q29udGVudC5jbGFzc05hbWU9J2Zvb3RlclR4dENvbnRlbnQnXG5cbiAgICAvLyByZWNlbnQgcG9zdCBzZWN0aW9uXG5cbiAgICBjb25zdCByZWNlbnRQb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByZWNlbnRQb3N0LmNsYXNzTmFtZT0nUmN0UG9zdCdcbiAgICBjb25zdCByZWNlbnRQb3N0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgcmVjZW50UG9zdFRpdGxlLnRleHRDb250ZW50PSdSZWNlbnQgUG9zdCdcblxuICAgIGNvbnN0IGZpcnN0UG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZmlyc3RQb3N0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBmaXJzdFBvc3RJbWcuc3JjPWZvb3RlckltZ1sxXVxuICAgIGNvbnN0IHBvc3RwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcG9zdHBhcmEudGV4dENvbnRlbnQ9JzIwIEZlYiAyMDIyJ1xuICAgIGNvbnN0IHBvc3RkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcG9zdGRlc2MudGV4dENvbnRlbnQ9J0tlZXAgWW91ciBCdXNpbmVzcydcblxuICAgIGZpcnN0UG9zdC5hcHBlbmRDaGlsZChmaXJzdFBvc3RJbWcpXG5cbiAgICBjb25zdCBmaXJzdFBvc3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBmaXJzdFBvc3RJbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBmaXJzdFBvc3RJbWcxLnNyYz1mb290ZXJJbWdbMl1cbiAgICBjb25zdCBwb3N0cGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwb3N0cGFyYTEudGV4dENvbnRlbnQ9JzIwIEZlYiAyMDIyJ1xuICAgIGNvbnN0IHBvc3RkZXNjMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBvc3RkZXNjMS50ZXh0Q29udGVudD0nS2VlcCBZb3VyIEJ1c2luZXNzJ1xuXG4gICAgZmlyc3RQb3N0MS5hcHBlbmRDaGlsZChmaXJzdFBvc3RJbWcxKVxuXG4gICAgY29uc3QgZmlyc3RQb3N0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZmlyc3RQb3N0SW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZmlyc3RQb3N0SW1nMi5zcmM9Zm9vdGVySW1nWzNdXG4gICAgY29uc3QgcG9zdHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcG9zdHBhcmEyLnRleHRDb250ZW50PScyMCBGZWIgMjAyMidcbiAgICBjb25zdCBwb3N0ZGVzYzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwb3N0ZGVzYzIudGV4dENvbnRlbnQ9J0tlZXAgWW91ciBCdXNpbmVzcydcblxuICAgIGZpcnN0UG9zdDIuYXBwZW5kQ2hpbGQoZmlyc3RQb3N0SW1nMilcblxuICAgIC8vIGhlbHAgc2VjdFxuICAgIFxuICAgIGNvbnN0IGhlbHBTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWxwU2VjdC5jbGFzc05hbWU9J2hlbHBTZWN0J1xuICAgIGNvbnN0IGhlbHBTZWN0VGl0dGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWxwU2VjdFRpdHRsZS50ZXh0Q29udGVudD0nSGVscD8nO1xuXG4gICAgaGVscFNlY3QuYXBwZW5kQ2hpbGQoaGVscFNlY3RUaXR0bGUpO1xuXG4gICAgY29uc3QgRmFxUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIEZhcVBhcmEudGV4dENvbnRlbnQ9J0ZBUSdcbiAgICBjb25zdCB0ZXJtUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRlcm1QYXJhLnRleHRDb250ZW50PSdUZXJtICYgY29uZGl0aW9uJ1xuICAgIGNvbnN0IHJlcG9ydFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICByZXBvcnRQYXJhLnRleHRDb250ZW50PSdSZXBvcnRpbmcnXG4gICAgY29uc3QgZG9jdW1lbnRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZG9jdW1lbnRQYXJhLnRleHRDb250ZW50PSdEb2N1bWVudGF0aW9uJ1xuICAgIGNvbnN0IHN1cHBvcnRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgc3VwcG9ydFBhcmEudGV4dENvbnRlbnQ9J1N1cHBvcnQgUG9saWN5J1xuICAgIGNvbnN0IFByaXZhY3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBQcml2YWN5LnRleHRDb250ZW50PSdQcml2YWN5J1xuXG4gICAgaGVscFNlY3QuYXBwZW5kQ2hpbGQoRmFxUGFyYSlcbiAgICBoZWxwU2VjdC5hcHBlbmRDaGlsZCh0ZXJtUGFyYSlcbiAgICBoZWxwU2VjdC5hcHBlbmRDaGlsZChyZXBvcnRQYXJhKVxuICAgIGhlbHBTZWN0LmFwcGVuZENoaWxkKGRvY3VtZW50UGFyYSlcbiAgICBoZWxwU2VjdC5hcHBlbmRDaGlsZChzdXBwb3J0UGFyYSlcbiAgICBoZWxwU2VjdC5hcHBlbmRDaGlsZChQcml2YWN5KVxuXG5cbiAgICBjb25zdCB1c2VGdWxsU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdXNlRnVsbFNlY3QuY2xhc3NOYW1lPSd1c2VGdWxsU2VjdCdcbiAgICBjb25zdCB1c2VGdWxsU2VjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHVzZUZ1bGxTZWN0VGl0bGUudGV4dENvbnRlbnQ9J1VzZWZ1bCBMaW5rJ1xuXG4gICAgY29uc3QgYWJvdXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWJvdXRMaW5rLnRleHRDb250ZW50PSdBYm91dCdcbiAgICBjb25zdCBuZXdzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG5ld3NMaW5rLnRleHRDb250ZW50PSdOZXdzJ1xuICAgIGNvbnN0IHBhcnRuZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFydG5lckxpbmsudGV4dENvbnRlbnQ9J1BhcnRuZXJzJ1xuICAgIGNvbnN0IHRlYW1MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGVhbUxpbmsudGV4dENvbnRlbnQ9J1RlYW0nXG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBtZW51TGluay50ZXh0Q29udGVudD0nTWVudSdcbiAgICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnRhY3RMaW5rLnRleHRDb250ZW50PSdDb250YWN0J1xuXG4gICAgdXNlRnVsbFNlY3QuYXBwZW5kQ2hpbGQodXNlRnVsbFNlY3RUaXRsZSlcbiAgICB1c2VGdWxsU2VjdC5hcHBlbmRDaGlsZChhYm91dExpbmspXG4gICAgdXNlRnVsbFNlY3QuYXBwZW5kQ2hpbGQobmV3c0xpbmspXG4gICAgdXNlRnVsbFNlY3QuYXBwZW5kQ2hpbGQocGFydG5lckxpbmspXG4gICAgdXNlRnVsbFNlY3QuYXBwZW5kQ2hpbGQodGVhbUxpbmspXG4gICAgdXNlRnVsbFNlY3QuYXBwZW5kQ2hpbGQobWVudUxpbmspXG4gICAgdXNlRnVsbFNlY3QuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspXG5cbiAgICBjb25zdCBhYm91dFVzU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXRVc1NlY3QuY2xhc3NOYW1lPSdhYm91dFVzU2VjdCdcblxuICAgIGNvbnN0IHN1cHBvcnRTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzdXBwb3J0U2VjdC5jbGFzc05hbWU9J3N1cHBvcnRTZWN0J1xuICAgIGNvbnN0IGlucHV0U2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3Qgc3VwcG9ydFAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgc3VwcG9ydFAxLmlubmVySFRNTD0nPHNwYW4+Uzwvc3Bhbj50aWxsIFlvdSBOZWVkIE91ciBTdXBwb3J0ID8nXG4gICAgY29uc3Qgc3VwcG9ydFAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgc3VwcG9ydFAyLnRleHRDb250ZW50PSdEb27igJl0IHdhaXQgbWFrZSBhIHNtYXJ0ICYgbG9naWNhbCBxdW90ZSBoZXJlLiBJdHMgcHJldHR5IGVhc3kuJ1xuICAgIGNvbnN0IHN1cHBvcnRJcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgc3VwcG9ydElwdC5wbGFjZWhvbGRlcj0nRW50ZXIgWW91ciBFbWFpbCdcbiAgICBjb25zdCBzdXBwb3J0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBzdXBwb3J0QnRuLnRleHRDb250ZW50PSdTdWJjcmliZSBOb3cnXG5cbiAgICBzdXBwb3J0U2VjdC5hcHBlbmRDaGlsZChzdXBwb3J0UDEpXG4gICAgc3VwcG9ydFNlY3QuYXBwZW5kQ2hpbGQoc3VwcG9ydFAyKVxuICAgIHN1cHBvcnRTZWN0LmFwcGVuZENoaWxkKGlucHV0U2VjdClcbiAgICBpbnB1dFNlY3QuYXBwZW5kQ2hpbGQoc3VwcG9ydElwdClcbiAgICBpbnB1dFNlY3QuYXBwZW5kQ2hpbGQoc3VwcG9ydEJ0bilcblxuICAgIGNvbnN0IG9wZW5IclNlY3RNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3BlbkhyU2VjdE1haW4uY2xhc3NOYW1lPSdvcGVuSHJTZWN0TWFpbic7XG4gICAgY29uc3Qgb3BlbkhyU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgb3BlbkhyU2VjdC5jbGFzc05hbWU9J29wZW5IclNlY3QnXG4gICAgY29uc3Qgb3BlbkhyU2VjdFAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgb3BlbkhyU2VjdFAxLnRleHRDb250ZW50PSdPcGVuaW5nIEhvdXJzJ1xuICAgIGNvbnN0IG9wZW5IclNlY3RQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG9wZW5IclNlY3RQMi50ZXh0Q29udGVudD0nTU9OIC0gU0FUKDguMDAgNi4wMCknO1xuICAgIGNvbnN0IG9wZW5IclNlY3RQMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG9wZW5IclNlY3RQMy50ZXh0Q29udGVudD0nU3VuZGF5IC0gQ2xvc2VkJ1xuXG4gICAgY29uc3Qgb3BlbkhyU2VjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG9wZW5IclNlY3RJY29uLmNsYXNzTmFtZT0nb3BlbkhyU2VjdEljb24nXG5cbiAgICBjb25zdCBhYm91dERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBcbiAgICBhYm91dERlc2MudGV4dENvbnRlbnQ9YG9ycG9yYXRlIGNsaWVudHMgYW5kIGxlaXN1cmUgdHJhdmVsZXJzIGhhc1xuICAgIGJlZW4gcmVseWluZyBvbiBHcm91bmRsaW5rIGZvciBkZXBlbmRhYlxuICAgIHNhZmUsIGFuZCBwcm9mZXNzaW9uYWwgY2hhdWZmZXVyZWQgY2FyXG4gICAgc2VydmljZSBpbiBtYWpvciBjaXRpZXMgYWNyb3NzIFdvcmxkLmBcblxuICAgIGNvbnN0IGFib3V0RGVzY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGFib3V0RGVzY1RpdGxlLnRleHRDb250ZW50PSdBYm91dCBVcydcblxuICAgIGFib3V0VXNTZWN0LmFwcGVuZENoaWxkKGFib3V0RGVzY1RpdGxlKVxuXG4gICAgYWJvdXRVc1NlY3QuYXBwZW5kQ2hpbGQoYWJvdXREZXNjKVxuXG4gICAgb3BlbkhyU2VjdC5hcHBlbmRDaGlsZChvcGVuSHJTZWN0UDEpXG4gICAgb3BlbkhyU2VjdC5hcHBlbmRDaGlsZChvcGVuSHJTZWN0UDIpXG4gICAgb3BlbkhyU2VjdC5hcHBlbmRDaGlsZChvcGVuSHJTZWN0UDMpXG4gICAgXG4gICAgb3BlbkhyU2VjdE1haW4uYXBwZW5kQ2hpbGQob3BlbkhyU2VjdEljb24pO1xuICAgIG9wZW5IclNlY3RNYWluLmFwcGVuZENoaWxkKG9wZW5IclNlY3QpO1xuICAgIFxuICAgIGFib3V0VXNTZWN0LmFwcGVuZENoaWxkKG9wZW5IclNlY3RNYWluKTtcblxuICAgIGNvbnN0IHNvY2lhbE1lZFNlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc29jaWFsTWVkU2VjLmNsYXNzTmFtZT0nc29jaWFsTWVkU2VjJ1xuICAgIGNvbnN0IGNvcHlSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcbiAgICBjb3B5UmlnaHQudGV4dENvbnRlbnQ9YENvcHlyaWdodCBAICR7eWVhcn0gYnkgUm9uaS4gQWxsIFJpZ2h0cyByZXNlcnZlZGBcblxuICAgIGNvbnN0IHNvY2lhbE1lZGlhSWNvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNvY2lhbE1lZGlhSWNvbjEuY2xhc3NOYW1lPSdtZWRpYUljb24nXG4gICAgY29uc3Qgc29jaWFsTWVkaWFJY29uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc29jaWFsTWVkaWFJY29uMi5jbGFzc05hbWU9J21lZGlhSWNvbidcbiAgICBjb25zdCBzb2NpYWxNZWRpYUljb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzb2NpYWxNZWRpYUljb24zLmNsYXNzTmFtZT0nbWVkaWFJY29uJ1xuICAgIGNvbnN0IHNvY2lhbE1lZGlhSWNvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNvY2lhbE1lZGlhSWNvbjQuY2xhc3NOYW1lPSdtZWRpYUljb24nXG4gICAgY29uc3Qgc29jaWFsTWVkaWFJY29uNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc29jaWFsTWVkaWFJY29uNS5jbGFzc05hbWU9J21lZGlhSWNvbidcblxuXG4gICBzb2NpYWxNZWRTZWMuYXBwZW5kQ2hpbGQoc29jaWFsTWVkaWFJY29uMSlcbiAgIHNvY2lhbE1lZFNlYy5hcHBlbmRDaGlsZChzb2NpYWxNZWRpYUljb24yKVxuICAgc29jaWFsTWVkU2VjLmFwcGVuZENoaWxkKHNvY2lhbE1lZGlhSWNvbjMpXG4gICBzb2NpYWxNZWRTZWMuYXBwZW5kQ2hpbGQoc29jaWFsTWVkaWFJY29uNClcbiAgIHNvY2lhbE1lZFNlYy5hcHBlbmRDaGlsZChzb2NpYWxNZWRpYUljb241KVxuICAgZm9vdGVyQmVsdC5hcHBlbmRDaGlsZChjb3B5UmlnaHQpXG4gICBmb290ZXJCZWx0LmFwcGVuZENoaWxkKHNvY2lhbE1lZFNlYylcbiAgICBcbiAgIGZpcnN0UG9zdC5hcHBlbmRDaGlsZChwb3N0cGFyYSlcbiAgIGZpcnN0UG9zdC5hcHBlbmRDaGlsZChwb3N0ZGVzYylcblxuICAgZmlyc3RQb3N0MS5hcHBlbmRDaGlsZChwb3N0cGFyYTEpXG4gICBmaXJzdFBvc3QxLmFwcGVuZENoaWxkKHBvc3RkZXNjMSlcblxuICAgZmlyc3RQb3N0Mi5hcHBlbmRDaGlsZChwb3N0cGFyYTIpXG4gICBmaXJzdFBvc3QyLmFwcGVuZENoaWxkKHBvc3RkZXNjMilcbiAgIFxuICAgcmVjZW50UG9zdC5hcHBlbmRDaGlsZChyZWNlbnRQb3N0VGl0bGUpXG4gICByZWNlbnRQb3N0LmFwcGVuZENoaWxkKGZpcnN0UG9zdClcbiAgIHJlY2VudFBvc3QuYXBwZW5kQ2hpbGQoZmlyc3RQb3N0MSlcbiAgIHJlY2VudFBvc3QuYXBwZW5kQ2hpbGQoZmlyc3RQb3N0MilcbiAgIFxuICAgZm9vdGVyVHh0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dFVzU2VjdClcbiAgIGZvb3RlclR4dENvbnRlbnQuYXBwZW5kQ2hpbGQodXNlRnVsbFNlY3QpXG4gICBmb290ZXJUeHRDb250ZW50LmFwcGVuZENoaWxkKGhlbHBTZWN0KVxuICAgZm9vdGVyVHh0Q29udGVudC5hcHBlbmRDaGlsZChyZWNlbnRQb3N0KVxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChzdXBwb3J0U2VjdClcbiAgICBmb290ZXJDb250ZW50LmFwcGVuZENoaWxkKGZvb3RlclR4dENvbnRlbnQpXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnQpXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckJlbHQpXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdyYXNzQ29ybmVyKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKVxuXG5cblxufSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IENhdGVnb3J5SW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgeyBtZW51SXRlbUltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgbWVudUx1bmNoSW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgeyBtZW51RGlubmVySW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgeyBtZW51RGVzZXJ0SW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgeyBtZW51RHJpbmtJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7bWVudVNvdXBJbWcgfSBmcm9tICcuL2ltYWdlcydcbmltcG9ydCB7IG1lbnVTbmFja0ltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnJvbU1lbnUoKXtcblxuICAgIGNvbnN0IEZyb21NZW51TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgRnJvbU1lbnVNYWluLmNsYXNzTmFtZT0nRnJvbU1lbnVNYWluJ1xuICAgIGNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVOYXYuY2xhc3NOYW1lPSduYXYnXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsQnJlYWtmYXN0KVxuICAgIGxpMS50ZXh0Q29udGVudD0nQnJlYWtmYXN0J1xuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaTIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGx1bmNoKVxuICAgIGxpMi50ZXh0Q29udGVudD0nTHVuY2gnXG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRGlubmVyKVxuICAgIGxpMy50ZXh0Q29udGVudD0nRGlubmVyJ1xuICAgIGNvbnN0IGxpNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaTQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERlc3NlcnQpXG4gICAgbGk0LnRleHRDb250ZW50PSdEZXNzZXJ0J1xuICAgIGNvbnN0IGxpNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaTUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERyaW5rKVxuICAgIGxpNS50ZXh0Q29udGVudD0nRHJpbmsnXG4gICAgY29uc3QgbGk2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpNi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsU25hY2spXG4gICAgbGk2LnRleHRDb250ZW50PSdTbmFjaydcbiAgICBjb25zdCBsaTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGk3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxTdW9wcylcbiAgICBsaTcudGV4dENvbnRlbnQ9J1N1b3BzJ1xuXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkxKVxuICAgIHVsLmFwcGVuZENoaWxkKGxpMilcbiAgICB1bC5hcHBlbmRDaGlsZChsaTMpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGk0KVxuICAgIHVsLmFwcGVuZENoaWxkKGxpNSlcbiAgICB1bC5hcHBlbmRDaGlsZChsaTYpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGk3KVxuXG4gICAgbWVudU5hdi5hcHBlbmRDaGlsZCh1bClcbiAgICBjb25zdCBtZW51TGlzdFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVMaXN0U2VjdC5jbGFzc05hbWU9J21lbnVMaXN0U2VjdCdcbiAgICBjb25zdCBkaXNwbGF5RGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGlzcGxheURpc2guY2xhc3NOYW1lPSdkaXNwbGF5RGlzaCdcbiAgICBjb25zdCBkaXNwbGF5SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBkaXNwbGF5SW1nLnNyYz1tZW51SXRlbUltZ1sxXVxuXG4gICAgZGlzcGxheURpc2guYXBwZW5kQ2hpbGQoZGlzcGxheUltZylcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51LmNsYXNzTmFtZT0nbWVudVNlY3QnXG5cbiAgICBjb25zdCBtZW51VWwgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBcbiAgICAgQnJlYWtmYXN0KClcblxuXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51VWwpXG4gICAgbWVudUxpc3RTZWN0LmFwcGVuZENoaWxkKGRpc3BsYXlEaXNoKVxuICAgIG1lbnVMaXN0U2VjdC5hcHBlbmRDaGlsZChtZW51KVxuXG4gICAgY29uc3QgVGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIFRpdGxlMS50ZXh0Q29udGVudD0nQ2hvb3NlICYgcGljaydcbiAgICBjb25zdCBUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgVGl0bGUyLmlubmVySFRNTD0nPHNwYW4+RnI8L3NwYW4+b20gT3VyIE1lbnUnXG5cbiAgICBcbiAgICBGcm9tTWVudU1haW4uYXBwZW5kQ2hpbGQoVGl0bGUxKVxuICAgIEZyb21NZW51TWFpbi5hcHBlbmRDaGlsZChUaXRsZTIpXG4gICAgRnJvbU1lbnVNYWluLmFwcGVuZENoaWxkKG1lbnVOYXYpXG4gICAgRnJvbU1lbnVNYWluLmFwcGVuZENoaWxkKG1lbnVMaXN0U2VjdClcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKEZyb21NZW51TWFpbilcblxuICAgIGZ1bmN0aW9uIEJyZWFrZmFzdCgpe1xuXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoKVxuICAgICAgICBmb29kSXRlbShtZW51SXRlbUltZ1swXSwnU295YSBEZWVwLicsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51SXRlbUltZ1sxXSwnRnJlc2ggQnJlYWtmYXN0JywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTQuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVJdGVtSW1nWzJdLCdNaWxkIEJ1dHRlcicsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51SXRlbUltZ1szXSwnRnJlc2ggQnJlYWQnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudUl0ZW1JbWdbNF0sJ0dsb3cgQ2hlZXNlJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTQuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVJdGVtSW1nWzVdLCdJdGFsaWFuIFBpenphJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVJdGVtSW1nWzZdLCdTbGxpY2UgQmVlZicsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzE0JCcpXG4gICAgZm9vZEl0ZW0obWVudUl0ZW1JbWdbN10sJ011c2hhb20gUGl6emEnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMS41JCcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbHVuY2goKXtcblxuXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoKVxuICAgICAgICBmb29kSXRlbShtZW51THVuY2hJbWdbMF0sJ0tva2FuIFRoYWxpJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVMdW5jaEltZ1sxXSwncGFuZWVyIE1hc2FsYScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzE0LjUkJylcbiAgICBmb29kSXRlbShtZW51THVuY2hJbWdbMl0sJ0plZXJhIFJpY2UnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudUx1bmNoSW1nWzNdLCdQdWxhdicsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51THVuY2hJbWdbNF0sJ1R1a2RhIFBhbmVlcicsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzE0LjUkJylcbiAgICBmb29kSXRlbShtZW51THVuY2hJbWdbNV0sJ0l0YWxpYW4gUGl6emEnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gXG4gICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBEaW5uZXIoKXtcblxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKClcbiAgICAgICAgZm9vZEl0ZW0obWVudURpbm5lckltZ1swXSwnQmFodWJhbGkgVGhhbGknLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudURpbm5lckltZ1sxXSwnU2hhaGkgUGFrdmFuJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTQuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVEaW5uZXJJbWdbMl0sJ0RhcmJhcmkgVGhhbGknLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudURpbm5lckltZ1szXSwnUHVyaSBCaGFqaScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51RGlubmVySW1nWzRdLCdDaGlja2VuIEtvZnRhJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTQuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVEaW5uZXJJbWdbNV0sJ0h1bGsgVGhhbGknLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBEZXNzZXJ0KCl7XG5cbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcygpXG4gICAgICAgIGZvb2RJdGVtKG1lbnVEZXNlcnRJbWdbMF0sJ0ZyZW5jaCBQdWRkaW5nJywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVEZXNlcnRJbWdbMV0sJ1lvZ2h1cnQnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxNC41JCcpXG4gICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gRHJpbmsoKXtcblxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKClcbiAgICAgICAgZm9vZEl0ZW0obWVudURyaW5rSW1nWzBdLCdGcnVpdCBNaXgnLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudURyaW5rSW1nWzFdLCdHdWxhYiBTaGFyYmF0JywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTQuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVEcmlua0ltZ1syXSwnUnVhcGphJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFNuYWNrKCl7XG5cbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcygpXG4gICAgICAgIGZvb2RJdGVtKG1lbnVTbmFja0ltZ1swXSwnTWl4IE51dCcsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51U25hY2tJbWdbMV0sJ1NhbHRlZCBQZWFudXQnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxNC41JCcpXG4gICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTdW9wcygpe1xuXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoKVxuICAgICAgICBmb29kSXRlbShtZW51U291cEltZ1swXSwnTWFjaGF1IFNvdXAnLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudVNvdXBJbWdbMV0sJ0NoaW5lZXNlIFNvdXAnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxNC41JCcpXG4gICAgZm9vZEl0ZW0obWVudVNvdXBJbWdbMl0sJ1ZlZ2kgU291cCcsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgIFxuICAgIH1cbiAgICBmdW5jdGlvbiBmb29kSXRlbShpbWcsTmFtZSxkZXNjLHByaWNlKXtcbiAgICAgICAgbGV0IGZvb2RJdGVtTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGxpYClcbiAgICAgICAgbGV0IGZvb2RJdGVtU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxldCBmb29kSXRlbUltZ1NlY3QgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGZvb2RJdGVtSW1nU2VjdC5jbGFzc05hbWU9J2Zvb2RJdGVtSW1nU2VjdCdcbiAgICAgICAgbGV0IGxpc3RQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgICBsZXQgZm9vZEl0ZW1JbWcgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGZvb2RJdGVtSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkaXNwbGF5SXRlbUltZylcbiAgICAgICAgZm9vZEl0ZW1JbWcuc3JjID0gaW1nXG4gICAgICAgIGZvb2RJdGVtSW1nU2VjdC5hcHBlbmRDaGlsZChmb29kSXRlbUltZylcbiAgICAgICAgbGV0IGZvb2RJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBmb29kSXRlbU5hbWUudGV4dENvbnRlbnQ9TmFtZVxuICAgICAgICBsZXQgZm9vZEl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGZvb2RJdGVtRGVzYy50ZXh0Q29udGVudD1kZXNjXG4gICAgICAgIGxldCBmb29kSXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGZvb2RJdGVtUHJpY2UudGV4dENvbnRlbnQ9cHJpY2VcblxuICAgICAgICBcbiAgICAgICAgbGlzdFBhcmEuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1OYW1lKVxuICAgICAgICBsaXN0UGFyYS5hcHBlbmRDaGlsZChmb29kSXRlbURlc2MpXG4gICAgICAgIGxpc3RQYXJhLmFwcGVuZENoaWxkKGZvb2RJdGVtUHJpY2UpXG4gICAgICAgIGZvb2RJdGVtTGlzdC5hcHBlbmRDaGlsZChmb29kSXRlbUltZ1NlY3QpXG4gICAgICAgIGZvb2RJdGVtTGlzdC5hcHBlbmRDaGlsZChsaXN0UGFyYSlcblxuICAgICAgICBtZW51VWwuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1MaXN0KVxuICAgIFxuICAgICAgICB9XG5cbmZ1bmN0aW9uIGRpc3BsYXlJdGVtSW1nKGV2ZW50KXtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzRnJvbURpc3BsYXkoKVxuICAgIGxldCBpbWdGb3JEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWdGb3JEaXNwbGF5LnNyYz1ldmVudC50YXJnZXQuc3JjXG4gICAgZGlzcGxheURpc2guYXBwZW5kQ2hpbGQoaW1nRm9yRGlzcGxheSlcbiAgICBcbn1cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcygpIHtcbiAgICAgICAgICAgIHdoaWxlIChtZW51VWwuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIG1lbnVVbC5yZW1vdmVDaGlsZChtZW51VWwuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9ICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzRnJvbURpc3BsYXkoKSB7XG4gICAgICAgICAgICB3aGlsZSAoZGlzcGxheURpc2guZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlEaXNoLnJlbW92ZUNoaWxkKGRpc3BsYXlEaXNoLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfX1cbn1cblxuIiwiaW1wb3J0IHtoZWFkZXJJbWd9ICBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gXCIuL21lbnVQYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVCbG9nUGFnZSB9IGZyb20gXCIuL2Jsb2dQYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVTaG9wIH0gZnJvbSBcIi4vc2hvcFwiO1xuaW1wb3J0IHsgY3JlYXRlQWJvdXRQYWdlIH0gZnJvbSBcIi4vYWJvdXRQYWdlXCI7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG5cbiAgICBcbiAgIGNvbnRlbnQuY2xhc3NOYW1lPSdjb250ZW50J1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG5cbiAgICBjb25zdCBsb2dvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbG9nb1NlY3Rpb24uY2xhc3NOYW1lPSdsb2dvJztcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBsb2dvLnNyYz1oZWFkZXJJbWdbMF07XG5cbiAgIGNvbnN0IHNlYXJjaFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgc2VhcmNoU2VjdC5jbGFzc05hbWU9J3NlYXJjaFNlY3QnXG5cbiAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBzZWFyY2guY2xhc3NOYW1lPSdzZWFyY2hCYXInXG4gICBcbiAgIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgc2VhcmNoSWNvbi5jbGFzc05hbWU9J3NlYXJjaEljb24nXG4gICBzZWFyY2hJY29uLnNyYz1oZWFkZXJJbWdbMl1cblxuICAgY29uc3Qgc2VhcmNoSW5wdXQgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyPScgIFNlYXJjaC4uLidcblxuICAgY29uc3QgaGFuZEJhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICBoYW5kQmFnLmlkPSdoYW5kQmFnJ1xuICAgaGFuZEJhZy5zcmM9aGVhZGVySW1nWzFdXG5cbiAgICAvLyBsaXN0IFxuXG4gICBjb25zdCBsaXN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3QxLnRleHRDb250ZW50PSdIb21lJ1xuICAgbGlzdDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZUhvbWUpXG5cbiAgIGNvbnN0IGxpc3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgbGlzdDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZU1lbnVQYWdlKVxuICAgbGlzdDIudGV4dENvbnRlbnQ9J01lbnUnXG5cbiAgIGNvbnN0IGxpc3QzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgbGlzdDMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZUJsb2dQYWdlKVxuICAgbGlzdDMudGV4dENvbnRlbnQ9J0Jsb2cnXG5cbiAgIGNvbnN0IGxpc3Q0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgbGlzdDQudGV4dENvbnRlbnQ9J1BhZ2VzJ1xuXG4gICBjb25zdCBsaXN0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3Q1LnRleHRDb250ZW50PSdBYm91dCdcbiAgIGxpc3Q1LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVBYm91dFBhZ2UpXG5cbiAgIGNvbnN0IGxpc3Q2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgbGlzdDYudGV4dENvbnRlbnQ9J1Nob3AnXG4gICBsaXN0Ni5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY3JlYXRlU2hvcClcblxuICAgY29uc3QgbGlzdDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBsaXN0Ny50ZXh0Q29udGVudD0nQ29udGFjdCdcblxuICAgIHVsLmFwcGVuZENoaWxkKGxpc3QxKVxuICAgIHVsLmFwcGVuZENoaWxkKGxpc3QyKVxuICAgIHVsLmFwcGVuZENoaWxkKGxpc3QzKVxuICAgIHVsLmFwcGVuZENoaWxkKGxpc3Q0KVxuICAgIHVsLmFwcGVuZENoaWxkKGxpc3Q1KVxuICAgIHVsLmFwcGVuZENoaWxkKGxpc3Q2KVxuICAgIHVsLmFwcGVuZENoaWxkKGxpc3Q3KVxuXG5cbiBuYXYuYXBwZW5kQ2hpbGQodWwpXG4gc2VhcmNoLmFwcGVuZENoaWxkKHNlYXJjaElucHV0KVxuc2VhcmNoLmFwcGVuZENoaWxkKHNlYXJjaEljb24pXG5cbiBzZWFyY2hTZWN0LmFwcGVuZENoaWxkKHNlYXJjaClcbiBzZWFyY2hTZWN0LmFwcGVuZENoaWxkKGhhbmRCYWcpXG4gbG9nb1NlY3Rpb24uYXBwZW5kQ2hpbGQobG9nbylcbiBcbiBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KVxuIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvU2VjdGlvbilcbiBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoU2VjdClcbiAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxufVxuIiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgaG9tZUltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQWJvdXRVcyB9IGZyb20gXCIuL2Fib3V0VXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcblxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbmNvbnN0IHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnRleHRDb250ZW50LmNsYXNzTmFtZT0ndGV4dENvbnRlbnQnXG5jb25zdCBpbWFnZVNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaW1hZ2VTZWN0LmNsYXNzTmFtZT0naW1hZ2VTZWN0J1xuXG5cbmNvbnN0IHNvY2lhbE1lZGlhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnNvY2lhbE1lZGlhLmNsYXNzTmFtZT0nc29jaWFsU2VjdCdcbmNvbnN0IGZhY2Vib29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbmZhY2Vib29rLnNyYz1ob21lSW1nWzBdXG5jb25zdCB0d2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbnR3aXR0ZXIuc3JjPWhvbWVJbWdbMV1cbmNvbnN0IHBpbnRlcmVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5waW50ZXJlc3Quc3JjPWhvbWVJbWdbMl1cblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmJ1dHRvbi50ZXh0Q29udGVudD0nU2VlIE1lbnUnXG5cbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5kZXNjcmlwdGlvbi50ZXh0Q29udGVudD0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gVmFyaXVzIHNlZCBwaGFyZXRyYSBkaWN0dW0gbmVxdWUgbWFzc2EgY29uZ3VlJ1xuXG5jb25zdCBoZWFkaW5nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbmhlYWRpbmcyLmNsYXNzTmFtZT0naGVhZGluZzInXG5oZWFkaW5nMi50ZXh0Q29udGVudD0nVGhlIEFydCBvZiBzcGVlZCBmb29kIFF1YWxpdHknXG5cbmNvbnN0IGhlYWRpbmcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuaGVhZGluZzEuY2xhc3NOYW1lPSdoZWFkaW5nMSdcbmhlYWRpbmcxLnRleHRDb250ZW50PSdJdHMgUXVpY2sgJiBBbXVzaW5nISdcblxuXG5zb2NpYWxNZWRpYS5hcHBlbmRDaGlsZChwaW50ZXJlc3QpXG5zb2NpYWxNZWRpYS5hcHBlbmRDaGlsZCh0d2l0dGVyKVxuc29jaWFsTWVkaWEuYXBwZW5kQ2hpbGQoZmFjZWJvb2spXG5cbnRleHRDb250ZW50LmFwcGVuZENoaWxkKHNvY2lhbE1lZGlhKVxudGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZzEpXG50ZXh0Q29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nMilcbnRleHRDb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxudGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKVxubWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpXG5tYWluQ29udGVudC5hcHBlbmRDaGlsZChpbWFnZVNlY3QpXG5jb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250ZW50KVxuXG5jcmVhdGVBYm91dFVzKClcbn0iLCJpbXBvcnQgbG9nb0ljb24gZnJvbSAnLi4vaW1hZ2VzL0Zvb2R0dWNrLnBuZydcbmltcG9ydCBoYW5kQmFnSWNvbiBmcm9tICcuLi9pbWFnZXMvSGFuZGJhZy5wbmcnXG5pbXBvcnQgc2VhcmNoSWNvbiBmcm9tICcuLi9pbWFnZXMvc2VhcmNoLnBuZydcbmltcG9ydCBmYWNlYm9va0ljb24gZnJvbSAnLi4vaW1hZ2VzL2ZhY2Vib29rLnBuZydcbmltcG9ydCB0d2l0dGVySWNvbiBmcm9tICcuLi9pbWFnZXMvdHdpdHRlci5wbmcnXG5pbXBvcnQgcGludGVyZXN0SWNvbiBmcm9tICcuLi9pbWFnZXMvcGludGVyZXN0LnBuZydcbmltcG9ydCBncmFzc0Nvcm5lciBmcm9tICcuLi9pbWFnZXMvY29ybmVyR3Jhc3MucG5nJ1xuaW1wb3J0IGZpcnN0UG9zdCBmcm9tICcuLi9pbWFnZXMvZmlyc3RQLnBuZydcbmltcG9ydCBzZWNvbmRQb3N0IGZyb20gJy4uL2ltYWdlcy9zZWNvbmRQLnBuZydcbmltcG9ydCB0aGlyZFBvc3QgZnJvbSAnLi4vaW1hZ2VzL3RoaXJkUC5wbmcnXG5pbXBvcnQgYWJvdXQxIGZyb20gJy4uL2ltYWdlcy9hYm91dDEucG5nJ1xuaW1wb3J0IGFib3V0MiBmcm9tICcuLi9pbWFnZXMvYWJvdXQyLnBuZydcbmltcG9ydCBhYm91dDMgZnJvbSAnLi4vaW1hZ2VzL2Fib3V0My5wbmcnXG5pbXBvcnQgQ2F0ZWdvcnkxIGZyb20gJy4uL2ltYWdlcy9jYXRlZ29yeTEucG5nJ1xuaW1wb3J0IENhdGVnb3J5MiBmcm9tICcuLi9pbWFnZXMvY2F0ZWdvcnkyLnBuZydcbmltcG9ydCBDYXRlZ29yeTMgZnJvbSAnLi4vaW1hZ2VzL2NhdGVnb3J5My5wbmcnXG5pbXBvcnQgQ2F0ZWdvcnk0IGZyb20gJy4uL2ltYWdlcy9jYXRlZ29yeTQucG5nJ1xuaW1wb3J0IHNpZGVHcmFzc0ltZyBmcm9tICcuLi9pbWFnZXMvc2lkZUdyYXNzLnBuZydcbmltcG9ydCB3aHkxIGZyb20gJy4uL2ltYWdlcy93aHlfMS5wbmcnXG5pbXBvcnQgd2h5MiBmcm9tICcuLi9pbWFnZXMvd2h5XzIucG5nJ1xuaW1wb3J0IHdoeTMgZnJvbSAnLi4vaW1hZ2VzL3doeV8zLnBuZydcbmltcG9ydCB3aHk0IGZyb20gJy4uL2ltYWdlcy93aHlfNC5wbmcnXG5pbXBvcnQgd2h5NSBmcm9tICcuLi9pbWFnZXMvd2h5XzUucG5nJ1xuaW1wb3J0IHdoeTYgZnJvbSAnLi4vaW1hZ2VzL3doeV82LnBuZydcbmltcG9ydCBpbmZvMSBmcm9tICcuLi9pbWFnZXMvY2hlZkNhcC5wbmcnXG5pbXBvcnQgaW5mbzIgZnJvbSAnLi4vaW1hZ2VzL2Zvb2RQcm9kdWN0LnBuZydcbmltcG9ydCBpbmZvMyBmcm9tICcuLi9pbWFnZXMvcGl6emEucG5nJ1xuaW1wb3J0IGluZm80IGZyb20gJy4uL2ltYWdlcy9zcG9vbi5wbmcnXG5pbXBvcnQgaXRlbTEgZnJvbSAnLi4vaW1hZ2VzL2l0ZW0xLnBuZydcbmltcG9ydCBpdGVtMiBmcm9tICcuLi9pbWFnZXMvaXRlbTIucG5nJ1xuaW1wb3J0IGl0ZW0zIGZyb20gJy4uL2ltYWdlcy9pdGVtMy5wbmcnXG5pbXBvcnQgaXRlbTQgZnJvbSAnLi4vaW1hZ2VzL2l0ZW00LnBuZydcbmltcG9ydCBpdGVtNSBmcm9tICcuLi9pbWFnZXMvaXRlbTUucG5nJ1xuaW1wb3J0IGl0ZW02IGZyb20gJy4uL2ltYWdlcy9pdGVtNi5wbmcnXG5pbXBvcnQgaXRlbTcgZnJvbSAnLi4vaW1hZ2VzL2l0ZW03LnBuZydcbmltcG9ydCBpdGVtOCBmcm9tICcuLi9pbWFnZXMvaXRlbTgucG5nJ1xuaW1wb3J0IGx1bmNoMSBmcm9tICcuLi9pbWFnZXMvbHVuY2gxLmpwZydcbmltcG9ydCBsdW5jaDIgZnJvbSAnLi4vaW1hZ2VzL2x1bmNoMi5qcGVnJ1xuaW1wb3J0IGx1bmNoMyBmcm9tICcuLi9pbWFnZXMvbHVuY2gzLmpwZWcnXG5pbXBvcnQgbHVuY2g0IGZyb20gJy4uL2ltYWdlcy9sdW5jaDQuanBlZydcbmltcG9ydCBsdW5jaDUgZnJvbSAnLi4vaW1hZ2VzL2x1bmNoNS5qcGVnJ1xuaW1wb3J0IGx1bmNoNiBmcm9tICcuLi9pbWFnZXMvbHVuY2g2LnBuZydcbmltcG9ydCBkaW5uZXIxIGZyb20gJy4uL2ltYWdlcy9kaW5uZXIxLmpwZWcnXG5pbXBvcnQgZGlubmVyMiBmcm9tICcuLi9pbWFnZXMvZGlubmVyMi5qcGVnJ1xuaW1wb3J0IGRpbm5lcjMgZnJvbSAnLi4vaW1hZ2VzL2Rpbm5lcjMuanBlZydcbmltcG9ydCBkaW5uZXI0IGZyb20gJy4uL2ltYWdlcy9kaW5uZXI0LmpwZWcnXG5pbXBvcnQgZGlubmVyNSBmcm9tICcuLi9pbWFnZXMvZGlubmVyNS5qcGVnJ1xuaW1wb3J0IGRpbm5lcjYgZnJvbSAnLi4vaW1hZ2VzL2Rpbm5lcjYuanBlZydcbmltcG9ydCBkZXNlcnQxIGZyb20gJy4uL2ltYWdlcy9kZXNlcnQxLmpwZWcnXG5pbXBvcnQgZGVzZXJ0MiBmcm9tICcuLi9pbWFnZXMvZGVzZXJ0Mi5qcGVnJ1xuaW1wb3J0IGRyaW5rMSBmcm9tICcuLi9pbWFnZXMvZHJpbmsxLmpwZWcnXG5pbXBvcnQgZHJpbmsyIGZyb20gJy4uL2ltYWdlcy9kcmluazIuanBlZydcbmltcG9ydCBkcmluazMgZnJvbSAnLi4vaW1hZ2VzL2RyaW5rMy5qcGVnJ1xuaW1wb3J0IHNuYWNrMSBmcm9tICcuLi9pbWFnZXMvc25hY2sxLmpwZWcnXG5pbXBvcnQgc25hY2syIGZyb20gJy4uL2ltYWdlcy9zbmFjazIuanBlZydcbmltcG9ydCBzb3VwMSBmcm9tICcuLi9pbWFnZXMvc291cDEuanBlZydcbmltcG9ydCBzb3VwMiBmcm9tICcuLi9pbWFnZXMvc291cDIuanBlZydcbmltcG9ydCBzb3VwMyBmcm9tICcuLi9pbWFnZXMvc291cDMuanBlZydcbmltcG9ydCBjaGVmMSBmcm9tICcuLi9pbWFnZXMvY2hlZjEucG5nJ1xuaW1wb3J0IGNoZWYyIGZyb20gJy4uL2ltYWdlcy9jaGVmMi5wbmcnXG5pbXBvcnQgY2hlZjMgZnJvbSAnLi4vaW1hZ2VzL2NoZWYzLnBuZydcbmltcG9ydCBjaGVmNCBmcm9tICcuLi9pbWFnZXMvY2hlZjQucG5nJ1xuaW1wb3J0IHByb2ZpbGUxIGZyb20gJy4uL2ltYWdlcy9wcm9maWxlMS5wbmcnXG5pbXBvcnQgcHJvZmlsZTIgZnJvbSAnLi4vaW1hZ2VzL3Byb2ZpbGUyLnBuZydcbmltcG9ydCBwcm9maWxlMyBmcm9tICcuLi9pbWFnZXMvcHJvZmlsZTMucG5nJ1xuaW1wb3J0IHByb2ZpbGU0IGZyb20gJy4uL2ltYWdlcy9wcm9maWxlNC5wbmcnXG5pbXBvcnQgdGVzdGltb25pYWxHcmVlbiBmcm9tICcuLi9pbWFnZXMvdGVzdGltb25pYWwucG5nJ1xuaW1wb3J0IHN0YXIxIGZyb20gJy4uL2ltYWdlcy9zdGFyLnBuZydcbmltcG9ydCBFbXB0eXN0YXIgZnJvbSAnLi4vaW1hZ2VzL2VtcHR5U3Rhci5wbmcnXG5pbXBvcnQgZ3Jhc3NDb3JuZXIyIGZyb20gJy4uL2ltYWdlcy9ncmFzczIucG5nJ1xuaW1wb3J0IGJsb2cxIGZyb20gJy4uL2ltYWdlcy9ibG9nMS5wbmcnXG5pbXBvcnQgYmxvZzIgZnJvbSAnLi4vaW1hZ2VzL2Jsb2cyLnBuZydcbmltcG9ydCBibG9nMyBmcm9tICcuLi9pbWFnZXMvYmxvZzMucG5nJ1xuaW1wb3J0IGxpa2UgZnJvbSAnLi4vaW1hZ2VzL2xpa2UucG5nJ1xuaW1wb3J0IGNvbW1lbnQgZnJvbSAnLi4vaW1hZ2VzL2NvbW1lbnQucG5nJ1xuaW1wb3J0IHNoYXJlIGZyb20gJy4uL2ltYWdlcy9zaGFyZS5wbmcnXG5pbXBvcnQgTWVudUltZzEgZnJvbSAnLi4vaW1hZ2VzL2NhdGVnb3J5Rm9yTWVudTEucG5nJ1xuaW1wb3J0IE1lbnVJbWcyIGZyb20gJy4uL2ltYWdlcy9jYXRlZ29yeUZvck1lbnUyLnBuZydcbmltcG9ydCBNZW51SW1nMyBmcm9tICcuLi9pbWFnZXMvY2F0ZWdvcnlGb3JNZW51My5wbmcnXG5pbXBvcnQgTWVudUltZzQgZnJvbSAnLi4vaW1hZ2VzL2NhdGVnb3J5Rm9yTWVudTQucG5nJ1xuaW1wb3J0IGNvZmZlZSBmcm9tICcuLi9pbWFnZXMvQ29mZmVlLnBuZydcbmltcG9ydCBicmFuZDEgZnJvbSAnLi4vaW1hZ2VzL2JyYW5kMS5wbmcnXG5pbXBvcnQgYnJhbmQyIGZyb20gJy4uL2ltYWdlcy9icmFuZDIucG5nJ1xuaW1wb3J0IGJyYW5kMyBmcm9tICcuLi9pbWFnZXMvYnJhbmQzLnBuZydcbmltcG9ydCBicmFuZDQgZnJvbSAnLi4vaW1hZ2VzL2JyYW5kNC5wbmcnXG5pbXBvcnQgYnJhbmQ1IGZyb20gJy4uL2ltYWdlcy9icmFuZDUucG5nJ1xuaW1wb3J0IGJyYW5kNiBmcm9tICcuLi9pbWFnZXMvYnJhbmQ2LnBuZydcbmltcG9ydCBhYm91dFBhZ2UxIGZyb20gJy4uL2ltYWdlcy9hYm91dFBhZ2UucG5nJ1xuaW1wb3J0IGFib3V0UGFnZTIgZnJvbSAnLi4vaW1hZ2VzL2Fib3V0UGFnZTIucG5nJ1xuaW1wb3J0IGFib3V0UGFnZTMgZnJvbSAnLi4vaW1hZ2VzL2Fib3V0UGFnZTMucG5nJ1xuXG5cbmV4cG9ydCBjb25zdCBoZWFkZXJJbWcgPSBbbG9nb0ljb24saGFuZEJhZ0ljb24sc2VhcmNoSWNvbl1cblxuZXhwb3J0IGNvbnN0IGhvbWVJbWcgPSBbZmFjZWJvb2tJY29uLHR3aXR0ZXJJY29uLHBpbnRlcmVzdEljb25dXG5cbmV4cG9ydCBjb25zdCBmb290ZXJJbWcgPSBbZ3Jhc3NDb3JuZXIsZmlyc3RQb3N0LHNlY29uZFBvc3QsdGhpcmRQb3N0XVxuXG5leHBvcnQgY29uc3QgYWJvdXRJbWcgPSBbYWJvdXQxLGFib3V0MixhYm91dDNdXG5cbmV4cG9ydCBjb25zdCBDYXRlZ29yeUltZyA9IFtDYXRlZ29yeTEsQ2F0ZWdvcnkyLENhdGVnb3J5MyxDYXRlZ29yeTQsc2lkZUdyYXNzSW1nXVxuXG5leHBvcnQgY29uc3QgV2h5SW1nID0gW3doeTEsd2h5Mix3aHkzLHdoeTQsd2h5NSx3aHk2XVxuXG5leHBvcnQgY29uc3QgcmVzdHJhdUluZm9TZWN0SW1nID0gW2luZm8xLGluZm8yLGluZm8zLGluZm80XVxuXG5leHBvcnQgY29uc3QgbWVudUl0ZW1JbWcgPSBbaXRlbTEsaXRlbTIsaXRlbTMsaXRlbTQsaXRlbTUsaXRlbTYsaXRlbTcsaXRlbThdXG5cbmV4cG9ydCBjb25zdCBtZW51THVuY2hJbWcgPSBbbHVuY2gxLGx1bmNoMixsdW5jaDMsbHVuY2g0LGx1bmNoNSxsdW5jaDZdXG5cbmV4cG9ydCBjb25zdCBtZW51RGlubmVySW1nID0gW2Rpbm5lcjEsZGlubmVyMixkaW5uZXIzLGRpbm5lcjQsZGlubmVyNSxkaW5uZXI2XVxuXG5leHBvcnQgY29uc3QgbWVudURlc2VydEltZyA9IFtkZXNlcnQxLGRlc2VydDJdXG5cbmV4cG9ydCBjb25zdCBtZW51RHJpbmtJbWcgPSBbZHJpbmsxLGRyaW5rMixkcmluazNdXG5cbmV4cG9ydCBjb25zdCBtZW51U25hY2tJbWcgPSBbc25hY2sxLHNuYWNrMl1cblxuZXhwb3J0IGNvbnN0IG1lbnVTb3VwSW1nID0gW3NvdXAxLHNvdXAyLHNvdXAzXVxuXG5leHBvcnQgY29uc3QgY2hlZkltZyA9IFtjaGVmMSxjaGVmMixjaGVmMyxjaGVmNF1cblxuZXhwb3J0IGNvbnN0IHByb2ZpbGVJbWcgPSBbcHJvZmlsZTEsdGVzdGltb25pYWxHcmVlbixzdGFyMSxFbXB0eXN0YXIscHJvZmlsZTIscHJvZmlsZTMscHJvZmlsZTQsZ3Jhc3NDb3JuZXIyLGdyYXNzQ29ybmVyMl1cblxuZXhwb3J0IGNvbnN0IGJsb2dJbWcgID0gW2Jsb2cxLGJsb2cyLGJsb2czLGxpa2UsY29tbWVudCxzaGFyZV1cblxuZXhwb3J0IGNvbnN0IE1lbnVJbWcgPSBbTWVudUltZzEsTWVudUltZzIsTWVudUltZzMsTWVudUltZzQsY29mZmVlXVxuXG5leHBvcnQgY29uc3QgYnJhbmRzID0gW2JyYW5kMSxicmFuZDIsYnJhbmQzLGJyYW5kNCxicmFuZDUsYnJhbmQ2XVxuXG5leHBvcnQgY29uc3QgYWJvdXRQYWdlID0gW2Fib3V0UGFnZTEsYWJvdXRQYWdlMixhYm91dFBhZ2UzXSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7aGVhZGVySW1nfSAgZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgeyBsb2FkQWxsaG9tZUNvbXBvbmVudHMgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IHsgY3JlYXRlUmVzdHJhdUluZm8gfSBmcm9tIFwiLi9yZXN0cmF1SW5mb1NlY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUJsb2dQYWdlIH0gZnJvbSBcIi4vYmxvZ1BhZ2VcIjtcbmltcG9ydCB7IE1lbnVJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IGJyYW5kcyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2hvcCB9IGZyb20gXCIuL3Nob3BcIjtcbmltcG9ydCB7IGNyZWF0ZUFib3V0UGFnZSB9IGZyb20gXCIuL2Fib3V0UGFnZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKXtcbiAgICBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzRnJvbURpc3BsYXkoKSB7XG4gICAgICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfX1cbiAgICAgICAgXG4gICAgY29uc3QgTWVudUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXNGcm9tRGlzcGxheSgpXG5jb250ZW50LnN0eWxlLmJhY2tncm91bmQ9J3RyYW5zcGFyZW50J1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJylcbmJvZHkuY2xhc3NMaXN0PSdib2R5UGFnZSdcblxuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaGVhZGVyLmNsYXNzTmFtZT0naGVhZGVyRm9yTmF2J1xuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbmxvZ28uc3JjID0gaGVhZGVySW1nWzBdXG5sb2dvLmNsYXNzTGlzdD0nbG9nb0ZvckhlYWRlcidcblxuICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICB1bC5jbGFzc05hbWU9J25hdkZvckhlYWRlcidcbiAgIGNvbnN0IGxpc3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgbGlzdDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGxvYWRBbGxob21lQ29tcG9uZW50cylcbiAgIGxpc3QxLnRleHRDb250ZW50PSdIb21lJ1xuXG4gICBjb25zdCBsaXN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3QyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVNZW51UGFnZSlcbiAgIGxpc3QyLnRleHRDb250ZW50PSdNZW51J1xuXG4gICBjb25zdCBsaXN0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3QzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVCbG9nUGFnZSlcbiAgIGxpc3QzLnRleHRDb250ZW50PSdCbG9nJ1xuXG4gICBjb25zdCBsaXN0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3Q0LnRleHRDb250ZW50PSdQYWdlcydcblxuICAgY29uc3QgbGlzdDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBsaXN0NS50ZXh0Q29udGVudD0nQWJvdXQnXG4gICBsaXN0NS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY3JlYXRlQWJvdXRQYWdlKVxuXG4gICBjb25zdCBsaXN0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3Q2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVTaG9wKVxuICAgbGlzdDYudGV4dENvbnRlbnQ9J1Nob3AnXG5cbiAgIGNvbnN0IGxpc3Q3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgbGlzdDcudGV4dENvbnRlbnQ9J0NvbnRhY3QnXG5cbiAgIGNvbnN0IGljb25TZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIGNvbnN0IHBhcmEgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgcGFyYS50ZXh0Q29udGVudD0nT3VyIE1lbnUnXG5cbiAgIGNvbnN0IHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICBwYXJhMi5pbm5lckhUTUw9JzxzcGFuPkhvbWU8L3NwYW4+ID4gTWVudSdcblxuICAgdWwuYXBwZW5kQ2hpbGQobGlzdDEpXG4gICB1bC5hcHBlbmRDaGlsZChsaXN0MilcbiAgIHVsLmFwcGVuZENoaWxkKGxpc3QzKSBcbiAgIHVsLmFwcGVuZENoaWxkKGxpc3Q0KVxuICAgdWwuYXBwZW5kQ2hpbGQobGlzdDUpXG4gICB1bC5hcHBlbmRDaGlsZChsaXN0NilcbiAgIHVsLmFwcGVuZENoaWxkKGxpc3Q3KVxuXG5oZWFkZXIuYXBwZW5kQ2hpbGQobG9nbylcbmhlYWRlci5hcHBlbmRDaGlsZCh1bClcbmhlYWRlci5hcHBlbmRDaGlsZChwYXJhKVxuXG5cbk1lbnVCb2R5LmNsYXNzTmFtZT0nTWVudUJvZHknXG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuaGVhZGVyLmFwcGVuZENoaWxkKHBhcmEyKVxuY29udGVudC5hcHBlbmRDaGlsZChNZW51Qm9keSlcblxuY3JlYXRlTWVudUNhdGVnb3J5KCdTdGFydGVyIE1lbnUnLE1lbnVJbWdbMF0pXG5jcmVhdGVNZW51Q2F0ZWdvcnkyKCdNYWluIENvdXJzZScsTWVudUltZ1sxXSlcbmNyZWF0ZU1lbnVDYXRlZ29yeSgnRGVzc2VydHMnLE1lbnVJbWdbMl0pXG5jcmVhdGVNZW51Q2F0ZWdvcnkyKCdEcmlua3MnLE1lbnVJbWdbM10pXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVNZW51Q2F0ZWdvcnkoVElUTEUsSU1HKXtcbmxldCBvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxub25lLmNsYXNzTmFtZT0nb25lJ1xubGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxudGl0bGUudGV4dENvbnRlbnQ9VElUTEVcblxuXG5sZXQgbWVkaWFTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuaW1nLnNyYz1JTUdcblxubWVkaWFTZWN0LmFwcGVuZENoaWxkKGltZylcblxubGV0IHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vIGxldCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbi8vIGltZzIuc3JjID0gTWVudUltZ1s0XVxudGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpXG5jcmVhdGVJdGVtKCdBbGRlciBHcmlsbGVkIENoaW5vb2sgU2FsbW9uJywnPHA+VG9hc3RlZCBGcmVuY2ggYnJlYWQgdG9wcGVkIHdpdGggcm9tYW5vLCBjaGVkZGFyIDxicj41MDBDQUw8L3A+JywnMzIkJylcbmNyZWF0ZUl0ZW0oJ0FsZGVyIEdyaWxsZWQgQ2hpbm9vayBTYWxtb24nLCc8cD5Ub2FzdGVkIEZyZW5jaCBicmVhZCB0b3BwZWQgd2l0aCByb21hbm8sIGNoZWRkYXIgPGJyPjUwMENBTDwvcD4nLCczMiQnKVxuY3JlYXRlSXRlbSgnQWxkZXIgR3JpbGxlZCBDaGlub29rIFNhbG1vbicsJzxwPlRvYXN0ZWQgRnJlbmNoIGJyZWFkIHRvcHBlZCB3aXRoIHJvbWFubywgY2hlZGRhciA8YnI+NTAwQ0FMPC9wPicsJzMyJCcpXG5jcmVhdGVJdGVtKCdBbGRlciBHcmlsbGVkIENoaW5vb2sgU2FsbW9uJywnPHA+VG9hc3RlZCBGcmVuY2ggYnJlYWQgdG9wcGVkIHdpdGggcm9tYW5vLCBjaGVkZGFyIDxicj41MDBDQUw8L3A+JywnMzIkJylcblxuZnVuY3Rpb24gY3JlYXRlSXRlbShOQU1FLERFU0MsUFJJQ0Upe1xubGV0IGl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxubGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbm5hbWUuY2xhc3NOYW1lPSduYW1lJ1xubmFtZS50ZXh0Q29udGVudCA9IE5BTUVcbmxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5kZXNjLmlubmVySFRNTCA9IERFU0NcbmxldCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxucHJpY2UudGV4dENvbnRlbnQgPSBQUklDRVxuaXRlbTEuYXBwZW5kQ2hpbGQobmFtZSlcbml0ZW0xLmFwcGVuZENoaWxkKGRlc2MpXG5pdGVtMS5hcHBlbmRDaGlsZChwcmljZSlcbnRleHRDb250ZW50LmFwcGVuZENoaWxkKGl0ZW0xKVxufVxub25lLmFwcGVuZENoaWxkKG1lZGlhU2VjdClcblxub25lLmFwcGVuZENoaWxkKHRleHRDb250ZW50KVxuXG5NZW51Qm9keS5hcHBlbmRDaGlsZChvbmUpXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTWVudUNhdGVnb3J5MihUSVRMRSxJTUcpe1xuICAgIGxldCBvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG9uZS5jbGFzc05hbWU9J29uZSdcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGl0bGUudGV4dENvbnRlbnQ9VElUTEVcbiAgICBcbiAgICBcbiAgICBsZXQgbWVkaWFTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcuc3JjPUlNR1xuICAgIFxuICAgIG1lZGlhU2VjdC5hcHBlbmRDaGlsZChpbWcpXG4gICAgXG4gICAgbGV0IHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAvLyBsZXQgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgLy8gaW1nMi5zcmMgPSBNZW51SW1nWzRdXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgY3JlYXRlSXRlbSgnQWxkZXIgR3JpbGxlZCBDaGlub29rIFNhbG1vbicsJzxwPlRvYXN0ZWQgRnJlbmNoIGJyZWFkIHRvcHBlZCB3aXRoIHJvbWFubywgY2hlZGRhciA8YnI+NTAwQ0FMPC9wPicsJzMyJCcpXG4gICAgY3JlYXRlSXRlbSgnQWxkZXIgR3JpbGxlZCBDaGlub29rIFNhbG1vbicsJzxwPlRvYXN0ZWQgRnJlbmNoIGJyZWFkIHRvcHBlZCB3aXRoIHJvbWFubywgY2hlZGRhciA8YnI+NTAwQ0FMPC9wPicsJzMyJCcpXG4gICAgY3JlYXRlSXRlbSgnQWxkZXIgR3JpbGxlZCBDaGlub29rIFNhbG1vbicsJzxwPlRvYXN0ZWQgRnJlbmNoIGJyZWFkIHRvcHBlZCB3aXRoIHJvbWFubywgY2hlZGRhciA8YnI+NTAwQ0FMPC9wPicsJzMyJCcpXG4gICAgY3JlYXRlSXRlbSgnQWxkZXIgR3JpbGxlZCBDaGlub29rIFNhbG1vbicsJzxwPlRvYXN0ZWQgRnJlbmNoIGJyZWFkIHRvcHBlZCB3aXRoIHJvbWFubywgY2hlZGRhciA8YnI+NTAwQ0FMPC9wPicsJzMyJCcpXG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlSXRlbShOQU1FLERFU0MsUFJJQ0Upe1xuICAgIGxldCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG5hbWUuY2xhc3NOYW1lPSduYW1lJ1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBOQU1FXG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkZXNjLmlubmVySFRNTCA9IERFU0NcbiAgICBsZXQgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwcmljZS50ZXh0Q29udGVudCA9IFBSSUNFXG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQobmFtZSlcbiAgICBpdGVtMS5hcHBlbmRDaGlsZChkZXNjKVxuICAgIGl0ZW0xLmFwcGVuZENoaWxkKHByaWNlKVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKGl0ZW0xKVxuICAgIH1cbiAgICBcbiAgICBcbiAgICBvbmUuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpXG4gICAgb25lLmFwcGVuZENoaWxkKG1lZGlhU2VjdClcbiAgICBNZW51Qm9keS5hcHBlbmRDaGlsZChvbmUpXG4gICAgfVxuICAgIGNvbnN0IHBhcnRuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHBhcnRuZXIuY2xhc3NOYW1lPSdwYXJ0bmVyJ1xuXG4gICAgY29uc3QgdGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGl0bGUxLnRleHRDb250ZW50PSdQYXJ0bmVycyBhbmQgQ2xpZW50cydcbiAgICBjb25zdCB0aXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGl0bGUyLnRleHRDb250ZW50PSdXZSB3b3JrIHdpdGggdGhlIGJlc3QgcGVvcGxlJ1xuICAgIFxuICAgIHBhcnRuZXIuYXBwZW5kQ2hpbGQodGl0bGUxKVxuICAgIHBhcnRuZXIuYXBwZW5kQ2hpbGQodGl0bGUyKVxuICAgIFxuICAgIGNvbnN0IHdvcmtXaXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB3b3JrV2l0aC5jbGFzc05hbWU9J3dvcmtXaXRoJztcblxuICAgIGNvbnN0IGJyYW5kMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgYnJhbmQxLnNyYz1icmFuZHNbMF1cbiAgICBjb25zdCBicmFuZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGJyYW5kMi5zcmM9YnJhbmRzWzFdXG4gICAgY29uc3QgYnJhbmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBicmFuZDMuc3JjPWJyYW5kc1syXVxuICAgIGNvbnN0IGJyYW5kNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgIGJyYW5kNC5zcmM9YnJhbmRzWzNdXG4gICAgIGNvbnN0IGJyYW5kNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgIGJyYW5kNS5zcmM9YnJhbmRzWzRdXG4gICAgIGNvbnN0IGJyYW5kNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgIGJyYW5kNi5zcmM9YnJhbmRzWzVdXG5cblxuICB3b3JrV2l0aC5hcHBlbmRDaGlsZChicmFuZDEpXG4gIHdvcmtXaXRoLmFwcGVuZENoaWxkKGJyYW5kMilcbiAgd29ya1dpdGguYXBwZW5kQ2hpbGQoYnJhbmQzKVxuICB3b3JrV2l0aC5hcHBlbmRDaGlsZChicmFuZDQpXG4gIHdvcmtXaXRoLmFwcGVuZENoaWxkKGJyYW5kNSlcbiAgd29ya1dpdGguYXBwZW5kQ2hpbGQoYnJhbmQ2KVxuICBcbiAgcGFydG5lci5hcHBlbmRDaGlsZCh3b3JrV2l0aCkgIFxuICBNZW51Qm9keS5hcHBlbmRDaGlsZChwYXJ0bmVyKVxuICBjb250ZW50LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICBjb250ZW50LmNsYXNzTmFtZT0nY29udGVudFNlY29uZFN0eWxlJ1xuXG4gXG5cblxuICAgIGNyZWF0ZVJlc3RyYXVJbmZvKClcbiAgICBjb25zdCAgaW5mb1NlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdHJhdUluZm9TZWN0JylcbiAgICBpbmZvU2VjdC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJylcbiAgICBpbmZvU2VjdC5jbGFzc05hbWU9J3Jlc3RyYXVJbmZvU2VjdEZvckhlYWRlcidcbiAgICAgXG4gICAgY3JlYXRlRm9vdGVyKClcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKVxuICAgIGZvb3Rlci5jbGFzc05hbWU9J2Zvb3RlckNsYXNzJ1xuICAgIFxufVxuXG4iLCJpbXBvcnQge2NvbnRlbnR9IGZyb20gJy4uL2luZGV4J1xuaW1wb3J0IHsgY2hlZkltZyB9IGZyb20gJy4vaW1hZ2VzJ1xuIFxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3VyQ2hlZigpe1xuXG5jb25zdCBvdXJDaGVmU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5vdXJDaGVmU2VjdC5jbGFzc05hbWU9J291ckNoZWZTZWN0J1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24udGV4dENvbnRlbnQ9J1NlZSBNb3JlJ1xuY29uc3QgVGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuVGl0bGUxLnRleHRDb250ZW50PSdDaGVmcydcbmNvbnN0IFRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcblRpdGxlMi5pbm5lckhUTUw9JzxzcGFuPk1lPC9zcGFuPmV0IE91ciBDaGVmJ1xub3VyQ2hlZlNlY3QuYXBwZW5kQ2hpbGQoVGl0bGUxKVxub3VyQ2hlZlNlY3QuYXBwZW5kQ2hpbGQoVGl0bGUyKVxubGV0IGNoZWZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNoZWZMaXN0LmNsYXNzTmFtZT0nY2hlZkxpc3QnXG5tYWtlQ2hlZlNlY3QoY2hlZkltZ1swXSwnRC5Fc3R3b29kJywnQ2hpZWYgQ2hlZicpXG5tYWtlQ2hlZlNlY3QoY2hlZkltZ1sxXSwnRC5Fc3R3b29kJywnQ2hpZWYgQ2hlZicpXG5tYWtlQ2hlZlNlY3QoY2hlZkltZ1syXSwnRC5Fc3R3b29kJywnQ2hpZWYgQ2hlZicpXG5tYWtlQ2hlZlNlY3QoY2hlZkltZ1szXSwnRC5Fc3R3b29kJywnQ2hpZWYgQ2hlZicpXG5cblxuZnVuY3Rpb24gbWFrZUNoZWZTZWN0KGltZyxOYW1lLGRlc2lnbmF0aW9uKXtcblxuICAgIGxldCBjaGVmU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hlZlNlY3QuY2xhc3NOYW1lPSdjaGVmU2VjdCdcbiAgICBsZXQgY2hlZlNlY3RJbWcgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBjaGVmU2VjdEltZy5zcmM9aW1nXG4gICAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGluZm8uY2xhc3NOYW1lPSdpbmZvJ1xuICAgIGNoZWZTZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsaW5mb0FuaW1hdGlvbilcbiAgICBjaGVmU2VjdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsaW5mb0FuaW1hdGlvbkxlYXZlKVxuICAgIGZ1bmN0aW9uIGluZm9BbmltYXRpb24oKXtcbiAgICAgICAgaW5mby5zdHlsZS53aWR0aD0nMTAwcHgnXG4gICAgICAgIGluZm9OYW1lLnN0eWxlLmRpc3BsYXk9J2Jsb2NrJ1xuICAgICAgICBpbmZvRGVzaWduYXRpb24uc3R5bGUuZGlzcGxheT0nYmxvY2snXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5mb0FuaW1hdGlvbkxlYXZlKCl7XG4gICAgICAgIGluZm8uc3R5bGUud2lkdGg9JzBweCdcbiAgICAgICAgaW5mb05hbWUuc3R5bGUuZGlzcGxheT0nbm9uZSdcbiAgICAgICAgaW5mb0Rlc2lnbmF0aW9uLnN0eWxlLmRpc3BsYXk9J25vbmUnXG4gICAgfVxuICAgIGxldCBpbmZvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIFxuICAgIGluZm9OYW1lLnRleHRDb250ZW50PU5hbWVcbiAgICBsZXQgaW5mb0Rlc2lnbmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaW5mb0Rlc2lnbmF0aW9uLnRleHRDb250ZW50PWRlc2lnbmF0aW9uXG4gIFxuICAgIGluZm8uYXBwZW5kQ2hpbGQoaW5mb05hbWUpXG4gICAgaW5mby5hcHBlbmRDaGlsZChpbmZvRGVzaWduYXRpb24pXG4gICAgY2hlZlNlY3QuYXBwZW5kQ2hpbGQoY2hlZlNlY3RJbWcpXG4gICAgY2hlZlNlY3QuYXBwZW5kQ2hpbGQoaW5mbylcblxuICAgIGNoZWZMaXN0LmFwcGVuZENoaWxkKGNoZWZTZWN0KVxuICAgIFxuXG59XG5cbm91ckNoZWZTZWN0LmFwcGVuZENoaWxkKGJ1dHRvbilcblxub3VyQ2hlZlNlY3QuYXBwZW5kQ2hpbGQoY2hlZkxpc3QpXG5jb250ZW50LmFwcGVuZENoaWxkKG91ckNoZWZTZWN0KVxuXG5cblxuXG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHtoZWFkZXJJbWd9ICBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IGxvYWRBbGxob21lQ29tcG9uZW50cyB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gXCIuL21lbnVQYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVCbG9nUGFnZSB9IGZyb20gXCIuL2Jsb2dQYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgY3JlYXRlU2hvcCB9IGZyb20gXCIuL3Nob3BcIjtcbmltcG9ydCB7IGNyZWF0ZUFib3V0UGFnZSB9IGZyb20gXCIuL2Fib3V0UGFnZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2VIZWFkZXIob3B0aW9uLHRpdGxlRm9ySGVhZGVyKXtcbiAgIFxuICAgIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZD0ndHJhbnNwYXJlbnQnXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGJvZHkucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gICAgYm9keS5jbGFzc0xpc3Q9J2JvZHlQYWdlJ1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2Rlc0Zyb21EaXNwbGF5KCkge1xuICAgICAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH19XG5cbiAgIFxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzRnJvbURpc3BsYXkoKVxuICAgICAgICBjb25zdCBNZW51Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIE1lbnVCb2R5LmNsYXNzTmFtZT0nTWVudUJvZHknXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGhlYWRlci5jbGFzc05hbWU9J2hlYWRlckZvck5hdidcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBsb2dvLnNyYyA9IGhlYWRlckltZ1swXVxuICAgICAgICBsb2dvLmNsYXNzTGlzdD0nbG9nb0ZvckhlYWRlcidcbiAgICAgICAgXG4gICAgICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICAgICB1bC5jbGFzc05hbWU9J25hdkZvckhlYWRlcidcbiAgICAgICAgICAgY29uc3QgbGlzdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgIGxpc3QxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxsb2FkQWxsaG9tZUNvbXBvbmVudHMpXG4gICAgICAgICAgIGxpc3QxLnRleHRDb250ZW50PSdIb21lJ1xuICAgICAgICBcbiAgICAgICAgICAgY29uc3QgbGlzdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgIGxpc3QyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVNZW51UGFnZSlcbiAgICAgICAgICAgbGlzdDIudGV4dENvbnRlbnQ9J01lbnUnXG4gICAgICAgIFxuICAgICAgICAgICBjb25zdCBsaXN0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgbGlzdDMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZUJsb2dQYWdlKVxuICAgICAgICAgICBsaXN0My50ZXh0Q29udGVudD0nQmxvZydcbiAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICBjb25zdCBsaXN0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgbGlzdDQudGV4dENvbnRlbnQ9J1BhZ2VzJ1xuICAgICAgICAgICBcbiAgICAgICAgICAgY29uc3QgbGlzdDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgIGxpc3Q1LnRleHRDb250ZW50PSdBYm91dCdcbiAgICAgICAgICAgIGxpc3Q1LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVBYm91dFBhZ2UpXG4gICAgICAgICAgIGxpc3Q1LnRleHRDb250ZW50PSdBYm91dCdcbiAgICAgICAgXG4gICAgICAgICAgIGNvbnN0IGxpc3Q2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICBsaXN0Ni50ZXh0Q29udGVudD0nU2hvcCdcbiAgICAgICAgICAgbGlzdDYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZVNob3ApXG4gICAgICAgIFxuICAgICAgICAgICBjb25zdCBsaXN0NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgbGlzdDcudGV4dENvbnRlbnQ9J0NvbnRhY3QnXG4gICAgICAgIFxuICAgICAgICAgICBjb25zdCBpY29uU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgIGNvbnN0IHBhcmEgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgICAgICAgICBwYXJhLnRleHRDb250ZW50PWAke3RpdGxlRm9ySGVhZGVyfWBcbiAgICAgICAgXG4gICAgICAgICAgIGNvbnN0IHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgIHBhcmEyLmlubmVySFRNTD1gPHNwYW4+SG9tZTwvc3Bhbj4gPiAke29wdGlvbn1gXG4gICAgICAgIFxuICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaXN0MSlcbiAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGlzdDIpXG4gICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpc3QzKSBcbiAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGlzdDQpXG4gICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpc3Q1KVxuICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaXN0NilcbiAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGlzdDcpXG4gICAgICAgIFxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbylcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHVsKVxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocGFyYSlcbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHBhcmEyKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKE1lbnVCb2R5KVxuICAgIFxuXG5cblxuICAgICAgICBjcmVhdGVGb290ZXIoKVxuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKVxuICAgICAgICBmb290ZXIuY2xhc3NOYW1lPSdmb290ZXJDbGFzcydcbiAgICAgICBcbiAgICAgICAgXG5cblxufSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVzdHJhdUFjdGl2ZSgpe1xuY29uc3QgcmVzdHJhdUFjdGl2ZVNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxucmVzdHJhdUFjdGl2ZVNlY3QuY2xhc3NOYW1lPSdyZXN0cmF1QWN0aXZlU2VjdCdcblxuY29uc3QgdGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxudGl0bGUxLnRleHRDb250ZW50PSdSZXN0YXVyYW50IEFjdGl2ZSBQcm9jZXNzJ1xuXG5jb25zdCBwYXJhICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxucGFyYS5pbm5lckhUTUw9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgZGlhbSBwZWxsZW50ZXNxdWU8YnI+IGJpYmVuZHVtIG5vbiBkdWkgdm9sdXRwYXQgZnJpbmdpbGxhIGJpYmVuZHVtLiBVcm5hLCBlbGl0IGF1Z3VlIHVybmEsJ1xuXG5cbmNvbnN0IHRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbnRpdGxlMi5pbm5lckhUTUw9JzxzcGFuPldlPC9zcGFuPiBEb2N1bWVudCBFdmVyeSBGb29kPGJyPiBCZWFuIFByb2Nlc3MgdW50aWxlIGl0IGlzIHNhdmVkJ1xuXG5jb25zdCBidG5TZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmJ0blNlY3QuY2xhc3NOYW1lPSdidG5TZWN0J1xuY29uc3QgYnRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5idG4xLmNsYXNzTmFtZT0nYnRuMSdcbmJ0bjEudGV4dENvbnRlbnQ9J1JlYWQgTW9yZSdcbmNvbnN0IHBsYXlWaWRTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnBsYXlWaWRTZWN0LmNsYXNzTmFtZT0ncGxheVZpZFNlY3QnXG5cbmNvbnN0IGJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYnRuMi5jbGFzc05hbWU9J2J0bjInXG5cbnBsYXlWaWRTZWN0LmFwcGVuZENoaWxkKGJ0bjIpXG5cbmNvbnN0IHZpZFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbnZpZFBhcmEuY2xhc3NOYW1lPSdWaWRwbGF5J1xudmlkUGFyYS50ZXh0Q29udGVudD0nUGxheSBWaWRlbydcbnBsYXlWaWRTZWN0LmFwcGVuZENoaWxkKHZpZFBhcmEpXG5cblxucmVzdHJhdUFjdGl2ZVNlY3QuYXBwZW5kQ2hpbGQodGl0bGUxKVxucmVzdHJhdUFjdGl2ZVNlY3QuYXBwZW5kQ2hpbGQodGl0bGUyKVxucmVzdHJhdUFjdGl2ZVNlY3QuYXBwZW5kQ2hpbGQocGFyYSlcblxuYnRuU2VjdC5hcHBlbmRDaGlsZChidG4xKVxuYnRuU2VjdC5hcHBlbmRDaGlsZChidG4yKVxuYnRuU2VjdC5hcHBlbmRDaGlsZChwbGF5VmlkU2VjdClcblxucmVzdHJhdUFjdGl2ZVNlY3QuYXBwZW5kQ2hpbGQoYnRuU2VjdClcbmNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdHJhdUFjdGl2ZVNlY3QpXG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgIHJlc3RyYXVJbmZvU2VjdEltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVzdHJhdUluZm8oKXtcblxuICAgIGNvbnN0IHJlc3RyYXVJbmZvU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmVzdHJhdUluZm9TZWN0LmNsYXNzTmFtZT0ncmVzdHJhdUluZm9TZWN0J1xuICAgIGNvbnN0IHJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIuY2xhc3NOYW1lPSdyZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyJ1xuXG4gICAgY29uc3QgaW5mb1N1YkRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nMS5zcmMgPSByZXN0cmF1SW5mb1NlY3RJbWdbMF1cbiAgICBjb25zdCBpbmZvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGluZm9OYW1lLnRleHRDb250ZW50PSdQcm9mZXNzaW9uYWwgQ2hlZnMnXG4gICAgY29uc3QgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbnVtYmVyLnRleHRDb250ZW50PSc0MjAnXG5cbiAgICBpbmZvU3ViRGl2MS5hcHBlbmRDaGlsZChpbWcxKVxuICAgIGluZm9TdWJEaXYxLmFwcGVuZENoaWxkKGluZm9OYW1lKVxuICAgIGluZm9TdWJEaXYxLmFwcGVuZENoaWxkKG51bWJlcilcblxuICAgIGNvbnN0IGluZm9TdWJEaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcyLnNyYyA9IHJlc3RyYXVJbmZvU2VjdEltZ1sxXVxuICAgIGNvbnN0IGluZm9OYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGluZm9OYW1lMi50ZXh0Q29udGVudD0nSXRlbXMgT2YgRm9vZCdcbiAgICBjb25zdCBudW1iZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbnVtYmVyMi50ZXh0Q29udGVudD0nMzIwJ1xuICAgIGluZm9TdWJEaXYyLmFwcGVuZENoaWxkKGltZzIpXG4gICAgaW5mb1N1YkRpdjIuYXBwZW5kQ2hpbGQoaW5mb05hbWUyKVxuICAgIGluZm9TdWJEaXYyLmFwcGVuZENoaWxkKG51bWJlcjIpXG5cbiAgICBjb25zdCBpbmZvU3ViRGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgaW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nMy5zcmMgPSByZXN0cmF1SW5mb1NlY3RJbWdbMl1cbiAgICBjb25zdCBpbmZvTmFtZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpbmZvTmFtZTMudGV4dENvbnRlbnQ9J1llYXJzIE9mIEV4cGVyaWVuY2VkJ1xuICAgIGNvbnN0IG51bWJlcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBudW1iZXIzLnRleHRDb250ZW50PSczMCsnXG4gICAgaW5mb1N1YkRpdjMuYXBwZW5kQ2hpbGQoaW1nMylcbiAgICBpbmZvU3ViRGl2My5hcHBlbmRDaGlsZChpbmZvTmFtZTMpXG4gICAgaW5mb1N1YkRpdjMuYXBwZW5kQ2hpbGQobnVtYmVyMylcblxuICAgIGNvbnN0IGluZm9TdWJEaXY0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBpbWc0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWc0LnNyYyA9IHJlc3RyYXVJbmZvU2VjdEltZ1szXVxuICAgIGNvbnN0IGluZm9OYW1lNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGluZm9OYW1lNC50ZXh0Q29udGVudD0nSGFwcHkgY3VzdG9tZXJzJ1xuICAgIGNvbnN0IG51bWJlcjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBudW1iZXI0LnRleHRDb250ZW50PScyMjAnXG4gICAgaW5mb1N1YkRpdjQuYXBwZW5kQ2hpbGQoaW1nNClcbiAgICBpbmZvU3ViRGl2NC5hcHBlbmRDaGlsZChpbmZvTmFtZTQpXG4gICAgaW5mb1N1YkRpdjQuYXBwZW5kQ2hpbGQobnVtYmVyNClcblxuICAgIHJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIuYXBwZW5kQ2hpbGQoaW5mb1N1YkRpdjEpXG4gICAgcmVzdHJhdUluZm9TZWN0QmxhY2tMYXllci5hcHBlbmRDaGlsZChpbmZvU3ViRGl2MilcbiAgICByZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyLmFwcGVuZENoaWxkKGluZm9TdWJEaXYzKVxuICAgIHJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIuYXBwZW5kQ2hpbGQoaW5mb1N1YkRpdjQpXG5cblxuICAgIHJlc3RyYXVJbmZvU2VjdC5hcHBlbmRDaGlsZChyZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdHJhdUluZm9TZWN0KVxuXG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgY3JlYXRlUGFnZUhlYWRlciB9IGZyb20gXCIuL3BhZ2VIZWFkZXJcIjtcbmltcG9ydCB7IG1lbnVJdGVtSW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaG9wKCl7XG5cbiAgICBjcmVhdGVQYWdlSGVhZGVyKCdTaG9wJywnU2hvcCBMaXN0JylcbiAgICBcbiAgICBjb25zdCBib2R5ICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGJvZHkucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gICAgYm9keS5jbGFzc05hbWU9J2JvZHlQYWdlRm9yU2hvcCdcbiAgICBjb25zdCBzaG9wQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5NZW51Qm9keScpXG4gICAgc2hvcEJvZHkucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gICAgc2hvcEJvZHkuY2xhc3NOYW1lPSdzaG9wQm9keSdcbiAgICBcblxuICAgIGNvbnN0IHNob3BTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaG9wU2VjdC5jbGFzc05hbWU9J3Nob3BTZWN0J1xuICAgIGNvbnN0IHNob3BMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaG9wTGlzdC5jbGFzc05hbWU9J3Nob3BMaXN0J1xuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIFxuIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUl0ZW0oaW1nLE5hbWUsUHJpY2Upe1xuXG4gICAgICAgIGNvbnN0IGl0ZW0gPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGl0ZW0uY2xhc3NOYW1lPSdpdGVtJ1xuXG4gICAgICAgIGNvbnN0IGl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBpdGVtSW1nLnNyYyA9IGltZ1xuXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50PU5hbWVcbiAgICAgICAgaXRlbU5hbWUuY2xhc3NOYW1lPSdpdGVtTmFtZSdcbiAgICAgICAgY29uc3QgaXRlbVByaWNlICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQ9UHJpY2VcbiAgICAgICAgXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUltZylcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSlcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpXG5cbiAgICAgICAgc2hvcExpc3QuYXBwZW5kQ2hpbGQoaXRlbSlcbiAgICB9XG5cblxuICAgc2hvcFNlY3QuYXBwZW5kQ2hpbGQoc2hvcExpc3QpXG4gICBzaG9wQm9keS5hcHBlbmRDaGlsZChzaG9wU2VjdClcblxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJylcbmZvb3Rlci5jbGFzc05hbWU9J2Zvb3RlclNob3AnXG5cbmNvbnN0IHByb2ZpbGVEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2ZpbGVEZXRhaWwuY2xhc3NOYW1lPSdwcm9maWxlRGV0YWlsJ1xuXG5jb25zdCBpbnB1dFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaW5wdXRTZWN0LmNsYXNzTmFtZT0naW5wdXRTZWN0J1xuXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmlucHV0LnBsYWNlaG9sZGVyPSdTZWFyY2ggUHJvZHVjdCdcblxuY29uc3QgaW5wdXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmlucHV0SWNvbi5jbGFzc05hbWU9J0lucHV0SUNPTidcblxuaW5wdXRTZWN0LmFwcGVuZENoaWxkKGlucHV0KVxuaW5wdXRTZWN0LmFwcGVuZENoaWxkKGlucHV0SWNvbilcblxucHJvZmlsZURldGFpbC5hcHBlbmRDaGlsZChpbnB1dFNlY3QpXG5cbnNob3BCb2R5LmFwcGVuZENoaWxkKHByb2ZpbGVEZXRhaWwpXG5cblxuY29uc3QgY2hlY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IENhdGVnb3J5UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbkNhdGVnb3J5UGFyYS50ZXh0Q29udGVudD0nQ2F0ZWdvcnknXG5jaGVja0xpc3QuYXBwZW5kQ2hpbGQoQ2F0ZWdvcnlQYXJhKVxuY2hlY2tMaXN0LmNsYXNzTmFtZT0nY2hlY2tMaXN0J1xuY3JlYXRlQ2hlY2soJ1NhbmR3aWNoZXMnKVxuY3JlYXRlQ2hlY2soJ0J1cmdlcicpXG5jcmVhdGVDaGVjaygnQ2hpY2tlbiBDaHVwJylcbmNyZWF0ZUNoZWNrKCdEcmluaycpXG5jcmVhdGVDaGVjaygnUGl6emEnKVxuY3JlYXRlQ2hlY2soJ1RoaScpXG5jcmVhdGVDaGVjaygnTm9uIHZlZycpXG5jcmVhdGVDaGVjaygnVW5jYXRlZ29yaXplJylcblxuXG5mdW5jdGlvbiBjcmVhdGVDaGVjayhOYW1lKXtcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYS5jbGFzc05hbWU9J2NoZWNrUGFyYSdcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnR5cGU9J2NoZWNrYm94J1xuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQ9YCR7TmFtZX1gXG5cbiAgICBwYXJhLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIHBhcmEuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICBjaGVja0xpc3QuYXBwZW5kQ2hpbGQocGFyYSlcbn1cblxuY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmFkZC5jbGFzc05hbWU9J2FkdmVydGlzZSdcblxuY29uc3QgbGF0ZXN0UHJvZHVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5sYXRlc3RQcm9kdWN0LmNsYXNzTmFtZT0nbGF0ZXN0UHInXG5jb25zdCBwclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxucHJUaXRsZS50ZXh0Q29udGVudD0nTGF0ZXN0IFByb2plY3QnXG5sYXRlc3RQcm9kdWN0LmFwcGVuZENoaWxkKHByVGl0bGUpXG5jcmVhdGVQcigncGl6YWEnLCcxMiQnLG1lbnVJdGVtSW1nWzRdKVxuY3JlYXRlUHIoJ3BpemFhJywnMTIkJyxtZW51SXRlbUltZ1s0XSlcbmNyZWF0ZVByKCdwaXphYScsJzEyJCcsbWVudUl0ZW1JbWdbNF0pXG5jcmVhdGVQcigncGl6YWEnLCcxMiQnLG1lbnVJdGVtSW1nWzRdKVxuXG5mdW5jdGlvbiBjcmVhdGVQcihuYW1lLHByaWNlLGltZyl7XG4gICAgY29uc3QgcHIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcjEuY2xhc3NOYW1lPSdsaXN0UHInXG4gICAgY29uc3QgUHJpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIFByaW1nLnNyYz0gaW1nXG4gICAgY29uc3QgcHJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcHJOYW1lLnRleHRDb250ZW50PW5hbWVcblxuICAgIGNvbnN0IHByUHJpY2UgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHByUHJpY2UudGV4dENvbnRlbnQ9cHJpY2VcblxuICAgIHByMS5hcHBlbmRDaGlsZChQcmltZylcbiAgICBwcjEuYXBwZW5kQ2hpbGQocHJOYW1lKVxuICAgIHByMS5hcHBlbmRDaGlsZChwclByaWNlKVxuXG4gICAgbGF0ZXN0UHJvZHVjdC5hcHBlbmRDaGlsZChwcjEpXG5cbn1cblxuXG5cbnByb2ZpbGVEZXRhaWwuYXBwZW5kQ2hpbGQoY2hlY2tMaXN0KVxucHJvZmlsZURldGFpbC5hcHBlbmRDaGlsZChhZGQpXG5wcm9maWxlRGV0YWlsLmFwcGVuZENoaWxkKGxhdGVzdFByb2R1Y3QpXG5cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBwcm9maWxlSW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRlc3RpbW9uaWFsKCl7XG5jb25zdCB0ZXN0aW1vbmlhbFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudGVzdGltb25pYWxTZWN0LmNsYXNzTmFtZT0nVGVzdGltb25pYWwnXG5jb25zdCB0aXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG50aXRsZTEudGV4dENvbnRlbnQ9J1Rlc3RpbW9uaWFscydcbmNvbnN0IHRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbnRpdGxlMi50ZXh0Q29udGVudD0nV2hhdCBvdXIgY2xpZW50IGFyZSBzYXlpbmcnXG5jb25zdCB0ZXN0aW1vbmlhbENhcmRTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnRlc3RpbW9uaWFsQ2FyZFNlY3QuY2xhc3NOYW1lPSd0ZXN0aW1vbmlhbENhcmRTZWN0J1xuY29uc3QgdGVzdGltb25pYWxDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG50ZXN0aW1vbmlhbENhcmRzLmNsYXNzTmFtZT0ndGVzdGltb25pYWxDYXJkcydcbmNvbnN0IHByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxucHJvZmlsZS5jbGFzc05hbWU9J3Byb2ZpbGUnXG5wcm9maWxlLnNyYyA9IHByb2ZpbGVJbWdbMF1cblxuY29uc3QgZ3Jhc3NDb3JuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuZ3Jhc3NDb3JuZXIuY2xhc3NOYW1lPSdncmFzc0Nvcm5lckltZydcbmdyYXNzQ29ybmVyLnNyYyA9IHByb2ZpbGVJbWdbN11cblxuY29uc3QgcmV2aXdlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxucmV2aXdlUGFyYS50ZXh0Q29udGVudD0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBkaWFtIHBlbGxlbnRlc3F1ZSBiaWJlbmR1bSBub24gZHVpIHZvbHV0cGF0IGZyaW5naWxsYSBiaWJlbmR1bS4gVXJuYSwgZWxpdCBhdWd1ZSB1cm5hLCB2aXRhZSBmZXVnaWF0IHByZXRpdW0gZG9uZWMgaWQgZWxlbWVudHVtLiBVbHRyaWNlcyBtYXR0aXMgc2VkIHZpdGFlIG11cyByaXN1cy4gTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyBzaXQgZXUgdmVsaXQgaW4gY29uc2VxdWF0LidcblxuY29uc3QgdGVzdGltb25pYWxHcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG50ZXN0aW1vbmlhbEdyZWVuLmNsYXNzTmFtZT0ndGVzdGltb25pYWxHcmVlbidcbnRlc3RpbW9uaWFsR3JlZW4uc3JjPXByb2ZpbGVJbWdbMV1cbmNvbnN0IHN0YXJTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnN0YXJTZWN0LmNsYXNzTmFtZT0nc3RhclNlY3QnXG5cbmNvbnN0IHN0YXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbnN0YXIxLnNyYyA9IHByb2ZpbGVJbWdbMl1cblxuY29uc3Qgc3RhcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuc3RhcjIuc3JjID0gcHJvZmlsZUltZ1syXVxuXG5jb25zdCBzdGFyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5zdGFyMy5zcmMgPSBwcm9maWxlSW1nWzJdXG5cbmNvbnN0IHN0YXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbnN0YXI0LnNyYyA9IHByb2ZpbGVJbWdbMl1cblxuY29uc3Qgc3RhcjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuc3RhcjUuc3JjPXByb2ZpbGVJbWdbMl1cbmNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbm5hbWUudGV4dENvbnRlbnQgPSAnQWxhbWluIEhhc2FuJ1xuXG5jb25zdCBkZXNpZ25hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuZGVzaWduYXRpb24uY2xhc3NOYW1lPSdkZXNpZ24nXG5kZXNpZ25hdGlvbi50ZXh0Q29udGVudD0nRm9vZCBTcGVjaWFsaXN0J1xuXG5jb25zdCBzbGlkZXJEb3RTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnNsaWRlckRvdFNlY3QuY2xhc3NOYW1lPSdTbGlkZXJEb3QnXG5cbmNvbnN0IGRvdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgZG90MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBkb3QzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IGRvdDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG5zbGlkZXJEb3RTZWN0LmFwcGVuZENoaWxkKGRvdDEpXG5zbGlkZXJEb3RTZWN0LmFwcGVuZENoaWxkKGRvdDIpXG5zbGlkZXJEb3RTZWN0LmFwcGVuZENoaWxkKGRvdDMpXG5zbGlkZXJEb3RTZWN0LmFwcGVuZENoaWxkKGRvdDQpXG5cbnN0YXJTZWN0LmFwcGVuZENoaWxkKHN0YXIxKVxuc3RhclNlY3QuYXBwZW5kQ2hpbGQoc3RhcjIpXG5zdGFyU2VjdC5hcHBlbmRDaGlsZChzdGFyMylcbnN0YXJTZWN0LmFwcGVuZENoaWxkKHN0YXI0KVxuXG50ZXN0aW1vbmlhbFNlY3QuYXBwZW5kQ2hpbGQodGl0bGUxKVxudGVzdGltb25pYWxTZWN0LmFwcGVuZENoaWxkKHRpdGxlMilcbnRlc3RpbW9uaWFsQ2FyZHMuYXBwZW5kQ2hpbGQocHJvZmlsZSlcbnRlc3RpbW9uaWFsQ2FyZFNlY3QuYXBwZW5kQ2hpbGQodGVzdGltb25pYWxDYXJkcylcbnRlc3RpbW9uaWFsQ2FyZFNlY3QuYXBwZW5kQ2hpbGQoc2xpZGVyRG90U2VjdClcbnRlc3RpbW9uaWFsQ2FyZHMuYXBwZW5kQ2hpbGQocmV2aXdlUGFyYSlcbnRlc3RpbW9uaWFsQ2FyZHMuYXBwZW5kQ2hpbGQoc3RhclNlY3QpXG50ZXN0aW1vbmlhbENhcmRzLmFwcGVuZENoaWxkKG5hbWUpXG50ZXN0aW1vbmlhbENhcmRzLmFwcGVuZENoaWxkKGRlc2lnbmF0aW9uKVxudGVzdGltb25pYWxDYXJkU2VjdC5hcHBlbmRDaGlsZCh0ZXN0aW1vbmlhbEdyZWVuKVxudGVzdGltb25pYWxTZWN0LmFwcGVuZENoaWxkKGdyYXNzQ29ybmVyKVxudGVzdGltb25pYWxTZWN0LmFwcGVuZENoaWxkKHRlc3RpbW9uaWFsQ2FyZFNlY3QpXG5jb250ZW50LmFwcGVuZENoaWxkKHRlc3RpbW9uaWFsU2VjdClcblxuc2V0VGltZW91dChhbmltYXRpb24sMzAwMClcbmZ1bmN0aW9uIGFuaW1hdGlvbigpe1xuICAgIHByb2ZpbGUuc3JjPXByb2ZpbGVJbWdbMF1cbiAgICBuYW1lLnRleHRDb250ZW50PSdBbGFtaW4gSGFzYW4nXG4gICAgZGVzaWduYXRpb24udGV4dENvbnRlbnQ9J0Zvb2QgU3BlY2lhbGlzdCdcbiAgICByZXZpd2VQYXJhLnRleHRDb250ZW50PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGRpYW0gcGVsbGVudGVzcXVlIGJpYmVuZHVtIG5vbiBkdWkgdm9sdXRwYXQgZnJpbmdpbGxhIGJpYmVuZHVtLiBVcm5hLCBlbGl0IGF1Z3VlIHVybmEsIHZpdGFlIGZldWdpYXQgcHJldGl1bSBkb25lYyBpZCBlbGVtZW50dW0uIFVsdHJpY2VzIG1hdHRpcyBzZWQgdml0YWUgbXVzIHJpc3VzLiBMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHNpdCBldSB2ZWxpdCBpbiBjb25zZXF1YXQuJ1xuICAgIGRvdDEuc3R5bGUub3BhY2l0eT0nMSdcbiAgICBkb3Q0LnN0eWxlLm9wYWNpdHk9JzAuNCdcbiAgICBzZXRUaW1lb3V0KHNsaWRlcjEsMzAwMClcblxuXG5cblxuZnVuY3Rpb24gc2xpZGVyMSgpe1xuICAgIHByb2ZpbGUuc3JjPXByb2ZpbGVJbWdbNF1cbiAgICBkb3Q0LnN0eWxlLm9wYWNpdHk9JzAuNCdcbiAgICBuYW1lLnRleHRDb250ZW50ID0gJ1RvbSB3YXJuZXInXG4gICAgZGVzaWduYXRpb24udGV4dENvbnRlbnQ9J0N1c3RvbWVyJ1xuICAgIHJldml3ZVBhcmEudGV4dENvbnRlbnQ9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgZGlhbSBwZWxsZW50ZXNxdWUgYmliZW5kdW0gbm9uIGV0IGFjIGRhcGlidXMgc2l0IGV1IHZlbGl0IGluIGNvbnNlcXVhdC4nXG4gICAgZG90MS5zdHlsZS5vcGFjaXR5PScwLjQnXG4gICAgZG90Mi5zdHlsZS5vcGFjaXR5PScxJ1xuICAgIHN0YXJTZWN0LnJlbW92ZUNoaWxkKHN0YXI0KVxuXG4gICAgc2V0VGltZW91dChzbGlkZXIyLDMwMDApXG4gICAgXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNsaWRlcjIoKXtcbiAgICAgICAgcHJvZmlsZS5zcmM9cHJvZmlsZUltZ1s1XVxuICAgICAgICBuYW1lLnRleHRDb250ZW50PSdDaHJpcyBnZWxsJ1xuICAgICAgICBkZXNpZ25hdGlvbi50ZXh0Q29udGVudD0nQ3VzdG9tZXInXG4gICAgICAgIHJldml3ZVBhcmEudGV4dENvbnRlbnQ9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgZGlhbSAgZWxlbWVudHVtLiBVbHRyaWNlcyBtYXR0aXMgc2VkIHZpdGFlIG11cyByaXN1cy4gTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyBzaXQgZXUgdmVsaXQgaW4gY29uc2VxdWF0LidcbiAgICAgICAgZG90Mi5zdHlsZS5vcGFjaXR5PScwLjQnXG4gICAgICAgIGRvdDMuc3R5bGUub3BhY2l0eT0nMSdcbiAgICAgICAgc3RhclNlY3QuYXBwZW5kQ2hpbGQoc3RhcjQpXG4gICAgICAgIHN0YXJTZWN0LmFwcGVuZENoaWxkKHN0YXI1KVxuICAgICAgICBzZXRUaW1lb3V0KHNsaWRlcjMsMzAwMClcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gc2xpZGVyMygpe1xuICAgICAgICAgICAgcHJvZmlsZS5zcmM9cHJvZmlsZUltZ1s2XVxuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudD0nVG9rb3lhIHdhbGtlcidcbiAgICAgICAgICAgIGRlc2lnbmF0aW9uLnRleHRDb250ZW50PSdDdXN0b21lcidcbiAgICAgICAgICAgIHJldml3ZVBhcmEudGV4dENvbnRlbnQ9J3ZvbHV0cGF0IGZyaW5naWxsYSBiaWJlbmR1bS4gVXJuYSwgZWxpdCBhdWd1ZSB1cm5hLCB2aXRhZSBmZXVnaWF0IHByZXRpdW0gZG9uZWMgaWQgZWxlbWVudHVtLiBVbHRyaWNlcyBtYXR0aXMgc2VkIHZpdGFlIG11cyByaXN1cy4gTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyBzaXQgZXUgdmVsaXQgaW4gY29uc2VxdWF0LidcbiAgICAgICAgICAgIGRvdDMuc3R5bGUub3BhY2l0eSA9Jy40J1xuICAgICAgICAgICAgZG90NC5zdHlsZS5vcGFjaXR5PScxJ1xuICAgICAgICAgICAgc3RhclNlY3QucmVtb3ZlQ2hpbGQoc3RhcjUpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGFuaW1hdGlvbiwzMDAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxufSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIlxuaW1wb3J0IHsgV2h5SW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdoeUNob29zZSgpe1xuXG4gICAgY29uc3QgbWFpblNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgICBtYWluU2VjdC5jbGFzc05hbWUgPSdtYWluU2VjdCdcblxuICAgIGNvbnN0IG1lZGlhU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3Qgd2h5MUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgd2h5MUltZy5zcmM9V2h5SW1nWzBdXG4gICAgY29uc3Qgd2h5MkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgd2h5MkltZy5zcmM9V2h5SW1nWzFdXG4gICAgY29uc3Qgd2h5M0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgd2h5M0ltZy5zcmM9V2h5SW1nWzJdXG4gICAgY29uc3Qgd2h5NEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgd2h5NEltZy5zcmM9V2h5SW1nWzNdXG4gICAgY29uc3Qgd2h5NUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgd2h5NUltZy5zcmM9V2h5SW1nWzRdXG4gICAgY29uc3Qgd2h5NkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgd2h5NkltZy5zcmM9V2h5SW1nWzVdXG5cbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQod2h5MUltZylcbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQod2h5MkltZylcbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQod2h5M0ltZylcbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQod2h5NEltZylcbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQod2h5NUltZylcbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQod2h5NkltZylcblxuICAgIG1haW5TZWN0LmFwcGVuZENoaWxkKG1lZGlhU2VjdClcblxuICAgIGNvbnN0IHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0ZXh0Q29udGVudC5jbGFzc05hbWU9J3RleENvbnRlbnQnXG4gICAgY29uc3QgVGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIFRpdGxlMS50ZXh0Q29udGVudD0nV2h5IENob29zZSB1cydcbiAgICBjb25zdCBUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgVGl0bGUyLmlubmVySFRNTD0nPHNwYW4+RXg8L3NwYW4+dHJhIG9yZGluYXJ5IHRhc3RlIDxicj4gQW5kIEV4cGVyaWFuY2UnXG5cbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGVzYy50ZXh0Q29udGVudD0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBkaWFtIHBlbGxlbnRlc3F1ZSBiaWJlbmR1bSBub24gZHVpIHZvbHV0cGF0IGZyaW5naWxsYSBiaWJlbmR1bS4gVXJuYSwgZWxpdCBhdWd1ZSB1cm5hLCB2aXRhZSBmZXVnaWF0IHByZXRpdW0gZG9uZWMgaWQgZWxlbWVudHVtLiBVbHRyaWNlcyBtYXR0aXMgc2VkIHZpdGFlIG11cyByaXN1cy4gTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyBzaXQgZXUgdmVsaXQgaW4gY29uc2VxdWF0LidcblxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKFRpdGxlMSlcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChUaXRsZTIpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzYylcblxuICAgIGNvbnN0IG1lYWxDYXRTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZWFsQ2F0U2VjdC5jbGFzc05hbWU9J21lYWxDYXRTZWN0J1xuICAgIGNvbnN0IGZhc3RGb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBMdW5jaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgRGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IEZhc3RGb29kUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIEZhc3RGb29kUC5jbGFzc05hbWU9J0Zhc3RGb29kUCdcbiAgICBGYXN0Rm9vZFAudGV4dENvbnRlbnQ9J0Zhc3QgRm9vZCdcbiAgICBjb25zdCBMdW5jaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBMdW5jaFAuY2xhc3NOYW1lPSdMdW5jaFAnXG4gICAgTHVuY2hQLnRleHRDb250ZW50PSdMdW5jaCdcbiAgICBjb25zdCBEaW5uZXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgRGlubmVyUC5jbGFzc05hbWU9J0Rpbm5lclAnXG4gICAgRGlubmVyUC50ZXh0Q29udGVudD0nRGlubmVyJ1xuICAgIGNvbnN0IEV4cGVyaWFuY2VTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBFeHBlcmlhbmNlU2VjdC5jbGFzc05hbWU9J0V4cGVyaWFuY2VTZWN0J1xuXG4gICAgY29uc3QgRXhwZXJpYW5jZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBFeHBlcmlhbmNlUC50ZXh0Q29udGVudD0nMzArJ1xuICAgIGNvbnN0IEV4cGVyaWFuY2VQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIEV4cGVyaWFuY2VQMi5pbm5lckhUTUw9JzxzcGFuPnllYXJzIG9mPC9zcGFuPiA8YnI+IEV4cGVyaWFuY2VkJ1xuICAgIG1lYWxDYXRTZWN0LmFwcGVuZENoaWxkKGZhc3RGb29kKVxuICAgIG1lYWxDYXRTZWN0LmFwcGVuZENoaWxkKEx1bmNoKVxuICAgIG1lYWxDYXRTZWN0LmFwcGVuZENoaWxkKERpbm5lcilcbiAgICBcblxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKG1lYWxDYXRTZWN0KVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKEZhc3RGb29kUClcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChMdW5jaFApXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoRGlubmVyUClcbiAgICBFeHBlcmlhbmNlU2VjdC5hcHBlbmRDaGlsZChFeHBlcmlhbmNlUClcbiAgICBFeHBlcmlhbmNlU2VjdC5hcHBlbmRDaGlsZChFeHBlcmlhbmNlUDIpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoRXhwZXJpYW5jZVNlY3QpXG4gICAgbWFpblNlY3QuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpXG4gICAgXG5cbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5TZWN0KVxuXG5cblxuXG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=