webpackJsonp([7],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/dashboard/discussion/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Form = __webpack_require__("./resources/assets/js/views/dashboard/discussion/Form.vue");

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { DiscussionForm: _Form2.default }
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/dashboard/discussion/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helper = __webpack_require__("./resources/assets/js/config/helper.js");

var _simplemde = __webpack_require__("./node_modules/simplemde/dist/simplemde.min.js");

var _simplemde2 = _interopRequireDefault(_simplemde);

var _vueMultiselect = __webpack_require__("./node_modules/vue-multiselect/dist/vue-multiselect.min.js");

var _vueMultiselect2 = _interopRequireDefault(_vueMultiselect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { Multiselect: _vueMultiselect2.default },
    props: {
        discussion: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    data: function data() {
        return {
            simplemde: {},
            tags: null,
            allTag: []
        };
    },

    computed: {
        mode: function mode() {
            return this.discussion.id ? 'update' : 'create';
        }
    },
    created: function created() {
        this.loadTags();
    },

    watch: {
        discussion: function discussion() {
            this.tags = this.discussion.tags.data;
            this.simplemde.value(this.discussion.content_raw);
        }
    },
    mounted: function mounted() {
        var t = this.$t;

        this.simplemde = new _simplemde2.default({
            element: document.getElementById("editor"),
            placeholder: t('form.content_placeholder', { type: t('form.discussion') }),
            autoDownloadFontAwesome: true
        });
    },

    methods: {
        loadTags: function loadTags() {
            var _this = this;

            this.$http.get('tags').then(function (response) {
                _this.allTag = response.data.data;
            });
        },
        onSubmit: function onSubmit() {
            var _this2 = this;

            if (this.tags.length == 0) {
                toastr.error('Tag must select one or more.');
                return;
            }

            var tagIDs = [];
            var url = 'discussion' + (this.discussion.id ? '/' + this.discussion.id : '');
            var method = this.discussion.id ? 'patch' : 'post';

            for (var i = 0; i < this.tags.length; i++) {
                tagIDs[i] = this.tags[i].id;
            }

            this.discussion.tags = JSON.stringify(tagIDs);
            this.discussion.content = this.simplemde.value();

            this.$http[method](url, this.discussion).then(function (response) {
                toastr.success('You ' + _this2.mode + 'd the discussion success!');

                _this2.$router.push('/dashboard/discussions');
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

/***/ "./node_modules/simplemde/dist/simplemde.min.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/beeotc/node_modules/simplemde/dist/simplemde.min.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-555e4a66\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/dashboard/discussion/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "form",
      {
        staticClass: "form-horizontal col-md-9 col-md-offset-1",
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.onSubmit($event)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c(
            "label",
            { staticClass: "col-sm-2 control-label", attrs: { for: "title" } },
            [_vm._v(_vm._s(_vm.$t("form.title")))]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-10" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.discussion.title,
                  expression: "discussion.title"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "title", name: "title" },
              domProps: { value: _vm.discussion.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.discussion, "title", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "col-sm-2 control-label" }, [
            _vm._v(_vm._s(_vm.$t("form.tag")))
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-sm-10" },
            [
              _c("multiselect", {
                attrs: {
                  options: _vm.allTag,
                  multiple: true,
                  searchable: true,
                  "hide-selected": true,
                  "close-on-select": false,
                  "clear-on-select": false,
                  limit: 5,
                  placeholder: _vm.$t("form.select_tag"),
                  label: "tag",
                  "track-by": "tag"
                },
                model: {
                  value: _vm.tags,
                  callback: function($$v) {
                    _vm.tags = $$v
                  },
                  expression: "tags"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c(
            "label",
            { staticClass: "col-sm-2 control-label", attrs: { for: "title" } },
            [_vm._v(_vm._s(_vm.$t("form.content")))]
          ),
          _vm._v(" "),
          _vm._m(0, false, false)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("div", { staticClass: "col-sm-2 control-label" }, [
            _vm._v(
              "\n                " +
                _vm._s(_vm.$t("form.status")) +
                "\n            "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-2" }, [
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
                        value: _vm.discussion.status,
                        expression: "discussion.status"
                      }
                    ],
                    attrs: { type: "checkbox", name: "status", value: "1" },
                    domProps: {
                      checked: Array.isArray(_vm.discussion.status)
                        ? _vm._i(_vm.discussion.status, "1") > -1
                        : _vm.discussion.status
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.discussion.status,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = "1",
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              (_vm.discussion.status = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.discussion.status = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.$set(_vm.discussion, "status", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "toggle" })
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("div", { staticClass: "col-sm-offset-2 col-sm-10" }, [
            _c(
              "button",
              { staticClass: "btn btn-info", attrs: { type: "submit" } },
              [
                _vm._v(
                  _vm._s(
                    _vm.discussion.id
                      ? _vm.$t("form.edit")
                      : _vm.$t("form.create")
                  )
                )
              ]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-10" }, [
      _c("textarea", { attrs: { id: "editor", name: "content" } })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-555e4a66", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-599ffac5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/dashboard/discussion/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vue-form",
    { attrs: { title: _vm.$t("form.create_discussion") } },
    [
      _c(
        "div",
        { attrs: { slot: "buttons" }, slot: "buttons" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-default",
              attrs: { to: "/dashboard/discussions", exact: "" }
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
        [_c("discussion-form")],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-599ffac5", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/beeotc/node_modules/vue-multiselect/dist/vue-multiselect.min.js'");

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

/***/ "./resources/assets/js/views/dashboard/discussion/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/dashboard/discussion/Create.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-599ffac5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/dashboard/discussion/Create.vue")
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
Component.options.__file = "resources/assets/js/views/dashboard/discussion/Create.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-599ffac5", Component.options)
  } else {
    hotAPI.reload("data-v-599ffac5", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/dashboard/discussion/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/dashboard/discussion/Form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-555e4a66\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/dashboard/discussion/Form.vue")
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
Component.options.__file = "resources/assets/js/views/dashboard/discussion/Form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-555e4a66", Component.options)
  } else {
    hotAPI.reload("data-v-555e4a66", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});