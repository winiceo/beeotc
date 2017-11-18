/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/axios/index.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/AvatarUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Cropper = __webpack_require__("./resources/assets/js/components/Cropper.vue");

var _Cropper2 = _interopRequireDefault(_Cropper);

var _Modal = __webpack_require__("./resources/assets/js/components/dashboard/Modal.vue");

var _Modal2 = _interopRequireDefault(_Modal);

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

exports.default = {
  components: { Modal: _Modal2.default, Cropper: _Cropper2.default },
  props: {
    src: {
      type: String,
      default: function _default() {
        return '';
      }
    }
  },
  data: function data() {
    return {
      cropImage: undefined,
      dialogVisible: false,
      imageType: 'image/png,image/gif,image/jpeg,image/jpg,image/tiff'
    };
  },

  methods: {
    upload: function upload(e) {
      var _this = this;

      var image = e.target.files[0];
      var formData = new FormData();

      formData.append('image', image);
      formData.append('strategy', 'avatar');

      this.$http.post('file/upload', formData).then(function (response) {
        _this.cropImage = response.data;

        _this.dialogVisible = true;
      });
    },
    succeed: function succeed() {
      this.dialogVisible = true;

      window.location = '/user/profile';
    }
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Comment.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toastrMin = __webpack_require__("./node_modules/toastr/build/toastr.min.js");

var _toastrMin2 = _interopRequireDefault(_toastrMin);

var _toastr = __webpack_require__("./resources/assets/js/config/toastr.js");

var _toastr2 = _interopRequireDefault(_toastr);

var _traditional = __webpack_require__("./node_modules/fine-uploader/lib/traditional.js");

var _traditional2 = _interopRequireDefault(_traditional);

var _helper = __webpack_require__("./resources/assets/js/config/helper.js");

var _VoteButton = __webpack_require__("./resources/assets/js/components/VoteButton.vue");

var _VoteButton2 = _interopRequireDefault(_VoteButton);

var _vTextcomplete = __webpack_require__("./node_modules/v-textcomplete/dist/v-textcomplete.js");

var _vTextcomplete2 = _interopRequireDefault(_vTextcomplete);

var _github_emoji = __webpack_require__("./resources/assets/js/vendor/github_emoji.js");

var _github_emoji2 = _interopRequireDefault(_github_emoji);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { VoteButton: _VoteButton2.default, TextComplete: _vTextcomplete2.default },
    props: {
        contentWrapperClass: {
            type: String,
            default: function _default() {
                return 'col-md-8 col-md-offset-2';
            }
        },
        title: {
            type: String,
            default: function _default() {
                return '';
            }
        },
        username: {
            type: String,
            default: function _default() {
                return '';
            }
        },
        userAvatar: {
            type: String,
            default: function _default() {
                return '';
            }
        },
        commentableType: {
            type: String,
            default: function _default() {
                return 'articles';
            }
        },
        commentableId: {
            type: String,
            default: function _default() {
                return 0;
            }
        },
        canComment: {
            type: Boolean,
            default: function _default() {
                return false;
            }
        },
        nullText: {
            type: String,
            default: function _default() {
                return 'Nothing...';
            }
        },
        nullClass: {
            type: String,
            default: function _default() {
                return 'none';
            }
        }
    },
    data: function data() {
        return {
            comments: [],
            content: '',
            isSubmiting: false,
            strategies: [{
                match: /(^|\s):([a-z0-9+\-\_]*)$/,
                search: function search(term, callback) {
                    callback(Object.keys(_github_emoji2.default).filter(function (name) {
                        return name.startsWith(term);
                    }).slice(0, 10));
                },
                template: function template(name) {
                    return '<img width="17" src="' + _github_emoji2.default[name] + '"></img> ' + name;
                },
                replace: function replace(value) {
                    return '$1:' + value + ': ';
                }
            }]
        };
    },
    mounted: function mounted() {
        var _this = this;

        var url = 'commentable/' + this.commentableId + '/comment';
        this.$http.get(url, {
            params: {
                commentable_type: this.commentableType
            }
        }).then(function (response) {
            response.data.data.forEach(function (data) {
                data.content_html = _this.parse(data.content_raw);

                return data;
            });
            _this.comments = response.data.data;
        });

        _toastrMin2.default.options = _toastr2.default;

        if (this.canComment) {
            this.contentUploader();
        }
    },

    methods: {
        comment: function comment() {
            var _this2 = this;

            var data = {
                content: this.content,
                commentable_id: this.commentableId,
                commentable_type: this.commentableType
            };

            this.isSubmiting = true;

            this.$http.post('comments', data).then(function (response) {
                var comment = null;

                comment = response.data.data;
                comment.content_html = _this2.parse(comment.content_raw);

                _this2.comments.push(comment);
                _this2.content = '';
                _this2.isSubmiting = false;

                _toastrMin2.default.success('You publish the comment success!');
            }).catch(function (_ref) {
                var response = _ref.response;

                _this2.isSubmiting = false;
                (0, _helper.stack_error)(response);
            });
        },
        reply: function reply(name) {
            $('#content').focus();
            this.content = '@' + name + ' ';
        },
        commentDelete: function commentDelete(index, id) {
            var _this3 = this;

            this.$http.delete('comments/' + id).then(function (response) {
                _this3.comments.splice(index, 1);
                _toastrMin2.default.success('You delete your comment success!');
            });
        },
        parse: function parse(html) {
            marked.setOptions({
                highlight: function highlight(code) {
                    return hljs.highlightAuto(code).value;
                }
            });

            return marked(html);
        },
        contentUploader: function contentUploader() {
            var vm = this;

            document.getElementById("content").addEventListener('paste', function (e) {
                if (event.clipboardData.types.indexOf("Files") >= 0) {
                    event.preventDefault();
                }
            }, false);

            var uploader = new _traditional2.default.FineUploaderBasic({
                paste: {
                    targetElement: document.querySelector('#content')
                },
                request: {
                    endpoint: '/api/file/upload',
                    inputName: 'image',
                    customHeaders: {
                        'X-CSRF-TOKEN': window.Laravel.csrfToken,
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    params: {
                        strategy: 'comment'
                    }
                },
                validation: {
                    allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
                },
                callbacks: {
                    onPasteReceived: function onPasteReceived(file) {

                        console.log('success');
                        var promise = new _traditional2.default.Promise();

                        if (file == null || typeof file.type == 'undefined' || file.type.indexOf('image/')) {
                            _toastrMin2.default.error('Only can upload image!');
                            return promise.failure('not a image.');
                        }

                        if (!/\/(?:jpeg|jpg|png|gif)/i.test(file.type)) {
                            _toastrMin2.default.error('Uploaded Failed! Image only supported jpeg, jpg, gif and png.');
                            return promise.failure('not a image.');
                        }

                        return promise.then(function () {
                            vm.createdImageUploading('image.png');
                        }).success('image');
                    },
                    onComplete: function onComplete(id, name, responseJSON) {
                        vm.replaceImageUploading(name, responseJSON.url);
                    },
                    onError: function onError() {
                        _toastrMin2.default.error('Uploaded Failed!');
                        vm.replaceImageUploading(name, '');
                    }
                }
            });

            var dragAndDropModule = new _traditional2.default.DragAndDrop({
                dropZoneElements: [document.querySelector('#content')],
                callbacks: {
                    processingDroppedFilesComplete: function processingDroppedFilesComplete(files, dropTarget) {
                        files.forEach(function (file) {
                            if (!/\/(?:jpeg|jpg|png|gif)/i.test(file.type)) {
                                _toastrMin2.default.error('Uploaded Failed! Image only supported jpeg, jpg, gif and png.');
                                return promise.failure('not a image.');
                            }
                            vm.createdImageUploading(file.name);
                        });
                        uploader.addFiles(files); //this submits the dropped files to Fine Uploader
                    }
                }
            });
        },
        getImageUploading: function getImageUploading() {
            return '\n![Uploading ...]()\n';
        },
        createdImageUploading: function createdImageUploading(name) {
            this.content = this.content + this.getImageUploading();
        },
        replaceImageUploading: function replaceImageUploading(name, url) {
            var result = '';

            if (url) {
                result = '\n![' + name + '](' + url + ')\n';
            }

            this.content = this.content.replace(this.getImageUploading(), result);
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Cropper.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__("./node_modules/cropperjs/dist/cropper.css");

var _cropperjs = __webpack_require__("./node_modules/cropperjs/dist/cropper.js");

var _cropperjs2 = _interopRequireDefault(_cropperjs);

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

exports.default = {
  components: { Cropper: _cropperjs2.default },
  props: {
    image: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    wrapper: {
      type: String,
      default: function _default() {
        return '';
      }
    },
    cropperWrapper: {
      type: String,
      default: function _default() {
        return '';
      }
    }
  },
  data: function data() {
    return {
      cropper: null
    };
  },
  mounted: function mounted() {
    this.createCropper();
  },

  watch: {
    image: function image(val) {
      this.replaceUrl();
    }
  },
  methods: {
    replaceUrl: function replaceUrl() {
      this.cropper.replace(this.image.url);
    },
    createCropper: function createCropper() {
      var image = document.getElementById('cropImage');
      this.cropper = new _cropperjs2.default(image, {
        aspectRatio: 1,
        autoCropArea: 1,
        movable: false,
        zoomable: false
      });
    },
    upload: function upload(e) {
      var that = this;

      var formData = {
        'image': this.image,
        'data': this.cropper.getData()
      };

      this.$http.post('crop/avatar', formData).then(function (response) {
        that.$emit('succeed');
      });
    },
    cancel: function cancel() {
      this.$emit('canceled');
    }
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Parse.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//


exports.default = {
    props: {
        content: {
            type: String,
            default: function _default() {
                return null;
            }
        }
    },
    data: function data() {
        return {
            rawHtml: ''
        };
    },
    created: function created() {
        this.rawHtml = marked(this.content);
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Textarea.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//

exports.default = {
    props: {
        content: {
            type: String,
            default: null
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/VoteButton.vue":
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

exports.default = {
  props: {
    item: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    api: {
      type: String,
      default: 'comments'
    }
  },
  data: function data() {
    return {
      isLike: false
    };
  },

  methods: {
    toggleStatus: function toggleStatus() {
      var count = this.item.vote_count;

      this.item.is_voting = !this.item.is_voting;

      this.item.vote_count = this.item.is_voting ? count + 1 : count - 1;
    },
    upVote: function upVote(id) {
      this.toggleVote(id, 'up');
    },
    downVote: function downVote(id) {
      this.toggleVote(id, 'down');
    },
    toggleVote: function toggleVote(id, type) {
      var _this = this;

      var url = this.api + '/vote/' + type;
      var upType = 'is_up_voted';
      var downType = 'is_down_voted';
      var checkType = type == 'up' ? downType : upType;
      var votingType = type == 'up' ? upType : downType;

      this.$http.post(url, { id: id }).then(function () {
        if (_this.item[checkType]) {
          _this.item[upType] = !_this.item[upType];
          _this.item[downType] = !_this.item[downType];
          type == 'up' ? _this.item.vote_count++ : _this.item.vote_count--;
        } else {
          _this.item[votingType] = !_this.item[votingType];
          if (type == 'up') _this.item[upType] ? _this.item.vote_count++ : _this.item.vote_count--;
        }
      }).catch(function (response) {
        if (response.status == 401) {
          window.location = '/login';
        }
      });
    }
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/dashboard/Modal.vue":
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

exports.default = {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: 'Modal'
        },
        small: {
            type: Boolean,
            default: false
        },
        large: {
            type: Boolean,
            default: false
        },
        full: {
            type: Boolean,
            default: false
        },
        force: {
            type: Boolean,
            default: false
        },
        confirmText: {
            type: String,
            default: 'OK'
        },
        cancelText: {
            type: String,
            default: 'Cancel'
        },
        confirmClass: {
            type: String,
            default: 'btn btn-info'
        },
        cancelClass: {
            type: String,
            default: 'btn btn-outline'
        },
        closeWhenConfirm: {
            type: Boolean,
            default: false
        },
        showFooter: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            duration: null
        };
    },

    computed: {
        modalClass: function modalClass() {
            return {
                'modal-lg': this.large,
                'modal-sm': this.small,
                'modal-full': this.full
            };
        }
    },
    created: function created() {
        if (this.show) {
            document.body.className += ' modal-open';
        }
    },
    beforeDestroy: function beforeDestroy() {
        document.body.className = document.body.className.replace(/\s?modal-open/, '');
    },

    watch: {
        show: function show(value) {
            if (value) {
                document.body.className += ' modal-open';
            } else {
                if (!this.duration) {
                    this.duration = window.getComputedStyle(this.$el)['transition-duration'].replace('s', '') * 1000;
                }
                window.setTimeout(function () {
                    document.body.className = document.body.className.replace(/\s?modal-open/, '');
                }, this.duration || 0);
            }
        }
    },
    methods: {
        confirm: function confirm() {
            this.$emit('confirm');
        },
        cancel: function cancel() {
            this.$emit('cancel');
        },
        clickMask: function clickMask() {
            if (!this.force) {
                this.cancel();
            }
        }
    }
};

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/bootstrap/dist/js/bootstrap.js'");

/***/ }),

/***/ "./node_modules/cropperjs/dist/cropper.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/cropperjs/dist/cropper.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./cropper.css", function() {
			var newContent = require("!!../../css-loader/index.js!./cropper.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/cropperjs/dist/cropper.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/cropperjs/dist/cropper.js'");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/cropperjs/dist/cropper.css":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/cropperjs/dist/cropper.css'");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/iview/dist/styles/iview.css":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/iview/dist/styles/iview.css'");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-321d3a26\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Cropper.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "\n.footer[data-v-321d3a26] {\n  margin-top: 30px;\n  display: block;\n  text-align: center;\n  background-color: transparent;\n}\n.footer button[data-v-321d3a26] {\n    margin-left: 40px;\n    margin-right: 40px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-323eb971\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/AvatarUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "\n.file[data-v-323eb971] {\n  position: relative;\n  margin: 0 auto;\n  display: block;\n  width: 100px;\n  height: 30px;\n  line-height: 30px;\n  font-size: 10px;\n}\n.file span[data-v-323eb971] {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n.file input[data-v-323eb971] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    width: 100px;\n    height: 30px;\n    opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-467dc58b\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/Modal.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "\n.modal[data-v-467dc58b] {\n    display: block;\n    position: fixed;\n    z-index: 9998;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    -webkit-transition: opacity .3s ease;\n    transition: opacity .3s ease;\n}\n.modal-header[data-v-467dc58b] {\n    padding-bottom: 25px;\n    border: none;\n}\n.modal-dialog[data-v-467dc58b] {\n    display: table;\n    vertical-align: middle;\n    margin: 30px auto;\n}\n.modal-content[data-v-467dc58b] {\n    background-color: #fff;\n    border-radius: 5px;\n    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n    font-family: Helvetica, Arial, sans-serif;\n}\n.modal-enter[data-v-467dc58b] {\n    opacity: 0;\n}\n.modal-leave-active[data-v-467dc58b] {\n    opacity: 0;\n}\n.modal-enter .modal-content[data-v-467dc58b],\n.modal-leave-active .modal-content[data-v-467dc58b] {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n.btn-outline[data-v-467dc58b] {\n    color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/css-loader/lib/css-base.js'");

/***/ }),

/***/ "./node_modules/fine-uploader/lib/traditional.js":
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/fine-uploader/lib/traditional.js'");

/***/ }),

/***/ "./node_modules/iview/dist/iview.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/iview/dist/iview.js'");

/***/ }),

/***/ "./node_modules/iview/dist/styles/iview.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/iview/dist/styles/iview.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./iview.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./iview.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/jquery/dist/jquery.js'");

/***/ }),

/***/ "./node_modules/marked/lib/marked.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/marked/lib/marked.js'");

/***/ }),

/***/ "./node_modules/social-share.js/dist/js/social-share.min.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/social-share.js/dist/js/social-share.min.js'");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/style-loader/lib/addStyles.js'");

/***/ }),

/***/ "./node_modules/sweetalert/lib/sweetalert.js":
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/sweetalert/lib/sweetalert.js'");

/***/ }),

/***/ "./node_modules/toastr/build/toastr.min.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/toastr/build/toastr.min.js'");

/***/ }),

/***/ "./node_modules/v-textcomplete/dist/v-textcomplete.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/v-textcomplete/dist/v-textcomplete.js'");

/***/ }),

/***/ "./node_modules/vue-i18n/dist/vue-i18n.common.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/vue-i18n/dist/vue-i18n.common.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/vue-loader/lib/component-normalizer.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-29229e33\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/VoteButton.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", { staticClass: "vote-button" }, [
    _c(
      "a",
      {
        attrs: { href: "javascript:;" },
        on: {
          click: function($event) {
            _vm.upVote(_vm.item.id)
          }
        }
      },
      [
        _c("i", {
          class: _vm.item.is_up_voted
            ? "ion-happy text-success"
            : "ion-happy-outline"
        }),
        _vm._v(" "),
        _vm.item.vote_count > 0
          ? _c("small", [_vm._v(_vm._s(_vm.item.vote_count))])
          : _vm._e()
      ]
    ),
    _vm._v(" "),
    _c(
      "a",
      {
        attrs: { href: "javascript:;" },
        on: {
          click: function($event) {
            _vm.downVote(_vm.item.id)
          }
        }
      },
      [
        _c("i", {
          class: _vm.item.is_down_voted
            ? "ion-sad text-danger"
            : "ion-sad-outline"
        })
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
    require("vue-hot-reload-api")      .rerender("data-v-29229e33", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-321d3a26\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Cropper.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.wrapper }, [
    _c("div", { class: _vm.cropperWrapper }, [
      _c("img", {
        staticStyle: { width: "100%" },
        attrs: { id: "cropImage", src: _vm.image.url }
      })
    ]),
    _vm._v(" "),
    _c(
      "span",
      { staticClass: "footer", attrs: { slot: "footer" }, slot: "footer" },
      [
        _c(
          "button",
          {
            staticClass: "btn btn-outline-secondary",
            on: { click: _vm.cancel }
          },
          [_vm._v(_vm._s(_vm.$t("form.cancel")))]
        ),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-primary", on: { click: _vm.upload } },
          [_vm._v(_vm._s(_vm.$t("form.ok")))]
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-321d3a26", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-323eb971\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/AvatarUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "cover-avatar text-center" },
    [
      _c("img", { staticClass: "avatar", attrs: { src: _vm.src } }),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-success file",
          attrs: { href: "javascript:;" }
        },
        [
          _c("span", [_vm._v(_vm._s(_vm.$t("form.modify_avatar")))]),
          _vm._v(" "),
          _c("input", {
            attrs: { type: "file", name: "avatar", accept: _vm.imageType },
            on: { change: _vm.upload }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: { show: _vm.dialogVisible },
          on: {
            cancel: function($event) {
              _vm.dialogVisible = false
            }
          }
        },
        [
          _c("div", { attrs: { slot: "title" }, slot: "title" }, [
            _vm._v(_vm._s(_vm.$t("form.crop_avatar")))
          ]),
          _vm._v(" "),
          _c("cropper", {
            attrs: { image: _vm.cropImage },
            on: {
              canceled: function($event) {
                _vm.dialogVisible = false
              },
              succeed: _vm.succeed
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-323eb971", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-467dc58b\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/dashboard/Modal.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show
    ? _c("transition", { attrs: { name: "modal" } }, [
        _c(
          "div",
          {
            staticClass: "modal",
            on: {
              click: function($event) {
                if ($event.target !== $event.currentTarget) {
                  return null
                }
                _vm.clickMask($event)
              }
            }
          },
          [
            _c("div", { staticClass: "modal-dialog", class: _vm.modalClass }, [
              _c("div", { staticClass: "modal-content" }, [
                _c(
                  "div",
                  { staticClass: "modal-header" },
                  [
                    _vm._t("header", [
                      _c(
                        "a",
                        {
                          staticClass: "close",
                          attrs: { type: "button" },
                          on: { click: _vm.cancel }
                        },
                        [_c("i", { staticClass: "ion-close-round" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "h4",
                        { staticClass: "modal-title" },
                        [
                          _vm._t("title", [
                            _vm._v(
                              "\n                                " +
                                _vm._s(_vm.title) +
                                "\n                            "
                            )
                          ])
                        ],
                        2
                      )
                    ])
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "modal-body" },
                  [_vm._t("default")],
                  2
                ),
                _vm._v(" "),
                _vm.showFooter
                  ? _c(
                      "div",
                      { staticClass: "modal-footer" },
                      [
                        _vm._t("footer", [
                          _c(
                            "button",
                            {
                              class: _vm.cancelClass,
                              attrs: { type: "button" },
                              on: { click: _vm.cancel }
                            },
                            [_vm._v(_vm._s(_vm.cancelText))]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              class: _vm.confirmClass,
                              attrs: { type: "button" },
                              on: { click: _vm.confirm }
                            },
                            [_vm._v(_vm._s(_vm.confirmText))]
                          )
                        ])
                      ],
                      2
                    )
                  : _vm._e()
              ])
            ])
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-467dc58b", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4bbbdce8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Parse.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    staticClass: "markdown",
    domProps: { innerHTML: _vm._s(_vm.rawHtml) }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4bbbdce8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-725e0371\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Textarea.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("textarea", {
    staticClass: "form-control",
    attrs: { id: "content", rows: "12", name: "content" },
    domProps: { textContent: _vm._s(_vm.content) }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-725e0371", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-82b07a10\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Comment.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row comment" }, [
      _c("div", { staticClass: "col-md-8 col-md-offset-2" }, [
        _c("h5", [_vm._v(_vm._s(_vm.title))])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { class: _vm.contentWrapperClass },
        [
          _vm.comments.length == 0
            ? _c("div", { class: _vm.nullClass }, [
                _vm._v(_vm._s(_vm.nullText))
              ])
            : _vm._l(_vm.comments, function(comment, index) {
                return _c("div", { staticClass: "media" }, [
                  _c("div", { staticClass: "media-left" }, [
                    _c("a", { attrs: { href: "/user/" + comment.username } }, [
                      _c("img", {
                        staticClass: "media-object img-circle",
                        attrs: { src: comment.avatar }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-body box-body" }, [
                    _c("div", { staticClass: "heading" }, [
                      _c("i", { staticClass: "ion-person" }),
                      _c(
                        "a",
                        { attrs: { href: "/user/" + comment.username } },
                        [_vm._v(_vm._s(comment.username))]
                      ),
                      _vm._v(
                        "\n                            \n                        "
                      ),
                      _c("i", { staticClass: "ion-clock" }),
                      _vm._v(
                        _vm._s(comment.created_at) +
                          "\n                        "
                      ),
                      _c(
                        "span",
                        { staticClass: "pull-right operate" },
                        [
                          _vm.username != comment.username
                            ? _c("vote-button", { attrs: { item: comment } })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.username == comment.username
                            ? _c(
                                "a",
                                {
                                  attrs: { href: "javascript:;" },
                                  on: {
                                    click: function($event) {
                                      _vm.commentDelete(index, comment.id)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "ion-trash-b" })]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: { href: "javascript:;" },
                              on: {
                                click: function($event) {
                                  _vm.reply(comment.username)
                                }
                              }
                            },
                            [_c("i", { staticClass: "ion-ios-undo" })]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "comment-body markdown",
                      class: comment.is_down_voted ? "downvoted" : "",
                      domProps: { innerHTML: _vm._s(comment.content_html) }
                    })
                  ])
                ])
              }),
          _vm._v(" "),
          _vm.canComment
            ? _c(
                "form",
                {
                  staticClass: "form-horizontal",
                  staticStyle: { "margin-top": "30px" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.comment($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      { staticClass: "col-sm-2 control-label own-avatar" },
                      [
                        _c("a", { attrs: { href: "/user/" + _vm.username } }, [
                          _c("img", {
                            staticClass: "img-circle",
                            attrs: { src: _vm.userAvatar }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-10" },
                      [
                        _c("text-complete", {
                          attrs: {
                            id: "content",
                            "area-class": "form-control",
                            placeholder: "Markdown",
                            rows: 7,
                            strategies: _vm.strategies
                          },
                          model: {
                            value: _vm.content,
                            callback: function($$v) {
                              _vm.content = $$v
                            },
                            expression: "content"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success pull-right",
                          attrs: {
                            type: "submit",
                            disabled: _vm.isSubmiting ? true : false
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("form.submit_comment")))]
                      )
                    ])
                  ])
                ]
              )
            : _vm._e()
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-82b07a10", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-321d3a26\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Cropper.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-321d3a26\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Cropper.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("44c86677", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-321d3a26\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Cropper.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-321d3a26\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Cropper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-323eb971\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/AvatarUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-323eb971\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/AvatarUpload.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3b8bafd0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-323eb971\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./AvatarUpload.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-323eb971\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./AvatarUpload.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-467dc58b\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/Modal.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-467dc58b\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/Modal.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("9086b738", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-467dc58b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Modal.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-467dc58b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/vue-style-loader/lib/addStylesClient.js'");

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/vue/dist/vue.common.js'");

/***/ }),

/***/ "./resources/assets/js/components/AvatarUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-323eb971\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/AvatarUpload.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/AvatarUpload.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-323eb971\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/AvatarUpload.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-323eb971"
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
Component.options.__file = "resources/assets/js/components/AvatarUpload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-323eb971", Component.options)
  } else {
    hotAPI.reload("data-v-323eb971", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Comment.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Comment.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-82b07a10\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Comment.vue")
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
Component.options.__file = "resources/assets/js/components/Comment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-82b07a10", Component.options)
  } else {
    hotAPI.reload("data-v-82b07a10", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Cropper.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-321d3a26\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/Cropper.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Cropper.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-321d3a26\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Cropper.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-321d3a26"
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
Component.options.__file = "resources/assets/js/components/Cropper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-321d3a26", Component.options)
  } else {
    hotAPI.reload("data-v-321d3a26", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Parse.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Parse.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4bbbdce8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Parse.vue")
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
Component.options.__file = "resources/assets/js/components/Parse.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4bbbdce8", Component.options)
  } else {
    hotAPI.reload("data-v-4bbbdce8", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Textarea.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/Textarea.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-725e0371\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/Textarea.vue")
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
Component.options.__file = "resources/assets/js/components/Textarea.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-725e0371", Component.options)
  } else {
    hotAPI.reload("data-v-725e0371", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/VoteButton.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/VoteButton.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-29229e33\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/VoteButton.vue")
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
Component.options.__file = "resources/assets/js/components/VoteButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29229e33", Component.options)
  } else {
    hotAPI.reload("data-v-29229e33", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/dashboard/Modal.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-467dc58b\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/Modal.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/dashboard/Modal.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-467dc58b\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/dashboard/Modal.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-467dc58b"
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
Component.options.__file = "resources/assets/js/components/dashboard/Modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-467dc58b", Component.options)
  } else {
    hotAPI.reload("data-v-467dc58b", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/config/base.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var apiUrl = exports.apiUrl = '/api/';

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

/***/ "./resources/assets/js/config/toastr.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    positionClass: "toast-bottom-right",
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut"
};

/***/ }),

/***/ "./resources/assets/js/home.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueI18n = __webpack_require__("./node_modules/vue-i18n/dist/vue-i18n.common.js");

var _vueI18n2 = _interopRequireDefault(_vueI18n);

var _lang = __webpack_require__("./resources/assets/js/lang/index.js");

var _lang2 = _interopRequireDefault(_lang);

var _http = __webpack_require__("./resources/assets/js/plugins/http/index.js");

var _http2 = _interopRequireDefault(_http);

var _iview = __webpack_require__("./node_modules/iview/dist/iview.js");

var _iview2 = _interopRequireDefault(_iview);

__webpack_require__("./node_modules/iview/dist/styles/iview.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.$ = window.jQuery = __webpack_require__("./node_modules/jquery/dist/jquery.js");
window.swal = __webpack_require__("./node_modules/sweetalert/lib/sweetalert.js");
window.Vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

__webpack_require__("./node_modules/bootstrap/dist/js/bootstrap.js");
__webpack_require__("./node_modules/social-share.js/dist/js/social-share.min.js");
__webpack_require__("./resources/assets/js/vendor/select2.min.js");
window.marked = __webpack_require__("./node_modules/marked/lib/marked.js");
window.hljs = __webpack_require__("./resources/assets/js/vendor/highlight.min.js");
window.toastr = __webpack_require__("./node_modules/toastr/build/toastr.min.js");

Vue.use(_iview2.default);
Vue.use(_vueI18n2.default);
Vue.use(_http2.default);

Vue.config.lang = window.Language;

var i18n = new _vueI18n2.default({
    locale: Vue.config.lang,
    messages: _lang2.default
});

Vue.component('comment', __webpack_require__("./resources/assets/js/components/Comment.vue"));

Vue.component('parse', __webpack_require__("./resources/assets/js/components/Parse.vue"));

Vue.component('parse-textarea', __webpack_require__("./resources/assets/js/components/Textarea.vue"));

Vue.component('avatar', __webpack_require__("./resources/assets/js/components/AvatarUpload.vue"));

new Vue({
    i18n: i18n
}).$mount('#app');

/***/ }),

/***/ "./resources/assets/js/lang/en/form.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    'name': 'Username',
    'email': 'Email',
    'password': 'Password',
    'confirm_password': 'Confirm Password',
    'category': 'Category',
    'select_option': 'Select Option',
    'title': 'Title',
    'subtitle': 'SubTitle',
    'page_image': 'Page Image',
    'content': 'Content',
    'content_notice': 'Please input the content',
    'tag': 'Tag',
    'select_tag': 'Select Tags',
    'select_category': 'Select Categories',
    'meta_description': 'Meta Description',
    'datetime': 'Date Time',
    'is_draft': 'Is Draft?',
    'is_original': 'Is Original?',
    'status': 'Status',
    'discussions': 'Discussion',
    'articles': 'Article',
    'folder_name': 'Folder Name',
    'file': 'File',
    'file_name': 'File Name',
    'cancel': 'Cancel',
    'ok': 'OK',
    'category_name': 'Category Name',
    'description': 'Description',
    'path': 'Path',
    'link_name': 'Link Name',
    'link': 'Link',
    'image': 'Image',
    'is_enable': 'Is Enable',
    'yes': 'Yes',
    'no': 'No',
    'create_user': 'Create User',
    'edit_user': 'Edit User',
    'back': 'Back',
    'nickname': 'Nick Name',
    'website': 'Website',
    'create_article': 'Create Article',
    'edit_article': 'Edit Article',
    'create_discussion': 'Create Discussion',
    'edit_discussion': 'Edit Discussion',
    'edit_comment': 'Edit Comment',
    'submit_comment': 'Submit',
    'create_tag': 'Create Tag',
    'edit_tag': 'Edit Tag',
    'create_folder': 'Create New Folder',
    'upload_file': 'Upload New File',
    'create_category': 'Create Category',
    'edit_category': 'Edit Category',
    'category_description': 'Please input category\'s description',
    'create_link': 'Create Link',
    'edit_link': 'Edit Link',
    'create': 'Create',
    'edit': 'Edit',
    'crop_avatar': 'Crop Avatar',
    'modify_avatar': 'Modify Avatar',
    'content_placeholder': 'Please input the %{type} content.',
    'article': 'article',
    'discussion': 'discussion',
    'comment': 'comment',
    'published_at': 'Published At?'

};

/***/ }),

/***/ "./resources/assets/js/lang/en/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sidebar = __webpack_require__("./resources/assets/js/lang/en/sidebar.js");

var _sidebar2 = _interopRequireDefault(_sidebar);

var _page = __webpack_require__("./resources/assets/js/lang/en/page.js");

var _page2 = _interopRequireDefault(_page);

var _table = __webpack_require__("./resources/assets/js/lang/en/table.js");

var _table2 = _interopRequireDefault(_table);

var _form = __webpack_require__("./resources/assets/js/lang/en/form.js");

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    sidebar: _sidebar2.default,
    page: _page2.default,
    table: _table2.default,
    form: _form2.default
};

/***/ }),

/***/ "./resources/assets/js/lang/en/page.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    users: 'Users',
    visitors: 'Visitors',
    articles: 'Articles',
    comments: 'Comments',
    discussions: 'Discussions',
    files: 'Files',
    tags: 'Tags',
    categories: 'Categories',
    links: 'Links',
    systems: 'Systems',
    user_num: 'Users',
    view_num: 'Views',
    article_num: 'Articles',
    comment_num: 'Comments',
    all: 'All',
    admin: 'Admin',
    create: 'Create',
    system: 'System',
    database: 'Database',
    key: 'Setting',
    value: 'Value',
    server: 'Web Server',
    domain: 'Domain',
    version: 'Version',
    extension: 'Extension',
    driver: 'Driver',
    nothing: 'No Content'
};

/***/ }),

/***/ "./resources/assets/js/lang/en/sidebar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    dashboard: 'Dashboard',
    user: 'Users',
    article: 'Articles',
    discussion: 'Discussion',
    comment: 'Comments',
    tag: 'Tags',
    file: 'Files',
    category: 'Categories',
    link: 'Links',
    visitor: 'Visitors',
    system: 'Systems'
};

/***/ }),

/***/ "./resources/assets/js/lang/en/table.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    id: 'ID',
    avatar: 'Avatar',
    username: 'User Name',
    email: 'E-Mail Address',
    status: 'Status',
    title: 'Title',
    subtitle: 'Sub Title',
    created_at: 'Created At',
    published_at: 'Published At',
    comment_type: 'Commentable Type',
    comment_title: 'Commentable Title',
    tag: 'Tag',
    meta_description: 'Meta Description',
    name: 'Name',
    type: 'Type',
    date: 'Date Time',
    size: 'Size',
    action: 'Actions',
    path: 'Path',
    image: 'Image',
    link: 'Link',
    enabled: 'Enabled',
    article_title: 'Article Title',
    click_num: 'Clicks Num',
    ip: 'IP',
    new_folder: 'New Folder',
    upload: 'Uplaod'
};

/***/ }),

/***/ "./resources/assets/js/lang/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _en = __webpack_require__("./resources/assets/js/lang/en/index.js");

var _en2 = _interopRequireDefault(_en);

var _zh_cn = __webpack_require__("./resources/assets/js/lang/zh_cn/index.js");

var _zh_cn2 = _interopRequireDefault(_zh_cn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    en: _en2.default,
    zh_cn: _zh_cn2.default
};

/***/ }),

/***/ "./resources/assets/js/lang/zh_cn/form.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    'name': '用户名',
    'email': '邮箱',
    'password': '密码',
    'confirm_password': '确认密码',
    'category': '分类',
    'select_option': '选择选项',
    'title': '标题',
    'subtitle': '副标题',
    'page_image': '页面图像',
    'content': '内容',
    'content_notice': '请输入内容',
    'tag': '标签',
    'select_tag': '选择标签',
    'select_category': '选择分类',
    'meta_description': '主要描述',
    'datetime': '日期时间',
    'is_draft': '是否草稿？',
    'is_original': '是否原创？',
    'status': '状态',
    'discussions': '讨论',
    'articles': '文章',
    'folder_name': '文件夹名',
    'file': '文件',
    'file_name': '文件名',
    'cancel': '取消',
    'ok': '确认',
    'category_name': '分类名字',
    'description': '描述',
    'path': '路径',
    'link_name': '链接名',
    'link': '链接',
    'image': '图像',
    'is_enable': '是否开启',
    'yes': '是',
    'no': '否',
    'create_user': '创建用户',
    'edit_user': '修改用户',
    'back': '返回',
    'nickname': '昵称',
    'website': '网站地址',
    'create_article': '创建文章',
    'edit_article': '修改文章',
    'create_discussion': '创建讨论',
    'edit_discussion': '修改讨论',
    'edit_comment': '修改评论',
    'submit_comment': '发布评论',
    'create_tag': '创建标签',
    'edit_tag': '修改标签',
    'create_folder': '创建文件夹',
    'upload_file': '上传文件',
    'create_category': '创建分类',
    'edit_category': '修改分类',
    'category_description': '请输入分类描述',
    'create_link': '创建友链',
    'edit_link': '修改友链',
    'create': '创建',
    'edit': '修改',
    'crop_avatar': '裁剪头像',
    'modify_avatar': '修改头像',
    'content_placeholder': '请输入{type}内容。',
    'article': '文章',
    'discussion': '讨论',
    'comment': '评论',
    'published_at': '发布时间？'

};

/***/ }),

/***/ "./resources/assets/js/lang/zh_cn/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sidebar = __webpack_require__("./resources/assets/js/lang/zh_cn/sidebar.js");

var _sidebar2 = _interopRequireDefault(_sidebar);

var _page = __webpack_require__("./resources/assets/js/lang/zh_cn/page.js");

var _page2 = _interopRequireDefault(_page);

var _table = __webpack_require__("./resources/assets/js/lang/zh_cn/table.js");

var _table2 = _interopRequireDefault(_table);

var _form = __webpack_require__("./resources/assets/js/lang/zh_cn/form.js");

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    sidebar: _sidebar2.default,
    page: _page2.default,
    table: _table2.default,
    form: _form2.default
};

/***/ }),

/***/ "./resources/assets/js/lang/zh_cn/page.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    users: '用户列表',
    visitors: '访问列表',
    articles: '文章列表',
    comments: '评论列表',
    discussions: '讨论列表',
    files: '文件列表',
    tags: '标签列表',
    categories: '分类列表',
    links: '友链列表',
    systems: '系统设置',
    user_num: '用户数',
    view_num: '访问数',
    article_num: '文章数',
    comment_num: '评论数',
    all: '全部',
    admin: '管理员',
    create: '创建',
    system: '系统',
    database: '数据库',
    key: '设置',
    value: '值',
    server: '网站服务器',
    domain: '域名',
    version: '版本',
    extension: '扩展',
    driver: '驱动',
    nothing: 'No Content'
};

/***/ }),

/***/ "./resources/assets/js/lang/zh_cn/sidebar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    dashboard: '面板',
    user: '用户管理',
    article: '文章管理',
    discussion: '讨论管理',
    comment: '评论管理',
    tag: '标签管理',
    file: '文件管理',
    category: '分类管理',
    link: '友链管理',
    visitor: '访问列表',
    system: '系统配置'
};

/***/ }),

/***/ "./resources/assets/js/lang/zh_cn/table.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    id: 'ID',
    avatar: '头像',
    username: '用户名',
    email: '邮箱地址',
    status: '状态',
    title: '标题',
    subtitle: '副标题',
    created_at: '创建时间',
    published_at: '发布时间',
    comment_type: '评论类型',
    comment_title: '评论标题',
    tag: '标签',
    meta_description: '描述',
    name: '名字',
    type: '类型',
    date: '日期',
    size: '大小',
    action: '操作',
    path: '路径',
    image: '图片',
    link: '链接',
    enabled: '是否启用',
    article_title: '文章标题',
    click_num: '点击次数',
    ip: 'IP',
    new_folder: '创建文件夹',
    upload: '上传图片'
};

/***/ }),

/***/ "./resources/assets/js/plugins/http/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.http = undefined;
exports.default = install;

var _axios = __webpack_require__("./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _base = __webpack_require__("./resources/assets/js/config/base.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create Axios
 */
var http = exports.http = _axios2.default.create({
  baseURL: _base.apiUrl
});

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
http.defaults.headers.common = {
  'X-CSRF-TOKEN': window.Laravel.csrfToken,
  'X-Requested-With': 'XMLHttpRequest'
};

/**
 * Handle all error messages.
 */
http.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  var response = error.response;


  if ([401].indexOf(response.status) >= 0) {
    if (response.status == 401 && response.data.error.message != 'Unauthorized') {
      return Promise.reject(response);
    }
    window.location = '/login';
  }

  return Promise.reject(error);
});

function install(Vue) {
  Object.defineProperty(Vue.prototype, '$http', {
    get: function get() {
      return http;
    }
  });
}

/***/ }),

/***/ "./resources/assets/js/vendor/github_emoji.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  '+1': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png?v7',
  '-1': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44e.png?v7',
  '100': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4af.png?v7',
  '1234': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f522.png?v7',
  '1st_place_medal': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f947.png?v7',
  '2nd_place_medal': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f948.png?v7',
  '3rd_place_medal': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f949.png?v7',
  '8ball': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b1.png?v7',
  'a': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f170.png?v7',
  'ab': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f18e.png?v7',
  'abc': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f524.png?v7',
  'abcd': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f521.png?v7',
  'accept': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f251.png?v7',
  'aerial_tramway': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a1.png?v7',
  'afghanistan': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1eb.png?v7',
  'airplane': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2708.png?v7',
  'aland_islands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1fd.png?v7',
  'alarm_clock': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23f0.png?v7',
  'albania': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1f1.png?v7',
  'alembic': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2697.png?v7',
  'algeria': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e9-1f1ff.png?v7',
  'alien': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f47d.png?v7',
  'ambulance': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f691.png?v7',
  'american_samoa': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1f8.png?v7',
  'amphora': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3fa.png?v7',
  'anchor': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2693.png?v7',
  'andorra': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1e9.png?v7',
  'angel': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f47c.png?v7',
  'anger': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a2.png?v7',
  'angola': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1f4.png?v7',
  'angry': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f620.png?v7',
  'anguilla': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1ee.png?v7',
  'anguished': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f627.png?v7',
  'ant': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f41c.png?v7',
  'antarctica': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1f6.png?v7',
  'antigua_barbuda': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1ec.png?v7',
  'apple': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34e.png?v7',
  'aquarius': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2652.png?v7',
  'argentina': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1f7.png?v7',
  'aries': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2648.png?v7',
  'armenia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1f2.png?v7',
  'arrow_backward': 'https://assets-cdn.github.com/images/icons/emoji/unicode/25c0.png?v7',
  'arrow_double_down': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23ec.png?v7',
  'arrow_double_up': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23eb.png?v7',
  'arrow_down': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2b07.png?v7',
  'arrow_down_small': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f53d.png?v7',
  'arrow_forward': 'https://assets-cdn.github.com/images/icons/emoji/unicode/25b6.png?v7',
  'arrow_heading_down': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2935.png?v7',
  'arrow_heading_up': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2934.png?v7',
  'arrow_left': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2b05.png?v7',
  'arrow_lower_left': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2199.png?v7',
  'arrow_lower_right': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2198.png?v7',
  'arrow_right': 'https://assets-cdn.github.com/images/icons/emoji/unicode/27a1.png?v7',
  'arrow_right_hook': 'https://assets-cdn.github.com/images/icons/emoji/unicode/21aa.png?v7',
  'arrow_up': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2b06.png?v7',
  'arrow_up_down': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2195.png?v7',
  'arrow_up_small': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f53c.png?v7',
  'arrow_upper_left': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2196.png?v7',
  'arrow_upper_right': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2197.png?v7',
  'arrows_clockwise': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f503.png?v7',
  'arrows_counterclockwise': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f504.png?v7',
  'art': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a8.png?v7',
  'articulated_lorry': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f69b.png?v7',
  'artificial_satellite': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6f0.png?v7',
  'aruba': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1fc.png?v7',
  'asterisk': 'https://assets-cdn.github.com/images/icons/emoji/unicode/002a-20e3.png?v7',
  'astonished': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f632.png?v7',
  'athletic_shoe': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f45f.png?v7',
  'atm': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e7.png?v7',
  'atom': 'https://assets-cdn.github.com/images/icons/emoji/atom.png?v7',
  'atom_symbol': 'https://assets-cdn.github.com/images/icons/emoji/unicode/269b.png?v7',
  'australia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1fa.png?v7',
  'austria': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1f9.png?v7',
  'avocado': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f951.png?v7',
  'azerbaijan': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1ff.png?v7',
  'b': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f171.png?v7',
  'baby': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f476.png?v7',
  'baby_bottle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f37c.png?v7',
  'baby_chick': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f424.png?v7',
  'baby_symbol': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6bc.png?v7',
  'back': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f519.png?v7',
  'bacon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f953.png?v7',
  'badminton': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3f8.png?v7',
  'baggage_claim': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6c4.png?v7',
  'baguette_bread': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f956.png?v7',
  'bahamas': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1f8.png?v7',
  'bahrain': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1ed.png?v7',
  'balance_scale': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2696.png?v7',
  'balloon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f388.png?v7',
  'ballot_box': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5f3.png?v7',
  'ballot_box_with_check': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2611.png?v7',
  'bamboo': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f38d.png?v7',
  'banana': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34c.png?v7',
  'bangbang': 'https://assets-cdn.github.com/images/icons/emoji/unicode/203c.png?v7',
  'bangladesh': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1e9.png?v7',
  'bank': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e6.png?v7',
  'bar_chart': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ca.png?v7',
  'barbados': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1e7.png?v7',
  'barber': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f488.png?v7',
  'baseball': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26be.png?v7',
  'basecamp': 'https://assets-cdn.github.com/images/icons/emoji/basecamp.png?v7',
  'basecampy': 'https://assets-cdn.github.com/images/icons/emoji/basecampy.png?v7',
  'basketball': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c0.png?v7',
  'basketball_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f9.png?v7',
  'basketball_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f9-2640.png?v7',
  'bat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f987.png?v7',
  'bath': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6c0.png?v7',
  'bathtub': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6c1.png?v7',
  'battery': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f50b.png?v7',
  'beach_umbrella': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d6.png?v7',
  'bear': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f43b.png?v7',
  'bed': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6cf.png?v7',
  'bee': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f41d.png?v7',
  'beer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f37a.png?v7',
  'beers': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f37b.png?v7',
  'beetle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f41e.png?v7',
  'beginner': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f530.png?v7',
  'belarus': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1fe.png?v7',
  'belgium': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1ea.png?v7',
  'belize': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1ff.png?v7',
  'bell': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f514.png?v7',
  'bellhop_bell': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6ce.png?v7',
  'benin': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1ef.png?v7',
  'bento': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f371.png?v7',
  'bermuda': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1f2.png?v7',
  'bhutan': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1f9.png?v7',
  'bicyclist': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b4.png?v7',
  'bike': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b2.png?v7',
  'biking_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b4.png?v7',
  'biking_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b4-2640.png?v7',
  'bikini': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f459.png?v7',
  'biohazard': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2623.png?v7',
  'bird': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f426.png?v7',
  'birthday': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f382.png?v7',
  'black_circle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26ab.png?v7',
  'black_flag': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3f4.png?v7',
  'black_heart': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5a4.png?v7',
  'black_joker': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f0cf.png?v7',
  'black_large_square': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2b1b.png?v7',
  'black_medium_small_square': 'https://assets-cdn.github.com/images/icons/emoji/unicode/25fe.png?v7',
  'black_medium_square': 'https://assets-cdn.github.com/images/icons/emoji/unicode/25fc.png?v7',
  'black_nib': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2712.png?v7',
  'black_small_square': 'https://assets-cdn.github.com/images/icons/emoji/unicode/25aa.png?v7',
  'black_square_button': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f532.png?v7',
  'blonde_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f471.png?v7',
  'blonde_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f471-2640.png?v7',
  'blossom': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f33c.png?v7',
  'blowfish': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f421.png?v7',
  'blue_book': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d8.png?v7',
  'blue_car': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f699.png?v7',
  'blue_heart': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f499.png?v7',
  'blush': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f60a.png?v7',
  'boar': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f417.png?v7',
  'boat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f5.png?v7',
  'bolivia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1f4.png?v7',
  'bomb': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a3.png?v7',
  'book': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d6.png?v7',
  'bookmark': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f516.png?v7',
  'bookmark_tabs': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d1.png?v7',
  'books': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4da.png?v7',
  'boom': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a5.png?v7',
  'boot': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f462.png?v7',
  'bosnia_herzegovina': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1e6.png?v7',
  'botswana': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1fc.png?v7',
  'bouquet': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f490.png?v7',
  'bow': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f647.png?v7',
  'bow_and_arrow': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3f9.png?v7',
  'bowing_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f647.png?v7',
  'bowing_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f647-2640.png?v7',
  'bowling': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b3.png?v7',
  'bowtie': 'https://assets-cdn.github.com/images/icons/emoji/bowtie.png?v7',
  'boxing_glove': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f94a.png?v7',
  'boy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f466.png?v7',
  'brazil': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1f7.png?v7',
  'bread': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f35e.png?v7',
  'bride_with_veil': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f470.png?v7',
  'bridge_at_night': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f309.png?v7',
  'briefcase': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4bc.png?v7',
  'british_indian_ocean_territory': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1f4.png?v7',
  'british_virgin_islands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fb-1f1ec.png?v7',
  'broken_heart': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f494.png?v7',
  'brunei': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1f3.png?v7',
  'bug': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f41b.png?v7',
  'building_construction': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d7.png?v7',
  'bulb': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a1.png?v7',
  'bulgaria': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1ec.png?v7',
  'bullettrain_front': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f685.png?v7',
  'bullettrain_side': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f684.png?v7',
  'burkina_faso': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1eb.png?v7',
  'burrito': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f32f.png?v7',
  'burundi': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1ee.png?v7',
  'bus': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f68c.png?v7',
  'business_suit_levitating': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f574.png?v7',
  'busstop': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f68f.png?v7',
  'bust_in_silhouette': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f464.png?v7',
  'busts_in_silhouette': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f465.png?v7',
  'butterfly': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f98b.png?v7',
  'cactus': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f335.png?v7',
  'cake': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f370.png?v7',
  'calendar': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c6.png?v7',
  'call_me_hand': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f919.png?v7',
  'calling': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f2.png?v7',
  'cambodia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1ed.png?v7',
  'camel': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f42b.png?v7',
  'camera': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f7.png?v7',
  'camera_flash': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f8.png?v7',
  'cameroon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1f2.png?v7',
  'camping': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d5.png?v7',
  'canada': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1e6.png?v7',
  'canary_islands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1e8.png?v7',
  'cancer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/264b.png?v7',
  'candle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f56f.png?v7',
  'candy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f36c.png?v7',
  'canoe': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6f6.png?v7',
  'cape_verde': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1fb.png?v7',
  'capital_abcd': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f520.png?v7',
  'capricorn': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2651.png?v7',
  'car': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f697.png?v7',
  'card_file_box': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5c3.png?v7',
  'card_index': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c7.png?v7',
  'card_index_dividers': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5c2.png?v7',
  'caribbean_netherlands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1f6.png?v7',
  'carousel_horse': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a0.png?v7',
  'carrot': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f955.png?v7',
  'cat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f431.png?v7',
  'cat2': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f408.png?v7',
  'cayman_islands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1fe.png?v7',
  'cd': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4bf.png?v7',
  'central_african_republic': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1eb.png?v7',
  'chad': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1e9.png?v7',
  'chains': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26d3.png?v7',
  'champagne': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f37e.png?v7',
  'chart': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b9.png?v7',
  'chart_with_downwards_trend': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c9.png?v7',
  'chart_with_upwards_trend': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c8.png?v7',
  'checkered_flag': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c1.png?v7',
  'cheese': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f9c0.png?v7',
  'cherries': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f352.png?v7',
  'cherry_blossom': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f338.png?v7',
  'chestnut': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f330.png?v7',
  'chicken': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f414.png?v7',
  'children_crossing': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b8.png?v7',
  'chile': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1f1.png?v7',
  'chipmunk': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f43f.png?v7',
  'chocolate_bar': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f36b.png?v7',
  'christmas_island': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1fd.png?v7',
  'christmas_tree': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f384.png?v7',
  'church': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26ea.png?v7',
  'cinema': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a6.png?v7',
  'circus_tent': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3aa.png?v7',
  'city_sunrise': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f307.png?v7',
  'city_sunset': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f306.png?v7',
  'cityscape': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d9.png?v7',
  'cl': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f191.png?v7',
  'clamp': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5dc.png?v7',
  'clap': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44f.png?v7',
  'clapper': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ac.png?v7',
  'classical_building': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3db.png?v7',
  'clinking_glasses': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f942.png?v7',
  'clipboard': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4cb.png?v7',
  'clock1': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f550.png?v7',
  'clock10': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f559.png?v7',
  'clock1030': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f565.png?v7',
  'clock11': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f55a.png?v7',
  'clock1130': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f566.png?v7',
  'clock12': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f55b.png?v7',
  'clock1230': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f567.png?v7',
  'clock130': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f55c.png?v7',
  'clock2': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f551.png?v7',
  'clock230': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f55d.png?v7',
  'clock3': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f552.png?v7',
  'clock330': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f55e.png?v7',
  'clock4': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f553.png?v7',
  'clock430': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f55f.png?v7',
  'clock5': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f554.png?v7',
  'clock530': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f560.png?v7',
  'clock6': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f555.png?v7',
  'clock630': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f561.png?v7',
  'clock7': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f556.png?v7',
  'clock730': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f562.png?v7',
  'clock8': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f557.png?v7',
  'clock830': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f563.png?v7',
  'clock9': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f558.png?v7',
  'clock930': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f564.png?v7',
  'closed_book': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d5.png?v7',
  'closed_lock_with_key': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f510.png?v7',
  'closed_umbrella': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f302.png?v7',
  'cloud': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2601.png?v7',
  'cloud_with_lightning': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f329.png?v7',
  'cloud_with_lightning_and_rain': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26c8.png?v7',
  'cloud_with_rain': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f327.png?v7',
  'cloud_with_snow': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f328.png?v7',
  'clown_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f921.png?v7',
  'clubs': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2663.png?v7',
  'cn': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1f3.png?v7',
  'cocktail': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f378.png?v7',
  'cocos_islands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1e8.png?v7',
  'coffee': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2615.png?v7',
  'coffin': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26b0.png?v7',
  'cold_sweat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f630.png?v7',
  'collision': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a5.png?v7',
  'colombia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1f4.png?v7',
  'comet': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2604.png?v7',
  'comoros': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1f2.png?v7',
  'computer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4bb.png?v7',
  'computer_mouse': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5b1.png?v7',
  'confetti_ball': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f38a.png?v7',
  'confounded': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f616.png?v7',
  'confused': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f615.png?v7',
  'congo_brazzaville': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1ec.png?v7',
  'congo_kinshasa': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1e9.png?v7',
  'congratulations': 'https://assets-cdn.github.com/images/icons/emoji/unicode/3297.png?v7',
  'construction': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a7.png?v7',
  'construction_worker': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f477.png?v7',
  'construction_worker_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f477.png?v7',
  'construction_worker_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f477-2640.png?v7',
  'control_knobs': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f39b.png?v7',
  'convenience_store': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ea.png?v7',
  'cook_islands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1f0.png?v7',
  'cookie': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f36a.png?v7',
  'cool': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f192.png?v7',
  'cop': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46e.png?v7',
  'copyright': 'https://assets-cdn.github.com/images/icons/emoji/unicode/00a9.png?v7',
  'corn': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f33d.png?v7',
  'costa_rica': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1f7.png?v7',
  'cote_divoire': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1ee.png?v7',
  'couch_and_lamp': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6cb.png?v7',
  'couple': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46b.png?v7',
  'couple_with_heart': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f491.png?v7',
  'couple_with_heart_man_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-2764-1f468.png?v7',
  'couple_with_heart_woman_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f491.png?v7',
  'couple_with_heart_woman_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-2764-1f469.png?v7',
  'couplekiss_man_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-2764-1f48b-1f468.png?v7',
  'couplekiss_man_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f48f.png?v7',
  'couplekiss_woman_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-2764-1f48b-1f469.png?v7',
  'cow': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f42e.png?v7',
  'cow2': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f404.png?v7',
  'cowboy_hat_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f920.png?v7',
  'crab': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f980.png?v7',
  'crayon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f58d.png?v7',
  'credit_card': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b3.png?v7',
  'crescent_moon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f319.png?v7',
  'cricket': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3cf.png?v7',
  'croatia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ed-1f1f7.png?v7',
  'crocodile': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f40a.png?v7',
  'croissant': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f950.png?v7',
  'crossed_fingers': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f91e.png?v7',
  'crossed_flags': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f38c.png?v7',
  'crossed_swords': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2694.png?v7',
  'crown': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f451.png?v7',
  'cry': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f622.png?v7',
  'crying_cat_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f63f.png?v7',
  'crystal_ball': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f52e.png?v7',
  'cuba': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1fa.png?v7',
  'cucumber': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f952.png?v7',
  'cupid': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f498.png?v7',
  'curacao': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1fc.png?v7',
  'curly_loop': 'https://assets-cdn.github.com/images/icons/emoji/unicode/27b0.png?v7',
  'currency_exchange': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b1.png?v7',
  'curry': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f35b.png?v7',
  'custard': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f36e.png?v7',
  'customs': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6c3.png?v7',
  'cyclone': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f300.png?v7',
  'cyprus': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1fe.png?v7',
  'czech_republic': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1ff.png?v7',
  'dagger': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5e1.png?v7',
  'dancer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f483.png?v7',
  'dancers': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46f.png?v7',
  'dancing_men': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46f-2642.png?v7',
  'dancing_women': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46f.png?v7',
  'dango': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f361.png?v7',
  'dark_sunglasses': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f576.png?v7',
  'dart': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3af.png?v7',
  'dash': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a8.png?v7',
  'date': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c5.png?v7',
  'de': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e9-1f1ea.png?v7',
  'deciduous_tree': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f333.png?v7',
  'deer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f98c.png?v7',
  'denmark': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e9-1f1f0.png?v7',
  'department_store': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ec.png?v7',
  'derelict_house': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3da.png?v7',
  'desert': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3dc.png?v7',
  'desert_island': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3dd.png?v7',
  'desktop_computer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5a5.png?v7',
  'detective': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f575.png?v7',
  'diamond_shape_with_a_dot_inside': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a0.png?v7',
  'diamonds': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2666.png?v7',
  'disappointed': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f61e.png?v7',
  'disappointed_relieved': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f625.png?v7',
  'dizzy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ab.png?v7',
  'dizzy_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f635.png?v7',
  'djibouti': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e9-1f1ef.png?v7',
  'do_not_litter': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6af.png?v7',
  'dog': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f436.png?v7',
  'dog2': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f415.png?v7',
  'dollar': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b5.png?v7',
  'dolls': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f38e.png?v7',
  'dolphin': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f42c.png?v7',
  'dominica': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e9-1f1f2.png?v7',
  'dominican_republic': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e9-1f1f4.png?v7',
  'door': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6aa.png?v7',
  'doughnut': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f369.png?v7',
  'dove': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f54a.png?v7',
  'dragon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f409.png?v7',
  'dragon_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f432.png?v7',
  'dress': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f457.png?v7',
  'dromedary_camel': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f42a.png?v7',
  'drooling_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f924.png?v7',
  'droplet': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a7.png?v7',
  'drum': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f941.png?v7',
  'duck': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f986.png?v7',
  'dvd': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c0.png?v7',
  'e-mail': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e7.png?v7',
  'eagle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f985.png?v7',
  'ear': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f442.png?v7',
  'ear_of_rice': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f33e.png?v7',
  'earth_africa': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f30d.png?v7',
  'earth_americas': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f30e.png?v7',
  'earth_asia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f30f.png?v7',
  'ecuador': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1e8.png?v7',
  'egg': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f95a.png?v7',
  'eggplant': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f346.png?v7',
  'egypt': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1ec.png?v7',
  'eight': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0038-20e3.png?v7',
  'eight_pointed_black_star': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2734.png?v7',
  'eight_spoked_asterisk': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2733.png?v7',
  'el_salvador': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1fb.png?v7',
  'electric_plug': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f50c.png?v7',
  'electron': 'https://assets-cdn.github.com/images/icons/emoji/electron.png?v7',
  'elephant': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f418.png?v7',
  'email': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2709.png?v7',
  'end': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f51a.png?v7',
  'envelope': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2709.png?v7',
  'envelope_with_arrow': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e9.png?v7',
  'equatorial_guinea': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f6.png?v7',
  'eritrea': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1f7.png?v7',
  'es': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1f8.png?v7',
  'estonia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1ea.png?v7',
  'ethiopia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1f9.png?v7',
  'eu': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1fa.png?v7',
  'euro': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b6.png?v7',
  'european_castle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3f0.png?v7',
  'european_post_office': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e4.png?v7',
  'european_union': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1fa.png?v7',
  'evergreen_tree': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f332.png?v7',
  'exclamation': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2757.png?v7',
  'expressionless': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f611.png?v7',
  'eye': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f441.png?v7',
  'eye_speech_bubble': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f441-1f5e8.png?v7',
  'eyeglasses': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f453.png?v7',
  'eyes': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f440.png?v7',
  'face_with_head_bandage': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f915.png?v7',
  'face_with_thermometer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f912.png?v7',
  'facepunch': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44a.png?v7',
  'factory': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ed.png?v7',
  'falkland_islands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1eb-1f1f0.png?v7',
  'fallen_leaf': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f342.png?v7',
  'family': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46a.png?v7',
  'family_man_boy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f466.png?v7',
  'family_man_boy_boy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f466-1f466.png?v7',
  'family_man_girl': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f467.png?v7',
  'family_man_girl_boy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f467-1f466.png?v7',
  'family_man_girl_girl': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f467-1f467.png?v7',
  'family_man_man_boy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f468-1f466.png?v7',
  'family_man_man_boy_boy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f468-1f466-1f466.png?v7',
  'family_man_man_girl': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f468-1f467.png?v7',
  'family_man_man_girl_boy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f468-1f467-1f466.png?v7',
  'family_man_man_girl_girl': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f468-1f467-1f467.png?v7',
  'family_man_woman_boy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46a.png?v7',
  'family_man_woman_boy_boy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f469-1f466-1f466.png?v7',
  'family_man_woman_girl': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f469-1f467.png?v7',
  'family_man_woman_girl_boy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f469-1f467-1f466.png?v7',
  'family_man_woman_girl_girl': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f469-1f467-1f467.png?v7',
  'family_woman_boy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f466.png?v7',
  'family_woman_boy_boy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f466-1f466.png?v7',
  'family_woman_girl': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f467.png?v7',
  'family_woman_girl_boy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f467-1f466.png?v7',
  'family_woman_girl_girl': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f467-1f467.png?v7',
  'family_woman_woman_boy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f469-1f466.png?v7',
  'family_woman_woman_boy_boy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f469-1f466-1f466.png?v7',
  'family_woman_woman_girl': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f469-1f467.png?v7',
  'family_woman_woman_girl_boy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f469-1f467-1f466.png?v7',
  'family_woman_woman_girl_girl': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f469-1f467-1f467.png?v7',
  'faroe_islands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1eb-1f1f4.png?v7',
  'fast_forward': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23e9.png?v7',
  'fax': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e0.png?v7',
  'fearful': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f628.png?v7',
  'feelsgood': 'https://assets-cdn.github.com/images/icons/emoji/feelsgood.png?v7',
  'feet': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f43e.png?v7',
  'female_detective': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f575-2640.png?v7',
  'ferris_wheel': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a1.png?v7',
  'ferry': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f4.png?v7',
  'field_hockey': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d1.png?v7',
  'fiji': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1eb-1f1ef.png?v7',
  'file_cabinet': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5c4.png?v7',
  'file_folder': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c1.png?v7',
  'film_projector': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4fd.png?v7',
  'film_strip': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f39e.png?v7',
  'finland': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1eb-1f1ee.png?v7',
  'finnadie': 'https://assets-cdn.github.com/images/icons/emoji/finnadie.png?v7',
  'fire': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f525.png?v7',
  'fire_engine': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f692.png?v7',
  'fireworks': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f386.png?v7',
  'first_quarter_moon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f313.png?v7',
  'first_quarter_moon_with_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f31b.png?v7',
  'fish': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f41f.png?v7',
  'fish_cake': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f365.png?v7',
  'fishing_pole_and_fish': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a3.png?v7',
  'fist': 'https://assets-cdn.github.com/images/icons/emoji/unicode/270a.png?v7',
  'fist_left': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f91b.png?v7',
  'fist_oncoming': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44a.png?v7',
  'fist_raised': 'https://assets-cdn.github.com/images/icons/emoji/unicode/270a.png?v7',
  'fist_right': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f91c.png?v7',
  'five': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0035-20e3.png?v7',
  'flags': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f38f.png?v7',
  'flashlight': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f526.png?v7',
  'fleur_de_lis': 'https://assets-cdn.github.com/images/icons/emoji/unicode/269c.png?v7',
  'flight_arrival': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6ec.png?v7',
  'flight_departure': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6eb.png?v7',
  'flipper': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f42c.png?v7',
  'floppy_disk': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4be.png?v7',
  'flower_playing_cards': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b4.png?v7',
  'flushed': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f633.png?v7',
  'fog': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f32b.png?v7',
  'foggy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f301.png?v7',
  'football': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c8.png?v7',
  'footprints': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f463.png?v7',
  'fork_and_knife': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f374.png?v7',
  'fountain': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f2.png?v7',
  'fountain_pen': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f58b.png?v7',
  'four': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0034-20e3.png?v7',
  'four_leaf_clover': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f340.png?v7',
  'fox_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f98a.png?v7',
  'fr': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1eb-1f1f7.png?v7',
  'framed_picture': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5bc.png?v7',
  'free': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f193.png?v7',
  'french_guiana': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1eb.png?v7',
  'french_polynesia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1eb.png?v7',
  'french_southern_territories': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1eb.png?v7',
  'fried_egg': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f373.png?v7',
  'fried_shrimp': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f364.png?v7',
  'fries': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f35f.png?v7',
  'frog': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f438.png?v7',
  'frowning': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f626.png?v7',
  'frowning_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2639.png?v7',
  'frowning_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64d-2642.png?v7',
  'frowning_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64d.png?v7',
  'fu': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f595.png?v7',
  'fuelpump': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26fd.png?v7',
  'full_moon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f315.png?v7',
  'full_moon_with_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f31d.png?v7',
  'funeral_urn': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26b1.png?v7',
  'gabon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1e6.png?v7',
  'gambia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f2.png?v7',
  'game_die': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b2.png?v7',
  'gb': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1e7.png?v7',
  'gear': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2699.png?v7',
  'gem': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f48e.png?v7',
  'gemini': 'https://assets-cdn.github.com/images/icons/emoji/unicode/264a.png?v7',
  'georgia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1ea.png?v7',
  'ghana': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1ed.png?v7',
  'ghost': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f47b.png?v7',
  'gibraltar': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1ee.png?v7',
  'gift': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f381.png?v7',
  'gift_heart': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f49d.png?v7',
  'girl': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f467.png?v7',
  'globe_with_meridians': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f310.png?v7',
  'goal_net': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f945.png?v7',
  'goat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f410.png?v7',
  'goberserk': 'https://assets-cdn.github.com/images/icons/emoji/goberserk.png?v7',
  'godmode': 'https://assets-cdn.github.com/images/icons/emoji/godmode.png?v7',
  'golf': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f3.png?v7',
  'golfing_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3cc.png?v7',
  'golfing_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3cc-2640.png?v7',
  'gorilla': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f98d.png?v7',
  'grapes': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f347.png?v7',
  'greece': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f7.png?v7',
  'green_apple': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34f.png?v7',
  'green_book': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d7.png?v7',
  'green_heart': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f49a.png?v7',
  'green_salad': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f957.png?v7',
  'greenland': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f1.png?v7',
  'grenada': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1e9.png?v7',
  'grey_exclamation': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2755.png?v7',
  'grey_question': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2754.png?v7',
  'grimacing': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f62c.png?v7',
  'grin': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f601.png?v7',
  'grinning': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f600.png?v7',
  'guadeloupe': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f5.png?v7',
  'guam': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1fa.png?v7',
  'guardsman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f482.png?v7',
  'guardswoman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f482-2640.png?v7',
  'guatemala': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f9.png?v7',
  'guernsey': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1ec.png?v7',
  'guinea': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f3.png?v7',
  'guinea_bissau': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1fc.png?v7',
  'guitar': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b8.png?v7',
  'gun': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f52b.png?v7',
  'guyana': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1fe.png?v7',
  'haircut': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f487.png?v7',
  'haircut_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f487-2642.png?v7',
  'haircut_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f487.png?v7',
  'haiti': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ed-1f1f9.png?v7',
  'hamburger': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f354.png?v7',
  'hammer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f528.png?v7',
  'hammer_and_pick': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2692.png?v7',
  'hammer_and_wrench': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6e0.png?v7',
  'hamster': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f439.png?v7',
  'hand': 'https://assets-cdn.github.com/images/icons/emoji/unicode/270b.png?v7',
  'handbag': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f45c.png?v7',
  'handshake': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f91d.png?v7',
  'hankey': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a9.png?v7',
  'hash': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0023-20e3.png?v7',
  'hatched_chick': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f425.png?v7',
  'hatching_chick': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f423.png?v7',
  'headphones': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a7.png?v7',
  'hear_no_evil': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f649.png?v7',
  'heart': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2764.png?v7',
  'heart_decoration': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f49f.png?v7',
  'heart_eyes': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f60d.png?v7',
  'heart_eyes_cat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f63b.png?v7',
  'heartbeat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f493.png?v7',
  'heartpulse': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f497.png?v7',
  'hearts': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2665.png?v7',
  'heavy_check_mark': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2714.png?v7',
  'heavy_division_sign': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2797.png?v7',
  'heavy_dollar_sign': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b2.png?v7',
  'heavy_exclamation_mark': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2757.png?v7',
  'heavy_heart_exclamation': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2763.png?v7',
  'heavy_minus_sign': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2796.png?v7',
  'heavy_multiplication_x': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2716.png?v7',
  'heavy_plus_sign': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2795.png?v7',
  'helicopter': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f681.png?v7',
  'herb': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f33f.png?v7',
  'hibiscus': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f33a.png?v7',
  'high_brightness': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f506.png?v7',
  'high_heel': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f460.png?v7',
  'hocho': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f52a.png?v7',
  'hole': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f573.png?v7',
  'honduras': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ed-1f1f3.png?v7',
  'honey_pot': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f36f.png?v7',
  'honeybee': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f41d.png?v7',
  'hong_kong': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ed-1f1f0.png?v7',
  'horse': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f434.png?v7',
  'horse_racing': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c7.png?v7',
  'hospital': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e5.png?v7',
  'hot_pepper': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f336.png?v7',
  'hotdog': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f32d.png?v7',
  'hotel': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e8.png?v7',
  'hotsprings': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2668.png?v7',
  'hourglass': 'https://assets-cdn.github.com/images/icons/emoji/unicode/231b.png?v7',
  'hourglass_flowing_sand': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23f3.png?v7',
  'house': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e0.png?v7',
  'house_with_garden': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e1.png?v7',
  'houses': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d8.png?v7',
  'hugs': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f917.png?v7',
  'hungary': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ed-1f1fa.png?v7',
  'hurtrealbad': 'https://assets-cdn.github.com/images/icons/emoji/hurtrealbad.png?v7',
  'hushed': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f62f.png?v7',
  'ice_cream': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f368.png?v7',
  'ice_hockey': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d2.png?v7',
  'ice_skate': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f8.png?v7',
  'icecream': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f366.png?v7',
  'iceland': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1f8.png?v7',
  'id': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f194.png?v7',
  'ideograph_advantage': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f250.png?v7',
  'imp': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f47f.png?v7',
  'inbox_tray': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e5.png?v7',
  'incoming_envelope': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e8.png?v7',
  'india': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1f3.png?v7',
  'indonesia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1e9.png?v7',
  'information_desk_person': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f481.png?v7',
  'information_source': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2139.png?v7',
  'innocent': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f607.png?v7',
  'interrobang': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2049.png?v7',
  'iphone': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f1.png?v7',
  'iran': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1f7.png?v7',
  'iraq': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1f6.png?v7',
  'ireland': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1ea.png?v7',
  'isle_of_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1f2.png?v7',
  'israel': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1f1.png?v7',
  'it': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ee-1f1f9.png?v7',
  'izakaya_lantern': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ee.png?v7',
  'jack_o_lantern': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f383.png?v7',
  'jamaica': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ef-1f1f2.png?v7',
  'japan': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5fe.png?v7',
  'japanese_castle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ef.png?v7',
  'japanese_goblin': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f47a.png?v7',
  'japanese_ogre': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f479.png?v7',
  'jeans': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f456.png?v7',
  'jersey': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ef-1f1ea.png?v7',
  'jordan': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ef-1f1f4.png?v7',
  'joy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f602.png?v7',
  'joy_cat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f639.png?v7',
  'joystick': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f579.png?v7',
  'jp': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ef-1f1f5.png?v7',
  'kaaba': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f54b.png?v7',
  'kazakhstan': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1ff.png?v7',
  'kenya': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1ea.png?v7',
  'key': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f511.png?v7',
  'keyboard': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2328.png?v7',
  'keycap_ten': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f51f.png?v7',
  'kick_scooter': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6f4.png?v7',
  'kimono': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f458.png?v7',
  'kiribati': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1ee.png?v7',
  'kiss': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f48b.png?v7',
  'kissing': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f617.png?v7',
  'kissing_cat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f63d.png?v7',
  'kissing_closed_eyes': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f61a.png?v7',
  'kissing_heart': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f618.png?v7',
  'kissing_smiling_eyes': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f619.png?v7',
  'kiwi_fruit': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f95d.png?v7',
  'knife': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f52a.png?v7',
  'koala': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f428.png?v7',
  'koko': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f201.png?v7',
  'kosovo': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fd-1f1f0.png?v7',
  'kr': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1f7.png?v7',
  'kuwait': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1fc.png?v7',
  'kyrgyzstan': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1ec.png?v7',
  'label': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3f7.png?v7',
  'lantern': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ee.png?v7',
  'laos': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1e6.png?v7',
  'large_blue_circle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f535.png?v7',
  'large_blue_diamond': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f537.png?v7',
  'large_orange_diamond': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f536.png?v7',
  'last_quarter_moon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f317.png?v7',
  'last_quarter_moon_with_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f31c.png?v7',
  'latin_cross': 'https://assets-cdn.github.com/images/icons/emoji/unicode/271d.png?v7',
  'latvia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1fb.png?v7',
  'laughing': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f606.png?v7',
  'leaves': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f343.png?v7',
  'lebanon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1e7.png?v7',
  'ledger': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d2.png?v7',
  'left_luggage': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6c5.png?v7',
  'left_right_arrow': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2194.png?v7',
  'leftwards_arrow_with_hook': 'https://assets-cdn.github.com/images/icons/emoji/unicode/21a9.png?v7',
  'lemon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34b.png?v7',
  'leo': 'https://assets-cdn.github.com/images/icons/emoji/unicode/264c.png?v7',
  'leopard': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f406.png?v7',
  'lesotho': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1f8.png?v7',
  'level_slider': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f39a.png?v7',
  'liberia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1f7.png?v7',
  'libra': 'https://assets-cdn.github.com/images/icons/emoji/unicode/264e.png?v7',
  'libya': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1fe.png?v7',
  'liechtenstein': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1ee.png?v7',
  'light_rail': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f688.png?v7',
  'link': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f517.png?v7',
  'lion': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f981.png?v7',
  'lips': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f444.png?v7',
  'lipstick': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f484.png?v7',
  'lithuania': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1f9.png?v7',
  'lizard': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f98e.png?v7',
  'lock': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f512.png?v7',
  'lock_with_ink_pen': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f50f.png?v7',
  'lollipop': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f36d.png?v7',
  'loop': 'https://assets-cdn.github.com/images/icons/emoji/unicode/27bf.png?v7',
  'loud_sound': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f50a.png?v7',
  'loudspeaker': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e2.png?v7',
  'love_hotel': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e9.png?v7',
  'love_letter': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f48c.png?v7',
  'low_brightness': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f505.png?v7',
  'luxembourg': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1fa.png?v7',
  'lying_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f925.png?v7',
  'm': 'https://assets-cdn.github.com/images/icons/emoji/unicode/24c2.png?v7',
  'macau': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f4.png?v7',
  'macedonia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f0.png?v7',
  'madagascar': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1ec.png?v7',
  'mag': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f50d.png?v7',
  'mag_right': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f50e.png?v7',
  'mahjong': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f004.png?v7',
  'mailbox': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4eb.png?v7',
  'mailbox_closed': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ea.png?v7',
  'mailbox_with_mail': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ec.png?v7',
  'mailbox_with_no_mail': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ed.png?v7',
  'malawi': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1fc.png?v7',
  'malaysia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1fe.png?v7',
  'maldives': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1fb.png?v7',
  'male_detective': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f575.png?v7',
  'mali': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f1.png?v7',
  'malta': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f9.png?v7',
  'man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468.png?v7',
  'man_artist': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f3a8.png?v7',
  'man_astronaut': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f680.png?v7',
  'man_cartwheeling': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f938-2642.png?v7',
  'man_cook': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f373.png?v7',
  'man_dancing': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f57a.png?v7',
  'man_facepalming': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f926-2642.png?v7',
  'man_factory_worker': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f3ed.png?v7',
  'man_farmer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f33e.png?v7',
  'man_firefighter': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f692.png?v7',
  'man_health_worker': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-2695.png?v7',
  'man_in_tuxedo': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f935.png?v7',
  'man_judge': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-2696.png?v7',
  'man_juggling': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f939-2642.png?v7',
  'man_mechanic': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f527.png?v7',
  'man_office_worker': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f4bc.png?v7',
  'man_pilot': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-2708.png?v7',
  'man_playing_handball': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f93e-2642.png?v7',
  'man_playing_water_polo': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f93d-2642.png?v7',
  'man_scientist': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f52c.png?v7',
  'man_shrugging': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f937-2642.png?v7',
  'man_singer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f3a4.png?v7',
  'man_student': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f393.png?v7',
  'man_teacher': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f3eb.png?v7',
  'man_technologist': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f468-1f4bb.png?v7',
  'man_with_gua_pi_mao': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f472.png?v7',
  'man_with_turban': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f473.png?v7',
  'mandarin': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34a.png?v7',
  'mans_shoe': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f45e.png?v7',
  'mantelpiece_clock': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f570.png?v7',
  'maple_leaf': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f341.png?v7',
  'marshall_islands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1ed.png?v7',
  'martial_arts_uniform': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f94b.png?v7',
  'martinique': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f6.png?v7',
  'mask': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f637.png?v7',
  'massage': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f486.png?v7',
  'massage_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f486-2642.png?v7',
  'massage_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f486.png?v7',
  'mauritania': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f7.png?v7',
  'mauritius': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1fa.png?v7',
  'mayotte': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fe-1f1f9.png?v7',
  'meat_on_bone': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f356.png?v7',
  'medal_military': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f396.png?v7',
  'medal_sports': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c5.png?v7',
  'mega': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e3.png?v7',
  'melon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f348.png?v7',
  'memo': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4dd.png?v7',
  'men_wrestling': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f93c-2642.png?v7',
  'menorah': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f54e.png?v7',
  'mens': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b9.png?v7',
  'metal': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f918.png?v7',
  'metro': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f687.png?v7',
  'mexico': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1fd.png?v7',
  'micronesia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1eb-1f1f2.png?v7',
  'microphone': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a4.png?v7',
  'microscope': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f52c.png?v7',
  'middle_finger': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f595.png?v7',
  'milk_glass': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f95b.png?v7',
  'milky_way': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f30c.png?v7',
  'minibus': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f690.png?v7',
  'minidisc': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4bd.png?v7',
  'mobile_phone_off': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f4.png?v7',
  'moldova': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1e9.png?v7',
  'monaco': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1e8.png?v7',
  'money_mouth_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f911.png?v7',
  'money_with_wings': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b8.png?v7',
  'moneybag': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b0.png?v7',
  'mongolia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f3.png?v7',
  'monkey': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f412.png?v7',
  'monkey_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f435.png?v7',
  'monorail': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f69d.png?v7',
  'montenegro': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1ea.png?v7',
  'montserrat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f8.png?v7',
  'moon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f314.png?v7',
  'morocco': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1e6.png?v7',
  'mortar_board': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f393.png?v7',
  'mosque': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f54c.png?v7',
  'motor_boat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6e5.png?v7',
  'motor_scooter': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6f5.png?v7',
  'motorcycle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3cd.png?v7',
  'motorway': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6e3.png?v7',
  'mount_fuji': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5fb.png?v7',
  'mountain': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f0.png?v7',
  'mountain_bicyclist': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b5.png?v7',
  'mountain_biking_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b5.png?v7',
  'mountain_biking_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b5-2640.png?v7',
  'mountain_cableway': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a0.png?v7',
  'mountain_railway': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f69e.png?v7',
  'mountain_snow': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d4.png?v7',
  'mouse': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f42d.png?v7',
  'mouse2': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f401.png?v7',
  'movie_camera': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a5.png?v7',
  'moyai': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5ff.png?v7',
  'mozambique': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1ff.png?v7',
  'mrs_claus': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f936.png?v7',
  'muscle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4aa.png?v7',
  'mushroom': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f344.png?v7',
  'musical_keyboard': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b9.png?v7',
  'musical_note': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b5.png?v7',
  'musical_score': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3bc.png?v7',
  'mute': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f507.png?v7',
  'myanmar': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f2.png?v7',
  'nail_care': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f485.png?v7',
  'name_badge': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4db.png?v7',
  'namibia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1e6.png?v7',
  'national_park': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3de.png?v7',
  'nauru': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1f7.png?v7',
  'nauseated_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f922.png?v7',
  'neckbeard': 'https://assets-cdn.github.com/images/icons/emoji/neckbeard.png?v7',
  'necktie': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f454.png?v7',
  'negative_squared_cross_mark': 'https://assets-cdn.github.com/images/icons/emoji/unicode/274e.png?v7',
  'nepal': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1f5.png?v7',
  'nerd_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f913.png?v7',
  'netherlands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1f1.png?v7',
  'neutral_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f610.png?v7',
  'new': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f195.png?v7',
  'new_caledonia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1e8.png?v7',
  'new_moon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f311.png?v7',
  'new_moon_with_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f31a.png?v7',
  'new_zealand': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1ff.png?v7',
  'newspaper': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f0.png?v7',
  'newspaper_roll': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5de.png?v7',
  'next_track_button': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23ed.png?v7',
  'ng': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f196.png?v7',
  'ng_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f645-2642.png?v7',
  'ng_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f645.png?v7',
  'nicaragua': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1ee.png?v7',
  'niger': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1ea.png?v7',
  'nigeria': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1ec.png?v7',
  'night_with_stars': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f303.png?v7',
  'nine': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0039-20e3.png?v7',
  'niue': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1fa.png?v7',
  'no_bell': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f515.png?v7',
  'no_bicycles': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b3.png?v7',
  'no_entry': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26d4.png?v7',
  'no_entry_sign': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6ab.png?v7',
  'no_good': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f645.png?v7',
  'no_good_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f645-2642.png?v7',
  'no_good_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f645.png?v7',
  'no_mobile_phones': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f5.png?v7',
  'no_mouth': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f636.png?v7',
  'no_pedestrians': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b7.png?v7',
  'no_smoking': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6ad.png?v7',
  'non-potable_water': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b1.png?v7',
  'norfolk_island': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1eb.png?v7',
  'north_korea': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1f5.png?v7',
  'northern_mariana_islands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f2-1f1f5.png?v7',
  'norway': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f3-1f1f4.png?v7',
  'nose': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f443.png?v7',
  'notebook': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d3.png?v7',
  'notebook_with_decorative_cover': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d4.png?v7',
  'notes': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b6.png?v7',
  'nut_and_bolt': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f529.png?v7',
  'o': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2b55.png?v7',
  'o2': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f17e.png?v7',
  'ocean': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f30a.png?v7',
  'octocat': 'https://assets-cdn.github.com/images/icons/emoji/octocat.png?v7',
  'octopus': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f419.png?v7',
  'oden': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f362.png?v7',
  'office': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e2.png?v7',
  'oil_drum': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6e2.png?v7',
  'ok': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f197.png?v7',
  'ok_hand': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44c.png?v7',
  'ok_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f646-2642.png?v7',
  'ok_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f646.png?v7',
  'old_key': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5dd.png?v7',
  'older_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f474.png?v7',
  'older_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f475.png?v7',
  'om': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f549.png?v7',
  'oman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f4-1f1f2.png?v7',
  'on': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f51b.png?v7',
  'oncoming_automobile': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f698.png?v7',
  'oncoming_bus': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f68d.png?v7',
  'oncoming_police_car': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f694.png?v7',
  'oncoming_taxi': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f696.png?v7',
  'one': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0031-20e3.png?v7',
  'open_book': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d6.png?v7',
  'open_file_folder': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c2.png?v7',
  'open_hands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f450.png?v7',
  'open_mouth': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f62e.png?v7',
  'open_umbrella': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2602.png?v7',
  'ophiuchus': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26ce.png?v7',
  'orange': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34a.png?v7',
  'orange_book': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d9.png?v7',
  'orthodox_cross': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2626.png?v7',
  'outbox_tray': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e4.png?v7',
  'owl': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f989.png?v7',
  'ox': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f402.png?v7',
  'package': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e6.png?v7',
  'page_facing_up': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c4.png?v7',
  'page_with_curl': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4c3.png?v7',
  'pager': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4df.png?v7',
  'paintbrush': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f58c.png?v7',
  'pakistan': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1f0.png?v7',
  'palau': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1fc.png?v7',
  'palestinian_territories': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1f8.png?v7',
  'palm_tree': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f334.png?v7',
  'panama': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1e6.png?v7',
  'pancakes': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f95e.png?v7',
  'panda_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f43c.png?v7',
  'paperclip': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ce.png?v7',
  'paperclips': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f587.png?v7',
  'papua_new_guinea': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1ec.png?v7',
  'paraguay': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1fe.png?v7',
  'parasol_on_ground': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f1.png?v7',
  'parking': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f17f.png?v7',
  'part_alternation_mark': 'https://assets-cdn.github.com/images/icons/emoji/unicode/303d.png?v7',
  'partly_sunny': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26c5.png?v7',
  'passenger_ship': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6f3.png?v7',
  'passport_control': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6c2.png?v7',
  'pause_button': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23f8.png?v7',
  'paw_prints': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f43e.png?v7',
  'peace_symbol': 'https://assets-cdn.github.com/images/icons/emoji/unicode/262e.png?v7',
  'peach': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f351.png?v7',
  'peanuts': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f95c.png?v7',
  'pear': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f350.png?v7',
  'pen': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f58a.png?v7',
  'pencil': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4dd.png?v7',
  'pencil2': 'https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png?v7',
  'penguin': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f427.png?v7',
  'pensive': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f614.png?v7',
  'performing_arts': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ad.png?v7',
  'persevere': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f623.png?v7',
  'person_fencing': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f93a.png?v7',
  'person_frowning': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64d.png?v7',
  'person_with_blond_hair': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f471.png?v7',
  'person_with_pouting_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64e.png?v7',
  'peru': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1ea.png?v7',
  'philippines': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1ed.png?v7',
  'phone': 'https://assets-cdn.github.com/images/icons/emoji/unicode/260e.png?v7',
  'pick': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26cf.png?v7',
  'pig': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f437.png?v7',
  'pig2': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f416.png?v7',
  'pig_nose': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f43d.png?v7',
  'pill': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f48a.png?v7',
  'pineapple': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34d.png?v7',
  'ping_pong': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d3.png?v7',
  'pisces': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2653.png?v7',
  'pitcairn_islands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1f3.png?v7',
  'pizza': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f355.png?v7',
  'place_of_worship': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6d0.png?v7',
  'plate_with_cutlery': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f37d.png?v7',
  'play_or_pause_button': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23ef.png?v7',
  'point_down': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f447.png?v7',
  'point_left': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f448.png?v7',
  'point_right': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f449.png?v7',
  'point_up': 'https://assets-cdn.github.com/images/icons/emoji/unicode/261d.png?v7',
  'point_up_2': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f446.png?v7',
  'poland': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1f1.png?v7',
  'police_car': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f693.png?v7',
  'policeman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46e.png?v7',
  'policewoman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46e-2640.png?v7',
  'poodle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f429.png?v7',
  'poop': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a9.png?v7',
  'popcorn': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f37f.png?v7',
  'portugal': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1f9.png?v7',
  'post_office': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3e3.png?v7',
  'postal_horn': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ef.png?v7',
  'postbox': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ee.png?v7',
  'potable_water': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b0.png?v7',
  'potato': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f954.png?v7',
  'pouch': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f45d.png?v7',
  'poultry_leg': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f357.png?v7',
  'pound': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b7.png?v7',
  'pout': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f621.png?v7',
  'pouting_cat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f63e.png?v7',
  'pouting_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64e-2642.png?v7',
  'pouting_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64e.png?v7',
  'pray': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64f.png?v7',
  'prayer_beads': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ff.png?v7',
  'pregnant_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f930.png?v7',
  'previous_track_button': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23ee.png?v7',
  'prince': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f934.png?v7',
  'princess': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f478.png?v7',
  'printer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5a8.png?v7',
  'puerto_rico': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1f7.png?v7',
  'punch': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44a.png?v7',
  'purple_heart': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f49c.png?v7',
  'purse': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f45b.png?v7',
  'pushpin': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4cc.png?v7',
  'put_litter_in_its_place': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6ae.png?v7',
  'qatar': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f6-1f1e6.png?v7',
  'question': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2753.png?v7',
  'rabbit': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f430.png?v7',
  'rabbit2': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f407.png?v7',
  'racehorse': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f40e.png?v7',
  'racing_car': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ce.png?v7',
  'radio': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4fb.png?v7',
  'radio_button': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f518.png?v7',
  'radioactive': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2622.png?v7',
  'rage': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f621.png?v7',
  'rage1': 'https://assets-cdn.github.com/images/icons/emoji/rage1.png?v7',
  'rage2': 'https://assets-cdn.github.com/images/icons/emoji/rage2.png?v7',
  'rage3': 'https://assets-cdn.github.com/images/icons/emoji/rage3.png?v7',
  'rage4': 'https://assets-cdn.github.com/images/icons/emoji/rage4.png?v7',
  'railway_car': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f683.png?v7',
  'railway_track': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6e4.png?v7',
  'rainbow': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f308.png?v7',
  'rainbow_flag': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3f3-1f308.png?v7',
  'raised_back_of_hand': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f91a.png?v7',
  'raised_hand': 'https://assets-cdn.github.com/images/icons/emoji/unicode/270b.png?v7',
  'raised_hand_with_fingers_splayed': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f590.png?v7',
  'raised_hands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64c.png?v7',
  'raising_hand': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64b.png?v7',
  'raising_hand_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64b-2642.png?v7',
  'raising_hand_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64b.png?v7',
  'ram': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f40f.png?v7',
  'ramen': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f35c.png?v7',
  'rat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f400.png?v7',
  'record_button': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23fa.png?v7',
  'recycle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/267b.png?v7',
  'red_car': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f697.png?v7',
  'red_circle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f534.png?v7',
  'registered': 'https://assets-cdn.github.com/images/icons/emoji/unicode/00ae.png?v7',
  'relaxed': 'https://assets-cdn.github.com/images/icons/emoji/unicode/263a.png?v7',
  'relieved': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f60c.png?v7',
  'reminder_ribbon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f397.png?v7',
  'repeat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f501.png?v7',
  'repeat_one': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f502.png?v7',
  'rescue_worker_helmet': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26d1.png?v7',
  'restroom': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6bb.png?v7',
  'reunion': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f7-1f1ea.png?v7',
  'revolving_hearts': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f49e.png?v7',
  'rewind': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23ea.png?v7',
  'rhinoceros': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f98f.png?v7',
  'ribbon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f380.png?v7',
  'rice': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f35a.png?v7',
  'rice_ball': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f359.png?v7',
  'rice_cracker': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f358.png?v7',
  'rice_scene': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f391.png?v7',
  'right_anger_bubble': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5ef.png?v7',
  'ring': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f48d.png?v7',
  'robot': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f916.png?v7',
  'rocket': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f680.png?v7',
  'rofl': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f923.png?v7',
  'roll_eyes': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f644.png?v7',
  'roller_coaster': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a2.png?v7',
  'romania': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f7-1f1f4.png?v7',
  'rooster': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f413.png?v7',
  'rose': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f339.png?v7',
  'rosette': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3f5.png?v7',
  'rotating_light': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a8.png?v7',
  'round_pushpin': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4cd.png?v7',
  'rowboat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a3.png?v7',
  'rowing_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a3.png?v7',
  'rowing_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a3-2640.png?v7',
  'ru': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f7-1f1fa.png?v7',
  'rugby_football': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c9.png?v7',
  'runner': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c3.png?v7',
  'running': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c3.png?v7',
  'running_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c3.png?v7',
  'running_shirt_with_sash': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3bd.png?v7',
  'running_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c3-2640.png?v7',
  'rwanda': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f7-1f1fc.png?v7',
  'sa': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f202.png?v7',
  'sagittarius': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2650.png?v7',
  'sailboat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f5.png?v7',
  'sake': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f376.png?v7',
  'samoa': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fc-1f1f8.png?v7',
  'san_marino': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1f2.png?v7',
  'sandal': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f461.png?v7',
  'santa': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f385.png?v7',
  'sao_tome_principe': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1f9.png?v7',
  'satellite': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4e1.png?v7',
  'satisfied': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f606.png?v7',
  'saudi_arabia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1e6.png?v7',
  'saxophone': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b7.png?v7',
  'school': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3eb.png?v7',
  'school_satchel': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f392.png?v7',
  'scissors': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2702.png?v7',
  'scorpion': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f982.png?v7',
  'scorpius': 'https://assets-cdn.github.com/images/icons/emoji/unicode/264f.png?v7',
  'scream': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f631.png?v7',
  'scream_cat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f640.png?v7',
  'scroll': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4dc.png?v7',
  'seat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ba.png?v7',
  'secret': 'https://assets-cdn.github.com/images/icons/emoji/unicode/3299.png?v7',
  'see_no_evil': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f648.png?v7',
  'seedling': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f331.png?v7',
  'selfie': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f933.png?v7',
  'senegal': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1f3.png?v7',
  'serbia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f7-1f1f8.png?v7',
  'seven': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0037-20e3.png?v7',
  'seychelles': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1e8.png?v7',
  'shallow_pan_of_food': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f958.png?v7',
  'shamrock': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2618.png?v7',
  'shark': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f988.png?v7',
  'shaved_ice': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f367.png?v7',
  'sheep': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f411.png?v7',
  'shell': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f41a.png?v7',
  'shield': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6e1.png?v7',
  'shinto_shrine': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26e9.png?v7',
  'ship': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a2.png?v7',
  'shipit': 'https://assets-cdn.github.com/images/icons/emoji/shipit.png?v7',
  'shirt': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f455.png?v7',
  'shit': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a9.png?v7',
  'shoe': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f45e.png?v7',
  'shopping': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6cd.png?v7',
  'shopping_cart': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6d2.png?v7',
  'shower': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6bf.png?v7',
  'shrimp': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f990.png?v7',
  'sierra_leone': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1f1.png?v7',
  'signal_strength': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f6.png?v7',
  'singapore': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1ec.png?v7',
  'sint_maarten': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1fd.png?v7',
  'six': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0036-20e3.png?v7',
  'six_pointed_star': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f52f.png?v7',
  'ski': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3bf.png?v7',
  'skier': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26f7.png?v7',
  'skull': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f480.png?v7',
  'skull_and_crossbones': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2620.png?v7',
  'sleeping': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f634.png?v7',
  'sleeping_bed': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6cc.png?v7',
  'sleepy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f62a.png?v7',
  'slightly_frowning_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f641.png?v7',
  'slightly_smiling_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f642.png?v7',
  'slot_machine': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b0.png?v7',
  'slovakia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1f0.png?v7',
  'slovenia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1ee.png?v7',
  'small_airplane': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6e9.png?v7',
  'small_blue_diamond': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f539.png?v7',
  'small_orange_diamond': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f538.png?v7',
  'small_red_triangle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f53a.png?v7',
  'small_red_triangle_down': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f53b.png?v7',
  'smile': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png?v7',
  'smile_cat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f638.png?v7',
  'smiley': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f603.png?v7',
  'smiley_cat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f63a.png?v7',
  'smiling_imp': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f608.png?v7',
  'smirk': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f60f.png?v7',
  'smirk_cat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f63c.png?v7',
  'smoking': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6ac.png?v7',
  'snail': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f40c.png?v7',
  'snake': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f40d.png?v7',
  'sneezing_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f927.png?v7',
  'snowboarder': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c2.png?v7',
  'snowflake': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2744.png?v7',
  'snowman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26c4.png?v7',
  'snowman_with_snow': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2603.png?v7',
  'sob': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f62d.png?v7',
  'soccer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26bd.png?v7',
  'solomon_islands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1e7.png?v7',
  'somalia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1f4.png?v7',
  'soon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f51c.png?v7',
  'sos': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f198.png?v7',
  'sound': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f509.png?v7',
  'south_africa': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ff-1f1e6.png?v7',
  'south_georgia_south_sandwich_islands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1f8.png?v7',
  'south_sudan': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1f8.png?v7',
  'space_invader': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f47e.png?v7',
  'spades': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2660.png?v7',
  'spaghetti': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f35d.png?v7',
  'sparkle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2747.png?v7',
  'sparkler': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f387.png?v7',
  'sparkles': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2728.png?v7',
  'sparkling_heart': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f496.png?v7',
  'speak_no_evil': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f64a.png?v7',
  'speaker': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f508.png?v7',
  'speaking_head': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5e3.png?v7',
  'speech_balloon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ac.png?v7',
  'speedboat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a4.png?v7',
  'spider': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f577.png?v7',
  'spider_web': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f578.png?v7',
  'spiral_calendar': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5d3.png?v7',
  'spiral_notepad': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5d2.png?v7',
  'spoon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f944.png?v7',
  'squid': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f991.png?v7',
  'squirrel': 'https://assets-cdn.github.com/images/icons/emoji/shipit.png?v7',
  'sri_lanka': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1f0.png?v7',
  'st_barthelemy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e7-1f1f1.png?v7',
  'st_helena': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1ed.png?v7',
  'st_kitts_nevis': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f0-1f1f3.png?v7',
  'st_lucia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f1-1f1e8.png?v7',
  'st_pierre_miquelon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f5-1f1f2.png?v7',
  'st_vincent_grenadines': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fb-1f1e8.png?v7',
  'stadium': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3df.png?v7',
  'star': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2b50.png?v7',
  'star2': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f31f.png?v7',
  'star_and_crescent': 'https://assets-cdn.github.com/images/icons/emoji/unicode/262a.png?v7',
  'star_of_david': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2721.png?v7',
  'stars': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f320.png?v7',
  'station': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f689.png?v7',
  'statue_of_liberty': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5fd.png?v7',
  'steam_locomotive': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f682.png?v7',
  'stew': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f372.png?v7',
  'stop_button': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23f9.png?v7',
  'stop_sign': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6d1.png?v7',
  'stopwatch': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23f1.png?v7',
  'straight_ruler': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4cf.png?v7',
  'strawberry': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f353.png?v7',
  'stuck_out_tongue': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f61b.png?v7',
  'stuck_out_tongue_closed_eyes': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f61d.png?v7',
  'stuck_out_tongue_winking_eye': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f61c.png?v7',
  'studio_microphone': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f399.png?v7',
  'stuffed_flatbread': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f959.png?v7',
  'sudan': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1e9.png?v7',
  'sun_behind_large_cloud': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f325.png?v7',
  'sun_behind_rain_cloud': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f326.png?v7',
  'sun_behind_small_cloud': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f324.png?v7',
  'sun_with_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f31e.png?v7',
  'sunflower': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f33b.png?v7',
  'sunglasses': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f60e.png?v7',
  'sunny': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2600.png?v7',
  'sunrise': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f305.png?v7',
  'sunrise_over_mountains': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f304.png?v7',
  'surfer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c4.png?v7',
  'surfing_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c4.png?v7',
  'surfing_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c4-2640.png?v7',
  'suriname': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1f7.png?v7',
  'sushi': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f363.png?v7',
  'suspect': 'https://assets-cdn.github.com/images/icons/emoji/suspect.png?v7',
  'suspension_railway': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f69f.png?v7',
  'swaziland': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1ff.png?v7',
  'sweat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f613.png?v7',
  'sweat_drops': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a6.png?v7',
  'sweat_smile': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f605.png?v7',
  'sweden': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1ea.png?v7',
  'sweet_potato': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f360.png?v7',
  'swimmer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ca.png?v7',
  'swimming_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ca.png?v7',
  'swimming_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ca-2640.png?v7',
  'switzerland': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e8-1f1ed.png?v7',
  'symbols': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f523.png?v7',
  'synagogue': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f54d.png?v7',
  'syria': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f8-1f1fe.png?v7',
  'syringe': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f489.png?v7',
  'taco': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f32e.png?v7',
  'tada': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f389.png?v7',
  'taiwan': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1fc.png?v7',
  'tajikistan': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1ef.png?v7',
  'tanabata_tree': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f38b.png?v7',
  'tangerine': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f34a.png?v7',
  'tanzania': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1ff.png?v7',
  'taurus': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2649.png?v7',
  'taxi': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f695.png?v7',
  'tea': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f375.png?v7',
  'telephone': 'https://assets-cdn.github.com/images/icons/emoji/unicode/260e.png?v7',
  'telephone_receiver': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4de.png?v7',
  'telescope': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f52d.png?v7',
  'tennis': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3be.png?v7',
  'tent': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26fa.png?v7',
  'thailand': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1ed.png?v7',
  'thermometer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f321.png?v7',
  'thinking': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f914.png?v7',
  'thought_balloon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ad.png?v7',
  'three': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0033-20e3.png?v7',
  'thumbsdown': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44e.png?v7',
  'thumbsup': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png?v7',
  'ticket': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ab.png?v7',
  'tickets': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f39f.png?v7',
  'tiger': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f42f.png?v7',
  'tiger2': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f405.png?v7',
  'timer_clock': 'https://assets-cdn.github.com/images/icons/emoji/unicode/23f2.png?v7',
  'timor_leste': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1f1.png?v7',
  'tipping_hand_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f481-2642.png?v7',
  'tipping_hand_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f481.png?v7',
  'tired_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f62b.png?v7',
  'tm': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2122.png?v7',
  'togo': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1ec.png?v7',
  'toilet': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6bd.png?v7',
  'tokelau': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1f0.png?v7',
  'tokyo_tower': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5fc.png?v7',
  'tomato': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f345.png?v7',
  'tonga': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1f4.png?v7',
  'tongue': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f445.png?v7',
  'top': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f51d.png?v7',
  'tophat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3a9.png?v7',
  'tornado': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f32a.png?v7',
  'tr': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1f7.png?v7',
  'trackball': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5b2.png?v7',
  'tractor': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f69c.png?v7',
  'traffic_light': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a5.png?v7',
  'train': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f68b.png?v7',
  'train2': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f686.png?v7',
  'tram': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f68a.png?v7',
  'triangular_flag_on_post': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a9.png?v7',
  'triangular_ruler': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4d0.png?v7',
  'trident': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f531.png?v7',
  'trinidad_tobago': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1f9.png?v7',
  'triumph': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f624.png?v7',
  'trolleybus': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f68e.png?v7',
  'trollface': 'https://assets-cdn.github.com/images/icons/emoji/trollface.png?v7',
  'trophy': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3c6.png?v7',
  'tropical_drink': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f379.png?v7',
  'tropical_fish': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f420.png?v7',
  'truck': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f69a.png?v7',
  'trumpet': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ba.png?v7',
  'tshirt': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f455.png?v7',
  'tulip': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f337.png?v7',
  'tumbler_glass': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f943.png?v7',
  'tunisia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1f3.png?v7',
  'turkey': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f983.png?v7',
  'turkmenistan': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1f2.png?v7',
  'turks_caicos_islands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1e8.png?v7',
  'turtle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f422.png?v7',
  'tuvalu': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f9-1f1fb.png?v7',
  'tv': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4fa.png?v7',
  'twisted_rightwards_arrows': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f500.png?v7',
  'two': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0032-20e3.png?v7',
  'two_hearts': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f495.png?v7',
  'two_men_holding_hands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46c.png?v7',
  'two_women_holding_hands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f46d.png?v7',
  'u5272': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f239.png?v7',
  'u5408': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f234.png?v7',
  'u55b6': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f23a.png?v7',
  'u6307': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f22f.png?v7',
  'u6708': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f237.png?v7',
  'u6709': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f236.png?v7',
  'u6e80': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f235.png?v7',
  'u7121': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f21a.png?v7',
  'u7533': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f238.png?v7',
  'u7981': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f232.png?v7',
  'u7a7a': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f233.png?v7',
  'uganda': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fa-1f1ec.png?v7',
  'uk': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ec-1f1e7.png?v7',
  'ukraine': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fa-1f1e6.png?v7',
  'umbrella': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2614.png?v7',
  'unamused': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f612.png?v7',
  'underage': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f51e.png?v7',
  'unicorn': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f984.png?v7',
  'united_arab_emirates': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1ea.png?v7',
  'unlock': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f513.png?v7',
  'up': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f199.png?v7',
  'upside_down_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f643.png?v7',
  'uruguay': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fa-1f1fe.png?v7',
  'us': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fa-1f1f8.png?v7',
  'us_virgin_islands': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fb-1f1ee.png?v7',
  'uzbekistan': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fa-1f1ff.png?v7',
  'v': 'https://assets-cdn.github.com/images/icons/emoji/unicode/270c.png?v7',
  'vanuatu': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fb-1f1fa.png?v7',
  'vatican_city': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fb-1f1e6.png?v7',
  'venezuela': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fb-1f1ea.png?v7',
  'vertical_traffic_light': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a6.png?v7',
  'vhs': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4fc.png?v7',
  'vibration_mode': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f3.png?v7',
  'video_camera': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4f9.png?v7',
  'video_game': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3ae.png?v7',
  'vietnam': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fb-1f1f3.png?v7',
  'violin': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3bb.png?v7',
  'virgo': 'https://assets-cdn.github.com/images/icons/emoji/unicode/264d.png?v7',
  'volcano': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f30b.png?v7',
  'volleyball': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3d0.png?v7',
  'vs': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f19a.png?v7',
  'vulcan_salute': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f596.png?v7',
  'walking': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b6.png?v7',
  'walking_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b6.png?v7',
  'walking_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6b6-2640.png?v7',
  'wallis_futuna': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fc-1f1eb.png?v7',
  'waning_crescent_moon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f318.png?v7',
  'waning_gibbous_moon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f316.png?v7',
  'warning': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26a0.png?v7',
  'wastebasket': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5d1.png?v7',
  'watch': 'https://assets-cdn.github.com/images/icons/emoji/unicode/231a.png?v7',
  'water_buffalo': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f403.png?v7',
  'watermelon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f349.png?v7',
  'wave': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f44b.png?v7',
  'wavy_dash': 'https://assets-cdn.github.com/images/icons/emoji/unicode/3030.png?v7',
  'waxing_crescent_moon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f312.png?v7',
  'waxing_gibbous_moon': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f314.png?v7',
  'wc': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6be.png?v7',
  'weary': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f629.png?v7',
  'wedding': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f492.png?v7',
  'weight_lifting_man': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3cb.png?v7',
  'weight_lifting_woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3cb-2640.png?v7',
  'western_sahara': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ea-1f1ed.png?v7',
  'whale': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f433.png?v7',
  'whale2': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f40b.png?v7',
  'wheel_of_dharma': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2638.png?v7',
  'wheelchair': 'https://assets-cdn.github.com/images/icons/emoji/unicode/267f.png?v7',
  'white_check_mark': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2705.png?v7',
  'white_circle': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26aa.png?v7',
  'white_flag': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f3f3.png?v7',
  'white_flower': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4ae.png?v7',
  'white_large_square': 'https://assets-cdn.github.com/images/icons/emoji/unicode/2b1c.png?v7',
  'white_medium_small_square': 'https://assets-cdn.github.com/images/icons/emoji/unicode/25fd.png?v7',
  'white_medium_square': 'https://assets-cdn.github.com/images/icons/emoji/unicode/25fb.png?v7',
  'white_small_square': 'https://assets-cdn.github.com/images/icons/emoji/unicode/25ab.png?v7',
  'white_square_button': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f533.png?v7',
  'wilted_flower': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f940.png?v7',
  'wind_chime': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f390.png?v7',
  'wind_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f32c.png?v7',
  'wine_glass': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f377.png?v7',
  'wink': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f609.png?v7',
  'wolf': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f43a.png?v7',
  'woman': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469.png?v7',
  'woman_artist': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f3a8.png?v7',
  'woman_astronaut': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f680.png?v7',
  'woman_cartwheeling': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f938-2640.png?v7',
  'woman_cook': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f373.png?v7',
  'woman_facepalming': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f926-2640.png?v7',
  'woman_factory_worker': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f3ed.png?v7',
  'woman_farmer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f33e.png?v7',
  'woman_firefighter': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f692.png?v7',
  'woman_health_worker': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-2695.png?v7',
  'woman_judge': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-2696.png?v7',
  'woman_juggling': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f939-2640.png?v7',
  'woman_mechanic': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f527.png?v7',
  'woman_office_worker': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f4bc.png?v7',
  'woman_pilot': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-2708.png?v7',
  'woman_playing_handball': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f93e-2640.png?v7',
  'woman_playing_water_polo': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f93d-2640.png?v7',
  'woman_scientist': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f52c.png?v7',
  'woman_shrugging': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f937-2640.png?v7',
  'woman_singer': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f3a4.png?v7',
  'woman_student': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f393.png?v7',
  'woman_teacher': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f3eb.png?v7',
  'woman_technologist': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f469-1f4bb.png?v7',
  'woman_with_turban': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f473-2640.png?v7',
  'womans_clothes': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f45a.png?v7',
  'womans_hat': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f452.png?v7',
  'women_wrestling': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f93c-2640.png?v7',
  'womens': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f6ba.png?v7',
  'world_map': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f5fa.png?v7',
  'worried': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f61f.png?v7',
  'wrench': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f527.png?v7',
  'writing_hand': 'https://assets-cdn.github.com/images/icons/emoji/unicode/270d.png?v7',
  'x': 'https://assets-cdn.github.com/images/icons/emoji/unicode/274c.png?v7',
  'yellow_heart': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f49b.png?v7',
  'yemen': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1fe-1f1ea.png?v7',
  'yen': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4b4.png?v7',
  'yin_yang': 'https://assets-cdn.github.com/images/icons/emoji/unicode/262f.png?v7',
  'yum': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f60b.png?v7',
  'zambia': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ff-1f1f2.png?v7',
  'zap': 'https://assets-cdn.github.com/images/icons/emoji/unicode/26a1.png?v7',
  'zero': 'https://assets-cdn.github.com/images/icons/emoji/unicode/0030-20e3.png?v7',
  'zimbabwe': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f1ff-1f1fc.png?v7',
  'zipper_mouth_face': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f910.png?v7',
  'zzz': 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f4a4.png?v7'
};

/***/ }),

/***/ "./resources/assets/js/vendor/highlight.min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! highlight.js v9.9.0 | BSD3 License | git.io/hljslicense */
!function (e) {
  var t = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window || "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self; true ? e(exports) : t && (t.hljs = e({}), "function" == typeof define && define.amd && define([], function () {
    return t.hljs;
  }));
}(function (e) {
  function t(e) {
    return e.replace(/[&<>]/gm, function (e) {
      return L[e];
    });
  }function r(e) {
    return e.nodeName.toLowerCase();
  }function a(e, t) {
    var r = e && e.exec(t);return r && 0 === r.index;
  }function n(e) {
    return C.test(e);
  }function i(e) {
    var t,
        r,
        a,
        i,
        s = e.className + " ";if (s += e.parentNode ? e.parentNode.className : "", r = E.exec(s)) return y(r[1]) ? r[1] : "no-highlight";for (s = s.split(/\s+/), t = 0, a = s.length; a > t; t++) {
      if (i = s[t], n(i) || y(i)) return i;
    }
  }function s(e, t) {
    var r,
        a = {};for (r in e) {
      a[r] = e[r];
    }if (t) for (r in t) {
      a[r] = t[r];
    }return a;
  }function c(e) {
    var t = [];return function a(e, n) {
      for (var i = e.firstChild; i; i = i.nextSibling) {
        3 === i.nodeType ? n += i.nodeValue.length : 1 === i.nodeType && (t.push({ event: "start", offset: n, node: i }), n = a(i, n), r(i).match(/br|hr|img|input/) || t.push({ event: "stop", offset: n, node: i }));
      }return n;
    }(e, 0), t;
  }function o(e, a, n) {
    function i() {
      return e.length && a.length ? e[0].offset !== a[0].offset ? e[0].offset < a[0].offset ? e : a : "start" === a[0].event ? e : a : e.length ? e : a;
    }function s(e) {
      function a(e) {
        return " " + e.nodeName + '="' + t(e.value) + '"';
      }u += "<" + r(e) + w.map.call(e.attributes, a).join("") + ">";
    }function c(e) {
      u += "</" + r(e) + ">";
    }function o(e) {
      ("start" === e.event ? s : c)(e.node);
    }for (var l = 0, u = "", d = []; e.length || a.length;) {
      var b = i();if (u += t(n.substring(l, b[0].offset)), l = b[0].offset, b === e) {
        d.reverse().forEach(c);do {
          o(b.splice(0, 1)[0]), b = i();
        } while (b === e && b.length && b[0].offset === l);d.reverse().forEach(s);
      } else "start" === b[0].event ? d.push(b[0].node) : d.pop(), o(b.splice(0, 1)[0]);
    }return u + t(n.substr(l));
  }function l(e) {
    function t(e) {
      return e && e.source || e;
    }function r(r, a) {
      return new RegExp(t(r), "m" + (e.cI ? "i" : "") + (a ? "g" : ""));
    }function a(n, i) {
      if (!n.compiled) {
        if (n.compiled = !0, n.k = n.k || n.bK, n.k) {
          var c = {},
              o = function o(t, r) {
            e.cI && (r = r.toLowerCase()), r.split(" ").forEach(function (e) {
              var r = e.split("|");c[r[0]] = [t, r[1] ? Number(r[1]) : 1];
            });
          };"string" == typeof n.k ? o("keyword", n.k) : N(n.k).forEach(function (e) {
            o(e, n.k[e]);
          }), n.k = c;
        }n.lR = r(n.l || /\w+/, !0), i && (n.bK && (n.b = "\\b(" + n.bK.split(" ").join("|") + ")\\b"), n.b || (n.b = /\B|\b/), n.bR = r(n.b), n.e || n.eW || (n.e = /\B|\b/), n.e && (n.eR = r(n.e)), n.tE = t(n.e) || "", n.eW && i.tE && (n.tE += (n.e ? "|" : "") + i.tE)), n.i && (n.iR = r(n.i)), null == n.r && (n.r = 1), n.c || (n.c = []);var l = [];n.c.forEach(function (e) {
          e.v ? e.v.forEach(function (t) {
            l.push(s(e, t));
          }) : l.push("self" === e ? n : e);
        }), n.c = l, n.c.forEach(function (e) {
          a(e, n);
        }), n.starts && a(n.starts, i);var u = n.c.map(function (e) {
          return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b;
        }).concat([n.tE, n.i]).map(t).filter(Boolean);n.t = u.length ? r(u.join("|"), !0) : { exec: function exec() {
            return null;
          } };
      }
    }a(e);
  }function u(e, r, n, i) {
    function s(e, t) {
      var r, n;for (r = 0, n = t.c.length; n > r; r++) {
        if (a(t.c[r].bR, e)) return t.c[r];
      }
    }function c(e, t) {
      if (a(e.eR, t)) {
        for (; e.endsParent && e.parent;) {
          e = e.parent;
        }return e;
      }return e.eW ? c(e.parent, t) : void 0;
    }function o(e, t) {
      return !n && a(t.iR, e);
    }function b(e, t) {
      var r = v.cI ? t[0].toLowerCase() : t[0];return e.k.hasOwnProperty(r) && e.k[r];
    }function p(e, t, r, a) {
      var n = a ? "" : S.classPrefix,
          i = '<span class="' + n,
          s = r ? "" : B;return i += e + '">', i + t + s;
    }function m() {
      var e, r, a, n;if (!N.k) return t(E);for (n = "", r = 0, N.lR.lastIndex = 0, a = N.lR.exec(E); a;) {
        n += t(E.substring(r, a.index)), e = b(N, a), e ? (M += e[1], n += p(e[0], t(a[0]))) : n += t(a[0]), r = N.lR.lastIndex, a = N.lR.exec(E);
      }return n + t(E.substr(r));
    }function f() {
      var e = "string" == typeof N.sL;if (e && !k[N.sL]) return t(E);var r = e ? u(N.sL, E, !0, x[N.sL]) : d(E, N.sL.length ? N.sL : void 0);return N.r > 0 && (M += r.r), e && (x[N.sL] = r.top), p(r.language, r.value, !1, !0);
    }function g() {
      C += null != N.sL ? f() : m(), E = "";
    }function _(e) {
      C += e.cN ? p(e.cN, "", !0) : "", N = Object.create(e, { parent: { value: N } });
    }function h(e, t) {
      if (E += e, null == t) return g(), 0;var r = s(t, N);if (r) return r.skip ? E += t : (r.eB && (E += t), g(), r.rB || r.eB || (E = t)), _(r, t), r.rB ? 0 : t.length;var a = c(N, t);if (a) {
        var n = N;n.skip ? E += t : (n.rE || n.eE || (E += t), g(), n.eE && (E = t));do {
          N.cN && (C += B), N.skip || (M += N.r), N = N.parent;
        } while (N !== a.parent);return a.starts && _(a.starts, ""), n.rE ? 0 : t.length;
      }if (o(t, N)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (N.cN || "<unnamed>") + '"');return E += t, t.length || 1;
    }var v = y(e);if (!v) throw new Error('Unknown language: "' + e + '"');l(v);var w,
        N = i || v,
        x = {},
        C = "";for (w = N; w !== v; w = w.parent) {
      w.cN && (C = p(w.cN, "", !0) + C);
    }var E = "",
        M = 0;try {
      for (var L, R, A = 0;;) {
        if (N.t.lastIndex = A, L = N.t.exec(r), !L) break;R = h(r.substring(A, L.index), L[0]), A = L.index + R;
      }for (h(r.substr(A)), w = N; w.parent; w = w.parent) {
        w.cN && (C += B);
      }return { r: M, value: C, language: e, top: N };
    } catch ($) {
      if ($.message && -1 !== $.message.indexOf("Illegal")) return { r: 0, value: t(r) };throw $;
    }
  }function d(e, r) {
    r = r || S.languages || N(k);var a = { r: 0, value: t(e) },
        n = a;return r.filter(y).forEach(function (t) {
      var r = u(t, e, !1);r.language = t, r.r > n.r && (n = r), r.r > a.r && (n = a, a = r);
    }), n.language && (a.second_best = n), a;
  }function b(e) {
    return S.tabReplace || S.useBR ? e.replace(M, function (e, t) {
      return S.useBR && "\n" === e ? "<br>" : S.tabReplace ? t.replace(/\t/g, S.tabReplace) : void 0;
    }) : e;
  }function p(e, t, r) {
    var a = t ? x[t] : r,
        n = [e.trim()];return e.match(/\bhljs\b/) || n.push("hljs"), -1 === e.indexOf(a) && n.push(a), n.join(" ").trim();
  }function m(e) {
    var t,
        r,
        a,
        s,
        l,
        m = i(e);n(m) || (S.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e, l = t.textContent, a = m ? u(m, l, !0) : d(l), r = c(t), r.length && (s = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), s.innerHTML = a.value, a.value = o(r, c(s), l)), a.value = b(a.value), e.innerHTML = a.value, e.className = p(e.className, m, a.language), e.result = { language: a.language, re: a.r }, a.second_best && (e.second_best = { language: a.second_best.language, re: a.second_best.r }));
  }function f(e) {
    S = s(S, e);
  }function g() {
    if (!g.called) {
      g.called = !0;var e = document.querySelectorAll("pre code");w.forEach.call(e, m);
    }
  }function _() {
    addEventListener("DOMContentLoaded", g, !1), addEventListener("load", g, !1);
  }function h(t, r) {
    var a = k[t] = r(e);a.aliases && a.aliases.forEach(function (e) {
      x[e] = t;
    });
  }function v() {
    return N(k);
  }function y(e) {
    return e = (e || "").toLowerCase(), k[e] || k[x[e]];
  }var w = [],
      N = Object.keys,
      k = {},
      x = {},
      C = /^(no-?highlight|plain|text)$/i,
      E = /\blang(?:uage)?-([\w-]+)\b/i,
      M = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
      B = "</span>",
      S = { classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0 },
      L = { "&": "&amp;", "<": "&lt;", ">": "&gt;" };return e.highlight = u, e.highlightAuto = d, e.fixMarkup = b, e.highlightBlock = m, e.configure = f, e.initHighlighting = g, e.initHighlightingOnLoad = _, e.registerLanguage = h, e.listLanguages = v, e.getLanguage = y, e.inherit = s, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = { b: "\\\\[\\s\\S]", r: 0 }, e.ASM = { cN: "string", b: "'", e: "'", i: "\\n", c: [e.BE] }, e.QSM = { cN: "string", b: '"', e: '"', i: "\\n", c: [e.BE] }, e.PWM = { b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/ }, e.C = function (t, r, a) {
    var n = e.inherit({ cN: "comment", b: t, e: r, c: [] }, a || {});return n.c.push(e.PWM), n.c.push({ cN: "doctag", b: "(?:TODO|FIXME|NOTE|BUG|XXX):", r: 0 }), n;
  }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = { cN: "number", b: e.NR, r: 0 }, e.CNM = { cN: "number", b: e.CNR, r: 0 }, e.BNM = { cN: "number", b: e.BNR, r: 0 }, e.CSSNM = { cN: "number", b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?", r: 0 }, e.RM = { cN: "regexp", b: /\//, e: /\/[gimuy]*/, i: /\n/, c: [e.BE, { b: /\[/, e: /\]/, r: 0, c: [e.BE] }] }, e.TM = { cN: "title", b: e.IR, r: 0 }, e.UTM = { cN: "title", b: e.UIR, r: 0 }, e.METHOD_GUARD = { b: "\\.\\s*" + e.UIR, r: 0 }, e.registerLanguage("apache", function (e) {
    var t = { cN: "number", b: "[\\$%]\\d+" };return { aliases: ["apacheconf"], cI: !0, c: [e.HCM, { cN: "section", b: "</?", e: ">" }, { cN: "attribute", b: /\w+/, r: 0, k: { nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername" }, starts: { e: /$/, r: 0, k: { literal: "on off all" }, c: [{ cN: "meta", b: "\\s\\[", e: "\\]$" }, { cN: "variable", b: "[\\$%]\\{", e: "\\}", c: ["self", t] }, t, e.QSM] } }], i: /\S/ };
  }), e.registerLanguage("bash", function (e) {
    var t = { cN: "variable", v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }] },
        r = { cN: "string", b: /"/, e: /"/, c: [e.BE, t, { cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE] }] },
        a = { cN: "string", b: /'/, e: /'/ };return { aliases: ["sh", "zsh"], l: /-?[a-z\._]+/, k: { keyword: "if then else elif fi for while in do done case esac function", literal: "true false", built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp", _: "-ne -eq -lt -gt -f -d -e -s -l -a" }, c: [{ cN: "meta", b: /^#![^\n]+sh\s*$/, r: 10 }, { cN: "function", b: /\w[\w\d_]*\s*\(\s*\)\s*\{/, rB: !0, c: [e.inherit(e.TM, { b: /\w[\w\d_]*/ })], r: 0 }, e.HCM, r, a, t] };
  }), e.registerLanguage("coffeescript", function (e) {
    var t = { keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not", literal: "true false null undefined yes no on off", built_in: "npm require console print module global window document" },
        r = "[A-Za-z$_][0-9A-Za-z$_]*",
        a = { cN: "subst", b: /#\{/, e: /}/, k: t },
        n = [e.BNM, e.inherit(e.CNM, { starts: { e: "(\\s*/)?", r: 0 } }), { cN: "string", v: [{ b: /'''/, e: /'''/, c: [e.BE] }, { b: /'/, e: /'/, c: [e.BE] }, { b: /"""/, e: /"""/, c: [e.BE, a] }, { b: /"/, e: /"/, c: [e.BE, a] }] }, { cN: "regexp", v: [{ b: "///", e: "///", c: [a, e.HCM] }, { b: "//[gim]*", r: 0 }, { b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/ }] }, { b: "@" + r }, { sL: "javascript", eB: !0, eE: !0, v: [{ b: "```", e: "```" }, { b: "`", e: "`" }] }];a.c = n;var i = e.inherit(e.TM, { b: r }),
        s = "(\\(.*\\))?\\s*\\B[-=]>",
        c = { cN: "params", b: "\\([^\\(]", rB: !0, c: [{ b: /\(/, e: /\)/, k: t, c: ["self"].concat(n) }] };return { aliases: ["coffee", "cson", "iced"], k: t, i: /\/\*/, c: n.concat([e.C("###", "###"), e.HCM, { cN: "function", b: "^\\s*" + r + "\\s*=\\s*" + s, e: "[-=]>", rB: !0, c: [i, c] }, { b: /[:\(,=]\s*/, r: 0, c: [{ cN: "function", b: s, e: "[-=]>", rB: !0, c: [c] }] }, { cN: "class", bK: "class", e: "$", i: /[:="\[\]]/, c: [{ bK: "extends", eW: !0, i: /[:="\[\]]/, c: [i] }, i] }, { b: r + ":", e: ":", rB: !0, rE: !0, r: 0 }]) };
  }), e.registerLanguage("cpp", function (e) {
    var t = { cN: "keyword", b: "\\b[a-z\\d_]*_t\\b" },
        r = { cN: "string", v: [{ b: '(u8?|U)?L?"', e: '"', i: "\\n", c: [e.BE] }, { b: '(u8?|U)?R"', e: '"', c: [e.BE] }, { b: "'\\\\?.", e: "'", i: "." }] },
        a = { cN: "number", v: [{ b: "\\b(0b[01']+)" }, { b: "\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" }, { b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }], r: 0 },
        n = { cN: "meta", b: /#\s*[a-z]+\b/, e: /$/, k: { "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include" }, c: [{ b: /\\\n/, r: 0 }, e.inherit(r, { cN: "meta-string" }), { cN: "meta-string", b: "<", e: ">", i: "\\n" }, e.CLCM, e.CBCM] },
        i = e.IR + "\\s*\\(",
        s = { keyword: "int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return", built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr", literal: "true false nullptr NULL" },
        c = [t, e.CLCM, e.CBCM, a, r];return { aliases: ["c", "cc", "h", "c++", "h++", "hpp"], k: s, i: "</", c: c.concat([n, { b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<", e: ">", k: s, c: ["self", t] }, { b: e.IR + "::", k: s }, { v: [{ b: /=/, e: /;/ }, { b: /\(/, e: /\)/ }, { bK: "new throw return else", e: /;/ }], k: s, c: c.concat([{ b: /\(/, e: /\)/, k: s, c: c.concat(["self"]), r: 0 }]), r: 0 }, { cN: "function", b: "(" + e.IR + "[\\*&\\s]+)+" + i, rB: !0, e: /[{;=]/, eE: !0, k: s, i: /[^\w\s\*&]/, c: [{ b: i, rB: !0, c: [e.TM], r: 0 }, { cN: "params", b: /\(/, e: /\)/, k: s, r: 0, c: [e.CLCM, e.CBCM, r, a, t] }, e.CLCM, e.CBCM, n] }]), exports: { preprocessor: n, strings: r, k: s } };
  }), e.registerLanguage("cs", function (e) {
    var t = { keyword: "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while nameof add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield", literal: "null false true" },
        r = { cN: "string", b: '@"', e: '"', c: [{ b: '""' }] },
        a = e.inherit(r, { i: /\n/ }),
        n = { cN: "subst", b: "{", e: "}", k: t },
        i = e.inherit(n, { i: /\n/ }),
        s = { cN: "string", b: /\$"/, e: '"', i: /\n/, c: [{ b: "{{" }, { b: "}}" }, e.BE, i] },
        c = { cN: "string", b: /\$@"/, e: '"', c: [{ b: "{{" }, { b: "}}" }, { b: '""' }, n] },
        o = e.inherit(c, { i: /\n/, c: [{ b: "{{" }, { b: "}}" }, { b: '""' }, i] });n.c = [c, s, r, e.ASM, e.QSM, e.CNM, e.CBCM], i.c = [o, s, a, e.ASM, e.QSM, e.CNM, e.inherit(e.CBCM, { i: /\n/ })];var l = { v: [c, s, r, e.ASM, e.QSM] },
        u = e.IR + "(<" + e.IR + "(\\s*,\\s*" + e.IR + ")*>)?(\\[\\])?";return { aliases: ["csharp"], k: t, i: /::/, c: [e.C("///", "$", { rB: !0, c: [{ cN: "doctag", v: [{ b: "///", r: 0 }, { b: "<!--|-->" }, { b: "</?", e: ">" }] }] }), e.CLCM, e.CBCM, { cN: "meta", b: "#", e: "$", k: { "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum" } }, l, e.CNM, { bK: "class interface", e: /[{;=]/, i: /[^\s:]/, c: [e.TM, e.CLCM, e.CBCM] }, { bK: "namespace", e: /[{;=]/, i: /[^\s:]/, c: [e.inherit(e.TM, { b: "[a-zA-Z](\\.?\\w)*" }), e.CLCM, e.CBCM] }, { bK: "new return throw await", r: 0 }, { cN: "function", b: "(" + u + "\\s+)+" + e.IR + "\\s*\\(", rB: !0, e: /[{;=]/, eE: !0, k: t, c: [{ b: e.IR + "\\s*\\(", rB: !0, c: [e.TM], r: 0 }, { cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, k: t, r: 0, c: [l, e.CNM, e.CBCM] }, e.CLCM, e.CBCM] }] };
  }), e.registerLanguage("css", function (e) {
    var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
        r = { b: /[A-Z\_\.\-]+\s*:/, rB: !0, e: ";", eW: !0, c: [{ cN: "attribute", b: /\S/, e: ":", eE: !0, starts: { eW: !0, eE: !0, c: [{ b: /[\w-]+\(/, rB: !0, c: [{ cN: "built_in", b: /[\w-]+/ }, { b: /\(/, e: /\)/, c: [e.ASM, e.QSM] }] }, e.CSSNM, e.QSM, e.ASM, e.CBCM, { cN: "number", b: "#[0-9A-Fa-f]+" }, { cN: "meta", b: "!important" }] } }] };return { cI: !0, i: /[=\/|'\$]/, c: [e.CBCM, { cN: "selector-id", b: /#[A-Za-z0-9_-]+/ }, { cN: "selector-class", b: /\.[A-Za-z0-9_-]+/ }, { cN: "selector-attr", b: /\[/, e: /\]/, i: "$" }, { cN: "selector-pseudo", b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ }, { b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page" }, { b: "@", e: "[{;]", i: /:/, c: [{ cN: "keyword", b: /\w+/ }, { b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM] }] }, { cN: "selector-tag", b: t, r: 0 }, { b: "{", e: "}", i: /\S/, c: [e.CBCM, r] }] };
  }), e.registerLanguage("diff", function (e) {
    return { aliases: ["patch"], c: [{ cN: "meta", r: 10, v: [{ b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/ }, { b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ }, { b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/ }] }, { cN: "comment", v: [{ b: /Index: /, e: /$/ }, { b: /={3,}/, e: /$/ }, { b: /^\-{3}/, e: /$/ }, { b: /^\*{3} /, e: /$/ }, { b: /^\+{3}/, e: /$/ }, { b: /\*{5}/, e: /\*{5}$/ }] }, { cN: "addition", b: "^\\+", e: "$" }, { cN: "deletion", b: "^\\-", e: "$" }, { cN: "addition", b: "^\\!", e: "$" }] };
  }), e.registerLanguage("http", function (e) {
    var t = "HTTP/[0-9\\.]+";return { aliases: ["https"], i: "\\S", c: [{ b: "^" + t, e: "$", c: [{ cN: "number", b: "\\b\\d{3}\\b" }] }, { b: "^[A-Z]+ (.*?) " + t + "$", rB: !0, e: "$", c: [{ cN: "string", b: " ", e: " ", eB: !0, eE: !0 }, { b: t }, { cN: "keyword", b: "[A-Z]+" }] }, { cN: "attribute", b: "^\\w", e: ": ", eE: !0, i: "\\n|\\s|=", starts: { e: "$", r: 0 } }, { b: "\\n\\n", starts: { sL: [], eW: !0 } }] };
  }), e.registerLanguage("ini", function (e) {
    var t = { cN: "string", c: [e.BE], v: [{ b: "'''", e: "'''", r: 10 }, { b: '"""', e: '"""', r: 10 }, { b: '"', e: '"' }, { b: "'", e: "'" }] };return { aliases: ["toml"], cI: !0, i: /\S/, c: [e.C(";", "$"), e.HCM, { cN: "section", b: /^\s*\[+/, e: /\]+/ }, { b: /^[a-z0-9\[\]_-]+\s*=\s*/, e: "$", rB: !0, c: [{ cN: "attr", b: /[a-z0-9\[\]_-]+/ }, { b: /=/, eW: !0, r: 0, c: [{ cN: "literal", b: /\bon|off|true|false|yes|no\b/ }, { cN: "variable", v: [{ b: /\$[\w\d"][\w\d_]*/ }, { b: /\$\{(.*?)}/ }] }, t, { cN: "number", b: /([\+\-]+)?[\d]+_[\d_]+/ }, e.NM] }] }] };
  }), e.registerLanguage("java", function (e) {
    var t = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",
        r = t + "(<" + t + "(\\s*,\\s*" + t + ")*>)?",
        a = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",
        n = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
        i = { cN: "number", b: n, r: 0 };return { aliases: ["jsp"], k: a, i: /<\/|#/, c: [e.C("/\\*\\*", "\\*/", { r: 0, c: [{ b: /\w+@/, r: 0 }, { cN: "doctag", b: "@[A-Za-z]+" }] }), e.CLCM, e.CBCM, e.ASM, e.QSM, { cN: "class", bK: "class interface", e: /[{;=]/, eE: !0, k: "class interface", i: /[:"\[\]]/, c: [{ bK: "extends implements" }, e.UTM] }, { bK: "new throw return else", r: 0 }, { cN: "function", b: "(" + r + "\\s+)+" + e.UIR + "\\s*\\(", rB: !0, e: /[{;=]/, eE: !0, k: a, c: [{ b: e.UIR + "\\s*\\(", rB: !0, r: 0, c: [e.UTM] }, { cN: "params", b: /\(/, e: /\)/, k: a, r: 0, c: [e.ASM, e.QSM, e.CNM, e.CBCM] }, e.CLCM, e.CBCM] }, i, { cN: "meta", b: "@[A-Za-z]+" }] };
  }), e.registerLanguage("javascript", function (e) {
    var t = "[A-Za-z$_][0-9A-Za-z$_]*",
        r = { keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as", literal: "true false null undefined NaN Infinity", built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise" },
        a = { cN: "number", v: [{ b: "\\b(0[bB][01]+)" }, { b: "\\b(0[oO][0-7]+)" }, { b: e.CNR }], r: 0 },
        n = { cN: "subst", b: "\\$\\{", e: "\\}", k: r, c: [] },
        i = { cN: "string", b: "`", e: "`", c: [e.BE, n] };n.c = [e.ASM, e.QSM, i, a, e.RM];var s = n.c.concat([e.CBCM, e.CLCM]);return { aliases: ["js", "jsx"], k: r, c: [{ cN: "meta", r: 10, b: /^\s*['"]use (strict|asm)['"]/ }, { cN: "meta", b: /^#!/, e: /$/ }, e.ASM, e.QSM, i, e.CLCM, e.CBCM, a, { b: /[{,]\s*/, r: 0, c: [{ b: t + "\\s*:", rB: !0, r: 0, c: [{ cN: "attr", b: t, r: 0 }] }] }, { b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*", k: "return throw case", c: [e.CLCM, e.CBCM, e.RM, { cN: "function", b: "(\\(.*?\\)|" + t + ")\\s*=>", rB: !0, e: "\\s*=>", c: [{ cN: "params", v: [{ b: t }, { b: /\(\s*\)/ }, { b: /\(/, e: /\)/, eB: !0, eE: !0, k: r, c: s }] }] }, { b: /</, e: /(\/\w+|\w+\/)>/, sL: "xml", c: [{ b: /<\w+\s*\/>/, skip: !0 }, { b: /<\w+/, e: /(\/\w+|\w+\/)>/, skip: !0, c: [{ b: /<\w+\s*\/>/, skip: !0 }, "self"] }] }], r: 0 }, { cN: "function", bK: "function", e: /\{/, eE: !0, c: [e.inherit(e.TM, { b: t }), { cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, c: s }], i: /\[|%/ }, { b: /\$[(.]/ }, e.METHOD_GUARD, { cN: "class", bK: "class", e: /[{;=]/, eE: !0, i: /[:"\[\]]/, c: [{ bK: "extends" }, e.UTM] }, { bK: "constructor", e: /\{/, eE: !0 }], i: /#(?!!)/ };
  }), e.registerLanguage("json", function (e) {
    var t = { literal: "true false null" },
        r = [e.QSM, e.CNM],
        a = { e: ",", eW: !0, eE: !0, c: r, k: t },
        n = { b: "{", e: "}", c: [{ cN: "attr", b: /"/, e: /"/, c: [e.BE], i: "\\n" }, e.inherit(a, { b: /:/ })], i: "\\S" },
        i = { b: "\\[", e: "\\]", c: [e.inherit(a)], i: "\\S" };return r.splice(r.length, 0, n, i), { c: r, k: t, i: "\\S" };
  }), e.registerLanguage("makefile", function (e) {
    var t = { cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE] };return { aliases: ["mk", "mak"], c: [e.HCM, { b: /^\w+\s*\W*=/, rB: !0, r: 0, starts: { e: /\s*\W*=/, eE: !0, starts: { e: /$/, r: 0, c: [t] } } }, { cN: "section", b: /^[\w]+:\s*$/ }, { cN: "meta", b: /^\.PHONY:/, e: /$/, k: { "meta-keyword": ".PHONY" }, l: /[\.\w]+/ }, { b: /^\t+/, e: /$/, r: 0, c: [e.QSM, t] }] };
  }), e.registerLanguage("xml", function (e) {
    var t = "[A-Za-z0-9\\._:-]+",
        r = { eW: !0, i: /</, r: 0, c: [{ cN: "attr", b: t, r: 0 }, { b: /=\s*/, r: 0, c: [{ cN: "string", endsParent: !0, v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }, { b: /[^\s"'=<>`]+/ }] }] }] };return { aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"], cI: !0, c: [{ cN: "meta", b: "<!DOCTYPE", e: ">", r: 10, c: [{ b: "\\[", e: "\\]" }] }, e.C("<!--", "-->", { r: 10 }), { b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10 }, { b: /<\?(php)?/, e: /\?>/, sL: "php", c: [{ b: "/\\*", e: "\\*/", skip: !0 }] }, { cN: "tag", b: "<style(?=\\s|>|$)", e: ">", k: { name: "style" }, c: [r], starts: { e: "</style>", rE: !0, sL: ["css", "xml"] } }, { cN: "tag", b: "<script(?=\\s|>|$)", e: ">", k: { name: "script" }, c: [r], starts: { e: "</script>", rE: !0, sL: ["actionscript", "javascript", "handlebars", "xml"] } }, { cN: "meta", v: [{ b: /<\?xml/, e: /\?>/, r: 10 }, { b: /<\?\w+/, e: /\?>/ }] }, { cN: "tag", b: "</?", e: "/?>", c: [{ cN: "name", b: /[^\/><\s]+/, r: 0 }, r] }] };
  }), e.registerLanguage("markdown", function (e) {
    return { aliases: ["md", "mkdown", "mkd"], c: [{ cN: "section", v: [{ b: "^#{1,6}", e: "$" }, { b: "^.+?\\n[=-]{2,}$" }] }, { b: "<", e: ">", sL: "xml", r: 0 }, { cN: "bullet", b: "^([*+-]|(\\d+\\.))\\s+" }, { cN: "strong", b: "[*_]{2}.+?[*_]{2}" }, { cN: "emphasis", v: [{ b: "\\*.+?\\*" }, { b: "_.+?_", r: 0 }] }, { cN: "quote", b: "^>\\s+", e: "$" }, { cN: "code", v: [{ b: "^```w*s*$", e: "^```s*$" }, { b: "`.+?`" }, { b: "^( {4}|	)", e: "$", r: 0 }] }, { b: "^[-\\*]{3,}", e: "$" }, { b: "\\[.+?\\][\\(\\[].*?[\\)\\]]", rB: !0, c: [{ cN: "string", b: "\\[", e: "\\]", eB: !0, rE: !0, r: 0 }, { cN: "link", b: "\\]\\(", e: "\\)", eB: !0, eE: !0 }, { cN: "symbol", b: "\\]\\[", e: "\\]", eB: !0, eE: !0 }], r: 10 }, { b: /^\[[^\n]+\]:/, rB: !0, c: [{ cN: "symbol", b: /\[/, e: /\]/, eB: !0, eE: !0 }, { cN: "link", b: /:\s*/, e: /$/, eB: !0 }] }] };
  }), e.registerLanguage("nginx", function (e) {
    var t = { cN: "variable", v: [{ b: /\$\d+/ }, { b: /\$\{/, e: /}/ }, { b: "[\\$\\@]" + e.UIR }] },
        r = { eW: !0, l: "[a-z/_]+", k: { literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll" }, r: 0, i: "=>", c: [e.HCM, { cN: "string", c: [e.BE, t], v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }] }, { b: "([a-z]+):/", e: "\\s", eW: !0, eE: !0, c: [t] }, { cN: "regexp", c: [e.BE, t], v: [{ b: "\\s\\^", e: "\\s|{|;", rE: !0 }, { b: "~\\*?\\s+", e: "\\s|{|;", rE: !0 }, { b: "\\*(\\.[a-z\\-]+)+" }, { b: "([a-z\\-]+\\.)+\\*" }] }, { cN: "number", b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b" }, { cN: "number", b: "\\b\\d+[kKmMgGdshdwy]*\\b", r: 0 }, t] };return { aliases: ["nginxconf"], c: [e.HCM, { b: e.UIR + "\\s+{", rB: !0, e: "{", c: [{ cN: "section", b: e.UIR }], r: 0 }, { b: e.UIR + "\\s", e: ";|{", rB: !0, c: [{ cN: "attribute", b: e.UIR, starts: r }], r: 0 }], i: "[^\\s\\}]" };
  }), e.registerLanguage("objectivec", function (e) {
    var t = { cN: "built_in", b: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+" },
        r = { keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN", literal: "false true FALSE TRUE nil YES NO NULL", built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once" },
        a = /[a-zA-Z@][a-zA-Z0-9_]*/,
        n = "@interface @class @protocol @implementation";return { aliases: ["mm", "objc", "obj-c"], k: r, l: a, i: "</", c: [t, e.CLCM, e.CBCM, e.CNM, e.QSM, { cN: "string", v: [{ b: '@"', e: '"', i: "\\n", c: [e.BE] }, { b: "'", e: "[^\\\\]'", i: "[^\\\\][^']" }] }, { cN: "meta", b: "#", e: "$", c: [{ cN: "meta-string", v: [{ b: '"', e: '"' }, { b: "<", e: ">" }] }] }, { cN: "class", b: "(" + n.split(" ").join("|") + ")\\b", e: "({|$)", eE: !0, k: n, l: a, c: [e.UTM] }, { b: "\\." + e.UIR, r: 0 }] };
  }), e.registerLanguage("perl", function (e) {
    var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
        r = { cN: "subst", b: "[$@]\\{", e: "\\}", k: t },
        a = { b: "->{", e: "}" },
        n = { v: [{ b: /\$\d/ }, { b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/ }, { b: /[\$%@][^\s\w{]/, r: 0 }] },
        i = [e.BE, r, n],
        s = [n, e.HCM, e.C("^\\=\\w", "\\=cut", { eW: !0 }), a, { cN: "string", c: i, v: [{ b: "q[qwxr]?\\s*\\(", e: "\\)", r: 5 }, { b: "q[qwxr]?\\s*\\[", e: "\\]", r: 5 }, { b: "q[qwxr]?\\s*\\{", e: "\\}", r: 5 }, { b: "q[qwxr]?\\s*\\|", e: "\\|", r: 5 }, { b: "q[qwxr]?\\s*\\<", e: "\\>", r: 5 }, { b: "qw\\s+q", e: "q", r: 5 }, { b: "'", e: "'", c: [e.BE] }, { b: '"', e: '"' }, { b: "`", e: "`", c: [e.BE] }, { b: "{\\w+}", c: [], r: 0 }, { b: "-?\\w+\\s*\\=\\>", c: [], r: 0 }] }, { cN: "number", b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b", r: 0 }, { b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*", k: "split return print reverse grep", r: 0, c: [e.HCM, { cN: "regexp", b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*", r: 10 }, { cN: "regexp", b: "(m|qr)?/", e: "/[a-z]*", c: [e.BE], r: 0 }] }, { cN: "function", bK: "sub", e: "(\\s*\\(.*?\\))?[;{]", eE: !0, r: 5, c: [e.TM] }, { b: "-\\w\\b", r: 0 }, { b: "^__DATA__$", e: "^__END__$", sL: "mojolicious", c: [{ b: "^@@.*", e: "$", cN: "comment" }] }];return r.c = s, a.c = s, { aliases: ["pl", "pm"], l: /[\w\.]+/, k: t, c: s };
  }), e.registerLanguage("php", function (e) {
    var t = { b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*" },
        r = { cN: "meta", b: /<\?(php)?|\?>/ },
        a = { cN: "string", c: [e.BE, r], v: [{ b: 'b"', e: '"' }, { b: "b'", e: "'" }, e.inherit(e.ASM, { i: null }), e.inherit(e.QSM, { i: null })] },
        n = { v: [e.BNM, e.CNM] };return { aliases: ["php3", "php4", "php5", "php6"], cI: !0, k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally", c: [e.HCM, e.C("//", "$", { c: [r] }), e.C("/\\*", "\\*/", { c: [{ cN: "doctag", b: "@[A-Za-z]+" }] }), e.C("__halt_compiler.+?;", !1, { eW: !0, k: "__halt_compiler", l: e.UIR }), { cN: "string", b: /<<<['"]?\w+['"]?$/, e: /^\w+;?$/, c: [e.BE, { cN: "subst", v: [{ b: /\$\w+/ }, { b: /\{\$/, e: /\}/ }] }] }, r, { cN: "keyword", b: /\$this\b/ }, t, { b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ }, { cN: "function", bK: "function", e: /[;{]/, eE: !0, i: "\\$|\\[|%", c: [e.UTM, { cN: "params", b: "\\(", e: "\\)", c: ["self", t, e.CBCM, a, n] }] }, { cN: "class", bK: "class interface", e: "{", eE: !0, i: /[:\(\$"]/, c: [{ bK: "extends implements" }, e.UTM] }, { bK: "namespace", e: ";", i: /[\.']/, c: [e.UTM] }, { bK: "use", e: ";", c: [e.UTM] }, { b: "=>" }, a, n] };
  }), e.registerLanguage("python", function (e) {
    var t = { cN: "meta", b: /^(>>>|\.\.\.) / },
        r = { cN: "string", c: [e.BE], v: [{ b: /(u|b)?r?'''/, e: /'''/, c: [t], r: 10 }, { b: /(u|b)?r?"""/, e: /"""/, c: [t], r: 10 }, { b: /(u|r|ur)'/, e: /'/, r: 10 }, { b: /(u|r|ur)"/, e: /"/, r: 10 }, { b: /(b|br)'/, e: /'/ }, { b: /(b|br)"/, e: /"/ }, e.ASM, e.QSM] },
        a = { cN: "number", r: 0, v: [{ b: e.BNR + "[lLjJ]?" }, { b: "\\b(0o[0-7]+)[lLjJ]?" }, { b: e.CNR + "[lLjJ]?" }] },
        n = { cN: "params", b: /\(/, e: /\)/, c: ["self", t, a, r] };return { aliases: ["py", "gyp"], k: { keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False", built_in: "Ellipsis NotImplemented" }, i: /(<\/|->|\?)|=>/, c: [t, a, r, e.HCM, { v: [{ cN: "function", bK: "def" }, { cN: "class", bK: "class" }], e: /:/, i: /[${=;\n,]/, c: [e.UTM, n, { b: /->/, eW: !0, k: "None" }] }, { cN: "meta", b: /^[\t ]*@/, e: /$/ }, { b: /\b(print|exec)\(/ }] };
  }), e.registerLanguage("ruby", function (e) {
    var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
        r = { keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor", literal: "true false nil" },
        a = { cN: "doctag", b: "@[A-Za-z]+" },
        n = { b: "#<", e: ">" },
        i = [e.C("#", "$", { c: [a] }), e.C("^\\=begin", "^\\=end", { c: [a], r: 10 }), e.C("^__END__", "\\n$")],
        s = { cN: "subst", b: "#\\{", e: "}", k: r },
        c = { cN: "string", c: [e.BE, s], v: [{ b: /'/, e: /'/ }, { b: /"/, e: /"/ }, { b: /`/, e: /`/ }, { b: "%[qQwWx]?\\(", e: "\\)" }, { b: "%[qQwWx]?\\[", e: "\\]" }, { b: "%[qQwWx]?{", e: "}" }, { b: "%[qQwWx]?<", e: ">" }, { b: "%[qQwWx]?/", e: "/" }, { b: "%[qQwWx]?%", e: "%" }, { b: "%[qQwWx]?-", e: "-" }, { b: "%[qQwWx]?\\|", e: "\\|" }, { b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/ }, { b: /<<(-?)\w+$/, e: /^\s*\w+$/ }] },
        o = { cN: "params", b: "\\(", e: "\\)", endsParent: !0, k: r },
        l = [c, n, { cN: "class", bK: "class module", e: "$|;", i: /=/, c: [e.inherit(e.TM, { b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
      }), { b: "<\\s*", c: [{ b: "(" + e.IR + "::)?" + e.IR }] }].concat(i) }, { cN: "function", bK: "def", e: "$|;", c: [e.inherit(e.TM, { b: t }), o].concat(i) }, { b: e.IR + "::" }, { cN: "symbol", b: e.UIR + "(\\!|\\?)?:", r: 0 }, { cN: "symbol", b: ":(?!\\s)", c: [c, { b: t }], r: 0 }, { cN: "number", b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b", r: 0 }, { b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))" }, { cN: "params", b: /\|/, e: /\|/, k: r }, { b: "(" + e.RSR + "|unless)\\s*", c: [n, { cN: "regexp", c: [e.BE, s], i: /\n/, v: [{ b: "/", e: "/[a-z]*" }, { b: "%r{", e: "}[a-z]*" }, { b: "%r\\(", e: "\\)[a-z]*" }, { b: "%r!", e: "![a-z]*" }, { b: "%r\\[", e: "\\][a-z]*" }] }].concat(i), r: 0 }].concat(i);s.c = l, o.c = l;var u = "[>?]>",
        d = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
        b = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
        p = [{ b: /^\s*=>/, starts: { e: "$", c: l } }, { cN: "meta", b: "^(" + u + "|" + d + "|" + b + ")", starts: { e: "$", c: l } }];return { aliases: ["rb", "gemspec", "podspec", "thor", "irb"], k: r, i: /\/\*/, c: i.concat(p).concat(l) };
  }), e.registerLanguage("sql", function (e) {
    var t = e.C("--", "$");return { cI: !0, i: /[<>{}*#]/, c: [{ bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment", e: /;/, eW: !0, l: /[\w\.]+/, k: { keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek", literal: "true false null", built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void" }, c: [{ cN: "string", b: "'", e: "'", c: [e.BE, { b: "''" }] }, { cN: "string", b: '"', e: '"', c: [e.BE, { b: '""' }] }, { cN: "string", b: "`", e: "`", c: [e.BE] }, e.CNM, e.CBCM, t] }, e.CBCM, t] };
  }), e;
});

/***/ }),

/***/ "./resources/assets/js/vendor/select2.min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : jQuery);
}(function (a) {
  var b = function () {
    if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;var b;return function () {
      if (!b || !b.requirejs) {
        b ? c = b : b = {};var a, c, d;!function (b) {
          function e(a, b) {
            return u.call(a, b);
          }function f(a, b) {
            var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n = b && b.split("/"),
                o = s.map,
                p = o && o["*"] || {};if (a && "." === a.charAt(0)) if (b) {
              for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1) {
                if (m = a[k], "." === m) a.splice(k, 1), k -= 1;else if (".." === m) {
                  if (1 === k && (".." === a[2] || ".." === a[0])) break;k > 0 && (a.splice(k - 1, 2), k -= 2);
                }
              }a = a.join("/");
            } else 0 === a.indexOf("./") && (a = a.substring(2));if ((n || p) && o) {
              for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                if (d = c.slice(0, k).join("/"), n) for (l = n.length; l > 0; l -= 1) {
                  if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                    f = e, h = k;break;
                  }
                }if (f) break;!i && p && p[d] && (i = p[d], j = k);
              }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"));
            }return a;
          }function g(a, c) {
            return function () {
              var d = v.call(arguments, 0);return "string" != typeof d[0] && 1 === d.length && d.push(null), _n.apply(b, d.concat([a, c]));
            };
          }function h(a) {
            return function (b) {
              return f(b, a);
            };
          }function i(a) {
            return function (b) {
              q[a] = b;
            };
          }function j(a) {
            if (e(r, a)) {
              var c = r[a];delete r[a], t[a] = !0, m.apply(b, c);
            }if (!e(q, a) && !e(t, a)) throw new Error("No " + a);return q[a];
          }function k(a) {
            var b,
                c = a ? a.indexOf("!") : -1;return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a];
          }function l(a) {
            return function () {
              return s && s.config && s.config[a] || {};
            };
          }var m,
              _n,
              o,
              p,
              q = {},
              r = {},
              s = {},
              t = {},
              u = Object.prototype.hasOwnProperty,
              v = [].slice,
              w = /\.js$/;o = function o(a, b) {
            var c,
                d = k(a),
                e = d[0];return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), { f: e ? e + "!" + a : a, n: a, pr: e, p: c };
          }, p = { require: function require(a) {
              return g(a);
            }, exports: function exports(a) {
              var b = q[a];return "undefined" != typeof b ? b : q[a] = {};
            }, module: function module(a) {
              return { id: a, uri: "", exports: q[a], config: l(a) };
            } }, m = function m(a, c, d, f) {
            var h,
                k,
                l,
                m,
                n,
                s,
                u = [],
                v = typeof d === "undefined" ? "undefined" : _typeof(d);if (f = f || a, "undefined" === v || "function" === v) {
              for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1) {
                if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a);else if ("exports" === k) u[n] = p.exports(a), s = !0;else if ("module" === k) h = u[n] = p.module(a);else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);else {
                  if (!m.p) throw new Error(a + " missing " + k);m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k];
                }
              }l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l));
            } else a && (q[a] = d);
          }, a = c = _n = function n(a, c, d, e, f) {
            if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f);if (!a.splice) {
              if (s = a, s.deps && _n(s.deps, s.callback), !c) return;c.splice ? (a = c, c = d, d = null) : a = b;
            }return c = c || function () {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function () {
              m(b, a, c, d);
            }, 4), _n;
          }, _n.config = function (a) {
            return _n(a);
          }, a._defined = q, d = function d(a, b, c) {
            if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c]);
          }, d.amd = { jQuery: !0 };
        }(), b.requirejs = a, b.require = c, b.define = d;
      }
    }(), b.define("almond", function () {}), b.define("jquery", [], function () {
      var b = a || $;return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b;
    }), b.define("select2/utils", ["jquery"], function (a) {
      function b(a) {
        var b = a.prototype,
            c = [];for (var d in b) {
          var e = b[d];"function" == typeof e && "constructor" !== d && c.push(d);
        }return c;
      }var c = {};c.Extend = function (a, b) {
        function c() {
          this.constructor = a;
        }var d = {}.hasOwnProperty;for (var e in b) {
          d.call(b, e) && (a[e] = b[e]);
        }return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
      }, c.Decorate = function (a, c) {
        function d() {
          var b = Array.prototype.unshift,
              d = c.prototype.constructor.length,
              e = a.prototype.constructor;d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments);
        }function e() {
          this.constructor = d;
        }var f = b(c),
            g = b(a);c.displayName = a.displayName, d.prototype = new e();for (var h = 0; h < g.length; h++) {
          var i = g[h];d.prototype[i] = a.prototype[i];
        }for (var j = function j(a) {
          var b = function b() {};(a in d.prototype) && (b = d.prototype[a]);var e = c.prototype[a];return function () {
            var a = Array.prototype.unshift;return a.call(arguments, b), e.apply(this, arguments);
          };
        }, k = 0; k < f.length; k++) {
          var l = f[k];d.prototype[l] = j(l);
        }return d;
      };var d = function d() {
        this.listeners = {};
      };return d.prototype.on = function (a, b) {
        this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b];
      }, d.prototype.trigger = function (a) {
        var b = Array.prototype.slice,
            c = b.call(arguments, 1);this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
      }, d.prototype.invoke = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
          a[c].apply(this, b);
        }
      }, c.Observable = d, c.generateChars = function (a) {
        for (var b = "", c = 0; a > c; c++) {
          var d = Math.floor(36 * Math.random());b += d.toString(36);
        }return b;
      }, c.bind = function (a, b) {
        return function () {
          a.apply(b, arguments);
        };
      }, c._convertData = function (a) {
        for (var b in a) {
          var c = b.split("-"),
              d = a;if (1 !== c.length) {
            for (var e = 0; e < c.length; e++) {
              var f = c[e];f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f];
            }delete a[b];
          }
        }return a;
      }, c.hasScroll = function (b, c) {
        var d = a(c),
            e = c.style.overflowX,
            f = c.style.overflowY;return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1;
      }, c.escapeMarkup = function (a) {
        var b = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" };return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) {
          return b[a];
        });
      }, c.appendMany = function (b, c) {
        if ("1.7" === a.fn.jquery.substr(0, 3)) {
          var d = a();a.map(c, function (a) {
            d = d.add(a);
          }), c = d;
        }b.append(c);
      }, c;
    }), b.define("select2/results", ["jquery", "./utils"], function (a, b) {
      function c(a, b, d) {
        this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this);
      }return b.Extend(c, b.Observable), c.prototype.render = function () {
        var b = a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b;
      }, c.prototype.clear = function () {
        this.$results.empty();
      }, c.prototype.displayMessage = function (b) {
        var c = this.options.get("escapeMarkup");this.clear(), this.hideLoading();var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
            e = this.options.get("translations").get(b.message);d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d);
      }, c.prototype.hideMessages = function () {
        this.$results.find(".select2-results__message").remove();
      }, c.prototype.append = function (a) {
        this.hideLoading();var b = [];if (null == a.results || 0 === a.results.length) return void (0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" }));a.results = this.sort(a.results);for (var c = 0; c < a.results.length; c++) {
          var d = a.results[c],
              e = this.option(d);b.push(e);
        }this.$results.append(b);
      }, c.prototype.position = function (a, b) {
        var c = b.find(".select2-results");c.append(a);
      }, c.prototype.sort = function (a) {
        var b = this.options.get("sorter");return b(a);
      }, c.prototype.highlightFirstItem = function () {
        var a = this.$results.find(".select2-results__option[aria-selected]"),
            b = a.filter("[aria-selected=true]");b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible();
      }, c.prototype.setClasses = function () {
        var b = this;this.data.current(function (c) {
          var d = a.map(c, function (a) {
            return a.id.toString();
          }),
              e = b.$results.find(".select2-results__option[aria-selected]");e.each(function () {
            var b = a(this),
                c = a.data(this, "data"),
                e = "" + c.id;null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false");
          });
        });
      }, c.prototype.showLoading = function (a) {
        this.hideLoading();var b = this.options.get("translations").get("searching"),
            c = { disabled: !0, loading: !0, text: b(a) },
            d = this.option(c);d.className += " loading-results", this.$results.prepend(d);
      }, c.prototype.hideLoading = function () {
        this.$results.find(".loading-results").remove();
      }, c.prototype.option = function (b) {
        var c = document.createElement("li");c.className = "select2-results__option";var d = { role: "treeitem", "aria-selected": "false" };b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);for (var e in d) {
          var f = d[e];c.setAttribute(e, f);
        }if (b.children) {
          var g = a(c),
              h = document.createElement("strong");h.className = "select2-results__group";a(h);this.template(b, h);for (var i = [], j = 0; j < b.children.length; j++) {
            var k = b.children[j],
                l = this.option(k);i.push(l);
          }var m = a("<ul></ul>", { "class": "select2-results__options select2-results__options--nested" });m.append(i), g.append(h), g.append(m);
        } else this.template(b, c);return a.data(c, "data", b), c;
      }, c.prototype.bind = function (b, c) {
        var d = this,
            e = b.id + "-results";this.$results.attr("id", e), b.on("results:all", function (a) {
          d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem());
        }), b.on("results:append", function (a) {
          d.append(a.data), b.isOpen() && d.setClasses();
        }), b.on("query", function (a) {
          d.hideMessages(), d.showLoading(a);
        }), b.on("select", function () {
          b.isOpen() && (d.setClasses(), d.highlightFirstItem());
        }), b.on("unselect", function () {
          b.isOpen() && (d.setClasses(), d.highlightFirstItem());
        }), b.on("open", function () {
          d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible();
        }), b.on("close", function () {
          d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant");
        }), b.on("results:toggle", function () {
          var a = d.getHighlightedResults();0 !== a.length && a.trigger("mouseup");
        }), b.on("results:select", function () {
          var a = d.getHighlightedResults();if (0 !== a.length) {
            var b = a.data("data");"true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", { data: b });
          }
        }), b.on("results:previous", function () {
          var a = d.getHighlightedResults(),
              b = d.$results.find("[aria-selected]"),
              c = b.index(a);if (0 !== c) {
            var e = c - 1;0 === a.length && (e = 0);var f = b.eq(e);f.trigger("mouseenter");var g = d.$results.offset().top,
                h = f.offset().top,
                i = d.$results.scrollTop() + (h - g);0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i);
          }
        }), b.on("results:next", function () {
          var a = d.getHighlightedResults(),
              b = d.$results.find("[aria-selected]"),
              c = b.index(a),
              e = c + 1;if (!(e >= b.length)) {
            var f = b.eq(e);f.trigger("mouseenter");var g = d.$results.offset().top + d.$results.outerHeight(!1),
                h = f.offset().top + f.outerHeight(!1),
                i = d.$results.scrollTop() + h - g;0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i);
          }
        }), b.on("results:focus", function (a) {
          a.element.addClass("select2-results__option--highlighted");
        }), b.on("results:message", function (a) {
          d.displayMessage(a);
        }), a.fn.mousewheel && this.$results.on("mousewheel", function (a) {
          var b = d.$results.scrollTop(),
              c = d.$results.get(0).scrollHeight - b + a.deltaY,
              e = a.deltaY > 0 && b - a.deltaY <= 0,
              f = a.deltaY < 0 && c <= d.$results.height();e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation());
        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (b) {
          var c = a(this),
              e = c.data("data");return "true" === c.attr("aria-selected") ? void (d.options.get("multiple") ? d.trigger("unselect", { originalEvent: b, data: e }) : d.trigger("close", {})) : void d.trigger("select", { originalEvent: b, data: e });
        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (b) {
          var c = a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", { data: c, element: a(this) });
        });
      }, c.prototype.getHighlightedResults = function () {
        var a = this.$results.find(".select2-results__option--highlighted");return a;
      }, c.prototype.destroy = function () {
        this.$results.remove();
      }, c.prototype.ensureHighlightVisible = function () {
        var a = this.getHighlightedResults();if (0 !== a.length) {
          var b = this.$results.find("[aria-selected]"),
              c = b.index(a),
              d = this.$results.offset().top,
              e = a.offset().top,
              f = this.$results.scrollTop() + (e - d),
              g = e - d;f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f);
        }
      }, c.prototype.template = function (b, c) {
        var d = this.options.get("templateResult"),
            e = this.options.get("escapeMarkup"),
            f = d(b, c);null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f);
      }, c;
    }), b.define("select2/keys", [], function () {
      var a = { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 };return a;
    }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) {
      function d(a, b) {
        this.$element = a, this.options = b, d.__super__.constructor.call(this);
      }return b.Extend(d, b.Observable), d.prototype.render = function () {
        var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b;
      }, d.prototype.bind = function (a, b) {
        var d = this,
            e = (a.id + "-container", a.id + "-results");this.container = a, this.$selection.on("focus", function (a) {
          d.trigger("focus", a);
        }), this.$selection.on("blur", function (a) {
          d._handleBlur(a);
        }), this.$selection.on("keydown", function (a) {
          d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault();
        }), a.on("results:focus", function (a) {
          d.$selection.attr("aria-activedescendant", a.data._resultId);
        }), a.on("selection:update", function (a) {
          d.update(a.data);
        }), a.on("open", function () {
          d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a);
        }), a.on("close", function () {
          d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a);
        }), a.on("enable", function () {
          d.$selection.attr("tabindex", d._tabindex);
        }), a.on("disable", function () {
          d.$selection.attr("tabindex", "-1");
        });
      }, d.prototype._handleBlur = function (b) {
        var c = this;window.setTimeout(function () {
          document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b);
        }, 1);
      }, d.prototype._attachCloseHandler = function (b) {
        a(document.body).on("mousedown.select2." + b.id, function (b) {
          var c = a(b.target),
              d = c.closest(".select2"),
              e = a(".select2.select2-container--open");e.each(function () {
            var b = a(this);if (this != d[0]) {
              var c = b.data("element");c.select2("close");
            }
          });
        });
      }, d.prototype._detachCloseHandler = function (b) {
        a(document.body).off("mousedown.select2." + b.id);
      }, d.prototype.position = function (a, b) {
        var c = b.find(".selection");c.append(a);
      }, d.prototype.destroy = function () {
        this._detachCloseHandler(this.container);
      }, d.prototype.update = function (a) {
        throw new Error("The `update` method must be defined in child classes.");
      }, d;
    }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c, d) {
      function e() {
        e.__super__.constructor.apply(this, arguments);
      }return c.Extend(e, b), e.prototype.render = function () {
        var a = e.__super__.render.call(this);return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a;
      }, e.prototype.bind = function (a, b) {
        var c = this;e.__super__.bind.apply(this, arguments);var d = a.id + "-container";this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function (a) {
          1 === a.which && c.trigger("toggle", { originalEvent: a });
        }), this.$selection.on("focus", function (a) {}), this.$selection.on("blur", function (a) {}), a.on("focus", function (b) {
          a.isOpen() || c.$selection.focus();
        }), a.on("selection:update", function (a) {
          c.update(a.data);
        });
      }, e.prototype.clear = function () {
        this.$selection.find(".select2-selection__rendered").empty();
      }, e.prototype.display = function (a, b) {
        var c = this.options.get("templateSelection"),
            d = this.options.get("escapeMarkup");return d(c(a, b));
      }, e.prototype.selectionContainer = function () {
        return a("<span></span>");
      }, e.prototype.update = function (a) {
        if (0 === a.length) return void this.clear();var b = a[0],
            c = this.$selection.find(".select2-selection__rendered"),
            d = this.display(b, c);c.empty().append(d), c.prop("title", b.title || b.text);
      }, e;
    }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) {
      function d(a, b) {
        d.__super__.constructor.apply(this, arguments);
      }return c.Extend(d, b), d.prototype.render = function () {
        var a = d.__super__.render.call(this);return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a;
      }, d.prototype.bind = function (b, c) {
        var e = this;d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) {
          e.trigger("toggle", { originalEvent: a });
        }), this.$selection.on("click", ".select2-selection__choice__remove", function (b) {
          if (!e.options.get("disabled")) {
            var c = a(this),
                d = c.parent(),
                f = d.data("data");e.trigger("unselect", { originalEvent: b, data: f });
          }
        });
      }, d.prototype.clear = function () {
        this.$selection.find(".select2-selection__rendered").empty();
      }, d.prototype.display = function (a, b) {
        var c = this.options.get("templateSelection"),
            d = this.options.get("escapeMarkup");return d(c(a, b));
      }, d.prototype.selectionContainer = function () {
        var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b;
      }, d.prototype.update = function (a) {
        if (this.clear(), 0 !== a.length) {
          for (var b = [], d = 0; d < a.length; d++) {
            var e = a[d],
                f = this.selectionContainer(),
                g = this.display(e, f);f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f);
          }var h = this.$selection.find(".select2-selection__rendered");c.appendMany(h, b);
        }
      }, d;
    }), b.define("select2/selection/placeholder", ["../utils"], function (a) {
      function b(a, b, c) {
        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c);
      }return b.prototype.normalizePlaceholder = function (a, b) {
        return "string" == typeof b && (b = { id: "", text: b }), b;
      }, b.prototype.createPlaceholder = function (a, b) {
        var c = this.selectionContainer();return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c;
      }, b.prototype.update = function (a, b) {
        var c = 1 == b.length && b[0].id != this.placeholder.id,
            d = b.length > 1;if (d || c) return a.call(this, b);this.clear();var e = this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e);
      }, b;
    }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function (a, b) {
      function c() {}return c.prototype.bind = function (a, b, c) {
        var d = this;a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) {
          d._handleClear(a);
        }), b.on("keypress", function (a) {
          d._handleKeyboardClear(a, b);
        });
      }, c.prototype._handleClear = function (a, b) {
        if (!this.options.get("disabled")) {
          var c = this.$selection.find(".select2-selection__clear");if (0 !== c.length) {
            b.stopPropagation();for (var d = c.data("data"), e = 0; e < d.length; e++) {
              var f = { data: d[e] };if (this.trigger("unselect", f), f.prevented) return;
            }this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {});
          }
        }
      }, c.prototype._handleKeyboardClear = function (a, c, d) {
        d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c);
      }, c.prototype.update = function (b, c) {
        if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
          var d = a('<span class="select2-selection__clear">&times;</span>');d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d);
        }
      }, c;
    }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) {
      function d(a, b, c) {
        a.call(this, b, c);
      }return d.prototype.render = function (b) {
        var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer = c, this.$search = c.find("input");var d = b.call(this);return this._transferTabIndex(), d;
      }, d.prototype.bind = function (a, b, d) {
        var e = this;a.call(this, b, d), b.on("open", function () {
          e.$search.trigger("focus");
        }), b.on("close", function () {
          e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus");
        }), b.on("enable", function () {
          e.$search.prop("disabled", !1), e._transferTabIndex();
        }), b.on("disable", function () {
          e.$search.prop("disabled", !0);
        }), b.on("focus", function (a) {
          e.$search.trigger("focus");
        }), b.on("results:focus", function (a) {
          e.$search.attr("aria-activedescendant", a.id);
        }), this.$selection.on("focusin", ".select2-search--inline", function (a) {
          e.trigger("focus", a);
        }), this.$selection.on("focusout", ".select2-search--inline", function (a) {
          e._handleBlur(a);
        }), this.$selection.on("keydown", ".select2-search--inline", function (a) {
          a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();var b = a.which;if (b === c.BACKSPACE && "" === e.$search.val()) {
            var d = e.$searchContainer.prev(".select2-selection__choice");if (d.length > 0) {
              var f = d.data("data");e.searchRemoveChoice(f), a.preventDefault();
            }
          }
        });var f = document.documentMode,
            g = f && 11 >= f;this.$selection.on("input.searchcheck", ".select2-search--inline", function (a) {
          return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search");
        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (a) {
          if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");var b = a.which;b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a);
        });
      }, d.prototype._transferTabIndex = function (a) {
        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
      }, d.prototype.createPlaceholder = function (a, b) {
        this.$search.attr("placeholder", b.text);
      }, d.prototype.update = function (a, b) {
        var c = this.$search[0] == document.activeElement;this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus();
      }, d.prototype.handleSearch = function () {
        if (this.resizeSearch(), !this._keyUpPrevented) {
          var a = this.$search.val();this.trigger("query", { term: a });
        }this._keyUpPrevented = !1;
      }, d.prototype.searchRemoveChoice = function (a, b) {
        this.trigger("unselect", { data: b }), this.$search.val(b.text), this.handleSearch();
      }, d.prototype.resizeSearch = function () {
        this.$search.css("width", "25px");var a = "";if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();else {
          var b = this.$search.val().length + 1;a = .75 * b + "em";
        }this.$search.css("width", a);
      }, d;
    }), b.define("select2/selection/eventRelay", ["jquery"], function (a) {
      function b() {}return b.prototype.bind = function (b, c, d) {
        var e = this,
            f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
            g = ["opening", "closing", "selecting", "unselecting"];b.call(this, c, d), c.on("*", function (b, c) {
          if (-1 !== a.inArray(b, f)) {
            c = c || {};var d = a.Event("select2:" + b, { params: c });e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented());
          }
        });
      }, b;
    }), b.define("select2/translation", ["jquery", "require"], function (a, b) {
      function c(a) {
        this.dict = a || {};
      }return c.prototype.all = function () {
        return this.dict;
      }, c.prototype.get = function (a) {
        return this.dict[a];
      }, c.prototype.extend = function (b) {
        this.dict = a.extend({}, b.all(), this.dict);
      }, c._cache = {}, c.loadPath = function (a) {
        if (!(a in c._cache)) {
          var d = b(a);c._cache[a] = d;
        }return new c(c._cache[a]);
      }, c;
    }), b.define("select2/diacritics", [], function () {
      var a = { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ" };return a;
    }), b.define("select2/data/base", ["../utils"], function (a) {
      function b(a, c) {
        b.__super__.constructor.call(this);
      }return a.Extend(b, a.Observable), b.prototype.current = function (a) {
        throw new Error("The `current` method must be defined in child classes.");
      }, b.prototype.query = function (a, b) {
        throw new Error("The `query` method must be defined in child classes.");
      }, b.prototype.bind = function (a, b) {}, b.prototype.destroy = function () {}, b.prototype.generateResultId = function (b, c) {
        var d = b.id + "-result-";return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4);
      }, b;
    }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        this.$element = a, this.options = b, d.__super__.constructor.call(this);
      }return b.Extend(d, a), d.prototype.current = function (a) {
        var b = [],
            d = this;this.$element.find(":selected").each(function () {
          var a = c(this),
              e = d.item(a);b.push(e);
        }), a(b);
      }, d.prototype.select = function (a) {
        var b = this;if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
        if (this.$element.prop("multiple")) this.current(function (d) {
          var e = [];a = [a], a.push.apply(a, d);for (var f = 0; f < a.length; f++) {
            var g = a[f].id;-1 === c.inArray(g, e) && e.push(g);
          }b.$element.val(e), b.$element.trigger("change");
        });else {
          var d = a.id;this.$element.val(d), this.$element.trigger("change");
        }
      }, d.prototype.unselect = function (a) {
        var b = this;if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (d) {
          for (var e = [], f = 0; f < d.length; f++) {
            var g = d[f].id;g !== a.id && -1 === c.inArray(g, e) && e.push(g);
          }b.$element.val(e), b.$element.trigger("change");
        });
      }, d.prototype.bind = function (a, b) {
        var c = this;this.container = a, a.on("select", function (a) {
          c.select(a.data);
        }), a.on("unselect", function (a) {
          c.unselect(a.data);
        });
      }, d.prototype.destroy = function () {
        this.$element.find("*").each(function () {
          c.removeData(this, "data");
        });
      }, d.prototype.query = function (a, b) {
        var d = [],
            e = this,
            f = this.$element.children();f.each(function () {
          var b = c(this);if (b.is("option") || b.is("optgroup")) {
            var f = e.item(b),
                g = e.matches(a, f);null !== g && d.push(g);
          }
        }), b({ results: d });
      }, d.prototype.addOptions = function (a) {
        b.appendMany(this.$element, a);
      }, d.prototype.option = function (a) {
        var b;a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);var d = c(b),
            e = this._normalizeItem(a);return e.element = b, c.data(b, "data", e), d;
      }, d.prototype.item = function (a) {
        var b = {};if (b = c.data(a[0], "data"), null != b) return b;if (a.is("option")) b = { id: a.val(), text: a.text(), disabled: a.prop("disabled"), selected: a.prop("selected"), title: a.prop("title") };else if (a.is("optgroup")) {
          b = { text: a.prop("label"), children: [], title: a.prop("title") };for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
            var g = c(d[f]),
                h = this.item(g);e.push(h);
          }b.children = e;
        }return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b;
      }, d.prototype._normalizeItem = function (a) {
        c.isPlainObject(a) || (a = { id: a, text: a }), a = c.extend({}, { text: "" }, a);var b = { selected: !1, disabled: !1 };return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a);
      }, d.prototype.matches = function (a, b) {
        var c = this.options.get("matcher");return c(a, b);
      }, d;
    }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        var c = b.get("data") || [];d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c));
      }return b.Extend(d, a), d.prototype.select = function (a) {
        var b = this.$element.find("option").filter(function (b, c) {
          return c.value == a.id.toString();
        });0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a);
      }, d.prototype.convertToOptions = function (a) {
        function d(a) {
          return function () {
            return c(this).val() == a.id;
          };
        }for (var e = this, f = this.$element.find("option"), g = f.map(function () {
          return e.item(c(this)).id;
        }).get(), h = [], i = 0; i < a.length; i++) {
          var j = this._normalizeItem(a[i]);if (c.inArray(j.id, g) >= 0) {
            var k = f.filter(d(j)),
                l = this.item(k),
                m = c.extend(!0, {}, j, l),
                n = this.option(m);k.replaceWith(n);
          } else {
            var o = this.option(j);if (j.children) {
              var p = this.convertToOptions(j.children);b.appendMany(o, p);
            }h.push(o);
          }
        }return h;
      }, d;
    }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) {
      function d(a, b) {
        this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b);
      }return b.Extend(d, a), d.prototype._applyDefaults = function (a) {
        var b = { data: function data(a) {
            return c.extend({}, a, { q: a.term });
          }, transport: function transport(a, b, d) {
            var e = c.ajax(a);return e.then(b), e.fail(d), e;
          } };return c.extend({}, b, a, !0);
      }, d.prototype.processResults = function (a) {
        return a;
      }, d.prototype.query = function (a, b) {
        function d() {
          var d = f.transport(f, function (d) {
            var f = e.processResults(d, a);e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f);
          }, function () {
            d.status && "0" === d.status || e.trigger("results:message", { message: "errorLoading" });
          });e._request = d;
        }var e = this;null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);var f = c.extend({ type: "GET" }, this.ajaxOptions);"function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d();
      }, d;
    }), b.define("select2/data/tags", ["jquery"], function (a) {
      function b(b, c, d) {
        var e = d.get("tags"),
            f = d.get("createTag");void 0 !== f && (this.createTag = f);var g = d.get("insertTag");if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e)) for (var h = 0; h < e.length; h++) {
          var i = e[h],
              j = this._normalizeItem(i),
              k = this.option(j);this.$element.append(k);
        }
      }return b.prototype.query = function (a, b, c) {
        function d(a, f) {
          for (var g = a.results, h = 0; h < g.length; h++) {
            var i = g[h],
                j = null != i.children && !d({ results: i.children }, !0),
                k = i.text === b.term;if (k || j) return f ? !1 : (a.data = g, void c(a));
          }if (f) return !0;var l = e.createTag(b);if (null != l) {
            var m = e.option(l);m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l);
          }a.results = g, c(a);
        }var e = this;return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d);
      }, b.prototype.createTag = function (b, c) {
        var d = a.trim(c.term);return "" === d ? null : { id: d, text: d };
      }, b.prototype.insertTag = function (a, b, c) {
        b.unshift(c);
      }, b.prototype._removeOldTags = function (b) {
        var c = (this._lastTag, this.$element.find("option[data-select2-tag]"));c.each(function () {
          this.selected || a(this).remove();
        });
      }, b;
    }), b.define("select2/data/tokenizer", ["jquery"], function (a) {
      function b(a, b, c) {
        var d = c.get("tokenizer");void 0 !== d && (this.tokenizer = d), a.call(this, b, c);
      }return b.prototype.bind = function (a, b, c) {
        a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field");
      }, b.prototype.query = function (b, c, d) {
        function e(b) {
          var c = g._normalizeItem(b),
              d = g.$element.find("option").filter(function () {
            return a(this).val() === c.id;
          });if (!d.length) {
            var e = g.option(c);e.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([e]);
          }f(c);
        }function f(a) {
          g.trigger("select", { data: a });
        }var g = this;c.term = c.term || "";var h = this.tokenizer(c, this.options, e);h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d);
      }, b.prototype.tokenizer = function (b, c, d, e) {
        for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) {
          return { id: a.term, text: a.term };
        }; h < g.length;) {
          var j = g[h];if (-1 !== a.inArray(j, f)) {
            var k = g.substr(0, h),
                l = a.extend({}, c, { term: k }),
                m = i(l);null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++;
          } else h++;
        }return { term: g };
      }, b;
    }), b.define("select2/data/minimumInputLength", [], function () {
      function a(a, b, c) {
        this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c);
      }return a.prototype.query = function (a, b, c) {
        return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: b.term, params: b } }) : void a.call(this, b, c);
      }, a;
    }), b.define("select2/data/maximumInputLength", [], function () {
      function a(a, b, c) {
        this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c);
      }return a.prototype.query = function (a, b, c) {
        return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: b.term, params: b } }) : void a.call(this, b, c);
      }, a;
    }), b.define("select2/data/maximumSelectionLength", [], function () {
      function a(a, b, c) {
        this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c);
      }return a.prototype.query = function (a, b, c) {
        var d = this;this.current(function (e) {
          var f = null != e ? e.length : 0;return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", { message: "maximumSelected", args: { maximum: d.maximumSelectionLength } }) : void a.call(d, b, c);
        });
      }, a;
    }), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
      function c(a, b) {
        this.$element = a, this.options = b, c.__super__.constructor.call(this);
      }return b.Extend(c, b.Observable), c.prototype.render = function () {
        var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b;
      }, c.prototype.bind = function () {}, c.prototype.position = function (a, b) {}, c.prototype.destroy = function () {
        this.$dropdown.remove();
      }, c;
    }), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a, b) {
      function c() {}return c.prototype.render = function (b) {
        var c = b.call(this),
            d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c;
      }, c.prototype.bind = function (b, c, d) {
        var e = this;b.call(this, c, d), this.$search.on("keydown", function (a) {
          e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
        }), this.$search.on("input", function (b) {
          a(this).off("keyup");
        }), this.$search.on("keyup input", function (a) {
          e.handleSearch(a);
        }), c.on("open", function () {
          e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () {
            e.$search.focus();
          }, 0);
        }), c.on("close", function () {
          e.$search.attr("tabindex", -1), e.$search.val("");
        }), c.on("focus", function () {
          c.isOpen() && e.$search.focus();
        }), c.on("results:all", function (a) {
          if (null == a.query.term || "" === a.query.term) {
            var b = e.showSearch(a);b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide");
          }
        });
      }, c.prototype.handleSearch = function (a) {
        if (!this._keyUpPrevented) {
          var b = this.$search.val();this.trigger("query", { term: b });
        }this._keyUpPrevented = !1;
      }, c.prototype.showSearch = function (a, b) {
        return !0;
      }, c;
    }), b.define("select2/dropdown/hidePlaceholder", [], function () {
      function a(a, b, c, d) {
        this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d);
      }return a.prototype.append = function (a, b) {
        b.results = this.removePlaceholder(b.results), a.call(this, b);
      }, a.prototype.normalizePlaceholder = function (a, b) {
        return "string" == typeof b && (b = { id: "", text: b }), b;
      }, a.prototype.removePlaceholder = function (a, b) {
        for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
          var e = b[d];this.placeholder.id === e.id && c.splice(d, 1);
        }return c;
      }, a;
    }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
      function b(a, b, c, d) {
        this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
      }return b.prototype.append = function (a, b) {
        this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore);
      }, b.prototype.bind = function (b, c, d) {
        var e = this;b.call(this, c, d), c.on("query", function (a) {
          e.lastParams = a, e.loading = !0;
        }), c.on("query:append", function (a) {
          e.lastParams = a, e.loading = !0;
        }), this.$results.on("scroll", function () {
          var b = a.contains(document.documentElement, e.$loadingMore[0]);if (!e.loading && b) {
            var c = e.$results.offset().top + e.$results.outerHeight(!1),
                d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);c + 50 >= d && e.loadMore();
          }
        });
      }, b.prototype.loadMore = function () {
        this.loading = !0;var b = a.extend({}, { page: 1 }, this.lastParams);b.page++, this.trigger("query:append", b);
      }, b.prototype.showLoadingMore = function (a, b) {
        return b.pagination && b.pagination.more;
      }, b.prototype.createLoadingMore = function () {
        var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
            c = this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)), b;
      }, b;
    }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) {
      function c(b, c, d) {
        this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d);
      }return c.prototype.bind = function (a, b, c) {
        var d = this,
            e = !1;a.call(this, b, c), b.on("open", function () {
          d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () {
            d._positionDropdown(), d._resizeDropdown();
          }), b.on("results:append", function () {
            d._positionDropdown(), d._resizeDropdown();
          }));
        }), b.on("close", function () {
          d._hideDropdown(), d._detachPositioningHandler(b);
        }), this.$dropdownContainer.on("mousedown", function (a) {
          a.stopPropagation();
        });
      }, c.prototype.destroy = function (a) {
        a.call(this), this.$dropdownContainer.remove();
      }, c.prototype.position = function (a, b, c) {
        b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({ position: "absolute", top: -999999 }), this.$container = c;
      }, c.prototype.render = function (b) {
        var c = a("<span></span>"),
            d = b.call(this);return c.append(d), this.$dropdownContainer = c, c;
      }, c.prototype._hideDropdown = function (a) {
        this.$dropdownContainer.detach();
      }, c.prototype._attachPositioningHandler = function (c, d) {
        var e = this,
            f = "scroll.select2." + d.id,
            g = "resize.select2." + d.id,
            h = "orientationchange.select2." + d.id,
            i = this.$container.parents().filter(b.hasScroll);i.each(function () {
          a(this).data("select2-scroll-position", { x: a(this).scrollLeft(), y: a(this).scrollTop() });
        }), i.on(f, function (b) {
          var c = a(this).data("select2-scroll-position");a(this).scrollTop(c.y);
        }), a(window).on(f + " " + g + " " + h, function (a) {
          e._positionDropdown(), e._resizeDropdown();
        });
      }, c.prototype._detachPositioningHandler = function (c, d) {
        var e = "scroll.select2." + d.id,
            f = "resize.select2." + d.id,
            g = "orientationchange.select2." + d.id,
            h = this.$container.parents().filter(b.hasScroll);h.off(e), a(window).off(e + " " + f + " " + g);
      }, c.prototype._positionDropdown = function () {
        var b = a(window),
            c = this.$dropdown.hasClass("select2-dropdown--above"),
            d = this.$dropdown.hasClass("select2-dropdown--below"),
            e = null,
            f = this.$container.offset();f.bottom = f.top + this.$container.outerHeight(!1);var g = { height: this.$container.outerHeight(!1) };g.top = f.top, g.bottom = f.top + g.height;var h = { height: this.$dropdown.outerHeight(!1) },
            i = { top: b.scrollTop(), bottom: b.scrollTop() + b.height() },
            j = i.top < f.top - h.height,
            k = i.bottom > f.bottom + h.height,
            l = { left: f.left, top: g.bottom },
            m = this.$dropdownParent;"static" === m.css("position") && (m = m.offsetParent());var n = m.offset();l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l);
      }, c.prototype._resizeDropdown = function () {
        var a = { width: this.$container.outerWidth(!1) + "px" };this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a);
      }, c.prototype._showDropdown = function (a) {
        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
      }, c;
    }), b.define("select2/dropdown/minimumResultsForSearch", [], function () {
      function a(b) {
        for (var c = 0, d = 0; d < b.length; d++) {
          var e = b[d];e.children ? c += a(e.children) : c++;
        }return c;
      }function b(a, b, c, d) {
        this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d);
      }return b.prototype.showSearch = function (b, c) {
        return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c);
      }, b;
    }), b.define("select2/dropdown/selectOnClose", [], function () {
      function a() {}return a.prototype.bind = function (a, b, c) {
        var d = this;a.call(this, b, c), b.on("close", function (a) {
          d._handleSelectOnClose(a);
        });
      }, a.prototype._handleSelectOnClose = function (a, b) {
        if (b && null != b.originalSelect2Event) {
          var c = b.originalSelect2Event;if ("select" === c._type || "unselect" === c._type) return;
        }var d = this.getHighlightedResults();if (!(d.length < 1)) {
          var e = d.data("data");null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", { data: e });
        }
      }, a;
    }), b.define("select2/dropdown/closeOnSelect", [], function () {
      function a() {}return a.prototype.bind = function (a, b, c) {
        var d = this;a.call(this, b, c), b.on("select", function (a) {
          d._selectTriggered(a);
        }), b.on("unselect", function (a) {
          d._selectTriggered(a);
        });
      }, a.prototype._selectTriggered = function (a, b) {
        var c = b.originalEvent;c && c.ctrlKey || this.trigger("close", { originalEvent: c, originalSelect2Event: b });
      }, a;
    }), b.define("select2/i18n/en", [], function () {
      return { errorLoading: function errorLoading() {
          return "The results could not be loaded.";
        }, inputTooLong: function inputTooLong(a) {
          var b = a.input.length - a.maximum,
              c = "Please delete " + b + " character";return 1 != b && (c += "s"), c;
        }, inputTooShort: function inputTooShort(a) {
          var b = a.minimum - a.input.length,
              c = "Please enter " + b + " or more characters";return c;
        }, loadingMore: function loadingMore() {
          return "Loading more results…";
        }, maximumSelected: function maximumSelected(a) {
          var b = "You can only select " + a.maximum + " item";return 1 != a.maximum && (b += "s"), b;
        }, noResults: function noResults() {
          return "No results found";
        }, searching: function searching() {
          return "Searching…";
        } };
    }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
      function D() {
        this.reset();
      }D.prototype.apply = function (l) {
        if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
          if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
            var C = b(l.amdBase + "compat/query");l.dataAdapter = j.Decorate(l.dataAdapter, C);
          }if (null != l.initSelection) {
            var D = b(l.amdBase + "compat/initSelection");l.dataAdapter = j.Decorate(l.dataAdapter, D);
          }
        }if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
          if (l.multiple) l.dropdownAdapter = u;else {
            var E = j.Decorate(u, v);l.dropdownAdapter = E;
          }if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
            var F = b(l.amdBase + "compat/dropdownCss");l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F);
          }l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y);
        }if (null == l.selectionAdapter) {
          if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
            var G = b(l.amdBase + "compat/containerCss");l.selectionAdapter = j.Decorate(l.selectionAdapter, G);
          }l.selectionAdapter = j.Decorate(l.selectionAdapter, i);
        }if ("string" == typeof l.language) if (l.language.indexOf("-") > 0) {
          var H = l.language.split("-"),
              I = H[0];l.language = [l.language, I];
        } else l.language = [l.language];if (a.isArray(l.language)) {
          var J = new k();l.language.push("en");for (var K = l.language, L = 0; L < K.length; L++) {
            var M = K[L],
                N = {};try {
              N = k.loadPath(M);
            } catch (O) {
              try {
                M = this.defaults.amdLanguageBase + M, N = k.loadPath(M);
              } catch (P) {
                l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');continue;
              }
            }J.extend(N);
          }l.translations = J;
        } else {
          var Q = k.loadPath(this.defaults.amdLanguageBase + "en"),
              R = new k(l.language);R.extend(Q), l.translations = R;
        }return l;
      }, D.prototype.reset = function () {
        function b(a) {
          function b(a) {
            return l[a] || a;
          }return a.replace(/[^\u0000-\u007E]/g, b);
        }function c(d, e) {
          if ("" === a.trim(d.term)) return e;if (e.children && e.children.length > 0) {
            for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
              var h = e.children[g],
                  i = c(d, h);null == i && f.children.splice(g, 1);
            }return f.children.length > 0 ? f : c(d, f);
          }var j = b(e.text).toUpperCase(),
              k = b(d.term).toUpperCase();return j.indexOf(k) > -1 ? e : null;
        }this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: j.escapeMarkup, language: C, matcher: c, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function sorter(a) {
            return a;
          }, templateResult: function templateResult(a) {
            return a.text;
          }, templateSelection: function templateSelection(a) {
            return a.text;
          }, theme: "default", width: "resolve" };
      }, D.prototype.set = function (b, c) {
        var d = a.camelCase(b),
            e = {};e[d] = c;var f = j._convertData(e);a.extend(this.defaults, f);
      };var E = new D();return E;
    }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) {
      function e(b, e) {
        if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
          var f = a(this.get("amdBase") + "compat/inputData");this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f);
        }
      }return e.prototype.fromElement = function (a) {
        var c = ["select2"];null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));var e = {};e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();var f = b.extend(!0, {}, e);f = d._convertData(f);for (var g in f) {
          b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
        }return this;
      }, e.prototype.get = function (a) {
        return this.options[a];
      }, e.prototype.set = function (a, b) {
        this.options[a] = b;
      }, e;
    }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) {
      var e = function e(a, c) {
        null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);var d = a.attr("tabindex") || 0;a.data("old-tabindex", d), a.attr("tabindex", "-1");var f = this.options.get("dataAdapter");this.dataAdapter = new f(a, this.options);var g = this.render();this._placeContainer(g);var h = this.options.get("selectionAdapter");this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);var i = this.options.get("dropdownAdapter");this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);var j = this.options.get("resultsAdapter");this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);var k = this;this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) {
          k.trigger("selection:update", { data: a });
        }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this);
      };return c.Extend(e, c.Observable), e.prototype._generateId = function (a) {
        var b = "";return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b;
      }, e.prototype._placeContainer = function (a) {
        a.insertAfter(this.$element);var b = this._resolveWidth(this.$element, this.options.get("width"));null != b && a.css("width", b);
      }, e.prototype._resolveWidth = function (a, b) {
        var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if ("resolve" == b) {
          var d = this._resolveWidth(a, "style");return null != d ? d : this._resolveWidth(a, "element");
        }if ("element" == b) {
          var e = a.outerWidth(!1);return 0 >= e ? "auto" : e + "px";
        }if ("style" == b) {
          var f = a.attr("style");if ("string" != typeof f) return null;for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
            var j = g[h].replace(/\s/g, ""),
                k = j.match(c);if (null !== k && k.length >= 1) return k[1];
          }return null;
        }return b;
      }, e.prototype._bindAdapters = function () {
        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
      }, e.prototype._registerDomEvents = function () {
        var b = this;this.$element.on("change.select2", function () {
          b.dataAdapter.current(function (a) {
            b.trigger("selection:update", { data: a });
          });
        }), this.$element.on("focus.select2", function (a) {
          b.trigger("focus", a);
        }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;null != d ? (this._observer = new d(function (c) {
          a.each(c, b._syncA), a.each(c, b._syncS);
        }), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1));
      }, e.prototype._registerDataEvents = function () {
        var a = this;this.dataAdapter.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerSelectionEvents = function () {
        var b = this,
            c = ["toggle", "focus"];this.selection.on("toggle", function () {
          b.toggleDropdown();
        }), this.selection.on("focus", function (a) {
          b.focus(a);
        }), this.selection.on("*", function (d, e) {
          -1 === a.inArray(d, c) && b.trigger(d, e);
        });
      }, e.prototype._registerDropdownEvents = function () {
        var a = this;this.dropdown.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerResultsEvents = function () {
        var a = this;this.results.on("*", function (b, c) {
          a.trigger(b, c);
        });
      }, e.prototype._registerEvents = function () {
        var a = this;this.on("open", function () {
          a.$container.addClass("select2-container--open");
        }), this.on("close", function () {
          a.$container.removeClass("select2-container--open");
        }), this.on("enable", function () {
          a.$container.removeClass("select2-container--disabled");
        }), this.on("disable", function () {
          a.$container.addClass("select2-container--disabled");
        }), this.on("blur", function () {
          a.$container.removeClass("select2-container--focus");
        }), this.on("query", function (b) {
          a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function (c) {
            a.trigger("results:all", { data: c, query: b });
          });
        }), this.on("query:append", function (b) {
          this.dataAdapter.query(b, function (c) {
            a.trigger("results:append", { data: c, query: b });
          });
        }), this.on("keypress", function (b) {
          var c = b.which;a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault());
        });
      }, e.prototype._syncAttributes = function () {
        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
      }, e.prototype._syncSubtree = function (a, b) {
        var c = !1,
            d = this;if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
          if (b) {
            if (b.addedNodes && b.addedNodes.length > 0) for (var e = 0; e < b.addedNodes.length; e++) {
              var f = b.addedNodes[e];f.selected && (c = !0);
            } else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
          } else c = !0;c && this.dataAdapter.current(function (a) {
            d.trigger("selection:update", { data: a });
          });
        }
      }, e.prototype.trigger = function (a, b) {
        var c = e.__super__.trigger,
            d = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting" };if (void 0 === b && (b = {}), a in d) {
          var f = d[a],
              g = { prevented: !1, name: a, args: b };if (c.call(this, f, g), g.prevented) return void (b.prevented = !0);
        }c.call(this, a, b);
      }, e.prototype.toggleDropdown = function () {
        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
      }, e.prototype.open = function () {
        this.isOpen() || this.trigger("query", {});
      }, e.prototype.close = function () {
        this.isOpen() && this.trigger("close", {});
      }, e.prototype.isOpen = function () {
        return this.$container.hasClass("select2-container--open");
      }, e.prototype.hasFocus = function () {
        return this.$container.hasClass("select2-container--focus");
      }, e.prototype.focus = function (a) {
        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
      }, e.prototype.enable = function (a) {
        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);var b = !a[0];this.$element.prop("disabled", b);
      }, e.prototype.data = function () {
        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a = [];return this.dataAdapter.current(function (b) {
          a = b;
        }), a;
      }, e.prototype.val = function (b) {
        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();var c = b[0];a.isArray(c) && (c = a.map(c, function (a) {
          return a.toString();
        })), this.$element.val(c).trigger("change");
      }, e.prototype.destroy = function () {
        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
      }, e.prototype.render = function () {
        var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b;
      }, e;
    }), b.define("jquery-mousewheel", ["jquery"], function (a) {
      return a;
    }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (a, b, c, d) {
      if (null == a.fn.select2) {
        var e = ["open", "close", "destroy"];a.fn.select2 = function (b) {
          if (b = b || {}, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) return this.each(function () {
            var d = a.extend(!0, {}, b);new c(a(this), d);
          }), this;if ("string" == typeof b) {
            var d,
                f = Array.prototype.slice.call(arguments, 1);return this.each(function () {
              var c = a(this).data("select2");null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f);
            }), a.inArray(b, e) > -1 ? this : d;
          }throw new Error("Invalid arguments for Select2: " + b);
        };
      }return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c;
    }), { define: b.define, require: b.require };
  }(),
      c = b.require("jquery.select2");return a.fn.select2.amd = b, c;
});

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/home.js");


/***/ })

/******/ });