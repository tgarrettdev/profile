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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _components_TimelineItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TimelineItem */ \"./src/components/TimelineItem.tsx\");\n// src/pages/timeline.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst timelineData = [\n    {\n        type: \"experience\",\n        title: \"Senior Developer\",\n        organization: \"IPOP Digital\",\n        period: \"October 2023 - Present\",\n        startDate: new Date(\"2023-10-01\"),\n        description: [\n            \"Designed, developed, and optimized web applications using Ruby on Rails for multiple clients including an AI-driven startup Guest Nutrition, Good Spirtiz, and Cat Snap.\"\n        ]\n    },\n    {\n        type: \"experience\",\n        title: \"Technical Founder\",\n        organization: \"Docudynamics\",\n        period: \"November 2022 - October 2023\",\n        startDate: new Date(\"2022-11-01\"),\n        description: [\n            \"Designed, developed, and optimized web applications using Ruby on Rails for multiple clients including an AI-driven startup Guest Nutrition, Good Spirtiz, and Cat Snap.\"\n        ]\n    },\n    {\n        type: \"experience\",\n        title: \"Lead Developer\",\n        organization: \"Penco, Dublin City, Ireland\",\n        period: \"December 2019 - November 2022\",\n        startDate: new Date(\"2019-12-01\"),\n        description: [\n            \"Promoted to a more senior role within the digital team after demonstrating exceptional performance in software development and team communication.\"\n        ],\n        projectLink: \"https://whichmortgage.ie\"\n    },\n    {\n        type: \"experience\",\n        title: \"Front End Developer\",\n        organization: \"Gambling.com Group, Dublin City, Ireland\",\n        period: \"January 2019 - December 2019\",\n        startDate: new Date(\"2019-01-01\"),\n        description: [\n            \"Worked as part of a product development team focusing on frontend development using Ruby on Rails, JS, HTML, and CSS.\"\n        ],\n        projectLink: \"https://gambling.com\"\n    },\n    {\n        type: \"experience\",\n        title: \"UX/UI Designer\",\n        organization: \"GRID Finance, Dublin City, Ireland\",\n        period: \"June 2018 - January 2019\",\n        startDate: new Date(\"2018-06-01\"),\n        description: [\n            \"Created effective UX/UI designs using the Sketch app.\"\n        ],\n        projectLink: \"https://gridfinance.ie\"\n    },\n    {\n        type: \"experience\",\n        title: \"Multimedia Designer\",\n        organization: \"Associated Newspapers, Dublin City, Ireland\",\n        period: \"June 2016 - September 2016\",\n        startDate: new Date(\"2016-06-01\"),\n        description: [\n            \"Created editorial videography and photography for national news broadcasts and web ads, including advertisements for Mitsubishi and Harvey Norman.\"\n        ]\n    },\n    {\n        type: \"experience\",\n        title: \"Multimedia Intern\",\n        organization: \"Cauldron Studios, Dublin City, Ireland\",\n        period: \"June 2013 - September 2013\",\n        startDate: new Date(\"2013-06-01\"),\n        description: [\n            \"Created editorial videography and photography for national news broadcasts and web ads, including advertisements for Mitsubishi and Harvey Norman.\"\n        ]\n    },\n    {\n        type: \"education\",\n        title: \"New Frontiers Program\",\n        organization: \"Technological University Dublin\",\n        period: \"November 2022 - May 2023\",\n        description: [\n            \"Fundamentals of IT and Web Technologies\"\n        ],\n        startDate: new Date(\"2022-11-01\")\n    },\n    {\n        type: \"education\",\n        title: \"Level 8 Certificate in Computer Programming\",\n        organization: \"Dublin City University\",\n        period: \"September 2020 - June 2021\",\n        description: [\n            \"Fundamentals of IT and Web Technologies\"\n        ],\n        startDate: new Date(\"2020-09-01\")\n    },\n    {\n        type: \"education\",\n        title: \"Advanced Diploma in Digital Marketing and Social Media\",\n        organization: \"Waterford Institute of Technology\",\n        period: \"September 2018 - June 2019\",\n        description: [\n            \"Google Analytics\"\n        ],\n        startDate: new Date(\"2018-09-01\")\n    },\n    {\n        type: \"education\",\n        title: \"BA(Hons) in Visual Art Practise Digital Arts\",\n        organization: \"D\\xfan Laoghaire Institute of Art Design and Technology\",\n        period: \"September 2013 - June 2017\",\n        description: [\n            \"Thesis on Data Visualization\"\n        ],\n        startDate: new Date(\"2013-09-01\")\n    },\n    {\n        type: \"education\",\n        title: \"Leaving Certificate\",\n        organization: \"Belvedere College SJ\",\n        period: \"September 2004 - June 2011\",\n        description: [\n            \"Completed secondary education with a focus on [list relevant subjects or achievements if any]\"\n        ],\n        startDate: new Date(\"2004-09-01\")\n    }\n];\nconst Timeline = ()=>{\n    _s();\n    const timelineRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (timelineRef.current) {\n            // GSAP animation\n            const tl = gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.timeline();\n            tl.fromTo(timelineRef.current.children, {\n                y: 30,\n                opacity: 0\n            }, {\n                y: 0,\n                opacity: 1,\n                stagger: 0.15,\n                duration: 0.8,\n                ease: \"power3.out\"\n            });\n        }\n    }, []);\n    timelineData.sort((a, b)=>b.startDate.getTime() - a.startDate.getTime());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Timeline | Tom Garretts Portfolio\"\n                }, void 0, false, {\n                    fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                    lineNumber: 166,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                lineNumber: 165,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                lineNumber: 168,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-bold my-4 color-white\",\n                            children: \"Timeline\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                            lineNumber: 171,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                        lineNumber: 170,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"timeline\",\n                        children: timelineData.map((entry, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TimelineItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                type: entry.type,\n                                title: entry.title,\n                                organization: entry.organization,\n                                period: entry.period,\n                                description: entry.description,\n                                projectLink: entry.type === \"experience\" ? entry.projectLink : undefined,\n                                align: index % 2 === 0 ? \"left\" : \"right\"\n                            }, index, false, {\n                                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                                lineNumber: 175,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                        lineNumber: 173,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/timeline.tsx\",\n                lineNumber: 188,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Timeline, \"WmRWskDcavl+TiZbRmI3th3R+g4=\");\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\nvar _c;\n$RefreshReg$(_c, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJBQ0gsNEVBQUNNOzhCQUFNOzs7Ozs7Ozs7OzswQkFFVCw4REFBQ0wsMERBQU1BOzs7OzswQkFDUCw4REFBQzRCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUNDOzRCQUFHRCxXQUFVO3NDQUFzQzs7Ozs7Ozs7Ozs7a0NBRXBELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWjFCLGFBQWE0QixHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ3hCLDhEQUFDL0IsZ0VBQVlBO2dDQUVYRSxNQUFNNEIsTUFBTTVCLElBQUk7Z0NBQ2hCQyxPQUFPMkIsTUFBTTNCLEtBQUs7Z0NBQ2xCQyxjQUFjMEIsTUFBTTFCLFlBQVk7Z0NBQ2hDQyxRQUFReUIsTUFBTXpCLE1BQU07Z0NBQ3BCRyxhQUFhc0IsTUFBTXRCLFdBQVc7Z0NBQzlCQyxhQUFhcUIsTUFBTTVCLElBQUksS0FBSyxlQUFlNEIsTUFBTXJCLFdBQVcsR0FBR3VCO2dDQUMvREMsT0FBT0YsUUFBUSxNQUFNLElBQUksU0FBUzsrQkFQN0JBOzs7Ozs7Ozs7Ozs7Ozs7OzBCQVliLDhEQUFDaEMsMERBQU1BOzs7Ozs7O0FBR2I7R0EzQ1FXO0tBQUFBO0FBNkNSLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90aW1lbGluZS50c3g/MGM0OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvcGFnZXMvdGltZWxpbmUudHN4XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IFRpbWVsaW5lSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL1RpbWVsaW5lSXRlbSc7XG5cblxudHlwZSBUaW1lbGluZUVudHJ5ID0ge1xuICB0eXBlOiAnZXhwZXJpZW5jZScgfCAnZWR1Y2F0aW9uJztcbiAgdGl0bGU6IHN0cmluZztcbiAgb3JnYW5pemF0aW9uOiBzdHJpbmc7XG4gIHBlcmlvZDogc3RyaW5nO1xuICBzdGFydERhdGU6IERhdGU7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdbXTtcbiAgcHJvamVjdExpbms/OiBzdHJpbmc7XG59O1xuXG5jb25zdCB0aW1lbGluZURhdGE6IFRpbWVsaW5lRW50cnlbXSA9IFtcbiAgICB7XG4gICAgICAgIHR5cGU6ICdleHBlcmllbmNlJyxcbiAgICAgICAgdGl0bGU6IFwiU2VuaW9yIERldmVsb3BlclwiLFxuICAgICAgICBvcmdhbml6YXRpb246IFwiSVBPUCBEaWdpdGFsXCIsXG4gICAgICAgIHBlcmlvZDogXCJPY3RvYmVyIDIwMjMgLSBQcmVzZW50XCIsXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjMtMTAtMDEnKSxcbiAgICAgICAgZGVzY3JpcHRpb246IFtcbiAgICAgICAgICBcIkRlc2lnbmVkLCBkZXZlbG9wZWQsIGFuZCBvcHRpbWl6ZWQgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBSdWJ5IG9uIFJhaWxzIGZvciBtdWx0aXBsZSBjbGllbnRzIGluY2x1ZGluZyBhbiBBSS1kcml2ZW4gc3RhcnR1cCBHdWVzdCBOdXRyaXRpb24sIEdvb2QgU3BpcnRpeiwgYW5kIENhdCBTbmFwLlwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6ICdleHBlcmllbmNlJyxcbiAgICAgICAgdGl0bGU6IFwiVGVjaG5pY2FsIEZvdW5kZXJcIixcbiAgICAgICAgb3JnYW5pemF0aW9uOiBcIkRvY3VkeW5hbWljc1wiLFxuICAgICAgICBwZXJpb2Q6IFwiTm92ZW1iZXIgMjAyMiAtIE9jdG9iZXIgMjAyM1wiLFxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDIyLTExLTAxJyksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAgICAgXCJEZXNpZ25lZCwgZGV2ZWxvcGVkLCBhbmQgb3B0aW1pemVkIHdlYiBhcHBsaWNhdGlvbnMgdXNpbmcgUnVieSBvbiBSYWlscyBmb3IgbXVsdGlwbGUgY2xpZW50cyBpbmNsdWRpbmcgYW4gQUktZHJpdmVuIHN0YXJ0dXAgR3Vlc3QgTnV0cml0aW9uLCBHb29kIFNwaXJ0aXosIGFuZCBDYXQgU25hcC5cIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdleHBlcmllbmNlJyxcbiAgICAgICAgdGl0bGU6IFwiTGVhZCBEZXZlbG9wZXJcIixcbiAgICAgICAgb3JnYW5pemF0aW9uOiBcIlBlbmNvLCBEdWJsaW4gQ2l0eSwgSXJlbGFuZFwiLFxuICAgICAgICBwZXJpb2Q6IFwiRGVjZW1iZXIgMjAxOSAtIE5vdmVtYmVyIDIwMjJcIixcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAxOS0xMi0wMScpLFxuICAgICAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgICAgIFwiUHJvbW90ZWQgdG8gYSBtb3JlIHNlbmlvciByb2xlIHdpdGhpbiB0aGUgZGlnaXRhbCB0ZWFtIGFmdGVyIGRlbW9uc3RyYXRpbmcgZXhjZXB0aW9uYWwgcGVyZm9ybWFuY2UgaW4gc29mdHdhcmUgZGV2ZWxvcG1lbnQgYW5kIHRlYW0gY29tbXVuaWNhdGlvbi5cIixcbiAgICAgICAgXSxcbiAgICAgICAgcHJvamVjdExpbms6IFwiaHR0cHM6Ly93aGljaG1vcnRnYWdlLmllXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnZXhwZXJpZW5jZScsXG4gICAgICAgIHRpdGxlOiBcIkZyb250IEVuZCBEZXZlbG9wZXJcIixcbiAgICAgICAgb3JnYW5pemF0aW9uOiBcIkdhbWJsaW5nLmNvbSBHcm91cCwgRHVibGluIENpdHksIElyZWxhbmRcIixcbiAgICAgICAgcGVyaW9kOiBcIkphbnVhcnkgMjAxOSAtIERlY2VtYmVyIDIwMTlcIixcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAxOS0wMS0wMScpLFxuICAgICAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgICAgIFwiV29ya2VkIGFzIHBhcnQgb2YgYSBwcm9kdWN0IGRldmVsb3BtZW50IHRlYW0gZm9jdXNpbmcgb24gZnJvbnRlbmQgZGV2ZWxvcG1lbnQgdXNpbmcgUnVieSBvbiBSYWlscywgSlMsIEhUTUwsIGFuZCBDU1MuXCIsXG4gICAgICAgIF0sXG4gICAgICAgIHByb2plY3RMaW5rOiBcImh0dHBzOi8vZ2FtYmxpbmcuY29tXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnZXhwZXJpZW5jZScsXG4gICAgICAgIHRpdGxlOiBcIlVYL1VJIERlc2lnbmVyXCIsXG4gICAgICAgIG9yZ2FuaXphdGlvbjogXCJHUklEIEZpbmFuY2UsIER1YmxpbiBDaXR5LCBJcmVsYW5kXCIsXG4gICAgICAgIHBlcmlvZDogXCJKdW5lIDIwMTggLSBKYW51YXJ5IDIwMTlcIixcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAxOC0wNi0wMScpLFxuICAgICAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgICAgIFwiQ3JlYXRlZCBlZmZlY3RpdmUgVVgvVUkgZGVzaWducyB1c2luZyB0aGUgU2tldGNoIGFwcC5cIixcbiAgICAgICAgXSxcbiAgICAgICAgcHJvamVjdExpbms6IFwiaHR0cHM6Ly9ncmlkZmluYW5jZS5pZVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2V4cGVyaWVuY2UnLFxuICAgICAgICB0aXRsZTogXCJNdWx0aW1lZGlhIERlc2lnbmVyXCIsXG4gICAgICAgIG9yZ2FuaXphdGlvbjogXCJBc3NvY2lhdGVkIE5ld3NwYXBlcnMsIER1YmxpbiBDaXR5LCBJcmVsYW5kXCIsXG4gICAgICAgIHBlcmlvZDogXCJKdW5lIDIwMTYgLSBTZXB0ZW1iZXIgMjAxNlwiLFxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDE2LTA2LTAxJyksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAgICAgXCJDcmVhdGVkIGVkaXRvcmlhbCB2aWRlb2dyYXBoeSBhbmQgcGhvdG9ncmFwaHkgZm9yIG5hdGlvbmFsIG5ld3MgYnJvYWRjYXN0cyBhbmQgd2ViIGFkcywgaW5jbHVkaW5nIGFkdmVydGlzZW1lbnRzIGZvciBNaXRzdWJpc2hpIGFuZCBIYXJ2ZXkgTm9ybWFuLlwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2V4cGVyaWVuY2UnLFxuICAgICAgICB0aXRsZTogXCJNdWx0aW1lZGlhIEludGVyblwiLFxuICAgICAgICBvcmdhbml6YXRpb246IFwiQ2F1bGRyb24gU3R1ZGlvcywgRHVibGluIENpdHksIElyZWxhbmRcIixcbiAgICAgICAgcGVyaW9kOiBcIkp1bmUgMjAxMyAtIFNlcHRlbWJlciAyMDEzXCIsXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMTMtMDYtMDEnKSxcbiAgICAgICAgZGVzY3JpcHRpb246IFtcbiAgICAgICAgICBcIkNyZWF0ZWQgZWRpdG9yaWFsIHZpZGVvZ3JhcGh5IGFuZCBwaG90b2dyYXBoeSBmb3IgbmF0aW9uYWwgbmV3cyBicm9hZGNhc3RzIGFuZCB3ZWIgYWRzLCBpbmNsdWRpbmcgYWR2ZXJ0aXNlbWVudHMgZm9yIE1pdHN1YmlzaGkgYW5kIEhhcnZleSBOb3JtYW4uXCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnZWR1Y2F0aW9uJyxcbiAgICAgICAgdGl0bGU6IFwiTmV3IEZyb250aWVycyBQcm9ncmFtXCIsXG4gICAgICAgIG9yZ2FuaXphdGlvbjogXCJUZWNobm9sb2dpY2FsIFVuaXZlcnNpdHkgRHVibGluXCIsXG4gICAgICAgIHBlcmlvZDogXCJOb3ZlbWJlciAyMDIyIC0gTWF5IDIwMjNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFtcbiAgICAgICAgICBcIkZ1bmRhbWVudGFscyBvZiBJVCBhbmQgV2ViIFRlY2hub2xvZ2llc1wiLFxuICAgICAgICBdLFxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDIyLTExLTAxJyksXG4gICAgICB9LFxuICAgIHtcbiAgICAgICAgdHlwZTogJ2VkdWNhdGlvbicsXG4gICAgICAgIHRpdGxlOiBcIkxldmVsIDggQ2VydGlmaWNhdGUgaW4gQ29tcHV0ZXIgUHJvZ3JhbW1pbmdcIixcbiAgICAgICAgb3JnYW5pemF0aW9uOiBcIkR1YmxpbiBDaXR5IFVuaXZlcnNpdHlcIixcbiAgICAgICAgcGVyaW9kOiBcIlNlcHRlbWJlciAyMDIwIC0gSnVuZSAyMDIxXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAgICAgXCJGdW5kYW1lbnRhbHMgb2YgSVQgYW5kIFdlYiBUZWNobm9sb2dpZXNcIixcbiAgICAgICAgXSxcbiAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyMC0wOS0wMScpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ2VkdWNhdGlvbicsXG4gICAgICAgIHRpdGxlOiBcIkFkdmFuY2VkIERpcGxvbWEgaW4gRGlnaXRhbCBNYXJrZXRpbmcgYW5kIFNvY2lhbCBNZWRpYVwiLFxuICAgICAgICBvcmdhbml6YXRpb246IFwiV2F0ZXJmb3JkIEluc3RpdHV0ZSBvZiBUZWNobm9sb2d5XCIsXG4gICAgICAgIHBlcmlvZDogXCJTZXB0ZW1iZXIgMjAxOCAtIEp1bmUgMjAxOVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgICAgIFwiR29vZ2xlIEFuYWx5dGljc1wiLFxuICAgICAgICBdLFxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDE4LTA5LTAxJyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnZWR1Y2F0aW9uJyxcbiAgICAgICAgdGl0bGU6IFwiQkEoSG9ucykgaW4gVmlzdWFsIEFydCBQcmFjdGlzZSBEaWdpdGFsIEFydHNcIixcbiAgICAgICAgb3JnYW5pemF0aW9uOiBcIkTDum4gTGFvZ2hhaXJlIEluc3RpdHV0ZSBvZiBBcnQgRGVzaWduIGFuZCBUZWNobm9sb2d5XCIsXG4gICAgICAgIHBlcmlvZDogXCJTZXB0ZW1iZXIgMjAxMyAtIEp1bmUgMjAxN1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgICAgIFwiVGhlc2lzIG9uIERhdGEgVmlzdWFsaXphdGlvblwiLFxuICAgICAgICBdLFxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDEzLTA5LTAxJyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnZWR1Y2F0aW9uJyxcbiAgICAgICAgdGl0bGU6IFwiTGVhdmluZyBDZXJ0aWZpY2F0ZVwiLFxuICAgICAgICBvcmdhbml6YXRpb246IFwiQmVsdmVkZXJlIENvbGxlZ2UgU0pcIixcbiAgICAgICAgcGVyaW9kOiBcIlNlcHRlbWJlciAyMDA0IC0gSnVuZSAyMDExXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAgICAgXCJDb21wbGV0ZWQgc2Vjb25kYXJ5IGVkdWNhdGlvbiB3aXRoIGEgZm9jdXMgb24gW2xpc3QgcmVsZXZhbnQgc3ViamVjdHMgb3IgYWNoaWV2ZW1lbnRzIGlmIGFueV1cIlxuICAgICAgICBdLFxuICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDA0LTA5LTAxJyksXG4gICAgICB9LFxuICBdOyAgXG4gIFxuXG4gIGNvbnN0IFRpbWVsaW5lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB0aW1lbGluZVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodGltZWxpbmVSZWYuY3VycmVudCkge1xuICAgICAgICAgIC8vIEdTQVAgYW5pbWF0aW9uXG4gICAgICAgICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG4gICAgICAgICAgdGwuZnJvbVRvKHRpbWVsaW5lUmVmLmN1cnJlbnQuY2hpbGRyZW4sIFxuICAgICAgICAgICAgeyB5OiAzMCwgb3BhY2l0eTogMCB9LFxuICAgICAgICAgICAgeyB5OiAwLCBvcGFjaXR5OiAxLCBzdGFnZ2VyOiAwLjE1LCBkdXJhdGlvbjogMC44LCBlYXNlOiBcInBvd2VyMy5vdXRcIiB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwgW10pO1xuICAgIFxuICAgICAgdGltZWxpbmVEYXRhLnNvcnQoKGEsIGIpID0+IGIuc3RhcnREYXRlLmdldFRpbWUoKSAtIGEuc3RhcnREYXRlLmdldFRpbWUoKSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGltZWxpbmUgfCBUb20gR2FycmV0dHMgUG9ydGZvbGlvPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG15LTQgY29sb3Itd2hpdGVcIj5UaW1lbGluZTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lXCI+XG4gICAgICAgICAge3RpbWVsaW5lRGF0YS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFRpbWVsaW5lSXRlbVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICB0eXBlPXtlbnRyeS50eXBlfVxuICAgICAgICAgICAgICB0aXRsZT17ZW50cnkudGl0bGV9XG4gICAgICAgICAgICAgIG9yZ2FuaXphdGlvbj17ZW50cnkub3JnYW5pemF0aW9ufVxuICAgICAgICAgICAgICBwZXJpb2Q9e2VudHJ5LnBlcmlvZH1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2VudHJ5LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBwcm9qZWN0TGluaz17ZW50cnkudHlwZSA9PT0gJ2V4cGVyaWVuY2UnID8gZW50cnkucHJvamVjdExpbmsgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGFsaWduPXtpbmRleCAlIDIgPT09IDAgPyAnbGVmdCcgOiAncmlnaHQnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZ3NhcCIsIkhlYWQiLCJOYXZiYXIiLCJGb290ZXIiLCJUaW1lbGluZUl0ZW0iLCJ0aW1lbGluZURhdGEiLCJ0eXBlIiwidGl0bGUiLCJvcmdhbml6YXRpb24iLCJwZXJpb2QiLCJzdGFydERhdGUiLCJEYXRlIiwiZGVzY3JpcHRpb24iLCJwcm9qZWN0TGluayIsIlRpbWVsaW5lIiwidGltZWxpbmVSZWYiLCJjdXJyZW50IiwidGwiLCJ0aW1lbGluZSIsImZyb21UbyIsImNoaWxkcmVuIiwieSIsIm9wYWNpdHkiLCJzdGFnZ2VyIiwiZHVyYXRpb24iLCJlYXNlIiwic29ydCIsImEiLCJiIiwiZ2V0VGltZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiZW50cnkiLCJpbmRleCIsInVuZGVmaW5lZCIsImFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/timeline.tsx\n"));

/***/ })

});