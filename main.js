/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n// Function to generate the URL for the weather API request\nfunction generateURL(location) {\n  var API_KEY = \"1986480656ec490d950204923202611\";\n  return \"https://api.weatherapi.com/v1/forecast.json?key=\".concat(API_KEY, \"&q=\").concat(location, \"&days=5\");\n}\n\n// DOM elements\nvar input = document.querySelector(\"#search-city\");\nvar submitBtn = document.querySelector(\"#submit-btn\");\nvar cityName = document.querySelector(\"#city-name\");\nvar cityTemp = document.querySelector(\"#temp\");\nvar weatherCondition = document.querySelector(\"#weather-condition\");\nvar weatherDetails = document.querySelectorAll(\".item-value\");\nvar _weatherDetails = _slicedToArray(weatherDetails, 6),\n  feelsLike = _weatherDetails[0],\n  windDegree = _weatherDetails[1],\n  humidity = _weatherDetails[2],\n  uv = _weatherDetails[3],\n  moon = _weatherDetails[4],\n  sunRise = _weatherDetails[5];\n\n// Global variable to store next five days data\nvar nextFiveDays = [];\n\n// Function to fetch weather data for a given location\nfunction fetchWeatherData(_x) {\n  return _fetchWeatherData.apply(this, arguments);\n} // Function to update the UI with the fetched weather data\nfunction _fetchWeatherData() {\n  _fetchWeatherData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(location) {\n    var response, data;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return fetch(generateURL(location), {\n            mode: \"cors\"\n          });\n        case 3:\n          response = _context.sent;\n          if (response.ok) {\n            _context.next = 6;\n            break;\n          }\n          throw new Error(\"Failed to fetch weather data: \".concat(response.statusText));\n        case 6:\n          _context.next = 8;\n          return response.json();\n        case 8:\n          data = _context.sent;\n          updateWeatherInfo(data);\n          processNextFiveDays(data);\n\n          // Draw the updated chart\n          drawChart();\n          _context.next = 17;\n          break;\n        case 14:\n          _context.prev = 14;\n          _context.t0 = _context[\"catch\"](0);\n          handleError(_context.t0);\n        case 17:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[0, 14]]);\n  }));\n  return _fetchWeatherData.apply(this, arguments);\n}\nfunction updateWeatherInfo(data) {\n  console.log(data); // For debugging\n\n  var location = data.location,\n    current = data.current,\n    forecast = data.forecast;\n  var name = location.name,\n    country = location.country;\n  var temp_c = current.temp_c,\n    condition = current.condition,\n    feelslike_c = current.feelslike_c,\n    wind_degree = current.wind_degree,\n    humidityValue = current.humidity,\n    uv = current.uv;\n  var _forecast$forecastday = forecast.forecastday[0].astro,\n    moon_phase = _forecast$forecastday.moon_phase,\n    sunrise = _forecast$forecastday.sunrise;\n\n  // Update city and weather details in the UI\n  cityName.textContent = \"\".concat(name, \", \").concat(country);\n  cityTemp.textContent = \"\".concat(temp_c, \"\\xB0C\");\n  weatherCondition.textContent = condition.text;\n  updateWeatherDetails(feelslike_c, wind_degree, humidityValue, uv, moon_phase, sunrise);\n}\n\n// Function to update weather details like feels-like, wind, humidity, etc.\nfunction updateWeatherDetails(feelsLikeResponse, windDegreeResponse, humidityResponse, uvResponse, moonResponse, sunriseResponse) {\n  feelsLike.textContent = \"\".concat(feelsLikeResponse, \"\\xB0C\");\n  windDegree.textContent = windDegreeResponse;\n  humidity.textContent = \"\".concat(humidityResponse, \"%\");\n  uv.textContent = uvResponse;\n  moon.textContent = moonResponse;\n  sunRise.textContent = sunriseResponse;\n}\n\n// Function to process the next 5 days' data and store it in a global array\nfunction processNextFiveDays(data) {\n  nextFiveDays = data.forecast.forecastday.map(function (day) {\n    return {\n      date: day.date,\n      maxTemp: day.day.maxtemp_c,\n      minTemp: day.day.mintemp_c\n    };\n  });\n  console.log(nextFiveDays);\n}\n\n// Function to handle errors in API calls\nfunction handleError(error) {\n  alert(\"Error fetching weather data: \".concat(error.message));\n}\n\n// Event listener for the submit button to trigger fetching weather data\nsubmitBtn.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  var location = input.value.trim();\n  if (location) {\n    fetchWeatherData(location);\n  } else {\n    alert(\"Location input is empty!\");\n  }\n});\n\n// Draw a chart of the 5-day temperature in the graph section\n// Load Google Charts\ngoogle.charts.load(\"current\", {\n  packages: [\"corechart\"]\n});\ngoogle.charts.setOnLoadCallback(drawChart);\n\n// Function to draw the chart\nfunction drawChart() {\n  if (nextFiveDays.length === 0) {\n    console.error(\"No data available to draw the chart!\");\n    return;\n  }\n\n  // Prepare data dynamically from the nextFiveDays array\n  var chartData = [[\"Date\", \"Max Temp (°C)\", \"Min Temp (°C)\"]];\n  nextFiveDays.forEach(function (day) {\n    chartData.push([day.date, day.maxTemp, day.minTemp]);\n  });\n\n  // Convert the data to Google Charts format\n  var data = google.visualization.arrayToDataTable(chartData);\n\n  // Set chart options\n  var options = {\n    backgroundColor: \"transparent\",\n    width: 800,\n    // Set fixed width\n    height: 400,\n    // Set fixed height\n    chartArea: {\n      top: \"15%\",\n      bott: \"15%\",\n      // Center the graph in its container\n      left: \"15%\",\n      right: \"15%\",\n      width: \"85%\",\n      height: \"70%\" // Reduced height to prevent overflow\n    },\n    title: {\n      textStyle: {\n        color: \"#f97316\",\n        fontSize: 16\n      }\n    },\n    legend: {\n      textStyle: {\n        color: \"#ffffff\"\n      },\n      position: \"top\"\n    },\n    hAxis: {\n      textStyle: {\n        color: \"#ffffff\"\n      },\n      gridlines: {\n        color: \"#444444\"\n      },\n      baselineColor: \"#666666\"\n    },\n    vAxis: {\n      textStyle: {\n        color: \"#ffffff\"\n      },\n      gridlines: {\n        color: \"#444444\"\n      },\n      baselineColor: \"#666666\"\n    },\n    series: {\n      0: {\n        color: \"#4ade80\"\n      },\n      1: {\n        color: \"#22c55e\"\n      }\n    },\n    lineWidth: 3,\n    pointSize: 5,\n    animation: {\n      duration: 1000,\n      easing: \"out\"\n    },\n    cssClassNames: {\n      chartArea: \"weather-chart\"\n    }\n  };\n\n  // Create and draw the chart\n  var chart = new google.visualization.LineChart(document.getElementById(\"curve_chart\"));\n  chart.draw(data, options);\n\n  // Responsive resize\n  window.addEventListener(\"resize\", function () {\n    chart.draw(data, options);\n  });\n}\n\n//# sourceURL=webpack://odin-weather/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/background.jpg */ \"./src/assets/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* reset defaults in browsers */\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n/* add control panel */\n:root {\n  --primary-color: rgba(0, 0, 0, 0.4);\n  --secondary-color: rgba(125, 120, 120, 0.1);\n  --success-color: #28a745;\n  --info-color: #17a2b8;\n  --warning-color: #ffc107;\n  --danger-color: #dc3545;\n  --primary-text-color: rgba(255, 255, 255, 1);\n  --secondary-text-color: rgba(125, 120, 120, 1);\n  --body-bg: #f8f9fa;\n  --body-color: #212529;\n  --link-color: #007bff;\n  --link-hover-color: #0056b3;\n  --link-hover-decoration: underline;\n  --font-family-sans-serif: \"Nunito\", sans-serif;\n  --font-family-monospace: \"Courier New\", monospace;\n  --box-shadow-color: 7px 11px 50px #7d7866;\n  --padding: 20px;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  height: 100vh;\n  width: 100vw;\n  /* set the background */\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n  background-size: cover;\n  color: var(--primary-text-color);\n  /* grid settlement */\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.location-detail-container {\n  /* take the upper half */\n  grid-area: 1/1/2/-1;\n  /* center this specific container */\n  justify-self: center;\n  align-self: center;\n  /* color and sizing */\n  background-color: var(--primary-color);\n  width: 70%;\n  height: auto;\n  min-height: 40%;\n  padding: var(--padding);\n  border-radius: 30px;\n  box-shadow: var(--box-shadow-color);\n  /* children layout */\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  place-items: center;\n}\n#temp {\n  font-size: clamp(1.5em, 2vw, 2em); /* Responsive font size */\n  color: #ffa34e;\n}\n\n.city-details {\n  display: flex;\n  flex-direction: column;\n}\n.city-details div {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n/* Search section */\n.search-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;  /* Reduced from 15px */\n  width: 100%;\n  max-width: 400px;  /* Increased from 300px */\n  margin: 0 auto;\n}\n\n.search-section > label {\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: var(--primary-text-color);\n  margin-bottom: 2px;  /* Reduced from 5px */\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n#search-city {\n  width: 100%;\n  padding: 10px 20px;  /* Slightly reduced padding */\n  background-color: rgba(0, 0, 0, 0.7);\n  color: var(--primary-text-color);\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  border-radius: 25px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n\n#search-city:focus {\n  outline: none;\n  border-color: rgba(255, 255, 255, 0.3);\n  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);\n}\n\n.search-section > div {\n  display: flex;\n  gap: 8px;  /* Reduced from 10px */\n  padding: 8px;  /* Reduced from 10px */\n  width: 100%;\n  justify-content: center;\n}\n\n#submit-btn {\n  background-color: #006400;\n  color: #ffffff;\n  border: none;\n  border-radius: 25px;\n  padding: 10px 25px;  /* Slightly reduced vertical padding */\n  cursor: pointer;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n  transition: transform 0.2s ease, background-color 0.3s ease;\n}\n\n#submit-btn:hover {\n  background-color: #008000;\n  transform: scale(1.05);\n}\n\n/* Arrow styling */\n.arrow {\n  transition: transform 0.2s ease;\n}\n\n/* weather details */\n.weather-details-container {\n  grid-area: 2/1/3/2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  width: 100%;\n  padding: var(--padding);\n  box-sizing: border-box;\n}\n\n.weather-details-card {\n  width: 100%;\n  height: auto;\n  padding: var(--padding);\n  border-radius: 30px;\n  box-shadow: var(--box-shadow-color);\n  background-color: var(--secondary-color);\n  /* Add responsive design */\n  max-width: 800px;\n  flex: 1;\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(3, minmax(120px, 1fr));\n  grid-template-rows: repeat(2, auto);\n  justify-items: center;\n}\n\n.weather-details-item {\n  background-color: var(--primary-color);\n  width: 75%; /* Take up full grid cell space */\n  max-width: 100%; /* Prevent overflow */\n  height: auto;\n  padding: 5;\n  text-align: center;\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n\n.item-title {\n  color: var(--secondary-text-color);\n}\n\n.weather-details-item .item-title,\n.weather-details-item .item-value {\n  font-size: clamp(0.9rem, 1vw, 1.2rem); /* Responsive font size */\n  margin: 5px 0;\n}\n\n.location-detail-container,\n.weather-details-container,\n.weather-forecast-graph {\n  padding: 20px;\n  margin: 20px;\n}\n\n/* Adjust the graph container */\n.weather-forecast-graph {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: auto; /* Allow height to adjust automatically */\n  margin-top: 20px;\n  padding: 0 20px; /* Add some padding for spacing */\n}\n\n/* Adjust the graph card container */\n.graph-card {\n  width: 100%;\n  max-width: 800px; /* Set maximum width */\n  height: 400px; /* Fixed height for better control */\n  padding: var(--padding);\n  border-radius: 30px;\n  box-shadow: var(--box-shadow-color);\n  background-color: var(--secondary-color);\n  overflow: hidden; /* Ensure no overflow from the chart */\n  /* Make sure the graph resizes based on container size */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Adjust the chart itself to fit the container  */\n#curve_chart {\n  width: 100%;\n  height: 100%;\n  /* background-color: transparet; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Media Queries for Responsive Design */\n@media screen and (max-width: 768px) {\n  body {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto auto;\n    height: auto;\n    min-height: 100vh;\n  }\n\n  .location-detail-container {\n    grid-area: 1/1/2/2;\n    width: 90%;\n    grid-template-columns: 1fr;\n    gap: 20px;\n    margin: 10px;\n  }\n\n  .weather-details-container {\n    grid-area: 2/1/3/2;\n    padding: 10px;\n    margin: 10px;\n  }\n\n  .weather-details-card {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 15px;\n    padding: 15px;\n  }\n\n  .weather-forecast-graph {\n    grid-area: 3/1/4/2;\n    margin: 10px;\n  }\n\n  .graph-card {\n    height: 300px;\n    padding: 10px;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .weather-details-card {\n    grid-template-columns: 1fr;\n  }\n\n  .search-section {\n    max-width: 100%;\n    padding: 0 10px;\n  }\n\n  #search-city {\n    padding: 8px 15px;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-weather/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-weather/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a6f7310c50b1c284410f.jpg\";\n\n//# sourceURL=webpack://odin-weather/./src/assets/background.jpg?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;