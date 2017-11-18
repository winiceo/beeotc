/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		24: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + "." + {"0":"4b4098a6e714164f7e24","1":"5949f87a7f6398267014","2":"bbc78dd98c9d394c534d","3":"02f3c7142eccf62751c1","4":"92ce2beb9db463583184","5":"886e88b5ef758d9814b9","6":"6a89db13950ea7578181","7":"dc445f1f5648a86c7149","8":"3c5d38802718c06f3862","9":"2536a65bdfcc0d0ab4e3","10":"77429f4cc272e4fc0a57","11":"acbec1c043cec78103c8","12":"8075af7ee9e402130ce7","13":"a1d2b8398dc0d874d2da","14":"6d23603e3e61e65bd046","15":"fa3eed746a42fee76ffc","16":"ecf1f31f2f74255d2147","17":"1ee11413958e4876fdd0","18":"c8a37573da41afcf3951","19":"b0faaa48a7d00b7c3443","20":"a5883e2a2077b17fa0bd","21":"d52bbc489f6112313275","22":"0132acaaadfd5966c5e3","23":"6b9c8a31bbb284f74b43"}[chunkId] + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/axios/index.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/dashboard/CustomAction.vue":
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

exports.default = {
    props: {
        rowData: {
            type: Object,
            required: true
        },
        apiUrl: {
            type: String,
            required: true
        }
    },
    computed: {
        color: function color() {
            return this.rowData.status ? '#8eb4cb' : '#bf5329';
        }
    },
    methods: {
        setStatus: function setStatus(rowData) {
            var index = this;
            swal({
                title: "Change the record status",
                text: "The action may affect some data, Please think twice!",
                type: "warning",
                showCancelButton: true,
                closeOnConfirm: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, changed it!"
            }, function () {
                index.postData(rowData);
            });
        },
        postData: function postData(rowData) {
            var _this = this;

            this.$http.post(this.apiUrl + '/' + rowData.id + '/status', { status: !rowData.status }).then(function (response) {
                _this.rowData.status = !_this.rowData.status;
                if (_this.rowData.status) {
                    toastr.success('You changed a record of the status success!');
                } else {
                    toastr.warning('You changed a record of the status, Please check again!');
                }
            }).catch(function (response) {
                if (response.data.error) {
                    toastr.error(response.data.error.message);
                } else {
                    toastr.error(response.status + ' : Resource ' + response.statusText);
                }
            });
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/dashboard/Form.vue":
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

exports.default = {
    props: {
        title: {
            type: String,
            default: function _default() {
                return null;
            }
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/dashboard/Table.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CustomAction = __webpack_require__("./resources/assets/js/components/dashboard/CustomAction.vue");

var _CustomAction2 = _interopRequireDefault(_CustomAction);

var _TablePagination = __webpack_require__("./resources/assets/js/components/dashboard/TablePagination.vue");

var _TablePagination2 = _interopRequireDefault(_TablePagination);

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

exports.default = {
    props: {
        wrapperClass: {
            type: String,
            default: function _default() {
                return null;
            }
        },
        tableClass: {
            type: String,
            default: function _default() {
                return 'table table-striped table-hover';
            }
        },
        title: {
            type: String,
            default: function _default() {
                return '';
            }
        },
        showPaginate: {
            type: Boolean,
            default: function _default() {
                return false;
            }
        },
        fields: {
            type: Array,
            required: true
        },
        apiUrl: {
            type: String,
            required: true
        },
        disabledClass: {
            type: String,
            default: function _default() {
                return 'disabled';
            }
        },
        itemActions: {
            type: Array,
            default: function _default() {
                return [{ name: 'edit-item', icon: 'ion-edit', class: 'btn btn-info' }, { name: 'delete-item', icon: 'ion-trash-b', class: 'btn btn-danger' }];
            }
        }
    },
    components: {
        TablePagination: _TablePagination2.default,
        CustomAction: _CustomAction2.default
    },
    data: function data() {
        return {
            items: [],
            totalPage: 0,
            currentPage: 0,
            pagination: null
        };
    },

    watch: {
        $route: function $route() {
            var pageNum = 1;

            if (this.$route.query.page) {
                pageNum = this.$route.query.page;
            }

            this.loadPage(pageNum);
        }
    },
    created: function created() {
        this.currentPage = this.$route.query.page;

        this.loadData();
    },
    mounted: function mounted() {
        var _this = this;

        this.$parent.$on('reload', function () {
            _this.loadData();
        });
    },

    methods: {
        loadPage: function loadPage(page) {
            if (page == 'prev') {
                this.goPreviousPage();
            } else if (page == 'next') {
                this.goNextPage();
            } else {
                this.goPage(page);
            }
        },
        loadData: function loadData() {
            var _this2 = this;

            var url = this.apiUrl;

            if (this.currentPage) {
                var page = '';
                if (url.indexOf('?') != -1) {
                    page = '&page=';
                } else {
                    page = '?page=';
                }
                url = url + page + this.currentPage;
                this.$router.push(page + this.currentPage);
            }

            this.$http.get(url).then(function (response) {
                _this2.pagination = response.data.meta.pagination;
                _this2.items = response.data.data;
                _this2.totalPage = response.data.meta.pagination.total_pages;
                _this2.currentPage = response.data.meta.pagination.current_page;

                if (_this2.showPaginate && _this2.items.length != 0) {
                    _this2.$nextTick(function () {
                        _this2.$refs.pagination.$data.pagination = _this2.pagination;
                    });
                }
            });
        },
        goPreviousPage: function goPreviousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.loadData();
            }
        },
        goNextPage: function goNextPage() {
            if (this.currentPage < this.totalPage) {
                this.currentPage++;
                this.loadData();
            }
        },
        goPage: function goPage(page) {
            if (page != this.currentPage && page > 0 && page <= this.totalPage) {
                this.currentPage = page;
                this.loadData();
            }
        },
        hasCallback: function hasCallback(item) {
            return item.callback ? true : false;
        },
        callCallback: function callCallback(field, item) {
            if (!this.hasCallback(field)) return;

            var args = field.callback.split('|');
            var func = args.shift();

            if (typeof this.$parent[func] == 'function') {
                return args.length > 0 ? this.$parent[func].apply(this.$parent, [this.getObjectValue(item, field.name)].concat(args)) : this.$parent[func].call(this.$parent, this.getObjectValue(item, field.name));
            }

            return null;
        },
        getObjectValue: function getObjectValue(object, path, defaultValue) {
            defaultValue = typeof defaultValue == 'undefined' ? null : defaultValue;

            var obj = object;
            if (path.trim() != '') {
                var keys = path.split('.');
                keys.forEach(function (key) {
                    if (obj !== null && typeof obj[key] != 'undefined' && obj[key] !== null) {
                        obj = obj[key];
                    } else {
                        obj = defaultValue;
                        return;
                    }
                });
            }
            return obj;
        },
        isSpecialField: function isSpecialField(name) {
            return name.slice(0, 2) === '__';
        },
        callAction: function callAction(action, data) {
            this.$emit('table-action', action, data);
        },
        reload: function reload() {
            this.loadData();
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/dashboard/TablePagination.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TablePaginationMixin = __webpack_require__("./resources/assets/js/components/dashboard/TablePaginationMixin.vue");

var _TablePaginationMixin2 = _interopRequireDefault(_TablePaginationMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_TablePaginationMixin2.default],
    methods: {
        loadPage: function loadPage(page) {
            this.$emit('loadPage', page);
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/dashboard/TablePaginationMixin.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        disabledClass: {
            type: String,
            default: function _default() {
                return 'disabled';
            }
        },
        onEachSide: {
            type: Number,
            coerce: function coerce(value) {
                return parseInt(value);
            },
            default: function _default() {
                return 2;
            }
        }
    },
    data: function data() {
        return {
            pagination: null
        };
    },

    computed: {
        totalPage: function totalPage() {
            return this.pagination == null ? 0 : this.pagination.total_pages;
        },
        isOnFirstPage: function isOnFirstPage() {
            return this.pagination == null ? false : this.pagination.current_page == 1;
        },
        isOnLastPage: function isOnLastPage() {
            return this.pagination == null ? false : this.pagination.current_page == this.pagination.total_pages;
        },
        notEnoughPages: function notEnoughPages() {
            return this.totalPage < this.onEachSide * 2 + 1;
        },
        windowSize: function windowSize() {
            return this.onEachSide * 2 + 1;
        },
        windowStart: function windowStart() {
            if (!this.pagination || this.pagination.current_page <= this.onEachSide) {
                return 0;
            } else if (this.pagination.current_page >= this.totalPage - this.onEachSide) {
                return this.totalPage - this.onEachSide * 2 - 1;
            }
            return this.pagination.current_page - this.onEachSide - 1;
        }
    },
    methods: {
        loadPage: function loadPage(page) {
            this.$emit('loadPage', page);
        },
        isCurrentPage: function isCurrentPage(page) {
            return page == this.pagination.current_page;
        }
    }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/dashboard/particals/Navbar.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

exports.default = {
    methods: (0, _vuex.mapActions)(['toggle'])
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/dashboard/particals/Sidebar.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _menu = __webpack_require__("./resources/assets/js/config/menu.js");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            menus: _menu2.default,
            user: {}
        };
    },
    mounted: function mounted() {
        this.user = window.User;
    },

    computed: {
        userInfo: function userInfo() {
            return '/user/' + this.user.name;
        }
    },
    methods: {
        logout: function logout() {}
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _Sidebar = __webpack_require__("./resources/assets/js/components/dashboard/particals/Sidebar.vue");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Navbar = __webpack_require__("./resources/assets/js/components/dashboard/particals/Navbar.vue");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _FooterBar = __webpack_require__("./resources/assets/js/components/dashboard/particals/FooterBar.vue");

var _FooterBar2 = _interopRequireDefault(_FooterBar);

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
    components: {
        Sidebar: _Sidebar2.default,
        Navbar: _Navbar2.default,
        FooterBar: _FooterBar2.default
    },
    computed: {
        isToggle: function isToggle() {
            return this.$store.state.sidebar.opened;
        }
    }
};

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/bootstrap/dist/js/bootstrap.js'");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-09875714\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/particals/Navbar.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "\n#repbar[data-v-09875714] {\n  margin-left: -15px;\n}\n.navbar-nav li a[data-v-09875714] {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  line-height: 60px;\n}\n.navbar-toggle[data-v-09875714] {\n  margin: 0;\n  font-size: 20px;\n  text-decoration: none;\n  padding: 13px 10px;\n  border: 0;\n  color: #777;\n  cursor: pointer;\n}\n.navbar-inverse .navbar-toggle[data-v-09875714]:hover {\n  border: 0;\n  border-radius: 0;\n  background-color: #fff !important;\n  text-decoration: none;\n  color: #888;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-145f7299\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/CustomAction.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "\nspan[data-v-145f7299] {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-361a3c51\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/views/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "/* divider */\nbody {\n  overflow-x: hidden;\n}\n\n/* Toggle Styles */\n#wrapper {\n  padding-left: 0;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n#wrapper #wrapper.toggled {\n    padding-left: 250px;\n}\n#sidebar-wrapper {\n  z-index: 1000;\n  position: fixed;\n  left: 250px;\n  width: 0;\n  height: 100%;\n  margin-left: -250px;\n  overflow-y: auto;\n  background: #4d5e70;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n#wrapper.toggled #sidebar-wrapper {\n  width: 250px;\n}\n#page-content-wrapper {\n  width: 100%;\n  position: absolute;\n}\n#page-content-wrapper .container-fluid .row {\n    margin: 15px;\n}\n#wrapper.toggled #page-content-wrapper {\n  position: absolute;\n  margin-right: -250px;\n}\n@media (max-width: 768px) {\n#page-content-wrapper {\n    padding-left: 0;\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n}\n#wrapper.toggled #page-content-wrapper {\n    -webkit-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n    padding-left: 250px;\n    margin-right: -250px;\n}\n}\n@media (min-width: 768px) {\n#wrapper {\n    padding-left: 250px;\n}\n#wrapper.toggled {\n    padding-left: 0;\n}\n#sidebar-wrapper {\n    width: 250px;\n}\n#wrapper.toggled #sidebar-wrapper {\n    width: 0;\n}\n#page-content-wrapper {\n    position: relative;\n}\n#wrapper.toggled #page-content-wrapper {\n    position: relative;\n    margin-right: 0;\n}\n}\n.hr {\n  margin-left: 1px;\n  margin-right: 1px;\n  border: 1px solid #7a8693;\n}\n.profile {\n  margin: 15px auto;\n  text-align: center;\n}\n.profile img {\n    height: 125px;\n    border: 3px solid lightgrey;\n    border-radius: 200px;\n}\n.profile h1 {\n    margin-top: 10px;\n    color: white;\n    font-size: 1.3em;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45334834\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/particals/Sidebar.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "\n.sidebar-nav[data-v-45334834] {\n  position: absolute;\n  top: 0;\n  width: 250px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.sidebar-nav li[data-v-45334834] {\n  text-indent: 20px;\n  line-height: 40px;\n}\n.navbar[data-v-45334834] {\n  margin-bottom: 0;\n}\n.sidebar-nav li .user[data-v-45334834] {\n  display: block;\n  text-align: center;\n  width: 100%;\n  background-color: #3d4e60;\n  padding-top: 20px;\n  padding-bottom: 10px;\n  color: #fff;\n}\n.user[data-v-45334834] {\n  text-align: center;\n  padding-top: 15px;\n  background-color: #52697f;\n}\n.user .avatar[data-v-45334834] {\n  width: 80px;\n  margin: 10px auto;\n}\n.nickname[data-v-45334834] {\n  color: #fff;\n}\n.buttons[data-v-45334834] {\n  height: 50px;\n}\n.buttons a[data-v-45334834] {\n  display: inline-block;\n  font-size: 20px;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  margin-right: 5px;\n  color: #828a9a;\n}\n.buttons a[data-v-45334834]:hover {\n  font-size: 30px;\n  color: #fff;\n}\n.sidebar-nav li a[data-v-45334834] {\n  display: block;\n  text-decoration: none;\n  color: #999999;\n}\n.sidebar-nav li a[data-v-45334834]:hover {\n  text-decoration: none;\n  color: #fff;\n  background: rgba(255, 255, 255, 0.2);\n}\n.sidebar-nav li .active[data-v-45334834] {\n  color: #fff !important;\n}\n.sidebar-nav li a i[data-v-45334834] {\n  padding-right: 10px;\n}\n.sidebar-nav li a[data-v-45334834]:active,\n.sidebar-nav li a[data-v-45334834]:focus {\n  text-decoration: none;\n}\n.active[data-v-45334834] {\n  background-color: #3d4e60;\n  border-right: 4px solid #647f9d;\n}\n.active a[data-v-45334834] {\n  color: #fff !important;\n}\n.sidebar-nav > .sidebar-brand[data-v-45334834] {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px;\n}\n.sidebar-nav > .sidebar-brand a[data-v-45334834] {\n  color: #999999;\n}\n.sidebar-nav > .sidebar-brand a[data-v-45334834]:hover {\n  color: #fff;\n  background: none;\n}\n.logout[data-v-45334834] {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4ea28e2c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/Table.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "\n.none[data-v-4ea28e2c] {\n  color: #ECF0F1;\n  padding-bottom: 20px;\n}\n.actions[data-v-4ea28e2c] {\n  width: 15%;\n  padding: 12px 0px;\n  text-align: center;\n}\n.actions a[data-v-4ea28e2c] {\n  border-radius: 50%;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.active[data-v-4ea28e2c] {\n  background-color: #3d4e60;\n  border-right: none;\n}\n.pagination li[data-v-4ea28e2c] {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62aacbe6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/TablePagination.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "\n.active[data-v-62aacbe6] {\n  background-color: #3d4e60;\n  border-right: none;\n}\n.pagination li[data-v-62aacbe6] {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-multiselect/dist/vue-multiselect.min.css":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/vue-multiselect/dist/vue-multiselect.min.css'");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/css-loader/lib/css-base.js'");

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.slim.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/jquery/dist/jquery.slim.js'");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/lodash/lodash.js'");

/***/ }),

/***/ "./node_modules/popper.js/dist/umd/popper.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/popper.js/dist/umd/popper.js'");

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

/***/ "./node_modules/vue-i18n/dist/vue-i18n.common.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/vue-i18n/dist/vue-i18n.common.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/vue-loader/lib/component-normalizer.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-09875714\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/dashboard/particals/Navbar.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "navbar navbar-inverse navbar-static-top" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "navbar-header" }, [
        _c(
          "a",
          {
            staticClass: "navbar-toggle collapsed pull-left",
            on: { click: _vm.toggle }
          },
          [_c("i", { staticClass: "ion-navicon-round" })]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "navbar-collapse collapse", attrs: { id: "repbar" } },
        [
          _c("ul", { staticClass: "nav navbar-nav" }, [
            _c(
              "li",
              {
                staticStyle: { "font-size": "20px" },
                on: { click: _vm.toggle }
              },
              [_vm._m(0, false, false)]
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { id: "left-hamburger", href: "#" } }, [
      _c("i", { staticClass: "ion-navicon-round" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-09875714", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-145f7299\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/dashboard/CustomAction.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "span",
      {
        style: { color: _vm.color },
        on: {
          click: function($event) {
            _vm.setStatus(_vm.rowData)
          }
        }
      },
      [_c("i", { staticClass: "ion-record" })]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-145f7299", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-19b05afc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/dashboard/particals/FooterBar.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0, false, false)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", [
      _c("div", { staticClass: "copy-right text-center" }, [
        _c("span", [_vm._v("© Pig Jian 2016. All rights reserved. ")]),
        _c(
          "a",
          {
            staticClass: "item",
            attrs: { href: "http://www.miitbeian.gov.cn/" }
          },
          [_vm._v("粤ICP备16020344号-1")]
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-19b05afc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-330b95d6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/dashboard/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "ibox-title" }, [
      _c(
        "small",
        { staticClass: "pull-right", staticStyle: { "margin-top": "7px" } },
        [_vm._t("buttons")],
        2
      ),
      _vm._v(" "),
      _c("h5", [_vm._v(_vm._s(_vm.title))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "ibox-content" }, [_vm._t("content")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-330b95d6", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-361a3c51\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: { toggled: _vm.isToggle }, attrs: { id: "wrapper" } },
    [
      _c("sidebar"),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "page-content-wrapper" } },
        [
          _c("navbar"),
          _vm._v(" "),
          _c("div", { staticClass: "container-fluid" }, [_c("router-view")], 1)
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
    require("vue-hot-reload-api")      .rerender("data-v-361a3c51", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-45334834\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/dashboard/particals/Sidebar.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "sidebar-wrapper" } }, [
    _c(
      "ul",
      { staticClass: "sidebar-nav" },
      [
        _c("div", { staticClass: "user" }, [
          _c("div", { staticClass: "avatar" }, [
            _c("img", {
              staticClass: "img-responsive img-circle",
              attrs: { src: _vm.user.avatar }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "nickname" }, [
            _c("p", [_vm._v(_vm._s(_vm.user.name))]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.user.email))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "buttons" }, [
            _vm._m(0, false, false),
            _vm._v(" "),
            _c("a", { attrs: { href: _vm.userInfo } }, [
              _c("i", { staticClass: "ion-person" })
            ]),
            _vm._v(" "),
            _vm._m(1, false, false)
          ])
        ]),
        _vm._v(" "),
        _vm._l(_vm.menus, function(menu) {
          return _c(
            "li",
            [
              _c("router-link", { attrs: { to: menu.uri } }, [
                _c("i", { class: menu.icon }),
                _vm._v(" " + _vm._s(_vm.$t(menu.label)) + "\n            ")
              ])
            ],
            1
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/" } }, [
      _c("i", { staticClass: "ion-ios-home" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/setting" } }, [
      _c("i", { staticClass: "ion-ios-gear" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-45334834", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4ea28e2c\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/dashboard/Table.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "ibox", class: _vm.wrapperClass }, [
    _c("div", { staticClass: "ibox-title" }, [
      _c(
        "small",
        { staticClass: "pull-right", staticStyle: { "margin-top": "7px" } },
        [_vm._t("buttons")],
        2
      ),
      _vm._v(" "),
      _c("h5", [_vm._v(_vm._s(_vm.title))])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "ibox-content no-padding" },
      [
        _c("table", { class: _vm.tableClass }, [
          _c("thead", [
            _c(
              "tr",
              [
                _vm._l(_vm.fields, function(field) {
                  return [
                    _vm.isSpecialField(field.name)
                      ? [
                          field.name == "__actions"
                            ? _c(
                                "th",
                                { class: field.titleClass },
                                [
                                  field.trans
                                    ? [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(_vm.$t(field.trans)) +
                                            "\n                                "
                                        )
                                      ]
                                    : [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              field.title ? field.title : ""
                                            ) +
                                            "\n                                "
                                        )
                                      ]
                                ],
                                2
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          field.name == "__component"
                            ? _c(
                                "th",
                                { class: field.titleClass },
                                [
                                  field.trans
                                    ? [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(_vm.$t(field.trans)) +
                                            "\n                                "
                                        )
                                      ]
                                    : [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              field.title
                                                ? field.title
                                                : field.name
                                            ) +
                                            "\n                                "
                                        )
                                      ]
                                ],
                                2
                              )
                            : _vm._e()
                        ]
                      : [
                          _c(
                            "th",
                            { class: field.titleClass },
                            [
                              field.trans
                                ? [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.$t(field.trans)) +
                                        "\n                                "
                                    )
                                  ]
                                : [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          field.title ? field.title : field.name
                                        ) +
                                        "\n                                "
                                    )
                                  ]
                            ],
                            2
                          )
                        ]
                  ]
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            {},
            [
              _vm.items.length > 0
                ? _vm._l(_vm.items, function(item) {
                    return _c(
                      "tr",
                      [
                        _vm._l(_vm.fields, function(field) {
                          return [
                            _vm.isSpecialField(field.name)
                              ? [
                                  field.name == "__actions"
                                    ? [
                                        _c(
                                          "td",
                                          {
                                            staticClass: "actions",
                                            class: field.dataClass
                                          },
                                          [
                                            _vm._l(_vm.itemActions, function(
                                              action
                                            ) {
                                              return [
                                                _c(
                                                  "a",
                                                  {
                                                    class: action.class,
                                                    on: {
                                                      click: function($event) {
                                                        _vm.callAction(
                                                          action.name,
                                                          item
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      class: action.icon
                                                    }),
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(action.label) +
                                                        "\n                                            "
                                                    )
                                                  ]
                                                )
                                              ]
                                            })
                                          ],
                                          2
                                        )
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  field.name == "__component"
                                    ? [
                                        _c(
                                          "td",
                                          {
                                            staticClass: "component",
                                            class: field.dataClass
                                          },
                                          [
                                            _c("custom-action", {
                                              attrs: {
                                                "api-url": _vm.apiUrl,
                                                "row-data": item
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    : _vm._e()
                                ]
                              : [
                                  _vm.hasCallback(field)
                                    ? _c("td", {
                                        class: field.dataClass,
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.callCallback(field, item)
                                          )
                                        }
                                      })
                                    : _c("td", { class: field.dataClass }, [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(item[field.name]) +
                                            "\n                                "
                                        )
                                      ])
                                ]
                          ]
                        })
                      ],
                      2
                    )
                  })
                : _vm._e()
            ],
            2
          )
        ]),
        _vm._v(" "),
        _vm.items.length == 0
          ? _c("h3", { staticClass: "none text-center" }, [
              _vm._v(_vm._s(_vm.$t("page.nothing")))
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.showPaginate && _vm.items.length > 0
          ? _c("table-pagination", {
              ref: "pagination",
              on: { loadPage: _vm.loadPage }
            })
          : _vm._e()
      ],
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
    require("vue-hot-reload-api")      .rerender("data-v-4ea28e2c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-62aacbe6\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/dashboard/TablePagination.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "text-center" }, [
    _c(
      "ul",
      { staticClass: "pagination" },
      [
        _c("li", { class: _vm.isOnFirstPage ? _vm.disabledClass : "" }, [
          _c(
            "a",
            {
              on: {
                click: function($event) {
                  _vm.loadPage("prev")
                }
              }
            },
            [_c("i", { staticClass: "ion-chevron-left" })]
          )
        ]),
        _vm._v(" "),
        _vm.notEnoughPages
          ? [
              _vm._l(_vm.totalPage, function(n) {
                return [
                  _c("li", { class: _vm.isCurrentPage(n) ? "active" : "" }, [
                    _c(
                      "a",
                      {
                        on: {
                          click: function($event) {
                            _vm.loadPage(n)
                          }
                        }
                      },
                      [_vm._v(" " + _vm._s(n) + " ")]
                    )
                  ])
                ]
              })
            ]
          : [
              _vm._l(_vm.windowSize, function(n) {
                return [
                  _c(
                    "li",
                    {
                      class: _vm.isCurrentPage(_vm.windowStart + n)
                        ? "active"
                        : ""
                    },
                    [
                      _c(
                        "a",
                        {
                          on: {
                            click: function($event) {
                              _vm.loadPage(_vm.windowStart + n)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.windowStart + n) +
                              "\n                    "
                          )
                        ]
                      )
                    ]
                  )
                ]
              })
            ],
        _vm._v(" "),
        _c("li", { class: _vm.isOnLastPage ? _vm.disabledClass : "" }, [
          _c(
            "a",
            {
              on: {
                click: function($event) {
                  _vm.loadPage("next")
                }
              }
            },
            [_c("i", { staticClass: "ion-chevron-right" })]
          )
        ])
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-62aacbe6", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-66ab2f82\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/App.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-66ab2f82", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e58d3186\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/Parent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e58d3186", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-multiselect/dist/vue-multiselect.min.css");
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
		module.hot.accept("!!../../css-loader/index.js!./vue-multiselect.min.css", function() {
			var newContent = require("!!../../css-loader/index.js!./vue-multiselect.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/vue-router/dist/vue-router.esm.js'");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-09875714\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/particals/Navbar.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-09875714\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/particals/Navbar.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("13794b12", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-09875714\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Navbar.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-09875714\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Navbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-145f7299\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/CustomAction.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-145f7299\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/CustomAction.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("b6808d9c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-145f7299\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CustomAction.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-145f7299\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CustomAction.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-361a3c51\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/views/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-361a3c51\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/views/Dashboard.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("16fb456c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-361a3c51\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Dashboard.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-361a3c51\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Dashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45334834\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/particals/Sidebar.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45334834\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/particals/Sidebar.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("77cd39ca", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45334834\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Sidebar.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45334834\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4ea28e2c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/Table.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4ea28e2c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/Table.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("1e56d4de", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4ea28e2c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Table.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4ea28e2c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Table.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62aacbe6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/TablePagination.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62aacbe6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/TablePagination.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("1623f290", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62aacbe6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./TablePagination.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62aacbe6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./TablePagination.vue");
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

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/genv/otc/node_modules/vuex/dist/vuex.esm.js'");

/***/ }),

/***/ "./resources/assets/js/App.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-66ab2f82\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/App.vue")
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
Component.options.__file = "resources/assets/js/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66ab2f82", Component.options)
  } else {
    hotAPI.reload("data-v-66ab2f82", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/app.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _http = __webpack_require__("./resources/assets/js/plugins/http/index.js");

var _http2 = _interopRequireDefault(_http);

var _vueRouter = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _store = __webpack_require__("./resources/assets/js/vuex/store.js");

var _store2 = _interopRequireDefault(_store);

var _vueI18n = __webpack_require__("./node_modules/vue-i18n/dist/vue-i18n.common.js");

var _vueI18n2 = _interopRequireDefault(_vueI18n);

__webpack_require__("./node_modules/vue-multiselect/dist/vue-multiselect.min.css");

var _routes = __webpack_require__("./resources/assets/js/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _lang = __webpack_require__("./resources/assets/js/lang/index.js");

var _lang2 = _interopRequireDefault(_lang);

var _App = __webpack_require__("./resources/assets/js/App.vue");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__("./resources/assets/js/bootstrap.js");

window.toastr = __webpack_require__("./node_modules/toastr/build/toastr.min.js");
window.innerHeight = 800;

window.toastr.options = {
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

Vue.use(_http2.default);
Vue.use(_vueI18n2.default);
Vue.use(_vueRouter2.default);

Vue.config.lang = window.Language;

var i18n = new _vueI18n2.default({
    locale: Vue.config.lang,
    messages: _lang2.default
});

Vue.component('vue-table-pagination', __webpack_require__("./resources/assets/js/components/dashboard/TablePagination.vue"));

Vue.component('vue-table', __webpack_require__("./resources/assets/js/components/dashboard/Table.vue"));

Vue.component('vue-form', __webpack_require__("./resources/assets/js/components/dashboard/Form.vue"));

var router = new _vueRouter2.default({
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes: _routes2.default
});

new Vue({
    router: router,
    store: _store2.default,
    i18n: i18n,
    render: function render(h) {
        return h(_App2.default);
    }
}).$mount('#app');
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window._ = __webpack_require__("./node_modules/lodash/lodash.js");

window.Popper = __webpack_require__("./node_modules/popper.js/dist/umd/popper.js");

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = window.jQuery = __webpack_require__("./node_modules/jquery/dist/jquery.slim.js");

  __webpack_require__("./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__("./node_modules/axios/index.js");

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

window.swal = __webpack_require__("./node_modules/sweetalert/lib/sweetalert.js");
//window.Tether = require('tether');


/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

/***/ }),

/***/ "./resources/assets/js/components/dashboard/CustomAction.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-145f7299\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/CustomAction.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/dashboard/CustomAction.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-145f7299\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/dashboard/CustomAction.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-145f7299"
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
Component.options.__file = "resources/assets/js/components/dashboard/CustomAction.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-145f7299", Component.options)
  } else {
    hotAPI.reload("data-v-145f7299", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/dashboard/Form.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/dashboard/Form.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-330b95d6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/dashboard/Form.vue")
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
Component.options.__file = "resources/assets/js/components/dashboard/Form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-330b95d6", Component.options)
  } else {
    hotAPI.reload("data-v-330b95d6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/dashboard/Table.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4ea28e2c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/Table.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/dashboard/Table.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4ea28e2c\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/dashboard/Table.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4ea28e2c"
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
Component.options.__file = "resources/assets/js/components/dashboard/Table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ea28e2c", Component.options)
  } else {
    hotAPI.reload("data-v-4ea28e2c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/dashboard/TablePagination.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62aacbe6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/TablePagination.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/dashboard/TablePagination.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-62aacbe6\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/dashboard/TablePagination.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-62aacbe6"
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
Component.options.__file = "resources/assets/js/components/dashboard/TablePagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62aacbe6", Component.options)
  } else {
    hotAPI.reload("data-v-62aacbe6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/dashboard/TablePaginationMixin.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/dashboard/TablePaginationMixin.vue")
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
Component.options.__file = "resources/assets/js/components/dashboard/TablePaginationMixin.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-015bbdeb", Component.options)
  } else {
    hotAPI.reload("data-v-015bbdeb", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/dashboard/particals/FooterBar.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-19b05afc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/dashboard/particals/FooterBar.vue")
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
Component.options.__file = "resources/assets/js/components/dashboard/particals/FooterBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19b05afc", Component.options)
  } else {
    hotAPI.reload("data-v-19b05afc", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/dashboard/particals/Navbar.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-09875714\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/particals/Navbar.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/dashboard/particals/Navbar.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-09875714\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/dashboard/particals/Navbar.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-09875714"
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
Component.options.__file = "resources/assets/js/components/dashboard/particals/Navbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09875714", Component.options)
  } else {
    hotAPI.reload("data-v-09875714", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/dashboard/particals/Sidebar.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45334834\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/components/dashboard/particals/Sidebar.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/components/dashboard/particals/Sidebar.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-45334834\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/components/dashboard/particals/Sidebar.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-45334834"
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
Component.options.__file = "resources/assets/js/components/dashboard/particals/Sidebar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45334834", Component.options)
  } else {
    hotAPI.reload("data-v-45334834", Component.options)
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

/***/ "./resources/assets/js/config/menu.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = [{
    label: 'sidebar.dashboard',
    icon: 'ion-ios-speedometer',
    uri: '/dashboard/home'
}, {
    label: 'sidebar.user',
    icon: 'ion-person-stalker',
    uri: '/dashboard/users'
}, {
    label: 'sidebar.article',
    icon: 'ion-ios-book',
    uri: '/dashboard/articles'
}, {
    label: 'sidebar.discussion',
    icon: 'ion-help-circled',
    uri: '/dashboard/discussions'
}, {
    label: 'sidebar.comment',
    icon: 'ion-chatbubble-working',
    uri: '/dashboard/comments'
}, {
    label: 'sidebar.file',
    icon: 'ion-ios-folder',
    uri: '/dashboard/files'
}, {
    label: 'sidebar.tag',
    icon: 'ion-ios-pricetags',
    uri: '/dashboard/tags'
}, {
    label: 'sidebar.category',
    icon: 'ion-ios-list',
    uri: '/dashboard/categories'
}, {
    label: 'sidebar.link',
    icon: 'ion-ios-world',
    uri: '/dashboard/links'
}, {
    label: 'sidebar.visitor',
    icon: 'ion-chatbubble-working',
    uri: '/dashboard/visitors'
}, {
    label: 'sidebar.system',
    icon: 'ion-gear-b',
    uri: '/dashboard/system'
}];

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

/***/ "./resources/assets/js/routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Dashboard = __webpack_require__("./resources/assets/js/views/Dashboard.vue");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Parent = __webpack_require__("./resources/assets/js/views/Parent.vue");

var _Parent2 = _interopRequireDefault(_Parent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    path: '/dashboard',
    component: _Dashboard2.default,
    beforeEnter: requireAuth,
    children: [{
        path: '/',
        redirect: '/dashboard/home'
    }, {
        path: 'home',
        component: function component() {
            return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/Home.vue"));
        }
    }, {
        path: 'users',
        component: _Parent2.default,
        children: [{
            path: '/',
            component: function component() {
                return __webpack_require__.e/* import() */(16).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/user/User.vue"));
            }
        }, {
            path: 'create',
            component: function component() {
                return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/user/Create.vue"));
            }
        }, {
            path: ':id/edit',
            component: function component() {
                return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/user/Edit.vue"));
            }
        }]
    }, {
        path: 'articles',
        component: _Parent2.default,
        children: [{
            path: '/',
            name: 'articles',
            component: function component() {
                return __webpack_require__.e/* import() */(22).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/article/Article.vue"));
            }
        }, {
            path: 'create',
            component: function component() {
                return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/article/Create.vue"));
            }
        }, {
            path: ':id/edit',
            component: function component() {
                return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/article/Edit.vue"));
            }
        }]
    }, {
        path: 'discussions',
        component: _Parent2.default,
        children: [{
            path: '/',
            component: function component() {
                return __webpack_require__.e/* import() */(19).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/discussion/Discussion.vue"));
            }
        }, {
            path: 'create',
            component: function component() {
                return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/discussion/Create.vue"));
            }
        }, {
            path: ':id/edit',
            component: function component() {
                return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/discussion/Edit.vue"));
            }
        }]
    }, {
        path: 'comments',
        component: _Parent2.default,
        children: [{
            path: '/',
            component: function component() {
                return __webpack_require__.e/* import() */(20).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/comment/Comment.vue"));
            }
        }, {
            path: ':id/edit',
            component: function component() {
                return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/comment/Edit.vue"));
            }
        }]
    }, {
        path: 'tags',
        component: _Parent2.default,
        children: [{
            path: '/',
            component: function component() {
                return __webpack_require__.e/* import() */(17).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/tag/Tag.vue"));
            }
        }, {
            path: 'Create',
            component: function component() {
                return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/tag/Create.vue"));
            }
        }, {
            path: ':id/edit',
            component: function component() {
                return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/tag/Edit.vue"));
            }
        }]
    }, {
        path: 'files',
        component: function component() {
            return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/File.vue"));
        }
    }, {
        path: 'categories',
        component: _Parent2.default,
        children: [{
            path: '/',
            component: function component() {
                return __webpack_require__.e/* import() */(21).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/category/Category.vue"));
            }
        }, {
            path: 'create',
            component: function component() {
                return __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/category/Create.vue"));
            }
        }, {
            path: ':id/edit',
            component: function component() {
                return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/category/Edit.vue"));
            }
        }]
    }, {
        path: 'links',
        component: _Parent2.default,
        children: [{
            path: '/',
            component: function component() {
                return __webpack_require__.e/* import() */(18).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/link/Link.vue"));
            }
        }, {
            path: 'create',
            component: function component() {
                return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/link/Create.vue"));
            }
        }, {
            path: ':id/edit',
            component: function component() {
                return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/link/Edit.vue"));
            }
        }]
    }, {
        path: 'visitors',
        component: function component() {
            return __webpack_require__.e/* import() */(23).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/Visitor.vue"));
        }
    }, {
        path: 'system',
        component: function component() {
            return __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, "./resources/assets/js/views/dashboard/System.vue"));
        }
    }, {
        path: '*',
        redirect: '/dashboard'
    }]
}];


function requireAuth(to, from, next) {
    if (window.User) {
        return next();
    } else {
        return next('/');
    }
}

/***/ }),

/***/ "./resources/assets/js/views/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-361a3c51\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/views/Dashboard.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/views/Dashboard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-361a3c51\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/Dashboard.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources/assets/js/views/Dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-361a3c51", Component.options)
  } else {
    hotAPI.reload("data-v-361a3c51", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/views/Parent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e58d3186\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/views/Parent.vue")
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
Component.options.__file = "resources/assets/js/views/Parent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e58d3186", Component.options)
  } else {
    hotAPI.reload("data-v-e58d3186", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/vuex/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var toggle = exports.toggle = function toggle(_ref) {
  var commit = _ref.commit;
  return commit('toggle');
};

/***/ }),

/***/ "./resources/assets/js/vuex/mutations.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var toggle = exports.toggle = function toggle(state) {
    return state.sidebar.opened = !state.sidebar.opened;
};

/***/ }),

/***/ "./resources/assets/js/vuex/store.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _vuex2 = _interopRequireDefault(_vuex);

var _actions = __webpack_require__("./resources/assets/js/vuex/actions.js");

var actions = _interopRequireWildcard(_actions);

var _mutations = __webpack_require__("./resources/assets/js/vuex/mutations.js");

var mutations = _interopRequireWildcard(_mutations);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var state = {
    sidebar: {
        opened: false
    }
};

exports.default = new _vuex2.default.Store({
    state: state,
    actions: actions,
    mutations: mutations
});

/***/ }),

/***/ "./resources/assets/sass/app.scss":
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n@import \"node_modules/bootstrap/scss/bootstrap.scss\";\n^\n      File to import not found or unreadable: node_modules/bootstrap/scss/bootstrap.scss.\nParent style sheet: stdin\n      in /genv/otc/resources/assets/sass/app.scss (line 8, column 1)\n    at runLoaders (/genv/otc/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /genv/otc/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /genv/otc/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/genv/otc/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/genv/otc/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.<anonymous> (/genv/otc/node_modules/async/dist/async.js:2257:31)\n    at Object.callback (/genv/otc/node_modules/async/dist/async.js:958:16)\n    at options.error (/genv/otc/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ "./resources/assets/sass/home.scss":
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \n@import \"node_modules/bootstrap/scss/bootstrap\";\n^\n      File to import not found or unreadable: node_modules/bootstrap/scss/bootstrap.\nParent style sheet: /genv/otc/resources/assets/sass/public.scss\n      in /genv/otc/resources/assets/sass/public.scss (line 12, column 1)\n    at runLoaders (/genv/otc/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /genv/otc/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /genv/otc/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/genv/otc/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/genv/otc/node_modules/sass-loader/lib/loader.js:55:13)\n    at Object.<anonymous> (/genv/otc/node_modules/async/dist/async.js:2257:31)\n    at Object.callback (/genv/otc/node_modules/async/dist/async.js:958:16)\n    at options.error (/genv/otc/node_modules/node-sass/lib/index.js:294:32)");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/app.js");
__webpack_require__("./resources/assets/sass/app.scss");
module.exports = __webpack_require__("./resources/assets/sass/home.scss");


/***/ })

/******/ });