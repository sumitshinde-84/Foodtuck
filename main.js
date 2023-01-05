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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".AboutSectPage{\n\n    width: 80vw;\n    height: 100%;\n    display: flex;\n}\n\n\n.AboutSectPage .mediaSect {\n\n width: 50%;\n height:550px;\n /* border: 1px var(--primary-clr) solid; */\n display: grid;\n grid-template-columns: 1fr 1fr;\n grid-template-rows: 1fr 1fr;\n align-items: center;\n justify-content: center;\n \n\n \n\n}\n\n.AboutSectPage .mediaSect img:first-child{\n    width: 200px;\n    height: 350px;\n    grid-column: 1 / 2;\n    grid-row: 1/3;\n   \n\n}\n\n.AboutSectPage .mediaSect img:nth-child(2){\n    width: 180px;\n    height: 180px;\n    position: relative;\n    top: 80px;\n    right: 40px;\n   \n\n}\n\n.AboutSectPage .mediaSect img:last-child{\n    width: 180px;\n    height: 250px;\n    position: relative;\n    top: 30px;\n    right: 40px;\n\n}\n\n.AboutSectPage .textContent {\n    padding-top: 150px;\n    width: 50%;\n    height:550px;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column;\n    \n     \n   \n   }\n\n\n   .AboutSectPage .textContent h2{\n    \n    font-size: 30px;\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: -14px 35px;\n    \n   }\n\n   .AboutSectPage .textContent h1{\n\n    color: rgba(0, 0, 0, 0.915);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    margin: 10px 35px;\n    margin-bottom: 20px;\n   \n   }\n\n   .AboutSectPage .textContent p{\n\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.892);\n    width: 360px;\n    margin: 10px 35px;\n    font-family:'Inter', sans-serif;\n   \n    \n     \n   \n   }\n\n\n\n  .AboutSectPage  .button1{\n    padding: 12px 20px;\n    border-radius: 3px;\n  \n\n   }\n\n\n   .AboutSectPage .button2{\n    \n    padding: 21px;\n    width: 10px;\n    border-radius: 50%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    position: relative;\n    top: -60px;\n    left: 140px;\n\n\n   }\n\n   .AboutSectPage .btnPara{\n    \n    font-family: 'Inter',sans-serif;\n    font-weight: 600;\n    position: relative;\n    top: -110px;\n    left: 190px;\n   }", "",{"version":3,"sources":["webpack://./src/css/aboutPage.css"],"names":[],"mappings":"AAAA;;IAEI,WAAW;IACX,YAAY;IACZ,aAAa;AACjB;;;AAGA;;CAEC,UAAU;CACV,YAAY;CACZ,0CAA0C;CAC1C,aAAa;CACb,8BAA8B;CAC9B,2BAA2B;CAC3B,mBAAmB;CACnB,uBAAuB;;;;;AAKxB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,aAAa;;;AAGjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,WAAW;;;AAGf;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,WAAW;;AAEf;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;;;;GAIvB;;;GAGA;;IAEC,eAAe;IACf,gBAAgB;IAChB,yBAAyB;IACzB,mCAAmC;IACnC,kBAAkB;;GAEnB;;GAEA;;IAEC,2BAA2B;IAC3B,kCAAkC;IAClC,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,mBAAmB;;GAEpB;;GAEA;;IAEC,eAAe;IACf,2BAA2B;IAC3B,YAAY;IACZ,iBAAiB;IACjB,+BAA+B;;;;;GAKhC;;;;EAID;IACE,kBAAkB;IAClB,kBAAkB;;;GAGnB;;;GAGA;;IAEC,aAAa;IACb,WAAW;IACX,kBAAkB;IAClB,yDAA2C;IAC3C,4BAA4B;IAC5B,2BAA2B;IAC3B,kBAAkB;IAClB,UAAU;IACV,WAAW;;;GAGZ;;GAEA;;IAEC,+BAA+B;IAC/B,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,WAAW;GACZ","sourcesContent":[".AboutSectPage{\n\n    width: 80vw;\n    height: 100%;\n    display: flex;\n}\n\n\n.AboutSectPage .mediaSect {\n\n width: 50%;\n height:550px;\n /* border: 1px var(--primary-clr) solid; */\n display: grid;\n grid-template-columns: 1fr 1fr;\n grid-template-rows: 1fr 1fr;\n align-items: center;\n justify-content: center;\n \n\n \n\n}\n\n.AboutSectPage .mediaSect img:first-child{\n    width: 200px;\n    height: 350px;\n    grid-column: 1 / 2;\n    grid-row: 1/3;\n   \n\n}\n\n.AboutSectPage .mediaSect img:nth-child(2){\n    width: 180px;\n    height: 180px;\n    position: relative;\n    top: 80px;\n    right: 40px;\n   \n\n}\n\n.AboutSectPage .mediaSect img:last-child{\n    width: 180px;\n    height: 250px;\n    position: relative;\n    top: 30px;\n    right: 40px;\n\n}\n\n.AboutSectPage .textContent {\n    padding-top: 150px;\n    width: 50%;\n    height:550px;\n    /* border: 1px var(--primary-clr) solid; */\n    display: flex;\n    flex-direction: column;\n    \n     \n   \n   }\n\n\n   .AboutSectPage .textContent h2{\n    \n    font-size: 30px;\n    font-weight: 300;\n    color: var(--primary-clr);\n    font-family: 'Great Vibes', cursive;\n    margin: -14px 35px;\n    \n   }\n\n   .AboutSectPage .textContent h1{\n\n    color: rgba(0, 0, 0, 0.915);\n    font-family: Helvetica, sans-serif;\n    width: 450px;\n    font-size: 40px;\n    margin: 10px 35px;\n    margin-bottom: 20px;\n   \n   }\n\n   .AboutSectPage .textContent p{\n\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.892);\n    width: 360px;\n    margin: 10px 35px;\n    font-family:'Inter', sans-serif;\n   \n    \n     \n   \n   }\n\n\n\n  .AboutSectPage  .button1{\n    padding: 12px 20px;\n    border-radius: 3px;\n  \n\n   }\n\n\n   .AboutSectPage .button2{\n    \n    padding: 21px;\n    width: 10px;\n    border-radius: 50%;\n    background-image: url('../images/play.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    position: relative;\n    top: -60px;\n    left: 140px;\n\n\n   }\n\n   .AboutSectPage .btnPara{\n    \n    font-family: 'Inter',sans-serif;\n    font-weight: 600;\n    position: relative;\n    top: -110px;\n    left: 190px;\n   }"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBdUIscUJBQXFCLEdBQUcsYUFBYSx3RkFBd0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8saUJBQWlCLGFBQWEsV0FBVyxZQUFZLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxh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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxNQUFNOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBbUI7Ozs7QUFJdkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTm1DO0FBQ0k7QUFDQTtBQUNDO0FBQ0M7QUFDQTtBQUNEO0FBQ0g7QUFDRzs7QUFFakM7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbURBQWM7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvTWVudVBhZ2UuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9XaHlDaG9vc2UuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9hYm91dC5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL2Fib3V0UGFnZS5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL2Jsb2cuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9ibG9nUGFnZS5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL2Zvb2RDYXQuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9mb290ZXIuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9mcm9tTWVudS5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL2hvbWUuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3Mvb3VyQ2hlZi5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL3BhZ2VIZWFkZXIuY3NzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9yZXN0cmF1QWN0aXZlLmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvcmVzdHJhdUluZm9TZWN0LmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3Mvc2hvcC5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvY3NzL3Rlc3RpbW9uaWFsLmNzcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9jc3MvdmFycmlhYmxlcy5jc3MiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL2Nzcy9tYWluLmNzcz8yYzlmIiwid2VicGFjazovL2Zvb2R0dWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvbW9kdWxlcy9hYm91dFBhZ2UuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvbW9kdWxlcy9hYm91dFVzLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvYmxvZy5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL2Jsb2dQYWdlLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvZm9vZENhdC5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL2Zyb21NZW51LmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL21lbnVQYWdlLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvb3VyQ2hlZi5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL3BhZ2VIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svLi9zcmMvbW9kdWxlcy9yZXN0cmF1QWN0aXZlLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvcmVzdHJhdUluZm9TZWN0LmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvc2hvcC5qcyIsIndlYnBhY2s6Ly9mb29kdHVjay8uL3NyYy9tb2R1bGVzL3Rlc3RpbW9uaWFsLmpzIiwid2VicGFjazovL2Zvb2R0dWNrLy4vc3JjL21vZHVsZXMvd2h5Q2hvb3NlLmpzIiwid2VicGFjazovL2Zvb2R0dWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvb2R0dWNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Zvb2R0dWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Zvb2R0dWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9mb29kdHVjay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZm9vZHR1Y2svd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvaGVhZGVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy90b3RhbEluZm9TZWN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYm9keVBhZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG4gICAgXFxufVxcblxcbi5oZWFkZXJGb3JOYXZ7XFxuICAgIFxcbiAgICBncmlkLWNvbHVtbjogMS8xNDtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY2xyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcblxcblxcbi5sb2dvRm9ySGVhZGVye1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG59XFxuXFxuLm5hdkZvckhlYWRlcntcXG5cXG4gICAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xcbn1cXG5cXG4uaGVhZGVyRm9yTmF2IGgxe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTUwcHg7XFxuICAgIGxlZnQ6IDU3MHB4O1xcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVyRm9yTmF2IHB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxOTBweDtcXG4gICAgbGVmdDogNTk2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LWNscik7XFxufVxcblxcbi5oZWFkZXJGb3JOYXYgc3BhbntcXG4gIFxcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG59XFxuXFxuXFxuLk1lbnVCb2R5e1xcbiAgICBncmlkLWNvbHVtbjogMS8xNDtcXG4gICAgZ3JpZC1yb3c6IDUvNTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBcXG59XFxuXFxuLk1lbnVCb2R5IGltZ3tcXG4gICAgd2lkdGg6IDM4MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5NZW51Qm9keSAub25le1xcbiAgICB3aWR0aDogOTQwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHhcXG4gICBcXG4gICAgO1xcbn1cXG5cXG5cXG5cXG4uTWVudUJvZHkgIGxpe1xcbiAgICBtYXJnaW46IDIwcHggMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBcXG4gfVxcblxcbiAuTWVudUJvZHkgIHA6Zmlyc3QtY2hpbGR7XFxuICAgIGdyaWQtY29sdW1uOiAxLzY7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBcXG5cXG4gfVxcblxcblxcblxcbiAuTWVudUJvZHkgIHA6bnRoLWNoaWxkKDIpe1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XFxuIH1cXG4gXFxuXFxuIC5NZW51Qm9keSAgcDpudGgtY2hpbGQoMyl7XFxuICAgIFxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBtYXJnaW4tbGVmdDoxMDBweDtcXG4gfVxcblxcbiAuTWVudUJvZHkgaDJ7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIFxcbiB9XFxuXFxuXFxuIC5yZXN0cmF1SW5mb1NlY3RGb3JIZWFkZXJ7XFxuICAgZ3JpZC1jb2x1bW46IDEgLzE0O1xcbiAgIGdyaWQtcm93OiAyNC8yODtcXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbjtcXG59XFxuXFxuLk1lbnVCb2R5IGRpdjpudGgtY2hpbGQoMyl7XFxuXFxuICAgIG1hcmdpbi10b3A6IDUwMHB4O1xcbiAgICA7XFxufVxcblxcbi5NZW51Qm9keSAud29ya1dpdGh7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDotMzUwcHg7XFxuICAgIGxlZnQ6IDE1MHB4O1xcbiAgICBcXG4gICBcXG59XFxuXFxuXFxuXFxuLk1lbnVCb2R5IC53b3JrV2l0aCBpbWd7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiAxMzBweDs7XFxuXFxuICAgIFxcbn1cXG5cXG4ucGFydG5lcntcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgXFxuICAgIFxcbn1cXG5cXG4ucGFydG5lciBwe1xcbiAgIFxcbm1hcmdpbi1sZWZ0OiA0MyU7XFxubWFyZ2luLXRvcDogNjBweDtcXG59XFxuXFxuLnBhcnRuZXIgaDJ7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxuICAgIFxcbiAgICB9XFxuXFxuLmNvbnRlbnRTZWNvbmRTdHlsZXtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbmJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjgwNCk7XFxuaGVpZ2h0OiAxMDAlO1xcbmRpc3BsYXk6IGdyaWQ7XFxuZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiw4OHB4KTtcXG5ncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2MCw3MHB4KTtcXG5nYXA6MHB4IDI0cHg7XFxuei1pbmRleDogMTtcXG59XFxuXFxuLmZvb3RlckNsYXNze1xcbiAgICBncmlkLWNvbHVtbjogMS8xNDtcXG4gICAgZ3JpZC1yb3c6IDQ4LzU0O1xcbiAgICBwYWRkaW5nOiAzMHB4ICAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTMwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvTWVudVBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIseURBQTZDO0lBQzdDLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHdCQUF3Qjs7QUFFNUI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLG1CQUFtQjs7QUFFdkI7Ozs7QUFJQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLG1DQUFtQztJQUNuQyx3QkFBd0I7QUFDNUI7O0FBRUE7O0lBRUksbUNBQW1DO0lBQ25DLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTO0lBQ1Q7O0lBRUE7QUFDSjs7OztBQUlBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7O0lBRWIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QiwyQkFBMkI7O0NBRTlCOztDQUVBO0lBQ0csZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLCtCQUErQjs7O0NBR2xDOzs7O0NBSUE7SUFDRyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEI7OztDQUdBOztJQUVHLHlCQUF5QjtJQUN6QixpQkFBaUI7Q0FDcEI7O0NBRUE7SUFDRyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjs7Q0FFdEI7OztDQUdBO0dBQ0Usa0JBQWtCO0dBQ2xCLGVBQWU7R0FDZix5REFBb0Q7O0FBRXZEOztBQUVBOztJQUVJLGlCQUFpQjs7QUFFckI7O0FBRUE7O0lBRUksYUFBYTs7SUFFYixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXOzs7QUFHZjs7OztBQUlBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7OztBQUdqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7OztBQUd0Qjs7QUFFQTs7QUFFQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCOztJQUVoQjs7QUFFSjtJQUNJLFlBQVk7QUFDaEIscUNBQXFDO0FBQ3JDLFlBQVk7QUFDWixhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLHNDQUFzQztBQUN0QyxtQ0FBbUM7QUFDbkMsWUFBWTtBQUNaLFVBQVU7QUFDVjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmJvZHlQYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2hlYWRlci5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOjEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG4gICAgXFxufVxcblxcbi5oZWFkZXJGb3JOYXZ7XFxuICAgIFxcbiAgICBncmlkLWNvbHVtbjogMS8xNDtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY2xyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcblxcblxcbi5sb2dvRm9ySGVhZGVye1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG59XFxuXFxuLm5hdkZvckhlYWRlcntcXG5cXG4gICAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xcbn1cXG5cXG4uaGVhZGVyRm9yTmF2IGgxe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTUwcHg7XFxuICAgIGxlZnQ6IDU3MHB4O1xcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVyRm9yTmF2IHB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxOTBweDtcXG4gICAgbGVmdDogNTk2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjp2YXIoLS1wcmltYXJ5LWNscik7XFxufVxcblxcbi5oZWFkZXJGb3JOYXYgc3BhbntcXG4gIFxcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG59XFxuXFxuXFxuLk1lbnVCb2R5e1xcbiAgICBncmlkLWNvbHVtbjogMS8xNDtcXG4gICAgZ3JpZC1yb3c6IDUvNTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBcXG59XFxuXFxuLk1lbnVCb2R5IGltZ3tcXG4gICAgd2lkdGg6IDM4MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5NZW51Qm9keSAub25le1xcbiAgICB3aWR0aDogOTQwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHhcXG4gICBcXG4gICAgO1xcbn1cXG5cXG5cXG5cXG4uTWVudUJvZHkgIGxpe1xcbiAgICBtYXJnaW46IDIwcHggMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBcXG4gfVxcblxcbiAuTWVudUJvZHkgIHA6Zmlyc3QtY2hpbGR7XFxuICAgIGdyaWQtY29sdW1uOiAxLzY7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBcXG5cXG4gfVxcblxcblxcblxcbiAuTWVudUJvZHkgIHA6bnRoLWNoaWxkKDIpe1xcbiAgICBncmlkLWNvbHVtbjogMS82O1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XFxuIH1cXG4gXFxuXFxuIC5NZW51Qm9keSAgcDpudGgtY2hpbGQoMyl7XFxuICAgIFxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBtYXJnaW4tbGVmdDoxMDBweDtcXG4gfVxcblxcbiAuTWVudUJvZHkgaDJ7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIFxcbiB9XFxuXFxuXFxuIC5yZXN0cmF1SW5mb1NlY3RGb3JIZWFkZXJ7XFxuICAgZ3JpZC1jb2x1bW46IDEgLzE0O1xcbiAgIGdyaWQtcm93OiAyNC8yODtcXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy90b3RhbEluZm9TZWN0LnBuZycpO1xcbjtcXG59XFxuXFxuLk1lbnVCb2R5IGRpdjpudGgtY2hpbGQoMyl7XFxuXFxuICAgIG1hcmdpbi10b3A6IDUwMHB4O1xcbiAgICA7XFxufVxcblxcbi5NZW51Qm9keSAud29ya1dpdGh7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDotMzUwcHg7XFxuICAgIGxlZnQ6IDE1MHB4O1xcbiAgICBcXG4gICBcXG59XFxuXFxuXFxuXFxuLk1lbnVCb2R5IC53b3JrV2l0aCBpbWd7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiAxMzBweDs7XFxuXFxuICAgIFxcbn1cXG5cXG4ucGFydG5lcntcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgXFxuICAgIFxcbn1cXG5cXG4ucGFydG5lciBwe1xcbiAgIFxcbm1hcmdpbi1sZWZ0OiA0MyU7XFxubWFyZ2luLXRvcDogNjBweDtcXG59XFxuXFxuLnBhcnRuZXIgaDJ7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxuICAgIFxcbiAgICB9XFxuXFxuLmNvbnRlbnRTZWNvbmRTdHlsZXtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbmJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjgwNCk7XFxuaGVpZ2h0OiAxMDAlO1xcbmRpc3BsYXk6IGdyaWQ7XFxuZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiw4OHB4KTtcXG5ncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2MCw3MHB4KTtcXG5nYXA6MHB4IDI0cHg7XFxuei1pbmRleDogMTtcXG59XFxuXFxuLmZvb3RlckNsYXNze1xcbiAgICBncmlkLWNvbHVtbjogMS8xNDtcXG4gICAgZ3JpZC1yb3c6IDQ4LzU0O1xcbiAgICBwYWRkaW5nOiAzMHB4ICAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTMwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0hhbWJ1cmdlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvQ29va2llLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9XaW5lLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1haW5TZWN0e1xcbiAgICBncmlkLWNvbHVtbjogMiAvMTE7XFxuICAgIGdyaWQtcm93OiAyNi8zNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjMwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgXFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDEpe1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6cm93O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnIgMWZyIDFmciA7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmciAxZnIgMmZyO1xcblxcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgyKXtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDIpIGgye1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IFZpYmVzJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDIpIGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgyKSBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMikgPiBwe2ZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIHdpZHRoOiAzNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7fVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDEpIGltZzpmaXJzdC1jaGlsZHtcXG4gICAgd2lkdGg6MjUwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICBcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCgyKXtcXG4gICAgd2lkdGg6MTkwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAzLzU7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG59XFxuXFxuXFxuXFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCgzKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDMvNTtcXG4gICAgd2lkdGg6MTgwcHg7XFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDEpIGltZzpudGgtY2hpbGQoNCl7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIHdpZHRoOjE1MHB4O1xcbiAgICBcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCg1KXtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgd2lkdGg6MTAwcHg7XFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDEpIGltZzpudGgtY2hpbGQoNil7XFxuICAgIGdyaWQtY29sdW1uOiA0LzU7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIHdpZHRoOjEwMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDUwcHg7XFxufVxcblxcbi5tZWFsQ2F0U2VjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIG1hcmdpbjozMHB4IDEwcHggO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lYWxDYXRTZWN0ID5kaXY6Zmlyc3QtY2hpbGR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubWVhbENhdFNlY3QgPmRpdjpudGgtY2hpbGQoMil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubWVhbENhdFNlY3QgPmRpdjpudGgtY2hpbGQoMyl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG4uRmFzdEZvb2RQe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgICBsZWZ0OiA1cHg7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5MdW5jaFB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDY4cHg7XFxuICAgIGxlZnQ6IDEwNXB4O1xcbiAgICBcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLkRpbm5lclB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEwNXB4O1xcbiAgICBsZWZ0OiAxODhweDtcXG4gICAgXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdHtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItbGVmdDogNXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdCBwOmZpcnN0LWNoaWxke1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7IFxcbn1cXG5cXG4uRXhwZXJpYW5jZVNlY3QgcDpudGgtY2hpbGQoMil7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjpibGFjazsgXFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdCBwOm50aC1jaGlsZCgyKSBzcGFue1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuXFxuICAgIGNvbG9yOmJsYWNrOyBcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9XaHlDaG9vc2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixRQUFRO0lBQ1IsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHdDQUF3QztJQUN4QyxzQ0FBc0M7O0FBRTFDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQSwrQkFBK0IsZUFBZTtJQUMxQyx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwrQkFBK0IsQ0FBQzs7QUFFcEM7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7Ozs7QUFLQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXOztBQUVmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlEQUFnRDtJQUNoRCw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5REFBNkM7SUFDN0MsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseURBQTJDO0lBQzNDLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTOztJQUVULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7O0lBRVgsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVzs7SUFFWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZOztJQUVaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7O0lBRWhCLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWFpblNlY3R7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8xMTtcXG4gICAgZ3JpZC1yb3c6IDI2LzM0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MzBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSl7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzpyb3c7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmciAxZnIgMWZyIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyIDFmciAyZnI7XFxuXFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMikgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMikgaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxufVxcblxcbi5tYWluU2VjdCBkaXY6bnRoLWNoaWxkKDIpIHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgyKSA+IHB7Zm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgd2lkdGg6IDM2MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjt9XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOmZpcnN0LWNoaWxke1xcbiAgICB3aWR0aDoyNTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gIFxcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgxKSBpbWc6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDoxOTBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNTtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgxKSBpbWc6bnRoLWNoaWxkKDMpe1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMy81O1xcbiAgICB3aWR0aDoxODBweDtcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCg0KXtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgd2lkdGg6MTUwcHg7XFxuICAgIFxcbn1cXG5cXG4ubWFpblNlY3QgZGl2Om50aC1jaGlsZCgxKSBpbWc6bnRoLWNoaWxkKDUpe1xcbiAgICBncmlkLWNvbHVtbjogNC81O1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICB3aWR0aDoxMDBweDtcXG59XFxuXFxuLm1haW5TZWN0IGRpdjpudGgtY2hpbGQoMSkgaW1nOm50aC1jaGlsZCg2KXtcXG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogNTBweDtcXG59XFxuXFxuLm1lYWxDYXRTZWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbWFyZ2luOjMwcHggMTBweCA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVhbENhdFNlY3QgPmRpdjpmaXJzdC1jaGlsZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBoZWlnaHQ6IDY1cHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL0hhbWJ1cmdlci5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLm1lYWxDYXRTZWN0ID5kaXY6bnRoLWNoaWxkKDIpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGhlaWdodDogNjVweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvQ29va2llLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubWVhbENhdFNlY3QgPmRpdjpudGgtY2hpbGQoMyl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgaGVpZ2h0OiA2NXB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9XaW5lLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG4uRmFzdEZvb2RQe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgICBsZWZ0OiA1cHg7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5MdW5jaFB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDY4cHg7XFxuICAgIGxlZnQ6IDEwNXB4O1xcbiAgICBcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLkRpbm5lclB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEwNXB4O1xcbiAgICBsZWZ0OiAxODhweDtcXG4gICAgXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdHtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItbGVmdDogNXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcic7XFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdCBwOmZpcnN0LWNoaWxke1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7IFxcbn1cXG5cXG4uRXhwZXJpYW5jZVNlY3QgcDpudGgtY2hpbGQoMil7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjpibGFjazsgXFxufVxcblxcbi5FeHBlcmlhbmNlU2VjdCBwOm50aC1jaGlsZCgyKSBzcGFue1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuXFxuICAgIGNvbG9yOmJsYWNrOyBcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ZhcnJpYWJsZXMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYWJvdXRVc1NlY3RNYWlue1xcblxcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gIGdyaWQtcm93OiAxMC8xOTtcXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBnYXA6IDUwcHg7XFxuICBcXG4gIFxcbiAgXFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gZGl2OmZpcnN0LWNoaWxke1xcbiAgICBcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OjEyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIFxcbiAgICBcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBkaXY6bnRoLWNoaWxkKDIpXFxue1xcbiAgICBoZWlnaHQ6IDEyMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnI7XFxuICAgIGdhcDogOHB4OyAgXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gZGl2Om50aC1jaGlsZCgyKSBpbWc6Zmlyc3QtY2hpbGR7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEvMiA7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uYWJvdXRVc1NlY3RNYWluIGRpdjpudGgtY2hpbGQoMikgaW1nOm50aC1jaGlsZCgyKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLzI7XFxuICAgIGdyaWQtcm93OiAyLzMgO1xcbiAgIFxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBkaXY6bnRoLWNoaWxkKDIpIGltZzpudGgtY2hpbGQoMyl7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8zO1xcbiAgICBncmlkLXJvdzogMi8zIDtcXG4gICBcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gIHVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTs7XFxuICBcXG4gICAgIFxcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIGJ1dHRvbntcXG4gICAgXFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgd2lkdGg6MTIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5hYm91dFVzU2VjdCBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gbGl7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gbGk6OmJlZm9yZXtcXG4gICAgY29udGVudDogJ+KckyAnO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIHB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIHdpZHRoOiAzNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuXFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG5cXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgXFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYWJvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOztJQUVJLGlCQUFpQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTOzs7O0FBSVg7O0FBRUE7O0lBRUksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7O0FBRzNCOztBQUVBOztJQUVJLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjOztJQUVkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjOztJQUVkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjs7O0FBR3BCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7OztBQUduQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL3ZhcnJpYWJsZXMuY3NzJztcXG5cXG4uYWJvdXRVc1NlY3RNYWlue1xcblxcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gIGdyaWQtcm93OiAxMC8xOTtcXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBnYXA6IDUwcHg7XFxuICBcXG4gIFxcbiAgXFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gZGl2OmZpcnN0LWNoaWxke1xcbiAgICBcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OjEyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIFxcbiAgICBcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBkaXY6bnRoLWNoaWxkKDIpXFxue1xcbiAgICBoZWlnaHQ6IDEyMCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjFmciAxZnI7XFxuICAgIGdhcDogOHB4OyAgXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gZGl2Om50aC1jaGlsZCgyKSBpbWc6Zmlyc3QtY2hpbGR7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEvMiA7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uYWJvdXRVc1NlY3RNYWluIGRpdjpudGgtY2hpbGQoMikgaW1nOm50aC1jaGlsZCgyKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLzI7XFxuICAgIGdyaWQtcm93OiAyLzMgO1xcbiAgIFxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBkaXY6bnRoLWNoaWxkKDIpIGltZzpudGgtY2hpbGQoMyl7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8zO1xcbiAgICBncmlkLXJvdzogMi8zIDtcXG4gICBcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gIHVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTs7XFxuICBcXG4gICAgIFxcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIGJ1dHRvbntcXG4gICAgXFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgd2lkdGg6MTIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5hYm91dFVzU2VjdCBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gbGl7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gbGk6OmJlZm9yZXtcXG4gICAgY29udGVudDogJ+KckyAnO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4uYWJvdXRVc1NlY3RNYWluIHB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIHdpZHRoOiAzNjBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuXFxufVxcblxcbi5hYm91dFVzU2VjdE1haW4gaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG5cXG59XFxuXFxuLmFib3V0VXNTZWN0TWFpbiBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgXFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3BsYXkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkFib3V0U2VjdFBhZ2V7XFxuXFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcbi5BYm91dFNlY3RQYWdlIC5tZWRpYVNlY3Qge1xcblxcbiB3aWR0aDogNTAlO1xcbiBoZWlnaHQ6NTUwcHg7XFxuIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gZGlzcGxheTogZ3JpZDtcXG4gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiBcXG5cXG4gXFxuXFxufVxcblxcbi5BYm91dFNlY3RQYWdlIC5tZWRpYVNlY3QgaW1nOmZpcnN0LWNoaWxke1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICBcXG5cXG59XFxuXFxuLkFib3V0U2VjdFBhZ2UgLm1lZGlhU2VjdCBpbWc6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA4MHB4O1xcbiAgICByaWdodDogNDBweDtcXG4gICBcXG5cXG59XFxuXFxuLkFib3V0U2VjdFBhZ2UgLm1lZGlhU2VjdCBpbWc6bGFzdC1jaGlsZHtcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMzBweDtcXG4gICAgcmlnaHQ6IDQwcHg7XFxuXFxufVxcblxcbi5BYm91dFNlY3RQYWdlIC50ZXh0Q29udGVudCB7XFxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OjU1MHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICAgXFxuICAgXFxuICAgfVxcblxcblxcbiAgIC5BYm91dFNlY3RQYWdlIC50ZXh0Q29udGVudCBoMntcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogLTE0cHggMzVweDtcXG4gICAgXFxuICAgfVxcblxcbiAgIC5BYm91dFNlY3RQYWdlIC50ZXh0Q29udGVudCBoMXtcXG5cXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45MTUpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgXFxuICAgfVxcblxcbiAgIC5BYm91dFNlY3RQYWdlIC50ZXh0Q29udGVudCBwe1xcblxcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODkyKTtcXG4gICAgd2lkdGg6IDM2MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICBcXG4gICAgXFxuICAgICBcXG4gICBcXG4gICB9XFxuXFxuXFxuXFxuICAuQWJvdXRTZWN0UGFnZSAgLmJ1dHRvbjF7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgXFxuXFxuICAgfVxcblxcblxcbiAgIC5BYm91dFNlY3RQYWdlIC5idXR0b24ye1xcbiAgICBcXG4gICAgcGFkZGluZzogMjFweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTYwcHg7XFxuICAgIGxlZnQ6IDE0MHB4O1xcblxcblxcbiAgIH1cXG5cXG4gICAuQWJvdXRTZWN0UGFnZSAuYnRuUGFyYXtcXG4gICAgXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTEwcHg7XFxuICAgIGxlZnQ6IDE5MHB4O1xcbiAgIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Fib3V0UGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0FBQ2pCOzs7QUFHQTs7Q0FFQyxVQUFVO0NBQ1YsWUFBWTtDQUNaLDBDQUEwQztDQUMxQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIsdUJBQXVCOzs7OztBQUt4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7OztBQUdqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXOzs7QUFHZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXOztBQUVmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osMENBQTBDO0lBQzFDLGFBQWE7SUFDYixzQkFBc0I7Ozs7R0FJdkI7OztHQUdBOztJQUVDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxrQkFBa0I7O0dBRW5COztHQUVBOztJQUVDLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1COztHQUVwQjs7R0FFQTs7SUFFQyxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsK0JBQStCOzs7OztHQUtoQzs7OztFQUlEO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjs7O0dBR25COzs7R0FHQTs7SUFFQyxhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5REFBMkM7SUFDM0MsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7OztHQUdaOztHQUVBOztJQUVDLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0dBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkFib3V0U2VjdFBhZ2V7XFxuXFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcbi5BYm91dFNlY3RQYWdlIC5tZWRpYVNlY3Qge1xcblxcbiB3aWR0aDogNTAlO1xcbiBoZWlnaHQ6NTUwcHg7XFxuIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gZGlzcGxheTogZ3JpZDtcXG4gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiBcXG5cXG4gXFxuXFxufVxcblxcbi5BYm91dFNlY3RQYWdlIC5tZWRpYVNlY3QgaW1nOmZpcnN0LWNoaWxke1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICBcXG5cXG59XFxuXFxuLkFib3V0U2VjdFBhZ2UgLm1lZGlhU2VjdCBpbWc6bnRoLWNoaWxkKDIpe1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA4MHB4O1xcbiAgICByaWdodDogNDBweDtcXG4gICBcXG5cXG59XFxuXFxuLkFib3V0U2VjdFBhZ2UgLm1lZGlhU2VjdCBpbWc6bGFzdC1jaGlsZHtcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMzBweDtcXG4gICAgcmlnaHQ6IDQwcHg7XFxuXFxufVxcblxcbi5BYm91dFNlY3RQYWdlIC50ZXh0Q29udGVudCB7XFxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OjU1MHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICAgXFxuICAgXFxuICAgfVxcblxcblxcbiAgIC5BYm91dFNlY3RQYWdlIC50ZXh0Q29udGVudCBoMntcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogLTE0cHggMzVweDtcXG4gICAgXFxuICAgfVxcblxcbiAgIC5BYm91dFNlY3RQYWdlIC50ZXh0Q29udGVudCBoMXtcXG5cXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45MTUpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgXFxuICAgfVxcblxcbiAgIC5BYm91dFNlY3RQYWdlIC50ZXh0Q29udGVudCBwe1xcblxcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODkyKTtcXG4gICAgd2lkdGg6IDM2MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICBcXG4gICAgXFxuICAgICBcXG4gICBcXG4gICB9XFxuXFxuXFxuXFxuICAuQWJvdXRTZWN0UGFnZSAgLmJ1dHRvbjF7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgXFxuXFxuICAgfVxcblxcblxcbiAgIC5BYm91dFNlY3RQYWdlIC5idXR0b24ye1xcbiAgICBcXG4gICAgcGFkZGluZzogMjFweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvcGxheS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTYwcHg7XFxuICAgIGxlZnQ6IDE0MHB4O1xcblxcblxcbiAgIH1cXG5cXG4gICAuQWJvdXRTZWN0UGFnZSAuYnRuUGFyYXtcXG4gICAgXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTEwcHg7XFxuICAgIGxlZnQ6IDE5MHB4O1xcbiAgIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYmxvZ1NlY3R7XFxuZ3JpZC1jb2x1bW46IDIgLyAxMTtcXG5ncmlkLXJvdzo2OC83NCA7XFxuLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG5cXG5cXG59XFxuXFxuLmJsb2dTZWN0IGgye1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IFZpYmVzJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luOiAzcHggMjVweDtcXG5cXG59XFxuXFxuXFxuLmJsb2dTZWN0IGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIG1hcmdpbjogM3B4IDI1cHhcXG59XFxuXFxuLmJsb2dTZWN0IHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBcXG59XFxuXFxuLmJsb2dDYXJkU2VjdHtcXG4gICAgd2lkdGg6IDgwMHB4O1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJsb2dDYXJke1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBcXG59XFxuXFxuLmJsb2dDYXJkOmhvdmVye1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCB3aGl0ZTtcXG4gICAgXFxufVxcblxcbi5ibG9nQ2FyZCBpbWd7XFxuICAgIHdpZHRoOiAyMjhweDtcXG4gICAgaGVpZ2h0OiAxNzBweDtcXG4gICBcXG59XFxuXFxuLmJsb2dDYXJkIHA6bnRoLWNoaWxkKDIpe1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBcXG59XFxuXFxuLmJsb2dDYXJkIHA6bnRoLWNoaWxkKDMpe1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgXFxufVxcblxcblxcbi5ibG9nQ2FyZCBwOm50aC1jaGlsZCg0KXtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIFxcbn1cXG5cXG4uYmxvZ0NhcmQgcHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuXFxufVxcblxcbi5pY29uU2VjdHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA3cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAyOHB4O1xcbiAgICBsZWZ0OiAxNTBweDtcXG5cXG59XFxuXFxuLmljb25TZWN0IGltZ3tcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgXFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYmxvZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2YsMENBQTBDO0FBQzFDLGFBQWE7QUFDYixzQkFBc0I7QUFDdEIsbUJBQW1CO0FBQ25CLGtCQUFrQjs7OztBQUlsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLGdCQUFnQjs7QUFFcEI7OztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0dBQ3hCLG1CQUFtQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsK0JBQStCOztBQUVuQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7O0FBRTNCOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7O0FBR2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ibG9nU2VjdHtcXG5ncmlkLWNvbHVtbjogMiAvIDExO1xcbmdyaWQtcm93OjY4Lzc0IDtcXG4vKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxudGV4dC1hbGlnbjogY2VudGVyO1xcblxcblxcblxcbn1cXG5cXG4uYmxvZ1NlY3QgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDNweCAyNXB4O1xcblxcbn1cXG5cXG5cXG4uYmxvZ1NlY3QgaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAzcHggMjVweFxcbn1cXG5cXG4uYmxvZ1NlY3Qgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIFxcbn1cXG5cXG4uYmxvZ0NhcmRTZWN0e1xcbiAgICB3aWR0aDogODAwcHg7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYmxvZ0NhcmR7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIFxcbn1cXG5cXG4uYmxvZ0NhcmQ6aG92ZXJ7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IHdoaXRlO1xcbiAgICBcXG59XFxuXFxuLmJsb2dDYXJkIGltZ3tcXG4gICAgd2lkdGg6IDIyOHB4O1xcbiAgICBoZWlnaHQ6IDE3MHB4O1xcbiAgIFxcbn1cXG5cXG4uYmxvZ0NhcmQgcDpudGgtY2hpbGQoMil7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIFxcbn1cXG5cXG4uYmxvZ0NhcmQgcDpudGgtY2hpbGQoMyl7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBcXG59XFxuXFxuXFxuLmJsb2dDYXJkIHA6bnRoLWNoaWxkKDQpe1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgXFxufVxcblxcbi5ibG9nQ2FyZCBwe1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG5cXG59XFxuXFxuLmljb25TZWN0e1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDdweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDI4cHg7XFxuICAgIGxlZnQ6IDE1MHB4O1xcblxcbn1cXG5cXG4uaWNvblNlY3QgaW1ne1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBcXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvQ2FsZW5kYXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL0NoYXRzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9hZG1pbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcbi5ibG9nU2VjdFBhZ2V7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB3aWR0aDogODB2dztcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBcXG4gICAgXFxufVxcblxcbi5ibG9nUGFnZXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNzAlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOnJlcGVhdCg0LDYwMHB4KSA7XFxuXFxuICAgXFxuICAgIGdhcDogNTBweCAwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgICovXFxufVxcblxcbiAuYmxvZ1NlY3RQYWdlIC5wcm9maWxlRGV0YWlse1xcbiAgIFxcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgLyogYmFja2dyb3VuZDogIzAwMDsgKi9cXG59XFxuXFxuLmJsb2dQYWdlID4gZGl2Om50aC1jaGlsZCgxKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgLyogYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG59XFxuXFxuLmJsb2dQYWdlID4gZGl2Om50aC1jaGlsZCgyKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgLyogYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJsb2dQYWdlID4gZGl2Om50aC1jaGlsZCgzKXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDY4MHB4O1xcbiAgICBcXG4gICAgLyogYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgXFxuICAgIFxcbn1cXG5cXG4uYmxvZ1BhZ2UgPiBkaXY6bGFzdC1jaGlsZHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgLyogYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiAuYmxvZ1NlY3RQYWdlIC5jYXJkIC5pbWdPZkJsb2cge1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICBcXG59XFxuXFxuLmRldGFpbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAvKiBnYXA6IDIwcHg7ICovXFxuICAgIHdpZHRoOiA3NzBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgYm90dG9tOiAxNDBweDtcXG4gICBsZWZ0OiA0MHB4O1xcbiAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgXFxuXFxufVxcblxcbi5kZXRhaWwgLmRhdGV7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGV0YWlsIC5tc2d7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxufVxcblxcbi5BZG1pbntcXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG4gICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxNDBweDtcXG4gICBoZWlnaHQ6IDMwcHg7XFxuICAgbGVmdDogMjIwcHg7XFxuICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5cXG4uVGV4dGNvbnRlbnRCbG9ne1xcbiAgICB3aWR0aDogNzcwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbi5UZXh0Y29udGVudEJsb2cgcDpmaXJzdC1jaGlsZHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgXFxufVxcblxcbi5UZXh0Y29udGVudEJsb2cgcDpudGgtY2hpbGQoMil7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB3aWR0aDogNzUwcHg7XFxufVxcblxcbi5UZXh0Y29udGVudEJsb2cgYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcbn1cXG5cXG4uVGV4dGNvbnRlbnRCbG9nIGJ1dHRvbjpob3ZlcntcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG59XFxuXFxuLmJsb2dQYWdlID4gZGl2Om50aC1jaGlsZCgzKSAuZGV0YWlsLC5ibG9nUGFnZSA+IGRpdjpudGgtY2hpbGQoMykgLkFkbWlue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTcwcHg7XFxufVxcblxcbi5ibG9nU2VjdFBhZ2UgLnBhZ2VOdW1iZXIge1xcblxcblxcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206LTIzMDBweDtcXG4gICAgbGVmdDogLTczMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgIGdhcDogNXB4O1xcbiAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG59XFxuXFxuLmJsb2dTZWN0UGFnZSAucGFnZU51bWJlciBkaXYge1xcblxcblxcbiAgIHdpZHRoOiA0NXB4O1xcbiAgIGhlaWdodDogNDBweDtcXG4gICBib3JkZXI6IC4wMDRlbSByZ2JhKDAsIDAsIDAsIDAuMjQ4KSBzb2xpZDtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgXFxuICAgXFxuXFxuXFxufVxcblxcbi5ibG9nU2VjdFBhZ2UgLnBhZ2VOdW1iZXIgZGl2OmhvdmVyICwuYmxvZ1NlY3RQYWdlIC5wYWdlTnVtYmVyICBwOmhvdmVyIHtcXG5cXG5cXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAuMDA0ZW0gcmdiYSgwLCAwLCAwLCAwLjI0OCkgc29saWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIFxcbiAgICBcXG4gXFxuIFxcbiB9XFxuXFxuLmJsb2dTZWN0UGFnZSAucGFnZU51bWJlciAgcCB7XFxuXFxuXFxuICAgIFxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiBcXG4gXFxuIH1cXG5cXG4uYmxvZ1NlY3RQYWdlIC5wYWdlTnVtYmVyIGRpdjpudGgtY2hpbGQoMykge1xcblxcblxcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtNTBweDtcXG4gICAgXFxuICAgXFxuIFxcbiBcXG4gfVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYmxvZ1BhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztHQUNaLGFBQWE7SUFDWixpQkFBaUI7SUFDakIsMENBQTBDOzs7QUFHOUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTs7SUFFVixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG1DQUFtQzs7O0lBR25DLGFBQWE7SUFDYiwyQ0FBMkM7QUFDL0M7O0NBRUM7O0lBRUcsVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7O0lBRWIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1COzs7QUFHdkI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0NBRUM7SUFDRyxXQUFXO0lBQ1gsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0dBQ25CLGFBQWE7R0FDYixVQUFVO0dBQ1YsK0JBQStCO0dBQy9CLGdCQUFnQjs7O0FBR25COztBQUVBO0lBQ0ksd0RBQThDO0lBQzlDLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdEQUEyQztJQUMzQyxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHdEQUEyQztJQUMzQyxZQUFZO0lBQ1osWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7O0lBRTdCLGtCQUFrQjtJQUNsQixhQUFhO0dBQ2QsWUFBWTtHQUNaLFdBQVc7R0FDWCwrQkFBK0I7R0FDL0IsZ0JBQWdCO0FBQ25COzs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osWUFBWTs7SUFFWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0tBQ1osbUJBQW1CO0tBQ25CLFFBQVE7S0FDUix5QkFBeUI7QUFDOUI7O0FBRUE7OztHQUdHLFdBQVc7R0FDWCxZQUFZO0dBQ1oseUNBQXlDO0dBQ3pDLGFBQWE7R0FDYixtQkFBbUI7R0FDbkIsdUJBQXVCOzs7OztBQUsxQjs7QUFFQTs7O0lBR0ksV0FBVztJQUNYLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7R0FDeEIsdUJBQXVCO0lBQ3RCLG9DQUFvQzs7Ozs7Q0FLdkM7O0FBRUQ7Ozs7SUFJSSx5QkFBeUI7SUFDekIsYUFBYTs7O0NBR2hCOztBQUVEOzs7SUFHSSxXQUFXO0lBQ1gsWUFBWTs7SUFFWixrQkFBa0I7SUFDbEIsV0FBVzs7Ozs7Q0FLZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5cXG4uYmxvZ1NlY3RQYWdle1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgXFxuICAgIFxcbn1cXG5cXG4uYmxvZ1BhZ2V7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDcwJTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoNCw2MDBweCkgO1xcblxcbiAgIFxcbiAgICBnYXA6IDUwcHggMHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICAqL1xcbn1cXG5cXG4gLmJsb2dTZWN0UGFnZSAucHJvZmlsZURldGFpbHtcXG4gICBcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIC8qIGJhY2tncm91bmQ6ICMwMDA7ICovXFxufVxcblxcbi5ibG9nUGFnZSA+IGRpdjpudGgtY2hpbGQoMSl7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxufVxcblxcbi5ibG9nUGFnZSA+IGRpdjpudGgtY2hpbGQoMil7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ibG9nUGFnZSA+IGRpdjpudGgtY2hpbGQoMyl7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA2ODBweDtcXG4gICAgXFxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIFxcbiAgICBcXG59XFxuXFxuLmJsb2dQYWdlID4gZGl2Omxhc3QtY2hpbGR7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIC8qIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4gLmJsb2dTZWN0UGFnZSAuY2FyZCAuaW1nT2ZCbG9nIHtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgXFxufVxcblxcbi5kZXRhaWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgLyogZ2FwOiAyMHB4OyAqL1xcbiAgICB3aWR0aDogNzcwcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDsgKi9cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgIGJvdHRvbTogMTQwcHg7XFxuICAgbGVmdDogNDBweDtcXG4gICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIFxcblxcbn1cXG5cXG4uZGV0YWlsIC5kYXRle1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vaW1hZ2VzL0NhbGVuZGFyLnBuZycpO1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kZXRhaWwgLm1zZ3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uL2ltYWdlcy9DaGF0cy5wbmcnKTtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxufVxcblxcbi5BZG1pbntcXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uL2ltYWdlcy9hZG1pbi5wbmcnKTtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxuICAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTQwcHg7XFxuICAgaGVpZ2h0OiAzMHB4O1xcbiAgIGxlZnQ6IDIyMHB4O1xcbiAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuXFxuLlRleHRjb250ZW50QmxvZ3tcXG4gICAgd2lkdGg6IDc3MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4uVGV4dGNvbnRlbnRCbG9nIHA6Zmlyc3QtY2hpbGR7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIFxcbn1cXG5cXG4uVGV4dGNvbnRlbnRCbG9nIHA6bnRoLWNoaWxkKDIpe1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IDc1MHB4O1xcbn1cXG5cXG4uVGV4dGNvbnRlbnRCbG9nIGJ1dHRvbntcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIHRyYW5zaXRpb246IC41cztcXG59XFxuXFxuLlRleHRjb250ZW50QmxvZyBidXR0b246aG92ZXJ7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxufVxcblxcbi5ibG9nUGFnZSA+IGRpdjpudGgtY2hpbGQoMykgLmRldGFpbCwuYmxvZ1BhZ2UgPiBkaXY6bnRoLWNoaWxkKDMpIC5BZG1pbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDE3MHB4O1xcbn1cXG5cXG4uYmxvZ1NlY3RQYWdlIC5wYWdlTnVtYmVyIHtcXG5cXG5cXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOi0yMzAwcHg7XFxuICAgIGxlZnQ6IC03MzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICBnYXA6IDVweDtcXG4gICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxufVxcblxcbi5ibG9nU2VjdFBhZ2UgLnBhZ2VOdW1iZXIgZGl2IHtcXG5cXG5cXG4gICB3aWR0aDogNDVweDtcXG4gICBoZWlnaHQ6IDQwcHg7XFxuICAgYm9yZGVyOiAuMDA0ZW0gcmdiYSgwLCAwLCAwLCAwLjI0OCkgc29saWQ7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIFxcbiAgIFxcblxcblxcbn1cXG5cXG4uYmxvZ1NlY3RQYWdlIC5wYWdlTnVtYmVyIGRpdjpob3ZlciAsLmJsb2dTZWN0UGFnZSAucGFnZU51bWJlciAgcDpob3ZlciB7XFxuXFxuXFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogLjAwNGVtIHJnYmEoMCwgMCwgMCwgMC4yNDgpIHNvbGlkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBcXG4gICAgXFxuIFxcbiBcXG4gfVxcblxcbi5ibG9nU2VjdFBhZ2UgLnBhZ2VOdW1iZXIgIHAge1xcblxcblxcbiAgICBcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gXFxuIFxcbiB9XFxuXFxuLmJsb2dTZWN0UGFnZSAucGFnZU51bWJlciBkaXY6bnRoLWNoaWxkKDMpIHtcXG5cXG5cXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTUwcHg7XFxuICAgIFxcbiAgIFxcbiBcXG4gXFxuIH1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuRm9vZENhdFNlY3Qge1xcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gICAgZ3JpZC1yb3c6IDIwLzI1O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgXFxuICAgIFxcbiAgICBcXG59XFxuXFxuLkZvb2RDYXRTZWN0ID5kaXY6Zmlyc3QtY2hpbGR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBcXG4gICBcXG59XFxuXFxuLkZvb2RDYXRTZWN0IGRpdjpudGgtY2hpbGQoMil7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICB3aWR0aDogMTAwcHg7XFxuICAgaGVpZ2h0OiAzNXB4O1xcbiAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgIHRvcDogMjAwcHg7XFxuICAgbGVmdDogODBweDtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgXFxufVxcblxcbi5Gb29kQ2F0U2VjdCBkaXY6bnRoLWNoaWxkKDMpe1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOiAyNDVweDtcXG4gICAgbGVmdDogMjVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIFxcbn1cXG4uRm9vZENhdFNlY3QgPiBkaXYgaW1ne1xcbiAgIHdpZHRoOiAyMjBweDtcXG4gICBtYXJnaW46IDBweCAxMHB4O1xcbiAgIFxcbn1cXG5cXG4uc2lkZUdyYXNzSW1ne1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICByaWdodDogLTIwMHB4O1xcbiAgIHRvcDoxODBweDtcXG59XFxuXFxuLkZvb2RDYXRTZWN0ICBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcXG4gICAgXFxuIH1cXG5cXG4gLkZvb2RDYXRTZWN0ICBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICAgIFxcbiB9XFxuXFxuIC5Gb29kQ2F0U2VjdCBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZm9vZENhdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTs7SUFFZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCOzs7O0FBSXRCOztBQUVBO0lBQ0ksV0FBVzs7SUFFWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxnQkFBZ0I7OztBQUdwQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxrQkFBa0I7R0FDbkIsWUFBWTtHQUNaLFlBQVk7R0FDWixpQkFBaUI7R0FDakIsVUFBVTtHQUNWLFVBQVU7R0FDVixhQUFhO0dBQ2IsdUJBQXVCO0dBQ3ZCLG1CQUFtQjtHQUNuQixrQ0FBa0M7R0FDbEMseUJBQXlCO0dBQ3pCLGdCQUFnQjs7QUFFbkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyx1QkFBdUI7O0FBRTNCO0FBQ0E7R0FDRyxZQUFZO0dBQ1osZ0JBQWdCOztBQUVuQjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixhQUFhO0dBQ2IsU0FBUztBQUNaOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsa0JBQWtCOztDQUVyQjs7Q0FFQTtJQUNHLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCOztDQUVyQjs7Q0FFQTtJQUNHLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7Q0FDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkZvb2RDYXRTZWN0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTE7XFxuICAgIGdyaWQtcm93OiAyMC8yNTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcbiAgICBcXG4gICAgXFxufVxcblxcbi5Gb29kQ2F0U2VjdCA+ZGl2OmZpcnN0LWNoaWxke1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgXFxuICAgXFxufVxcblxcbi5Gb29kQ2F0U2VjdCBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgd2lkdGg6IDEwMHB4O1xcbiAgIGhlaWdodDogMzVweDtcXG4gICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICB0b3A6IDIwMHB4O1xcbiAgIGxlZnQ6IDgwcHg7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICBmb250LXdlaWdodDogNjAwO1xcbiAgIFxcbn1cXG5cXG4uRm9vZENhdFNlY3QgZGl2Om50aC1jaGlsZCgzKXtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDogMjQ1cHg7XFxuICAgIGxlZnQ6IDI1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBcXG59XFxuLkZvb2RDYXRTZWN0ID4gZGl2IGltZ3tcXG4gICB3aWR0aDogMjIwcHg7XFxuICAgbWFyZ2luOiAwcHggMTBweDtcXG4gICBcXG59XFxuXFxuLnNpZGVHcmFzc0ltZ3tcXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgcmlnaHQ6IC0yMDBweDtcXG4gICB0b3A6MTgwcHg7XFxufVxcblxcbi5Gb29kQ2F0U2VjdCAgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxuICAgIFxcbiB9XFxuXFxuIC5Gb29kQ2F0U2VjdCAgaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgICBcXG4gfVxcblxcbiAuRm9vZENhdFNlY3Qgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9mYi1mLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy90d2l0dGVyLWYucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2luc3RhLWYucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3l0LWYucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3Bpbi1mLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9DbG9jay5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mb290ZXJ7XFxuICBwYWRkaW5nOiAzMHB4ICAyMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEvMTQ7XFxuICBncmlkLXJvdzogNzUvODE7XFxuICAvKiBib3JkZXI6IDFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkOyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIFxcbn1cXG5cXG4uZ3Jhc3NDb3JuZXIge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICByaWdodDogMHB4O1xcbiAgIGJvdHRvbTogMHB4O1xcbiAgIG9wYWNpdHk6IC41O1xcbiAgIFxcbn1cXG5cXG4uZm9vdGVyQmVsdHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIFxcbn1cXG5cXG4uc29jaWFsTWVkU2Vje1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMTQwcHg7XFxufVxcblxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCgxKXtcXG5iYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbndpZHRoOiAyN3B4O1xcbmhlaWdodDogMjdweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuYmFja2dyb3VuZC1zaXplOiAzMCU7XFxubWFyZ2luOiAwcHggNnB4O1xcblxcblxcbn1cXG5cXG4uc29jaWFsTWVkU2VjIGRpdjpudGgtY2hpbGQoMil7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgd2lkdGg6IDI3cHg7XFxuICBoZWlnaHQ6IDI3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0NSU7XFxuICBtYXJnaW46IDBweCA2cHg7XFxuICBcXG4gIH1cXG5cXG4uc29jaWFsTWVkU2VjIGRpdjpudGgtY2hpbGQoMyl7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIHdpZHRoOiAyN3B4O1xcbiAgICBoZWlnaHQ6IDI3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQ1JTtcXG4gICAgbWFyZ2luOiAwcHggNnB4O1xcbiAgICBcXG4gICAgfVxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCg0KXtcXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICAgIHdpZHRoOiAyN3B4O1xcbiAgICAgIGhlaWdodDogMjdweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1zaXplOiA0NSU7XFxuICAgICAgbWFyZ2luOiAwcHggNnB4O1xcbiAgICAgIFxcbiAgICAgIH1cXG4uc29jaWFsTWVkU2VjIGRpdjpudGgtY2hpbGQoNSl7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICAgICAgd2lkdGg6IDI3cHg7XFxuICAgICAgICBoZWlnaHQ6IDI3cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0NSU7XFxuICAgICAgICBtYXJnaW46IDBweCA2cHg7XFxuICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4uZm9vdGVyQmVsdCBwe1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgICAgZm9udC1zaXplOjE3cHg7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNDBweDtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7IFxcbiAgICAgICAgfVxcblxcbi5mb290ZXJDb250ZW50e1xcblxcbndpZHRoOiA4NSU7XFxuaGVpZ2h0OiAxMDAlO1xcbi8qIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7ICovXFxuZGlzcGxheTogZmxleDtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbm1hcmdpbi10b3A6IC0yMHB4O1xcblxcbn1cXG5cXG4uZm9vdGVyVHh0Q29udGVudHtcXG4gICB3aWR0aDogMTAwJTtcXG4gICBoZWlnaHQ6IDUwJTtcXG4gICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgZGlzcGxheTogZmxleDtcXG4gICBnYXA6IDQwcHg7XFxuICAgbWFyZ2luLXJpZ2h0OiA2MHB4XFxuICAgO1xcbn1cXG5cXG4uZm9vdGVyVHh0Q29udGVudCA+IGRpdntcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICAvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4IDBweDtcXG59XFxuXFxuLlJjdFBvc3QgZGl2e1xcbiAgXFxuICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmOyA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA1NHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogMHB4IDhweDtcXG59XFxuXFxuLlJjdFBvc3QgaW1ne1xcbmhlaWdodDogNDBweDtcXG53aWR0aDogNDBweDtcXG5ncmlkLWNvbHVtbjogMS8yO1xcbmdyaWQtcm93OiAxLzM7XFxuXFxufVxcblxcbi5SY3RQb3N0IGRpdiBwOm50aC1jaGlsZCgyKXtcXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDMpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uUmN0UG9zdCBkaXYgcDpudGgtY2hpbGQoMyl7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIFxcbn1cXG5cXG4uUmN0UG9zdCBoMntcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlbHBTZWN0IGgye1xcbiAgY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgXFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlbHBTZWN0IHB7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7IFxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi51c2VGdWxsU2VjdCBwe1xcbiAgY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmOyBcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udXNlRnVsbFNlY3QgaDJ7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4uYWJvdXRVc1NlY3QgPiBwe1xcbmNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbmZvbnQtd2VpZ2h0OiAzMDA7XFxuZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWYgO1xcbmZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xcbm1hcmdpbi10b3A6IDhweDtcXG4gIFxcbn1cXG5cXG4uYWJvdXRVc1NlY3QgPiBoMntcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgXFxuICB9XFxuXFxuLm9wZW5IclNlY3RNYWlue1xcbiBkaXNwbGF5OiBmbGV4O1xcbiBnYXA6IDBweCAxMHB4O1xcbiBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG5cXG59XFxuXFxuLm9wZW5IclNlY3RJY29ue1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1zaXplOiA3MCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFxufVxcblxcbi5hYm91dFVzU2VjdCBwOm50aC1jaGlsZCgxKXtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG5cXG59XFxuXFxuLmFib3V0VXNTZWN0IHA6bnRoLWNoaWxkKDIpe1xcbiAgZm9udC1zaXplOiAxMHB4O1xcblxcbn1cXG5cXG4uYWJvdXRVc1NlY3QgcDpudGgtY2hpbGQoMyl7XFxuICBmb250LXNpemU6IDEwcHg7XFxuXFxufVxcblxcbi5vcGVuSHJTZWN0e1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzQ7XFxufVxcblxcbi5zdXBwb3J0U2VjdHtcXG4gIHdpZHRoOiA2OSU7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBib3JkZXI6IDFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkO1xcbiAgbWFyZ2luLWJvdHRvbTotNDBweDtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogMHB4IDMwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLnN1cHBvcnRTZWN0IHNwYW57XFxuY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG5mb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zdXBwb3J0U2VjdCBwOmZpcnN0LWNoaWxke1xcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICBmb250LXNpemU6IDE5cHg7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB9XFxuXFxuICAuc3VwcG9ydFNlY3QgcDpudGgtY2hpbGQoMil7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBcXG4gICAgfVxcblxcbiAgICAuc3VwcG9ydFNlY3QgZGl2e1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgfVxcblxcbiAgICAgIC5zdXBwb3J0U2VjdCBpbnB1dHtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLnN1cHBvcnRTZWN0IGlucHV0OmZvY3Vze1xcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICBcXG4gICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLnN1cHBvcnRTZWN0IGlucHV0OjpwbGFjZWhvbGRlcntcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgfVxcblxcbiAgICAgIC5zdXBwb3J0U2VjdCBidXR0b257XFxuICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgICAgIDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAuc3VwcG9ydFNlY3QgYnV0dG9uOmhvdmVye1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjMzLCAyMzMpXFxuICAgICAgICAgICAgIDtcXG4gICAgICAgICAgICAgICB9XFxuXFxuICAgIFxcblxcblxcblxcblxcblxcblxcblxcbiAgICAgICAgICAgIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1COztBQUVyQjs7QUFFQTtJQUNJLGFBQWE7R0FDZCxrQkFBa0I7R0FDbEIsVUFBVTtHQUNWLFdBQVc7R0FDWCxXQUFXOztBQUVkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFh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YUFDQTtlQUNFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXJ7XFxuICBwYWRkaW5nOiAzMHB4ICAyMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEvMTQ7XFxuICBncmlkLXJvdzogNzUvODE7XFxuICAvKiBib3JkZXI6IDFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkOyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIFxcbn1cXG5cXG4uZ3Jhc3NDb3JuZXIge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICByaWdodDogMHB4O1xcbiAgIGJvdHRvbTogMHB4O1xcbiAgIG9wYWNpdHk6IC41O1xcbiAgIFxcbn1cXG5cXG4uZm9vdGVyQmVsdHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIFxcbn1cXG5cXG4uc29jaWFsTWVkU2Vje1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMTQwcHg7XFxufVxcblxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCgxKXtcXG5iYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9mYi1mLnBuZycpO1xcbndpZHRoOiAyN3B4O1xcbmhlaWdodDogMjdweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuYmFja2dyb3VuZC1zaXplOiAzMCU7XFxubWFyZ2luOiAwcHggNnB4O1xcblxcblxcbn1cXG5cXG4uc29jaWFsTWVkU2VjIGRpdjpudGgtY2hpbGQoMil7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy90d2l0dGVyLWYucG5nJyk7XFxuICB3aWR0aDogMjdweDtcXG4gIGhlaWdodDogMjdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDQ1JTtcXG4gIG1hcmdpbjogMHB4IDZweDtcXG4gIFxcbiAgfVxcblxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCgzKXtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvaW5zdGEtZi5wbmcnKTtcXG4gICAgd2lkdGg6IDI3cHg7XFxuICAgIGhlaWdodDogMjdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDUlO1xcbiAgICBtYXJnaW46IDBweCA2cHg7XFxuICAgIFxcbiAgICB9XFxuLnNvY2lhbE1lZFNlYyBkaXY6bnRoLWNoaWxkKDQpe1xcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL3l0LWYucG5nJyk7XFxuICAgICAgd2lkdGg6IDI3cHg7XFxuICAgICAgaGVpZ2h0OiAyN3B4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDQ1JTtcXG4gICAgICBtYXJnaW46IDBweCA2cHg7XFxuICAgICAgXFxuICAgICAgfVxcbi5zb2NpYWxNZWRTZWMgZGl2Om50aC1jaGlsZCg1KXtcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL3Bpbi1mLnBuZycpO1xcbiAgICAgICAgd2lkdGg6IDI3cHg7XFxuICAgICAgICBoZWlnaHQ6IDI3cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlLWNscik7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0NSU7XFxuICAgICAgICBtYXJnaW46IDBweCA2cHg7XFxuICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4uZm9vdGVyQmVsdCBwe1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgICAgICAgZm9udC1zaXplOjE3cHg7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNDBweDtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7IFxcbiAgICAgICAgfVxcblxcbi5mb290ZXJDb250ZW50e1xcblxcbndpZHRoOiA4NSU7XFxuaGVpZ2h0OiAxMDAlO1xcbi8qIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7ICovXFxuZGlzcGxheTogZmxleDtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbm1hcmdpbi10b3A6IC0yMHB4O1xcblxcbn1cXG5cXG4uZm9vdGVyVHh0Q29udGVudHtcXG4gICB3aWR0aDogMTAwJTtcXG4gICBoZWlnaHQ6IDUwJTtcXG4gICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgZGlzcGxheTogZmxleDtcXG4gICBnYXA6IDQwcHg7XFxuICAgbWFyZ2luLXJpZ2h0OiA2MHB4XFxuICAgO1xcbn1cXG5cXG4uZm9vdGVyVHh0Q29udGVudCA+IGRpdntcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICAvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4IDBweDtcXG59XFxuXFxuLlJjdFBvc3QgZGl2e1xcbiAgXFxuICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmOyA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA1NHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogMHB4IDhweDtcXG59XFxuXFxuLlJjdFBvc3QgaW1ne1xcbmhlaWdodDogNDBweDtcXG53aWR0aDogNDBweDtcXG5ncmlkLWNvbHVtbjogMS8yO1xcbmdyaWQtcm93OiAxLzM7XFxuXFxufVxcblxcbi5SY3RQb3N0IGRpdiBwOm50aC1jaGlsZCgyKXtcXG4gIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDMpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uUmN0UG9zdCBkaXYgcDpudGgtY2hpbGQoMyl7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIFxcbn1cXG5cXG4uUmN0UG9zdCBoMntcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlbHBTZWN0IGgye1xcbiAgY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgXFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlbHBTZWN0IHB7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7IFxcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcblxcblxcbi51c2VGdWxsU2VjdCBwe1xcbiAgY29sb3I6dmFyKC0td2hpdGUtY2xyKTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmOyBcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udXNlRnVsbFNlY3QgaDJ7XFxuICBjb2xvcjp2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4uYWJvdXRVc1NlY3QgPiBwe1xcbmNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbmZvbnQtd2VpZ2h0OiAzMDA7XFxuZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWYgO1xcbmZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xcbm1hcmdpbi10b3A6IDhweDtcXG4gIFxcbn1cXG5cXG4uYWJvdXRVc1NlY3QgPiBoMntcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgXFxuICB9XFxuXFxuLm9wZW5IclNlY3RNYWlue1xcbiBkaXNwbGF5OiBmbGV4O1xcbiBnYXA6IDBweCAxMHB4O1xcbiBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG5cXG59XFxuXFxuLm9wZW5IclNlY3RJY29ue1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL0Nsb2NrLnBuZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogNzAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcbn1cXG5cXG4uYWJvdXRVc1NlY3QgcDpudGgtY2hpbGQoMSl7XFxuICBmb250LXNpemU6IDE1cHg7XFxuXFxufVxcblxcbi5hYm91dFVzU2VjdCBwOm50aC1jaGlsZCgyKXtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG5cXG59XFxuXFxuLmFib3V0VXNTZWN0IHA6bnRoLWNoaWxkKDMpe1xcbiAgZm9udC1zaXplOiAxMHB4O1xcblxcbn1cXG5cXG4ub3BlbkhyU2VjdHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMS80O1xcbn1cXG5cXG4uc3VwcG9ydFNlY3R7XFxuICB3aWR0aDogNjklO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDtcXG4gIG1hcmdpbi1ib3R0b206LTQwcHg7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDBweCAzMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5zdXBwb3J0U2VjdCBzcGFue1xcbmNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc3VwcG9ydFNlY3QgcDpmaXJzdC1jaGlsZHtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbiAgZm9udC1mYW1pbHk6ICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgfVxcblxcbiAgLnN1cHBvcnRTZWN0IHA6bnRoLWNoaWxkKDIpe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgXFxuICAgIH1cXG5cXG4gICAgLnN1cHBvcnRTZWN0IGRpdntcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIH1cXG5cXG4gICAgICAuc3VwcG9ydFNlY3QgaW5wdXR7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5zdXBwb3J0U2VjdCBpbnB1dDpmb2N1c3tcXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgXFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5zdXBwb3J0U2VjdCBpbnB1dDo6cGxhY2Vob2xkZXJ7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgICAgICAgICBcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICAgIH1cXG5cXG4gICAgICAuc3VwcG9ydFNlY3QgYnV0dG9ue1xcbiAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgICAgICA7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLnN1cHBvcnRTZWN0IGJ1dHRvbjpob3ZlcntcXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzMywgMjMzKVxcbiAgICAgICAgICAgICA7XFxuICAgICAgICAgICAgICAgfVxcblxcbiAgICBcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4gICAgICAgICAgICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG4uRnJvbU1lbnVNYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gICAgZ3JpZC1yb3c6IDQyLzQ1O1xcbiAgIFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5Gcm9tTWVudU1haW4gaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDs7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICB0b3A6IC0xMTBweDtcXG59XFxuXFxuLkZyb21NZW51TWFpbiBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIHRvcDogLTgwcHg7XFxufVxcblxcbi5Gcm9tTWVudU1haW4gc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5uYXZ7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyNSU7ICovXFxufVxcbi5uYXYgdWwgbGl7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4ubWVudUxpc3RTZWN0e1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIG1hcmdpbi10b3A6IGF1dG8gKi9cXG59XFxuXFxuXFxuLm1lbnVMaXN0U2VjdCBkaXY6Zmlyc3QtY2hpbGR7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4ubWVudVNlY3R7XFxuICAgIHdpZHRoOjc1MHB4O1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBcXG59XFxuXFxuLm1lbnVTZWN0IGltZ3tcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcblxcbi5tZW51U2VjdCB1bHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweCAwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm1lbnVTZWN0IGxpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXG4gICBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb29kSXRlbUltZ1NlY3R7XFxuICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubWVudVNlY3QgbGkgaW1ne1xcbiAgICBcXG4gICAgXFxuXFxufVxcbi5tZW51U2VjdCBsaSBwOm50aC1jaGlsZCgxKXtcXG5mb250LXNpemU6IDEycHg7XFxuXFxufVxcblxcbi5tZW51U2VjdCBsaSBwOm50aC1jaGlsZCgyKXtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBcXG4gICAgfVxcblxcbi5tZW51U2VjdCBsaSBwOm50aC1jaGlsZCgzKXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxufVxcblxcblxcbi5kaXNwbGF5RGlzaCBpbWd7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9mcm9tTWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZUFBZTs7SUFFZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJO2VBQ1c7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7O0lBRWIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osYUFBYTs7O0FBR2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGlCQUFpQjs7SUFFakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7O0lBRWhCOztBQUVKO1FBQ1EsZUFBZTtRQUNmLHlCQUF5QjtBQUNqQzs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcbi5Gcm9tTWVudU1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtY29sdW1uOiAyLzExO1xcbiAgICBncmlkLXJvdzogNDIvNDU7XFxuICAgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLkZyb21NZW51TWFpbiBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4OztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIHRvcDogLTExMHB4O1xcbn1cXG5cXG4uRnJvbU1lbnVNYWluIGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gICAgdG9wOiAtODBweDtcXG59XFxuXFxuLkZyb21NZW51TWFpbiBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLm5hdntcXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDI1JTsgKi9cXG59XFxuLm5hdiB1bCBsaXtcXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XFxufVxcblxcbi5tZW51TGlzdFNlY3R7XFxuICAgIHdpZHRoOiA3NTBweDtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogbWFyZ2luLXRvcDogYXV0byAqL1xcbn1cXG5cXG5cXG4ubWVudUxpc3RTZWN0IGRpdjpmaXJzdC1jaGlsZHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICBcXG4gICAgXFxufVxcblxcbi5tZW51U2VjdHtcXG4gICAgd2lkdGg6NzUwcHg7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIFxcbn1cXG5cXG4ubWVudVNlY3QgaW1ne1xcbiAgICB3aWR0aDogNDBweDtcXG59XFxuXFxuLm1lbnVTZWN0IHVse1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4IDBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubWVudVNlY3QgbGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb2RJdGVtSW1nU2VjdHtcXG4gICAgd2lkdGg6IDQ1cHggIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tZW51U2VjdCBsaSBpbWd7XFxuICAgIFxcbiAgICBcXG5cXG59XFxuLm1lbnVTZWN0IGxpIHA6bnRoLWNoaWxkKDEpe1xcbmZvbnQtc2l6ZTogMTJweDtcXG5cXG59XFxuXFxuLm1lbnVTZWN0IGxpIHA6bnRoLWNoaWxkKDIpe1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIFxcbiAgICB9XFxuXFxuLm1lbnVTZWN0IGxpIHA6bnRoLWNoaWxkKDMpe1xcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG59XFxuXFxuXFxuLmRpc3BsYXlEaXNoIGltZ3tcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdmFycmlhYmxlcy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyZWF0K1ZpYmVzJmZhbWlseT1JbnRlcjp3Z2h0QDIwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmhlYWRlcntcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTI7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxvZ28gaW1ne1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjBweDtcXG4gICAgbGVmdDo0NyU7XFxufVxcblxcbnVse1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIFxcbn1cXG5cXG5saXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5zZWFyY2hTZWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0NnB4O1xcbiAgICByaWdodDogMXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgXFxuICAgIFxcbn1cXG5cXG5cXG4uc2VhcmNoQmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG59XFxuXFxuI2hhbmRCYWd7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luOiAzcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlYXJjaEljb24ge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIFxcbiAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XFxufVxcblxcbi5zZWFyY2hCYXIgaW5wdXR7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHdpZHRoOiAxNjZweDtcXG4gICAgXFxufVxcblxcbi5zZWFyY2hCYXIgaW5wdXQ6OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsaUJBQWlCOztBQUVuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7OztBQUd2Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7O0lBRVosa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi92YXJyaWFibGVzLmNzcyc7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PUludGVyOndnaHRAMjAwJmRpc3BsYXk9c3dhcCcpO1xcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaGVhZGVye1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLWNvbHVtbjogMi8xMjtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubG9nbyBpbWd7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICBsZWZ0OjQ3JTtcXG59XFxuXFxudWx7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgXFxufVxcblxcbmxpe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjs7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnNlYXJjaFNlY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQ2cHg7XFxuICAgIHJpZ2h0OiAxcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICBcXG4gICAgXFxufVxcblxcblxcbi5zZWFyY2hCYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbn1cXG5cXG4jaGFuZEJhZ3tcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VhcmNoSWNvbiB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgXFxuICAgIG1hcmdpbi1yaWdodDogMTdweDtcXG59XFxuXFxuLnNlYXJjaEJhciBpbnB1dHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IDE2NnB4O1xcbiAgICBcXG59XFxuXFxuLnNlYXJjaEJhciBpbnB1dDo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdmFycmlhYmxlcy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hvbWVEaXNoLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R3JlYXQrVmliZXMmZmFtaWx5PUludGVyOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwibWFpbntcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDIvMTM7XFxuICBncmlkLXJvdzogMy84O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIFxcbiAgXFxufVxcblxcbm1haW4gLnRleHRDb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQ4JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OjFweCB2YXIoLS13aGl0ZS1jbHIpIHNvbGlkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLnNvY2lhbFNlY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MzAlO1xcbiAgICBsZWZ0OiAtMTBweDtcXG4gICBcXG59XFxuXFxuLnNvY2lhbFNlY3QgaW1ne1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxuICAgIHdpZHRoOjE0cHg7XFxuICAgIFxcbn1cXG5cXG4udGV4dENvbnRlbnQgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgd2lkdGg6MTIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIG1hcmdpbjoxMHB4ICAzNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbn1cXG5cXG4udGV4dENvbnRlbnQgcHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbmNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbndpZHRoOiAzOTBweDtcXG5tYXJnaW46IDEwcHggMzVweDtcXG5mb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udGV4dENvbnRlbnQgLmhlYWRpbmcye1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbn1cXG5cXG5cXG4udGV4dENvbnRlbnQgLmhlYWRpbmcxe1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IFZpYmVzJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxuICAgIFxcbn1cXG5cXG5cXG4uaW1hZ2VTZWN0e1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEzMCU7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogOTglO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIFxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOztJQUVJLGlCQUFpQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTs7O0FBR2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGtCQUFrQjs7O0FBR3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGFBQWE7R0FDZCxtQkFBbUI7R0FDbkIsdUJBQXVCO0lBQ3RCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVOztBQUVkOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25CLHVCQUF1QjtBQUN2QixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLCtCQUErQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsaUJBQWlCOztBQUVyQjs7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1EQUF5QztJQUN6QyxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsNEJBQTRCOztBQUVoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL3ZhcnJpYWJsZXMuY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZmYW1pbHk9SW50ZXI6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbm1haW57XFxuXFxuICAgIGdyaWQtY29sdW1uOiAyLzEzO1xcbiAgZ3JpZC1yb3c6IDMvODtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBcXG4gIFxcbn1cXG5cXG5tYWluIC50ZXh0Q29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA0OCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItbGVmdDoxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBcXG4gICAgXFxufVxcblxcbi5zb2NpYWxTZWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjMwJTtcXG4gICAgbGVmdDogLTEwcHg7XFxuICAgXFxufVxcblxcbi5zb2NpYWxTZWN0IGltZ3tcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbiAgICB3aWR0aDoxNHB4O1xcbiAgICBcXG59XFxuXFxuLnRleHRDb250ZW50IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIHdpZHRoOjEyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXJnaW46MTBweCAgMzVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG59XFxuXFxuLnRleHRDb250ZW50IHB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG5jb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG53aWR0aDogMzkwcHg7XFxubWFyZ2luOiAxMHB4IDM1cHg7XFxuZm9udC1mYW1pbHk6J0ludGVyJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRleHRDb250ZW50IC5oZWFkaW5nMntcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG59XFxuXFxuXFxuLnRleHRDb250ZW50IC5oZWFkaW5nMXtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcbiAgICBcXG59XFxuXFxuXFxuLmltYWdlU2VjdHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMzAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9ob21lRGlzaC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA5OCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgXFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi92YXJyaWFibGVzLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hYm91dC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb29kQ2F0LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNl9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1doeUNob29zZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzdfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXN0cmF1SW5mb1NlY3QuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF84X19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZnJvbU1lbnUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF85X19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vb3VyQ2hlZi5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEwX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGVzdGltb25pYWwuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMV9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc3RyYXVBY3RpdmUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMl9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jsb2cuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xM19fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL01lbnVQYWdlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTRfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlSGVhZGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTVfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ibG9nUGFnZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzE2X19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hvcC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzE3X19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXRQYWdlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvbWFpbmJnLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzZfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzdfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzhfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzlfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEwX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTJfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEzX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xNF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTVfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzE2X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY2xyKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgXFxuICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG4uY29udGVudHtcXG53aWR0aDogMTAwdnc7XFxuYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuODA0KTtcXG5oZWlnaHQ6IDEyMCU7XFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLDg4cHgpO1xcbmdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgwLDcwcHgpO1xcbmdhcDowcHggMjRweDtcXG56LWluZGV4OiAxO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQW9CQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyx5REFBNkM7SUFDN0Msc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsY0FBYzs7R0FFZixrQkFBa0I7SUFDakIsd0JBQXdCOztBQUU1Qjs7OztBQUlBO0FBQ0EsWUFBWTtBQUNaLHFDQUFxQztBQUNyQyxZQUFZO0FBQ1osYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixzQ0FBc0M7QUFDdEMsbUNBQW1DO0FBQ25DLFlBQVk7QUFDWixVQUFVO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi92YXJyaWFibGVzLmNzcyc7XFxuQGltcG9ydCBcXFwiLi9oZWFkZXIuY3NzXFxcIjtcXG5AaW1wb3J0ICcuL2hvbWUuY3NzJztcXG5AaW1wb3J0ICcuL2Zvb3Rlci5jc3MnO1xcbkBpbXBvcnQgJy4vYWJvdXQuY3NzJztcXG5AaW1wb3J0ICcuL2Zvb2RDYXQuY3NzJztcXG5AaW1wb3J0ICcuL1doeUNob29zZS5jc3MnO1xcbkBpbXBvcnQgJy4vcmVzdHJhdUluZm9TZWN0LmNzcyc7XFxuQGltcG9ydCAnLi9mcm9tTWVudS5jc3MnO1xcbkBpbXBvcnQgJy4vb3VyQ2hlZi5jc3MnO1xcbkBpbXBvcnQgJy4vdGVzdGltb25pYWwuY3NzJztcXG5AaW1wb3J0ICcuL3Jlc3RyYXVBY3RpdmUuY3NzJztcXG5AaW1wb3J0ICcuL2Jsb2cuY3NzJztcXG5AaW1wb3J0ICcuL01lbnVQYWdlLmNzcyc7XFxuQGltcG9ydCAnLi9wYWdlSGVhZGVyLmNzcyc7XFxuQGltcG9ydCAnLi9ibG9nUGFnZS5jc3MnO1xcbkBpbXBvcnQgJy4vc2hvcC5jc3MnO1xcbkBpbXBvcnQgJy4vYWJvdXRQYWdlLmNzcyc7XFxuXFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY2xyKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvbWFpbmJnLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICBcXG4gICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG4gICAgXFxufVxcblxcblxcblxcbi5jb250ZW50e1xcbndpZHRoOiAxMDB2dztcXG5iYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC44MDQpO1xcbmhlaWdodDogMTIwJTtcXG5kaXNwbGF5OiBncmlkO1xcbmdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsODhweCk7XFxuZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoODAsNzBweCk7XFxuZ2FwOjBweCAyNHB4O1xcbnotaW5kZXg6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcbi5vdXJDaGVmU2VjdHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTE7XFxuICAgIGdyaWQtcm93OiA0Ny81MjtcXG4gICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ub3VyQ2hlZlNlY3QgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDs7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgXFxufVxcblxcbi5vdXJDaGVmU2VjdCBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMwcHg7XFxuICAgIGxlZnQ6IDMyMHB4O1xcbn1cXG5cXG4ub3VyQ2hlZlNlY3Qgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5jaGVmTGlzdHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICBcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgdG9wOiAyMHB4O1xcbiAgICBcXG59XFxuXFxuIC5vdXJDaGVmU2VjdCBidXR0b24ge1xcbiAgICBcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5vdXJDaGVmU2VjdCBidXR0b246aG92ZXIge1xcbiAgICBcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG59XFxuXFxuLmNoZWZMaXN0IC5jaGVmU2VjdHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbn1cXG5cXG4uY2hlZkxpc3QgaW1ne1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHNjYWxlOiAxO1xcbiAgICBcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcbn1cXG5cXG4uY2hlZkxpc3QgaW1nOmhvdmVye1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHNjYWxlOiAxLjI7XFxufVxcblxcbi5jaGVmTGlzdCAuaW5mb3tcXG5cXG4gICAgd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stY2xyKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAuNXM7XFxufVxcblxcbi5jaGVmTGlzdCAuaW5mbyBwOmZpcnN0LWNoaWxke1xcbiAgICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIFxcblxcbn1cXG5cXG4uY2hlZkxpc3QgLmluZm8gcDpudGgtY2hpbGQoMil7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZToxMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9vdXJDaGVmLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlOztJQUVmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTs7SUFFYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7R0FDeEIsa0JBQWtCO0dBQ2xCLFNBQVM7O0FBRVo7O0NBRUM7O0lBRUcsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsUUFBUTs7SUFFUixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhOzs7QUFHakI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGFBQWE7O0FBRWpCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcbi5vdXJDaGVmU2VjdHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTE7XFxuICAgIGdyaWQtcm93OiA0Ny81MjtcXG4gICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ub3VyQ2hlZlNlY3QgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDs7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgXFxufVxcblxcbi5vdXJDaGVmU2VjdCBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBtYXJnaW46IDEwcHggMzVweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMwcHg7XFxuICAgIGxlZnQ6IDMyMHB4O1xcbn1cXG5cXG4ub3VyQ2hlZlNlY3Qgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5jaGVmTGlzdHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICBcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgdG9wOiAyMHB4O1xcbiAgICBcXG59XFxuXFxuIC5vdXJDaGVmU2VjdCBidXR0b24ge1xcbiAgICBcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5vdXJDaGVmU2VjdCBidXR0b246aG92ZXIge1xcbiAgICBcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG59XFxuXFxuLmNoZWZMaXN0IC5jaGVmU2VjdHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbn1cXG5cXG4uY2hlZkxpc3QgaW1ne1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHNjYWxlOiAxO1xcbiAgICBcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcbn1cXG5cXG4uY2hlZkxpc3QgaW1nOmhvdmVye1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIHNjYWxlOiAxLjI7XFxufVxcblxcbi5jaGVmTGlzdCAuaW5mb3tcXG5cXG4gICAgd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stY2xyKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAuNXM7XFxufVxcblxcbi5jaGVmTGlzdCAuaW5mbyBwOmZpcnN0LWNoaWxke1xcbiAgICBmb250LWZhbWlseTonSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIFxcblxcbn1cXG5cXG4uY2hlZkxpc3QgLmluZm8gcDpudGgtY2hpbGQoMil7XFxuICAgIGZvbnQtZmFtaWx5OidJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZToxMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcmVzdHJhdUFjdGl2ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvcGxheS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyZWF0K1ZpYmVzJmZhbWlseT1JbnRlcjp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcblxcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ucmVzdHJhdUFjdGl2ZVNlY3R7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8xNDtcXG4gICAgZ3JpZC1yb3c6IDYyLzY2O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucmVzdHJhdUFjdGl2ZVNlY3QgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI2MHB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG5cXG59XFxuXFxuLnJlc3RyYXVBY3RpdmVTZWN0IGgxe1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI2MHB4O1xcbiAgICBcXG5cXG59XFxuXFxuLnJlc3RyYXVBY3RpdmVTZWN0IHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4ucmVzdHJhdUFjdGl2ZVNlY3QgcHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjYwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uYnRuU2VjdCB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBcXG4gIFxcbiAgICBtYXJnaW4tcmlnaHQ6IDIzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgXFxuXFxufVxcblxcbi5idG4xIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogLTI5MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMXB4IDI4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xcblxcbn1cXG5cXG4uYnRuMTpob3ZlcntcXG4gICAgcGFkZGluZzogMTFweCAyOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLXByaW1hcnktY2xyKSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuXFxufVxcblxcbi5idG4ye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgcmlnaHQ6IC0zMTVweDtcXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nOjE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMnB4O1xcblxcblxcbn1cXG5cXG4uYnRuMjpob3ZlcntcXG4gICAgcGFkZGluZzoxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE4NCwgMTMxLCA3Nyk7XFxuXFxufVxcblxcbi5WaWRwbGF5ICB7XFxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgIHJpZ2h0OiAtMjMwcHg7XFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAzNTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6ODAwO1xcblxcbn1cXG5cXG4ucGxheVZpZFNlY3R7XFxuICAgIG1hcmdpbi10b3A6IDE3cHg7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVzdHJhdUFjdGl2ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlEQUFvRDtJQUNwRCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7OztBQUd2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXOzs7SUFHWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjs7OztBQUl2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksa0JBQWtCO0dBQ25CLGFBQWE7R0FDYixnQkFBZ0I7SUFDZixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlEQUEyQztJQUMzQyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDJCQUEyQjs7O0FBRy9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5REFBMkM7SUFDM0MsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0Isa0NBQWtDOztBQUV0Qzs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixhQUFhO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyZWF0K1ZpYmVzJmZhbWlseT1JbnRlcjp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuXFxuXFxuKntcXG5cXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnJlc3RyYXVBY3RpdmVTZWN0e1xcbiAgICBncmlkLWNvbHVtbjogMSAvMTQ7XFxuICAgIGdyaWQtcm93OiA2Mi82NjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvcmVzdHJhdUFjdGl2ZS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJlc3RyYXVBY3RpdmVTZWN0IGgye1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogJ0dyZWF0IFZpYmVzJywgY3Vyc2l2ZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNjBweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuXFxufVxcblxcbi5yZXN0cmF1QWN0aXZlU2VjdCBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNjBweDtcXG4gICAgXFxuXFxufVxcblxcbi5yZXN0cmF1QWN0aXZlU2VjdCBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuLnJlc3RyYXVBY3RpdmVTZWN0IHB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI2MHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmJ0blNlY3Qge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgXFxuICBcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIFxcblxcbn1cXG5cXG4uYnRuMSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IC0yOTBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgcGFkZGluZzogMTFweCAyOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY2xyKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG5cXG59XFxuXFxuLmJ0bjE6aG92ZXJ7XFxuICAgIHBhZGRpbmc6IDExcHggMjhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xcblxcbn1cXG5cXG4uYnRuMntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgIHJpZ2h0OiAtMzE1cHg7XFxuICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgcGFkZGluZzoxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9wbGF5LnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTJweDtcXG5cXG5cXG59XFxuXFxuLmJ0bjI6aG92ZXJ7XFxuICAgIHBhZGRpbmc6MThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IC4zcztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3BsYXkucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxODQsIDEzMSwgNzcpO1xcblxcbn1cXG5cXG4uVmlkcGxheSAge1xcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICByaWdodDogLTIzMHB4O1xcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMzUwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OjgwMDtcXG5cXG59XFxuXFxuLnBsYXlWaWRTZWN0e1xcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy90b3RhbEluZm9TZWN0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5yZXN0cmF1SW5mb1NlY3R7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8xNDtcXG4gICAgZ3JpZC1yb3c6IDM1LzM5O1xcblxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG47XFxufVxcblxcbi5yZXN0cmF1SW5mb1NlY3RCbGFja0xheWVye1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcyMik7XFxuICB6LWluZGV4OiAxO1xcblxcbn1cXG5cXG4ucmVzdHJhdUluZm9TZWN0QmxhY2tMYXllciBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIgZGl2IGltZ3tcXG4gICB3aWR0aDogODBweDsgXFxuICAgO1xcbn1cXG5cXG4ucmVzdHJhdUluZm9TZWN0QmxhY2tMYXllciBkaXYgcDpudGgtY2hpbGQoMil7XFxuICAgY29sb3I6IHdoaXRlO1xcbiAgIGZvbnQtc2l6ZTogMTlweDtcXG4gICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICBmb250LXdlaWdodDogNjAwO1xcbiB9XFxuXFxuIC5yZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyIGRpdiBwOm50aC1jaGlsZCgzKXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgfVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVzdHJhdUluZm9TZWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7O0VBRWpCLHlEQUFvRDs7QUFFdEQ7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7RUFDZCxzQ0FBc0M7RUFDdEMsVUFBVTs7QUFFWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhOztJQUViLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7R0FDRyxXQUFXOztBQUVkOztBQUVBO0dBQ0csWUFBWTtHQUNaLGVBQWU7R0FDZixtQ0FBbUM7R0FDbkMsZ0JBQWdCO0NBQ2xCOztDQUVBO0lBQ0csWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUNBQW1DO0VBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5yZXN0cmF1SW5mb1NlY3R7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8xNDtcXG4gICAgZ3JpZC1yb3c6IDM1LzM5O1xcblxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvdG90YWxJbmZvU2VjdC5wbmcnKTtcXG47XFxufVxcblxcbi5yZXN0cmF1SW5mb1NlY3RCbGFja0xheWVye1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcyMik7XFxuICB6LWluZGV4OiAxO1xcblxcbn1cXG5cXG4ucmVzdHJhdUluZm9TZWN0QmxhY2tMYXllciBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIgZGl2IGltZ3tcXG4gICB3aWR0aDogODBweDsgXFxuICAgO1xcbn1cXG5cXG4ucmVzdHJhdUluZm9TZWN0QmxhY2tMYXllciBkaXYgcDpudGgtY2hpbGQoMil7XFxuICAgY29sb3I6IHdoaXRlO1xcbiAgIGZvbnQtc2l6ZTogMTlweDtcXG4gICBmb250LWZhbWlseTogIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICBmb250LXdlaWdodDogNjAwO1xcbiB9XFxuXFxuIC5yZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyIGRpdiBwOm50aC1jaGlsZCgzKXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIzcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgfVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2hlYWRlci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc2VhcmNoLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9CYW5uZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZm9vdGVyU2hvcHtcXG4gICAgcGFkZGluZzogMzBweCAgMjBweDtcXG4gIGdyaWQtY29sdW1uOiAxLzE0O1xcbiAgZ3JpZC1yb3c6IDMwLzM2O1xcbiAgLyogYm9yZGVyOiAxcHggdmFyKC0td2hpdGUtY2xyKSBzb2xpZDsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uYm9keVBhZ2VGb3JTaG9we1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wOyAgXFxufVxcblxcblxcbi5zaG9wQm9keXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMTQ7XFxuICAgIGdyaWQtcm93OiA1LzMwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hvcFNlY3R7XFxuICAgIFxcbiAgICB3aWR0aDo4MHZ3O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogLTIwMHB4O1xcbiAgICBcXG4gICAgXFxufVxcblxcbi5zaG9wTGlzdHtcXG4gICBcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiAxNXB4O1xcblxcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuLnNob3BMaXN0IC5pdGVtOm50aC1jaGlsZCgzKXtcXG4gIFxcbiAgZGlzcGxheTogbm9uZTtcXG4gICAgXFxufVxcblxcbi5zaG9wU2VjdCAuaXRlbXtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICBcXG4gICBcXG59XFxuXFxuXFxuLnNob3BTZWN0IC5pdGVtIGltZ3tcXG4gICAgd2lkdGg6IDE5NXB4O1xcbiAgICBoZWlnaHQ6MTUwcHggO1xcbn1cXG5cXG4uc2hvcFNlY3QgLml0ZW0gLml0ZW1OYW1le1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgcmlnaHQ6IDU1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG5cXG59XFxuXFxuLnNob3BTZWN0IC5pdGVtIHA6bGFzdC1jaGlsZHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIHJpZ2h0OjgwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG5cXG59XFxuXFxuLnNob3BCb2R5IC5wcm9maWxlRGV0YWlse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDk4KTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIG1hcmdpbi10b3A6IC01NDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogMTAwcHg7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLnNob3BCb2R5IC5wcm9maWxlRGV0YWlsIC5pbnB1dFNlY3QgaW5wdXR7XFxuICAgIFxcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jbHIpOyAqL1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDIyNywgMjI3KTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4uc2hvcEJvZHkgLnByb2ZpbGVEZXRhaWwgLmlucHV0U2VjdHtcXG4gICAgXFxud2lkdGg6IDIwMHB4O1xcbmhlaWdodDogMzRweDtcXG4vKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMjcsIDIyNyk7XFxuZGlzcGxheTogZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbm1hcmdpbi10b3A6IDMwcHg7XFxuXFxuICAgIFxcbn1cXG5cXG4uc2hvcEJvZHkgLnByb2ZpbGVEZXRhaWwgLmlucHV0U2VjdCAuSW5wdXRJQ09Oe1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLnByb2ZpbGVEZXRhaWwgLmNoZWNrTGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5wcm9maWxlRGV0YWlsIC5jaGVja0xpc3QgLmNoZWNrUGFyYXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5wcm9maWxlRGV0YWlsIC5jaGVja0xpc3QgaDJ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMFxcbiAgICA7XFxuXFxufVxcblxcbi5hZHZlcnRpc2V7XFxud2lkdGg6IDIwMHB4O1xcbmhlaWdodDogMjQwcHg7XFxubWFyZ2luLXRvcDogMzBweDtcXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbmJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcbn1cXG5cXG4ubGF0ZXN0UHJ7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgIFxcblxcbn1cXG5cXG4ubGlzdFBye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBnYXA6IDVweCA7XFxuXFxufVxcblxcbi5sYXRlc3RQciBpbWd7XFxuXFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5sYXRlc3RQciAubGlzdFByIHA6bGFzdC1jaGlsZHtcXG5cXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBcXG4gICBcXG4gICAgXFxufVxcbi5wcm9maWxlRGV0YWlsIC5sYXRlc3RQciBoMntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Nob3AuY3Nz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aEIsbUJBQW1CO0lBQ25CLGdCQUFnQjs7QUFFcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmZvb3RlclNob3B7XFxuICAgIHBhZGRpbmc6IDMwcHggIDIwcHg7XFxuICBncmlkLWNvbHVtbjogMS8xNDtcXG4gIGdyaWQtcm93OiAzMC8zNjtcXG4gIC8qIGJvcmRlcjogMXB4IHZhcigtLXdoaXRlLWNscikgc29saWQ7ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLmJvZHlQYWdlRm9yU2hvcHtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvaGVhZGVyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wOyAgXFxufVxcblxcblxcbi5zaG9wQm9keXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMTQ7XFxuICAgIGdyaWQtcm93OiA1LzMwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hvcFNlY3R7XFxuICAgIFxcbiAgICB3aWR0aDo4MHZ3O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tbGVmdDogLTIwMHB4O1xcbiAgICBcXG4gICAgXFxufVxcblxcbi5zaG9wTGlzdHtcXG4gICBcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiAxNXB4O1xcblxcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuXFxuLnNob3BMaXN0IC5pdGVtOm50aC1jaGlsZCgzKXtcXG4gIFxcbiAgZGlzcGxheTogbm9uZTtcXG4gICAgXFxufVxcblxcbi5zaG9wU2VjdCAuaXRlbXtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICBcXG4gICBcXG59XFxuXFxuXFxuLnNob3BTZWN0IC5pdGVtIGltZ3tcXG4gICAgd2lkdGg6IDE5NXB4O1xcbiAgICBoZWlnaHQ6MTUwcHggO1xcbn1cXG5cXG4uc2hvcFNlY3QgLml0ZW0gLml0ZW1OYW1le1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgcmlnaHQ6IDU1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG5cXG59XFxuXFxuLnNob3BTZWN0IC5pdGVtIHA6bGFzdC1jaGlsZHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDE1cHg7XFxuICAgIHJpZ2h0OjgwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG5cXG59XFxuXFxuLnNob3BCb2R5IC5wcm9maWxlRGV0YWlse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDk4KTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIG1hcmdpbi10b3A6IC01NDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogMTAwcHg7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLnNob3BCb2R5IC5wcm9maWxlRGV0YWlsIC5pbnB1dFNlY3QgaW5wdXR7XFxuICAgIFxcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jbHIpOyAqL1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjksIDIyNywgMjI3KTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4uc2hvcEJvZHkgLnByb2ZpbGVEZXRhaWwgLmlucHV0U2VjdHtcXG4gICAgXFxud2lkdGg6IDIwMHB4O1xcbmhlaWdodDogMzRweDtcXG4vKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5LCAyMjcsIDIyNyk7XFxuZGlzcGxheTogZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbm1hcmdpbi10b3A6IDMwcHg7XFxuXFxuICAgIFxcbn1cXG5cXG4uc2hvcEJvZHkgLnByb2ZpbGVEZXRhaWwgLmlucHV0U2VjdCAuSW5wdXRJQ09Oe1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3NlYXJjaC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ucHJvZmlsZURldGFpbCAuY2hlY2tMaXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnByb2ZpbGVEZXRhaWwgLmNoZWNrTGlzdCAuY2hlY2tQYXJhe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnByb2ZpbGVEZXRhaWwgLmNoZWNrTGlzdCBoMntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwXFxuICAgIDtcXG5cXG59XFxuXFxuLmFkdmVydGlzZXtcXG53aWR0aDogMjAwcHg7XFxuaGVpZ2h0OiAyNDBweDtcXG5tYXJnaW4tdG9wOiAzMHB4O1xcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL0Jhbm5lci5wbmcnKTtcXG5iYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXG59XFxuXFxuLmxhdGVzdFBye1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICBcXG5cXG59XFxuXFxuLmxpc3RQcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ2FwOiA1cHggO1xcblxcbn1cXG5cXG4ubGF0ZXN0UHIgaW1ne1xcblxcbiAgICB3aWR0aDogNDBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4ubGF0ZXN0UHIgLmxpc3RQciBwOmxhc3QtY2hpbGR7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgXFxuICAgXFxuICAgIFxcbn1cXG4ucHJvZmlsZURldGFpbCAubGF0ZXN0UHIgaDJ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvUXVvdGVzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxufVxcblxcbi5UZXN0aW1vbmlhbHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTE7XFxuICAgIGdyaWQtcm93OiA1NC82MDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIFxcbiAgIFxcbn1cXG5cXG5cXG4uVGVzdGltb25pYWwgaDJ7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiAnR3JlYXQgVmliZXMnLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDEwcHggMzVweDs7XFxuICAgIFxcbn1cXG5cXG4uVGVzdGltb25pYWwgaDF7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAwcHggMzVweDtcXG59XFxuXFxuLnRlc3RpbW9uaWFsQ2FyZFNlY3R7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgIFxcbn1cXG5cXG4udGVzdGltb25pYWxDYXJkc3tcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNXB4O1xcbiAgICBcXG59XFxuXFxuLnRlc3RpbW9uaWFsQ2FyZHMgcDpudGgtY2hpbGQoMil7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDMyMHB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4uZGVzaWdue1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XFxuXFxuICAgIFxcbn1cXG5cXG4udGVzdGltb25pYWxDYXJkcyBwOm50aC1jaGlsZCg0KXtcXG5cXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBcXG59XFxuXFxuLnByb2ZpbGUge1xcbiAgICB3aWR0aDogNzBweDtcXG4gXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMzBweFxcbjtcXG5cXG59XFxuXFxuLnRlc3RpbW9uaWFsR3JlZW57XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgbGVmdDogNTgwcHg7XFxufVxcblxcbi5zdGFyU2VjdHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uc3RhclNlY3QgaW1ne1xcbiAgICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnRlc3RpbW9uaWFsQ2FyZFNlY3QgLlNsaWRlckRvdCB7XFxud2lkdGg6IDE1MHB4O1xcbmhlaWdodDogMzBweDtcXG4vKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxubWFyZ2luLXRvcDogMjBweDtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuZ2FwOiA1cHg7XFxuXFxufVxcblxcbi5TbGlkZXJEb3QgPiBkaXY6Zmlyc3QtY2hpbGR7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uU2xpZGVyRG90ID4gZGl2e1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgb3BhY2l0eTogLjQ7XFxufVxcblxcbi5ncmFzc0Nvcm5lckltZ3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBsZWZ0OiAtNTBweDtcXG4gICAgdG9wOiAzMzAwcHg7XFxuICAgIFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Rlc3RpbW9uaWFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMENBQTBDO0lBQzFDLGFBQWE7SUFDYixzQkFBc0I7OztBQUcxQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIseURBQTZDO0lBQzdDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLCtCQUErQjtJQUMvQixtQkFBbUI7OztBQUd2Qjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxXQUFXOztJQUVYLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOztJQUVJLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0FBQ0EsWUFBWTtBQUNaLFlBQVk7QUFDWiwwQ0FBMEM7QUFDMUMsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CLFFBQVE7O0FBRVI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7O0FBRWZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuXFxuLlRlc3RpbW9uaWFse1xcbiAgICBncmlkLWNvbHVtbjogMi8xMTtcXG4gICAgZ3JpZC1yb3c6IDU0LzYwO1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgXFxuICAgXFxufVxcblxcblxcbi5UZXN0aW1vbmlhbCBoMntcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgZm9udC1mYW1pbHk6ICdHcmVhdCBWaWJlcycsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMTBweCAzNXB4OztcXG4gICAgXFxufVxcblxcbi5UZXN0aW1vbmlhbCBoMXtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiA0NTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW46IDBweCAzNXB4O1xcbn1cXG5cXG4udGVzdGltb25pYWxDYXJkU2VjdHtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICAvKiBib3JkZXI6IDFweCB2YXIoLS1wcmltYXJ5LWNscikgc29saWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgXFxufVxcblxcbi50ZXN0aW1vbmlhbENhcmRze1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNscik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9RdW90ZXMucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNTBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjVweDtcXG4gICAgXFxufVxcblxcbi50ZXN0aW1vbmlhbENhcmRzIHA6bnRoLWNoaWxkKDIpe1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXInLHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAzMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuLmRlc2lnbntcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDpsaWdodGVyO1xcblxcbiAgICBcXG59XFxuXFxuLnRlc3RpbW9uaWFsQ2FyZHMgcDpudGgtY2hpbGQoNCl7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgXFxufVxcblxcbi5wcm9maWxlIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTMwcHhcXG47XFxuXFxufVxcblxcbi50ZXN0aW1vbmlhbEdyZWVue1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGxlZnQ6IDU4MHB4O1xcbn1cXG5cXG4uc3RhclNlY3R7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnN0YXJTZWN0IGltZ3tcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi50ZXN0aW1vbmlhbENhcmRTZWN0IC5TbGlkZXJEb3Qge1xcbndpZHRoOiAxNTBweDtcXG5oZWlnaHQ6IDMwcHg7XFxuLyogYm9yZGVyOiAxcHggdmFyKC0tcHJpbWFyeS1jbHIpIHNvbGlkOyAqL1xcbm1hcmdpbi10b3A6IDIwcHg7XFxuZGlzcGxheTogZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbmdhcDogNXB4O1xcblxcbn1cXG5cXG4uU2xpZGVyRG90ID4gZGl2OmZpcnN0LWNoaWxke1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLlNsaWRlckRvdCA+IGRpdntcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICAgIG9wYWNpdHk6IC40O1xcbn1cXG5cXG4uZ3Jhc3NDb3JuZXJJbWd7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgbGVmdDogLTUwcHg7XFxuICAgIHRvcDogMzMwMHB4O1xcbiAgICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuOnJvb3R7XFxuICAgIC0tYmxhY2stYmctY2xyOnJnYmEoMCwgMCwgMCwgNzAwKTtcXG4gICAgLS13aGl0ZS1jbHI6I0ZGRkZGRjtcXG4gICAgLS1wcmltYXJ5LWNscjojRkY5RjBEO1xcbiAgICAtLXByaW1hcnktZHJrLWNscjojZWE5MDBhO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3ZhcnJpYWJsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuOnJvb3R7XFxuICAgIC0tYmxhY2stYmctY2xyOnJnYmEoMCwgMCwgMCwgNzAwKTtcXG4gICAgLS13aGl0ZS1jbHI6I0ZGRkZGRjtcXG4gICAgLS1wcmltYXJ5LWNscjojRkY5RjBEO1xcbiAgICAtLXByaW1hcnktZHJrLWNscjojZWE5MDBhO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gXCIuL21vZHVsZXMvaGVhZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSBcIi4vbW9kdWxlcy9ob21lXCI7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2Zvb3RlclwiO1xuaW1wb3J0IHsgY3JlYXRlQWJvdXRVcyB9IGZyb20gXCIuL21vZHVsZXMvYWJvdXRVc1wiO1xuaW1wb3J0IHsgY3JlYXRlRm9vZENhdCB9IGZyb20gXCIuL21vZHVsZXMvZm9vZENhdFwiO1xuaW1wb3J0IHsgY3JlYXRlV2h5Q2hvb3NlIH0gZnJvbSBcIi4vbW9kdWxlcy93aHlDaG9vc2VcIjtcbmltcG9ydCB7IGNyZWF0ZVJlc3RyYXVJbmZvIH0gZnJvbSBcIi4vbW9kdWxlcy9yZXN0cmF1SW5mb1NlY3RcIjtcbmltcG9ydCB7Y3JlYXRlRnJvbU1lbnUgfSBmcm9tICcuL21vZHVsZXMvZnJvbU1lbnUnXG5pbXBvcnQgeyBjcmVhdGVUZXN0aW1vbmlhbCB9IGZyb20gXCIuL21vZHVsZXMvdGVzdGltb25pYWxcIjtcbmltcG9ydCB7IGNyZWF0ZVJlc3RyYXVBY3RpdmUgfSBmcm9tIFwiLi9tb2R1bGVzL3Jlc3RyYXVBY3RpdmVcIjtcbmltcG9ydCB7IGNyZWF0ZVNob3AgfSBmcm9tICcuL21vZHVsZXMvc2hvcCdcbmltcG9ydCB7Y3JlYXRlQWJvdXRQYWdlfSBmcm9tICcuL21vZHVsZXMvYWJvdXRQYWdlJ1xuaW1wb3J0ICcuL2Nzcy9tYWluLmNzcydcbmltcG9ydCB7IGNyZWF0ZU91ckNoZWYgfSBmcm9tIFwiLi9tb2R1bGVzL291ckNoZWZcIjtcbmltcG9ydCB7Y3JlYXRlQmxvZ30gICBmcm9tICcuL21vZHVsZXMvYmxvZydcbmV4cG9ydCAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEFsbGhvbWVDb21wb25lbnRzKCl7XG5jb250ZW50LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuY29udGVudC5jbGFzc05hbWU9J2NvbnRlbnQnXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5ib2R5LmNsYXNzTmFtZT0nYm9keSdcbmNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZD0nYmxhY2snXG5jb250ZW50LnN0eWxlLm9wYWNpdHk9JzAuOCdcblxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXNGcm9tRGlzcGxheSgpIHtcbiAgICAgICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9fVxuXG5cbnJlbW92ZUFsbENoaWxkTm9kZXNGcm9tRGlzcGxheSgpXG5jcmVhdGVIZWFkZXIoKTtcbmNyZWF0ZUhvbWUoKVxuY3JlYXRlQWJvdXRVcygpXG5jcmVhdGVGb29kQ2F0KClcbmNyZWF0ZVdoeUNob29zZSgpXG5jcmVhdGVSZXN0cmF1SW5mbygpXG5jcmVhdGVGcm9tTWVudSgpXG5jcmVhdGVPdXJDaGVmKClcbmNyZWF0ZVRlc3RpbW9uaWFsKClcbmNyZWF0ZVJlc3RyYXVBY3RpdmUoKVxuY3JlYXRlQmxvZygpXG5jcmVhdGVGb290ZXIoKTtcblxuXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKVxuZm9vdGVyLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuZm9vdGVyLmNsYXNzTmFtZT0nZm9vdGVyJ1xuXG59XG5cbmxvYWRBbGxob21lQ29tcG9uZW50cygpIiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHtjcmVhdGVQYWdlSGVhZGVyfSBmcm9tICcuL3BhZ2VIZWFkZXInXG5pbXBvcnQge2Fib3V0UGFnZX0gZnJvbSAnLi9pbWFnZXMnXG4gaW1wb3J0IHsgY3JlYXRlVGVzdGltb25pYWwgfSBmcm9tIFwiLi90ZXN0aW1vbmlhbFwiO1xuIGltcG9ydCB7IGNyZWF0ZUZyb21NZW51IH0gZnJvbSBcIi4vZnJvbU1lbnVcIjtcbiBleHBvcnQgZnVuY3Rpb24gY3JlYXRlQWJvdXRQYWdlKCl7XG5cbiAgICBjcmVhdGVQYWdlSGVhZGVyKCdBYm91dCcsJ0Fib3V0IFVzJylcbiAgICBcbiAgICBjb25zdCBhYm91dEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTWVudUJvZHknKVxuICAgIFxuICAgIGNvbnN0IEFib3V0U2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgQWJvdXRTZWN0LmNsYXNzTmFtZT0nQWJvdXRTZWN0UGFnZSdcblxuICAgIGNvbnN0IG1lZGlhU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVkaWFTZWN0LmNsYXNzTmFtZT0nbWVkaWFTZWN0J1xuXG4gICAgY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nMS5zcmMgPSBhYm91dFBhZ2VbMF1cbiAgICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcyLnNyYyA9IGFib3V0UGFnZVsxXVxuICAgIGNvbnN0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZzMuc3JjID0gYWJvdXRQYWdlWzJdXG5cbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQoaW1nMSlcbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQoaW1nMilcbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQoaW1nMylcblxuICAgIFxuICAgIGNvbnN0IHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0ZXh0Q29udGVudC5jbGFzc05hbWU9J3RleHRDb250ZW50J1xuXG4gICAgY29uc3QgdGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRpdGxlMS50ZXh0Q29udGVudD0nQWJvdXQgdXMgX19fJ1xuXG4gICAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIHRpdGxlMi50ZXh0Q29udGVudD0nRm9vZCBpcyBhbiBpbXBvcnRhbnQgcGFydCBPZiBhIGJhbGFuY2VkIERpZXQnXG5cbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYS50ZXh0Q29udGVudD1gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBkaWFtIHBlbGxlbnRlc3F1ZSBiaWJlbmR1bSBub24gZHVpIHZvbHV0cGF0IGZyaW5naWxsYSBiaWJlbmR1bS4gVXJuYSwgZWxpdCBhdWd1ZSB1cm5hLCB2aXRhZSBmZXVnaWF0IHByZXRpdW0gZG9uZWMgaWQgZWxlbWVudHVtLiBVbHRyaWNlcyBtYXR0aXMgdml0YWUgbXVzIHJpc3VzLiBMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHNpdCBldSB2ZWxpdCBpbiBjb25zZXF1YXQuYFxuXG4gICAgY29uc3QgYnRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnRuMS5jbGFzc05hbWU9J2J1dHRvbjEnXG4gICAgYnRuMS50ZXh0Q29udGVudD0nU2hvdyBtb3JlJ1xuICAgIFxuXG4gICAgY29uc3QgYm50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYm50Mi5jbGFzc05hbWU9J2J1dHRvbjInXG5cbiAgICBjb25zdCBidG5wYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYnRucGFyYS50ZXh0Q29udGVudD0nV2F0Y2ggdmlkZW8nXG4gICAgYnRucGFyYS5jbGFzc05hbWU9J2J0blBhcmEnXG4gICAgXG4gICAgQWJvdXRTZWN0LmFwcGVuZENoaWxkKG1lZGlhU2VjdClcbiAgICBBYm91dFNlY3QuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpXG4gICAgXG5cbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZCh0aXRsZTEpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUyKVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKHBhcmEpXG5cbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChidG4xKVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKGJudDIpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoYnRucGFyYSlcbiAgICBcbiAgICBhYm91dEJvZHkuYXBwZW5kQ2hpbGQoQWJvdXRTZWN0KVxuICAgIFxuICAgIGNyZWF0ZUZyb21NZW51KClcbiAgICBcblxuICAgIFxufVxuXG4iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCJcbmltcG9ydCB7IGFib3V0SW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBYm91dFVzKCl7XG5cblxuICAgIGNvbnN0IGFib3V0VXNTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhYm91dFVzU2VjdC5jbGFzc05hbWU9J2Fib3V0VXNTZWN0TWFpbidcblxuICAgIGNvbnN0IHRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBUaXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgY29uc3QgVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIFRpdGxlMS50ZXh0Q29udGVudD0nQWJvdXQgdXMnXG4gICAgVGl0bGUyLmlubmVySFRNTD0nPHNwYW4+V2U8L3NwYW4+IENyZWF0ZSBUaGUgQmVzdCBmb29keSBwcm9kdWN0J1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwYXJhLnRleHRDb250ZW50PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGRpYW0gcGVsbGVudGVzcXVlIGJpYmVuZHVtIG5vbiBkdWkgdm9sdXRwYXQgZnJpbmdpbGxhIGJpYmVuZHVtLiBVcm5hLCBlbGl0IGF1Z3VlIHVybmEsIHZpdGFlIGZldWdpYXQgcHJldGl1bSBkb25lYyBpZCBlbGVtZW50dW0uIFVsdHJpY2VzIG1hdHRpcyBzZWQgdml0YWUgbXVzIHJpc3VzLiBMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHNpdCBldSB2ZWxpdCBpbiBjb25zZXF1YXQuJ1xuXG4gICAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFib3V0QnRuLnRleHRDb250ZW50PSdSZWFkIE1vcmUnICBcbiAgICBcbiAgICBjb25zdCBhYm91dExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgY29uc3QgbGlzdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGlzdDEudGV4dENvbnRlbnQ9JyBMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHNpdCBldSB2ZWxpdCBpbiBjb25zZXF1YXQuJ1xuICAgIGNvbnN0IGxpc3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpc3QyLnRleHRDb250ZW50PScgUXVpc3F1ZSBkaWFtIHBlbGxlbnRlc3F1ZSBiaWJlbmR1bSBub24gZHVpIHZvbHV0cGF0IGZyaW5naWxsYSAnXG4gICAgY29uc3QgbGlzdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGlzdDMudGV4dENvbnRlbnQ9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQnXG5cbiAgICBhYm91dExpc3QuYXBwZW5kQ2hpbGQobGlzdDEpXG4gICAgYWJvdXRMaXN0LmFwcGVuZENoaWxkKGxpc3QyKVxuICAgIGFib3V0TGlzdC5hcHBlbmRDaGlsZChsaXN0MylcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChUaXRsZTEpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoVGl0bGUyKVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKHBhcmEpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRMaXN0KVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0QnRuKVxuXG4gICAgXG5cblxuXG5cbiAgICBjb25zdCBtZWRpYVNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFib3V0SW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgYWJvdXRJbWcxLnNyYz1hYm91dEltZ1swXVxuICAgIGNvbnN0IGFib3V0SW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgYWJvdXRJbWcyLnNyYz1hYm91dEltZ1sxXVxuICAgIGNvbnN0IGFib3V0SW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgYWJvdXRJbWczLnNyYz1hYm91dEltZ1syXVxuXG5cbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQoYWJvdXRJbWcxKVxuICAgIG1lZGlhU2VjdC5hcHBlbmRDaGlsZChhYm91dEltZzIpXG4gICAgbWVkaWFTZWN0LmFwcGVuZENoaWxkKGFib3V0SW1nMylcblxuXG5cbiAgICBhYm91dFVzU2VjdC5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudClcbiAgICBhYm91dFVzU2VjdC5hcHBlbmRDaGlsZChtZWRpYVNlY3QpXG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dFVzU2VjdClcblxuXG5cblxufSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IGJsb2dJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJsb2coKXtcblxuY29uc3QgYmxvZ1NlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuYmxvZ1NlY3QuY2xhc3NOYW1lPSdibG9nU2VjdCdcbmNvbnN0IHRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbnRpdGxlMS50ZXh0Q29udGVudD0nQmxvZyBQb3N0J1xuY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxudGl0bGUyLmlubmVySFRNTD0nPHNwYW4+TGF0PC9zcGFuPmVzdCBOZXdzICYgQmxvZydcblxuY29uc3QgYmxvZ0NhcmRTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmJsb2dDYXJkU2VjdC5jbGFzc05hbWU9J2Jsb2dDYXJkU2VjdCdcblxuY3JlYXRlQmxvZ0NhcmQoYmxvZ0ltZ1swXSwnUGVsbGVudGVzcXVlIE5vbiBFZmZpY2l0dXIgTWkgQWxpcXVhbSBDb252YWxsaXMgTWkgUXVpcycpXG5jcmVhdGVCbG9nQ2FyZChibG9nSW1nWzFdLCdQZWxsZW50ZXNxdWUgTm9uIEVmZmljaXR1ciBNaSBBbGlxdWFtIENvbnZhbGxpcyBNaSBRdWlzJylcbmNyZWF0ZUJsb2dDYXJkKGJsb2dJbWdbMl0sJ1BlbGxlbnRlc3F1ZSBOb24gRWZmaWNpdHVyIE1pIEFsaXF1YW0gQ29udmFsbGlzIE1pIFF1aXMnKVxuXG5mdW5jdGlvbiBjcmVhdGVCbG9nQ2FyZChCTE9HaW1nLGRlc2NyaXB0aW9uKXtcbiAgICBsZXQgYmxvZ0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJsb2dDYXJkLmNsYXNzTmFtZT0nYmxvZ0NhcmQnXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLnNyYyA9IEJMT0dpbWdcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRhdGUudGV4dENvbnRlbnQ9ICcxMCBGZWIgMjAyMidcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRlc2MudGV4dENvbnRlbnQ9ZGVzY3JpcHRpb25cbiAgICBsZXQgbGVhcm5Nb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbGVhcm5Nb3JlLnRleHRDb250ZW50PSdMZWFybiBNb3JlJ1xuICAgIGxldCBpY29uU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaWNvblNlY3QuY2xhc3NOYW1lPSdpY29uU2VjdCdcbiAgICBcbiAgICBsZXQgbGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgbGlrZS5zcmMgPSBibG9nSW1nWzNdXG4gICAgbGV0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGNvbW1lbnQuc3JjID0gYmxvZ0ltZ1s0XVxuICAgIGxldCBzaGFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgc2hhcmUuc3JjID0gYmxvZ0ltZ1s1XVxuICAgIFxuICAgIGljb25TZWN0LmFwcGVuZENoaWxkKGxpa2UpXG4gICAgaWNvblNlY3QuYXBwZW5kQ2hpbGQoY29tbWVudClcbiAgICBpY29uU2VjdC5hcHBlbmRDaGlsZChzaGFyZSlcblxuICAgIGJsb2dDYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICBibG9nQ2FyZC5hcHBlbmRDaGlsZChkYXRlKVxuICAgIGJsb2dDYXJkLmFwcGVuZENoaWxkKGRlc2MpXG4gICAgYmxvZ0NhcmQuYXBwZW5kQ2hpbGQobGVhcm5Nb3JlKVxuICAgIGJsb2dDYXJkLmFwcGVuZENoaWxkKGljb25TZWN0KVxuICAgIGJsb2dDYXJkU2VjdC5hcHBlbmRDaGlsZChibG9nQ2FyZClcbiAgICBcbn1cblxuXG5ibG9nU2VjdC5hcHBlbmRDaGlsZCh0aXRsZTEpXG5ibG9nU2VjdC5hcHBlbmRDaGlsZCh0aXRsZTIpXG5ibG9nU2VjdC5hcHBlbmRDaGlsZChibG9nQ2FyZFNlY3QpXG5jb250ZW50LmFwcGVuZENoaWxkKGJsb2dTZWN0KVxuXG5cblxufSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IGJsb2dJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudVBhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZVBhZ2VIZWFkZXIgfSBmcm9tIFwiLi9wYWdlSGVhZGVyXCI7XG5pbXBvcnQgeyBibG9nSW1nQ2FyZCB9IGZyb20gXCIuL2ltYWdlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmxvZ1BhZ2UoKXtcblxuICAgICBcbiAgICBjcmVhdGVQYWdlSGVhZGVyKCdCbG9nJywnQmxvZyBMaXN0JylcbiAgICAgICAgY29uc3Qgb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9uZScpXG4gICAgICAgIFxuLy8gICAgICAgICByZW1vdmVDaGlsZEZyb21NZW51UGFnZSgpXG4vLyAgICAgZnVuY3Rpb24gcmVtb3ZlQ2hpbGRGcm9tTWVudVBhZ2UoKXtcbiAgICAgICBcbi8vICAgICBjb25zdCBtZW51Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Qm9keScpXG4vLyAgICAgd2hpbGUgKG9uZS5maXJzdENoaWxkKSB7XG4vLyAvLyAgICAgICAgIG9uZS5yZW1vdmVDaGlsZChvbmUuZmlyc3RDaGlsZCk7XG4gICAgICAgICBcbi8vIC8vICB9XG5cblxuLy8gICAgIHdoaWxlIChtZW51Qm9keS5maXJzdENoaWxkKSB7XG4vLyAgICAgICAgbWVudUJvZHkucmVtb3ZlQ2hpbGQobWVudUJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICAgIFxuLy8gfVxuLy8gICAgIH1cbiAgICBcbiAgICAvLyBibG9nIGNyZWF0aW9uXG4gICAgY29uc3QgbWVudUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTWVudUJvZHknKVxuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHBhZ2VOdW1iZXIuY2xhc3NOYW1lPSdwYWdlTnVtYmVyJ1xuICAgIGNvbnN0IGZvcndhcmQgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgT25lICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYmFja3dhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGJXYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBmV2FyZFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBmV2FyZFAudGV4dENvbnRlbnQ9Jzw8J1xuICAgIGNvbnN0IG9uZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBvbmVwLnRleHRDb250ZW50PScxJ1xuICAgIGNvbnN0IHR3b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0d29wLnRleHRDb250ZW50PScyJ1xuICAgIGNvbnN0IHRocmVlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRocmVlcC50ZXh0Q29udGVudD0nMydcbiAgICBjb25zdCBiV2FyZHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBcbiAgICBmb3J3YXJkLmFwcGVuZENoaWxkKGZXYXJkUClcbiAgICBPbmUuYXBwZW5kQ2hpbGQob25lcClcbiAgICBiYWNrd2FyZC5hcHBlbmRDaGlsZCh0aHJlZXApXG4gICAgVGhyZWUuYXBwZW5kQ2hpbGQodHdvcClcbiAgICBiV2FyZC5hcHBlbmRDaGlsZChiV2FyZHApXG5cbiAgICBiV2FyZC50ZXh0Q29udGVudD0nPj4nXG4gICAgcGFnZU51bWJlci5hcHBlbmRDaGlsZChmb3J3YXJkKVxuXG4gICAgcGFnZU51bWJlci5hcHBlbmRDaGlsZChPbmUpXG4gICAgcGFnZU51bWJlci5hcHBlbmRDaGlsZChUd28pXG4gICAgXG4gICAgcGFnZU51bWJlci5hcHBlbmRDaGlsZChUaHJlZSlcbiAgICBwYWdlTnVtYmVyLmFwcGVuZENoaWxkKGJhY2t3YXJkKVxuICAgIHBhZ2VOdW1iZXIuYXBwZW5kQ2hpbGQoYldhcmQpXG5cblxuICAgIGNvbnN0IGJsb2dTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBibG9nU2VjdC5jbGFzc05hbWU9J2Jsb2dTZWN0UGFnZSdcblxuICAgIGNvbnN0IGJsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJsb2cuY2xhc3NOYW1lPSdibG9nUGFnZSdcbiAgICBcbiAgICBjb25zdCBwcm9maWxlRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9maWxlRGV0YWlsLmNsYXNzTmFtZT0ncHJvZmlsZURldGFpbCdcblxuICAgIG1lbnVCb2R5LmFwcGVuZENoaWxkKGJsb2dTZWN0KVxuICAgIGJsb2dTZWN0LmFwcGVuZENoaWxkKGJsb2cpO1xuICAgIGJsb2dTZWN0LmFwcGVuZENoaWxkKHByb2ZpbGVEZXRhaWwpO1xuICAgXG4gICBcbiAgICBjcmVhdGVCbG9nQ2FyZHMoYmxvZ0ltZ1swXSwnMTAgUmVhc29ucyBUbyBEbyBBIERpZ2l0YWwgRGV0b3ggQ2hhbGxlbmdlJylcbiAgICBjcmVhdGVCbG9nQ2FyZHMoYmxvZ0ltZ1sxXSwnVHJhZGl0aW9uYWwgU29mdCBQcmV0emVscyB3aXRoIFN3ZWV0IEJlZXIgQ2hlZXNlJylcbiAgICBjcmVhdGVCbG9nQ2FyZHMoYmxvZ0ltZ1syXSwnVGhlIFVsdGltYXRlIEhhbmdvdmVyIEJ1cmdlcjogRWdnIGluIGEgSG9sZSBCdXJnZXInKVxuICAgIGNyZWF0ZUJsb2dDYXJkcyhibG9nSW1nWzBdLCdNeSBGYXZvcml0ZSBFYXN5IEJsYWNrIFBpenphIFRvYXN0IFJlY2lwZScpXG4gICAgZnVuY3Rpb24gY3JlYXRlQmxvZ0NhcmRzKElNRyx0aXRsZSl7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjYXJkLmNsYXNzTmFtZT0nY2FyZCdcblxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBpbWcuY2xhc3NOYW1lPSdpbWdPZkJsb2cnXG4gICAgICAgIGltZy5zcmMgPSBJTUdcblxuICAgICAgICBjb25zdCBkZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkZXRhaWwuY2xhc3NOYW1lPSdkZXRhaWwnXG4gICAgICAgIGNvbnN0IGRhdGUgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGF0ZS5jbGFzc05hbWU9J2RhdGUnXG4gICAgICAgIGNvbnN0IGRhdGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIFxuICAgICAgICBkYXRlUC50ZXh0Q29udGVudD0nRkVCIDE0LDIwMjIgLydcbiAgICAgICAgY29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbXNnLmNsYXNzTmFtZT0nbXNnJ1xuICAgICAgICBjb25zdCBtc2hQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIG1zaFAudGV4dENvbnRlbnQgPSAnMy8nXG4gICAgICAgIGNvbnN0IEFkbWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgQWRtaW4uY2xhc3NOYW1lPSdBZG1pbidcbiAgICAgICAgY29uc3QgQWRtaW5QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIEFkbWluUC50ZXh0Q29udGVudD0nQWRtaW4nXG4gICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRleHRDb250ZW50LmNsYXNzTmFtZT0nVGV4dGNvbnRlbnRCbG9nJ1xuXG4gICAgICAgIGNvbnN0IFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIFRpdGxlLnRleHRDb250ZW50PXRpdGxlXG4gICAgICAgIGNvbnN0IHBhcmFCbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHBhcmFCbG9nLnRleHRDb250ZW50PSdBdCB2ZXJvIGVvcyBldCBhY2N1c2FtIGV0IGp1c3RvIGR1byBkb2xvcmVzIGV0IGVhIHJlYnVtLiBTdGV0IGNsaXRhIGthc2QgZ3ViZXJncmVuLCBubyBzZWEgdGFraW1hdGEgc2FuY3R1cyBlc3QgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yIGludmlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXV5YW0gZXJhdCdcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50PSdSZWFkIE1vcmUnXG5cbiAgICAgICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKFRpdGxlKVxuICAgICAgICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYUJsb2cpXG4gICAgICAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChidXR0b24pXG5cblxuICAgICAgICBkYXRlLmFwcGVuZENoaWxkKGRhdGVQKVxuICAgICAgICBtc2cuYXBwZW5kQ2hpbGQobXNoUClcbiAgICAgICAgQWRtaW4uYXBwZW5kQ2hpbGQoQWRtaW5QKVxuXG4gICAgICAgIGRldGFpbC5hcHBlbmRDaGlsZChkYXRlKVxuICAgICAgICBkZXRhaWwuYXBwZW5kQ2hpbGQobXNnKVxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKEFkbWluKVxuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRldGFpbClcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudClcbiAgICAgICAgYmxvZy5hcHBlbmRDaGlsZChjYXJkKVxuICAgIH1cblxuICAgIGJsb2dTZWN0LmFwcGVuZENoaWxkKHBhZ2VOdW1iZXIpXG5cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBDYXRlZ29yeUltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvb2RDYXQoKXtcblxuICAgIGNvbnN0IEZvb2RDYXRTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBGb29kQ2F0U2VjdC5jbGFzc05hbWU9J0Zvb2RDYXRTZWN0J1xuICAgIGNvbnN0IHNpZGVHcmFzc0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgc2lkZUdyYXNzSW1nLmNsYXNzTmFtZT0nc2lkZUdyYXNzSW1nJ1xuICAgIHNpZGVHcmFzc0ltZy5zcmM9Q2F0ZWdvcnlJbWdbNF1cbiAgICBjb25zdCBDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgVGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIFRpdGxlMS50ZXh0Q29udGVudD0nRm9vZCBDYXRlZ29yeSdcbiAgICBjb25zdCBUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgVGl0bGUyLmlubmVySFRNTD0nPHNwYW4+Q2g8L3NwYW4+b29zZSBGb29kIEl0ZW0nXG5cbiAgICBjb25zdCBkaXNjb3VudFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZGlzY291bnRUYWdQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGlzY291bnRUYWdQLnRleHRDb250ZW50PSdTYXZlIDMwJSdcbiAgICBkaXNjb3VudFRhZy5hcHBlbmRDaGlsZChkaXNjb3VudFRhZ1ApXG4gICAgY29uc3QgZGlzY291bnRUYWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBkaXNjb3VudFRhZ1AyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGlzY291bnRUYWdQMi50ZXh0Q29udGVudD0nRmFzdCBGb29kIERpc2gnXG4gICAgZGlzY291bnRUYWcyLmFwcGVuZENoaWxkKGRpc2NvdW50VGFnUDIpXG4gICAgRm9vZENhdFNlY3QuYXBwZW5kQ2hpbGQoc2lkZUdyYXNzSW1nKVxuICAgIEZvb2RDYXRTZWN0LmFwcGVuZENoaWxkKGRpc2NvdW50VGFnKVxuICAgIEZvb2RDYXRTZWN0LmFwcGVuZENoaWxkKGRpc2NvdW50VGFnMilcbiAgICBGb29kQ2F0U2VjdC5hcHBlbmRDaGlsZChUaXRsZTEpXG4gICAgRm9vZENhdFNlY3QuYXBwZW5kQ2hpbGQoVGl0bGUyKVxuXG4gICAgY29uc3QgQ2F0ZWdvcnlJbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBDYXRlZ29yeUltZzEuc3JjPUNhdGVnb3J5SW1nWzFdXG4gICAgY29uc3QgQ2F0ZWdvcnlJbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBDYXRlZ29yeUltZzIuc3JjPUNhdGVnb3J5SW1nWzBdXG4gICAgY29uc3QgQ2F0ZWdvcnlJbWczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBDYXRlZ29yeUltZzMuc3JjPUNhdGVnb3J5SW1nWzJdXG4gICAgY29uc3QgQ2F0ZWdvcnlJbWc0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBDYXRlZ29yeUltZzQuc3JjPUNhdGVnb3J5SW1nWzNdXG4gICAgXG4gICAgQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoQ2F0ZWdvcnlJbWcxKVxuICAgIENhdGVnb3J5LmFwcGVuZENoaWxkKENhdGVnb3J5SW1nMilcbiAgICBDYXRlZ29yeS5hcHBlbmRDaGlsZChDYXRlZ29yeUltZzMpXG4gICAgQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoQ2F0ZWdvcnlJbWc0KVxuIFxuXG4gICAgRm9vZENhdFNlY3QuYXBwZW5kQ2hpbGQoQ2F0ZWdvcnkpXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKEZvb2RDYXRTZWN0KVxuXG5cblxufSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIlxuaW1wb3J0IHsgZm9vdGVySW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCJcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG4gICAgZm9vdGVyLmNsYXNzTmFtZT0nZm9vdGVyJ1xuICAgIGNvbnN0IGdyYXNzQ29ybmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBncmFzc0Nvcm5lci5jbGFzc05hbWU9J2dyYXNzQ29ybmVyJ1xuICAgIGdyYXNzQ29ybmVyLnNyYz1mb290ZXJJbWdbMF07XG5cbiAgICBjb25zdCBmb290ZXJCZWx0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvb3RlckJlbHQuY2xhc3NOYW1lPSdmb290ZXJCZWx0J1xuICAgIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvb3RlckNvbnRlbnQuY2xhc3NOYW1lPSdmb290ZXJDb250ZW50J1xuICAgIGNvbnN0IGZvb3RlclR4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvb3RlclR4dENvbnRlbnQuY2xhc3NOYW1lPSdmb290ZXJUeHRDb250ZW50J1xuXG4gICAgLy8gcmVjZW50IHBvc3Qgc2VjdGlvblxuXG4gICAgY29uc3QgcmVjZW50UG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmVjZW50UG9zdC5jbGFzc05hbWU9J1JjdFBvc3QnXG4gICAgY29uc3QgcmVjZW50UG9zdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHJlY2VudFBvc3RUaXRsZS50ZXh0Q29udGVudD0nUmVjZW50IFBvc3QnXG5cbiAgICBjb25zdCBmaXJzdFBvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGZpcnN0UG9zdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZmlyc3RQb3N0SW1nLnNyYz1mb290ZXJJbWdbMV1cbiAgICBjb25zdCBwb3N0cGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBvc3RwYXJhLnRleHRDb250ZW50PScyMCBGZWIgMjAyMidcbiAgICBjb25zdCBwb3N0ZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBvc3RkZXNjLnRleHRDb250ZW50PSdLZWVwIFlvdXIgQnVzaW5lc3MnXG5cbiAgICBmaXJzdFBvc3QuYXBwZW5kQ2hpbGQoZmlyc3RQb3N0SW1nKVxuXG4gICAgY29uc3QgZmlyc3RQb3N0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgZmlyc3RQb3N0SW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZmlyc3RQb3N0SW1nMS5zcmM9Zm9vdGVySW1nWzJdXG4gICAgY29uc3QgcG9zdHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcG9zdHBhcmExLnRleHRDb250ZW50PScyMCBGZWIgMjAyMidcbiAgICBjb25zdCBwb3N0ZGVzYzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwb3N0ZGVzYzEudGV4dENvbnRlbnQ9J0tlZXAgWW91ciBCdXNpbmVzcydcblxuICAgIGZpcnN0UG9zdDEuYXBwZW5kQ2hpbGQoZmlyc3RQb3N0SW1nMSlcblxuICAgIGNvbnN0IGZpcnN0UG9zdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGZpcnN0UG9zdEltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGZpcnN0UG9zdEltZzIuc3JjPWZvb3RlckltZ1szXVxuICAgIGNvbnN0IHBvc3RwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBvc3RwYXJhMi50ZXh0Q29udGVudD0nMjAgRmViIDIwMjInXG4gICAgY29uc3QgcG9zdGRlc2MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcG9zdGRlc2MyLnRleHRDb250ZW50PSdLZWVwIFlvdXIgQnVzaW5lc3MnXG5cbiAgICBmaXJzdFBvc3QyLmFwcGVuZENoaWxkKGZpcnN0UG9zdEltZzIpXG5cbiAgICAvLyBoZWxwIHNlY3RcbiAgICBcbiAgICBjb25zdCBoZWxwU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaGVscFNlY3QuY2xhc3NOYW1lPSdoZWxwU2VjdCdcbiAgICBjb25zdCBoZWxwU2VjdFRpdHRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVscFNlY3RUaXR0bGUudGV4dENvbnRlbnQ9J0hlbHA/JztcblxuICAgIGhlbHBTZWN0LmFwcGVuZENoaWxkKGhlbHBTZWN0VGl0dGxlKTtcblxuICAgIGNvbnN0IEZhcVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBGYXFQYXJhLnRleHRDb250ZW50PSdGQVEnXG4gICAgY29uc3QgdGVybVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0ZXJtUGFyYS50ZXh0Q29udGVudD0nVGVybSAmIGNvbmRpdGlvbidcbiAgICBjb25zdCByZXBvcnRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcmVwb3J0UGFyYS50ZXh0Q29udGVudD0nUmVwb3J0aW5nJ1xuICAgIGNvbnN0IGRvY3VtZW50UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRvY3VtZW50UGFyYS50ZXh0Q29udGVudD0nRG9jdW1lbnRhdGlvbidcbiAgICBjb25zdCBzdXBwb3J0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHN1cHBvcnRQYXJhLnRleHRDb250ZW50PSdTdXBwb3J0IFBvbGljeSdcbiAgICBjb25zdCBQcml2YWN5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgUHJpdmFjeS50ZXh0Q29udGVudD0nUHJpdmFjeSdcblxuICAgIGhlbHBTZWN0LmFwcGVuZENoaWxkKEZhcVBhcmEpXG4gICAgaGVscFNlY3QuYXBwZW5kQ2hpbGQodGVybVBhcmEpXG4gICAgaGVscFNlY3QuYXBwZW5kQ2hpbGQocmVwb3J0UGFyYSlcbiAgICBoZWxwU2VjdC5hcHBlbmRDaGlsZChkb2N1bWVudFBhcmEpXG4gICAgaGVscFNlY3QuYXBwZW5kQ2hpbGQoc3VwcG9ydFBhcmEpXG4gICAgaGVscFNlY3QuYXBwZW5kQ2hpbGQoUHJpdmFjeSlcblxuXG4gICAgY29uc3QgdXNlRnVsbFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHVzZUZ1bGxTZWN0LmNsYXNzTmFtZT0ndXNlRnVsbFNlY3QnXG4gICAgY29uc3QgdXNlRnVsbFNlY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB1c2VGdWxsU2VjdFRpdGxlLnRleHRDb250ZW50PSdVc2VmdWwgTGluaydcblxuICAgIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGFib3V0TGluay50ZXh0Q29udGVudD0nQWJvdXQnXG4gICAgY29uc3QgbmV3c0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBuZXdzTGluay50ZXh0Q29udGVudD0nTmV3cydcbiAgICBjb25zdCBwYXJ0bmVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBhcnRuZXJMaW5rLnRleHRDb250ZW50PSdQYXJ0bmVycydcbiAgICBjb25zdCB0ZWFtTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRlYW1MaW5rLnRleHRDb250ZW50PSdUZWFtJ1xuICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbWVudUxpbmsudGV4dENvbnRlbnQ9J01lbnUnXG4gICAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb250YWN0TGluay50ZXh0Q29udGVudD0nQ29udGFjdCdcblxuICAgIHVzZUZ1bGxTZWN0LmFwcGVuZENoaWxkKHVzZUZ1bGxTZWN0VGl0bGUpXG4gICAgdXNlRnVsbFNlY3QuYXBwZW5kQ2hpbGQoYWJvdXRMaW5rKVxuICAgIHVzZUZ1bGxTZWN0LmFwcGVuZENoaWxkKG5ld3NMaW5rKVxuICAgIHVzZUZ1bGxTZWN0LmFwcGVuZENoaWxkKHBhcnRuZXJMaW5rKVxuICAgIHVzZUZ1bGxTZWN0LmFwcGVuZENoaWxkKHRlYW1MaW5rKVxuICAgIHVzZUZ1bGxTZWN0LmFwcGVuZENoaWxkKG1lbnVMaW5rKVxuICAgIHVzZUZ1bGxTZWN0LmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKVxuXG4gICAgY29uc3QgYWJvdXRVc1NlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0VXNTZWN0LmNsYXNzTmFtZT0nYWJvdXRVc1NlY3QnXG5cbiAgICBjb25zdCBzdXBwb3J0U2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc3VwcG9ydFNlY3QuY2xhc3NOYW1lPSdzdXBwb3J0U2VjdCdcbiAgICBjb25zdCBpbnB1dFNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHN1cHBvcnRQMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHN1cHBvcnRQMS5pbm5lckhUTUw9JzxzcGFuPlM8L3NwYW4+dGlsbCBZb3UgTmVlZCBPdXIgU3VwcG9ydCA/J1xuICAgIGNvbnN0IHN1cHBvcnRQMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHN1cHBvcnRQMi50ZXh0Q29udGVudD0nRG9u4oCZdCB3YWl0IG1ha2UgYSBzbWFydCAmIGxvZ2ljYWwgcXVvdGUgaGVyZS4gSXRzIHByZXR0eSBlYXN5LidcbiAgICBjb25zdCBzdXBwb3J0SXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHN1cHBvcnRJcHQucGxhY2Vob2xkZXI9J0VudGVyIFlvdXIgRW1haWwnXG4gICAgY29uc3Qgc3VwcG9ydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VwcG9ydEJ0bi50ZXh0Q29udGVudD0nU3ViY3JpYmUgTm93J1xuXG4gICAgc3VwcG9ydFNlY3QuYXBwZW5kQ2hpbGQoc3VwcG9ydFAxKVxuICAgIHN1cHBvcnRTZWN0LmFwcGVuZENoaWxkKHN1cHBvcnRQMilcbiAgICBzdXBwb3J0U2VjdC5hcHBlbmRDaGlsZChpbnB1dFNlY3QpXG4gICAgaW5wdXRTZWN0LmFwcGVuZENoaWxkKHN1cHBvcnRJcHQpXG4gICAgaW5wdXRTZWN0LmFwcGVuZENoaWxkKHN1cHBvcnRCdG4pXG5cbiAgICBjb25zdCBvcGVuSHJTZWN0TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wZW5IclNlY3RNYWluLmNsYXNzTmFtZT0nb3BlbkhyU2VjdE1haW4nO1xuICAgIGNvbnN0IG9wZW5IclNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG9wZW5IclNlY3QuY2xhc3NOYW1lPSdvcGVuSHJTZWN0J1xuICAgIGNvbnN0IG9wZW5IclNlY3RQMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG9wZW5IclNlY3RQMS50ZXh0Q29udGVudD0nT3BlbmluZyBIb3VycydcbiAgICBjb25zdCBvcGVuSHJTZWN0UDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBvcGVuSHJTZWN0UDIudGV4dENvbnRlbnQ9J01PTiAtIFNBVCg4LjAwIDYuMDApJztcbiAgICBjb25zdCBvcGVuSHJTZWN0UDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBvcGVuSHJTZWN0UDMudGV4dENvbnRlbnQ9J1N1bmRheSAtIENsb3NlZCdcblxuICAgIGNvbnN0IG9wZW5IclNlY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBvcGVuSHJTZWN0SWNvbi5jbGFzc05hbWU9J29wZW5IclNlY3RJY29uJ1xuXG4gICAgY29uc3QgYWJvdXREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgXG4gICAgYWJvdXREZXNjLnRleHRDb250ZW50PWBvcnBvcmF0ZSBjbGllbnRzIGFuZCBsZWlzdXJlIHRyYXZlbGVycyBoYXNcbiAgICBiZWVuIHJlbHlpbmcgb24gR3JvdW5kbGluayBmb3IgZGVwZW5kYWJcbiAgICBzYWZlLCBhbmQgcHJvZmVzc2lvbmFsIGNoYXVmZmV1cmVkIGNhclxuICAgIHNlcnZpY2UgaW4gbWFqb3IgY2l0aWVzIGFjcm9zcyBXb3JsZC5gXG5cbiAgICBjb25zdCBhYm91dERlc2NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBhYm91dERlc2NUaXRsZS50ZXh0Q29udGVudD0nQWJvdXQgVXMnXG5cbiAgICBhYm91dFVzU2VjdC5hcHBlbmRDaGlsZChhYm91dERlc2NUaXRsZSlcblxuICAgIGFib3V0VXNTZWN0LmFwcGVuZENoaWxkKGFib3V0RGVzYylcblxuICAgIG9wZW5IclNlY3QuYXBwZW5kQ2hpbGQob3BlbkhyU2VjdFAxKVxuICAgIG9wZW5IclNlY3QuYXBwZW5kQ2hpbGQob3BlbkhyU2VjdFAyKVxuICAgIG9wZW5IclNlY3QuYXBwZW5kQ2hpbGQob3BlbkhyU2VjdFAzKVxuICAgIFxuICAgIG9wZW5IclNlY3RNYWluLmFwcGVuZENoaWxkKG9wZW5IclNlY3RJY29uKTtcbiAgICBvcGVuSHJTZWN0TWFpbi5hcHBlbmRDaGlsZChvcGVuSHJTZWN0KTtcbiAgICBcbiAgICBhYm91dFVzU2VjdC5hcHBlbmRDaGlsZChvcGVuSHJTZWN0TWFpbik7XG5cbiAgICBjb25zdCBzb2NpYWxNZWRTZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNvY2lhbE1lZFNlYy5jbGFzc05hbWU9J3NvY2lhbE1lZFNlYydcbiAgICBjb25zdCBjb3B5UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gICAgY29weVJpZ2h0LnRleHRDb250ZW50PWBDb3B5cmlnaHQgQCAke3llYXJ9IGJ5IFJvbmkuIEFsbCBSaWdodHMgcmVzZXJ2ZWRgXG5cbiAgICBjb25zdCBzb2NpYWxNZWRpYUljb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzb2NpYWxNZWRpYUljb24xLmNsYXNzTmFtZT0nbWVkaWFJY29uJ1xuICAgIGNvbnN0IHNvY2lhbE1lZGlhSWNvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNvY2lhbE1lZGlhSWNvbjIuY2xhc3NOYW1lPSdtZWRpYUljb24nXG4gICAgY29uc3Qgc29jaWFsTWVkaWFJY29uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc29jaWFsTWVkaWFJY29uMy5jbGFzc05hbWU9J21lZGlhSWNvbidcbiAgICBjb25zdCBzb2NpYWxNZWRpYUljb240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzb2NpYWxNZWRpYUljb240LmNsYXNzTmFtZT0nbWVkaWFJY29uJ1xuICAgIGNvbnN0IHNvY2lhbE1lZGlhSWNvbjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNvY2lhbE1lZGlhSWNvbjUuY2xhc3NOYW1lPSdtZWRpYUljb24nXG5cblxuICAgc29jaWFsTWVkU2VjLmFwcGVuZENoaWxkKHNvY2lhbE1lZGlhSWNvbjEpXG4gICBzb2NpYWxNZWRTZWMuYXBwZW5kQ2hpbGQoc29jaWFsTWVkaWFJY29uMilcbiAgIHNvY2lhbE1lZFNlYy5hcHBlbmRDaGlsZChzb2NpYWxNZWRpYUljb24zKVxuICAgc29jaWFsTWVkU2VjLmFwcGVuZENoaWxkKHNvY2lhbE1lZGlhSWNvbjQpXG4gICBzb2NpYWxNZWRTZWMuYXBwZW5kQ2hpbGQoc29jaWFsTWVkaWFJY29uNSlcbiAgIGZvb3RlckJlbHQuYXBwZW5kQ2hpbGQoY29weVJpZ2h0KVxuICAgZm9vdGVyQmVsdC5hcHBlbmRDaGlsZChzb2NpYWxNZWRTZWMpXG4gICAgXG4gICBmaXJzdFBvc3QuYXBwZW5kQ2hpbGQocG9zdHBhcmEpXG4gICBmaXJzdFBvc3QuYXBwZW5kQ2hpbGQocG9zdGRlc2MpXG5cbiAgIGZpcnN0UG9zdDEuYXBwZW5kQ2hpbGQocG9zdHBhcmExKVxuICAgZmlyc3RQb3N0MS5hcHBlbmRDaGlsZChwb3N0ZGVzYzEpXG5cbiAgIGZpcnN0UG9zdDIuYXBwZW5kQ2hpbGQocG9zdHBhcmEyKVxuICAgZmlyc3RQb3N0Mi5hcHBlbmRDaGlsZChwb3N0ZGVzYzIpXG4gICBcbiAgIHJlY2VudFBvc3QuYXBwZW5kQ2hpbGQocmVjZW50UG9zdFRpdGxlKVxuICAgcmVjZW50UG9zdC5hcHBlbmRDaGlsZChmaXJzdFBvc3QpXG4gICByZWNlbnRQb3N0LmFwcGVuZENoaWxkKGZpcnN0UG9zdDEpXG4gICByZWNlbnRQb3N0LmFwcGVuZENoaWxkKGZpcnN0UG9zdDIpXG4gICBcbiAgIGZvb3RlclR4dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRVc1NlY3QpXG4gICBmb290ZXJUeHRDb250ZW50LmFwcGVuZENoaWxkKHVzZUZ1bGxTZWN0KVxuICAgZm9vdGVyVHh0Q29udGVudC5hcHBlbmRDaGlsZChoZWxwU2VjdClcbiAgIGZvb3RlclR4dENvbnRlbnQuYXBwZW5kQ2hpbGQocmVjZW50UG9zdClcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoc3VwcG9ydFNlY3QpXG4gICAgZm9vdGVyQ29udGVudC5hcHBlbmRDaGlsZChmb290ZXJUeHRDb250ZW50KVxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDb250ZW50KVxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJCZWx0KVxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChncmFzc0Nvcm5lcilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlcilcblxuXG5cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBDYXRlZ29yeUltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgbWVudUl0ZW1JbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IG1lbnVMdW5jaEltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgbWVudURpbm5lckltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgbWVudURlc2VydEltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgbWVudURyaW5rSW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQge21lbnVTb3VwSW1nIH0gZnJvbSAnLi9pbWFnZXMnXG5pbXBvcnQgeyBtZW51U25hY2tJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZyb21NZW51KCl7XG5cbiAgICBjb25zdCBGcm9tTWVudU1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIEZyb21NZW51TWFpbi5jbGFzc05hbWU9J0Zyb21NZW51TWFpbidcbiAgICBjb25zdCBtZW51TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51TmF2LmNsYXNzTmFtZT0nbmF2J1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaTEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLEJyZWFrZmFzdClcbiAgICBsaTEudGV4dENvbnRlbnQ9J0JyZWFrZmFzdCdcbiAgICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGkyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxsdW5jaClcbiAgICBsaTIudGV4dENvbnRlbnQ9J0x1bmNoJ1xuICAgIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaTMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLERpbm5lcilcbiAgICBsaTMudGV4dENvbnRlbnQ9J0Rpbm5lcidcbiAgICBjb25zdCBsaTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGk0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxEZXNzZXJ0KVxuICAgIGxpNC50ZXh0Q29udGVudD0nRGVzc2VydCdcbiAgICBjb25zdCBsaTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGk1LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxEcmluaylcbiAgICBsaTUudGV4dENvbnRlbnQ9J0RyaW5rJ1xuICAgIGNvbnN0IGxpNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBsaTYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFNuYWNrKVxuICAgIGxpNi50ZXh0Q29udGVudD0nU25hY2snXG4gICAgY29uc3QgbGk3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGxpNy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsU3VvcHMpXG4gICAgbGk3LnRleHRDb250ZW50PSdTdW9wcydcblxuICAgIHVsLmFwcGVuZENoaWxkKGxpMSlcbiAgICB1bC5hcHBlbmRDaGlsZChsaTIpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGkzKVxuICAgIHVsLmFwcGVuZENoaWxkKGxpNClcbiAgICB1bC5hcHBlbmRDaGlsZChsaTUpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGk2KVxuICAgIHVsLmFwcGVuZENoaWxkKGxpNylcblxuICAgIG1lbnVOYXYuYXBwZW5kQ2hpbGQodWwpXG4gICAgY29uc3QgbWVudUxpc3RTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51TGlzdFNlY3QuY2xhc3NOYW1lPSdtZW51TGlzdFNlY3QnXG4gICAgY29uc3QgZGlzcGxheURpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpc3BsYXlEaXNoLmNsYXNzTmFtZT0nZGlzcGxheURpc2gnXG4gICAgY29uc3QgZGlzcGxheUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZGlzcGxheUltZy5zcmM9bWVudUl0ZW1JbWdbMV1cblxuICAgIGRpc3BsYXlEaXNoLmFwcGVuZENoaWxkKGRpc3BsYXlJbWcpXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudS5jbGFzc05hbWU9J21lbnVTZWN0J1xuXG4gICAgY29uc3QgbWVudVVsID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgXG4gICAgIEJyZWFrZmFzdCgpXG5cblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudVVsKVxuICAgIG1lbnVMaXN0U2VjdC5hcHBlbmRDaGlsZChkaXNwbGF5RGlzaClcbiAgICBtZW51TGlzdFNlY3QuYXBwZW5kQ2hpbGQobWVudSlcblxuICAgIGNvbnN0IFRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBUaXRsZTEudGV4dENvbnRlbnQ9J0Nob29zZSAmIHBpY2snXG4gICAgY29uc3QgVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIFRpdGxlMi5pbm5lckhUTUw9JzxzcGFuPkZyPC9zcGFuPm9tIE91ciBNZW51J1xuXG4gICAgXG4gICAgRnJvbU1lbnVNYWluLmFwcGVuZENoaWxkKFRpdGxlMSlcbiAgICBGcm9tTWVudU1haW4uYXBwZW5kQ2hpbGQoVGl0bGUyKVxuICAgIEZyb21NZW51TWFpbi5hcHBlbmRDaGlsZChtZW51TmF2KVxuICAgIEZyb21NZW51TWFpbi5hcHBlbmRDaGlsZChtZW51TGlzdFNlY3QpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChGcm9tTWVudU1haW4pXG5cbiAgICBmdW5jdGlvbiBCcmVha2Zhc3QoKXtcblxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKClcbiAgICAgICAgZm9vZEl0ZW0obWVudUl0ZW1JbWdbMF0sJ1NveWEgRGVlcC4nLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudUl0ZW1JbWdbMV0sJ0ZyZXNoIEJyZWFrZmFzdCcsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzE0LjUkJylcbiAgICBmb29kSXRlbShtZW51SXRlbUltZ1syXSwnTWlsZCBCdXR0ZXInLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudUl0ZW1JbWdbM10sJ0ZyZXNoIEJyZWFkJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVJdGVtSW1nWzRdLCdHbG93IENoZWVzZScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzE0LjUkJylcbiAgICBmb29kSXRlbShtZW51SXRlbUltZ1s1XSwnSXRhbGlhbiBQaXp6YScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51SXRlbUltZ1s2XSwnU2xsaWNlIEJlZWYnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxNCQnKVxuICAgIGZvb2RJdGVtKG1lbnVJdGVtSW1nWzddLCdNdXNoYW9tIFBpenphJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTEuNSQnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGx1bmNoKCl7XG5cblxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKClcbiAgICAgICAgZm9vZEl0ZW0obWVudUx1bmNoSW1nWzBdLCdLb2thbiBUaGFsaScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51THVuY2hJbWdbMV0sJ3BhbmVlciBNYXNhbGEnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxNC41JCcpXG4gICAgZm9vZEl0ZW0obWVudUx1bmNoSW1nWzJdLCdKZWVyYSBSaWNlJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVMdW5jaEltZ1szXSwnUHVsYXYnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudUx1bmNoSW1nWzRdLCdUdWtkYSBQYW5lZXInLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxNC41JCcpXG4gICAgZm9vZEl0ZW0obWVudUx1bmNoSW1nWzVdLCdJdGFsaWFuIFBpenphJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuIFxuICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gRGlubmVyKCl7XG5cbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcygpXG4gICAgICAgIGZvb2RJdGVtKG1lbnVEaW5uZXJJbWdbMF0sJ0JhaHViYWxpIFRoYWxpJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVEaW5uZXJJbWdbMV0sJ1NoYWhpIFBha3ZhbicsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzE0LjUkJylcbiAgICBmb29kSXRlbShtZW51RGlubmVySW1nWzJdLCdEYXJiYXJpIFRoYWxpJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVEaW5uZXJJbWdbM10sJ1B1cmkgQmhhamknLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudURpbm5lckltZ1s0XSwnQ2hpY2tlbiBLb2Z0YScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzE0LjUkJylcbiAgICBmb29kSXRlbShtZW51RGlubmVySW1nWzVdLCdIdWxrIFRoYWxpJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTIuNSQnKVxuICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gRGVzc2VydCgpe1xuXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoKVxuICAgICAgICBmb29kSXRlbShtZW51RGVzZXJ0SW1nWzBdLCdGcmVuY2ggUHVkZGluZycsJzEyLjUkJylcbiAgICBmb29kSXRlbShtZW51RGVzZXJ0SW1nWzFdLCdZb2dodXJ0JywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTQuNSQnKVxuICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIERyaW5rKCl7XG5cbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2RlcygpXG4gICAgICAgIGZvb2RJdGVtKG1lbnVEcmlua0ltZ1swXSwnRnJ1aXQgTWl4JywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVEcmlua0ltZ1sxXSwnR3VsYWIgU2hhcmJhdCcsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzE0LjUkJylcbiAgICBmb29kSXRlbShtZW51RHJpbmtJbWdbMl0sJ1J1YXBqYScsJ0xhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgdmVsaXQgaW4gY29uc2VxdWF0LicsJzEyLjUkJylcbiAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTbmFjaygpe1xuXG4gICAgICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoKVxuICAgICAgICBmb29kSXRlbShtZW51U25hY2tJbWdbMF0sJ01peCBOdXQnLCcxMi41JCcpXG4gICAgZm9vZEl0ZW0obWVudVNuYWNrSW1nWzFdLCdTYWx0ZWQgUGVhbnV0JywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTQuNSQnKVxuICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU3VvcHMoKXtcblxuICAgICAgICByZW1vdmVBbGxDaGlsZE5vZGVzKClcbiAgICAgICAgZm9vZEl0ZW0obWVudVNvdXBJbWdbMF0sJ01hY2hhdSBTb3VwJywnMTIuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVTb3VwSW1nWzFdLCdDaGluZWVzZSBTb3VwJywnTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyB2ZWxpdCBpbiBjb25zZXF1YXQuJywnMTQuNSQnKVxuICAgIGZvb2RJdGVtKG1lbnVTb3VwSW1nWzJdLCdWZWdpIFNvdXAnLCdMYWN1cyBuaXNpLCBldCBhYyBkYXBpYnVzIHZlbGl0IGluIGNvbnNlcXVhdC4nLCcxMi41JCcpXG4gICBcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9vZEl0ZW0oaW1nLE5hbWUsZGVzYyxwcmljZSl7XG4gICAgICAgIGxldCBmb29kSXRlbUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBsaWApXG4gICAgICAgIGxldCBmb29kSXRlbVNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsZXQgZm9vZEl0ZW1JbWdTZWN0ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBmb29kSXRlbUltZ1NlY3QuY2xhc3NOYW1lPSdmb29kSXRlbUltZ1NlY3QnXG4gICAgICAgIGxldCBsaXN0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgbGV0IGZvb2RJdGVtSW1nID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBmb29kSXRlbUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZGlzcGxheUl0ZW1JbWcpXG4gICAgICAgIGZvb2RJdGVtSW1nLnNyYyA9IGltZ1xuICAgICAgICBmb29kSXRlbUltZ1NlY3QuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1JbWcpXG4gICAgICAgIGxldCBmb29kSXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgZm9vZEl0ZW1OYW1lLnRleHRDb250ZW50PU5hbWVcbiAgICAgICAgbGV0IGZvb2RJdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBmb29kSXRlbURlc2MudGV4dENvbnRlbnQ9ZGVzY1xuICAgICAgICBsZXQgZm9vZEl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBmb29kSXRlbVByaWNlLnRleHRDb250ZW50PXByaWNlXG5cbiAgICAgICAgXG4gICAgICAgIGxpc3RQYXJhLmFwcGVuZENoaWxkKGZvb2RJdGVtTmFtZSlcbiAgICAgICAgbGlzdFBhcmEuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1EZXNjKVxuICAgICAgICBsaXN0UGFyYS5hcHBlbmRDaGlsZChmb29kSXRlbVByaWNlKVxuICAgICAgICBmb29kSXRlbUxpc3QuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1JbWdTZWN0KVxuICAgICAgICBmb29kSXRlbUxpc3QuYXBwZW5kQ2hpbGQobGlzdFBhcmEpXG5cbiAgICAgICAgbWVudVVsLmFwcGVuZENoaWxkKGZvb2RJdGVtTGlzdClcbiAgICBcbiAgICAgICAgfVxuXG5mdW5jdGlvbiBkaXNwbGF5SXRlbUltZyhldmVudCl7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlc0Zyb21EaXNwbGF5KClcbiAgICBsZXQgaW1nRm9yRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nRm9yRGlzcGxheS5zcmM9ZXZlbnQudGFyZ2V0LnNyY1xuICAgIGRpc3BsYXlEaXNoLmFwcGVuZENoaWxkKGltZ0ZvckRpc3BsYXkpXG4gICAgXG59XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMoKSB7XG4gICAgICAgICAgICB3aGlsZSAobWVudVVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtZW51VWwucmVtb3ZlQ2hpbGQobWVudVVsLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfSAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2Rlc0Zyb21EaXNwbGF5KCkge1xuICAgICAgICAgICAgd2hpbGUgKGRpc3BsYXlEaXNoLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGlzaC5yZW1vdmVDaGlsZChkaXNwbGF5RGlzaC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH19XG59XG5cbiIsImltcG9ydCB7aGVhZGVySW1nfSAgZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgY3JlYXRlTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51UGFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlQmxvZ1BhZ2UgfSBmcm9tIFwiLi9ibG9nUGFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlU2hvcCB9IGZyb20gXCIuL3Nob3BcIjtcbmltcG9ydCB7IGNyZWF0ZUFib3V0UGFnZSB9IGZyb20gXCIuL2Fib3V0UGFnZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xuXG4gICAgXG4gICBjb250ZW50LmNsYXNzTmFtZT0nY29udGVudCdcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuXG4gICAgY29uc3QgbG9nb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxvZ29TZWN0aW9uLmNsYXNzTmFtZT0nbG9nbyc7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgbG9nby5zcmM9aGVhZGVySW1nWzBdO1xuXG4gICBjb25zdCBzZWFyY2hTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgIHNlYXJjaFNlY3QuY2xhc3NOYW1lPSdzZWFyY2hTZWN0J1xuXG4gICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgc2VhcmNoLmNsYXNzTmFtZT0nc2VhcmNoQmFyJ1xuICAgXG4gICBjb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgIHNlYXJjaEljb24uY2xhc3NOYW1lPSdzZWFyY2hJY29uJ1xuICAgc2VhcmNoSWNvbi5zcmM9aGVhZGVySW1nWzJdXG5cbiAgIGNvbnN0IHNlYXJjaElucHV0ID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlcj0nICBTZWFyY2guLi4nXG5cbiAgIGNvbnN0IGhhbmRCYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgaGFuZEJhZy5pZD0naGFuZEJhZydcbiAgIGhhbmRCYWcuc3JjPWhlYWRlckltZ1sxXVxuXG4gICAgLy8gbGlzdCBcblxuICAgY29uc3QgbGlzdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBsaXN0MS50ZXh0Q29udGVudD0nSG9tZSdcbiAgIGxpc3QxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVIb21lKVxuXG4gICBjb25zdCBsaXN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3QyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVNZW51UGFnZSlcbiAgIGxpc3QyLnRleHRDb250ZW50PSdNZW51J1xuXG4gICBjb25zdCBsaXN0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3QzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVCbG9nUGFnZSlcbiAgIGxpc3QzLnRleHRDb250ZW50PSdCbG9nJ1xuXG4gICBjb25zdCBsaXN0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3Q0LnRleHRDb250ZW50PSdQYWdlcydcblxuICAgY29uc3QgbGlzdDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBsaXN0NS50ZXh0Q29udGVudD0nQWJvdXQnXG4gICBsaXN0NS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY3JlYXRlQWJvdXRQYWdlKVxuXG4gICBjb25zdCBsaXN0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3Q2LnRleHRDb250ZW50PSdTaG9wJ1xuICAgbGlzdDYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZVNob3ApXG5cbiAgIGNvbnN0IGxpc3Q3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgbGlzdDcudGV4dENvbnRlbnQ9J0NvbnRhY3QnXG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0MSlcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0MilcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0MylcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0NClcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0NSlcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0NilcbiAgICB1bC5hcHBlbmRDaGlsZChsaXN0NylcblxuXG4gbmF2LmFwcGVuZENoaWxkKHVsKVxuIHNlYXJjaC5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dClcbnNlYXJjaC5hcHBlbmRDaGlsZChzZWFyY2hJY29uKVxuXG4gc2VhcmNoU2VjdC5hcHBlbmRDaGlsZChzZWFyY2gpXG4gc2VhcmNoU2VjdC5hcHBlbmRDaGlsZChoYW5kQmFnKVxuIGxvZ29TZWN0aW9uLmFwcGVuZENoaWxkKGxvZ28pXG4gXG4gaGVhZGVyLmFwcGVuZENoaWxkKG5hdilcbiBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb1NlY3Rpb24pXG4gaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaFNlY3QpXG4gICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcbn1cbiIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IGhvbWVJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUFib3V0VXMgfSBmcm9tIFwiLi9hYm91dFVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lKCl7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG5jb25zdCB0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG50ZXh0Q29udGVudC5jbGFzc05hbWU9J3RleHRDb250ZW50J1xuY29uc3QgaW1hZ2VTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmltYWdlU2VjdC5jbGFzc05hbWU9J2ltYWdlU2VjdCdcblxuXG5jb25zdCBzb2NpYWxNZWRpYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5zb2NpYWxNZWRpYS5jbGFzc05hbWU9J3NvY2lhbFNlY3QnXG5jb25zdCBmYWNlYm9vayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5mYWNlYm9vay5zcmM9aG9tZUltZ1swXVxuY29uc3QgdHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG50d2l0dGVyLnNyYz1ob21lSW1nWzFdXG5jb25zdCBwaW50ZXJlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxucGludGVyZXN0LnNyYz1ob21lSW1nWzJdXG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5idXR0b24udGV4dENvbnRlbnQ9J1NlZSBNZW51J1xuXG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuZGVzY3JpcHRpb24udGV4dENvbnRlbnQ9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZhcml1cyBzZWQgcGhhcmV0cmEgZGljdHVtIG5lcXVlIG1hc3NhIGNvbmd1ZSdcblxuY29uc3QgaGVhZGluZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG5oZWFkaW5nMi5jbGFzc05hbWU9J2hlYWRpbmcyJ1xuaGVhZGluZzIudGV4dENvbnRlbnQ9J1RoZSBBcnQgb2Ygc3BlZWQgZm9vZCBRdWFsaXR5J1xuXG5jb25zdCBoZWFkaW5nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbmhlYWRpbmcxLmNsYXNzTmFtZT0naGVhZGluZzEnXG5oZWFkaW5nMS50ZXh0Q29udGVudD0nSXRzIFF1aWNrICYgQW11c2luZyEnXG5cblxuc29jaWFsTWVkaWEuYXBwZW5kQ2hpbGQocGludGVyZXN0KVxuc29jaWFsTWVkaWEuYXBwZW5kQ2hpbGQodHdpdHRlcilcbnNvY2lhbE1lZGlhLmFwcGVuZENoaWxkKGZhY2Vib29rKVxuXG50ZXh0Q29udGVudC5hcHBlbmRDaGlsZChzb2NpYWxNZWRpYSlcbnRleHRDb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcxKVxudGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZzIpXG50ZXh0Q29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbnRleHRDb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbilcbm1haW5Db250ZW50LmFwcGVuZENoaWxkKHRleHRDb250ZW50KVxubWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2VTZWN0KVxuY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGVudClcblxuY3JlYXRlQWJvdXRVcygpXG59IiwiaW1wb3J0IGxvZ29JY29uIGZyb20gJy4uL2ltYWdlcy9Gb29kdHVjay5wbmcnXG5pbXBvcnQgaGFuZEJhZ0ljb24gZnJvbSAnLi4vaW1hZ2VzL0hhbmRiYWcucG5nJ1xuaW1wb3J0IHNlYXJjaEljb24gZnJvbSAnLi4vaW1hZ2VzL3NlYXJjaC5wbmcnXG5pbXBvcnQgZmFjZWJvb2tJY29uIGZyb20gJy4uL2ltYWdlcy9mYWNlYm9vay5wbmcnXG5pbXBvcnQgdHdpdHRlckljb24gZnJvbSAnLi4vaW1hZ2VzL3R3aXR0ZXIucG5nJ1xuaW1wb3J0IHBpbnRlcmVzdEljb24gZnJvbSAnLi4vaW1hZ2VzL3BpbnRlcmVzdC5wbmcnXG5pbXBvcnQgZ3Jhc3NDb3JuZXIgZnJvbSAnLi4vaW1hZ2VzL2Nvcm5lckdyYXNzLnBuZydcbmltcG9ydCBmaXJzdFBvc3QgZnJvbSAnLi4vaW1hZ2VzL2ZpcnN0UC5wbmcnXG5pbXBvcnQgc2Vjb25kUG9zdCBmcm9tICcuLi9pbWFnZXMvc2Vjb25kUC5wbmcnXG5pbXBvcnQgdGhpcmRQb3N0IGZyb20gJy4uL2ltYWdlcy90aGlyZFAucG5nJ1xuaW1wb3J0IGFib3V0MSBmcm9tICcuLi9pbWFnZXMvYWJvdXQxLnBuZydcbmltcG9ydCBhYm91dDIgZnJvbSAnLi4vaW1hZ2VzL2Fib3V0Mi5wbmcnXG5pbXBvcnQgYWJvdXQzIGZyb20gJy4uL2ltYWdlcy9hYm91dDMucG5nJ1xuaW1wb3J0IENhdGVnb3J5MSBmcm9tICcuLi9pbWFnZXMvY2F0ZWdvcnkxLnBuZydcbmltcG9ydCBDYXRlZ29yeTIgZnJvbSAnLi4vaW1hZ2VzL2NhdGVnb3J5Mi5wbmcnXG5pbXBvcnQgQ2F0ZWdvcnkzIGZyb20gJy4uL2ltYWdlcy9jYXRlZ29yeTMucG5nJ1xuaW1wb3J0IENhdGVnb3J5NCBmcm9tICcuLi9pbWFnZXMvY2F0ZWdvcnk0LnBuZydcbmltcG9ydCBzaWRlR3Jhc3NJbWcgZnJvbSAnLi4vaW1hZ2VzL3NpZGVHcmFzcy5wbmcnXG5pbXBvcnQgd2h5MSBmcm9tICcuLi9pbWFnZXMvd2h5XzEucG5nJ1xuaW1wb3J0IHdoeTIgZnJvbSAnLi4vaW1hZ2VzL3doeV8yLnBuZydcbmltcG9ydCB3aHkzIGZyb20gJy4uL2ltYWdlcy93aHlfMy5wbmcnXG5pbXBvcnQgd2h5NCBmcm9tICcuLi9pbWFnZXMvd2h5XzQucG5nJ1xuaW1wb3J0IHdoeTUgZnJvbSAnLi4vaW1hZ2VzL3doeV81LnBuZydcbmltcG9ydCB3aHk2IGZyb20gJy4uL2ltYWdlcy93aHlfNi5wbmcnXG5pbXBvcnQgaW5mbzEgZnJvbSAnLi4vaW1hZ2VzL2NoZWZDYXAucG5nJ1xuaW1wb3J0IGluZm8yIGZyb20gJy4uL2ltYWdlcy9mb29kUHJvZHVjdC5wbmcnXG5pbXBvcnQgaW5mbzMgZnJvbSAnLi4vaW1hZ2VzL3BpenphLnBuZydcbmltcG9ydCBpbmZvNCBmcm9tICcuLi9pbWFnZXMvc3Bvb24ucG5nJ1xuaW1wb3J0IGl0ZW0xIGZyb20gJy4uL2ltYWdlcy9pdGVtMS5wbmcnXG5pbXBvcnQgaXRlbTIgZnJvbSAnLi4vaW1hZ2VzL2l0ZW0yLnBuZydcbmltcG9ydCBpdGVtMyBmcm9tICcuLi9pbWFnZXMvaXRlbTMucG5nJ1xuaW1wb3J0IGl0ZW00IGZyb20gJy4uL2ltYWdlcy9pdGVtNC5wbmcnXG5pbXBvcnQgaXRlbTUgZnJvbSAnLi4vaW1hZ2VzL2l0ZW01LnBuZydcbmltcG9ydCBpdGVtNiBmcm9tICcuLi9pbWFnZXMvaXRlbTYucG5nJ1xuaW1wb3J0IGl0ZW03IGZyb20gJy4uL2ltYWdlcy9pdGVtNy5wbmcnXG5pbXBvcnQgaXRlbTggZnJvbSAnLi4vaW1hZ2VzL2l0ZW04LnBuZydcbmltcG9ydCBsdW5jaDEgZnJvbSAnLi4vaW1hZ2VzL2x1bmNoMS5qcGcnXG5pbXBvcnQgbHVuY2gyIGZyb20gJy4uL2ltYWdlcy9sdW5jaDIuanBlZydcbmltcG9ydCBsdW5jaDMgZnJvbSAnLi4vaW1hZ2VzL2x1bmNoMy5qcGVnJ1xuaW1wb3J0IGx1bmNoNCBmcm9tICcuLi9pbWFnZXMvbHVuY2g0LmpwZWcnXG5pbXBvcnQgbHVuY2g1IGZyb20gJy4uL2ltYWdlcy9sdW5jaDUuanBlZydcbmltcG9ydCBsdW5jaDYgZnJvbSAnLi4vaW1hZ2VzL2x1bmNoNi5wbmcnXG5pbXBvcnQgZGlubmVyMSBmcm9tICcuLi9pbWFnZXMvZGlubmVyMS5qcGVnJ1xuaW1wb3J0IGRpbm5lcjIgZnJvbSAnLi4vaW1hZ2VzL2Rpbm5lcjIuanBlZydcbmltcG9ydCBkaW5uZXIzIGZyb20gJy4uL2ltYWdlcy9kaW5uZXIzLmpwZWcnXG5pbXBvcnQgZGlubmVyNCBmcm9tICcuLi9pbWFnZXMvZGlubmVyNC5qcGVnJ1xuaW1wb3J0IGRpbm5lcjUgZnJvbSAnLi4vaW1hZ2VzL2Rpbm5lcjUuanBlZydcbmltcG9ydCBkaW5uZXI2IGZyb20gJy4uL2ltYWdlcy9kaW5uZXI2LmpwZWcnXG5pbXBvcnQgZGVzZXJ0MSBmcm9tICcuLi9pbWFnZXMvZGVzZXJ0MS5qcGVnJ1xuaW1wb3J0IGRlc2VydDIgZnJvbSAnLi4vaW1hZ2VzL2Rlc2VydDIuanBlZydcbmltcG9ydCBkcmluazEgZnJvbSAnLi4vaW1hZ2VzL2RyaW5rMS5qcGVnJ1xuaW1wb3J0IGRyaW5rMiBmcm9tICcuLi9pbWFnZXMvZHJpbmsyLmpwZWcnXG5pbXBvcnQgZHJpbmszIGZyb20gJy4uL2ltYWdlcy9kcmluazMuanBlZydcbmltcG9ydCBzbmFjazEgZnJvbSAnLi4vaW1hZ2VzL3NuYWNrMS5qcGVnJ1xuaW1wb3J0IHNuYWNrMiBmcm9tICcuLi9pbWFnZXMvc25hY2syLmpwZWcnXG5pbXBvcnQgc291cDEgZnJvbSAnLi4vaW1hZ2VzL3NvdXAxLmpwZWcnXG5pbXBvcnQgc291cDIgZnJvbSAnLi4vaW1hZ2VzL3NvdXAyLmpwZWcnXG5pbXBvcnQgc291cDMgZnJvbSAnLi4vaW1hZ2VzL3NvdXAzLmpwZWcnXG5pbXBvcnQgY2hlZjEgZnJvbSAnLi4vaW1hZ2VzL2NoZWYxLnBuZydcbmltcG9ydCBjaGVmMiBmcm9tICcuLi9pbWFnZXMvY2hlZjIucG5nJ1xuaW1wb3J0IGNoZWYzIGZyb20gJy4uL2ltYWdlcy9jaGVmMy5wbmcnXG5pbXBvcnQgY2hlZjQgZnJvbSAnLi4vaW1hZ2VzL2NoZWY0LnBuZydcbmltcG9ydCBwcm9maWxlMSBmcm9tICcuLi9pbWFnZXMvcHJvZmlsZTEucG5nJ1xuaW1wb3J0IHByb2ZpbGUyIGZyb20gJy4uL2ltYWdlcy9wcm9maWxlMi5wbmcnXG5pbXBvcnQgcHJvZmlsZTMgZnJvbSAnLi4vaW1hZ2VzL3Byb2ZpbGUzLnBuZydcbmltcG9ydCBwcm9maWxlNCBmcm9tICcuLi9pbWFnZXMvcHJvZmlsZTQucG5nJ1xuaW1wb3J0IHRlc3RpbW9uaWFsR3JlZW4gZnJvbSAnLi4vaW1hZ2VzL3Rlc3RpbW9uaWFsLnBuZydcbmltcG9ydCBzdGFyMSBmcm9tICcuLi9pbWFnZXMvc3Rhci5wbmcnXG5pbXBvcnQgRW1wdHlzdGFyIGZyb20gJy4uL2ltYWdlcy9lbXB0eVN0YXIucG5nJ1xuaW1wb3J0IGdyYXNzQ29ybmVyMiBmcm9tICcuLi9pbWFnZXMvZ3Jhc3MyLnBuZydcbmltcG9ydCBibG9nMSBmcm9tICcuLi9pbWFnZXMvYmxvZzEucG5nJ1xuaW1wb3J0IGJsb2cyIGZyb20gJy4uL2ltYWdlcy9ibG9nMi5wbmcnXG5pbXBvcnQgYmxvZzMgZnJvbSAnLi4vaW1hZ2VzL2Jsb2czLnBuZydcbmltcG9ydCBsaWtlIGZyb20gJy4uL2ltYWdlcy9saWtlLnBuZydcbmltcG9ydCBjb21tZW50IGZyb20gJy4uL2ltYWdlcy9jb21tZW50LnBuZydcbmltcG9ydCBzaGFyZSBmcm9tICcuLi9pbWFnZXMvc2hhcmUucG5nJ1xuaW1wb3J0IE1lbnVJbWcxIGZyb20gJy4uL2ltYWdlcy9jYXRlZ29yeUZvck1lbnUxLnBuZydcbmltcG9ydCBNZW51SW1nMiBmcm9tICcuLi9pbWFnZXMvY2F0ZWdvcnlGb3JNZW51Mi5wbmcnXG5pbXBvcnQgTWVudUltZzMgZnJvbSAnLi4vaW1hZ2VzL2NhdGVnb3J5Rm9yTWVudTMucG5nJ1xuaW1wb3J0IE1lbnVJbWc0IGZyb20gJy4uL2ltYWdlcy9jYXRlZ29yeUZvck1lbnU0LnBuZydcbmltcG9ydCBjb2ZmZWUgZnJvbSAnLi4vaW1hZ2VzL0NvZmZlZS5wbmcnXG5pbXBvcnQgYnJhbmQxIGZyb20gJy4uL2ltYWdlcy9icmFuZDEucG5nJ1xuaW1wb3J0IGJyYW5kMiBmcm9tICcuLi9pbWFnZXMvYnJhbmQyLnBuZydcbmltcG9ydCBicmFuZDMgZnJvbSAnLi4vaW1hZ2VzL2JyYW5kMy5wbmcnXG5pbXBvcnQgYnJhbmQ0IGZyb20gJy4uL2ltYWdlcy9icmFuZDQucG5nJ1xuaW1wb3J0IGJyYW5kNSBmcm9tICcuLi9pbWFnZXMvYnJhbmQ1LnBuZydcbmltcG9ydCBicmFuZDYgZnJvbSAnLi4vaW1hZ2VzL2JyYW5kNi5wbmcnXG5pbXBvcnQgYWJvdXRQYWdlMSBmcm9tICcuLi9pbWFnZXMvYWJvdXRQYWdlLnBuZydcbmltcG9ydCBhYm91dFBhZ2UyIGZyb20gJy4uL2ltYWdlcy9hYm91dFBhZ2UyLnBuZydcbmltcG9ydCBhYm91dFBhZ2UzIGZyb20gJy4uL2ltYWdlcy9hYm91dFBhZ2UzLnBuZydcblxuXG5leHBvcnQgY29uc3QgaGVhZGVySW1nID0gW2xvZ29JY29uLGhhbmRCYWdJY29uLHNlYXJjaEljb25dXG5cbmV4cG9ydCBjb25zdCBob21lSW1nID0gW2ZhY2Vib29rSWNvbix0d2l0dGVySWNvbixwaW50ZXJlc3RJY29uXVxuXG5leHBvcnQgY29uc3QgZm9vdGVySW1nID0gW2dyYXNzQ29ybmVyLGZpcnN0UG9zdCxzZWNvbmRQb3N0LHRoaXJkUG9zdF1cblxuZXhwb3J0IGNvbnN0IGFib3V0SW1nID0gW2Fib3V0MSxhYm91dDIsYWJvdXQzXVxuXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlJbWcgPSBbQ2F0ZWdvcnkxLENhdGVnb3J5MixDYXRlZ29yeTMsQ2F0ZWdvcnk0LHNpZGVHcmFzc0ltZ11cblxuZXhwb3J0IGNvbnN0IFdoeUltZyA9IFt3aHkxLHdoeTIsd2h5Myx3aHk0LHdoeTUsd2h5Nl1cblxuZXhwb3J0IGNvbnN0IHJlc3RyYXVJbmZvU2VjdEltZyA9IFtpbmZvMSxpbmZvMixpbmZvMyxpbmZvNF1cblxuZXhwb3J0IGNvbnN0IG1lbnVJdGVtSW1nID0gW2l0ZW0xLGl0ZW0yLGl0ZW0zLGl0ZW00LGl0ZW01LGl0ZW02LGl0ZW03LGl0ZW04XVxuXG5leHBvcnQgY29uc3QgbWVudUx1bmNoSW1nID0gW2x1bmNoMSxsdW5jaDIsbHVuY2gzLGx1bmNoNCxsdW5jaDUsbHVuY2g2XVxuXG5leHBvcnQgY29uc3QgbWVudURpbm5lckltZyA9IFtkaW5uZXIxLGRpbm5lcjIsZGlubmVyMyxkaW5uZXI0LGRpbm5lcjUsZGlubmVyNl1cblxuZXhwb3J0IGNvbnN0IG1lbnVEZXNlcnRJbWcgPSBbZGVzZXJ0MSxkZXNlcnQyXVxuXG5leHBvcnQgY29uc3QgbWVudURyaW5rSW1nID0gW2RyaW5rMSxkcmluazIsZHJpbmszXVxuXG5leHBvcnQgY29uc3QgbWVudVNuYWNrSW1nID0gW3NuYWNrMSxzbmFjazJdXG5cbmV4cG9ydCBjb25zdCBtZW51U291cEltZyA9IFtzb3VwMSxzb3VwMixzb3VwM11cblxuZXhwb3J0IGNvbnN0IGNoZWZJbWcgPSBbY2hlZjEsY2hlZjIsY2hlZjMsY2hlZjRdXG5cbmV4cG9ydCBjb25zdCBwcm9maWxlSW1nID0gW3Byb2ZpbGUxLHRlc3RpbW9uaWFsR3JlZW4sc3RhcjEsRW1wdHlzdGFyLHByb2ZpbGUyLHByb2ZpbGUzLHByb2ZpbGU0LGdyYXNzQ29ybmVyMixncmFzc0Nvcm5lcjJdXG5cbmV4cG9ydCBjb25zdCBibG9nSW1nICA9IFtibG9nMSxibG9nMixibG9nMyxsaWtlLGNvbW1lbnQsc2hhcmVdXG5cbmV4cG9ydCBjb25zdCBNZW51SW1nID0gW01lbnVJbWcxLE1lbnVJbWcyLE1lbnVJbWczLE1lbnVJbWc0LGNvZmZlZV1cblxuZXhwb3J0IGNvbnN0IGJyYW5kcyA9IFticmFuZDEsYnJhbmQyLGJyYW5kMyxicmFuZDQsYnJhbmQ1LGJyYW5kNl1cblxuZXhwb3J0IGNvbnN0IGFib3V0UGFnZSA9IFthYm91dFBhZ2UxLGFib3V0UGFnZTIsYWJvdXRQYWdlM10iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQge2hlYWRlckltZ30gIGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgbG9hZEFsbGhvbWVDb21wb25lbnRzIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVJlc3RyYXVJbmZvIH0gZnJvbSBcIi4vcmVzdHJhdUluZm9TZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVCbG9nUGFnZSB9IGZyb20gXCIuL2Jsb2dQYWdlXCI7XG5pbXBvcnQgeyBNZW51SW1nIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgeyBicmFuZHMgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCB7IGNyZWF0ZVNob3AgfSBmcm9tIFwiLi9zaG9wXCI7XG5pbXBvcnQgeyBjcmVhdGVBYm91dFBhZ2UgfSBmcm9tIFwiLi9hYm91dFBhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCl7XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2Rlc0Zyb21EaXNwbGF5KCkge1xuICAgICAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH19XG4gICAgICAgIFxuICAgIGNvbnN0IE1lbnVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzRnJvbURpc3BsYXkoKVxuY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kPSd0cmFuc3BhcmVudCdcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbmJvZHkucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG5ib2R5LmNsYXNzTGlzdD0nYm9keVBhZ2UnXG5cblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmhlYWRlci5jbGFzc05hbWU9J2hlYWRlckZvck5hdidcblxuY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5sb2dvLnNyYyA9IGhlYWRlckltZ1swXVxubG9nby5jbGFzc0xpc3Q9J2xvZ29Gb3JIZWFkZXInXG5cbiAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgdWwuY2xhc3NOYW1lPSduYXZGb3JIZWFkZXInXG4gICBjb25zdCBsaXN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3QxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxsb2FkQWxsaG9tZUNvbXBvbmVudHMpXG4gICBsaXN0MS50ZXh0Q29udGVudD0nSG9tZSdcblxuICAgY29uc3QgbGlzdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBsaXN0Mi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY3JlYXRlTWVudVBhZ2UpXG4gICBsaXN0Mi50ZXh0Q29udGVudD0nTWVudSdcblxuICAgY29uc3QgbGlzdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBsaXN0My5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY3JlYXRlQmxvZ1BhZ2UpXG4gICBsaXN0My50ZXh0Q29udGVudD0nQmxvZydcblxuICAgY29uc3QgbGlzdDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBsaXN0NC50ZXh0Q29udGVudD0nUGFnZXMnXG5cbiAgIGNvbnN0IGxpc3Q1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgbGlzdDUudGV4dENvbnRlbnQ9J0Fib3V0J1xuICAgbGlzdDUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNyZWF0ZUFib3V0UGFnZSlcblxuICAgY29uc3QgbGlzdDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICBsaXN0Ni5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY3JlYXRlU2hvcClcbiAgIGxpc3Q2LnRleHRDb250ZW50PSdTaG9wJ1xuXG4gICBjb25zdCBsaXN0NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgIGxpc3Q3LnRleHRDb250ZW50PSdDb250YWN0J1xuXG4gICBjb25zdCBpY29uU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICBjb25zdCBwYXJhICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgIHBhcmEudGV4dENvbnRlbnQ9J091ciBNZW51J1xuXG4gICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgcGFyYTIuaW5uZXJIVE1MPSc8c3Bhbj5Ib21lPC9zcGFuPiA+IE1lbnUnXG5cbiAgIHVsLmFwcGVuZENoaWxkKGxpc3QxKVxuICAgdWwuYXBwZW5kQ2hpbGQobGlzdDIpXG4gICB1bC5hcHBlbmRDaGlsZChsaXN0MykgXG4gICB1bC5hcHBlbmRDaGlsZChsaXN0NClcbiAgIHVsLmFwcGVuZENoaWxkKGxpc3Q1KVxuICAgdWwuYXBwZW5kQ2hpbGQobGlzdDYpXG4gICB1bC5hcHBlbmRDaGlsZChsaXN0NylcblxuaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pXG5oZWFkZXIuYXBwZW5kQ2hpbGQodWwpXG5oZWFkZXIuYXBwZW5kQ2hpbGQocGFyYSlcblxuXG5NZW51Qm9keS5jbGFzc05hbWU9J01lbnVCb2R5J1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcbmhlYWRlci5hcHBlbmRDaGlsZChwYXJhMilcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoTWVudUJvZHkpXG5cbmNyZWF0ZU1lbnVDYXRlZ29yeSgnU3RhcnRlciBNZW51JyxNZW51SW1nWzBdKVxuY3JlYXRlTWVudUNhdGVnb3J5MignTWFpbiBDb3Vyc2UnLE1lbnVJbWdbMV0pXG5jcmVhdGVNZW51Q2F0ZWdvcnkoJ0Rlc3NlcnRzJyxNZW51SW1nWzJdKVxuY3JlYXRlTWVudUNhdGVnb3J5MignRHJpbmtzJyxNZW51SW1nWzNdKVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlTWVudUNhdGVnb3J5KFRJVExFLElNRyl7XG5sZXQgb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbm9uZS5jbGFzc05hbWU9J29uZSdcbmxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbnRpdGxlLnRleHRDb250ZW50PVRJVExFXG5cblxubGV0IG1lZGlhU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5sZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbmltZy5zcmM9SU1HXG5cbm1lZGlhU2VjdC5hcHBlbmRDaGlsZChpbWcpXG5cbmxldCB0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyBsZXQgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4vLyBpbWcyLnNyYyA9IE1lbnVJbWdbNF1cbnRleHRDb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKVxuY3JlYXRlSXRlbSgnQWxkZXIgR3JpbGxlZCBDaGlub29rIFNhbG1vbicsJzxwPlRvYXN0ZWQgRnJlbmNoIGJyZWFkIHRvcHBlZCB3aXRoIHJvbWFubywgY2hlZGRhciA8YnI+NTAwQ0FMPC9wPicsJzMyJCcpXG5jcmVhdGVJdGVtKCdBbGRlciBHcmlsbGVkIENoaW5vb2sgU2FsbW9uJywnPHA+VG9hc3RlZCBGcmVuY2ggYnJlYWQgdG9wcGVkIHdpdGggcm9tYW5vLCBjaGVkZGFyIDxicj41MDBDQUw8L3A+JywnMzIkJylcbmNyZWF0ZUl0ZW0oJ0FsZGVyIEdyaWxsZWQgQ2hpbm9vayBTYWxtb24nLCc8cD5Ub2FzdGVkIEZyZW5jaCBicmVhZCB0b3BwZWQgd2l0aCByb21hbm8sIGNoZWRkYXIgPGJyPjUwMENBTDwvcD4nLCczMiQnKVxuY3JlYXRlSXRlbSgnQWxkZXIgR3JpbGxlZCBDaGlub29rIFNhbG1vbicsJzxwPlRvYXN0ZWQgRnJlbmNoIGJyZWFkIHRvcHBlZCB3aXRoIHJvbWFubywgY2hlZGRhciA8YnI+NTAwQ0FMPC9wPicsJzMyJCcpXG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0oTkFNRSxERVNDLFBSSUNFKXtcbmxldCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbmxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5uYW1lLmNsYXNzTmFtZT0nbmFtZSdcbm5hbWUudGV4dENvbnRlbnQgPSBOQU1FXG5sZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuZGVzYy5pbm5lckhUTUwgPSBERVNDXG5sZXQgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbnByaWNlLnRleHRDb250ZW50ID0gUFJJQ0Vcbml0ZW0xLmFwcGVuZENoaWxkKG5hbWUpXG5pdGVtMS5hcHBlbmRDaGlsZChkZXNjKVxuaXRlbTEuYXBwZW5kQ2hpbGQocHJpY2UpXG50ZXh0Q29udGVudC5hcHBlbmRDaGlsZChpdGVtMSlcbn1cbm9uZS5hcHBlbmRDaGlsZChtZWRpYVNlY3QpXG5cbm9uZS5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudClcblxuTWVudUJvZHkuYXBwZW5kQ2hpbGQob25lKVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDYXRlZ29yeTIoVElUTEUsSU1HKXtcbiAgICBsZXQgb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBvbmUuY2xhc3NOYW1lPSdvbmUnXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRpdGxlLnRleHRDb250ZW50PVRJVExFXG4gICAgXG4gICAgXG4gICAgbGV0IG1lZGlhU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLnNyYz1JTUdcbiAgICBcbiAgICBtZWRpYVNlY3QuYXBwZW5kQ2hpbGQoaW1nKVxuICAgIFxuICAgIGxldCB0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgLy8gbGV0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIC8vIGltZzIuc3JjID0gTWVudUltZ1s0XVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGNyZWF0ZUl0ZW0oJ0FsZGVyIEdyaWxsZWQgQ2hpbm9vayBTYWxtb24nLCc8cD5Ub2FzdGVkIEZyZW5jaCBicmVhZCB0b3BwZWQgd2l0aCByb21hbm8sIGNoZWRkYXIgPGJyPjUwMENBTDwvcD4nLCczMiQnKVxuICAgIGNyZWF0ZUl0ZW0oJ0FsZGVyIEdyaWxsZWQgQ2hpbm9vayBTYWxtb24nLCc8cD5Ub2FzdGVkIEZyZW5jaCBicmVhZCB0b3BwZWQgd2l0aCByb21hbm8sIGNoZWRkYXIgPGJyPjUwMENBTDwvcD4nLCczMiQnKVxuICAgIGNyZWF0ZUl0ZW0oJ0FsZGVyIEdyaWxsZWQgQ2hpbm9vayBTYWxtb24nLCc8cD5Ub2FzdGVkIEZyZW5jaCBicmVhZCB0b3BwZWQgd2l0aCByb21hbm8sIGNoZWRkYXIgPGJyPjUwMENBTDwvcD4nLCczMiQnKVxuICAgIGNyZWF0ZUl0ZW0oJ0FsZGVyIEdyaWxsZWQgQ2hpbm9vayBTYWxtb24nLCc8cD5Ub2FzdGVkIEZyZW5jaCBicmVhZCB0b3BwZWQgd2l0aCByb21hbm8sIGNoZWRkYXIgPGJyPjUwMENBTDwvcD4nLCczMiQnKVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUl0ZW0oTkFNRSxERVNDLFBSSUNFKXtcbiAgICBsZXQgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBuYW1lLmNsYXNzTmFtZT0nbmFtZSdcbiAgICBuYW1lLnRleHRDb250ZW50ID0gTkFNRVxuICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGVzYy5pbm5lckhUTUwgPSBERVNDXG4gICAgbGV0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcHJpY2UudGV4dENvbnRlbnQgPSBQUklDRVxuICAgIGl0ZW0xLmFwcGVuZENoaWxkKG5hbWUpXG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQoZGVzYylcbiAgICBpdGVtMS5hcHBlbmRDaGlsZChwcmljZSlcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChpdGVtMSlcbiAgICB9XG4gICAgXG4gICAgXG4gICAgb25lLmFwcGVuZENoaWxkKHRleHRDb250ZW50KVxuICAgIG9uZS5hcHBlbmRDaGlsZChtZWRpYVNlY3QpXG4gICAgTWVudUJvZHkuYXBwZW5kQ2hpbGQob25lKVxuICAgIH1cbiAgICBjb25zdCBwYXJ0bmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwYXJ0bmVyLmNsYXNzTmFtZT0ncGFydG5lcidcblxuICAgIGNvbnN0IHRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRpdGxlMS50ZXh0Q29udGVudD0nUGFydG5lcnMgYW5kIENsaWVudHMnXG4gICAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRpdGxlMi50ZXh0Q29udGVudD0nV2Ugd29yayB3aXRoIHRoZSBiZXN0IHBlb3BsZSdcbiAgICBcbiAgICBwYXJ0bmVyLmFwcGVuZENoaWxkKHRpdGxlMSlcbiAgICBwYXJ0bmVyLmFwcGVuZENoaWxkKHRpdGxlMilcbiAgICBcbiAgICBjb25zdCB3b3JrV2l0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgd29ya1dpdGguY2xhc3NOYW1lPSd3b3JrV2l0aCc7XG5cbiAgICBjb25zdCBicmFuZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGJyYW5kMS5zcmM9YnJhbmRzWzBdXG4gICAgY29uc3QgYnJhbmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBicmFuZDIuc3JjPWJyYW5kc1sxXVxuICAgIGNvbnN0IGJyYW5kMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgYnJhbmQzLnNyYz1icmFuZHNbMl1cbiAgICBjb25zdCBicmFuZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICBicmFuZDQuc3JjPWJyYW5kc1szXVxuICAgICBjb25zdCBicmFuZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICBicmFuZDUuc3JjPWJyYW5kc1s0XVxuICAgICBjb25zdCBicmFuZDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICBicmFuZDYuc3JjPWJyYW5kc1s1XVxuXG5cbiAgd29ya1dpdGguYXBwZW5kQ2hpbGQoYnJhbmQxKVxuICB3b3JrV2l0aC5hcHBlbmRDaGlsZChicmFuZDIpXG4gIHdvcmtXaXRoLmFwcGVuZENoaWxkKGJyYW5kMylcbiAgd29ya1dpdGguYXBwZW5kQ2hpbGQoYnJhbmQ0KVxuICB3b3JrV2l0aC5hcHBlbmRDaGlsZChicmFuZDUpXG4gIHdvcmtXaXRoLmFwcGVuZENoaWxkKGJyYW5kNilcbiAgXG4gIHBhcnRuZXIuYXBwZW5kQ2hpbGQod29ya1dpdGgpICBcbiAgTWVudUJvZHkuYXBwZW5kQ2hpbGQocGFydG5lcilcbiAgY29udGVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJylcbiAgY29udGVudC5jbGFzc05hbWU9J2NvbnRlbnRTZWNvbmRTdHlsZSdcblxuIFxuXG5cbiAgICBjcmVhdGVSZXN0cmF1SW5mbygpXG4gICAgY29uc3QgIGluZm9TZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RyYXVJbmZvU2VjdCcpXG4gICAgaW5mb1NlY3QucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXG4gICAgaW5mb1NlY3QuY2xhc3NOYW1lPSdyZXN0cmF1SW5mb1NlY3RGb3JIZWFkZXInXG4gICAgIFxuICAgIGNyZWF0ZUZvb3RlcigpXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJylcbiAgICBmb290ZXIuY2xhc3NOYW1lPSdmb290ZXJDbGFzcydcbiAgICBcbn1cblxuIiwiaW1wb3J0IHtjb250ZW50fSBmcm9tICcuLi9pbmRleCdcbmltcG9ydCB7IGNoZWZJbWcgfSBmcm9tICcuL2ltYWdlcydcbiBcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU91ckNoZWYoKXtcblxuY29uc3Qgb3VyQ2hlZlNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxub3VyQ2hlZlNlY3QuY2xhc3NOYW1lPSdvdXJDaGVmU2VjdCdcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnRleHRDb250ZW50PSdTZWUgTW9yZSdcbmNvbnN0IFRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcblRpdGxlMS50ZXh0Q29udGVudD0nQ2hlZnMnXG5jb25zdCBUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG5UaXRsZTIuaW5uZXJIVE1MPSc8c3Bhbj5NZTwvc3Bhbj5ldCBPdXIgQ2hlZidcbm91ckNoZWZTZWN0LmFwcGVuZENoaWxkKFRpdGxlMSlcbm91ckNoZWZTZWN0LmFwcGVuZENoaWxkKFRpdGxlMilcbmxldCBjaGVmTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jaGVmTGlzdC5jbGFzc05hbWU9J2NoZWZMaXN0J1xubWFrZUNoZWZTZWN0KGNoZWZJbWdbMF0sJ0QuRXN0d29vZCcsJ0NoaWVmIENoZWYnKVxubWFrZUNoZWZTZWN0KGNoZWZJbWdbMV0sJ0QuRXN0d29vZCcsJ0NoaWVmIENoZWYnKVxubWFrZUNoZWZTZWN0KGNoZWZJbWdbMl0sJ0QuRXN0d29vZCcsJ0NoaWVmIENoZWYnKVxubWFrZUNoZWZTZWN0KGNoZWZJbWdbM10sJ0QuRXN0d29vZCcsJ0NoaWVmIENoZWYnKVxuXG5cbmZ1bmN0aW9uIG1ha2VDaGVmU2VjdChpbWcsTmFtZSxkZXNpZ25hdGlvbil7XG5cbiAgICBsZXQgY2hlZlNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNoZWZTZWN0LmNsYXNzTmFtZT0nY2hlZlNlY3QnXG4gICAgbGV0IGNoZWZTZWN0SW1nICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgY2hlZlNlY3RJbWcuc3JjPWltZ1xuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbmZvLmNsYXNzTmFtZT0naW5mbydcbiAgICBjaGVmU2VjdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLGluZm9BbmltYXRpb24pXG4gICAgY2hlZlNlY3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLGluZm9BbmltYXRpb25MZWF2ZSlcbiAgICBmdW5jdGlvbiBpbmZvQW5pbWF0aW9uKCl7XG4gICAgICAgIGluZm8uc3R5bGUud2lkdGg9JzEwMHB4J1xuICAgICAgICBpbmZvTmFtZS5zdHlsZS5kaXNwbGF5PSdibG9jaydcbiAgICAgICAgaW5mb0Rlc2lnbmF0aW9uLnN0eWxlLmRpc3BsYXk9J2Jsb2NrJ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluZm9BbmltYXRpb25MZWF2ZSgpe1xuICAgICAgICBpbmZvLnN0eWxlLndpZHRoPScwcHgnXG4gICAgICAgIGluZm9OYW1lLnN0eWxlLmRpc3BsYXk9J25vbmUnXG4gICAgICAgIGluZm9EZXNpZ25hdGlvbi5zdHlsZS5kaXNwbGF5PSdub25lJ1xuICAgIH1cbiAgICBsZXQgaW5mb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBcbiAgICBpbmZvTmFtZS50ZXh0Q29udGVudD1OYW1lXG4gICAgbGV0IGluZm9EZXNpZ25hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGluZm9EZXNpZ25hdGlvbi50ZXh0Q29udGVudD1kZXNpZ25hdGlvblxuICBcbiAgICBpbmZvLmFwcGVuZENoaWxkKGluZm9OYW1lKVxuICAgIGluZm8uYXBwZW5kQ2hpbGQoaW5mb0Rlc2lnbmF0aW9uKVxuICAgIGNoZWZTZWN0LmFwcGVuZENoaWxkKGNoZWZTZWN0SW1nKVxuICAgIGNoZWZTZWN0LmFwcGVuZENoaWxkKGluZm8pXG5cbiAgICBjaGVmTGlzdC5hcHBlbmRDaGlsZChjaGVmU2VjdClcbiAgICBcblxufVxuXG5vdXJDaGVmU2VjdC5hcHBlbmRDaGlsZChidXR0b24pXG5cbm91ckNoZWZTZWN0LmFwcGVuZENoaWxkKGNoZWZMaXN0KVxuY29udGVudC5hcHBlbmRDaGlsZChvdXJDaGVmU2VjdClcblxuXG5cblxufSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7aGVhZGVySW1nfSAgZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgeyBsb2FkQWxsaG9tZUNvbXBvbmVudHMgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IHsgY3JlYXRlTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51UGFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlQmxvZ1BhZ2UgfSBmcm9tIFwiLi9ibG9nUGFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGNyZWF0ZVNob3AgfSBmcm9tIFwiLi9zaG9wXCI7XG5pbXBvcnQgeyBjcmVhdGVBYm91dFBhZ2UgfSBmcm9tIFwiLi9hYm91dFBhZ2VcIjtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWdlSGVhZGVyKG9wdGlvbix0aXRsZUZvckhlYWRlcil7XG4gICBcbiAgICBjb250ZW50LnN0eWxlLmJhY2tncm91bmQ9J3RyYW5zcGFyZW50J1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICAgIGJvZHkuY2xhc3NMaXN0PSdib2R5UGFnZSdcblxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXNGcm9tRGlzcGxheSgpIHtcbiAgICAgICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9fVxuXG4gICBcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGROb2Rlc0Zyb21EaXNwbGF5KClcbiAgICAgICAgY29uc3QgTWVudUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBNZW51Qm9keS5jbGFzc05hbWU9J01lbnVCb2R5J1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBoZWFkZXIuY2xhc3NOYW1lPSdoZWFkZXJGb3JOYXYnXG4gICAgICAgIFxuICAgICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgbG9nby5zcmMgPSBoZWFkZXJJbWdbMF1cbiAgICAgICAgbG9nby5jbGFzc0xpc3Q9J2xvZ29Gb3JIZWFkZXInXG4gICAgICAgIFxuICAgICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgICAgdWwuY2xhc3NOYW1lPSduYXZGb3JIZWFkZXInXG4gICAgICAgICAgIGNvbnN0IGxpc3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICBsaXN0MS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbG9hZEFsbGhvbWVDb21wb25lbnRzKVxuICAgICAgICAgICBsaXN0MS50ZXh0Q29udGVudD0nSG9tZSdcbiAgICAgICAgXG4gICAgICAgICAgIGNvbnN0IGxpc3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICBsaXN0Mi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY3JlYXRlTWVudVBhZ2UpXG4gICAgICAgICAgIGxpc3QyLnRleHRDb250ZW50PSdNZW51J1xuICAgICAgICBcbiAgICAgICAgICAgY29uc3QgbGlzdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgIGxpc3QzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVCbG9nUGFnZSlcbiAgICAgICAgICAgbGlzdDMudGV4dENvbnRlbnQ9J0Jsb2cnXG4gICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgY29uc3QgbGlzdDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgIGxpc3Q0LnRleHRDb250ZW50PSdQYWdlcydcbiAgICAgICAgICAgXG4gICAgICAgICAgIGNvbnN0IGxpc3Q1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICBsaXN0NS50ZXh0Q29udGVudD0nQWJvdXQnXG4gICAgICAgICAgICBsaXN0NS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY3JlYXRlQWJvdXRQYWdlKVxuICAgICAgICAgICBsaXN0NS50ZXh0Q29udGVudD0nQWJvdXQnXG4gICAgICAgIFxuICAgICAgICAgICBjb25zdCBsaXN0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgbGlzdDYudGV4dENvbnRlbnQ9J1Nob3AnXG4gICAgICAgICAgIGxpc3Q2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjcmVhdGVTaG9wKVxuICAgICAgICBcbiAgICAgICAgICAgY29uc3QgbGlzdDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgIGxpc3Q3LnRleHRDb250ZW50PSdDb250YWN0J1xuICAgICAgICBcbiAgICAgICAgICAgY29uc3QgaWNvblNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICBjb25zdCBwYXJhICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICAgICAgICAgcGFyYS50ZXh0Q29udGVudD1gJHt0aXRsZUZvckhlYWRlcn1gXG4gICAgICAgIFxuICAgICAgICAgICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICBwYXJhMi5pbm5lckhUTUw9YDxzcGFuPkhvbWU8L3NwYW4+ID4gJHtvcHRpb259YFxuICAgICAgICBcbiAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGlzdDEpXG4gICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpc3QyKVxuICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaXN0MykgXG4gICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpc3Q0KVxuICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaXN0NSlcbiAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGlzdDYpXG4gICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpc3Q3KVxuICAgICAgICBcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh1bClcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHBhcmEpXG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChwYXJhMilcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChNZW51Qm9keSlcbiAgICBcblxuXG5cbiAgICAgICAgY3JlYXRlRm9vdGVyKClcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJylcbiAgICAgICAgZm9vdGVyLmNsYXNzTmFtZT0nZm9vdGVyQ2xhc3MnXG4gICAgICAgXG4gICAgICAgIFxuXG5cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlc3RyYXVBY3RpdmUoKXtcbmNvbnN0IHJlc3RyYXVBY3RpdmVTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnJlc3RyYXVBY3RpdmVTZWN0LmNsYXNzTmFtZT0ncmVzdHJhdUFjdGl2ZVNlY3QnXG5cbmNvbnN0IHRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbnRpdGxlMS50ZXh0Q29udGVudD0nUmVzdGF1cmFudCBBY3RpdmUgUHJvY2VzcydcblxuY29uc3QgcGFyYSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbnBhcmEuaW5uZXJIVE1MPSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGRpYW0gcGVsbGVudGVzcXVlPGJyPiBiaWJlbmR1bSBub24gZHVpIHZvbHV0cGF0IGZyaW5naWxsYSBiaWJlbmR1bS4gVXJuYSwgZWxpdCBhdWd1ZSB1cm5hLCdcblxuXG5jb25zdCB0aXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG50aXRsZTIuaW5uZXJIVE1MPSc8c3Bhbj5XZTwvc3Bhbj4gRG9jdW1lbnQgRXZlcnkgRm9vZDxicj4gQmVhbiBQcm9jZXNzIHVudGlsZSBpdCBpcyBzYXZlZCdcblxuY29uc3QgYnRuU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5idG5TZWN0LmNsYXNzTmFtZT0nYnRuU2VjdCdcbmNvbnN0IGJ0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYnRuMS5jbGFzc05hbWU9J2J0bjEnXG5idG4xLnRleHRDb250ZW50PSdSZWFkIE1vcmUnXG5jb25zdCBwbGF5VmlkU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5wbGF5VmlkU2VjdC5jbGFzc05hbWU9J3BsYXlWaWRTZWN0J1xuXG5jb25zdCBidG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmJ0bjIuY2xhc3NOYW1lPSdidG4yJ1xuXG5wbGF5VmlkU2VjdC5hcHBlbmRDaGlsZChidG4yKVxuXG5jb25zdCB2aWRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG52aWRQYXJhLmNsYXNzTmFtZT0nVmlkcGxheSdcbnZpZFBhcmEudGV4dENvbnRlbnQ9J1BsYXkgVmlkZW8nXG5wbGF5VmlkU2VjdC5hcHBlbmRDaGlsZCh2aWRQYXJhKVxuXG5cbnJlc3RyYXVBY3RpdmVTZWN0LmFwcGVuZENoaWxkKHRpdGxlMSlcbnJlc3RyYXVBY3RpdmVTZWN0LmFwcGVuZENoaWxkKHRpdGxlMilcbnJlc3RyYXVBY3RpdmVTZWN0LmFwcGVuZENoaWxkKHBhcmEpXG5cbmJ0blNlY3QuYXBwZW5kQ2hpbGQoYnRuMSlcbmJ0blNlY3QuYXBwZW5kQ2hpbGQoYnRuMilcbmJ0blNlY3QuYXBwZW5kQ2hpbGQocGxheVZpZFNlY3QpXG5cbnJlc3RyYXVBY3RpdmVTZWN0LmFwcGVuZENoaWxkKGJ0blNlY3QpXG5jb250ZW50LmFwcGVuZENoaWxkKHJlc3RyYXVBY3RpdmVTZWN0KVxufSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7ICByZXN0cmF1SW5mb1NlY3RJbWcgfSBmcm9tIFwiLi9pbWFnZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlc3RyYXVJbmZvKCl7XG5cbiAgICBjb25zdCByZXN0cmF1SW5mb1NlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJlc3RyYXVJbmZvU2VjdC5jbGFzc05hbWU9J3Jlc3RyYXVJbmZvU2VjdCdcbiAgICBjb25zdCByZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyLmNsYXNzTmFtZT0ncmVzdHJhdUluZm9TZWN0QmxhY2tMYXllcidcblxuICAgIGNvbnN0IGluZm9TdWJEaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZzEuc3JjID0gcmVzdHJhdUluZm9TZWN0SW1nWzBdXG4gICAgY29uc3QgaW5mb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpbmZvTmFtZS50ZXh0Q29udGVudD0nUHJvZmVzc2lvbmFsIENoZWZzJ1xuICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG51bWJlci50ZXh0Q29udGVudD0nNDIwJ1xuXG4gICAgaW5mb1N1YkRpdjEuYXBwZW5kQ2hpbGQoaW1nMSlcbiAgICBpbmZvU3ViRGl2MS5hcHBlbmRDaGlsZChpbmZvTmFtZSlcbiAgICBpbmZvU3ViRGl2MS5hcHBlbmRDaGlsZChudW1iZXIpXG5cbiAgICBjb25zdCBpbmZvU3ViRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nMi5zcmMgPSByZXN0cmF1SW5mb1NlY3RJbWdbMV1cbiAgICBjb25zdCBpbmZvTmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpbmZvTmFtZTIudGV4dENvbnRlbnQ9J0l0ZW1zIE9mIEZvb2QnXG4gICAgY29uc3QgbnVtYmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG51bWJlcjIudGV4dENvbnRlbnQ9JzMyMCdcbiAgICBpbmZvU3ViRGl2Mi5hcHBlbmRDaGlsZChpbWcyKVxuICAgIGluZm9TdWJEaXYyLmFwcGVuZENoaWxkKGluZm9OYW1lMilcbiAgICBpbmZvU3ViRGl2Mi5hcHBlbmRDaGlsZChudW1iZXIyKVxuXG4gICAgY29uc3QgaW5mb1N1YkRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZzMuc3JjID0gcmVzdHJhdUluZm9TZWN0SW1nWzJdXG4gICAgY29uc3QgaW5mb05hbWUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaW5mb05hbWUzLnRleHRDb250ZW50PSdZZWFycyBPZiBFeHBlcmllbmNlZCdcbiAgICBjb25zdCBudW1iZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbnVtYmVyMy50ZXh0Q29udGVudD0nMzArJ1xuICAgIGluZm9TdWJEaXYzLmFwcGVuZENoaWxkKGltZzMpXG4gICAgaW5mb1N1YkRpdjMuYXBwZW5kQ2hpbGQoaW5mb05hbWUzKVxuICAgIGluZm9TdWJEaXYzLmFwcGVuZENoaWxkKG51bWJlcjMpXG5cbiAgICBjb25zdCBpbmZvU3ViRGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgaW1nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nNC5zcmMgPSByZXN0cmF1SW5mb1NlY3RJbWdbM11cbiAgICBjb25zdCBpbmZvTmFtZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpbmZvTmFtZTQudGV4dENvbnRlbnQ9J0hhcHB5IGN1c3RvbWVycydcbiAgICBjb25zdCBudW1iZXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbnVtYmVyNC50ZXh0Q29udGVudD0nMjIwJ1xuICAgIGluZm9TdWJEaXY0LmFwcGVuZENoaWxkKGltZzQpXG4gICAgaW5mb1N1YkRpdjQuYXBwZW5kQ2hpbGQoaW5mb05hbWU0KVxuICAgIGluZm9TdWJEaXY0LmFwcGVuZENoaWxkKG51bWJlcjQpXG5cbiAgICByZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyLmFwcGVuZENoaWxkKGluZm9TdWJEaXYxKVxuICAgIHJlc3RyYXVJbmZvU2VjdEJsYWNrTGF5ZXIuYXBwZW5kQ2hpbGQoaW5mb1N1YkRpdjIpXG4gICAgcmVzdHJhdUluZm9TZWN0QmxhY2tMYXllci5hcHBlbmRDaGlsZChpbmZvU3ViRGl2MylcbiAgICByZXN0cmF1SW5mb1NlY3RCbGFja0xheWVyLmFwcGVuZENoaWxkKGluZm9TdWJEaXY0KVxuXG5cbiAgICByZXN0cmF1SW5mb1NlY3QuYXBwZW5kQ2hpbGQocmVzdHJhdUluZm9TZWN0QmxhY2tMYXllcilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHJlc3RyYXVJbmZvU2VjdClcblxufSIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IGNyZWF0ZVBhZ2VIZWFkZXIgfSBmcm9tIFwiLi9wYWdlSGVhZGVyXCI7XG5pbXBvcnQgeyBtZW51SXRlbUltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2hvcCgpe1xuXG4gICAgY3JlYXRlUGFnZUhlYWRlcignU2hvcCcsJ1Nob3AgTGlzdCcpXG4gICAgXG4gICAgY29uc3QgYm9keSAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICAgIGJvZHkuY2xhc3NOYW1lPSdib2R5UGFnZUZvclNob3AnXG4gICAgY29uc3Qgc2hvcEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTWVudUJvZHknKVxuICAgIHNob3BCb2R5LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICAgIHNob3BCb2R5LmNsYXNzTmFtZT0nc2hvcEJvZHknXG4gICAgXG5cbiAgICBjb25zdCBzaG9wU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2hvcFNlY3QuY2xhc3NOYW1lPSdzaG9wU2VjdCdcbiAgICBjb25zdCBzaG9wTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2hvcExpc3QuY2xhc3NOYW1lPSdzaG9wTGlzdCdcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBjcmVhdGVJdGVtKG1lbnVJdGVtSW1nWzddLCdGcmVzaCBMaW1lJywnMTUkJylcbiAgICBcbiBcbiAgICBmdW5jdGlvbiBjcmVhdGVJdGVtKGltZyxOYW1lLFByaWNlKXtcblxuICAgICAgICBjb25zdCBpdGVtID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBpdGVtLmNsYXNzTmFtZT0naXRlbSdcblxuICAgICAgICBjb25zdCBpdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgaXRlbUltZy5zcmMgPSBpbWdcblxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudD1OYW1lXG4gICAgICAgIGl0ZW1OYW1lLmNsYXNzTmFtZT0naXRlbU5hbWUnXG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50PVByaWNlXG4gICAgICAgIFxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1JbWcpXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVByaWNlKVxuXG4gICAgICAgIHNob3BMaXN0LmFwcGVuZENoaWxkKGl0ZW0pXG4gICAgfVxuXG5cbiAgIHNob3BTZWN0LmFwcGVuZENoaWxkKHNob3BMaXN0KVxuICAgc2hvcEJvZHkuYXBwZW5kQ2hpbGQoc2hvcFNlY3QpXG5cbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpXG5mb290ZXIuY2xhc3NOYW1lPSdmb290ZXJTaG9wJ1xuXG5jb25zdCBwcm9maWxlRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9maWxlRGV0YWlsLmNsYXNzTmFtZT0ncHJvZmlsZURldGFpbCdcblxuY29uc3QgaW5wdXRTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmlucHV0U2VjdC5jbGFzc05hbWU9J2lucHV0U2VjdCdcblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5pbnB1dC5wbGFjZWhvbGRlcj0nU2VhcmNoIFByb2R1Y3QnXG5cbmNvbnN0IGlucHV0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5pbnB1dEljb24uY2xhc3NOYW1lPSdJbnB1dElDT04nXG5cbmlucHV0U2VjdC5hcHBlbmRDaGlsZChpbnB1dClcbmlucHV0U2VjdC5hcHBlbmRDaGlsZChpbnB1dEljb24pXG5cbnByb2ZpbGVEZXRhaWwuYXBwZW5kQ2hpbGQoaW5wdXRTZWN0KVxuXG5zaG9wQm9keS5hcHBlbmRDaGlsZChwcm9maWxlRGV0YWlsKVxuXG5cbmNvbnN0IGNoZWNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBDYXRlZ29yeVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG5DYXRlZ29yeVBhcmEudGV4dENvbnRlbnQ9J0NhdGVnb3J5J1xuY2hlY2tMaXN0LmFwcGVuZENoaWxkKENhdGVnb3J5UGFyYSlcbmNoZWNrTGlzdC5jbGFzc05hbWU9J2NoZWNrTGlzdCdcbmNyZWF0ZUNoZWNrKCdTYW5kd2ljaGVzJylcbmNyZWF0ZUNoZWNrKCdCdXJnZXInKVxuY3JlYXRlQ2hlY2soJ0NoaWNrZW4gQ2h1cCcpXG5jcmVhdGVDaGVjaygnRHJpbmsnKVxuY3JlYXRlQ2hlY2soJ1BpenphJylcbmNyZWF0ZUNoZWNrKCdUaGknKVxuY3JlYXRlQ2hlY2soJ05vbiB2ZWcnKVxuY3JlYXRlQ2hlY2soJ1VuY2F0ZWdvcml6ZScpXG5cblxuZnVuY3Rpb24gY3JlYXRlQ2hlY2soTmFtZSl7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBhcmEuY2xhc3NOYW1lPSdjaGVja1BhcmEnXG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBpbnB1dC50eXBlPSdjaGVja2JveCdcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnRleHRDb250ZW50PWAke05hbWV9YFxuXG4gICAgcGFyYS5hcHBlbmRDaGlsZChpbnB1dClcbiAgICBwYXJhLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgY2hlY2tMaXN0LmFwcGVuZENoaWxkKHBhcmEpXG59XG5cbmNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5hZGQuY2xhc3NOYW1lPSdhZHZlcnRpc2UnXG5cbmNvbnN0IGxhdGVzdFByb2R1Y3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxubGF0ZXN0UHJvZHVjdC5jbGFzc05hbWU9J2xhdGVzdFByJ1xuY29uc3QgcHJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbnByVGl0bGUudGV4dENvbnRlbnQ9J0xhdGVzdCBQcm9qZWN0J1xubGF0ZXN0UHJvZHVjdC5hcHBlbmRDaGlsZChwclRpdGxlKVxuY3JlYXRlUHIoJ3BpemFhJywnMTIkJyxtZW51SXRlbUltZ1s0XSlcbmNyZWF0ZVByKCdwaXphYScsJzEyJCcsbWVudUl0ZW1JbWdbNF0pXG5jcmVhdGVQcigncGl6YWEnLCcxMiQnLG1lbnVJdGVtSW1nWzRdKVxuY3JlYXRlUHIoJ3BpemFhJywnMTIkJyxtZW51SXRlbUltZ1s0XSlcblxuZnVuY3Rpb24gY3JlYXRlUHIobmFtZSxwcmljZSxpbWcpe1xuICAgIGNvbnN0IHByMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHIxLmNsYXNzTmFtZT0nbGlzdFByJ1xuICAgIGNvbnN0IFByaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBQcmltZy5zcmM9IGltZ1xuICAgIGNvbnN0IHByTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHByTmFtZS50ZXh0Q29udGVudD1uYW1lXG5cbiAgICBjb25zdCBwclByaWNlID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwclByaWNlLnRleHRDb250ZW50PXByaWNlXG5cbiAgICBwcjEuYXBwZW5kQ2hpbGQoUHJpbWcpXG4gICAgcHIxLmFwcGVuZENoaWxkKHByTmFtZSlcbiAgICBwcjEuYXBwZW5kQ2hpbGQocHJQcmljZSlcblxuICAgIGxhdGVzdFByb2R1Y3QuYXBwZW5kQ2hpbGQocHIxKVxuXG59XG5cblxuXG5wcm9maWxlRGV0YWlsLmFwcGVuZENoaWxkKGNoZWNrTGlzdClcbnByb2ZpbGVEZXRhaWwuYXBwZW5kQ2hpbGQoYWRkKVxucHJvZmlsZURldGFpbC5hcHBlbmRDaGlsZChsYXRlc3RQcm9kdWN0KVxuXG59IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgcHJvZmlsZUltZyB9IGZyb20gXCIuL2ltYWdlc1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXN0aW1vbmlhbCgpe1xuY29uc3QgdGVzdGltb25pYWxTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnRlc3RpbW9uaWFsU2VjdC5jbGFzc05hbWU9J1Rlc3RpbW9uaWFsJ1xuY29uc3QgdGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxudGl0bGUxLnRleHRDb250ZW50PSdUZXN0aW1vbmlhbHMnXG5jb25zdCB0aXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG50aXRsZTIudGV4dENvbnRlbnQ9J1doYXQgb3VyIGNsaWVudCBhcmUgc2F5aW5nJ1xuY29uc3QgdGVzdGltb25pYWxDYXJkU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG50ZXN0aW1vbmlhbENhcmRTZWN0LmNsYXNzTmFtZT0ndGVzdGltb25pYWxDYXJkU2VjdCdcbmNvbnN0IHRlc3RpbW9uaWFsQ2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudGVzdGltb25pYWxDYXJkcy5jbGFzc05hbWU9J3Rlc3RpbW9uaWFsQ2FyZHMnXG5jb25zdCBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbnByb2ZpbGUuY2xhc3NOYW1lPSdwcm9maWxlJ1xucHJvZmlsZS5zcmMgPSBwcm9maWxlSW1nWzBdXG5cbmNvbnN0IGdyYXNzQ29ybmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbmdyYXNzQ29ybmVyLmNsYXNzTmFtZT0nZ3Jhc3NDb3JuZXJJbWcnXG5ncmFzc0Nvcm5lci5zcmMgPSBwcm9maWxlSW1nWzddXG5cbmNvbnN0IHJldml3ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbnJldml3ZVBhcmEudGV4dENvbnRlbnQ9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgZGlhbSBwZWxsZW50ZXNxdWUgYmliZW5kdW0gbm9uIGR1aSB2b2x1dHBhdCBmcmluZ2lsbGEgYmliZW5kdW0uIFVybmEsIGVsaXQgYXVndWUgdXJuYSwgdml0YWUgZmV1Z2lhdCBwcmV0aXVtIGRvbmVjIGlkIGVsZW1lbnR1bS4gVWx0cmljZXMgbWF0dGlzIHNlZCB2aXRhZSBtdXMgcmlzdXMuIExhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgc2l0IGV1IHZlbGl0IGluIGNvbnNlcXVhdC4nXG5cbmNvbnN0IHRlc3RpbW9uaWFsR3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxudGVzdGltb25pYWxHcmVlbi5jbGFzc05hbWU9J3Rlc3RpbW9uaWFsR3JlZW4nXG50ZXN0aW1vbmlhbEdyZWVuLnNyYz1wcm9maWxlSW1nWzFdXG5jb25zdCBzdGFyU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5zdGFyU2VjdC5jbGFzc05hbWU9J3N0YXJTZWN0J1xuXG5jb25zdCBzdGFyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5zdGFyMS5zcmMgPSBwcm9maWxlSW1nWzJdXG5cbmNvbnN0IHN0YXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbnN0YXIyLnNyYyA9IHByb2ZpbGVJbWdbMl1cblxuY29uc3Qgc3RhcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuc3RhcjMuc3JjID0gcHJvZmlsZUltZ1syXVxuXG5jb25zdCBzdGFyNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5zdGFyNC5zcmMgPSBwcm9maWxlSW1nWzJdXG5cbmNvbnN0IHN0YXI1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbnN0YXI1LnNyYz1wcm9maWxlSW1nWzJdXG5jb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5uYW1lLnRleHRDb250ZW50ID0gJ0FsYW1pbiBIYXNhbidcblxuY29uc3QgZGVzaWduYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbmRlc2lnbmF0aW9uLmNsYXNzTmFtZT0nZGVzaWduJ1xuZGVzaWduYXRpb24udGV4dENvbnRlbnQ9J0Zvb2QgU3BlY2lhbGlzdCdcblxuY29uc3Qgc2xpZGVyRG90U2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5zbGlkZXJEb3RTZWN0LmNsYXNzTmFtZT0nU2xpZGVyRG90J1xuXG5jb25zdCBkb3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IGRvdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3QgZG90MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBkb3Q0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblxuc2xpZGVyRG90U2VjdC5hcHBlbmRDaGlsZChkb3QxKVxuc2xpZGVyRG90U2VjdC5hcHBlbmRDaGlsZChkb3QyKVxuc2xpZGVyRG90U2VjdC5hcHBlbmRDaGlsZChkb3QzKVxuc2xpZGVyRG90U2VjdC5hcHBlbmRDaGlsZChkb3Q0KVxuXG5zdGFyU2VjdC5hcHBlbmRDaGlsZChzdGFyMSlcbnN0YXJTZWN0LmFwcGVuZENoaWxkKHN0YXIyKVxuc3RhclNlY3QuYXBwZW5kQ2hpbGQoc3RhcjMpXG5zdGFyU2VjdC5hcHBlbmRDaGlsZChzdGFyNClcblxudGVzdGltb25pYWxTZWN0LmFwcGVuZENoaWxkKHRpdGxlMSlcbnRlc3RpbW9uaWFsU2VjdC5hcHBlbmRDaGlsZCh0aXRsZTIpXG50ZXN0aW1vbmlhbENhcmRzLmFwcGVuZENoaWxkKHByb2ZpbGUpXG50ZXN0aW1vbmlhbENhcmRTZWN0LmFwcGVuZENoaWxkKHRlc3RpbW9uaWFsQ2FyZHMpXG50ZXN0aW1vbmlhbENhcmRTZWN0LmFwcGVuZENoaWxkKHNsaWRlckRvdFNlY3QpXG50ZXN0aW1vbmlhbENhcmRzLmFwcGVuZENoaWxkKHJldml3ZVBhcmEpXG50ZXN0aW1vbmlhbENhcmRzLmFwcGVuZENoaWxkKHN0YXJTZWN0KVxudGVzdGltb25pYWxDYXJkcy5hcHBlbmRDaGlsZChuYW1lKVxudGVzdGltb25pYWxDYXJkcy5hcHBlbmRDaGlsZChkZXNpZ25hdGlvbilcbnRlc3RpbW9uaWFsQ2FyZFNlY3QuYXBwZW5kQ2hpbGQodGVzdGltb25pYWxHcmVlbilcbnRlc3RpbW9uaWFsU2VjdC5hcHBlbmRDaGlsZChncmFzc0Nvcm5lcilcbnRlc3RpbW9uaWFsU2VjdC5hcHBlbmRDaGlsZCh0ZXN0aW1vbmlhbENhcmRTZWN0KVxuY29udGVudC5hcHBlbmRDaGlsZCh0ZXN0aW1vbmlhbFNlY3QpXG5cbnNldFRpbWVvdXQoYW5pbWF0aW9uLDMwMDApXG5mdW5jdGlvbiBhbmltYXRpb24oKXtcbiAgICBwcm9maWxlLnNyYz1wcm9maWxlSW1nWzBdXG4gICAgbmFtZS50ZXh0Q29udGVudD0nQWxhbWluIEhhc2FuJ1xuICAgIGRlc2lnbmF0aW9uLnRleHRDb250ZW50PSdGb29kIFNwZWNpYWxpc3QnXG4gICAgcmV2aXdlUGFyYS50ZXh0Q29udGVudD0nTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBkaWFtIHBlbGxlbnRlc3F1ZSBiaWJlbmR1bSBub24gZHVpIHZvbHV0cGF0IGZyaW5naWxsYSBiaWJlbmR1bS4gVXJuYSwgZWxpdCBhdWd1ZSB1cm5hLCB2aXRhZSBmZXVnaWF0IHByZXRpdW0gZG9uZWMgaWQgZWxlbWVudHVtLiBVbHRyaWNlcyBtYXR0aXMgc2VkIHZpdGFlIG11cyByaXN1cy4gTGFjdXMgbmlzaSwgZXQgYWMgZGFwaWJ1cyBzaXQgZXUgdmVsaXQgaW4gY29uc2VxdWF0LidcbiAgICBkb3QxLnN0eWxlLm9wYWNpdHk9JzEnXG4gICAgZG90NC5zdHlsZS5vcGFjaXR5PScwLjQnXG4gICAgc2V0VGltZW91dChzbGlkZXIxLDMwMDApXG5cblxuXG5cbmZ1bmN0aW9uIHNsaWRlcjEoKXtcbiAgICBwcm9maWxlLnNyYz1wcm9maWxlSW1nWzRdXG4gICAgZG90NC5zdHlsZS5vcGFjaXR5PScwLjQnXG4gICAgbmFtZS50ZXh0Q29udGVudCA9ICdUb20gd2FybmVyJ1xuICAgIGRlc2lnbmF0aW9uLnRleHRDb250ZW50PSdDdXN0b21lcidcbiAgICByZXZpd2VQYXJhLnRleHRDb250ZW50PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGRpYW0gcGVsbGVudGVzcXVlIGJpYmVuZHVtIG5vbiBldCBhYyBkYXBpYnVzIHNpdCBldSB2ZWxpdCBpbiBjb25zZXF1YXQuJ1xuICAgIGRvdDEuc3R5bGUub3BhY2l0eT0nMC40J1xuICAgIGRvdDIuc3R5bGUub3BhY2l0eT0nMSdcbiAgICBzdGFyU2VjdC5yZW1vdmVDaGlsZChzdGFyNClcblxuICAgIHNldFRpbWVvdXQoc2xpZGVyMiwzMDAwKVxuICAgIFxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzbGlkZXIyKCl7XG4gICAgICAgIHByb2ZpbGUuc3JjPXByb2ZpbGVJbWdbNV1cbiAgICAgICAgbmFtZS50ZXh0Q29udGVudD0nQ2hyaXMgZ2VsbCdcbiAgICAgICAgZGVzaWduYXRpb24udGV4dENvbnRlbnQ9J0N1c3RvbWVyJ1xuICAgICAgICByZXZpd2VQYXJhLnRleHRDb250ZW50PSdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGRpYW0gIGVsZW1lbnR1bS4gVWx0cmljZXMgbWF0dGlzIHNlZCB2aXRhZSBtdXMgcmlzdXMuIExhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgc2l0IGV1IHZlbGl0IGluIGNvbnNlcXVhdC4nXG4gICAgICAgIGRvdDIuc3R5bGUub3BhY2l0eT0nMC40J1xuICAgICAgICBkb3QzLnN0eWxlLm9wYWNpdHk9JzEnXG4gICAgICAgIHN0YXJTZWN0LmFwcGVuZENoaWxkKHN0YXI0KVxuICAgICAgICBzdGFyU2VjdC5hcHBlbmRDaGlsZChzdGFyNSlcbiAgICAgICAgc2V0VGltZW91dChzbGlkZXIzLDMwMDApXG4gICAgICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIHNsaWRlcjMoKXtcbiAgICAgICAgICAgIHByb2ZpbGUuc3JjPXByb2ZpbGVJbWdbNl1cbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQ9J1Rva295YSB3YWxrZXInXG4gICAgICAgICAgICBkZXNpZ25hdGlvbi50ZXh0Q29udGVudD0nQ3VzdG9tZXInXG4gICAgICAgICAgICByZXZpd2VQYXJhLnRleHRDb250ZW50PSd2b2x1dHBhdCBmcmluZ2lsbGEgYmliZW5kdW0uIFVybmEsIGVsaXQgYXVndWUgdXJuYSwgdml0YWUgZmV1Z2lhdCBwcmV0aXVtIGRvbmVjIGlkIGVsZW1lbnR1bS4gVWx0cmljZXMgbWF0dGlzIHNlZCB2aXRhZSBtdXMgcmlzdXMuIExhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgc2l0IGV1IHZlbGl0IGluIGNvbnNlcXVhdC4nXG4gICAgICAgICAgICBkb3QzLnN0eWxlLm9wYWNpdHkgPScuNCdcbiAgICAgICAgICAgIGRvdDQuc3R5bGUub3BhY2l0eT0nMSdcbiAgICAgICAgICAgIHN0YXJTZWN0LnJlbW92ZUNoaWxkKHN0YXI1KVxuICAgICAgICAgICAgc2V0VGltZW91dChhbmltYXRpb24sMzAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbn0iLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4uL2luZGV4XCJcbmltcG9ydCB7IFdoeUltZyB9IGZyb20gXCIuL2ltYWdlc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXaHlDaG9vc2UoKXtcblxuICAgIGNvbnN0IG1haW5TZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgbWFpblNlY3QuY2xhc3NOYW1lID0nbWFpblNlY3QnXG5cbiAgICBjb25zdCBtZWRpYVNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHdoeTFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHdoeTFJbWcuc3JjPVdoeUltZ1swXVxuICAgIGNvbnN0IHdoeTJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHdoeTJJbWcuc3JjPVdoeUltZ1sxXVxuICAgIGNvbnN0IHdoeTNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHdoeTNJbWcuc3JjPVdoeUltZ1syXVxuICAgIGNvbnN0IHdoeTRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHdoeTRJbWcuc3JjPVdoeUltZ1szXVxuICAgIGNvbnN0IHdoeTVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHdoeTVJbWcuc3JjPVdoeUltZ1s0XVxuICAgIGNvbnN0IHdoeTZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHdoeTZJbWcuc3JjPVdoeUltZ1s1XVxuXG4gICAgbWVkaWFTZWN0LmFwcGVuZENoaWxkKHdoeTFJbWcpXG4gICAgbWVkaWFTZWN0LmFwcGVuZENoaWxkKHdoeTJJbWcpXG4gICAgbWVkaWFTZWN0LmFwcGVuZENoaWxkKHdoeTNJbWcpXG4gICAgbWVkaWFTZWN0LmFwcGVuZENoaWxkKHdoeTRJbWcpXG4gICAgbWVkaWFTZWN0LmFwcGVuZENoaWxkKHdoeTVJbWcpXG4gICAgbWVkaWFTZWN0LmFwcGVuZENoaWxkKHdoeTZJbWcpXG5cbiAgICBtYWluU2VjdC5hcHBlbmRDaGlsZChtZWRpYVNlY3QpXG5cbiAgICBjb25zdCB0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGV4dENvbnRlbnQuY2xhc3NOYW1lPSd0ZXhDb250ZW50J1xuICAgIGNvbnN0IFRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBUaXRsZTEudGV4dENvbnRlbnQ9J1doeSBDaG9vc2UgdXMnXG4gICAgY29uc3QgVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIFRpdGxlMi5pbm5lckhUTUw9JzxzcGFuPkV4PC9zcGFuPnRyYSBvcmRpbmFyeSB0YXN0ZSA8YnI+IEFuZCBFeHBlcmlhbmNlJ1xuXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGRlc2MudGV4dENvbnRlbnQ9J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgZGlhbSBwZWxsZW50ZXNxdWUgYmliZW5kdW0gbm9uIGR1aSB2b2x1dHBhdCBmcmluZ2lsbGEgYmliZW5kdW0uIFVybmEsIGVsaXQgYXVndWUgdXJuYSwgdml0YWUgZmV1Z2lhdCBwcmV0aXVtIGRvbmVjIGlkIGVsZW1lbnR1bS4gVWx0cmljZXMgbWF0dGlzIHNlZCB2aXRhZSBtdXMgcmlzdXMuIExhY3VzIG5pc2ksIGV0IGFjIGRhcGlidXMgc2l0IGV1IHZlbGl0IGluIGNvbnNlcXVhdC4nXG5cbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChUaXRsZTEpXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoVGl0bGUyKVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKGRlc2MpXG5cbiAgICBjb25zdCBtZWFsQ2F0U2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVhbENhdFNlY3QuY2xhc3NOYW1lPSdtZWFsQ2F0U2VjdCdcbiAgICBjb25zdCBmYXN0Rm9vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgTHVuY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IERpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBGYXN0Rm9vZFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBGYXN0Rm9vZFAuY2xhc3NOYW1lPSdGYXN0Rm9vZFAnXG4gICAgRmFzdEZvb2RQLnRleHRDb250ZW50PSdGYXN0IEZvb2QnXG4gICAgY29uc3QgTHVuY2hQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgTHVuY2hQLmNsYXNzTmFtZT0nTHVuY2hQJ1xuICAgIEx1bmNoUC50ZXh0Q29udGVudD0nTHVuY2gnXG4gICAgY29uc3QgRGlubmVyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIERpbm5lclAuY2xhc3NOYW1lPSdEaW5uZXJQJ1xuICAgIERpbm5lclAudGV4dENvbnRlbnQ9J0Rpbm5lcidcbiAgICBjb25zdCBFeHBlcmlhbmNlU2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgRXhwZXJpYW5jZVNlY3QuY2xhc3NOYW1lPSdFeHBlcmlhbmNlU2VjdCdcblxuICAgIGNvbnN0IEV4cGVyaWFuY2VQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgRXhwZXJpYW5jZVAudGV4dENvbnRlbnQ9JzMwKydcbiAgICBjb25zdCBFeHBlcmlhbmNlUDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBFeHBlcmlhbmNlUDIuaW5uZXJIVE1MPSc8c3Bhbj55ZWFycyBvZjwvc3Bhbj4gPGJyPiBFeHBlcmlhbmNlZCdcbiAgICBtZWFsQ2F0U2VjdC5hcHBlbmRDaGlsZChmYXN0Rm9vZClcbiAgICBtZWFsQ2F0U2VjdC5hcHBlbmRDaGlsZChMdW5jaClcbiAgICBtZWFsQ2F0U2VjdC5hcHBlbmRDaGlsZChEaW5uZXIpXG4gICAgXG5cbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChtZWFsQ2F0U2VjdClcbiAgICB0ZXh0Q29udGVudC5hcHBlbmRDaGlsZChGYXN0Rm9vZFApXG4gICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoTHVuY2hQKVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKERpbm5lclApXG4gICAgRXhwZXJpYW5jZVNlY3QuYXBwZW5kQ2hpbGQoRXhwZXJpYW5jZVApXG4gICAgRXhwZXJpYW5jZVNlY3QuYXBwZW5kQ2hpbGQoRXhwZXJpYW5jZVAyKVxuICAgIHRleHRDb250ZW50LmFwcGVuZENoaWxkKEV4cGVyaWFuY2VTZWN0KVxuICAgIG1haW5TZWN0LmFwcGVuZENoaWxkKHRleHRDb250ZW50KVxuICAgIFxuXG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluU2VjdClcblxuXG5cblxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9