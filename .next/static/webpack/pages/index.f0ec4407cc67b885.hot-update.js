"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const headerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const paragraphRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const splitTextToSpans = (element)=>{\n        const text = element.textContent;\n        element.textContent = \"\";\n        text === null || text === void 0 ? void 0 : text.split(\"\").forEach((char)=>{\n            const span = document.createElement(\"span\");\n            span.textContent = char;\n            element.appendChild(span);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Check if the SVG element is present\n        if (svgRef.current) {\n            svgRef.current.classList.add(\"active\");\n        }\n        // Check if the header and paragraph elements are present\n        if (headerRef.current && paragraphRef.current) {\n            splitTextToSpans(headerRef.current);\n            splitTextToSpans(paragraphRef.current);\n            // Set initial opacity of each span to 0\n            gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.set([\n                ...headerRef.current.children,\n                ...paragraphRef.current.children\n            ], {\n                opacity: 0\n            });\n            // Animate the header text\n            gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.fromTo(headerRef.current.children, {\n                y: 20\n            }, {\n                duration: 0.8,\n                opacity: 1,\n                y: 0,\n                stagger: 0.05,\n                ease: \"power2.out\",\n                onComplete: ()=>{\n                    // Animate the paragraph text after the header animation completes\n                    gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.fromTo(paragraphRef.current.children, {\n                        y: 20\n                    }, {\n                        duration: 0.6,\n                        opacity: 1,\n                        y: 0,\n                        stagger: 0.035,\n                        ease: \"power2.out\"\n                    });\n                }\n            });\n        }\n    }, []); // The empty array as a dependency means this effect runs once after initial render\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Tom Garrett | Developer Portfolio\"\n                }, void 0, false, {\n                    fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/index.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/index.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"splash\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo text-center\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        ref: headerRef,\n                        className: \"text-5xl font-bold my-6 color-white\",\n                        children: \"Hi, I'm Tom Garrett\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        ref: paragraphRef,\n                        className: \"text-xl color-white\",\n                        children: \"I'm a Full-Stack Developer with a passion for creating efficient and scalable web applications. Welcome to my professional portfolio!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/index.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"JbxayfltzkYgrmdlc9DXbm8DeBY=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNyQjtBQUVDO0FBQ2E7QUFDQTtBQUcxQyxNQUFNTyxPQUFpQjs7SUFDckIsTUFBTUMsU0FBU04sNkNBQU1BLENBQUM7SUFDdEIsTUFBTU8sWUFBWVAsNkNBQU1BLENBQXFCO0lBQzdDLE1BQU1RLGVBQWVSLDZDQUFNQSxDQUF1QjtJQUVsRCxNQUFNUyxtQkFBbUIsQ0FBQ0M7UUFDeEIsTUFBTUMsT0FBT0QsUUFBUUUsV0FBVztRQUNoQ0YsUUFBUUUsV0FBVyxHQUFHO1FBQ3RCRCxpQkFBQUEsMkJBQUFBLEtBQU1FLEtBQUssQ0FBQyxJQUFJQyxPQUFPLENBQUNDLENBQUFBO1lBQ3RCLE1BQU1DLE9BQU9DLFNBQVNDLGFBQWEsQ0FBQztZQUNwQ0YsS0FBS0osV0FBVyxHQUFHRztZQUNuQkwsUUFBUVMsV0FBVyxDQUFDSDtRQUN0QjtJQUNGO0lBRUFqQixnREFBU0EsQ0FBQztRQUNSLHNDQUFzQztRQUN0QyxJQUFJTyxPQUFPYyxPQUFPLEVBQUU7WUFDbEJkLE9BQU9jLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7UUFDL0I7UUFFQSx5REFBeUQ7UUFDekQsSUFBSWYsVUFBVWEsT0FBTyxJQUFJWixhQUFhWSxPQUFPLEVBQUU7WUFDN0NYLGlCQUFpQkYsVUFBVWEsT0FBTztZQUNsQ1gsaUJBQWlCRCxhQUFhWSxPQUFPO1lBRXJDLHdDQUF3QztZQUN4Q25CLHNDQUFJQSxDQUFDc0IsR0FBRyxDQUFDO21CQUFJaEIsVUFBVWEsT0FBTyxDQUFDSSxRQUFRO21CQUFLaEIsYUFBYVksT0FBTyxDQUFDSSxRQUFRO2FBQUMsRUFBRTtnQkFBRUMsU0FBUztZQUFFO1lBRXpGLDBCQUEwQjtZQUMxQnhCLHNDQUFJQSxDQUFDeUIsTUFBTSxDQUFDbkIsVUFBVWEsT0FBTyxDQUFDSSxRQUFRLEVBQUU7Z0JBQ3RDRyxHQUFHO1lBQ0wsR0FBRztnQkFDREMsVUFBVTtnQkFDVkgsU0FBUztnQkFDVEUsR0FBRztnQkFDSEUsU0FBUztnQkFDVEMsTUFBTTtnQkFDTkMsWUFBWTtvQkFDVixrRUFBa0U7b0JBQ2xFOUIsc0NBQUlBLENBQUN5QixNQUFNLENBQUNsQixhQUFhWSxPQUFPLENBQUNJLFFBQVEsRUFBRTt3QkFDekNHLEdBQUc7b0JBQ0wsR0FBRzt3QkFDREMsVUFBVTt3QkFDVkgsU0FBUzt3QkFDVEUsR0FBRzt3QkFDSEUsU0FBUzt3QkFDVEMsTUFBTTtvQkFDUjtnQkFDRjtZQUNGO1FBQ0Y7SUFDRixHQUFHLEVBQUUsR0FBRyxtRkFBbUY7SUFFM0YscUJBQ0U7OzBCQUNFLDhEQUFDNUIsa0RBQUlBOzBCQUNILDRFQUFDOEI7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDNUIsMERBQU1BOzs7OzswQkFDUCw4REFBQzZCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FHZiw4REFBQ0M7d0JBQUdDLEtBQUs3Qjt3QkFBVzJCLFdBQVU7a0NBQXNDOzs7Ozs7a0NBQ3BFLDhEQUFDRzt3QkFBRUQsS0FBSzVCO3dCQUFjMEIsV0FBVTtrQ0FBc0I7Ozs7Ozs7Ozs7OzswQkFFeEQsOERBQUMvQiwwREFBTUE7Ozs7Ozs7QUFHYjtHQXRFTUU7S0FBQUE7QUF3RU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwJztcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFNjcmlwdCBmcm9tICduZXh0L3NjcmlwdCc7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBzdmdSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGhlYWRlclJlZiA9IHVzZVJlZjxIVE1MSGVhZGluZ0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBwYXJhZ3JhcGhSZWYgPSB1c2VSZWY8SFRNTFBhcmFncmFwaEVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IHNwbGl0VGV4dFRvU3BhbnMgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgdGV4dD8uc3BsaXQoJycpLmZvckVhY2goY2hhciA9PiB7XG4gICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGNoYXI7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIFNWRyBlbGVtZW50IGlzIHByZXNlbnRcbiAgICBpZiAoc3ZnUmVmLmN1cnJlbnQpIHtcbiAgICAgIHN2Z1JlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZSBoZWFkZXIgYW5kIHBhcmFncmFwaCBlbGVtZW50cyBhcmUgcHJlc2VudFxuICAgIGlmIChoZWFkZXJSZWYuY3VycmVudCAmJiBwYXJhZ3JhcGhSZWYuY3VycmVudCkge1xuICAgICAgc3BsaXRUZXh0VG9TcGFucyhoZWFkZXJSZWYuY3VycmVudCk7XG4gICAgICBzcGxpdFRleHRUb1NwYW5zKHBhcmFncmFwaFJlZi5jdXJyZW50KTtcblxuICAgICAgLy8gU2V0IGluaXRpYWwgb3BhY2l0eSBvZiBlYWNoIHNwYW4gdG8gMFxuICAgICAgZ3NhcC5zZXQoWy4uLmhlYWRlclJlZi5jdXJyZW50LmNoaWxkcmVuLCAuLi5wYXJhZ3JhcGhSZWYuY3VycmVudC5jaGlsZHJlbl0sIHsgb3BhY2l0eTogMCB9KTtcblxuICAgICAgLy8gQW5pbWF0ZSB0aGUgaGVhZGVyIHRleHRcbiAgICAgIGdzYXAuZnJvbVRvKGhlYWRlclJlZi5jdXJyZW50LmNoaWxkcmVuLCB7XG4gICAgICAgIHk6IDIwLFxuICAgICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICBvcGFjaXR5OiAxLCAvLyBGaW5hbCBvcGFjaXR5XG4gICAgICAgIHk6IDAsXG4gICAgICAgIHN0YWdnZXI6IDAuMDUsXG4gICAgICAgIGVhc2U6ICdwb3dlcjIub3V0JyxcbiAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgIC8vIEFuaW1hdGUgdGhlIHBhcmFncmFwaCB0ZXh0IGFmdGVyIHRoZSBoZWFkZXIgYW5pbWF0aW9uIGNvbXBsZXRlc1xuICAgICAgICAgIGdzYXAuZnJvbVRvKHBhcmFncmFwaFJlZi5jdXJyZW50LmNoaWxkcmVuLCB7XG4gICAgICAgICAgICB5OiAyMCxcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgICAgICAgb3BhY2l0eTogMSwgLy8gRmluYWwgb3BhY2l0eVxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAuMDM1LFxuICAgICAgICAgICAgZWFzZTogJ3Bvd2VyMi5vdXQnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pOyAvLyBUaGUgZW1wdHkgYXJyYXkgYXMgYSBkZXBlbmRlbmN5IG1lYW5zIHRoaXMgZWZmZWN0IHJ1bnMgb25jZSBhZnRlciBpbml0aWFsIHJlbmRlclxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VG9tIEdhcnJldHQgfCBEZXZlbG9wZXIgUG9ydGZvbGlvPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGxhc2gnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9nbyB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgey8qIFNWRyBhbmQgb3RoZXIgY29udGVudCBoZXJlICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxIHJlZj17aGVhZGVyUmVmfSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgbXktNiBjb2xvci13aGl0ZVwiPkhpLCBJJ20gVG9tIEdhcnJldHQ8L2gxPlxuICAgICAgICA8cCByZWY9e3BhcmFncmFwaFJlZn0gY2xhc3NOYW1lPVwidGV4dC14bCBjb2xvci13aGl0ZVwiPkknbSBhIEZ1bGwtU3RhY2sgRGV2ZWxvcGVyIHdpdGggYSBwYXNzaW9uIGZvciBjcmVhdGluZyBlZmZpY2llbnQgYW5kIHNjYWxhYmxlIHdlYiBhcHBsaWNhdGlvbnMuIFdlbGNvbWUgdG8gbXkgcHJvZmVzc2lvbmFsIHBvcnRmb2xpbyE8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJnc2FwIiwiSGVhZCIsIkZvb3RlciIsIk5hdmJhciIsIkhvbWUiLCJzdmdSZWYiLCJoZWFkZXJSZWYiLCJwYXJhZ3JhcGhSZWYiLCJzcGxpdFRleHRUb1NwYW5zIiwiZWxlbWVudCIsInRleHQiLCJ0ZXh0Q29udGVudCIsInNwbGl0IiwiZm9yRWFjaCIsImNoYXIiLCJzcGFuIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0IiwiY2hpbGRyZW4iLCJvcGFjaXR5IiwiZnJvbVRvIiwieSIsImR1cmF0aW9uIiwic3RhZ2dlciIsImVhc2UiLCJvbkNvbXBsZXRlIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInJlZiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});