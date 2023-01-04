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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_19__);
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
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_19___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.body{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    background-color: var(--black-bg-clr);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-position-x: 100px;\n    background-repeat: no-repeat;\n    overflow: auto;\n   \n   overflow-x: hidden;\n    background-position: top;\n    \n}\n\n\n\n.content{\nwidth: 100vw;\nbackground-color:rgba(0, 0, 0, 0.804);\nheight: 120%;\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-template-columns: repeat(12,88px);\ngrid-template-rows: repeat(80,70px);\ngap:0px 24px;\nz-index: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAkBA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,qCAAqC;IACrC,yDAA6C;IAC7C,sBAAsB;IACtB,4BAA4B;IAC5B,4BAA4B;IAC5B,cAAc;;GAEf,kBAAkB;IACjB,wBAAwB;;AAE5B;;;;AAIA;AACA,YAAY;AACZ,qCAAqC;AACrC,YAAY;AACZ,aAAa;AACb,sBAAsB;AACtB,sCAAsC;AACtC,mCAAmC;AACnC,YAAY;AACZ,UAAU;AACV","sourcesContent":["@import './varriables.css';\n@import \"./header.css\";\n@import './home.css';\n@import './footer.css';\n@import './about.css';\n@import './foodCat.css';\n@import './WhyChoose.css';\n@import './restrauInfoSect.css';\n@import './fromMenu.css';\n@import './ourChef.css';\n@import './testimonial.css';\n@import './restrauActive.css';\n@import './blog.css';\n@import './MenuPage.css';\n@import './pageHeader.css';\n@import './blogPage.css';\n@import './shop.css';\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n.body{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    background-color: var(--black-bg-clr);\n    background-image: url('../images/mainbg.png');\n    background-size: cover;\n    background-position-x: 100px;\n    background-repeat: no-repeat;\n    overflow: auto;\n   \n   overflow-x: hidden;\n    background-position: top;\n    \n}\n\n\n\n.content{\nwidth: 100vw;\nbackground-color:rgba(0, 0, 0, 0.804);\nheight: 120%;\ndisplay: grid;\ngrid-auto-flow: column;\ngrid-template-columns: repeat(12,88px);\ngrid-template-rows: repeat(80,70px);\ngap:0px 24px;\nz-index: 1;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.footerShop{\n    padding: 30px  20px;\n  grid-column: 1/14;\n  grid-row: 30/36;\n  /* border: 1px var(--white-clr) solid; */\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n\n.bodyPageForShop{\n    height: 80vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    background-color: black;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size:100%;\n    background-position-x: 100px;\n    background-repeat: no-repeat;\n    overflow: auto;\n    overflow-x: hidden;\n    opacity: 1;\n    background-position: top;  \n}\n\n\n.shopBody{\n    grid-column: 1/14;\n    grid-row: 5/30;\n    background-color: white;\n    display: flex;\n;\n    align-items: center;\n    margin-top: 10px;\n    justify-content: center;\n}\n\n.shopSect{\n    \n    width:80vw;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    \n    \n}\n\n.shopList{\n   \n    width: 50%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 15px;\n\n    margin-top: 80px;\n    margin-bottom: 100px;\n}\n\n.shopList .item:nth-child(3){\n  \n  display: none;\n    \n}\n\n.shopSect .item{\n    width: 200px;\n    height: 200px;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n   \n   \n}\n\n\n.shopSect .item img{\n    width: 195px;\n    height:150px ;\n}\n\n.shopSect .item .itemName{\n    position: relative;\n    top: 10px;\n    right: 55px;\n    font-size: 15px;\n    font-family: 'Inter',sans-serif;\n    font-weight: 400;\n\n}\n\n.shopSect .item p:last-child{\n    position: relative;\n    top: 15px;\n    right:80px;\n    font-size: 15px;\n    font-family: 'Inter',sans-serif;\n    font-weight: 400;\n\n}\n\n.shopBody .profileDetail{\n    display: flex;\n    flex-direction: column;\n    border: 1px solid rgba(0, 0, 0, 0.098);\n    width: 20%;\n    height: 60%;\n    margin-top: -540px;\n    align-items: center;\n    position: relative;\n    right: 100px;\n    \n    \n}\n\n.shopBody .profileDetail .inputSect input{\n    \n    width: 160px;\n    height: 30px;\n    /* border: 1px solid var(--primary-clr); */\n    outline: none;\n    border: none;\n    background-color: rgb(229, 227, 227);\n    padding-left: 10px;\n        \n    }\n\n.shopBody .profileDetail .inputSect{\n    \nwidth: 200px;\nheight: 34px;\n/* border: 1px solid black; */\nbackground-color: rgb(229, 227, 227);\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin-top: 30px;\n\n    \n}\n\n.shopBody .profileDetail .inputSect .InputICON{\n    width: 50px;\n    height: 35px;\n    background-color: var(--primary-clr);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-size: 20px;\n    background-position: center;\n    \n}\n\n.profileDetail .checkList{\n    display: flex;\n    flex-direction: column;\n    margin-right: auto;\n    margin-left: 40px;\n    margin-top: 20px;\n    font-family: 'Inter',sans-serif;\n    gap: 8px;\n}\n\n.profileDetail .checkList .checkPara{\n    display: flex;\n    gap: 5px;\n}\n\n.profileDetail .checkList h2{\n    font-size: 18px;\n    font-weight: 600\n    ;\n\n}\n\n.advertise{\nwidth: 200px;\nheight: 240px;\nmargin-top: 30px;\nbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\nbackground-size: contain;\nbackground-repeat: no-repeat;\n\n}\n\n.latestPr{\n    width: 150px;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Inter',sans-serif;\n    justify-content: flex-start;\n    margin-right: 30px;\n    \n\n}\n\n.listPr{\n    display: grid;\n    grid-template-columns: 40px 30px;\n    grid-template-rows: 1fr 1fr;\n    gap: 5px ;\n\n}\n\n.latestPr img{\n\n    width: 40px;\n    grid-column: 1/2;\n    grid-row: 1/3;\n    margin-right: 10px;\n}\n\n.latestPr .listPr p:last-child{\n\n    font-size: 12px;\n    \n   \n    \n}\n.profileDetail .latestPr h2{\n    font-size: 18px;\n    font-weight: 600;\n    margin-bottom: 15px;\n    margin-top: 20px;\n\n}", "",{"version":3,"sources":["webpack://./src/css/shop.css"],"names":[],"mappings":";AACA;IACI,mBAAmB;EACrB,iBAAiB;EACjB,eAAe;EACf,wCAAwC;EACxC,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;;AAGA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,yDAA6C;IAC7C,oBAAoB;IACpB,4BAA4B;IAC5B,4BAA4B;IAC5B,cAAc;IACd,kBAAkB;IAClB,UAAU;IACV,wBAAwB;AAC5B;;;AAGA;IACI,iBAAiB;IACjB,cAAc;IACd,uBAAuB;IACvB,aAAa;;IAEb,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;;IAEI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,uBAAuB;;;AAG3B;;AAEA;;IAEI,UAAU;IACV,aAAa;IACb,kCAAkC;IAClC,SAAS;;IAET,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;;EAEE,aAAa;;AAEf;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;;;AAGtB;;;AAGA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,eAAe;IACf,+BAA+B;IAC/B,gBAAgB;;AAEpB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,eAAe;IACf,+BAA+B;IAC/B,gBAAgB;;AAEpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sCAAsC;IACtC,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;;;AAGhB;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,0CAA0C;IAC1C,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;;IAElB;;AAEJ;;AAEA,YAAY;AACZ,YAAY;AACZ,6BAA6B;AAC7B,oCAAoC;AACpC,aAAa;AACb,uBAAuB;AACvB,mBAAmB;AACnB,gBAAgB;;;AAGhB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,yDAA6C;IAC7C,4BAA4B;IAC5B,qBAAqB;IACrB,2BAA2B;;AAE/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,+BAA+B;IAC/B,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf;IACA;;AAEJ;;AAEA;AACA,YAAY;AACZ,aAAa;AACb,gBAAgB;AAChB,yDAA6C;AAC7C,wBAAwB;AACxB,4BAA4B;;AAE5B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,+BAA+B;IAC/B,2BAA2B;IAC3B,kBAAkB;;;AAGtB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,2BAA2B;IAC3B,SAAS;;AAEb;;AAEA;;IAEI,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,kBAAkB;AACtB;;AAEA;;IAEI,eAAe;;;;AAInB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;;AAEpB","sourcesContent":["\n.footerShop{\n    padding: 30px  20px;\n  grid-column: 1/14;\n  grid-row: 30/36;\n  /* border: 1px var(--white-clr) solid; */\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n\n.bodyPageForShop{\n    height: 80vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    background-color: black;\n    background-image: url('../images/header.png');\n    background-size:100%;\n    background-position-x: 100px;\n    background-repeat: no-repeat;\n    overflow: auto;\n    overflow-x: hidden;\n    opacity: 1;\n    background-position: top;  \n}\n\n\n.shopBody{\n    grid-column: 1/14;\n    grid-row: 5/30;\n    background-color: white;\n    display: flex;\n;\n    align-items: center;\n    margin-top: 10px;\n    justify-content: center;\n}\n\n.shopSect{\n    \n    width:80vw;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    \n    \n}\n\n.shopList{\n   \n    width: 50%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 15px;\n\n    margin-top: 80px;\n    margin-bottom: 100px;\n}\n\n.shopList .item:nth-child(3){\n  \n  display: none;\n    \n}\n\n.shopSect .item{\n    width: 200px;\n    height: 200px;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n   \n   \n}\n\n\n.shopSect .item img{\n    width: 195px;\n    height:150px ;\n}\n\n.shopSect .item .itemName{\n    position: relative;\n    top: 10px;\n    right: 55px;\n    font-size: 15px;\n    font-family: 'Inter',sans-serif;\n    font-weight: 400;\n\n}\n\n.shopSect .item p:last-child{\n    position: relative;\n    top: 15px;\n    right:80px;\n    font-size: 15px;\n    font-family: 'Inter',sans-serif;\n    font-weight: 400;\n\n}\n\n.shopBody .profileDetail{\n    display: flex;\n    flex-direction: column;\n    border: 1px solid rgba(0, 0, 0, 0.098);\n    width: 20%;\n    height: 60%;\n    margin-top: -540px;\n    align-items: center;\n    position: relative;\n    right: 100px;\n    \n    \n}\n\n.shopBody .profileDetail .inputSect input{\n    \n    width: 160px;\n    height: 30px;\n    /* border: 1px solid var(--primary-clr); */\n    outline: none;\n    border: none;\n    background-color: rgb(229, 227, 227);\n    padding-left: 10px;\n        \n    }\n\n.shopBody .profileDetail .inputSect{\n    \nwidth: 200px;\nheight: 34px;\n/* border: 1px solid black; */\nbackground-color: rgb(229, 227, 227);\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin-top: 30px;\n\n    \n}\n\n.shopBody .profileDetail .inputSect .InputICON{\n    width: 50px;\n    height: 35px;\n    background-color: var(--primary-clr);\n    background-image: url('../images/search.png');\n    background-repeat: no-repeat;\n    background-size: 20px;\n    background-position: center;\n    \n}\n\n.profileDetail .checkList{\n    display: flex;\n    flex-direction: column;\n    margin-right: auto;\n    margin-left: 40px;\n    margin-top: 20px;\n    font-family: 'Inter',sans-serif;\n    gap: 8px;\n}\n\n.profileDetail .checkList .checkPara{\n    display: flex;\n    gap: 5px;\n}\n\n.profileDetail .checkList h2{\n    font-size: 18px;\n    font-weight: 600\n    ;\n\n}\n\n.advertise{\nwidth: 200px;\nheight: 240px;\nmargin-top: 30px;\nbackground-image: url('../images/Banner.png');\nbackground-size: contain;\nbackground-repeat: no-repeat;\n\n}\n\n.latestPr{\n    width: 150px;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Inter',sans-serif;\n    justify-content: flex-start;\n    margin-right: 30px;\n    \n\n}\n\n.listPr{\n    display: grid;\n    grid-template-columns: 40px 30px;\n    grid-template-rows: 1fr 1fr;\n    gap: 5px ;\n\n}\n\n.latestPr img{\n\n    width: 40px;\n    grid-column: 1/2;\n    grid-row: 1/3;\n    margin-right: 10px;\n}\n\n.latestPr .listPr p:last-child{\n\n    font-size: 12px;\n    \n   \n    \n}\n.profileDetail .latestPr h2{\n    font-size: 18px;\n    font-weight: 600;\n    margin-bottom: 15px;\n    margin-top: 20px;\n\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _modules_ourChef__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/ourChef */ "./src/modules/ourChef.js");
/* harmony import */ var _modules_blog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/blog */ "./src/modules/blog.js");














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
;(0,_modules_ourChef__WEBPACK_IMPORTED_MODULE_12__.createOurChef)()
;(0,_modules_testimonial__WEBPACK_IMPORTED_MODULE_8__.createTestimonial)()
;(0,_modules_restrauActive__WEBPACK_IMPORTED_MODULE_9__.createRestrauActive)()
;(0,_modules_blog__WEBPACK_IMPORTED_MODULE_13__.createBlog)()
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
/* harmony import */ var _blogPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blogPage */ "./src/modules/blogPage.js");
/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop */ "./src/modules/shop.js");









// import { createShop } from "./shop";


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBdUIscUJBQXFCLEdBQUcsYUFBYSx3RkFBd0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8saUJBQWlCLGFBQWEsV0FBVyxZQUFZLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxh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QUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixpREFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxNQUFNOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHVEQUFtQjs7Ozs7O0FBTXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvTWVudVBhZ2UuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9XaHlDaG9vc2UuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9hYm91dC5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL2Jsb2cuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9ibG9nUGFnZS5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL2Zvb2RDYXQuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9mb290ZXIuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9mcm9tTWVudS5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL2hvbWUuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3Mvb3VyQ2hlZi5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL3BhZ2VIZWFkZXIuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9yZXN0cmF1QWN0aXZlLmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvcmVzdHJhdUluZm9TZWN0LmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3Mvc2hvcC5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL3Rlc3RpbW9uaWFsLmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvdmFycmlhYmxlcy5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9tYWluLmNzcz8yYzlmIiwid2VicGFjazovL2Zvb2R0dWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvbW9kdWxlcy9hYm91dFVzLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvYmxvZy5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL2Jsb2dQYWdlLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvZm9vZENhdC5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL2Zyb21NZW51LmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL21lbnVQYWdlLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvb3VyQ2hlZi5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL3BhZ2VIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvbW9kdWxlcy9yZXN0cmF1QWN0aXZlLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvcmVzdHJhdUluZm9TZWN0LmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvc2hvcC5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL3Rlc3RpbW9uaWFsLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvd2h5Q2hvb3NlLmpzIiwid2VicGFjazovL2Zvb2R0dWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvb2R0dWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Zvb2R0dWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Zvb2R0dWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaGVhZGVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy90b3RhbEluZm9TZWN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYm9keVBhZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG4gICAgXFxufVxcblxcbi5oZWFkZXJGb3JOYXZ7XFxuICAgIFxcbiAgICBncmlkLWNvbHVtbjogMS8xNDtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY2xyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcblxcblxcbi5sb2dvRm9ySGVhZGVye1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG59XFxuXFxuLm5hdkZvckhlYWRlcntcXG5cXG4gICAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xcbn1cXG5cXG4uaGVhZGVyRm9yTmF2IGgxe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTUwcHg7XFxuICAgIGxlZnQ6IDU3MHB4O1xcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVyRm9yTmF2IHB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxOTBweDtcXG4gICAgbGVmdDogNTk2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LWNscik7XFxufVxcblxcbi5oZWFkZXJGb3JOYXYgc3BhbntcXG4gIFxcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG59XFxuXFxuXFxuLk1lbnVCb2R5e1xcbiAgICBncmlkLWNvbHVtbjogMS8xNDtcXG4gICAgZ3JpZC1yb3c6IDUvNTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBcXG59XFxuXFxuLk1lbnVCb2R5IGltZ3tcXG4gICAgd2lkdGg6IDM4MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5NZW51Qm9keSAub25le1xcbiAgICB3aWR0aDogOTQwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHhcXG4gICBcXG4gICAgO1xcbn1cXG5cXG5cXG5cXG4uTWVudUJvZHkgIGxpe1xcbiAgICBtYXJnaW46IDIwcHggMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBcXG4gfVxcblxcbiAuTWVudUJvZHkgIHA6Zmlyc3QtY2hpbGR7XFxuICAgIGdyaWQtY29sdW1uOiAxLzY7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBcXG5cXG4gfVxcblxcblxcblxcbiAuTWVudUJvZHkgIHA6bnRoLWNoaWxkKDIpe1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XFxuIH1cXG4gXFxuXFxuIC5NZW51Qm9keSAgcDpudGgtY2hpbGQoMyl7XFxuICAgIFxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBtYXJnaW4tbGVmdDoxMDBweDtcXG4gfVxcblxcbiAuTWVudUJvZHkgaDJ7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIFxcbiB9XFxuXFxuXFxuIC5yZXN0cmF1SW5mb1NlY3RGb3JIZWFkZXJ7XFxuICAgZ3JpZC1jb2x1bW46IDEgLzE0O1xcbiAgIGdyaWQtcm93OiAyNC8yODtcXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbjtcXG59XFxuXFxuLk1lbnVCb2R5IGRpdjpudGgtY2hpbGQoMyl7XFxuXFxuICAgIG1hcmdpbi10b3A6IDUwMHB4O1xcbiAgICA7XFxufVxcblxcbi5NZW51Qm9keSAud29ya1dpdGh7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDotMzUwcHg7XFxuICAgIGxlZnQ6IDE1MHB4O1xcbiAgICBcXG4gICBcXG59XFxuXFxuXFxuXFxuLk1lbnVCb2R5IC53b3JrV2l0aCBpbWd7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiAxMzBweDs7XFxuXFxuICAgIFxcbn1cXG5cXG4ucGFydG5lcntcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgXFxuICAgIFxcbn1cXG5cXG4ucGFydG5lciBwe1xcbiAgIFxcbm1hcmdpbi1sZWZ0OiA0MyU7XFxubWFyZ2luLXRvcDogNjBweDtcXG59XFxuXFxuLnBhcnRuZXIgaDJ7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxuICAgIFxcbiAgICB9XFxuXFxuLmNvbnRlbnRTZWNvbmRTdHlsZXtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbmJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjgwNCk7XFxuaGVpZ2h0OiAxMDAlO1xcbmRpc3BsYXk6IGdyaWQ7XFxuZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiw4OHB4KTtcXG5ncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2MCw3MHB4KTtcXG5nYXA6MHB4IDI0cHg7XFxuei1pbmRleDogMTtcXG59XFxuXFxuLmZvb3RlckNsYXNze1xcbiAgICBncmlkLWNvbHVtbjogMS8xNDtcXG4gICAgZ3JpZC1yb3c6IDQ4LzU0O1xcbiAgICBwYWRkaW5nOiAzMHB4ICAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTMwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvTWVudVBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIseURBQTZDO0lBQzdDLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHdCQUF3Qjs7QUFFNUI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLG1CQUFtQjs7QUFFdkI7Ozs7QUFJQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLG1DQUFtQztJQUNuQyx3QkFBd0I7QUFDNUI7O0FBRUE7O0lBRUksbUNBQW1DO0lBQ25DLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTO0lBQ1Q7O0lBRUE7QUFDSjs7OztBQUlBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7O0lBRWIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QiwyQkFBMkI7O0NBRTlCOztDQUVBO0lBQ0csZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLCtCQUErQjs7O0NBR2xDOzs7O0NBSUE7SUFDRyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEI7OztDQUdBOztJQUVHLHlCQUF5QjtJQUN6QixpQkFBaUI7Q0FDcEI7O0NBRUE7SUFDRyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjs7Q0FFdEI7OztDQUdBO0dBQ0Usa0JBQWtCO0dBQ2xCLGVBQWU7R0FDZix5REFBb0Q7O0FBRXZEOztBQUVBOztJQUVJLGlCQUFpQjs7QUFFckI7O0FBRUE7O0lBRUksYUFBYTs7SUFFYixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXOzs7QUFHZjs7OztBQUlBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7OztBQUdqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7OztBQUd0Qjs7QUFFQTs7QUFFQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCOztJQUVoQjs7QUFFSjtJQUNJLFlBQVk7QUFDaEIscUNBQXFDO0FBQ3JDLFlBQVk7QUFDWixhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLHNDQUFzQztBQUN0QyxtQ0FBbUM7QUFDbkMsWUFBWTtBQUNaLFVBQVU7QUFDVjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmJvZHlQYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2hlYWRlci5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG4gICAgXFxufVxcblxcbi5oZWFkZXJGb3JOYXZ7XFxuICAgIFxcbiAgICBncmlkLWNvbHVtbjogMS8xNDtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY2xyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcblxcblxcbi5sb2dvRm9ySGVhZGVye1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG59XFxuXFxuLm5hdkZvckhlYWRlcntcXG5cXG4gICAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xcbn1cXG5cXG4uaGVhZGVyRm9yTmF2IGgxe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTUwcHg7XFxuICAgIGxlZnQ6IDU3MHB4O1xcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVyRm9yTmF2IHB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxOTBweDtcXG4gICAgbGVmdDogNTk2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LWNscik7XFxufVxcblxcbi5oZWFkZXJGb3JOYXYgc3BhbntcXG4gIFxcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG59XFxuXFxuXFxuLk1lbnVCb2R5e1xcbiAgICBncmlkLWNvbHVtbjogMS8xNDtcXG4gICAgZ3JpZC1yb3c6IDUvNTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBcXG59XFxuXFxuLk1lbnVCb2R5IGltZ3tcXG4gICAgd2lkdGg6IDM4MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5NZW51Qm9keSAub25le1xcbiAgICB3aWR0aDogOTQwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHhcXG4gICBcXG4gICAgO1xcbn1cXG5cXG5cXG5cXG4uTWVudUJvZHkgIGxpe1xcbiAgICBtYXJnaW46IDIwcHggMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBcXG4gfVxcblxcbiAuTWVudUJvZHkgIHA6Zmlyc3QtY2hpbGR7XFxuICAgIGdyaWQtY29sdW1uOiAxLzY7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBcXG5cXG4gfVxcblxcblxcblxcbiAuTWVudUJvZHkgIHA6bnRoLWNoaWxkKDIpe1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XFxuIH1cXG4gXFxuXFxuIC5NZW51Qm9keSAgcDpudGgtY2hpbGQoMyl7XFxuICAgIFxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBtYXJnaW4tbGVmdDoxMDBweDtcXG4gfVxcblxcbiAuTWVudUJvZHkgaDJ7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIFxcbiB9XFxuXFxuXFxuIC5yZXN0cmF1SW5mb1NlY3RGb3JIZWFkZXJ7XFxuICAgZ3JpZC1jb2x1bW46IDEgLzE0O1xcbiAgIGdyaWQtcm93OiAyNC8yODtcXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy90b3RhbEluZm9TZWN0LnBuZycpO1xcbjtcXG59XFxuXFxuLk1lbnVCb2R5IGRpdjpudGgtY2hpbGQoMyl7XFxuXFxuICAgIG1hcmdpbi10b3A6IDUwMHB4O1xcbiAgICA7XFxufVxcblxcbi5NZW51Qm9keSAud29ya1dpdGh7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDotMzUwcHg7XFxuICAgIGxlZnQ6IDE1MHB4O1xcbiAgICBcXG4gICBcXG59XFxuXFxuXFxuXFxuLk1lbnVCb2R5IC53b3JrV2l0aCBpbWd7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiAxMzBweDs7XFxuXFxuICAgIFxcbn1cXG5cXG4ucGFydG5lcntcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgXFxuICAgIFxcbn1cXG5cXG4ucGFydG5lciBwe1xcbiAgIFxcbm1hcmdpbi1sZWZ0OiA0MyU7XFxubWFyZ2luLXRvcDogNjBweDtcXG59XFxuXFxuLnBhcnRuZXIgaDJ7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxuICAgIFxcbiAgICB9XFxuXFxuLmNvbnRlbnRTZWNvbmRTdHlsZXtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbmJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjgwNCk7XFxuaGVpZ2h0OiAxMDAlO1xcbmRpc3BsYXk6IGdyaWQ7XFxuZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiw4OHB4KTtcXG5ncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2MCw3MHB4KTtcXG5nYXA6MHB4IDI0cHg7XFxuei1pbmRleDogMTtcXG59XFxuXFxuLmZvb3RlckNsYXNze1xcbiAgICBncmlkLWNvbHVtbjogMS8xNDtcXG4gICAgZ3JpZC1yb3c6IDQ4LzU0O1xcbiAgICBwYWRkaW5nOiAzMHB4ICAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTMwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0hhbWJ1cmdlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvQ29va2llLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9XaW5lLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1haW5TZWN0e1xcbiAgICBncmlkLWNvbHVtbjogMiAvMTE7XFxuICAgIGdyaWQtcm93OiAyNi8zNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjMwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgXFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDEpe1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6cm93O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnIgMWZyIDFmciA7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmciAxZnIgMmZyO1xcblxcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgyKXtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDIpIGgye1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IFZpYmVzJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDIpIGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgyKSBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMikgPiBwe2ZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIHdpZHRoOiAzNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7fVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDEpIGltZzpmaXJzdC1jaGlsZHtcXG4gICAgd2lkdGg6MjUwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICBcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCgyKXtcXG4gICAgd2lkdGg6MTkwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAzLzU7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG59XFxuXFxuXFxuXFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCgzKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDMvNTtcXG4gICAgd2lkdGg6MTgwcHg7XFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDEpIGltZzpudGgtY2hpbGQoNCl7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIHdpZHRoOjE1MHB4O1xcbiAgICBcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCg1KXtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgd2lkdGg6MTAwcHg7XFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDEpIGltZzpudGgtY2hpbGQoNil7XFxuICAgIGdyaWQtY29sdW1uOiA0LzU7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIHdpZHRoOjEwMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDUwcHg7XFxufVxcblxcbi5tZWFsQ2F0U2VjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIG1hcmdpbjozMHB4IDEwcHggO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lYWxDYXRTZWN0ID5kaXY6Zmlyc3QtY2hpbGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubWVhbENhdFNlY3QgPmRpdjpudGgtY2hpbGQoMil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubWVhbENhdFNlY3QgPmRpdjpudGgtY2hpbGQoMyl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG4uRmFzdEZvb2RQe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgICBsZWZ0OiA1cHg7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5MdW5jaFB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDY4cHg7XFxuICAgIGxlZnQ6IDEwNXB4O1xcbiAgICBcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLkRpbm5lclB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEwNXB4O1xcbiAgICBsZWZ0OiAxODhweDtcXG4gICAgXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdHtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItbGVmdDogNXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdCBwOmZpcnN0LWNoaWxke1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7IFxcbn1cXG5cXG4uRXhwZXJpYW5jZVNlY3QgcDpudGgtY2hpbGQoMil7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjpibGFjazsgXFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdCBwOm50aC1jaGlsZCgyKSBzcGFue1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuXFxuICAgIGNvbG9yOmJsYWNrOyBcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9XaHlDaG9vc2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixRQUFRO0lBQ1IsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHdDQUF3QztJQUN4QyxzQ0FBc0M7O0FBRTFDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQSwrQkFBK0IsZUFBZTtJQUMxQyx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwrQkFBK0IsQ0FBQzs7QUFFcEM7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7Ozs7QUFLQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXOztBQUVmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlEQUFnRDtJQUNoRCw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5REFBNkM7SUFDN0MsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseURBQTJDO0lBQzNDLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTOztJQUVULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7O0lBRVgsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVzs7SUFFWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZOztJQUVaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7O0lBRWhCLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWFpblNlY3R7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8xMTtcXG4gICAgZ3JpZC1yb3c6IDI2LzM0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MzBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSl7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzpyb3c7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmciAxZnIgMWZyIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyIDFmciAyZnI7XFxuXFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMikgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMikgaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDIpIHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgyKSA+IHB7Zm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgd2lkdGg6IDM2MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjt9XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOmZpcnN0LWNoaWxke1xcbiAgICB3aWR0aDoyNTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gIFxcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgxKSBpbWc6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDoxOTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNTtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgxKSBpbWc6bnRoLWNoaWxkKDMpe1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMy81O1xcbiAgICB3aWR0aDoxODBweDtcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCg0KXtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgd2lkdGg6MTUwcHg7XFxuICAgIFxcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgxKSBpbWc6bnRoLWNoaWxkKDUpe1xcbiAgICBncmlkLWNvbHVtbjogNC81O1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICB3aWR0aDoxMDBweDtcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCg2KXtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogNTBweDtcXG59XFxuXFxuLm1lYWxDYXRTZWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbWFyZ2luOjMwcHggMTBweCA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVhbENhdFNlY3QgPmRpdjpmaXJzdC1jaGlsZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBoZWlnaHQ6IDY1cHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL0hhbWJ1cmdlci5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLm1lYWxDYXRTZWN0ID5kaXY6bnRoLWNoaWxkKDIpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGhlaWdodDogNjVweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvQ29va2llLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubWVhbENhdFNlY3QgPmRpdjpudGgtY2hpbGQoMyl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9XaW5lLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG4uRmFzdEZvb2RQe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgICBsZWZ0OiA1cHg7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5MdW5jaFB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDY4cHg7XFxuICAgIGxlZnQ6IDEwNXB4O1xcbiAgICBcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLkRpbm5lclB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEwNXB4O1xcbiAgICBsZWZ0OiAxODhweDtcXG4gICAgXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdHtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItbGVmdDogNXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdCBwOmZpcnN0LWNoaWxke1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7IFxcbn1cXG5cXG4uRXhwZXJpYW5jZVNlY3QgcDpudGgtY2hpbGQoMil7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjpibGFjazsgXFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdCBwOm50aC1jaGlsZCgyKSBzcGFue1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuXFxuICAgIGNvbG9yOmJsYWNrOyBcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZhcnJpYWJsZXMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYWJvdXRVc1NlY3RNYWlue1xcblxcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gIGdyaWQtcm93OiAxMC8xOTtcXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBnYXA6IDUwcHg7XFxuICBcXG4gIFxcbiAgXFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gZGl2OmZpcnN0LWNoaWxke1xcbiAgICBcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OjEyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIFxcbiAgICBcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBkaXY6bnRoLWNoaWxkKDIpXFxue1xcbiAgICBoZWlnaHQ6IDEyMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnI7XFxuICAgIGdhcDogOHB4OyAgXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gZGl2Om50aC1jaGlsZCgyKSBpbWc6Zmlyc3QtY2hpbGR7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEvMiA7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uYWJvdXRVc1NlY3RNYWluIGRpdjpudGgtY2hpbGQoMikgaW1nOm50aC1jaGlsZCgyKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLzI7XFxuICAgIGdyaWQtcm93OiAyLzMgO1xcbiAgIFxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBkaXY6bnRoLWNoaWxkKDIpIGltZzpudGgtY2hpbGQoMyl7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8zO1xcbiAgICBncmlkLXJvdzogMi8zIDtcXG4gICBcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gIHVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTs7XFxuICBcXG4gICAgIFxcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIGJ1dHRvbntcXG4gICAgXFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgd2lkdGg6MTIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5hYm91dFVzU2VjdCBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gbGl7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gbGk6OmJlZm9yZXtcXG4gICAgY29udGVudDogJ+KckyAnO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIHB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIHdpZHRoOiAzNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuXFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG5cXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgXFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYWJvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOztJQUVJLGlCQUFpQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTOzs7O0FBSVg7O0FBRUE7O0lBRUksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7O0FBRzNCOztBQUVBOztJQUVJLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjOztJQUVkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjOztJQUVkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjs7O0FBR3BCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7OztBQUduQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL3ZhcnJpYWJsZXMuY3NzJztcXG5cXG4uYWJvdXRVc1NlY3RNYWlue1xcblxcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gIGdyaWQtcm93OiAxMC8xOTtcXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBnYXA6IDUwcHg7XFxuICBcXG4gIFxcbiAgXFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gZGl2OmZpcnN0LWNoaWxke1xcbiAgICBcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OjEyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIFxcbiAgICBcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBkaXY6bnRoLWNoaWxkKDIpXFxue1xcbiAgICBoZWlnaHQ6IDEyMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnI7XFxuICAgIGdhcDogOHB4OyAgXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gZGl2Om50aC1jaGlsZCgyKSBpbWc6Zmlyc3QtY2hpbGR7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEvMiA7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uYWJvdXRVc1NlY3RNYWluIGRpdjpudGgtY2hpbGQoMikgaW1nOm50aC1jaGlsZCgyKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLzI7XFxuICAgIGdyaWQtcm93OiAyLzMgO1xcbiAgIFxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBkaXY6bnRoLWNoaWxkKDIpIGltZzpudGgtY2hpbGQoMyl7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8zO1xcbiAgICBncmlkLXJvdzogMi8zIDtcXG4gICBcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gIHVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTs7XFxuICBcXG4gICAgIFxcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIGJ1dHRvbntcXG4gICAgXFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgd2lkdGg6MTIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5hYm91dFVzU2VjdCBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gbGl7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gbGk6OmJlZm9yZXtcXG4gICAgY29udGVudDogJ+KckyAnO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIHB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIHdpZHRoOiAzNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuXFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG5cXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgXFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ibG9nU2VjdHtcXG5ncmlkLWNvbHVtbjogMiAvIDExO1xcbmdyaWQtcm93OjY4Lzc0IDtcXG4vKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcblxcblxcblxcbn1cXG5cXG4uYmxvZ1NlY3QgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDNweCAyNXB4O1xcblxcbn1cXG5cXG5cXG4uYmxvZ1NlY3QgaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAzcHggMjVweFxcbn1cXG5cXG4uYmxvZ1NlY3Qgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIFxcbn1cXG5cXG4uYmxvZ0NhcmRTZWN0e1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYmxvZ0NhcmR7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIFxcbn1cXG5cXG4uYmxvZ0NhcmQ6aG92ZXJ7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHdoaXRlO1xcbiAgICBcXG59XFxuXFxuLmJsb2dDYXJkIGltZ3tcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBoZWlnaHQ6IDE3MHB4O1xcbiAgIFxcbn1cXG5cXG4uYmxvZ0NhcmQgcDpudGgtY2hpbGQoMil7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIFxcbn1cXG5cXG4uYmxvZ0NhcmQgcDpudGgtY2hpbGQoMyl7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBcXG59XFxuXFxuXFxuLmJsb2dDYXJkIHA6bnRoLWNoaWxkKDQpe1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgXFxufVxcblxcbi5ibG9nQ2FyZCBwe1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG5cXG59XFxuXFxuLmljb25TZWN0e1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDdweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDI4cHg7XFxuICAgIGxlZnQ6IDE1MHB4O1xcblxcbn1cXG5cXG4uaWNvblNlY3QgaW1ne1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBcXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ibG9nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZiwwQ0FBMEM7QUFDMUMsYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixtQkFBbUI7QUFDbkIsa0JBQWtCOzs7O0FBSWxCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsZ0JBQWdCOztBQUVwQjs7O0FBR0E7SUFDSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7R0FDeEIsbUJBQW1CO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QiwrQkFBK0I7O0FBRW5DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QiwrQkFBK0I7SUFDL0IsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1Qjs7QUFFM0I7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVzs7QUFFZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOzs7QUFHaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmJsb2dTZWN0e1xcbmdyaWQtY29sdW1uOiAyIC8gMTE7XFxuZ3JpZC1yb3c6NjgvNzQgO1xcbi8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFxuXFxufVxcblxcbi5ibG9nU2VjdCBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogM3B4IDI1cHg7XFxuXFxufVxcblxcblxcbi5ibG9nU2VjdCBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW46IDNweCAyNXB4XFxufVxcblxcbi5ibG9nU2VjdCBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgXFxufVxcblxcbi5ibG9nQ2FyZFNlY3R7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgaGVpZ2h0OiA0NTBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ibG9nQ2FyZHtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgXFxufVxcblxcbi5ibG9nQ2FyZDpob3ZlcntcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggd2hpdGU7XFxuICAgIFxcbn1cXG5cXG4uYmxvZ0NhcmQgaW1ne1xcbiAgICB3aWR0aDogMjI4cHg7XFxuICAgIGhlaWdodDogMTcwcHg7XFxuICAgXFxufVxcblxcbi5ibG9nQ2FyZCBwOm50aC1jaGlsZCgyKXtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgXFxufVxcblxcbi5ibG9nQ2FyZCBwOm50aC1jaGlsZCgzKXtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIFxcbn1cXG5cXG5cXG4uYmxvZ0NhcmQgcDpudGgtY2hpbGQoNCl7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBcXG59XFxuXFxuLmJsb2dDYXJkIHB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcblxcbn1cXG5cXG4uaWNvblNlY3R7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogN3B4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMjhweDtcXG4gICAgbGVmdDogMTUwcHg7XFxuXFxufVxcblxcbi5pY29uU2VjdCBpbWd7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIFxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9DYWxlbmRhci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvQ2hhdHMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2FkbWluLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuLmJsb2dTZWN0UGFnZXtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIFxcbiAgICBcXG59XFxuXFxuLmJsb2dQYWdle1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA3MCU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KDQsNjAwcHgpIDtcXG5cXG4gICBcXG4gICAgZ2FwOiA1MHB4IDBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAgKi9cXG59XFxuXFxuIC5ibG9nU2VjdFBhZ2UgLnByb2ZpbGVEZXRhaWx7XFxuICAgXFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMDAwOyAqL1xcbn1cXG5cXG4uYmxvZ1BhZ2UgPiBkaXY6bnRoLWNoaWxkKDEpe1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICAvKiBib3JkZXI6IDFweCBibGFjayBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbn1cXG5cXG4uYmxvZ1BhZ2UgPiBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICAvKiBib3JkZXI6IDFweCBibGFjayBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYmxvZ1BhZ2UgPiBkaXY6bnRoLWNoaWxkKDMpe1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogNTAwcHg7XFxuICAgIGhlaWdodDogNjgwcHg7XFxuICAgIFxcbiAgICAvKiBib3JkZXI6IDFweCBibGFjayBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBcXG4gICAgXFxufVxcblxcbi5ibG9nUGFnZSA+IGRpdjpsYXN0LWNoaWxke1xcblxcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICAvKiBib3JkZXI6IDFweCBibGFjayBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuIC5ibG9nU2VjdFBhZ2UgLmNhcmQgLmltZ09mQmxvZyB7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgIFxcbn1cXG5cXG4uZGV0YWlse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIC8qIGdhcDogMjBweDsgKi9cXG4gICAgd2lkdGg6IDc3MHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICBib3R0b206IDE0MHB4O1xcbiAgIGxlZnQ6IDQwcHg7XFxuICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICBmb250LXdlaWdodDogMzAwO1xcbiAgICBcXG5cXG59XFxuXFxuLmRldGFpbCAuZGF0ZXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kZXRhaWwgLm1zZ3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG59XFxuXFxuLkFkbWlue1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xcbiAgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDE0MHB4O1xcbiAgIGhlaWdodDogMzBweDtcXG4gICBsZWZ0OiAyMjBweDtcXG4gICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcblxcbi5UZXh0Y29udGVudEJsb2d7XFxuICAgIHdpZHRoOiA3NzBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuXFxuLlRleHRjb250ZW50QmxvZyBwOmZpcnN0LWNoaWxke1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBcXG59XFxuXFxuLlRleHRjb250ZW50QmxvZyBwOm50aC1jaGlsZCgyKXtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogbGlnaHQ7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHdpZHRoOiA3NTBweDtcXG59XFxuXFxuLlRleHRjb250ZW50QmxvZyBidXR0b257XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICB0cmFuc2l0aW9uOiAuNXM7XFxufVxcblxcbi5UZXh0Y29udGVudEJsb2cgYnV0dG9uOmhvdmVye1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbn1cXG5cXG4uYmxvZ1BhZ2UgPiBkaXY6bnRoLWNoaWxkKDMpIC5kZXRhaWwsLmJsb2dQYWdlID4gZGl2Om50aC1jaGlsZCgzKSAuQWRtaW57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxNzBweDtcXG59XFxuXFxuLmJsb2dTZWN0UGFnZSAucGFnZU51bWJlciB7XFxuXFxuXFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgIFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTotMjMwMHB4O1xcbiAgICBsZWZ0OiAtNzMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgZ2FwOiA1cHg7XFxuICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbn1cXG5cXG4uYmxvZ1NlY3RQYWdlIC5wYWdlTnVtYmVyIGRpdiB7XFxuXFxuXFxuICAgd2lkdGg6IDQ1cHg7XFxuICAgaGVpZ2h0OiA0MHB4O1xcbiAgIGJvcmRlcjogLjAwNGVtIHJnYmEoMCwgMCwgMCwgMC4yNDgpIHNvbGlkO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBcXG4gICBcXG5cXG5cXG59XFxuXFxuLmJsb2dTZWN0UGFnZSAucGFnZU51bWJlciBkaXY6aG92ZXIgLC5ibG9nU2VjdFBhZ2UgLnBhZ2VOdW1iZXIgIHA6aG92ZXIge1xcblxcblxcbiAgICB3aWR0aDogNDVweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IC4wMDRlbSByZ2JhKDAsIDAsIDAsIDAuMjQ4KSBzb2xpZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgXFxuICAgIFxcbiBcXG4gXFxuIH1cXG5cXG4uYmxvZ1NlY3RQYWdlIC5wYWdlTnVtYmVyICBwIHtcXG5cXG5cXG4gICAgXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuIFxcbiBcXG4gfVxcblxcbi5ibG9nU2VjdFBhZ2UgLnBhZ2VOdW1iZXIgZGl2Om50aC1jaGlsZCgzKSB7XFxuXFxuXFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC01MHB4O1xcbiAgICBcXG4gICBcXG4gXFxuIFxcbiB9XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ibG9nUGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0dBQ1osYUFBYTtJQUNaLGlCQUFpQjtJQUNqQiwwQ0FBMEM7OztBQUc5Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVOztJQUVWLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsbUNBQW1DOzs7SUFHbkMsYUFBYTtJQUNiLDJDQUEyQztBQUMvQzs7Q0FFQzs7SUFFRyxVQUFVO0lBQ1YsV0FB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QUtkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcbi5ibG9nU2VjdFBhZ2V7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB3aWR0aDogODB2dztcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBcXG4gICAgXFxufVxcblxcbi5ibG9nUGFnZXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNzAlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOnJlcGVhdCg0LDYwMHB4KSA7XFxuXFxuICAgXFxuICAgIGdhcDogNTBweCAwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgICovXFxufVxcblxcbiAuYmxvZ1NlY3RQYWdlIC5wcm9maWxlRGV0YWlse1xcbiAgIFxcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgLyogYmFja2dyb3VuZDogIzAwMDsgKi9cXG59XFxuXFxuLmJsb2dQYWdlID4gZGl2Om50aC1jaGlsZCgxKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgLyogYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG59XFxuXFxuLmJsb2dQYWdlID4gZGl2Om50aC1jaGlsZCgyKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgLyogYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJsb2dQYWdlID4gZGl2Om50aC1jaGlsZCgzKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDY4MHB4O1xcbiAgICBcXG4gICAgLyogYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgXFxuICAgIFxcbn1cXG5cXG4uYmxvZ1BhZ2UgPiBkaXY6bGFzdC1jaGlsZHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgLyogYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiAuYmxvZ1NlY3RQYWdlIC5jYXJkIC5pbWdPZkJsb2cge1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICBcXG59XFxuXFxuLmRldGFpbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAvKiBnYXA6IDIwcHg7ICovXFxuICAgIHdpZHRoOiA3NzBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgYm90dG9tOiAxNDBweDtcXG4gICBsZWZ0OiA0MHB4O1xcbiAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgXFxuXFxufVxcblxcbi5kZXRhaWwgLmRhdGV7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi9pbWFnZXMvQ2FsZW5kYXIucG5nJyk7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRldGFpbCAubXNne1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vaW1hZ2VzL0NoYXRzLnBuZycpO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG59XFxuXFxuLkFkbWlue1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vaW1hZ2VzL2FkbWluLnBuZycpO1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG4gICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxNDBweDtcXG4gICBoZWlnaHQ6IDMwcHg7XFxuICAgbGVmdDogMjIwcHg7XFxuICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5cXG4uVGV4dGNvbnRlbnRCbG9ne1xcbiAgICB3aWR0aDogNzcwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbi5UZXh0Y29udGVudEJsb2cgcDpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgXFxufVxcblxcbi5UZXh0Y29udGVudEJsb2cgcDpudGgtY2hpbGQoMil7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB3aWR0aDogNzUwcHg7XFxufVxcblxcbi5UZXh0Y29udGVudEJsb2cgYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcbn1cXG5cXG4uVGV4dGNvbnRlbnRCbG9nIGJ1dHRvbjpob3ZlcntcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG59XFxuXFxuLmJsb2dQYWdlID4gZGl2Om50aC1jaGlsZCgzKSAuZGV0YWlsLC5ibG9nUGFnZSA+IGRpdjpudGgtY2hpbGQoMykgLkFkbWlue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTcwcHg7XFxufVxcblxcbi5ibG9nU2VjdFBhZ2UgLnBhZ2VOdW1iZXIge1xcblxcblxcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206LTIzMDBweDtcXG4gICAgbGVmdDogLTczMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIGdhcDogNXB4O1xcbiAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG59XFxuXFxuLmJsb2dTZWN0UGFnZSAucGFnZU51bWJlciBkaXYge1xcblxcblxcbiAgIHdpZHRoOiA0NXB4O1xcbiAgIGhlaWdodDogNDBweDtcXG4gICBib3JkZXI6IC4wMDRlbSByZ2JhKDAsIDAsIDAsIDAuMjQ4KSBzb2xpZDtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgXFxuICAgXFxuXFxuXFxufVxcblxcbi5ibG9nU2VjdFBhZ2UgLnBhZ2VOdW1iZXIgZGl2OmhvdmVyICwuYmxvZ1NlY3RQYWdlIC5wYWdlTnVtYmVyICBwOmhvdmVyIHtcXG5cXG5cXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAuMDA0ZW0gcmdiYSgwLCAwLCAwLCAwLjI0OCkgc29saWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIFxcbiAgICBcXG4gXFxuIFxcbiB9XFxuXFxuLmJsb2dTZWN0UGFnZSAucGFnZU51bWJlciAgcCB7XFxuXFxuXFxuICAgIFxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiBcXG4gXFxuIH1cXG5cXG4uYmxvZ1NlY3RQYWdlIC5wYWdlTnVtYmVyIGRpdjpudGgtY2hpbGQoMykge1xcblxcblxcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtNTBweDtcXG4gICAgXFxuICAgXFxuIFxcbiBcXG4gfVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Gb29kQ2F0U2VjdCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzExO1xcbiAgICBncmlkLXJvdzogMjAvMjU7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uRm9vZENhdFNlY3QgPmRpdjpmaXJzdC1jaGlsZHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIFxcbiAgIFxcbn1cXG5cXG4uRm9vZENhdFNlY3QgZGl2Om50aC1jaGlsZCgyKXtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgIHdpZHRoOiAxMDBweDtcXG4gICBoZWlnaHQ6IDM1cHg7XFxuICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgdG9wOiAyMDBweDtcXG4gICBsZWZ0OiA4MHB4O1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICBcXG59XFxuXFxuLkZvb2RDYXRTZWN0IGRpdjpudGgtY2hpbGQoMyl7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6IDI0NXB4O1xcbiAgICBsZWZ0OiAyNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgXFxufVxcbi5Gb29kQ2F0U2VjdCA+IGRpdiBpbWd7XFxuICAgd2lkdGg6IDIyMHB4O1xcbiAgIG1hcmdpbjogMHB4IDEwcHg7XFxuICAgXFxufVxcblxcbi5zaWRlR3Jhc3NJbWd7XFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIHJpZ2h0OiAtMjAwcHg7XFxuICAgdG9wOjE4MHB4O1xcbn1cXG5cXG4uRm9vZENhdFNlY3QgIGgye1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IFZpYmVzJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbiAgICBcXG4gfVxcblxcbiAuRm9vZENhdFNlY3QgIGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgXFxuIH1cXG5cXG4gLkZvb2RDYXRTZWN0IHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9mb29kQ2F0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlOztJQUVmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7Ozs7QUFJdEI7O0FBRUE7SUFDSSxXQUFXOztJQUVYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjs7O0FBR3BCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtHQUNuQixZQUFZO0dBQ1osWUFBWTtHQUNaLGlCQUFpQjtHQUNqQixVQUFVO0dBQ1YsVUFBVTtHQUNWLGFBQWE7R0FDYix1QkFBdUI7R0FDdkIsbUJBQW1CO0dBQ25CLGtDQUFrQztHQUNsQyx5QkFBeUI7R0FDekIsZ0JBQWdCOztBQUVuQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLHVCQUF1Qjs7QUFFM0I7QUFDQTtHQUNHLFlBQVk7R0FDWixnQkFBZ0I7O0FBRW5COztBQUVBO0dBQ0csa0JBQWtCO0dBQ2xCLGFBQWE7R0FDYixTQUFTO0FBQ1o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxrQkFBa0I7O0NBRXJCOztDQUVBO0lBQ0csdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7O0NBRXJCOztDQUVBO0lBQ0cseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtDQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuRm9vZENhdFNlY3Qge1xcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gICAgZ3JpZC1yb3c6IDIwLzI1O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgXFxuICAgIFxcbiAgICBcXG59XFxuXFxuLkZvb2RDYXRTZWN0ID5kaXY6Zmlyc3QtY2hpbGR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBcXG4gICBcXG59XFxuXFxuLkZvb2RDYXRTZWN0IGRpdjpudGgtY2hpbGQoMil7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICB3aWR0aDogMTAwcHg7XFxuICAgaGVpZ2h0OiAzNXB4O1xcbiAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgIHRvcDogMjAwcHg7XFxuICAgbGVmdDogODBweDtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgXFxufVxcblxcbi5Gb29kQ2F0U2VjdCBkaXY6bnRoLWNoaWxkKDMpe1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOiAyNDVweDtcXG4gICAgbGVmdDogMjVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIFxcbn1cXG4uRm9vZENhdFNlY3QgPiBkaXYgaW1ne1xcbiAgIHdpZHRoOiAyMjBweDtcXG4gICBtYXJnaW46IDBweCAxMHB4O1xcbiAgIFxcbn1cXG5cXG4uc2lkZUdyYXNzSW1ne1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICByaWdodDogLTIwMHB4O1xcbiAgIHRvcDoxODBweDtcXG59XFxuXFxuLkZvb2RDYXRTZWN0ICBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG4gICAgXFxuIH1cXG5cXG4gLkZvb2RDYXRTZWN0ICBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICAgIFxcbiB9XFxuXFxuIC5Gb29kQ2F0U2VjdCBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2ZiLWYucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3R3aXR0ZXItZi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaW5zdGEtZi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMveXQtZi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcGluLWYucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0Nsb2NrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvb3RlcntcXG4gIHBhZGRpbmc6IDMwcHggIDIwcHg7XFxuICBncmlkLWNvbHVtbjogMS8xNDtcXG4gIGdyaWQtcm93OiA3NS84MTtcXG4gIC8qIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gXFxufVxcblxcbi5ncmFzc0Nvcm5lciB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIHJpZ2h0OiAwcHg7XFxuICAgYm90dG9tOiAwcHg7XFxuICAgb3BhY2l0eTogLjU7XFxuICAgXFxufVxcblxcbi5mb290ZXJCZWx0e1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgXFxufVxcblxcbi5zb2NpYWxNZWRTZWN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNDBweDtcXG59XFxuXFxuLnNvY2lhbE1lZFNlYyBkaXY6bnRoLWNoaWxkKDEpe1xcbmJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxud2lkdGg6IDI3cHg7XFxuaGVpZ2h0OiAyN3B4O1xcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5iYWNrZ3JvdW5kLXNpemU6IDMwJTtcXG5tYXJnaW46IDBweCA2cHg7XFxuXFxuXFxufVxcblxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCgyKXtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICB3aWR0aDogMjdweDtcXG4gIGhlaWdodDogMjdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDQ1JTtcXG4gIG1hcmdpbjogMHB4IDZweDtcXG4gIFxcbiAgfVxcblxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCgzKXtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgd2lkdGg6IDI3cHg7XFxuICAgIGhlaWdodDogMjdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDUlO1xcbiAgICBtYXJnaW46IDBweCA2cHg7XFxuICAgIFxcbiAgICB9XFxuLnNvY2lhbE1lZFNlYyBkaXY6bnRoLWNoaWxkKDQpe1xcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgICAgd2lkdGg6IDI3cHg7XFxuICAgICAgaGVpZ2h0OiAyN3B4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDQ1JTtcXG4gICAgICBtYXJnaW46IDBweCA2cHg7XFxuICAgICAgXFxuICAgICAgfVxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCg1KXtcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAgICAgICB3aWR0aDogMjdweDtcXG4gICAgICAgIGhlaWdodDogMjdweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQ1JTtcXG4gICAgICAgIG1hcmdpbjogMHB4IDZweDtcXG4gICAgICAgIFxcbiAgICAgICAgfVxcblxcbi5mb290ZXJCZWx0IHB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICAgICAgICBmb250LXNpemU6MTdweDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0MHB4O1xcbiAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjsgXFxuICAgICAgICB9XFxuXFxuLmZvb3RlckNvbnRlbnR7XFxuXFxud2lkdGg6IDg1JTtcXG5oZWlnaHQ6IDEwMCU7XFxuLyogYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDsgKi9cXG5kaXNwbGF5OiBmbGV4O1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxubWFyZ2luLXRvcDogLTIwcHg7XFxuXFxufVxcblxcbi5mb290ZXJUeHRDb250ZW50e1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIGhlaWdodDogNTAlO1xcbiAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGdhcDogNDBweDtcXG4gICBtYXJnaW4tcmlnaHQ6IDYwcHhcXG4gICA7XFxufVxcblxcbi5mb290ZXJUeHRDb250ZW50ID4gZGl2e1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIC8qIGJvcmRlcjogMXB4IHJlZCBzb2xpZDsgKi9cXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHggMHB4O1xcbn1cXG5cXG4uUmN0UG9zdCBkaXZ7XFxuICBcXG4gIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7IDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDU0cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ2FwOiAwcHggOHB4O1xcbn1cXG5cXG4uUmN0UG9zdCBpbWd7XFxuaGVpZ2h0OiA0MHB4O1xcbndpZHRoOiA0MHB4O1xcbmdyaWQtY29sdW1uOiAxLzI7XFxuZ3JpZC1yb3c6IDEvMztcXG5cXG59XFxuXFxuLlJjdFBvc3QgZGl2IHA6bnRoLWNoaWxkKDIpe1xcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0Myk7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5SY3RQb3N0IGRpdiBwOm50aC1jaGlsZCgzKXtcXG4gIGNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgXFxufVxcblxcbi5SY3RQb3N0IGgye1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVscFNlY3QgaDJ7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBcXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVscFNlY3QgcHtcXG4gIGNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjsgXFxuICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuXFxuXFxuLnVzZUZ1bGxTZWN0IHB7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7IFxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcblxcbi51c2VGdWxsU2VjdCBoMntcXG4gIGNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcblxcblxcblxcblxcbi5hYm91dFVzU2VjdCA+IHB7XFxuY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuZm9udC13ZWlnaHQ6IDMwMDtcXG5mb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZiA7XFxuZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XFxubWFyZ2luLXRvcDogOHB4O1xcbiAgXFxufVxcblxcbi5hYm91dFVzU2VjdCA+IGgye1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgICBcXG4gIH1cXG5cXG4ub3BlbkhyU2VjdE1haW57XFxuIGRpc3BsYXk6IGZsZXg7XFxuIGdhcDogMHB4IDEwcHg7XFxuIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcblxcbn1cXG5cXG4ub3BlbkhyU2VjdEljb257XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDcwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmFib3V0VXNTZWN0IHA6bnRoLWNoaWxkKDEpe1xcbiAgZm9udC1zaXplOiAxNXB4O1xcblxcbn1cXG5cXG4uYWJvdXRVc1NlY3QgcDpudGgtY2hpbGQoMil7XFxuICBmb250LXNpemU6IDEwcHg7XFxuXFxufVxcblxcbi5hYm91dFVzU2VjdCBwOm50aC1jaGlsZCgzKXtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG5cXG59XFxuXFxuLm9wZW5IclNlY3R7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvNDtcXG59XFxuXFxuLnN1cHBvcnRTZWN0e1xcbiAgd2lkdGg6IDY5JTtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7XFxuICBtYXJnaW4tYm90dG9tOi00MHB4O1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ2FwOiAwcHggMzAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uc3VwcG9ydFNlY3Qgc3BhbntcXG5jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbmZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnN1cHBvcnRTZWN0IHA6Zmlyc3QtY2hpbGR7XFxuICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG4gIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIH1cXG5cXG4gIC5zdXBwb3J0U2VjdCBwOm50aC1jaGlsZCgyKXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIFxcbiAgICB9XFxuXFxuICAgIC5zdXBwb3J0U2VjdCBkaXZ7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgICB9XFxuXFxuICAgICAgLnN1cHBvcnRTZWN0IGlucHV0e1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAuc3VwcG9ydFNlY3QgaW5wdXQ6Zm9jdXN7XFxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIFxcbiAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAuc3VwcG9ydFNlY3QgaW5wdXQ6OnBsYWNlaG9sZGVye1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgLnN1cHBvcnRTZWN0IGJ1dHRvbntcXG4gICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICAgICAgO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5zdXBwb3J0U2VjdCBidXR0b246aG92ZXJ7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzMsIDIzMylcXG4gICAgICAgICAgICAgO1xcbiAgICAgICAgICAgICAgIH1cXG5cXG4gICAgXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuICAgICAgICAgICAgXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7O0FBRXJCOztBQUVBO0lBQ0ksYUFBYTtHQUNkLGtCQUFrQjtH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UUFDekIsZUFBZTs7VUFFYjs7VUFFQTtZQUNFLFlBQVk7YUFDWCxrQ0FBa0M7YUFDbEMsWUFBWTthQUNaLGFBQWE7YUFDYixrQkFBa0I7YUFDbEIseUJBQXlCO2FBQ3pCLGVBQWU7YUFDZjthQUNBO2VBQ0VcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3RlcntcXG4gIHBhZGRpbmc6IDMwcHggIDIwcHg7XFxuICBncmlkLWNvbHVtbjogMS8xNDtcXG4gIGdyaWQtcm93OiA3NS84MTtcXG4gIC8qIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gXFxufVxcblxcbi5ncmFzc0Nvcm5lciB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIHJpZ2h0OiAwcHg7XFxuICAgYm90dG9tOiAwcHg7XFxuICAgb3BhY2l0eTogLjU7XFxuICAgXFxufVxcblxcbi5mb290ZXJCZWx0e1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgXFxufVxcblxcbi5zb2NpYWxNZWRTZWN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNDBweDtcXG59XFxuXFxuLnNvY2lhbE1lZFNlYyBkaXY6bnRoLWNoaWxkKDEpe1xcbmJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2ZiLWYucG5nJyk7XFxud2lkdGg6IDI3cHg7XFxuaGVpZ2h0OiAyN3B4O1xcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5iYWNrZ3JvdW5kLXNpemU6IDMwJTtcXG5tYXJnaW46IDBweCA2cHg7XFxuXFxuXFxufVxcblxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCgyKXtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL3R3aXR0ZXItZi5wbmcnKTtcXG4gIHdpZHRoOiAyN3B4O1xcbiAgaGVpZ2h0OiAyN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDUlO1xcbiAgbWFyZ2luOiAwcHggNnB4O1xcbiAgXFxuICB9XFxuXFxuLnNvY2lhbE1lZFNlYyBkaXY6bnRoLWNoaWxkKDMpe1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9pbnN0YS1mLnBuZycpO1xcbiAgICB3aWR0aDogMjdweDtcXG4gICAgaGVpZ2h0OiAyN3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0NSU7XFxuICAgIG1hcmdpbjogMHB4IDZweDtcXG4gICAgXFxuICAgIH1cXG4uc29jaWFsTWVkU2VjIGRpdjpudGgtY2hpbGQoNCl7XFxuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMveXQtZi5wbmcnKTtcXG4gICAgICB3aWR0aDogMjdweDtcXG4gICAgICBoZWlnaHQ6IDI3cHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNDUlO1xcbiAgICAgIG1hcmdpbjogMHB4IDZweDtcXG4gICAgICBcXG4gICAgICB9XFxuLnNvY2lhbE1lZFNlYyBkaXY6bnRoLWNoaWxkKDUpe1xcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvcGluLWYucG5nJyk7XFxuICAgICAgICB3aWR0aDogMjdweDtcXG4gICAgICAgIGhlaWdodDogMjdweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQ1JTtcXG4gICAgICAgIG1hcmdpbjogMHB4IDZweDtcXG4gICAgICAgIFxcbiAgICAgICAgfVxcblxcbi5mb290ZXJCZWx0IHB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICAgICAgICBmb250LXNpemU6MTdweDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0MHB4O1xcbiAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjsgXFxuICAgICAgICB9XFxuXFxuLmZvb3RlckNvbnRlbnR7XFxuXFxud2lkdGg6IDg1JTtcXG5oZWlnaHQ6IDEwMCU7XFxuLyogYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDsgKi9cXG5kaXNwbGF5OiBmbGV4O1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxubWFyZ2luLXRvcDogLTIwcHg7XFxuXFxufVxcblxcbi5mb290ZXJUeHRDb250ZW50e1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIGhlaWdodDogNTAlO1xcbiAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGdhcDogNDBweDtcXG4gICBtYXJnaW4tcmlnaHQ6IDYwcHhcXG4gICA7XFxufVxcblxcbi5mb290ZXJUeHRDb250ZW50ID4gZGl2e1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIC8qIGJvcmRlcjogMXB4IHJlZCBzb2xpZDsgKi9cXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHggMHB4O1xcbn1cXG5cXG4uUmN0UG9zdCBkaXZ7XFxuICBcXG4gIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7IDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDU0cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ2FwOiAwcHggOHB4O1xcbn1cXG5cXG4uUmN0UG9zdCBpbWd7XFxuaGVpZ2h0OiA0MHB4O1xcbndpZHRoOiA0MHB4O1xcbmdyaWQtY29sdW1uOiAxLzI7XFxuZ3JpZC1yb3c6IDEvMztcXG5cXG59XFxuXFxuLlJjdFBvc3QgZGl2IHA6bnRoLWNoaWxkKDIpe1xcbiAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0Myk7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5SY3RQb3N0IGRpdiBwOm50aC1jaGlsZCgzKXtcXG4gIGNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgXFxufVxcblxcbi5SY3RQb3N0IGgye1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVscFNlY3QgaDJ7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBcXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVscFNlY3QgcHtcXG4gIGNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjsgXFxuICBsaW5lLWhlaWdodDogMjBweDtcXG59XFxuXFxuXFxuLnVzZUZ1bGxTZWN0IHB7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7IFxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcblxcbi51c2VGdWxsU2VjdCBoMntcXG4gIGNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcblxcblxcblxcblxcbi5hYm91dFVzU2VjdCA+IHB7XFxuY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuZm9udC13ZWlnaHQ6IDMwMDtcXG5mb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZiA7XFxuZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XFxubWFyZ2luLXRvcDogOHB4O1xcbiAgXFxufVxcblxcbi5hYm91dFVzU2VjdCA+IGgye1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgICBcXG4gIH1cXG5cXG4ub3BlbkhyU2VjdE1haW57XFxuIGRpc3BsYXk6IGZsZXg7XFxuIGdhcDogMHB4IDEwcHg7XFxuIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcblxcbn1cXG5cXG4ub3BlbkhyU2VjdEljb257XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvQ2xvY2sucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1zaXplOiA3MCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFxufVxcblxcbi5hYm91dFVzU2VjdCBwOm50aC1jaGlsZCgxKXtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG5cXG59XFxuXFxuLmFib3V0VXNTZWN0IHA6bnRoLWNoaWxkKDIpe1xcbiAgZm9udC1zaXplOiAxMHB4O1xcblxcbn1cXG5cXG4uYWJvdXRVc1NlY3QgcDpudGgtY2hpbGQoMyl7XFxuICBmb250LXNpemU6IDEwcHg7XFxuXFxufVxcblxcbi5vcGVuSHJTZWN0e1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzQ7XFxufVxcblxcbi5zdXBwb3J0U2VjdHtcXG4gIHdpZHRoOiA2OSU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBib3JkZXI6IDFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkO1xcbiAgbWFyZ2luLWJvdHRvbTotNDBweDtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogMHB4IDMwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLnN1cHBvcnRTZWN0IHNwYW57XFxuY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG5mb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zdXBwb3J0U2VjdCBwOmZpcnN0LWNoaWxke1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICBmb250LXNpemU6IDE5cHg7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB9XFxuXFxuICAuc3VwcG9ydFNlY3QgcDpudGgtY2hpbGQoMil7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBcXG4gICAgfVxcblxcbiAgICAuc3VwcG9ydFNlY3QgZGl2e1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgfVxcblxcbiAgICAgIC5zdXBwb3J0U2VjdCBpbnB1dHtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLnN1cHBvcnRTZWN0IGlucHV0OmZvY3Vze1xcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICBcXG4gICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLnN1cHBvcnRTZWN0IGlucHV0OjpwbGFjZWhvbGRlcntcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgfVxcblxcbiAgICAgIC5zdXBwb3J0U2VjdCBidXR0b257XFxuICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgICAgIDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAuc3VwcG9ydFNlY3QgYnV0dG9uOmhvdmVye1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjMzLCAyMzMpXFxuICAgICAgICAgICAgIDtcXG4gICAgICAgICAgICAgICB9XFxuXFxuICAgIFxcblxcblxcblxcblxcblxcblxcblxcbiAgICAgICAgICAgIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcbi5Gcm9tTWVudU1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtY29sdW1uOiAyLzExO1xcbiAgICBncmlkLXJvdzogNDIvNDU7XFxuICAgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLkZyb21NZW51TWFpbiBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4OztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIHRvcDogLTExMHB4O1xcbn1cXG5cXG4uRnJvbU1lbnVNYWluIGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgdG9wOiAtODBweDtcXG59XFxuXFxuLkZyb21NZW51TWFpbiBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLm5hdntcXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI1JTsgKi9cXG59XFxuLm5hdiB1bCBsaXtcXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XFxufVxcblxcbi5tZW51TGlzdFNlY3R7XFxuICAgIHdpZHRoOiA3NTBweDtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogbWFyZ2luLXRvcDogYXV0byAqL1xcbn1cXG5cXG5cXG4ubWVudUxpc3RTZWN0IGRpdjpmaXJzdC1jaGlsZHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICBcXG4gICAgXFxufVxcblxcbi5tZW51U2VjdHtcXG4gICAgd2lkdGg6NzUwcHg7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIFxcbn1cXG5cXG4ubWVudVNlY3QgaW1ne1xcbiAgICB3aWR0aDogNDBweDtcXG59XFxuXFxuLm1lbnVTZWN0IHVse1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4IDBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubWVudVNlY3QgbGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb2RJdGVtSW1nU2VjdHtcXG4gICAgd2lkdGg6IDQ1cHggIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tZW51U2VjdCBsaSBpbWd7XFxuICAgIFxcbiAgICBcXG5cXG59XFxuLm1lbnVTZWN0IGxpIHA6bnRoLWNoaWxkKDEpe1xcbmZvbnQtc2l6ZTogMTJweDtcXG5cXG59XFxuXFxuLm1lbnVTZWN0IGxpIHA6bnRoLWNoaWxkKDIpe1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIFxcbiAgICB9XFxuXFxuLm1lbnVTZWN0IGxpIHA6bnRoLWNoaWxkKDMpe1xcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG59XFxuXFxuXFxuLmRpc3BsYXlEaXNoIGltZ3tcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Zyb21NZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixlQUFlOztJQUVmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0k7ZUFDVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTs7SUFFYixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhOzs7QUFHakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsaUJBQWlCOztJQUVqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQSxlQUFlOztBQUVmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjs7SUFFaEI7O0FBRUo7UUFDUSxlQUFlO1FBQ2YseUJBQXlCO0FBQ2pDOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuLkZyb21NZW51TWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTE7XFxuICAgIGdyaWQtcm93OiA0Mi80NTtcXG4gICBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uRnJvbU1lbnVNYWluIGgye1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IFZpYmVzJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgdG9wOiAtMTEwcHg7XFxufVxcblxcbi5Gcm9tTWVudU1haW4gaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMzAlO1xcbiAgICB0b3A6IC04MHB4O1xcbn1cXG5cXG4uRnJvbU1lbnVNYWluIHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4ubmF2e1xcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjUlOyAqL1xcbn1cXG4ubmF2IHVsIGxpe1xcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcXG59XFxuXFxuLm1lbnVMaXN0U2VjdHtcXG4gICAgd2lkdGg6IDc1MHB4O1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBtYXJnaW4tdG9wOiBhdXRvICovXFxufVxcblxcblxcbi5tZW51TGlzdFNlY3QgZGl2OmZpcnN0LWNoaWxke1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLm1lbnVTZWN0e1xcbiAgICB3aWR0aDo3NTBweDtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgXFxufVxcblxcbi5tZW51U2VjdCBpbWd7XFxuICAgIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4ubWVudVNlY3QgdWx7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHggMHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5tZW51U2VjdCBsaXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxuICAgXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vZEl0ZW1JbWdTZWN0e1xcbiAgICB3aWR0aDogNDVweCAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcXG59XFxuXFxuLm1lbnVTZWN0IGxpIGltZ3tcXG4gICAgXFxuICAgIFxcblxcbn1cXG4ubWVudVNlY3QgbGkgcDpudGgtY2hpbGQoMSl7XFxuZm9udC1zaXplOiAxMnB4O1xcblxcbn1cXG5cXG4ubWVudVNlY3QgbGkgcDpudGgtY2hpbGQoMil7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgXFxuICAgIH1cXG5cXG4ubWVudVNlY3QgbGkgcDpudGgtY2hpbGQoMyl7XFxuICAgICAgICBmb250LXNpemU6IDExcHg7XFxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbn1cXG5cXG5cXG4uZGlzcGxheURpc2ggaW1ne1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi92YXJyaWFibGVzLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PUludGVyOndnaHRAMjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaGVhZGVye1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubG9nbyBpbWd7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICBsZWZ0OjQ3JTtcXG59XFxuXFxudWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgXFxufVxcblxcbmxpe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjs7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnNlYXJjaFNlY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQ2cHg7XFxuICAgIHJpZ2h0OiAxcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICBcXG4gICAgXFxufVxcblxcblxcbi5zZWFyY2hCYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbn1cXG5cXG4jaGFuZEJhZ3tcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VhcmNoSWNvbiB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgXFxuICAgIG1hcmdpbi1yaWdodDogMTdweDtcXG59XFxuXFxuLnNlYXJjaEJhciBpbnB1dHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IDE2NnB4O1xcbiAgICBcXG59XFxuXFxuLnNlYXJjaEJhciBpbnB1dDo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixpQkFBaUI7O0FBRW5COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjs7O0FBR3ZCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTs7SUFFWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL3ZhcnJpYWJsZXMuY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZmYW1pbHk9SW50ZXI6d2dodEAyMDAmZGlzcGxheT1zd2FwJyk7XFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5oZWFkZXJ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdyaWQtY29sdW1uOiAyLzEyO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sb2dvIGltZ3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwcHg7XFxuICAgIGxlZnQ6NDclO1xcbn1cXG5cXG51bHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBcXG59XFxuXFxubGl7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmOztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uc2VhcmNoU2VjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDZweDtcXG4gICAgcmlnaHQ6IDFweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIFxcbiAgICBcXG59XFxuXFxuXFxuLnNlYXJjaEJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgXFxufVxcblxcbiNoYW5kQmFne1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2hJY29uIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBcXG4gICAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xcbn1cXG5cXG4uc2VhcmNoQmFyIGlucHV0e1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB3aWR0aDogMTY2cHg7XFxuICAgIFxcbn1cXG5cXG4uc2VhcmNoQmFyIGlucHV0OjpwbGFjZWhvbGRlcntcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi92YXJyaWFibGVzLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaG9tZURpc2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZmYW1pbHk9SW50ZXI6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJtYWlue1xcblxcbiAgICBncmlkLWNvbHVtbjogMi8xMztcXG4gIGdyaWQtcm93OiAzLzg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgXFxuICBcXG59XFxuXFxubWFpbiAudGV4dENvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNDglO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6MXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uc29jaWFsU2VjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDozMCU7XFxuICAgIGxlZnQ6IC0xMHB4O1xcbiAgIFxcbn1cXG5cXG4uc29jaWFsU2VjdCBpbWd7XFxuICAgIGhlaWdodDogMTRweDtcXG4gICAgd2lkdGg6MTRweDtcXG4gICAgXFxufVxcblxcbi50ZXh0Q29udGVudCBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICB3aWR0aDoxMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWFyZ2luOjEwcHggIDM1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxufVxcblxcbi50ZXh0Q29udGVudCBwe1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxud2lkdGg6IDM5MHB4O1xcbm1hcmdpbjogMTBweCAzNXB4O1xcbmZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50ZXh0Q29udGVudCAuaGVhZGluZzJ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxufVxcblxcblxcbi50ZXh0Q29udGVudCAuaGVhZGluZzF7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgXFxufVxcblxcblxcbi5pbWFnZVNlY3R7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMTMwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA5OCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgXFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7O0lBRUksaUJBQWlCO0VBQ25CLGFBQWE7RUFDYixhQUFhOzs7QUFHZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsa0JBQWtCOzs7QUFHdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsYUFBYTtHQUNkLG1CQUFtQjtHQUNuQix1QkFBdUI7SUFDdEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxXQUFXOztBQUVmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIsdUJBQXVCO0FBQ3ZCLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsK0JBQStCO0FBQy9COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxpQkFBaUI7O0FBRXJCOzs7QUFHQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osbURBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQiw0QkFBNEI7O0FBRWhDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vdmFycmlhYmxlcy5jc3MnO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyZWF0K1ZpYmVzJmZhbWlseT1JbnRlcjp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxubWFpbntcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDIvMTM7XFxuICBncmlkLXJvdzogMy84O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIFxcbiAgXFxufVxcblxcbm1haW4gLnRleHRDb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQ4JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OjFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLnNvY2lhbFNlY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MzAlO1xcbiAgICBsZWZ0OiAtMTBweDtcXG4gICBcXG59XFxuXFxuLnNvY2lhbFNlY3QgaW1ne1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxuICAgIHdpZHRoOjE0cHg7XFxuICAgIFxcbn1cXG5cXG4udGV4dENvbnRlbnQgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgd2lkdGg6MTIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIG1hcmdpbjoxMHB4ICAzNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbn1cXG5cXG4udGV4dENvbnRlbnQgcHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbmNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbndpZHRoOiAzOTBweDtcXG5tYXJnaW46IDEwcHggMzVweDtcXG5mb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udGV4dENvbnRlbnQgLmhlYWRpbmcye1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbn1cXG5cXG5cXG4udGV4dENvbnRlbnQgLmhlYWRpbmcxe1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IFZpYmVzJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuICAgIFxcbn1cXG5cXG5cXG4uaW1hZ2VTZWN0e1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEzMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2hvbWVEaXNoLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDk4JTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZhcnJpYWJsZXMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNV9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb2RDYXQuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF82X19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vV2h5Q2hvb3NlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfN19fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc3RyYXVJbmZvU2VjdC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzhfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mcm9tTWVudS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzlfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9vdXJDaGVmLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90ZXN0aW1vbmlhbC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzExX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzdHJhdUFjdGl2ZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEyX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmxvZy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEzX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWVudVBhZ2UuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xNF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2VIZWFkZXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xNV9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jsb2dQYWdlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTZfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaG9wLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvbWFpbmJnLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzZfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzdfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzhfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzlfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEwX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTJfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEzX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xNF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTVfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzE2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICBcXG4gICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG4gICAgXFxufVxcblxcblxcblxcbi5jb250ZW50e1xcbndpZHRoOiAxMDB2dztcXG5iYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC44MDQpO1xcbmhlaWdodDogMTIwJTtcXG5kaXNwbGF5OiBncmlkO1xcbmdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsODhweCk7XFxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoODAsNzBweCk7XFxuZ2FwOjBweCAyNHB4O1xcbnotaW5kZXg6IDE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBa0JBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLHlEQUE2QztJQUM3QyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixjQUFjOztHQUVmLGtCQUFrQjtJQUNqQix3QkFBd0I7O0FBRTVCOzs7O0FBSUE7QUFDQSxZQUFZO0FBQ1oscUNBQXFDO0FBQ3JDLFlBQVk7QUFDWixhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLHNDQUFzQztBQUN0QyxtQ0FBbUM7QUFDbkMsWUFBWTtBQUNaLFVBQVU7QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL3ZhcnJpYWJsZXMuY3NzJztcXG5AaW1wb3J0IFxcXCIuL2hlYWRlci5jc3NcXFwiO1xcbkBpbXBvcnQgJy4vaG9tZS5jc3MnO1xcbkBpbXBvcnQgJy4vZm9vdGVyLmNzcyc7XFxuQGltcG9ydCAnLi9hYm91dC5jc3MnO1xcbkBpbXBvcnQgJy4vZm9vZENhdC5jc3MnO1xcbkBpbXBvcnQgJy4vV2h5Q2hvb3NlLmNzcyc7XFxuQGltcG9ydCAnLi9yZXN0cmF1SW5mb1NlY3QuY3NzJztcXG5AaW1wb3J0ICcuL2Zyb21NZW51LmNzcyc7XFxuQGltcG9ydCAnLi9vdXJDaGVmLmNzcyc7XFxuQGltcG9ydCAnLi90ZXN0aW1vbmlhbC5jc3MnO1xcbkBpbXBvcnQgJy4vcmVzdHJhdUFjdGl2ZS5jc3MnO1xcbkBpbXBvcnQgJy4vYmxvZy5jc3MnO1xcbkBpbXBvcnQgJy4vTWVudVBhZ2UuY3NzJztcXG5AaW1wb3J0ICcuL3BhZ2VIZWFkZXIuY3NzJztcXG5AaW1wb3J0ICcuL2Jsb2dQYWdlLmNzcyc7XFxuQGltcG9ydCAnLi9zaG9wLmNzcyc7XFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY2xyKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvbWFpbmJnLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICBcXG4gICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG4gICAgXFxufVxcblxcblxcblxcbi5jb250ZW50e1xcbndpZHRoOiAxMDB2dztcXG5iYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC44MDQpO1xcbmhlaWdodDogMTIwJTtcXG5kaXNwbGF5OiBncmlkO1xcbmdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsODhweCk7XFxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoODAsNzBweCk7XFxuZ2FwOjBweCAyNHB4O1xcbnotaW5kZXg6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcbi5vdXJDaGVmU2VjdHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTE7XFxuICAgIGdyaWQtcm93OiA0Ny81MjtcXG4gICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ub3VyQ2hlZlNlY3QgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDs7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgXFxufVxcblxcbi5vdXJDaGVmU2VjdCBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMwcHg7XFxuICAgIGxlZnQ6IDMyMHB4O1xcbn1cXG5cXG4ub3VyQ2hlZlNlY3Qgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5jaGVmTGlzdHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICBcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgdG9wOiAyMHB4O1xcbiAgICBcXG59XFxuXFxuIC5vdXJDaGVmU2VjdCBidXR0b24ge1xcbiAgICBcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5vdXJDaGVmU2VjdCBidXR0b246aG92ZXIge1xcbiAgICBcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG59XFxuXFxuLmNoZWZMaXN0IC5jaGVmU2VjdHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbn1cXG5cXG4uY2hlZkxpc3QgaW1ne1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHNjYWxlOiAxO1xcbiAgICBcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcbn1cXG5cXG4uY2hlZkxpc3QgaW1nOmhvdmVye1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHNjYWxlOiAxLjI7XFxufVxcblxcbi5jaGVmTGlzdCAuaW5mb3tcXG5cXG4gICAgd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stY2xyKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAuNXM7XFxufVxcblxcbi5jaGVmTGlzdCAuaW5mbyBwOmZpcnN0LWNoaWxke1xcbiAgICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIFxcblxcbn1cXG5cXG4uY2hlZkxpc3QgLmluZm8gcDpudGgtY2hpbGQoMil7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZToxMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9vdXJDaGVmLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlOztJQUVmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTs7SUFFYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7R0FDeEIsa0JBQWtCO0dBQ2xCLFNBQVM7O0FBRVo7O0NBRUM7O0lBRUcsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsUUFBUTs7SUFFUixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhOzs7QUFHakI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGFBQWE7O0FBRWpCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcbi5vdXJDaGVmU2VjdHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTE7XFxuICAgIGdyaWQtcm93OiA0Ny81MjtcXG4gICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ub3VyQ2hlZlNlY3QgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDs7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgXFxufVxcblxcbi5vdXJDaGVmU2VjdCBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMwcHg7XFxuICAgIGxlZnQ6IDMyMHB4O1xcbn1cXG5cXG4ub3VyQ2hlZlNlY3Qgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5jaGVmTGlzdHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICBcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgdG9wOiAyMHB4O1xcbiAgICBcXG59XFxuXFxuIC5vdXJDaGVmU2VjdCBidXR0b24ge1xcbiAgICBcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5vdXJDaGVmU2VjdCBidXR0b246aG92ZXIge1xcbiAgICBcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG59XFxuXFxuLmNoZWZMaXN0IC5jaGVmU2VjdHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbn1cXG5cXG4uY2hlZkxpc3QgaW1ne1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHNjYWxlOiAxO1xcbiAgICBcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcbn1cXG5cXG4uY2hlZkxpc3QgaW1nOmhvdmVye1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHNjYWxlOiAxLjI7XFxufVxcblxcbi5jaGVmTGlzdCAuaW5mb3tcXG5cXG4gICAgd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stY2xyKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAuNXM7XFxufVxcblxcbi5jaGVmTGlzdCAuaW5mbyBwOmZpcnN0LWNoaWxke1xcbiAgICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIFxcblxcbn1cXG5cXG4uY2hlZkxpc3QgLmluZm8gcDpudGgtY2hpbGQoMil7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZToxMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcmVzdHJhdUFjdGl2ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcGxheS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyZWF0K1ZpYmVzJmZhbWlseT1JbnRlcjp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcblxcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ucmVzdHJhdUFjdGl2ZVNlY3R7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8xNDtcXG4gICAgZ3JpZC1yb3c6IDYyLzY2O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucmVzdHJhdUFjdGl2ZVNlY3QgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI2MHB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG5cXG59XFxuXFxuLnJlc3RyYXVBY3RpdmVTZWN0IGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI2MHB4O1xcbiAgICBcXG5cXG59XFxuXFxuLnJlc3RyYXVBY3RpdmVTZWN0IHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4ucmVzdHJhdUFjdGl2ZVNlY3QgcHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjYwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uYnRuU2VjdCB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBcXG4gIFxcbiAgICBtYXJnaW4tcmlnaHQ6IDIzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgXFxuXFxufVxcblxcbi5idG4xIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogLTI5MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMXB4IDI4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xcblxcbn1cXG5cXG4uYnRuMTpob3ZlcntcXG4gICAgcGFkZGluZzogMTFweCAyOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuXFxufVxcblxcbi5idG4ye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgcmlnaHQ6IC0zMTVweDtcXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nOjE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMnB4O1xcblxcblxcbn1cXG5cXG4uYnRuMjpob3ZlcntcXG4gICAgcGFkZGluZzoxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE4NCwgMTMxLCA3Nyk7XFxuXFxufVxcblxcbi5WaWRwbGF5ICB7XFxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgIHJpZ2h0OiAtMjMwcHg7XFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAzNTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6ODAwO1xcblxcbn1cXG5cXG4ucGxheVZpZFNlY3R7XFxuICAgIG1hcmdpbi10b3A6IDE3cHg7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVzdHJhdUFjdGl2ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlEQUFvRDtJQUNwRCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7OztBQUd2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXOzs7SUFHWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjs7OztBQUl2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksa0JBQWtCO0dBQ25CLGFBQWE7R0FDYixnQkFBZ0I7SUFDZixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlEQUEyQztJQUMzQyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDJCQUEyQjs7O0FBRy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5REFBMkM7SUFDM0MsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0Isa0NBQWtDOztBQUV0Qzs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixhQUFhO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyZWF0K1ZpYmVzJmZhbWlseT1JbnRlcjp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuXFxuXFxuKntcXG5cXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnJlc3RyYXVBY3RpdmVTZWN0e1xcbiAgICBncmlkLWNvbHVtbjogMSAvMTQ7XFxuICAgIGdyaWQtcm93OiA2Mi82NjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvcmVzdHJhdUFjdGl2ZS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJlc3RyYXVBY3RpdmVTZWN0IGgye1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IFZpYmVzJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNjBweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuXFxufVxcblxcbi5yZXN0cmF1QWN0aXZlU2VjdCBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNjBweDtcXG4gICAgXFxuXFxufVxcblxcbi5yZXN0cmF1QWN0aXZlU2VjdCBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuLnJlc3RyYXVBY3RpdmVTZWN0IHB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI2MHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmJ0blNlY3Qge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgXFxuICBcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIFxcblxcbn1cXG5cXG4uYnRuMSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IC0yOTBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgcGFkZGluZzogMTFweCAyOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG5cXG59XFxuXFxuLmJ0bjE6aG92ZXJ7XFxuICAgIHBhZGRpbmc6IDExcHggMjhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xcblxcbn1cXG5cXG4uYnRuMntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgIHJpZ2h0OiAtMzE1cHg7XFxuICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgcGFkZGluZzoxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9wbGF5LnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTJweDtcXG5cXG5cXG59XFxuXFxuLmJ0bjI6aG92ZXJ7XFxuICAgIHBhZGRpbmc6MThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3BsYXkucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxODQsIDEzMSwgNzcpO1xcblxcbn1cXG5cXG4uVmlkcGxheSAge1xcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICByaWdodDogLTIzMHB4O1xcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMzUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OjgwMDtcXG5cXG59XFxuXFxuLnBsYXlWaWRTZWN0e1xcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy90b3RhbEluZm9TZWN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5yZXN0cmF1SW5mb1NlY3R7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8xNDtcXG4gICAgZ3JpZC1yb3c6IDM1LzM5O1xcblxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG47XFxufVxcblxcbi5yZXN0cmF1SW5mb1NlY3RCbGFja0xheWVye1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcyMik7XFxuICB6LWluZGV4OiAxO1xcblxcbn1cXG5cXG4ucmVzdHJhdUluZm9TZWN0QmxhY2tMYXllciBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIgZGl2IGltZ3tcXG4gICB3aWR0aDogODBweDsgXFxuICAgO1xcbn1cXG5cXG4ucmVzdHJhdUluZm9TZWN0QmxhY2tMYXllciBkaXYgcDpudGgtY2hpbGQoMil7XFxuICAgY29sb3I6IHdoaXRlO1xcbiAgIGZvbnQtc2l6ZTogMTlweDtcXG4gICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICBmb250LXdlaWdodDogNjAwO1xcbiB9XFxuXFxuIC5yZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyIGRpdiBwOm50aC1jaGlsZCgzKXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgfVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVzdHJhdUluZm9TZWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7O0VBRWpCLHlEQUFvRDs7QUFFdEQ7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7RUFDZCxzQ0FBc0M7RUFDdEMsVUFBVTs7QUFFWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhOztJQUViLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7R0FDRyxXQUFXOztBQUVkOztBQUVBO0dBQ0csWUFBWTtHQUNaLGVBQWU7R0FDZixtQ0FBbUM7R0FDbkMsZ0JBQWdCO0NBQ2xCOztDQUVBO0lBQ0csWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUNBQW1DO0VBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5yZXN0cmF1SW5mb1NlY3R7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8xNDtcXG4gICAgZ3JpZC1yb3c6IDM1LzM5O1xcblxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvdG90YWxJbmZvU2VjdC5wbmcnKTtcXG47XFxufVxcblxcbi5yZXN0cmF1SW5mb1NlY3RCbGFja0xheWVye1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcyMik7XFxuICB6LWluZGV4OiAxO1xcblxcbn1cXG5cXG4ucmVzdHJhdUluZm9TZWN0QmxhY2tMYXllciBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIgZGl2IGltZ3tcXG4gICB3aWR0aDogODBweDsgXFxuICAgO1xcbn1cXG5cXG4ucmVzdHJhdUluZm9TZWN0QmxhY2tMYXllciBkaXYgcDpudGgtY2hpbGQoMil7XFxuICAgY29sb3I6IHdoaXRlO1xcbiAgIGZvbnQtc2l6ZTogMTlweDtcXG4gICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICBmb250LXdlaWdodDogNjAwO1xcbiB9XFxuXFxuIC5yZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyIGRpdiBwOm50aC1jaGlsZCgzKXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgfVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hlYWRlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc2VhcmNoLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9CYW5uZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZm9vdGVyU2hvcHtcXG4gICAgcGFkZGluZzogMzBweCAgMjBweDtcXG4gIGdyaWQtY29sdW1uOiAxLzE0O1xcbiAgZ3JpZC1yb3c6IDMwLzM2O1xcbiAgLyogYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uYm9keVBhZ2VGb3JTaG9we1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wOyAgXFxufVxcblxcblxcbi5zaG9wQm9keXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMTQ7XFxuICAgIGdyaWQtcm93OiA1LzMwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hvcFNlY3R7XFxuICAgIFxcbiAgICB3aWR0aDo4MHZ3O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG4gICAgXFxufVxcblxcbi5zaG9wTGlzdHtcXG4gICBcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiAxNXB4O1xcblxcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuLnNob3BMaXN0IC5pdGVtOm50aC1jaGlsZCgzKXtcXG4gIFxcbiAgZGlzcGxheTogbm9uZTtcXG4gICAgXFxufVxcblxcbi5zaG9wU2VjdCAuaXRlbXtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICBcXG4gICBcXG59XFxuXFxuXFxuLnNob3BTZWN0IC5pdGVtIGltZ3tcXG4gICAgd2lkdGg6IDE5NXB4O1xcbiAgICBoZWlnaHQ6MTUwcHggO1xcbn1cXG5cXG4uc2hvcFNlY3QgLml0ZW0gLml0ZW1OYW1le1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgcmlnaHQ6IDU1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG5cXG59XFxuXFxuLnNob3BTZWN0IC5pdGVtIHA6bGFzdC1jaGlsZHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIHJpZ2h0OjgwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG5cXG59XFxuXFxuLnNob3BCb2R5IC5wcm9maWxlRGV0YWlse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDk4KTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIG1hcmdpbi10b3A6IC01NDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogMTAwcHg7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLnNob3BCb2R5IC5wcm9maWxlRGV0YWlsIC5pbnB1dFNlY3QgaW5wdXR7XFxuICAgIFxcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jbHIpOyAqL1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDIyNywgMjI3KTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4uc2hvcEJvZHkgLnByb2ZpbGVEZXRhaWwgLmlucHV0U2VjdHtcXG4gICAgXFxud2lkdGg6IDIwMHB4O1xcbmhlaWdodDogMzRweDtcXG4vKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMjcsIDIyNyk7XFxuZGlzcGxheTogZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbm1hcmdpbi10b3A6IDMwcHg7XFxuXFxuICAgIFxcbn1cXG5cXG4uc2hvcEJvZHkgLnByb2ZpbGVEZXRhaWwgLmlucHV0U2VjdCAuSW5wdXRJQ09Oe1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLnByb2ZpbGVEZXRhaWwgLmNoZWNrTGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5wcm9maWxlRGV0YWlsIC5jaGVja0xpc3QgLmNoZWNrUGFyYXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5wcm9maWxlRGV0YWlsIC5jaGVja0xpc3QgaDJ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMFxcbiAgICA7XFxuXFxufVxcblxcbi5hZHZlcnRpc2V7XFxud2lkdGg6IDIwMHB4O1xcbmhlaWdodDogMjQwcHg7XFxubWFyZ2luLXRvcDogMzBweDtcXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbmJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbn1cXG5cXG4ubGF0ZXN0UHJ7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ubGlzdFBye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDVweCA7XFxuXFxufVxcblxcbi5sYXRlc3RQciBpbWd7XFxuXFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5sYXRlc3RQciAubGlzdFByIHA6bGFzdC1jaGlsZHtcXG5cXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBcXG4gICBcXG4gICAgXFxufVxcbi5wcm9maWxlRGV0YWlsIC5sYXRlc3RQciBoMntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Nob3AuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLG1CQUFtQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIseURBQTZDO0lBQzdDLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHdCQUF3QjtBQUM1Qjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixhQUFhOztJQUViLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1Qjs7O0FBRzNCOztBQUVBOztJQUVJLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFNBQVM7O0lBRVQsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7RUFFRSxhQUFhOztBQUVmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCOzs7QUFHdEI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0QyxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7OztBQUdoQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7O0lBRWxCOztBQUVKOztBQUVBLFlBQVk7QUFDWixZQUFZO0FBQ1osNkJBQTZCO0FBQzdCLG9DQUFvQztBQUNwQyxhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQixnQkFBZ0I7OztBQUdoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLHlEQUE2QztJQUM3Qyw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLDJCQUEyQjs7QUFFL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0lBQ0E7O0FBRUo7O0FBRUE7QUFDQSxZQUFZO0FBQ1osYUFBYTtBQUNiLGdCQUFnQjtBQUNoQix5REFBNkM7QUFDN0Msd0JBQXdCO0FBQ3hCLDRCQUE0Qjs7QUFFNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IsMkJBQTJCO0lBQzNCLGtCQUFrQjs7O0FBR3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsU0FBUzs7QUFFYjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTs7OztBQUluQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCOztBQUVwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uZm9vdGVyU2hvcHtcXG4gICAgcGFkZGluZzogMzBweCAgMjBweDtcXG4gIGdyaWQtY29sdW1uOiAxLzE0O1xcbiAgZ3JpZC1yb3c6IDMwLzM2O1xcbiAgLyogYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uYm9keVBhZ2VGb3JTaG9we1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9oZWFkZXIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZToxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7ICBcXG59XFxuXFxuXFxuLnNob3BCb2R5e1xcbiAgICBncmlkLWNvbHVtbjogMS8xNDtcXG4gICAgZ3JpZC1yb3c6IDUvMzA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaG9wU2VjdHtcXG4gICAgXFxuICAgIHdpZHRoOjgwdnc7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLnNob3BMaXN0e1xcbiAgIFxcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDE1cHg7XFxuXFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG4uc2hvcExpc3QgLml0ZW06bnRoLWNoaWxkKDMpe1xcbiAgXFxuICBkaXNwbGF5OiBub25lO1xcbiAgICBcXG59XFxuXFxuLnNob3BTZWN0IC5pdGVte1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgIFxcbiAgIFxcbn1cXG5cXG5cXG4uc2hvcFNlY3QgLml0ZW0gaW1ne1xcbiAgICB3aWR0aDogMTk1cHg7XFxuICAgIGhlaWdodDoxNTBweCA7XFxufVxcblxcbi5zaG9wU2VjdCAuaXRlbSAuaXRlbU5hbWV7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICByaWdodDogNTVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcblxcbn1cXG5cXG4uc2hvcFNlY3QgLml0ZW0gcDpsYXN0LWNoaWxke1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTVweDtcXG4gICAgcmlnaHQ6ODBweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcblxcbn1cXG5cXG4uc2hvcEJvZHkgLnByb2ZpbGVEZXRhaWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOTgpO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgbWFyZ2luLXRvcDogLTU0MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiAxMDBweDtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uc2hvcEJvZHkgLnByb2ZpbGVEZXRhaWwgLmlucHV0U2VjdCBpbnB1dHtcXG4gICAgXFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNscik7ICovXFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjI3LCAyMjcpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgICBcXG4gICAgfVxcblxcbi5zaG9wQm9keSAucHJvZmlsZURldGFpbCAuaW5wdXRTZWN0e1xcbiAgICBcXG53aWR0aDogMjAwcHg7XFxuaGVpZ2h0OiAzNHB4O1xcbi8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbmJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDIyNywgMjI3KTtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxubWFyZ2luLXRvcDogMzBweDtcXG5cXG4gICAgXFxufVxcblxcbi5zaG9wQm9keSAucHJvZmlsZURldGFpbCAuaW5wdXRTZWN0IC5JbnB1dElDT057XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvc2VhcmNoLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5wcm9maWxlRGV0YWlsIC5jaGVja0xpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4ucHJvZmlsZURldGFpbCAuY2hlY2tMaXN0IC5jaGVja1BhcmF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ucHJvZmlsZURldGFpbCAuY2hlY2tMaXN0IGgye1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDBcXG4gICAgO1xcblxcbn1cXG5cXG4uYWR2ZXJ0aXNle1xcbndpZHRoOiAyMDBweDtcXG5oZWlnaHQ6IDI0MHB4O1xcbm1hcmdpbi10b3A6IDMwcHg7XFxuYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvQmFubmVyLnBuZycpO1xcbmJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbn1cXG5cXG4ubGF0ZXN0UHJ7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ubGlzdFBye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDVweCA7XFxuXFxufVxcblxcbi5sYXRlc3RQciBpbWd7XFxuXFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5sYXRlc3RQciAubGlzdFByIHA6bGFzdC1jaGlsZHtcXG5cXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBcXG4gICBcXG4gICAgXFxufVxcbi5wcm9maWxlRGV0YWlsIC5sYXRlc3RQciBoMntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9RdW90ZXMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuXFxuLlRlc3RpbW9uaWFse1xcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gICAgZ3JpZC1yb3c6IDU0LzYwO1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgXFxuICAgXFxufVxcblxcblxcbi5UZXN0aW1vbmlhbCBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4OztcXG4gICAgXFxufVxcblxcbi5UZXN0aW1vbmlhbCBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW46IDBweCAzNXB4O1xcbn1cXG5cXG4udGVzdGltb25pYWxDYXJkU2VjdHtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgXFxufVxcblxcbi50ZXN0aW1vbmlhbENhcmRze1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1cHg7XFxuICAgIFxcbn1cXG5cXG4udGVzdGltb25pYWxDYXJkcyBwOm50aC1jaGlsZCgyKXtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMzIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5kZXNpZ257XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6bGlnaHRlcjtcXG5cXG4gICAgXFxufVxcblxcbi50ZXN0aW1vbmlhbENhcmRzIHA6bnRoLWNoaWxkKDQpe1xcblxcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIFxcbn1cXG5cXG4ucHJvZmlsZSB7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0zMHB4XFxuO1xcblxcbn1cXG5cXG4udGVzdGltb25pYWxHcmVlbntcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBsZWZ0OiA1ODBweDtcXG59XFxuXFxuLnN0YXJTZWN0e1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5zdGFyU2VjdCBpbWd7XFxuICAgIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4udGVzdGltb25pYWxDYXJkU2VjdCAuU2xpZGVyRG90IHtcXG53aWR0aDogMTUwcHg7XFxuaGVpZ2h0OiAzMHB4O1xcbi8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG5tYXJnaW4tdG9wOiAyMHB4O1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5nYXA6IDVweDtcXG5cXG59XFxuXFxuLlNsaWRlckRvdCA+IGRpdjpmaXJzdC1jaGlsZHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5TbGlkZXJEb3QgPiBkaXZ7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBvcGFjaXR5OiAuNDtcXG59XFxuXFxuLmdyYXNzQ29ybmVySW1ne1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGxlZnQ6IC01MHB4O1xcbiAgICB0b3A6IDMzMDBweDtcXG4gICAgXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdGVzdGltb25pYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLHNCQUFzQjs7O0FBRzFCOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5REFBNkM7SUFDN0MsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLG1CQUFtQjs7O0FBR3ZCOztBQUVBOztJQUVJLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLFdBQVc7O0lBRVgsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaLDBDQUEwQztBQUMxQyxnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsUUFBUTs7QUFFUjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVzs7QUFFZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG5cXG4uVGVzdGltb25pYWx7XFxuICAgIGdyaWQtY29sdW1uOiAyLzExO1xcbiAgICBncmlkLXJvdzogNTQvNjA7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBcXG4gICBcXG59XFxuXFxuXFxuLlRlc3RpbW9uaWFsIGgye1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IFZpYmVzJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7O1xcbiAgICBcXG59XFxuXFxuLlRlc3RpbW9uaWFsIGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbjogMHB4IDM1cHg7XFxufVxcblxcbi50ZXN0aW1vbmlhbENhcmRTZWN0e1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICBcXG59XFxuXFxuLnRlc3RpbW9uaWFsQ2FyZHN7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAyMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL1F1b3Rlcy5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xcbiAgICBcXG59XFxuXFxuLnRlc3RpbW9uaWFsQ2FyZHMgcDpudGgtY2hpbGQoMil7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4uZGVzaWdue1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XFxuXFxuICAgIFxcbn1cXG5cXG4udGVzdGltb25pYWxDYXJkcyBwOm50aC1jaGlsZCg0KXtcXG5cXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBcXG59XFxuXFxuLnByb2ZpbGUge1xcbiAgICB3aWR0aDogNzBweDtcXG4gXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMzBweFxcbjtcXG5cXG59XFxuXFxuLnRlc3RpbW9uaWFsR3JlZW57XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgbGVmdDogNTgwcHg7XFxufVxcblxcbi5zdGFyU2VjdHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uc3RhclNlY3QgaW1ne1xcbiAgICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnRlc3RpbW9uaWFsQ2FyZFNlY3QgLlNsaWRlckRvdCB7XFxud2lkdGg6IDE1MHB4O1xcbmhlaWdodDogMzBweDtcXG4vKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxubWFyZ2luLXRvcDogMjBweDtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuZ2FwOiA1cHg7XFxuXFxufVxcblxcbi5TbGlkZXJEb3QgPiBkaXY6Zmlyc3QtY2hpbGR7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uU2xpZGVyRG90ID4gZGl2e1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgb3BhY2l0eTogLjQ7XFxufVxcblxcbi5ncmFzc0Nvcm5lckltZ3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBsZWZ0OiAtNTBweDtcXG4gICAgdG9wOiAzMzAwcHg7XFxuICAgIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG46cm9vdHtcXG4gICAgLS1ibGFjay1iZy1jbHI6cmdiYSgwLCAwLCAwLCA3MDApO1xcbiAgICAtLXdoaXRlLWNscjojRkZGRkZGO1xcbiAgICAtLXByaW1hcnktY2xyOiNGRjlGMEQ7XFxuICAgIC0tcHJpbWFyeS1kcmstY2xyOiNlYTkwMGE7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdmFycmlhYmxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG46cm9vdHtcXG4gICAgLS1ibGFjay1iZy1jbHI6cmdiYSgwLCAwLCAwLCA3MDApO1xcbiAgICAtLXdoaXRlLWNscjojRkZGRkZGO1xcbiAgICAtLXByaW1hcnktY2xyOiNGRjlGMEQ7XFxuICAgIC0tcHJpbWFyeS1kcmstY2xyOiNlYTkwMGE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9oZWFkZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tIFwiLi9tb2R1bGVzL2hvbWVcIjtcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gXCIuL21vZHVsZXMvZm9vdGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVBYm91dFVzIH0gZnJvbSBcIi4vbW9kdWxlcy9hYm91dFVzXCI7XG5pbXBvcnQgeyBjcmVhdGVGb29kQ2F0IH0gZnJvbSBcIi4vbW9kdWxlcy9mb29kQ2F0XCI7XG5pbXBvcnQgeyBjcmVhdGVXaHlDaG9vc2UgfSBmcm9tIFwiLi9tb2R1bGVzL3doeUNob29zZVwiO1xuaW1wb3J0IHsgY3JlYXRlUmVzdHJhdUluZm8gfSBmcm9tIFwiLi9tb2R1bGVzL3Jlc3RyYXVJbmZvU2VjdFwiO1xuaW1wb3J0IHtjcmVhdGVGcm9tTWVudSB9IGZyb20gJy4vbW9kdWxlcy9mcm9tTWVudSdcbmltcG9ydCB7IGNyZWF0ZVRlc3RpbW9uaWFsIH0gZnJvbSBcIi4vbW9kdWxlcy90ZXN0aW1vbmlhbFwiO1xuaW1wb3J0IHsgY3JlYXRlUmVzdHJhdUFjdGl2ZSB9IGZyb20gXCIuL21vZHVsZXMvcmVzdHJhdUFjdGl2ZVwiO1xuaW1wb3J0IHsgY3JlYXRlU2hvcCB9IGZyb20gJy4vbW9kdWxlcy9zaG9wJ1xuaW1wb3J0ICcuL2Nzcy9tYWluLmNzcydcbmltcG9ydCB7IGNyZWF0ZU91ckNoZWYgfSBmcm9tIFwiLi9tb2R1bGVzL291ckNoZWZcIjtcbmltcG9ydCB7Y3JlYXRlQmxvZ30gICBmcm9tICcuL21vZHVsZXMvYmxvZydcbmV4cG9ydCAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEFsbGhvbWVDb21wb25lbnRzKCl7XG5jb250ZW50LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuY29udGVudC5jbGFzc05hbWU9J2NvbnRlbnQnXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5ib2R5LmNsYXNzTmFtZT0nYm9keSdcbmNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZD0nYmxhY2snXG5jb250ZW50LnN0eWxlLm9wYWNpdHk9JzAuOCdcblxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXNGcm9tRGlzcGxheSgpIHtcbiAgICAgICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9fVxuXG5cbnJlbW92ZUFsbENoaWxkTm9kZXNGcm9tRGlzcGxheSgpXG5jcmVhdGVIZWFkZXIoKTtcbmNyZWF0ZUhvbWUoKVxuY3JlYXRlQWJvdXRVcygpXG5jcmVhdGVGb29kQ2F0KClcbmNyZWF0ZVdoeUNob29zZSgpXG5jcmVhdGVSZXN0cmF1SW5mbygpXG5jcmVhdGVGcm9tTWVudSgpXG5jcmVhdGVPdXJDaGVmKClcbmNyZWF0ZVRlc3RpbW9uaWFsKClcbmNyZWF0ZVJlc3RyYXVBY3RpdmUoKVxuY3JlYXRlQmxvZygpXG5jcmVhdGVGb290ZXIoKTtcblxuXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKVxuZm9vdGVyLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuZm9vdGVyLmNsYXNzTmFtZT0nZm9vdGVyJ1xuXG59XG5cbmxvYWRBbGxob21lQ29tcG9uZW50cygpIiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiXG5pbXBvcnQgeyBhYm91dEltZyB9IGZyb20gXCIuL2ltYWdlc1wiXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWJvdXRVcygpe1xuXG5cbiAgICBjb25zdCBhYm91dFVzU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXRVc1NlY3QuY2xhc3NOYW1lPSdhYm91dFVzU2VjdE1haW4nXG5cbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgVGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGNvbnN0IFRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBUaXRsZTEudGV4dENvbnRlbnQ9J0Fib3V0IHVzJ1xuICAgIFRpdGxlMi5pbm5lckhUTUw9JzxzcGFuPldlPC9zcGFuPiBDcmVhdGUgVGhlIEJlc3QgZm9vZHkgcHJvZHVjdCdcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYS50ZXh0Q29udGVudD0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBkaWFtIHBlbGxlbnRlc3F1ZSBiaWJlbmR1bSBub24gZHVpIHZvbHV0cGF0IGZyaW5naWxsYSBiaWJlbmR1bS4gVXJuYSwgZWxpdCBhdWd1ZSB1cm5hLCB2aXRhZSBmZXVnaWF0IHByZXRpdW0gZG9uZWMgaWQgZWxlbWVudHVtLiBVbHRyaWNlcyBtYXR0aXMgc2VkIHZpdGFlIG11cyByaXN1cy4gTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyBzaXQgZXUgdmVsaXQgaW4gY29uc2VxdWF0LidcblxuICAgIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhYm91dEJ0bi50ZXh0Q29udGVudD0nUmVhZCBNb3JlJyAgXG4gICAgXG4gICAgY29uc3QgYWJvdXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIGNvbnN0IGxpc3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpc3QxLnRleHRDb250ZW50PScgTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyBzaXQgZXUgdmVsaXQgaW4gY29uc2VxdWF0LidcbiAgICBjb25zdCBsaXN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaXN0Mi50ZXh0Q29udGVudD0nIFF1aXNxdWUgZGlhbSBwZWxsZW50ZXNxdWUgYmliZW5kdW0gbm9uIGR1aSB2b2x1dHBhdCBmcmluZ2lsbGEgJ1xuICAgIGNvbnN0IGxpc3QzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpc3QzLnRleHRDb250ZW50PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0J1xuXG4gICAgYWJvdXRMaXN0LmFwcGVuZENoaWxkKGxpc3QxKVxuICAgIGFib3V0TGlzdC5hcHBlbmRDaGlsZChsaXN0MilcbiAgICBhYm91dExpc3QuYXBwZW5kQ2hpbGQobGlzdDMpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoVGl0bGUxKVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKFRpdGxlMilcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChwYXJhKVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0TGlzdClcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dEJ0bilcblxuICAgIFxuXG5cblxuXG4gICAgY29uc3QgbWVkaWFTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhYm91dEltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGFib3V0SW1nMS5zcmM9YWJvdXRJbWdbMF1cbiAgICBjb25zdCBhYm91dEltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGFib3V0SW1nMi5zcmM9YWJvdXRJbWdbMV1cbiAgICBjb25zdCBhYm91dEltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGFib3V0SW1nMy5zcmM9YWJvdXRJbWdbMl1cblxuXG4gICAgbWVkaWFTZWN0LmFwcGVuZENoaWxkKGFib3V0SW1nMSlcbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQoYWJvdXRJbWcyKVxuICAgIG1lZGlhU2VjdC5hcHBlbmRDaGlsZChhYm91dEltZzMpXG5cblxuXG4gICAgYWJvdXRVc1NlY3QuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpXG4gICAgYWJvdXRVc1NlY3QuYXBwZW5kQ2hpbGQobWVkaWFTZWN0KVxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRVc1NlY3QpXG5cblxuXG5cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBibG9nSW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCbG9nKCl7XG5cbmNvbnN0IGJsb2dTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmJsb2dTZWN0LmNsYXNzTmFtZT0nYmxvZ1NlY3QnXG5jb25zdCB0aXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG50aXRsZTEudGV4dENvbnRlbnQ9J0Jsb2cgUG9zdCdcbmNvbnN0IHRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbnRpdGxlMi5pbm5lckhUTUw9JzxzcGFuPkxhdDwvc3Bhbj5lc3QgTmV3cyAmIEJsb2cnXG5cbmNvbnN0IGJsb2dDYXJkU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5ibG9nQ2FyZFNlY3QuY2xhc3NOYW1lPSdibG9nQ2FyZFNlY3QnXG5cbmNyZWF0ZUJsb2dDYXJkKGJsb2dJbWdbMF0sJ1BlbGxlbnRlc3F1ZSBOb24gRWZmaWNpdHVyIE1pIEFsaXF1YW0gQ29udmFsbGlzIE1pIFF1aXMnKVxuY3JlYXRlQmxvZ0NhcmQoYmxvZ0ltZ1sxXSwnUGVsbGVudGVzcXVlIE5vbiBFZmZpY2l0dXIgTWkgQWxpcXVhbSBDb252YWxsaXMgTWkgUXVpcycpXG5jcmVhdGVCbG9nQ2FyZChibG9nSW1nWzJdLCdQZWxsZW50ZXNxdWUgTm9uIEVmZmljaXR1ciBNaSBBbGlxdWFtIENvbnZhbGxpcyBNaSBRdWlzJylcblxuZnVuY3Rpb24gY3JlYXRlQmxvZ0NhcmQoQkxPR2ltZyxkZXNjcmlwdGlvbil7XG4gICAgbGV0IGJsb2dDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBibG9nQ2FyZC5jbGFzc05hbWU9J2Jsb2dDYXJkJ1xuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5zcmMgPSBCTE9HaW1nXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkYXRlLnRleHRDb250ZW50PSAnMTAgRmViIDIwMjInXG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkZXNjLnRleHRDb250ZW50PWRlc2NyaXB0aW9uXG4gICAgbGV0IGxlYXJuTW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGxlYXJuTW9yZS50ZXh0Q29udGVudD0nTGVhcm4gTW9yZSdcbiAgICBsZXQgaWNvblNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGljb25TZWN0LmNsYXNzTmFtZT0naWNvblNlY3QnXG4gICAgXG4gICAgbGV0IGxpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGxpa2Uuc3JjID0gYmxvZ0ltZ1szXVxuICAgIGxldCBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBjb21tZW50LnNyYyA9IGJsb2dJbWdbNF1cbiAgICBsZXQgc2hhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHNoYXJlLnNyYyA9IGJsb2dJbWdbNV1cbiAgICBcbiAgICBpY29uU2VjdC5hcHBlbmRDaGlsZChsaWtlKVxuICAgIGljb25TZWN0LmFwcGVuZENoaWxkKGNvbW1lbnQpXG4gICAgaWNvblNlY3QuYXBwZW5kQ2hpbGQoc2hhcmUpXG5cbiAgICBibG9nQ2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgYmxvZ0NhcmQuYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgICBibG9nQ2FyZC5hcHBlbmRDaGlsZChkZXNjKVxuICAgIGJsb2dDYXJkLmFwcGVuZENoaWxkKGxlYXJuTW9yZSlcbiAgICBibG9nQ2FyZC5hcHBlbmRDaGlsZChpY29uU2VjdClcbiAgICBibG9nQ2FyZFNlY3QuYXBwZW5kQ2hpbGQoYmxvZ0NhcmQpXG4gICAgXG59XG5cblxuYmxvZ1NlY3QuYXBwZW5kQ2hpbGQodGl0bGUxKVxuYmxvZ1NlY3QuYXBwZW5kQ2hpbGQodGl0bGUyKVxuYmxvZ1NlY3QuYXBwZW5kQ2hpbGQoYmxvZ0NhcmRTZWN0KVxuY29udGVudC5hcHBlbmRDaGlsZChibG9nU2VjdClcblxuXG5cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBibG9nSW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gXCIuL21lbnVQYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVQYWdlSGVhZGVyIH0gZnJvbSBcIi4vcGFnZUhlYWRlclwiO1xuaW1wb3J0IHsgYmxvZ0ltZ0NhcmQgfSBmcm9tIFwiLi9pbWFnZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJsb2dQYWdlKCl7XG5cbiAgICAgXG4gICAgY3JlYXRlUGFnZUhlYWRlcignQmxvZycsJ0Jsb2cgTGlzdCcpXG4gICAgICAgIGNvbnN0IG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vbmUnKVxuICAgICAgICBcbi8vICAgICAgICAgcmVtb3ZlQ2hpbGRGcm9tTWVudVBhZ2UoKVxuLy8gICAgIGZ1bmN0aW9uIHJlbW92ZUNoaWxkRnJvbU1lbnVQYWdlKCl7XG4gICAgICAgXG4vLyAgICAgY29uc3QgbWVudUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUJvZHknKVxuLy8gICAgIHdoaWxlIChvbmUuZmlyc3RDaGlsZCkge1xuLy8gLy8gICAgICAgICBvbmUucmVtb3ZlQ2hpbGQob25lLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgXG4vLyAvLyAgfVxuXG5cbi8vICAgICB3aGlsZSAobWVudUJvZHkuZmlyc3RDaGlsZCkge1xuLy8gICAgICAgIG1lbnVCb2R5LnJlbW92ZUNoaWxkKG1lbnVCb2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICBcbi8vIH1cbi8vICAgICB9XG4gICAgXG4gICAgLy8gYmxvZyBjcmVhdGlvblxuICAgIGNvbnN0IG1lbnVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLk1lbnVCb2R5JylcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwYWdlTnVtYmVyLmNsYXNzTmFtZT0ncGFnZU51bWJlcidcbiAgICBjb25zdCBmb3J3YXJkID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IE9uZSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGJhY2t3YXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBiV2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZldhcmRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZldhcmRQLnRleHRDb250ZW50PSc8PCdcbiAgICBjb25zdCBvbmVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgb25lcC50ZXh0Q29udGVudD0nMSdcbiAgICBjb25zdCB0d29wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdHdvcC50ZXh0Q29udGVudD0nMidcbiAgICBjb25zdCB0aHJlZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0aHJlZXAudGV4dENvbnRlbnQ9JzMnXG4gICAgY29uc3QgYldhcmRwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgXG4gICAgZm9yd2FyZC5hcHBlbmRDaGlsZChmV2FyZFApXG4gICAgT25lLmFwcGVuZENoaWxkKG9uZXApXG4gICAgYmFja3dhcmQuYXBwZW5kQ2hpbGQodGhyZWVwKVxuICAgIFRocmVlLmFwcGVuZENoaWxkKHR3b3ApXG4gICAgYldhcmQuYXBwZW5kQ2hpbGQoYldhcmRwKVxuXG4gICAgYldhcmQudGV4dENvbnRlbnQ9Jz4+J1xuICAgIHBhZ2VOdW1iZXIuYXBwZW5kQ2hpbGQoZm9yd2FyZClcblxuICAgIHBhZ2VOdW1iZXIuYXBwZW5kQ2hpbGQoT25lKVxuICAgIHBhZ2VOdW1iZXIuYXBwZW5kQ2hpbGQoVHdvKVxuICAgIFxuICAgIHBhZ2VOdW1iZXIuYXBwZW5kQ2hpbGQoVGhyZWUpXG4gICAgcGFnZU51bWJlci5hcHBlbmRDaGlsZChiYWNrd2FyZClcbiAgICBwYWdlTnVtYmVyLmFwcGVuZENoaWxkKGJXYXJkKVxuXG5cbiAgICBjb25zdCBibG9nU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYmxvZ1NlY3QuY2xhc3NOYW1lPSdibG9nU2VjdFBhZ2UnXG5cbiAgICBjb25zdCBibG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBibG9nLmNsYXNzTmFtZT0nYmxvZ1BhZ2UnXG4gICAgXG4gICAgY29uc3QgcHJvZmlsZURldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvZmlsZURldGFpbC5jbGFzc05hbWU9J3Byb2ZpbGVEZXRhaWwnXG5cbiAgICBtZW51Qm9keS5hcHBlbmRDaGlsZChibG9nU2VjdClcbiAgICBibG9nU2VjdC5hcHBlbmRDaGlsZChibG9nKTtcbiAgICBibG9nU2VjdC5hcHBlbmRDaGlsZChwcm9maWxlRGV0YWlsKTtcbiAgIFxuICAgXG4gICAgY3JlYXRlQmxvZ0NhcmRzKGJsb2dJbWdbMF0sJzEwIFJlYXNvbnMgVG8gRG8gQSBEaWdpdGFsIERldG94IENoYWxsZW5nZScpXG4gICAgY3JlYXRlQmxvZ0NhcmRzKGJsb2dJbWdbMV0sJ1RyYWRpdGlvbmFsIFNvZnQgUHJldHplbHMgd2l0aCBTd2VldCBCZWVyIENoZWVzZScpXG4gICAgY3JlYXRlQmxvZ0NhcmRzKGJsb2dJbWdbMl0sJ1RoZSBVbHRpbWF0ZSBIYW5nb3ZlciBCdXJnZXI6IEVnZyBpbiBhIEhvbGUgQnVyZ2VyJylcbiAgICBjcmVhdGVCbG9nQ2FyZHMoYmxvZ0ltZ1swXSwnTXkgRmF2b3JpdGUgRWFzeSBCbGFjayBQaXp6YSBUb2FzdCBSZWNpcGUnKVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJsb2dDYXJkcyhJTUcsdGl0bGUpe1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2FyZC5jbGFzc05hbWU9J2NhcmQnXG5cbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgaW1nLmNsYXNzTmFtZT0naW1nT2ZCbG9nJ1xuICAgICAgICBpbWcuc3JjID0gSU1HXG5cbiAgICAgICAgY29uc3QgZGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGV0YWlsLmNsYXNzTmFtZT0nZGV0YWlsJ1xuICAgICAgICBjb25zdCBkYXRlID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRhdGUuY2xhc3NOYW1lPSdkYXRlJ1xuICAgICAgICBjb25zdCBkYXRlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBcbiAgICAgICAgZGF0ZVAudGV4dENvbnRlbnQ9J0ZFQiAxNCwyMDIyIC8nXG4gICAgICAgIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1zZy5jbGFzc05hbWU9J21zZydcbiAgICAgICAgY29uc3QgbXNoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBtc2hQLnRleHRDb250ZW50ID0gJzMvJ1xuICAgICAgICBjb25zdCBBZG1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIEFkbWluLmNsYXNzTmFtZT0nQWRtaW4nXG4gICAgICAgIGNvbnN0IEFkbWluUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBBZG1pblAudGV4dENvbnRlbnQ9J0FkbWluJ1xuICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0ZXh0Q29udGVudC5jbGFzc05hbWU9J1RleHRjb250ZW50QmxvZydcblxuICAgICAgICBjb25zdCBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBUaXRsZS50ZXh0Q29udGVudD10aXRsZVxuICAgICAgICBjb25zdCBwYXJhQmxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBwYXJhQmxvZy50ZXh0Q29udGVudD0nQXQgdmVybyBlb3MgZXQgYWNjdXNhbSBldCBqdXN0byBkdW8gZG9sb3JlcyBldCBlYSByZWJ1bS4gU3RldCBjbGl0YSBrYXNkIGd1YmVyZ3Jlbiwgbm8gc2VhIHRha2ltYXRhIHNhbmN0dXMgZXN0IExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbSBub251bXkgZWlybW9kIHRlbXBvciBpbnZpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1eWFtIGVyYXQnXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudD0nUmVhZCBNb3JlJ1xuXG4gICAgICAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChUaXRsZSlcbiAgICAgICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKHBhcmFCbG9nKVxuICAgICAgICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuXG5cbiAgICAgICAgZGF0ZS5hcHBlbmRDaGlsZChkYXRlUClcbiAgICAgICAgbXNnLmFwcGVuZENoaWxkKG1zaFApXG4gICAgICAgIEFkbWluLmFwcGVuZENoaWxkKEFkbWluUClcblxuICAgICAgICBkZXRhaWwuYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgICAgICAgZGV0YWlsLmFwcGVuZENoaWxkKG1zZylcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChBZG1pbilcblxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZXRhaWwpXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpXG4gICAgICAgIGJsb2cuYXBwZW5kQ2hpbGQoY2FyZClcbiAgICB9XG5cbiAgICBibG9nU2VjdC5hcHBlbmRDaGlsZChwYWdlTnVtYmVyKVxuXG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb29kQ2F0KCl7XG5cbiAgICBjb25zdCBGb29kQ2F0U2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgRm9vZENhdFNlY3QuY2xhc3NOYW1lPSdGb29kQ2F0U2VjdCdcbiAgICBjb25zdCBzaWRlR3Jhc3NJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHNpZGVHcmFzc0ltZy5jbGFzc05hbWU9J3NpZGVHcmFzc0ltZydcbiAgICBzaWRlR3Jhc3NJbWcuc3JjPUNhdGVnb3J5SW1nWzRdXG4gICAgY29uc3QgQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IFRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBUaXRsZTEudGV4dENvbnRlbnQ9J0Zvb2QgQ2F0ZWdvcnknXG4gICAgY29uc3QgVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIFRpdGxlMi5pbm5lckhUTUw9JzxzcGFuPkNoPC9zcGFuPm9vc2UgRm9vZCBJdGVtJ1xuXG4gICAgY29uc3QgZGlzY291bnRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGRpc2NvdW50VGFnUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRpc2NvdW50VGFnUC50ZXh0Q29udGVudD0nU2F2ZSAzMCUnXG4gICAgZGlzY291bnRUYWcuYXBwZW5kQ2hpbGQoZGlzY291bnRUYWdQKVxuICAgIGNvbnN0IGRpc2NvdW50VGFnMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZGlzY291bnRUYWdQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRpc2NvdW50VGFnUDIudGV4dENvbnRlbnQ9J0Zhc3QgRm9vZCBEaXNoJ1xuICAgIGRpc2NvdW50VGFnMi5hcHBlbmRDaGlsZChkaXNjb3VudFRhZ1AyKVxuICAgIEZvb2RDYXRTZWN0LmFwcGVuZENoaWxkKHNpZGVHcmFzc0ltZylcbiAgICBGb29kQ2F0U2VjdC5hcHBlbmRDaGlsZChkaXNjb3VudFRhZylcbiAgICBGb29kQ2F0U2VjdC5hcHBlbmRDaGlsZChkaXNjb3VudFRhZzIpXG4gICAgRm9vZENhdFNlY3QuYXBwZW5kQ2hpbGQoVGl0bGUxKVxuICAgIEZvb2RDYXRTZWN0LmFwcGVuZENoaWxkKFRpdGxlMilcblxuICAgIGNvbnN0IENhdGVnb3J5SW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgQ2F0ZWdvcnlJbWcxLnNyYz1DYXRlZ29yeUltZ1sxXVxuICAgIGNvbnN0IENhdGVnb3J5SW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgQ2F0ZWdvcnlJbWcyLnNyYz1DYXRlZ29yeUltZ1swXVxuICAgIGNvbnN0IENhdGVnb3J5SW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgQ2F0ZWdvcnlJbWczLnNyYz1DYXRlZ29yeUltZ1syXVxuICAgIGNvbnN0IENhdGVnb3J5SW1nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgQ2F0ZWdvcnlJbWc0LnNyYz1DYXRlZ29yeUltZ1szXVxuICAgIFxuICAgIENhdGVnb3J5LmFwcGVuZENoaWxkKENhdGVnb3J5SW1nMSlcbiAgICBDYXRlZ29yeS5hcHBlbmRDaGlsZChDYXRlZ29yeUltZzIpXG4gICAgQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoQ2F0ZWdvcnlJbWczKVxuICAgIENhdGVnb3J5LmFwcGVuZENoaWxkKENhdGVnb3J5SW1nNClcbiBcblxuICAgIEZvb2RDYXRTZWN0LmFwcGVuZENoaWxkKENhdGVnb3J5KVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChGb29kQ2F0U2VjdClcblxuXG5cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCJcbmltcG9ydCB7IGZvb3RlckltZyB9IGZyb20gXCIuL2ltYWdlc1wiXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlciA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgIGZvb3Rlci5jbGFzc05hbWU9J2Zvb3RlcidcbiAgICBjb25zdCBncmFzc0Nvcm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZ3Jhc3NDb3JuZXIuY2xhc3NOYW1lPSdncmFzc0Nvcm5lcidcbiAgICBncmFzc0Nvcm5lci5zcmM9Zm9vdGVySW1nWzBdO1xuXG4gICAgY29uc3QgZm9vdGVyQmVsdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb290ZXJCZWx0LmNsYXNzTmFtZT0nZm9vdGVyQmVsdCdcbiAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb290ZXJDb250ZW50LmNsYXNzTmFtZT0nZm9vdGVyQ29udGVudCdcbiAgICBjb25zdCBmb290ZXJUeHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb290ZXJUeHRDb250ZW50LmNsYXNzTmFtZT0nZm9vdGVyVHh0Q29udGVudCdcblxuICAgIC8vIHJlY2VudCBwb3N0IHNlY3Rpb25cblxuICAgIGNvbnN0IHJlY2VudFBvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJlY2VudFBvc3QuY2xhc3NOYW1lPSdSY3RQb3N0J1xuICAgIGNvbnN0IHJlY2VudFBvc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICByZWNlbnRQb3N0VGl0bGUudGV4dENvbnRlbnQ9J1JlY2VudCBQb3N0J1xuXG4gICAgY29uc3QgZmlyc3RQb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBmaXJzdFBvc3RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGZpcnN0UG9zdEltZy5zcmM9Zm9vdGVySW1nWzFdXG4gICAgY29uc3QgcG9zdHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwb3N0cGFyYS50ZXh0Q29udGVudD0nMjAgRmViIDIwMjInXG4gICAgY29uc3QgcG9zdGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwb3N0ZGVzYy50ZXh0Q29udGVudD0nS2VlcCBZb3VyIEJ1c2luZXNzJ1xuXG4gICAgZmlyc3RQb3N0LmFwcGVuZENoaWxkKGZpcnN0UG9zdEltZylcblxuICAgIGNvbnN0IGZpcnN0UG9zdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGZpcnN0UG9zdEltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGZpcnN0UG9zdEltZzEuc3JjPWZvb3RlckltZ1syXVxuICAgIGNvbnN0IHBvc3RwYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBvc3RwYXJhMS50ZXh0Q29udGVudD0nMjAgRmViIDIwMjInXG4gICAgY29uc3QgcG9zdGRlc2MxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcG9zdGRlc2MxLnRleHRDb250ZW50PSdLZWVwIFlvdXIgQnVzaW5lc3MnXG5cbiAgICBmaXJzdFBvc3QxLmFwcGVuZENoaWxkKGZpcnN0UG9zdEltZzEpXG5cbiAgICBjb25zdCBmaXJzdFBvc3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBmaXJzdFBvc3RJbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBmaXJzdFBvc3RJbWcyLnNyYz1mb290ZXJJbWdbM11cbiAgICBjb25zdCBwb3N0cGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwb3N0cGFyYTIudGV4dENvbnRlbnQ9JzIwIEZlYiAyMDIyJ1xuICAgIGNvbnN0IHBvc3RkZXNjMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBvc3RkZXNjMi50ZXh0Q29udGVudD0nS2VlcCBZb3VyIEJ1c2luZXNzJ1xuXG4gICAgZmlyc3RQb3N0Mi5hcHBlbmRDaGlsZChmaXJzdFBvc3RJbWcyKVxuXG4gICAgLy8gaGVscCBzZWN0XG4gICAgXG4gICAgY29uc3QgaGVscFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhlbHBTZWN0LmNsYXNzTmFtZT0naGVscFNlY3QnXG4gICAgY29uc3QgaGVscFNlY3RUaXR0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlbHBTZWN0VGl0dGxlLnRleHRDb250ZW50PSdIZWxwPyc7XG5cbiAgICBoZWxwU2VjdC5hcHBlbmRDaGlsZChoZWxwU2VjdFRpdHRsZSk7XG5cbiAgICBjb25zdCBGYXFQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgRmFxUGFyYS50ZXh0Q29udGVudD0nRkFRJ1xuICAgIGNvbnN0IHRlcm1QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGVybVBhcmEudGV4dENvbnRlbnQ9J1Rlcm0gJiBjb25kaXRpb24nXG4gICAgY29uc3QgcmVwb3J0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHJlcG9ydFBhcmEudGV4dENvbnRlbnQ9J1JlcG9ydGluZydcbiAgICBjb25zdCBkb2N1bWVudFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBkb2N1bWVudFBhcmEudGV4dENvbnRlbnQ9J0RvY3VtZW50YXRpb24nXG4gICAgY29uc3Qgc3VwcG9ydFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzdXBwb3J0UGFyYS50ZXh0Q29udGVudD0nU3VwcG9ydCBQb2xpY3knXG4gICAgY29uc3QgUHJpdmFjeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIFByaXZhY3kudGV4dENvbnRlbnQ9J1ByaXZhY3knXG5cbiAgICBoZWxwU2VjdC5hcHBlbmRDaGlsZChGYXFQYXJhKVxuICAgIGhlbHBTZWN0LmFwcGVuZENoaWxkKHRlcm1QYXJhKVxuICAgIGhlbHBTZWN0LmFwcGVuZENoaWxkKHJlcG9ydFBhcmEpXG4gICAgaGVscFNlY3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnRQYXJhKVxuICAgIGhlbHBTZWN0LmFwcGVuZENoaWxkKHN1cHBvcnRQYXJhKVxuICAgIGhlbHBTZWN0LmFwcGVuZENoaWxkKFByaXZhY3kpXG5cblxuICAgIGNvbnN0IHVzZUZ1bGxTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB1c2VGdWxsU2VjdC5jbGFzc05hbWU9J3VzZUZ1bGxTZWN0J1xuICAgIGNvbnN0IHVzZUZ1bGxTZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdXNlRnVsbFNlY3RUaXRsZS50ZXh0Q29udGVudD0nVXNlZnVsIExpbmsnXG5cbiAgICBjb25zdCBhYm91dExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhYm91dExpbmsudGV4dENvbnRlbnQ9J0Fib3V0J1xuICAgIGNvbnN0IG5ld3NMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbmV3c0xpbmsudGV4dENvbnRlbnQ9J05ld3MnXG4gICAgY29uc3QgcGFydG5lckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwYXJ0bmVyTGluay50ZXh0Q29udGVudD0nUGFydG5lcnMnXG4gICAgY29uc3QgdGVhbUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0ZWFtTGluay50ZXh0Q29udGVudD0nVGVhbSdcbiAgICBjb25zdCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG1lbnVMaW5rLnRleHRDb250ZW50PSdNZW51J1xuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29udGFjdExpbmsudGV4dENvbnRlbnQ9J0NvbnRhY3QnXG5cbiAgICB1c2VGdWxsU2VjdC5hcHBlbmRDaGlsZCh1c2VGdWxsU2VjdFRpdGxlKVxuICAgIHVzZUZ1bGxTZWN0LmFwcGVuZENoaWxkKGFib3V0TGluaylcbiAgICB1c2VGdWxsU2VjdC5hcHBlbmRDaGlsZChuZXdzTGluaylcbiAgICB1c2VGdWxsU2VjdC5hcHBlbmRDaGlsZChwYXJ0bmVyTGluaylcbiAgICB1c2VGdWxsU2VjdC5hcHBlbmRDaGlsZCh0ZWFtTGluaylcbiAgICB1c2VGdWxsU2VjdC5hcHBlbmRDaGlsZChtZW51TGluaylcbiAgICB1c2VGdWxsU2VjdC5hcHBlbmRDaGlsZChjb250YWN0TGluaylcblxuICAgIGNvbnN0IGFib3V0VXNTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhYm91dFVzU2VjdC5jbGFzc05hbWU9J2Fib3V0VXNTZWN0J1xuXG4gICAgY29uc3Qgc3VwcG9ydFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHN1cHBvcnRTZWN0LmNsYXNzTmFtZT0nc3VwcG9ydFNlY3QnXG4gICAgY29uc3QgaW5wdXRTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBzdXBwb3J0UDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzdXBwb3J0UDEuaW5uZXJIVE1MPSc8c3Bhbj5TPC9zcGFuPnRpbGwgWW91IE5lZWQgT3VyIFN1cHBvcnQgPydcbiAgICBjb25zdCBzdXBwb3J0UDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzdXBwb3J0UDIudGV4dENvbnRlbnQ9J0RvbuKAmXQgd2FpdCBtYWtlIGEgc21hcnQgJiBsb2dpY2FsIHF1b3RlIGhlcmUuIEl0cyBwcmV0dHkgZWFzeS4nXG4gICAgY29uc3Qgc3VwcG9ydElwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBzdXBwb3J0SXB0LnBsYWNlaG9sZGVyPSdFbnRlciBZb3VyIEVtYWlsJ1xuICAgIGNvbnN0IHN1cHBvcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1cHBvcnRCdG4udGV4dENvbnRlbnQ9J1N1YmNyaWJlIE5vdydcblxuICAgIHN1cHBvcnRTZWN0LmFwcGVuZENoaWxkKHN1cHBvcnRQMSlcbiAgICBzdXBwb3J0U2VjdC5hcHBlbmRDaGlsZChzdXBwb3J0UDIpXG4gICAgc3VwcG9ydFNlY3QuYXBwZW5kQ2hpbGQoaW5wdXRTZWN0KVxuICAgIGlucHV0U2VjdC5hcHBlbmRDaGlsZChzdXBwb3J0SXB0KVxuICAgIGlucHV0U2VjdC5hcHBlbmRDaGlsZChzdXBwb3J0QnRuKVxuXG4gICAgY29uc3Qgb3BlbkhyU2VjdE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcGVuSHJTZWN0TWFpbi5jbGFzc05hbWU9J29wZW5IclNlY3RNYWluJztcbiAgICBjb25zdCBvcGVuSHJTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBvcGVuSHJTZWN0LmNsYXNzTmFtZT0nb3BlbkhyU2VjdCdcbiAgICBjb25zdCBvcGVuSHJTZWN0UDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBvcGVuSHJTZWN0UDEudGV4dENvbnRlbnQ9J09wZW5pbmcgSG91cnMnXG4gICAgY29uc3Qgb3BlbkhyU2VjdFAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgb3BlbkhyU2VjdFAyLnRleHRDb250ZW50PSdNT04gLSBTQVQoOC4wMCA2LjAwKSc7XG4gICAgY29uc3Qgb3BlbkhyU2VjdFAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgb3BlbkhyU2VjdFAzLnRleHRDb250ZW50PSdTdW5kYXkgLSBDbG9zZWQnXG5cbiAgICBjb25zdCBvcGVuSHJTZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb3BlbkhyU2VjdEljb24uY2xhc3NOYW1lPSdvcGVuSHJTZWN0SWNvbidcblxuICAgIGNvbnN0IGFib3V0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIFxuICAgIGFib3V0RGVzYy50ZXh0Q29udGVudD1gb3Jwb3JhdGUgY2xpZW50cyBhbmQgbGVpc3VyZSB0cmF2ZWxlcnMgaGFzXG4gICAgYmVlbiByZWx5aW5nIG9uIEdyb3VuZGxpbmsgZm9yIGRlcGVuZGFiXG4gICAgc2FmZSwgYW5kIHByb2Zlc3Npb25hbCBjaGF1ZmZldXJlZCBjYXJcbiAgICBzZXJ2aWNlIGluIG1ham9yIGNpdGllcyBhY3Jvc3MgV29ybGQuYFxuXG4gICAgY29uc3QgYWJvdXREZXNjVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgYWJvdXREZXNjVGl0bGUudGV4dENvbnRlbnQ9J0Fib3V0IFVzJ1xuXG4gICAgYWJvdXRVc1NlY3QuYXBwZW5kQ2hpbGQoYWJvdXREZXNjVGl0bGUpXG5cbiAgICBhYm91dFVzU2VjdC5hcHBlbmRDaGlsZChhYm91dERlc2MpXG5cbiAgICBvcGVuSHJTZWN0LmFwcGVuZENoaWxkKG9wZW5IclNlY3RQMSlcbiAgICBvcGVuSHJTZWN0LmFwcGVuZENoaWxkKG9wZW5IclNlY3RQMilcbiAgICBvcGVuSHJTZWN0LmFwcGVuZENoaWxkKG9wZW5IclNlY3RQMylcbiAgICBcbiAgICBvcGVuSHJTZWN0TWFpbi5hcHBlbmRDaGlsZChvcGVuSHJTZWN0SWNvbik7XG4gICAgb3BlbkhyU2VjdE1haW4uYXBwZW5kQ2hpbGQob3BlbkhyU2VjdCk7XG4gICAgXG4gICAgYWJvdXRVc1NlY3QuYXBwZW5kQ2hpbGQob3BlbkhyU2VjdE1haW4pO1xuXG4gICAgY29uc3Qgc29jaWFsTWVkU2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzb2NpYWxNZWRTZWMuY2xhc3NOYW1lPSdzb2NpYWxNZWRTZWMnXG4gICAgY29uc3QgY29weVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgIGNvcHlSaWdodC50ZXh0Q29udGVudD1gQ29weXJpZ2h0IEAgJHt5ZWFyfSBieSBSb25pLiBBbGwgUmlnaHRzIHJlc2VydmVkYFxuXG4gICAgY29uc3Qgc29jaWFsTWVkaWFJY29uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc29jaWFsTWVkaWFJY29uMS5jbGFzc05hbWU9J21lZGlhSWNvbidcbiAgICBjb25zdCBzb2NpYWxNZWRpYUljb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzb2NpYWxNZWRpYUljb24yLmNsYXNzTmFtZT0nbWVkaWFJY29uJ1xuICAgIGNvbnN0IHNvY2lhbE1lZGlhSWNvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNvY2lhbE1lZGlhSWNvbjMuY2xhc3NOYW1lPSdtZWRpYUljb24nXG4gICAgY29uc3Qgc29jaWFsTWVkaWFJY29uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc29jaWFsTWVkaWFJY29uNC5jbGFzc05hbWU9J21lZGlhSWNvbidcbiAgICBjb25zdCBzb2NpYWxNZWRpYUljb241ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzb2NpYWxNZWRpYUljb241LmNsYXNzTmFtZT0nbWVkaWFJY29uJ1xuXG5cbiAgIHNvY2lhbE1lZFNlYy5hcHBlbmRDaGlsZChzb2NpYWxNZWRpYUljb24xKVxuICAgc29jaWFsTWVkU2VjLmFwcGVuZENoaWxkKHNvY2lhbE1lZGlhSWNvbjIpXG4gICBzb2NpYWxNZWRTZWMuYXBwZW5kQ2hpbGQoc29jaWFsTWVkaWFJY29uMylcbiAgIHNvY2lhbE1lZFNlYy5hcHBlbmRDaGlsZChzb2NpYWxNZWRpYUljb240KVxuICAgc29jaWFsTWVkU2VjLmFwcGVuZENoaWxkKHNvY2lhbE1lZGlhSWNvbjUpXG4gICBmb290ZXJCZWx0LmFwcGVuZENoaWxkKGNvcHlSaWdodClcbiAgIGZvb3RlckJlbHQuYXBwZW5kQ2hpbGQoc29jaWFsTWVkU2VjKVxuICAgIFxuICAgZmlyc3RQb3N0LmFwcGVuZENoaWxkKHBvc3RwYXJhKVxuICAgZmlyc3RQb3N0LmFwcGVuZENoaWxkKHBvc3RkZXNjKVxuXG4gICBmaXJzdFBvc3QxLmFwcGVuZENoaWxkKHBvc3RwYXJhMSlcbiAgIGZpcnN0UG9zdDEuYXBwZW5kQ2hpbGQocG9zdGRlc2MxKVxuXG4gICBmaXJzdFBvc3QyLmFwcGVuZENoaWxkKHBvc3RwYXJhMilcbiAgIGZpcnN0UG9zdDIuYXBwZW5kQ2hpbGQocG9zdGRlc2MyKVxuICAgXG4gICByZWNlbnRQb3N0LmFwcGVuZENoaWxkKHJlY2VudFBvc3RUaXRsZSlcbiAgIHJlY2VudFBvc3QuYXBwZW5kQ2hpbGQoZmlyc3RQb3N0KVxuICAgcmVjZW50UG9zdC5hcHBlbmRDaGlsZChmaXJzdFBvc3QxKVxuICAgcmVjZW50UG9zdC5hcHBlbmRDaGlsZChmaXJzdFBvc3QyKVxuICAgXG4gICBmb290ZXJUeHRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0VXNTZWN0KVxuICAgZm9vdGVyVHh0Q29udGVudC5hcHBlbmRDaGlsZCh1c2VGdWxsU2VjdClcbiAgIGZvb3RlclR4dENvbnRlbnQuYXBwZW5kQ2hpbGQoaGVscFNlY3QpXG4gICBmb290ZXJUeHRDb250ZW50LmFwcGVuZENoaWxkKHJlY2VudFBvc3QpXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHN1cHBvcnRTZWN0KVxuICAgIGZvb3RlckNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyVHh0Q29udGVudClcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudClcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQmVsdClcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ3Jhc3NDb3JuZXIpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpXG5cblxuXG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IG1lbnVJdGVtSW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgeyBtZW51THVuY2hJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IG1lbnVEaW5uZXJJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IG1lbnVEZXNlcnRJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IG1lbnVEcmlua0ltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHttZW51U291cEltZyB9IGZyb20gJy4vaW1hZ2VzJ1xuaW1wb3J0IHsgbWVudVNuYWNrSW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGcm9tTWVudSgpe1xuXG4gICAgY29uc3QgRnJvbU1lbnVNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBGcm9tTWVudU1haW4uY2xhc3NOYW1lPSdGcm9tTWVudU1haW4nXG4gICAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudU5hdi5jbGFzc05hbWU9J25hdidcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGkxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxCcmVha2Zhc3QpXG4gICAgbGkxLnRleHRDb250ZW50PSdCcmVha2Zhc3QnXG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbHVuY2gpXG4gICAgbGkyLnRleHRDb250ZW50PSdMdW5jaCdcbiAgICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGkzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxEaW5uZXIpXG4gICAgbGkzLnRleHRDb250ZW50PSdEaW5uZXInXG4gICAgY29uc3QgbGk0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpNC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRGVzc2VydClcbiAgICBsaTQudGV4dENvbnRlbnQ9J0Rlc3NlcnQnXG4gICAgY29uc3QgbGk1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpNS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsRHJpbmspXG4gICAgbGk1LnRleHRDb250ZW50PSdEcmluaydcbiAgICBjb25zdCBsaTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGk2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxTbmFjaylcbiAgICBsaTYudGV4dENvbnRlbnQ9J1NuYWNrJ1xuICAgIGNvbnN0IGxpNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaTcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFN1b3BzKVxuICAgIGxpNy50ZXh0Q29udGVudD0nU3VvcHMnXG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaTEpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkyKVxuICAgIHVsLmFwcGVuZENoaWxkKGxpMylcbiAgICB1bC5hcHBlbmRDaGlsZChsaTQpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGk1KVxuICAgIHVsLmFwcGVuZENoaWxkKGxpNilcbiAgICB1bC5hcHBlbmRDaGlsZChsaTcpXG5cbiAgICBtZW51TmF2LmFwcGVuZENoaWxkKHVsKVxuICAgIGNvbnN0IG1lbnVMaXN0U2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUxpc3RTZWN0LmNsYXNzTmFtZT0nbWVudUxpc3RTZWN0J1xuICAgIGNvbnN0IGRpc3BsYXlEaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXNwbGF5RGlzaC5jbGFzc05hbWU9J2Rpc3BsYXlEaXNoJ1xuICAgIGNvbnN0IGRpc3BsYXlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGRpc3BsYXlJbWcuc3JjPW1lbnVJdGVtSW1nWzFdXG5cbiAgICBkaXNwbGF5RGlzaC5hcHBlbmRDaGlsZChkaXNwbGF5SW1nKVxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnUuY2xhc3NOYW1lPSdtZW51U2VjdCdcblxuICAgIGNvbnN0IG1lbnVVbCA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIFxuICAgICBCcmVha2Zhc3QoKVxuXG5cbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVVbClcbiAgICBtZW51TGlzdFNlY3QuYXBwZW5kQ2hpbGQoZGlzcGxheURpc2gpXG4gICAgbWVudUxpc3RTZWN0LmFwcGVuZENoaWxkKG1lbnUpXG5cbiAgICBjb25zdCBUaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgVGl0bGUxLnRleHRDb250ZW50PSdDaG9vc2UgJiBwaWNrJ1xuICAgIGNvbnN0IFRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBUaXRsZTIuaW5uZXJIVE1MPSc8c3Bhbj5Gcjwvc3Bhbj5vbSBPdXIgTWVudSdcblxuICAgIFxuICAgIEZyb21NZW51TWFpbi5hcHBlbmRDaGlsZChUaXRsZTEpXG4gICAgRnJvbU1lbnVNYWluLmFwcGVuZENoaWxkKFRpdGxlMilcbiAgICBGcm9tTWVudU1haW4uYXBwZW5kQ2hpbGQobWVudU5hdilcbiAgICBGcm9tTWVudU1haW4uYXBwZW5kQ2hpbGQobWVudUxpc3RTZWN0KVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRnJvbU1lbnVNYWluKVxuXG4gICAgZnVuY3Rpb24gQnJlYWtmYXN0KCl7XG5cbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcygpXG4gICAgICAgIGZvb2RJdGVtKG1lbnVJdGVtSW1nWzBdLCdTb3lhIERlZXAuJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVJdGVtSW1nWzFdLCdGcmVzaCBCcmVha2Zhc3QnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxNC41JCcpXG4gICAgZm9vZEl0ZW0obWVudUl0ZW1JbWdbMl0sJ01pbGQgQnV0dGVyJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVJdGVtSW1nWzNdLCdGcmVzaCBCcmVhZCcsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51SXRlbUltZ1s0XSwnR2xvdyBDaGVlc2UnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxNC41JCcpXG4gICAgZm9vZEl0ZW0obWVudUl0ZW1JbWdbNV0sJ0l0YWxpYW4gUGl6emEnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudUl0ZW1JbWdbNl0sJ1NsbGljZSBCZWVmJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTQkJylcbiAgICBmb29kSXRlbShtZW51SXRlbUltZ1s3XSwnTXVzaGFvbSBQaXp6YScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzExLjUkJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsdW5jaCgpe1xuXG5cbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcygpXG4gICAgICAgIGZvb2RJdGVtKG1lbnVMdW5jaEltZ1swXSwnS29rYW4gVGhhbGknLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudUx1bmNoSW1nWzFdLCdwYW5lZXIgTWFzYWxhJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTQuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVMdW5jaEltZ1syXSwnSmVlcmEgUmljZScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51THVuY2hJbWdbM10sJ1B1bGF2JywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVMdW5jaEltZ1s0XSwnVHVrZGEgUGFuZWVyJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTQuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVMdW5jaEltZ1s1XSwnSXRhbGlhbiBQaXp6YScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiBcbiAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIERpbm5lcigpe1xuXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoKVxuICAgICAgICBmb29kSXRlbShtZW51RGlubmVySW1nWzBdLCdCYWh1YmFsaSBUaGFsaScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51RGlubmVySW1nWzFdLCdTaGFoaSBQYWt2YW4nLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxNC41JCcpXG4gICAgZm9vZEl0ZW0obWVudURpbm5lckltZ1syXSwnRGFyYmFyaSBUaGFsaScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51RGlubmVySW1nWzNdLCdQdXJpIEJoYWppJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVEaW5uZXJJbWdbNF0sJ0NoaWNrZW4gS29mdGEnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxNC41JCcpXG4gICAgZm9vZEl0ZW0obWVudURpbm5lckltZ1s1XSwnSHVsayBUaGFsaScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIERlc3NlcnQoKXtcblxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKClcbiAgICAgICAgZm9vZEl0ZW0obWVudURlc2VydEltZ1swXSwnRnJlbmNoIFB1ZGRpbmcnLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudURlc2VydEltZ1sxXSwnWW9naHVydCcsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzE0LjUkJylcbiAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBEcmluaygpe1xuXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoKVxuICAgICAgICBmb29kSXRlbShtZW51RHJpbmtJbWdbMF0sJ0ZydWl0IE1peCcsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51RHJpbmtJbWdbMV0sJ0d1bGFiIFNoYXJiYXQnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxNC41JCcpXG4gICAgZm9vZEl0ZW0obWVudURyaW5rSW1nWzJdLCdSdWFwamEnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU25hY2soKXtcblxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKClcbiAgICAgICAgZm9vZEl0ZW0obWVudVNuYWNrSW1nWzBdLCdNaXggTnV0JywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVTbmFja0ltZ1sxXSwnU2FsdGVkIFBlYW51dCcsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzE0LjUkJylcbiAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIFN1b3BzKCl7XG5cbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcygpXG4gICAgICAgIGZvb2RJdGVtKG1lbnVTb3VwSW1nWzBdLCdNYWNoYXUgU291cCcsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51U291cEltZ1sxXSwnQ2hpbmVlc2UgU291cCcsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzE0LjUkJylcbiAgICBmb29kSXRlbShtZW51U291cEltZ1syXSwnVmVnaSBTb3VwJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgXG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvb2RJdGVtKGltZyxOYW1lLGRlc2MscHJpY2Upe1xuICAgICAgICBsZXQgZm9vZEl0ZW1MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgbGlgKVxuICAgICAgICBsZXQgZm9vZEl0ZW1TZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbGV0IGZvb2RJdGVtSW1nU2VjdCA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZm9vZEl0ZW1JbWdTZWN0LmNsYXNzTmFtZT0nZm9vZEl0ZW1JbWdTZWN0J1xuICAgICAgICBsZXQgbGlzdFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgIGxldCBmb29kSXRlbUltZyA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgZm9vZEl0ZW1JbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRpc3BsYXlJdGVtSW1nKVxuICAgICAgICBmb29kSXRlbUltZy5zcmMgPSBpbWdcbiAgICAgICAgZm9vZEl0ZW1JbWdTZWN0LmFwcGVuZENoaWxkKGZvb2RJdGVtSW1nKVxuICAgICAgICBsZXQgZm9vZEl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGZvb2RJdGVtTmFtZS50ZXh0Q29udGVudD1OYW1lXG4gICAgICAgIGxldCBmb29kSXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgZm9vZEl0ZW1EZXNjLnRleHRDb250ZW50PWRlc2NcbiAgICAgICAgbGV0IGZvb2RJdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgZm9vZEl0ZW1QcmljZS50ZXh0Q29udGVudD1wcmljZVxuXG4gICAgICAgIFxuICAgICAgICBsaXN0UGFyYS5hcHBlbmRDaGlsZChmb29kSXRlbU5hbWUpXG4gICAgICAgIGxpc3RQYXJhLmFwcGVuZENoaWxkKGZvb2RJdGVtRGVzYylcbiAgICAgICAgbGlzdFBhcmEuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1QcmljZSlcbiAgICAgICAgZm9vZEl0ZW1MaXN0LmFwcGVuZENoaWxkKGZvb2RJdGVtSW1nU2VjdClcbiAgICAgICAgZm9vZEl0ZW1MaXN0LmFwcGVuZENoaWxkKGxpc3RQYXJhKVxuXG4gICAgICAgIG1lbnVVbC5hcHBlbmRDaGlsZChmb29kSXRlbUxpc3QpXG4gICAgXG4gICAgICAgIH1cblxuZnVuY3Rpb24gZGlzcGxheUl0ZW1JbWcoZXZlbnQpe1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXNGcm9tRGlzcGxheSgpXG4gICAgbGV0IGltZ0ZvckRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZ0ZvckRpc3BsYXkuc3JjPWV2ZW50LnRhcmdldC5zcmNcbiAgICBkaXNwbGF5RGlzaC5hcHBlbmRDaGlsZChpbWdGb3JEaXNwbGF5KVxuICAgIFxufVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKCkge1xuICAgICAgICAgICAgd2hpbGUgKG1lbnVVbC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgbWVudVVsLnJlbW92ZUNoaWxkKG1lbnVVbC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH0gICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXNGcm9tRGlzcGxheSgpIHtcbiAgICAgICAgICAgIHdoaWxlIChkaXNwbGF5RGlzaC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheURpc2gucmVtb3ZlQ2hpbGQoZGlzcGxheURpc2guZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9fVxufVxuXG4iLCJpbXBvcnQge2hlYWRlckltZ30gIGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudVBhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZUJsb2dQYWdlIH0gZnJvbSBcIi4vYmxvZ1BhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZVNob3AgfSBmcm9tIFwiLi9zaG9wXCI7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG5cbiAgICBcbiAgIGNvbnRlbnQuY2xhc3NOYW1lPSdjb250ZW50J1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG5cbiAgICBjb25zdCBsb2dvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbG9nb1NlY3Rpb24uY2xhc3NOYW1lPSdsb2dvJztcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG5cbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBsb2dvLnNyYz1oZWFkZXJJbWdbMF07XG5cbiAgIGNvbnN0IHNlYXJjaFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgc2VhcmNoU2VjdC5jbGFzc05hbWU9J3NlYXJjaFNlY3QnXG5cbiAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBzZWFyY2guY2xhc3NOYW1lPSdzZWFyY2hCYXInXG4gICBcbiAgIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgc2VhcmNoSWNvbi5jbGFzc05hbWU9J3NlYXJjaEljb24nXG4gICBzZWFyY2hJY29uLnNyYz1oZWFkZXJJbWdbMl1cblxuICAgY29uc3Qgc2VhcmNoSW5wdXQgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyPScgIFNlYXJjaC4uLidcblxuICAgY29uc3QgaGFuZEJhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICBoYW5kQmFnLmlkPSdoYW5kQmFnJ1xuICAgaGFuZEJhZy5zcmM9aGVhZGVySW1nWzFdXG5cbiAgICAvLyBsaXN0IFxuXG4gICBjb25zdCBsaXN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3QxLnRleHRDb250ZW50PSdIb21lJ1xuICAgbGlzdDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZUhvbWUpXG5cbiAgIGNvbnN0IGxpc3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgbGlzdDIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZU1lbnVQYWdlKVxuICAgbGlzdDIudGV4dENvbnRlbnQ9J01lbnUnXG5cbiAgIGNvbnN0IGxpc3QzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgbGlzdDMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZUJsb2dQYWdlKVxuICAgbGlzdDMudGV4dENvbnRlbnQ9J0Jsb2cnXG5cbiAgIGNvbnN0IGxpc3Q0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgbGlzdDQudGV4dENvbnRlbnQ9J1BhZ2VzJ1xuXG4gICBjb25zdCBsaXN0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3Q1LnRleHRDb250ZW50PSdBYm91dCdcblxuICAgY29uc3QgbGlzdDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBsaXN0Ni50ZXh0Q29udGVudD0nU2hvcCdcbiAgIGxpc3Q2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVTaG9wKVxuXG4gICBjb25zdCBsaXN0NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3Q3LnRleHRDb250ZW50PSdDb250YWN0J1xuXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlzdDEpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlzdDIpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlzdDMpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlzdDQpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlzdDUpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlzdDYpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlzdDcpXG5cblxuIG5hdi5hcHBlbmRDaGlsZCh1bClcbiBzZWFyY2guYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpXG5zZWFyY2guYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbilcblxuIHNlYXJjaFNlY3QuYXBwZW5kQ2hpbGQoc2VhcmNoKVxuIHNlYXJjaFNlY3QuYXBwZW5kQ2hpbGQoaGFuZEJhZylcbiBsb2dvU2VjdGlvbi5hcHBlbmRDaGlsZChsb2dvKVxuIFxuIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpXG4gaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29TZWN0aW9uKVxuIGhlYWRlci5hcHBlbmRDaGlsZChzZWFyY2hTZWN0KVxuICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpXG59XG4iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBob21lSW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgeyBjcmVhdGVBYm91dFVzIH0gZnJvbSBcIi4vYWJvdXRVc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuY29uc3QgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudGV4dENvbnRlbnQuY2xhc3NOYW1lPSd0ZXh0Q29udGVudCdcbmNvbnN0IGltYWdlU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5pbWFnZVNlY3QuY2xhc3NOYW1lPSdpbWFnZVNlY3QnXG5cblxuY29uc3Qgc29jaWFsTWVkaWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuc29jaWFsTWVkaWEuY2xhc3NOYW1lPSdzb2NpYWxTZWN0J1xuY29uc3QgZmFjZWJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuZmFjZWJvb2suc3JjPWhvbWVJbWdbMF1cbmNvbnN0IHR3aXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxudHdpdHRlci5zcmM9aG9tZUltZ1sxXVxuY29uc3QgcGludGVyZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbnBpbnRlcmVzdC5zcmM9aG9tZUltZ1syXVxuXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYnV0dG9uLnRleHRDb250ZW50PSdTZWUgTWVudSdcblxuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbmRlc2NyaXB0aW9uLnRleHRDb250ZW50PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBWYXJpdXMgc2VkIHBoYXJldHJhIGRpY3R1bSBuZXF1ZSBtYXNzYSBjb25ndWUnXG5cbmNvbnN0IGhlYWRpbmcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuaGVhZGluZzIuY2xhc3NOYW1lPSdoZWFkaW5nMidcbmhlYWRpbmcyLnRleHRDb250ZW50PSdUaGUgQXJ0IG9mIHNwZWVkIGZvb2QgUXVhbGl0eSdcblxuY29uc3QgaGVhZGluZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG5oZWFkaW5nMS5jbGFzc05hbWU9J2hlYWRpbmcxJ1xuaGVhZGluZzEudGV4dENvbnRlbnQ9J0l0cyBRdWljayAmIEFtdXNpbmchJ1xuXG5cbnNvY2lhbE1lZGlhLmFwcGVuZENoaWxkKHBpbnRlcmVzdClcbnNvY2lhbE1lZGlhLmFwcGVuZENoaWxkKHR3aXR0ZXIpXG5zb2NpYWxNZWRpYS5hcHBlbmRDaGlsZChmYWNlYm9vaylcblxudGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoc29jaWFsTWVkaWEpXG50ZXh0Q29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nMSlcbnRleHRDb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcyKVxudGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG50ZXh0Q29udGVudC5hcHBlbmRDaGlsZChidXR0b24pXG5tYWluQ29udGVudC5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudClcbm1haW5Db250ZW50LmFwcGVuZENoaWxkKGltYWdlU2VjdClcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpXG5cbmNyZWF0ZUFib3V0VXMoKVxufSIsImltcG9ydCBsb2dvSWNvbiBmcm9tICcuLi9pbWFnZXMvRm9vZHR1Y2sucG5nJ1xuaW1wb3J0IGhhbmRCYWdJY29uIGZyb20gJy4uL2ltYWdlcy9IYW5kYmFnLnBuZydcbmltcG9ydCBzZWFyY2hJY29uIGZyb20gJy4uL2ltYWdlcy9zZWFyY2gucG5nJ1xuaW1wb3J0IGZhY2Vib29rSWNvbiBmcm9tICcuLi9pbWFnZXMvZmFjZWJvb2sucG5nJ1xuaW1wb3J0IHR3aXR0ZXJJY29uIGZyb20gJy4uL2ltYWdlcy90d2l0dGVyLnBuZydcbmltcG9ydCBwaW50ZXJlc3RJY29uIGZyb20gJy4uL2ltYWdlcy9waW50ZXJlc3QucG5nJ1xuaW1wb3J0IGdyYXNzQ29ybmVyIGZyb20gJy4uL2ltYWdlcy9jb3JuZXJHcmFzcy5wbmcnXG5pbXBvcnQgZmlyc3RQb3N0IGZyb20gJy4uL2ltYWdlcy9maXJzdFAucG5nJ1xuaW1wb3J0IHNlY29uZFBvc3QgZnJvbSAnLi4vaW1hZ2VzL3NlY29uZFAucG5nJ1xuaW1wb3J0IHRoaXJkUG9zdCBmcm9tICcuLi9pbWFnZXMvdGhpcmRQLnBuZydcbmltcG9ydCBhYm91dDEgZnJvbSAnLi4vaW1hZ2VzL2Fib3V0MS5wbmcnXG5pbXBvcnQgYWJvdXQyIGZyb20gJy4uL2ltYWdlcy9hYm91dDIucG5nJ1xuaW1wb3J0IGFib3V0MyBmcm9tICcuLi9pbWFnZXMvYWJvdXQzLnBuZydcbmltcG9ydCBDYXRlZ29yeTEgZnJvbSAnLi4vaW1hZ2VzL2NhdGVnb3J5MS5wbmcnXG5pbXBvcnQgQ2F0ZWdvcnkyIGZyb20gJy4uL2ltYWdlcy9jYXRlZ29yeTIucG5nJ1xuaW1wb3J0IENhdGVnb3J5MyBmcm9tICcuLi9pbWFnZXMvY2F0ZWdvcnkzLnBuZydcbmltcG9ydCBDYXRlZ29yeTQgZnJvbSAnLi4vaW1hZ2VzL2NhdGVnb3J5NC5wbmcnXG5pbXBvcnQgc2lkZUdyYXNzSW1nIGZyb20gJy4uL2ltYWdlcy9zaWRlR3Jhc3MucG5nJ1xuaW1wb3J0IHdoeTEgZnJvbSAnLi4vaW1hZ2VzL3doeV8xLnBuZydcbmltcG9ydCB3aHkyIGZyb20gJy4uL2ltYWdlcy93aHlfMi5wbmcnXG5pbXBvcnQgd2h5MyBmcm9tICcuLi9pbWFnZXMvd2h5XzMucG5nJ1xuaW1wb3J0IHdoeTQgZnJvbSAnLi4vaW1hZ2VzL3doeV80LnBuZydcbmltcG9ydCB3aHk1IGZyb20gJy4uL2ltYWdlcy93aHlfNS5wbmcnXG5pbXBvcnQgd2h5NiBmcm9tICcuLi9pbWFnZXMvd2h5XzYucG5nJ1xuaW1wb3J0IGluZm8xIGZyb20gJy4uL2ltYWdlcy9jaGVmQ2FwLnBuZydcbmltcG9ydCBpbmZvMiBmcm9tICcuLi9pbWFnZXMvZm9vZFByb2R1Y3QucG5nJ1xuaW1wb3J0IGluZm8zIGZyb20gJy4uL2ltYWdlcy9waXp6YS5wbmcnXG5pbXBvcnQgaW5mbzQgZnJvbSAnLi4vaW1hZ2VzL3Nwb29uLnBuZydcbmltcG9ydCBpdGVtMSBmcm9tICcuLi9pbWFnZXMvaXRlbTEucG5nJ1xuaW1wb3J0IGl0ZW0yIGZyb20gJy4uL2ltYWdlcy9pdGVtMi5wbmcnXG5pbXBvcnQgaXRlbTMgZnJvbSAnLi4vaW1hZ2VzL2l0ZW0zLnBuZydcbmltcG9ydCBpdGVtNCBmcm9tICcuLi9pbWFnZXMvaXRlbTQucG5nJ1xuaW1wb3J0IGl0ZW01IGZyb20gJy4uL2ltYWdlcy9pdGVtNS5wbmcnXG5pbXBvcnQgaXRlbTYgZnJvbSAnLi4vaW1hZ2VzL2l0ZW02LnBuZydcbmltcG9ydCBpdGVtNyBmcm9tICcuLi9pbWFnZXMvaXRlbTcucG5nJ1xuaW1wb3J0IGl0ZW04IGZyb20gJy4uL2ltYWdlcy9pdGVtOC5wbmcnXG5pbXBvcnQgbHVuY2gxIGZyb20gJy4uL2ltYWdlcy9sdW5jaDEuanBnJ1xuaW1wb3J0IGx1bmNoMiBmcm9tICcuLi9pbWFnZXMvbHVuY2gyLmpwZWcnXG5pbXBvcnQgbHVuY2gzIGZyb20gJy4uL2ltYWdlcy9sdW5jaDMuanBlZydcbmltcG9ydCBsdW5jaDQgZnJvbSAnLi4vaW1hZ2VzL2x1bmNoNC5qcGVnJ1xuaW1wb3J0IGx1bmNoNSBmcm9tICcuLi9pbWFnZXMvbHVuY2g1LmpwZWcnXG5pbXBvcnQgbHVuY2g2IGZyb20gJy4uL2ltYWdlcy9sdW5jaDYucG5nJ1xuaW1wb3J0IGRpbm5lcjEgZnJvbSAnLi4vaW1hZ2VzL2Rpbm5lcjEuanBlZydcbmltcG9ydCBkaW5uZXIyIGZyb20gJy4uL2ltYWdlcy9kaW5uZXIyLmpwZWcnXG5pbXBvcnQgZGlubmVyMyBmcm9tICcuLi9pbWFnZXMvZGlubmVyMy5qcGVnJ1xuaW1wb3J0IGRpbm5lcjQgZnJvbSAnLi4vaW1hZ2VzL2Rpbm5lcjQuanBlZydcbmltcG9ydCBkaW5uZXI1IGZyb20gJy4uL2ltYWdlcy9kaW5uZXI1LmpwZWcnXG5pbXBvcnQgZGlubmVyNiBmcm9tICcuLi9pbWFnZXMvZGlubmVyNi5qcGVnJ1xuaW1wb3J0IGRlc2VydDEgZnJvbSAnLi4vaW1hZ2VzL2Rlc2VydDEuanBlZydcbmltcG9ydCBkZXNlcnQyIGZyb20gJy4uL2ltYWdlcy9kZXNlcnQyLmpwZWcnXG5pbXBvcnQgZHJpbmsxIGZyb20gJy4uL2ltYWdlcy9kcmluazEuanBlZydcbmltcG9ydCBkcmluazIgZnJvbSAnLi4vaW1hZ2VzL2RyaW5rMi5qcGVnJ1xuaW1wb3J0IGRyaW5rMyBmcm9tICcuLi9pbWFnZXMvZHJpbmszLmpwZWcnXG5pbXBvcnQgc25hY2sxIGZyb20gJy4uL2ltYWdlcy9zbmFjazEuanBlZydcbmltcG9ydCBzbmFjazIgZnJvbSAnLi4vaW1hZ2VzL3NuYWNrMi5qcGVnJ1xuaW1wb3J0IHNvdXAxIGZyb20gJy4uL2ltYWdlcy9zb3VwMS5qcGVnJ1xuaW1wb3J0IHNvdXAyIGZyb20gJy4uL2ltYWdlcy9zb3VwMi5qcGVnJ1xuaW1wb3J0IHNvdXAzIGZyb20gJy4uL2ltYWdlcy9zb3VwMy5qcGVnJ1xuaW1wb3J0IGNoZWYxIGZyb20gJy4uL2ltYWdlcy9jaGVmMS5wbmcnXG5pbXBvcnQgY2hlZjIgZnJvbSAnLi4vaW1hZ2VzL2NoZWYyLnBuZydcbmltcG9ydCBjaGVmMyBmcm9tICcuLi9pbWFnZXMvY2hlZjMucG5nJ1xuaW1wb3J0IGNoZWY0IGZyb20gJy4uL2ltYWdlcy9jaGVmNC5wbmcnXG5pbXBvcnQgcHJvZmlsZTEgZnJvbSAnLi4vaW1hZ2VzL3Byb2ZpbGUxLnBuZydcbmltcG9ydCBwcm9maWxlMiBmcm9tICcuLi9pbWFnZXMvcHJvZmlsZTIucG5nJ1xuaW1wb3J0IHByb2ZpbGUzIGZyb20gJy4uL2ltYWdlcy9wcm9maWxlMy5wbmcnXG5pbXBvcnQgcHJvZmlsZTQgZnJvbSAnLi4vaW1hZ2VzL3Byb2ZpbGU0LnBuZydcbmltcG9ydCB0ZXN0aW1vbmlhbEdyZWVuIGZyb20gJy4uL2ltYWdlcy90ZXN0aW1vbmlhbC5wbmcnXG5pbXBvcnQgc3RhcjEgZnJvbSAnLi4vaW1hZ2VzL3N0YXIucG5nJ1xuaW1wb3J0IEVtcHR5c3RhciBmcm9tICcuLi9pbWFnZXMvZW1wdHlTdGFyLnBuZydcbmltcG9ydCBncmFzc0Nvcm5lcjIgZnJvbSAnLi4vaW1hZ2VzL2dyYXNzMi5wbmcnXG5pbXBvcnQgYmxvZzEgZnJvbSAnLi4vaW1hZ2VzL2Jsb2cxLnBuZydcbmltcG9ydCBibG9nMiBmcm9tICcuLi9pbWFnZXMvYmxvZzIucG5nJ1xuaW1wb3J0IGJsb2czIGZyb20gJy4uL2ltYWdlcy9ibG9nMy5wbmcnXG5pbXBvcnQgbGlrZSBmcm9tICcuLi9pbWFnZXMvbGlrZS5wbmcnXG5pbXBvcnQgY29tbWVudCBmcm9tICcuLi9pbWFnZXMvY29tbWVudC5wbmcnXG5pbXBvcnQgc2hhcmUgZnJvbSAnLi4vaW1hZ2VzL3NoYXJlLnBuZydcbmltcG9ydCBNZW51SW1nMSBmcm9tICcuLi9pbWFnZXMvY2F0ZWdvcnlGb3JNZW51MS5wbmcnXG5pbXBvcnQgTWVudUltZzIgZnJvbSAnLi4vaW1hZ2VzL2NhdGVnb3J5Rm9yTWVudTIucG5nJ1xuaW1wb3J0IE1lbnVJbWczIGZyb20gJy4uL2ltYWdlcy9jYXRlZ29yeUZvck1lbnUzLnBuZydcbmltcG9ydCBNZW51SW1nNCBmcm9tICcuLi9pbWFnZXMvY2F0ZWdvcnlGb3JNZW51NC5wbmcnXG5pbXBvcnQgY29mZmVlIGZyb20gJy4uL2ltYWdlcy9Db2ZmZWUucG5nJ1xuaW1wb3J0IGJyYW5kMSBmcm9tICcuLi9pbWFnZXMvYnJhbmQxLnBuZydcbmltcG9ydCBicmFuZDIgZnJvbSAnLi4vaW1hZ2VzL2JyYW5kMi5wbmcnXG5pbXBvcnQgYnJhbmQzIGZyb20gJy4uL2ltYWdlcy9icmFuZDMucG5nJ1xuaW1wb3J0IGJyYW5kNCBmcm9tICcuLi9pbWFnZXMvYnJhbmQ0LnBuZydcbmltcG9ydCBicmFuZDUgZnJvbSAnLi4vaW1hZ2VzL2JyYW5kNS5wbmcnXG5pbXBvcnQgYnJhbmQ2IGZyb20gJy4uL2ltYWdlcy9icmFuZDYucG5nJ1xuXG5cbmV4cG9ydCBjb25zdCBoZWFkZXJJbWcgPSBbbG9nb0ljb24saGFuZEJhZ0ljb24sc2VhcmNoSWNvbl1cblxuZXhwb3J0IGNvbnN0IGhvbWVJbWcgPSBbZmFjZWJvb2tJY29uLHR3aXR0ZXJJY29uLHBpbnRlcmVzdEljb25dXG5cbmV4cG9ydCBjb25zdCBmb290ZXJJbWcgPSBbZ3Jhc3NDb3JuZXIsZmlyc3RQb3N0LHNlY29uZFBvc3QsdGhpcmRQb3N0XVxuXG5leHBvcnQgY29uc3QgYWJvdXRJbWcgPSBbYWJvdXQxLGFib3V0MixhYm91dDNdXG5cbmV4cG9ydCBjb25zdCBDYXRlZ29yeUltZyA9IFtDYXRlZ29yeTEsQ2F0ZWdvcnkyLENhdGVnb3J5MyxDYXRlZ29yeTQsc2lkZUdyYXNzSW1nXVxuXG5leHBvcnQgY29uc3QgV2h5SW1nID0gW3doeTEsd2h5Mix3aHkzLHdoeTQsd2h5NSx3aHk2XVxuXG5leHBvcnQgY29uc3QgcmVzdHJhdUluZm9TZWN0SW1nID0gW2luZm8xLGluZm8yLGluZm8zLGluZm80XVxuXG5leHBvcnQgY29uc3QgbWVudUl0ZW1JbWcgPSBbaXRlbTEsaXRlbTIsaXRlbTMsaXRlbTQsaXRlbTUsaXRlbTYsaXRlbTcsaXRlbThdXG5cbmV4cG9ydCBjb25zdCBtZW51THVuY2hJbWcgPSBbbHVuY2gxLGx1bmNoMixsdW5jaDMsbHVuY2g0LGx1bmNoNSxsdW5jaDZdXG5cbmV4cG9ydCBjb25zdCBtZW51RGlubmVySW1nID0gW2Rpbm5lcjEsZGlubmVyMixkaW5uZXIzLGRpbm5lcjQsZGlubmVyNSxkaW5uZXI2XVxuXG5leHBvcnQgY29uc3QgbWVudURlc2VydEltZyA9IFtkZXNlcnQxLGRlc2VydDJdXG5cbmV4cG9ydCBjb25zdCBtZW51RHJpbmtJbWcgPSBbZHJpbmsxLGRyaW5rMixkcmluazNdXG5cbmV4cG9ydCBjb25zdCBtZW51U25hY2tJbWcgPSBbc25hY2sxLHNuYWNrMl1cblxuZXhwb3J0IGNvbnN0IG1lbnVTb3VwSW1nID0gW3NvdXAxLHNvdXAyLHNvdXAzXVxuXG5leHBvcnQgY29uc3QgY2hlZkltZyA9IFtjaGVmMSxjaGVmMixjaGVmMyxjaGVmNF1cblxuZXhwb3J0IGNvbnN0IHByb2ZpbGVJbWcgPSBbcHJvZmlsZTEsdGVzdGltb25pYWxHcmVlbixzdGFyMSxFbXB0eXN0YXIscHJvZmlsZTIscHJvZmlsZTMscHJvZmlsZTQsZ3Jhc3NDb3JuZXIyLGdyYXNzQ29ybmVyMl1cblxuZXhwb3J0IGNvbnN0IGJsb2dJbWcgID0gW2Jsb2cxLGJsb2cyLGJsb2czLGxpa2UsY29tbWVudCxzaGFyZV1cblxuZXhwb3J0IGNvbnN0IE1lbnVJbWcgPSBbTWVudUltZzEsTWVudUltZzIsTWVudUltZzMsTWVudUltZzQsY29mZmVlXVxuXG5leHBvcnQgY29uc3QgYnJhbmRzID0gW2JyYW5kMSxicmFuZDIsYnJhbmQzLGJyYW5kNCxicmFuZDUsYnJhbmQ2XVxuIiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHtoZWFkZXJJbWd9ICBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IGxvYWRBbGxob21lQ29tcG9uZW50cyB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVSZXN0cmF1SW5mbyB9IGZyb20gXCIuL3Jlc3RyYXVJbmZvU2VjdFwiO1xuaW1wb3J0IHsgY3JlYXRlQmxvZ1BhZ2UgfSBmcm9tIFwiLi9ibG9nUGFnZVwiO1xuaW1wb3J0IHsgTWVudUltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgYnJhbmRzIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgeyBjcmVhdGVTaG9wIH0gZnJvbSBcIi4vc2hvcFwiO1xuLy8gaW1wb3J0IHsgY3JlYXRlU2hvcCB9IGZyb20gXCIuL3Nob3BcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKXtcbiAgICBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzRnJvbURpc3BsYXkoKSB7XG4gICAgICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfX1cbiAgICAgICAgXG4gICAgY29uc3QgTWVudUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXNGcm9tRGlzcGxheSgpXG5jb250ZW50LnN0eWxlLmJhY2tncm91bmQ9J3RyYW5zcGFyZW50J1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJylcbmJvZHkuY2xhc3NMaXN0PSdib2R5UGFnZSdcblxuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaGVhZGVyLmNsYXNzTmFtZT0naGVhZGVyRm9yTmF2J1xuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbmxvZ28uc3JjID0gaGVhZGVySW1nWzBdXG5sb2dvLmNsYXNzTGlzdD0nbG9nb0ZvckhlYWRlcidcblxuICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICB1bC5jbGFzc05hbWU9J25hdkZvckhlYWRlcidcbiAgIGNvbnN0IGxpc3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgbGlzdDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGxvYWRBbGxob21lQ29tcG9uZW50cylcbiAgIGxpc3QxLnRleHRDb250ZW50PSdIb21lJ1xuXG4gICBjb25zdCBsaXN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3QyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVNZW51UGFnZSlcbiAgIGxpc3QyLnRleHRDb250ZW50PSdNZW51J1xuXG4gICBjb25zdCBsaXN0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3QzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVCbG9nUGFnZSlcbiAgIGxpc3QzLnRleHRDb250ZW50PSdCbG9nJ1xuXG4gICBjb25zdCBsaXN0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3Q0LnRleHRDb250ZW50PSdQYWdlcydcblxuICAgY29uc3QgbGlzdDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBsaXN0NS50ZXh0Q29udGVudD0nQWJvdXQnXG5cbiAgIGNvbnN0IGxpc3Q2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgbGlzdDYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZVNob3ApXG4gICBsaXN0Ni50ZXh0Q29udGVudD0nU2hvcCdcblxuICAgY29uc3QgbGlzdDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBsaXN0Ny50ZXh0Q29udGVudD0nQ29udGFjdCdcblxuICAgY29uc3QgaWNvblNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgY29uc3QgcGFyYSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICBwYXJhLnRleHRDb250ZW50PSdPdXIgTWVudSdcblxuICAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgIHBhcmEyLmlubmVySFRNTD0nPHNwYW4+SG9tZTwvc3Bhbj4gPiBNZW51J1xuXG4gICB1bC5hcHBlbmRDaGlsZChsaXN0MSlcbiAgIHVsLmFwcGVuZENoaWxkKGxpc3QyKVxuICAgdWwuYXBwZW5kQ2hpbGQobGlzdDMpIFxuICAgdWwuYXBwZW5kQ2hpbGQobGlzdDQpXG4gICB1bC5hcHBlbmRDaGlsZChsaXN0NSlcbiAgIHVsLmFwcGVuZENoaWxkKGxpc3Q2KVxuICAgdWwuYXBwZW5kQ2hpbGQobGlzdDcpXG5cbmhlYWRlci5hcHBlbmRDaGlsZChsb2dvKVxuaGVhZGVyLmFwcGVuZENoaWxkKHVsKVxuaGVhZGVyLmFwcGVuZENoaWxkKHBhcmEpXG5cblxuTWVudUJvZHkuY2xhc3NOYW1lPSdNZW51Qm9keSdcblxuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpXG5oZWFkZXIuYXBwZW5kQ2hpbGQocGFyYTIpXG5jb250ZW50LmFwcGVuZENoaWxkKE1lbnVCb2R5KVxuXG5jcmVhdGVNZW51Q2F0ZWdvcnkoJ1N0YXJ0ZXIgTWVudScsTWVudUltZ1swXSlcbmNyZWF0ZU1lbnVDYXRlZ29yeTIoJ01haW4gQ291cnNlJyxNZW51SW1nWzFdKVxuY3JlYXRlTWVudUNhdGVnb3J5KCdEZXNzZXJ0cycsTWVudUltZ1syXSlcbmNyZWF0ZU1lbnVDYXRlZ29yeTIoJ0RyaW5rcycsTWVudUltZ1szXSlcblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDYXRlZ29yeShUSVRMRSxJTUcpe1xubGV0IG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5vbmUuY2xhc3NOYW1lPSdvbmUnXG5sZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG50aXRsZS50ZXh0Q29udGVudD1USVRMRVxuXG5cbmxldCBtZWRpYVNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxubGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5pbWcuc3JjPUlNR1xuXG5tZWRpYVNlY3QuYXBwZW5kQ2hpbGQoaW1nKVxuXG5sZXQgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gbGV0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuLy8gaW1nMi5zcmMgPSBNZW51SW1nWzRdXG50ZXh0Q29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSlcbmNyZWF0ZUl0ZW0oJ0FsZGVyIEdyaWxsZWQgQ2hpbm9vayBTYWxtb24nLCc8cD5Ub2FzdGVkIEZyZW5jaCBicmVhZCB0b3BwZWQgd2l0aCByb21hbm8sIGNoZWRkYXIgPGJyPjUwMENBTDwvcD4nLCczMiQnKVxuY3JlYXRlSXRlbSgnQWxkZXIgR3JpbGxlZCBDaGlub29rIFNhbG1vbicsJzxwPlRvYXN0ZWQgRnJlbmNoIGJyZWFkIHRvcHBlZCB3aXRoIHJvbWFubywgY2hlZGRhciA8YnI+NTAwQ0FMPC9wPicsJzMyJCcpXG5jcmVhdGVJdGVtKCdBbGRlciBHcmlsbGVkIENoaW5vb2sgU2FsbW9uJywnPHA+VG9hc3RlZCBGcmVuY2ggYnJlYWQgdG9wcGVkIHdpdGggcm9tYW5vLCBjaGVkZGFyIDxicj41MDBDQUw8L3A+JywnMzIkJylcbmNyZWF0ZUl0ZW0oJ0FsZGVyIEdyaWxsZWQgQ2hpbm9vayBTYWxtb24nLCc8cD5Ub2FzdGVkIEZyZW5jaCBicmVhZCB0b3BwZWQgd2l0aCByb21hbm8sIGNoZWRkYXIgPGJyPjUwMENBTDwvcD4nLCczMiQnKVxuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKE5BTUUsREVTQyxQUklDRSl7XG5sZXQgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5sZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxubmFtZS5jbGFzc05hbWU9J25hbWUnXG5uYW1lLnRleHRDb250ZW50ID0gTkFNRVxubGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbmRlc2MuaW5uZXJIVE1MID0gREVTQ1xubGV0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5wcmljZS50ZXh0Q29udGVudCA9IFBSSUNFXG5pdGVtMS5hcHBlbmRDaGlsZChuYW1lKVxuaXRlbTEuYXBwZW5kQ2hpbGQoZGVzYylcbml0ZW0xLmFwcGVuZENoaWxkKHByaWNlKVxudGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbTEpXG59XG5vbmUuYXBwZW5kQ2hpbGQobWVkaWFTZWN0KVxuXG5vbmUuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpXG5cbk1lbnVCb2R5LmFwcGVuZENoaWxkKG9uZSlcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVNZW51Q2F0ZWdvcnkyKFRJVExFLElNRyl7XG4gICAgbGV0IG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgb25lLmNsYXNzTmFtZT0nb25lJ1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aXRsZS50ZXh0Q29udGVudD1USVRMRVxuICAgIFxuICAgIFxuICAgIGxldCBtZWRpYVNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5zcmM9SU1HXG4gICAgXG4gICAgbWVkaWFTZWN0LmFwcGVuZENoaWxkKGltZylcbiAgICBcbiAgICBsZXQgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8vIGxldCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAvLyBpbWcyLnNyYyA9IE1lbnVJbWdbNF1cbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBjcmVhdGVJdGVtKCdBbGRlciBHcmlsbGVkIENoaW5vb2sgU2FsbW9uJywnPHA+VG9hc3RlZCBGcmVuY2ggYnJlYWQgdG9wcGVkIHdpdGggcm9tYW5vLCBjaGVkZGFyIDxicj41MDBDQUw8L3A+JywnMzIkJylcbiAgICBjcmVhdGVJdGVtKCdBbGRlciBHcmlsbGVkIENoaW5vb2sgU2FsbW9uJywnPHA+VG9hc3RlZCBGcmVuY2ggYnJlYWQgdG9wcGVkIHdpdGggcm9tYW5vLCBjaGVkZGFyIDxicj41MDBDQUw8L3A+JywnMzIkJylcbiAgICBjcmVhdGVJdGVtKCdBbGRlciBHcmlsbGVkIENoaW5vb2sgU2FsbW9uJywnPHA+VG9hc3RlZCBGcmVuY2ggYnJlYWQgdG9wcGVkIHdpdGggcm9tYW5vLCBjaGVkZGFyIDxicj41MDBDQUw8L3A+JywnMzIkJylcbiAgICBjcmVhdGVJdGVtKCdBbGRlciBHcmlsbGVkIENoaW5vb2sgU2FsbW9uJywnPHA+VG9hc3RlZCBGcmVuY2ggYnJlYWQgdG9wcGVkIHdpdGggcm9tYW5vLCBjaGVkZGFyIDxicj41MDBDQUw8L3A+JywnMzIkJylcbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVJdGVtKE5BTUUsREVTQyxQUklDRSl7XG4gICAgbGV0IGl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbmFtZS5jbGFzc05hbWU9J25hbWUnXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IE5BTUVcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRlc2MuaW5uZXJIVE1MID0gREVTQ1xuICAgIGxldCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHByaWNlLnRleHRDb250ZW50ID0gUFJJQ0VcbiAgICBpdGVtMS5hcHBlbmRDaGlsZChuYW1lKVxuICAgIGl0ZW0xLmFwcGVuZENoaWxkKGRlc2MpXG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQocHJpY2UpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbTEpXG4gICAgfVxuICAgIFxuICAgIFxuICAgIG9uZS5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudClcbiAgICBvbmUuYXBwZW5kQ2hpbGQobWVkaWFTZWN0KVxuICAgIE1lbnVCb2R5LmFwcGVuZENoaWxkKG9uZSlcbiAgICB9XG4gICAgY29uc3QgcGFydG5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcGFydG5lci5jbGFzc05hbWU9J3BhcnRuZXInXG5cbiAgICBjb25zdCB0aXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0aXRsZTEudGV4dENvbnRlbnQ9J1BhcnRuZXJzIGFuZCBDbGllbnRzJ1xuICAgIGNvbnN0IHRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aXRsZTIudGV4dENvbnRlbnQ9J1dlIHdvcmsgd2l0aCB0aGUgYmVzdCBwZW9wbGUnXG4gICAgXG4gICAgcGFydG5lci5hcHBlbmRDaGlsZCh0aXRsZTEpXG4gICAgcGFydG5lci5hcHBlbmRDaGlsZCh0aXRsZTIpXG4gICAgXG4gICAgY29uc3Qgd29ya1dpdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdvcmtXaXRoLmNsYXNzTmFtZT0nd29ya1dpdGgnO1xuXG4gICAgY29uc3QgYnJhbmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBicmFuZDEuc3JjPWJyYW5kc1swXVxuICAgIGNvbnN0IGJyYW5kMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgYnJhbmQyLnNyYz1icmFuZHNbMV1cbiAgICBjb25zdCBicmFuZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGJyYW5kMy5zcmM9YnJhbmRzWzJdXG4gICAgY29uc3QgYnJhbmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgYnJhbmQ0LnNyYz1icmFuZHNbM11cbiAgICAgY29uc3QgYnJhbmQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgYnJhbmQ1LnNyYz1icmFuZHNbNF1cbiAgICAgY29uc3QgYnJhbmQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgYnJhbmQ2LnNyYz1icmFuZHNbNV1cblxuXG4gIHdvcmtXaXRoLmFwcGVuZENoaWxkKGJyYW5kMSlcbiAgd29ya1dpdGguYXBwZW5kQ2hpbGQoYnJhbmQyKVxuICB3b3JrV2l0aC5hcHBlbmRDaGlsZChicmFuZDMpXG4gIHdvcmtXaXRoLmFwcGVuZENoaWxkKGJyYW5kNClcbiAgd29ya1dpdGguYXBwZW5kQ2hpbGQoYnJhbmQ1KVxuICB3b3JrV2l0aC5hcHBlbmRDaGlsZChicmFuZDYpXG4gIFxuICBwYXJ0bmVyLmFwcGVuZENoaWxkKHdvcmtXaXRoKSAgXG4gIE1lbnVCb2R5LmFwcGVuZENoaWxkKHBhcnRuZXIpXG4gIGNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gIGNvbnRlbnQuY2xhc3NOYW1lPSdjb250ZW50U2Vjb25kU3R5bGUnXG5cbiBcblxuXG4gICAgY3JlYXRlUmVzdHJhdUluZm8oKVxuICAgIGNvbnN0ICBpbmZvU2VjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0cmF1SW5mb1NlY3QnKVxuICAgIGluZm9TZWN0LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICAgIGluZm9TZWN0LmNsYXNzTmFtZT0ncmVzdHJhdUluZm9TZWN0Rm9ySGVhZGVyJ1xuICAgICBcbiAgICBjcmVhdGVGb290ZXIoKVxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpXG4gICAgZm9vdGVyLmNsYXNzTmFtZT0nZm9vdGVyQ2xhc3MnXG4gICAgXG59XG5cbiIsImltcG9ydCB7Y29udGVudH0gZnJvbSAnLi4vaW5kZXgnXG5pbXBvcnQgeyBjaGVmSW1nIH0gZnJvbSAnLi9pbWFnZXMnXG4gXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPdXJDaGVmKCl7XG5cbmNvbnN0IG91ckNoZWZTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbm91ckNoZWZTZWN0LmNsYXNzTmFtZT0nb3VyQ2hlZlNlY3QnXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudD0nU2VlIE1vcmUnXG5jb25zdCBUaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG5UaXRsZTEudGV4dENvbnRlbnQ9J0NoZWZzJ1xuY29uc3QgVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuVGl0bGUyLmlubmVySFRNTD0nPHNwYW4+TWU8L3NwYW4+ZXQgT3VyIENoZWYnXG5vdXJDaGVmU2VjdC5hcHBlbmRDaGlsZChUaXRsZTEpXG5vdXJDaGVmU2VjdC5hcHBlbmRDaGlsZChUaXRsZTIpXG5sZXQgY2hlZkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY2hlZkxpc3QuY2xhc3NOYW1lPSdjaGVmTGlzdCdcbm1ha2VDaGVmU2VjdChjaGVmSW1nWzBdLCdELkVzdHdvb2QnLCdDaGllZiBDaGVmJylcbm1ha2VDaGVmU2VjdChjaGVmSW1nWzFdLCdELkVzdHdvb2QnLCdDaGllZiBDaGVmJylcbm1ha2VDaGVmU2VjdChjaGVmSW1nWzJdLCdELkVzdHdvb2QnLCdDaGllZiBDaGVmJylcbm1ha2VDaGVmU2VjdChjaGVmSW1nWzNdLCdELkVzdHdvb2QnLCdDaGllZiBDaGVmJylcblxuXG5mdW5jdGlvbiBtYWtlQ2hlZlNlY3QoaW1nLE5hbWUsZGVzaWduYXRpb24pe1xuXG4gICAgbGV0IGNoZWZTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGVmU2VjdC5jbGFzc05hbWU9J2NoZWZTZWN0J1xuICAgIGxldCBjaGVmU2VjdEltZyAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGNoZWZTZWN0SW1nLnNyYz1pbWdcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaW5mby5jbGFzc05hbWU9J2luZm8nXG4gICAgY2hlZlNlY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJyxpbmZvQW5pbWF0aW9uKVxuICAgIGNoZWZTZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JyxpbmZvQW5pbWF0aW9uTGVhdmUpXG4gICAgZnVuY3Rpb24gaW5mb0FuaW1hdGlvbigpe1xuICAgICAgICBpbmZvLnN0eWxlLndpZHRoPScxMDBweCdcbiAgICAgICAgaW5mb05hbWUuc3R5bGUuZGlzcGxheT0nYmxvY2snXG4gICAgICAgIGluZm9EZXNpZ25hdGlvbi5zdHlsZS5kaXNwbGF5PSdibG9jaydcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbmZvQW5pbWF0aW9uTGVhdmUoKXtcbiAgICAgICAgaW5mby5zdHlsZS53aWR0aD0nMHB4J1xuICAgICAgICBpbmZvTmFtZS5zdHlsZS5kaXNwbGF5PSdub25lJ1xuICAgICAgICBpbmZvRGVzaWduYXRpb24uc3R5bGUuZGlzcGxheT0nbm9uZSdcbiAgICB9XG4gICAgbGV0IGluZm9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgXG4gICAgaW5mb05hbWUudGV4dENvbnRlbnQ9TmFtZVxuICAgIGxldCBpbmZvRGVzaWduYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpbmZvRGVzaWduYXRpb24udGV4dENvbnRlbnQ9ZGVzaWduYXRpb25cbiAgXG4gICAgaW5mby5hcHBlbmRDaGlsZChpbmZvTmFtZSlcbiAgICBpbmZvLmFwcGVuZENoaWxkKGluZm9EZXNpZ25hdGlvbilcbiAgICBjaGVmU2VjdC5hcHBlbmRDaGlsZChjaGVmU2VjdEltZylcbiAgICBjaGVmU2VjdC5hcHBlbmRDaGlsZChpbmZvKVxuXG4gICAgY2hlZkxpc3QuYXBwZW5kQ2hpbGQoY2hlZlNlY3QpXG4gICAgXG5cbn1cblxub3VyQ2hlZlNlY3QuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuXG5vdXJDaGVmU2VjdC5hcHBlbmRDaGlsZChjaGVmTGlzdClcbmNvbnRlbnQuYXBwZW5kQ2hpbGQob3VyQ2hlZlNlY3QpXG5cblxuXG5cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQge2hlYWRlckltZ30gIGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgbG9hZEFsbGhvbWVDb21wb25lbnRzIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudVBhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZUJsb2dQYWdlIH0gZnJvbSBcIi4vYmxvZ1BhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBjcmVhdGVTaG9wIH0gZnJvbSBcIi4vc2hvcFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2VIZWFkZXIob3B0aW9uLHRpdGxlRm9ySGVhZGVyKXtcbiAgIFxuICAgIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZD0ndHJhbnNwYXJlbnQnXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGJvZHkucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gICAgYm9keS5jbGFzc0xpc3Q9J2JvZHlQYWdlJ1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2Rlc0Zyb21EaXNwbGF5KCkge1xuICAgICAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH19XG5cbiAgIFxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzRnJvbURpc3BsYXkoKVxuICAgICAgICBjb25zdCBNZW51Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIE1lbnVCb2R5LmNsYXNzTmFtZT0nTWVudUJvZHknXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGhlYWRlci5jbGFzc05hbWU9J2hlYWRlckZvck5hdidcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBsb2dvLnNyYyA9IGhlYWRlckltZ1swXVxuICAgICAgICBsb2dvLmNsYXNzTGlzdD0nbG9nb0ZvckhlYWRlcidcbiAgICAgICAgXG4gICAgICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICAgICB1bC5jbGFzc05hbWU9J25hdkZvckhlYWRlcidcbiAgICAgICAgICAgY29uc3QgbGlzdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgIGxpc3QxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxsb2FkQWxsaG9tZUNvbXBvbmVudHMpXG4gICAgICAgICAgIGxpc3QxLnRleHRDb250ZW50PSdIb21lJ1xuICAgICAgICBcbiAgICAgICAgICAgY29uc3QgbGlzdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgIGxpc3QyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVNZW51UGFnZSlcbiAgICAgICAgICAgbGlzdDIudGV4dENvbnRlbnQ9J01lbnUnXG4gICAgICAgIFxuICAgICAgICAgICBjb25zdCBsaXN0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgbGlzdDMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZUJsb2dQYWdlKVxuICAgICAgICAgICBsaXN0My50ZXh0Q29udGVudD0nQmxvZydcbiAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICBjb25zdCBsaXN0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgbGlzdDQudGV4dENvbnRlbnQ9J1BhZ2VzJ1xuICAgICAgICAgICBcbiAgICAgICAgICAgY29uc3QgbGlzdDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgIGxpc3Q1LnRleHRDb250ZW50PSdBYm91dCdcbiAgICAgICAgXG4gICAgICAgICAgIGNvbnN0IGxpc3Q2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICBsaXN0Ni50ZXh0Q29udGVudD0nU2hvcCdcbiAgICAgICAgICAgbGlzdDYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZVNob3ApXG4gICAgICAgIFxuICAgICAgICAgICBjb25zdCBsaXN0NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgbGlzdDcudGV4dENvbnRlbnQ9J0NvbnRhY3QnXG4gICAgICAgIFxuICAgICAgICAgICBjb25zdCBpY29uU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgIGNvbnN0IHBhcmEgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgICAgICAgICBwYXJhLnRleHRDb250ZW50PWAke3RpdGxlRm9ySGVhZGVyfWBcbiAgICAgICAgXG4gICAgICAgICAgIGNvbnN0IHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgIHBhcmEyLmlubmVySFRNTD1gPHNwYW4+SG9tZTwvc3Bhbj4gPiAke29wdGlvbn1gXG4gICAgICAgIFxuICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaXN0MSlcbiAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGlzdDIpXG4gICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpc3QzKSBcbiAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGlzdDQpXG4gICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpc3Q1KVxuICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaXN0NilcbiAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGlzdDcpXG4gICAgICAgIFxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbylcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHVsKVxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocGFyYSlcbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHBhcmEyKVxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKE1lbnVCb2R5KVxuICAgIFxuXG5cblxuICAgICAgICBjcmVhdGVGb290ZXIoKVxuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKVxuICAgICAgICBmb290ZXIuY2xhc3NOYW1lPSdmb290ZXJDbGFzcydcbiAgICAgICBcbiAgICAgICAgXG5cblxufSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVzdHJhdUFjdGl2ZSgpe1xuY29uc3QgcmVzdHJhdUFjdGl2ZVNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxucmVzdHJhdUFjdGl2ZVNlY3QuY2xhc3NOYW1lPSdyZXN0cmF1QWN0aXZlU2VjdCdcblxuY29uc3QgdGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxudGl0bGUxLnRleHRDb250ZW50PSdSZXN0YXVyYW50IEFjdGl2ZSBQcm9jZXNzJ1xuXG5jb25zdCBwYXJhICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxucGFyYS5pbm5lckhUTUw9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgZGlhbSBwZWxsZW50ZXNxdWU8YnI+IGJpYmVuZHVtIG5vbiBkdWkgdm9sdXRwYXQgZnJpbmdpbGxhIGJpYmVuZHVtLiBVcm5hLCBlbGl0IGF1Z3VlIHVybmEsJ1xuXG5cbmNvbnN0IHRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbnRpdGxlMi5pbm5lckhUTUw9JzxzcGFuPldlPC9zcGFuPiBEb2N1bWVudCBFdmVyeSBGb29kPGJyPiBCZWFuIFByb2Nlc3MgdW50aWxlIGl0IGlzIHNhdmVkJ1xuXG5jb25zdCBidG5TZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmJ0blNlY3QuY2xhc3NOYW1lPSdidG5TZWN0J1xuY29uc3QgYnRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5idG4xLmNsYXNzTmFtZT0nYnRuMSdcbmJ0bjEudGV4dENvbnRlbnQ9J1JlYWQgTW9yZSdcbmNvbnN0IHBsYXlWaWRTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnBsYXlWaWRTZWN0LmNsYXNzTmFtZT0ncGxheVZpZFNlY3QnXG5cbmNvbnN0IGJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYnRuMi5jbGFzc05hbWU9J2J0bjInXG5cbnBsYXlWaWRTZWN0LmFwcGVuZENoaWxkKGJ0bjIpXG5cbmNvbnN0IHZpZFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbnZpZFBhcmEuY2xhc3NOYW1lPSdWaWRwbGF5J1xudmlkUGFyYS50ZXh0Q29udGVudD0nUGxheSBWaWRlbydcbnBsYXlWaWRTZWN0LmFwcGVuZENoaWxkKHZpZFBhcmEpXG5cblxucmVzdHJhdUFjdGl2ZVNlY3QuYXBwZW5kQ2hpbGQodGl0bGUxKVxucmVzdHJhdUFjdGl2ZVNlY3QuYXBwZW5kQ2hpbGQodGl0bGUyKVxucmVzdHJhdUFjdGl2ZVNlY3QuYXBwZW5kQ2hpbGQocGFyYSlcblxuYnRuU2VjdC5hcHBlbmRDaGlsZChidG4xKVxuYnRuU2VjdC5hcHBlbmRDaGlsZChidG4yKVxuYnRuU2VjdC5hcHBlbmRDaGlsZChwbGF5VmlkU2VjdClcblxucmVzdHJhdUFjdGl2ZVNlY3QuYXBwZW5kQ2hpbGQoYnRuU2VjdClcbmNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdHJhdUFjdGl2ZVNlY3QpXG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgIHJlc3RyYXVJbmZvU2VjdEltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVzdHJhdUluZm8oKXtcblxuICAgIGNvbnN0IHJlc3RyYXVJbmZvU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmVzdHJhdUluZm9TZWN0LmNsYXNzTmFtZT0ncmVzdHJhdUluZm9TZWN0J1xuICAgIGNvbnN0IHJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIuY2xhc3NOYW1lPSdyZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyJ1xuXG4gICAgY29uc3QgaW5mb1N1YkRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nMS5zcmMgPSByZXN0cmF1SW5mb1NlY3RJbWdbMF1cbiAgICBjb25zdCBpbmZvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGluZm9OYW1lLnRleHRDb250ZW50PSdQcm9mZXNzaW9uYWwgQ2hlZnMnXG4gICAgY29uc3QgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbnVtYmVyLnRleHRDb250ZW50PSc0MjAnXG5cbiAgICBpbmZvU3ViRGl2MS5hcHBlbmRDaGlsZChpbWcxKVxuICAgIGluZm9TdWJEaXYxLmFwcGVuZENoaWxkKGluZm9OYW1lKVxuICAgIGluZm9TdWJEaXYxLmFwcGVuZENoaWxkKG51bWJlcilcblxuICAgIGNvbnN0IGluZm9TdWJEaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcyLnNyYyA9IHJlc3RyYXVJbmZvU2VjdEltZ1sxXVxuICAgIGNvbnN0IGluZm9OYW1lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGluZm9OYW1lMi50ZXh0Q29udGVudD0nSXRlbXMgT2YgRm9vZCdcbiAgICBjb25zdCBudW1iZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbnVtYmVyMi50ZXh0Q29udGVudD0nMzIwJ1xuICAgIGluZm9TdWJEaXYyLmFwcGVuZENoaWxkKGltZzIpXG4gICAgaW5mb1N1YkRpdjIuYXBwZW5kQ2hpbGQoaW5mb05hbWUyKVxuICAgIGluZm9TdWJEaXYyLmFwcGVuZENoaWxkKG51bWJlcjIpXG5cbiAgICBjb25zdCBpbmZvU3ViRGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgaW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nMy5zcmMgPSByZXN0cmF1SW5mb1NlY3RJbWdbMl1cbiAgICBjb25zdCBpbmZvTmFtZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpbmZvTmFtZTMudGV4dENvbnRlbnQ9J1llYXJzIE9mIEV4cGVyaWVuY2VkJ1xuICAgIGNvbnN0IG51bWJlcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBudW1iZXIzLnRleHRDb250ZW50PSczMCsnXG4gICAgaW5mb1N1YkRpdjMuYXBwZW5kQ2hpbGQoaW1nMylcbiAgICBpbmZvU3ViRGl2My5hcHBlbmRDaGlsZChpbmZvTmFtZTMpXG4gICAgaW5mb1N1YkRpdjMuYXBwZW5kQ2hpbGQobnVtYmVyMylcblxuICAgIGNvbnN0IGluZm9TdWJEaXY0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBpbWc0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWc0LnNyYyA9IHJlc3RyYXVJbmZvU2VjdEltZ1szXVxuICAgIGNvbnN0IGluZm9OYW1lNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGluZm9OYW1lNC50ZXh0Q29udGVudD0nSGFwcHkgY3VzdG9tZXJzJ1xuICAgIGNvbnN0IG51bWJlcjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBudW1iZXI0LnRleHRDb250ZW50PScyMjAnXG4gICAgaW5mb1N1YkRpdjQuYXBwZW5kQ2hpbGQoaW1nNClcbiAgICBpbmZvU3ViRGl2NC5hcHBlbmRDaGlsZChpbmZvTmFtZTQpXG4gICAgaW5mb1N1YkRpdjQuYXBwZW5kQ2hpbGQobnVtYmVyNClcblxuICAgIHJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIuYXBwZW5kQ2hpbGQoaW5mb1N1YkRpdjEpXG4gICAgcmVzdHJhdUluZm9TZWN0QmxhY2tMYXllci5hcHBlbmRDaGlsZChpbmZvU3ViRGl2MilcbiAgICByZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyLmFwcGVuZENoaWxkKGluZm9TdWJEaXYzKVxuICAgIHJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIuYXBwZW5kQ2hpbGQoaW5mb1N1YkRpdjQpXG5cblxuICAgIHJlc3RyYXVJbmZvU2VjdC5hcHBlbmRDaGlsZChyZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdHJhdUluZm9TZWN0KVxuXG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgY3JlYXRlUGFnZUhlYWRlciB9IGZyb20gXCIuL3BhZ2VIZWFkZXJcIjtcbmltcG9ydCB7IG1lbnVJdGVtSW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaG9wKCl7XG5cbiAgICBjcmVhdGVQYWdlSGVhZGVyKCdTaG9wJywnU2hvcCBMaXN0JylcbiAgICBcbiAgICBjb25zdCBib2R5ICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGJvZHkucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gICAgYm9keS5jbGFzc05hbWU9J2JvZHlQYWdlRm9yU2hvcCdcbiAgICBjb25zdCBzaG9wQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5NZW51Qm9keScpXG4gICAgc2hvcEJvZHkucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gICAgc2hvcEJvZHkuY2xhc3NOYW1lPSdzaG9wQm9keSdcbiAgICBcblxuICAgIGNvbnN0IHNob3BTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaG9wU2VjdC5jbGFzc05hbWU9J3Nob3BTZWN0J1xuICAgIGNvbnN0IHNob3BMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaG9wTGlzdC5jbGFzc05hbWU9J3Nob3BMaXN0J1xuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIGNyZWF0ZUl0ZW0obWVudUl0ZW1JbWdbN10sJ0ZyZXNoIExpbWUnLCcxNSQnKVxuICAgIFxuIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUl0ZW0oaW1nLE5hbWUsUHJpY2Upe1xuXG4gICAgICAgIGNvbnN0IGl0ZW0gPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGl0ZW0uY2xhc3NOYW1lPSdpdGVtJ1xuXG4gICAgICAgIGNvbnN0IGl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBpdGVtSW1nLnNyYyA9IGltZ1xuXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50PU5hbWVcbiAgICAgICAgaXRlbU5hbWUuY2xhc3NOYW1lPSdpdGVtTmFtZSdcbiAgICAgICAgY29uc3QgaXRlbVByaWNlICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQ9UHJpY2VcbiAgICAgICAgXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUltZylcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSlcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpXG5cbiAgICAgICAgc2hvcExpc3QuYXBwZW5kQ2hpbGQoaXRlbSlcbiAgICB9XG5cblxuICAgc2hvcFNlY3QuYXBwZW5kQ2hpbGQoc2hvcExpc3QpXG4gICBzaG9wQm9keS5hcHBlbmRDaGlsZChzaG9wU2VjdClcblxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJylcbmZvb3Rlci5jbGFzc05hbWU9J2Zvb3RlclNob3AnXG5cbmNvbnN0IHByb2ZpbGVEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2ZpbGVEZXRhaWwuY2xhc3NOYW1lPSdwcm9maWxlRGV0YWlsJ1xuXG5jb25zdCBpbnB1dFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuaW5wdXRTZWN0LmNsYXNzTmFtZT0naW5wdXRTZWN0J1xuXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmlucHV0LnBsYWNlaG9sZGVyPSdTZWFyY2ggUHJvZHVjdCdcblxuY29uc3QgaW5wdXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmlucHV0SWNvbi5jbGFzc05hbWU9J0lucHV0SUNPTidcblxuaW5wdXRTZWN0LmFwcGVuZENoaWxkKGlucHV0KVxuaW5wdXRTZWN0LmFwcGVuZENoaWxkKGlucHV0SWNvbilcblxucHJvZmlsZURldGFpbC5hcHBlbmRDaGlsZChpbnB1dFNlY3QpXG5cbnNob3BCb2R5LmFwcGVuZENoaWxkKHByb2ZpbGVEZXRhaWwpXG5cblxuY29uc3QgY2hlY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IENhdGVnb3J5UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbkNhdGVnb3J5UGFyYS50ZXh0Q29udGVudD0nQ2F0ZWdvcnknXG5jaGVja0xpc3QuYXBwZW5kQ2hpbGQoQ2F0ZWdvcnlQYXJhKVxuY2hlY2tMaXN0LmNsYXNzTmFtZT0nY2hlY2tMaXN0J1xuY3JlYXRlQ2hlY2soJ1NhbmR3aWNoZXMnKVxuY3JlYXRlQ2hlY2soJ0J1cmdlcicpXG5jcmVhdGVDaGVjaygnQ2hpY2tlbiBDaHVwJylcbmNyZWF0ZUNoZWNrKCdEcmluaycpXG5jcmVhdGVDaGVjaygnUGl6emEnKVxuY3JlYXRlQ2hlY2soJ1RoaScpXG5jcmVhdGVDaGVjaygnTm9uIHZlZycpXG5jcmVhdGVDaGVjaygnVW5jYXRlZ29yaXplJylcblxuXG5mdW5jdGlvbiBjcmVhdGVDaGVjayhOYW1lKXtcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYS5jbGFzc05hbWU9J2NoZWNrUGFyYSdcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnR5cGU9J2NoZWNrYm94J1xuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwudGV4dENvbnRlbnQ9YCR7TmFtZX1gXG5cbiAgICBwYXJhLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIHBhcmEuYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICBjaGVja0xpc3QuYXBwZW5kQ2hpbGQocGFyYSlcbn1cblxuY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmFkZC5jbGFzc05hbWU9J2FkdmVydGlzZSdcblxuY29uc3QgbGF0ZXN0UHJvZHVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5sYXRlc3RQcm9kdWN0LmNsYXNzTmFtZT0nbGF0ZXN0UHInXG5jb25zdCBwclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxucHJUaXRsZS50ZXh0Q29udGVudD0nTGF0ZXN0IFByb2plY3QnXG5sYXRlc3RQcm9kdWN0LmFwcGVuZENoaWxkKHByVGl0bGUpXG5jcmVhdGVQcigncGl6YWEnLCcxMiQnLG1lbnVJdGVtSW1nWzRdKVxuY3JlYXRlUHIoJ3BpemFhJywnMTIkJyxtZW51SXRlbUltZ1s0XSlcbmNyZWF0ZVByKCdwaXphYScsJzEyJCcsbWVudUl0ZW1JbWdbNF0pXG5jcmVhdGVQcigncGl6YWEnLCcxMiQnLG1lbnVJdGVtSW1nWzRdKVxuXG5mdW5jdGlvbiBjcmVhdGVQcihuYW1lLHByaWNlLGltZyl7XG4gICAgY29uc3QgcHIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcjEuY2xhc3NOYW1lPSdsaXN0UHInXG4gICAgY29uc3QgUHJpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIFByaW1nLnNyYz0gaW1nXG4gICAgY29uc3QgcHJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcHJOYW1lLnRleHRDb250ZW50PW5hbWVcblxuICAgIGNvbnN0IHByUHJpY2UgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHByUHJpY2UudGV4dENvbnRlbnQ9cHJpY2VcblxuICAgIHByMS5hcHBlbmRDaGlsZChQcmltZylcbiAgICBwcjEuYXBwZW5kQ2hpbGQocHJOYW1lKVxuICAgIHByMS5hcHBlbmRDaGlsZChwclByaWNlKVxuXG4gICAgbGF0ZXN0UHJvZHVjdC5hcHBlbmRDaGlsZChwcjEpXG5cbn1cblxuXG5cbnByb2ZpbGVEZXRhaWwuYXBwZW5kQ2hpbGQoY2hlY2tMaXN0KVxucHJvZmlsZURldGFpbC5hcHBlbmRDaGlsZChhZGQpXG5wcm9maWxlRGV0YWlsLmFwcGVuZENoaWxkKGxhdGVzdFByb2R1Y3QpXG5cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBwcm9maWxlSW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRlc3RpbW9uaWFsKCl7XG5jb25zdCB0ZXN0aW1vbmlhbFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudGVzdGltb25pYWxTZWN0LmNsYXNzTmFtZT0nVGVzdGltb25pYWwnXG5jb25zdCB0aXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG50aXRsZTEudGV4dENvbnRlbnQ9J1Rlc3RpbW9uaWFscydcbmNvbnN0IHRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbnRpdGxlMi50ZXh0Q29udGVudD0nV2hhdCBvdXIgY2xpZW50IGFyZSBzYXlpbmcnXG5jb25zdCB0ZXN0aW1vbmlhbENhcmRTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnRlc3RpbW9uaWFsQ2FyZFNlY3QuY2xhc3NOYW1lPSd0ZXN0aW1vbmlhbENhcmRTZWN0J1xuY29uc3QgdGVzdGltb25pYWxDYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG50ZXN0aW1vbmlhbENhcmRzLmNsYXNzTmFtZT0ndGVzdGltb25pYWxDYXJkcydcbmNvbnN0IHByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxucHJvZmlsZS5jbGFzc05hbWU9J3Byb2ZpbGUnXG5wcm9maWxlLnNyYyA9IHByb2ZpbGVJbWdbMF1cblxuY29uc3QgZ3Jhc3NDb3JuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuZ3Jhc3NDb3JuZXIuY2xhc3NOYW1lPSdncmFzc0Nvcm5lckltZydcbmdyYXNzQ29ybmVyLnNyYyA9IHByb2ZpbGVJbWdbN11cblxuY29uc3QgcmV2aXdlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxucmV2aXdlUGFyYS50ZXh0Q29udGVudD0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBkaWFtIHBlbGxlbnRlc3F1ZSBiaWJlbmR1bSBub24gZHVpIHZvbHV0cGF0IGZyaW5naWxsYSBiaWJlbmR1bS4gVXJuYSwgZWxpdCBhdWd1ZSB1cm5hLCB2aXRhZSBmZXVnaWF0IHByZXRpdW0gZG9uZWMgaWQgZWxlbWVudHVtLiBVbHRyaWNlcyBtYXR0aXMgc2VkIHZpdGFlIG11cyByaXN1cy4gTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyBzaXQgZXUgdmVsaXQgaW4gY29uc2VxdWF0LidcblxuY29uc3QgdGVzdGltb25pYWxHcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG50ZXN0aW1vbmlhbEdyZWVuLmNsYXNzTmFtZT0ndGVzdGltb25pYWxHcmVlbidcbnRlc3RpbW9uaWFsR3JlZW4uc3JjPXByb2ZpbGVJbWdbMV1cbmNvbnN0IHN0YXJTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnN0YXJTZWN0LmNsYXNzTmFtZT0nc3RhclNlY3QnXG5cbmNvbnN0IHN0YXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbnN0YXIxLnNyYyA9IHByb2ZpbGVJbWdbMl1cblxuY29uc3Qgc3RhcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuc3RhcjIuc3JjID0gcHJvZmlsZUltZ1syXVxuXG5jb25zdCBzdGFyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5zdGFyMy5zcmMgPSBwcm9maWxlSW1nWzJdXG5cbmNvbnN0IHN0YXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbnN0YXI0LnNyYyA9IHByb2ZpbGVJbWdbMl1cblxuY29uc3Qgc3RhcjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuc3RhcjUuc3JjPXByb2ZpbGVJbWdbMl1cbmNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbm5hbWUudGV4dENvbnRlbnQgPSAnQWxhbWluIEhhc2FuJ1xuXG5jb25zdCBkZXNpZ25hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuZGVzaWduYXRpb24uY2xhc3NOYW1lPSdkZXNpZ24nXG5kZXNpZ25hdGlvbi50ZXh0Q29udGVudD0nRm9vZCBTcGVjaWFsaXN0J1xuXG5jb25zdCBzbGlkZXJEb3RTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnNsaWRlckRvdFNlY3QuY2xhc3NOYW1lPSdTbGlkZXJEb3QnXG5cbmNvbnN0IGRvdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgZG90MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBkb3QzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IGRvdDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG5zbGlkZXJEb3RTZWN0LmFwcGVuZENoaWxkKGRvdDEpXG5zbGlkZXJEb3RTZWN0LmFwcGVuZENoaWxkKGRvdDIpXG5zbGlkZXJEb3RTZWN0LmFwcGVuZENoaWxkKGRvdDMpXG5zbGlkZXJEb3RTZWN0LmFwcGVuZENoaWxkKGRvdDQpXG5cbnN0YXJTZWN0LmFwcGVuZENoaWxkKHN0YXIxKVxuc3RhclNlY3QuYXBwZW5kQ2hpbGQoc3RhcjIpXG5zdGFyU2VjdC5hcHBlbmRDaGlsZChzdGFyMylcbnN0YXJTZWN0LmFwcGVuZENoaWxkKHN0YXI0KVxuXG50ZXN0aW1vbmlhbFNlY3QuYXBwZW5kQ2hpbGQodGl0bGUxKVxudGVzdGltb25pYWxTZWN0LmFwcGVuZENoaWxkKHRpdGxlMilcbnRlc3RpbW9uaWFsQ2FyZHMuYXBwZW5kQ2hpbGQocHJvZmlsZSlcbnRlc3RpbW9uaWFsQ2FyZFNlY3QuYXBwZW5kQ2hpbGQodGVzdGltb25pYWxDYXJkcylcbnRlc3RpbW9uaWFsQ2FyZFNlY3QuYXBwZW5kQ2hpbGQoc2xpZGVyRG90U2VjdClcbnRlc3RpbW9uaWFsQ2FyZHMuYXBwZW5kQ2hpbGQocmV2aXdlUGFyYSlcbnRlc3RpbW9uaWFsQ2FyZHMuYXBwZW5kQ2hpbGQoc3RhclNlY3QpXG50ZXN0aW1vbmlhbENhcmRzLmFwcGVuZENoaWxkKG5hbWUpXG50ZXN0aW1vbmlhbENhcmRzLmFwcGVuZENoaWxkKGRlc2lnbmF0aW9uKVxudGVzdGltb25pYWxDYXJkU2VjdC5hcHBlbmRDaGlsZCh0ZXN0aW1vbmlhbEdyZWVuKVxudGVzdGltb25pYWxTZWN0LmFwcGVuZENoaWxkKGdyYXNzQ29ybmVyKVxudGVzdGltb25pYWxTZWN0LmFwcGVuZENoaWxkKHRlc3RpbW9uaWFsQ2FyZFNlY3QpXG5jb250ZW50LmFwcGVuZENoaWxkKHRlc3RpbW9uaWFsU2VjdClcblxuc2V0VGltZW91dChhbmltYXRpb24sMzAwMClcbmZ1bmN0aW9uIGFuaW1hdGlvbigpe1xuICAgIHByb2ZpbGUuc3JjPXByb2ZpbGVJbWdbMF1cbiAgICBuYW1lLnRleHRDb250ZW50PSdBbGFtaW4gSGFzYW4nXG4gICAgZGVzaWduYXRpb24udGV4dENvbnRlbnQ9J0Zvb2QgU3BlY2lhbGlzdCdcbiAgICByZXZpd2VQYXJhLnRleHRDb250ZW50PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGRpYW0gcGVsbGVudGVzcXVlIGJpYmVuZHVtIG5vbiBkdWkgdm9sdXRwYXQgZnJpbmdpbGxhIGJpYmVuZHVtLiBVcm5hLCBlbGl0IGF1Z3VlIHVybmEsIHZpdGFlIGZldWdpYXQgcHJldGl1bSBkb25lYyBpZCBlbGVtZW50dW0uIFVsdHJpY2VzIG1hdHRpcyBzZWQgdml0YWUgbXVzIHJpc3VzLiBMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHNpdCBldSB2ZWxpdCBpbiBjb25zZXF1YXQuJ1xuICAgIGRvdDEuc3R5bGUub3BhY2l0eT0nMSdcbiAgICBkb3Q0LnN0eWxlLm9wYWNpdHk9JzAuNCdcbiAgICBzZXRUaW1lb3V0KHNsaWRlcjEsMzAwMClcblxuXG5cblxuZnVuY3Rpb24gc2xpZGVyMSgpe1xuICAgIHByb2ZpbGUuc3JjPXByb2ZpbGVJbWdbNF1cbiAgICBkb3Q0LnN0eWxlLm9wYWNpdHk9JzAuNCdcbiAgICBuYW1lLnRleHRDb250ZW50ID0gJ1RvbSB3YXJuZXInXG4gICAgZGVzaWduYXRpb24udGV4dENvbnRlbnQ9J0N1c3RvbWVyJ1xuICAgIHJldml3ZVBhcmEudGV4dENvbnRlbnQ9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgZGlhbSBwZWxsZW50ZXNxdWUgYmliZW5kdW0gbm9uIGV0IGFjIGRhcGlidXMgc2l0IGV1IHZlbGl0IGluIGNvbnNlcXVhdC4nXG4gICAgZG90MS5zdHlsZS5vcGFjaXR5PScwLjQnXG4gICAgZG90Mi5zdHlsZS5vcGFjaXR5PScxJ1xuICAgIHN0YXJTZWN0LnJlbW92ZUNoaWxkKHN0YXI0KVxuXG4gICAgc2V0VGltZW91dChzbGlkZXIyLDMwMDApXG4gICAgXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNsaWRlcjIoKXtcbiAgICAgICAgcHJvZmlsZS5zcmM9cHJvZmlsZUltZ1s1XVxuICAgICAgICBuYW1lLnRleHRDb250ZW50PSdDaHJpcyBnZWxsJ1xuICAgICAgICBkZXNpZ25hdGlvbi50ZXh0Q29udGVudD0nQ3VzdG9tZXInXG4gICAgICAgIHJldml3ZVBhcmEudGV4dENvbnRlbnQ9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgZGlhbSAgZWxlbWVudHVtLiBVbHRyaWNlcyBtYXR0aXMgc2VkIHZpdGFlIG11cyByaXN1cy4gTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyBzaXQgZXUgdmVsaXQgaW4gY29uc2VxdWF0LidcbiAgICAgICAgZG90Mi5zdHlsZS5vcGFjaXR5PScwLjQnXG4gICAgICAgIGRvdDMuc3R5bGUub3BhY2l0eT0nMSdcbiAgICAgICAgc3RhclNlY3QuYXBwZW5kQ2hpbGQoc3RhcjQpXG4gICAgICAgIHN0YXJTZWN0LmFwcGVuZENoaWxkKHN0YXI1KVxuICAgICAgICBzZXRUaW1lb3V0KHNsaWRlcjMsMzAwMClcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gc2xpZGVyMygpe1xuICAgICAgICAgICAgcHJvZmlsZS5zcmM9cHJvZmlsZUltZ1s2XVxuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudD0nVG9rb3lhIHdhbGtlcidcbiAgICAgICAgICAgIGRlc2lnbmF0aW9uLnRleHRDb250ZW50PSdDdXN0b21lcidcbiAgICAgICAgICAgIHJldml3ZVBhcmEudGV4dENvbnRlbnQ9J3ZvbHV0cGF0IGZyaW5naWxsYSBiaWJlbmR1bS4gVXJuYSwgZWxpdCBhdWd1ZSB1cm5hLCB2aXRhZSBmZXVnaWF0IHByZXRpdW0gZG9uZWMgaWQgZWxlbWVudHVtLiBVbHRyaWNlcyBtYXR0aXMgc2VkIHZpdGFlIG11cyByaXN1cy4gTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyBzaXQgZXUgdmVsaXQgaW4gY29uc2VxdWF0LidcbiAgICAgICAgICAgIGRvdDMuc3R5bGUub3BhY2l0eSA9Jy40J1xuICAgICAgICAgICAgZG90NC5zdHlsZS5vcGFjaXR5PScxJ1xuICAgICAgICAgICAgc3RhclNlY3QucmVtb3ZlQ2hpbGQoc3RhcjUpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGFuaW1hdGlvbiwzMDAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxufSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIlxuaW1wb3J0IHsgV2h5SW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdoeUNob29zZSgpe1xuXG4gICAgY29uc3QgbWFpblNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgICBtYWluU2VjdC5jbGFzc05hbWUgPSdtYWluU2VjdCdcblxuICAgIGNvbnN0IG1lZGlhU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3Qgd2h5MUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgd2h5MUltZy5zcmM9V2h5SW1nWzBdXG4gICAgY29uc3Qgd2h5MkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgd2h5MkltZy5zcmM9V2h5SW1nWzFdXG4gICAgY29uc3Qgd2h5M0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgd2h5M0ltZy5zcmM9V2h5SW1nWzJdXG4gICAgY29uc3Qgd2h5NEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgd2h5NEltZy5zcmM9V2h5SW1nWzNdXG4gICAgY29uc3Qgd2h5NUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgd2h5NUltZy5zcmM9V2h5SW1nWzRdXG4gICAgY29uc3Qgd2h5NkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgd2h5NkltZy5zcmM9V2h5SW1nWzVdXG5cbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQod2h5MUltZylcbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQod2h5MkltZylcbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQod2h5M0ltZylcbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQod2h5NEltZylcbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQod2h5NUltZylcbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQod2h5NkltZylcblxuICAgIG1haW5TZWN0LmFwcGVuZENoaWxkKG1lZGlhU2VjdClcblxuICAgIGNvbnN0IHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0ZXh0Q29udGVudC5jbGFzc05hbWU9J3RleENvbnRlbnQnXG4gICAgY29uc3QgVGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIFRpdGxlMS50ZXh0Q29udGVudD0nV2h5IENob29zZSB1cydcbiAgICBjb25zdCBUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgVGl0bGUyLmlubmVySFRNTD0nPHNwYW4+RXg8L3NwYW4+dHJhIG9yZGluYXJ5IHRhc3RlIDxicj4gQW5kIEV4cGVyaWFuY2UnXG5cbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGVzYy50ZXh0Q29udGVudD0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBkaWFtIHBlbGxlbnRlc3F1ZSBiaWJlbmR1bSBub24gZHVpIHZvbHV0cGF0IGZyaW5naWxsYSBiaWJlbmR1bS4gVXJuYSwgZWxpdCBhdWd1ZSB1cm5hLCB2aXRhZSBmZXVnaWF0IHByZXRpdW0gZG9uZWMgaWQgZWxlbWVudHVtLiBVbHRyaWNlcyBtYXR0aXMgc2VkIHZpdGFlIG11cyByaXN1cy4gTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyBzaXQgZXUgdmVsaXQgaW4gY29uc2VxdWF0LidcblxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKFRpdGxlMSlcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChUaXRsZTIpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzYylcblxuICAgIGNvbnN0IG1lYWxDYXRTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZWFsQ2F0U2VjdC5jbGFzc05hbWU9J21lYWxDYXRTZWN0J1xuICAgIGNvbnN0IGZhc3RGb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBMdW5jaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgRGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IEZhc3RGb29kUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIEZhc3RGb29kUC5jbGFzc05hbWU9J0Zhc3RGb29kUCdcbiAgICBGYXN0Rm9vZFAudGV4dENvbnRlbnQ9J0Zhc3QgRm9vZCdcbiAgICBjb25zdCBMdW5jaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBMdW5jaFAuY2xhc3NOYW1lPSdMdW5jaFAnXG4gICAgTHVuY2hQLnRleHRDb250ZW50PSdMdW5jaCdcbiAgICBjb25zdCBEaW5uZXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgRGlubmVyUC5jbGFzc05hbWU9J0Rpbm5lclAnXG4gICAgRGlubmVyUC50ZXh0Q29udGVudD0nRGlubmVyJ1xuICAgIGNvbnN0IEV4cGVyaWFuY2VTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBFeHBlcmlhbmNlU2VjdC5jbGFzc05hbWU9J0V4cGVyaWFuY2VTZWN0J1xuXG4gICAgY29uc3QgRXhwZXJpYW5jZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBFeHBlcmlhbmNlUC50ZXh0Q29udGVudD0nMzArJ1xuICAgIGNvbnN0IEV4cGVyaWFuY2VQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIEV4cGVyaWFuY2VQMi5pbm5lckhUTUw9JzxzcGFuPnllYXJzIG9mPC9zcGFuPiA8YnI+IEV4cGVyaWFuY2VkJ1xuICAgIG1lYWxDYXRTZWN0LmFwcGVuZENoaWxkKGZhc3RGb29kKVxuICAgIG1lYWxDYXRTZWN0LmFwcGVuZENoaWxkKEx1bmNoKVxuICAgIG1lYWxDYXRTZWN0LmFwcGVuZENoaWxkKERpbm5lcilcbiAgICBcblxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKG1lYWxDYXRTZWN0KVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKEZhc3RGb29kUClcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChMdW5jaFApXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoRGlubmVyUClcbiAgICBFeHBlcmlhbmNlU2VjdC5hcHBlbmRDaGlsZChFeHBlcmlhbmNlUClcbiAgICBFeHBlcmlhbmNlU2VjdC5hcHBlbmRDaGlsZChFeHBlcmlhbmNlUDIpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoRXhwZXJpYW5jZVNlY3QpXG4gICAgbWFpblNlY3QuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpXG4gICAgXG5cbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5TZWN0KVxuXG5cblxuXG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=