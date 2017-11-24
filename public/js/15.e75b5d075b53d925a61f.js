webpackJsonp([15],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/dashboard/System.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            system: {},
            type: 'system'
        };
    },
    created: function created() {
        var _this = this;

        this.$http.get('system').then(function (response) {
            _this.system = response.data;
        });
    }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0aa3b2dd\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/views/dashboard/System.vue":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Missing binding /genv/beeotc/node_modules/node-sass/vendor/darwin-x64-57/binding.node\nNode Sass could not find a binding for your current environment: OS X 64-bit with Node.js 8.x\n\nFound bindings for the following environments:\n  - OS X 64-bit with Unsupported runtime (59)\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass --force` to build the binding for your current environment.\n    at module.exports (/genv/beeotc/node_modules/node-sass/lib/binding.js:15:13)\n    at Object.<anonymous> (/genv/beeotc/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (module.js:569:30)\n    at Object.Module._extensions..js (module.js:580:10)\n    at Module.load (module.js:503:32)\n    at tryModuleLoad (module.js:466:12)\n    at Function.Module._load (module.js:458:3)\n    at Module.require (module.js:513:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/genv/beeotc/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (module.js:569:30)\n    at Object.Module._extensions..js (module.js:580:10)\n    at Module.load (module.js:503:32)\n    at tryModuleLoad (module.js:466:12)\n    at Function.Module._load (module.js:458:3)\n    at Module.require (module.js:513:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (/genv/beeotc/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/genv/beeotc/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/genv/beeotc/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /genv/beeotc/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/genv/beeotc/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/genv/beeotc/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/genv/beeotc/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /genv/beeotc/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/genv/beeotc/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/genv/beeotc/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/genv/beeotc/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/genv/beeotc/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/genv/beeotc/node_modules/webpack/lib/NormalModule.js:275:15)");

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0aa3b2dd\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/dashboard/System.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "ibox" }, [
      _c("div", { staticClass: "ibox-title" }, [
        _c("h5", [_vm._v(_vm._s(_vm.$t("page.systems")))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "ibox-content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-2" }, [
            _c("div", { staticClass: "sidebar" }, [
              _c("ul", [
                _c(
                  "li",
                  {
                    class: [_vm.type == "system" ? "active" : ""],
                    attrs: { "aria-expanded": "false" },
                    on: {
                      click: function($event) {
                        _vm.type = "system"
                      }
                    }
                  },
                  [
                    _c("a", [
                      _c("i", { staticClass: "ion-ios-toggle" }),
                      _vm._v(_vm._s(_vm.$t("page.system")))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    class: [_vm.type == "php" ? "active" : ""],
                    attrs: { "aria-expanded": "true" },
                    on: {
                      click: function($event) {
                        _vm.type = "php"
                      }
                    }
                  },
                  [_vm._m(0, false, false)]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    class: [_vm.type == "database" ? "active" : ""],
                    attrs: { "aria-expanded": "false" },
                    on: {
                      click: function($event) {
                        _vm.type = "database"
                      }
                    }
                  },
                  [
                    _c("a", [
                      _c("i", { staticClass: "ion-social-buffer" }),
                      _vm._v(" " + _vm._s(_vm.$t("page.database")))
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "col-md-10", attrs: { id: "tab-content" } }, [
            _vm.type == "system"
              ? _c("li", { attrs: { "aria-hidden": "true" } }, [
                  _c("h2", [_vm._v(_vm._s(_vm.$t("page.system")))]),
                  _vm._v(" "),
                  _c("table", { staticClass: "table table-hover" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", { staticClass: "pk-table-width-150" }, [
                          _vm._v(_vm._s(_vm.$t("page.key")))
                        ]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("page.value")))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("page.server")))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.server))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("page.domain")))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.http_host))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("IP")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.remote_host))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("User Agent")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.user_agent))])
                      ])
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.type == "php"
              ? _c("li", { attrs: { "aria-hidden": "false" } }, [
                  _c("h2", [_vm._v("PHP")]),
                  _vm._v(" "),
                  _c("table", { staticClass: "table table-hover" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v(_vm._s(_vm.$t("page.key")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("page.value")))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("page.version")))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.php))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Handler")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.sapi_name))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("page.extension")))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.extensions))])
                      ])
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.type == "database"
              ? _c("li", { attrs: { "aria-hidden": "true" } }, [
                  _c("h2", [_vm._v(_vm._s(_vm.$t("page.database")))]),
                  _vm._v(" "),
                  _c("table", { staticClass: "table table-hover" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v(_vm._s(_vm.$t("page.key")))]),
                        _vm._v(" "),
                        _c("th", [_vm._v(_vm._s(_vm.$t("page.value")))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("page.driver")))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.db_connection))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("page.database")))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.db_database))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v(_vm._s(_vm.$t("page.version")))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.system.db_version))])
                      ])
                    ])
                  ])
                ])
              : _vm._e()
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [_c("i", { staticClass: "ion-code" }), _vm._v(" PHP")])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0aa3b2dd", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0aa3b2dd\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/views/dashboard/System.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0aa3b2dd\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/views/dashboard/System.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("5c5f9b46", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0aa3b2dd\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./System.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0aa3b2dd\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./System.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/views/dashboard/System.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0aa3b2dd\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/views/dashboard/System.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/dashboard/System.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0aa3b2dd\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/dashboard/System.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0aa3b2dd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/views/dashboard/System.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0aa3b2dd", Component.options)
  } else {
    hotAPI.reload("data-v-0aa3b2dd", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});