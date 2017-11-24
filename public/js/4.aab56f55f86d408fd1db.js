webpackJsonp([4],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/dashboard/link/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Form = __webpack_require__("./resources/assets/js/views/dashboard/link/Form.vue");

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { LinkForm: _Form2.default },
    data: function data() {
        return {
            link: undefined
        };
    },
    created: function created() {
        this.loadLink();
    },

    methods: {
        loadLink: function loadLink() {
            var _this = this;

            this.$http.get('link/' + this.$route.params.id + '/edit').then(function (response) {
                _this.link = response.data.data;
            });
        }
    }
}; //
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/dashboard/link/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helper = __webpack_require__("./resources/assets/js/config/helper.js");

exports.default = {
    props: {
        link: {
            type: Object,
            default: function _default() {
                return {
                    image: ''
                };
            }
        }
    },
    watch: {
        link: function link() {
            return this.link;
        }
    },
    computed: {
        mode: function mode() {
            return this.link.id ? 'update' : 'create';
        }
    },
    methods: {
        change: function change(event) {
            var _this = this;

            var image = event.target.files[0];
            var formData = new FormData();
            formData.append('image', image);
            formData.append('strategy', 'links');

            if (!/\/(?:jpeg|jpg|png)/i.test(image.type)) {
                toastr.error('Uploaded Failed! Image only supported jpeg, jpg and png.');
                return;
            }

            this.$http.post('file/upload', formData).then(function (response) {
                _this.link.image = response.data.url;
            });
        },
        onSubmit: function onSubmit() {
            var _this2 = this;

            if (!this.link.image) {
                toastr.error('The image is required!');
                return;
            }

            var url = 'link' + (this.link.id ? '/' + this.link.id : '');
            var method = this.link.id ? 'patch' : 'post';

            this.$http[method](url, this.link).then(function (response) {
                toastr.success('You ' + _this2.mode + 'd the link information success!');

                _this2.$router.push('/dashboard/links');
            }).catch(function (_ref) {
                var response = _ref.response;

                (0, _helper.stack_error)(response);
            });
        }
    }
}; //
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

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8466628a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/views/dashboard/link/Form.vue":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Missing binding /genv/beeotc/node_modules/node-sass/vendor/darwin-x64-57/binding.node\nNode Sass could not find a binding for your current environment: OS X 64-bit with Node.js 8.x\n\nFound bindings for the following environments:\n  - OS X 64-bit with Unsupported runtime (59)\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass --force` to build the binding for your current environment.\n    at module.exports (/genv/beeotc/node_modules/node-sass/lib/binding.js:15:13)\n    at Object.<anonymous> (/genv/beeotc/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (module.js:569:30)\n    at Object.Module._extensions..js (module.js:580:10)\n    at Module.load (module.js:503:32)\n    at tryModuleLoad (module.js:466:12)\n    at Function.Module._load (module.js:458:3)\n    at Module.require (module.js:513:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/genv/beeotc/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (module.js:569:30)\n    at Object.Module._extensions..js (module.js:580:10)\n    at Module.load (module.js:503:32)\n    at tryModuleLoad (module.js:466:12)\n    at Function.Module._load (module.js:458:3)\n    at Module.require (module.js:513:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (/genv/beeotc/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/genv/beeotc/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/genv/beeotc/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /genv/beeotc/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/genv/beeotc/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/genv/beeotc/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/genv/beeotc/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /genv/beeotc/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/genv/beeotc/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/genv/beeotc/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/genv/beeotc/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/genv/beeotc/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/genv/beeotc/node_modules/webpack/lib/NormalModule.js:275:15)");

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-010e1d01\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/dashboard/link/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vue-form", { attrs: { title: _vm.$t("form.edit_link") } }, [
    _c(
      "div",
      { attrs: { slot: "buttons" }, slot: "buttons" },
      [
        _c(
          "router-link",
          {
            staticClass: "btn btn-default",
            attrs: { to: "/dashboard/links", exact: "" }
          },
          [_vm._v(_vm._s(_vm.$t("form.back")))]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { attrs: { slot: "content" }, slot: "content" },
      [_c("link-form", { attrs: { link: _vm.link } })],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-010e1d01", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8466628a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/dashboard/link/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "form",
      {
        staticClass: "form col-md-4 col-md-offset-4",
        attrs: { role: "form", enctype: "multipart/form-data" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.onSubmit($event)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "name" } }, [
            _vm._v(_vm._s(_vm.$t("form.link_name")))
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.link.name,
                expression: "link.name"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              id: "name",
              name: "name",
              placeholder: _vm.$t("form.link_name")
            },
            domProps: { value: _vm.link.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.link, "name", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "link" } }, [
            _vm._v(_vm._s(_vm.$t("form.link")))
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.link.link,
                expression: "link.link"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "link",
              id: "link",
              name: "link",
              placeholder: _vm.$t("form.link")
            },
            domProps: { value: _vm.link.link },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.link, "link", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "image" } }, [
            _vm._v(_vm._s(_vm.$t("form.image")))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "upload-box" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "file", id: "image", name: "image" },
              on: { change: _vm.change }
            }),
            _vm._v(" "),
            _vm.link.image
              ? _c("img", {
                  staticClass: "img-circle image",
                  attrs: {
                    src: _vm.link.image,
                    alt: _vm.link.name,
                    width: "100",
                    height: "100"
                  }
                })
              : _c("i", { staticClass: "ion-image link-image" }),
            _vm._v(" "),
            _vm.link.image
              ? _c("div", { staticClass: "mask" }, [
                  _c("i", { staticClass: "ion-upload" })
                ])
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v(_vm._s(_vm.$t("form.is_enable")))]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "togglebutton",
              staticStyle: { "margin-top": "6px" }
            },
            [
              _c("label", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.link.status,
                      expression: "link.status"
                    }
                  ],
                  attrs: { type: "checkbox", name: "status" },
                  domProps: {
                    checked: Array.isArray(_vm.link.status)
                      ? _vm._i(_vm.link.status, null) > -1
                      : _vm.link.status
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.link.status,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.link.status = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.link.status = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.$set(_vm.link, "status", $$c)
                      }
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "toggle" })
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c(
            "button",
            { staticClass: "btn btn-info", attrs: { type: "submit" } },
            [
              _vm._v(
                _vm._s(
                  _vm.link.id ? _vm.$t("form.edit") : _vm.$t("form.create")
                )
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8466628a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8466628a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/views/dashboard/link/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8466628a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/views/dashboard/link/Form.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("f6f1f922", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8466628a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Form.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8466628a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/config/helper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stack_error = stack_error;
function stack_error(response) {
    if (typeof response.data == 'string') {
        toastr.error(response.status + ' ' + response.statusText);
    } else {
        var data = response.data;
        var content = '';

        Object.keys(data).map(function (key, index) {
            var value = data[key];

            content += '<span style="color: #e74c3c">' + value[0] + '</span><br>';
        });

        swal({
            title: "Error Text!",
            type: 'error',
            text: content,
            html: true
        });
    }
}

/***/ }),

/***/ "./resources/assets/js/views/dashboard/link/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/dashboard/link/Edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-010e1d01\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/dashboard/link/Edit.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/assets/js/views/dashboard/link/Edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-010e1d01", Component.options)
  } else {
    hotAPI.reload("data-v-010e1d01", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/dashboard/link/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8466628a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/views/dashboard/link/Form.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/dashboard/link/Form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8466628a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/dashboard/link/Form.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8466628a"
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
Component.options.__file = "resources/assets/js/views/dashboard/link/Form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8466628a", Component.options)
  } else {
    hotAPI.reload("data-v-8466628a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});