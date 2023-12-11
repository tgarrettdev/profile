"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/timeline",{

/***/ "./src/pages/timeline.tsx":
/*!********************************!*\
  !*** ./src/pages/timeline.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _components_TimelineItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TimelineItem */ \"./src/components/TimelineItem.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n// src/pages/timeline.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst timelineData = [\n    {\n        type: \"experience\",\n        title: \"Senior Developer\",\n        organization: \"IPOP Digital\",\n        period: \"October 2023 - Present\",\n        startDate: new Date(\"2023-10-01\"),\n        description: [\n            \"Designed, developed, and optimized web applications using Ruby on Rails for multiple clients including an AI-driven startup Guest Nutrition, Good Spirtiz, and Cat Snap.\"\n        ]\n    },\n    {\n        type: \"experience\",\n        title: \"Technical Founder\",\n        organization: \"Docudynamics\",\n        period: \"November 2022 - October 2023\",\n        startDate: new Date(\"2022-11-01\"),\n        description: [\n            \"Designed, developed, and optimized web applications using Ruby on Rails for multiple clients including an AI-driven startup Guest Nutrition, Good Spirtiz, and Cat Snap.\"\n        ]\n    },\n    {\n        type: \"experience\",\n        title: \"Lead Developer\",\n        organization: \"Penco, Dublin City, Ireland\",\n        period: \"December 2019 - November 2022\",\n        startDate: new Date(\"2019-12-01\"),\n        description: [\n            \"Promoted to a more senior role within the digital team after demonstrating exceptional performance in software development and team communication.\"\n        ],\n        projectLink: \"https://whichmortgage.ie\"\n    },\n    {\n        type: \"experience\",\n        title: \"Front End Developer\",\n        organization: \"Gambling.com Group, Dublin City, Ireland\",\n        period: \"January 2019 - December 2019\",\n        startDate: new Date(\"2019-01-01\"),\n        description: [\n            \"Worked as part of a product development team focusing on frontend development using Ruby on Rails, JS, HTML, and CSS.\"\n        ],\n        projectLink: \"https://gambling.com\"\n    },\n    {\n        type: \"experience\",\n        title: \"UX/UI Designer\",\n        organization: \"GRID Finance, Dublin City, Ireland\",\n        period: \"June 2018 - January 2019\",\n        startDate: new Date(\"2018-06-01\"),\n        description: [\n            \"Created effective UX/UI designs using the Sketch app.\"\n        ],\n        projectLink: \"https://gridfinance.ie\"\n    },\n    {\n        type: \"experience\",\n        title: \"Multimedia Designer\",\n        organization: \"Associated Newspapers, Dublin City, Ireland\",\n        period: \"June 2016 - September 2016\",\n        startDate: new Date(\"2016-06-01\"),\n        description: [\n            \"Created editorial videography and photography for national news broadcasts and web ads, including advertisements for Mitsubishi and Harvey Norman.\"\n        ]\n    },\n    {\n        type: \"experience\",\n        title: \"Multimedia Intern\",\n        organization: \"Cauldron Studios, Dublin City, Ireland\",\n        period: \"June 2013 - September 2013\",\n        startDate: new Date(\"2013-06-01\"),\n        description: [\n            \"Created editorial videography and photography for national news broadcasts and web ads, including advertisements for Mitsubishi and Harvey Norman.\"\n        ]\n    },\n    {\n        type: \"education\",\n        title: \"New Frontiers Program\",\n        organization: \"Technological University Dublin\",\n        period: \"November 2022 - May 2023\",\n        description: [\n            \"Fundamentals of IT and Web Technologies\"\n        ],\n        startDate: new Date(\"2022-11-01\")\n    },\n    {\n        type: \"education\",\n        title: \"Level 8 Certificate in Computer Programming\",\n        organization: \"Dublin City University\",\n        period: \"September 2020 - June 2021\",\n        description: [\n            \"Fundamentals of IT and Web Technologies\"\n        ],\n        startDate: new Date(\"2020-09-01\")\n    },\n    {\n        type: \"education\",\n        title: \"Advanced Diploma in Digital Marketing and Social Media\",\n        organization: \"Waterford Institute of Technology\",\n        period: \"September 2018 - June 2019\",\n        description: [\n            \"Google Analytics\"\n        ],\n        startDate: new Date(\"2018-09-01\")\n    },\n    {\n        type: \"education\",\n        title: \"BA(Hons) in Visual Art Practise Digital Arts\",\n        organization: \"D\\xfan Laoghaire Institute of Art Design and Technology\",\n        period: \"September 2013 - June 2017\",\n        description: [\n            \"Thesis on Data Visualization\"\n        ],\n        startDate: new Date(\"2013-09-01\")\n    },\n    {\n        type: \"education\",\n        title: \"Leaving Certificate\",\n        organization: \"Belvedere College SJ\",\n        period: \"September 2004 - June 2011\",\n        description: [\n            \"Completed secondary education with a focus on [list relevant subjects or achievements if any]\"\n        ],\n        startDate: new Date(\"2004-09-01\")\n    }\n];\nconst Timeline = ()=>{\n    _s();\n    const timelineRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    timelineData.sort((a, b)=>b.startDate.getTime() - a.startDate.getTime());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Timeline | Tom Garretts Portfolio\"\n                }, void 0, false, {\n                    fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                    lineNumber: 155,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                lineNumber: 154,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-bold my-4 color-white\",\n                            children: \"Timeline\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                            lineNumber: 160,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"timeline\",\n                        children: timelineData.map((entry, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TimelineItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                type: entry.type,\n                                title: entry.title,\n                                organization: entry.organization,\n                                period: entry.period,\n                                description: entry.description,\n                                projectLink: entry.type === \"experience\" ? entry.projectLink : undefined,\n                                align: index % 2 === 0 ? \"left\" : \"right\"\n                            }, index, false, {\n                                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                                lineNumber: 164,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                        lineNumber: 162,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                lineNumber: 177,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Timeline, \"Uu5kIH1Su4OU3apL7DPPuLKXqS8=\");\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\nvar _c;\n$RefreshReg$(_c, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGltZWxpbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx5QkFBeUI7OztBQUdJO0FBQ2E7QUFDQTtBQUNZO0FBQ0w7QUFjakQsTUFBTU0sZUFBZ0M7SUFDbEM7UUFDSUMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsUUFBUTtRQUNSQyxXQUFXLElBQUlDLEtBQUs7UUFDcEJDLGFBQWE7WUFDWDtTQUNEO0lBQ0g7SUFDRjtRQUNJTixNQUFNO1FBQ05DLE9BQU87UUFDUEMsY0FBYztRQUNkQyxRQUFRO1FBQ1JDLFdBQVcsSUFBSUMsS0FBSztRQUNwQkMsYUFBYTtZQUNYO1NBQ0Q7SUFDSDtJQUNBO1FBQ0VOLE1BQU07UUFDTkMsT0FBTztRQUNQQyxjQUFjO1FBQ2RDLFFBQVE7UUFDUkMsV0FBVyxJQUFJQyxLQUFLO1FBQ3BCQyxhQUFhO1lBQ1g7U0FDRDtRQUNEQyxhQUFhO0lBQ2Y7SUFDQTtRQUNFUCxNQUFNO1FBQ05DLE9BQU87UUFDUEMsY0FBYztRQUNkQyxRQUFRO1FBQ1JDLFdBQVcsSUFBSUMsS0FBSztRQUNwQkMsYUFBYTtZQUNYO1NBQ0Q7UUFDREMsYUFBYTtJQUNmO0lBQ0E7UUFDRVAsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsUUFBUTtRQUNSQyxXQUFXLElBQUlDLEtBQUs7UUFDcEJDLGFBQWE7WUFDWDtTQUNEO1FBQ0RDLGFBQWE7SUFDZjtJQUNBO1FBQ0VQLE1BQU07UUFDTkMsT0FBTztRQUNQQyxjQUFjO1FBQ2RDLFFBQVE7UUFDUkMsV0FBVyxJQUFJQyxLQUFLO1FBQ3BCQyxhQUFhO1lBQ1g7U0FDRDtJQUNIO0lBQ0E7UUFDRU4sTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsUUFBUTtRQUNSQyxXQUFXLElBQUlDLEtBQUs7UUFDcEJDLGFBQWE7WUFDWDtTQUNEO0lBQ0g7SUFDQTtRQUNFTixNQUFNO1FBQ05DLE9BQU87UUFDUEMsY0FBYztRQUNkQyxRQUFRO1FBQ1JHLGFBQWE7WUFDWDtTQUNEO1FBQ0RGLFdBQVcsSUFBSUMsS0FBSztJQUN0QjtJQUNGO1FBQ0lMLE1BQU07UUFDTkMsT0FBTztRQUNQQyxjQUFjO1FBQ2RDLFFBQVE7UUFDUkcsYUFBYTtZQUNYO1NBQ0Q7UUFDREYsV0FBVyxJQUFJQyxLQUFLO0lBQ3RCO0lBQ0E7UUFDRUwsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsUUFBUTtRQUNSRyxhQUFhO1lBQ1g7U0FDRDtRQUNERixXQUFXLElBQUlDLEtBQUs7SUFDdEI7SUFDQTtRQUNFTCxNQUFNO1FBQ05DLE9BQU87UUFDUEMsY0FBYztRQUNkQyxRQUFRO1FBQ1JHLGFBQWE7WUFDWDtTQUNEO1FBQ0RGLFdBQVcsSUFBSUMsS0FBSztJQUN0QjtJQUNBO1FBQ0VMLE1BQU07UUFDTkMsT0FBTztRQUNQQyxjQUFjO1FBQ2RDLFFBQVE7UUFDUkcsYUFBYTtZQUNYO1NBQ0Q7UUFDREYsV0FBVyxJQUFJQyxLQUFLO0lBQ3RCO0NBQ0g7QUFHSCxNQUFNRyxXQUFxQjs7SUFDekIsTUFBTUMsY0FBY1gsNkNBQU1BLENBQUM7SUFDM0JDLGFBQWFXLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxFQUFFUixTQUFTLENBQUNTLE9BQU8sS0FBS0YsRUFBRVAsU0FBUyxDQUFDUyxPQUFPO0lBQ3ZFLHFCQUNFOzswQkFDRSw4REFBQ3BCLGtEQUFJQTswQkFDSCw0RUFBQ1E7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDUCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDb0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDZiw0RUFBQ0M7NEJBQUdELFdBQVU7c0NBQXNDOzs7Ozs7Ozs7OztrQ0FFcEQsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNaaEIsYUFBYWtCLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDeEIsOERBQUN2QixnRUFBWUE7Z0NBRVhJLE1BQU1rQixNQUFNbEIsSUFBSTtnQ0FDaEJDLE9BQU9pQixNQUFNakIsS0FBSztnQ0FDbEJDLGNBQWNnQixNQUFNaEIsWUFBWTtnQ0FDaENDLFFBQVFlLE1BQU1mLE1BQU07Z0NBQ3BCRyxhQUFhWSxNQUFNWixXQUFXO2dDQUM5QkMsYUFBYVcsTUFBTWxCLElBQUksS0FBSyxlQUFla0IsTUFBTVgsV0FBVyxHQUFHYTtnQ0FDL0RDLE9BQU9GLFFBQVEsTUFBTSxJQUFJLFNBQVM7K0JBUDdCQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFZYiw4REFBQ3hCLDBEQUFNQTs7Ozs7OztBQUdiO0dBL0JNYTtLQUFBQTtBQWlDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdGltZWxpbmUudHN4PzBjNDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL3BhZ2VzL3RpbWVsaW5lLnRzeFxuXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBUaW1lbGluZUl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lbGluZUl0ZW0nO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnO1xuXG5cbnR5cGUgVGltZWxpbmVFbnRyeSA9IHtcbiAgdHlwZTogJ2V4cGVyaWVuY2UnIHwgJ2VkdWNhdGlvbic7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG9yZ2FuaXphdGlvbjogc3RyaW5nO1xuICBwZXJpb2Q6IHN0cmluZztcbiAgc3RhcnREYXRlOiBEYXRlO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nW107XG4gIHByb2plY3RMaW5rPzogc3RyaW5nO1xufTtcblxuY29uc3QgdGltZWxpbmVEYXRhOiBUaW1lbGluZUVudHJ5W10gPSBbXG4gICAge1xuICAgICAgICB0eXBlOiAnZXhwZXJpZW5jZScsXG4gICAgICAgIHRpdGxlOiBcIlNlbmlvciBEZXZlbG9wZXJcIixcbiAgICAgICAgb3JnYW5pemF0aW9uOiBcIklQT1AgRGlnaXRhbFwiLFxuICAgICAgICBwZXJpb2Q6IFwiT2N0b2JlciAyMDIzIC0gUHJlc2VudFwiLFxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDIzLTEwLTAxJyksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAgICAgXCJEZXNpZ25lZCwgZGV2ZWxvcGVkLCBhbmQgb3B0aW1pemVkIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgUnVieSBvbiBSYWlscyBmb3IgbXVsdGlwbGUgY2xpZW50cyBpbmNsdWRpbmcgYW4gQUktZHJpdmVuIHN0YXJ0dXAgR3Vlc3QgTnV0cml0aW9uLCBHb29kIFNwaXJ0aXosIGFuZCBDYXQgU25hcC5cIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAge1xuICAgICAgICB0eXBlOiAnZXhwZXJpZW5jZScsXG4gICAgICAgIHRpdGxlOiBcIlRlY2huaWNhbCBGb3VuZGVyXCIsXG4gICAgICAgIG9yZ2FuaXphdGlvbjogXCJEb2N1ZHluYW1pY3NcIixcbiAgICAgICAgcGVyaW9kOiBcIk5vdmVtYmVyIDIwMjIgLSBPY3RvYmVyIDIwMjNcIixcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyMi0xMS0wMScpLFxuICAgICAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgICAgIFwiRGVzaWduZWQsIGRldmVsb3BlZCwgYW5kIG9wdGltaXplZCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFJ1Ynkgb24gUmFpbHMgZm9yIG11bHRpcGxlIGNsaWVudHMgaW5jbHVkaW5nIGFuIEFJLWRyaXZlbiBzdGFydHVwIEd1ZXN0IE51dHJpdGlvbiwgR29vZCBTcGlydGl6LCBhbmQgQ2F0IFNuYXAuXCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnZXhwZXJpZW5jZScsXG4gICAgICAgIHRpdGxlOiBcIkxlYWQgRGV2ZWxvcGVyXCIsXG4gICAgICAgIG9yZ2FuaXphdGlvbjogXCJQZW5jbywgRHVibGluIENpdHksIElyZWxhbmRcIixcbiAgICAgICAgcGVyaW9kOiBcIkRlY2VtYmVyIDIwMTkgLSBOb3ZlbWJlciAyMDIyXCIsXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMTktMTItMDEnKSxcbiAgICAgICAgZGVzY3JpcHRpb246IFtcbiAgICAgICAgICBcIlByb21vdGVkIHRvIGEgbW9yZSBzZW5pb3Igcm9sZSB3aXRoaW4gdGhlIGRpZ2l0YWwgdGVhbSBhZnRlciBkZW1vbnN0cmF0aW5nIGV4Y2VwdGlvbmFsIHBlcmZvcm1hbmNlIGluIHNvZnR3YXJlIGRldmVsb3BtZW50IGFuZCB0ZWFtIGNvbW11bmljYXRpb24uXCIsXG4gICAgICAgIF0sXG4gICAgICAgIHByb2plY3RMaW5rOiBcImh0dHBzOi8vd2hpY2htb3J0Z2FnZS5pZVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2V4cGVyaWVuY2UnLFxuICAgICAgICB0aXRsZTogXCJGcm9udCBFbmQgRGV2ZWxvcGVyXCIsXG4gICAgICAgIG9yZ2FuaXphdGlvbjogXCJHYW1ibGluZy5jb20gR3JvdXAsIER1YmxpbiBDaXR5LCBJcmVsYW5kXCIsXG4gICAgICAgIHBlcmlvZDogXCJKYW51YXJ5IDIwMTkgLSBEZWNlbWJlciAyMDE5XCIsXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMTktMDEtMDEnKSxcbiAgICAgICAgZGVzY3JpcHRpb246IFtcbiAgICAgICAgICBcIldvcmtlZCBhcyBwYXJ0IG9mIGEgcHJvZHVjdCBkZXZlbG9wbWVudCB0ZWFtIGZvY3VzaW5nIG9uIGZyb250ZW5kIGRldmVsb3BtZW50IHVzaW5nIFJ1Ynkgb24gUmFpbHMsIEpTLCBIVE1MLCBhbmQgQ1NTLlwiLFxuICAgICAgICBdLFxuICAgICAgICBwcm9qZWN0TGluazogXCJodHRwczovL2dhbWJsaW5nLmNvbVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2V4cGVyaWVuY2UnLFxuICAgICAgICB0aXRsZTogXCJVWC9VSSBEZXNpZ25lclwiLFxuICAgICAgICBvcmdhbml6YXRpb246IFwiR1JJRCBGaW5hbmNlLCBEdWJsaW4gQ2l0eSwgSXJlbGFuZFwiLFxuICAgICAgICBwZXJpb2Q6IFwiSnVuZSAyMDE4IC0gSmFudWFyeSAyMDE5XCIsXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMTgtMDYtMDEnKSxcbiAgICAgICAgZGVzY3JpcHRpb246IFtcbiAgICAgICAgICBcIkNyZWF0ZWQgZWZmZWN0aXZlIFVYL1VJIGRlc2lnbnMgdXNpbmcgdGhlIFNrZXRjaCBhcHAuXCIsXG4gICAgICAgIF0sXG4gICAgICAgIHByb2plY3RMaW5rOiBcImh0dHBzOi8vZ3JpZGZpbmFuY2UuaWVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdleHBlcmllbmNlJyxcbiAgICAgICAgdGl0bGU6IFwiTXVsdGltZWRpYSBEZXNpZ25lclwiLFxuICAgICAgICBvcmdhbml6YXRpb246IFwiQXNzb2NpYXRlZCBOZXdzcGFwZXJzLCBEdWJsaW4gQ2l0eSwgSXJlbGFuZFwiLFxuICAgICAgICBwZXJpb2Q6IFwiSnVuZSAyMDE2IC0gU2VwdGVtYmVyIDIwMTZcIixcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAxNi0wNi0wMScpLFxuICAgICAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgICAgIFwiQ3JlYXRlZCBlZGl0b3JpYWwgdmlkZW9ncmFwaHkgYW5kIHBob3RvZ3JhcGh5IGZvciBuYXRpb25hbCBuZXdzIGJyb2FkY2FzdHMgYW5kIHdlYiBhZHMsIGluY2x1ZGluZyBhZHZlcnRpc2VtZW50cyBmb3IgTWl0c3ViaXNoaSBhbmQgSGFydmV5IE5vcm1hbi5cIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdleHBlcmllbmNlJyxcbiAgICAgICAgdGl0bGU6IFwiTXVsdGltZWRpYSBJbnRlcm5cIixcbiAgICAgICAgb3JnYW5pemF0aW9uOiBcIkNhdWxkcm9uIFN0dWRpb3MsIER1YmxpbiBDaXR5LCBJcmVsYW5kXCIsXG4gICAgICAgIHBlcmlvZDogXCJKdW5lIDIwMTMgLSBTZXB0ZW1iZXIgMjAxM1wiLFxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDEzLTA2LTAxJyksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAgICAgXCJDcmVhdGVkIGVkaXRvcmlhbCB2aWRlb2dyYXBoeSBhbmQgcGhvdG9ncmFwaHkgZm9yIG5hdGlvbmFsIG5ld3MgYnJvYWRjYXN0cyBhbmQgd2ViIGFkcywgaW5jbHVkaW5nIGFkdmVydGlzZW1lbnRzIGZvciBNaXRzdWJpc2hpIGFuZCBIYXJ2ZXkgTm9ybWFuLlwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2VkdWNhdGlvbicsXG4gICAgICAgIHRpdGxlOiBcIk5ldyBGcm9udGllcnMgUHJvZ3JhbVwiLFxuICAgICAgICBvcmdhbml6YXRpb246IFwiVGVjaG5vbG9naWNhbCBVbml2ZXJzaXR5IER1YmxpblwiLFxuICAgICAgICBwZXJpb2Q6IFwiTm92ZW1iZXIgMjAyMiAtIE1heSAyMDIzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAgICAgXCJGdW5kYW1lbnRhbHMgb2YgSVQgYW5kIFdlYiBUZWNobm9sb2dpZXNcIixcbiAgICAgICAgXSxcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyMi0xMS0wMScpLFxuICAgICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6ICdlZHVjYXRpb24nLFxuICAgICAgICB0aXRsZTogXCJMZXZlbCA4IENlcnRpZmljYXRlIGluIENvbXB1dGVyIFByb2dyYW1taW5nXCIsXG4gICAgICAgIG9yZ2FuaXphdGlvbjogXCJEdWJsaW4gQ2l0eSBVbml2ZXJzaXR5XCIsXG4gICAgICAgIHBlcmlvZDogXCJTZXB0ZW1iZXIgMjAyMCAtIEp1bmUgMjAyMVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgICAgIFwiRnVuZGFtZW50YWxzIG9mIElUIGFuZCBXZWIgVGVjaG5vbG9naWVzXCIsXG4gICAgICAgIF0sXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjAtMDktMDEnKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdlZHVjYXRpb24nLFxuICAgICAgICB0aXRsZTogXCJBZHZhbmNlZCBEaXBsb21hIGluIERpZ2l0YWwgTWFya2V0aW5nIGFuZCBTb2NpYWwgTWVkaWFcIixcbiAgICAgICAgb3JnYW5pemF0aW9uOiBcIldhdGVyZm9yZCBJbnN0aXR1dGUgb2YgVGVjaG5vbG9neVwiLFxuICAgICAgICBwZXJpb2Q6IFwiU2VwdGVtYmVyIDIwMTggLSBKdW5lIDIwMTlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFtcbiAgICAgICAgICBcIkdvb2dsZSBBbmFseXRpY3NcIixcbiAgICAgICAgXSxcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAxOC0wOS0wMScpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2VkdWNhdGlvbicsXG4gICAgICAgIHRpdGxlOiBcIkJBKEhvbnMpIGluIFZpc3VhbCBBcnQgUHJhY3Rpc2UgRGlnaXRhbCBBcnRzXCIsXG4gICAgICAgIG9yZ2FuaXphdGlvbjogXCJEw7puIExhb2doYWlyZSBJbnN0aXR1dGUgb2YgQXJ0IERlc2lnbiBhbmQgVGVjaG5vbG9neVwiLFxuICAgICAgICBwZXJpb2Q6IFwiU2VwdGVtYmVyIDIwMTMgLSBKdW5lIDIwMTdcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFtcbiAgICAgICAgICBcIlRoZXNpcyBvbiBEYXRhIFZpc3VhbGl6YXRpb25cIixcbiAgICAgICAgXSxcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAxMy0wOS0wMScpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2VkdWNhdGlvbicsXG4gICAgICAgIHRpdGxlOiBcIkxlYXZpbmcgQ2VydGlmaWNhdGVcIixcbiAgICAgICAgb3JnYW5pemF0aW9uOiBcIkJlbHZlZGVyZSBDb2xsZWdlIFNKXCIsXG4gICAgICAgIHBlcmlvZDogXCJTZXB0ZW1iZXIgMjAwNCAtIEp1bmUgMjAxMVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgICAgIFwiQ29tcGxldGVkIHNlY29uZGFyeSBlZHVjYXRpb24gd2l0aCBhIGZvY3VzIG9uIFtsaXN0IHJlbGV2YW50IHN1YmplY3RzIG9yIGFjaGlldmVtZW50cyBpZiBhbnldXCJcbiAgICAgICAgXSxcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAwNC0wOS0wMScpLFxuICAgICAgfSxcbiAgXTsgIFxuICBcblxuY29uc3QgVGltZWxpbmU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB0aW1lbGluZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgdGltZWxpbmVEYXRhLnNvcnQoKGEsIGIpID0+IGIuc3RhcnREYXRlLmdldFRpbWUoKSAtIGEuc3RhcnREYXRlLmdldFRpbWUoKSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGltZWxpbmUgfCBUb20gR2FycmV0dHMgUG9ydGZvbGlvPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG15LTQgY29sb3Itd2hpdGVcIj5UaW1lbGluZTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lXCI+XG4gICAgICAgICAge3RpbWVsaW5lRGF0YS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFRpbWVsaW5lSXRlbVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICB0eXBlPXtlbnRyeS50eXBlfVxuICAgICAgICAgICAgICB0aXRsZT17ZW50cnkudGl0bGV9XG4gICAgICAgICAgICAgIG9yZ2FuaXphdGlvbj17ZW50cnkub3JnYW5pemF0aW9ufVxuICAgICAgICAgICAgICBwZXJpb2Q9e2VudHJ5LnBlcmlvZH1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2VudHJ5LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBwcm9qZWN0TGluaz17ZW50cnkudHlwZSA9PT0gJ2V4cGVyaWVuY2UnID8gZW50cnkucHJvamVjdExpbmsgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGFsaWduPXtpbmRleCAlIDIgPT09IDAgPyAnbGVmdCcgOiAncmlnaHQnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJOYXZiYXIiLCJGb290ZXIiLCJUaW1lbGluZUl0ZW0iLCJSZWFjdCIsInVzZVJlZiIsInRpbWVsaW5lRGF0YSIsInR5cGUiLCJ0aXRsZSIsIm9yZ2FuaXphdGlvbiIsInBlcmlvZCIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJkZXNjcmlwdGlvbiIsInByb2plY3RMaW5rIiwiVGltZWxpbmUiLCJ0aW1lbGluZVJlZiIsInNvcnQiLCJhIiwiYiIsImdldFRpbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImVudHJ5IiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJhbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/timeline.tsx\n"));

/***/ })

});