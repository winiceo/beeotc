webpackJsonp([2],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/dashboard/article/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Form = __webpack_require__("./resources/assets/js/views/dashboard/article/Form.vue");

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { ArticleForm: _Form2.default }
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/dashboard/article/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _FormMixin = __webpack_require__("./resources/assets/js/views/dashboard/article/FormMixin.vue");

var _FormMixin2 = _interopRequireDefault(_FormMixin);

var _simplemde = __webpack_require__("./node_modules/simplemde/dist/simplemde.min.js");

var _simplemde2 = _interopRequireDefault(_simplemde);

var _vueMultiselect = __webpack_require__("./node_modules/vue-multiselect/dist/vue-multiselect.min.js");

var _vueMultiselect2 = _interopRequireDefault(_vueMultiselect);

var _helper = __webpack_require__("./resources/assets/js/config/helper.js");

var _vueDatepicker = __webpack_require__("./node_modules/vue-datepicker/vue-datepicker.vue");

var _vueDatepicker2 = _interopRequireDefault(_vueDatepicker);

var _traditional = __webpack_require__("./node_modules/fine-uploader/lib/traditional.js");

var _traditional2 = _interopRequireDefault(_traditional);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    mixins: [_FormMixin2.default],
    components: {
        Multiselect: _vueMultiselect2.default,
        DatePicker: _vueDatepicker2.default
    },
    props: {
        article: {
            type: Object,
            default: function _default() {
                return {
                    page_image: ''
                };
            }
        }
    },
    data: function data() {
        return {
            simplemde: '',
            content: ''
        };
    },

    computed: {
        mode: function mode() {
            return this.article.id ? 'update' : 'create';
        }
    },
    watch: {
        article: function article() {
            this.selected = this.article.category.data;
            this.tags = this.article.tags.data;
            this.simplemde.value(this.article.content);
            this.startTime.time = this.article.published_time;
        }
    },
    mounted: function mounted() {
        var t = this.$t;

        this.simplemde = new _simplemde2.default({
            element: document.getElementById("editor"),
            placeholder: t('form.content_placeholder', { type: t('form.article') }),
            autoDownloadFontAwesome: true,
            forceSync: true
        });

        this.contentUploader();
    },

    methods: {
        onSubmit: function onSubmit() {
            var _this = this;

            if (!this.tags || !this.selected) {
                toastr.error('Category and Tag must select one or more.');
                return;
            }

            var tagIDs = [];
            var url = 'article' + (this.article.id ? '/' + this.article.id : '');
            var method = this.article.id ? 'patch' : 'post';

            for (var i = 0; i < this.tags.length; i++) {
                tagIDs[i] = this.tags[i].id;
            }

            this.article.published_at = this.startTime.time;
            this.article.content = this.simplemde.value();
            this.article.category_id = this.selected.id;
            this.article.tags = JSON.stringify(tagIDs);

            this.$http[method](url, this.article).then(function (response) {
                toastr.success('You ' + _this.mode + 'd the article success!');

                _this.$router.push('/dashboard/articles');
            }).catch(function (_ref) {
                var response = _ref.response;

                (0, _helper.stack_error)(response);
            });
        },
        coverUploader: function coverUploader(event) {
            var _this2 = this;

            var files = event.target.files;

            var formData = new FormData();

            formData.append('image', files[0]);
            formData.append('strategy', 'cover');

            this.$http.post('file/upload', formData).then(function (response) {
                toastr.success('You upload a file success!');

                _this2.article.page_image = response.data.url;
            }).catch(function (_ref2) {
                var response = _ref2.response;

                if (response.data.error) {
                    toastr.error(response.data.error.message);
                } else {
                    toastr.error(response.status + ' : Resource ' + response.statusText);
                }
            });
        },
        contentUploader: function contentUploader() {
            var vm = this;

            this.simplemde.codemirror.on('paste', function (editor, event) {
                if (event.clipboardData.types.indexOf("Files") >= 0) {
                    event.preventDefault();
                }
            });

            var contentUploader = new _traditional2.default.FineUploaderBasic({
                paste: {
                    targetElement: document.querySelector('.CodeMirror')
                },
                request: {
                    endpoint: '/api/file/upload',
                    inputName: 'image',
                    customHeaders: {
                        'X-CSRF-TOKEN': window.Laravel.csrfToken,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    params: {
                        strategy: 'article'
                    }
                },
                validation: {
                    allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
                },
                callbacks: {
                    onPasteReceived: function onPasteReceived(file) {
                        var promise = new _traditional2.default.Promise();

                        if (file == null || typeof file.type == 'undefined' || file.type.indexOf('image/')) {
                            toastr.error('Only can upload image!');
                            return promise.failure('not a image.');
                        }

                        return promise.then(function () {
                            vm.createdImageUploading('image.png');
                        }).success('image');
                    },
                    onComplete: function onComplete(id, name, responseJSON) {
                        vm.replaceImageUploading(name, responseJSON.url);
                    }
                }
            });

            var dragAndDropModule = new _traditional2.default.DragAndDrop({
                dropZoneElements: [document.querySelector('.CodeMirror')],
                callbacks: {
                    processingDroppedFilesComplete: function processingDroppedFilesComplete(files, dropTarget) {
                        files.forEach(function (file) {
                            vm.createdImageUploading(file.name);
                        });
                        contentUploader.addFiles(files); //this submits the dropped files to Fine Uploader
                    }
                }
            });
        },
        getImageUploading: function getImageUploading() {
            return '\n![Uploading ...]()\n';
        },
        createdImageUploading: function createdImageUploading(name) {
            this.simplemde.value(this.simplemde.value() + this.getImageUploading());
        },
        replaceImageUploading: function replaceImageUploading(name, url) {
            var result = '\n![' + name + '](' + url + ')\n';

            this.simplemde.value(this.simplemde.value().replace(this.getImageUploading(), result));
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/dashboard/article/FormMixin.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            selected: null,
            options: [],
            tags: null,
            allTag: [],
            startTime: {
                time: ''
            },
            option: {
                type: 'min',
                week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                format: 'YYYY-MM-DD HH:mm:ss',
                placeholder: 'Published At?',
                inputStyle: {
                    'display': 'inline-block',
                    'padding': '6px',
                    'height': '41px',
                    'line-height': '22px',
                    'font-size': '16px',
                    'border': '2px solid #dce4ec',
                    'border-radius': '6px',
                    'color': '#5F5F5F'
                },
                color: {
                    header: '#52697f',
                    headerText: '#1abc9c'
                },
                buttons: {
                    ok: 'Ok',
                    cancel: 'Cancel'
                },
                overlayOpacity: 0.5,
                dismissible: true
            }
        };
    },
    mounted: function mounted() {
        this.option.placeholder = this.$t('form.published_at');
    },
    created: function created() {
        this.loadCategories();
        this.loadTags();
    },

    methods: {
        loadCategories: function loadCategories() {
            var _this = this;

            this.$http.get('categories').then(function (response) {
                _this.options = response.data.data;
            });
        },
        loadTags: function loadTags() {
            var _this2 = this;

            this.$http.get('tags').then(function (response) {
                _this2.allTag = response.data.data;
            });
        }
    }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0758db6b\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/views/dashboard/article/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "\n.cover-upload[data-v-0758db6b] {\n  display: inline-block;\n}\n.cover-upload .file[data-v-0758db6b] {\n    position: relative;\n    margin: 0 auto;\n    display: block;\n    width: 100px;\n    height: 41px;\n    line-height: 41px;\n    font-size: 12px;\n}\n.cover-upload .file span[data-v-0758db6b] {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n}\n.cover-upload .file input[data-v-0758db6b] {\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      width: 100px;\n      height: 30px;\n      opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/fine-uploader/lib/traditional.js":
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/beeotc/node_modules/fine-uploader/lib/traditional.js'");

/***/ }),

/***/ "./node_modules/simplemde/dist/simplemde.min.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/beeotc/node_modules/simplemde/dist/simplemde.min.js'");

/***/ }),

/***/ "./node_modules/vue-datepicker/vue-datepicker.vue":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/beeotc/node_modules/vue-datepicker/vue-datepicker.vue'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0758db6b\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/dashboard/article/Form.vue":
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
        _c("div", { staticClass: "col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "col-sm-2 control-label" }, [
              _vm._v(_vm._s(_vm.$t("form.category")))
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-10" },
              [
                _c("multiselect", {
                  attrs: {
                    options: _vm.options,
                    label: "name",
                    placeholder: _vm.$t("form.select_category"),
                    "track-by": "name"
                  },
                  model: {
                    value: _vm.selected,
                    callback: function($$v) {
                      _vm.selected = $$v
                    },
                    expression: "selected"
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
              {
                staticClass: "col-sm-2 control-label",
                attrs: { for: "title" }
              },
              [_vm._v(_vm._s(_vm.$t("form.title")))]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.article.title,
                    expression: "article.title"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "title", name: "title" },
                domProps: { value: _vm.article.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.article, "title", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-2 control-label",
                attrs: { for: "subtitle" }
              },
              [_vm._v(_vm._s(_vm.$t("form.subtitle")))]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.article.subtitle,
                    expression: "article.subtitle"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "subtitle", name: "subtitle" },
                domProps: { value: _vm.article.subtitle },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.article, "subtitle", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-2 control-label",
                attrs: { for: "page_image" }
              },
              [_vm._v(_vm._s(_vm.$t("form.page_image")))]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-5" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.article.page_image,
                    expression: "article.page_image"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  id: "page_image",
                  name: "page_image",
                  placeholder: "ex: /uploads/default_avatar.png"
                },
                domProps: { value: _vm.article.page_image },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.article, "page_image", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-5" }, [
              _vm.article.page_image != null && _vm.article.page_image != ""
                ? _c("img", {
                    attrs: {
                      src: _vm.article.page_image,
                      alt: "Pig Jian",
                      width: "41",
                      height: "41"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "cover-upload pull-right" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-success file",
                    attrs: { href: "javascript:;" }
                  },
                  [
                    _c("span", [_vm._v(_vm._s(_vm.$t("form.upload_file")))]),
                    _vm._v(" "),
                    _c("input", {
                      attrs: { type: "file" },
                      on: { change: _vm.coverUploader }
                    })
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-2 control-label",
                attrs: { for: "title" }
              },
              [_vm._v(_vm._s(_vm.$t("form.content")))]
            ),
            _vm._v(" "),
            _vm._m(0, false, false)
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
              {
                staticClass: "col-sm-2 control-label",
                attrs: { for: "meta_description" }
              },
              [_vm._v(_vm._s(_vm.$t("form.meta_description")))]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.article.meta_description,
                    expression: "article.meta_description"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "meta_description", name: "meta_description" },
                domProps: { value: _vm.article.meta_description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.article,
                      "meta_description",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { staticClass: "col-sm-2 control-label" }, [
              _vm._v(_vm._s(_vm.$t("form.datetime")))
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-10" },
              [
                _c("date-picker", {
                  attrs: { date: _vm.startTime, option: _vm.option }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("div", { staticClass: "col-sm-2 control-label" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.$t("form.is_draft")) +
                  "\n                "
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
                          value: _vm.article.is_draft,
                          expression: "article.is_draft"
                        }
                      ],
                      attrs: { type: "checkbox", name: "is_draft" },
                      domProps: {
                        checked: Array.isArray(_vm.article.is_draft)
                          ? _vm._i(_vm.article.is_draft, null) > -1
                          : _vm.article.is_draft
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.article.is_draft,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                (_vm.article.is_draft = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.article.is_draft = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.$set(_vm.article, "is_draft", $$c)
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
            _c("div", { staticClass: "col-sm-2 control-label" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.$t("form.is_original")) +
                  "\n                "
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
                          value: _vm.article.is_original,
                          expression: "article.is_original"
                        }
                      ],
                      attrs: { type: "checkbox", name: "is_original" },
                      domProps: {
                        checked: Array.isArray(_vm.article.is_original)
                          ? _vm._i(_vm.article.is_original, null) > -1
                          : _vm.article.is_original
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.article.is_original,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                (_vm.article.is_original = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.article.is_original = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.$set(_vm.article, "is_original", $$c)
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
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("div", { staticClass: "col-sm-offset-2 col-sm-10" }, [
              _c(
                "button",
                { staticClass: "btn btn-info", attrs: { type: "submit" } },
                [
                  _vm._v(
                    _vm._s(
                      _vm.article.id
                        ? _vm.$t("form.edit")
                        : _vm.$t("form.create")
                    )
                  )
                ]
              )
            ])
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
      _c("textarea", { attrs: { id: "editor" } })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0758db6b", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-29aa4be3\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/dashboard/article/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vue-form", { attrs: { title: _vm.$t("form.create_article") } }, [
    _c(
      "div",
      { attrs: { slot: "buttons" }, slot: "buttons" },
      [
        _c(
          "router-link",
          {
            staticClass: "btn btn-default",
            attrs: { to: "/dashboard/articles", exact: "" }
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
      [_c("article-form")],
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
    require("vue-hot-reload-api")      .rerender("data-v-29aa4be3", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/beeotc/node_modules/vue-multiselect/dist/vue-multiselect.min.js'");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0758db6b\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/views/dashboard/article/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0758db6b\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/views/dashboard/article/Form.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("d54f52c8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0758db6b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Form.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0758db6b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Form.vue");
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

/***/ "./resources/assets/js/views/dashboard/article/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/dashboard/article/Create.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-29aa4be3\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/dashboard/article/Create.vue")
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
Component.options.__file = "resources/assets/js/views/dashboard/article/Create.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29aa4be3", Component.options)
  } else {
    hotAPI.reload("data-v-29aa4be3", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/dashboard/article/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0758db6b\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/views/dashboard/article/Form.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/dashboard/article/Form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0758db6b\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/dashboard/article/Form.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0758db6b"
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
Component.options.__file = "resources/assets/js/views/dashboard/article/Form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0758db6b", Component.options)
  } else {
    hotAPI.reload("data-v-0758db6b", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/dashboard/article/FormMixin.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/dashboard/article/FormMixin.vue")
/* template */
var __vue_template__ = null
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
Component.options.__file = "resources/assets/js/views/dashboard/article/FormMixin.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d5d8ccf4", Component.options)
  } else {
    hotAPI.reload("data-v-d5d8ccf4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});