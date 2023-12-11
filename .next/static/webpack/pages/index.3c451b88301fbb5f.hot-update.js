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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const headerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const paragraphRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const splitTextToSpans = (element)=>{\n        const text = element.textContent;\n        element.textContent = \"\";\n        text === null || text === void 0 ? void 0 : text.split(\"\").forEach((char)=>{\n            const span = document.createElement(\"span\");\n            span.textContent = char;\n            element.appendChild(span);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (headerRef.current && paragraphRef.current) {\n            splitTextToSpans(headerRef.current);\n            splitTextToSpans(paragraphRef.current);\n            // Set initial opacity of each span to 0\n            gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.set([\n                ...headerRef.current.children,\n                ...paragraphRef.current.children\n            ], {\n                opacity: 0\n            });\n            gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.fromTo(headerRef.current.children, {\n                y: 20\n            }, {\n                duration: 0.8,\n                opacity: 1,\n                y: 0,\n                stagger: 0.05,\n                ease: \"power2.out\",\n                onComplete: ()=>{\n                    gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.fromTo(paragraphRef.current.children, {\n                        y: 20\n                    }, {\n                        duration: 0.6,\n                        opacity: 1,\n                        y: 0,\n                        stagger: 0.035,\n                        ease: \"power2.out\"\n                    });\n                }\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Tom Garrett | Developer Portfolio\"\n                }, void 0, false, {\n                    fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"splash\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        ref: headerRef,\n                        className: \"text-5xl font-bold my-6 color-white\",\n                        children: \"Hi, I'm Tom Garrett\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        ref: paragraphRef,\n                        className: \"text-xl color-white\",\n                        children: \"I'm a Full-Stack Developer with a passion for creating efficient and scalable web applications. Welcome to my professional portfolio!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tomgarrett/Desktop/react/showcase/src/pages/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"zy8EzP5ejzb66N2fqCYn98MnSIk=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNyQjtBQUVDO0FBQ2E7QUFDQTtBQUUxQyxNQUFNTyxPQUFpQjs7SUFDckIsTUFBTUMsWUFBWU4sNkNBQU1BLENBQXFCO0lBQzdDLE1BQU1PLGVBQWVQLDZDQUFNQSxDQUF1QjtJQUVsRCxNQUFNUSxtQkFBbUIsQ0FBQ0M7UUFDeEIsTUFBTUMsT0FBT0QsUUFBUUUsV0FBVztRQUNoQ0YsUUFBUUUsV0FBVyxHQUFHO1FBQ3RCRCxpQkFBQUEsMkJBQUFBLEtBQU1FLEtBQUssQ0FBQyxJQUFJQyxPQUFPLENBQUNDLENBQUFBO1lBQ3RCLE1BQU1DLE9BQU9DLFNBQVNDLGFBQWEsQ0FBQztZQUNwQ0YsS0FBS0osV0FBVyxHQUFHRztZQUNuQkwsUUFBUVMsV0FBVyxDQUFDSDtRQUN0QjtJQUNGO0lBRUFoQixnREFBU0EsQ0FBQztRQUNSLElBQUdPLFVBQVVhLE9BQU8sSUFBSVosYUFBYVksT0FBTyxFQUFFO1lBQzVDWCxpQkFBaUJGLFVBQVVhLE9BQU87WUFDbENYLGlCQUFpQkQsYUFBYVksT0FBTztZQUVyQyx3Q0FBd0M7WUFDeENsQixzQ0FBSUEsQ0FBQ21CLEdBQUcsQ0FBQzttQkFBSWQsVUFBVWEsT0FBTyxDQUFDRSxRQUFRO21CQUFLZCxhQUFhWSxPQUFPLENBQUNFLFFBQVE7YUFBQyxFQUFFO2dCQUFFQyxTQUFTO1lBQUU7WUFFekZyQixzQ0FBSUEsQ0FBQ3NCLE1BQU0sQ0FBQ2pCLFVBQVVhLE9BQU8sQ0FBQ0UsUUFBUSxFQUFFO2dCQUN0Q0csR0FBRztZQUNMLEdBQUc7Z0JBQ0RDLFVBQVU7Z0JBQ1ZILFNBQVM7Z0JBQ1RFLEdBQUc7Z0JBQ0hFLFNBQVM7Z0JBQ1RDLE1BQU07Z0JBQ05DLFlBQVk7b0JBQ1YzQixzQ0FBSUEsQ0FBQ3NCLE1BQU0sQ0FBQ2hCLGFBQWFZLE9BQU8sQ0FBQ0UsUUFBUSxFQUFFO3dCQUN6Q0csR0FBRztvQkFDTCxHQUFHO3dCQUNEQyxVQUFVO3dCQUNWSCxTQUFTO3dCQUNURSxHQUFHO3dCQUNIRSxTQUFTO3dCQUNUQyxNQUFNO29CQUNSO2dCQUNGO1lBQ0Y7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ3pCLGtEQUFJQTswQkFDSCw0RUFBQzJCOzhCQUFNOzs7Ozs7Ozs7OzswQkFFVCw4REFBQ3pCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUMwQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHQyxLQUFLM0I7d0JBQVd5QixXQUFVO2tDQUFzQzs7Ozs7O2tDQUNwRSw4REFBQ0c7d0JBQUVELEtBQUsxQjt3QkFBY3dCLFdBQVU7a0NBQXNCOzs7Ozs7Ozs7Ozs7MEJBRXhELDhEQUFDNUIsMERBQU1BOzs7Ozs7O0FBR2I7R0ExRE1FO0tBQUFBO0FBNEROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcCc7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlclJlZiA9IHVzZVJlZjxIVE1MSGVhZGluZ0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBwYXJhZ3JhcGhSZWYgPSB1c2VSZWY8SFRNTFBhcmFncmFwaEVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IHNwbGl0VGV4dFRvU3BhbnMgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgdGV4dD8uc3BsaXQoJycpLmZvckVhY2goY2hhciA9PiB7XG4gICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGNoYXI7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoaGVhZGVyUmVmLmN1cnJlbnQgJiYgcGFyYWdyYXBoUmVmLmN1cnJlbnQpIHtcbiAgICAgIHNwbGl0VGV4dFRvU3BhbnMoaGVhZGVyUmVmLmN1cnJlbnQpO1xuICAgICAgc3BsaXRUZXh0VG9TcGFucyhwYXJhZ3JhcGhSZWYuY3VycmVudCk7XG4gIFxuICAgICAgLy8gU2V0IGluaXRpYWwgb3BhY2l0eSBvZiBlYWNoIHNwYW4gdG8gMFxuICAgICAgZ3NhcC5zZXQoWy4uLmhlYWRlclJlZi5jdXJyZW50LmNoaWxkcmVuLCAuLi5wYXJhZ3JhcGhSZWYuY3VycmVudC5jaGlsZHJlbl0sIHsgb3BhY2l0eTogMCB9KTtcbiAgXG4gICAgICBnc2FwLmZyb21UbyhoZWFkZXJSZWYuY3VycmVudC5jaGlsZHJlbiwge1xuICAgICAgICB5OiAyMCxcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgb3BhY2l0eTogMSwgLy8gRmluYWwgb3BhY2l0eVxuICAgICAgICB5OiAwLFxuICAgICAgICBzdGFnZ2VyOiAwLjA1LFxuICAgICAgICBlYXNlOiAncG93ZXIyLm91dCcsXG4gICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICBnc2FwLmZyb21UbyhwYXJhZ3JhcGhSZWYuY3VycmVudC5jaGlsZHJlbiwge1xuICAgICAgICAgICAgeTogMjAsXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsIC8vIEZpbmFsIG9wYWNpdHlcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICBzdGFnZ2VyOiAwLjAzNSxcbiAgICAgICAgICAgIGVhc2U6ICdwb3dlcjIub3V0J1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTsgIFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VG9tIEdhcnJldHQgfCBEZXZlbG9wZXIgUG9ydGZvbGlvPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGxhc2gnPlxuICAgICAgICA8aDEgcmVmPXtoZWFkZXJSZWZ9IGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCBteS02IGNvbG9yLXdoaXRlXCI+SGksIEknbSBUb20gR2FycmV0dDwvaDE+XG4gICAgICAgIDxwIHJlZj17cGFyYWdyYXBoUmVmfSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGNvbG9yLXdoaXRlXCI+SSdtIGEgRnVsbC1TdGFjayBEZXZlbG9wZXIgd2l0aCBhIHBhc3Npb24gZm9yIGNyZWF0aW5nIGVmZmljaWVudCBhbmQgc2NhbGFibGUgd2ViIGFwcGxpY2F0aW9ucy4gV2VsY29tZSB0byBteSBwcm9mZXNzaW9uYWwgcG9ydGZvbGlvITwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsImdzYXAiLCJIZWFkIiwiRm9vdGVyIiwiTmF2YmFyIiwiSG9tZSIsImhlYWRlclJlZiIsInBhcmFncmFwaFJlZiIsInNwbGl0VGV4dFRvU3BhbnMiLCJlbGVtZW50IiwidGV4dCIsInRleHRDb250ZW50Iiwic3BsaXQiLCJmb3JFYWNoIiwiY2hhciIsInNwYW4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImN1cnJlbnQiLCJzZXQiLCJjaGlsZHJlbiIsIm9wYWNpdHkiLCJmcm9tVG8iLCJ5IiwiZHVyYXRpb24iLCJzdGFnZ2VyIiwiZWFzZSIsIm9uQ29tcGxldGUiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicmVmIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});