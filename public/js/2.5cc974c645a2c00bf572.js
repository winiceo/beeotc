webpackJsonp([2],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./node_modules/vue-datepicker/vue-datepicker.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = __webpack_require__("./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  props: {
    required: false,
    date: {
      type: Object,
      required: true
    },
    option: {
      type: Object,
      default: function _default() {
        return {
          type: 'day',
          SundayFirst: false,
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD',
          color: {
            checked: '#F50057',
            header: '#3f51b5',
            headerText: '#fff'
          },
          inputStyle: {
            'display': 'inline-block',
            'padding': '6px',
            'line-height': '22px',
            'font-size': '16px',
            'border': '2px solid #fff',
            'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
            'border-radius': '2px',
            'color': '#5F5F5F'
          },
          placeholder: 'when?',
          buttons: {
            ok: 'OK',
            cancel: 'Cancel'
          },
          overlayOpacity: 0.5,
          dismissible: true
        };
      }
    },
    limit: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    function hours() {
      var list = [];
      var hour = 24;
      while (hour > 0) {
        hour--;
        list.push({
          checked: false,
          value: hour < 10 ? '0' + hour : hour
        });
      }
      return list;
    }
    function mins() {
      var list = [];
      var min = 60;
      while (min > 0) {
        min--;
        list.push({
          checked: false,
          value: min < 10 ? '0' + min : min
        });
      }
      return list;
    }
    return {
      hours: hours(),
      mins: mins(),
      showInfo: {
        hour: false,
        day: false,
        month: false,
        year: false,
        check: false
      },
      displayInfo: {
        month: ''
      },
      library: {
        week: this.option.week,
        month: this.option.month,
        year: []
      },
      checked: {
        oldtime: '',
        currentMoment: null,
        year: '',
        month: '',
        day: '',
        hour: '00',
        min: '00'
      },
      dayList: [],
      selectedDays: []
    };
  },

  methods: {
    pad: function pad(n) {
      n = Math.floor(n);
      return n < 10 ? '0' + n : n;
    },
    nextMonth: function nextMonth(type) {
      var next = null;
      type === 'next' ? next = (0, _moment2.default)(this.checked.currentMoment).add(1, 'M') : next = (0, _moment2.default)(this.checked.currentMoment).add(-1, 'M');
      this.showDay(next);
    },
    showDay: function showDay(time) {
      if (time === undefined || !Date.parse(time)) {
        this.checked.currentMoment = (0, _moment2.default)();
      } else {
        this.checked.currentMoment = (0, _moment2.default)(time, this.option.format);
      }
      this.showOne('day');
      this.checked.year = (0, _moment2.default)(this.checked.currentMoment).format('YYYY');
      this.checked.month = (0, _moment2.default)(this.checked.currentMoment).format('MM');
      this.checked.day = (0, _moment2.default)(this.checked.currentMoment).format('DD');
      this.displayInfo.month = this.library.month[(0, _moment2.default)(this.checked.currentMoment).month()];
      var days = [];
      var currentMoment = this.checked.currentMoment;
      var firstDay = (0, _moment2.default)(currentMoment).date(1).day();
      // gettting previous and next month
      // let currentMonth = moment(currentMoment)
      var previousMonth = (0, _moment2.default)(currentMoment);
      var nextMonth = (0, _moment2.default)(currentMoment);
      nextMonth.add(1, 'months');
      previousMonth.subtract(1, 'months');
      var monthDays = (0, _moment2.default)(currentMoment).daysInMonth();
      var oldtime = this.checked.oldtime;
      for (var i = 1; i <= monthDays; ++i) {
        days.push({
          value: i,
          inMonth: true,
          unavailable: false,
          checked: false,
          moment: (0, _moment2.default)(currentMoment).date(i)
        });
        if (i === Math.ceil((0, _moment2.default)(currentMoment).format('D')) && (0, _moment2.default)(oldtime, this.option.format).year() === (0, _moment2.default)(currentMoment).year() && (0, _moment2.default)(oldtime, this.option.format).month() === (0, _moment2.default)(currentMoment).month()) {
          days[i - 1].checked = true;
        }
        this.checkBySelectDays(i, days);
      }
      if (firstDay === 0) firstDay = 7;
      for (var _i = 0; _i < firstDay - (this.option.SundayFirst ? 0 : 1); _i++) {
        var passiveDay = {
          value: previousMonth.daysInMonth() - _i,
          inMonth: false,
          action: 'previous',
          unavailable: false,
          checked: false,
          moment: (0, _moment2.default)(currentMoment).date(1).subtract(_i + 1, 'days')
        };
        days.unshift(passiveDay);
      }
      if (this.limit.length > 0) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.limit[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var li = _step.value;

            switch (li.type) {
              case 'fromto':
                days = this.limitFromTo(li, days);
                break;
              case 'weekday':
                days = this.limitWeekDay(li, days);
                break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      var passiveDaysAtFinal = 42 - days.length;
      for (var _i2 = 1; _i2 <= passiveDaysAtFinal; _i2++) {
        var _passiveDay = {
          value: _i2,
          inMonth: false,
          action: 'next',
          unavailable: false,
          checked: false,
          moment: (0, _moment2.default)(currentMoment).add(1, 'months').date(_i2)
        };
        days.push(_passiveDay);
      }
      this.dayList = days;
    },
    checkBySelectDays: function checkBySelectDays(d, days) {
      var _this = this;

      this.selectedDays.forEach(function (day) {
        if (_this.checked.year === (0, _moment2.default)(day).format('YYYY') && _this.checked.month === (0, _moment2.default)(day).format('MM') && d === Math.ceil((0, _moment2.default)(day).format('D'))) {
          days[d - 1].checked = true;
        }
      });
    },
    limitWeekDay: function limitWeekDay(limit, days) {
      days.map(function (day) {
        if (limit.available.indexOf(Math.floor(day.moment.format('d'))) === -1) {
          day.unavailable = true;
        }
      });
      return days;
    },
    limitFromTo: function limitFromTo(limit, days) {
      var _this2 = this;

      if (limit.from || limit.to) {
        days.map(function (day) {
          if (_this2.getLimitCondition(limit, day)) {
            day.unavailable = true;
          }
        });
      }
      return days;
    },
    getLimitCondition: function getLimitCondition(limit, day) {
      var tmpMoment = (0, _moment2.default)(this.checked.year + '-' + this.pad(this.checked.month) + '-' + this.pad(day.value));
      if (limit.from && !limit.to) {
        return !tmpMoment.isAfter(limit.from);
      } else if (!limit.from && limit.to) {
        return !tmpMoment.isBefore(limit.to);
      } else {
        return !tmpMoment.isBetween(limit.from, limit.to);
      }
    },
    checkDay: function checkDay(obj) {
      if (obj.unavailable || obj.value === '') {
        return false;
      }
      if (!obj.inMonth) {
        this.nextMonth(obj.action);
      }
      if (this.option.type === 'day' || this.option.type === 'min') {
        this.dayList.forEach(function (x) {
          x.checked = false;
        });
        this.checked.day = this.pad(obj.value);
        obj.checked = true;
      } else {
        var day = this.pad(obj.value);
        var ctime = this.checked.year + '-' + this.checked.month + '-' + day;
        if (obj.checked === true) {
          obj.checked = false;
          this.selectedDays.$remove(ctime);
        } else {
          this.selectedDays.push(ctime);
          obj.checked = true;
        }
      }
      switch (this.option.type) {
        case 'day':
          this.picked();
          break;
        case 'min':
          this.showOne('hour');
          // shift activated time items to visible position.
          this.shiftActTime();
          break;
      }
    },
    showYear: function showYear() {
      var _this3 = this;

      var year = (0, _moment2.default)(this.checked.currentMoment).year();
      this.library.year = [];
      var yearTmp = [];
      for (var i = year - 100; i < year + 5; ++i) {
        yearTmp.push(i);
      }
      this.library.year = yearTmp;
      this.showOne('year');
      this.$nextTick(function () {
        var listDom = document.getElementById('yearList');
        listDom.scrollTop = listDom.scrollHeight - 100;
        _this3.addYear();
      });
    },
    showOne: function showOne(type) {
      switch (type) {
        case 'year':
          this.showInfo.hour = false;
          this.showInfo.day = false;
          this.showInfo.year = true;
          this.showInfo.month = false;
          break;
        case 'month':
          this.showInfo.hour = false;
          this.showInfo.day = false;
          this.showInfo.year = false;
          this.showInfo.month = true;
          break;
        case 'day':
          this.showInfo.hour = false;
          this.showInfo.day = true;
          this.showInfo.year = false;
          this.showInfo.month = false;
          break;
        case 'hour':
          this.showInfo.hour = true;
          this.showInfo.day = false;
          this.showInfo.year = false;
          this.showInfo.month = false;
          break;
        default:
          this.showInfo.day = true;
          this.showInfo.year = false;
          this.showInfo.month = false;
          this.showInfo.hour = false;
      }
    },
    showMonth: function showMonth() {
      this.showOne('month');
    },
    addYear: function addYear() {
      var _this4 = this;

      var listDom = document.getElementById('yearList');
      listDom.addEventListener('scroll', function (e) {
        if (listDom.scrollTop < listDom.scrollHeight - 100) {
          var len = _this4.library.year.length;
          var lastYear = _this4.library.year[len - 1];
          _this4.library.year.push(lastYear + 1);
        }
      }, false);
    },
    setYear: function setYear(year) {
      this.checked.currentMoment = (0, _moment2.default)(year + '-' + this.checked.month + '-' + this.checked.day);
      this.showDay(this.checked.currentMoment);
    },
    setMonth: function setMonth(month) {
      var mo = this.library.month.indexOf(month) + 1;
      if (mo < 10) {
        mo = '0' + '' + mo;
      }
      this.checked.currentMoment = (0, _moment2.default)(this.checked.year + '-' + mo + '-' + this.checked.day);
      this.showDay(this.checked.currentMoment);
    },
    showCheck: function showCheck() {
      if (this.date.time === '') {
        this.showDay();
      } else {
        if (this.option.type === 'day' || this.option.type === 'min') {
          this.checked.oldtime = this.date.time;
          this.showDay(this.date.time);
        } else {
          this.selectedDays = JSON.parse(this.date.time);
          if (this.selectedDays.length) {
            this.checked.oldtime = this.selectedDays[0];
            this.showDay(this.selectedDays[0]);
          } else {
            this.showDay();
          }
        }
      }
      this.showInfo.check = true;
    },
    setTime: function setTime(type, obj, list) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          item.checked = false;
          if (item.value === obj.value) {
            item.checked = true;
            this.checked[type] = item.value;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    },
    picked: function picked() {
      if (this.option.type === 'day' || this.option.type === 'min') {
        var ctime = this.checked.year + '-' + this.checked.month + '-' + this.checked.day + ' ' + this.checked.hour + ':' + this.checked.min;
        this.checked.currentMoment = (0, _moment2.default)(ctime, 'YYYY-MM-DD HH:mm');
        this.date.time = (0, _moment2.default)(this.checked.currentMoment).format(this.option.format);
      } else {
        this.date.time = JSON.stringify(this.selectedDays);
      }
      this.showInfo.check = false;
      this.$emit('change', this.date.time);
    },
    dismiss: function dismiss(evt) {
      if (evt.target.className === 'datepicker-overlay') {
        if (this.option.dismissible === undefined || this.option.dismissible) {
          this.showInfo.check = false;
          this.$emit('cancel');
        }
      }
    },
    shiftActTime: function shiftActTime() {
      // shift activated time items to visible position.
      this.$nextTick(function () {
        if (!document.querySelector('.hour-item.active')) {
          return false;
        }
        document.querySelector('.hour-box').scrollTop = (document.querySelector('.hour-item.active').offsetTop || 0) - 250;
        document.querySelector('.min-box').scrollTop = (document.querySelector('.min-item.active').offsetTop || 0) - 250;
      });
    }
  }
};

/***/ }),

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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3faef998\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./node_modules/vue-datepicker/vue-datepicker.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "\n.datepicker-overlay[data-v-3faef998] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 998;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  -webkit-animation: fadein-data-v-3faef998 0.5s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein-data-v-3faef998 0.5s;\n}\n@keyframes fadein-data-v-3faef998 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein-data-v-3faef998 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n/* Internet Explorer */\n/* Opera < 12.1 */\n.cov-date-body[data-v-3faef998] {\n  display: inline-block;\n  background: #3F51B5;\n  overflow: hidden;\n  position: relative;\n  font-size: 16px;\n  font-family: 'Roboto';\n  font-weight: 400;\n  position: fixed;\n  display: block;\n  width: 400px;\n  max-width: 100%;\n  z-index: 999;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n}\n.cov-picker-box[data-v-3faef998] {\n  background: #fff;\n  width: 100%;\n  display: inline-block;\n  padding: 25px;\n  box-sizing: border-box !important;\n  -moz-box-sizing: border-box !important;\n  -webkit-box-sizing: border-box !important;\n  -ms-box-sizing: border-box !important;\n  width: 400px;\n  max-width: 100%;\n  height: 280px;\n  text-align: start!important;\n}\n.cov-picker-box td[data-v-3faef998] {\n  height: 34px;\n  width: 34px;\n  padding: 0;\n  line-height: 34px;\n  color: #000;\n  background: #fff;\n  text-align: center;\n  cursor: pointer;\n}\n.cov-picker-box td[data-v-3faef998]:hover {\n  background: #E6E6E6;\n}\ntable[data-v-3faef998] {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n}\n.day[data-v-3faef998] {\n  width: 14.2857143%;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  height: 34px;\n  padding: 0;\n  line-height: 34px;\n  color: #000;\n  background: #fff;\n  vertical-align: middle;\n}\n.week ul[data-v-3faef998] {\n  margin: 0 0 8px;\n  padding: 0;\n  list-style: none;\n}\n.week ul li[data-v-3faef998] {\n  width: 14.2%;\n  display: inline-block;\n  text-align: center;\n  background: transparent;\n  color: #000;\n  font-weight: bold;\n}\n.passive-day[data-v-3faef998] {\n  color: #bbb;\n}\n.checked[data-v-3faef998] {\n  background: #F50057;\n  color: #FFF !important;\n  border-radius: 3px;\n}\n.unavailable[data-v-3faef998] {\n  color: #ccc;\n  cursor: not-allowed;\n}\n.cov-date-monthly[data-v-3faef998] {\n  height: 150px;\n}\n.cov-date-monthly > div[data-v-3faef998] {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  vertical-align: middle;\n  color: #fff;\n  height: 150px;\n  float: left;\n  text-align: center;\n  cursor: pointer;\n}\n.cov-date-previous[data-v-3faef998],\n.cov-date-next[data-v-3faef998] {\n  position: relative;\n  width: 20% !important;\n  text-indent: -300px;\n  overflow: hidden;\n  color: #fff;\n}\n.cov-date-caption[data-v-3faef998] {\n  width: 60%;\n  padding: 50px 0!important;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 24px;\n}\n.cov-date-caption span[data-v-3faef998]:hover {\n  color: rgba(255, 255, 255, 0.7);\n}\n.cov-date-previous[data-v-3faef998]:hover,\n.cov-date-next[data-v-3faef998]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.day[data-v-3faef998]:hover {\n  background: #EAEAEA;\n}\n.unavailable[data-v-3faef998]:hover {\n  background: none;\n}\n.checked[data-v-3faef998]:hover {\n  background: #FF4F8E;\n}\n.cov-date-next[data-v-3faef998]::before,\n.cov-date-previous[data-v-3faef998]::before {\n  width: 20px;\n  height: 2px;\n  text-align: center;\n  position: absolute;\n  background: #fff;\n  top: 50%;\n  margin-top: -7px;\n  margin-left: -7px;\n  left: 50%;\n  line-height: 0;\n  content: '';\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.cov-date-next[data-v-3faef998]::after,\n.cov-date-previous[data-v-3faef998]::after {\n  width: 20px;\n  height: 2px;\n  text-align: center;\n  position: absolute;\n  background: #fff;\n  margin-top: 6px;\n  margin-left: -7px;\n  top: 50%;\n  left: 50%;\n  line-height: 0;\n  content: '';\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n.cov-date-previous[data-v-3faef998]::after {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.cov-date-previous[data-v-3faef998]::before {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n.date-item[data-v-3faef998] {\n  text-align: center;\n  font-size: 20px;\n  padding: 10px 0;\n  cursor: pointer;\n}\n.date-item[data-v-3faef998]:hover {\n  background: #e0e0e0;\n}\n.date-list[data-v-3faef998] {\n  overflow: auto;\n  vertical-align: top;\n  padding: 0;\n}\n.cov-vue-date[data-v-3faef998] {\n  display: inline-block;\n  color: #5D5D5D;\n}\n.button-box[data-v-3faef998] {\n  background: #fff;\n  vertical-align: top;\n  height: 50px;\n  line-height: 50px;\n  text-align: right;\n  padding-right: 20px;\n}\n.button-box span[data-v-3faef998] {\n  cursor: pointer;\n  padding: 10px 20px;\n}\n.watch-box[data-v-3faef998] {\n  height: 100%;\n  overflow: hidden;\n}\n.hour-box[data-v-3faef998],\n.min-box[data-v-3faef998] {\n  display: inline-block;\n  width: 50%;\n  text-align: center;\n  height: 100%;\n  overflow: auto;\n  float: left;\n}\n.hour-box ul[data-v-3faef998],\n.min-box ul[data-v-3faef998] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.hour-item[data-v-3faef998],\n.min-item[data-v-3faef998] {\n  padding: 10px;\n  font-size: 36px;\n  cursor: pointer;\n}\n.hour-item[data-v-3faef998]:hover,\n.min-item[data-v-3faef998]:hover {\n  background: #E3E3E3;\n}\n.hour-box .active[data-v-3faef998],\n.min-box .active[data-v-3faef998] {\n  background: #F50057;\n  color: #FFF !important;\n}\n[data-v-3faef998]::-webkit-scrollbar {\n  width: 2px;\n}\n[data-v-3faef998]::-webkit-scrollbar-track {\n  background: #E3E3E3;\n}\n[data-v-3faef998]::-webkit-scrollbar-thumb {\n  background: #C1C1C1;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/fine-uploader/fine-uploader/fine-uploader.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// Fine Uploader 5.15.4 - MIT licensed. http://fineuploader.com
(function(global) {
    var qq = function(element) {
        "use strict";
        return {
            hide: function() {
                element.style.display = "none";
                return this;
            },
            attach: function(type, fn) {
                if (element.addEventListener) {
                    element.addEventListener(type, fn, false);
                } else if (element.attachEvent) {
                    element.attachEvent("on" + type, fn);
                }
                return function() {
                    qq(element).detach(type, fn);
                };
            },
            detach: function(type, fn) {
                if (element.removeEventListener) {
                    element.removeEventListener(type, fn, false);
                } else if (element.attachEvent) {
                    element.detachEvent("on" + type, fn);
                }
                return this;
            },
            contains: function(descendant) {
                if (!descendant) {
                    return false;
                }
                if (element === descendant) {
                    return true;
                }
                if (element.contains) {
                    return element.contains(descendant);
                } else {
                    return !!(descendant.compareDocumentPosition(element) & 8);
                }
            },
            insertBefore: function(elementB) {
                elementB.parentNode.insertBefore(element, elementB);
                return this;
            },
            remove: function() {
                element.parentNode.removeChild(element);
                return this;
            },
            css: function(styles) {
                if (element.style == null) {
                    throw new qq.Error("Can't apply style to node as it is not on the HTMLElement prototype chain!");
                }
                if (styles.opacity != null) {
                    if (typeof element.style.opacity !== "string" && typeof element.filters !== "undefined") {
                        styles.filter = "alpha(opacity=" + Math.round(100 * styles.opacity) + ")";
                    }
                }
                qq.extend(element.style, styles);
                return this;
            },
            hasClass: function(name, considerParent) {
                var re = new RegExp("(^| )" + name + "( |$)");
                return re.test(element.className) || !!(considerParent && re.test(element.parentNode.className));
            },
            addClass: function(name) {
                if (!qq(element).hasClass(name)) {
                    element.className += " " + name;
                }
                return this;
            },
            removeClass: function(name) {
                var re = new RegExp("(^| )" + name + "( |$)");
                element.className = element.className.replace(re, " ").replace(/^\s+|\s+$/g, "");
                return this;
            },
            getByClass: function(className, first) {
                var candidates, result = [];
                if (first && element.querySelector) {
                    return element.querySelector("." + className);
                } else if (element.querySelectorAll) {
                    return element.querySelectorAll("." + className);
                }
                candidates = element.getElementsByTagName("*");
                qq.each(candidates, function(idx, val) {
                    if (qq(val).hasClass(className)) {
                        result.push(val);
                    }
                });
                return first ? result[0] : result;
            },
            getFirstByClass: function(className) {
                return qq(element).getByClass(className, true);
            },
            children: function() {
                var children = [], child = element.firstChild;
                while (child) {
                    if (child.nodeType === 1) {
                        children.push(child);
                    }
                    child = child.nextSibling;
                }
                return children;
            },
            setText: function(text) {
                element.innerText = text;
                element.textContent = text;
                return this;
            },
            clearText: function() {
                return qq(element).setText("");
            },
            hasAttribute: function(attrName) {
                var attrVal;
                if (element.hasAttribute) {
                    if (!element.hasAttribute(attrName)) {
                        return false;
                    }
                    return /^false$/i.exec(element.getAttribute(attrName)) == null;
                } else {
                    attrVal = element[attrName];
                    if (attrVal === undefined) {
                        return false;
                    }
                    return /^false$/i.exec(attrVal) == null;
                }
            }
        };
    };
    (function() {
        "use strict";
        qq.canvasToBlob = function(canvas, mime, quality) {
            return qq.dataUriToBlob(canvas.toDataURL(mime, quality));
        };
        qq.dataUriToBlob = function(dataUri) {
            var arrayBuffer, byteString, createBlob = function(data, mime) {
                var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, blobBuilder = BlobBuilder && new BlobBuilder();
                if (blobBuilder) {
                    blobBuilder.append(data);
                    return blobBuilder.getBlob(mime);
                } else {
                    return new Blob([ data ], {
                        type: mime
                    });
                }
            }, intArray, mimeString;
            if (dataUri.split(",")[0].indexOf("base64") >= 0) {
                byteString = atob(dataUri.split(",")[1]);
            } else {
                byteString = decodeURI(dataUri.split(",")[1]);
            }
            mimeString = dataUri.split(",")[0].split(":")[1].split(";")[0];
            arrayBuffer = new ArrayBuffer(byteString.length);
            intArray = new Uint8Array(arrayBuffer);
            qq.each(byteString, function(idx, character) {
                intArray[idx] = character.charCodeAt(0);
            });
            return createBlob(arrayBuffer, mimeString);
        };
        qq.log = function(message, level) {
            if (window.console) {
                if (!level || level === "info") {
                    window.console.log(message);
                } else {
                    if (window.console[level]) {
                        window.console[level](message);
                    } else {
                        window.console.log("<" + level + "> " + message);
                    }
                }
            }
        };
        qq.isObject = function(variable) {
            return variable && !variable.nodeType && Object.prototype.toString.call(variable) === "[object Object]";
        };
        qq.isFunction = function(variable) {
            return typeof variable === "function";
        };
        qq.isArray = function(value) {
            return Object.prototype.toString.call(value) === "[object Array]" || value && window.ArrayBuffer && value.buffer && value.buffer.constructor === ArrayBuffer;
        };
        qq.isItemList = function(maybeItemList) {
            return Object.prototype.toString.call(maybeItemList) === "[object DataTransferItemList]";
        };
        qq.isNodeList = function(maybeNodeList) {
            return Object.prototype.toString.call(maybeNodeList) === "[object NodeList]" || maybeNodeList.item && maybeNodeList.namedItem;
        };
        qq.isString = function(maybeString) {
            return Object.prototype.toString.call(maybeString) === "[object String]";
        };
        qq.trimStr = function(string) {
            if (String.prototype.trim) {
                return string.trim();
            }
            return string.replace(/^\s+|\s+$/g, "");
        };
        qq.format = function(str) {
            var args = Array.prototype.slice.call(arguments, 1), newStr = str, nextIdxToReplace = newStr.indexOf("{}");
            qq.each(args, function(idx, val) {
                var strBefore = newStr.substring(0, nextIdxToReplace), strAfter = newStr.substring(nextIdxToReplace + 2);
                newStr = strBefore + val + strAfter;
                nextIdxToReplace = newStr.indexOf("{}", nextIdxToReplace + val.length);
                if (nextIdxToReplace < 0) {
                    return false;
                }
            });
            return newStr;
        };
        qq.isFile = function(maybeFile) {
            return window.File && Object.prototype.toString.call(maybeFile) === "[object File]";
        };
        qq.isFileList = function(maybeFileList) {
            return window.FileList && Object.prototype.toString.call(maybeFileList) === "[object FileList]";
        };
        qq.isFileOrInput = function(maybeFileOrInput) {
            return qq.isFile(maybeFileOrInput) || qq.isInput(maybeFileOrInput);
        };
        qq.isInput = function(maybeInput, notFile) {
            var evaluateType = function(type) {
                var normalizedType = type.toLowerCase();
                if (notFile) {
                    return normalizedType !== "file";
                }
                return normalizedType === "file";
            };
            if (window.HTMLInputElement) {
                if (Object.prototype.toString.call(maybeInput) === "[object HTMLInputElement]") {
                    if (maybeInput.type && evaluateType(maybeInput.type)) {
                        return true;
                    }
                }
            }
            if (maybeInput.tagName) {
                if (maybeInput.tagName.toLowerCase() === "input") {
                    if (maybeInput.type && evaluateType(maybeInput.type)) {
                        return true;
                    }
                }
            }
            return false;
        };
        qq.isBlob = function(maybeBlob) {
            if (window.Blob && Object.prototype.toString.call(maybeBlob) === "[object Blob]") {
                return true;
            }
        };
        qq.isXhrUploadSupported = function() {
            var input = document.createElement("input");
            input.type = "file";
            return input.multiple !== undefined && typeof File !== "undefined" && typeof FormData !== "undefined" && typeof qq.createXhrInstance().upload !== "undefined";
        };
        qq.createXhrInstance = function() {
            if (window.XMLHttpRequest) {
                return new XMLHttpRequest();
            }
            try {
                return new ActiveXObject("MSXML2.XMLHTTP.3.0");
            } catch (error) {
                qq.log("Neither XHR or ActiveX are supported!", "error");
                return null;
            }
        };
        qq.isFolderDropSupported = function(dataTransfer) {
            return dataTransfer.items && dataTransfer.items.length > 0 && dataTransfer.items[0].webkitGetAsEntry;
        };
        qq.isFileChunkingSupported = function() {
            return !qq.androidStock() && qq.isXhrUploadSupported() && (File.prototype.slice !== undefined || File.prototype.webkitSlice !== undefined || File.prototype.mozSlice !== undefined);
        };
        qq.sliceBlob = function(fileOrBlob, start, end) {
            var slicer = fileOrBlob.slice || fileOrBlob.mozSlice || fileOrBlob.webkitSlice;
            return slicer.call(fileOrBlob, start, end);
        };
        qq.arrayBufferToHex = function(buffer) {
            var bytesAsHex = "", bytes = new Uint8Array(buffer);
            qq.each(bytes, function(idx, byt) {
                var byteAsHexStr = byt.toString(16);
                if (byteAsHexStr.length < 2) {
                    byteAsHexStr = "0" + byteAsHexStr;
                }
                bytesAsHex += byteAsHexStr;
            });
            return bytesAsHex;
        };
        qq.readBlobToHex = function(blob, startOffset, length) {
            var initialBlob = qq.sliceBlob(blob, startOffset, startOffset + length), fileReader = new FileReader(), promise = new qq.Promise();
            fileReader.onload = function() {
                promise.success(qq.arrayBufferToHex(fileReader.result));
            };
            fileReader.onerror = promise.failure;
            fileReader.readAsArrayBuffer(initialBlob);
            return promise;
        };
        qq.extend = function(first, second, extendNested) {
            qq.each(second, function(prop, val) {
                if (extendNested && qq.isObject(val)) {
                    if (first[prop] === undefined) {
                        first[prop] = {};
                    }
                    qq.extend(first[prop], val, true);
                } else {
                    first[prop] = val;
                }
            });
            return first;
        };
        qq.override = function(target, sourceFn) {
            var super_ = {}, source = sourceFn(super_);
            qq.each(source, function(srcPropName, srcPropVal) {
                if (target[srcPropName] !== undefined) {
                    super_[srcPropName] = target[srcPropName];
                }
                target[srcPropName] = srcPropVal;
            });
            return target;
        };
        qq.indexOf = function(arr, elt, from) {
            if (arr.indexOf) {
                return arr.indexOf(elt, from);
            }
            from = from || 0;
            var len = arr.length;
            if (from < 0) {
                from += len;
            }
            for (;from < len; from += 1) {
                if (arr.hasOwnProperty(from) && arr[from] === elt) {
                    return from;
                }
            }
            return -1;
        };
        qq.getUniqueId = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
                return v.toString(16);
            });
        };
        qq.ie = function() {
            return navigator.userAgent.indexOf("MSIE") !== -1 || navigator.userAgent.indexOf("Trident") !== -1;
        };
        qq.ie7 = function() {
            return navigator.userAgent.indexOf("MSIE 7") !== -1;
        };
        qq.ie8 = function() {
            return navigator.userAgent.indexOf("MSIE 8") !== -1;
        };
        qq.ie10 = function() {
            return navigator.userAgent.indexOf("MSIE 10") !== -1;
        };
        qq.ie11 = function() {
            return qq.ie() && navigator.userAgent.indexOf("rv:11") !== -1;
        };
        qq.edge = function() {
            return navigator.userAgent.indexOf("Edge") >= 0;
        };
        qq.safari = function() {
            return navigator.vendor !== undefined && navigator.vendor.indexOf("Apple") !== -1;
        };
        qq.chrome = function() {
            return navigator.vendor !== undefined && navigator.vendor.indexOf("Google") !== -1;
        };
        qq.opera = function() {
            return navigator.vendor !== undefined && navigator.vendor.indexOf("Opera") !== -1;
        };
        qq.firefox = function() {
            return !qq.edge() && !qq.ie11() && navigator.userAgent.indexOf("Mozilla") !== -1 && navigator.vendor !== undefined && navigator.vendor === "";
        };
        qq.windows = function() {
            return navigator.platform === "Win32";
        };
        qq.android = function() {
            return navigator.userAgent.toLowerCase().indexOf("android") !== -1;
        };
        qq.androidStock = function() {
            return qq.android() && navigator.userAgent.toLowerCase().indexOf("chrome") < 0;
        };
        qq.ios6 = function() {
            return qq.ios() && navigator.userAgent.indexOf(" OS 6_") !== -1;
        };
        qq.ios7 = function() {
            return qq.ios() && navigator.userAgent.indexOf(" OS 7_") !== -1;
        };
        qq.ios8 = function() {
            return qq.ios() && navigator.userAgent.indexOf(" OS 8_") !== -1;
        };
        qq.ios800 = function() {
            return qq.ios() && navigator.userAgent.indexOf(" OS 8_0 ") !== -1;
        };
        qq.ios = function() {
            return navigator.userAgent.indexOf("iPad") !== -1 || navigator.userAgent.indexOf("iPod") !== -1 || navigator.userAgent.indexOf("iPhone") !== -1;
        };
        qq.iosChrome = function() {
            return qq.ios() && navigator.userAgent.indexOf("CriOS") !== -1;
        };
        qq.iosSafari = function() {
            return qq.ios() && !qq.iosChrome() && navigator.userAgent.indexOf("Safari") !== -1;
        };
        qq.iosSafariWebView = function() {
            return qq.ios() && !qq.iosChrome() && !qq.iosSafari();
        };
        qq.preventDefault = function(e) {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        };
        qq.toElement = function() {
            var div = document.createElement("div");
            return function(html) {
                div.innerHTML = html;
                var element = div.firstChild;
                div.removeChild(element);
                return element;
            };
        }();
        qq.each = function(iterableItem, callback) {
            var keyOrIndex, retVal;
            if (iterableItem) {
                if (window.Storage && iterableItem.constructor === window.Storage) {
                    for (keyOrIndex = 0; keyOrIndex < iterableItem.length; keyOrIndex++) {
                        retVal = callback(iterableItem.key(keyOrIndex), iterableItem.getItem(iterableItem.key(keyOrIndex)));
                        if (retVal === false) {
                            break;
                        }
                    }
                } else if (qq.isArray(iterableItem) || qq.isItemList(iterableItem) || qq.isNodeList(iterableItem)) {
                    for (keyOrIndex = 0; keyOrIndex < iterableItem.length; keyOrIndex++) {
                        retVal = callback(keyOrIndex, iterableItem[keyOrIndex]);
                        if (retVal === false) {
                            break;
                        }
                    }
                } else if (qq.isString(iterableItem)) {
                    for (keyOrIndex = 0; keyOrIndex < iterableItem.length; keyOrIndex++) {
                        retVal = callback(keyOrIndex, iterableItem.charAt(keyOrIndex));
                        if (retVal === false) {
                            break;
                        }
                    }
                } else {
                    for (keyOrIndex in iterableItem) {
                        if (Object.prototype.hasOwnProperty.call(iterableItem, keyOrIndex)) {
                            retVal = callback(keyOrIndex, iterableItem[keyOrIndex]);
                            if (retVal === false) {
                                break;
                            }
                        }
                    }
                }
            }
        };
        qq.bind = function(oldFunc, context) {
            if (qq.isFunction(oldFunc)) {
                var args = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var newArgs = qq.extend([], args);
                    if (arguments.length) {
                        newArgs = newArgs.concat(Array.prototype.slice.call(arguments));
                    }
                    return oldFunc.apply(context, newArgs);
                };
            }
            throw new Error("first parameter must be a function!");
        };
        qq.obj2url = function(obj, temp, prefixDone) {
            var uristrings = [], prefix = "&", add = function(nextObj, i) {
                var nextTemp = temp ? /\[\]$/.test(temp) ? temp : temp + "[" + i + "]" : i;
                if (nextTemp !== "undefined" && i !== "undefined") {
                    uristrings.push(typeof nextObj === "object" ? qq.obj2url(nextObj, nextTemp, true) : Object.prototype.toString.call(nextObj) === "[object Function]" ? encodeURIComponent(nextTemp) + "=" + encodeURIComponent(nextObj()) : encodeURIComponent(nextTemp) + "=" + encodeURIComponent(nextObj));
                }
            };
            if (!prefixDone && temp) {
                prefix = /\?/.test(temp) ? /\?$/.test(temp) ? "" : "&" : "?";
                uristrings.push(temp);
                uristrings.push(qq.obj2url(obj));
            } else if (Object.prototype.toString.call(obj) === "[object Array]" && typeof obj !== "undefined") {
                qq.each(obj, function(idx, val) {
                    add(val, idx);
                });
            } else if (typeof obj !== "undefined" && obj !== null && typeof obj === "object") {
                qq.each(obj, function(prop, val) {
                    add(val, prop);
                });
            } else {
                uristrings.push(encodeURIComponent(temp) + "=" + encodeURIComponent(obj));
            }
            if (temp) {
                return uristrings.join(prefix);
            } else {
                return uristrings.join(prefix).replace(/^&/, "").replace(/%20/g, "+");
            }
        };
        qq.obj2FormData = function(obj, formData, arrayKeyName) {
            if (!formData) {
                formData = new FormData();
            }
            qq.each(obj, function(key, val) {
                key = arrayKeyName ? arrayKeyName + "[" + key + "]" : key;
                if (qq.isObject(val)) {
                    qq.obj2FormData(val, formData, key);
                } else if (qq.isFunction(val)) {
                    formData.append(key, val());
                } else {
                    formData.append(key, val);
                }
            });
            return formData;
        };
        qq.obj2Inputs = function(obj, form) {
            var input;
            if (!form) {
                form = document.createElement("form");
            }
            qq.obj2FormData(obj, {
                append: function(key, val) {
                    input = document.createElement("input");
                    input.setAttribute("name", key);
                    input.setAttribute("value", val);
                    form.appendChild(input);
                }
            });
            return form;
        };
        qq.parseJson = function(json) {
            if (window.JSON && qq.isFunction(JSON.parse)) {
                return JSON.parse(json);
            } else {
                return eval("(" + json + ")");
            }
        };
        qq.getExtension = function(filename) {
            var extIdx = filename.lastIndexOf(".") + 1;
            if (extIdx > 0) {
                return filename.substr(extIdx, filename.length - extIdx);
            }
        };
        qq.getFilename = function(blobOrFileInput) {
            if (qq.isInput(blobOrFileInput)) {
                return blobOrFileInput.value.replace(/.*(\/|\\)/, "");
            } else if (qq.isFile(blobOrFileInput)) {
                if (blobOrFileInput.fileName !== null && blobOrFileInput.fileName !== undefined) {
                    return blobOrFileInput.fileName;
                }
            }
            return blobOrFileInput.name;
        };
        qq.DisposeSupport = function() {
            var disposers = [];
            return {
                dispose: function() {
                    var disposer;
                    do {
                        disposer = disposers.shift();
                        if (disposer) {
                            disposer();
                        }
                    } while (disposer);
                },
                attach: function() {
                    var args = arguments;
                    this.addDisposer(qq(args[0]).attach.apply(this, Array.prototype.slice.call(arguments, 1)));
                },
                addDisposer: function(disposeFunction) {
                    disposers.push(disposeFunction);
                }
            };
        };
    })();
    (function() {
        "use strict";
        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return qq;
            }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof module !== "undefined" && module.exports) {
            module.exports = qq;
        } else {
            global.qq = qq;
        }
    })();
    (function() {
        "use strict";
        qq.Error = function(message) {
            this.message = "[Fine Uploader " + qq.version + "] " + message;
        };
        qq.Error.prototype = new Error();
    })();
    qq.version = "5.15.4";
    qq.supportedFeatures = function() {
        "use strict";
        var supportsUploading, supportsUploadingBlobs, supportsFileDrop, supportsAjaxFileUploading, supportsFolderDrop, supportsChunking, supportsResume, supportsUploadViaPaste, supportsUploadCors, supportsDeleteFileXdr, supportsDeleteFileCorsXhr, supportsDeleteFileCors, supportsFolderSelection, supportsImagePreviews, supportsUploadProgress;
        function testSupportsFileInputElement() {
            var supported = true, tempInput;
            try {
                tempInput = document.createElement("input");
                tempInput.type = "file";
                qq(tempInput).hide();
                if (tempInput.disabled) {
                    supported = false;
                }
            } catch (ex) {
                supported = false;
            }
            return supported;
        }
        function isChrome21OrHigher() {
            return (qq.chrome() || qq.opera()) && navigator.userAgent.match(/Chrome\/[2][1-9]|Chrome\/[3-9][0-9]/) !== undefined;
        }
        function isChrome14OrHigher() {
            return (qq.chrome() || qq.opera()) && navigator.userAgent.match(/Chrome\/[1][4-9]|Chrome\/[2-9][0-9]/) !== undefined;
        }
        function isCrossOriginXhrSupported() {
            if (window.XMLHttpRequest) {
                var xhr = qq.createXhrInstance();
                return xhr.withCredentials !== undefined;
            }
            return false;
        }
        function isXdrSupported() {
            return window.XDomainRequest !== undefined;
        }
        function isCrossOriginAjaxSupported() {
            if (isCrossOriginXhrSupported()) {
                return true;
            }
            return isXdrSupported();
        }
        function isFolderSelectionSupported() {
            return document.createElement("input").webkitdirectory !== undefined;
        }
        function isLocalStorageSupported() {
            try {
                return !!window.localStorage && qq.isFunction(window.localStorage.setItem);
            } catch (error) {
                return false;
            }
        }
        function isDragAndDropSupported() {
            var span = document.createElement("span");
            return ("draggable" in span || "ondragstart" in span && "ondrop" in span) && !qq.android() && !qq.ios();
        }
        supportsUploading = testSupportsFileInputElement();
        supportsAjaxFileUploading = supportsUploading && qq.isXhrUploadSupported();
        supportsUploadingBlobs = supportsAjaxFileUploading && !qq.androidStock();
        supportsFileDrop = supportsAjaxFileUploading && isDragAndDropSupported();
        supportsFolderDrop = supportsFileDrop && isChrome21OrHigher();
        supportsChunking = supportsAjaxFileUploading && qq.isFileChunkingSupported();
        supportsResume = supportsAjaxFileUploading && supportsChunking && isLocalStorageSupported();
        supportsUploadViaPaste = supportsAjaxFileUploading && isChrome14OrHigher();
        supportsUploadCors = supportsUploading && (window.postMessage !== undefined || supportsAjaxFileUploading);
        supportsDeleteFileCorsXhr = isCrossOriginXhrSupported();
        supportsDeleteFileXdr = isXdrSupported();
        supportsDeleteFileCors = isCrossOriginAjaxSupported();
        supportsFolderSelection = isFolderSelectionSupported();
        supportsImagePreviews = supportsAjaxFileUploading && window.FileReader !== undefined;
        supportsUploadProgress = function() {
            if (supportsAjaxFileUploading) {
                return !qq.androidStock() && !qq.iosChrome();
            }
            return false;
        }();
        return {
            ajaxUploading: supportsAjaxFileUploading,
            blobUploading: supportsUploadingBlobs,
            canDetermineSize: supportsAjaxFileUploading,
            chunking: supportsChunking,
            deleteFileCors: supportsDeleteFileCors,
            deleteFileCorsXdr: supportsDeleteFileXdr,
            deleteFileCorsXhr: supportsDeleteFileCorsXhr,
            dialogElement: !!window.HTMLDialogElement,
            fileDrop: supportsFileDrop,
            folderDrop: supportsFolderDrop,
            folderSelection: supportsFolderSelection,
            imagePreviews: supportsImagePreviews,
            imageValidation: supportsImagePreviews,
            itemSizeValidation: supportsAjaxFileUploading,
            pause: supportsChunking,
            progressBar: supportsUploadProgress,
            resume: supportsResume,
            scaling: supportsImagePreviews && supportsUploadingBlobs,
            tiffPreviews: qq.safari(),
            unlimitedScaledImageSize: !qq.ios(),
            uploading: supportsUploading,
            uploadCors: supportsUploadCors,
            uploadCustomHeaders: supportsAjaxFileUploading,
            uploadNonMultipart: supportsAjaxFileUploading,
            uploadViaPaste: supportsUploadViaPaste
        };
    }();
    qq.isGenericPromise = function(maybePromise) {
        "use strict";
        return !!(maybePromise && maybePromise.then && qq.isFunction(maybePromise.then));
    };
    qq.Promise = function() {
        "use strict";
        var successArgs, failureArgs, successCallbacks = [], failureCallbacks = [], doneCallbacks = [], state = 0;
        qq.extend(this, {
            then: function(onSuccess, onFailure) {
                if (state === 0) {
                    if (onSuccess) {
                        successCallbacks.push(onSuccess);
                    }
                    if (onFailure) {
                        failureCallbacks.push(onFailure);
                    }
                } else if (state === -1) {
                    onFailure && onFailure.apply(null, failureArgs);
                } else if (onSuccess) {
                    onSuccess.apply(null, successArgs);
                }
                return this;
            },
            done: function(callback) {
                if (state === 0) {
                    doneCallbacks.push(callback);
                } else {
                    callback.apply(null, failureArgs === undefined ? successArgs : failureArgs);
                }
                return this;
            },
            success: function() {
                state = 1;
                successArgs = arguments;
                if (successCallbacks.length) {
                    qq.each(successCallbacks, function(idx, callback) {
                        callback.apply(null, successArgs);
                    });
                }
                if (doneCallbacks.length) {
                    qq.each(doneCallbacks, function(idx, callback) {
                        callback.apply(null, successArgs);
                    });
                }
                return this;
            },
            failure: function() {
                state = -1;
                failureArgs = arguments;
                if (failureCallbacks.length) {
                    qq.each(failureCallbacks, function(idx, callback) {
                        callback.apply(null, failureArgs);
                    });
                }
                if (doneCallbacks.length) {
                    qq.each(doneCallbacks, function(idx, callback) {
                        callback.apply(null, failureArgs);
                    });
                }
                return this;
            }
        });
    };
    qq.BlobProxy = function(referenceBlob, onCreate) {
        "use strict";
        qq.extend(this, {
            referenceBlob: referenceBlob,
            create: function() {
                return onCreate(referenceBlob);
            }
        });
    };
    qq.UploadButton = function(o) {
        "use strict";
        var self = this, disposeSupport = new qq.DisposeSupport(), options = {
            acceptFiles: null,
            element: null,
            focusClass: "qq-upload-button-focus",
            folders: false,
            hoverClass: "qq-upload-button-hover",
            ios8BrowserCrashWorkaround: false,
            multiple: false,
            name: "qqfile",
            onChange: function(input) {},
            title: null
        }, input, buttonId;
        qq.extend(options, o);
        buttonId = qq.getUniqueId();
        function createInput() {
            var input = document.createElement("input");
            input.setAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME, buttonId);
            input.setAttribute("title", options.title);
            self.setMultiple(options.multiple, input);
            if (options.folders && qq.supportedFeatures.folderSelection) {
                input.setAttribute("webkitdirectory", "");
            }
            if (options.acceptFiles) {
                input.setAttribute("accept", options.acceptFiles);
            }
            input.setAttribute("type", "file");
            input.setAttribute("name", options.name);
            qq(input).css({
                position: "absolute",
                right: 0,
                top: 0,
                fontFamily: "Arial",
                fontSize: qq.ie() && !qq.ie8() ? "3500px" : "118px",
                margin: 0,
                padding: 0,
                cursor: "pointer",
                opacity: 0
            });
            !qq.ie7() && qq(input).css({
                height: "100%"
            });
            options.element.appendChild(input);
            disposeSupport.attach(input, "change", function() {
                options.onChange(input);
            });
            disposeSupport.attach(input, "mouseover", function() {
                qq(options.element).addClass(options.hoverClass);
            });
            disposeSupport.attach(input, "mouseout", function() {
                qq(options.element).removeClass(options.hoverClass);
            });
            disposeSupport.attach(input, "focus", function() {
                qq(options.element).addClass(options.focusClass);
            });
            disposeSupport.attach(input, "blur", function() {
                qq(options.element).removeClass(options.focusClass);
            });
            return input;
        }
        qq(options.element).css({
            position: "relative",
            overflow: "hidden",
            direction: "ltr"
        });
        qq.extend(this, {
            getInput: function() {
                return input;
            },
            getButtonId: function() {
                return buttonId;
            },
            setMultiple: function(isMultiple, optInput) {
                var input = optInput || this.getInput();
                if (options.ios8BrowserCrashWorkaround && qq.ios8() && (qq.iosChrome() || qq.iosSafariWebView())) {
                    input.setAttribute("multiple", "");
                } else {
                    if (isMultiple) {
                        input.setAttribute("multiple", "");
                    } else {
                        input.removeAttribute("multiple");
                    }
                }
            },
            setAcceptFiles: function(acceptFiles) {
                if (acceptFiles !== options.acceptFiles) {
                    input.setAttribute("accept", acceptFiles);
                }
            },
            reset: function() {
                if (input.parentNode) {
                    qq(input).remove();
                }
                qq(options.element).removeClass(options.focusClass);
                input = null;
                input = createInput();
            }
        });
        input = createInput();
    };
    qq.UploadButton.BUTTON_ID_ATTR_NAME = "qq-button-id";
    qq.UploadData = function(uploaderProxy) {
        "use strict";
        var data = [], byUuid = {}, byStatus = {}, byProxyGroupId = {}, byBatchId = {};
        function getDataByIds(idOrIds) {
            if (qq.isArray(idOrIds)) {
                var entries = [];
                qq.each(idOrIds, function(idx, id) {
                    entries.push(data[id]);
                });
                return entries;
            }
            return data[idOrIds];
        }
        function getDataByUuids(uuids) {
            if (qq.isArray(uuids)) {
                var entries = [];
                qq.each(uuids, function(idx, uuid) {
                    entries.push(data[byUuid[uuid]]);
                });
                return entries;
            }
            return data[byUuid[uuids]];
        }
        function getDataByStatus(status) {
            var statusResults = [], statuses = [].concat(status);
            qq.each(statuses, function(index, statusEnum) {
                var statusResultIndexes = byStatus[statusEnum];
                if (statusResultIndexes !== undefined) {
                    qq.each(statusResultIndexes, function(i, dataIndex) {
                        statusResults.push(data[dataIndex]);
                    });
                }
            });
            return statusResults;
        }
        qq.extend(this, {
            addFile: function(spec) {
                var status = spec.status || qq.status.SUBMITTING, id = data.push({
                    name: spec.name,
                    originalName: spec.name,
                    uuid: spec.uuid,
                    size: spec.size == null ? -1 : spec.size,
                    status: status
                }) - 1;
                if (spec.batchId) {
                    data[id].batchId = spec.batchId;
                    if (byBatchId[spec.batchId] === undefined) {
                        byBatchId[spec.batchId] = [];
                    }
                    byBatchId[spec.batchId].push(id);
                }
                if (spec.proxyGroupId) {
                    data[id].proxyGroupId = spec.proxyGroupId;
                    if (byProxyGroupId[spec.proxyGroupId] === undefined) {
                        byProxyGroupId[spec.proxyGroupId] = [];
                    }
                    byProxyGroupId[spec.proxyGroupId].push(id);
                }
                data[id].id = id;
                byUuid[spec.uuid] = id;
                if (byStatus[status] === undefined) {
                    byStatus[status] = [];
                }
                byStatus[status].push(id);
                spec.onBeforeStatusChange && spec.onBeforeStatusChange(id);
                uploaderProxy.onStatusChange(id, null, status);
                return id;
            },
            retrieve: function(optionalFilter) {
                if (qq.isObject(optionalFilter) && data.length) {
                    if (optionalFilter.id !== undefined) {
                        return getDataByIds(optionalFilter.id);
                    } else if (optionalFilter.uuid !== undefined) {
                        return getDataByUuids(optionalFilter.uuid);
                    } else if (optionalFilter.status) {
                        return getDataByStatus(optionalFilter.status);
                    }
                } else {
                    return qq.extend([], data, true);
                }
            },
            reset: function() {
                data = [];
                byUuid = {};
                byStatus = {};
                byBatchId = {};
            },
            setStatus: function(id, newStatus) {
                var oldStatus = data[id].status, byStatusOldStatusIndex = qq.indexOf(byStatus[oldStatus], id);
                byStatus[oldStatus].splice(byStatusOldStatusIndex, 1);
                data[id].status = newStatus;
                if (byStatus[newStatus] === undefined) {
                    byStatus[newStatus] = [];
                }
                byStatus[newStatus].push(id);
                uploaderProxy.onStatusChange(id, oldStatus, newStatus);
            },
            uuidChanged: function(id, newUuid) {
                var oldUuid = data[id].uuid;
                data[id].uuid = newUuid;
                byUuid[newUuid] = id;
                delete byUuid[oldUuid];
            },
            updateName: function(id, newName) {
                data[id].name = newName;
            },
            updateSize: function(id, newSize) {
                data[id].size = newSize;
            },
            setParentId: function(targetId, parentId) {
                data[targetId].parentId = parentId;
            },
            getIdsInProxyGroup: function(id) {
                var proxyGroupId = data[id].proxyGroupId;
                if (proxyGroupId) {
                    return byProxyGroupId[proxyGroupId];
                }
                return [];
            },
            getIdsInBatch: function(id) {
                var batchId = data[id].batchId;
                return byBatchId[batchId];
            }
        });
    };
    qq.status = {
        SUBMITTING: "submitting",
        SUBMITTED: "submitted",
        REJECTED: "rejected",
        QUEUED: "queued",
        CANCELED: "canceled",
        PAUSED: "paused",
        UPLOADING: "uploading",
        UPLOAD_RETRYING: "retrying upload",
        UPLOAD_SUCCESSFUL: "upload successful",
        UPLOAD_FAILED: "upload failed",
        DELETE_FAILED: "delete failed",
        DELETING: "deleting",
        DELETED: "deleted"
    };
    (function() {
        "use strict";
        qq.basePublicApi = {
            addBlobs: function(blobDataOrArray, params, endpoint) {
                this.addFiles(blobDataOrArray, params, endpoint);
            },
            addInitialFiles: function(cannedFileList) {
                var self = this;
                qq.each(cannedFileList, function(index, cannedFile) {
                    self._addCannedFile(cannedFile);
                });
            },
            addFiles: function(data, params, endpoint) {
                this._maybeHandleIos8SafariWorkaround();
                var batchId = this._storedIds.length === 0 ? qq.getUniqueId() : this._currentBatchId, processBlob = qq.bind(function(blob) {
                    this._handleNewFile({
                        blob: blob,
                        name: this._options.blobs.defaultName
                    }, batchId, verifiedFiles);
                }, this), processBlobData = qq.bind(function(blobData) {
                    this._handleNewFile(blobData, batchId, verifiedFiles);
                }, this), processCanvas = qq.bind(function(canvas) {
                    var blob = qq.canvasToBlob(canvas);
                    this._handleNewFile({
                        blob: blob,
                        name: this._options.blobs.defaultName + ".png"
                    }, batchId, verifiedFiles);
                }, this), processCanvasData = qq.bind(function(canvasData) {
                    var normalizedQuality = canvasData.quality && canvasData.quality / 100, blob = qq.canvasToBlob(canvasData.canvas, canvasData.type, normalizedQuality);
                    this._handleNewFile({
                        blob: blob,
                        name: canvasData.name
                    }, batchId, verifiedFiles);
                }, this), processFileOrInput = qq.bind(function(fileOrInput) {
                    if (qq.isInput(fileOrInput) && qq.supportedFeatures.ajaxUploading) {
                        var files = Array.prototype.slice.call(fileOrInput.files), self = this;
                        qq.each(files, function(idx, file) {
                            self._handleNewFile(file, batchId, verifiedFiles);
                        });
                    } else {
                        this._handleNewFile(fileOrInput, batchId, verifiedFiles);
                    }
                }, this), normalizeData = function() {
                    if (qq.isFileList(data)) {
                        data = Array.prototype.slice.call(data);
                    }
                    data = [].concat(data);
                }, self = this, verifiedFiles = [];
                this._currentBatchId = batchId;
                if (data) {
                    normalizeData();
                    qq.each(data, function(idx, fileContainer) {
                        if (qq.isFileOrInput(fileContainer)) {
                            processFileOrInput(fileContainer);
                        } else if (qq.isBlob(fileContainer)) {
                            processBlob(fileContainer);
                        } else if (qq.isObject(fileContainer)) {
                            if (fileContainer.blob && fileContainer.name) {
                                processBlobData(fileContainer);
                            } else if (fileContainer.canvas && fileContainer.name) {
                                processCanvasData(fileContainer);
                            }
                        } else if (fileContainer.tagName && fileContainer.tagName.toLowerCase() === "canvas") {
                            processCanvas(fileContainer);
                        } else {
                            self.log(fileContainer + " is not a valid file container!  Ignoring!", "warn");
                        }
                    });
                    this.log("Received " + verifiedFiles.length + " files.");
                    this._prepareItemsForUpload(verifiedFiles, params, endpoint);
                }
            },
            cancel: function(id) {
                this._handler.cancel(id);
            },
            cancelAll: function() {
                var storedIdsCopy = [], self = this;
                qq.extend(storedIdsCopy, this._storedIds);
                qq.each(storedIdsCopy, function(idx, storedFileId) {
                    self.cancel(storedFileId);
                });
                this._handler.cancelAll();
            },
            clearStoredFiles: function() {
                this._storedIds = [];
            },
            continueUpload: function(id) {
                var uploadData = this._uploadData.retrieve({
                    id: id
                });
                if (!qq.supportedFeatures.pause || !this._options.chunking.enabled) {
                    return false;
                }
                if (uploadData.status === qq.status.PAUSED) {
                    this.log(qq.format("Paused file ID {} ({}) will be continued.  Not paused.", id, this.getName(id)));
                    this._uploadFile(id);
                    return true;
                } else {
                    this.log(qq.format("Ignoring continue for file ID {} ({}).  Not paused.", id, this.getName(id)), "error");
                }
                return false;
            },
            deleteFile: function(id) {
                return this._onSubmitDelete(id);
            },
            doesExist: function(fileOrBlobId) {
                return this._handler.isValid(fileOrBlobId);
            },
            drawThumbnail: function(fileId, imgOrCanvas, maxSize, fromServer, customResizeFunction) {
                var promiseToReturn = new qq.Promise(), fileOrUrl, options;
                if (this._imageGenerator) {
                    fileOrUrl = this._thumbnailUrls[fileId];
                    options = {
                        customResizeFunction: customResizeFunction,
                        maxSize: maxSize > 0 ? maxSize : null,
                        scale: maxSize > 0
                    };
                    if (!fromServer && qq.supportedFeatures.imagePreviews) {
                        fileOrUrl = this.getFile(fileId);
                    }
                    if (fileOrUrl == null) {
                        promiseToReturn.failure({
                            container: imgOrCanvas,
                            error: "File or URL not found."
                        });
                    } else {
                        this._imageGenerator.generate(fileOrUrl, imgOrCanvas, options).then(function success(modifiedContainer) {
                            promiseToReturn.success(modifiedContainer);
                        }, function failure(container, reason) {
                            promiseToReturn.failure({
                                container: container,
                                error: reason || "Problem generating thumbnail"
                            });
                        });
                    }
                } else {
                    promiseToReturn.failure({
                        container: imgOrCanvas,
                        error: "Missing image generator module"
                    });
                }
                return promiseToReturn;
            },
            getButton: function(fileId) {
                return this._getButton(this._buttonIdsForFileIds[fileId]);
            },
            getEndpoint: function(fileId) {
                return this._endpointStore.get(fileId);
            },
            getFile: function(fileOrBlobId) {
                return this._handler.getFile(fileOrBlobId) || null;
            },
            getInProgress: function() {
                return this._uploadData.retrieve({
                    status: [ qq.status.UPLOADING, qq.status.UPLOAD_RETRYING, qq.status.QUEUED ]
                }).length;
            },
            getName: function(id) {
                return this._uploadData.retrieve({
                    id: id
                }).name;
            },
            getParentId: function(id) {
                var uploadDataEntry = this.getUploads({
                    id: id
                }), parentId = null;
                if (uploadDataEntry) {
                    if (uploadDataEntry.parentId !== undefined) {
                        parentId = uploadDataEntry.parentId;
                    }
                }
                return parentId;
            },
            getResumableFilesData: function() {
                return this._handler.getResumableFilesData();
            },
            getSize: function(id) {
                return this._uploadData.retrieve({
                    id: id
                }).size;
            },
            getNetUploads: function() {
                return this._netUploaded;
            },
            getRemainingAllowedItems: function() {
                var allowedItems = this._currentItemLimit;
                if (allowedItems > 0) {
                    return allowedItems - this._netUploadedOrQueued;
                }
                return null;
            },
            getUploads: function(optionalFilter) {
                return this._uploadData.retrieve(optionalFilter);
            },
            getUuid: function(id) {
                return this._uploadData.retrieve({
                    id: id
                }).uuid;
            },
            log: function(str, level) {
                if (this._options.debug && (!level || level === "info")) {
                    qq.log("[Fine Uploader " + qq.version + "] " + str);
                } else if (level && level !== "info") {
                    qq.log("[Fine Uploader " + qq.version + "] " + str, level);
                }
            },
            pauseUpload: function(id) {
                var uploadData = this._uploadData.retrieve({
                    id: id
                });
                if (!qq.supportedFeatures.pause || !this._options.chunking.enabled) {
                    return false;
                }
                if (qq.indexOf([ qq.status.UPLOADING, qq.status.UPLOAD_RETRYING ], uploadData.status) >= 0) {
                    if (this._handler.pause(id)) {
                        this._uploadData.setStatus(id, qq.status.PAUSED);
                        return true;
                    } else {
                        this.log(qq.format("Unable to pause file ID {} ({}).", id, this.getName(id)), "error");
                    }
                } else {
                    this.log(qq.format("Ignoring pause for file ID {} ({}).  Not in progress.", id, this.getName(id)), "error");
                }
                return false;
            },
            removeFileRef: function(id) {
                this._handler.expunge(id);
            },
            reset: function() {
                this.log("Resetting uploader...");
                this._handler.reset();
                this._storedIds = [];
                this._autoRetries = [];
                this._retryTimeouts = [];
                this._preventRetries = [];
                this._thumbnailUrls = [];
                qq.each(this._buttons, function(idx, button) {
                    button.reset();
                });
                this._paramsStore.reset();
                this._endpointStore.reset();
                this._netUploadedOrQueued = 0;
                this._netUploaded = 0;
                this._uploadData.reset();
                this._buttonIdsForFileIds = [];
                this._pasteHandler && this._pasteHandler.reset();
                this._options.session.refreshOnReset && this._refreshSessionData();
                this._succeededSinceLastAllComplete = [];
                this._failedSinceLastAllComplete = [];
                this._totalProgress && this._totalProgress.reset();
            },
            retry: function(id) {
                return this._manualRetry(id);
            },
            scaleImage: function(id, specs) {
                var self = this;
                return qq.Scaler.prototype.scaleImage(id, specs, {
                    log: qq.bind(self.log, self),
                    getFile: qq.bind(self.getFile, self),
                    uploadData: self._uploadData
                });
            },
            setCustomHeaders: function(headers, id) {
                this._customHeadersStore.set(headers, id);
            },
            setDeleteFileCustomHeaders: function(headers, id) {
                this._deleteFileCustomHeadersStore.set(headers, id);
            },
            setDeleteFileEndpoint: function(endpoint, id) {
                this._deleteFileEndpointStore.set(endpoint, id);
            },
            setDeleteFileParams: function(params, id) {
                this._deleteFileParamsStore.set(params, id);
            },
            setEndpoint: function(endpoint, id) {
                this._endpointStore.set(endpoint, id);
            },
            setForm: function(elementOrId) {
                this._updateFormSupportAndParams(elementOrId);
            },
            setItemLimit: function(newItemLimit) {
                this._currentItemLimit = newItemLimit;
            },
            setName: function(id, newName) {
                this._uploadData.updateName(id, newName);
            },
            setParams: function(params, id) {
                this._paramsStore.set(params, id);
            },
            setUuid: function(id, newUuid) {
                return this._uploadData.uuidChanged(id, newUuid);
            },
            setStatus: function(id, newStatus) {
                var fileRecord = this.getUploads({
                    id: id
                });
                if (!fileRecord) {
                    throw new qq.Error(id + " is not a valid file ID.");
                }
                switch (newStatus) {
                  case qq.status.DELETED:
                    this._onDeleteComplete(id, null, false);
                    break;

                  case qq.status.DELETE_FAILED:
                    this._onDeleteComplete(id, null, true);
                    break;

                  default:
                    var errorMessage = "Method setStatus called on '" + name + "' not implemented yet for " + newStatus;
                    this.log(errorMessage);
                    throw new qq.Error(errorMessage);
                }
            },
            uploadStoredFiles: function() {
                if (this._storedIds.length === 0) {
                    this._itemError("noFilesError");
                } else {
                    this._uploadStoredFiles();
                }
            }
        };
        qq.basePrivateApi = {
            _addCannedFile: function(sessionData) {
                var self = this;
                return this._uploadData.addFile({
                    uuid: sessionData.uuid,
                    name: sessionData.name,
                    size: sessionData.size,
                    status: qq.status.UPLOAD_SUCCESSFUL,
                    onBeforeStatusChange: function(id) {
                        sessionData.deleteFileEndpoint && self.setDeleteFileEndpoint(sessionData.deleteFileEndpoint, id);
                        sessionData.deleteFileParams && self.setDeleteFileParams(sessionData.deleteFileParams, id);
                        if (sessionData.thumbnailUrl) {
                            self._thumbnailUrls[id] = sessionData.thumbnailUrl;
                        }
                        self._netUploaded++;
                        self._netUploadedOrQueued++;
                    }
                });
            },
            _annotateWithButtonId: function(file, associatedInput) {
                if (qq.isFile(file)) {
                    file.qqButtonId = this._getButtonId(associatedInput);
                }
            },
            _batchError: function(message) {
                this._options.callbacks.onError(null, null, message, undefined);
            },
            _createDeleteHandler: function() {
                var self = this;
                return new qq.DeleteFileAjaxRequester({
                    method: this._options.deleteFile.method.toUpperCase(),
                    maxConnections: this._options.maxConnections,
                    uuidParamName: this._options.request.uuidName,
                    customHeaders: this._deleteFileCustomHeadersStore,
                    paramsStore: this._deleteFileParamsStore,
                    endpointStore: this._deleteFileEndpointStore,
                    cors: this._options.cors,
                    log: qq.bind(self.log, self),
                    onDelete: function(id) {
                        self._onDelete(id);
                        self._options.callbacks.onDelete(id);
                    },
                    onDeleteComplete: function(id, xhrOrXdr, isError) {
                        self._onDeleteComplete(id, xhrOrXdr, isError);
                        self._options.callbacks.onDeleteComplete(id, xhrOrXdr, isError);
                    }
                });
            },
            _createPasteHandler: function() {
                var self = this;
                return new qq.PasteSupport({
                    targetElement: this._options.paste.targetElement,
                    callbacks: {
                        log: qq.bind(self.log, self),
                        pasteReceived: function(blob) {
                            self._handleCheckedCallback({
                                name: "onPasteReceived",
                                callback: qq.bind(self._options.callbacks.onPasteReceived, self, blob),
                                onSuccess: qq.bind(self._handlePasteSuccess, self, blob),
                                identifier: "pasted image"
                            });
                        }
                    }
                });
            },
            _createStore: function(initialValue, _readOnlyValues_) {
                var store = {}, catchall = initialValue, perIdReadOnlyValues = {}, readOnlyValues = _readOnlyValues_, copy = function(orig) {
                    if (qq.isObject(orig)) {
                        return qq.extend({}, orig);
                    }
                    return orig;
                }, getReadOnlyValues = function() {
                    if (qq.isFunction(readOnlyValues)) {
                        return readOnlyValues();
                    }
                    return readOnlyValues;
                }, includeReadOnlyValues = function(id, existing) {
                    if (readOnlyValues && qq.isObject(existing)) {
                        qq.extend(existing, getReadOnlyValues());
                    }
                    if (perIdReadOnlyValues[id]) {
                        qq.extend(existing, perIdReadOnlyValues[id]);
                    }
                };
                return {
                    set: function(val, id) {
                        if (id == null) {
                            store = {};
                            catchall = copy(val);
                        } else {
                            store[id] = copy(val);
                        }
                    },
                    get: function(id) {
                        var values;
                        if (id != null && store[id]) {
                            values = store[id];
                        } else {
                            values = copy(catchall);
                        }
                        includeReadOnlyValues(id, values);
                        return copy(values);
                    },
                    addReadOnly: function(id, values) {
                        if (qq.isObject(store)) {
                            if (id === null) {
                                if (qq.isFunction(values)) {
                                    readOnlyValues = values;
                                } else {
                                    readOnlyValues = readOnlyValues || {};
                                    qq.extend(readOnlyValues, values);
                                }
                            } else {
                                perIdReadOnlyValues[id] = perIdReadOnlyValues[id] || {};
                                qq.extend(perIdReadOnlyValues[id], values);
                            }
                        }
                    },
                    remove: function(fileId) {
                        return delete store[fileId];
                    },
                    reset: function() {
                        store = {};
                        perIdReadOnlyValues = {};
                        catchall = initialValue;
                    }
                };
            },
            _createUploadDataTracker: function() {
                var self = this;
                return new qq.UploadData({
                    getName: function(id) {
                        return self.getName(id);
                    },
                    getUuid: function(id) {
                        return self.getUuid(id);
                    },
                    getSize: function(id) {
                        return self.getSize(id);
                    },
                    onStatusChange: function(id, oldStatus, newStatus) {
                        self._onUploadStatusChange(id, oldStatus, newStatus);
                        self._options.callbacks.onStatusChange(id, oldStatus, newStatus);
                        self._maybeAllComplete(id, newStatus);
                        if (self._totalProgress) {
                            setTimeout(function() {
                                self._totalProgress.onStatusChange(id, oldStatus, newStatus);
                            }, 0);
                        }
                    }
                });
            },
            _createUploadButton: function(spec) {
                var self = this, acceptFiles = spec.accept || this._options.validation.acceptFiles, allowedExtensions = spec.allowedExtensions || this._options.validation.allowedExtensions, button;
                function allowMultiple() {
                    if (qq.supportedFeatures.ajaxUploading) {
                        if (self._options.workarounds.iosEmptyVideos && qq.ios() && !qq.ios6() && self._isAllowedExtension(allowedExtensions, ".mov")) {
                            return false;
                        }
                        if (spec.multiple === undefined) {
                            return self._options.multiple;
                        }
                        return spec.multiple;
                    }
                    return false;
                }
                button = new qq.UploadButton({
                    acceptFiles: acceptFiles,
                    element: spec.element,
                    focusClass: this._options.classes.buttonFocus,
                    folders: spec.folders,
                    hoverClass: this._options.classes.buttonHover,
                    ios8BrowserCrashWorkaround: this._options.workarounds.ios8BrowserCrash,
                    multiple: allowMultiple(),
                    name: this._options.request.inputName,
                    onChange: function(input) {
                        self._onInputChange(input);
                    },
                    title: spec.title == null ? this._options.text.fileInputTitle : spec.title
                });
                this._disposeSupport.addDisposer(function() {
                    button.dispose();
                });
                self._buttons.push(button);
                return button;
            },
            _createUploadHandler: function(additionalOptions, namespace) {
                var self = this, lastOnProgress = {}, options = {
                    debug: this._options.debug,
                    maxConnections: this._options.maxConnections,
                    cors: this._options.cors,
                    paramsStore: this._paramsStore,
                    endpointStore: this._endpointStore,
                    chunking: this._options.chunking,
                    resume: this._options.resume,
                    blobs: this._options.blobs,
                    log: qq.bind(self.log, self),
                    preventRetryParam: this._options.retry.preventRetryResponseProperty,
                    onProgress: function(id, name, loaded, total) {
                        if (loaded < 0 || total < 0) {
                            return;
                        }
                        if (lastOnProgress[id]) {
                            if (lastOnProgress[id].loaded !== loaded || lastOnProgress[id].total !== total) {
                                self._onProgress(id, name, loaded, total);
                                self._options.callbacks.onProgress(id, name, loaded, total);
                            }
                        } else {
                            self._onProgress(id, name, loaded, total);
                            self._options.callbacks.onProgress(id, name, loaded, total);
                        }
                        lastOnProgress[id] = {
                            loaded: loaded,
                            total: total
                        };
                    },
                    onComplete: function(id, name, result, xhr) {
                        delete lastOnProgress[id];
                        var status = self.getUploads({
                            id: id
                        }).status, retVal;
                        if (status === qq.status.UPLOAD_SUCCESSFUL || status === qq.status.UPLOAD_FAILED) {
                            return;
                        }
                        retVal = self._onComplete(id, name, result, xhr);
                        if (retVal instanceof qq.Promise) {
                            retVal.done(function() {
                                self._options.callbacks.onComplete(id, name, result, xhr);
                            });
                        } else {
                            self._options.callbacks.onComplete(id, name, result, xhr);
                        }
                    },
                    onCancel: function(id, name, cancelFinalizationEffort) {
                        var promise = new qq.Promise();
                        self._handleCheckedCallback({
                            name: "onCancel",
                            callback: qq.bind(self._options.callbacks.onCancel, self, id, name),
                            onFailure: promise.failure,
                            onSuccess: function() {
                                cancelFinalizationEffort.then(function() {
                                    self._onCancel(id, name);
                                });
                                promise.success();
                            },
                            identifier: id
                        });
                        return promise;
                    },
                    onUploadPrep: qq.bind(this._onUploadPrep, this),
                    onUpload: function(id, name) {
                        self._onUpload(id, name);
                        self._options.callbacks.onUpload(id, name);
                    },
                    onUploadChunk: function(id, name, chunkData) {
                        self._onUploadChunk(id, chunkData);
                        self._options.callbacks.onUploadChunk(id, name, chunkData);
                    },
                    onUploadChunkSuccess: function(id, chunkData, result, xhr) {
                        self._options.callbacks.onUploadChunkSuccess.apply(self, arguments);
                    },
                    onResume: function(id, name, chunkData) {
                        return self._options.callbacks.onResume(id, name, chunkData);
                    },
                    onAutoRetry: function(id, name, responseJSON, xhr) {
                        return self._onAutoRetry.apply(self, arguments);
                    },
                    onUuidChanged: function(id, newUuid) {
                        self.log("Server requested UUID change from '" + self.getUuid(id) + "' to '" + newUuid + "'");
                        self.setUuid(id, newUuid);
                    },
                    getName: qq.bind(self.getName, self),
                    getUuid: qq.bind(self.getUuid, self),
                    getSize: qq.bind(self.getSize, self),
                    setSize: qq.bind(self._setSize, self),
                    getDataByUuid: function(uuid) {
                        return self.getUploads({
                            uuid: uuid
                        });
                    },
                    isQueued: function(id) {
                        var status = self.getUploads({
                            id: id
                        }).status;
                        return status === qq.status.QUEUED || status === qq.status.SUBMITTED || status === qq.status.UPLOAD_RETRYING || status === qq.status.PAUSED;
                    },
                    getIdsInProxyGroup: self._uploadData.getIdsInProxyGroup,
                    getIdsInBatch: self._uploadData.getIdsInBatch
                };
                qq.each(this._options.request, function(prop, val) {
                    options[prop] = val;
                });
                options.customHeaders = this._customHeadersStore;
                if (additionalOptions) {
                    qq.each(additionalOptions, function(key, val) {
                        options[key] = val;
                    });
                }
                return new qq.UploadHandlerController(options, namespace);
            },
            _fileOrBlobRejected: function(id) {
                this._netUploadedOrQueued--;
                this._uploadData.setStatus(id, qq.status.REJECTED);
            },
            _formatSize: function(bytes) {
                if (bytes === 0) {
                    return bytes + this._options.text.sizeSymbols[0];
                }
                var i = -1;
                do {
                    bytes = bytes / 1e3;
                    i++;
                } while (bytes > 999);
                return Math.max(bytes, .1).toFixed(1) + this._options.text.sizeSymbols[i];
            },
            _generateExtraButtonSpecs: function() {
                var self = this;
                this._extraButtonSpecs = {};
                qq.each(this._options.extraButtons, function(idx, extraButtonOptionEntry) {
                    var multiple = extraButtonOptionEntry.multiple, validation = qq.extend({}, self._options.validation, true), extraButtonSpec = qq.extend({}, extraButtonOptionEntry);
                    if (multiple === undefined) {
                        multiple = self._options.multiple;
                    }
                    if (extraButtonSpec.validation) {
                        qq.extend(validation, extraButtonOptionEntry.validation, true);
                    }
                    qq.extend(extraButtonSpec, {
                        multiple: multiple,
                        validation: validation
                    }, true);
                    self._initExtraButton(extraButtonSpec);
                });
            },
            _getButton: function(buttonId) {
                var extraButtonsSpec = this._extraButtonSpecs[buttonId];
                if (extraButtonsSpec) {
                    return extraButtonsSpec.element;
                } else if (buttonId === this._defaultButtonId) {
                    return this._options.button;
                }
            },
            _getButtonId: function(buttonOrFileInputOrFile) {
                var inputs, fileInput, fileBlobOrInput = buttonOrFileInputOrFile;
                if (fileBlobOrInput instanceof qq.BlobProxy) {
                    fileBlobOrInput = fileBlobOrInput.referenceBlob;
                }
                if (fileBlobOrInput && !qq.isBlob(fileBlobOrInput)) {
                    if (qq.isFile(fileBlobOrInput)) {
                        return fileBlobOrInput.qqButtonId;
                    } else if (fileBlobOrInput.tagName.toLowerCase() === "input" && fileBlobOrInput.type.toLowerCase() === "file") {
                        return fileBlobOrInput.getAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME);
                    }
                    inputs = fileBlobOrInput.getElementsByTagName("input");
                    qq.each(inputs, function(idx, input) {
                        if (input.getAttribute("type") === "file") {
                            fileInput = input;
                            return false;
                        }
                    });
                    if (fileInput) {
                        return fileInput.getAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME);
                    }
                }
            },
            _getNotFinished: function() {
                return this._uploadData.retrieve({
                    status: [ qq.status.UPLOADING, qq.status.UPLOAD_RETRYING, qq.status.QUEUED, qq.status.SUBMITTING, qq.status.SUBMITTED, qq.status.PAUSED ]
                }).length;
            },
            _getValidationBase: function(buttonId) {
                var extraButtonSpec = this._extraButtonSpecs[buttonId];
                return extraButtonSpec ? extraButtonSpec.validation : this._options.validation;
            },
            _getValidationDescriptor: function(fileWrapper) {
                if (fileWrapper.file instanceof qq.BlobProxy) {
                    return {
                        name: qq.getFilename(fileWrapper.file.referenceBlob),
                        size: fileWrapper.file.referenceBlob.size
                    };
                }
                return {
                    name: this.getUploads({
                        id: fileWrapper.id
                    }).name,
                    size: this.getUploads({
                        id: fileWrapper.id
                    }).size
                };
            },
            _getValidationDescriptors: function(fileWrappers) {
                var self = this, fileDescriptors = [];
                qq.each(fileWrappers, function(idx, fileWrapper) {
                    fileDescriptors.push(self._getValidationDescriptor(fileWrapper));
                });
                return fileDescriptors;
            },
            _handleCameraAccess: function() {
                if (this._options.camera.ios && qq.ios()) {
                    var acceptIosCamera = "image/*;capture=camera", button = this._options.camera.button, buttonId = button ? this._getButtonId(button) : this._defaultButtonId, optionRoot = this._options;
                    if (buttonId && buttonId !== this._defaultButtonId) {
                        optionRoot = this._extraButtonSpecs[buttonId];
                    }
                    optionRoot.multiple = false;
                    if (optionRoot.validation.acceptFiles === null) {
                        optionRoot.validation.acceptFiles = acceptIosCamera;
                    } else {
                        optionRoot.validation.acceptFiles += "," + acceptIosCamera;
                    }
                    qq.each(this._buttons, function(idx, button) {
                        if (button.getButtonId() === buttonId) {
                            button.setMultiple(optionRoot.multiple);
                            button.setAcceptFiles(optionRoot.acceptFiles);
                            return false;
                        }
                    });
                }
            },
            _handleCheckedCallback: function(details) {
                var self = this, callbackRetVal = details.callback();
                if (qq.isGenericPromise(callbackRetVal)) {
                    this.log(details.name + " - waiting for " + details.name + " promise to be fulfilled for " + details.identifier);
                    return callbackRetVal.then(function(successParam) {
                        self.log(details.name + " promise success for " + details.identifier);
                        details.onSuccess(successParam);
                    }, function() {
                        if (details.onFailure) {
                            self.log(details.name + " promise failure for " + details.identifier);
                            details.onFailure();
                        } else {
                            self.log(details.name + " promise failure for " + details.identifier);
                        }
                    });
                }
                if (callbackRetVal !== false) {
                    details.onSuccess(callbackRetVal);
                } else {
                    if (details.onFailure) {
                        this.log(details.name + " - return value was 'false' for " + details.identifier + ".  Invoking failure callback.");
                        details.onFailure();
                    } else {
                        this.log(details.name + " - return value was 'false' for " + details.identifier + ".  Will not proceed.");
                    }
                }
                return callbackRetVal;
            },
            _handleNewFile: function(file, batchId, newFileWrapperList) {
                var self = this, uuid = qq.getUniqueId(), size = -1, name = qq.getFilename(file), actualFile = file.blob || file, handler = this._customNewFileHandler ? this._customNewFileHandler : qq.bind(self._handleNewFileGeneric, self);
                if (!qq.isInput(actualFile) && actualFile.size >= 0) {
                    size = actualFile.size;
                }
                handler(actualFile, name, uuid, size, newFileWrapperList, batchId, this._options.request.uuidName, {
                    uploadData: self._uploadData,
                    paramsStore: self._paramsStore,
                    addFileToHandler: function(id, file) {
                        self._handler.add(id, file);
                        self._netUploadedOrQueued++;
                        self._trackButton(id);
                    }
                });
            },
            _handleNewFileGeneric: function(file, name, uuid, size, fileList, batchId) {
                var id = this._uploadData.addFile({
                    uuid: uuid,
                    name: name,
                    size: size,
                    batchId: batchId
                });
                this._handler.add(id, file);
                this._trackButton(id);
                this._netUploadedOrQueued++;
                fileList.push({
                    id: id,
                    file: file
                });
            },
            _handlePasteSuccess: function(blob, extSuppliedName) {
                var extension = blob.type.split("/")[1], name = extSuppliedName;
                if (name == null) {
                    name = this._options.paste.defaultName;
                }
                name += "." + extension;
                this.addFiles({
                    name: name,
                    blob: blob
                });
            },
            _handleDeleteSuccess: function(id) {
                if (this.getUploads({
                    id: id
                }).status !== qq.status.DELETED) {
                    var name = this.getName(id);
                    this._netUploadedOrQueued--;
                    this._netUploaded--;
                    this._handler.expunge(id);
                    this._uploadData.setStatus(id, qq.status.DELETED);
                    this.log("Delete request for '" + name + "' has succeeded.");
                }
            },
            _handleDeleteFailed: function(id, xhrOrXdr) {
                var name = this.getName(id);
                this._uploadData.setStatus(id, qq.status.DELETE_FAILED);
                this.log("Delete request for '" + name + "' has failed.", "error");
                if (!xhrOrXdr || xhrOrXdr.withCredentials === undefined) {
                    this._options.callbacks.onError(id, name, "Delete request failed", xhrOrXdr);
                } else {
                    this._options.callbacks.onError(id, name, "Delete request failed with response code " + xhrOrXdr.status, xhrOrXdr);
                }
            },
            _initExtraButton: function(spec) {
                var button = this._createUploadButton({
                    accept: spec.validation.acceptFiles,
                    allowedExtensions: spec.validation.allowedExtensions,
                    element: spec.element,
                    folders: spec.folders,
                    multiple: spec.multiple,
                    title: spec.fileInputTitle
                });
                this._extraButtonSpecs[button.getButtonId()] = spec;
            },
            _initFormSupportAndParams: function() {
                this._formSupport = qq.FormSupport && new qq.FormSupport(this._options.form, qq.bind(this.uploadStoredFiles, this), qq.bind(this.log, this));
                if (this._formSupport && this._formSupport.attachedToForm) {
                    this._paramsStore = this._createStore(this._options.request.params, this._formSupport.getFormInputsAsObject);
                    this._options.autoUpload = this._formSupport.newAutoUpload;
                    if (this._formSupport.newEndpoint) {
                        this._options.request.endpoint = this._formSupport.newEndpoint;
                    }
                } else {
                    this._paramsStore = this._createStore(this._options.request.params);
                }
            },
            _isDeletePossible: function() {
                if (!qq.DeleteFileAjaxRequester || !this._options.deleteFile.enabled) {
                    return false;
                }
                if (this._options.cors.expected) {
                    if (qq.supportedFeatures.deleteFileCorsXhr) {
                        return true;
                    }
                    if (qq.supportedFeatures.deleteFileCorsXdr && this._options.cors.allowXdr) {
                        return true;
                    }
                    return false;
                }
                return true;
            },
            _isAllowedExtension: function(allowed, fileName) {
                var valid = false;
                if (!allowed.length) {
                    return true;
                }
                qq.each(allowed, function(idx, allowedExt) {
                    if (qq.isString(allowedExt)) {
                        var extRegex = new RegExp("\\." + allowedExt + "$", "i");
                        if (fileName.match(extRegex) != null) {
                            valid = true;
                            return false;
                        }
                    }
                });
                return valid;
            },
            _itemError: function(code, maybeNameOrNames, item) {
                var message = this._options.messages[code], allowedExtensions = [], names = [].concat(maybeNameOrNames), name = names[0], buttonId = this._getButtonId(item), validationBase = this._getValidationBase(buttonId), extensionsForMessage, placeholderMatch;
                function r(name, replacement) {
                    message = message.replace(name, replacement);
                }
                qq.each(validationBase.allowedExtensions, function(idx, allowedExtension) {
                    if (qq.isString(allowedExtension)) {
                        allowedExtensions.push(allowedExtension);
                    }
                });
                extensionsForMessage = allowedExtensions.join(", ").toLowerCase();
                r("{file}", this._options.formatFileName(name));
                r("{extensions}", extensionsForMessage);
                r("{sizeLimit}", this._formatSize(validationBase.sizeLimit));
                r("{minSizeLimit}", this._formatSize(validationBase.minSizeLimit));
                placeholderMatch = message.match(/(\{\w+\})/g);
                if (placeholderMatch !== null) {
                    qq.each(placeholderMatch, function(idx, placeholder) {
                        r(placeholder, names[idx]);
                    });
                }
                this._options.callbacks.onError(null, name, message, undefined);
                return message;
            },
            _manualRetry: function(id, callback) {
                if (this._onBeforeManualRetry(id)) {
                    this._netUploadedOrQueued++;
                    this._uploadData.setStatus(id, qq.status.UPLOAD_RETRYING);
                    if (callback) {
                        callback(id);
                    } else {
                        this._handler.retry(id);
                    }
                    return true;
                }
            },
            _maybeAllComplete: function(id, status) {
                var self = this, notFinished = this._getNotFinished();
                if (status === qq.status.UPLOAD_SUCCESSFUL) {
                    this._succeededSinceLastAllComplete.push(id);
                } else if (status === qq.status.UPLOAD_FAILED) {
                    this._failedSinceLastAllComplete.push(id);
                }
                if (notFinished === 0 && (this._succeededSinceLastAllComplete.length || this._failedSinceLastAllComplete.length)) {
                    setTimeout(function() {
                        self._onAllComplete(self._succeededSinceLastAllComplete, self._failedSinceLastAllComplete);
                    }, 0);
                }
            },
            _maybeHandleIos8SafariWorkaround: function() {
                var self = this;
                if (this._options.workarounds.ios8SafariUploads && qq.ios800() && qq.iosSafari()) {
                    setTimeout(function() {
                        window.alert(self._options.messages.unsupportedBrowserIos8Safari);
                    }, 0);
                    throw new qq.Error(this._options.messages.unsupportedBrowserIos8Safari);
                }
            },
            _maybeParseAndSendUploadError: function(id, name, response, xhr) {
                if (!response.success) {
                    if (xhr && xhr.status !== 200 && !response.error) {
                        this._options.callbacks.onError(id, name, "XHR returned response code " + xhr.status, xhr);
                    } else {
                        var errorReason = response.error ? response.error : this._options.text.defaultResponseError;
                        this._options.callbacks.onError(id, name, errorReason, xhr);
                    }
                }
            },
            _maybeProcessNextItemAfterOnValidateCallback: function(validItem, items, index, params, endpoint) {
                var self = this;
                if (items.length > index) {
                    if (validItem || !this._options.validation.stopOnFirstInvalidFile) {
                        setTimeout(function() {
                            var validationDescriptor = self._getValidationDescriptor(items[index]), buttonId = self._getButtonId(items[index].file), button = self._getButton(buttonId);
                            self._handleCheckedCallback({
                                name: "onValidate",
                                callback: qq.bind(self._options.callbacks.onValidate, self, validationDescriptor, button),
                                onSuccess: qq.bind(self._onValidateCallbackSuccess, self, items, index, params, endpoint),
                                onFailure: qq.bind(self._onValidateCallbackFailure, self, items, index, params, endpoint),
                                identifier: "Item '" + validationDescriptor.name + "', size: " + validationDescriptor.size
                            });
                        }, 0);
                    } else if (!validItem) {
                        for (;index < items.length; index++) {
                            self._fileOrBlobRejected(items[index].id);
                        }
                    }
                }
            },
            _onAllComplete: function(successful, failed) {
                this._totalProgress && this._totalProgress.onAllComplete(successful, failed, this._preventRetries);
                this._options.callbacks.onAllComplete(qq.extend([], successful), qq.extend([], failed));
                this._succeededSinceLastAllComplete = [];
                this._failedSinceLastAllComplete = [];
            },
            _onAutoRetry: function(id, name, responseJSON, xhr, callback) {
                var self = this;
                self._preventRetries[id] = responseJSON[self._options.retry.preventRetryResponseProperty];
                if (self._shouldAutoRetry(id, name, responseJSON)) {
                    var retryWaitPeriod = self._options.retry.autoAttemptDelay * 1e3;
                    self._maybeParseAndSendUploadError.apply(self, arguments);
                    self._options.callbacks.onAutoRetry(id, name, self._autoRetries[id]);
                    self._onBeforeAutoRetry(id, name);
                    self._uploadData.setStatus(id, qq.status.UPLOAD_RETRYING);
                    self._retryTimeouts[id] = setTimeout(function() {
                        self.log("Starting retry for " + name + "...");
                        if (callback) {
                            callback(id);
                        } else {
                            self._handler.retry(id);
                        }
                    }, retryWaitPeriod);
                    return true;
                }
            },
            _onBeforeAutoRetry: function(id, name) {
                this.log("Waiting " + this._options.retry.autoAttemptDelay + " seconds before retrying " + name + "...");
            },
            _onBeforeManualRetry: function(id) {
                var itemLimit = this._currentItemLimit, fileName;
                if (this._preventRetries[id]) {
                    this.log("Retries are forbidden for id " + id, "warn");
                    return false;
                } else if (this._handler.isValid(id)) {
                    fileName = this.getName(id);
                    if (this._options.callbacks.onManualRetry(id, fileName) === false) {
                        return false;
                    }
                    if (itemLimit > 0 && this._netUploadedOrQueued + 1 > itemLimit) {
                        this._itemError("retryFailTooManyItems");
                        return false;
                    }
                    this.log("Retrying upload for '" + fileName + "' (id: " + id + ")...");
                    return true;
                } else {
                    this.log("'" + id + "' is not a valid file ID", "error");
                    return false;
                }
            },
            _onCancel: function(id, name) {
                this._netUploadedOrQueued--;
                clearTimeout(this._retryTimeouts[id]);
                var storedItemIndex = qq.indexOf(this._storedIds, id);
                if (!this._options.autoUpload && storedItemIndex >= 0) {
                    this._storedIds.splice(storedItemIndex, 1);
                }
                this._uploadData.setStatus(id, qq.status.CANCELED);
            },
            _onComplete: function(id, name, result, xhr) {
                if (!result.success) {
                    this._netUploadedOrQueued--;
                    this._uploadData.setStatus(id, qq.status.UPLOAD_FAILED);
                    if (result[this._options.retry.preventRetryResponseProperty] === true) {
                        this._preventRetries[id] = true;
                    }
                } else {
                    if (result.thumbnailUrl) {
                        this._thumbnailUrls[id] = result.thumbnailUrl;
                    }
                    this._netUploaded++;
                    this._uploadData.setStatus(id, qq.status.UPLOAD_SUCCESSFUL);
                }
                this._maybeParseAndSendUploadError(id, name, result, xhr);
                return result.success ? true : false;
            },
            _onDelete: function(id) {
                this._uploadData.setStatus(id, qq.status.DELETING);
            },
            _onDeleteComplete: function(id, xhrOrXdr, isError) {
                var name = this.getName(id);
                if (isError) {
                    this._handleDeleteFailed(id, xhrOrXdr);
                } else {
                    this._handleDeleteSuccess(id);
                }
            },
            _onInputChange: function(input) {
                var fileIndex;
                if (qq.supportedFeatures.ajaxUploading) {
                    for (fileIndex = 0; fileIndex < input.files.length; fileIndex++) {
                        this._annotateWithButtonId(input.files[fileIndex], input);
                    }
                    this.addFiles(input.files);
                } else if (input.value.length > 0) {
                    this.addFiles(input);
                }
                qq.each(this._buttons, function(idx, button) {
                    button.reset();
                });
            },
            _onProgress: function(id, name, loaded, total) {
                this._totalProgress && this._totalProgress.onIndividualProgress(id, loaded, total);
            },
            _onSubmit: function(id, name) {},
            _onSubmitCallbackSuccess: function(id, name) {
                this._onSubmit.apply(this, arguments);
                this._uploadData.setStatus(id, qq.status.SUBMITTED);
                this._onSubmitted.apply(this, arguments);
                if (this._options.autoUpload) {
                    this._options.callbacks.onSubmitted.apply(this, arguments);
                    this._uploadFile(id);
                } else {
                    this._storeForLater(id);
                    this._options.callbacks.onSubmitted.apply(this, arguments);
                }
            },
            _onSubmitDelete: function(id, onSuccessCallback, additionalMandatedParams) {
                var uuid = this.getUuid(id), adjustedOnSuccessCallback;
                if (onSuccessCallback) {
                    adjustedOnSuccessCallback = qq.bind(onSuccessCallback, this, id, uuid, additionalMandatedParams);
                }
                if (this._isDeletePossible()) {
                    this._handleCheckedCallback({
                        name: "onSubmitDelete",
                        callback: qq.bind(this._options.callbacks.onSubmitDelete, this, id),
                        onSuccess: adjustedOnSuccessCallback || qq.bind(this._deleteHandler.sendDelete, this, id, uuid, additionalMandatedParams),
                        identifier: id
                    });
                    return true;
                } else {
                    this.log("Delete request ignored for ID " + id + ", delete feature is disabled or request not possible " + "due to CORS on a user agent that does not support pre-flighting.", "warn");
                    return false;
                }
            },
            _onSubmitted: function(id) {},
            _onTotalProgress: function(loaded, total) {
                this._options.callbacks.onTotalProgress(loaded, total);
            },
            _onUploadPrep: function(id) {},
            _onUpload: function(id, name) {
                this._uploadData.setStatus(id, qq.status.UPLOADING);
            },
            _onUploadChunk: function(id, chunkData) {},
            _onUploadStatusChange: function(id, oldStatus, newStatus) {
                if (newStatus === qq.status.PAUSED) {
                    clearTimeout(this._retryTimeouts[id]);
                }
            },
            _onValidateBatchCallbackFailure: function(fileWrappers) {
                var self = this;
                qq.each(fileWrappers, function(idx, fileWrapper) {
                    self._fileOrBlobRejected(fileWrapper.id);
                });
            },
            _onValidateBatchCallbackSuccess: function(validationDescriptors, items, params, endpoint, button) {
                var errorMessage, itemLimit = this._currentItemLimit, proposedNetFilesUploadedOrQueued = this._netUploadedOrQueued;
                if (itemLimit === 0 || proposedNetFilesUploadedOrQueued <= itemLimit) {
                    if (items.length > 0) {
                        this._handleCheckedCallback({
                            name: "onValidate",
                            callback: qq.bind(this._options.callbacks.onValidate, this, validationDescriptors[0], button),
                            onSuccess: qq.bind(this._onValidateCallbackSuccess, this, items, 0, params, endpoint),
                            onFailure: qq.bind(this._onValidateCallbackFailure, this, items, 0, params, endpoint),
                            identifier: "Item '" + items[0].file.name + "', size: " + items[0].file.size
                        });
                    } else {
                        this._itemError("noFilesError");
                    }
                } else {
                    this._onValidateBatchCallbackFailure(items);
                    errorMessage = this._options.messages.tooManyItemsError.replace(/\{netItems\}/g, proposedNetFilesUploadedOrQueued).replace(/\{itemLimit\}/g, itemLimit);
                    this._batchError(errorMessage);
                }
            },
            _onValidateCallbackFailure: function(items, index, params, endpoint) {
                var nextIndex = index + 1;
                this._fileOrBlobRejected(items[index].id, items[index].file.name);
                this._maybeProcessNextItemAfterOnValidateCallback(false, items, nextIndex, params, endpoint);
            },
            _onValidateCallbackSuccess: function(items, index, params, endpoint) {
                var self = this, nextIndex = index + 1, validationDescriptor = this._getValidationDescriptor(items[index]);
                this._validateFileOrBlobData(items[index], validationDescriptor).then(function() {
                    self._upload(items[index].id, params, endpoint);
                    self._maybeProcessNextItemAfterOnValidateCallback(true, items, nextIndex, params, endpoint);
                }, function() {
                    self._maybeProcessNextItemAfterOnValidateCallback(false, items, nextIndex, params, endpoint);
                });
            },
            _prepareItemsForUpload: function(items, params, endpoint) {
                if (items.length === 0) {
                    this._itemError("noFilesError");
                    return;
                }
                var validationDescriptors = this._getValidationDescriptors(items), buttonId = this._getButtonId(items[0].file), button = this._getButton(buttonId);
                this._handleCheckedCallback({
                    name: "onValidateBatch",
                    callback: qq.bind(this._options.callbacks.onValidateBatch, this, validationDescriptors, button),
                    onSuccess: qq.bind(this._onValidateBatchCallbackSuccess, this, validationDescriptors, items, params, endpoint, button),
                    onFailure: qq.bind(this._onValidateBatchCallbackFailure, this, items),
                    identifier: "batch validation"
                });
            },
            _preventLeaveInProgress: function() {
                var self = this;
                this._disposeSupport.attach(window, "beforeunload", function(e) {
                    if (self.getInProgress()) {
                        e = e || window.event;
                        e.returnValue = self._options.messages.onLeave;
                        return self._options.messages.onLeave;
                    }
                });
            },
            _refreshSessionData: function() {
                var self = this, options = this._options.session;
                if (qq.Session && this._options.session.endpoint != null) {
                    if (!this._session) {
                        qq.extend(options, {
                            cors: this._options.cors
                        });
                        options.log = qq.bind(this.log, this);
                        options.addFileRecord = qq.bind(this._addCannedFile, this);
                        this._session = new qq.Session(options);
                    }
                    setTimeout(function() {
                        self._session.refresh().then(function(response, xhrOrXdr) {
                            self._sessionRequestComplete();
                            self._options.callbacks.onSessionRequestComplete(response, true, xhrOrXdr);
                        }, function(response, xhrOrXdr) {
                            self._options.callbacks.onSessionRequestComplete(response, false, xhrOrXdr);
                        });
                    }, 0);
                }
            },
            _sessionRequestComplete: function() {},
            _setSize: function(id, newSize) {
                this._uploadData.updateSize(id, newSize);
                this._totalProgress && this._totalProgress.onNewSize(id);
            },
            _shouldAutoRetry: function(id, name, responseJSON) {
                var uploadData = this._uploadData.retrieve({
                    id: id
                });
                if (!this._preventRetries[id] && this._options.retry.enableAuto && uploadData.status !== qq.status.PAUSED) {
                    if (this._autoRetries[id] === undefined) {
                        this._autoRetries[id] = 0;
                    }
                    if (this._autoRetries[id] < this._options.retry.maxAutoAttempts) {
                        this._autoRetries[id] += 1;
                        return true;
                    }
                }
                return false;
            },
            _storeForLater: function(id) {
                this._storedIds.push(id);
            },
            _trackButton: function(id) {
                var buttonId;
                if (qq.supportedFeatures.ajaxUploading) {
                    buttonId = this._handler.getFile(id).qqButtonId;
                } else {
                    buttonId = this._getButtonId(this._handler.getInput(id));
                }
                if (buttonId) {
                    this._buttonIdsForFileIds[id] = buttonId;
                }
            },
            _updateFormSupportAndParams: function(formElementOrId) {
                this._options.form.element = formElementOrId;
                this._formSupport = qq.FormSupport && new qq.FormSupport(this._options.form, qq.bind(this.uploadStoredFiles, this), qq.bind(this.log, this));
                if (this._formSupport && this._formSupport.attachedToForm) {
                    this._paramsStore.addReadOnly(null, this._formSupport.getFormInputsAsObject);
                    this._options.autoUpload = this._formSupport.newAutoUpload;
                    if (this._formSupport.newEndpoint) {
                        this.setEndpoint(this._formSupport.newEndpoint);
                    }
                }
            },
            _upload: function(id, params, endpoint) {
                var name = this.getName(id);
                if (params) {
                    this.setParams(params, id);
                }
                if (endpoint) {
                    this.setEndpoint(endpoint, id);
                }
                this._handleCheckedCallback({
                    name: "onSubmit",
                    callback: qq.bind(this._options.callbacks.onSubmit, this, id, name),
                    onSuccess: qq.bind(this._onSubmitCallbackSuccess, this, id, name),
                    onFailure: qq.bind(this._fileOrBlobRejected, this, id, name),
                    identifier: id
                });
            },
            _uploadFile: function(id) {
                if (!this._handler.upload(id)) {
                    this._uploadData.setStatus(id, qq.status.QUEUED);
                }
            },
            _uploadStoredFiles: function() {
                var idToUpload, stillSubmitting, self = this;
                while (this._storedIds.length) {
                    idToUpload = this._storedIds.shift();
                    this._uploadFile(idToUpload);
                }
                stillSubmitting = this.getUploads({
                    status: qq.status.SUBMITTING
                }).length;
                if (stillSubmitting) {
                    qq.log("Still waiting for " + stillSubmitting + " files to clear submit queue. Will re-parse stored IDs array shortly.");
                    setTimeout(function() {
                        self._uploadStoredFiles();
                    }, 1e3);
                }
            },
            _validateFileOrBlobData: function(fileWrapper, validationDescriptor) {
                var self = this, file = function() {
                    if (fileWrapper.file instanceof qq.BlobProxy) {
                        return fileWrapper.file.referenceBlob;
                    }
                    return fileWrapper.file;
                }(), name = validationDescriptor.name, size = validationDescriptor.size, buttonId = this._getButtonId(fileWrapper.file), validationBase = this._getValidationBase(buttonId), validityChecker = new qq.Promise();
                validityChecker.then(function() {}, function() {
                    self._fileOrBlobRejected(fileWrapper.id, name);
                });
                if (qq.isFileOrInput(file) && !this._isAllowedExtension(validationBase.allowedExtensions, name)) {
                    this._itemError("typeError", name, file);
                    return validityChecker.failure();
                }
                if (!this._options.validation.allowEmpty && size === 0) {
                    this._itemError("emptyError", name, file);
                    return validityChecker.failure();
                }
                if (size > 0 && validationBase.sizeLimit && size > validationBase.sizeLimit) {
                    this._itemError("sizeError", name, file);
                    return validityChecker.failure();
                }
                if (size > 0 && size < validationBase.minSizeLimit) {
                    this._itemError("minSizeError", name, file);
                    return validityChecker.failure();
                }
                if (qq.ImageValidation && qq.supportedFeatures.imagePreviews && qq.isFile(file)) {
                    new qq.ImageValidation(file, qq.bind(self.log, self)).validate(validationBase.image).then(validityChecker.success, function(errorCode) {
                        self._itemError(errorCode + "ImageError", name, file);
                        validityChecker.failure();
                    });
                } else {
                    validityChecker.success();
                }
                return validityChecker;
            },
            _wrapCallbacks: function() {
                var self, safeCallback, prop;
                self = this;
                safeCallback = function(name, callback, args) {
                    var errorMsg;
                    try {
                        return callback.apply(self, args);
                    } catch (exception) {
                        errorMsg = exception.message || exception.toString();
                        self.log("Caught exception in '" + name + "' callback - " + errorMsg, "error");
                    }
                };
                for (prop in this._options.callbacks) {
                    (function() {
                        var callbackName, callbackFunc;
                        callbackName = prop;
                        callbackFunc = self._options.callbacks[callbackName];
                        self._options.callbacks[callbackName] = function() {
                            return safeCallback(callbackName, callbackFunc, arguments);
                        };
                    })();
                }
            }
        };
    })();
    (function() {
        "use strict";
        qq.FineUploaderBasic = function(o) {
            var self = this;
            this._options = {
                debug: false,
                button: null,
                multiple: true,
                maxConnections: 3,
                disableCancelForFormUploads: false,
                autoUpload: true,
                request: {
                    customHeaders: {},
                    endpoint: "/server/upload",
                    filenameParam: "qqfilename",
                    forceMultipart: true,
                    inputName: "qqfile",
                    method: "POST",
                    params: {},
                    paramsInBody: true,
                    totalFileSizeName: "qqtotalfilesize",
                    uuidName: "qquuid"
                },
                validation: {
                    allowedExtensions: [],
                    sizeLimit: 0,
                    minSizeLimit: 0,
                    itemLimit: 0,
                    stopOnFirstInvalidFile: true,
                    acceptFiles: null,
                    image: {
                        maxHeight: 0,
                        maxWidth: 0,
                        minHeight: 0,
                        minWidth: 0
                    },
                    allowEmpty: false
                },
                callbacks: {
                    onSubmit: function(id, name) {},
                    onSubmitted: function(id, name) {},
                    onComplete: function(id, name, responseJSON, maybeXhr) {},
                    onAllComplete: function(successful, failed) {},
                    onCancel: function(id, name) {},
                    onUpload: function(id, name) {},
                    onUploadChunk: function(id, name, chunkData) {},
                    onUploadChunkSuccess: function(id, chunkData, responseJSON, xhr) {},
                    onResume: function(id, fileName, chunkData) {},
                    onProgress: function(id, name, loaded, total) {},
                    onTotalProgress: function(loaded, total) {},
                    onError: function(id, name, reason, maybeXhrOrXdr) {},
                    onAutoRetry: function(id, name, attemptNumber) {},
                    onManualRetry: function(id, name) {},
                    onValidateBatch: function(fileOrBlobData) {},
                    onValidate: function(fileOrBlobData) {},
                    onSubmitDelete: function(id) {},
                    onDelete: function(id) {},
                    onDeleteComplete: function(id, xhrOrXdr, isError) {},
                    onPasteReceived: function(blob) {},
                    onStatusChange: function(id, oldStatus, newStatus) {},
                    onSessionRequestComplete: function(response, success, xhrOrXdr) {}
                },
                messages: {
                    typeError: "{file} has an invalid extension. Valid extension(s): {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    noFilesError: "No files to upload.",
                    tooManyItemsError: "Too many items ({netItems}) would be uploaded.  Item limit is {itemLimit}.",
                    maxHeightImageError: "Image is too tall.",
                    maxWidthImageError: "Image is too wide.",
                    minHeightImageError: "Image is not tall enough.",
                    minWidthImageError: "Image is not wide enough.",
                    retryFailTooManyItems: "Retry failed - you have reached your file limit.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be canceled.",
                    unsupportedBrowserIos8Safari: "Unrecoverable error - this browser does not permit file uploading of any kind due to serious bugs in iOS8 Safari.  Please use iOS8 Chrome until Apple fixes these issues."
                },
                retry: {
                    enableAuto: false,
                    maxAutoAttempts: 3,
                    autoAttemptDelay: 5,
                    preventRetryResponseProperty: "preventRetry"
                },
                classes: {
                    buttonHover: "qq-upload-button-hover",
                    buttonFocus: "qq-upload-button-focus"
                },
                chunking: {
                    enabled: false,
                    concurrent: {
                        enabled: false
                    },
                    mandatory: false,
                    paramNames: {
                        partIndex: "qqpartindex",
                        partByteOffset: "qqpartbyteoffset",
                        chunkSize: "qqchunksize",
                        totalFileSize: "qqtotalfilesize",
                        totalParts: "qqtotalparts"
                    },
                    partSize: 2e6,
                    success: {
                        endpoint: null
                    }
                },
                resume: {
                    enabled: false,
                    recordsExpireIn: 7,
                    paramNames: {
                        resuming: "qqresume"
                    }
                },
                formatFileName: function(fileOrBlobName) {
                    return fileOrBlobName;
                },
                text: {
                    defaultResponseError: "Upload failure reason unknown",
                    fileInputTitle: "file input",
                    sizeSymbols: [ "kB", "MB", "GB", "TB", "PB", "EB" ]
                },
                deleteFile: {
                    enabled: false,
                    method: "DELETE",
                    endpoint: "/server/upload",
                    customHeaders: {},
                    params: {}
                },
                cors: {
                    expected: false,
                    sendCredentials: false,
                    allowXdr: false
                },
                blobs: {
                    defaultName: "misc_data"
                },
                paste: {
                    targetElement: null,
                    defaultName: "pasted_image"
                },
                camera: {
                    ios: false,
                    button: null
                },
                extraButtons: [],
                session: {
                    endpoint: null,
                    params: {},
                    customHeaders: {},
                    refreshOnReset: true
                },
                form: {
                    element: "qq-form",
                    autoUpload: false,
                    interceptSubmit: true
                },
                scaling: {
                    customResizer: null,
                    sendOriginal: true,
                    orient: true,
                    defaultType: null,
                    defaultQuality: 80,
                    failureText: "Failed to scale",
                    includeExif: false,
                    sizes: []
                },
                workarounds: {
                    iosEmptyVideos: true,
                    ios8SafariUploads: true,
                    ios8BrowserCrash: false
                }
            };
            qq.extend(this._options, o, true);
            this._buttons = [];
            this._extraButtonSpecs = {};
            this._buttonIdsForFileIds = [];
            this._wrapCallbacks();
            this._disposeSupport = new qq.DisposeSupport();
            this._storedIds = [];
            this._autoRetries = [];
            this._retryTimeouts = [];
            this._preventRetries = [];
            this._thumbnailUrls = [];
            this._netUploadedOrQueued = 0;
            this._netUploaded = 0;
            this._uploadData = this._createUploadDataTracker();
            this._initFormSupportAndParams();
            this._customHeadersStore = this._createStore(this._options.request.customHeaders);
            this._deleteFileCustomHeadersStore = this._createStore(this._options.deleteFile.customHeaders);
            this._deleteFileParamsStore = this._createStore(this._options.deleteFile.params);
            this._endpointStore = this._createStore(this._options.request.endpoint);
            this._deleteFileEndpointStore = this._createStore(this._options.deleteFile.endpoint);
            this._handler = this._createUploadHandler();
            this._deleteHandler = qq.DeleteFileAjaxRequester && this._createDeleteHandler();
            if (this._options.button) {
                this._defaultButtonId = this._createUploadButton({
                    element: this._options.button,
                    title: this._options.text.fileInputTitle
                }).getButtonId();
            }
            this._generateExtraButtonSpecs();
            this._handleCameraAccess();
            if (this._options.paste.targetElement) {
                if (qq.PasteSupport) {
                    this._pasteHandler = this._createPasteHandler();
                } else {
                    this.log("Paste support module not found", "error");
                }
            }
            this._preventLeaveInProgress();
            this._imageGenerator = qq.ImageGenerator && new qq.ImageGenerator(qq.bind(this.log, this));
            this._refreshSessionData();
            this._succeededSinceLastAllComplete = [];
            this._failedSinceLastAllComplete = [];
            this._scaler = qq.Scaler && new qq.Scaler(this._options.scaling, qq.bind(this.log, this)) || {};
            if (this._scaler.enabled) {
                this._customNewFileHandler = qq.bind(this._scaler.handleNewFile, this._scaler);
            }
            if (qq.TotalProgress && qq.supportedFeatures.progressBar) {
                this._totalProgress = new qq.TotalProgress(qq.bind(this._onTotalProgress, this), function(id) {
                    var entry = self._uploadData.retrieve({
                        id: id
                    });
                    return entry && entry.size || 0;
                });
            }
            this._currentItemLimit = this._options.validation.itemLimit;
        };
        qq.FineUploaderBasic.prototype = qq.basePublicApi;
        qq.extend(qq.FineUploaderBasic.prototype, qq.basePrivateApi);
    })();
    qq.AjaxRequester = function(o) {
        "use strict";
        var log, shouldParamsBeInQueryString, queue = [], requestData = {}, options = {
            acceptHeader: null,
            validMethods: [ "PATCH", "POST", "PUT" ],
            method: "POST",
            contentType: "application/x-www-form-urlencoded",
            maxConnections: 3,
            customHeaders: {},
            endpointStore: {},
            paramsStore: {},
            mandatedParams: {},
            allowXRequestedWithAndCacheControl: true,
            successfulResponseCodes: {
                DELETE: [ 200, 202, 204 ],
                PATCH: [ 200, 201, 202, 203, 204 ],
                POST: [ 200, 201, 202, 203, 204 ],
                PUT: [ 200, 201, 202, 203, 204 ],
                GET: [ 200 ]
            },
            cors: {
                expected: false,
                sendCredentials: false
            },
            log: function(str, level) {},
            onSend: function(id) {},
            onComplete: function(id, xhrOrXdr, isError) {},
            onProgress: null
        };
        qq.extend(options, o);
        log = options.log;
        if (qq.indexOf(options.validMethods, options.method) < 0) {
            throw new Error("'" + options.method + "' is not a supported method for this type of request!");
        }
        function isSimpleMethod() {
            return qq.indexOf([ "GET", "POST", "HEAD" ], options.method) >= 0;
        }
        function containsNonSimpleHeaders(headers) {
            var containsNonSimple = false;
            qq.each(containsNonSimple, function(idx, header) {
                if (qq.indexOf([ "Accept", "Accept-Language", "Content-Language", "Content-Type" ], header) < 0) {
                    containsNonSimple = true;
                    return false;
                }
            });
            return containsNonSimple;
        }
        function isXdr(xhr) {
            return options.cors.expected && xhr.withCredentials === undefined;
        }
        function getCorsAjaxTransport() {
            var xhrOrXdr;
            if (window.XMLHttpRequest || window.ActiveXObject) {
                xhrOrXdr = qq.createXhrInstance();
                if (xhrOrXdr.withCredentials === undefined) {
                    xhrOrXdr = new XDomainRequest();
                    xhrOrXdr.onload = function() {};
                    xhrOrXdr.onerror = function() {};
                    xhrOrXdr.ontimeout = function() {};
                    xhrOrXdr.onprogress = function() {};
                }
            }
            return xhrOrXdr;
        }
        function getXhrOrXdr(id, suppliedXhr) {
            var xhrOrXdr = requestData[id].xhr;
            if (!xhrOrXdr) {
                if (suppliedXhr) {
                    xhrOrXdr = suppliedXhr;
                } else {
                    if (options.cors.expected) {
                        xhrOrXdr = getCorsAjaxTransport();
                    } else {
                        xhrOrXdr = qq.createXhrInstance();
                    }
                }
                requestData[id].xhr = xhrOrXdr;
            }
            return xhrOrXdr;
        }
        function dequeue(id) {
            var i = qq.indexOf(queue, id), max = options.maxConnections, nextId;
            delete requestData[id];
            queue.splice(i, 1);
            if (queue.length >= max && i < max) {
                nextId = queue[max - 1];
                sendRequest(nextId);
            }
        }
        function onComplete(id, xdrError) {
            var xhr = getXhrOrXdr(id), method = options.method, isError = xdrError === true;
            dequeue(id);
            if (isError) {
                log(method + " request for " + id + " has failed", "error");
            } else if (!isXdr(xhr) && !isResponseSuccessful(xhr.status)) {
                isError = true;
                log(method + " request for " + id + " has failed - response code " + xhr.status, "error");
            }
            options.onComplete(id, xhr, isError);
        }
        function getParams(id) {
            var onDemandParams = requestData[id].additionalParams, mandatedParams = options.mandatedParams, params;
            if (options.paramsStore.get) {
                params = options.paramsStore.get(id);
            }
            if (onDemandParams) {
                qq.each(onDemandParams, function(name, val) {
                    params = params || {};
                    params[name] = val;
                });
            }
            if (mandatedParams) {
                qq.each(mandatedParams, function(name, val) {
                    params = params || {};
                    params[name] = val;
                });
            }
            return params;
        }
        function sendRequest(id, optXhr) {
            var xhr = getXhrOrXdr(id, optXhr), method = options.method, params = getParams(id), payload = requestData[id].payload, url;
            options.onSend(id);
            url = createUrl(id, params, requestData[id].additionalQueryParams);
            if (isXdr(xhr)) {
                xhr.onload = getXdrLoadHandler(id);
                xhr.onerror = getXdrErrorHandler(id);
            } else {
                xhr.onreadystatechange = getXhrReadyStateChangeHandler(id);
            }
            registerForUploadProgress(id);
            xhr.open(method, url, true);
            if (options.cors.expected && options.cors.sendCredentials && !isXdr(xhr)) {
                xhr.withCredentials = true;
            }
            setHeaders(id);
            log("Sending " + method + " request for " + id);
            if (payload) {
                xhr.send(payload);
            } else if (shouldParamsBeInQueryString || !params) {
                xhr.send();
            } else if (params && options.contentType && options.contentType.toLowerCase().indexOf("application/x-www-form-urlencoded") >= 0) {
                xhr.send(qq.obj2url(params, ""));
            } else if (params && options.contentType && options.contentType.toLowerCase().indexOf("application/json") >= 0) {
                xhr.send(JSON.stringify(params));
            } else {
                xhr.send(params);
            }
            return xhr;
        }
        function createUrl(id, params, additionalQueryParams) {
            var endpoint = options.endpointStore.get(id), addToPath = requestData[id].addToPath;
            if (addToPath != undefined) {
                endpoint += "/" + addToPath;
            }
            if (shouldParamsBeInQueryString && params) {
                endpoint = qq.obj2url(params, endpoint);
            }
            if (additionalQueryParams) {
                endpoint = qq.obj2url(additionalQueryParams, endpoint);
            }
            return endpoint;
        }
        function getXhrReadyStateChangeHandler(id) {
            return function() {
                if (getXhrOrXdr(id).readyState === 4) {
                    onComplete(id);
                }
            };
        }
        function registerForUploadProgress(id) {
            var onProgress = options.onProgress;
            if (onProgress) {
                getXhrOrXdr(id).upload.onprogress = function(e) {
                    if (e.lengthComputable) {
                        onProgress(id, e.loaded, e.total);
                    }
                };
            }
        }
        function getXdrLoadHandler(id) {
            return function() {
                onComplete(id);
            };
        }
        function getXdrErrorHandler(id) {
            return function() {
                onComplete(id, true);
            };
        }
        function setHeaders(id) {
            var xhr = getXhrOrXdr(id), customHeaders = options.customHeaders, onDemandHeaders = requestData[id].additionalHeaders || {}, method = options.method, allHeaders = {};
            if (!isXdr(xhr)) {
                options.acceptHeader && xhr.setRequestHeader("Accept", options.acceptHeader);
                if (options.allowXRequestedWithAndCacheControl) {
                    if (!options.cors.expected || (!isSimpleMethod() || containsNonSimpleHeaders(customHeaders))) {
                        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                        xhr.setRequestHeader("Cache-Control", "no-cache");
                    }
                }
                if (options.contentType && (method === "POST" || method === "PUT")) {
                    xhr.setRequestHeader("Content-Type", options.contentType);
                }
                qq.extend(allHeaders, qq.isFunction(customHeaders) ? customHeaders(id) : customHeaders);
                qq.extend(allHeaders, onDemandHeaders);
                qq.each(allHeaders, function(name, val) {
                    xhr.setRequestHeader(name, val);
                });
            }
        }
        function isResponseSuccessful(responseCode) {
            return qq.indexOf(options.successfulResponseCodes[options.method], responseCode) >= 0;
        }
        function prepareToSend(id, optXhr, addToPath, additionalParams, additionalQueryParams, additionalHeaders, payload) {
            requestData[id] = {
                addToPath: addToPath,
                additionalParams: additionalParams,
                additionalQueryParams: additionalQueryParams,
                additionalHeaders: additionalHeaders,
                payload: payload
            };
            var len = queue.push(id);
            if (len <= options.maxConnections) {
                return sendRequest(id, optXhr);
            }
        }
        shouldParamsBeInQueryString = options.method === "GET" || options.method === "DELETE";
        qq.extend(this, {
            initTransport: function(id) {
                var path, params, headers, payload, cacheBuster, additionalQueryParams;
                return {
                    withPath: function(appendToPath) {
                        path = appendToPath;
                        return this;
                    },
                    withParams: function(additionalParams) {
                        params = additionalParams;
                        return this;
                    },
                    withQueryParams: function(_additionalQueryParams_) {
                        additionalQueryParams = _additionalQueryParams_;
                        return this;
                    },
                    withHeaders: function(additionalHeaders) {
                        headers = additionalHeaders;
                        return this;
                    },
                    withPayload: function(thePayload) {
                        payload = thePayload;
                        return this;
                    },
                    withCacheBuster: function() {
                        cacheBuster = true;
                        return this;
                    },
                    send: function(optXhr) {
                        if (cacheBuster && qq.indexOf([ "GET", "DELETE" ], options.method) >= 0) {
                            params.qqtimestamp = new Date().getTime();
                        }
                        return prepareToSend(id, optXhr, path, params, additionalQueryParams, headers, payload);
                    }
                };
            },
            canceled: function(id) {
                dequeue(id);
            }
        });
    };
    qq.UploadHandler = function(spec) {
        "use strict";
        var proxy = spec.proxy, fileState = {}, onCancel = proxy.onCancel, getName = proxy.getName;
        qq.extend(this, {
            add: function(id, fileItem) {
                fileState[id] = fileItem;
                fileState[id].temp = {};
            },
            cancel: function(id) {
                var self = this, cancelFinalizationEffort = new qq.Promise(), onCancelRetVal = onCancel(id, getName(id), cancelFinalizationEffort);
                onCancelRetVal.then(function() {
                    if (self.isValid(id)) {
                        fileState[id].canceled = true;
                        self.expunge(id);
                    }
                    cancelFinalizationEffort.success();
                });
            },
            expunge: function(id) {
                delete fileState[id];
            },
            getThirdPartyFileId: function(id) {
                return fileState[id].key;
            },
            isValid: function(id) {
                return fileState[id] !== undefined;
            },
            reset: function() {
                fileState = {};
            },
            _getFileState: function(id) {
                return fileState[id];
            },
            _setThirdPartyFileId: function(id, thirdPartyFileId) {
                fileState[id].key = thirdPartyFileId;
            },
            _wasCanceled: function(id) {
                return !!fileState[id].canceled;
            }
        });
    };
    qq.UploadHandlerController = function(o, namespace) {
        "use strict";
        var controller = this, chunkingPossible = false, concurrentChunkingPossible = false, chunking, preventRetryResponse, log, handler, options = {
            paramsStore: {},
            maxConnections: 3,
            chunking: {
                enabled: false,
                multiple: {
                    enabled: false
                }
            },
            log: function(str, level) {},
            onProgress: function(id, fileName, loaded, total) {},
            onComplete: function(id, fileName, response, xhr) {},
            onCancel: function(id, fileName) {},
            onUploadPrep: function(id) {},
            onUpload: function(id, fileName) {},
            onUploadChunk: function(id, fileName, chunkData) {},
            onUploadChunkSuccess: function(id, chunkData, response, xhr) {},
            onAutoRetry: function(id, fileName, response, xhr) {},
            onResume: function(id, fileName, chunkData) {},
            onUuidChanged: function(id, newUuid) {},
            getName: function(id) {},
            setSize: function(id, newSize) {},
            isQueued: function(id) {},
            getIdsInProxyGroup: function(id) {},
            getIdsInBatch: function(id) {}
        }, chunked = {
            done: function(id, chunkIdx, response, xhr) {
                var chunkData = handler._getChunkData(id, chunkIdx);
                handler._getFileState(id).attemptingResume = false;
                delete handler._getFileState(id).temp.chunkProgress[chunkIdx];
                handler._getFileState(id).loaded += chunkData.size;
                options.onUploadChunkSuccess(id, handler._getChunkDataForCallback(chunkData), response, xhr);
            },
            finalize: function(id) {
                var size = options.getSize(id), name = options.getName(id);
                log("All chunks have been uploaded for " + id + " - finalizing....");
                handler.finalizeChunks(id).then(function(response, xhr) {
                    log("Finalize successful for " + id);
                    var normaizedResponse = upload.normalizeResponse(response, true);
                    options.onProgress(id, name, size, size);
                    handler._maybeDeletePersistedChunkData(id);
                    upload.cleanup(id, normaizedResponse, xhr);
                }, function(response, xhr) {
                    var normaizedResponse = upload.normalizeResponse(response, false);
                    log("Problem finalizing chunks for file ID " + id + " - " + normaizedResponse.error, "error");
                    if (normaizedResponse.reset) {
                        chunked.reset(id);
                    }
                    if (!options.onAutoRetry(id, name, normaizedResponse, xhr)) {
                        upload.cleanup(id, normaizedResponse, xhr);
                    }
                });
            },
            handleFailure: function(chunkIdx, id, response, xhr) {
                var name = options.getName(id);
                log("Chunked upload request failed for " + id + ", chunk " + chunkIdx);
                handler.clearCachedChunk(id, chunkIdx);
                var responseToReport = upload.normalizeResponse(response, false), inProgressIdx;
                if (responseToReport.reset) {
                    chunked.reset(id);
                } else {
                    inProgressIdx = qq.indexOf(handler._getFileState(id).chunking.inProgress, chunkIdx);
                    if (inProgressIdx >= 0) {
                        handler._getFileState(id).chunking.inProgress.splice(inProgressIdx, 1);
                        handler._getFileState(id).chunking.remaining.unshift(chunkIdx);
                    }
                }
                if (!handler._getFileState(id).temp.ignoreFailure) {
                    if (concurrentChunkingPossible) {
                        handler._getFileState(id).temp.ignoreFailure = true;
                        log(qq.format("Going to attempt to abort these chunks: {}. These are currently in-progress: {}.", JSON.stringify(Object.keys(handler._getXhrs(id))), JSON.stringify(handler._getFileState(id).chunking.inProgress)));
                        qq.each(handler._getXhrs(id), function(ckid, ckXhr) {
                            log(qq.format("Attempting to abort file {}.{}. XHR readyState {}. ", id, ckid, ckXhr.readyState));
                            ckXhr.abort();
                            ckXhr._cancelled = true;
                        });
                        handler.moveInProgressToRemaining(id);
                        connectionManager.free(id, true);
                    }
                    if (!options.onAutoRetry(id, name, responseToReport, xhr)) {
                        upload.cleanup(id, responseToReport, xhr);
                    }
                }
            },
            hasMoreParts: function(id) {
                return !!handler._getFileState(id).chunking.remaining.length;
            },
            nextPart: function(id) {
                var nextIdx = handler._getFileState(id).chunking.remaining.shift();
                if (nextIdx >= handler._getTotalChunks(id)) {
                    nextIdx = null;
                }
                return nextIdx;
            },
            reset: function(id) {
                log("Server or callback has ordered chunking effort to be restarted on next attempt for item ID " + id, "error");
                handler._maybeDeletePersistedChunkData(id);
                handler.reevaluateChunking(id);
                handler._getFileState(id).loaded = 0;
            },
            sendNext: function(id) {
                var size = options.getSize(id), name = options.getName(id), chunkIdx = chunked.nextPart(id), chunkData = handler._getChunkData(id, chunkIdx), resuming = handler._getFileState(id).attemptingResume, inProgressChunks = handler._getFileState(id).chunking.inProgress || [];
                if (handler._getFileState(id).loaded == null) {
                    handler._getFileState(id).loaded = 0;
                }
                if (resuming && options.onResume(id, name, chunkData) === false) {
                    chunked.reset(id);
                    chunkIdx = chunked.nextPart(id);
                    chunkData = handler._getChunkData(id, chunkIdx);
                    resuming = false;
                }
                if (chunkIdx == null && inProgressChunks.length === 0) {
                    chunked.finalize(id);
                } else {
                    log(qq.format("Sending chunked upload request for item {}.{}, bytes {}-{} of {}.", id, chunkIdx, chunkData.start + 1, chunkData.end, size));
                    options.onUploadChunk(id, name, handler._getChunkDataForCallback(chunkData));
                    inProgressChunks.push(chunkIdx);
                    handler._getFileState(id).chunking.inProgress = inProgressChunks;
                    if (concurrentChunkingPossible) {
                        connectionManager.open(id, chunkIdx);
                    }
                    if (concurrentChunkingPossible && connectionManager.available() && handler._getFileState(id).chunking.remaining.length) {
                        chunked.sendNext(id);
                    }
                    if (chunkData.blob.size === 0) {
                        log(qq.format("Chunk {} for file {} will not be uploaded, zero sized chunk.", chunkIdx, id), "error");
                        chunked.handleFailure(chunkIdx, id, "File is no longer available", null);
                    } else {
                        handler.uploadChunk(id, chunkIdx, resuming).then(function success(response, xhr) {
                            log("Chunked upload request succeeded for " + id + ", chunk " + chunkIdx);
                            handler.clearCachedChunk(id, chunkIdx);
                            var inProgressChunks = handler._getFileState(id).chunking.inProgress || [], responseToReport = upload.normalizeResponse(response, true), inProgressChunkIdx = qq.indexOf(inProgressChunks, chunkIdx);
                            log(qq.format("Chunk {} for file {} uploaded successfully.", chunkIdx, id));
                            chunked.done(id, chunkIdx, responseToReport, xhr);
                            if (inProgressChunkIdx >= 0) {
                                inProgressChunks.splice(inProgressChunkIdx, 1);
                            }
                            handler._maybePersistChunkedState(id);
                            if (!chunked.hasMoreParts(id) && inProgressChunks.length === 0) {
                                chunked.finalize(id);
                            } else if (chunked.hasMoreParts(id)) {
                                chunked.sendNext(id);
                            } else {
                                log(qq.format("File ID {} has no more chunks to send and these chunk indexes are still marked as in-progress: {}", id, JSON.stringify(inProgressChunks)));
                            }
                        }, function failure(response, xhr) {
                            chunked.handleFailure(chunkIdx, id, response, xhr);
                        }).done(function() {
                            handler.clearXhr(id, chunkIdx);
                        });
                    }
                }
            }
        }, connectionManager = {
            _open: [],
            _openChunks: {},
            _waiting: [],
            available: function() {
                var max = options.maxConnections, openChunkEntriesCount = 0, openChunksCount = 0;
                qq.each(connectionManager._openChunks, function(fileId, openChunkIndexes) {
                    openChunkEntriesCount++;
                    openChunksCount += openChunkIndexes.length;
                });
                return max - (connectionManager._open.length - openChunkEntriesCount + openChunksCount);
            },
            free: function(id, dontAllowNext) {
                var allowNext = !dontAllowNext, waitingIndex = qq.indexOf(connectionManager._waiting, id), connectionsIndex = qq.indexOf(connectionManager._open, id), nextId;
                delete connectionManager._openChunks[id];
                if (upload.getProxyOrBlob(id) instanceof qq.BlobProxy) {
                    log("Generated blob upload has ended for " + id + ", disposing generated blob.");
                    delete handler._getFileState(id).file;
                }
                if (waitingIndex >= 0) {
                    connectionManager._waiting.splice(waitingIndex, 1);
                } else if (allowNext && connectionsIndex >= 0) {
                    connectionManager._open.splice(connectionsIndex, 1);
                    nextId = connectionManager._waiting.shift();
                    if (nextId >= 0) {
                        connectionManager._open.push(nextId);
                        upload.start(nextId);
                    }
                }
            },
            getWaitingOrConnected: function() {
                var waitingOrConnected = [];
                qq.each(connectionManager._openChunks, function(fileId, chunks) {
                    if (chunks && chunks.length) {
                        waitingOrConnected.push(parseInt(fileId));
                    }
                });
                qq.each(connectionManager._open, function(idx, fileId) {
                    if (!connectionManager._openChunks[fileId]) {
                        waitingOrConnected.push(parseInt(fileId));
                    }
                });
                waitingOrConnected = waitingOrConnected.concat(connectionManager._waiting);
                return waitingOrConnected;
            },
            isUsingConnection: function(id) {
                return qq.indexOf(connectionManager._open, id) >= 0;
            },
            open: function(id, chunkIdx) {
                if (chunkIdx == null) {
                    connectionManager._waiting.push(id);
                }
                if (connectionManager.available()) {
                    if (chunkIdx == null) {
                        connectionManager._waiting.pop();
                        connectionManager._open.push(id);
                    } else {
                        (function() {
                            var openChunksEntry = connectionManager._openChunks[id] || [];
                            openChunksEntry.push(chunkIdx);
                            connectionManager._openChunks[id] = openChunksEntry;
                        })();
                    }
                    return true;
                }
                return false;
            },
            reset: function() {
                connectionManager._waiting = [];
                connectionManager._open = [];
            }
        }, simple = {
            send: function(id, name) {
                handler._getFileState(id).loaded = 0;
                log("Sending simple upload request for " + id);
                handler.uploadFile(id).then(function(response, optXhr) {
                    log("Simple upload request succeeded for " + id);
                    var responseToReport = upload.normalizeResponse(response, true), size = options.getSize(id);
                    options.onProgress(id, name, size, size);
                    upload.maybeNewUuid(id, responseToReport);
                    upload.cleanup(id, responseToReport, optXhr);
                }, function(response, optXhr) {
                    log("Simple upload request failed for " + id);
                    var responseToReport = upload.normalizeResponse(response, false);
                    if (!options.onAutoRetry(id, name, responseToReport, optXhr)) {
                        upload.cleanup(id, responseToReport, optXhr);
                    }
                });
            }
        }, upload = {
            cancel: function(id) {
                log("Cancelling " + id);
                options.paramsStore.remove(id);
                connectionManager.free(id);
            },
            cleanup: function(id, response, optXhr) {
                var name = options.getName(id);
                options.onComplete(id, name, response, optXhr);
                if (handler._getFileState(id)) {
                    handler._clearXhrs && handler._clearXhrs(id);
                }
                connectionManager.free(id);
            },
            getProxyOrBlob: function(id) {
                return handler.getProxy && handler.getProxy(id) || handler.getFile && handler.getFile(id);
            },
            initHandler: function() {
                var handlerType = namespace ? qq[namespace] : qq.traditional, handlerModuleSubtype = qq.supportedFeatures.ajaxUploading ? "Xhr" : "Form";
                handler = new handlerType[handlerModuleSubtype + "UploadHandler"](options, {
                    getDataByUuid: options.getDataByUuid,
                    getName: options.getName,
                    getSize: options.getSize,
                    getUuid: options.getUuid,
                    log: log,
                    onCancel: options.onCancel,
                    onProgress: options.onProgress,
                    onUuidChanged: options.onUuidChanged
                });
                if (handler._removeExpiredChunkingRecords) {
                    handler._removeExpiredChunkingRecords();
                }
            },
            isDeferredEligibleForUpload: function(id) {
                return options.isQueued(id);
            },
            maybeDefer: function(id, blob) {
                if (blob && !handler.getFile(id) && blob instanceof qq.BlobProxy) {
                    options.onUploadPrep(id);
                    log("Attempting to generate a blob on-demand for " + id);
                    blob.create().then(function(generatedBlob) {
                        log("Generated an on-demand blob for " + id);
                        handler.updateBlob(id, generatedBlob);
                        options.setSize(id, generatedBlob.size);
                        handler.reevaluateChunking(id);
                        upload.maybeSendDeferredFiles(id);
                    }, function(errorMessage) {
                        var errorResponse = {};
                        if (errorMessage) {
                            errorResponse.error = errorMessage;
                        }
                        log(qq.format("Failed to generate blob for ID {}.  Error message: {}.", id, errorMessage), "error");
                        options.onComplete(id, options.getName(id), qq.extend(errorResponse, preventRetryResponse), null);
                        upload.maybeSendDeferredFiles(id);
                        connectionManager.free(id);
                    });
                } else {
                    return upload.maybeSendDeferredFiles(id);
                }
                return false;
            },
            maybeSendDeferredFiles: function(id) {
                var idsInGroup = options.getIdsInProxyGroup(id), uploadedThisId = false;
                if (idsInGroup && idsInGroup.length) {
                    log("Maybe ready to upload proxy group file " + id);
                    qq.each(idsInGroup, function(idx, idInGroup) {
                        if (upload.isDeferredEligibleForUpload(idInGroup) && !!handler.getFile(idInGroup)) {
                            uploadedThisId = idInGroup === id;
                            upload.now(idInGroup);
                        } else if (upload.isDeferredEligibleForUpload(idInGroup)) {
                            return false;
                        }
                    });
                } else {
                    uploadedThisId = true;
                    upload.now(id);
                }
                return uploadedThisId;
            },
            maybeNewUuid: function(id, response) {
                if (response.newUuid !== undefined) {
                    options.onUuidChanged(id, response.newUuid);
                }
            },
            normalizeResponse: function(originalResponse, successful) {
                var response = originalResponse;
                if (!qq.isObject(originalResponse)) {
                    response = {};
                    if (qq.isString(originalResponse) && !successful) {
                        response.error = originalResponse;
                    }
                }
                response.success = successful;
                return response;
            },
            now: function(id) {
                var name = options.getName(id);
                if (!controller.isValid(id)) {
                    throw new qq.Error(id + " is not a valid file ID to upload!");
                }
                options.onUpload(id, name);
                if (chunkingPossible && handler._shouldChunkThisFile(id)) {
                    chunked.sendNext(id);
                } else {
                    simple.send(id, name);
                }
            },
            start: function(id) {
                var blobToUpload = upload.getProxyOrBlob(id);
                if (blobToUpload) {
                    return upload.maybeDefer(id, blobToUpload);
                } else {
                    upload.now(id);
                    return true;
                }
            }
        };
        qq.extend(this, {
            add: function(id, file) {
                handler.add.apply(this, arguments);
            },
            upload: function(id) {
                if (connectionManager.open(id)) {
                    return upload.start(id);
                }
                return false;
            },
            retry: function(id) {
                if (concurrentChunkingPossible) {
                    handler._getFileState(id).temp.ignoreFailure = false;
                }
                if (connectionManager.isUsingConnection(id)) {
                    return upload.start(id);
                } else {
                    return controller.upload(id);
                }
            },
            cancel: function(id) {
                var cancelRetVal = handler.cancel(id);
                if (qq.isGenericPromise(cancelRetVal)) {
                    cancelRetVal.then(function() {
                        upload.cancel(id);
                    });
                } else if (cancelRetVal !== false) {
                    upload.cancel(id);
                }
            },
            cancelAll: function() {
                var waitingOrConnected = connectionManager.getWaitingOrConnected(), i;
                if (waitingOrConnected.length) {
                    for (i = waitingOrConnected.length - 1; i >= 0; i--) {
                        controller.cancel(waitingOrConnected[i]);
                    }
                }
                connectionManager.reset();
            },
            getFile: function(id) {
                if (handler.getProxy && handler.getProxy(id)) {
                    return handler.getProxy(id).referenceBlob;
                }
                return handler.getFile && handler.getFile(id);
            },
            isProxied: function(id) {
                return !!(handler.getProxy && handler.getProxy(id));
            },
            getInput: function(id) {
                if (handler.getInput) {
                    return handler.getInput(id);
                }
            },
            reset: function() {
                log("Resetting upload handler");
                controller.cancelAll();
                connectionManager.reset();
                handler.reset();
            },
            expunge: function(id) {
                if (controller.isValid(id)) {
                    return handler.expunge(id);
                }
            },
            isValid: function(id) {
                return handler.isValid(id);
            },
            getResumableFilesData: function() {
                if (handler.getResumableFilesData) {
                    return handler.getResumableFilesData();
                }
                return [];
            },
            getThirdPartyFileId: function(id) {
                if (controller.isValid(id)) {
                    return handler.getThirdPartyFileId(id);
                }
            },
            pause: function(id) {
                if (controller.isResumable(id) && handler.pause && controller.isValid(id) && handler.pause(id)) {
                    connectionManager.free(id);
                    handler.moveInProgressToRemaining(id);
                    return true;
                }
                return false;
            },
            isResumable: function(id) {
                return !!handler.isResumable && handler.isResumable(id);
            }
        });
        qq.extend(options, o);
        log = options.log;
        chunkingPossible = options.chunking.enabled && qq.supportedFeatures.chunking;
        concurrentChunkingPossible = chunkingPossible && options.chunking.concurrent.enabled;
        preventRetryResponse = function() {
            var response = {};
            response[options.preventRetryParam] = true;
            return response;
        }();
        upload.initHandler();
    };
    qq.WindowReceiveMessage = function(o) {
        "use strict";
        var options = {
            log: function(message, level) {}
        }, callbackWrapperDetachers = {};
        qq.extend(options, o);
        qq.extend(this, {
            receiveMessage: function(id, callback) {
                var onMessageCallbackWrapper = function(event) {
                    callback(event.data);
                };
                if (window.postMessage) {
                    callbackWrapperDetachers[id] = qq(window).attach("message", onMessageCallbackWrapper);
                } else {
                    log("iframe message passing not supported in this browser!", "error");
                }
            },
            stopReceivingMessages: function(id) {
                if (window.postMessage) {
                    var detacher = callbackWrapperDetachers[id];
                    if (detacher) {
                        detacher();
                    }
                }
            }
        });
    };
    qq.FormUploadHandler = function(spec) {
        "use strict";
        var options = spec.options, handler = this, proxy = spec.proxy, formHandlerInstanceId = qq.getUniqueId(), onloadCallbacks = {}, detachLoadEvents = {}, postMessageCallbackTimers = {}, isCors = options.isCors, inputName = options.inputName, getUuid = proxy.getUuid, log = proxy.log, corsMessageReceiver = new qq.WindowReceiveMessage({
            log: log
        });
        function expungeFile(id) {
            delete detachLoadEvents[id];
            if (isCors) {
                clearTimeout(postMessageCallbackTimers[id]);
                delete postMessageCallbackTimers[id];
                corsMessageReceiver.stopReceivingMessages(id);
            }
            var iframe = document.getElementById(handler._getIframeName(id));
            if (iframe) {
                iframe.setAttribute("src", "javascript:false;");
                qq(iframe).remove();
            }
        }
        function getFileIdForIframeName(iframeName) {
            return iframeName.split("_")[0];
        }
        function initIframeForUpload(name) {
            var iframe = qq.toElement("<iframe src='javascript:false;' name='" + name + "' />");
            iframe.setAttribute("id", name);
            iframe.style.display = "none";
            document.body.appendChild(iframe);
            return iframe;
        }
        function registerPostMessageCallback(iframe, callback) {
            var iframeName = iframe.id, fileId = getFileIdForIframeName(iframeName), uuid = getUuid(fileId);
            onloadCallbacks[uuid] = callback;
            detachLoadEvents[fileId] = qq(iframe).attach("load", function() {
                if (handler.getInput(fileId)) {
                    log("Received iframe load event for CORS upload request (iframe name " + iframeName + ")");
                    postMessageCallbackTimers[iframeName] = setTimeout(function() {
                        var errorMessage = "No valid message received from loaded iframe for iframe name " + iframeName;
                        log(errorMessage, "error");
                        callback({
                            error: errorMessage
                        });
                    }, 1e3);
                }
            });
            corsMessageReceiver.receiveMessage(iframeName, function(message) {
                log("Received the following window message: '" + message + "'");
                var fileId = getFileIdForIframeName(iframeName), response = handler._parseJsonResponse(message), uuid = response.uuid, onloadCallback;
                if (uuid && onloadCallbacks[uuid]) {
                    log("Handling response for iframe name " + iframeName);
                    clearTimeout(postMessageCallbackTimers[iframeName]);
                    delete postMessageCallbackTimers[iframeName];
                    handler._detachLoadEvent(iframeName);
                    onloadCallback = onloadCallbacks[uuid];
                    delete onloadCallbacks[uuid];
                    corsMessageReceiver.stopReceivingMessages(iframeName);
                    onloadCallback(response);
                } else if (!uuid) {
                    log("'" + message + "' does not contain a UUID - ignoring.");
                }
            });
        }
        qq.extend(this, new qq.UploadHandler(spec));
        qq.override(this, function(super_) {
            return {
                add: function(id, fileInput) {
                    super_.add(id, {
                        input: fileInput
                    });
                    fileInput.setAttribute("name", inputName);
                    if (fileInput.parentNode) {
                        qq(fileInput).remove();
                    }
                },
                expunge: function(id) {
                    expungeFile(id);
                    super_.expunge(id);
                },
                isValid: function(id) {
                    return super_.isValid(id) && handler._getFileState(id).input !== undefined;
                }
            };
        });
        qq.extend(this, {
            getInput: function(id) {
                return handler._getFileState(id).input;
            },
            _attachLoadEvent: function(iframe, callback) {
                var responseDescriptor;
                if (isCors) {
                    registerPostMessageCallback(iframe, callback);
                } else {
                    detachLoadEvents[iframe.id] = qq(iframe).attach("load", function() {
                        log("Received response for " + iframe.id);
                        if (!iframe.parentNode) {
                            return;
                        }
                        try {
                            if (iframe.contentDocument && iframe.contentDocument.body && iframe.contentDocument.body.innerHTML == "false") {
                                return;
                            }
                        } catch (error) {
                            log("Error when attempting to access iframe during handling of upload response (" + error.message + ")", "error");
                            responseDescriptor = {
                                success: false
                            };
                        }
                        callback(responseDescriptor);
                    });
                }
            },
            _createIframe: function(id) {
                var iframeName = handler._getIframeName(id);
                return initIframeForUpload(iframeName);
            },
            _detachLoadEvent: function(id) {
                if (detachLoadEvents[id] !== undefined) {
                    detachLoadEvents[id]();
                    delete detachLoadEvents[id];
                }
            },
            _getIframeName: function(fileId) {
                return fileId + "_" + formHandlerInstanceId;
            },
            _initFormForUpload: function(spec) {
                var method = spec.method, endpoint = spec.endpoint, params = spec.params, paramsInBody = spec.paramsInBody, targetName = spec.targetName, form = qq.toElement("<form method='" + method + "' enctype='multipart/form-data'></form>"), url = endpoint;
                if (paramsInBody) {
                    qq.obj2Inputs(params, form);
                } else {
                    url = qq.obj2url(params, endpoint);
                }
                form.setAttribute("action", url);
                form.setAttribute("target", targetName);
                form.style.display = "none";
                document.body.appendChild(form);
                return form;
            },
            _parseJsonResponse: function(innerHtmlOrMessage) {
                var response = {};
                try {
                    response = qq.parseJson(innerHtmlOrMessage);
                } catch (error) {
                    log("Error when attempting to parse iframe upload response (" + error.message + ")", "error");
                }
                return response;
            }
        });
    };
    qq.XhrUploadHandler = function(spec) {
        "use strict";
        var handler = this, namespace = spec.options.namespace, proxy = spec.proxy, chunking = spec.options.chunking, resume = spec.options.resume, chunkFiles = chunking && spec.options.chunking.enabled && qq.supportedFeatures.chunking, resumeEnabled = resume && spec.options.resume.enabled && chunkFiles && qq.supportedFeatures.resume, getName = proxy.getName, getSize = proxy.getSize, getUuid = proxy.getUuid, getEndpoint = proxy.getEndpoint, getDataByUuid = proxy.getDataByUuid, onUuidChanged = proxy.onUuidChanged, onProgress = proxy.onProgress, log = proxy.log;
        function abort(id) {
            qq.each(handler._getXhrs(id), function(xhrId, xhr) {
                var ajaxRequester = handler._getAjaxRequester(id, xhrId);
                xhr.onreadystatechange = null;
                xhr.upload.onprogress = null;
                xhr.abort();
                ajaxRequester && ajaxRequester.canceled && ajaxRequester.canceled(id);
            });
        }
        qq.extend(this, new qq.UploadHandler(spec));
        qq.override(this, function(super_) {
            return {
                add: function(id, blobOrProxy) {
                    if (qq.isFile(blobOrProxy) || qq.isBlob(blobOrProxy)) {
                        super_.add(id, {
                            file: blobOrProxy
                        });
                    } else if (blobOrProxy instanceof qq.BlobProxy) {
                        super_.add(id, {
                            proxy: blobOrProxy
                        });
                    } else {
                        throw new Error("Passed obj is not a File, Blob, or proxy");
                    }
                    handler._initTempState(id);
                    resumeEnabled && handler._maybePrepareForResume(id);
                },
                expunge: function(id) {
                    abort(id);
                    handler._maybeDeletePersistedChunkData(id);
                    handler._clearXhrs(id);
                    super_.expunge(id);
                }
            };
        });
        qq.extend(this, {
            clearCachedChunk: function(id, chunkIdx) {
                delete handler._getFileState(id).temp.cachedChunks[chunkIdx];
            },
            clearXhr: function(id, chunkIdx) {
                var tempState = handler._getFileState(id).temp;
                if (tempState.xhrs) {
                    delete tempState.xhrs[chunkIdx];
                }
                if (tempState.ajaxRequesters) {
                    delete tempState.ajaxRequesters[chunkIdx];
                }
            },
            finalizeChunks: function(id, responseParser) {
                var lastChunkIdx = handler._getTotalChunks(id) - 1, xhr = handler._getXhr(id, lastChunkIdx);
                if (responseParser) {
                    return new qq.Promise().success(responseParser(xhr), xhr);
                }
                return new qq.Promise().success({}, xhr);
            },
            getFile: function(id) {
                return handler.isValid(id) && handler._getFileState(id).file;
            },
            getProxy: function(id) {
                return handler.isValid(id) && handler._getFileState(id).proxy;
            },
            getResumableFilesData: function() {
                var resumableFilesData = [];
                handler._iterateResumeRecords(function(key, uploadData) {
                    handler.moveInProgressToRemaining(null, uploadData.chunking.inProgress, uploadData.chunking.remaining);
                    var data = {
                        name: uploadData.name,
                        remaining: uploadData.chunking.remaining,
                        size: uploadData.size,
                        uuid: uploadData.uuid
                    };
                    if (uploadData.key) {
                        data.key = uploadData.key;
                    }
                    resumableFilesData.push(data);
                });
                return resumableFilesData;
            },
            isResumable: function(id) {
                return !!chunking && handler.isValid(id) && !handler._getFileState(id).notResumable;
            },
            moveInProgressToRemaining: function(id, optInProgress, optRemaining) {
                var inProgress = optInProgress || handler._getFileState(id).chunking.inProgress, remaining = optRemaining || handler._getFileState(id).chunking.remaining;
                if (inProgress) {
                    log(qq.format("Moving these chunks from in-progress {}, to remaining.", JSON.stringify(inProgress)));
                    inProgress.reverse();
                    qq.each(inProgress, function(idx, chunkIdx) {
                        remaining.unshift(chunkIdx);
                    });
                    inProgress.length = 0;
                }
            },
            pause: function(id) {
                if (handler.isValid(id)) {
                    log(qq.format("Aborting XHR upload for {} '{}' due to pause instruction.", id, getName(id)));
                    handler._getFileState(id).paused = true;
                    abort(id);
                    return true;
                }
            },
            reevaluateChunking: function(id) {
                if (chunking && handler.isValid(id)) {
                    var state = handler._getFileState(id), totalChunks, i;
                    delete state.chunking;
                    state.chunking = {};
                    totalChunks = handler._getTotalChunks(id);
                    if (totalChunks > 1 || chunking.mandatory) {
                        state.chunking.enabled = true;
                        state.chunking.parts = totalChunks;
                        state.chunking.remaining = [];
                        for (i = 0; i < totalChunks; i++) {
                            state.chunking.remaining.push(i);
                        }
                        handler._initTempState(id);
                    } else {
                        state.chunking.enabled = false;
                    }
                }
            },
            updateBlob: function(id, newBlob) {
                if (handler.isValid(id)) {
                    handler._getFileState(id).file = newBlob;
                }
            },
            _clearXhrs: function(id) {
                var tempState = handler._getFileState(id).temp;
                qq.each(tempState.ajaxRequesters, function(chunkId) {
                    delete tempState.ajaxRequesters[chunkId];
                });
                qq.each(tempState.xhrs, function(chunkId) {
                    delete tempState.xhrs[chunkId];
                });
            },
            _createXhr: function(id, optChunkIdx) {
                return handler._registerXhr(id, optChunkIdx, qq.createXhrInstance());
            },
            _getAjaxRequester: function(id, optChunkIdx) {
                var chunkIdx = optChunkIdx == null ? -1 : optChunkIdx;
                return handler._getFileState(id).temp.ajaxRequesters[chunkIdx];
            },
            _getChunkData: function(id, chunkIndex) {
                var chunkSize = chunking.partSize, fileSize = getSize(id), fileOrBlob = handler.getFile(id), startBytes = chunkSize * chunkIndex, endBytes = startBytes + chunkSize >= fileSize ? fileSize : startBytes + chunkSize, totalChunks = handler._getTotalChunks(id), cachedChunks = this._getFileState(id).temp.cachedChunks, blob = cachedChunks[chunkIndex] || qq.sliceBlob(fileOrBlob, startBytes, endBytes);
                cachedChunks[chunkIndex] = blob;
                return {
                    part: chunkIndex,
                    start: startBytes,
                    end: endBytes,
                    count: totalChunks,
                    blob: blob,
                    size: endBytes - startBytes
                };
            },
            _getChunkDataForCallback: function(chunkData) {
                return {
                    partIndex: chunkData.part,
                    startByte: chunkData.start + 1,
                    endByte: chunkData.end,
                    totalParts: chunkData.count
                };
            },
            _getLocalStorageId: function(id) {
                var formatVersion = "5.0", name = getName(id), size = getSize(id), chunkSize = chunking.partSize, endpoint = getEndpoint(id);
                return qq.format("qq{}resume{}-{}-{}-{}-{}", namespace, formatVersion, name, size, chunkSize, endpoint);
            },
            _getMimeType: function(id) {
                return handler.getFile(id).type;
            },
            _getPersistableData: function(id) {
                return handler._getFileState(id).chunking;
            },
            _getTotalChunks: function(id) {
                if (chunking) {
                    var fileSize = getSize(id), chunkSize = chunking.partSize;
                    return Math.ceil(fileSize / chunkSize);
                }
            },
            _getXhr: function(id, optChunkIdx) {
                var chunkIdx = optChunkIdx == null ? -1 : optChunkIdx;
                return handler._getFileState(id).temp.xhrs[chunkIdx];
            },
            _getXhrs: function(id) {
                return handler._getFileState(id).temp.xhrs;
            },
            _iterateResumeRecords: function(callback) {
                if (resumeEnabled) {
                    qq.each(localStorage, function(key, item) {
                        if (key.indexOf(qq.format("qq{}resume", namespace)) === 0) {
                            var uploadData = JSON.parse(item);
                            callback(key, uploadData);
                        }
                    });
                }
            },
            _initTempState: function(id) {
                handler._getFileState(id).temp = {
                    ajaxRequesters: {},
                    chunkProgress: {},
                    xhrs: {},
                    cachedChunks: {}
                };
            },
            _markNotResumable: function(id) {
                handler._getFileState(id).notResumable = true;
            },
            _maybeDeletePersistedChunkData: function(id) {
                var localStorageId;
                if (resumeEnabled && handler.isResumable(id)) {
                    localStorageId = handler._getLocalStorageId(id);
                    if (localStorageId && localStorage.getItem(localStorageId)) {
                        localStorage.removeItem(localStorageId);
                        return true;
                    }
                }
                return false;
            },
            _maybePrepareForResume: function(id) {
                var state = handler._getFileState(id), localStorageId, persistedData;
                if (resumeEnabled && state.key === undefined) {
                    localStorageId = handler._getLocalStorageId(id);
                    persistedData = localStorage.getItem(localStorageId);
                    if (persistedData) {
                        persistedData = JSON.parse(persistedData);
                        if (getDataByUuid(persistedData.uuid)) {
                            handler._markNotResumable(id);
                        } else {
                            log(qq.format("Identified file with ID {} and name of {} as resumable.", id, getName(id)));
                            onUuidChanged(id, persistedData.uuid);
                            state.key = persistedData.key;
                            state.chunking = persistedData.chunking;
                            state.loaded = persistedData.loaded;
                            state.attemptingResume = true;
                            handler.moveInProgressToRemaining(id);
                        }
                    }
                }
            },
            _maybePersistChunkedState: function(id) {
                var state = handler._getFileState(id), localStorageId, persistedData;
                if (resumeEnabled && handler.isResumable(id)) {
                    localStorageId = handler._getLocalStorageId(id);
                    persistedData = {
                        name: getName(id),
                        size: getSize(id),
                        uuid: getUuid(id),
                        key: state.key,
                        chunking: state.chunking,
                        loaded: state.loaded,
                        lastUpdated: Date.now()
                    };
                    try {
                        localStorage.setItem(localStorageId, JSON.stringify(persistedData));
                    } catch (error) {
                        log(qq.format("Unable to save resume data for '{}' due to error: '{}'.", id, error.toString()), "warn");
                    }
                }
            },
            _registerProgressHandler: function(id, chunkIdx, chunkSize) {
                var xhr = handler._getXhr(id, chunkIdx), name = getName(id), progressCalculator = {
                    simple: function(loaded, total) {
                        var fileSize = getSize(id);
                        if (loaded === total) {
                            onProgress(id, name, fileSize, fileSize);
                        } else {
                            onProgress(id, name, loaded >= fileSize ? fileSize - 1 : loaded, fileSize);
                        }
                    },
                    chunked: function(loaded, total) {
                        var chunkProgress = handler._getFileState(id).temp.chunkProgress, totalSuccessfullyLoadedForFile = handler._getFileState(id).loaded, loadedForRequest = loaded, totalForRequest = total, totalFileSize = getSize(id), estActualChunkLoaded = loadedForRequest - (totalForRequest - chunkSize), totalLoadedForFile = totalSuccessfullyLoadedForFile;
                        chunkProgress[chunkIdx] = estActualChunkLoaded;
                        qq.each(chunkProgress, function(chunkIdx, chunkLoaded) {
                            totalLoadedForFile += chunkLoaded;
                        });
                        onProgress(id, name, totalLoadedForFile, totalFileSize);
                    }
                };
                xhr.upload.onprogress = function(e) {
                    if (e.lengthComputable) {
                        var type = chunkSize == null ? "simple" : "chunked";
                        progressCalculator[type](e.loaded, e.total);
                    }
                };
            },
            _registerXhr: function(id, optChunkIdx, xhr, optAjaxRequester) {
                var xhrsId = optChunkIdx == null ? -1 : optChunkIdx, tempState = handler._getFileState(id).temp;
                tempState.xhrs = tempState.xhrs || {};
                tempState.ajaxRequesters = tempState.ajaxRequesters || {};
                tempState.xhrs[xhrsId] = xhr;
                if (optAjaxRequester) {
                    tempState.ajaxRequesters[xhrsId] = optAjaxRequester;
                }
                return xhr;
            },
            _removeExpiredChunkingRecords: function() {
                var expirationDays = resume.recordsExpireIn;
                handler._iterateResumeRecords(function(key, uploadData) {
                    var expirationDate = new Date(uploadData.lastUpdated);
                    expirationDate.setDate(expirationDate.getDate() + expirationDays);
                    if (expirationDate.getTime() <= Date.now()) {
                        log("Removing expired resume record with key " + key);
                        localStorage.removeItem(key);
                    }
                });
            },
            _shouldChunkThisFile: function(id) {
                var state = handler._getFileState(id);
                if (!state.chunking) {
                    handler.reevaluateChunking(id);
                }
                return state.chunking.enabled;
            }
        });
    };
    qq.DeleteFileAjaxRequester = function(o) {
        "use strict";
        var requester, options = {
            method: "DELETE",
            uuidParamName: "qquuid",
            endpointStore: {},
            maxConnections: 3,
            customHeaders: function(id) {
                return {};
            },
            paramsStore: {},
            cors: {
                expected: false,
                sendCredentials: false
            },
            log: function(str, level) {},
            onDelete: function(id) {},
            onDeleteComplete: function(id, xhrOrXdr, isError) {}
        };
        qq.extend(options, o);
        function getMandatedParams() {
            if (options.method.toUpperCase() === "POST") {
                return {
                    _method: "DELETE"
                };
            }
            return {};
        }
        requester = qq.extend(this, new qq.AjaxRequester({
            acceptHeader: "application/json",
            validMethods: [ "POST", "DELETE" ],
            method: options.method,
            endpointStore: options.endpointStore,
            paramsStore: options.paramsStore,
            mandatedParams: getMandatedParams(),
            maxConnections: options.maxConnections,
            customHeaders: function(id) {
                return options.customHeaders.get(id);
            },
            log: options.log,
            onSend: options.onDelete,
            onComplete: options.onDeleteComplete,
            cors: options.cors
        }));
        qq.extend(this, {
            sendDelete: function(id, uuid, additionalMandatedParams) {
                var additionalOptions = additionalMandatedParams || {};
                options.log("Submitting delete file request for " + id);
                if (options.method === "DELETE") {
                    requester.initTransport(id).withPath(uuid).withParams(additionalOptions).send();
                } else {
                    additionalOptions[options.uuidParamName] = uuid;
                    requester.initTransport(id).withParams(additionalOptions).send();
                }
            }
        });
    };
    (function() {
        function detectSubsampling(img) {
            var iw = img.naturalWidth, ih = img.naturalHeight, canvas = document.createElement("canvas"), ctx;
            if (iw * ih > 1024 * 1024) {
                canvas.width = canvas.height = 1;
                ctx = canvas.getContext("2d");
                ctx.drawImage(img, -iw + 1, 0);
                return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
            } else {
                return false;
            }
        }
        function detectVerticalSquash(img, iw, ih) {
            var canvas = document.createElement("canvas"), sy = 0, ey = ih, py = ih, ctx, data, alpha, ratio;
            canvas.width = 1;
            canvas.height = ih;
            ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            data = ctx.getImageData(0, 0, 1, ih).data;
            while (py > sy) {
                alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                } else {
                    sy = py;
                }
                py = ey + sy >> 1;
            }
            ratio = py / ih;
            return ratio === 0 ? 1 : ratio;
        }
        function renderImageToDataURL(img, blob, options, doSquash) {
            var canvas = document.createElement("canvas"), mime = options.mime || "image/jpeg", promise = new qq.Promise();
            renderImageToCanvas(img, blob, canvas, options, doSquash).then(function() {
                promise.success(canvas.toDataURL(mime, options.quality || .8));
            });
            return promise;
        }
        function maybeCalculateDownsampledDimensions(spec) {
            var maxPixels = 5241e3;
            if (!qq.ios()) {
                throw new qq.Error("Downsampled dimensions can only be reliably calculated for iOS!");
            }
            if (spec.origHeight * spec.origWidth > maxPixels) {
                return {
                    newHeight: Math.round(Math.sqrt(maxPixels * (spec.origHeight / spec.origWidth))),
                    newWidth: Math.round(Math.sqrt(maxPixels * (spec.origWidth / spec.origHeight)))
                };
            }
        }
        function renderImageToCanvas(img, blob, canvas, options, doSquash) {
            var iw = img.naturalWidth, ih = img.naturalHeight, width = options.width, height = options.height, ctx = canvas.getContext("2d"), promise = new qq.Promise(), modifiedDimensions;
            ctx.save();
            if (options.resize) {
                return renderImageToCanvasWithCustomResizer({
                    blob: blob,
                    canvas: canvas,
                    image: img,
                    imageHeight: ih,
                    imageWidth: iw,
                    orientation: options.orientation,
                    resize: options.resize,
                    targetHeight: height,
                    targetWidth: width
                });
            }
            if (!qq.supportedFeatures.unlimitedScaledImageSize) {
                modifiedDimensions = maybeCalculateDownsampledDimensions({
                    origWidth: width,
                    origHeight: height
                });
                if (modifiedDimensions) {
                    qq.log(qq.format("Had to reduce dimensions due to device limitations from {}w / {}h to {}w / {}h", width, height, modifiedDimensions.newWidth, modifiedDimensions.newHeight), "warn");
                    width = modifiedDimensions.newWidth;
                    height = modifiedDimensions.newHeight;
                }
            }
            transformCoordinate(canvas, width, height, options.orientation);
            if (qq.ios()) {
                (function() {
                    if (detectSubsampling(img)) {
                        iw /= 2;
                        ih /= 2;
                    }
                    var d = 1024, tmpCanvas = document.createElement("canvas"), vertSquashRatio = doSquash ? detectVerticalSquash(img, iw, ih) : 1, dw = Math.ceil(d * width / iw), dh = Math.ceil(d * height / ih / vertSquashRatio), sy = 0, dy = 0, tmpCtx, sx, dx;
                    tmpCanvas.width = tmpCanvas.height = d;
                    tmpCtx = tmpCanvas.getContext("2d");
                    while (sy < ih) {
                        sx = 0;
                        dx = 0;
                        while (sx < iw) {
                            tmpCtx.clearRect(0, 0, d, d);
                            tmpCtx.drawImage(img, -sx, -sy);
                            ctx.drawImage(tmpCanvas, 0, 0, d, d, dx, dy, dw, dh);
                            sx += d;
                            dx += dw;
                        }
                        sy += d;
                        dy += dh;
                    }
                    ctx.restore();
                    tmpCanvas = tmpCtx = null;
                })();
            } else {
                ctx.drawImage(img, 0, 0, width, height);
            }
            canvas.qqImageRendered && canvas.qqImageRendered();
            promise.success();
            return promise;
        }
        function renderImageToCanvasWithCustomResizer(resizeInfo) {
            var blob = resizeInfo.blob, image = resizeInfo.image, imageHeight = resizeInfo.imageHeight, imageWidth = resizeInfo.imageWidth, orientation = resizeInfo.orientation, promise = new qq.Promise(), resize = resizeInfo.resize, sourceCanvas = document.createElement("canvas"), sourceCanvasContext = sourceCanvas.getContext("2d"), targetCanvas = resizeInfo.canvas, targetHeight = resizeInfo.targetHeight, targetWidth = resizeInfo.targetWidth;
            transformCoordinate(sourceCanvas, imageWidth, imageHeight, orientation);
            targetCanvas.height = targetHeight;
            targetCanvas.width = targetWidth;
            sourceCanvasContext.drawImage(image, 0, 0);
            resize({
                blob: blob,
                height: targetHeight,
                image: image,
                sourceCanvas: sourceCanvas,
                targetCanvas: targetCanvas,
                width: targetWidth
            }).then(function success() {
                targetCanvas.qqImageRendered && targetCanvas.qqImageRendered();
                promise.success();
            }, promise.failure);
            return promise;
        }
        function transformCoordinate(canvas, width, height, orientation) {
            switch (orientation) {
              case 5:
              case 6:
              case 7:
              case 8:
                canvas.width = height;
                canvas.height = width;
                break;

              default:
                canvas.width = width;
                canvas.height = height;
            }
            var ctx = canvas.getContext("2d");
            switch (orientation) {
              case 2:
                ctx.translate(width, 0);
                ctx.scale(-1, 1);
                break;

              case 3:
                ctx.translate(width, height);
                ctx.rotate(Math.PI);
                break;

              case 4:
                ctx.translate(0, height);
                ctx.scale(1, -1);
                break;

              case 5:
                ctx.rotate(.5 * Math.PI);
                ctx.scale(1, -1);
                break;

              case 6:
                ctx.rotate(.5 * Math.PI);
                ctx.translate(0, -height);
                break;

              case 7:
                ctx.rotate(.5 * Math.PI);
                ctx.translate(width, -height);
                ctx.scale(-1, 1);
                break;

              case 8:
                ctx.rotate(-.5 * Math.PI);
                ctx.translate(-width, 0);
                break;

              default:
                break;
            }
        }
        function MegaPixImage(srcImage, errorCallback) {
            var self = this;
            if (window.Blob && srcImage instanceof Blob) {
                (function() {
                    var img = new Image(), URL = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
                    if (!URL) {
                        throw Error("No createObjectURL function found to create blob url");
                    }
                    img.src = URL.createObjectURL(srcImage);
                    self.blob = srcImage;
                    srcImage = img;
                })();
            }
            if (!srcImage.naturalWidth && !srcImage.naturalHeight) {
                srcImage.onload = function() {
                    var listeners = self.imageLoadListeners;
                    if (listeners) {
                        self.imageLoadListeners = null;
                        setTimeout(function() {
                            for (var i = 0, len = listeners.length; i < len; i++) {
                                listeners[i]();
                            }
                        }, 0);
                    }
                };
                srcImage.onerror = errorCallback;
                this.imageLoadListeners = [];
            }
            this.srcImage = srcImage;
        }
        MegaPixImage.prototype.render = function(target, options) {
            options = options || {};
            var self = this, imgWidth = this.srcImage.naturalWidth, imgHeight = this.srcImage.naturalHeight, width = options.width, height = options.height, maxWidth = options.maxWidth, maxHeight = options.maxHeight, doSquash = !this.blob || this.blob.type === "image/jpeg", tagName = target.tagName.toLowerCase(), opt;
            if (this.imageLoadListeners) {
                this.imageLoadListeners.push(function() {
                    self.render(target, options);
                });
                return;
            }
            if (width && !height) {
                height = imgHeight * width / imgWidth << 0;
            } else if (height && !width) {
                width = imgWidth * height / imgHeight << 0;
            } else {
                width = imgWidth;
                height = imgHeight;
            }
            if (maxWidth && width > maxWidth) {
                width = maxWidth;
                height = imgHeight * width / imgWidth << 0;
            }
            if (maxHeight && height > maxHeight) {
                height = maxHeight;
                width = imgWidth * height / imgHeight << 0;
            }
            opt = {
                width: width,
                height: height
            }, qq.each(options, function(optionsKey, optionsValue) {
                opt[optionsKey] = optionsValue;
            });
            if (tagName === "img") {
                (function() {
                    var oldTargetSrc = target.src;
                    renderImageToDataURL(self.srcImage, self.blob, opt, doSquash).then(function(dataUri) {
                        target.src = dataUri;
                        oldTargetSrc === target.src && target.onload();
                    });
                })();
            } else if (tagName === "canvas") {
                renderImageToCanvas(this.srcImage, this.blob, target, opt, doSquash);
            }
            if (typeof this.onrender === "function") {
                this.onrender(target);
            }
        };
        qq.MegaPixImage = MegaPixImage;
    })();
    qq.ImageGenerator = function(log) {
        "use strict";
        function isImg(el) {
            return el.tagName.toLowerCase() === "img";
        }
        function isCanvas(el) {
            return el.tagName.toLowerCase() === "canvas";
        }
        function isImgCorsSupported() {
            return new Image().crossOrigin !== undefined;
        }
        function isCanvasSupported() {
            var canvas = document.createElement("canvas");
            return canvas.getContext && canvas.getContext("2d");
        }
        function determineMimeOfFileName(nameWithPath) {
            var pathSegments = nameWithPath.split("/"), name = pathSegments[pathSegments.length - 1].split("?")[0], extension = qq.getExtension(name);
            extension = extension && extension.toLowerCase();
            switch (extension) {
              case "jpeg":
              case "jpg":
                return "image/jpeg";

              case "png":
                return "image/png";

              case "bmp":
                return "image/bmp";

              case "gif":
                return "image/gif";

              case "tiff":
              case "tif":
                return "image/tiff";
            }
        }
        function isCrossOrigin(url) {
            var targetAnchor = document.createElement("a"), targetProtocol, targetHostname, targetPort;
            targetAnchor.href = url;
            targetProtocol = targetAnchor.protocol;
            targetPort = targetAnchor.port;
            targetHostname = targetAnchor.hostname;
            if (targetProtocol.toLowerCase() !== window.location.protocol.toLowerCase()) {
                return true;
            }
            if (targetHostname.toLowerCase() !== window.location.hostname.toLowerCase()) {
                return true;
            }
            if (targetPort !== window.location.port && !qq.ie()) {
                return true;
            }
            return false;
        }
        function registerImgLoadListeners(img, promise) {
            img.onload = function() {
                img.onload = null;
                img.onerror = null;
                promise.success(img);
            };
            img.onerror = function() {
                img.onload = null;
                img.onerror = null;
                log("Problem drawing thumbnail!", "error");
                promise.failure(img, "Problem drawing thumbnail!");
            };
        }
        function registerCanvasDrawImageListener(canvas, promise) {
            canvas.qqImageRendered = function() {
                promise.success(canvas);
            };
        }
        function registerThumbnailRenderedListener(imgOrCanvas, promise) {
            var registered = isImg(imgOrCanvas) || isCanvas(imgOrCanvas);
            if (isImg(imgOrCanvas)) {
                registerImgLoadListeners(imgOrCanvas, promise);
            } else if (isCanvas(imgOrCanvas)) {
                registerCanvasDrawImageListener(imgOrCanvas, promise);
            } else {
                promise.failure(imgOrCanvas);
                log(qq.format("Element container of type {} is not supported!", imgOrCanvas.tagName), "error");
            }
            return registered;
        }
        function draw(fileOrBlob, container, options) {
            var drawPreview = new qq.Promise(), identifier = new qq.Identify(fileOrBlob, log), maxSize = options.maxSize, orient = options.orient == null ? true : options.orient, megapixErrorHandler = function() {
                container.onerror = null;
                container.onload = null;
                log("Could not render preview, file may be too large!", "error");
                drawPreview.failure(container, "Browser cannot render image!");
            };
            identifier.isPreviewable().then(function(mime) {
                var dummyExif = {
                    parse: function() {
                        return new qq.Promise().success();
                    }
                }, exif = orient ? new qq.Exif(fileOrBlob, log) : dummyExif, mpImg = new qq.MegaPixImage(fileOrBlob, megapixErrorHandler);
                if (registerThumbnailRenderedListener(container, drawPreview)) {
                    exif.parse().then(function(exif) {
                        var orientation = exif && exif.Orientation;
                        mpImg.render(container, {
                            maxWidth: maxSize,
                            maxHeight: maxSize,
                            orientation: orientation,
                            mime: mime,
                            resize: options.customResizeFunction
                        });
                    }, function(failureMsg) {
                        log(qq.format("EXIF data could not be parsed ({}).  Assuming orientation = 1.", failureMsg));
                        mpImg.render(container, {
                            maxWidth: maxSize,
                            maxHeight: maxSize,
                            mime: mime,
                            resize: options.customResizeFunction
                        });
                    });
                }
            }, function() {
                log("Not previewable");
                drawPreview.failure(container, "Not previewable");
            });
            return drawPreview;
        }
        function drawOnCanvasOrImgFromUrl(url, canvasOrImg, draw, maxSize, customResizeFunction) {
            var tempImg = new Image(), tempImgRender = new qq.Promise();
            registerThumbnailRenderedListener(tempImg, tempImgRender);
            if (isCrossOrigin(url)) {
                tempImg.crossOrigin = "anonymous";
            }
            tempImg.src = url;
            tempImgRender.then(function rendered() {
                registerThumbnailRenderedListener(canvasOrImg, draw);
                var mpImg = new qq.MegaPixImage(tempImg);
                mpImg.render(canvasOrImg, {
                    maxWidth: maxSize,
                    maxHeight: maxSize,
                    mime: determineMimeOfFileName(url),
                    resize: customResizeFunction
                });
            }, draw.failure);
        }
        function drawOnImgFromUrlWithCssScaling(url, img, draw, maxSize) {
            registerThumbnailRenderedListener(img, draw);
            qq(img).css({
                maxWidth: maxSize + "px",
                maxHeight: maxSize + "px"
            });
            img.src = url;
        }
        function drawFromUrl(url, container, options) {
            var draw = new qq.Promise(), scale = options.scale, maxSize = scale ? options.maxSize : null;
            if (scale && isImg(container)) {
                if (isCanvasSupported()) {
                    if (isCrossOrigin(url) && !isImgCorsSupported()) {
                        drawOnImgFromUrlWithCssScaling(url, container, draw, maxSize);
                    } else {
                        drawOnCanvasOrImgFromUrl(url, container, draw, maxSize);
                    }
                } else {
                    drawOnImgFromUrlWithCssScaling(url, container, draw, maxSize);
                }
            } else if (isCanvas(container)) {
                drawOnCanvasOrImgFromUrl(url, container, draw, maxSize);
            } else if (registerThumbnailRenderedListener(container, draw)) {
                container.src = url;
            }
            return draw;
        }
        qq.extend(this, {
            generate: function(fileBlobOrUrl, container, options) {
                if (qq.isString(fileBlobOrUrl)) {
                    log("Attempting to update thumbnail based on server response.");
                    return drawFromUrl(fileBlobOrUrl, container, options || {});
                } else {
                    log("Attempting to draw client-side image preview.");
                    return draw(fileBlobOrUrl, container, options || {});
                }
            }
        });
        this._testing = {};
        this._testing.isImg = isImg;
        this._testing.isCanvas = isCanvas;
        this._testing.isCrossOrigin = isCrossOrigin;
        this._testing.determineMimeOfFileName = determineMimeOfFileName;
    };
    qq.Exif = function(fileOrBlob, log) {
        "use strict";
        var TAG_IDS = [ 274 ], TAG_INFO = {
            274: {
                name: "Orientation",
                bytes: 2
            }
        };
        function parseLittleEndian(hex) {
            var result = 0, pow = 0;
            while (hex.length > 0) {
                result += parseInt(hex.substring(0, 2), 16) * Math.pow(2, pow);
                hex = hex.substring(2, hex.length);
                pow += 8;
            }
            return result;
        }
        function seekToApp1(offset, promise) {
            var theOffset = offset, thePromise = promise;
            if (theOffset === undefined) {
                theOffset = 2;
                thePromise = new qq.Promise();
            }
            qq.readBlobToHex(fileOrBlob, theOffset, 4).then(function(hex) {
                var match = /^ffe([0-9])/.exec(hex), segmentLength;
                if (match) {
                    if (match[1] !== "1") {
                        segmentLength = parseInt(hex.slice(4, 8), 16);
                        seekToApp1(theOffset + segmentLength + 2, thePromise);
                    } else {
                        thePromise.success(theOffset);
                    }
                } else {
                    thePromise.failure("No EXIF header to be found!");
                }
            });
            return thePromise;
        }
        function getApp1Offset() {
            var promise = new qq.Promise();
            qq.readBlobToHex(fileOrBlob, 0, 6).then(function(hex) {
                if (hex.indexOf("ffd8") !== 0) {
                    promise.failure("Not a valid JPEG!");
                } else {
                    seekToApp1().then(function(offset) {
                        promise.success(offset);
                    }, function(error) {
                        promise.failure(error);
                    });
                }
            });
            return promise;
        }
        function isLittleEndian(app1Start) {
            var promise = new qq.Promise();
            qq.readBlobToHex(fileOrBlob, app1Start + 10, 2).then(function(hex) {
                promise.success(hex === "4949");
            });
            return promise;
        }
        function getDirEntryCount(app1Start, littleEndian) {
            var promise = new qq.Promise();
            qq.readBlobToHex(fileOrBlob, app1Start + 18, 2).then(function(hex) {
                if (littleEndian) {
                    return promise.success(parseLittleEndian(hex));
                } else {
                    promise.success(parseInt(hex, 16));
                }
            });
            return promise;
        }
        function getIfd(app1Start, dirEntries) {
            var offset = app1Start + 20, bytes = dirEntries * 12;
            return qq.readBlobToHex(fileOrBlob, offset, bytes);
        }
        function getDirEntries(ifdHex) {
            var entries = [], offset = 0;
            while (offset + 24 <= ifdHex.length) {
                entries.push(ifdHex.slice(offset, offset + 24));
                offset += 24;
            }
            return entries;
        }
        function getTagValues(littleEndian, dirEntries) {
            var TAG_VAL_OFFSET = 16, tagsToFind = qq.extend([], TAG_IDS), vals = {};
            qq.each(dirEntries, function(idx, entry) {
                var idHex = entry.slice(0, 4), id = littleEndian ? parseLittleEndian(idHex) : parseInt(idHex, 16), tagsToFindIdx = tagsToFind.indexOf(id), tagValHex, tagName, tagValLength;
                if (tagsToFindIdx >= 0) {
                    tagName = TAG_INFO[id].name;
                    tagValLength = TAG_INFO[id].bytes;
                    tagValHex = entry.slice(TAG_VAL_OFFSET, TAG_VAL_OFFSET + tagValLength * 2);
                    vals[tagName] = littleEndian ? parseLittleEndian(tagValHex) : parseInt(tagValHex, 16);
                    tagsToFind.splice(tagsToFindIdx, 1);
                }
                if (tagsToFind.length === 0) {
                    return false;
                }
            });
            return vals;
        }
        qq.extend(this, {
            parse: function() {
                var parser = new qq.Promise(), onParseFailure = function(message) {
                    log(qq.format("EXIF header parse failed: '{}' ", message));
                    parser.failure(message);
                };
                getApp1Offset().then(function(app1Offset) {
                    log(qq.format("Moving forward with EXIF header parsing for '{}'", fileOrBlob.name === undefined ? "blob" : fileOrBlob.name));
                    isLittleEndian(app1Offset).then(function(littleEndian) {
                        log(qq.format("EXIF Byte order is {} endian", littleEndian ? "little" : "big"));
                        getDirEntryCount(app1Offset, littleEndian).then(function(dirEntryCount) {
                            log(qq.format("Found {} APP1 directory entries", dirEntryCount));
                            getIfd(app1Offset, dirEntryCount).then(function(ifdHex) {
                                var dirEntries = getDirEntries(ifdHex), tagValues = getTagValues(littleEndian, dirEntries);
                                log("Successfully parsed some EXIF tags");
                                parser.success(tagValues);
                            }, onParseFailure);
                        }, onParseFailure);
                    }, onParseFailure);
                }, onParseFailure);
                return parser;
            }
        });
        this._testing = {};
        this._testing.parseLittleEndian = parseLittleEndian;
    };
    qq.Identify = function(fileOrBlob, log) {
        "use strict";
        function isIdentifiable(magicBytes, questionableBytes) {
            var identifiable = false, magicBytesEntries = [].concat(magicBytes);
            qq.each(magicBytesEntries, function(idx, magicBytesArrayEntry) {
                if (questionableBytes.indexOf(magicBytesArrayEntry) === 0) {
                    identifiable = true;
                    return false;
                }
            });
            return identifiable;
        }
        qq.extend(this, {
            isPreviewable: function() {
                var self = this, identifier = new qq.Promise(), previewable = false, name = fileOrBlob.name === undefined ? "blob" : fileOrBlob.name;
                log(qq.format("Attempting to determine if {} can be rendered in this browser", name));
                log("First pass: check type attribute of blob object.");
                if (this.isPreviewableSync()) {
                    log("Second pass: check for magic bytes in file header.");
                    qq.readBlobToHex(fileOrBlob, 0, 4).then(function(hex) {
                        qq.each(self.PREVIEWABLE_MIME_TYPES, function(mime, bytes) {
                            if (isIdentifiable(bytes, hex)) {
                                if (mime !== "image/tiff" || qq.supportedFeatures.tiffPreviews) {
                                    previewable = true;
                                    identifier.success(mime);
                                }
                                return false;
                            }
                        });
                        log(qq.format("'{}' is {} able to be rendered in this browser", name, previewable ? "" : "NOT"));
                        if (!previewable) {
                            identifier.failure();
                        }
                    }, function() {
                        log("Error reading file w/ name '" + name + "'.  Not able to be rendered in this browser.");
                        identifier.failure();
                    });
                } else {
                    identifier.failure();
                }
                return identifier;
            },
            isPreviewableSync: function() {
                var fileMime = fileOrBlob.type, isRecognizedImage = qq.indexOf(Object.keys(this.PREVIEWABLE_MIME_TYPES), fileMime) >= 0, previewable = false, name = fileOrBlob.name === undefined ? "blob" : fileOrBlob.name;
                if (isRecognizedImage) {
                    if (fileMime === "image/tiff") {
                        previewable = qq.supportedFeatures.tiffPreviews;
                    } else {
                        previewable = true;
                    }
                }
                !previewable && log(name + " is not previewable in this browser per the blob's type attr");
                return previewable;
            }
        });
    };
    qq.Identify.prototype.PREVIEWABLE_MIME_TYPES = {
        "image/jpeg": "ffd8ff",
        "image/gif": "474946",
        "image/png": "89504e",
        "image/bmp": "424d",
        "image/tiff": [ "49492a00", "4d4d002a" ]
    };
    qq.ImageValidation = function(blob, log) {
        "use strict";
        function hasNonZeroLimits(limits) {
            var atLeastOne = false;
            qq.each(limits, function(limit, value) {
                if (value > 0) {
                    atLeastOne = true;
                    return false;
                }
            });
            return atLeastOne;
        }
        function getWidthHeight() {
            var sizeDetermination = new qq.Promise();
            new qq.Identify(blob, log).isPreviewable().then(function() {
                var image = new Image(), url = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
                if (url) {
                    image.onerror = function() {
                        log("Cannot determine dimensions for image.  May be too large.", "error");
                        sizeDetermination.failure();
                    };
                    image.onload = function() {
                        sizeDetermination.success({
                            width: this.width,
                            height: this.height
                        });
                    };
                    image.src = url.createObjectURL(blob);
                } else {
                    log("No createObjectURL function available to generate image URL!", "error");
                    sizeDetermination.failure();
                }
            }, sizeDetermination.failure);
            return sizeDetermination;
        }
        function getFailingLimit(limits, dimensions) {
            var failingLimit;
            qq.each(limits, function(limitName, limitValue) {
                if (limitValue > 0) {
                    var limitMatcher = /(max|min)(Width|Height)/.exec(limitName), dimensionPropName = limitMatcher[2].charAt(0).toLowerCase() + limitMatcher[2].slice(1), actualValue = dimensions[dimensionPropName];
                    switch (limitMatcher[1]) {
                      case "min":
                        if (actualValue < limitValue) {
                            failingLimit = limitName;
                            return false;
                        }
                        break;

                      case "max":
                        if (actualValue > limitValue) {
                            failingLimit = limitName;
                            return false;
                        }
                        break;
                    }
                }
            });
            return failingLimit;
        }
        this.validate = function(limits) {
            var validationEffort = new qq.Promise();
            log("Attempting to validate image.");
            if (hasNonZeroLimits(limits)) {
                getWidthHeight().then(function(dimensions) {
                    var failingLimit = getFailingLimit(limits, dimensions);
                    if (failingLimit) {
                        validationEffort.failure(failingLimit);
                    } else {
                        validationEffort.success();
                    }
                }, validationEffort.success);
            } else {
                validationEffort.success();
            }
            return validationEffort;
        };
    };
    qq.Session = function(spec) {
        "use strict";
        var options = {
            endpoint: null,
            params: {},
            customHeaders: {},
            cors: {},
            addFileRecord: function(sessionData) {},
            log: function(message, level) {}
        };
        qq.extend(options, spec, true);
        function isJsonResponseValid(response) {
            if (qq.isArray(response)) {
                return true;
            }
            options.log("Session response is not an array.", "error");
        }
        function handleFileItems(fileItems, success, xhrOrXdr, promise) {
            var someItemsIgnored = false;
            success = success && isJsonResponseValid(fileItems);
            if (success) {
                qq.each(fileItems, function(idx, fileItem) {
                    if (fileItem.uuid == null) {
                        someItemsIgnored = true;
                        options.log(qq.format("Session response item {} did not include a valid UUID - ignoring.", idx), "error");
                    } else if (fileItem.name == null) {
                        someItemsIgnored = true;
                        options.log(qq.format("Session response item {} did not include a valid name - ignoring.", idx), "error");
                    } else {
                        try {
                            options.addFileRecord(fileItem);
                            return true;
                        } catch (err) {
                            someItemsIgnored = true;
                            options.log(err.message, "error");
                        }
                    }
                    return false;
                });
            }
            promise[success && !someItemsIgnored ? "success" : "failure"](fileItems, xhrOrXdr);
        }
        this.refresh = function() {
            var refreshEffort = new qq.Promise(), refreshCompleteCallback = function(response, success, xhrOrXdr) {
                handleFileItems(response, success, xhrOrXdr, refreshEffort);
            }, requesterOptions = qq.extend({}, options), requester = new qq.SessionAjaxRequester(qq.extend(requesterOptions, {
                onComplete: refreshCompleteCallback
            }));
            requester.queryServer();
            return refreshEffort;
        };
    };
    qq.SessionAjaxRequester = function(spec) {
        "use strict";
        var requester, options = {
            endpoint: null,
            customHeaders: {},
            params: {},
            cors: {
                expected: false,
                sendCredentials: false
            },
            onComplete: function(response, success, xhrOrXdr) {},
            log: function(str, level) {}
        };
        qq.extend(options, spec);
        function onComplete(id, xhrOrXdr, isError) {
            var response = null;
            if (xhrOrXdr.responseText != null) {
                try {
                    response = qq.parseJson(xhrOrXdr.responseText);
                } catch (err) {
                    options.log("Problem parsing session response: " + err.message, "error");
                    isError = true;
                }
            }
            options.onComplete(response, !isError, xhrOrXdr);
        }
        requester = qq.extend(this, new qq.AjaxRequester({
            acceptHeader: "application/json",
            validMethods: [ "GET" ],
            method: "GET",
            endpointStore: {
                get: function() {
                    return options.endpoint;
                }
            },
            customHeaders: options.customHeaders,
            log: options.log,
            onComplete: onComplete,
            cors: options.cors
        }));
        qq.extend(this, {
            queryServer: function() {
                var params = qq.extend({}, options.params);
                options.log("Session query request.");
                requester.initTransport("sessionRefresh").withParams(params).withCacheBuster().send();
            }
        });
    };
    qq.Scaler = function(spec, log) {
        "use strict";
        var self = this, customResizeFunction = spec.customResizer, includeOriginal = spec.sendOriginal, orient = spec.orient, defaultType = spec.defaultType, defaultQuality = spec.defaultQuality / 100, failedToScaleText = spec.failureText, includeExif = spec.includeExif, sizes = this._getSortedSizes(spec.sizes);
        qq.extend(this, {
            enabled: qq.supportedFeatures.scaling && sizes.length > 0,
            getFileRecords: function(originalFileUuid, originalFileName, originalBlobOrBlobData) {
                var self = this, records = [], originalBlob = originalBlobOrBlobData.blob ? originalBlobOrBlobData.blob : originalBlobOrBlobData, identifier = new qq.Identify(originalBlob, log);
                if (identifier.isPreviewableSync()) {
                    qq.each(sizes, function(idx, sizeRecord) {
                        var outputType = self._determineOutputType({
                            defaultType: defaultType,
                            requestedType: sizeRecord.type,
                            refType: originalBlob.type
                        });
                        records.push({
                            uuid: qq.getUniqueId(),
                            name: self._getName(originalFileName, {
                                name: sizeRecord.name,
                                type: outputType,
                                refType: originalBlob.type
                            }),
                            blob: new qq.BlobProxy(originalBlob, qq.bind(self._generateScaledImage, self, {
                                customResizeFunction: customResizeFunction,
                                maxSize: sizeRecord.maxSize,
                                orient: orient,
                                type: outputType,
                                quality: defaultQuality,
                                failedText: failedToScaleText,
                                includeExif: includeExif,
                                log: log
                            }))
                        });
                    });
                    records.push({
                        uuid: originalFileUuid,
                        name: originalFileName,
                        size: originalBlob.size,
                        blob: includeOriginal ? originalBlob : null
                    });
                } else {
                    records.push({
                        uuid: originalFileUuid,
                        name: originalFileName,
                        size: originalBlob.size,
                        blob: originalBlob
                    });
                }
                return records;
            },
            handleNewFile: function(file, name, uuid, size, fileList, batchId, uuidParamName, api) {
                var self = this, buttonId = file.qqButtonId || file.blob && file.blob.qqButtonId, scaledIds = [], originalId = null, addFileToHandler = api.addFileToHandler, uploadData = api.uploadData, paramsStore = api.paramsStore, proxyGroupId = qq.getUniqueId();
                qq.each(self.getFileRecords(uuid, name, file), function(idx, record) {
                    var blobSize = record.size, id;
                    if (record.blob instanceof qq.BlobProxy) {
                        blobSize = -1;
                    }
                    id = uploadData.addFile({
                        uuid: record.uuid,
                        name: record.name,
                        size: blobSize,
                        batchId: batchId,
                        proxyGroupId: proxyGroupId
                    });
                    if (record.blob instanceof qq.BlobProxy) {
                        scaledIds.push(id);
                    } else {
                        originalId = id;
                    }
                    if (record.blob) {
                        addFileToHandler(id, record.blob);
                        fileList.push({
                            id: id,
                            file: record.blob
                        });
                    } else {
                        uploadData.setStatus(id, qq.status.REJECTED);
                    }
                });
                if (originalId !== null) {
                    qq.each(scaledIds, function(idx, scaledId) {
                        var params = {
                            qqparentuuid: uploadData.retrieve({
                                id: originalId
                            }).uuid,
                            qqparentsize: uploadData.retrieve({
                                id: originalId
                            }).size
                        };
                        params[uuidParamName] = uploadData.retrieve({
                            id: scaledId
                        }).uuid;
                        uploadData.setParentId(scaledId, originalId);
                        paramsStore.addReadOnly(scaledId, params);
                    });
                    if (scaledIds.length) {
                        (function() {
                            var param = {};
                            param[uuidParamName] = uploadData.retrieve({
                                id: originalId
                            }).uuid;
                            paramsStore.addReadOnly(originalId, param);
                        })();
                    }
                }
            }
        });
    };
    qq.extend(qq.Scaler.prototype, {
        scaleImage: function(id, specs, api) {
            "use strict";
            if (!qq.supportedFeatures.scaling) {
                throw new qq.Error("Scaling is not supported in this browser!");
            }
            var scalingEffort = new qq.Promise(), log = api.log, file = api.getFile(id), uploadData = api.uploadData.retrieve({
                id: id
            }), name = uploadData && uploadData.name, uuid = uploadData && uploadData.uuid, scalingOptions = {
                customResizer: specs.customResizer,
                sendOriginal: false,
                orient: specs.orient,
                defaultType: specs.type || null,
                defaultQuality: specs.quality,
                failedToScaleText: "Unable to scale",
                sizes: [ {
                    name: "",
                    maxSize: specs.maxSize
                } ]
            }, scaler = new qq.Scaler(scalingOptions, log);
            if (!qq.Scaler || !qq.supportedFeatures.imagePreviews || !file) {
                scalingEffort.failure();
                log("Could not generate requested scaled image for " + id + ".  " + "Scaling is either not possible in this browser, or the file could not be located.", "error");
            } else {
                qq.bind(function() {
                    var record = scaler.getFileRecords(uuid, name, file)[0];
                    if (record && record.blob instanceof qq.BlobProxy) {
                        record.blob.create().then(scalingEffort.success, scalingEffort.failure);
                    } else {
                        log(id + " is not a scalable image!", "error");
                        scalingEffort.failure();
                    }
                }, this)();
            }
            return scalingEffort;
        },
        _determineOutputType: function(spec) {
            "use strict";
            var requestedType = spec.requestedType, defaultType = spec.defaultType, referenceType = spec.refType;
            if (!defaultType && !requestedType) {
                if (referenceType !== "image/jpeg") {
                    return "image/png";
                }
                return referenceType;
            }
            if (!requestedType) {
                return defaultType;
            }
            if (qq.indexOf(Object.keys(qq.Identify.prototype.PREVIEWABLE_MIME_TYPES), requestedType) >= 0) {
                if (requestedType === "image/tiff") {
                    return qq.supportedFeatures.tiffPreviews ? requestedType : defaultType;
                }
                return requestedType;
            }
            return defaultType;
        },
        _getName: function(originalName, scaledVersionProperties) {
            "use strict";
            var startOfExt = originalName.lastIndexOf("."), versionType = scaledVersionProperties.type || "image/png", referenceType = scaledVersionProperties.refType, scaledName = "", scaledExt = qq.getExtension(originalName), nameAppendage = "";
            if (scaledVersionProperties.name && scaledVersionProperties.name.trim().length) {
                nameAppendage = " (" + scaledVersionProperties.name + ")";
            }
            if (startOfExt >= 0) {
                scaledName = originalName.substr(0, startOfExt);
                if (referenceType !== versionType) {
                    scaledExt = versionType.split("/")[1];
                }
                scaledName += nameAppendage + "." + scaledExt;
            } else {
                scaledName = originalName + nameAppendage;
            }
            return scaledName;
        },
        _getSortedSizes: function(sizes) {
            "use strict";
            sizes = qq.extend([], sizes);
            return sizes.sort(function(a, b) {
                if (a.maxSize > b.maxSize) {
                    return 1;
                }
                if (a.maxSize < b.maxSize) {
                    return -1;
                }
                return 0;
            });
        },
        _generateScaledImage: function(spec, sourceFile) {
            "use strict";
            var self = this, customResizeFunction = spec.customResizeFunction, log = spec.log, maxSize = spec.maxSize, orient = spec.orient, type = spec.type, quality = spec.quality, failedText = spec.failedText, includeExif = spec.includeExif && sourceFile.type === "image/jpeg" && type === "image/jpeg", scalingEffort = new qq.Promise(), imageGenerator = new qq.ImageGenerator(log), canvas = document.createElement("canvas");
            log("Attempting to generate scaled version for " + sourceFile.name);
            imageGenerator.generate(sourceFile, canvas, {
                maxSize: maxSize,
                orient: orient,
                customResizeFunction: customResizeFunction
            }).then(function() {
                var scaledImageDataUri = canvas.toDataURL(type, quality), signalSuccess = function() {
                    log("Success generating scaled version for " + sourceFile.name);
                    var blob = qq.dataUriToBlob(scaledImageDataUri);
                    scalingEffort.success(blob);
                };
                if (includeExif) {
                    self._insertExifHeader(sourceFile, scaledImageDataUri, log).then(function(scaledImageDataUriWithExif) {
                        scaledImageDataUri = scaledImageDataUriWithExif;
                        signalSuccess();
                    }, function() {
                        log("Problem inserting EXIF header into scaled image.  Using scaled image w/out EXIF data.", "error");
                        signalSuccess();
                    });
                } else {
                    signalSuccess();
                }
            }, function() {
                log("Failed attempt to generate scaled version for " + sourceFile.name, "error");
                scalingEffort.failure(failedText);
            });
            return scalingEffort;
        },
        _insertExifHeader: function(originalImage, scaledImageDataUri, log) {
            "use strict";
            var reader = new FileReader(), insertionEffort = new qq.Promise(), originalImageDataUri = "";
            reader.onload = function() {
                originalImageDataUri = reader.result;
                insertionEffort.success(qq.ExifRestorer.restore(originalImageDataUri, scaledImageDataUri));
            };
            reader.onerror = function() {
                log("Problem reading " + originalImage.name + " during attempt to transfer EXIF data to scaled version.", "error");
                insertionEffort.failure();
            };
            reader.readAsDataURL(originalImage);
            return insertionEffort;
        },
        _dataUriToBlob: function(dataUri) {
            "use strict";
            var byteString, mimeString, arrayBuffer, intArray;
            if (dataUri.split(",")[0].indexOf("base64") >= 0) {
                byteString = atob(dataUri.split(",")[1]);
            } else {
                byteString = decodeURI(dataUri.split(",")[1]);
            }
            mimeString = dataUri.split(",")[0].split(":")[1].split(";")[0];
            arrayBuffer = new ArrayBuffer(byteString.length);
            intArray = new Uint8Array(arrayBuffer);
            qq.each(byteString, function(idx, character) {
                intArray[idx] = character.charCodeAt(0);
            });
            return this._createBlob(arrayBuffer, mimeString);
        },
        _createBlob: function(data, mime) {
            "use strict";
            var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, blobBuilder = BlobBuilder && new BlobBuilder();
            if (blobBuilder) {
                blobBuilder.append(data);
                return blobBuilder.getBlob(mime);
            } else {
                return new Blob([ data ], {
                    type: mime
                });
            }
        }
    });
    qq.ExifRestorer = function() {
        var ExifRestorer = {};
        ExifRestorer.KEY_STR = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";
        ExifRestorer.encode64 = function(input) {
            var output = "", chr1, chr2, chr3 = "", enc1, enc2, enc3, enc4 = "", i = 0;
            do {
                chr1 = input[i++];
                chr2 = input[i++];
                chr3 = input[i++];
                enc1 = chr1 >> 2;
                enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);
            return output;
        };
        ExifRestorer.restore = function(origFileBase64, resizedFileBase64) {
            var expectedBase64Header = "data:image/jpeg;base64,";
            if (!origFileBase64.match(expectedBase64Header)) {
                return resizedFileBase64;
            }
            var rawImage = this.decode64(origFileBase64.replace(expectedBase64Header, ""));
            var segments = this.slice2Segments(rawImage);
            var image = this.exifManipulation(resizedFileBase64, segments);
            return expectedBase64Header + this.encode64(image);
        };
        ExifRestorer.exifManipulation = function(resizedFileBase64, segments) {
            var exifArray = this.getExifArray(segments), newImageArray = this.insertExif(resizedFileBase64, exifArray), aBuffer = new Uint8Array(newImageArray);
            return aBuffer;
        };
        ExifRestorer.getExifArray = function(segments) {
            var seg;
            for (var x = 0; x < segments.length; x++) {
                seg = segments[x];
                if (seg[0] == 255 & seg[1] == 225) {
                    return seg;
                }
            }
            return [];
        };
        ExifRestorer.insertExif = function(resizedFileBase64, exifArray) {
            var imageData = resizedFileBase64.replace("data:image/jpeg;base64,", ""), buf = this.decode64(imageData), separatePoint = buf.indexOf(255, 3), mae = buf.slice(0, separatePoint), ato = buf.slice(separatePoint), array = mae;
            array = array.concat(exifArray);
            array = array.concat(ato);
            return array;
        };
        ExifRestorer.slice2Segments = function(rawImageArray) {
            var head = 0, segments = [];
            while (1) {
                if (rawImageArray[head] == 255 & rawImageArray[head + 1] == 218) {
                    break;
                }
                if (rawImageArray[head] == 255 & rawImageArray[head + 1] == 216) {
                    head += 2;
                } else {
                    var length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3], endPoint = head + length + 2, seg = rawImageArray.slice(head, endPoint);
                    segments.push(seg);
                    head = endPoint;
                }
                if (head > rawImageArray.length) {
                    break;
                }
            }
            return segments;
        };
        ExifRestorer.decode64 = function(input) {
            var output = "", chr1, chr2, chr3 = "", enc1, enc2, enc3, enc4 = "", i = 0, buf = [];
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                throw new Error("There were invalid base64 characters in the input text.  " + "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            do {
                enc1 = this.KEY_STR.indexOf(input.charAt(i++));
                enc2 = this.KEY_STR.indexOf(input.charAt(i++));
                enc3 = this.KEY_STR.indexOf(input.charAt(i++));
                enc4 = this.KEY_STR.indexOf(input.charAt(i++));
                chr1 = enc1 << 2 | enc2 >> 4;
                chr2 = (enc2 & 15) << 4 | enc3 >> 2;
                chr3 = (enc3 & 3) << 6 | enc4;
                buf.push(chr1);
                if (enc3 != 64) {
                    buf.push(chr2);
                }
                if (enc4 != 64) {
                    buf.push(chr3);
                }
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);
            return buf;
        };
        return ExifRestorer;
    }();
    qq.TotalProgress = function(callback, getSize) {
        "use strict";
        var perFileProgress = {}, totalLoaded = 0, totalSize = 0, lastLoadedSent = -1, lastTotalSent = -1, callbackProxy = function(loaded, total) {
            if (loaded !== lastLoadedSent || total !== lastTotalSent) {
                callback(loaded, total);
            }
            lastLoadedSent = loaded;
            lastTotalSent = total;
        }, noRetryableFiles = function(failed, retryable) {
            var none = true;
            qq.each(failed, function(idx, failedId) {
                if (qq.indexOf(retryable, failedId) >= 0) {
                    none = false;
                    return false;
                }
            });
            return none;
        }, onCancel = function(id) {
            updateTotalProgress(id, -1, -1);
            delete perFileProgress[id];
        }, onAllComplete = function(successful, failed, retryable) {
            if (failed.length === 0 || noRetryableFiles(failed, retryable)) {
                callbackProxy(totalSize, totalSize);
                this.reset();
            }
        }, onNew = function(id) {
            var size = getSize(id);
            if (size > 0) {
                updateTotalProgress(id, 0, size);
                perFileProgress[id] = {
                    loaded: 0,
                    total: size
                };
            }
        }, updateTotalProgress = function(id, newLoaded, newTotal) {
            var oldLoaded = perFileProgress[id] ? perFileProgress[id].loaded : 0, oldTotal = perFileProgress[id] ? perFileProgress[id].total : 0;
            if (newLoaded === -1 && newTotal === -1) {
                totalLoaded -= oldLoaded;
                totalSize -= oldTotal;
            } else {
                if (newLoaded) {
                    totalLoaded += newLoaded - oldLoaded;
                }
                if (newTotal) {
                    totalSize += newTotal - oldTotal;
                }
            }
            callbackProxy(totalLoaded, totalSize);
        };
        qq.extend(this, {
            onAllComplete: onAllComplete,
            onStatusChange: function(id, oldStatus, newStatus) {
                if (newStatus === qq.status.CANCELED || newStatus === qq.status.REJECTED) {
                    onCancel(id);
                } else if (newStatus === qq.status.SUBMITTING) {
                    onNew(id);
                }
            },
            onIndividualProgress: function(id, loaded, total) {
                updateTotalProgress(id, loaded, total);
                perFileProgress[id] = {
                    loaded: loaded,
                    total: total
                };
            },
            onNewSize: function(id) {
                onNew(id);
            },
            reset: function() {
                perFileProgress = {};
                totalLoaded = 0;
                totalSize = 0;
            }
        });
    };
    qq.PasteSupport = function(o) {
        "use strict";
        var options, detachPasteHandler;
        options = {
            targetElement: null,
            callbacks: {
                log: function(message, level) {},
                pasteReceived: function(blob) {}
            }
        };
        function isImage(item) {
            return item.type && item.type.indexOf("image/") === 0;
        }
        function registerPasteHandler() {
            detachPasteHandler = qq(options.targetElement).attach("paste", function(event) {
                var clipboardData = event.clipboardData;
                if (clipboardData) {
                    qq.each(clipboardData.items, function(idx, item) {
                        if (isImage(item)) {
                            var blob = item.getAsFile();
                            options.callbacks.pasteReceived(blob);
                        }
                    });
                }
            });
        }
        function unregisterPasteHandler() {
            if (detachPasteHandler) {
                detachPasteHandler();
            }
        }
        qq.extend(options, o);
        registerPasteHandler();
        qq.extend(this, {
            reset: function() {
                unregisterPasteHandler();
            }
        });
    };
    qq.FormSupport = function(options, startUpload, log) {
        "use strict";
        var self = this, interceptSubmit = options.interceptSubmit, formEl = options.element, autoUpload = options.autoUpload;
        qq.extend(this, {
            newEndpoint: null,
            newAutoUpload: autoUpload,
            attachedToForm: false,
            getFormInputsAsObject: function() {
                if (formEl == null) {
                    return null;
                }
                return self._form2Obj(formEl);
            }
        });
        function determineNewEndpoint(formEl) {
            if (formEl.getAttribute("action")) {
                self.newEndpoint = formEl.getAttribute("action");
            }
        }
        function validateForm(formEl, nativeSubmit) {
            if (formEl.checkValidity && !formEl.checkValidity()) {
                log("Form did not pass validation checks - will not upload.", "error");
                nativeSubmit();
            } else {
                return true;
            }
        }
        function maybeUploadOnSubmit(formEl) {
            var nativeSubmit = formEl.submit;
            qq(formEl).attach("submit", function(event) {
                event = event || window.event;
                if (event.preventDefault) {
                    event.preventDefault();
                } else {
                    event.returnValue = false;
                }
                validateForm(formEl, nativeSubmit) && startUpload();
            });
            formEl.submit = function() {
                validateForm(formEl, nativeSubmit) && startUpload();
            };
        }
        function determineFormEl(formEl) {
            if (formEl) {
                if (qq.isString(formEl)) {
                    formEl = document.getElementById(formEl);
                }
                if (formEl) {
                    log("Attaching to form element.");
                    determineNewEndpoint(formEl);
                    interceptSubmit && maybeUploadOnSubmit(formEl);
                }
            }
            return formEl;
        }
        formEl = determineFormEl(formEl);
        this.attachedToForm = !!formEl;
    };
    qq.extend(qq.FormSupport.prototype, {
        _form2Obj: function(form) {
            "use strict";
            var obj = {}, notIrrelevantType = function(type) {
                var irrelevantTypes = [ "button", "image", "reset", "submit" ];
                return qq.indexOf(irrelevantTypes, type.toLowerCase()) < 0;
            }, radioOrCheckbox = function(type) {
                return qq.indexOf([ "checkbox", "radio" ], type.toLowerCase()) >= 0;
            }, ignoreValue = function(el) {
                if (radioOrCheckbox(el.type) && !el.checked) {
                    return true;
                }
                return el.disabled && el.type.toLowerCase() !== "hidden";
            }, selectValue = function(select) {
                var value = null;
                qq.each(qq(select).children(), function(idx, child) {
                    if (child.tagName.toLowerCase() === "option" && child.selected) {
                        value = child.value;
                        return false;
                    }
                });
                return value;
            };
            qq.each(form.elements, function(idx, el) {
                if ((qq.isInput(el, true) || el.tagName.toLowerCase() === "textarea") && notIrrelevantType(el.type) && !ignoreValue(el)) {
                    obj[el.name] = el.value;
                } else if (el.tagName.toLowerCase() === "select" && !ignoreValue(el)) {
                    var value = selectValue(el);
                    if (value !== null) {
                        obj[el.name] = value;
                    }
                }
            });
            return obj;
        }
    });
    qq.traditional = qq.traditional || {};
    qq.traditional.FormUploadHandler = function(options, proxy) {
        "use strict";
        var handler = this, getName = proxy.getName, getUuid = proxy.getUuid, log = proxy.log;
        function getIframeContentJson(id, iframe) {
            var response, doc, innerHtml;
            try {
                doc = iframe.contentDocument || iframe.contentWindow.document;
                innerHtml = doc.body.innerHTML;
                log("converting iframe's innerHTML to JSON");
                log("innerHTML = " + innerHtml);
                if (innerHtml && innerHtml.match(/^<pre/i)) {
                    innerHtml = doc.body.firstChild.firstChild.nodeValue;
                }
                response = handler._parseJsonResponse(innerHtml);
            } catch (error) {
                log("Error when attempting to parse form upload response (" + error.message + ")", "error");
                response = {
                    success: false
                };
            }
            return response;
        }
        function createForm(id, iframe) {
            var params = options.paramsStore.get(id), method = options.method.toLowerCase() === "get" ? "GET" : "POST", endpoint = options.endpointStore.get(id), name = getName(id);
            params[options.uuidName] = getUuid(id);
            params[options.filenameParam] = name;
            return handler._initFormForUpload({
                method: method,
                endpoint: endpoint,
                params: params,
                paramsInBody: options.paramsInBody,
                targetName: iframe.name
            });
        }
        this.uploadFile = function(id) {
            var input = handler.getInput(id), iframe = handler._createIframe(id), promise = new qq.Promise(), form;
            form = createForm(id, iframe);
            form.appendChild(input);
            handler._attachLoadEvent(iframe, function(responseFromMessage) {
                log("iframe loaded");
                var response = responseFromMessage ? responseFromMessage : getIframeContentJson(id, iframe);
                handler._detachLoadEvent(id);
                if (!options.cors.expected) {
                    qq(iframe).remove();
                }
                if (response.success) {
                    promise.success(response);
                } else {
                    promise.failure(response);
                }
            });
            log("Sending upload request for " + id);
            form.submit();
            qq(form).remove();
            return promise;
        };
        qq.extend(this, new qq.FormUploadHandler({
            options: {
                isCors: options.cors.expected,
                inputName: options.inputName
            },
            proxy: {
                onCancel: options.onCancel,
                getName: getName,
                getUuid: getUuid,
                log: log
            }
        }));
    };
    qq.traditional = qq.traditional || {};
    qq.traditional.XhrUploadHandler = function(spec, proxy) {
        "use strict";
        var handler = this, getName = proxy.getName, getSize = proxy.getSize, getUuid = proxy.getUuid, log = proxy.log, multipart = spec.forceMultipart || spec.paramsInBody, addChunkingSpecificParams = function(id, params, chunkData) {
            var size = getSize(id), name = getName(id);
            params[spec.chunking.paramNames.partIndex] = chunkData.part;
            params[spec.chunking.paramNames.partByteOffset] = chunkData.start;
            params[spec.chunking.paramNames.chunkSize] = chunkData.size;
            params[spec.chunking.paramNames.totalParts] = chunkData.count;
            params[spec.totalFileSizeName] = size;
            if (multipart) {
                params[spec.filenameParam] = name;
            }
        }, allChunksDoneRequester = new qq.traditional.AllChunksDoneAjaxRequester({
            cors: spec.cors,
            endpoint: spec.chunking.success.endpoint,
            log: log
        }), createReadyStateChangedHandler = function(id, xhr) {
            var promise = new qq.Promise();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    var result = onUploadOrChunkComplete(id, xhr);
                    if (result.success) {
                        promise.success(result.response, xhr);
                    } else {
                        promise.failure(result.response, xhr);
                    }
                }
            };
            return promise;
        }, getChunksCompleteParams = function(id) {
            var params = spec.paramsStore.get(id), name = getName(id), size = getSize(id);
            params[spec.uuidName] = getUuid(id);
            params[spec.filenameParam] = name;
            params[spec.totalFileSizeName] = size;
            params[spec.chunking.paramNames.totalParts] = handler._getTotalChunks(id);
            return params;
        }, isErrorUploadResponse = function(xhr, response) {
            return qq.indexOf([ 200, 201, 202, 203, 204 ], xhr.status) < 0 || !response.success || response.reset;
        }, onUploadOrChunkComplete = function(id, xhr) {
            var response;
            log("xhr - server response received for " + id);
            log("responseText = " + xhr.responseText);
            response = parseResponse(true, xhr);
            return {
                success: !isErrorUploadResponse(xhr, response),
                response: response
            };
        }, parseResponse = function(upload, xhr) {
            var response = {};
            try {
                log(qq.format("Received response status {} with body: {}", xhr.status, xhr.responseText));
                response = qq.parseJson(xhr.responseText);
            } catch (error) {
                upload && log("Error when attempting to parse xhr response text (" + error.message + ")", "error");
            }
            return response;
        }, sendChunksCompleteRequest = function(id) {
            var promise = new qq.Promise();
            allChunksDoneRequester.complete(id, handler._createXhr(id), getChunksCompleteParams(id), spec.customHeaders.get(id)).then(function(xhr) {
                promise.success(parseResponse(false, xhr), xhr);
            }, function(xhr) {
                promise.failure(parseResponse(false, xhr), xhr);
            });
            return promise;
        }, setParamsAndGetEntityToSend = function(params, xhr, fileOrBlob, id) {
            var formData = new FormData(), method = spec.method, endpoint = spec.endpointStore.get(id), name = getName(id), size = getSize(id);
            params[spec.uuidName] = getUuid(id);
            params[spec.filenameParam] = name;
            if (multipart) {
                params[spec.totalFileSizeName] = size;
            }
            if (!spec.paramsInBody) {
                if (!multipart) {
                    params[spec.inputName] = name;
                }
                endpoint = qq.obj2url(params, endpoint);
            }
            xhr.open(method, endpoint, true);
            if (spec.cors.expected && spec.cors.sendCredentials) {
                xhr.withCredentials = true;
            }
            if (multipart) {
                if (spec.paramsInBody) {
                    qq.obj2FormData(params, formData);
                }
                formData.append(spec.inputName, fileOrBlob);
                return formData;
            }
            return fileOrBlob;
        }, setUploadHeaders = function(id, xhr) {
            var extraHeaders = spec.customHeaders.get(id), fileOrBlob = handler.getFile(id);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.setRequestHeader("Cache-Control", "no-cache");
            if (!multipart) {
                xhr.setRequestHeader("Content-Type", "application/octet-stream");
                xhr.setRequestHeader("X-Mime-Type", fileOrBlob.type);
            }
            qq.each(extraHeaders, function(name, val) {
                xhr.setRequestHeader(name, val);
            });
        };
        qq.extend(this, {
            uploadChunk: function(id, chunkIdx, resuming) {
                var chunkData = handler._getChunkData(id, chunkIdx), xhr = handler._createXhr(id, chunkIdx), size = getSize(id), promise, toSend, params;
                promise = createReadyStateChangedHandler(id, xhr);
                handler._registerProgressHandler(id, chunkIdx, chunkData.size);
                params = spec.paramsStore.get(id);
                addChunkingSpecificParams(id, params, chunkData);
                if (resuming) {
                    params[spec.resume.paramNames.resuming] = true;
                }
                toSend = setParamsAndGetEntityToSend(params, xhr, chunkData.blob, id);
                setUploadHeaders(id, xhr);
                xhr.send(toSend);
                return promise;
            },
            uploadFile: function(id) {
                var fileOrBlob = handler.getFile(id), promise, xhr, params, toSend;
                xhr = handler._createXhr(id);
                handler._registerProgressHandler(id);
                promise = createReadyStateChangedHandler(id, xhr);
                params = spec.paramsStore.get(id);
                toSend = setParamsAndGetEntityToSend(params, xhr, fileOrBlob, id);
                setUploadHeaders(id, xhr);
                xhr.send(toSend);
                return promise;
            }
        });
        qq.extend(this, new qq.XhrUploadHandler({
            options: qq.extend({
                namespace: "traditional"
            }, spec),
            proxy: qq.extend({
                getEndpoint: spec.endpointStore.get
            }, proxy)
        }));
        qq.override(this, function(super_) {
            return {
                finalizeChunks: function(id) {
                    if (spec.chunking.success.endpoint) {
                        return sendChunksCompleteRequest(id);
                    } else {
                        return super_.finalizeChunks(id, qq.bind(parseResponse, this, true));
                    }
                }
            };
        });
    };
    qq.traditional.AllChunksDoneAjaxRequester = function(o) {
        "use strict";
        var requester, method = "POST", options = {
            cors: {
                allowXdr: false,
                expected: false,
                sendCredentials: false
            },
            endpoint: null,
            log: function(str, level) {}
        }, promises = {}, endpointHandler = {
            get: function(id) {
                return options.endpoint;
            }
        };
        qq.extend(options, o);
        requester = qq.extend(this, new qq.AjaxRequester({
            acceptHeader: "application/json",
            validMethods: [ method ],
            method: method,
            endpointStore: endpointHandler,
            allowXRequestedWithAndCacheControl: false,
            cors: options.cors,
            log: options.log,
            onComplete: function(id, xhr, isError) {
                var promise = promises[id];
                delete promises[id];
                if (isError) {
                    promise.failure(xhr);
                } else {
                    promise.success(xhr);
                }
            }
        }));
        qq.extend(this, {
            complete: function(id, xhr, params, headers) {
                var promise = new qq.Promise();
                options.log("Submitting All Chunks Done request for " + id);
                promises[id] = promise;
                requester.initTransport(id).withParams(params).withHeaders(headers).send(xhr);
                return promise;
            }
        });
    };
    qq.DragAndDrop = function(o) {
        "use strict";
        var options, HIDE_ZONES_EVENT_NAME = "qq-hidezones", HIDE_BEFORE_ENTER_ATTR = "qq-hide-dropzone", uploadDropZones = [], droppedFiles = [], disposeSupport = new qq.DisposeSupport();
        options = {
            dropZoneElements: [],
            allowMultipleItems: true,
            classes: {
                dropActive: null
            },
            callbacks: new qq.DragAndDrop.callbacks()
        };
        qq.extend(options, o, true);
        function uploadDroppedFiles(files, uploadDropZone) {
            var filesAsArray = Array.prototype.slice.call(files);
            options.callbacks.dropLog("Grabbed " + files.length + " dropped files.");
            uploadDropZone.dropDisabled(false);
            options.callbacks.processingDroppedFilesComplete(filesAsArray, uploadDropZone.getElement());
        }
        function traverseFileTree(entry) {
            var parseEntryPromise = new qq.Promise();
            if (entry.isFile) {
                entry.file(function(file) {
                    var name = entry.name, fullPath = entry.fullPath, indexOfNameInFullPath = fullPath.indexOf(name);
                    fullPath = fullPath.substr(0, indexOfNameInFullPath);
                    if (fullPath.charAt(0) === "/") {
                        fullPath = fullPath.substr(1);
                    }
                    file.qqPath = fullPath;
                    droppedFiles.push(file);
                    parseEntryPromise.success();
                }, function(fileError) {
                    options.callbacks.dropLog("Problem parsing '" + entry.fullPath + "'.  FileError code " + fileError.code + ".", "error");
                    parseEntryPromise.failure();
                });
            } else if (entry.isDirectory) {
                getFilesInDirectory(entry).then(function allEntriesRead(entries) {
                    var entriesLeft = entries.length;
                    qq.each(entries, function(idx, entry) {
                        traverseFileTree(entry).done(function() {
                            entriesLeft -= 1;
                            if (entriesLeft === 0) {
                                parseEntryPromise.success();
                            }
                        });
                    });
                    if (!entries.length) {
                        parseEntryPromise.success();
                    }
                }, function readFailure(fileError) {
                    options.callbacks.dropLog("Problem parsing '" + entry.fullPath + "'.  FileError code " + fileError.code + ".", "error");
                    parseEntryPromise.failure();
                });
            }
            return parseEntryPromise;
        }
        function getFilesInDirectory(entry, reader, accumEntries, existingPromise) {
            var promise = existingPromise || new qq.Promise(), dirReader = reader || entry.createReader();
            dirReader.readEntries(function readSuccess(entries) {
                var newEntries = accumEntries ? accumEntries.concat(entries) : entries;
                if (entries.length) {
                    setTimeout(function() {
                        getFilesInDirectory(entry, dirReader, newEntries, promise);
                    }, 0);
                } else {
                    promise.success(newEntries);
                }
            }, promise.failure);
            return promise;
        }
        function handleDataTransfer(dataTransfer, uploadDropZone) {
            var pendingFolderPromises = [], handleDataTransferPromise = new qq.Promise();
            options.callbacks.processingDroppedFiles();
            uploadDropZone.dropDisabled(true);
            if (dataTransfer.files.length > 1 && !options.allowMultipleItems) {
                options.callbacks.processingDroppedFilesComplete([]);
                options.callbacks.dropError("tooManyFilesError", "");
                uploadDropZone.dropDisabled(false);
                handleDataTransferPromise.failure();
            } else {
                droppedFiles = [];
                if (qq.isFolderDropSupported(dataTransfer)) {
                    qq.each(dataTransfer.items, function(idx, item) {
                        var entry = item.webkitGetAsEntry();
                        if (entry) {
                            if (entry.isFile) {
                                droppedFiles.push(item.getAsFile());
                            } else {
                                pendingFolderPromises.push(traverseFileTree(entry).done(function() {
                                    pendingFolderPromises.pop();
                                    if (pendingFolderPromises.length === 0) {
                                        handleDataTransferPromise.success();
                                    }
                                }));
                            }
                        }
                    });
                } else {
                    droppedFiles = dataTransfer.files;
                }
                if (pendingFolderPromises.length === 0) {
                    handleDataTransferPromise.success();
                }
            }
            return handleDataTransferPromise;
        }
        function setupDropzone(dropArea) {
            var dropZone = new qq.UploadDropZone({
                HIDE_ZONES_EVENT_NAME: HIDE_ZONES_EVENT_NAME,
                element: dropArea,
                onEnter: function(e) {
                    qq(dropArea).addClass(options.classes.dropActive);
                    e.stopPropagation();
                },
                onLeaveNotDescendants: function(e) {
                    qq(dropArea).removeClass(options.classes.dropActive);
                },
                onDrop: function(e) {
                    handleDataTransfer(e.dataTransfer, dropZone).then(function() {
                        uploadDroppedFiles(droppedFiles, dropZone);
                    }, function() {
                        options.callbacks.dropLog("Drop event DataTransfer parsing failed.  No files will be uploaded.", "error");
                    });
                }
            });
            disposeSupport.addDisposer(function() {
                dropZone.dispose();
            });
            qq(dropArea).hasAttribute(HIDE_BEFORE_ENTER_ATTR) && qq(dropArea).hide();
            uploadDropZones.push(dropZone);
            return dropZone;
        }
        function isFileDrag(dragEvent) {
            var fileDrag;
            qq.each(dragEvent.dataTransfer.types, function(key, val) {
                if (val === "Files") {
                    fileDrag = true;
                    return false;
                }
            });
            return fileDrag;
        }
        function leavingDocumentOut(e) {
            if (qq.safari()) {
                return e.x < 0 || e.y < 0;
            }
            return e.x === 0 && e.y === 0;
        }
        function setupDragDrop() {
            var dropZones = options.dropZoneElements, maybeHideDropZones = function() {
                setTimeout(function() {
                    qq.each(dropZones, function(idx, dropZone) {
                        qq(dropZone).hasAttribute(HIDE_BEFORE_ENTER_ATTR) && qq(dropZone).hide();
                        qq(dropZone).removeClass(options.classes.dropActive);
                    });
                }, 10);
            };
            qq.each(dropZones, function(idx, dropZone) {
                var uploadDropZone = setupDropzone(dropZone);
                if (dropZones.length && qq.supportedFeatures.fileDrop) {
                    disposeSupport.attach(document, "dragenter", function(e) {
                        if (!uploadDropZone.dropDisabled() && isFileDrag(e)) {
                            qq.each(dropZones, function(idx, dropZone) {
                                if (dropZone instanceof HTMLElement && qq(dropZone).hasAttribute(HIDE_BEFORE_ENTER_ATTR)) {
                                    qq(dropZone).css({
                                        display: "block"
                                    });
                                }
                            });
                        }
                    });
                }
            });
            disposeSupport.attach(document, "dragleave", function(e) {
                if (leavingDocumentOut(e)) {
                    maybeHideDropZones();
                }
            });
            disposeSupport.attach(qq(document).children()[0], "mouseenter", function(e) {
                maybeHideDropZones();
            });
            disposeSupport.attach(document, "drop", function(e) {
                if (isFileDrag(e)) {
                    e.preventDefault();
                    maybeHideDropZones();
                }
            });
            disposeSupport.attach(document, HIDE_ZONES_EVENT_NAME, maybeHideDropZones);
        }
        setupDragDrop();
        qq.extend(this, {
            setupExtraDropzone: function(element) {
                options.dropZoneElements.push(element);
                setupDropzone(element);
            },
            removeDropzone: function(element) {
                var i, dzs = options.dropZoneElements;
                for (i in dzs) {
                    if (dzs[i] === element) {
                        return dzs.splice(i, 1);
                    }
                }
            },
            dispose: function() {
                disposeSupport.dispose();
                qq.each(uploadDropZones, function(idx, dropZone) {
                    dropZone.dispose();
                });
            }
        });
    };
    qq.DragAndDrop.callbacks = function() {
        "use strict";
        return {
            processingDroppedFiles: function() {},
            processingDroppedFilesComplete: function(files, targetEl) {},
            dropError: function(code, errorSpecifics) {
                qq.log("Drag & drop error code '" + code + " with these specifics: '" + errorSpecifics + "'", "error");
            },
            dropLog: function(message, level) {
                qq.log(message, level);
            }
        };
    };
    qq.UploadDropZone = function(o) {
        "use strict";
        var disposeSupport = new qq.DisposeSupport(), options, element, preventDrop, dropOutsideDisabled;
        options = {
            element: null,
            onEnter: function(e) {},
            onLeave: function(e) {},
            onLeaveNotDescendants: function(e) {},
            onDrop: function(e) {}
        };
        qq.extend(options, o);
        element = options.element;
        function dragoverShouldBeCanceled() {
            return qq.safari() || qq.firefox() && qq.windows();
        }
        function disableDropOutside(e) {
            if (!dropOutsideDisabled) {
                if (dragoverShouldBeCanceled) {
                    disposeSupport.attach(document, "dragover", function(e) {
                        e.preventDefault();
                    });
                } else {
                    disposeSupport.attach(document, "dragover", function(e) {
                        if (e.dataTransfer) {
                            e.dataTransfer.dropEffect = "none";
                            e.preventDefault();
                        }
                    });
                }
                dropOutsideDisabled = true;
            }
        }
        function isValidFileDrag(e) {
            if (!qq.supportedFeatures.fileDrop) {
                return false;
            }
            var effectTest, dt = e.dataTransfer, isSafari = qq.safari();
            effectTest = qq.ie() && qq.supportedFeatures.fileDrop ? true : dt.effectAllowed !== "none";
            return dt && effectTest && (dt.files && dt.files.length || !isSafari && dt.types.contains && dt.types.contains("Files") || dt.types.includes && dt.types.includes("Files"));
        }
        function isOrSetDropDisabled(isDisabled) {
            if (isDisabled !== undefined) {
                preventDrop = isDisabled;
            }
            return preventDrop;
        }
        function triggerHidezonesEvent() {
            var hideZonesEvent;
            function triggerUsingOldApi() {
                hideZonesEvent = document.createEvent("Event");
                hideZonesEvent.initEvent(options.HIDE_ZONES_EVENT_NAME, true, true);
            }
            if (window.CustomEvent) {
                try {
                    hideZonesEvent = new CustomEvent(options.HIDE_ZONES_EVENT_NAME);
                } catch (err) {
                    triggerUsingOldApi();
                }
            } else {
                triggerUsingOldApi();
            }
            document.dispatchEvent(hideZonesEvent);
        }
        function attachEvents() {
            disposeSupport.attach(element, "dragover", function(e) {
                if (!isValidFileDrag(e)) {
                    return;
                }
                var effect = qq.ie() && qq.supportedFeatures.fileDrop ? null : e.dataTransfer.effectAllowed;
                if (effect === "move" || effect === "linkMove") {
                    e.dataTransfer.dropEffect = "move";
                } else {
                    e.dataTransfer.dropEffect = "copy";
                }
                e.stopPropagation();
                e.preventDefault();
            });
            disposeSupport.attach(element, "dragenter", function(e) {
                if (!isOrSetDropDisabled()) {
                    if (!isValidFileDrag(e)) {
                        return;
                    }
                    options.onEnter(e);
                }
            });
            disposeSupport.attach(element, "dragleave", function(e) {
                if (!isValidFileDrag(e)) {
                    return;
                }
                options.onLeave(e);
                var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
                if (qq(this).contains(relatedTarget)) {
                    return;
                }
                options.onLeaveNotDescendants(e);
            });
            disposeSupport.attach(element, "drop", function(e) {
                if (!isOrSetDropDisabled()) {
                    if (!isValidFileDrag(e)) {
                        return;
                    }
                    e.preventDefault();
                    e.stopPropagation();
                    options.onDrop(e);
                    triggerHidezonesEvent();
                }
            });
        }
        disableDropOutside();
        attachEvents();
        qq.extend(this, {
            dropDisabled: function(isDisabled) {
                return isOrSetDropDisabled(isDisabled);
            },
            dispose: function() {
                disposeSupport.dispose();
            },
            getElement: function() {
                return element;
            }
        });
        this._testing = {};
        this._testing.isValidFileDrag = isValidFileDrag;
    };
    (function() {
        "use strict";
        qq.uiPublicApi = {
            addInitialFiles: function(cannedFileList) {
                this._parent.prototype.addInitialFiles.apply(this, arguments);
                this._templating.addCacheToDom();
            },
            clearStoredFiles: function() {
                this._parent.prototype.clearStoredFiles.apply(this, arguments);
                this._templating.clearFiles();
            },
            addExtraDropzone: function(element) {
                this._dnd && this._dnd.setupExtraDropzone(element);
            },
            removeExtraDropzone: function(element) {
                if (this._dnd) {
                    return this._dnd.removeDropzone(element);
                }
            },
            getItemByFileId: function(id) {
                if (!this._templating.isHiddenForever(id)) {
                    return this._templating.getFileContainer(id);
                }
            },
            reset: function() {
                this._parent.prototype.reset.apply(this, arguments);
                this._templating.reset();
                if (!this._options.button && this._templating.getButton()) {
                    this._defaultButtonId = this._createUploadButton({
                        element: this._templating.getButton(),
                        title: this._options.text.fileInputTitle
                    }).getButtonId();
                }
                if (this._dnd) {
                    this._dnd.dispose();
                    this._dnd = this._setupDragAndDrop();
                }
                this._totalFilesInBatch = 0;
                this._filesInBatchAddedToUi = 0;
                this._setupClickAndEditEventHandlers();
            },
            setName: function(id, newName) {
                var formattedFilename = this._options.formatFileName(newName);
                this._parent.prototype.setName.apply(this, arguments);
                this._templating.updateFilename(id, formattedFilename);
            },
            pauseUpload: function(id) {
                var paused = this._parent.prototype.pauseUpload.apply(this, arguments);
                paused && this._templating.uploadPaused(id);
                return paused;
            },
            continueUpload: function(id) {
                var continued = this._parent.prototype.continueUpload.apply(this, arguments);
                continued && this._templating.uploadContinued(id);
                return continued;
            },
            getId: function(fileContainerOrChildEl) {
                return this._templating.getFileId(fileContainerOrChildEl);
            },
            getDropTarget: function(fileId) {
                var file = this.getFile(fileId);
                return file.qqDropTarget;
            }
        };
        qq.uiPrivateApi = {
            _getButton: function(buttonId) {
                var button = this._parent.prototype._getButton.apply(this, arguments);
                if (!button) {
                    if (buttonId === this._defaultButtonId) {
                        button = this._templating.getButton();
                    }
                }
                return button;
            },
            _removeFileItem: function(fileId) {
                this._templating.removeFile(fileId);
            },
            _setupClickAndEditEventHandlers: function() {
                this._fileButtonsClickHandler = qq.FileButtonsClickHandler && this._bindFileButtonsClickEvent();
                this._focusinEventSupported = !qq.firefox();
                if (this._isEditFilenameEnabled()) {
                    this._filenameClickHandler = this._bindFilenameClickEvent();
                    this._filenameInputFocusInHandler = this._bindFilenameInputFocusInEvent();
                    this._filenameInputFocusHandler = this._bindFilenameInputFocusEvent();
                }
            },
            _setupDragAndDrop: function() {
                var self = this, dropZoneElements = this._options.dragAndDrop.extraDropzones, templating = this._templating, defaultDropZone = templating.getDropZone();
                defaultDropZone && dropZoneElements.push(defaultDropZone);
                return new qq.DragAndDrop({
                    dropZoneElements: dropZoneElements,
                    allowMultipleItems: this._options.multiple,
                    classes: {
                        dropActive: this._options.classes.dropActive
                    },
                    callbacks: {
                        processingDroppedFiles: function() {
                            templating.showDropProcessing();
                        },
                        processingDroppedFilesComplete: function(files, targetEl) {
                            templating.hideDropProcessing();
                            qq.each(files, function(idx, file) {
                                file.qqDropTarget = targetEl;
                            });
                            if (files.length) {
                                self.addFiles(files, null, null);
                            }
                        },
                        dropError: function(code, errorData) {
                            self._itemError(code, errorData);
                        },
                        dropLog: function(message, level) {
                            self.log(message, level);
                        }
                    }
                });
            },
            _bindFileButtonsClickEvent: function() {
                var self = this;
                return new qq.FileButtonsClickHandler({
                    templating: this._templating,
                    log: function(message, lvl) {
                        self.log(message, lvl);
                    },
                    onDeleteFile: function(fileId) {
                        self.deleteFile(fileId);
                    },
                    onCancel: function(fileId) {
                        self.cancel(fileId);
                    },
                    onRetry: function(fileId) {
                        self.retry(fileId);
                    },
                    onPause: function(fileId) {
                        self.pauseUpload(fileId);
                    },
                    onContinue: function(fileId) {
                        self.continueUpload(fileId);
                    },
                    onGetName: function(fileId) {
                        return self.getName(fileId);
                    }
                });
            },
            _isEditFilenameEnabled: function() {
                return this._templating.isEditFilenamePossible() && !this._options.autoUpload && qq.FilenameClickHandler && qq.FilenameInputFocusHandler && qq.FilenameInputFocusHandler;
            },
            _filenameEditHandler: function() {
                var self = this, templating = this._templating;
                return {
                    templating: templating,
                    log: function(message, lvl) {
                        self.log(message, lvl);
                    },
                    onGetUploadStatus: function(fileId) {
                        return self.getUploads({
                            id: fileId
                        }).status;
                    },
                    onGetName: function(fileId) {
                        return self.getName(fileId);
                    },
                    onSetName: function(id, newName) {
                        self.setName(id, newName);
                    },
                    onEditingStatusChange: function(id, isEditing) {
                        var qqInput = qq(templating.getEditInput(id)), qqFileContainer = qq(templating.getFileContainer(id));
                        if (isEditing) {
                            qqInput.addClass("qq-editing");
                            templating.hideFilename(id);
                            templating.hideEditIcon(id);
                        } else {
                            qqInput.removeClass("qq-editing");
                            templating.showFilename(id);
                            templating.showEditIcon(id);
                        }
                        qqFileContainer.addClass("qq-temp").removeClass("qq-temp");
                    }
                };
            },
            _onUploadStatusChange: function(id, oldStatus, newStatus) {
                this._parent.prototype._onUploadStatusChange.apply(this, arguments);
                if (this._isEditFilenameEnabled()) {
                    if (this._templating.getFileContainer(id) && newStatus !== qq.status.SUBMITTED) {
                        this._templating.markFilenameEditable(id);
                        this._templating.hideEditIcon(id);
                    }
                }
                if (oldStatus === qq.status.UPLOAD_RETRYING && newStatus === qq.status.UPLOADING) {
                    this._templating.hideRetry(id);
                    this._templating.setStatusText(id);
                    qq(this._templating.getFileContainer(id)).removeClass(this._classes.retrying);
                } else if (newStatus === qq.status.UPLOAD_FAILED) {
                    this._templating.hidePause(id);
                }
            },
            _bindFilenameInputFocusInEvent: function() {
                var spec = qq.extend({}, this._filenameEditHandler());
                return new qq.FilenameInputFocusInHandler(spec);
            },
            _bindFilenameInputFocusEvent: function() {
                var spec = qq.extend({}, this._filenameEditHandler());
                return new qq.FilenameInputFocusHandler(spec);
            },
            _bindFilenameClickEvent: function() {
                var spec = qq.extend({}, this._filenameEditHandler());
                return new qq.FilenameClickHandler(spec);
            },
            _storeForLater: function(id) {
                this._parent.prototype._storeForLater.apply(this, arguments);
                this._templating.hideSpinner(id);
            },
            _onAllComplete: function(successful, failed) {
                this._parent.prototype._onAllComplete.apply(this, arguments);
                this._templating.resetTotalProgress();
            },
            _onSubmit: function(id, name) {
                var file = this.getFile(id);
                if (file && file.qqPath && this._options.dragAndDrop.reportDirectoryPaths) {
                    this._paramsStore.addReadOnly(id, {
                        qqpath: file.qqPath
                    });
                }
                this._parent.prototype._onSubmit.apply(this, arguments);
                this._addToList(id, name);
            },
            _onSubmitted: function(id) {
                if (this._isEditFilenameEnabled()) {
                    this._templating.markFilenameEditable(id);
                    this._templating.showEditIcon(id);
                    if (!this._focusinEventSupported) {
                        this._filenameInputFocusHandler.addHandler(this._templating.getEditInput(id));
                    }
                }
            },
            _onProgress: function(id, name, loaded, total) {
                this._parent.prototype._onProgress.apply(this, arguments);
                this._templating.updateProgress(id, loaded, total);
                if (total === 0 || Math.round(loaded / total * 100) === 100) {
                    this._templating.hideCancel(id);
                    this._templating.hidePause(id);
                    this._templating.hideProgress(id);
                    this._templating.setStatusText(id, this._options.text.waitingForResponse);
                    this._displayFileSize(id);
                } else {
                    this._displayFileSize(id, loaded, total);
                }
            },
            _onTotalProgress: function(loaded, total) {
                this._parent.prototype._onTotalProgress.apply(this, arguments);
                this._templating.updateTotalProgress(loaded, total);
            },
            _onComplete: function(id, name, result, xhr) {
                var parentRetVal = this._parent.prototype._onComplete.apply(this, arguments), templating = this._templating, fileContainer = templating.getFileContainer(id), self = this;
                function completeUpload(result) {
                    if (!fileContainer) {
                        return;
                    }
                    templating.setStatusText(id);
                    qq(fileContainer).removeClass(self._classes.retrying);
                    templating.hideProgress(id);
                    if (self.getUploads({
                        id: id
                    }).status !== qq.status.UPLOAD_FAILED) {
                        templating.hideCancel(id);
                    }
                    templating.hideSpinner(id);
                    if (result.success) {
                        self._markFileAsSuccessful(id);
                    } else {
                        qq(fileContainer).addClass(self._classes.fail);
                        templating.showCancel(id);
                        if (templating.isRetryPossible() && !self._preventRetries[id]) {
                            qq(fileContainer).addClass(self._classes.retryable);
                            templating.showRetry(id);
                        }
                        self._controlFailureTextDisplay(id, result);
                    }
                }
                if (parentRetVal instanceof qq.Promise) {
                    parentRetVal.done(function(newResult) {
                        completeUpload(newResult);
                    });
                } else {
                    completeUpload(result);
                }
                return parentRetVal;
            },
            _markFileAsSuccessful: function(id) {
                var templating = this._templating;
                if (this._isDeletePossible()) {
                    templating.showDeleteButton(id);
                }
                qq(templating.getFileContainer(id)).addClass(this._classes.success);
                this._maybeUpdateThumbnail(id);
            },
            _onUploadPrep: function(id) {
                this._parent.prototype._onUploadPrep.apply(this, arguments);
                this._templating.showSpinner(id);
            },
            _onUpload: function(id, name) {
                var parentRetVal = this._parent.prototype._onUpload.apply(this, arguments);
                this._templating.showSpinner(id);
                return parentRetVal;
            },
            _onUploadChunk: function(id, chunkData) {
                this._parent.prototype._onUploadChunk.apply(this, arguments);
                if (chunkData.partIndex > 0 && this._handler.isResumable(id)) {
                    this._templating.allowPause(id);
                }
            },
            _onCancel: function(id, name) {
                this._parent.prototype._onCancel.apply(this, arguments);
                this._removeFileItem(id);
                if (this._getNotFinished() === 0) {
                    this._templating.resetTotalProgress();
                }
            },
            _onBeforeAutoRetry: function(id) {
                var retryNumForDisplay, maxAuto, retryNote;
                this._parent.prototype._onBeforeAutoRetry.apply(this, arguments);
                this._showCancelLink(id);
                if (this._options.retry.showAutoRetryNote) {
                    retryNumForDisplay = this._autoRetries[id];
                    maxAuto = this._options.retry.maxAutoAttempts;
                    retryNote = this._options.retry.autoRetryNote.replace(/\{retryNum\}/g, retryNumForDisplay);
                    retryNote = retryNote.replace(/\{maxAuto\}/g, maxAuto);
                    this._templating.setStatusText(id, retryNote);
                    qq(this._templating.getFileContainer(id)).addClass(this._classes.retrying);
                }
            },
            _onBeforeManualRetry: function(id) {
                if (this._parent.prototype._onBeforeManualRetry.apply(this, arguments)) {
                    this._templating.resetProgress(id);
                    qq(this._templating.getFileContainer(id)).removeClass(this._classes.fail);
                    this._templating.setStatusText(id);
                    this._templating.showSpinner(id);
                    this._showCancelLink(id);
                    return true;
                } else {
                    qq(this._templating.getFileContainer(id)).addClass(this._classes.retryable);
                    this._templating.showRetry(id);
                    return false;
                }
            },
            _onSubmitDelete: function(id) {
                var onSuccessCallback = qq.bind(this._onSubmitDeleteSuccess, this);
                this._parent.prototype._onSubmitDelete.call(this, id, onSuccessCallback);
            },
            _onSubmitDeleteSuccess: function(id, uuid, additionalMandatedParams) {
                if (this._options.deleteFile.forceConfirm) {
                    this._showDeleteConfirm.apply(this, arguments);
                } else {
                    this._sendDeleteRequest.apply(this, arguments);
                }
            },
            _onDeleteComplete: function(id, xhr, isError) {
                this._parent.prototype._onDeleteComplete.apply(this, arguments);
                this._templating.hideSpinner(id);
                if (isError) {
                    this._templating.setStatusText(id, this._options.deleteFile.deletingFailedText);
                    this._templating.showDeleteButton(id);
                } else {
                    this._removeFileItem(id);
                }
            },
            _sendDeleteRequest: function(id, uuid, additionalMandatedParams) {
                this._templating.hideDeleteButton(id);
                this._templating.showSpinner(id);
                this._templating.setStatusText(id, this._options.deleteFile.deletingStatusText);
                this._deleteHandler.sendDelete.apply(this, arguments);
            },
            _showDeleteConfirm: function(id, uuid, mandatedParams) {
                var fileName = this.getName(id), confirmMessage = this._options.deleteFile.confirmMessage.replace(/\{filename\}/g, fileName), uuid = this.getUuid(id), deleteRequestArgs = arguments, self = this, retVal;
                retVal = this._options.showConfirm(confirmMessage);
                if (qq.isGenericPromise(retVal)) {
                    retVal.then(function() {
                        self._sendDeleteRequest.apply(self, deleteRequestArgs);
                    });
                } else if (retVal !== false) {
                    self._sendDeleteRequest.apply(self, deleteRequestArgs);
                }
            },
            _addToList: function(id, name, canned) {
                var prependData, prependIndex = 0, dontDisplay = this._handler.isProxied(id) && this._options.scaling.hideScaled, record;
                if (this._options.display.prependFiles) {
                    if (this._totalFilesInBatch > 1 && this._filesInBatchAddedToUi > 0) {
                        prependIndex = this._filesInBatchAddedToUi - 1;
                    }
                    prependData = {
                        index: prependIndex
                    };
                }
                if (!canned) {
                    if (this._options.disableCancelForFormUploads && !qq.supportedFeatures.ajaxUploading) {
                        this._templating.disableCancel();
                    }
                    if (!this._options.multiple) {
                        record = this.getUploads({
                            id: id
                        });
                        this._handledProxyGroup = this._handledProxyGroup || record.proxyGroupId;
                        if (record.proxyGroupId !== this._handledProxyGroup || !record.proxyGroupId) {
                            this._handler.cancelAll();
                            this._clearList();
                            this._handledProxyGroup = null;
                        }
                    }
                }
                if (canned) {
                    this._templating.addFileToCache(id, this._options.formatFileName(name), prependData, dontDisplay);
                    this._templating.updateThumbnail(id, this._thumbnailUrls[id], true, this._options.thumbnails.customResizer);
                } else {
                    this._templating.addFile(id, this._options.formatFileName(name), prependData, dontDisplay);
                    this._templating.generatePreview(id, this.getFile(id), this._options.thumbnails.customResizer);
                }
                this._filesInBatchAddedToUi += 1;
                if (canned || this._options.display.fileSizeOnSubmit && qq.supportedFeatures.ajaxUploading) {
                    this._displayFileSize(id);
                }
            },
            _clearList: function() {
                this._templating.clearFiles();
                this.clearStoredFiles();
            },
            _displayFileSize: function(id, loadedSize, totalSize) {
                var size = this.getSize(id), sizeForDisplay = this._formatSize(size);
                if (size >= 0) {
                    if (loadedSize !== undefined && totalSize !== undefined) {
                        sizeForDisplay = this._formatProgress(loadedSize, totalSize);
                    }
                    this._templating.updateSize(id, sizeForDisplay);
                }
            },
            _formatProgress: function(uploadedSize, totalSize) {
                var message = this._options.text.formatProgress;
                function r(name, replacement) {
                    message = message.replace(name, replacement);
                }
                r("{percent}", Math.round(uploadedSize / totalSize * 100));
                r("{total_size}", this._formatSize(totalSize));
                return message;
            },
            _controlFailureTextDisplay: function(id, response) {
                var mode, responseProperty, failureReason;
                mode = this._options.failedUploadTextDisplay.mode;
                responseProperty = this._options.failedUploadTextDisplay.responseProperty;
                if (mode === "custom") {
                    failureReason = response[responseProperty];
                    if (!failureReason) {
                        failureReason = this._options.text.failUpload;
                    }
                    this._templating.setStatusText(id, failureReason);
                    if (this._options.failedUploadTextDisplay.enableTooltip) {
                        this._showTooltip(id, failureReason);
                    }
                } else if (mode === "default") {
                    this._templating.setStatusText(id, this._options.text.failUpload);
                } else if (mode !== "none") {
                    this.log("failedUploadTextDisplay.mode value of '" + mode + "' is not valid", "warn");
                }
            },
            _showTooltip: function(id, text) {
                this._templating.getFileContainer(id).title = text;
            },
            _showCancelLink: function(id) {
                if (!this._options.disableCancelForFormUploads || qq.supportedFeatures.ajaxUploading) {
                    this._templating.showCancel(id);
                }
            },
            _itemError: function(code, name, item) {
                var message = this._parent.prototype._itemError.apply(this, arguments);
                this._options.showMessage(message);
            },
            _batchError: function(message) {
                this._parent.prototype._batchError.apply(this, arguments);
                this._options.showMessage(message);
            },
            _setupPastePrompt: function() {
                var self = this;
                this._options.callbacks.onPasteReceived = function() {
                    var message = self._options.paste.namePromptMessage, defaultVal = self._options.paste.defaultName;
                    return self._options.showPrompt(message, defaultVal);
                };
            },
            _fileOrBlobRejected: function(id, name) {
                this._totalFilesInBatch -= 1;
                this._parent.prototype._fileOrBlobRejected.apply(this, arguments);
            },
            _prepareItemsForUpload: function(items, params, endpoint) {
                this._totalFilesInBatch = items.length;
                this._filesInBatchAddedToUi = 0;
                this._parent.prototype._prepareItemsForUpload.apply(this, arguments);
            },
            _maybeUpdateThumbnail: function(fileId) {
                var thumbnailUrl = this._thumbnailUrls[fileId], fileStatus = this.getUploads({
                    id: fileId
                }).status;
                if (fileStatus !== qq.status.DELETED && (thumbnailUrl || this._options.thumbnails.placeholders.waitUntilResponse || !qq.supportedFeatures.imagePreviews)) {
                    this._templating.updateThumbnail(fileId, thumbnailUrl, this._options.thumbnails.customResizer);
                }
            },
            _addCannedFile: function(sessionData) {
                var id = this._parent.prototype._addCannedFile.apply(this, arguments);
                this._addToList(id, this.getName(id), true);
                this._templating.hideSpinner(id);
                this._templating.hideCancel(id);
                this._markFileAsSuccessful(id);
                return id;
            },
            _setSize: function(id, newSize) {
                this._parent.prototype._setSize.apply(this, arguments);
                this._templating.updateSize(id, this._formatSize(newSize));
            },
            _sessionRequestComplete: function() {
                this._templating.addCacheToDom();
                this._parent.prototype._sessionRequestComplete.apply(this, arguments);
            }
        };
    })();
    qq.FineUploader = function(o, namespace) {
        "use strict";
        var self = this;
        this._parent = namespace ? qq[namespace].FineUploaderBasic : qq.FineUploaderBasic;
        this._parent.apply(this, arguments);
        qq.extend(this._options, {
            element: null,
            button: null,
            listElement: null,
            dragAndDrop: {
                extraDropzones: [],
                reportDirectoryPaths: false
            },
            text: {
                formatProgress: "{percent}% of {total_size}",
                failUpload: "Upload failed",
                waitingForResponse: "Processing...",
                paused: "Paused"
            },
            template: "qq-template",
            classes: {
                retrying: "qq-upload-retrying",
                retryable: "qq-upload-retryable",
                success: "qq-upload-success",
                fail: "qq-upload-fail",
                editable: "qq-editable",
                hide: "qq-hide",
                dropActive: "qq-upload-drop-area-active"
            },
            failedUploadTextDisplay: {
                mode: "default",
                responseProperty: "error",
                enableTooltip: true
            },
            messages: {
                tooManyFilesError: "You may only drop one file",
                unsupportedBrowser: "Unrecoverable error - this browser does not permit file uploading of any kind."
            },
            retry: {
                showAutoRetryNote: true,
                autoRetryNote: "Retrying {retryNum}/{maxAuto}..."
            },
            deleteFile: {
                forceConfirm: false,
                confirmMessage: "Are you sure you want to delete {filename}?",
                deletingStatusText: "Deleting...",
                deletingFailedText: "Delete failed"
            },
            display: {
                fileSizeOnSubmit: false,
                prependFiles: false
            },
            paste: {
                promptForName: false,
                namePromptMessage: "Please name this image"
            },
            thumbnails: {
                customResizer: null,
                maxCount: 0,
                placeholders: {
                    waitUntilResponse: false,
                    notAvailablePath: null,
                    waitingPath: null
                },
                timeBetweenThumbs: 750
            },
            scaling: {
                hideScaled: false
            },
            showMessage: function(message) {
                if (self._templating.hasDialog("alert")) {
                    return self._templating.showDialog("alert", message);
                } else {
                    setTimeout(function() {
                        window.alert(message);
                    }, 0);
                }
            },
            showConfirm: function(message) {
                if (self._templating.hasDialog("confirm")) {
                    return self._templating.showDialog("confirm", message);
                } else {
                    return window.confirm(message);
                }
            },
            showPrompt: function(message, defaultValue) {
                if (self._templating.hasDialog("prompt")) {
                    return self._templating.showDialog("prompt", message, defaultValue);
                } else {
                    return window.prompt(message, defaultValue);
                }
            }
        }, true);
        qq.extend(this._options, o, true);
        this._templating = new qq.Templating({
            log: qq.bind(this.log, this),
            templateIdOrEl: this._options.template,
            containerEl: this._options.element,
            fileContainerEl: this._options.listElement,
            button: this._options.button,
            imageGenerator: this._imageGenerator,
            classes: {
                hide: this._options.classes.hide,
                editable: this._options.classes.editable
            },
            limits: {
                maxThumbs: this._options.thumbnails.maxCount,
                timeBetweenThumbs: this._options.thumbnails.timeBetweenThumbs
            },
            placeholders: {
                waitUntilUpdate: this._options.thumbnails.placeholders.waitUntilResponse,
                thumbnailNotAvailable: this._options.thumbnails.placeholders.notAvailablePath,
                waitingForThumbnail: this._options.thumbnails.placeholders.waitingPath
            },
            text: this._options.text
        });
        if (this._options.workarounds.ios8SafariUploads && qq.ios800() && qq.iosSafari()) {
            this._templating.renderFailure(this._options.messages.unsupportedBrowserIos8Safari);
        } else if (!qq.supportedFeatures.uploading || this._options.cors.expected && !qq.supportedFeatures.uploadCors) {
            this._templating.renderFailure(this._options.messages.unsupportedBrowser);
        } else {
            this._wrapCallbacks();
            this._templating.render();
            this._classes = this._options.classes;
            if (!this._options.button && this._templating.getButton()) {
                this._defaultButtonId = this._createUploadButton({
                    element: this._templating.getButton(),
                    title: this._options.text.fileInputTitle
                }).getButtonId();
            }
            this._setupClickAndEditEventHandlers();
            if (qq.DragAndDrop && qq.supportedFeatures.fileDrop) {
                this._dnd = this._setupDragAndDrop();
            }
            if (this._options.paste.targetElement && this._options.paste.promptForName) {
                if (qq.PasteSupport) {
                    this._setupPastePrompt();
                } else {
                    this.log("Paste support module not found.", "error");
                }
            }
            this._totalFilesInBatch = 0;
            this._filesInBatchAddedToUi = 0;
        }
    };
    qq.extend(qq.FineUploader.prototype, qq.basePublicApi);
    qq.extend(qq.FineUploader.prototype, qq.basePrivateApi);
    qq.extend(qq.FineUploader.prototype, qq.uiPublicApi);
    qq.extend(qq.FineUploader.prototype, qq.uiPrivateApi);
    qq.Templating = function(spec) {
        "use strict";
        var FILE_ID_ATTR = "qq-file-id", FILE_CLASS_PREFIX = "qq-file-id-", THUMBNAIL_MAX_SIZE_ATTR = "qq-max-size", THUMBNAIL_SERVER_SCALE_ATTR = "qq-server-scale", HIDE_DROPZONE_ATTR = "qq-hide-dropzone", DROPZPONE_TEXT_ATTR = "qq-drop-area-text", IN_PROGRESS_CLASS = "qq-in-progress", HIDDEN_FOREVER_CLASS = "qq-hidden-forever", fileBatch = {
            content: document.createDocumentFragment(),
            map: {}
        }, isCancelDisabled = false, generatedThumbnails = 0, thumbnailQueueMonitorRunning = false, thumbGenerationQueue = [], thumbnailMaxSize = -1, options = {
            log: null,
            limits: {
                maxThumbs: 0,
                timeBetweenThumbs: 750
            },
            templateIdOrEl: "qq-template",
            containerEl: null,
            fileContainerEl: null,
            button: null,
            imageGenerator: null,
            classes: {
                hide: "qq-hide",
                editable: "qq-editable"
            },
            placeholders: {
                waitUntilUpdate: false,
                thumbnailNotAvailable: null,
                waitingForThumbnail: null
            },
            text: {
                paused: "Paused"
            }
        }, selectorClasses = {
            button: "qq-upload-button-selector",
            alertDialog: "qq-alert-dialog-selector",
            dialogCancelButton: "qq-cancel-button-selector",
            confirmDialog: "qq-confirm-dialog-selector",
            dialogMessage: "qq-dialog-message-selector",
            dialogOkButton: "qq-ok-button-selector",
            promptDialog: "qq-prompt-dialog-selector",
            uploader: "qq-uploader-selector",
            drop: "qq-upload-drop-area-selector",
            list: "qq-upload-list-selector",
            progressBarContainer: "qq-progress-bar-container-selector",
            progressBar: "qq-progress-bar-selector",
            totalProgressBarContainer: "qq-total-progress-bar-container-selector",
            totalProgressBar: "qq-total-progress-bar-selector",
            file: "qq-upload-file-selector",
            spinner: "qq-upload-spinner-selector",
            size: "qq-upload-size-selector",
            cancel: "qq-upload-cancel-selector",
            pause: "qq-upload-pause-selector",
            continueButton: "qq-upload-continue-selector",
            deleteButton: "qq-upload-delete-selector",
            retry: "qq-upload-retry-selector",
            statusText: "qq-upload-status-text-selector",
            editFilenameInput: "qq-edit-filename-selector",
            editNameIcon: "qq-edit-filename-icon-selector",
            dropText: "qq-upload-drop-area-text-selector",
            dropProcessing: "qq-drop-processing-selector",
            dropProcessingSpinner: "qq-drop-processing-spinner-selector",
            thumbnail: "qq-thumbnail-selector"
        }, previewGeneration = {}, cachedThumbnailNotAvailableImg = new qq.Promise(), cachedWaitingForThumbnailImg = new qq.Promise(), log, isEditElementsExist, isRetryElementExist, templateDom, container, fileList, showThumbnails, serverScale, cacheThumbnailPlaceholders = function() {
            var notAvailableUrl = options.placeholders.thumbnailNotAvailable, waitingUrl = options.placeholders.waitingForThumbnail, spec = {
                maxSize: thumbnailMaxSize,
                scale: serverScale
            };
            if (showThumbnails) {
                if (notAvailableUrl) {
                    options.imageGenerator.generate(notAvailableUrl, new Image(), spec).then(function(updatedImg) {
                        cachedThumbnailNotAvailableImg.success(updatedImg);
                    }, function() {
                        cachedThumbnailNotAvailableImg.failure();
                        log("Problem loading 'not available' placeholder image at " + notAvailableUrl, "error");
                    });
                } else {
                    cachedThumbnailNotAvailableImg.failure();
                }
                if (waitingUrl) {
                    options.imageGenerator.generate(waitingUrl, new Image(), spec).then(function(updatedImg) {
                        cachedWaitingForThumbnailImg.success(updatedImg);
                    }, function() {
                        cachedWaitingForThumbnailImg.failure();
                        log("Problem loading 'waiting for thumbnail' placeholder image at " + waitingUrl, "error");
                    });
                } else {
                    cachedWaitingForThumbnailImg.failure();
                }
            }
        }, displayWaitingImg = function(thumbnail) {
            var waitingImgPlacement = new qq.Promise();
            cachedWaitingForThumbnailImg.then(function(img) {
                maybeScalePlaceholderViaCss(img, thumbnail);
                if (!thumbnail.src) {
                    thumbnail.src = img.src;
                    thumbnail.onload = function() {
                        thumbnail.onload = null;
                        show(thumbnail);
                        waitingImgPlacement.success();
                    };
                } else {
                    waitingImgPlacement.success();
                }
            }, function() {
                hide(thumbnail);
                waitingImgPlacement.success();
            });
            return waitingImgPlacement;
        }, generateNewPreview = function(id, blob, spec) {
            var thumbnail = getThumbnail(id);
            log("Generating new thumbnail for " + id);
            blob.qqThumbnailId = id;
            return options.imageGenerator.generate(blob, thumbnail, spec).then(function() {
                generatedThumbnails++;
                show(thumbnail);
                previewGeneration[id].success();
            }, function() {
                previewGeneration[id].failure();
                if (!options.placeholders.waitUntilUpdate) {
                    maybeSetDisplayNotAvailableImg(id, thumbnail);
                }
            });
        }, generateNextQueuedPreview = function() {
            if (thumbGenerationQueue.length) {
                thumbnailQueueMonitorRunning = true;
                var queuedThumbRequest = thumbGenerationQueue.shift();
                if (queuedThumbRequest.update) {
                    processUpdateQueuedPreviewRequest(queuedThumbRequest);
                } else {
                    processNewQueuedPreviewRequest(queuedThumbRequest);
                }
            } else {
                thumbnailQueueMonitorRunning = false;
            }
        }, getCancel = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.cancel);
        }, getContinue = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.continueButton);
        }, getDialog = function(type) {
            return getTemplateEl(container, selectorClasses[type + "Dialog"]);
        }, getDelete = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.deleteButton);
        }, getDropProcessing = function() {
            return getTemplateEl(container, selectorClasses.dropProcessing);
        }, getEditIcon = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.editNameIcon);
        }, getFile = function(id) {
            return fileBatch.map[id] || qq(fileList).getFirstByClass(FILE_CLASS_PREFIX + id);
        }, getFilename = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.file);
        }, getPause = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.pause);
        }, getProgress = function(id) {
            if (id == null) {
                return getTemplateEl(container, selectorClasses.totalProgressBarContainer) || getTemplateEl(container, selectorClasses.totalProgressBar);
            }
            return getTemplateEl(getFile(id), selectorClasses.progressBarContainer) || getTemplateEl(getFile(id), selectorClasses.progressBar);
        }, getRetry = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.retry);
        }, getSize = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.size);
        }, getSpinner = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.spinner);
        }, getTemplateEl = function(context, cssClass) {
            return context && qq(context).getFirstByClass(cssClass);
        }, getThumbnail = function(id) {
            return showThumbnails && getTemplateEl(getFile(id), selectorClasses.thumbnail);
        }, hide = function(el) {
            el && qq(el).addClass(options.classes.hide);
        }, maybeScalePlaceholderViaCss = function(placeholder, thumbnail) {
            var maxWidth = placeholder.style.maxWidth, maxHeight = placeholder.style.maxHeight;
            if (maxHeight && maxWidth && !thumbnail.style.maxWidth && !thumbnail.style.maxHeight) {
                qq(thumbnail).css({
                    maxWidth: maxWidth,
                    maxHeight: maxHeight
                });
            }
        }, maybeSetDisplayNotAvailableImg = function(id, thumbnail) {
            var previewing = previewGeneration[id] || new qq.Promise().failure(), notAvailableImgPlacement = new qq.Promise();
            cachedThumbnailNotAvailableImg.then(function(img) {
                previewing.then(function() {
                    notAvailableImgPlacement.success();
                }, function() {
                    maybeScalePlaceholderViaCss(img, thumbnail);
                    thumbnail.onload = function() {
                        thumbnail.onload = null;
                        notAvailableImgPlacement.success();
                    };
                    thumbnail.src = img.src;
                    show(thumbnail);
                });
            });
            return notAvailableImgPlacement;
        }, parseAndGetTemplate = function() {
            var scriptEl, scriptHtml, fileListNode, tempTemplateEl, fileListEl, defaultButton, dropArea, thumbnail, dropProcessing, dropTextEl, uploaderEl;
            log("Parsing template");
            if (options.templateIdOrEl == null) {
                throw new Error("You MUST specify either a template element or ID!");
            }
            if (qq.isString(options.templateIdOrEl)) {
                scriptEl = document.getElementById(options.templateIdOrEl);
                if (scriptEl === null) {
                    throw new Error(qq.format("Cannot find template script at ID '{}'!", options.templateIdOrEl));
                }
                scriptHtml = scriptEl.innerHTML;
            } else {
                if (options.templateIdOrEl.innerHTML === undefined) {
                    throw new Error("You have specified an invalid value for the template option!  " + "It must be an ID or an Element.");
                }
                scriptHtml = options.templateIdOrEl.innerHTML;
            }
            scriptHtml = qq.trimStr(scriptHtml);
            tempTemplateEl = document.createElement("div");
            tempTemplateEl.appendChild(qq.toElement(scriptHtml));
            uploaderEl = qq(tempTemplateEl).getFirstByClass(selectorClasses.uploader);
            if (options.button) {
                defaultButton = qq(tempTemplateEl).getFirstByClass(selectorClasses.button);
                if (defaultButton) {
                    qq(defaultButton).remove();
                }
            }
            if (!qq.DragAndDrop || !qq.supportedFeatures.fileDrop) {
                dropProcessing = qq(tempTemplateEl).getFirstByClass(selectorClasses.dropProcessing);
                if (dropProcessing) {
                    qq(dropProcessing).remove();
                }
            }
            dropArea = qq(tempTemplateEl).getFirstByClass(selectorClasses.drop);
            if (dropArea && !qq.DragAndDrop) {
                log("DnD module unavailable.", "info");
                qq(dropArea).remove();
            }
            if (!qq.supportedFeatures.fileDrop) {
                uploaderEl.removeAttribute(DROPZPONE_TEXT_ATTR);
                if (dropArea && qq(dropArea).hasAttribute(HIDE_DROPZONE_ATTR)) {
                    qq(dropArea).css({
                        display: "none"
                    });
                }
            } else if (qq(uploaderEl).hasAttribute(DROPZPONE_TEXT_ATTR) && dropArea) {
                dropTextEl = qq(dropArea).getFirstByClass(selectorClasses.dropText);
                dropTextEl && qq(dropTextEl).remove();
            }
            thumbnail = qq(tempTemplateEl).getFirstByClass(selectorClasses.thumbnail);
            if (!showThumbnails) {
                thumbnail && qq(thumbnail).remove();
            } else if (thumbnail) {
                thumbnailMaxSize = parseInt(thumbnail.getAttribute(THUMBNAIL_MAX_SIZE_ATTR));
                thumbnailMaxSize = thumbnailMaxSize > 0 ? thumbnailMaxSize : null;
                serverScale = qq(thumbnail).hasAttribute(THUMBNAIL_SERVER_SCALE_ATTR);
            }
            showThumbnails = showThumbnails && thumbnail;
            isEditElementsExist = qq(tempTemplateEl).getByClass(selectorClasses.editFilenameInput).length > 0;
            isRetryElementExist = qq(tempTemplateEl).getByClass(selectorClasses.retry).length > 0;
            fileListNode = qq(tempTemplateEl).getFirstByClass(selectorClasses.list);
            if (fileListNode == null) {
                throw new Error("Could not find the file list container in the template!");
            }
            fileListEl = fileListNode.children[0].cloneNode(true);
            fileListNode.innerHTML = "";
            if (tempTemplateEl.getElementsByTagName("DIALOG").length) {
                document.createElement("dialog");
            }
            log("Template parsing complete");
            return {
                template: tempTemplateEl,
                fileTemplate: fileListEl
            };
        }, prependFile = function(el, index, fileList) {
            var parentEl = fileList, beforeEl = parentEl.firstChild;
            if (index > 0) {
                beforeEl = qq(parentEl).children()[index].nextSibling;
            }
            parentEl.insertBefore(el, beforeEl);
        }, processNewQueuedPreviewRequest = function(queuedThumbRequest) {
            var id = queuedThumbRequest.id, optFileOrBlob = queuedThumbRequest.optFileOrBlob, relatedThumbnailId = optFileOrBlob && optFileOrBlob.qqThumbnailId, thumbnail = getThumbnail(id), spec = {
                customResizeFunction: queuedThumbRequest.customResizeFunction,
                maxSize: thumbnailMaxSize,
                orient: true,
                scale: true
            };
            if (qq.supportedFeatures.imagePreviews) {
                if (thumbnail) {
                    if (options.limits.maxThumbs && options.limits.maxThumbs <= generatedThumbnails) {
                        maybeSetDisplayNotAvailableImg(id, thumbnail);
                        generateNextQueuedPreview();
                    } else {
                        displayWaitingImg(thumbnail).done(function() {
                            previewGeneration[id] = new qq.Promise();
                            previewGeneration[id].done(function() {
                                setTimeout(generateNextQueuedPreview, options.limits.timeBetweenThumbs);
                            });
                            if (relatedThumbnailId != null) {
                                useCachedPreview(id, relatedThumbnailId);
                            } else {
                                generateNewPreview(id, optFileOrBlob, spec);
                            }
                        });
                    }
                } else {
                    generateNextQueuedPreview();
                }
            } else if (thumbnail) {
                displayWaitingImg(thumbnail);
                generateNextQueuedPreview();
            }
        }, processUpdateQueuedPreviewRequest = function(queuedThumbRequest) {
            var id = queuedThumbRequest.id, thumbnailUrl = queuedThumbRequest.thumbnailUrl, showWaitingImg = queuedThumbRequest.showWaitingImg, thumbnail = getThumbnail(id), spec = {
                customResizeFunction: queuedThumbRequest.customResizeFunction,
                scale: serverScale,
                maxSize: thumbnailMaxSize
            };
            if (thumbnail) {
                if (thumbnailUrl) {
                    if (options.limits.maxThumbs && options.limits.maxThumbs <= generatedThumbnails) {
                        maybeSetDisplayNotAvailableImg(id, thumbnail);
                        generateNextQueuedPreview();
                    } else {
                        if (showWaitingImg) {
                            displayWaitingImg(thumbnail);
                        }
                        return options.imageGenerator.generate(thumbnailUrl, thumbnail, spec).then(function() {
                            show(thumbnail);
                            generatedThumbnails++;
                            setTimeout(generateNextQueuedPreview, options.limits.timeBetweenThumbs);
                        }, function() {
                            maybeSetDisplayNotAvailableImg(id, thumbnail);
                            setTimeout(generateNextQueuedPreview, options.limits.timeBetweenThumbs);
                        });
                    }
                } else {
                    maybeSetDisplayNotAvailableImg(id, thumbnail);
                    generateNextQueuedPreview();
                }
            }
        }, setProgressBarWidth = function(id, percent) {
            var bar = getProgress(id), progressBarSelector = id == null ? selectorClasses.totalProgressBar : selectorClasses.progressBar;
            if (bar && !qq(bar).hasClass(progressBarSelector)) {
                bar = qq(bar).getFirstByClass(progressBarSelector);
            }
            if (bar) {
                qq(bar).css({
                    width: percent + "%"
                });
                bar.setAttribute("aria-valuenow", percent);
            }
        }, show = function(el) {
            el && qq(el).removeClass(options.classes.hide);
        }, useCachedPreview = function(targetThumbnailId, cachedThumbnailId) {
            var targetThumbnail = getThumbnail(targetThumbnailId), cachedThumbnail = getThumbnail(cachedThumbnailId);
            log(qq.format("ID {} is the same file as ID {}.  Will use generated thumbnail from ID {} instead.", targetThumbnailId, cachedThumbnailId, cachedThumbnailId));
            previewGeneration[cachedThumbnailId].then(function() {
                generatedThumbnails++;
                previewGeneration[targetThumbnailId].success();
                log(qq.format("Now using previously generated thumbnail created for ID {} on ID {}.", cachedThumbnailId, targetThumbnailId));
                targetThumbnail.src = cachedThumbnail.src;
                show(targetThumbnail);
            }, function() {
                previewGeneration[targetThumbnailId].failure();
                if (!options.placeholders.waitUntilUpdate) {
                    maybeSetDisplayNotAvailableImg(targetThumbnailId, targetThumbnail);
                }
            });
        };
        qq.extend(options, spec);
        log = options.log;
        if (!qq.supportedFeatures.imagePreviews) {
            options.limits.timeBetweenThumbs = 0;
            options.limits.maxThumbs = 0;
        }
        container = options.containerEl;
        showThumbnails = options.imageGenerator !== undefined;
        templateDom = parseAndGetTemplate();
        cacheThumbnailPlaceholders();
        qq.extend(this, {
            render: function() {
                log("Rendering template in DOM.");
                generatedThumbnails = 0;
                container.appendChild(templateDom.template.cloneNode(true));
                hide(getDropProcessing());
                this.hideTotalProgress();
                fileList = options.fileContainerEl || getTemplateEl(container, selectorClasses.list);
                log("Template rendering complete");
            },
            renderFailure: function(message) {
                var cantRenderEl = qq.toElement(message);
                container.innerHTML = "";
                container.appendChild(cantRenderEl);
            },
            reset: function() {
                this.render();
            },
            clearFiles: function() {
                fileList.innerHTML = "";
            },
            disableCancel: function() {
                isCancelDisabled = true;
            },
            addFile: function(id, name, prependInfo, hideForever, batch) {
                var fileEl = templateDom.fileTemplate.cloneNode(true), fileNameEl = getTemplateEl(fileEl, selectorClasses.file), uploaderEl = getTemplateEl(container, selectorClasses.uploader), fileContainer = batch ? fileBatch.content : fileList, thumb;
                if (batch) {
                    fileBatch.map[id] = fileEl;
                }
                qq(fileEl).addClass(FILE_CLASS_PREFIX + id);
                uploaderEl.removeAttribute(DROPZPONE_TEXT_ATTR);
                if (fileNameEl) {
                    qq(fileNameEl).setText(name);
                    fileNameEl.setAttribute("title", name);
                }
                fileEl.setAttribute(FILE_ID_ATTR, id);
                if (prependInfo) {
                    prependFile(fileEl, prependInfo.index, fileContainer);
                } else {
                    fileContainer.appendChild(fileEl);
                }
                if (hideForever) {
                    fileEl.style.display = "none";
                    qq(fileEl).addClass(HIDDEN_FOREVER_CLASS);
                } else {
                    hide(getProgress(id));
                    hide(getSize(id));
                    hide(getDelete(id));
                    hide(getRetry(id));
                    hide(getPause(id));
                    hide(getContinue(id));
                    if (isCancelDisabled) {
                        this.hideCancel(id);
                    }
                    thumb = getThumbnail(id);
                    if (thumb && !thumb.src) {
                        cachedWaitingForThumbnailImg.then(function(waitingImg) {
                            thumb.src = waitingImg.src;
                            if (waitingImg.style.maxHeight && waitingImg.style.maxWidth) {
                                qq(thumb).css({
                                    maxHeight: waitingImg.style.maxHeight,
                                    maxWidth: waitingImg.style.maxWidth
                                });
                            }
                            show(thumb);
                        });
                    }
                }
            },
            addFileToCache: function(id, name, prependInfo, hideForever) {
                this.addFile(id, name, prependInfo, hideForever, true);
            },
            addCacheToDom: function() {
                fileList.appendChild(fileBatch.content);
                fileBatch.content = document.createDocumentFragment();
                fileBatch.map = {};
            },
            removeFile: function(id) {
                qq(getFile(id)).remove();
            },
            getFileId: function(el) {
                var currentNode = el;
                if (currentNode) {
                    while (currentNode.getAttribute(FILE_ID_ATTR) == null) {
                        currentNode = currentNode.parentNode;
                    }
                    return parseInt(currentNode.getAttribute(FILE_ID_ATTR));
                }
            },
            getFileList: function() {
                return fileList;
            },
            markFilenameEditable: function(id) {
                var filename = getFilename(id);
                filename && qq(filename).addClass(options.classes.editable);
            },
            updateFilename: function(id, name) {
                var filenameEl = getFilename(id);
                if (filenameEl) {
                    qq(filenameEl).setText(name);
                    filenameEl.setAttribute("title", name);
                }
            },
            hideFilename: function(id) {
                hide(getFilename(id));
            },
            showFilename: function(id) {
                show(getFilename(id));
            },
            isFileName: function(el) {
                return qq(el).hasClass(selectorClasses.file);
            },
            getButton: function() {
                return options.button || getTemplateEl(container, selectorClasses.button);
            },
            hideDropProcessing: function() {
                hide(getDropProcessing());
            },
            showDropProcessing: function() {
                show(getDropProcessing());
            },
            getDropZone: function() {
                return getTemplateEl(container, selectorClasses.drop);
            },
            isEditFilenamePossible: function() {
                return isEditElementsExist;
            },
            hideRetry: function(id) {
                hide(getRetry(id));
            },
            isRetryPossible: function() {
                return isRetryElementExist;
            },
            showRetry: function(id) {
                show(getRetry(id));
            },
            getFileContainer: function(id) {
                return getFile(id);
            },
            showEditIcon: function(id) {
                var icon = getEditIcon(id);
                icon && qq(icon).addClass(options.classes.editable);
            },
            isHiddenForever: function(id) {
                return qq(getFile(id)).hasClass(HIDDEN_FOREVER_CLASS);
            },
            hideEditIcon: function(id) {
                var icon = getEditIcon(id);
                icon && qq(icon).removeClass(options.classes.editable);
            },
            isEditIcon: function(el) {
                return qq(el).hasClass(selectorClasses.editNameIcon, true);
            },
            getEditInput: function(id) {
                return getTemplateEl(getFile(id), selectorClasses.editFilenameInput);
            },
            isEditInput: function(el) {
                return qq(el).hasClass(selectorClasses.editFilenameInput, true);
            },
            updateProgress: function(id, loaded, total) {
                var bar = getProgress(id), percent;
                if (bar && total > 0) {
                    percent = Math.round(loaded / total * 100);
                    if (percent === 100) {
                        hide(bar);
                    } else {
                        show(bar);
                    }
                    setProgressBarWidth(id, percent);
                }
            },
            updateTotalProgress: function(loaded, total) {
                this.updateProgress(null, loaded, total);
            },
            hideProgress: function(id) {
                var bar = getProgress(id);
                bar && hide(bar);
            },
            hideTotalProgress: function() {
                this.hideProgress();
            },
            resetProgress: function(id) {
                setProgressBarWidth(id, 0);
                this.hideTotalProgress(id);
            },
            resetTotalProgress: function() {
                this.resetProgress();
            },
            showCancel: function(id) {
                if (!isCancelDisabled) {
                    var cancel = getCancel(id);
                    cancel && qq(cancel).removeClass(options.classes.hide);
                }
            },
            hideCancel: function(id) {
                hide(getCancel(id));
            },
            isCancel: function(el) {
                return qq(el).hasClass(selectorClasses.cancel, true);
            },
            allowPause: function(id) {
                show(getPause(id));
                hide(getContinue(id));
            },
            uploadPaused: function(id) {
                this.setStatusText(id, options.text.paused);
                this.allowContinueButton(id);
                hide(getSpinner(id));
            },
            hidePause: function(id) {
                hide(getPause(id));
            },
            isPause: function(el) {
                return qq(el).hasClass(selectorClasses.pause, true);
            },
            isContinueButton: function(el) {
                return qq(el).hasClass(selectorClasses.continueButton, true);
            },
            allowContinueButton: function(id) {
                show(getContinue(id));
                hide(getPause(id));
            },
            uploadContinued: function(id) {
                this.setStatusText(id, "");
                this.allowPause(id);
                show(getSpinner(id));
            },
            showDeleteButton: function(id) {
                show(getDelete(id));
            },
            hideDeleteButton: function(id) {
                hide(getDelete(id));
            },
            isDeleteButton: function(el) {
                return qq(el).hasClass(selectorClasses.deleteButton, true);
            },
            isRetry: function(el) {
                return qq(el).hasClass(selectorClasses.retry, true);
            },
            updateSize: function(id, text) {
                var size = getSize(id);
                if (size) {
                    show(size);
                    qq(size).setText(text);
                }
            },
            setStatusText: function(id, text) {
                var textEl = getTemplateEl(getFile(id), selectorClasses.statusText);
                if (textEl) {
                    if (text == null) {
                        qq(textEl).clearText();
                    } else {
                        qq(textEl).setText(text);
                    }
                }
            },
            hideSpinner: function(id) {
                qq(getFile(id)).removeClass(IN_PROGRESS_CLASS);
                hide(getSpinner(id));
            },
            showSpinner: function(id) {
                qq(getFile(id)).addClass(IN_PROGRESS_CLASS);
                show(getSpinner(id));
            },
            generatePreview: function(id, optFileOrBlob, customResizeFunction) {
                if (!this.isHiddenForever(id)) {
                    thumbGenerationQueue.push({
                        id: id,
                        customResizeFunction: customResizeFunction,
                        optFileOrBlob: optFileOrBlob
                    });
                    !thumbnailQueueMonitorRunning && generateNextQueuedPreview();
                }
            },
            updateThumbnail: function(id, thumbnailUrl, showWaitingImg, customResizeFunction) {
                if (!this.isHiddenForever(id)) {
                    thumbGenerationQueue.push({
                        customResizeFunction: customResizeFunction,
                        update: true,
                        id: id,
                        thumbnailUrl: thumbnailUrl,
                        showWaitingImg: showWaitingImg
                    });
                    !thumbnailQueueMonitorRunning && generateNextQueuedPreview();
                }
            },
            hasDialog: function(type) {
                return qq.supportedFeatures.dialogElement && !!getDialog(type);
            },
            showDialog: function(type, message, defaultValue) {
                var dialog = getDialog(type), messageEl = getTemplateEl(dialog, selectorClasses.dialogMessage), inputEl = dialog.getElementsByTagName("INPUT")[0], cancelBtn = getTemplateEl(dialog, selectorClasses.dialogCancelButton), okBtn = getTemplateEl(dialog, selectorClasses.dialogOkButton), promise = new qq.Promise(), closeHandler = function() {
                    cancelBtn.removeEventListener("click", cancelClickHandler);
                    okBtn && okBtn.removeEventListener("click", okClickHandler);
                    promise.failure();
                }, cancelClickHandler = function() {
                    cancelBtn.removeEventListener("click", cancelClickHandler);
                    dialog.close();
                }, okClickHandler = function() {
                    dialog.removeEventListener("close", closeHandler);
                    okBtn.removeEventListener("click", okClickHandler);
                    dialog.close();
                    promise.success(inputEl && inputEl.value);
                };
                dialog.addEventListener("close", closeHandler);
                cancelBtn.addEventListener("click", cancelClickHandler);
                okBtn && okBtn.addEventListener("click", okClickHandler);
                if (inputEl) {
                    inputEl.value = defaultValue;
                }
                messageEl.textContent = message;
                dialog.showModal();
                return promise;
            }
        });
    };
    qq.UiEventHandler = function(s, protectedApi) {
        "use strict";
        var disposer = new qq.DisposeSupport(), spec = {
            eventType: "click",
            attachTo: null,
            onHandled: function(target, event) {}
        };
        qq.extend(this, {
            addHandler: function(element) {
                addHandler(element);
            },
            dispose: function() {
                disposer.dispose();
            }
        });
        function addHandler(element) {
            disposer.attach(element, spec.eventType, function(event) {
                event = event || window.event;
                var target = event.target || event.srcElement;
                spec.onHandled(target, event);
            });
        }
        qq.extend(protectedApi, {
            getFileIdFromItem: function(item) {
                return item.qqFileId;
            },
            getDisposeSupport: function() {
                return disposer;
            }
        });
        qq.extend(spec, s);
        if (spec.attachTo) {
            addHandler(spec.attachTo);
        }
    };
    qq.FileButtonsClickHandler = function(s) {
        "use strict";
        var inheritedInternalApi = {}, spec = {
            templating: null,
            log: function(message, lvl) {},
            onDeleteFile: function(fileId) {},
            onCancel: function(fileId) {},
            onRetry: function(fileId) {},
            onPause: function(fileId) {},
            onContinue: function(fileId) {},
            onGetName: function(fileId) {}
        }, buttonHandlers = {
            cancel: function(id) {
                spec.onCancel(id);
            },
            retry: function(id) {
                spec.onRetry(id);
            },
            deleteButton: function(id) {
                spec.onDeleteFile(id);
            },
            pause: function(id) {
                spec.onPause(id);
            },
            continueButton: function(id) {
                spec.onContinue(id);
            }
        };
        function examineEvent(target, event) {
            qq.each(buttonHandlers, function(buttonType, handler) {
                var firstLetterCapButtonType = buttonType.charAt(0).toUpperCase() + buttonType.slice(1), fileId;
                if (spec.templating["is" + firstLetterCapButtonType](target)) {
                    fileId = spec.templating.getFileId(target);
                    qq.preventDefault(event);
                    spec.log(qq.format("Detected valid file button click event on file '{}', ID: {}.", spec.onGetName(fileId), fileId));
                    handler(fileId);
                    return false;
                }
            });
        }
        qq.extend(spec, s);
        spec.eventType = "click";
        spec.onHandled = examineEvent;
        spec.attachTo = spec.templating.getFileList();
        qq.extend(this, new qq.UiEventHandler(spec, inheritedInternalApi));
    };
    qq.FilenameClickHandler = function(s) {
        "use strict";
        var inheritedInternalApi = {}, spec = {
            templating: null,
            log: function(message, lvl) {},
            classes: {
                file: "qq-upload-file",
                editNameIcon: "qq-edit-filename-icon"
            },
            onGetUploadStatus: function(fileId) {},
            onGetName: function(fileId) {}
        };
        qq.extend(spec, s);
        function examineEvent(target, event) {
            if (spec.templating.isFileName(target) || spec.templating.isEditIcon(target)) {
                var fileId = spec.templating.getFileId(target), status = spec.onGetUploadStatus(fileId);
                if (status === qq.status.SUBMITTED) {
                    spec.log(qq.format("Detected valid filename click event on file '{}', ID: {}.", spec.onGetName(fileId), fileId));
                    qq.preventDefault(event);
                    inheritedInternalApi.handleFilenameEdit(fileId, target, true);
                }
            }
        }
        spec.eventType = "click";
        spec.onHandled = examineEvent;
        qq.extend(this, new qq.FilenameEditHandler(spec, inheritedInternalApi));
    };
    qq.FilenameInputFocusInHandler = function(s, inheritedInternalApi) {
        "use strict";
        var spec = {
            templating: null,
            onGetUploadStatus: function(fileId) {},
            log: function(message, lvl) {}
        };
        if (!inheritedInternalApi) {
            inheritedInternalApi = {};
        }
        function handleInputFocus(target, event) {
            if (spec.templating.isEditInput(target)) {
                var fileId = spec.templating.getFileId(target), status = spec.onGetUploadStatus(fileId);
                if (status === qq.status.SUBMITTED) {
                    spec.log(qq.format("Detected valid filename input focus event on file '{}', ID: {}.", spec.onGetName(fileId), fileId));
                    inheritedInternalApi.handleFilenameEdit(fileId, target);
                }
            }
        }
        spec.eventType = "focusin";
        spec.onHandled = handleInputFocus;
        qq.extend(spec, s);
        qq.extend(this, new qq.FilenameEditHandler(spec, inheritedInternalApi));
    };
    qq.FilenameInputFocusHandler = function(spec) {
        "use strict";
        spec.eventType = "focus";
        spec.attachTo = null;
        qq.extend(this, new qq.FilenameInputFocusInHandler(spec, {}));
    };
    qq.FilenameEditHandler = function(s, inheritedInternalApi) {
        "use strict";
        var spec = {
            templating: null,
            log: function(message, lvl) {},
            onGetUploadStatus: function(fileId) {},
            onGetName: function(fileId) {},
            onSetName: function(fileId, newName) {},
            onEditingStatusChange: function(fileId, isEditing) {}
        };
        function getFilenameSansExtension(fileId) {
            var filenameSansExt = spec.onGetName(fileId), extIdx = filenameSansExt.lastIndexOf(".");
            if (extIdx > 0) {
                filenameSansExt = filenameSansExt.substr(0, extIdx);
            }
            return filenameSansExt;
        }
        function getOriginalExtension(fileId) {
            var origName = spec.onGetName(fileId);
            return qq.getExtension(origName);
        }
        function handleNameUpdate(newFilenameInputEl, fileId) {
            var newName = newFilenameInputEl.value, origExtension;
            if (newName !== undefined && qq.trimStr(newName).length > 0) {
                origExtension = getOriginalExtension(fileId);
                if (origExtension !== undefined) {
                    newName = newName + "." + origExtension;
                }
                spec.onSetName(fileId, newName);
            }
            spec.onEditingStatusChange(fileId, false);
        }
        function registerInputBlurHandler(inputEl, fileId) {
            inheritedInternalApi.getDisposeSupport().attach(inputEl, "blur", function() {
                handleNameUpdate(inputEl, fileId);
            });
        }
        function registerInputEnterKeyHandler(inputEl, fileId) {
            inheritedInternalApi.getDisposeSupport().attach(inputEl, "keyup", function(event) {
                var code = event.keyCode || event.which;
                if (code === 13) {
                    handleNameUpdate(inputEl, fileId);
                }
            });
        }
        qq.extend(spec, s);
        spec.attachTo = spec.templating.getFileList();
        qq.extend(this, new qq.UiEventHandler(spec, inheritedInternalApi));
        qq.extend(inheritedInternalApi, {
            handleFilenameEdit: function(id, target, focusInput) {
                var newFilenameInputEl = spec.templating.getEditInput(id);
                spec.onEditingStatusChange(id, true);
                newFilenameInputEl.value = getFilenameSansExtension(id);
                if (focusInput) {
                    newFilenameInputEl.focus();
                }
                registerInputBlurHandler(newFilenameInputEl, id);
                registerInputEnterKeyHandler(newFilenameInputEl, id);
            }
        });
    };
})(window);
//# sourceMappingURL=fine-uploader.js.map

/***/ }),

/***/ "./node_modules/fine-uploader/lib/traditional.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("./node_modules/fine-uploader/fine-uploader/fine-uploader.js");


/***/ }),

/***/ "./node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/moment/moment.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var require;//! moment.js
//! version : 2.19.2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    } else {
        var k;
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                return false;
            }
        }
        return true;
    }
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
        if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
        }
        else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function mod(n, x) {
    return ((n % x) + x) % x;
}

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            var aliasedRequire = require;
            __webpack_require__("./node_modules/moment/locale recursive ^\\.\\/.*$")("./" + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {}
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, tmpLocale, parentConfig = baseConfig;
        // MERGE
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }

    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== config._d.getDay()) {
        getParsingFlags(config).weekdayMismatch = true;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
    ];

    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }

    return result;
}

function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
        return 2000 + year;
    } else if (year <= 999) {
        return 1900 + year;
    }
    return year;
}

function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
}

function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
        if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}

var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};

function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    } else {
        var hm = parseInt(numOffset, 10);
        var m = hm % 100, h = (hm - m) / 100;
        return h * 60 + m;
    }
}

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i));
    if (match) {
        var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
        if (!checkWeekday(match[1], parsedArray, config)) {
            return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);

        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    switch (units) {
        case 'year': output = monthDiff(this, that) / 12; break;
        case 'month': output = monthDiff(this, that); break;
        case 'quarter': output = monthDiff(this, that) / 3; break;
        case 'second': output = (this - that) / 1e3; break; // 1000
        case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
        case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
        case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
        case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default: output = this - that;
    }

    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString() {
    if (!this.isValid()) {
        return null;
    }
    var m = this.clone().utc();
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        return this.toDate().toISOString();
    }
    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function clone$1 () {
    return createDuration(this);
}

function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function sign(x) {
    return ((x > 0) - (x < 0)) || +x;
}

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    var totalSign = total < 0 ? '-' : '';
    var ymSign = sign(this._months) !== sign(total) ? '-' : '';
    var daysSign = sign(this._days) !== sign(total) ? '-' : '';
    var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return totalSign + 'P' +
        (Y ? ymSign + Y + 'Y' : '') +
        (M ? ymSign + M + 'M' : '') +
        (D ? daysSign + D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? hmsSign + h + 'H' : '') +
        (m ? hmsSign + m + 'M' : '') +
        (s ? hmsSign + s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.clone          = clone$1;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.19.2';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

return hooks;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/simplemde/dist/simplemde.min.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;/**
 * simplemde v1.11.2
 * Copyright Next Step Webs, Inc.
 * @link https://github.com/NextStepWebs/simplemde-markdown-editor
 * @license MIT
 */
!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.SimpleMDE=e()}}(function(){var e;return function t(e,n,r){function i(a,l){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!l&&s)return require(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return i(n?n:t)},u,u.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){"use strict";function r(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=0,n=e.length;n>t;++t)s[t]=e[t],c[e.charCodeAt(t)]=t;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63}function i(e){var t,n,r,i,o,a,l=e.length;if(l%4>0)throw new Error("Invalid string. Length must be a multiple of 4");o="="===e[l-2]?2:"="===e[l-1]?1:0,a=new u(3*l/4-o),r=o>0?l-4:l;var s=0;for(t=0,n=0;r>t;t+=4,n+=3)i=c[e.charCodeAt(t)]<<18|c[e.charCodeAt(t+1)]<<12|c[e.charCodeAt(t+2)]<<6|c[e.charCodeAt(t+3)],a[s++]=i>>16&255,a[s++]=i>>8&255,a[s++]=255&i;return 2===o?(i=c[e.charCodeAt(t)]<<2|c[e.charCodeAt(t+1)]>>4,a[s++]=255&i):1===o&&(i=c[e.charCodeAt(t)]<<10|c[e.charCodeAt(t+1)]<<4|c[e.charCodeAt(t+2)]>>2,a[s++]=i>>8&255,a[s++]=255&i),a}function o(e){return s[e>>18&63]+s[e>>12&63]+s[e>>6&63]+s[63&e]}function a(e,t,n){for(var r,i=[],a=t;n>a;a+=3)r=(e[a]<<16)+(e[a+1]<<8)+e[a+2],i.push(o(r));return i.join("")}function l(e){for(var t,n=e.length,r=n%3,i="",o=[],l=16383,c=0,u=n-r;u>c;c+=l)o.push(a(e,c,c+l>u?u:c+l));return 1===r?(t=e[n-1],i+=s[t>>2],i+=s[t<<4&63],i+="=="):2===r&&(t=(e[n-2]<<8)+e[n-1],i+=s[t>>10],i+=s[t>>4&63],i+=s[t<<2&63],i+="="),o.push(i),o.join("")}n.toByteArray=i,n.fromByteArray=l;var s=[],c=[],u="undefined"!=typeof Uint8Array?Uint8Array:Array;r()},{}],2:[function(e,t,n){},{}],3:[function(e,t,n){(function(t){"use strict";function r(){try{var e=new Uint8Array(1);return e.foo=function(){return 42},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(t){return!1}}function i(){return a.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(e,t){if(i()<t)throw new RangeError("Invalid typed array length");return a.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t),e.__proto__=a.prototype):(null===e&&(e=new a(t)),e.length=t),e}function a(e,t,n){if(!(a.TYPED_ARRAY_SUPPORT||this instanceof a))return new a(e,t,n);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return u(this,e)}return l(this,e,t,n)}function l(e,t,n,r){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?d(e,t,n,r):"string"==typeof t?f(e,t,n):p(e,t)}function s(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number')}function c(e,t,n,r){return s(t),0>=t?o(e,t):void 0!==n?"string"==typeof r?o(e,t).fill(n,r):o(e,t).fill(n):o(e,t)}function u(e,t){if(s(t),e=o(e,0>t?0:0|m(t)),!a.TYPED_ARRAY_SUPPORT)for(var n=0;t>n;n++)e[n]=0;return e}function f(e,t,n){if("string"==typeof n&&""!==n||(n="utf8"),!a.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|v(t,n);return e=o(e,r),e.write(t,n),e}function h(e,t){var n=0|m(t.length);e=o(e,n);for(var r=0;n>r;r+=1)e[r]=255&t[r];return e}function d(e,t,n,r){if(t.byteLength,0>n||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");return t=void 0===r?new Uint8Array(t,n):new Uint8Array(t,n,r),a.TYPED_ARRAY_SUPPORT?(e=t,e.__proto__=a.prototype):e=h(e,t),e}function p(e,t){if(a.isBuffer(t)){var n=0|m(t.length);return e=o(e,n),0===e.length?e:(t.copy(e,0,0,n),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||K(t.length)?o(e,0):h(e,t);if("Buffer"===t.type&&J(t.data))return h(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function m(e){if(e>=i())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i().toString(16)+" bytes");return 0|e}function g(e){return+e!=e&&(e=0),a.alloc(+e)}function v(e,t){if(a.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var n=e.length;if(0===n)return 0;for(var r=!1;;)switch(t){case"ascii":case"binary":case"raw":case"raws":return n;case"utf8":case"utf-8":case void 0:return q(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return $(e).length;default:if(r)return q(e).length;t=(""+t).toLowerCase(),r=!0}}function y(e,t,n){var r=!1;if((void 0===t||0>t)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),0>=n)return"";if(n>>>=0,t>>>=0,t>=n)return"";for(e||(e="utf8");;)switch(e){case"hex":return I(this,t,n);case"utf8":case"utf-8":return N(this,t,n);case"ascii":return E(this,t,n);case"binary":return O(this,t,n);case"base64":return M(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function x(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function b(e,t,n,r){function i(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}var o=1,a=e.length,l=t.length;if(void 0!==r&&(r=String(r).toLowerCase(),"ucs2"===r||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,a/=2,l/=2,n/=2}for(var s=-1,c=0;a>n+c;c++)if(i(e,n+c)===i(t,-1===s?0:c-s)){if(-1===s&&(s=c),c-s+1===l)return(n+s)*o}else-1!==s&&(c-=c-s),s=-1;return-1}function w(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var o=t.length;if(o%2!==0)throw new Error("Invalid hex string");r>o/2&&(r=o/2);for(var a=0;r>a;a++){var l=parseInt(t.substr(2*a,2),16);if(isNaN(l))return a;e[n+a]=l}return a}function k(e,t,n,r){return V(q(t,e.length-n),e,n,r)}function S(e,t,n,r){return V(G(t),e,n,r)}function C(e,t,n,r){return S(e,t,n,r)}function L(e,t,n,r){return V($(t),e,n,r)}function T(e,t,n,r){return V(Y(t,e.length-n),e,n,r)}function M(e,t,n){return 0===t&&n===e.length?X.fromByteArray(e):X.fromByteArray(e.slice(t,n))}function N(e,t,n){n=Math.min(e.length,n);for(var r=[],i=t;n>i;){var o=e[i],a=null,l=o>239?4:o>223?3:o>191?2:1;if(n>=i+l){var s,c,u,f;switch(l){case 1:128>o&&(a=o);break;case 2:s=e[i+1],128===(192&s)&&(f=(31&o)<<6|63&s,f>127&&(a=f));break;case 3:s=e[i+1],c=e[i+2],128===(192&s)&&128===(192&c)&&(f=(15&o)<<12|(63&s)<<6|63&c,f>2047&&(55296>f||f>57343)&&(a=f));break;case 4:s=e[i+1],c=e[i+2],u=e[i+3],128===(192&s)&&128===(192&c)&&128===(192&u)&&(f=(15&o)<<18|(63&s)<<12|(63&c)<<6|63&u,f>65535&&1114112>f&&(a=f))}}null===a?(a=65533,l=1):a>65535&&(a-=65536,r.push(a>>>10&1023|55296),a=56320|1023&a),r.push(a),i+=l}return A(r)}function A(e){var t=e.length;if(Q>=t)return String.fromCharCode.apply(String,e);for(var n="",r=0;t>r;)n+=String.fromCharCode.apply(String,e.slice(r,r+=Q));return n}function E(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;n>i;i++)r+=String.fromCharCode(127&e[i]);return r}function O(e,t,n){var r="";n=Math.min(e.length,n);for(var i=t;n>i;i++)r+=String.fromCharCode(e[i]);return r}function I(e,t,n){var r=e.length;(!t||0>t)&&(t=0),(!n||0>n||n>r)&&(n=r);for(var i="",o=t;n>o;o++)i+=U(e[o]);return i}function P(e,t,n){for(var r=e.slice(t,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function R(e,t,n){if(e%1!==0||0>e)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function D(e,t,n,r,i,o){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||o>t)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function H(e,t,n,r){0>t&&(t=65535+t+1);for(var i=0,o=Math.min(e.length-n,2);o>i;i++)e[n+i]=(t&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function W(e,t,n,r){0>t&&(t=4294967295+t+1);for(var i=0,o=Math.min(e.length-n,4);o>i;i++)e[n+i]=t>>>8*(r?i:3-i)&255}function B(e,t,n,r,i,o){if(n+r>e.length)throw new RangeError("Index out of range");if(0>n)throw new RangeError("Index out of range")}function _(e,t,n,r,i){return i||B(e,t,n,4,3.4028234663852886e38,-3.4028234663852886e38),Z.write(e,t,n,r,23,4),n+4}function F(e,t,n,r,i){return i||B(e,t,n,8,1.7976931348623157e308,-1.7976931348623157e308),Z.write(e,t,n,r,52,8),n+8}function z(e){if(e=j(e).replace(ee,""),e.length<2)return"";for(;e.length%4!==0;)e+="=";return e}function j(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function U(e){return 16>e?"0"+e.toString(16):e.toString(16)}function q(e,t){t=t||1/0;for(var n,r=e.length,i=null,o=[],a=0;r>a;a++){if(n=e.charCodeAt(a),n>55295&&57344>n){if(!i){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===r){(t-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(56320>n){(t-=3)>-1&&o.push(239,191,189),i=n;continue}n=(i-55296<<10|n-56320)+65536}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,128>n){if((t-=1)<0)break;o.push(n)}else if(2048>n){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(65536>n){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(1114112>n))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function G(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}function Y(e,t){for(var n,r,i,o=[],a=0;a<e.length&&!((t-=2)<0);a++)n=e.charCodeAt(a),r=n>>8,i=n%256,o.push(i),o.push(r);return o}function $(e){return X.toByteArray(z(e))}function V(e,t,n,r){for(var i=0;r>i&&!(i+n>=t.length||i>=e.length);i++)t[i+n]=e[i];return i}function K(e){return e!==e}var X=e("base64-js"),Z=e("ieee754"),J=e("isarray");n.Buffer=a,n.SlowBuffer=g,n.INSPECT_MAX_BYTES=50,a.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:r(),n.kMaxLength=i(),a.poolSize=8192,a._augment=function(e){return e.__proto__=a.prototype,e},a.from=function(e,t,n){return l(null,e,t,n)},a.TYPED_ARRAY_SUPPORT&&(a.prototype.__proto__=Uint8Array.prototype,a.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&a[Symbol.species]===a&&Object.defineProperty(a,Symbol.species,{value:null,configurable:!0})),a.alloc=function(e,t,n){return c(null,e,t,n)},a.allocUnsafe=function(e){return u(null,e)},a.allocUnsafeSlow=function(e){return u(null,e)},a.isBuffer=function(e){return!(null==e||!e._isBuffer)},a.compare=function(e,t){if(!a.isBuffer(e)||!a.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);o>i;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return r>n?-1:n>r?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!J(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return a.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;n++)t+=e[n].length;var r=a.allocUnsafe(t),i=0;for(n=0;n<e.length;n++){var o=e[n];if(!a.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,i),i+=o.length}return r},a.byteLength=v,a.prototype._isBuffer=!0,a.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;e>t;t+=2)x(this,t,t+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;e>t;t+=4)x(this,t,t+3),x(this,t+1,t+2);return this},a.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?N(this,0,e):y.apply(this,arguments)},a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:0===a.compare(this,e)},a.prototype.inspect=function(){var e="",t=n.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,t).match(/.{2}/g).join(" "),this.length>t&&(e+=" ... ")),"<Buffer "+e+">"},a.prototype.compare=function(e,t,n,r,i){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),0>t||n>e.length||0>r||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,i>>>=0,this===e)return 0;for(var o=i-r,l=n-t,s=Math.min(o,l),c=this.slice(r,i),u=e.slice(t,n),f=0;s>f;++f)if(c[f]!==u[f]){o=c[f],l=u[f];break}return l>o?-1:o>l?1:0},a.prototype.indexOf=function(e,t,n){if("string"==typeof t?(n=t,t=0):t>2147483647?t=2147483647:-2147483648>t&&(t=-2147483648),t>>=0,0===this.length)return-1;if(t>=this.length)return-1;if(0>t&&(t=Math.max(this.length+t,0)),"string"==typeof e&&(e=a.from(e,n)),a.isBuffer(e))return 0===e.length?-1:b(this,e,t,n);if("number"==typeof e)return a.TYPED_ARRAY_SUPPORT&&"function"===Uint8Array.prototype.indexOf?Uint8Array.prototype.indexOf.call(this,e,t):b(this,[e],t,n);throw new TypeError("val must be string, number or Buffer")},a.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},a.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t=0|t,isFinite(n)?(n=0|n,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(0>n||0>t)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return w(this,e,t,n);case"utf8":case"utf-8":return k(this,e,t,n);case"ascii":return S(this,e,t,n);case"binary":return C(this,e,t,n);case"base64":return L(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Q=4096;a.prototype.slice=function(e,t){var n=this.length;e=~~e,t=void 0===t?n:~~t,0>e?(e+=n,0>e&&(e=0)):e>n&&(e=n),0>t?(t+=n,0>t&&(t=0)):t>n&&(t=n),e>t&&(t=e);var r;if(a.TYPED_ARRAY_SUPPORT)r=this.subarray(e,t),r.__proto__=a.prototype;else{var i=t-e;r=new a(i,void 0);for(var o=0;i>o;o++)r[o]=this[o+e]}return r},a.prototype.readUIntLE=function(e,t,n){e=0|e,t=0|t,n||R(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return r},a.prototype.readUIntBE=function(e,t,n){e=0|e,t=0|t,n||R(e,t,this.length);for(var r=this[e+--t],i=1;t>0&&(i*=256);)r+=this[e+--t]*i;return r},a.prototype.readUInt8=function(e,t){return t||R(e,1,this.length),this[e]},a.prototype.readUInt16LE=function(e,t){return t||R(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUInt16BE=function(e,t){return t||R(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUInt32LE=function(e,t){return t||R(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},a.prototype.readUInt32BE=function(e,t){return t||R(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,n){e=0|e,t=0|t,n||R(e,t,this.length);for(var r=this[e],i=1,o=0;++o<t&&(i*=256);)r+=this[e+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},a.prototype.readIntBE=function(e,t,n){e=0|e,t=0|t,n||R(e,t,this.length);for(var r=t,i=1,o=this[e+--r];r>0&&(i*=256);)o+=this[e+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},a.prototype.readInt8=function(e,t){return t||R(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},a.prototype.readInt16LE=function(e,t){t||R(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},a.prototype.readInt16BE=function(e,t){t||R(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},a.prototype.readInt32LE=function(e,t){return t||R(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return t||R(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return t||R(e,4,this.length),Z.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return t||R(e,4,this.length),Z.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return t||R(e,8,this.length),Z.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return t||R(e,8,this.length),Z.read(this,e,!1,52,8)},a.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t=0|t,n=0|n,!r){var i=Math.pow(2,8*n)-1;D(this,e,t,n,i,0)}var o=1,a=0;for(this[t]=255&e;++a<n&&(o*=256);)this[t+a]=e/o&255;return t+n},a.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t=0|t,n=0|n,!r){var i=Math.pow(2,8*n)-1;D(this,e,t,n,i,0)}var o=n-1,a=1;for(this[t+o]=255&e;--o>=0&&(a*=256);)this[t+o]=e/a&255;return t+n},a.prototype.writeUInt8=function(e,t,n){return e=+e,t=0|t,n||D(this,e,t,1,255,0),a.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},a.prototype.writeUInt16LE=function(e,t,n){return e=+e,t=0|t,n||D(this,e,t,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):H(this,e,t,!0),t+2},a.prototype.writeUInt16BE=function(e,t,n){return e=+e,t=0|t,n||D(this,e,t,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):H(this,e,t,!1),t+2},a.prototype.writeUInt32LE=function(e,t,n){return e=+e,t=0|t,n||D(this,e,t,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):W(this,e,t,!0),t+4},a.prototype.writeUInt32BE=function(e,t,n){return e=+e,t=0|t,n||D(this,e,t,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):W(this,e,t,!1),t+4},a.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t=0|t,!r){var i=Math.pow(2,8*n-1);D(this,e,t,n,i-1,-i)}var o=0,a=1,l=0;for(this[t]=255&e;++o<n&&(a*=256);)0>e&&0===l&&0!==this[t+o-1]&&(l=1),this[t+o]=(e/a>>0)-l&255;return t+n},a.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t=0|t,!r){var i=Math.pow(2,8*n-1);D(this,e,t,n,i-1,-i)}var o=n-1,a=1,l=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)0>e&&0===l&&0!==this[t+o+1]&&(l=1),this[t+o]=(e/a>>0)-l&255;return t+n},a.prototype.writeInt8=function(e,t,n){return e=+e,t=0|t,n||D(this,e,t,1,127,-128),a.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),0>e&&(e=255+e+1),this[t]=255&e,t+1},a.prototype.writeInt16LE=function(e,t,n){return e=+e,t=0|t,n||D(this,e,t,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):H(this,e,t,!0),t+2},a.prototype.writeInt16BE=function(e,t,n){return e=+e,t=0|t,n||D(this,e,t,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):H(this,e,t,!1),t+2},a.prototype.writeInt32LE=function(e,t,n){return e=+e,t=0|t,n||D(this,e,t,4,2147483647,-2147483648),a.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):W(this,e,t,!0),t+4},a.prototype.writeInt32BE=function(e,t,n){return e=+e,t=0|t,n||D(this,e,t,4,2147483647,-2147483648),0>e&&(e=4294967295+e+1),a.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):W(this,e,t,!1),t+4},a.prototype.writeFloatLE=function(e,t,n){return _(this,e,t,!0,n)},a.prototype.writeFloatBE=function(e,t,n){return _(this,e,t,!1,n)},a.prototype.writeDoubleLE=function(e,t,n){return F(this,e,t,!0,n)},a.prototype.writeDoubleBE=function(e,t,n){return F(this,e,t,!1,n)},a.prototype.copy=function(e,t,n,r){if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&n>r&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(0>t)throw new RangeError("targetStart out of bounds");if(0>n||n>=this.length)throw new RangeError("sourceStart out of bounds");if(0>r)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var i,o=r-n;if(this===e&&t>n&&r>t)for(i=o-1;i>=0;i--)e[i+t]=this[i+n];else if(1e3>o||!a.TYPED_ARRAY_SUPPORT)for(i=0;o>i;i++)e[i+t]=this[i+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+o),t);return o},a.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===e.length){var i=e.charCodeAt(0);256>i&&(e=i)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!a.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof e&&(e=255&e);if(0>t||this.length<t||this.length<n)throw new RangeError("Out of range index");if(t>=n)return this;t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0);var o;if("number"==typeof e)for(o=t;n>o;o++)this[o]=e;else{var l=a.isBuffer(e)?e:q(new a(e,r).toString()),s=l.length;for(o=0;n-t>o;o++)this[o+t]=l[o%s]}return this};var ee=/[^+\/0-9A-Za-z-_]/g}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"base64-js":1,ieee754:15,isarray:16}],4:[function(e,t,n){"use strict";function r(e){return e=e||{},"function"!=typeof e.codeMirrorInstance||"function"!=typeof e.codeMirrorInstance.defineMode?void console.log("CodeMirror Spell Checker: You must provide an instance of CodeMirror via the option `codeMirrorInstance`"):(String.prototype.includes||(String.prototype.includes=function(){return-1!==String.prototype.indexOf.apply(this,arguments)}),void e.codeMirrorInstance.defineMode("spell-checker",function(t){if(!r.aff_loading){r.aff_loading=!0;var n=new XMLHttpRequest;n.open("GET","https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff",!0),n.onload=function(){4===n.readyState&&200===n.status&&(r.aff_data=n.responseText,r.num_loaded++,2==r.num_loaded&&(r.typo=new i("en_US",r.aff_data,r.dic_data,{platform:"any"})))},n.send(null)}if(!r.dic_loading){r.dic_loading=!0;var o=new XMLHttpRequest;o.open("GET","https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic",!0),o.onload=function(){4===o.readyState&&200===o.status&&(r.dic_data=o.responseText,r.num_loaded++,2==r.num_loaded&&(r.typo=new i("en_US",r.aff_data,r.dic_data,{platform:"any"})))},o.send(null)}var a='!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ',l={token:function(e){var t=e.peek(),n="";if(a.includes(t))return e.next(),null;for(;null!=(t=e.peek())&&!a.includes(t);)n+=t,e.next();return r.typo&&!r.typo.check(n)?"spell-error":null}},s=e.codeMirrorInstance.getMode(t,t.backdrop||"text/plain");return e.codeMirrorInstance.overlayMode(s,l,!0)}))}var i=e("typo-js");r.num_loaded=0,r.aff_loading=!1,r.dic_loading=!1,r.aff_data="",r.dic_data="",r.typo,t.exports=r},{"typo-js":18}],5:[function(t,n,r){!function(i){"object"==typeof r&&"object"==typeof n?i(t("../../lib/codemirror")):"function"==typeof e&&e.amd?e(["../../lib/codemirror"],i):i(CodeMirror)}(function(e){"use strict";function t(e){var t=e.getWrapperElement();e.state.fullScreenRestore={scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,width:t.style.width,height:t.style.height},t.style.width="",t.style.height="auto",t.className+=" CodeMirror-fullscreen",document.documentElement.style.overflow="hidden",e.refresh()}function n(e){var t=e.getWrapperElement();t.className=t.className.replace(/\s*CodeMirror-fullscreen\b/,""),document.documentElement.style.overflow="";var n=e.state.fullScreenRestore;t.style.width=n.width,t.style.height=n.height,window.scrollTo(n.scrollLeft,n.scrollTop),e.refresh()}e.defineOption("fullScreen",!1,function(r,i,o){o==e.Init&&(o=!1),!o!=!i&&(i?t(r):n(r))})})},{"../../lib/codemirror":10}],6:[function(t,n,r){!function(i){"object"==typeof r&&"object"==typeof n?i(t("../../lib/codemirror")):"function"==typeof e&&e.amd?e(["../../lib/codemirror"],i):i(CodeMirror)}(function(e){function t(e){e.state.placeholder&&(e.state.placeholder.parentNode.removeChild(e.state.placeholder),e.state.placeholder=null)}function n(e){t(e);var n=e.state.placeholder=document.createElement("pre");n.style.cssText="height: 0; overflow: visible",n.className="CodeMirror-placeholder";var r=e.getOption("placeholder");"string"==typeof r&&(r=document.createTextNode(r)),n.appendChild(r),e.display.lineSpace.insertBefore(n,e.display.lineSpace.firstChild)}function r(e){o(e)&&n(e)}function i(e){var r=e.getWrapperElement(),i=o(e);r.className=r.className.replace(" CodeMirror-empty","")+(i?" CodeMirror-empty":""),i?n(e):t(e)}function o(e){return 1===e.lineCount()&&""===e.getLine(0)}e.defineOption("placeholder","",function(n,o,a){var l=a&&a!=e.Init;if(o&&!l)n.on("blur",r),n.on("change",i),n.on("swapDoc",i),i(n);else if(!o&&l){n.off("blur",r),n.off("change",i),n.off("swapDoc",i),t(n);var s=n.getWrapperElement();s.className=s.className.replace(" CodeMirror-empty","")}o&&!n.hasFocus()&&r(n)})})},{"../../lib/codemirror":10}],7:[function(t,n,r){!function(i){"object"==typeof r&&"object"==typeof n?i(t("../../lib/codemirror")):"function"==typeof e&&e.amd?e(["../../lib/codemirror"],i):i(CodeMirror)}(function(e){"use strict";var t=/^(\s*)(>[> ]*|[*+-]\s|(\d+)([.)]))(\s*)/,n=/^(\s*)(>[> ]*|[*+-]|(\d+)[.)])(\s*)$/,r=/[*+-]\s/;e.commands.newlineAndIndentContinueMarkdownList=function(i){if(i.getOption("disableInput"))return e.Pass;for(var o=i.listSelections(),a=[],l=0;l<o.length;l++){var s=o[l].head,c=i.getStateAfter(s.line),u=c.list!==!1,f=0!==c.quote,h=i.getLine(s.line),d=t.exec(h);if(!o[l].empty()||!u&&!f||!d)return void i.execCommand("newlineAndIndent");if(n.test(h))i.replaceRange("",{line:s.line,ch:0},{line:s.line,ch:s.ch+1}),a[l]="\n";else{var p=d[1],m=d[5],g=r.test(d[2])||d[2].indexOf(">")>=0?d[2]:parseInt(d[3],10)+1+d[4];a[l]="\n"+p+g+m}}i.replaceSelections(a)}})},{"../../lib/codemirror":10}],8:[function(t,n,r){!function(i){"object"==typeof r&&"object"==typeof n?i(t("../../lib/codemirror")):"function"==typeof e&&e.amd?e(["../../lib/codemirror"],i):i(CodeMirror)}(function(e){"use strict";e.overlayMode=function(t,n,r){return{startState:function(){return{base:e.startState(t),overlay:e.startState(n),basePos:0,baseCur:null,overlayPos:0,overlayCur:null,streamSeen:null}},copyState:function(r){return{base:e.copyState(t,r.base),overlay:e.copyState(n,r.overlay),basePos:r.basePos,baseCur:null,overlayPos:r.overlayPos,overlayCur:null}},token:function(e,i){return(e!=i.streamSeen||Math.min(i.basePos,i.overlayPos)<e.start)&&(i.streamSeen=e,i.basePos=i.overlayPos=e.start),e.start==i.basePos&&(i.baseCur=t.token(e,i.base),i.basePos=e.pos),e.start==i.overlayPos&&(e.pos=e.start,i.overlayCur=n.token(e,i.overlay),i.overlayPos=e.pos),e.pos=Math.min(i.basePos,i.overlayPos),null==i.overlayCur?i.baseCur:null!=i.baseCur&&i.overlay.combineTokens||r&&null==i.overlay.combineTokens?i.baseCur+" "+i.overlayCur:i.overlayCur},indent:t.indent&&function(e,n){return t.indent(e.base,n)},electricChars:t.electricChars,innerMode:function(e){return{state:e.base,mode:t}},blankLine:function(e){t.blankLine&&t.blankLine(e.base),n.blankLine&&n.blankLine(e.overlay)}}}})},{"../../lib/codemirror":10}],9:[function(t,n,r){!function(i){"object"==typeof r&&"object"==typeof n?i(t("../../lib/codemirror")):"function"==typeof e&&e.amd?e(["../../lib/codemirror"],i):i(CodeMirror)}(function(e){"use strict";function t(e){e.operation(function(){a(e)})}function n(e){e.state.markedSelection.length&&e.operation(function(){i(e)})}function r(e,t,n,r){if(0!=c(t,n))for(var i=e.state.markedSelection,o=e.state.markedSelectionStyle,a=t.line;;){var u=a==t.line?t:s(a,0),f=a+l,h=f>=n.line,d=h?n:s(f,0),p=e.markText(u,d,{className:o});if(null==r?i.push(p):i.splice(r++,0,p),h)break;a=f}}function i(e){for(var t=e.state.markedSelection,n=0;n<t.length;++n)t[n].clear();t.length=0}function o(e){i(e);for(var t=e.listSelections(),n=0;n<t.length;n++)r(e,t[n].from(),t[n].to())}function a(e){if(!e.somethingSelected())return i(e);if(e.listSelections().length>1)return o(e);var t=e.getCursor("start"),n=e.getCursor("end"),a=e.state.markedSelection;if(!a.length)return r(e,t,n);var s=a[0].find(),u=a[a.length-1].find();if(!s||!u||n.line-t.line<l||c(t,u.to)>=0||c(n,s.from)<=0)return o(e);for(;c(t,s.from)>0;)a.shift().clear(),s=a[0].find();for(c(t,s.from)<0&&(s.to.line-t.line<l?(a.shift().clear(),r(e,t,s.to,0)):r(e,t,s.from,0));c(n,u.to)<0;)a.pop().clear(),u=a[a.length-1].find();c(n,u.to)>0&&(n.line-u.from.line<l?(a.pop().clear(),r(e,u.from,n)):r(e,u.to,n))}e.defineOption("styleSelectedText",!1,function(r,a,l){var s=l&&l!=e.Init;a&&!s?(r.state.markedSelection=[],r.state.markedSelectionStyle="string"==typeof a?a:"CodeMirror-selectedtext",o(r),r.on("cursorActivity",t),r.on("change",n)):!a&&s&&(r.off("cursorActivity",t),r.off("change",n),i(r),r.state.markedSelection=r.state.markedSelectionStyle=null)});var l=8,s=e.Pos,c=e.cmpPos})},{"../../lib/codemirror":10}],10:[function(t,n,r){!function(t){if("object"==typeof r&&"object"==typeof n)n.exports=t();else{if("function"==typeof e&&e.amd)return e([],t);(this||window).CodeMirror=t()}}(function(){"use strict";function e(n,r){if(!(this instanceof e))return new e(n,r);this.options=r=r?Wi(r):{},Wi(ea,r,!1),d(r);var i=r.value;"string"==typeof i&&(i=new Ca(i,r.mode,null,r.lineSeparator)),this.doc=i;var o=new e.inputStyles[r.inputStyle](this),a=this.display=new t(n,i,o);a.wrapper.CodeMirror=this,c(this),l(this),r.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),r.autofocus&&!Ao&&a.input.focus(),v(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,selectingText:!1,draggingText:!1,highlight:new Ei,keySeq:null,specialChars:null};var s=this;xo&&11>bo&&setTimeout(function(){s.display.input.reset(!0)},20),jt(this),Ki(),bt(this),this.curOp.forceUpdate=!0,Xr(this,i),r.autofocus&&!Ao||s.hasFocus()?setTimeout(Bi(vn,this),20):yn(this);for(var u in ta)ta.hasOwnProperty(u)&&ta[u](this,r[u],na);k(this),r.finishInit&&r.finishInit(this);for(var f=0;f<aa.length;++f)aa[f](this);kt(this),wo&&r.lineWrapping&&"optimizelegibility"==getComputedStyle(a.lineDiv).textRendering&&(a.lineDiv.style.textRendering="auto")}function t(e,t,n){var r=this;this.input=n,r.scrollbarFiller=ji("div",null,"CodeMirror-scrollbar-filler"),r.scrollbarFiller.setAttribute("cm-not-content","true"),r.gutterFiller=ji("div",null,"CodeMirror-gutter-filler"),r.gutterFiller.setAttribute("cm-not-content","true"),r.lineDiv=ji("div",null,"CodeMirror-code"),r.selectionDiv=ji("div",null,null,"position: relative; z-index: 1"),r.cursorDiv=ji("div",null,"CodeMirror-cursors"),r.measure=ji("div",null,"CodeMirror-measure"),r.lineMeasure=ji("div",null,"CodeMirror-measure"),r.lineSpace=ji("div",[r.measure,r.lineMeasure,r.selectionDiv,r.cursorDiv,r.lineDiv],null,"position: relative; outline: none"),r.mover=ji("div",[ji("div",[r.lineSpace],"CodeMirror-lines")],null,"position: relative"),r.sizer=ji("div",[r.mover],"CodeMirror-sizer"),r.sizerWidth=null,r.heightForcer=ji("div",null,null,"position: absolute; height: "+Da+"px; width: 1px;"),r.gutters=ji("div",null,"CodeMirror-gutters"),r.lineGutter=null,r.scroller=ji("div",[r.sizer,r.heightForcer,r.gutters],"CodeMirror-scroll"),r.scroller.setAttribute("tabIndex","-1"),r.wrapper=ji("div",[r.scrollbarFiller,r.gutterFiller,r.scroller],"CodeMirror"),xo&&8>bo&&(r.gutters.style.zIndex=-1,r.scroller.style.paddingRight=0),wo||go&&Ao||(r.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(r.wrapper):e(r.wrapper)),r.viewFrom=r.viewTo=t.first,r.reportedViewFrom=r.reportedViewTo=t.first,r.view=[],r.renderedView=null,r.externalMeasured=null,r.viewOffset=0,r.lastWrapHeight=r.lastWrapWidth=0,r.updateLineNumbers=null,r.nativeBarWidth=r.barHeight=r.barWidth=0,r.scrollbarsClipped=!1,r.lineNumWidth=r.lineNumInnerWidth=r.lineNumChars=null,r.alignWidgets=!1,r.cachedCharWidth=r.cachedTextHeight=r.cachedPaddingH=null,
r.maxLine=null,r.maxLineLength=0,r.maxLineChanged=!1,r.wheelDX=r.wheelDY=r.wheelStartX=r.wheelStartY=null,r.shift=!1,r.selForContextMenu=null,r.activeTouch=null,n.init(r)}function n(t){t.doc.mode=e.getMode(t.options,t.doc.modeOption),r(t)}function r(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)}),e.doc.frontier=e.doc.first,_e(e,100),e.state.modeGen++,e.curOp&&Dt(e)}function i(e){e.options.lineWrapping?(Ja(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(Za(e.display.wrapper,"CodeMirror-wrap"),h(e)),a(e),Dt(e),lt(e),setTimeout(function(){y(e)},100)}function o(e){var t=yt(e.display),n=e.options.lineWrapping,r=n&&Math.max(5,e.display.scroller.clientWidth/xt(e.display)-3);return function(i){if(kr(e.doc,i))return 0;var o=0;if(i.widgets)for(var a=0;a<i.widgets.length;a++)i.widgets[a].height&&(o+=i.widgets[a].height);return n?o+(Math.ceil(i.text.length/r)||1)*t:o+t}}function a(e){var t=e.doc,n=o(e);t.iter(function(e){var t=n(e);t!=e.height&&ei(e,t)})}function l(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),lt(e)}function s(e){c(e),Dt(e),setTimeout(function(){w(e)},20)}function c(e){var t=e.display.gutters,n=e.options.gutters;Ui(t);for(var r=0;r<n.length;++r){var i=n[r],o=t.appendChild(ji("div",null,"CodeMirror-gutter "+i));"CodeMirror-linenumbers"==i&&(e.display.lineGutter=o,o.style.width=(e.display.lineNumWidth||1)+"px")}t.style.display=r?"":"none",u(e)}function u(e){var t=e.display.gutters.offsetWidth;e.display.sizer.style.marginLeft=t+"px"}function f(e){if(0==e.height)return 0;for(var t,n=e.text.length,r=e;t=mr(r);){var i=t.find(0,!0);r=i.from.line,n+=i.from.ch-i.to.ch}for(r=e;t=gr(r);){var i=t.find(0,!0);n-=r.text.length-i.from.ch,r=i.to.line,n+=r.text.length-i.to.ch}return n}function h(e){var t=e.display,n=e.doc;t.maxLine=Zr(n,n.first),t.maxLineLength=f(t.maxLine),t.maxLineChanged=!0,n.iter(function(e){var n=f(e);n>t.maxLineLength&&(t.maxLineLength=n,t.maxLine=e)})}function d(e){var t=Pi(e.gutters,"CodeMirror-linenumbers");-1==t&&e.lineNumbers?e.gutters=e.gutters.concat(["CodeMirror-linenumbers"]):t>-1&&!e.lineNumbers&&(e.gutters=e.gutters.slice(0),e.gutters.splice(t,1))}function p(e){var t=e.display,n=t.gutters.offsetWidth,r=Math.round(e.doc.height+qe(e.display));return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?n:0,docHeight:r,scrollHeight:r+Ye(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:n}}function m(e,t,n){this.cm=n;var r=this.vert=ji("div",[ji("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),i=this.horiz=ji("div",[ji("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");e(r),e(i),Ea(r,"scroll",function(){r.clientHeight&&t(r.scrollTop,"vertical")}),Ea(i,"scroll",function(){i.clientWidth&&t(i.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,xo&&8>bo&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}function g(){}function v(t){t.display.scrollbars&&(t.display.scrollbars.clear(),t.display.scrollbars.addClass&&Za(t.display.wrapper,t.display.scrollbars.addClass)),t.display.scrollbars=new e.scrollbarModel[t.options.scrollbarStyle](function(e){t.display.wrapper.insertBefore(e,t.display.scrollbarFiller),Ea(e,"mousedown",function(){t.state.focused&&setTimeout(function(){t.display.input.focus()},0)}),e.setAttribute("cm-not-content","true")},function(e,n){"horizontal"==n?on(t,e):rn(t,e)},t),t.display.scrollbars.addClass&&Ja(t.display.wrapper,t.display.scrollbars.addClass)}function y(e,t){t||(t=p(e));var n=e.display.barWidth,r=e.display.barHeight;x(e,t);for(var i=0;4>i&&n!=e.display.barWidth||r!=e.display.barHeight;i++)n!=e.display.barWidth&&e.options.lineWrapping&&O(e),x(e,p(e)),n=e.display.barWidth,r=e.display.barHeight}function x(e,t){var n=e.display,r=n.scrollbars.update(t);n.sizer.style.paddingRight=(n.barWidth=r.right)+"px",n.sizer.style.paddingBottom=(n.barHeight=r.bottom)+"px",n.heightForcer.style.borderBottom=r.bottom+"px solid transparent",r.right&&r.bottom?(n.scrollbarFiller.style.display="block",n.scrollbarFiller.style.height=r.bottom+"px",n.scrollbarFiller.style.width=r.right+"px"):n.scrollbarFiller.style.display="",r.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(n.gutterFiller.style.display="block",n.gutterFiller.style.height=r.bottom+"px",n.gutterFiller.style.width=t.gutterWidth+"px"):n.gutterFiller.style.display=""}function b(e,t,n){var r=n&&null!=n.top?Math.max(0,n.top):e.scroller.scrollTop;r=Math.floor(r-Ue(e));var i=n&&null!=n.bottom?n.bottom:r+e.wrapper.clientHeight,o=ni(t,r),a=ni(t,i);if(n&&n.ensure){var l=n.ensure.from.line,s=n.ensure.to.line;o>l?(o=l,a=ni(t,ri(Zr(t,l))+e.wrapper.clientHeight)):Math.min(s,t.lastLine())>=a&&(o=ni(t,ri(Zr(t,s))-e.wrapper.clientHeight),a=s)}return{from:o,to:Math.max(a,o+1)}}function w(e){var t=e.display,n=t.view;if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var r=C(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=r+"px",a=0;a<n.length;a++)if(!n[a].hidden){e.options.fixedGutter&&n[a].gutter&&(n[a].gutter.style.left=o);var l=n[a].alignable;if(l)for(var s=0;s<l.length;s++)l[s].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=r+i+"px")}}function k(e){if(!e.options.lineNumbers)return!1;var t=e.doc,n=S(e.options,t.first+t.size-1),r=e.display;if(n.length!=r.lineNumChars){var i=r.measure.appendChild(ji("div",[ji("div",n)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=i.firstChild.offsetWidth,a=i.offsetWidth-o;return r.lineGutter.style.width="",r.lineNumInnerWidth=Math.max(o,r.lineGutter.offsetWidth-a)+1,r.lineNumWidth=r.lineNumInnerWidth+a,r.lineNumChars=r.lineNumInnerWidth?n.length:-1,r.lineGutter.style.width=r.lineNumWidth+"px",u(e),!0}return!1}function S(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function C(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function L(e,t,n){var r=e.display;this.viewport=t,this.visible=b(r,e.doc,t),this.editorIsHidden=!r.wrapper.offsetWidth,this.wrapperHeight=r.wrapper.clientHeight,this.wrapperWidth=r.wrapper.clientWidth,this.oldDisplayWidth=$e(e),this.force=n,this.dims=P(e),this.events=[]}function T(e){var t=e.display;!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=Ye(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=Ye(e)+"px",t.scrollbarsClipped=!0)}function M(e,t){var n=e.display,r=e.doc;if(t.editorIsHidden)return Wt(e),!1;if(!t.force&&t.visible.from>=n.viewFrom&&t.visible.to<=n.viewTo&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo)&&n.renderedView==n.view&&0==zt(e))return!1;k(e)&&(Wt(e),t.dims=P(e));var i=r.first+r.size,o=Math.max(t.visible.from-e.options.viewportMargin,r.first),a=Math.min(i,t.visible.to+e.options.viewportMargin);n.viewFrom<o&&o-n.viewFrom<20&&(o=Math.max(r.first,n.viewFrom)),n.viewTo>a&&n.viewTo-a<20&&(a=Math.min(i,n.viewTo)),Wo&&(o=br(e.doc,o),a=wr(e.doc,a));var l=o!=n.viewFrom||a!=n.viewTo||n.lastWrapHeight!=t.wrapperHeight||n.lastWrapWidth!=t.wrapperWidth;Ft(e,o,a),n.viewOffset=ri(Zr(e.doc,n.viewFrom)),e.display.mover.style.top=n.viewOffset+"px";var s=zt(e);if(!l&&0==s&&!t.force&&n.renderedView==n.view&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo))return!1;var c=Gi();return s>4&&(n.lineDiv.style.display="none"),R(e,n.updateLineNumbers,t.dims),s>4&&(n.lineDiv.style.display=""),n.renderedView=n.view,c&&Gi()!=c&&c.offsetHeight&&c.focus(),Ui(n.cursorDiv),Ui(n.selectionDiv),n.gutters.style.height=n.sizer.style.minHeight=0,l&&(n.lastWrapHeight=t.wrapperHeight,n.lastWrapWidth=t.wrapperWidth,_e(e,400)),n.updateLineNumbers=null,!0}function N(e,t){for(var n=t.viewport,r=!0;(r&&e.options.lineWrapping&&t.oldDisplayWidth!=$e(e)||(n&&null!=n.top&&(n={top:Math.min(e.doc.height+qe(e.display)-Ve(e),n.top)}),t.visible=b(e.display,e.doc,n),!(t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)))&&M(e,t);r=!1){O(e);var i=p(e);Re(e),y(e,i),E(e,i)}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function A(e,t){var n=new L(e,t);if(M(e,n)){O(e),N(e,n);var r=p(e);Re(e),y(e,r),E(e,r),n.finish()}}function E(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Ye(e)+"px"}function O(e){for(var t=e.display,n=t.lineDiv.offsetTop,r=0;r<t.view.length;r++){var i,o=t.view[r];if(!o.hidden){if(xo&&8>bo){var a=o.node.offsetTop+o.node.offsetHeight;i=a-n,n=a}else{var l=o.node.getBoundingClientRect();i=l.bottom-l.top}var s=o.line.height-i;if(2>i&&(i=yt(t)),(s>.001||-.001>s)&&(ei(o.line,i),I(o.line),o.rest))for(var c=0;c<o.rest.length;c++)I(o.rest[c])}}}function I(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t)e.widgets[t].height=e.widgets[t].node.parentNode.offsetHeight}function P(e){for(var t=e.display,n={},r={},i=t.gutters.clientLeft,o=t.gutters.firstChild,a=0;o;o=o.nextSibling,++a)n[e.options.gutters[a]]=o.offsetLeft+o.clientLeft+i,r[e.options.gutters[a]]=o.clientWidth;return{fixedPos:C(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:n,gutterWidth:r,wrapperWidth:t.wrapper.clientWidth}}function R(e,t,n){function r(t){var n=t.nextSibling;return wo&&Eo&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),n}for(var i=e.display,o=e.options.lineNumbers,a=i.lineDiv,l=a.firstChild,s=i.view,c=i.viewFrom,u=0;u<s.length;u++){var f=s[u];if(f.hidden);else if(f.node&&f.node.parentNode==a){for(;l!=f.node;)l=r(l);var h=o&&null!=t&&c>=t&&f.lineNumber;f.changes&&(Pi(f.changes,"gutter")>-1&&(h=!1),D(e,f,c,n)),h&&(Ui(f.lineNumber),f.lineNumber.appendChild(document.createTextNode(S(e.options,c)))),l=f.node.nextSibling}else{var d=U(e,f,c,n);a.insertBefore(d,l)}c+=f.size}for(;l;)l=r(l)}function D(e,t,n,r){for(var i=0;i<t.changes.length;i++){var o=t.changes[i];"text"==o?_(e,t):"gutter"==o?z(e,t,n,r):"class"==o?F(t):"widget"==o&&j(e,t,r)}t.changes=null}function H(e){return e.node==e.text&&(e.node=ji("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),xo&&8>bo&&(e.node.style.zIndex=2)),e.node}function W(e){var t=e.bgClass?e.bgClass+" "+(e.line.bgClass||""):e.line.bgClass;if(t&&(t+=" CodeMirror-linebackground"),e.background)t?e.background.className=t:(e.background.parentNode.removeChild(e.background),e.background=null);else if(t){var n=H(e);e.background=n.insertBefore(ji("div",null,t),n.firstChild)}}function B(e,t){var n=e.display.externalMeasured;return n&&n.line==t.line?(e.display.externalMeasured=null,t.measure=n.measure,n.built):Br(e,t)}function _(e,t){var n=t.text.className,r=B(e,t);t.text==t.node&&(t.node=r.pre),t.text.parentNode.replaceChild(r.pre,t.text),t.text=r.pre,r.bgClass!=t.bgClass||r.textClass!=t.textClass?(t.bgClass=r.bgClass,t.textClass=r.textClass,F(t)):n&&(t.text.className=n)}function F(e){W(e),e.line.wrapClass?H(e).className=e.line.wrapClass:e.node!=e.text&&(e.node.className="");var t=e.textClass?e.textClass+" "+(e.line.textClass||""):e.line.textClass;e.text.className=t||""}function z(e,t,n,r){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var i=H(t);t.gutterBackground=ji("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?r.fixedPos:-r.gutterTotalWidth)+"px; width: "+r.gutterTotalWidth+"px"),i.insertBefore(t.gutterBackground,t.text)}var o=t.line.gutterMarkers;if(e.options.lineNumbers||o){var i=H(t),a=t.gutter=ji("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?r.fixedPos:-r.gutterTotalWidth)+"px");if(e.display.input.setUneditable(a),i.insertBefore(a,t.text),t.line.gutterClass&&(a.className+=" "+t.line.gutterClass),!e.options.lineNumbers||o&&o["CodeMirror-linenumbers"]||(t.lineNumber=a.appendChild(ji("div",S(e.options,n),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+r.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),o)for(var l=0;l<e.options.gutters.length;++l){var s=e.options.gutters[l],c=o.hasOwnProperty(s)&&o[s];c&&a.appendChild(ji("div",[c],"CodeMirror-gutter-elt","left: "+r.gutterLeft[s]+"px; width: "+r.gutterWidth[s]+"px"))}}}function j(e,t,n){t.alignable&&(t.alignable=null);for(var r,i=t.node.firstChild;i;i=r){var r=i.nextSibling;"CodeMirror-linewidget"==i.className&&t.node.removeChild(i)}q(e,t,n)}function U(e,t,n,r){var i=B(e,t);return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),F(t),z(e,t,n,r),q(e,t,r),t.node}function q(e,t,n){if(G(e,t.line,t,n,!0),t.rest)for(var r=0;r<t.rest.length;r++)G(e,t.rest[r],t,n,!1)}function G(e,t,n,r,i){if(t.widgets)for(var o=H(n),a=0,l=t.widgets;a<l.length;++a){var s=l[a],c=ji("div",[s.node],"CodeMirror-linewidget");s.handleMouseEvents||c.setAttribute("cm-ignore-events","true"),Y(s,c,n,r),e.display.input.setUneditable(c),i&&s.above?o.insertBefore(c,n.gutter||n.text):o.appendChild(c),Ci(s,"redraw")}}function Y(e,t,n,r){if(e.noHScroll){(n.alignable||(n.alignable=[])).push(t);var i=r.wrapperWidth;t.style.left=r.fixedPos+"px",e.coverGutter||(i-=r.gutterTotalWidth,t.style.paddingLeft=r.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-r.gutterTotalWidth+"px"))}function $(e){return Bo(e.line,e.ch)}function V(e,t){return _o(e,t)<0?t:e}function K(e,t){return _o(e,t)<0?e:t}function X(e){e.state.focused||(e.display.input.focus(),vn(e))}function Z(e,t,n,r,i){var o=e.doc;e.display.shift=!1,r||(r=o.sel);var a=e.state.pasteIncoming||"paste"==i,l=o.splitLines(t),s=null;if(a&&r.ranges.length>1)if(Fo&&Fo.text.join("\n")==t){if(r.ranges.length%Fo.text.length==0){s=[];for(var c=0;c<Fo.text.length;c++)s.push(o.splitLines(Fo.text[c]))}}else l.length==r.ranges.length&&(s=Ri(l,function(e){return[e]}));for(var c=r.ranges.length-1;c>=0;c--){var u=r.ranges[c],f=u.from(),h=u.to();u.empty()&&(n&&n>0?f=Bo(f.line,f.ch-n):e.state.overwrite&&!a?h=Bo(h.line,Math.min(Zr(o,h.line).text.length,h.ch+Ii(l).length)):Fo&&Fo.lineWise&&Fo.text.join("\n")==t&&(f=h=Bo(f.line,0)));var d=e.curOp.updateInput,p={from:f,to:h,text:s?s[c%s.length]:l,origin:i||(a?"paste":e.state.cutIncoming?"cut":"+input")};Tn(e.doc,p),Ci(e,"inputRead",e,p)}t&&!a&&Q(e,t),Bn(e),e.curOp.updateInput=d,e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=!1}function J(e,t){var n=e.clipboardData&&e.clipboardData.getData("text/plain");return n?(e.preventDefault(),t.isReadOnly()||t.options.disableInput||At(t,function(){Z(t,n,0,null,"paste")}),!0):void 0}function Q(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var n=e.doc.sel,r=n.ranges.length-1;r>=0;r--){var i=n.ranges[r];if(!(i.head.ch>100||r&&n.ranges[r-1].head.line==i.head.line)){var o=e.getModeAt(i.head),a=!1;if(o.electricChars){for(var l=0;l<o.electricChars.length;l++)if(t.indexOf(o.electricChars.charAt(l))>-1){a=Fn(e,i.head.line,"smart");break}}else o.electricInput&&o.electricInput.test(Zr(e.doc,i.head.line).text.slice(0,i.head.ch))&&(a=Fn(e,i.head.line,"smart"));a&&Ci(e,"electricInput",e,i.head.line)}}}function ee(e){for(var t=[],n=[],r=0;r<e.doc.sel.ranges.length;r++){var i=e.doc.sel.ranges[r].head.line,o={anchor:Bo(i,0),head:Bo(i+1,0)};n.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:n}}function te(e){e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","off"),e.setAttribute("spellcheck","false")}function ne(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new Ei,this.inaccurateSelection=!1,this.hasSelection=!1,this.composing=null}function re(){var e=ji("textarea",null,null,"position: absolute; padding: 0; width: 1px; height: 1em; outline: none"),t=ji("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");return wo?e.style.width="1000px":e.setAttribute("wrap","off"),No&&(e.style.border="1px solid black"),te(e),t}function ie(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new Ei,this.gracePeriod=!1}function oe(e,t){var n=Qe(e,t.line);if(!n||n.hidden)return null;var r=Zr(e.doc,t.line),i=Xe(n,r,t.line),o=ii(r),a="left";if(o){var l=co(o,t.ch);a=l%2?"right":"left"}var s=nt(i.map,t.ch,a);return s.offset="right"==s.collapse?s.end:s.start,s}function ae(e,t){return t&&(e.bad=!0),e}function le(e,t,n){var r;if(t==e.display.lineDiv){if(r=e.display.lineDiv.childNodes[n],!r)return ae(e.clipPos(Bo(e.display.viewTo-1)),!0);t=null,n=0}else for(r=t;;r=r.parentNode){if(!r||r==e.display.lineDiv)return null;if(r.parentNode&&r.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i];if(o.node==r)return se(o,t,n)}}function se(e,t,n){function r(t,n,r){for(var i=-1;i<(u?u.length:0);i++)for(var o=0>i?c.map:u[i],a=0;a<o.length;a+=3){var l=o[a+2];if(l==t||l==n){var s=ti(0>i?e.line:e.rest[i]),f=o[a]+r;return(0>r||l!=t)&&(f=o[a+(r?1:0)]),Bo(s,f)}}}var i=e.text.firstChild,o=!1;if(!t||!Va(i,t))return ae(Bo(ti(e.line),0),!0);if(t==i&&(o=!0,t=i.childNodes[n],n=0,!t)){var a=e.rest?Ii(e.rest):e.line;return ae(Bo(ti(a),a.text.length),o)}var l=3==t.nodeType?t:null,s=t;for(l||1!=t.childNodes.length||3!=t.firstChild.nodeType||(l=t.firstChild,n&&(n=l.nodeValue.length));s.parentNode!=i;)s=s.parentNode;var c=e.measure,u=c.maps,f=r(l,s,n);if(f)return ae(f,o);for(var h=s.nextSibling,d=l?l.nodeValue.length-n:0;h;h=h.nextSibling){if(f=r(h,h.firstChild,0))return ae(Bo(f.line,f.ch-d),o);d+=h.textContent.length}for(var p=s.previousSibling,d=n;p;p=p.previousSibling){if(f=r(p,p.firstChild,-1))return ae(Bo(f.line,f.ch+d),o);d+=h.textContent.length}}function ce(e,t,n,r,i){function o(e){return function(t){return t.id==e}}function a(t){if(1==t.nodeType){var n=t.getAttribute("cm-text");if(null!=n)return""==n&&(n=t.textContent.replace(/\u200b/g,"")),void(l+=n);var u,f=t.getAttribute("cm-marker");if(f){var h=e.findMarks(Bo(r,0),Bo(i+1,0),o(+f));return void(h.length&&(u=h[0].find())&&(l+=Jr(e.doc,u.from,u.to).join(c)))}if("false"==t.getAttribute("contenteditable"))return;for(var d=0;d<t.childNodes.length;d++)a(t.childNodes[d]);/^(pre|div|p)$/i.test(t.nodeName)&&(s=!0)}else if(3==t.nodeType){var p=t.nodeValue;if(!p)return;s&&(l+=c,s=!1),l+=p}}for(var l="",s=!1,c=e.doc.lineSeparator();a(t),t!=n;)t=t.nextSibling;return l}function ue(e,t){this.ranges=e,this.primIndex=t}function fe(e,t){this.anchor=e,this.head=t}function he(e,t){var n=e[t];e.sort(function(e,t){return _o(e.from(),t.from())}),t=Pi(e,n);for(var r=1;r<e.length;r++){var i=e[r],o=e[r-1];if(_o(o.to(),i.from())>=0){var a=K(o.from(),i.from()),l=V(o.to(),i.to()),s=o.empty()?i.from()==i.head:o.from()==o.head;t>=r&&--t,e.splice(--r,2,new fe(s?l:a,s?a:l))}}return new ue(e,t)}function de(e,t){return new ue([new fe(e,t||e)],0)}function pe(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function me(e,t){if(t.line<e.first)return Bo(e.first,0);var n=e.first+e.size-1;return t.line>n?Bo(n,Zr(e,n).text.length):ge(t,Zr(e,t.line).text.length)}function ge(e,t){var n=e.ch;return null==n||n>t?Bo(e.line,t):0>n?Bo(e.line,0):e}function ve(e,t){return t>=e.first&&t<e.first+e.size}function ye(e,t){for(var n=[],r=0;r<t.length;r++)n[r]=me(e,t[r]);return n}function xe(e,t,n,r){if(e.cm&&e.cm.display.shift||e.extend){var i=t.anchor;if(r){var o=_o(n,i)<0;o!=_o(r,i)<0?(i=n,n=r):o!=_o(n,r)<0&&(n=r)}return new fe(i,n)}return new fe(r||n,n)}function be(e,t,n,r){Te(e,new ue([xe(e,e.sel.primary(),t,n)],0),r)}function we(e,t,n){for(var r=[],i=0;i<e.sel.ranges.length;i++)r[i]=xe(e,e.sel.ranges[i],t[i],null);var o=he(r,e.sel.primIndex);Te(e,o,n)}function ke(e,t,n,r){var i=e.sel.ranges.slice(0);i[t]=n,Te(e,he(i,e.sel.primIndex),r)}function Se(e,t,n,r){Te(e,de(t,n),r)}function Ce(e,t,n){var r={ranges:t.ranges,update:function(t){this.ranges=[];for(var n=0;n<t.length;n++)this.ranges[n]=new fe(me(e,t[n].anchor),me(e,t[n].head))},origin:n&&n.origin};return Pa(e,"beforeSelectionChange",e,r),e.cm&&Pa(e.cm,"beforeSelectionChange",e.cm,r),r.ranges!=t.ranges?he(r.ranges,r.ranges.length-1):t}function Le(e,t,n){var r=e.history.done,i=Ii(r);i&&i.ranges?(r[r.length-1]=t,Me(e,t,n)):Te(e,t,n)}function Te(e,t,n){Me(e,t,n),fi(e,e.sel,e.cm?e.cm.curOp.id:NaN,n)}function Me(e,t,n){(Ni(e,"beforeSelectionChange")||e.cm&&Ni(e.cm,"beforeSelectionChange"))&&(t=Ce(e,t,n));var r=n&&n.bias||(_o(t.primary().head,e.sel.primary().head)<0?-1:1);Ne(e,Ee(e,t,r,!0)),n&&n.scroll===!1||!e.cm||Bn(e.cm)}function Ne(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=e.cm.curOp.selectionChanged=!0,Mi(e.cm)),Ci(e,"cursorActivity",e))}function Ae(e){Ne(e,Ee(e,e.sel,null,!1),Wa)}function Ee(e,t,n,r){for(var i,o=0;o<t.ranges.length;o++){var a=t.ranges[o],l=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],s=Ie(e,a.anchor,l&&l.anchor,n,r),c=Ie(e,a.head,l&&l.head,n,r);(i||s!=a.anchor||c!=a.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new fe(s,c))}return i?he(i,t.primIndex):t}function Oe(e,t,n,r,i){var o=Zr(e,t.line);if(o.markedSpans)for(var a=0;a<o.markedSpans.length;++a){var l=o.markedSpans[a],s=l.marker;if((null==l.from||(s.inclusiveLeft?l.from<=t.ch:l.from<t.ch))&&(null==l.to||(s.inclusiveRight?l.to>=t.ch:l.to>t.ch))){if(i&&(Pa(s,"beforeCursorEnter"),s.explicitlyCleared)){if(o.markedSpans){--a;continue}break}if(!s.atomic)continue;if(n){var c,u=s.find(0>r?1:-1);if((0>r?s.inclusiveRight:s.inclusiveLeft)&&(u=Pe(e,u,-r,u&&u.line==t.line?o:null)),u&&u.line==t.line&&(c=_o(u,n))&&(0>r?0>c:c>0))return Oe(e,u,t,r,i)}var f=s.find(0>r?-1:1);return(0>r?s.inclusiveLeft:s.inclusiveRight)&&(f=Pe(e,f,r,f.line==t.line?o:null)),f?Oe(e,f,t,r,i):null}}return t}function Ie(e,t,n,r,i){var o=r||1,a=Oe(e,t,n,o,i)||!i&&Oe(e,t,n,o,!0)||Oe(e,t,n,-o,i)||!i&&Oe(e,t,n,-o,!0);return a?a:(e.cantEdit=!0,Bo(e.first,0))}function Pe(e,t,n,r){return 0>n&&0==t.ch?t.line>e.first?me(e,Bo(t.line-1)):null:n>0&&t.ch==(r||Zr(e,t.line)).text.length?t.line<e.first+e.size-1?Bo(t.line+1,0):null:new Bo(t.line,t.ch+n)}function Re(e){e.display.input.showSelection(e.display.input.prepareSelection())}function De(e,t){for(var n=e.doc,r={},i=r.cursors=document.createDocumentFragment(),o=r.selection=document.createDocumentFragment(),a=0;a<n.sel.ranges.length;a++)if(t!==!1||a!=n.sel.primIndex){var l=n.sel.ranges[a];if(!(l.from().line>=e.display.viewTo||l.to().line<e.display.viewFrom)){var s=l.empty();(s||e.options.showCursorWhenSelecting)&&He(e,l.head,i),s||We(e,l,o)}}return r}function He(e,t,n){var r=dt(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),i=n.appendChild(ji("div"," ","CodeMirror-cursor"));if(i.style.left=r.left+"px",i.style.top=r.top+"px",i.style.height=Math.max(0,r.bottom-r.top)*e.options.cursorHeight+"px",r.other){var o=n.appendChild(ji("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"));o.style.display="",o.style.left=r.other.left+"px",o.style.top=r.other.top+"px",o.style.height=.85*(r.other.bottom-r.other.top)+"px"}}function We(e,t,n){function r(e,t,n,r){0>t&&(t=0),t=Math.round(t),r=Math.round(r),l.appendChild(ji("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px; top: "+t+"px; width: "+(null==n?u-e:n)+"px; height: "+(r-t)+"px"))}function i(t,n,i){function o(n,r){return ht(e,Bo(t,n),"div",f,r)}var l,s,f=Zr(a,t),h=f.text.length;return eo(ii(f),n||0,null==i?h:i,function(e,t,a){var f,d,p,m=o(e,"left");if(e==t)f=m,d=p=m.left;else{if(f=o(t-1,"right"),"rtl"==a){var g=m;m=f,f=g}d=m.left,p=f.right}null==n&&0==e&&(d=c),f.top-m.top>3&&(r(d,m.top,null,m.bottom),d=c,m.bottom<f.top&&r(d,m.bottom,null,f.top)),null==i&&t==h&&(p=u),(!l||m.top<l.top||m.top==l.top&&m.left<l.left)&&(l=m),(!s||f.bottom>s.bottom||f.bottom==s.bottom&&f.right>s.right)&&(s=f),c+1>d&&(d=c),r(d,f.top,p-d,f.bottom)}),{start:l,end:s}}var o=e.display,a=e.doc,l=document.createDocumentFragment(),s=Ge(e.display),c=s.left,u=Math.max(o.sizerWidth,$e(e)-o.sizer.offsetLeft)-s.right,f=t.from(),h=t.to();if(f.line==h.line)i(f.line,f.ch,h.ch);else{var d=Zr(a,f.line),p=Zr(a,h.line),m=yr(d)==yr(p),g=i(f.line,f.ch,m?d.text.length+1:null).end,v=i(h.line,m?0:null,h.ch).start;m&&(g.top<v.top-2?(r(g.right,g.top,null,g.bottom),r(c,v.top,v.left,v.bottom)):r(g.right,g.top,v.left-g.right,g.bottom)),g.bottom<v.top&&r(c,g.bottom,null,v.top)}n.appendChild(l)}function Be(e){if(e.state.focused){var t=e.display;clearInterval(t.blinker);var n=!0;t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval(function(){t.cursorDiv.style.visibility=(n=!n)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function _e(e,t){e.doc.mode.startState&&e.doc.frontier<e.display.viewTo&&e.state.highlight.set(t,Bi(Fe,e))}function Fe(e){var t=e.doc;if(t.frontier<t.first&&(t.frontier=t.first),!(t.frontier>=e.display.viewTo)){var n=+new Date+e.options.workTime,r=sa(t.mode,je(e,t.frontier)),i=[];t.iter(t.frontier,Math.min(t.first+t.size,e.display.viewTo+500),function(o){if(t.frontier>=e.display.viewFrom){var a=o.styles,l=o.text.length>e.options.maxHighlightLength,s=Rr(e,o,l?sa(t.mode,r):r,!0);o.styles=s.styles;var c=o.styleClasses,u=s.classes;u?o.styleClasses=u:c&&(o.styleClasses=null);for(var f=!a||a.length!=o.styles.length||c!=u&&(!c||!u||c.bgClass!=u.bgClass||c.textClass!=u.textClass),h=0;!f&&h<a.length;++h)f=a[h]!=o.styles[h];f&&i.push(t.frontier),o.stateAfter=l?r:sa(t.mode,r)}else o.text.length<=e.options.maxHighlightLength&&Hr(e,o.text,r),o.stateAfter=t.frontier%5==0?sa(t.mode,r):null;return++t.frontier,+new Date>n?(_e(e,e.options.workDelay),!0):void 0}),i.length&&At(e,function(){for(var t=0;t<i.length;t++)Ht(e,i[t],"text")})}}function ze(e,t,n){for(var r,i,o=e.doc,a=n?-1:t-(e.doc.mode.innerMode?1e3:100),l=t;l>a;--l){if(l<=o.first)return o.first;var s=Zr(o,l-1);if(s.stateAfter&&(!n||l<=o.frontier))return l;var c=Fa(s.text,null,e.options.tabSize);(null==i||r>c)&&(i=l-1,r=c)}return i}function je(e,t,n){var r=e.doc,i=e.display;if(!r.mode.startState)return!0;var o=ze(e,t,n),a=o>r.first&&Zr(r,o-1).stateAfter;return a=a?sa(r.mode,a):ca(r.mode),r.iter(o,t,function(n){Hr(e,n.text,a);var l=o==t-1||o%5==0||o>=i.viewFrom&&o<i.viewTo;n.stateAfter=l?sa(r.mode,a):null,++o}),n&&(r.frontier=o),a}function Ue(e){return e.lineSpace.offsetTop}function qe(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function Ge(e){if(e.cachedPaddingH)return e.cachedPaddingH;var t=qi(e.measure,ji("pre","x")),n=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,r={left:parseInt(n.paddingLeft),right:parseInt(n.paddingRight)};return isNaN(r.left)||isNaN(r.right)||(e.cachedPaddingH=r),r}function Ye(e){return Da-e.display.nativeBarWidth}function $e(e){return e.display.scroller.clientWidth-Ye(e)-e.display.barWidth}function Ve(e){return e.display.scroller.clientHeight-Ye(e)-e.display.barHeight}function Ke(e,t,n){var r=e.options.lineWrapping,i=r&&$e(e);if(!t.measure.heights||r&&t.measure.width!=i){var o=t.measure.heights=[];if(r){t.measure.width=i;for(var a=t.text.firstChild.getClientRects(),l=0;l<a.length-1;l++){var s=a[l],c=a[l+1];Math.abs(s.bottom-c.bottom)>2&&o.push((s.bottom+c.top)/2-n.top)}}o.push(n.bottom-n.top)}}function Xe(e,t,n){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache};for(var r=0;r<e.rest.length;r++)if(e.rest[r]==t)return{map:e.measure.maps[r],cache:e.measure.caches[r]};for(var r=0;r<e.rest.length;r++)if(ti(e.rest[r])>n)return{map:e.measure.maps[r],cache:e.measure.caches[r],before:!0}}function Ze(e,t){t=yr(t);var n=ti(t),r=e.display.externalMeasured=new Pt(e.doc,t,n);r.lineN=n;var i=r.built=Br(e,r);return r.text=i.pre,qi(e.display.lineMeasure,i.pre),r}function Je(e,t,n,r){return tt(e,et(e,t),n,r)}function Qe(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[Bt(e,t)];var n=e.display.externalMeasured;return n&&t>=n.lineN&&t<n.lineN+n.size?n:void 0}function et(e,t){var n=ti(t),r=Qe(e,n);r&&!r.text?r=null:r&&r.changes&&(D(e,r,n,P(e)),e.curOp.forceUpdate=!0),r||(r=Ze(e,t));var i=Xe(r,t,n);return{line:t,view:r,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function tt(e,t,n,r,i){t.before&&(n=-1);var o,a=n+(r||"");return t.cache.hasOwnProperty(a)?o=t.cache[a]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(Ke(e,t.view,t.rect),t.hasHeights=!0),o=rt(e,t,n,r),o.bogus||(t.cache[a]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}function nt(e,t,n){for(var r,i,o,a,l=0;l<e.length;l+=3){var s=e[l],c=e[l+1];if(s>t?(i=0,o=1,a="left"):c>t?(i=t-s,o=i+1):(l==e.length-3||t==c&&e[l+3]>t)&&(o=c-s,i=o-1,t>=c&&(a="right")),null!=i){if(r=e[l+2],s==c&&n==(r.insertLeft?"left":"right")&&(a=n),"left"==n&&0==i)for(;l&&e[l-2]==e[l-3]&&e[l-1].insertLeft;)r=e[(l-=3)+2],a="left";if("right"==n&&i==c-s)for(;l<e.length-3&&e[l+3]==e[l+4]&&!e[l+5].insertLeft;)r=e[(l+=3)+2],a="right";break}}return{node:r,start:i,end:o,collapse:a,coverStart:s,coverEnd:c}}function rt(e,t,n,r){var i,o=nt(t.map,n,r),a=o.node,l=o.start,s=o.end,c=o.collapse;if(3==a.nodeType){for(var u=0;4>u;u++){for(;l&&zi(t.line.text.charAt(o.coverStart+l));)--l;for(;o.coverStart+s<o.coverEnd&&zi(t.line.text.charAt(o.coverStart+s));)++s;if(xo&&9>bo&&0==l&&s==o.coverEnd-o.coverStart)i=a.parentNode.getBoundingClientRect();else if(xo&&e.options.lineWrapping){var f=qa(a,l,s).getClientRects();i=f.length?f["right"==r?f.length-1:0]:qo}else i=qa(a,l,s).getBoundingClientRect()||qo;if(i.left||i.right||0==l)break;s=l,l-=1,c="right"}xo&&11>bo&&(i=it(e.display.measure,i))}else{l>0&&(c=r="right");var f;i=e.options.lineWrapping&&(f=a.getClientRects()).length>1?f["right"==r?f.length-1:0]:a.getBoundingClientRect()}if(xo&&9>bo&&!l&&(!i||!i.left&&!i.right)){var h=a.parentNode.getClientRects()[0];i=h?{left:h.left,right:h.left+xt(e.display),top:h.top,bottom:h.bottom}:qo}for(var d=i.top-t.rect.top,p=i.bottom-t.rect.top,m=(d+p)/2,g=t.view.measure.heights,u=0;u<g.length-1&&!(m<g[u]);u++);var v=u?g[u-1]:0,y=g[u],x={left:("right"==c?i.right:i.left)-t.rect.left,right:("left"==c?i.left:i.right)-t.rect.left,top:v,bottom:y};return i.left||i.right||(x.bogus=!0),e.options.singleCursorHeightPerLine||(x.rtop=d,x.rbottom=p),x}function it(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!Qi(e))return t;var n=screen.logicalXDPI/screen.deviceXDPI,r=screen.logicalYDPI/screen.deviceYDPI;return{left:t.left*n,right:t.right*n,top:t.top*r,bottom:t.bottom*r}}function ot(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function at(e){e.display.externalMeasure=null,Ui(e.display.lineMeasure);for(var t=0;t<e.display.view.length;t++)ot(e.display.view[t])}function lt(e){at(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function st(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft}function ct(){return window.pageYOffset||(document.documentElement||document.body).scrollTop}function ut(e,t,n,r){if(t.widgets)for(var i=0;i<t.widgets.length;++i)if(t.widgets[i].above){var o=Lr(t.widgets[i]);n.top+=o,n.bottom+=o}if("line"==r)return n;r||(r="local");var a=ri(t);if("local"==r?a+=Ue(e.display):a-=e.display.viewOffset,"page"==r||"window"==r){var l=e.display.lineSpace.getBoundingClientRect();a+=l.top+("window"==r?0:ct());var s=l.left+("window"==r?0:st());n.left+=s,n.right+=s}return n.top+=a,n.bottom+=a,n}function ft(e,t,n){if("div"==n)return t;var r=t.left,i=t.top;if("page"==n)r-=st(),
i-=ct();else if("local"==n||!n){var o=e.display.sizer.getBoundingClientRect();r+=o.left,i+=o.top}var a=e.display.lineSpace.getBoundingClientRect();return{left:r-a.left,top:i-a.top}}function ht(e,t,n,r,i){return r||(r=Zr(e.doc,t.line)),ut(e,r,Je(e,r,t.ch,i),n)}function dt(e,t,n,r,i,o){function a(t,a){var l=tt(e,i,t,a?"right":"left",o);return a?l.left=l.right:l.right=l.left,ut(e,r,l,n)}function l(e,t){var n=s[t],r=n.level%2;return e==to(n)&&t&&n.level<s[t-1].level?(n=s[--t],e=no(n)-(n.level%2?0:1),r=!0):e==no(n)&&t<s.length-1&&n.level<s[t+1].level&&(n=s[++t],e=to(n)-n.level%2,r=!1),r&&e==n.to&&e>n.from?a(e-1):a(e,r)}r=r||Zr(e.doc,t.line),i||(i=et(e,r));var s=ii(r),c=t.ch;if(!s)return a(c);var u=co(s,c),f=l(c,u);return null!=al&&(f.other=l(c,al)),f}function pt(e,t){var n=0,t=me(e.doc,t);e.options.lineWrapping||(n=xt(e.display)*t.ch);var r=Zr(e.doc,t.line),i=ri(r)+Ue(e.display);return{left:n,right:n,top:i,bottom:i+r.height}}function mt(e,t,n,r){var i=Bo(e,t);return i.xRel=r,n&&(i.outside=!0),i}function gt(e,t,n){var r=e.doc;if(n+=e.display.viewOffset,0>n)return mt(r.first,0,!0,-1);var i=ni(r,n),o=r.first+r.size-1;if(i>o)return mt(r.first+r.size-1,Zr(r,o).text.length,!0,1);0>t&&(t=0);for(var a=Zr(r,i);;){var l=vt(e,a,i,t,n),s=gr(a),c=s&&s.find(0,!0);if(!s||!(l.ch>c.from.ch||l.ch==c.from.ch&&l.xRel>0))return l;i=ti(a=c.to.line)}}function vt(e,t,n,r,i){function o(r){var i=dt(e,Bo(n,r),"line",t,c);return l=!0,a>i.bottom?i.left-s:a<i.top?i.left+s:(l=!1,i.left)}var a=i-ri(t),l=!1,s=2*e.display.wrapper.clientWidth,c=et(e,t),u=ii(t),f=t.text.length,h=ro(t),d=io(t),p=o(h),m=l,g=o(d),v=l;if(r>g)return mt(n,d,v,1);for(;;){if(u?d==h||d==fo(t,h,1):1>=d-h){for(var y=p>r||g-r>=r-p?h:d,x=r-(y==h?p:g);zi(t.text.charAt(y));)++y;var b=mt(n,y,y==h?m:v,-1>x?-1:x>1?1:0);return b}var w=Math.ceil(f/2),k=h+w;if(u){k=h;for(var S=0;w>S;++S)k=fo(t,k,1)}var C=o(k);C>r?(d=k,g=C,(v=l)&&(g+=1e3),f=w):(h=k,p=C,m=l,f-=w)}}function yt(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight;if(null==zo){zo=ji("pre");for(var t=0;49>t;++t)zo.appendChild(document.createTextNode("x")),zo.appendChild(ji("br"));zo.appendChild(document.createTextNode("x"))}qi(e.measure,zo);var n=zo.offsetHeight/50;return n>3&&(e.cachedTextHeight=n),Ui(e.measure),n||1}function xt(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth;var t=ji("span","xxxxxxxxxx"),n=ji("pre",[t]);qi(e.measure,n);var r=t.getBoundingClientRect(),i=(r.right-r.left)/10;return i>2&&(e.cachedCharWidth=i),i||10}function bt(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Yo},Go?Go.ops.push(e.curOp):e.curOp.ownsGroup=Go={ops:[e.curOp],delayedCallbacks:[]}}function wt(e){var t=e.delayedCallbacks,n=0;do{for(;n<t.length;n++)t[n].call(null);for(var r=0;r<e.ops.length;r++){var i=e.ops[r];if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(n<t.length)}function kt(e){var t=e.curOp,n=t.ownsGroup;if(n)try{wt(n)}finally{Go=null;for(var r=0;r<n.ops.length;r++)n.ops[r].cm.curOp=null;St(n)}}function St(e){for(var t=e.ops,n=0;n<t.length;n++)Ct(t[n]);for(var n=0;n<t.length;n++)Lt(t[n]);for(var n=0;n<t.length;n++)Tt(t[n]);for(var n=0;n<t.length;n++)Mt(t[n]);for(var n=0;n<t.length;n++)Nt(t[n])}function Ct(e){var t=e.cm,n=t.display;T(t),e.updateMaxLine&&h(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<n.viewFrom||e.scrollToPos.to.line>=n.viewTo)||n.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new L(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Lt(e){e.updatedDisplay=e.mustUpdate&&M(e.cm,e.update)}function Tt(e){var t=e.cm,n=t.display;e.updatedDisplay&&O(t),e.barMeasure=p(t),n.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=Je(t,n.maxLine,n.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(n.scroller.clientWidth,n.sizer.offsetLeft+e.adjustWidthTo+Ye(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,n.sizer.offsetLeft+e.adjustWidthTo-$e(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=n.input.prepareSelection(e.focus))}function Mt(e){var t=e.cm;null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&on(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1);var n=e.focus&&e.focus==Gi()&&(!document.hasFocus||document.hasFocus());e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,n),(e.updatedDisplay||e.startHeight!=t.doc.height)&&y(t,e.barMeasure),e.updatedDisplay&&E(t,e.barMeasure),e.selectionChanged&&Be(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),n&&X(e.cm)}function Nt(e){var t=e.cm,n=t.display,r=t.doc;if(e.updatedDisplay&&N(t,e.update),null==n.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(n.wheelStartX=n.wheelStartY=null),null==e.scrollTop||n.scroller.scrollTop==e.scrollTop&&!e.forceScroll||(r.scrollTop=Math.max(0,Math.min(n.scroller.scrollHeight-n.scroller.clientHeight,e.scrollTop)),n.scrollbars.setScrollTop(r.scrollTop),n.scroller.scrollTop=r.scrollTop),null==e.scrollLeft||n.scroller.scrollLeft==e.scrollLeft&&!e.forceScroll||(r.scrollLeft=Math.max(0,Math.min(n.scroller.scrollWidth-n.scroller.clientWidth,e.scrollLeft)),n.scrollbars.setScrollLeft(r.scrollLeft),n.scroller.scrollLeft=r.scrollLeft,w(t)),e.scrollToPos){var i=Rn(t,me(r,e.scrollToPos.from),me(r,e.scrollToPos.to),e.scrollToPos.margin);e.scrollToPos.isCursor&&t.state.focused&&Pn(t,i)}var o=e.maybeHiddenMarkers,a=e.maybeUnhiddenMarkers;if(o)for(var l=0;l<o.length;++l)o[l].lines.length||Pa(o[l],"hide");if(a)for(var l=0;l<a.length;++l)a[l].lines.length&&Pa(a[l],"unhide");n.wrapper.offsetHeight&&(r.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&Pa(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function At(e,t){if(e.curOp)return t();bt(e);try{return t()}finally{kt(e)}}function Et(e,t){return function(){if(e.curOp)return t.apply(e,arguments);bt(e);try{return t.apply(e,arguments)}finally{kt(e)}}}function Ot(e){return function(){if(this.curOp)return e.apply(this,arguments);bt(this);try{return e.apply(this,arguments)}finally{kt(this)}}}function It(e){return function(){var t=this.cm;if(!t||t.curOp)return e.apply(this,arguments);bt(t);try{return e.apply(this,arguments)}finally{kt(t)}}}function Pt(e,t,n){this.line=t,this.rest=xr(t),this.size=this.rest?ti(Ii(this.rest))-n+1:1,this.node=this.text=null,this.hidden=kr(e,t)}function Rt(e,t,n){for(var r,i=[],o=t;n>o;o=r){var a=new Pt(e.doc,Zr(e.doc,o),o);r=o+a.size,i.push(a)}return i}function Dt(e,t,n,r){null==t&&(t=e.doc.first),null==n&&(n=e.doc.first+e.doc.size),r||(r=0);var i=e.display;if(r&&n<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)Wo&&br(e.doc,t)<i.viewTo&&Wt(e);else if(n<=i.viewFrom)Wo&&wr(e.doc,n+r)>i.viewFrom?Wt(e):(i.viewFrom+=r,i.viewTo+=r);else if(t<=i.viewFrom&&n>=i.viewTo)Wt(e);else if(t<=i.viewFrom){var o=_t(e,n,n+r,1);o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=r):Wt(e)}else if(n>=i.viewTo){var o=_t(e,t,t,-1);o?(i.view=i.view.slice(0,o.index),i.viewTo=o.lineN):Wt(e)}else{var a=_t(e,t,t,-1),l=_t(e,n,n+r,1);a&&l?(i.view=i.view.slice(0,a.index).concat(Rt(e,a.lineN,l.lineN)).concat(i.view.slice(l.index)),i.viewTo+=r):Wt(e)}var s=i.externalMeasured;s&&(n<s.lineN?s.lineN+=r:t<s.lineN+s.size&&(i.externalMeasured=null))}function Ht(e,t,n){e.curOp.viewChanged=!0;var r=e.display,i=e.display.externalMeasured;if(i&&t>=i.lineN&&t<i.lineN+i.size&&(r.externalMeasured=null),!(t<r.viewFrom||t>=r.viewTo)){var o=r.view[Bt(e,t)];if(null!=o.node){var a=o.changes||(o.changes=[]);-1==Pi(a,n)&&a.push(n)}}}function Wt(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function Bt(e,t){if(t>=e.display.viewTo)return null;if(t-=e.display.viewFrom,0>t)return null;for(var n=e.display.view,r=0;r<n.length;r++)if(t-=n[r].size,0>t)return r}function _t(e,t,n,r){var i,o=Bt(e,t),a=e.display.view;if(!Wo||n==e.doc.first+e.doc.size)return{index:o,lineN:n};for(var l=0,s=e.display.viewFrom;o>l;l++)s+=a[l].size;if(s!=t){if(r>0){if(o==a.length-1)return null;i=s+a[o].size-t,o++}else i=s-t;t+=i,n+=i}for(;br(e.doc,n)!=n;){if(o==(0>r?0:a.length-1))return null;n+=r*a[o-(0>r?1:0)].size,o+=r}return{index:o,lineN:n}}function Ft(e,t,n){var r=e.display,i=r.view;0==i.length||t>=r.viewTo||n<=r.viewFrom?(r.view=Rt(e,t,n),r.viewFrom=t):(r.viewFrom>t?r.view=Rt(e,t,r.viewFrom).concat(r.view):r.viewFrom<t&&(r.view=r.view.slice(Bt(e,t))),r.viewFrom=t,r.viewTo<n?r.view=r.view.concat(Rt(e,r.viewTo,n)):r.viewTo>n&&(r.view=r.view.slice(0,Bt(e,n)))),r.viewTo=n}function zt(e){for(var t=e.display.view,n=0,r=0;r<t.length;r++){var i=t[r];i.hidden||i.node&&!i.changes||++n}return n}function jt(e){function t(){i.activeTouch&&(o=setTimeout(function(){i.activeTouch=null},1e3),a=i.activeTouch,a.end=+new Date)}function n(e){if(1!=e.touches.length)return!1;var t=e.touches[0];return t.radiusX<=1&&t.radiusY<=1}function r(e,t){if(null==t.left)return!0;var n=t.left-e.left,r=t.top-e.top;return n*n+r*r>400}var i=e.display;Ea(i.scroller,"mousedown",Et(e,$t)),xo&&11>bo?Ea(i.scroller,"dblclick",Et(e,function(t){if(!Ti(e,t)){var n=Yt(e,t);if(n&&!Jt(e,t)&&!Gt(e.display,t)){Ma(t);var r=e.findWordAt(n);be(e.doc,r.anchor,r.head)}}})):Ea(i.scroller,"dblclick",function(t){Ti(e,t)||Ma(t)}),Do||Ea(i.scroller,"contextmenu",function(t){xn(e,t)});var o,a={end:0};Ea(i.scroller,"touchstart",function(t){if(!Ti(e,t)&&!n(t)){clearTimeout(o);var r=+new Date;i.activeTouch={start:r,moved:!1,prev:r-a.end<=300?a:null},1==t.touches.length&&(i.activeTouch.left=t.touches[0].pageX,i.activeTouch.top=t.touches[0].pageY)}}),Ea(i.scroller,"touchmove",function(){i.activeTouch&&(i.activeTouch.moved=!0)}),Ea(i.scroller,"touchend",function(n){var o=i.activeTouch;if(o&&!Gt(i,n)&&null!=o.left&&!o.moved&&new Date-o.start<300){var a,l=e.coordsChar(i.activeTouch,"page");a=!o.prev||r(o,o.prev)?new fe(l,l):!o.prev.prev||r(o,o.prev.prev)?e.findWordAt(l):new fe(Bo(l.line,0),me(e.doc,Bo(l.line+1,0))),e.setSelection(a.anchor,a.head),e.focus(),Ma(n)}t()}),Ea(i.scroller,"touchcancel",t),Ea(i.scroller,"scroll",function(){i.scroller.clientHeight&&(rn(e,i.scroller.scrollTop),on(e,i.scroller.scrollLeft,!0),Pa(e,"scroll",e))}),Ea(i.scroller,"mousewheel",function(t){an(e,t)}),Ea(i.scroller,"DOMMouseScroll",function(t){an(e,t)}),Ea(i.wrapper,"scroll",function(){i.wrapper.scrollTop=i.wrapper.scrollLeft=0}),i.dragFunctions={enter:function(t){Ti(e,t)||Aa(t)},over:function(t){Ti(e,t)||(tn(e,t),Aa(t))},start:function(t){en(e,t)},drop:Et(e,Qt),leave:function(t){Ti(e,t)||nn(e)}};var l=i.input.getField();Ea(l,"keyup",function(t){pn.call(e,t)}),Ea(l,"keydown",Et(e,hn)),Ea(l,"keypress",Et(e,mn)),Ea(l,"focus",Bi(vn,e)),Ea(l,"blur",Bi(yn,e))}function Ut(t,n,r){var i=r&&r!=e.Init;if(!n!=!i){var o=t.display.dragFunctions,a=n?Ea:Ia;a(t.display.scroller,"dragstart",o.start),a(t.display.scroller,"dragenter",o.enter),a(t.display.scroller,"dragover",o.over),a(t.display.scroller,"dragleave",o.leave),a(t.display.scroller,"drop",o.drop)}}function qt(e){var t=e.display;t.lastWrapHeight==t.wrapper.clientHeight&&t.lastWrapWidth==t.wrapper.clientWidth||(t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize())}function Gt(e,t){for(var n=wi(t);n!=e.wrapper;n=n.parentNode)if(!n||1==n.nodeType&&"true"==n.getAttribute("cm-ignore-events")||n.parentNode==e.sizer&&n!=e.mover)return!0}function Yt(e,t,n,r){var i=e.display;if(!n&&"true"==wi(t).getAttribute("cm-not-content"))return null;var o,a,l=i.lineSpace.getBoundingClientRect();try{o=t.clientX-l.left,a=t.clientY-l.top}catch(t){return null}var s,c=gt(e,o,a);if(r&&1==c.xRel&&(s=Zr(e.doc,c.line).text).length==c.ch){var u=Fa(s,s.length,e.options.tabSize)-s.length;c=Bo(c.line,Math.max(0,Math.round((o-Ge(e.display).left)/xt(e.display))-u))}return c}function $t(e){var t=this,n=t.display;if(!(Ti(t,e)||n.activeTouch&&n.input.supportsTouch())){if(n.shift=e.shiftKey,Gt(n,e))return void(wo||(n.scroller.draggable=!1,setTimeout(function(){n.scroller.draggable=!0},100)));if(!Jt(t,e)){var r=Yt(t,e);switch(window.focus(),ki(e)){case 1:t.state.selectingText?t.state.selectingText(e):r?Vt(t,e,r):wi(e)==n.scroller&&Ma(e);break;case 2:wo&&(t.state.lastMiddleDown=+new Date),r&&be(t.doc,r),setTimeout(function(){n.input.focus()},20),Ma(e);break;case 3:Do?xn(t,e):gn(t)}}}}function Vt(e,t,n){xo?setTimeout(Bi(X,e),0):e.curOp.focus=Gi();var r,i=+new Date;Uo&&Uo.time>i-400&&0==_o(Uo.pos,n)?r="triple":jo&&jo.time>i-400&&0==_o(jo.pos,n)?(r="double",Uo={time:i,pos:n}):(r="single",jo={time:i,pos:n});var o,a=e.doc.sel,l=Eo?t.metaKey:t.ctrlKey;e.options.dragDrop&&el&&!e.isReadOnly()&&"single"==r&&(o=a.contains(n))>-1&&(_o((o=a.ranges[o]).from(),n)<0||n.xRel>0)&&(_o(o.to(),n)>0||n.xRel<0)?Kt(e,t,n,l):Xt(e,t,n,r,l)}function Kt(e,t,n,r){var i=e.display,o=+new Date,a=Et(e,function(l){wo&&(i.scroller.draggable=!1),e.state.draggingText=!1,Ia(document,"mouseup",a),Ia(i.scroller,"drop",a),Math.abs(t.clientX-l.clientX)+Math.abs(t.clientY-l.clientY)<10&&(Ma(l),!r&&+new Date-200<o&&be(e.doc,n),wo||xo&&9==bo?setTimeout(function(){document.body.focus(),i.input.focus()},20):i.input.focus())});wo&&(i.scroller.draggable=!0),e.state.draggingText=a,i.scroller.dragDrop&&i.scroller.dragDrop(),Ea(document,"mouseup",a),Ea(i.scroller,"drop",a)}function Xt(e,t,n,r,i){function o(t){if(0!=_o(g,t))if(g=t,"rect"==r){for(var i=[],o=e.options.tabSize,a=Fa(Zr(c,n.line).text,n.ch,o),l=Fa(Zr(c,t.line).text,t.ch,o),s=Math.min(a,l),d=Math.max(a,l),p=Math.min(n.line,t.line),m=Math.min(e.lastLine(),Math.max(n.line,t.line));m>=p;p++){var v=Zr(c,p).text,y=za(v,s,o);s==d?i.push(new fe(Bo(p,y),Bo(p,y))):v.length>y&&i.push(new fe(Bo(p,y),Bo(p,za(v,d,o))))}i.length||i.push(new fe(n,n)),Te(c,he(h.ranges.slice(0,f).concat(i),f),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var x=u,b=x.anchor,w=t;if("single"!=r){if("double"==r)var k=e.findWordAt(t);else var k=new fe(Bo(t.line,0),me(c,Bo(t.line+1,0)));_o(k.anchor,b)>0?(w=k.head,b=K(x.from(),k.anchor)):(w=k.anchor,b=V(x.to(),k.head))}var i=h.ranges.slice(0);i[f]=new fe(me(c,b),w),Te(c,he(i,f),Ba)}}function a(t){var n=++y,i=Yt(e,t,!0,"rect"==r);if(i)if(0!=_o(i,g)){e.curOp.focus=Gi(),o(i);var l=b(s,c);(i.line>=l.to||i.line<l.from)&&setTimeout(Et(e,function(){y==n&&a(t)}),150)}else{var u=t.clientY<v.top?-20:t.clientY>v.bottom?20:0;u&&setTimeout(Et(e,function(){y==n&&(s.scroller.scrollTop+=u,a(t))}),50)}}function l(t){e.state.selectingText=!1,y=1/0,Ma(t),s.input.focus(),Ia(document,"mousemove",x),Ia(document,"mouseup",w),c.history.lastSelOrigin=null}var s=e.display,c=e.doc;Ma(t);var u,f,h=c.sel,d=h.ranges;if(i&&!t.shiftKey?(f=c.sel.contains(n),u=f>-1?d[f]:new fe(n,n)):(u=c.sel.primary(),f=c.sel.primIndex),Oo?t.shiftKey&&t.metaKey:t.altKey)r="rect",i||(u=new fe(n,n)),n=Yt(e,t,!0,!0),f=-1;else if("double"==r){var p=e.findWordAt(n);u=e.display.shift||c.extend?xe(c,u,p.anchor,p.head):p}else if("triple"==r){var m=new fe(Bo(n.line,0),me(c,Bo(n.line+1,0)));u=e.display.shift||c.extend?xe(c,u,m.anchor,m.head):m}else u=xe(c,u,n);i?-1==f?(f=d.length,Te(c,he(d.concat([u]),f),{scroll:!1,origin:"*mouse"})):d.length>1&&d[f].empty()&&"single"==r&&!t.shiftKey?(Te(c,he(d.slice(0,f).concat(d.slice(f+1)),0),{scroll:!1,origin:"*mouse"}),h=c.sel):ke(c,f,u,Ba):(f=0,Te(c,new ue([u],0),Ba),h=c.sel);var g=n,v=s.wrapper.getBoundingClientRect(),y=0,x=Et(e,function(e){ki(e)?a(e):l(e)}),w=Et(e,l);e.state.selectingText=w,Ea(document,"mousemove",x),Ea(document,"mouseup",w)}function Zt(e,t,n,r){try{var i=t.clientX,o=t.clientY}catch(t){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;r&&Ma(t);var a=e.display,l=a.lineDiv.getBoundingClientRect();if(o>l.bottom||!Ni(e,n))return bi(t);o-=l.top-a.viewOffset;for(var s=0;s<e.options.gutters.length;++s){var c=a.gutters.childNodes[s];if(c&&c.getBoundingClientRect().right>=i){var u=ni(e.doc,o),f=e.options.gutters[s];return Pa(e,n,e,u,f,t),bi(t)}}}function Jt(e,t){return Zt(e,t,"gutterClick",!0)}function Qt(e){var t=this;if(nn(t),!Ti(t,e)&&!Gt(t.display,e)){Ma(e),xo&&($o=+new Date);var n=Yt(t,e,!0),r=e.dataTransfer.files;if(n&&!t.isReadOnly())if(r&&r.length&&window.FileReader&&window.File)for(var i=r.length,o=Array(i),a=0,l=function(e,r){if(!t.options.allowDropFileTypes||-1!=Pi(t.options.allowDropFileTypes,e.type)){var l=new FileReader;l.onload=Et(t,function(){var e=l.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(e)&&(e=""),o[r]=e,++a==i){n=me(t.doc,n);var s={from:n,to:n,text:t.doc.splitLines(o.join(t.doc.lineSeparator())),origin:"paste"};Tn(t.doc,s),Le(t.doc,de(n,Qo(s)))}}),l.readAsText(e)}},s=0;i>s;++s)l(r[s],s);else{if(t.state.draggingText&&t.doc.sel.contains(n)>-1)return t.state.draggingText(e),void setTimeout(function(){t.display.input.focus()},20);try{var o=e.dataTransfer.getData("Text");if(o){if(t.state.draggingText&&!(Eo?e.altKey:e.ctrlKey))var c=t.listSelections();if(Me(t.doc,de(n,n)),c)for(var s=0;s<c.length;++s)In(t.doc,"",c[s].anchor,c[s].head,"drag");t.replaceSelection(o,"around","paste"),t.display.input.focus()}}catch(e){}}}}function en(e,t){if(xo&&(!e.state.draggingText||+new Date-$o<100))return void Aa(t);if(!Ti(e,t)&&!Gt(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!Lo)){var n=ji("img",null,null,"position: fixed; left: 0; top: 0;");n.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",Co&&(n.width=n.height=1,e.display.wrapper.appendChild(n),n._top=n.offsetTop),t.dataTransfer.setDragImage(n,0,0),Co&&n.parentNode.removeChild(n)}}function tn(e,t){var n=Yt(e,t);if(n){var r=document.createDocumentFragment();He(e,n,r),e.display.dragCursor||(e.display.dragCursor=ji("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),qi(e.display.dragCursor,r)}}function nn(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function rn(e,t){Math.abs(e.doc.scrollTop-t)<2||(e.doc.scrollTop=t,go||A(e,{top:t}),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t),e.display.scrollbars.setScrollTop(t),go&&A(e),_e(e,100))}function on(e,t,n){(n?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)||(t=Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth),e.doc.scrollLeft=t,w(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function an(e,t){var n=Xo(t),r=n.x,i=n.y,o=e.display,a=o.scroller,l=a.scrollWidth>a.clientWidth,s=a.scrollHeight>a.clientHeight;if(r&&l||i&&s){if(i&&Eo&&wo)e:for(var c=t.target,u=o.view;c!=a;c=c.parentNode)for(var f=0;f<u.length;f++)if(u[f].node==c){e.display.currentWheelTarget=c;break e}if(r&&!go&&!Co&&null!=Ko)return i&&s&&rn(e,Math.max(0,Math.min(a.scrollTop+i*Ko,a.scrollHeight-a.clientHeight))),on(e,Math.max(0,Math.min(a.scrollLeft+r*Ko,a.scrollWidth-a.clientWidth))),(!i||i&&s)&&Ma(t),void(o.wheelStartX=null);if(i&&null!=Ko){var h=i*Ko,d=e.doc.scrollTop,p=d+o.wrapper.clientHeight;0>h?d=Math.max(0,d+h-50):p=Math.min(e.doc.height,p+h+50),A(e,{top:d,bottom:p})}20>Vo&&(null==o.wheelStartX?(o.wheelStartX=a.scrollLeft,o.wheelStartY=a.scrollTop,o.wheelDX=r,o.wheelDY=i,setTimeout(function(){if(null!=o.wheelStartX){var e=a.scrollLeft-o.wheelStartX,t=a.scrollTop-o.wheelStartY,n=t&&o.wheelDY&&t/o.wheelDY||e&&o.wheelDX&&e/o.wheelDX;o.wheelStartX=o.wheelStartY=null,n&&(Ko=(Ko*Vo+n)/(Vo+1),++Vo)}},200)):(o.wheelDX+=r,o.wheelDY+=i))}}function ln(e,t,n){if("string"==typeof t&&(t=ua[t],!t))return!1;e.display.input.ensurePolled();var r=e.display.shift,i=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),n&&(e.display.shift=!1),i=t(e)!=Ha}finally{e.display.shift=r,e.state.suppressEdits=!1}return i}function sn(e,t,n){for(var r=0;r<e.state.keyMaps.length;r++){var i=ha(t,e.state.keyMaps[r],n,e);if(i)return i}return e.options.extraKeys&&ha(t,e.options.extraKeys,n,e)||ha(t,e.options.keyMap,n,e)}function cn(e,t,n,r){var i=e.state.keySeq;if(i){if(da(t))return"handled";Zo.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())}),t=i+" "+t}var o=sn(e,t,r);return"multi"==o&&(e.state.keySeq=t),"handled"==o&&Ci(e,"keyHandled",e,t,n),"handled"!=o&&"multi"!=o||(Ma(n),Be(e)),i&&!o&&/\'$/.test(t)?(Ma(n),!0):!!o}function un(e,t){var n=pa(t,!0);return n?t.shiftKey&&!e.state.keySeq?cn(e,"Shift-"+n,t,function(t){return ln(e,t,!0)})||cn(e,n,t,function(t){return("string"==typeof t?/^go[A-Z]/.test(t):t.motion)?ln(e,t):void 0}):cn(e,n,t,function(t){return ln(e,t)}):!1}function fn(e,t,n){return cn(e,"'"+n+"'",t,function(t){return ln(e,t,!0)})}function hn(e){var t=this;if(t.curOp.focus=Gi(),!Ti(t,e)){xo&&11>bo&&27==e.keyCode&&(e.returnValue=!1);var n=e.keyCode;t.display.shift=16==n||e.shiftKey;var r=un(t,e);Co&&(Jo=r?n:null,!r&&88==n&&!rl&&(Eo?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),18!=n||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||dn(t)}}function dn(e){function t(e){18!=e.keyCode&&e.altKey||(Za(n,"CodeMirror-crosshair"),Ia(document,"keyup",t),Ia(document,"mouseover",t))}var n=e.display.lineDiv;Ja(n,"CodeMirror-crosshair"),Ea(document,"keyup",t),Ea(document,"mouseover",t)}function pn(e){16==e.keyCode&&(this.doc.sel.shift=!1),Ti(this,e)}function mn(e){var t=this;if(!(Gt(t.display,e)||Ti(t,e)||e.ctrlKey&&!e.altKey||Eo&&e.metaKey)){var n=e.keyCode,r=e.charCode;if(Co&&n==Jo)return Jo=null,void Ma(e);if(!Co||e.which&&!(e.which<10)||!un(t,e)){var i=String.fromCharCode(null==r?n:r);fn(t,e,i)||t.display.input.onKeyPress(e)}}}function gn(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,yn(e))},100)}function vn(e){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(Pa(e,"focus",e),e.state.focused=!0,Ja(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),wo&&setTimeout(function(){e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Be(e))}function yn(e){e.state.delayingBlurEvent||(e.state.focused&&(Pa(e,"blur",e),e.state.focused=!1,Za(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function xn(e,t){Gt(e.display,t)||bn(e,t)||Ti(e,t,"contextmenu")||e.display.input.onContextMenu(t)}function bn(e,t){return Ni(e,"gutterContextMenu")?Zt(e,t,"gutterContextMenu",!1):!1}function wn(e,t){if(_o(e,t.from)<0)return e;if(_o(e,t.to)<=0)return Qo(t);var n=e.line+t.text.length-(t.to.line-t.from.line)-1,r=e.ch;return e.line==t.to.line&&(r+=Qo(t).ch-t.to.ch),Bo(n,r)}function kn(e,t){for(var n=[],r=0;r<e.sel.ranges.length;r++){var i=e.sel.ranges[r];n.push(new fe(wn(i.anchor,t),wn(i.head,t)))}return he(n,e.sel.primIndex)}function Sn(e,t,n){return e.line==t.line?Bo(n.line,e.ch-t.ch+n.ch):Bo(n.line+(e.line-t.line),e.ch)}function Cn(e,t,n){for(var r=[],i=Bo(e.first,0),o=i,a=0;a<t.length;a++){var l=t[a],s=Sn(l.from,i,o),c=Sn(Qo(l),i,o);if(i=l.to,o=c,"around"==n){var u=e.sel.ranges[a],f=_o(u.head,u.anchor)<0;r[a]=new fe(f?c:s,f?s:c)}else r[a]=new fe(s,s)}return new ue(r,e.sel.primIndex)}function Ln(e,t,n){var r={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){this.canceled=!0}};return n&&(r.update=function(t,n,r,i){t&&(this.from=me(e,t)),n&&(this.to=me(e,n)),r&&(this.text=r),void 0!==i&&(this.origin=i)}),Pa(e,"beforeChange",e,r),e.cm&&Pa(e.cm,"beforeChange",e.cm,r),r.canceled?null:{from:r.from,to:r.to,text:r.text,origin:r.origin}}function Tn(e,t,n){if(e.cm){if(!e.cm.curOp)return Et(e.cm,Tn)(e,t,n);if(e.cm.state.suppressEdits)return}if(!(Ni(e,"beforeChange")||e.cm&&Ni(e.cm,"beforeChange"))||(t=Ln(e,t,!0))){var r=Ho&&!n&&sr(e,t.from,t.to);if(r)for(var i=r.length-1;i>=0;--i)Mn(e,{from:r[i].from,to:r[i].to,text:i?[""]:t.text});else Mn(e,t)}}function Mn(e,t){if(1!=t.text.length||""!=t.text[0]||0!=_o(t.from,t.to)){var n=kn(e,t);ci(e,t,n,e.cm?e.cm.curOp.id:NaN),En(e,t,n,or(e,t));var r=[];Kr(e,function(e,n){n||-1!=Pi(r,e.history)||(xi(e.history,t),r.push(e.history)),En(e,t,null,or(e,t))})}}function Nn(e,t,n){if(!e.cm||!e.cm.state.suppressEdits){for(var r,i=e.history,o=e.sel,a="undo"==t?i.done:i.undone,l="undo"==t?i.undone:i.done,s=0;s<a.length&&(r=a[s],n?!r.ranges||r.equals(e.sel):r.ranges);s++);if(s!=a.length){for(i.lastOrigin=i.lastSelOrigin=null;r=a.pop(),r.ranges;){if(hi(r,l),n&&!r.equals(e.sel))return void Te(e,r,{clearRedo:!1});o=r}var c=[];hi(o,l),l.push({changes:c,generation:i.generation}),i.generation=r.generation||++i.maxGeneration;for(var u=Ni(e,"beforeChange")||e.cm&&Ni(e.cm,"beforeChange"),s=r.changes.length-1;s>=0;--s){var f=r.changes[s];if(f.origin=t,u&&!Ln(e,f,!1))return void(a.length=0);c.push(ai(e,f));var h=s?kn(e,f):Ii(a);En(e,f,h,lr(e,f)),!s&&e.cm&&e.cm.scrollIntoView({from:f.from,to:Qo(f)});var d=[];Kr(e,function(e,t){t||-1!=Pi(d,e.history)||(xi(e.history,f),d.push(e.history)),En(e,f,null,lr(e,f))})}}}}function An(e,t){if(0!=t&&(e.first+=t,e.sel=new ue(Ri(e.sel.ranges,function(e){return new fe(Bo(e.anchor.line+t,e.anchor.ch),Bo(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){Dt(e.cm,e.first,e.first-t,t);for(var n=e.cm.display,r=n.viewFrom;r<n.viewTo;r++)Ht(e.cm,r,"gutter")}}function En(e,t,n,r){if(e.cm&&!e.cm.curOp)return Et(e.cm,En)(e,t,n,r);if(t.to.line<e.first)return void An(e,t.text.length-1-(t.to.line-t.from.line));if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line);An(e,i),t={from:Bo(e.first,0),to:Bo(t.to.line+i,t.to.ch),text:[Ii(t.text)],origin:t.origin}}var o=e.lastLine();t.to.line>o&&(t={from:t.from,to:Bo(o,Zr(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=Jr(e,t.from,t.to),n||(n=kn(e,t)),e.cm?On(e.cm,t,r):Yr(e,t,r),Me(e,n,Wa)}}function On(e,t,n){var r=e.doc,i=e.display,a=t.from,l=t.to,s=!1,c=a.line;e.options.lineWrapping||(c=ti(yr(Zr(r,a.line))),r.iter(c,l.line+1,function(e){return e==i.maxLine?(s=!0,!0):void 0})),r.sel.contains(t.from,t.to)>-1&&Mi(e),Yr(r,t,n,o(e)),e.options.lineWrapping||(r.iter(c,a.line+t.text.length,function(e){var t=f(e);t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,s=!1)}),s&&(e.curOp.updateMaxLine=!0)),r.frontier=Math.min(r.frontier,a.line),_e(e,400);var u=t.text.length-(l.line-a.line)-1;t.full?Dt(e):a.line!=l.line||1!=t.text.length||Gr(e.doc,t)?Dt(e,a.line,l.line+1,u):Ht(e,a.line,"text");var h=Ni(e,"changes"),d=Ni(e,"change");if(d||h){var p={from:a,to:l,text:t.text,removed:t.removed,origin:t.origin};d&&Ci(e,"change",e,p),h&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(p)}e.display.selForContextMenu=null}function In(e,t,n,r,i){if(r||(r=n),_o(r,n)<0){var o=r;r=n,n=o}"string"==typeof t&&(t=e.splitLines(t)),Tn(e,{from:n,to:r,text:t,origin:i})}function Pn(e,t){if(!Ti(e,"scrollCursorIntoView")){var n=e.display,r=n.sizer.getBoundingClientRect(),i=null;if(t.top+r.top<0?i=!0:t.bottom+r.top>(window.innerHeight||document.documentElement.clientHeight)&&(i=!1),null!=i&&!Mo){var o=ji("div","​",null,"position: absolute; top: "+(t.top-n.viewOffset-Ue(e.display))+"px; height: "+(t.bottom-t.top+Ye(e)+n.barHeight)+"px; left: "+t.left+"px; width: 2px;");e.display.lineSpace.appendChild(o),o.scrollIntoView(i),e.display.lineSpace.removeChild(o)}}}function Rn(e,t,n,r){null==r&&(r=0);for(var i=0;5>i;i++){var o=!1,a=dt(e,t),l=n&&n!=t?dt(e,n):a,s=Hn(e,Math.min(a.left,l.left),Math.min(a.top,l.top)-r,Math.max(a.left,l.left),Math.max(a.bottom,l.bottom)+r),c=e.doc.scrollTop,u=e.doc.scrollLeft;if(null!=s.scrollTop&&(rn(e,s.scrollTop),Math.abs(e.doc.scrollTop-c)>1&&(o=!0)),null!=s.scrollLeft&&(on(e,s.scrollLeft),Math.abs(e.doc.scrollLeft-u)>1&&(o=!0)),!o)break}return a}function Dn(e,t,n,r,i){var o=Hn(e,t,n,r,i);null!=o.scrollTop&&rn(e,o.scrollTop),null!=o.scrollLeft&&on(e,o.scrollLeft)}function Hn(e,t,n,r,i){var o=e.display,a=yt(e.display);0>n&&(n=0);var l=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:o.scroller.scrollTop,s=Ve(e),c={};i-n>s&&(i=n+s);var u=e.doc.height+qe(o),f=a>n,h=i>u-a;if(l>n)c.scrollTop=f?0:n;else if(i>l+s){var d=Math.min(n,(h?u:i)-s);d!=l&&(c.scrollTop=d)}var p=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:o.scroller.scrollLeft,m=$e(e)-(e.options.fixedGutter?o.gutters.offsetWidth:0),g=r-t>m;return g&&(r=t+m),10>t?c.scrollLeft=0:p>t?c.scrollLeft=Math.max(0,t-(g?0:10)):r>m+p-3&&(c.scrollLeft=r+(g?0:10)-m),c}function Wn(e,t,n){null==t&&null==n||_n(e),null!=t&&(e.curOp.scrollLeft=(null==e.curOp.scrollLeft?e.doc.scrollLeft:e.curOp.scrollLeft)+t),null!=n&&(e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+n)}function Bn(e){_n(e);var t=e.getCursor(),n=t,r=t;e.options.lineWrapping||(n=t.ch?Bo(t.line,t.ch-1):t,r=Bo(t.line,t.ch+1)),e.curOp.scrollToPos={from:n,to:r,margin:e.options.cursorScrollMargin,isCursor:!0}}function _n(e){var t=e.curOp.scrollToPos;if(t){e.curOp.scrollToPos=null;var n=pt(e,t.from),r=pt(e,t.to),i=Hn(e,Math.min(n.left,r.left),Math.min(n.top,r.top)-t.margin,Math.max(n.right,r.right),Math.max(n.bottom,r.bottom)+t.margin);e.scrollTo(i.scrollLeft,i.scrollTop)}}function Fn(e,t,n,r){var i,o=e.doc;null==n&&(n="add"),"smart"==n&&(o.mode.indent?i=je(e,t):n="prev");var a=e.options.tabSize,l=Zr(o,t),s=Fa(l.text,null,a);l.stateAfter&&(l.stateAfter=null);var c,u=l.text.match(/^\s*/)[0];if(r||/\S/.test(l.text)){if("smart"==n&&(c=o.mode.indent(i,l.text.slice(u.length),l.text),c==Ha||c>150)){if(!r)return;n="prev"}}else c=0,n="not";"prev"==n?c=t>o.first?Fa(Zr(o,t-1).text,null,a):0:"add"==n?c=s+e.options.indentUnit:"subtract"==n?c=s-e.options.indentUnit:"number"==typeof n&&(c=s+n),c=Math.max(0,c);var f="",h=0;if(e.options.indentWithTabs)for(var d=Math.floor(c/a);d;--d)h+=a,f+="	";if(c>h&&(f+=Oi(c-h)),f!=u)return In(o,f,Bo(t,0),Bo(t,u.length),"+input"),l.stateAfter=null,!0;for(var d=0;d<o.sel.ranges.length;d++){var p=o.sel.ranges[d];if(p.head.line==t&&p.head.ch<u.length){var h=Bo(t,u.length);ke(o,d,new fe(h,h));break}}}function zn(e,t,n,r){var i=t,o=t;return"number"==typeof t?o=Zr(e,pe(e,t)):i=ti(t),null==i?null:(r(o,i)&&e.cm&&Ht(e.cm,i,n),o)}function jn(e,t){for(var n=e.doc.sel.ranges,r=[],i=0;i<n.length;i++){for(var o=t(n[i]);r.length&&_o(o.from,Ii(r).to)<=0;){var a=r.pop();if(_o(a.from,o.from)<0){o.from=a.from;break}}r.push(o)}At(e,function(){for(var t=r.length-1;t>=0;t--)In(e.doc,"",r[t].from,r[t].to,"+delete");Bn(e)})}function Un(e,t,n,r,i){function o(){var t=l+n;return t<e.first||t>=e.first+e.size?!1:(l=t,u=Zr(e,t))}function a(e){var t=(i?fo:ho)(u,s,n,!0);if(null==t){if(e||!o())return!1;s=i?(0>n?io:ro)(u):0>n?u.text.length:0}else s=t;return!0}var l=t.line,s=t.ch,c=n,u=Zr(e,l);if("char"==r)a();else if("column"==r)a(!0);else if("word"==r||"group"==r)for(var f=null,h="group"==r,d=e.cm&&e.cm.getHelper(t,"wordChars"),p=!0;!(0>n)||a(!p);p=!1){var m=u.text.charAt(s)||"\n",g=_i(m,d)?"w":h&&"\n"==m?"n":!h||/\s/.test(m)?null:"p";if(!h||p||g||(g="s"),f&&f!=g){0>n&&(n=1,a());break}if(g&&(f=g),n>0&&!a(!p))break}var v=Ie(e,Bo(l,s),t,c,!0);return _o(t,v)||(v.hitSide=!0),v}function qn(e,t,n,r){var i,o=e.doc,a=t.left;if("page"==r){var l=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight);i=t.top+n*(l-(0>n?1.5:.5)*yt(e.display))}else"line"==r&&(i=n>0?t.bottom+3:t.top-3);for(;;){var s=gt(e,a,i);if(!s.outside)break;if(0>n?0>=i:i>=o.height){s.hitSide=!0;break}i+=5*n}return s}function Gn(t,n,r,i){e.defaults[t]=n,r&&(ta[t]=i?function(e,t,n){n!=na&&r(e,t,n)}:r)}function Yn(e){for(var t,n,r,i,o=e.split(/-(?!$)/),e=o[o.length-1],a=0;a<o.length-1;a++){var l=o[a];if(/^(cmd|meta|m)$/i.test(l))i=!0;else if(/^a(lt)?$/i.test(l))t=!0;else if(/^(c|ctrl|control)$/i.test(l))n=!0;else{
if(!/^s(hift)$/i.test(l))throw new Error("Unrecognized modifier name: "+l);r=!0}}return t&&(e="Alt-"+e),n&&(e="Ctrl-"+e),i&&(e="Cmd-"+e),r&&(e="Shift-"+e),e}function $n(e){return"string"==typeof e?fa[e]:e}function Vn(e,t,n,r,i){if(r&&r.shared)return Kn(e,t,n,r,i);if(e.cm&&!e.cm.curOp)return Et(e.cm,Vn)(e,t,n,r,i);var o=new va(e,i),a=_o(t,n);if(r&&Wi(r,o,!1),a>0||0==a&&o.clearWhenEmpty!==!1)return o;if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=ji("span",[o.replacedWith],"CodeMirror-widget"),r.handleMouseEvents||o.widgetNode.setAttribute("cm-ignore-events","true"),r.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(vr(e,t.line,t,n,o)||t.line!=n.line&&vr(e,n.line,t,n,o))throw new Error("Inserting collapsed marker partially overlapping an existing one");Wo=!0}o.addToHistory&&ci(e,{from:t,to:n,origin:"markText"},e.sel,NaN);var l,s=t.line,c=e.cm;if(e.iter(s,n.line+1,function(e){c&&o.collapsed&&!c.options.lineWrapping&&yr(e)==c.display.maxLine&&(l=!0),o.collapsed&&s!=t.line&&ei(e,0),nr(e,new Qn(o,s==t.line?t.ch:null,s==n.line?n.ch:null)),++s}),o.collapsed&&e.iter(t.line,n.line+1,function(t){kr(e,t)&&ei(t,0)}),o.clearOnEnter&&Ea(o,"beforeCursorEnter",function(){o.clear()}),o.readOnly&&(Ho=!0,(e.history.done.length||e.history.undone.length)&&e.clearHistory()),o.collapsed&&(o.id=++ga,o.atomic=!0),c){if(l&&(c.curOp.updateMaxLine=!0),o.collapsed)Dt(c,t.line,n.line+1);else if(o.className||o.title||o.startStyle||o.endStyle||o.css)for(var u=t.line;u<=n.line;u++)Ht(c,u,"text");o.atomic&&Ae(c.doc),Ci(c,"markerAdded",c,o)}return o}function Kn(e,t,n,r,i){r=Wi(r),r.shared=!1;var o=[Vn(e,t,n,r,i)],a=o[0],l=r.widgetNode;return Kr(e,function(e){l&&(r.widgetNode=l.cloneNode(!0)),o.push(Vn(e,me(e,t),me(e,n),r,i));for(var s=0;s<e.linked.length;++s)if(e.linked[s].isParent)return;a=Ii(o)}),new ya(o,a)}function Xn(e){return e.findMarks(Bo(e.first,0),e.clipPos(Bo(e.lastLine())),function(e){return e.parent})}function Zn(e,t){for(var n=0;n<t.length;n++){var r=t[n],i=r.find(),o=e.clipPos(i.from),a=e.clipPos(i.to);if(_o(o,a)){var l=Vn(e,o,a,r.primary,r.primary.type);r.markers.push(l),l.parent=r}}}function Jn(e){for(var t=0;t<e.length;t++){var n=e[t],r=[n.primary.doc];Kr(n.primary.doc,function(e){r.push(e)});for(var i=0;i<n.markers.length;i++){var o=n.markers[i];-1==Pi(r,o.doc)&&(o.parent=null,n.markers.splice(i--,1))}}}function Qn(e,t,n){this.marker=e,this.from=t,this.to=n}function er(e,t){if(e)for(var n=0;n<e.length;++n){var r=e[n];if(r.marker==t)return r}}function tr(e,t){for(var n,r=0;r<e.length;++r)e[r]!=t&&(n||(n=[])).push(e[r]);return n}function nr(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e)}function rr(e,t,n){if(e)for(var r,i=0;i<e.length;++i){var o=e[i],a=o.marker,l=null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t);if(l||o.from==t&&"bookmark"==a.type&&(!n||!o.marker.insertLeft)){var s=null==o.to||(a.inclusiveRight?o.to>=t:o.to>t);(r||(r=[])).push(new Qn(a,o.from,s?null:o.to))}}return r}function ir(e,t,n){if(e)for(var r,i=0;i<e.length;++i){var o=e[i],a=o.marker,l=null==o.to||(a.inclusiveRight?o.to>=t:o.to>t);if(l||o.from==t&&"bookmark"==a.type&&(!n||o.marker.insertLeft)){var s=null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t);(r||(r=[])).push(new Qn(a,s?null:o.from-t,null==o.to?null:o.to-t))}}return r}function or(e,t){if(t.full)return null;var n=ve(e,t.from.line)&&Zr(e,t.from.line).markedSpans,r=ve(e,t.to.line)&&Zr(e,t.to.line).markedSpans;if(!n&&!r)return null;var i=t.from.ch,o=t.to.ch,a=0==_o(t.from,t.to),l=rr(n,i,a),s=ir(r,o,a),c=1==t.text.length,u=Ii(t.text).length+(c?i:0);if(l)for(var f=0;f<l.length;++f){var h=l[f];if(null==h.to){var d=er(s,h.marker);d?c&&(h.to=null==d.to?null:d.to+u):h.to=i}}if(s)for(var f=0;f<s.length;++f){var h=s[f];if(null!=h.to&&(h.to+=u),null==h.from){var d=er(l,h.marker);d||(h.from=u,c&&(l||(l=[])).push(h))}else h.from+=u,c&&(l||(l=[])).push(h)}l&&(l=ar(l)),s&&s!=l&&(s=ar(s));var p=[l];if(!c){var m,g=t.text.length-2;if(g>0&&l)for(var f=0;f<l.length;++f)null==l[f].to&&(m||(m=[])).push(new Qn(l[f].marker,null,null));for(var f=0;g>f;++f)p.push(m);p.push(s)}return p}function ar(e){for(var t=0;t<e.length;++t){var n=e[t];null!=n.from&&n.from==n.to&&n.marker.clearWhenEmpty!==!1&&e.splice(t--,1)}return e.length?e:null}function lr(e,t){var n=mi(e,t),r=or(e,t);if(!n)return r;if(!r)return n;for(var i=0;i<n.length;++i){var o=n[i],a=r[i];if(o&&a)e:for(var l=0;l<a.length;++l){for(var s=a[l],c=0;c<o.length;++c)if(o[c].marker==s.marker)continue e;o.push(s)}else a&&(n[i]=a)}return n}function sr(e,t,n){var r=null;if(e.iter(t.line,n.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var n=e.markedSpans[t].marker;!n.readOnly||r&&-1!=Pi(r,n)||(r||(r=[])).push(n)}}),!r)return null;for(var i=[{from:t,to:n}],o=0;o<r.length;++o)for(var a=r[o],l=a.find(0),s=0;s<i.length;++s){var c=i[s];if(!(_o(c.to,l.from)<0||_o(c.from,l.to)>0)){var u=[s,1],f=_o(c.from,l.from),h=_o(c.to,l.to);(0>f||!a.inclusiveLeft&&!f)&&u.push({from:c.from,to:l.from}),(h>0||!a.inclusiveRight&&!h)&&u.push({from:l.to,to:c.to}),i.splice.apply(i,u),s+=u.length-1}}return i}function cr(e){var t=e.markedSpans;if(t){for(var n=0;n<t.length;++n)t[n].marker.detachLine(e);e.markedSpans=null}}function ur(e,t){if(t){for(var n=0;n<t.length;++n)t[n].marker.attachLine(e);e.markedSpans=t}}function fr(e){return e.inclusiveLeft?-1:0}function hr(e){return e.inclusiveRight?1:0}function dr(e,t){var n=e.lines.length-t.lines.length;if(0!=n)return n;var r=e.find(),i=t.find(),o=_o(r.from,i.from)||fr(e)-fr(t);if(o)return-o;var a=_o(r.to,i.to)||hr(e)-hr(t);return a?a:t.id-e.id}function pr(e,t){var n,r=Wo&&e.markedSpans;if(r)for(var i,o=0;o<r.length;++o)i=r[o],i.marker.collapsed&&null==(t?i.from:i.to)&&(!n||dr(n,i.marker)<0)&&(n=i.marker);return n}function mr(e){return pr(e,!0)}function gr(e){return pr(e,!1)}function vr(e,t,n,r,i){var o=Zr(e,t),a=Wo&&o.markedSpans;if(a)for(var l=0;l<a.length;++l){var s=a[l];if(s.marker.collapsed){var c=s.marker.find(0),u=_o(c.from,n)||fr(s.marker)-fr(i),f=_o(c.to,r)||hr(s.marker)-hr(i);if(!(u>=0&&0>=f||0>=u&&f>=0)&&(0>=u&&(s.marker.inclusiveRight&&i.inclusiveLeft?_o(c.to,n)>=0:_o(c.to,n)>0)||u>=0&&(s.marker.inclusiveRight&&i.inclusiveLeft?_o(c.from,r)<=0:_o(c.from,r)<0)))return!0}}}function yr(e){for(var t;t=mr(e);)e=t.find(-1,!0).line;return e}function xr(e){for(var t,n;t=gr(e);)e=t.find(1,!0).line,(n||(n=[])).push(e);return n}function br(e,t){var n=Zr(e,t),r=yr(n);return n==r?t:ti(r)}function wr(e,t){if(t>e.lastLine())return t;var n,r=Zr(e,t);if(!kr(e,r))return t;for(;n=gr(r);)r=n.find(1,!0).line;return ti(r)+1}function kr(e,t){var n=Wo&&t.markedSpans;if(n)for(var r,i=0;i<n.length;++i)if(r=n[i],r.marker.collapsed){if(null==r.from)return!0;if(!r.marker.widgetNode&&0==r.from&&r.marker.inclusiveLeft&&Sr(e,t,r))return!0}}function Sr(e,t,n){if(null==n.to){var r=n.marker.find(1,!0);return Sr(e,r.line,er(r.line.markedSpans,n.marker))}if(n.marker.inclusiveRight&&n.to==t.text.length)return!0;for(var i,o=0;o<t.markedSpans.length;++o)if(i=t.markedSpans[o],i.marker.collapsed&&!i.marker.widgetNode&&i.from==n.to&&(null==i.to||i.to!=n.from)&&(i.marker.inclusiveLeft||n.marker.inclusiveRight)&&Sr(e,t,i))return!0}function Cr(e,t,n){ri(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Wn(e,null,n)}function Lr(e){if(null!=e.height)return e.height;var t=e.doc.cm;if(!t)return 0;if(!Va(document.body,e.node)){var n="position: relative;";e.coverGutter&&(n+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(n+="width: "+t.display.wrapper.clientWidth+"px;"),qi(t.display.measure,ji("div",[e.node],null,n))}return e.height=e.node.parentNode.offsetHeight}function Tr(e,t,n,r){var i=new xa(e,n,r),o=e.cm;return o&&i.noHScroll&&(o.display.alignWidgets=!0),zn(e,t,"widget",function(t){var n=t.widgets||(t.widgets=[]);if(null==i.insertAt?n.push(i):n.splice(Math.min(n.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!kr(e,t)){var r=ri(t)<e.scrollTop;ei(t,t.height+Lr(i)),r&&Wn(o,null,i.height),o.curOp.forceUpdate=!0}return!0}),i}function Mr(e,t,n,r){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),cr(e),ur(e,n);var i=r?r(e):1;i!=e.height&&ei(e,i)}function Nr(e){e.parent=null,cr(e)}function Ar(e,t){if(e)for(;;){var n=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!n)break;e=e.slice(0,n.index)+e.slice(n.index+n[0].length);var r=n[1]?"bgClass":"textClass";null==t[r]?t[r]=n[2]:new RegExp("(?:^|s)"+n[2]+"(?:$|s)").test(t[r])||(t[r]+=" "+n[2])}return e}function Er(t,n){if(t.blankLine)return t.blankLine(n);if(t.innerMode){var r=e.innerMode(t,n);return r.mode.blankLine?r.mode.blankLine(r.state):void 0}}function Or(t,n,r,i){for(var o=0;10>o;o++){i&&(i[0]=e.innerMode(t,r).mode);var a=t.token(n,r);if(n.pos>n.start)return a}throw new Error("Mode "+t.name+" failed to advance stream.")}function Ir(e,t,n,r){function i(e){return{start:f.start,end:f.pos,string:f.current(),type:o||null,state:e?sa(a.mode,u):u}}var o,a=e.doc,l=a.mode;t=me(a,t);var s,c=Zr(a,t.line),u=je(e,t.line,n),f=new ma(c.text,e.options.tabSize);for(r&&(s=[]);(r||f.pos<t.ch)&&!f.eol();)f.start=f.pos,o=Or(l,f,u),r&&s.push(i(!0));return r?s:i()}function Pr(e,t,n,r,i,o,a){var l=n.flattenSpans;null==l&&(l=e.options.flattenSpans);var s,c=0,u=null,f=new ma(t,e.options.tabSize),h=e.options.addModeClass&&[null];for(""==t&&Ar(Er(n,r),o);!f.eol();){if(f.pos>e.options.maxHighlightLength?(l=!1,a&&Hr(e,t,r,f.pos),f.pos=t.length,s=null):s=Ar(Or(n,f,r,h),o),h){var d=h[0].name;d&&(s="m-"+(s?d+" "+s:d))}if(!l||u!=s){for(;c<f.start;)c=Math.min(f.start,c+5e4),i(c,u);u=s}f.start=f.pos}for(;c<f.pos;){var p=Math.min(f.pos,c+5e4);i(p,u),c=p}}function Rr(e,t,n,r){var i=[e.state.modeGen],o={};Pr(e,t.text,e.doc.mode,n,function(e,t){i.push(e,t)},o,r);for(var a=0;a<e.state.overlays.length;++a){var l=e.state.overlays[a],s=1,c=0;Pr(e,t.text,l.mode,!0,function(e,t){for(var n=s;e>c;){var r=i[s];r>e&&i.splice(s,1,e,i[s+1],r),s+=2,c=Math.min(e,r)}if(t)if(l.opaque)i.splice(n,s-n,e,"cm-overlay "+t),s=n+2;else for(;s>n;n+=2){var o=i[n+1];i[n+1]=(o?o+" ":"")+"cm-overlay "+t}},o)}return{styles:i,classes:o.bgClass||o.textClass?o:null}}function Dr(e,t,n){if(!t.styles||t.styles[0]!=e.state.modeGen){var r=je(e,ti(t)),i=Rr(e,t,t.text.length>e.options.maxHighlightLength?sa(e.doc.mode,r):r);t.stateAfter=r,t.styles=i.styles,i.classes?t.styleClasses=i.classes:t.styleClasses&&(t.styleClasses=null),n===e.doc.frontier&&e.doc.frontier++}return t.styles}function Hr(e,t,n,r){var i=e.doc.mode,o=new ma(t,e.options.tabSize);for(o.start=o.pos=r||0,""==t&&Er(i,n);!o.eol();)Or(i,o,n),o.start=o.pos}function Wr(e,t){if(!e||/^\s*$/.test(e))return null;var n=t.addModeClass?ka:wa;return n[e]||(n[e]=e.replace(/\S+/g,"cm-$&"))}function Br(e,t){var n=ji("span",null,null,wo?"padding-right: .1px":null),r={pre:ji("pre",[n],"CodeMirror-line"),content:n,col:0,pos:0,cm:e,splitSpaces:(xo||wo)&&e.getOption("lineWrapping")};t.measure={};for(var i=0;i<=(t.rest?t.rest.length:0);i++){var o,a=i?t.rest[i-1]:t.line;r.pos=0,r.addToken=Fr,Ji(e.display.measure)&&(o=ii(a))&&(r.addToken=jr(r.addToken,o)),r.map=[];var l=t!=e.display.externalMeasured&&ti(a);qr(a,r,Dr(e,a,l)),a.styleClasses&&(a.styleClasses.bgClass&&(r.bgClass=$i(a.styleClasses.bgClass,r.bgClass||"")),a.styleClasses.textClass&&(r.textClass=$i(a.styleClasses.textClass,r.textClass||""))),0==r.map.length&&r.map.push(0,0,r.content.appendChild(Zi(e.display.measure))),0==i?(t.measure.map=r.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(r.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(wo){var s=r.content.lastChild;(/\bcm-tab\b/.test(s.className)||s.querySelector&&s.querySelector(".cm-tab"))&&(r.content.className="cm-tab-wrap-hack")}return Pa(e,"renderLine",e,t.line,r.pre),r.pre.className&&(r.textClass=$i(r.pre.className,r.textClass||"")),r}function _r(e){var t=ji("span","•","cm-invalidchar");return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function Fr(e,t,n,r,i,o,a){if(t){var l=e.splitSpaces?t.replace(/ {3,}/g,zr):t,s=e.cm.state.specialChars,c=!1;if(s.test(t))for(var u=document.createDocumentFragment(),f=0;;){s.lastIndex=f;var h=s.exec(t),d=h?h.index-f:t.length-f;if(d){var p=document.createTextNode(l.slice(f,f+d));xo&&9>bo?u.appendChild(ji("span",[p])):u.appendChild(p),e.map.push(e.pos,e.pos+d,p),e.col+=d,e.pos+=d}if(!h)break;if(f+=d+1,"	"==h[0]){var m=e.cm.options.tabSize,g=m-e.col%m,p=u.appendChild(ji("span",Oi(g),"cm-tab"));p.setAttribute("role","presentation"),p.setAttribute("cm-text","	"),e.col+=g}else if("\r"==h[0]||"\n"==h[0]){var p=u.appendChild(ji("span","\r"==h[0]?"␍":"␤","cm-invalidchar"));p.setAttribute("cm-text",h[0]),e.col+=1}else{var p=e.cm.options.specialCharPlaceholder(h[0]);p.setAttribute("cm-text",h[0]),xo&&9>bo?u.appendChild(ji("span",[p])):u.appendChild(p),e.col+=1}e.map.push(e.pos,e.pos+1,p),e.pos++}else{e.col+=t.length;var u=document.createTextNode(l);e.map.push(e.pos,e.pos+t.length,u),xo&&9>bo&&(c=!0),e.pos+=t.length}if(n||r||i||c||a){var v=n||"";r&&(v+=r),i&&(v+=i);var y=ji("span",[u],v,a);return o&&(y.title=o),e.content.appendChild(y)}e.content.appendChild(u)}}function zr(e){for(var t=" ",n=0;n<e.length-2;++n)t+=n%2?" ":" ";return t+=" "}function jr(e,t){return function(n,r,i,o,a,l,s){i=i?i+" cm-force-border":"cm-force-border";for(var c=n.pos,u=c+r.length;;){for(var f=0;f<t.length;f++){var h=t[f];if(h.to>c&&h.from<=c)break}if(h.to>=u)return e(n,r,i,o,a,l,s);e(n,r.slice(0,h.to-c),i,o,null,l,s),o=null,r=r.slice(h.to-c),c=h.to}}}function Ur(e,t,n,r){var i=!r&&n.widgetNode;i&&e.map.push(e.pos,e.pos+t,i),!r&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",n.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t}function qr(e,t,n){var r=e.markedSpans,i=e.text,o=0;if(r)for(var a,l,s,c,u,f,h,d=i.length,p=0,m=1,g="",v=0;;){if(v==p){s=c=u=f=l="",h=null,v=1/0;for(var y,x=[],b=0;b<r.length;++b){var w=r[b],k=w.marker;"bookmark"==k.type&&w.from==p&&k.widgetNode?x.push(k):w.from<=p&&(null==w.to||w.to>p||k.collapsed&&w.to==p&&w.from==p)?(null!=w.to&&w.to!=p&&v>w.to&&(v=w.to,c=""),k.className&&(s+=" "+k.className),k.css&&(l=(l?l+";":"")+k.css),k.startStyle&&w.from==p&&(u+=" "+k.startStyle),k.endStyle&&w.to==v&&(y||(y=[])).push(k.endStyle,w.to),k.title&&!f&&(f=k.title),k.collapsed&&(!h||dr(h.marker,k)<0)&&(h=w)):w.from>p&&v>w.from&&(v=w.from)}if(y)for(var b=0;b<y.length;b+=2)y[b+1]==v&&(c+=" "+y[b]);if(!h||h.from==p)for(var b=0;b<x.length;++b)Ur(t,0,x[b]);if(h&&(h.from||0)==p){if(Ur(t,(null==h.to?d+1:h.to)-p,h.marker,null==h.from),null==h.to)return;h.to==p&&(h=!1)}}if(p>=d)break;for(var S=Math.min(d,v);;){if(g){var C=p+g.length;if(!h){var L=C>S?g.slice(0,S-p):g;t.addToken(t,L,a?a+s:s,u,p+L.length==v?c:"",f,l)}if(C>=S){g=g.slice(S-p),p=S;break}p=C,u=""}g=i.slice(o,o=n[m++]),a=Wr(n[m++],t.cm.options)}}else for(var m=1;m<n.length;m+=2)t.addToken(t,i.slice(o,o=n[m]),Wr(n[m+1],t.cm.options))}function Gr(e,t){return 0==t.from.ch&&0==t.to.ch&&""==Ii(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function Yr(e,t,n,r){function i(e){return n?n[e]:null}function o(e,n,i){Mr(e,n,i,r),Ci(e,"change",e,t)}function a(e,t){for(var n=e,o=[];t>n;++n)o.push(new ba(c[n],i(n),r));return o}var l=t.from,s=t.to,c=t.text,u=Zr(e,l.line),f=Zr(e,s.line),h=Ii(c),d=i(c.length-1),p=s.line-l.line;if(t.full)e.insert(0,a(0,c.length)),e.remove(c.length,e.size-c.length);else if(Gr(e,t)){var m=a(0,c.length-1);o(f,f.text,d),p&&e.remove(l.line,p),m.length&&e.insert(l.line,m)}else if(u==f)if(1==c.length)o(u,u.text.slice(0,l.ch)+h+u.text.slice(s.ch),d);else{var m=a(1,c.length-1);m.push(new ba(h+u.text.slice(s.ch),d,r)),o(u,u.text.slice(0,l.ch)+c[0],i(0)),e.insert(l.line+1,m)}else if(1==c.length)o(u,u.text.slice(0,l.ch)+c[0]+f.text.slice(s.ch),i(0)),e.remove(l.line+1,p);else{o(u,u.text.slice(0,l.ch)+c[0],i(0)),o(f,h+f.text.slice(s.ch),d);var m=a(1,c.length-1);p>1&&e.remove(l.line+1,p-1),e.insert(l.line+1,m)}Ci(e,"change",e,t)}function $r(e){this.lines=e,this.parent=null;for(var t=0,n=0;t<e.length;++t)e[t].parent=this,n+=e[t].height;this.height=n}function Vr(e){this.children=e;for(var t=0,n=0,r=0;r<e.length;++r){var i=e[r];t+=i.chunkSize(),n+=i.height,i.parent=this}this.size=t,this.height=n,this.parent=null}function Kr(e,t,n){function r(e,i,o){if(e.linked)for(var a=0;a<e.linked.length;++a){var l=e.linked[a];if(l.doc!=i){var s=o&&l.sharedHist;n&&!s||(t(l.doc,s),r(l.doc,e,s))}}}r(e,null,!0)}function Xr(e,t){if(t.cm)throw new Error("This document is already in use.");e.doc=t,t.cm=e,a(e),n(e),e.options.lineWrapping||h(e),e.options.mode=t.modeOption,Dt(e)}function Zr(e,t){if(t-=e.first,0>t||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.");for(var n=e;!n.lines;)for(var r=0;;++r){var i=n.children[r],o=i.chunkSize();if(o>t){n=i;break}t-=o}return n.lines[t]}function Jr(e,t,n){var r=[],i=t.line;return e.iter(t.line,n.line+1,function(e){var o=e.text;i==n.line&&(o=o.slice(0,n.ch)),i==t.line&&(o=o.slice(t.ch)),r.push(o),++i}),r}function Qr(e,t,n){var r=[];return e.iter(t,n,function(e){r.push(e.text)}),r}function ei(e,t){var n=t-e.height;if(n)for(var r=e;r;r=r.parent)r.height+=n}function ti(e){if(null==e.parent)return null;for(var t=e.parent,n=Pi(t.lines,e),r=t.parent;r;t=r,r=r.parent)for(var i=0;r.children[i]!=t;++i)n+=r.children[i].chunkSize();return n+t.first}function ni(e,t){var n=e.first;e:do{for(var r=0;r<e.children.length;++r){var i=e.children[r],o=i.height;if(o>t){e=i;continue e}t-=o,n+=i.chunkSize()}return n}while(!e.lines);for(var r=0;r<e.lines.length;++r){var a=e.lines[r],l=a.height;if(l>t)break;t-=l}return n+r}function ri(e){e=yr(e);for(var t=0,n=e.parent,r=0;r<n.lines.length;++r){var i=n.lines[r];if(i==e)break;t+=i.height}for(var o=n.parent;o;n=o,o=n.parent)for(var r=0;r<o.children.length;++r){var a=o.children[r];if(a==n)break;t+=a.height}return t}function ii(e){var t=e.order;return null==t&&(t=e.order=ll(e.text)),t}function oi(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function ai(e,t){var n={from:$(t.from),to:Qo(t),text:Jr(e,t.from,t.to)};return di(e,n,t.from.line,t.to.line+1),Kr(e,function(e){di(e,n,t.from.line,t.to.line+1)},!0),n}function li(e){for(;e.length;){var t=Ii(e);if(!t.ranges)break;e.pop()}}function si(e,t){return t?(li(e.done),Ii(e.done)):e.done.length&&!Ii(e.done).ranges?Ii(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),Ii(e.done)):void 0}function ci(e,t,n,r){var i=e.history;i.undone.length=0;var o,a=+new Date;if((i.lastOp==r||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&e.cm&&i.lastModTime>a-e.cm.options.historyEventDelay||"*"==t.origin.charAt(0)))&&(o=si(i,i.lastOp==r))){var l=Ii(o.changes);0==_o(t.from,t.to)&&0==_o(t.from,l.to)?l.to=Qo(t):o.changes.push(ai(e,t))}else{var s=Ii(i.done);for(s&&s.ranges||hi(e.sel,i.done),o={changes:[ai(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(n),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=a,i.lastOp=i.lastSelOp=r,i.lastOrigin=i.lastSelOrigin=t.origin,l||Pa(e,"historyAdded")}function ui(e,t,n,r){var i=t.charAt(0);return"*"==i||"+"==i&&n.ranges.length==r.ranges.length&&n.somethingSelected()==r.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function fi(e,t,n,r){var i=e.history,o=r&&r.origin;n==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||ui(e,o,Ii(i.done),t))?i.done[i.done.length-1]=t:hi(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=n,r&&r.clearRedo!==!1&&li(i.undone)}function hi(e,t){var n=Ii(t);n&&n.ranges&&n.equals(e)||t.push(e)}function di(e,t,n,r){var i=t["spans_"+e.id],o=0;e.iter(Math.max(e.first,n),Math.min(e.first+e.size,r),function(n){n.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=n.markedSpans),++o})}function pi(e){if(!e)return null;for(var t,n=0;n<e.length;++n)e[n].marker.explicitlyCleared?t||(t=e.slice(0,n)):t&&t.push(e[n]);return t?t.length?t:null:e}function mi(e,t){var n=t["spans_"+e.id];if(!n)return null;for(var r=0,i=[];r<t.text.length;++r)i.push(pi(n[r]));return i}function gi(e,t,n){for(var r=0,i=[];r<e.length;++r){var o=e[r];if(o.ranges)i.push(n?ue.prototype.deepCopy.call(o):o);else{var a=o.changes,l=[];i.push({changes:l});for(var s=0;s<a.length;++s){var c,u=a[s];if(l.push({from:u.from,to:u.to,text:u.text}),t)for(var f in u)(c=f.match(/^spans_(\d+)$/))&&Pi(t,Number(c[1]))>-1&&(Ii(l)[f]=u[f],delete u[f])}}}return i}function vi(e,t,n,r){n<e.line?e.line+=r:t<e.line&&(e.line=t,e.ch=0)}function yi(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i],a=!0;if(o.ranges){o.copied||(o=e[i]=o.deepCopy(),o.copied=!0);for(var l=0;l<o.ranges.length;l++)vi(o.ranges[l].anchor,t,n,r),vi(o.ranges[l].head,t,n,r)}else{for(var l=0;l<o.changes.length;++l){var s=o.changes[l];if(n<s.from.line)s.from=Bo(s.from.line+r,s.from.ch),s.to=Bo(s.to.line+r,s.to.ch);else if(t<=s.to.line){a=!1;break}}a||(e.splice(0,i+1),i=0)}}}function xi(e,t){var n=t.from.line,r=t.to.line,i=t.text.length-(r-n)-1;yi(e.done,n,r,i),yi(e.undone,n,r,i)}function bi(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function wi(e){return e.target||e.srcElement}function ki(e){var t=e.which;return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),Eo&&e.ctrlKey&&1==t&&(t=3),t}function Si(e,t,n){var r=e._handlers&&e._handlers[t];return n?r&&r.length>0?r.slice():Oa:r||Oa}function Ci(e,t){function n(e){return function(){e.apply(null,o)}}var r=Si(e,t,!1);if(r.length){var i,o=Array.prototype.slice.call(arguments,2);Go?i=Go.delayedCallbacks:Ra?i=Ra:(i=Ra=[],setTimeout(Li,0));for(var a=0;a<r.length;++a)i.push(n(r[a]))}}function Li(){var e=Ra;Ra=null;for(var t=0;t<e.length;++t)e[t]()}function Ti(e,t,n){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),Pa(e,n||t.type,e,t),bi(t)||t.codemirrorIgnore}function Mi(e){var t=e._handlers&&e._handlers.cursorActivity;if(t)for(var n=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),r=0;r<t.length;++r)-1==Pi(n,t[r])&&n.push(t[r])}function Ni(e,t){return Si(e,t).length>0}function Ai(e){e.prototype.on=function(e,t){Ea(this,e,t)},e.prototype.off=function(e,t){Ia(this,e,t)}}function Ei(){this.id=null}function Oi(e){for(;ja.length<=e;)ja.push(Ii(ja)+" ");return ja[e]}function Ii(e){return e[e.length-1]}function Pi(e,t){for(var n=0;n<e.length;++n)if(e[n]==t)return n;return-1}function Ri(e,t){for(var n=[],r=0;r<e.length;r++)n[r]=t(e[r],r);return n}function Di(){}function Hi(e,t){var n;return Object.create?n=Object.create(e):(Di.prototype=e,n=new Di),t&&Wi(t,n),n}function Wi(e,t,n){t||(t={});for(var r in e)!e.hasOwnProperty(r)||n===!1&&t.hasOwnProperty(r)||(t[r]=e[r]);return t}function Bi(e){var t=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,t)}}function _i(e,t){return t?t.source.indexOf("\\w")>-1&&Ya(e)?!0:t.test(e):Ya(e)}function Fi(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1;return!0}function zi(e){return e.charCodeAt(0)>=768&&$a.test(e)}function ji(e,t,n,r){var i=document.createElement(e);if(n&&(i.className=n),r&&(i.style.cssText=r),"string"==typeof t)i.appendChild(document.createTextNode(t));else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o]);return i}function Ui(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild);return e}function qi(e,t){return Ui(e).appendChild(t)}function Gi(){for(var e=document.activeElement;e&&e.root&&e.root.activeElement;)e=e.root.activeElement;return e}function Yi(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}function $i(e,t){for(var n=e.split(" "),r=0;r<n.length;r++)n[r]&&!Yi(n[r]).test(t)&&(t+=" "+n[r]);return t}function Vi(e){if(document.body.getElementsByClassName)for(var t=document.body.getElementsByClassName("CodeMirror"),n=0;n<t.length;n++){var r=t[n].CodeMirror;r&&e(r)}}function Ki(){Qa||(Xi(),Qa=!0)}function Xi(){var e;Ea(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,Vi(qt)},100))}),Ea(window,"blur",function(){Vi(yn)})}function Zi(e){if(null==Ka){var t=ji("span","​");qi(e,ji("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Ka=t.offsetWidth<=1&&t.offsetHeight>2&&!(xo&&8>bo))}var n=Ka?ji("span","​"):ji("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px");return n.setAttribute("cm-text",""),n}function Ji(e){if(null!=Xa)return Xa;var t=qi(e,document.createTextNode("AخA")),n=qa(t,0,1).getBoundingClientRect();if(!n||n.left==n.right)return!1;var r=qa(t,1,2).getBoundingClientRect();return Xa=r.right-n.right<3}function Qi(e){if(null!=il)return il;var t=qi(e,ji("span","x")),n=t.getBoundingClientRect(),r=qa(t,0,1).getBoundingClientRect();return il=Math.abs(n.left-r.left)>1}function eo(e,t,n,r){if(!e)return r(t,n,"ltr");for(var i=!1,o=0;o<e.length;++o){var a=e[o];(a.from<n&&a.to>t||t==n&&a.to==t)&&(r(Math.max(a.from,t),Math.min(a.to,n),1==a.level?"rtl":"ltr"),i=!0)}i||r(t,n,"ltr")}function to(e){return e.level%2?e.to:e.from}function no(e){return e.level%2?e.from:e.to}function ro(e){var t=ii(e);return t?to(t[0]):0}function io(e){var t=ii(e);return t?no(Ii(t)):e.text.length}function oo(e,t){var n=Zr(e.doc,t),r=yr(n);r!=n&&(t=ti(r));var i=ii(r),o=i?i[0].level%2?io(r):ro(r):0;return Bo(t,o)}function ao(e,t){for(var n,r=Zr(e.doc,t);n=gr(r);)r=n.find(1,!0).line,t=null;var i=ii(r),o=i?i[0].level%2?ro(r):io(r):r.text.length;return Bo(null==t?ti(r):t,o)}function lo(e,t){var n=oo(e,t.line),r=Zr(e.doc,n.line),i=ii(r);if(!i||0==i[0].level){var o=Math.max(0,r.text.search(/\S/)),a=t.line==n.line&&t.ch<=o&&t.ch;return Bo(n.line,a?0:o)}return n}function so(e,t,n){var r=e[0].level;return t==r?!0:n==r?!1:n>t}function co(e,t){al=null;for(var n,r=0;r<e.length;++r){var i=e[r];if(i.from<t&&i.to>t)return r;if(i.from==t||i.to==t){if(null!=n)return so(e,i.level,e[n].level)?(i.from!=i.to&&(al=n),r):(i.from!=i.to&&(al=r),n);n=r}}return n}function uo(e,t,n,r){if(!r)return t+n;do t+=n;while(t>0&&zi(e.text.charAt(t)));return t}function fo(e,t,n,r){var i=ii(e);if(!i)return ho(e,t,n,r);for(var o=co(i,t),a=i[o],l=uo(e,t,a.level%2?-n:n,r);;){if(l>a.from&&l<a.to)return l;if(l==a.from||l==a.to)return co(i,l)==o?l:(a=i[o+=n],n>0==a.level%2?a.to:a.from);if(a=i[o+=n],!a)return null;l=n>0==a.level%2?uo(e,a.to,-1,r):uo(e,a.from,1,r)}}function ho(e,t,n,r){var i=t+n;if(r)for(;i>0&&zi(e.text.charAt(i));)i+=n;return 0>i||i>e.text.length?null:i}var po=navigator.userAgent,mo=navigator.platform,go=/gecko\/\d/i.test(po),vo=/MSIE \d/.test(po),yo=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(po),xo=vo||yo,bo=xo&&(vo?document.documentMode||6:yo[1]),wo=/WebKit\//.test(po),ko=wo&&/Qt\/\d+\.\d+/.test(po),So=/Chrome\//.test(po),Co=/Opera\//.test(po),Lo=/Apple Computer/.test(navigator.vendor),To=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(po),Mo=/PhantomJS/.test(po),No=/AppleWebKit/.test(po)&&/Mobile\/\w+/.test(po),Ao=No||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(po),Eo=No||/Mac/.test(mo),Oo=/\bCrOS\b/.test(po),Io=/win/i.test(mo),Po=Co&&po.match(/Version\/(\d*\.\d*)/);Po&&(Po=Number(Po[1])),Po&&Po>=15&&(Co=!1,wo=!0);var Ro=Eo&&(ko||Co&&(null==Po||12.11>Po)),Do=go||xo&&bo>=9,Ho=!1,Wo=!1;m.prototype=Wi({update:function(e){var t=e.scrollWidth>e.clientWidth+1,n=e.scrollHeight>e.clientHeight+1,r=e.nativeBarWidth;if(n){this.vert.style.display="block",this.vert.style.bottom=t?r+"px":"0";var i=e.viewHeight-(t?r:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0";if(t){this.horiz.style.display="block",this.horiz.style.right=n?r+"px":"0",this.horiz.style.left=e.barLeft+"px";var o=e.viewWidth-e.barLeft-(n?r:0);this.horiz.firstChild.style.width=e.scrollWidth-e.clientWidth+o+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0";return!this.checkedZeroWidth&&e.clientHeight>0&&(0==r&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:n?r:0,bottom:t?r:0}},setScrollLeft:function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz)},setScrollTop:function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert)},zeroWidthHack:function(){var e=Eo&&!To?"12px":"18px";this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new Ei,this.disableVert=new Ei},enableZeroWidthBar:function(e,t){function n(){var r=e.getBoundingClientRect(),i=document.elementFromPoint(r.left+1,r.bottom-1);i!=e?e.style.pointerEvents="none":t.set(1e3,n)}e.style.pointerEvents="auto",t.set(1e3,n)},clear:function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert)}},m.prototype),g.prototype=Wi({update:function(){return{bottom:0,right:0}},setScrollLeft:function(){},setScrollTop:function(){},clear:function(){}},g.prototype),e.scrollbarModel={"native":m,"null":g},L.prototype.signal=function(e,t){Ni(e,t)&&this.events.push(arguments)},L.prototype.finish=function(){for(var e=0;e<this.events.length;e++)Pa.apply(null,this.events[e])};var Bo=e.Pos=function(e,t){return this instanceof Bo?(this.line=e,void(this.ch=t)):new Bo(e,t)},_o=e.cmpPos=function(e,t){return e.line-t.line||e.ch-t.ch},Fo=null;ne.prototype=Wi({init:function(e){function t(e){if(!Ti(r,e)){if(r.somethingSelected())Fo={lineWise:!1,text:r.getSelections()},n.inaccurateSelection&&(n.prevInput="",n.inaccurateSelection=!1,o.value=Fo.text.join("\n"),Ua(o));else{if(!r.options.lineWiseCopyCut)return;var t=ee(r);Fo={lineWise:!0,text:t.text},"cut"==e.type?r.setSelections(t.ranges,null,Wa):(n.prevInput="",o.value=t.text.join("\n"),Ua(o))}"cut"==e.type&&(r.state.cutIncoming=!0)}}var n=this,r=this.cm,i=this.wrapper=re(),o=this.textarea=i.firstChild;e.wrapper.insertBefore(i,e.wrapper.firstChild),No&&(o.style.width="0px"),Ea(o,"input",function(){xo&&bo>=9&&n.hasSelection&&(n.hasSelection=null),n.poll()}),Ea(o,"paste",function(e){Ti(r,e)||J(e,r)||(r.state.pasteIncoming=!0,n.fastPoll())}),Ea(o,"cut",t),Ea(o,"copy",t),Ea(e.scroller,"paste",function(t){Gt(e,t)||Ti(r,t)||(r.state.pasteIncoming=!0,n.focus())}),Ea(e.lineSpace,"selectstart",function(t){Gt(e,t)||Ma(t)}),Ea(o,"compositionstart",function(){var e=r.getCursor("from");n.composing&&n.composing.range.clear(),n.composing={start:e,range:r.markText(e,r.getCursor("to"),{className:"CodeMirror-composing"})}}),Ea(o,"compositionend",function(){n.composing&&(n.poll(),n.composing.range.clear(),n.composing=null)})},prepareSelection:function(){var e=this.cm,t=e.display,n=e.doc,r=De(e);if(e.options.moveInputWithCursor){var i=dt(e,n.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),a=t.lineDiv.getBoundingClientRect();r.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+a.top-o.top)),r.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+a.left-o.left))}return r},showSelection:function(e){var t=this.cm,n=t.display;qi(n.cursorDiv,e.cursors),qi(n.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},reset:function(e){if(!this.contextMenuPending){var t,n,r=this.cm,i=r.doc;if(r.somethingSelected()){this.prevInput="";var o=i.sel.primary();t=rl&&(o.to().line-o.from().line>100||(n=r.getSelection()).length>1e3);var a=t?"-":n||r.getSelection();this.textarea.value=a,r.state.focused&&Ua(this.textarea),xo&&bo>=9&&(this.hasSelection=a)}else e||(this.prevInput=this.textarea.value="",xo&&bo>=9&&(this.hasSelection=null));this.inaccurateSelection=t}},getField:function(){return this.textarea},supportsTouch:function(){return!1},focus:function(){if("nocursor"!=this.cm.options.readOnly&&(!Ao||Gi()!=this.textarea))try{this.textarea.focus()}catch(e){}},blur:function(){this.textarea.blur()},resetPosition:function(){this.wrapper.style.top=this.wrapper.style.left=0;
},receivedFocus:function(){this.slowPoll()},slowPoll:function(){var e=this;e.pollingFast||e.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},fastPoll:function(){function e(){var r=n.poll();r||t?(n.pollingFast=!1,n.slowPoll()):(t=!0,n.polling.set(60,e))}var t=!1,n=this;n.pollingFast=!0,n.polling.set(20,e)},poll:function(){var e=this.cm,t=this.textarea,n=this.prevInput;if(this.contextMenuPending||!e.state.focused||nl(t)&&!n&&!this.composing||e.isReadOnly()||e.options.disableInput||e.state.keySeq)return!1;var r=t.value;if(r==n&&!e.somethingSelected())return!1;if(xo&&bo>=9&&this.hasSelection===r||Eo&&/[\uf700-\uf7ff]/.test(r))return e.display.input.reset(),!1;if(e.doc.sel==e.display.selForContextMenu){var i=r.charCodeAt(0);if(8203!=i||n||(n="​"),8666==i)return this.reset(),this.cm.execCommand("undo")}for(var o=0,a=Math.min(n.length,r.length);a>o&&n.charCodeAt(o)==r.charCodeAt(o);)++o;var l=this;return At(e,function(){Z(e,r.slice(o),n.length-o,null,l.composing?"*compose":null),r.length>1e3||r.indexOf("\n")>-1?t.value=l.prevInput="":l.prevInput=r,l.composing&&(l.composing.range.clear(),l.composing.range=e.markText(l.composing.start,e.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},ensurePolled:function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},onKeyPress:function(){xo&&bo>=9&&(this.hasSelection=null),this.fastPoll()},onContextMenu:function(e){function t(){if(null!=a.selectionStart){var e=i.somethingSelected(),t="​"+(e?a.value:"");a.value="⇚",a.value=t,r.prevInput=e?"":"​",a.selectionStart=1,a.selectionEnd=t.length,o.selForContextMenu=i.doc.sel}}function n(){if(r.contextMenuPending=!1,r.wrapper.style.cssText=f,a.style.cssText=u,xo&&9>bo&&o.scrollbars.setScrollTop(o.scroller.scrollTop=s),null!=a.selectionStart){(!xo||xo&&9>bo)&&t();var e=0,n=function(){o.selForContextMenu==i.doc.sel&&0==a.selectionStart&&a.selectionEnd>0&&"​"==r.prevInput?Et(i,ua.selectAll)(i):e++<10?o.detectingSelectAll=setTimeout(n,500):o.input.reset()};o.detectingSelectAll=setTimeout(n,200)}}var r=this,i=r.cm,o=i.display,a=r.textarea,l=Yt(i,e),s=o.scroller.scrollTop;if(l&&!Co){var c=i.options.resetSelectionOnContextMenu;c&&-1==i.doc.sel.contains(l)&&Et(i,Te)(i.doc,de(l),Wa);var u=a.style.cssText,f=r.wrapper.style.cssText;r.wrapper.style.cssText="position: absolute";var h=r.wrapper.getBoundingClientRect();if(a.style.cssText="position: absolute; width: 30px; height: 30px; top: "+(e.clientY-h.top-5)+"px; left: "+(e.clientX-h.left-5)+"px; z-index: 1000; background: "+(xo?"rgba(255, 255, 255, .05)":"transparent")+"; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",wo)var d=window.scrollY;if(o.input.focus(),wo&&window.scrollTo(null,d),o.input.reset(),i.somethingSelected()||(a.value=r.prevInput=" "),r.contextMenuPending=!0,o.selForContextMenu=i.doc.sel,clearTimeout(o.detectingSelectAll),xo&&bo>=9&&t(),Do){Aa(e);var p=function(){Ia(window,"mouseup",p),setTimeout(n,20)};Ea(window,"mouseup",p)}else setTimeout(n,50)}},readOnlyChanged:function(e){e||this.reset()},setUneditable:Di,needsContentAttribute:!1},ne.prototype),ie.prototype=Wi({init:function(e){function t(e){if(!Ti(r,e)){if(r.somethingSelected())Fo={lineWise:!1,text:r.getSelections()},"cut"==e.type&&r.replaceSelection("",null,"cut");else{if(!r.options.lineWiseCopyCut)return;var t=ee(r);Fo={lineWise:!0,text:t.text},"cut"==e.type&&r.operation(function(){r.setSelections(t.ranges,0,Wa),r.replaceSelection("",null,"cut")})}if(e.clipboardData&&!No)e.preventDefault(),e.clipboardData.clearData(),e.clipboardData.setData("text/plain",Fo.text.join("\n"));else{var n=re(),i=n.firstChild;r.display.lineSpace.insertBefore(n,r.display.lineSpace.firstChild),i.value=Fo.text.join("\n");var o=document.activeElement;Ua(i),setTimeout(function(){r.display.lineSpace.removeChild(n),o.focus()},50)}}}var n=this,r=n.cm,i=n.div=e.lineDiv;te(i),Ea(i,"paste",function(e){Ti(r,e)||J(e,r)}),Ea(i,"compositionstart",function(e){var t=e.data;if(n.composing={sel:r.doc.sel,data:t,startData:t},t){var i=r.doc.sel.primary(),o=r.getLine(i.head.line),a=o.indexOf(t,Math.max(0,i.head.ch-t.length));a>-1&&a<=i.head.ch&&(n.composing.sel=de(Bo(i.head.line,a),Bo(i.head.line,a+t.length)))}}),Ea(i,"compositionupdate",function(e){n.composing.data=e.data}),Ea(i,"compositionend",function(e){var t=n.composing;t&&(e.data==t.startData||/\u200b/.test(e.data)||(t.data=e.data),setTimeout(function(){t.handled||n.applyComposition(t),n.composing==t&&(n.composing=null)},50))}),Ea(i,"touchstart",function(){n.forceCompositionEnd()}),Ea(i,"input",function(){n.composing||!r.isReadOnly()&&n.pollContent()||At(n.cm,function(){Dt(r)})}),Ea(i,"copy",t),Ea(i,"cut",t)},prepareSelection:function(){var e=De(this.cm,!1);return e.focus=this.cm.state.focused,e},showSelection:function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},showPrimarySelection:function(){var e=window.getSelection(),t=this.cm.doc.sel.primary(),n=le(this.cm,e.anchorNode,e.anchorOffset),r=le(this.cm,e.focusNode,e.focusOffset);if(!n||n.bad||!r||r.bad||0!=_o(K(n,r),t.from())||0!=_o(V(n,r),t.to())){var i=oe(this.cm,t.from()),o=oe(this.cm,t.to());if(i||o){var a=this.cm.display.view,l=e.rangeCount&&e.getRangeAt(0);if(i){if(!o){var s=a[a.length-1].measure,c=s.maps?s.maps[s.maps.length-1]:s.map;o={node:c[c.length-1],offset:c[c.length-2]-c[c.length-3]}}}else i={node:a[0].measure.map[2],offset:0};try{var u=qa(i.node,i.offset,o.offset,o.node)}catch(f){}u&&(!go&&this.cm.state.focused?(e.collapse(i.node,i.offset),u.collapsed||e.addRange(u)):(e.removeAllRanges(),e.addRange(u)),l&&null==e.anchorNode?e.addRange(l):go&&this.startGracePeriod()),this.rememberSelection()}}},startGracePeriod:function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){e.cm.curOp.selectionChanged=!0})},20)},showMultipleSelections:function(e){qi(this.cm.display.cursorDiv,e.cursors),qi(this.cm.display.selectionDiv,e.selection)},rememberSelection:function(){var e=window.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},selectionInEditor:function(){var e=window.getSelection();if(!e.rangeCount)return!1;var t=e.getRangeAt(0).commonAncestorContainer;return Va(this.div,t)},focus:function(){"nocursor"!=this.cm.options.readOnly&&this.div.focus()},blur:function(){this.div.blur()},getField:function(){return this.div},supportsTouch:function(){return!0},receivedFocus:function(){function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e))}var t=this;this.selectionInEditor()?this.pollSelection():At(this.cm,function(){t.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,e)},selectionChanged:function(){var e=window.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},pollSelection:function(){if(!this.composing&&!this.gracePeriod&&this.selectionChanged()){var e=window.getSelection(),t=this.cm;this.rememberSelection();var n=le(t,e.anchorNode,e.anchorOffset),r=le(t,e.focusNode,e.focusOffset);n&&r&&At(t,function(){Te(t.doc,de(n,r),Wa),(n.bad||r.bad)&&(t.curOp.selectionChanged=!0)})}},pollContent:function(){var e=this.cm,t=e.display,n=e.doc.sel.primary(),r=n.from(),i=n.to();if(r.line<t.viewFrom||i.line>t.viewTo-1)return!1;var o;if(r.line==t.viewFrom||0==(o=Bt(e,r.line)))var a=ti(t.view[0].line),l=t.view[0].node;else var a=ti(t.view[o].line),l=t.view[o-1].node.nextSibling;var s=Bt(e,i.line);if(s==t.view.length-1)var c=t.viewTo-1,u=t.lineDiv.lastChild;else var c=ti(t.view[s+1].line)-1,u=t.view[s+1].node.previousSibling;for(var f=e.doc.splitLines(ce(e,l,u,a,c)),h=Jr(e.doc,Bo(a,0),Bo(c,Zr(e.doc,c).text.length));f.length>1&&h.length>1;)if(Ii(f)==Ii(h))f.pop(),h.pop(),c--;else{if(f[0]!=h[0])break;f.shift(),h.shift(),a++}for(var d=0,p=0,m=f[0],g=h[0],v=Math.min(m.length,g.length);v>d&&m.charCodeAt(d)==g.charCodeAt(d);)++d;for(var y=Ii(f),x=Ii(h),b=Math.min(y.length-(1==f.length?d:0),x.length-(1==h.length?d:0));b>p&&y.charCodeAt(y.length-p-1)==x.charCodeAt(x.length-p-1);)++p;f[f.length-1]=y.slice(0,y.length-p),f[0]=f[0].slice(d);var w=Bo(a,d),k=Bo(c,h.length?Ii(h).length-p:0);return f.length>1||f[0]||_o(w,k)?(In(e.doc,f,w,k,"+input"),!0):void 0},ensurePolled:function(){this.forceCompositionEnd()},reset:function(){this.forceCompositionEnd()},forceCompositionEnd:function(){this.composing&&!this.composing.handled&&(this.applyComposition(this.composing),this.composing.handled=!0,this.div.blur(),this.div.focus())},applyComposition:function(e){this.cm.isReadOnly()?Et(this.cm,Dt)(this.cm):e.data&&e.data!=e.startData&&Et(this.cm,Z)(this.cm,e.data,0,e.sel)},setUneditable:function(e){e.contentEditable="false"},onKeyPress:function(e){e.preventDefault(),this.cm.isReadOnly()||Et(this.cm,Z)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0)},readOnlyChanged:function(e){this.div.contentEditable=String("nocursor"!=e)},onContextMenu:Di,resetPosition:Di,needsContentAttribute:!0},ie.prototype),e.inputStyles={textarea:ne,contenteditable:ie},ue.prototype={primary:function(){return this.ranges[this.primIndex]},equals:function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var t=0;t<this.ranges.length;t++){var n=this.ranges[t],r=e.ranges[t];if(0!=_o(n.anchor,r.anchor)||0!=_o(n.head,r.head))return!1}return!0},deepCopy:function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new fe($(this.ranges[t].anchor),$(this.ranges[t].head));return new ue(e,this.primIndex)},somethingSelected:function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1},contains:function(e,t){t||(t=e);for(var n=0;n<this.ranges.length;n++){var r=this.ranges[n];if(_o(t,r.from())>=0&&_o(e,r.to())<=0)return n}return-1}},fe.prototype={from:function(){return K(this.anchor,this.head)},to:function(){return V(this.anchor,this.head)},empty:function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch}};var zo,jo,Uo,qo={left:0,right:0,top:0,bottom:0},Go=null,Yo=0,$o=0,Vo=0,Ko=null;xo?Ko=-.53:go?Ko=15:So?Ko=-.7:Lo&&(Ko=-1/3);var Xo=function(e){var t=e.wheelDeltaX,n=e.wheelDeltaY;return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==n&&e.detail&&e.axis==e.VERTICAL_AXIS?n=e.detail:null==n&&(n=e.wheelDelta),{x:t,y:n}};e.wheelEventPixels=function(e){var t=Xo(e);return t.x*=Ko,t.y*=Ko,t};var Zo=new Ei,Jo=null,Qo=e.changeEnd=function(e){return e.text?Bo(e.from.line+e.text.length-1,Ii(e.text).length+(1==e.text.length?e.from.ch:0)):e.to};e.prototype={constructor:e,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,t){var n=this.options,r=n[e];n[e]==t&&"mode"!=e||(n[e]=t,ta.hasOwnProperty(e)&&Et(this,ta[e])(this,t,r))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"]($n(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,n=0;n<t.length;++n)if(t[n]==e||t[n].name==e)return t.splice(n,1),!0},addOverlay:Ot(function(t,n){var r=t.token?t:e.getMode(this.options,t);if(r.startState)throw new Error("Overlays may not be stateful.");this.state.overlays.push({mode:r,modeSpec:t,opaque:n&&n.opaque}),this.state.modeGen++,Dt(this)}),removeOverlay:Ot(function(e){for(var t=this.state.overlays,n=0;n<t.length;++n){var r=t[n].modeSpec;if(r==e||"string"==typeof e&&r.name==e)return t.splice(n,1),this.state.modeGen++,void Dt(this)}}),indentLine:Ot(function(e,t,n){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),ve(this.doc,e)&&Fn(this,e,t,n)}),indentSelection:Ot(function(e){for(var t=this.doc.sel.ranges,n=-1,r=0;r<t.length;r++){var i=t[r];if(i.empty())i.head.line>n&&(Fn(this,i.head.line,e,!0),n=i.head.line,r==this.doc.sel.primIndex&&Bn(this));else{var o=i.from(),a=i.to(),l=Math.max(n,o.line);n=Math.min(this.lastLine(),a.line-(a.ch?0:1))+1;for(var s=l;n>s;++s)Fn(this,s,e);var c=this.doc.sel.ranges;0==o.ch&&t.length==c.length&&c[r].from().ch>0&&ke(this.doc,r,new fe(o,c[r].to()),Wa)}}}),getTokenAt:function(e,t){return Ir(this,e,t)},getLineTokens:function(e,t){return Ir(this,Bo(e),t,!0)},getTokenTypeAt:function(e){e=me(this.doc,e);var t,n=Dr(this,Zr(this.doc,e.line)),r=0,i=(n.length-1)/2,o=e.ch;if(0==o)t=n[2];else for(;;){var a=r+i>>1;if((a?n[2*a-1]:0)>=o)i=a;else{if(!(n[2*a+1]<o)){t=n[2*a+2];break}r=a+1}}var l=t?t.indexOf("cm-overlay "):-1;return 0>l?t:0==l?null:t.slice(0,l-1)},getModeAt:function(t){var n=this.doc.mode;return n.innerMode?e.innerMode(n,this.getTokenAt(t).state).mode:n},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var n=[];if(!la.hasOwnProperty(t))return n;var r=la[t],i=this.getModeAt(e);if("string"==typeof i[t])r[i[t]]&&n.push(r[i[t]]);else if(i[t])for(var o=0;o<i[t].length;o++){var a=r[i[t][o]];a&&n.push(a)}else i.helperType&&r[i.helperType]?n.push(r[i.helperType]):r[i.name]&&n.push(r[i.name]);for(var o=0;o<r._global.length;o++){var l=r._global[o];l.pred(i,this)&&-1==Pi(n,l.val)&&n.push(l.val)}return n},getStateAfter:function(e,t){var n=this.doc;return e=pe(n,null==e?n.first+n.size-1:e),je(this,e+1,t)},cursorCoords:function(e,t){var n,r=this.doc.sel.primary();return n=null==e?r.head:"object"==typeof e?me(this.doc,e):e?r.from():r.to(),dt(this,n,t||"page")},charCoords:function(e,t){return ht(this,me(this.doc,e),t||"page")},coordsChar:function(e,t){return e=ft(this,e,t||"page"),gt(this,e.left,e.top)},lineAtHeight:function(e,t){return e=ft(this,{top:e,left:0},t||"page").top,ni(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t){var n,r=!1;if("number"==typeof e){var i=this.doc.first+this.doc.size-1;e<this.doc.first?e=this.doc.first:e>i&&(e=i,r=!0),n=Zr(this.doc,e)}else n=e;return ut(this,n,{top:0,left:0},t||"page").top+(r?this.doc.height-ri(n):0)},defaultTextHeight:function(){return yt(this.display)},defaultCharWidth:function(){return xt(this.display)},setGutterMarker:Ot(function(e,t,n){return zn(this.doc,e,"gutter",function(e){var r=e.gutterMarkers||(e.gutterMarkers={});return r[t]=n,!n&&Fi(r)&&(e.gutterMarkers=null),!0})}),clearGutter:Ot(function(e){var t=this,n=t.doc,r=n.first;n.iter(function(n){n.gutterMarkers&&n.gutterMarkers[e]&&(n.gutterMarkers[e]=null,Ht(t,r,"gutter"),Fi(n.gutterMarkers)&&(n.gutterMarkers=null)),++r})}),lineInfo:function(e){if("number"==typeof e){if(!ve(this.doc,e))return null;var t=e;if(e=Zr(this.doc,e),!e)return null}else{var t=ti(e);if(null==t)return null}return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,n,r,i){var o=this.display;e=dt(this,me(this.doc,e));var a=e.bottom,l=e.left;if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),o.sizer.appendChild(t),"over"==r)a=e.top;else if("above"==r||"near"==r){var s=Math.max(o.wrapper.clientHeight,this.doc.height),c=Math.max(o.sizer.clientWidth,o.lineSpace.clientWidth);("above"==r||e.bottom+t.offsetHeight>s)&&e.top>t.offsetHeight?a=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=s&&(a=e.bottom),l+t.offsetWidth>c&&(l=c-t.offsetWidth)}t.style.top=a+"px",t.style.left=t.style.right="","right"==i?(l=o.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?l=0:"middle"==i&&(l=(o.sizer.clientWidth-t.offsetWidth)/2),t.style.left=l+"px"),n&&Dn(this,l,a,l+t.offsetWidth,a+t.offsetHeight)},triggerOnKeyDown:Ot(hn),triggerOnKeyPress:Ot(mn),triggerOnKeyUp:pn,execCommand:function(e){return ua.hasOwnProperty(e)?ua[e].call(null,this):void 0},triggerElectric:Ot(function(e){Q(this,e)}),findPosH:function(e,t,n,r){var i=1;0>t&&(i=-1,t=-t);for(var o=0,a=me(this.doc,e);t>o&&(a=Un(this.doc,a,i,n,r),!a.hitSide);++o);return a},moveH:Ot(function(e,t){var n=this;n.extendSelectionsBy(function(r){return n.display.shift||n.doc.extend||r.empty()?Un(n.doc,r.head,e,t,n.options.rtlMoveVisually):0>e?r.from():r.to()},_a)}),deleteH:Ot(function(e,t){var n=this.doc.sel,r=this.doc;n.somethingSelected()?r.replaceSelection("",null,"+delete"):jn(this,function(n){var i=Un(r,n.head,e,t,!1);return 0>e?{from:i,to:n.head}:{from:n.head,to:i}})}),findPosV:function(e,t,n,r){var i=1,o=r;0>t&&(i=-1,t=-t);for(var a=0,l=me(this.doc,e);t>a;++a){var s=dt(this,l,"div");if(null==o?o=s.left:s.left=o,l=qn(this,s,i,n),l.hitSide)break}return l},moveV:Ot(function(e,t){var n=this,r=this.doc,i=[],o=!n.display.shift&&!r.extend&&r.sel.somethingSelected();if(r.extendSelectionsBy(function(a){if(o)return 0>e?a.from():a.to();var l=dt(n,a.head,"div");null!=a.goalColumn&&(l.left=a.goalColumn),i.push(l.left);var s=qn(n,l,e,t);return"page"==t&&a==r.sel.primary()&&Wn(n,null,ht(n,s,"div").top-l.top),s},_a),i.length)for(var a=0;a<r.sel.ranges.length;a++)r.sel.ranges[a].goalColumn=i[a]}),findWordAt:function(e){var t=this.doc,n=Zr(t,e.line).text,r=e.ch,i=e.ch;if(n){var o=this.getHelper(e,"wordChars");(e.xRel<0||i==n.length)&&r?--r:++i;for(var a=n.charAt(r),l=_i(a,o)?function(e){return _i(e,o)}:/\s/.test(a)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!_i(e)};r>0&&l(n.charAt(r-1));)--r;for(;i<n.length&&l(n.charAt(i));)++i}return new fe(Bo(e.line,r),Bo(e.line,i))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?Ja(this.display.cursorDiv,"CodeMirror-overwrite"):Za(this.display.cursorDiv,"CodeMirror-overwrite"),Pa(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==Gi()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:Ot(function(e,t){null==e&&null==t||_n(this),null!=e&&(this.curOp.scrollLeft=e),null!=t&&(this.curOp.scrollTop=t)}),getScrollInfo:function(){var e=this.display.scroller;return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Ye(this)-this.display.barHeight,width:e.scrollWidth-Ye(this)-this.display.barWidth,clientHeight:Ve(this),clientWidth:$e(this)}},scrollIntoView:Ot(function(e,t){if(null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:Bo(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line)_n(this),this.curOp.scrollToPos=e;else{var n=Hn(this,Math.min(e.from.left,e.to.left),Math.min(e.from.top,e.to.top)-e.margin,Math.max(e.from.right,e.to.right),Math.max(e.from.bottom,e.to.bottom)+e.margin);this.scrollTo(n.scrollLeft,n.scrollTop)}}),setSize:Ot(function(e,t){function n(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e}var r=this;null!=e&&(r.display.wrapper.style.width=n(e)),null!=t&&(r.display.wrapper.style.height=n(t)),r.options.lineWrapping&&at(this);var i=r.display.viewFrom;r.doc.iter(i,r.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){Ht(r,i,"widget");break}++i}),r.curOp.forceUpdate=!0,Pa(r,"refresh",this)}),operation:function(e){return At(this,e)},refresh:Ot(function(){var e=this.display.cachedTextHeight;Dt(this),this.curOp.forceUpdate=!0,lt(this),this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop),u(this),(null==e||Math.abs(e-yt(this.display))>.5)&&a(this),Pa(this,"refresh",this)}),swapDoc:Ot(function(e){var t=this.doc;return t.cm=null,Xr(this,e),lt(this),this.display.input.reset(),this.scrollTo(e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,Ci(this,"swapDoc",this,t),t}),getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Ai(e);var ea=e.defaults={},ta=e.optionHandlers={},na=e.Init={toString:function(){return"CodeMirror.Init"}};Gn("value","",function(e,t){e.setValue(t)},!0),Gn("mode",null,function(e,t){e.doc.modeOption=t,n(e)},!0),Gn("indentUnit",2,n,!0),Gn("indentWithTabs",!1),Gn("smartIndent",!0),Gn("tabSize",4,function(e){r(e),lt(e),Dt(e)},!0),Gn("lineSeparator",null,function(e,t){if(e.doc.lineSep=t,t){var n=[],r=e.doc.first;e.doc.iter(function(e){for(var i=0;;){var o=e.text.indexOf(t,i);if(-1==o)break;i=o+t.length,n.push(Bo(r,o))}r++});for(var i=n.length-1;i>=0;i--)In(e.doc,t,n[i],Bo(n[i].line,n[i].ch+t.length))}}),Gn("specialChars",/[\u0000-\u001f\u007f\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g,function(t,n,r){t.state.specialChars=new RegExp(n.source+(n.test("	")?"":"|	"),"g"),r!=e.Init&&t.refresh()}),Gn("specialCharPlaceholder",_r,function(e){e.refresh()},!0),Gn("electricChars",!0),Gn("inputStyle",Ao?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),Gn("rtlMoveVisually",!Io),Gn("wholeLineUpdateBefore",!0),Gn("theme","default",function(e){l(e),s(e)},!0),Gn("keyMap","default",function(t,n,r){var i=$n(n),o=r!=e.Init&&$n(r);o&&o.detach&&o.detach(t,i),i.attach&&i.attach(t,o||null)}),Gn("extraKeys",null),Gn("lineWrapping",!1,i,!0),Gn("gutters",[],function(e){d(e.options),s(e)},!0),Gn("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?C(e.display)+"px":"0",e.refresh()},!0),Gn("coverGutterNextToScrollbar",!1,function(e){y(e)},!0),Gn("scrollbarStyle","native",function(e){v(e),y(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)},!0),Gn("lineNumbers",!1,function(e){d(e.options),s(e)},!0),Gn("firstLineNumber",1,s,!0),Gn("lineNumberFormatter",function(e){return e},s,!0),Gn("showCursorWhenSelecting",!1,Re,!0),Gn("resetSelectionOnContextMenu",!0),Gn("lineWiseCopyCut",!0),Gn("readOnly",!1,function(e,t){"nocursor"==t?(yn(e),e.display.input.blur(),e.display.disabled=!0):e.display.disabled=!1,e.display.input.readOnlyChanged(t)}),Gn("disableInput",!1,function(e,t){t||e.display.input.reset()},!0),Gn("dragDrop",!0,Ut),Gn("allowDropFileTypes",null),Gn("cursorBlinkRate",530),Gn("cursorScrollMargin",0),Gn("cursorHeight",1,Re,!0),Gn("singleCursorHeightPerLine",!0,Re,!0),Gn("workTime",100),Gn("workDelay",100),Gn("flattenSpans",!0,r,!0),Gn("addModeClass",!1,r,!0),Gn("pollInterval",100),Gn("undoDepth",200,function(e,t){e.doc.history.undoDepth=t}),Gn("historyEventDelay",1250),Gn("viewportMargin",10,function(e){e.refresh()},!0),Gn("maxHighlightLength",1e4,r,!0),Gn("moveInputWithCursor",!0,function(e,t){t||e.display.input.resetPosition()}),Gn("tabindex",null,function(e,t){e.display.input.getField().tabIndex=t||""}),Gn("autofocus",null);var ra=e.modes={},ia=e.mimeModes={};e.defineMode=function(t,n){e.defaults.mode||"null"==t||(e.defaults.mode=t),arguments.length>2&&(n.dependencies=Array.prototype.slice.call(arguments,2)),ra[t]=n},e.defineMIME=function(e,t){ia[e]=t},e.resolveMode=function(t){if("string"==typeof t&&ia.hasOwnProperty(t))t=ia[t];else if(t&&"string"==typeof t.name&&ia.hasOwnProperty(t.name)){var n=ia[t.name];"string"==typeof n&&(n={name:n}),t=Hi(n,t),t.name=n.name}else if("string"==typeof t&&/^[\w\-]+\/[\w\-]+\+xml$/.test(t))return e.resolveMode("application/xml");return"string"==typeof t?{name:t}:t||{name:"null"}},e.getMode=function(t,n){var n=e.resolveMode(n),r=ra[n.name];if(!r)return e.getMode(t,"text/plain");var i=r(t,n);if(oa.hasOwnProperty(n.name)){var o=oa[n.name];for(var a in o)o.hasOwnProperty(a)&&(i.hasOwnProperty(a)&&(i["_"+a]=i[a]),i[a]=o[a])}if(i.name=n.name,n.helperType&&(i.helperType=n.helperType),n.modeProps)for(var a in n.modeProps)i[a]=n.modeProps[a];return i},e.defineMode("null",function(){return{token:function(e){e.skipToEnd()}}}),e.defineMIME("text/plain","null");var oa=e.modeExtensions={};e.extendMode=function(e,t){var n=oa.hasOwnProperty(e)?oa[e]:oa[e]={};Wi(t,n)},e.defineExtension=function(t,n){e.prototype[t]=n},e.defineDocExtension=function(e,t){Ca.prototype[e]=t},e.defineOption=Gn;var aa=[];e.defineInitHook=function(e){aa.push(e)};var la=e.helpers={};e.registerHelper=function(t,n,r){la.hasOwnProperty(t)||(la[t]=e[t]={_global:[]}),la[t][n]=r},e.registerGlobalHelper=function(t,n,r,i){e.registerHelper(t,n,i),la[t]._global.push({pred:r,val:i})};var sa=e.copyState=function(e,t){if(t===!0)return t;if(e.copyState)return e.copyState(t);var n={};for(var r in t){var i=t[r];i instanceof Array&&(i=i.concat([])),n[r]=i}return n},ca=e.startState=function(e,t,n){return e.startState?e.startState(t,n):!0};e.innerMode=function(e,t){for(;e.innerMode;){var n=e.innerMode(t);if(!n||n.mode==e)break;t=n.state,e=n.mode}return n||{mode:e,state:t}};var ua=e.commands={selectAll:function(e){e.setSelection(Bo(e.firstLine(),0),Bo(e.lastLine()),Wa)},singleSelection:function(e){e.setSelection(e.getCursor("anchor"),e.getCursor("head"),Wa)},killLine:function(e){jn(e,function(t){if(t.empty()){var n=Zr(e.doc,t.head.line).text.length;return t.head.ch==n&&t.head.line<e.lastLine()?{from:t.head,to:Bo(t.head.line+1,0)}:{from:t.head,to:Bo(t.head.line,n)}}return{from:t.from(),to:t.to()}})},deleteLine:function(e){jn(e,function(t){return{from:Bo(t.from().line,0),to:me(e.doc,Bo(t.to().line+1,0))}})},delLineLeft:function(e){jn(e,function(e){return{from:Bo(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(e){jn(e,function(t){var n=e.charCoords(t.head,"div").top+5,r=e.coordsChar({left:0,top:n},"div");return{from:r,to:t.from()}})},delWrappedLineRight:function(e){jn(e,function(t){var n=e.charCoords(t.head,"div").top+5,r=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:n},"div");return{from:t.from(),to:r}})},undo:function(e){e.undo()},redo:function(e){e.redo()},undoSelection:function(e){e.undoSelection()},redoSelection:function(e){e.redoSelection()},goDocStart:function(e){e.extendSelection(Bo(e.firstLine(),0))},goDocEnd:function(e){e.extendSelection(Bo(e.lastLine()))},goLineStart:function(e){e.extendSelectionsBy(function(t){return oo(e,t.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){e.extendSelectionsBy(function(t){return lo(e,t.head)},{origin:"+move",bias:1})},goLineEnd:function(e){e.extendSelectionsBy(function(t){return ao(e,t.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){e.extendSelectionsBy(function(t){var n=e.charCoords(t.head,"div").top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:n},"div")},_a)},goLineLeft:function(e){e.extendSelectionsBy(function(t){var n=e.charCoords(t.head,"div").top+5;return e.coordsChar({left:0,top:n},"div")},_a)},goLineLeftSmart:function(e){e.extendSelectionsBy(function(t){var n=e.charCoords(t.head,"div").top+5,r=e.coordsChar({left:0,top:n},"div");return r.ch<e.getLine(r.line).search(/\S/)?lo(e,t.head):r},_a)},goLineUp:function(e){e.moveV(-1,"line")},goLineDown:function(e){e.moveV(1,"line")},goPageUp:function(e){e.moveV(-1,"page")},goPageDown:function(e){e.moveV(1,"page")},goCharLeft:function(e){e.moveH(-1,"char")},goCharRight:function(e){e.moveH(1,"char")},goColumnLeft:function(e){e.moveH(-1,"column")},goColumnRight:function(e){e.moveH(1,"column")},goWordLeft:function(e){e.moveH(-1,"word")},goGroupRight:function(e){e.moveH(1,"group")},goGroupLeft:function(e){e.moveH(-1,"group")},goWordRight:function(e){e.moveH(1,"word")},delCharBefore:function(e){e.deleteH(-1,"char")},delCharAfter:function(e){e.deleteH(1,"char")},delWordBefore:function(e){e.deleteH(-1,"word")},delWordAfter:function(e){e.deleteH(1,"word")},delGroupBefore:function(e){e.deleteH(-1,"group")},delGroupAfter:function(e){e.deleteH(1,"group")},indentAuto:function(e){e.indentSelection("smart")},indentMore:function(e){e.indentSelection("add")},indentLess:function(e){e.indentSelection("subtract")},insertTab:function(e){e.replaceSelection("	")},insertSoftTab:function(e){for(var t=[],n=e.listSelections(),r=e.options.tabSize,i=0;i<n.length;i++){var o=n[i].from(),a=Fa(e.getLine(o.line),o.ch,r);t.push(Oi(r-a%r))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){At(e,function(){for(var t=e.listSelections(),n=[],r=0;r<t.length;r++){var i=t[r].head,o=Zr(e.doc,i.line).text;if(o)if(i.ch==o.length&&(i=new Bo(i.line,i.ch-1)),i.ch>0)i=new Bo(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),Bo(i.line,i.ch-2),i,"+transpose");else if(i.line>e.doc.first){var a=Zr(e.doc,i.line-1).text;a&&e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+a.charAt(a.length-1),Bo(i.line-1,a.length-1),Bo(i.line,1),"+transpose")}n.push(new fe(i,i))}e.setSelections(n)})},newlineAndIndent:function(e){At(e,function(){for(var t=e.listSelections().length,n=0;t>n;n++){var r=e.listSelections()[n];e.replaceRange(e.doc.lineSeparator(),r.anchor,r.head,"+input"),e.indentLine(r.from().line+1,null,!0)}Bn(e)})},openLine:function(e){e.replaceSelection("\n","start")},toggleOverwrite:function(e){e.toggleOverwrite()}},fa=e.keyMap={};fa.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},fa.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},fa.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},fa.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},fa["default"]=Eo?fa.macDefault:fa.pcDefault,e.normalizeKeyMap=function(e){var t={};for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];if(/^(name|fallthrough|(de|at)tach)$/.test(n))continue;if("..."==r){delete e[n];continue}for(var i=Ri(n.split(" "),Yn),o=0;o<i.length;o++){var a,l;o==i.length-1?(l=i.join(" "),a=r):(l=i.slice(0,o+1).join(" "),a="...");var s=t[l];if(s){if(s!=a)throw new Error("Inconsistent bindings for "+l)}else t[l]=a}delete e[n]}for(var c in t)e[c]=t[c];return e};var ha=e.lookupKey=function(e,t,n,r){t=$n(t);var i=t.call?t.call(e,r):t[e];if(i===!1)return"nothing";if("..."===i)return"multi";if(null!=i&&n(i))return"handled";if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return ha(e,t.fallthrough,n,r);for(var o=0;o<t.fallthrough.length;o++){var a=ha(e,t.fallthrough[o],n,r);
if(a)return a}}},da=e.isModifierKey=function(e){var t="string"==typeof e?e:ol[e.keyCode];return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t},pa=e.keyName=function(e,t){if(Co&&34==e.keyCode&&e["char"])return!1;var n=ol[e.keyCode],r=n;return null==r||e.altGraphKey?!1:(e.altKey&&"Alt"!=n&&(r="Alt-"+r),(Ro?e.metaKey:e.ctrlKey)&&"Ctrl"!=n&&(r="Ctrl-"+r),(Ro?e.ctrlKey:e.metaKey)&&"Cmd"!=n&&(r="Cmd-"+r),!t&&e.shiftKey&&"Shift"!=n&&(r="Shift-"+r),r)};e.fromTextArea=function(t,n){function r(){t.value=c.getValue()}if(n=n?Wi(n):{},n.value=t.value,!n.tabindex&&t.tabIndex&&(n.tabindex=t.tabIndex),!n.placeholder&&t.placeholder&&(n.placeholder=t.placeholder),null==n.autofocus){var i=Gi();n.autofocus=i==t||null!=t.getAttribute("autofocus")&&i==document.body}if(t.form&&(Ea(t.form,"submit",r),!n.leaveSubmitMethodAlone)){var o=t.form,a=o.submit;try{var l=o.submit=function(){r(),o.submit=a,o.submit(),o.submit=l}}catch(s){}}n.finishInit=function(e){e.save=r,e.getTextArea=function(){return t},e.toTextArea=function(){e.toTextArea=isNaN,r(),t.parentNode.removeChild(e.getWrapperElement()),t.style.display="",t.form&&(Ia(t.form,"submit",r),"function"==typeof t.form.submit&&(t.form.submit=a))}},t.style.display="none";var c=e(function(e){t.parentNode.insertBefore(e,t.nextSibling)},n);return c};var ma=e.StringStream=function(e,t){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0};ma.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return this.pos==this.lineStart},peek:function(){return this.string.charAt(this.pos)||void 0},next:function(){return this.pos<this.string.length?this.string.charAt(this.pos++):void 0},eat:function(e){var t=this.string.charAt(this.pos);if("string"==typeof e)var n=t==e;else var n=t&&(e.test?e.test(t):e(t));return n?(++this.pos,t):void 0},eatWhile:function(e){for(var t=this.pos;this.eat(e););return this.pos>t},eatSpace:function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e},skipToEnd:function(){this.pos=this.string.length},skipTo:function(e){var t=this.string.indexOf(e,this.pos);return t>-1?(this.pos=t,!0):void 0},backUp:function(e){this.pos-=e},column:function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Fa(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?Fa(this.string,this.lineStart,this.tabSize):0)},indentation:function(){return Fa(this.string,null,this.tabSize)-(this.lineStart?Fa(this.string,this.lineStart,this.tabSize):0)},match:function(e,t,n){if("string"!=typeof e){var r=this.string.slice(this.pos).match(e);return r&&r.index>0?null:(r&&t!==!1&&(this.pos+=r[0].length),r)}var i=function(e){return n?e.toLowerCase():e},o=this.string.substr(this.pos,e.length);return i(o)==i(e)?(t!==!1&&(this.pos+=e.length),!0):void 0},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(e,t){this.lineStart+=e;try{return t()}finally{this.lineStart-=e}}};var ga=0,va=e.TextMarker=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++ga};Ai(va),va.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,t=e&&!e.curOp;if(t&&bt(e),Ni(this,"clear")){var n=this.find();n&&Ci(this,"clear",n.from,n.to)}for(var r=null,i=null,o=0;o<this.lines.length;++o){var a=this.lines[o],l=er(a.markedSpans,this);e&&!this.collapsed?Ht(e,ti(a),"text"):e&&(null!=l.to&&(i=ti(a)),null!=l.from&&(r=ti(a))),a.markedSpans=tr(a.markedSpans,l),null==l.from&&this.collapsed&&!kr(this.doc,a)&&e&&ei(a,yt(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var o=0;o<this.lines.length;++o){var s=yr(this.lines[o]),c=f(s);c>e.display.maxLineLength&&(e.display.maxLine=s,e.display.maxLineLength=c,e.display.maxLineChanged=!0)}null!=r&&e&&this.collapsed&&Dt(e,r,i+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&Ae(e.doc)),e&&Ci(e,"markerCleared",e,this),t&&kt(e),this.parent&&this.parent.clear()}},va.prototype.find=function(e,t){null==e&&"bookmark"==this.type&&(e=1);for(var n,r,i=0;i<this.lines.length;++i){var o=this.lines[i],a=er(o.markedSpans,this);if(null!=a.from&&(n=Bo(t?o:ti(o),a.from),-1==e))return n;if(null!=a.to&&(r=Bo(t?o:ti(o),a.to),1==e))return r}return n&&{from:n,to:r}},va.prototype.changed=function(){var e=this.find(-1,!0),t=this,n=this.doc.cm;e&&n&&At(n,function(){var r=e.line,i=ti(e.line),o=Qe(n,i);if(o&&(ot(o),n.curOp.selectionChanged=n.curOp.forceUpdate=!0),n.curOp.updateMaxLine=!0,!kr(t.doc,r)&&null!=t.height){var a=t.height;t.height=null;var l=Lr(t)-a;l&&ei(r,r.height+l)}})},va.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;t.maybeHiddenMarkers&&-1!=Pi(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},va.prototype.detachLine=function(e){if(this.lines.splice(Pi(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}};var ga=0,ya=e.SharedTextMarker=function(e,t){this.markers=e,this.primary=t;for(var n=0;n<e.length;++n)e[n].parent=this};Ai(ya),ya.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();Ci(this,"clear")}},ya.prototype.find=function(e,t){return this.primary.find(e,t)};var xa=e.LineWidget=function(e,t,n){if(n)for(var r in n)n.hasOwnProperty(r)&&(this[r]=n[r]);this.doc=e,this.node=t};Ai(xa),xa.prototype.clear=function(){var e=this.doc.cm,t=this.line.widgets,n=this.line,r=ti(n);if(null!=r&&t){for(var i=0;i<t.length;++i)t[i]==this&&t.splice(i--,1);t.length||(n.widgets=null);var o=Lr(this);ei(n,Math.max(0,n.height-o)),e&&At(e,function(){Cr(e,n,-o),Ht(e,r,"widget")})}},xa.prototype.changed=function(){var e=this.height,t=this.doc.cm,n=this.line;this.height=null;var r=Lr(this)-e;r&&(ei(n,n.height+r),t&&At(t,function(){t.curOp.forceUpdate=!0,Cr(t,n,r)}))};var ba=e.Line=function(e,t,n){this.text=e,ur(this,t),this.height=n?n(this):1};Ai(ba),ba.prototype.lineNo=function(){return ti(this)};var wa={},ka={};$r.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var n=e,r=e+t;r>n;++n){var i=this.lines[n];this.height-=i.height,Nr(i),Ci(i,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,n){this.height+=n,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e));for(var r=0;r<t.length;++r)t[r].parent=this},iterN:function(e,t,n){for(var r=e+t;r>e;++e)if(n(this.lines[e]))return!0}},Vr.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){this.size-=t;for(var n=0;n<this.children.length;++n){var r=this.children[n],i=r.chunkSize();if(i>e){var o=Math.min(t,i-e),a=r.height;if(r.removeInner(e,o),this.height-=a-r.height,i==o&&(this.children.splice(n--,1),r.parent=null),0==(t-=o))break;e=0}else e-=i}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof $r))){var l=[];this.collapse(l),this.children=[new $r(l)],this.children[0].parent=this}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e)},insertInner:function(e,t,n){this.size+=t.length,this.height+=n;for(var r=0;r<this.children.length;++r){var i=this.children[r],o=i.chunkSize();if(o>=e){if(i.insertInner(e,t,n),i.lines&&i.lines.length>50){for(var a=i.lines.length%25+25,l=a;l<i.lines.length;){var s=new $r(i.lines.slice(l,l+=25));i.height-=s.height,this.children.splice(++r,0,s),s.parent=this}i.lines=i.lines.slice(0,a),this.maybeSpill()}break}e-=o}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var t=e.children.splice(e.children.length-5,5),n=new Vr(t);if(e.parent){e.size-=n.size,e.height-=n.height;var r=Pi(e.parent.children,e);e.parent.children.splice(r+1,0,n)}else{var i=new Vr(e.children);i.parent=e,e.children=[i,n],e=i}n.parent=e.parent}while(e.children.length>10);e.parent.maybeSpill()}},iterN:function(e,t,n){for(var r=0;r<this.children.length;++r){var i=this.children[r],o=i.chunkSize();if(o>e){var a=Math.min(t,o-e);if(i.iterN(e,a,n))return!0;if(0==(t-=a))break;e=0}else e-=o}}};var Sa=0,Ca=e.Doc=function(e,t,n,r){if(!(this instanceof Ca))return new Ca(e,t,n,r);null==n&&(n=0),Vr.call(this,[new $r([new ba("",null)])]),this.first=n,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.frontier=n;var i=Bo(n,0);this.sel=de(i),this.history=new oi(null),this.id=++Sa,this.modeOption=t,this.lineSep=r,this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),Yr(this,{from:i,to:i,text:e}),Te(this,de(i),Wa)};Ca.prototype=Hi(Vr.prototype,{constructor:Ca,iter:function(e,t,n){n?this.iterN(e-this.first,t-e,n):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var n=0,r=0;r<t.length;++r)n+=t[r].height;this.insertInner(e-this.first,t,n)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=Qr(this,this.first,this.first+this.size);return e===!1?t:t.join(e||this.lineSeparator())},setValue:It(function(e){var t=Bo(this.first,0),n=this.first+this.size-1;Tn(this,{from:t,to:Bo(n,Zr(this,n).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),Te(this,de(t))}),replaceRange:function(e,t,n,r){t=me(this,t),n=n?me(this,n):t,In(this,e,t,n,r)},getRange:function(e,t,n){var r=Jr(this,me(this,e),me(this,t));return n===!1?r:r.join(n||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e);return t&&t.text},getLineHandle:function(e){return ve(this,e)?Zr(this,e):void 0},getLineNumber:function(e){return ti(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=Zr(this,e)),yr(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return me(this,e)},getCursor:function(e){var t,n=this.sel.primary();return t=null==e||"head"==e?n.head:"anchor"==e?n.anchor:"end"==e||"to"==e||e===!1?n.to():n.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:It(function(e,t,n){Se(this,me(this,"number"==typeof e?Bo(e,t||0):e),null,n)}),setSelection:It(function(e,t,n){Se(this,me(this,e),me(this,t||e),n)}),extendSelection:It(function(e,t,n){be(this,me(this,e),t&&me(this,t),n)}),extendSelections:It(function(e,t){we(this,ye(this,e),t)}),extendSelectionsBy:It(function(e,t){var n=Ri(this.sel.ranges,e);we(this,ye(this,n),t)}),setSelections:It(function(e,t,n){if(e.length){for(var r=0,i=[];r<e.length;r++)i[r]=new fe(me(this,e[r].anchor),me(this,e[r].head));null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),Te(this,he(i,t),n)}}),addSelection:It(function(e,t,n){var r=this.sel.ranges.slice(0);r.push(new fe(me(this,e),me(this,t||e))),Te(this,he(r,r.length-1),n)}),getSelection:function(e){for(var t,n=this.sel.ranges,r=0;r<n.length;r++){var i=Jr(this,n[r].from(),n[r].to());t=t?t.concat(i):i}return e===!1?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=[],n=this.sel.ranges,r=0;r<n.length;r++){var i=Jr(this,n[r].from(),n[r].to());e!==!1&&(i=i.join(e||this.lineSeparator())),t[r]=i}return t},replaceSelection:function(e,t,n){for(var r=[],i=0;i<this.sel.ranges.length;i++)r[i]=e;this.replaceSelections(r,t,n||"+input")},replaceSelections:It(function(e,t,n){for(var r=[],i=this.sel,o=0;o<i.ranges.length;o++){var a=i.ranges[o];r[o]={from:a.from(),to:a.to(),text:this.splitLines(e[o]),origin:n}}for(var l=t&&"end"!=t&&Cn(this,r,t),o=r.length-1;o>=0;o--)Tn(this,r[o]);l?Le(this,l):this.cm&&Bn(this.cm)}),undo:It(function(){Nn(this,"undo")}),redo:It(function(){Nn(this,"redo")}),undoSelection:It(function(){Nn(this,"undo",!0)}),redoSelection:It(function(){Nn(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,n=0,r=0;r<e.done.length;r++)e.done[r].ranges||++t;for(var r=0;r<e.undone.length;r++)e.undone[r].ranges||++n;return{undo:t,redo:n}},clearHistory:function(){this.history=new oi(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:gi(this.history.done),undone:gi(this.history.undone)}},setHistory:function(e){var t=this.history=new oi(this.history.maxGeneration);t.done=gi(e.done.slice(0),null,!0),t.undone=gi(e.undone.slice(0),null,!0)},addLineClass:It(function(e,t,n){return zn(this,e,"gutter"==t?"gutter":"class",function(e){var r="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass";if(e[r]){if(Yi(n).test(e[r]))return!1;e[r]+=" "+n}else e[r]=n;return!0})}),removeLineClass:It(function(e,t,n){return zn(this,e,"gutter"==t?"gutter":"class",function(e){var r="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass",i=e[r];if(!i)return!1;if(null==n)e[r]=null;else{var o=i.match(Yi(n));if(!o)return!1;var a=o.index+o[0].length;e[r]=i.slice(0,o.index)+(o.index&&a!=i.length?" ":"")+i.slice(a)||null}return!0})}),addLineWidget:It(function(e,t,n){return Tr(this,e,t,n)}),removeLineWidget:function(e){e.clear()},markText:function(e,t,n){return Vn(this,me(this,e),me(this,t),n,n&&n.type||"range")},setBookmark:function(e,t){var n={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents};return e=me(this,e),Vn(this,e,e,n,"bookmark")},findMarksAt:function(e){e=me(this,e);var t=[],n=Zr(this,e.line).markedSpans;if(n)for(var r=0;r<n.length;++r){var i=n[r];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,n){e=me(this,e),t=me(this,t);var r=[],i=e.line;return this.iter(e.line,t.line+1,function(o){var a=o.markedSpans;if(a)for(var l=0;l<a.length;l++){var s=a[l];null!=s.to&&i==e.line&&e.ch>=s.to||null==s.from&&i!=e.line||null!=s.from&&i==t.line&&s.from>=t.ch||n&&!n(s.marker)||r.push(s.marker.parent||s.marker)}++i}),r},getAllMarks:function(){var e=[];return this.iter(function(t){var n=t.markedSpans;if(n)for(var r=0;r<n.length;++r)null!=n[r].from&&e.push(n[r].marker)}),e},posFromIndex:function(e){var t,n=this.first,r=this.lineSeparator().length;return this.iter(function(i){var o=i.text.length+r;return o>e?(t=e,!0):(e-=o,void++n)}),me(this,Bo(n,t))},indexFromPos:function(e){e=me(this,e);var t=e.ch;if(e.line<this.first||e.ch<0)return 0;var n=this.lineSeparator().length;return this.iter(this.first,e.line,function(e){t+=e.text.length+n}),t},copy:function(e){var t=new Ca(Qr(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep);return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={});var t=this.first,n=this.first+this.size;null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<n&&(n=e.to);var r=new Ca(Qr(this,t,n),e.mode||this.modeOption,t,this.lineSep);return e.sharedHist&&(r.history=this.history),(this.linked||(this.linked=[])).push({doc:r,sharedHist:e.sharedHist}),r.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],Zn(r,Xn(this)),r},unlinkDoc:function(t){if(t instanceof e&&(t=t.doc),this.linked)for(var n=0;n<this.linked.length;++n){var r=this.linked[n];if(r.doc==t){this.linked.splice(n,1),t.unlinkDoc(this),Jn(Xn(this));break}}if(t.history==this.history){var i=[t.id];Kr(t,function(e){i.push(e.id)},!0),t.history=new oi(null),t.history.done=gi(this.history.done,i),t.history.undone=gi(this.history.undone,i)}},iterLinkedDocs:function(e){Kr(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):tl(e)},lineSeparator:function(){return this.lineSep||"\n"}}),Ca.prototype.eachLine=Ca.prototype.iter;var La="iter insert remove copy getEditor constructor".split(" ");for(var Ta in Ca.prototype)Ca.prototype.hasOwnProperty(Ta)&&Pi(La,Ta)<0&&(e.prototype[Ta]=function(e){return function(){return e.apply(this.doc,arguments)}}(Ca.prototype[Ta]));Ai(Ca);var Ma=e.e_preventDefault=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},Na=e.e_stopPropagation=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},Aa=e.e_stop=function(e){Ma(e),Na(e)},Ea=e.on=function(e,t,n){if(e.addEventListener)e.addEventListener(t,n,!1);else if(e.attachEvent)e.attachEvent("on"+t,n);else{var r=e._handlers||(e._handlers={}),i=r[t]||(r[t]=[]);i.push(n)}},Oa=[],Ia=e.off=function(e,t,n){if(e.removeEventListener)e.removeEventListener(t,n,!1);else if(e.detachEvent)e.detachEvent("on"+t,n);else for(var r=Si(e,t,!1),i=0;i<r.length;++i)if(r[i]==n){r.splice(i,1);break}},Pa=e.signal=function(e,t){var n=Si(e,t,!0);if(n.length)for(var r=Array.prototype.slice.call(arguments,2),i=0;i<n.length;++i)n[i].apply(null,r)},Ra=null,Da=30,Ha=e.Pass={toString:function(){return"CodeMirror.Pass"}},Wa={scroll:!1},Ba={origin:"*mouse"},_a={origin:"+move"};Ei.prototype.set=function(e,t){clearTimeout(this.id),this.id=setTimeout(t,e)};var Fa=e.countColumn=function(e,t,n,r,i){null==t&&(t=e.search(/[^\s\u00a0]/),-1==t&&(t=e.length));for(var o=r||0,a=i||0;;){var l=e.indexOf("	",o);if(0>l||l>=t)return a+(t-o);a+=l-o,a+=n-a%n,o=l+1}},za=e.findColumn=function(e,t,n){for(var r=0,i=0;;){var o=e.indexOf("	",r);-1==o&&(o=e.length);var a=o-r;if(o==e.length||i+a>=t)return r+Math.min(a,t-i);if(i+=o-r,i+=n-i%n,r=o+1,i>=t)return r}},ja=[""],Ua=function(e){e.select()};No?Ua=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:xo&&(Ua=function(e){try{e.select()}catch(t){}});var qa,Ga=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,Ya=e.isWordChar=function(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||Ga.test(e))},$a=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;qa=document.createRange?function(e,t,n,r){var i=document.createRange();return i.setEnd(r||e,n),i.setStart(e,t),i}:function(e,t,n){var r=document.body.createTextRange();try{r.moveToElementText(e.parentNode)}catch(i){return r}return r.collapse(!0),r.moveEnd("character",n),r.moveStart("character",t),r};var Va=e.contains=function(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t);do if(11==t.nodeType&&(t=t.host),t==e)return!0;while(t=t.parentNode)};xo&&11>bo&&(Gi=function(){try{return document.activeElement}catch(e){return document.body}});var Ka,Xa,Za=e.rmClass=function(e,t){var n=e.className,r=Yi(t).exec(n);if(r){var i=n.slice(r.index+r[0].length);e.className=n.slice(0,r.index)+(i?r[1]+i:"")}},Ja=e.addClass=function(e,t){var n=e.className;Yi(t).test(n)||(e.className+=(n?" ":"")+t)},Qa=!1,el=function(){if(xo&&9>bo)return!1;var e=ji("div");return"draggable"in e||"dragDrop"in e}(),tl=e.splitLines=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,n=[],r=e.length;r>=t;){var i=e.indexOf("\n",t);-1==i&&(i=e.length);var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),a=o.indexOf("\r");-1!=a?(n.push(o.slice(0,a)),t+=a+1):(n.push(o),t=i+1)}return n}:function(e){return e.split(/\r\n?|\n/)},nl=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(t){return!1}}:function(e){try{var t=e.ownerDocument.selection.createRange()}catch(n){}return t&&t.parentElement()==e?0!=t.compareEndPoints("StartToEnd",t):!1},rl=function(){var e=ji("div");return"oncopy"in e?!0:(e.setAttribute("oncopy","return;"),"function"==typeof e.oncopy)}(),il=null,ol=e.keyNames={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"};!function(){for(var e=0;10>e;e++)ol[e+48]=ol[e+96]=String(e);for(var e=65;90>=e;e++)ol[e]=String.fromCharCode(e);for(var e=1;12>=e;e++)ol[e+111]=ol[e+63235]="F"+e}();var al,ll=function(){function e(e){return 247>=e?n.charAt(e):e>=1424&&1524>=e?"R":e>=1536&&1773>=e?r.charAt(e-1536):e>=1774&&2220>=e?"r":e>=8192&&8203>=e?"w":8204==e?"b":"L"}function t(e,t,n){this.level=e,this.from=t,this.to=n}var n="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",r="rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,a=/[LRr]/,l=/[Lb1n]/,s=/[1n]/,c="L";return function(n){if(!i.test(n))return!1;for(var r,u=n.length,f=[],h=0;u>h;++h)f.push(r=e(n.charCodeAt(h)));for(var h=0,d=c;u>h;++h){var r=f[h];"m"==r?f[h]=d:d=r}for(var h=0,p=c;u>h;++h){var r=f[h];"1"==r&&"r"==p?f[h]="n":a.test(r)&&(p=r,"r"==r&&(f[h]="R"))}for(var h=1,d=f[0];u-1>h;++h){var r=f[h];"+"==r&&"1"==d&&"1"==f[h+1]?f[h]="1":","!=r||d!=f[h+1]||"1"!=d&&"n"!=d||(f[h]=d),d=r}for(var h=0;u>h;++h){var r=f[h];if(","==r)f[h]="N";else if("%"==r){for(var m=h+1;u>m&&"%"==f[m];++m);for(var g=h&&"!"==f[h-1]||u>m&&"1"==f[m]?"1":"N",v=h;m>v;++v)f[v]=g;h=m-1}}for(var h=0,p=c;u>h;++h){var r=f[h];"L"==p&&"1"==r?f[h]="L":a.test(r)&&(p=r)}for(var h=0;u>h;++h)if(o.test(f[h])){for(var m=h+1;u>m&&o.test(f[m]);++m);for(var y="L"==(h?f[h-1]:c),x="L"==(u>m?f[m]:c),g=y||x?"L":"R",v=h;m>v;++v)f[v]=g;h=m-1}for(var b,w=[],h=0;u>h;)if(l.test(f[h])){var k=h;for(++h;u>h&&l.test(f[h]);++h);w.push(new t(0,k,h))}else{var S=h,C=w.length;for(++h;u>h&&"L"!=f[h];++h);for(var v=S;h>v;)if(s.test(f[v])){v>S&&w.splice(C,0,new t(1,S,v));var L=v;for(++v;h>v&&s.test(f[v]);++v);w.splice(C,0,new t(2,L,v)),S=v}else++v;h>S&&w.splice(C,0,new t(1,S,h))}return 1==w[0].level&&(b=n.match(/^\s+/))&&(w[0].from=b[0].length,w.unshift(new t(0,0,b[0].length))),1==Ii(w).level&&(b=n.match(/\s+$/))&&(Ii(w).to-=b[0].length,w.push(new t(0,u-b[0].length,u))),2==w[0].level&&w.unshift(new t(1,w[0].to,w[0].to)),w[0].level!=Ii(w).level&&w.push(new t(w[0].level,u,u)),w}}();return e.version="5.15.2",e})},{}],11:[function(t,n,r){!function(i){"object"==typeof r&&"object"==typeof n?i(t("../../lib/codemirror"),t("../markdown/markdown"),t("../../addon/mode/overlay")):"function"==typeof e&&e.amd?e(["../../lib/codemirror","../markdown/markdown","../../addon/mode/overlay"],i):i(CodeMirror)}(function(e){"use strict";var t=/^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;e.defineMode("gfm",function(n,r){function i(e){return e.code=!1,null}var o=0,a={startState:function(){return{code:!1,codeBlock:!1,ateSpace:!1}},copyState:function(e){return{code:e.code,codeBlock:e.codeBlock,ateSpace:e.ateSpace}},token:function(e,n){if(n.combineTokens=null,n.codeBlock)return e.match(/^```+/)?(n.codeBlock=!1,null):(e.skipToEnd(),null);if(e.sol()&&(n.code=!1),e.sol()&&e.match(/^```+/))return e.skipToEnd(),n.codeBlock=!0,null;if("`"===e.peek()){e.next();var i=e.pos;e.eatWhile("`");var a=1+e.pos-i;return n.code?a===o&&(n.code=!1):(o=a,n.code=!0),null}if(n.code)return e.next(),null;if(e.eatSpace())return n.ateSpace=!0,null;if((e.sol()||n.ateSpace)&&(n.ateSpace=!1,r.gitHubSpice!==!1)){if(e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?:[a-f0-9]{7,40}\b)/))return n.combineTokens=!0,"link";if(e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/))return n.combineTokens=!0,"link"}return e.match(t)&&"]("!=e.string.slice(e.start-2,e.start)&&(0==e.start||/\W/.test(e.string.charAt(e.start-1)))?(n.combineTokens=!0,"link"):(e.next(),null)},blankLine:i},l={underscoresBreakWords:!1,taskLists:!0,fencedCodeBlocks:"```",strikethrough:!0};for(var s in r)l[s]=r[s];return l.name="markdown",e.overlayMode(e.getMode(n,l),a)},"markdown"),e.defineMIME("text/x-gfm","gfm")})},{"../../addon/mode/overlay":8,"../../lib/codemirror":10,"../markdown/markdown":12}],12:[function(t,n,r){!function(i){"object"==typeof r&&"object"==typeof n?i(t("../../lib/codemirror"),t("../xml/xml"),t("../meta")):"function"==typeof e&&e.amd?e(["../../lib/codemirror","../xml/xml","../meta"],i):i(CodeMirror)}(function(e){"use strict";e.defineMode("markdown",function(t,n){function r(n){if(e.findModeByName){var r=e.findModeByName(n);r&&(n=r.mime||r.mimes[0])}var i=e.getMode(t,n);return"null"==i.name?null:i}function i(e,t,n){return t.f=t.inline=n,n(e,t)}function o(e,t,n){return t.f=t.block=n,n(e,t)}function a(e){return!e||!/\S/.test(e.string)}function l(e){return e.linkTitle=!1,e.em=!1,e.strong=!1,e.strikethrough=!1,e.quote=0,e.indentedCode=!1,k&&e.f==c&&(e.f=p,e.block=s),e.trailingSpace=0,e.trailingSpaceNewLine=!1,e.prevLine=e.thisLine,e.thisLine=null,null}function s(t,o){var l=t.sol(),s=o.list!==!1,c=o.indentedCode;o.indentedCode=!1,s&&(o.indentationDiff>=0?(o.indentationDiff<4&&(o.indentation-=o.indentationDiff),o.list=null):o.indentation>0?o.list=null:o.list=!1);var f=null;if(o.indentationDiff>=4)return t.skipToEnd(),c||a(o.prevLine)?(o.indentation-=4,o.indentedCode=!0,S.code):null;if(t.eatSpace())return null;if((f=t.match(A))&&f[1].length<=6)return o.header=f[1].length,n.highlightFormatting&&(o.formatting="header"),o.f=o.inline,h(o);if(!(a(o.prevLine)||o.quote||s||c)&&(f=t.match(E)))return o.header="="==f[0].charAt(0)?1:2,n.highlightFormatting&&(o.formatting="header"),o.f=o.inline,h(o);if(t.eat(">"))return o.quote=l?1:o.quote+1,n.highlightFormatting&&(o.formatting="quote"),t.eatSpace(),h(o);if("["===t.peek())return i(t,o,y);if(t.match(L,!0))return o.hr=!0,S.hr;if((a(o.prevLine)||s)&&(t.match(T,!1)||t.match(M,!1))){var d=null;for(t.match(T,!0)?d="ul":(t.match(M,!0),d="ol"),o.indentation=t.column()+t.current().length,o.list=!0;o.listStack&&t.column()<o.listStack[o.listStack.length-1];)o.listStack.pop();return o.listStack.push(o.indentation),n.taskLists&&t.match(N,!1)&&(o.taskList=!0),o.f=o.inline,n.highlightFormatting&&(o.formatting=["list","list-"+d]),h(o)}return n.fencedCodeBlocks&&(f=t.match(I,!0))?(o.fencedChars=f[1],o.localMode=r(f[2]),o.localMode&&(o.localState=e.startState(o.localMode)),o.f=o.block=u,n.highlightFormatting&&(o.formatting="code-block"),o.code=-1,h(o)):i(t,o,o.inline)}function c(t,n){var r=w.token(t,n.htmlState);if(!k){var i=e.innerMode(w,n.htmlState);("xml"==i.mode.name&&null===i.state.tagStart&&!i.state.context&&i.state.tokenize.isInText||n.md_inside&&t.current().indexOf(">")>-1)&&(n.f=p,n.block=s,n.htmlState=null)}return r}function u(e,t){return t.fencedChars&&e.match(t.fencedChars,!1)?(t.localMode=t.localState=null,t.f=t.block=f,null):t.localMode?t.localMode.token(e,t.localState):(e.skipToEnd(),S.code)}function f(e,t){e.match(t.fencedChars),t.block=s,t.f=p,t.fencedChars=null,n.highlightFormatting&&(t.formatting="code-block"),t.code=1;var r=h(t);return t.code=0,r}function h(e){var t=[];if(e.formatting){t.push(S.formatting),"string"==typeof e.formatting&&(e.formatting=[e.formatting]);for(var r=0;r<e.formatting.length;r++)t.push(S.formatting+"-"+e.formatting[r]),"header"===e.formatting[r]&&t.push(S.formatting+"-"+e.formatting[r]+"-"+e.header),"quote"===e.formatting[r]&&(!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=e.quote?t.push(S.formatting+"-"+e.formatting[r]+"-"+e.quote):t.push("error"))}if(e.taskOpen)return t.push("meta"),t.length?t.join(" "):null;if(e.taskClosed)return t.push("property"),t.length?t.join(" "):null;if(e.linkHref?t.push(S.linkHref,"url"):(e.strong&&t.push(S.strong),e.em&&t.push(S.em),e.strikethrough&&t.push(S.strikethrough),e.linkText&&t.push(S.linkText),e.code&&t.push(S.code)),e.header&&t.push(S.header,S.header+"-"+e.header),e.quote&&(t.push(S.quote),!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=e.quote?t.push(S.quote+"-"+e.quote):t.push(S.quote+"-"+n.maxBlockquoteDepth)),e.list!==!1){var i=(e.listStack.length-1)%3;i?1===i?t.push(S.list2):t.push(S.list3):t.push(S.list1)}return e.trailingSpaceNewLine?t.push("trailing-space-new-line"):e.trailingSpace&&t.push("trailing-space-"+(e.trailingSpace%2?"a":"b")),t.length?t.join(" "):null}function d(e,t){return e.match(O,!0)?h(t):void 0}function p(t,r){var i=r.text(t,r);if("undefined"!=typeof i)return i;if(r.list)return r.list=null,h(r);if(r.taskList){var a="x"!==t.match(N,!0)[1];return a?r.taskOpen=!0:r.taskClosed=!0,n.highlightFormatting&&(r.formatting="task"),r.taskList=!1,h(r)}if(r.taskOpen=!1,r.taskClosed=!1,r.header&&t.match(/^#+$/,!0))return n.highlightFormatting&&(r.formatting="header"),
h(r);var l=t.sol(),s=t.next();if(r.linkTitle){r.linkTitle=!1;var u=s;"("===s&&(u=")"),u=(u+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");var f="^\\s*(?:[^"+u+"\\\\]+|\\\\\\\\|\\\\.)"+u;if(t.match(new RegExp(f),!0))return S.linkHref}if("`"===s){var d=r.formatting;n.highlightFormatting&&(r.formatting="code"),t.eatWhile("`");var p=t.current().length;if(0==r.code)return r.code=p,h(r);if(p==r.code){var v=h(r);return r.code=0,v}return r.formatting=d,h(r)}if(r.code)return h(r);if("\\"===s&&(t.next(),n.highlightFormatting)){var y=h(r),x=S.formatting+"-escape";return y?y+" "+x:x}if("!"===s&&t.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return t.match(/\[[^\]]*\]/),r.inline=r.f=g,S.image;if("["===s&&t.match(/[^\]]*\](\(.*\)| ?\[.*?\])/,!1))return r.linkText=!0,n.highlightFormatting&&(r.formatting="link"),h(r);if("]"===s&&r.linkText&&t.match(/\(.*?\)| ?\[.*?\]/,!1)){n.highlightFormatting&&(r.formatting="link");var y=h(r);return r.linkText=!1,r.inline=r.f=g,y}if("<"===s&&t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1)){r.f=r.inline=m,n.highlightFormatting&&(r.formatting="link");var y=h(r);return y?y+=" ":y="",y+S.linkInline}if("<"===s&&t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1)){r.f=r.inline=m,n.highlightFormatting&&(r.formatting="link");var y=h(r);return y?y+=" ":y="",y+S.linkEmail}if("<"===s&&t.match(/^(!--|\w)/,!1)){var b=t.string.indexOf(">",t.pos);if(-1!=b){var k=t.string.substring(t.start,b);/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(k)&&(r.md_inside=!0)}return t.backUp(1),r.htmlState=e.startState(w),o(t,r,c)}if("<"===s&&t.match(/^\/\w*?>/))return r.md_inside=!1,"tag";var C=!1;if(!n.underscoresBreakWords&&"_"===s&&"_"!==t.peek()&&t.match(/(\w)/,!1)){var L=t.pos-2;if(L>=0){var T=t.string.charAt(L);"_"!==T&&T.match(/(\w)/,!1)&&(C=!0)}}if("*"===s||"_"===s&&!C)if(l&&" "===t.peek());else{if(r.strong===s&&t.eat(s)){n.highlightFormatting&&(r.formatting="strong");var v=h(r);return r.strong=!1,v}if(!r.strong&&t.eat(s))return r.strong=s,n.highlightFormatting&&(r.formatting="strong"),h(r);if(r.em===s){n.highlightFormatting&&(r.formatting="em");var v=h(r);return r.em=!1,v}if(!r.em)return r.em=s,n.highlightFormatting&&(r.formatting="em"),h(r)}else if(" "===s&&(t.eat("*")||t.eat("_"))){if(" "===t.peek())return h(r);t.backUp(1)}if(n.strikethrough)if("~"===s&&t.eatWhile(s)){if(r.strikethrough){n.highlightFormatting&&(r.formatting="strikethrough");var v=h(r);return r.strikethrough=!1,v}if(t.match(/^[^\s]/,!1))return r.strikethrough=!0,n.highlightFormatting&&(r.formatting="strikethrough"),h(r)}else if(" "===s&&t.match(/^~~/,!0)){if(" "===t.peek())return h(r);t.backUp(2)}return" "===s&&(t.match(/ +$/,!1)?r.trailingSpace++:r.trailingSpace&&(r.trailingSpaceNewLine=!0)),h(r)}function m(e,t){var r=e.next();if(">"===r){t.f=t.inline=p,n.highlightFormatting&&(t.formatting="link");var i=h(t);return i?i+=" ":i="",i+S.linkInline}return e.match(/^[^>]+/,!0),S.linkInline}function g(e,t){if(e.eatSpace())return null;var r=e.next();return"("===r||"["===r?(t.f=t.inline=v("("===r?")":"]",0),n.highlightFormatting&&(t.formatting="link-string"),t.linkHref=!0,h(t)):"error"}function v(e){return function(t,r){var i=t.next();if(i===e){r.f=r.inline=p,n.highlightFormatting&&(r.formatting="link-string");var o=h(r);return r.linkHref=!1,o}return t.match(P[e]),r.linkHref=!0,h(r)}}function y(e,t){return e.match(/^([^\]\\]|\\.)*\]:/,!1)?(t.f=x,e.next(),n.highlightFormatting&&(t.formatting="link"),t.linkText=!0,h(t)):i(e,t,p)}function x(e,t){if(e.match(/^\]:/,!0)){t.f=t.inline=b,n.highlightFormatting&&(t.formatting="link");var r=h(t);return t.linkText=!1,r}return e.match(/^([^\]\\]|\\.)+/,!0),S.linkText}function b(e,t){return e.eatSpace()?null:(e.match(/^[^\s]+/,!0),void 0===e.peek()?t.linkTitle=!0:e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,!0),t.f=t.inline=p,S.linkHref+" url")}var w=e.getMode(t,"text/html"),k="null"==w.name;void 0===n.highlightFormatting&&(n.highlightFormatting=!1),void 0===n.maxBlockquoteDepth&&(n.maxBlockquoteDepth=0),void 0===n.underscoresBreakWords&&(n.underscoresBreakWords=!0),void 0===n.taskLists&&(n.taskLists=!1),void 0===n.strikethrough&&(n.strikethrough=!1),void 0===n.tokenTypeOverrides&&(n.tokenTypeOverrides={});var S={header:"header",code:"comment",quote:"quote",list1:"variable-2",list2:"variable-3",list3:"keyword",hr:"hr",image:"tag",formatting:"formatting",linkInline:"link",linkEmail:"link",linkText:"link",linkHref:"string",em:"em",strong:"strong",strikethrough:"strikethrough"};for(var C in S)S.hasOwnProperty(C)&&n.tokenTypeOverrides[C]&&(S[C]=n.tokenTypeOverrides[C]);var L=/^([*\-_])(?:\s*\1){2,}\s*$/,T=/^[*\-+]\s+/,M=/^[0-9]+([.)])\s+/,N=/^\[(x| )\](?=\s)/,A=n.allowAtxHeaderWithoutSpace?/^(#+)/:/^(#+)(?: |$)/,E=/^ *(?:\={1,}|-{1,})\s*$/,O=/^[^#!\[\]*_\\<>` "'(~]+/,I=new RegExp("^("+(n.fencedCodeBlocks===!0?"~~~+|```+":n.fencedCodeBlocks)+")[ \\t]*([\\w+#-]*)"),P={")":/^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,"]":/^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\\]]|\\.)*\])*?(?=\])/},R={startState:function(){return{f:s,prevLine:null,thisLine:null,block:s,htmlState:null,indentation:0,inline:p,text:d,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,code:0,em:!1,strong:!1,header:0,hr:!1,taskList:!1,list:!1,listStack:[],quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1,fencedChars:null}},copyState:function(t){return{f:t.f,prevLine:t.prevLine,thisLine:t.thisLine,block:t.block,htmlState:t.htmlState&&e.copyState(w,t.htmlState),indentation:t.indentation,localMode:t.localMode,localState:t.localMode?e.copyState(t.localMode,t.localState):null,inline:t.inline,text:t.text,formatting:!1,linkTitle:t.linkTitle,code:t.code,em:t.em,strong:t.strong,strikethrough:t.strikethrough,header:t.header,hr:t.hr,taskList:t.taskList,list:t.list,listStack:t.listStack.slice(0),quote:t.quote,indentedCode:t.indentedCode,trailingSpace:t.trailingSpace,trailingSpaceNewLine:t.trailingSpaceNewLine,md_inside:t.md_inside,fencedChars:t.fencedChars}},token:function(e,t){if(t.formatting=!1,e!=t.thisLine){var n=t.header||t.hr;if(t.header=0,t.hr=!1,e.match(/^\s*$/,!0)||n){if(l(t),!n)return null;t.prevLine=null}t.prevLine=t.thisLine,t.thisLine=e,t.taskList=!1,t.trailingSpace=0,t.trailingSpaceNewLine=!1,t.f=t.block;var r=e.match(/^\s*/,!0)[0].replace(/\t/g,"    ").length;if(t.indentationDiff=Math.min(r-t.indentation,4),t.indentation=t.indentation+t.indentationDiff,r>0)return null}return t.f(e,t)},innerMode:function(e){return e.block==c?{state:e.htmlState,mode:w}:e.localState?{state:e.localState,mode:e.localMode}:{state:e,mode:R}},blankLine:l,getType:h,fold:"markdown"};return R},"xml"),e.defineMIME("text/x-markdown","markdown")})},{"../../lib/codemirror":10,"../meta":13,"../xml/xml":14}],13:[function(t,n,r){!function(i){"object"==typeof r&&"object"==typeof n?i(t("../lib/codemirror")):"function"==typeof e&&e.amd?e(["../lib/codemirror"],i):i(CodeMirror)}(function(e){"use strict";e.modeInfo=[{name:"APL",mime:"text/apl",mode:"apl",ext:["dyalog","apl"]},{name:"PGP",mimes:["application/pgp","application/pgp-keys","application/pgp-signature"],mode:"asciiarmor",ext:["pgp"]},{name:"ASN.1",mime:"text/x-ttcn-asn",mode:"asn.1",ext:["asn","asn1"]},{name:"Asterisk",mime:"text/x-asterisk",mode:"asterisk",file:/^extensions\.conf$/i},{name:"Brainfuck",mime:"text/x-brainfuck",mode:"brainfuck",ext:["b","bf"]},{name:"C",mime:"text/x-csrc",mode:"clike",ext:["c","h"]},{name:"C++",mime:"text/x-c++src",mode:"clike",ext:["cpp","c++","cc","cxx","hpp","h++","hh","hxx"],alias:["cpp"]},{name:"Cobol",mime:"text/x-cobol",mode:"cobol",ext:["cob","cpy"]},{name:"C#",mime:"text/x-csharp",mode:"clike",ext:["cs"],alias:["csharp"]},{name:"Clojure",mime:"text/x-clojure",mode:"clojure",ext:["clj","cljc","cljx"]},{name:"ClojureScript",mime:"text/x-clojurescript",mode:"clojure",ext:["cljs"]},{name:"Closure Stylesheets (GSS)",mime:"text/x-gss",mode:"css",ext:["gss"]},{name:"CMake",mime:"text/x-cmake",mode:"cmake",ext:["cmake","cmake.in"],file:/^CMakeLists.txt$/},{name:"CoffeeScript",mime:"text/x-coffeescript",mode:"coffeescript",ext:["coffee"],alias:["coffee","coffee-script"]},{name:"Common Lisp",mime:"text/x-common-lisp",mode:"commonlisp",ext:["cl","lisp","el"],alias:["lisp"]},{name:"Cypher",mime:"application/x-cypher-query",mode:"cypher",ext:["cyp","cypher"]},{name:"Cython",mime:"text/x-cython",mode:"python",ext:["pyx","pxd","pxi"]},{name:"Crystal",mime:"text/x-crystal",mode:"crystal",ext:["cr"]},{name:"CSS",mime:"text/css",mode:"css",ext:["css"]},{name:"CQL",mime:"text/x-cassandra",mode:"sql",ext:["cql"]},{name:"D",mime:"text/x-d",mode:"d",ext:["d"]},{name:"Dart",mimes:["application/dart","text/x-dart"],mode:"dart",ext:["dart"]},{name:"diff",mime:"text/x-diff",mode:"diff",ext:["diff","patch"]},{name:"Django",mime:"text/x-django",mode:"django"},{name:"Dockerfile",mime:"text/x-dockerfile",mode:"dockerfile",file:/^Dockerfile$/},{name:"DTD",mime:"application/xml-dtd",mode:"dtd",ext:["dtd"]},{name:"Dylan",mime:"text/x-dylan",mode:"dylan",ext:["dylan","dyl","intr"]},{name:"EBNF",mime:"text/x-ebnf",mode:"ebnf"},{name:"ECL",mime:"text/x-ecl",mode:"ecl",ext:["ecl"]},{name:"edn",mime:"application/edn",mode:"clojure",ext:["edn"]},{name:"Eiffel",mime:"text/x-eiffel",mode:"eiffel",ext:["e"]},{name:"Elm",mime:"text/x-elm",mode:"elm",ext:["elm"]},{name:"Embedded Javascript",mime:"application/x-ejs",mode:"htmlembedded",ext:["ejs"]},{name:"Embedded Ruby",mime:"application/x-erb",mode:"htmlembedded",ext:["erb"]},{name:"Erlang",mime:"text/x-erlang",mode:"erlang",ext:["erl"]},{name:"Factor",mime:"text/x-factor",mode:"factor",ext:["factor"]},{name:"FCL",mime:"text/x-fcl",mode:"fcl"},{name:"Forth",mime:"text/x-forth",mode:"forth",ext:["forth","fth","4th"]},{name:"Fortran",mime:"text/x-fortran",mode:"fortran",ext:["f","for","f77","f90"]},{name:"F#",mime:"text/x-fsharp",mode:"mllike",ext:["fs"],alias:["fsharp"]},{name:"Gas",mime:"text/x-gas",mode:"gas",ext:["s"]},{name:"Gherkin",mime:"text/x-feature",mode:"gherkin",ext:["feature"]},{name:"GitHub Flavored Markdown",mime:"text/x-gfm",mode:"gfm",file:/^(readme|contributing|history).md$/i},{name:"Go",mime:"text/x-go",mode:"go",ext:["go"]},{name:"Groovy",mime:"text/x-groovy",mode:"groovy",ext:["groovy","gradle"]},{name:"HAML",mime:"text/x-haml",mode:"haml",ext:["haml"]},{name:"Haskell",mime:"text/x-haskell",mode:"haskell",ext:["hs"]},{name:"Haskell (Literate)",mime:"text/x-literate-haskell",mode:"haskell-literate",ext:["lhs"]},{name:"Haxe",mime:"text/x-haxe",mode:"haxe",ext:["hx"]},{name:"HXML",mime:"text/x-hxml",mode:"haxe",ext:["hxml"]},{name:"ASP.NET",mime:"application/x-aspx",mode:"htmlembedded",ext:["aspx"],alias:["asp","aspx"]},{name:"HTML",mime:"text/html",mode:"htmlmixed",ext:["html","htm"],alias:["xhtml"]},{name:"HTTP",mime:"message/http",mode:"http"},{name:"IDL",mime:"text/x-idl",mode:"idl",ext:["pro"]},{name:"Jade",mime:"text/x-jade",mode:"jade",ext:["jade"]},{name:"Java",mime:"text/x-java",mode:"clike",ext:["java"]},{name:"Java Server Pages",mime:"application/x-jsp",mode:"htmlembedded",ext:["jsp"],alias:["jsp"]},{name:"JavaScript",mimes:["text/javascript","text/ecmascript","application/javascript","application/x-javascript","application/ecmascript"],mode:"javascript",ext:["js"],alias:["ecmascript","js","node"]},{name:"JSON",mimes:["application/json","application/x-json"],mode:"javascript",ext:["json","map"],alias:["json5"]},{name:"JSON-LD",mime:"application/ld+json",mode:"javascript",ext:["jsonld"],alias:["jsonld"]},{name:"JSX",mime:"text/jsx",mode:"jsx",ext:["jsx"]},{name:"Jinja2",mime:"null",mode:"jinja2"},{name:"Julia",mime:"text/x-julia",mode:"julia",ext:["jl"]},{name:"Kotlin",mime:"text/x-kotlin",mode:"clike",ext:["kt"]},{name:"LESS",mime:"text/x-less",mode:"css",ext:["less"]},{name:"LiveScript",mime:"text/x-livescript",mode:"livescript",ext:["ls"],alias:["ls"]},{name:"Lua",mime:"text/x-lua",mode:"lua",ext:["lua"]},{name:"Markdown",mime:"text/x-markdown",mode:"markdown",ext:["markdown","md","mkd"]},{name:"mIRC",mime:"text/mirc",mode:"mirc"},{name:"MariaDB SQL",mime:"text/x-mariadb",mode:"sql"},{name:"Mathematica",mime:"text/x-mathematica",mode:"mathematica",ext:["m","nb"]},{name:"Modelica",mime:"text/x-modelica",mode:"modelica",ext:["mo"]},{name:"MUMPS",mime:"text/x-mumps",mode:"mumps",ext:["mps"]},{name:"MS SQL",mime:"text/x-mssql",mode:"sql"},{name:"mbox",mime:"application/mbox",mode:"mbox",ext:["mbox"]},{name:"MySQL",mime:"text/x-mysql",mode:"sql"},{name:"Nginx",mime:"text/x-nginx-conf",mode:"nginx",file:/nginx.*\.conf$/i},{name:"NSIS",mime:"text/x-nsis",mode:"nsis",ext:["nsh","nsi"]},{name:"NTriples",mime:"text/n-triples",mode:"ntriples",ext:["nt"]},{name:"Objective C",mime:"text/x-objectivec",mode:"clike",ext:["m","mm"],alias:["objective-c","objc"]},{name:"OCaml",mime:"text/x-ocaml",mode:"mllike",ext:["ml","mli","mll","mly"]},{name:"Octave",mime:"text/x-octave",mode:"octave",ext:["m"]},{name:"Oz",mime:"text/x-oz",mode:"oz",ext:["oz"]},{name:"Pascal",mime:"text/x-pascal",mode:"pascal",ext:["p","pas"]},{name:"PEG.js",mime:"null",mode:"pegjs",ext:["jsonld"]},{name:"Perl",mime:"text/x-perl",mode:"perl",ext:["pl","pm"]},{name:"PHP",mime:"application/x-httpd-php",mode:"php",ext:["php","php3","php4","php5","phtml"]},{name:"Pig",mime:"text/x-pig",mode:"pig",ext:["pig"]},{name:"Plain Text",mime:"text/plain",mode:"null",ext:["txt","text","conf","def","list","log"]},{name:"PLSQL",mime:"text/x-plsql",mode:"sql",ext:["pls"]},{name:"PowerShell",mime:"application/x-powershell",mode:"powershell",ext:["ps1","psd1","psm1"]},{name:"Properties files",mime:"text/x-properties",mode:"properties",ext:["properties","ini","in"],alias:["ini","properties"]},{name:"ProtoBuf",mime:"text/x-protobuf",mode:"protobuf",ext:["proto"]},{name:"Python",mime:"text/x-python",mode:"python",ext:["BUILD","bzl","py","pyw"],file:/^(BUCK|BUILD)$/},{name:"Puppet",mime:"text/x-puppet",mode:"puppet",ext:["pp"]},{name:"Q",mime:"text/x-q",mode:"q",ext:["q"]},{name:"R",mime:"text/x-rsrc",mode:"r",ext:["r"],alias:["rscript"]},{name:"reStructuredText",mime:"text/x-rst",mode:"rst",ext:["rst"],alias:["rst"]},{name:"RPM Changes",mime:"text/x-rpm-changes",mode:"rpm"},{name:"RPM Spec",mime:"text/x-rpm-spec",mode:"rpm",ext:["spec"]},{name:"Ruby",mime:"text/x-ruby",mode:"ruby",ext:["rb"],alias:["jruby","macruby","rake","rb","rbx"]},{name:"Rust",mime:"text/x-rustsrc",mode:"rust",ext:["rs"]},{name:"SAS",mime:"text/x-sas",mode:"sas",ext:["sas"]},{name:"Sass",mime:"text/x-sass",mode:"sass",ext:["sass"]},{name:"Scala",mime:"text/x-scala",mode:"clike",ext:["scala"]},{name:"Scheme",mime:"text/x-scheme",mode:"scheme",ext:["scm","ss"]},{name:"SCSS",mime:"text/x-scss",mode:"css",ext:["scss"]},{name:"Shell",mime:"text/x-sh",mode:"shell",ext:["sh","ksh","bash"],alias:["bash","sh","zsh"],file:/^PKGBUILD$/},{name:"Sieve",mime:"application/sieve",mode:"sieve",ext:["siv","sieve"]},{name:"Slim",mimes:["text/x-slim","application/x-slim"],mode:"slim",ext:["slim"]},{name:"Smalltalk",mime:"text/x-stsrc",mode:"smalltalk",ext:["st"]},{name:"Smarty",mime:"text/x-smarty",mode:"smarty",ext:["tpl"]},{name:"Solr",mime:"text/x-solr",mode:"solr"},{name:"Soy",mime:"text/x-soy",mode:"soy",ext:["soy"],alias:["closure template"]},{name:"SPARQL",mime:"application/sparql-query",mode:"sparql",ext:["rq","sparql"],alias:["sparul"]},{name:"Spreadsheet",mime:"text/x-spreadsheet",mode:"spreadsheet",alias:["excel","formula"]},{name:"SQL",mime:"text/x-sql",mode:"sql",ext:["sql"]},{name:"Squirrel",mime:"text/x-squirrel",mode:"clike",ext:["nut"]},{name:"Swift",mime:"text/x-swift",mode:"swift",ext:["swift"]},{name:"sTeX",mime:"text/x-stex",mode:"stex"},{name:"LaTeX",mime:"text/x-latex",mode:"stex",ext:["text","ltx"],alias:["tex"]},{name:"SystemVerilog",mime:"text/x-systemverilog",mode:"verilog",ext:["v"]},{name:"Tcl",mime:"text/x-tcl",mode:"tcl",ext:["tcl"]},{name:"Textile",mime:"text/x-textile",mode:"textile",ext:["textile"]},{name:"TiddlyWiki ",mime:"text/x-tiddlywiki",mode:"tiddlywiki"},{name:"Tiki wiki",mime:"text/tiki",mode:"tiki"},{name:"TOML",mime:"text/x-toml",mode:"toml",ext:["toml"]},{name:"Tornado",mime:"text/x-tornado",mode:"tornado"},{name:"troff",mime:"text/troff",mode:"troff",ext:["1","2","3","4","5","6","7","8","9"]},{name:"TTCN",mime:"text/x-ttcn",mode:"ttcn",ext:["ttcn","ttcn3","ttcnpp"]},{name:"TTCN_CFG",mime:"text/x-ttcn-cfg",mode:"ttcn-cfg",ext:["cfg"]},{name:"Turtle",mime:"text/turtle",mode:"turtle",ext:["ttl"]},{name:"TypeScript",mime:"application/typescript",mode:"javascript",ext:["ts"],alias:["ts"]},{name:"Twig",mime:"text/x-twig",mode:"twig"},{name:"Web IDL",mime:"text/x-webidl",mode:"webidl",ext:["webidl"]},{name:"VB.NET",mime:"text/x-vb",mode:"vb",ext:["vb"]},{name:"VBScript",mime:"text/vbscript",mode:"vbscript",ext:["vbs"]},{name:"Velocity",mime:"text/velocity",mode:"velocity",ext:["vtl"]},{name:"Verilog",mime:"text/x-verilog",mode:"verilog",ext:["v"]},{name:"VHDL",mime:"text/x-vhdl",mode:"vhdl",ext:["vhd","vhdl"]},{name:"XML",mimes:["application/xml","text/xml"],mode:"xml",ext:["xml","xsl","xsd"],alias:["rss","wsdl","xsd"]},{name:"XQuery",mime:"application/xquery",mode:"xquery",ext:["xy","xquery"]},{name:"Yacas",mime:"text/x-yacas",mode:"yacas",ext:["ys"]},{name:"YAML",mime:"text/x-yaml",mode:"yaml",ext:["yaml","yml"],alias:["yml"]},{name:"Z80",mime:"text/x-z80",mode:"z80",ext:["z80"]},{name:"mscgen",mime:"text/x-mscgen",mode:"mscgen",ext:["mscgen","mscin","msc"]},{name:"xu",mime:"text/x-xu",mode:"mscgen",ext:["xu"]},{name:"msgenny",mime:"text/x-msgenny",mode:"mscgen",ext:["msgenny"]}];for(var t=0;t<e.modeInfo.length;t++){var n=e.modeInfo[t];n.mimes&&(n.mime=n.mimes[0])}e.findModeByMIME=function(t){t=t.toLowerCase();for(var n=0;n<e.modeInfo.length;n++){var r=e.modeInfo[n];if(r.mime==t)return r;if(r.mimes)for(var i=0;i<r.mimes.length;i++)if(r.mimes[i]==t)return r}},e.findModeByExtension=function(t){for(var n=0;n<e.modeInfo.length;n++){var r=e.modeInfo[n];if(r.ext)for(var i=0;i<r.ext.length;i++)if(r.ext[i]==t)return r}},e.findModeByFileName=function(t){for(var n=0;n<e.modeInfo.length;n++){var r=e.modeInfo[n];if(r.file&&r.file.test(t))return r}var i=t.lastIndexOf("."),o=i>-1&&t.substring(i+1,t.length);return o?e.findModeByExtension(o):void 0},e.findModeByName=function(t){t=t.toLowerCase();for(var n=0;n<e.modeInfo.length;n++){var r=e.modeInfo[n];if(r.name.toLowerCase()==t)return r;if(r.alias)for(var i=0;i<r.alias.length;i++)if(r.alias[i].toLowerCase()==t)return r}}})},{"../lib/codemirror":10}],14:[function(t,n,r){!function(i){"object"==typeof r&&"object"==typeof n?i(t("../../lib/codemirror")):"function"==typeof e&&e.amd?e(["../../lib/codemirror"],i):i(CodeMirror)}(function(e){"use strict";var t={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},n={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,caseFold:!1};e.defineMode("xml",function(r,i){function o(e,t){function n(n){return t.tokenize=n,n(e,t)}var r=e.next();if("<"==r)return e.eat("!")?e.eat("[")?e.match("CDATA[")?n(s("atom","]]>")):null:e.match("--")?n(s("comment","-->")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),n(c(1))):null:e.eat("?")?(e.eatWhile(/[\w\._\-]/),t.tokenize=s("meta","?>"),"meta"):(T=e.eat("/")?"closeTag":"openTag",t.tokenize=a,"tag bracket");if("&"==r){var i;return i=e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w\.\-:]/)&&e.eat(";"),i?"atom":"error"}return e.eatWhile(/[^&<]/),null}function a(e,t){var n=e.next();if(">"==n||"/"==n&&e.eat(">"))return t.tokenize=o,T=">"==n?"endTag":"selfcloseTag","tag bracket";if("="==n)return T="equals",null;if("<"==n){t.tokenize=o,t.state=d,t.tagName=t.tagStart=null;var r=t.tokenize(e,t);return r?r+" tag error":"tag error"}return/[\'\"]/.test(n)?(t.tokenize=l(n),t.stringStartCol=e.column(),t.tokenize(e,t)):(e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function l(e){var t=function(t,n){for(;!t.eol();)if(t.next()==e){n.tokenize=a;break}return"string"};return t.isInAttribute=!0,t}function s(e,t){return function(n,r){for(;!n.eol();){if(n.match(t)){r.tokenize=o;break}n.next()}return e}}function c(e){return function(t,n){for(var r;null!=(r=t.next());){if("<"==r)return n.tokenize=c(e+1),n.tokenize(t,n);if(">"==r){if(1==e){n.tokenize=o;break}return n.tokenize=c(e-1),n.tokenize(t,n)}}return"meta"}}function u(e,t,n){this.prev=e.context,this.tagName=t,this.indent=e.indented,this.startOfLine=n,(S.doNotIndent.hasOwnProperty(t)||e.context&&e.context.noIndent)&&(this.noIndent=!0)}function f(e){e.context&&(e.context=e.context.prev)}function h(e,t){for(var n;;){if(!e.context)return;if(n=e.context.tagName,!S.contextGrabbers.hasOwnProperty(n)||!S.contextGrabbers[n].hasOwnProperty(t))return;f(e)}}function d(e,t,n){return"openTag"==e?(n.tagStart=t.column(),p):"closeTag"==e?m:d}function p(e,t,n){return"word"==e?(n.tagName=t.current(),M="tag",y):(M="error",p)}function m(e,t,n){if("word"==e){var r=t.current();return n.context&&n.context.tagName!=r&&S.implicitlyClosed.hasOwnProperty(n.context.tagName)&&f(n),n.context&&n.context.tagName==r||S.matchClosing===!1?(M="tag",g):(M="tag error",v)}return M="error",v}function g(e,t,n){return"endTag"!=e?(M="error",g):(f(n),d)}function v(e,t,n){return M="error",g(e,t,n)}function y(e,t,n){if("word"==e)return M="attribute",x;if("endTag"==e||"selfcloseTag"==e){var r=n.tagName,i=n.tagStart;return n.tagName=n.tagStart=null,"selfcloseTag"==e||S.autoSelfClosers.hasOwnProperty(r)?h(n,r):(h(n,r),n.context=new u(n,r,i==n.indented)),d}return M="error",y}function x(e,t,n){return"equals"==e?b:(S.allowMissing||(M="error"),y(e,t,n))}function b(e,t,n){return"string"==e?w:"word"==e&&S.allowUnquoted?(M="string",y):(M="error",y(e,t,n))}function w(e,t,n){return"string"==e?w:y(e,t,n)}var k=r.indentUnit,S={},C=i.htmlMode?t:n;for(var L in C)S[L]=C[L];for(var L in i)S[L]=i[L];var T,M;return o.isInText=!0,{startState:function(e){var t={tokenize:o,state:d,indented:e||0,tagName:null,tagStart:null,context:null};return null!=e&&(t.baseIndent=e),t},token:function(e,t){if(!t.tagName&&e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null;T=null;var n=t.tokenize(e,t);return(n||T)&&"comment"!=n&&(M=null,t.state=t.state(T||n,e,t),M&&(n="error"==M?n+" error":M)),n},indent:function(t,n,r){var i=t.context;if(t.tokenize.isInAttribute)return t.tagStart==t.indented?t.stringStartCol+1:t.indented+k;if(i&&i.noIndent)return e.Pass;if(t.tokenize!=a&&t.tokenize!=o)return r?r.match(/^(\s*)/)[0].length:0;if(t.tagName)return S.multilineTagIndentPastTag!==!1?t.tagStart+t.tagName.length+2:t.tagStart+k*(S.multilineTagIndentFactor||1);if(S.alignCDATA&&/<!\[CDATA\[/.test(n))return 0;var l=n&&/^<(\/)?([\w_:\.-]*)/.exec(n);if(l&&l[1])for(;i;){if(i.tagName==l[2]){i=i.prev;break}if(!S.implicitlyClosed.hasOwnProperty(i.tagName))break;i=i.prev}else if(l)for(;i;){var s=S.contextGrabbers[i.tagName];if(!s||!s.hasOwnProperty(l[2]))break;i=i.prev}for(;i&&i.prev&&!i.startOfLine;)i=i.prev;return i?i.indent+k:t.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"<!--",blockCommentEnd:"-->",configuration:S.htmlMode?"html":"xml",helperType:S.htmlMode?"html":"xml",skipAttribute:function(e){e.state==b&&(e.state=y)}}}),e.defineMIME("text/xml","xml"),e.defineMIME("application/xml","xml"),e.mimeModes.hasOwnProperty("text/html")||e.defineMIME("text/html",{name:"xml",htmlMode:!0})})},{"../../lib/codemirror":10}],15:[function(e,t,n){n.read=function(e,t,n,r,i){var o,a,l=8*i-r-1,s=(1<<l)-1,c=s>>1,u=-7,f=n?i-1:0,h=n?-1:1,d=e[t+f];for(f+=h,o=d&(1<<-u)-1,d>>=-u,u+=l;u>0;o=256*o+e[t+f],f+=h,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=r;u>0;a=256*a+e[t+f],f+=h,u-=8);if(0===o)o=1-c;else{if(o===s)return a?NaN:(d?-1:1)*(1/0);a+=Math.pow(2,r),o-=c}return(d?-1:1)*a*Math.pow(2,o-r)},n.write=function(e,t,n,r,i,o){var a,l,s,c=8*o-i-1,u=(1<<c)-1,f=u>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,m=0>t||0===t&&0>1/t?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(l=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-a))<1&&(a--,s*=2),t+=a+f>=1?h/s:h*Math.pow(2,1-f),t*s>=2&&(a++,s/=2),a+f>=u?(l=0,a=u):a+f>=1?(l=(t*s-1)*Math.pow(2,i),a+=f):(l=t*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;e[n+d]=255&l,d+=p,l/=256,i-=8);for(a=a<<i|l,c+=i;c>0;e[n+d]=255&a,d+=p,a/=256,c-=8);e[n+d-p]|=128*m}},{}],16:[function(e,t,n){var r={}.toString;t.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},{}],17:[function(t,n,r){(function(t){(function(){function t(e){this.tokens=[],this.tokens.links={},this.options=e||h.defaults,this.rules=d.normal,this.options.gfm&&(this.options.tables?this.rules=d.tables:this.rules=d.gfm)}function i(e,t){if(this.options=t||h.defaults,this.links=e,this.rules=p.normal,this.renderer=this.options.renderer||new o,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=p.breaks:this.rules=p.gfm:this.options.pedantic&&(this.rules=p.pedantic)}function o(e){this.options=e||{}}function a(e){this.tokens=[],this.token=null,this.options=e||h.defaults,this.options.renderer=this.options.renderer||new o,this.renderer=this.options.renderer,this.renderer.options=this.options}function l(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function s(e){return e.replace(/&([#\w]+);/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function c(e,t){return e=e.source,t=t||"",function n(r,i){return r?(i=i.source||i,i=i.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,i),n):new RegExp(e,t)}}function u(){}function f(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function h(e,n,r){if(r||"function"==typeof n){r||(r=n,n=null),n=f({},h.defaults,n||{});var i,o,s=n.highlight,c=0;try{i=t.lex(e,n)}catch(u){return r(u)}o=i.length;var d=function(e){if(e)return n.highlight=s,r(e);var t;try{t=a.parse(i,n)}catch(o){e=o}return n.highlight=s,e?r(e):r(null,t)};if(!s||s.length<3)return d();if(delete n.highlight,!o)return d();for(;c<i.length;c++)!function(e){return"code"!==e.type?--o||d():s(e.text,e.lang,function(t,n){return t?d(t):null==n||n===e.text?--o||d():(e.text=n,e.escaped=!0,void(--o||d()))})}(i[c])}else try{return n&&(n=f({},h.defaults,n)),a.parse(t.lex(e,n),n)}catch(u){if(u.message+="\nPlease report this to https://github.com/chjj/marked.",(n||h.defaults).silent)return"<p>An error occured:</p><pre>"+l(u.message+"",!0)+"</pre>";throw u}}var d={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:u,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:u,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:u,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};d.bullet=/(?:[*+-]|\d+\.)/,d.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,d.item=c(d.item,"gm")(/bull/g,d.bullet)(),d.list=c(d.list)(/bull/g,d.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+d.def.source+")")(),d.blockquote=c(d.blockquote)("def",d.def)(),d._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",d.html=c(d.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,d._tag)(),d.paragraph=c(d.paragraph)("hr",d.hr)("heading",d.heading)("lheading",d.lheading)("blockquote",d.blockquote)("tag","<"+d._tag)("def",d.def)(),d.normal=f({},d),d.gfm=f({},d.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),d.gfm.paragraph=c(d.paragraph)("(?!","(?!"+d.gfm.fences.source.replace("\\1","\\2")+"|"+d.list.source.replace("\\1","\\3")+"|")(),d.tables=f({},d.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=d,t.lex=function(e,n){var r=new t(n);return r.lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t,n){for(var r,i,o,a,l,s,c,u,f,e=e.replace(/^ +$/gm,"");e;)if((o=this.rules.newline.exec(e))&&(e=e.substring(o[0].length),o[0].length>1&&this.tokens.push({type:"space"})),o=this.rules.code.exec(e))e=e.substring(o[0].length),o=o[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?o:o.replace(/\n+$/,"")});else if(o=this.rules.fences.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"code",lang:o[2],text:o[3]||""});else if(o=this.rules.heading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:o[1].length,text:o[2]});else if(t&&(o=this.rules.nptable.exec(e))){for(e=e.substring(o[0].length),s={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/\n$/,"").split("\n")},u=0;u<s.align.length;u++)/^ *-+: *$/.test(s.align[u])?s.align[u]="right":/^ *:-+: *$/.test(s.align[u])?s.align[u]="center":/^ *:-+ *$/.test(s.align[u])?s.align[u]="left":s.align[u]=null;for(u=0;u<s.cells.length;u++)s.cells[u]=s.cells[u].split(/ *\| */);this.tokens.push(s)}else if(o=this.rules.lheading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:"="===o[2]?1:2,text:o[1]});else if(o=this.rules.hr.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"hr"});else if(o=this.rules.blockquote.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"blockquote_start"}),o=o[0].replace(/^ *> ?/gm,""),this.token(o,t,!0),this.tokens.push({type:"blockquote_end"});else if(o=this.rules.list.exec(e)){for(e=e.substring(o[0].length),a=o[2],this.tokens.push({type:"list_start",ordered:a.length>1}),o=o[0].match(this.rules.item),r=!1,f=o.length,u=0;f>u;u++)s=o[u],c=s.length,s=s.replace(/^ *([*+-]|\d+\.) +/,""),~s.indexOf("\n ")&&(c-=s.length,s=this.options.pedantic?s.replace(/^ {1,4}/gm,""):s.replace(new RegExp("^ {1,"+c+"}","gm"),"")),this.options.smartLists&&u!==f-1&&(l=d.bullet.exec(o[u+1])[0],a===l||a.length>1&&l.length>1||(e=o.slice(u+1).join("\n")+e,u=f-1)),i=r||/\n\n(?!\s*$)/.test(s),u!==f-1&&(r="\n"===s.charAt(s.length-1),i||(i=r)),this.tokens.push({type:i?"loose_item_start":"list_item_start"}),this.token(s,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(o=this.rules.html.exec(e))e=e.substring(o[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===o[1]||"script"===o[1]||"style"===o[1]),text:o[0]});else if(!n&&t&&(o=this.rules.def.exec(e)))e=e.substring(o[0].length),this.tokens.links[o[1].toLowerCase()]={href:o[2],title:o[3]};else if(t&&(o=this.rules.table.exec(e))){for(e=e.substring(o[0].length),s={type:"table",
header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/(?: *\| *)?\n$/,"").split("\n")},u=0;u<s.align.length;u++)/^ *-+: *$/.test(s.align[u])?s.align[u]="right":/^ *:-+: *$/.test(s.align[u])?s.align[u]="center":/^ *:-+ *$/.test(s.align[u])?s.align[u]="left":s.align[u]=null;for(u=0;u<s.cells.length;u++)s.cells[u]=s.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(s)}else if(t&&(o=this.rules.paragraph.exec(e)))e=e.substring(o[0].length),this.tokens.push({type:"paragraph",text:"\n"===o[1].charAt(o[1].length-1)?o[1].slice(0,-1):o[1]});else if(o=this.rules.text.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"text",text:o[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var p={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:u,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:u,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};p._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,p._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,p.link=c(p.link)("inside",p._inside)("href",p._href)(),p.reflink=c(p.reflink)("inside",p._inside)(),p.normal=f({},p),p.pedantic=f({},p.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),p.gfm=f({},p.normal,{escape:c(p.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:c(p.text)("]|","~]|")("|","|https?://|")()}),p.breaks=f({},p.gfm,{br:c(p.br)("{2,}","*")(),text:c(p.gfm.text)("{2,}","*")()}),i.rules=p,i.output=function(e,t,n){var r=new i(t,n);return r.output(e)},i.prototype.output=function(e){for(var t,n,r,i,o="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),o+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=":"===i[1].charAt(6)?this.mangle(i[1].substring(7)):this.mangle(i[1]),r=this.mangle("mailto:")+n):(n=l(i[1]),r=n),o+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):l(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,o+=this.outputLink(i,{href:i[2],title:i[3]}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){o+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,o+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),o+=this.renderer.strong(this.output(i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),o+=this.renderer.em(this.output(i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),o+=this.renderer.codespan(l(i[2],!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),o+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),o+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),o+=this.renderer.text(l(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(i[0].length),n=l(i[1]),r=n,o+=this.renderer.link(r,null,n);return o},i.prototype.outputLink=function(e,t){var n=l(t.href),r=t.title?l(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,l(e[1]))},i.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},i.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,i=0;r>i;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},o.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+l(t,!0)+'">'+(n?e:l(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:l(e,!0))+"\n</code></pre>"},o.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},o.prototype.html=function(e){return e},o.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},o.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},o.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},o.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},o.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},o.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},o.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},o.prototype.tablecell=function(e,t){var n=t.header?"th":"td",r=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">";return r+e+"</"+n+">\n"},o.prototype.strong=function(e){return"<strong>"+e+"</strong>"},o.prototype.em=function(e){return"<em>"+e+"</em>"},o.prototype.codespan=function(e){return"<code>"+e+"</code>"},o.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},o.prototype.del=function(e){return"<del>"+e+"</del>"},o.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(s(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(i){return""}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:"))return""}var o='<a href="'+e+'"';return t&&(o+=' title="'+t+'"'),o+=">"+n+"</a>"},o.prototype.image=function(e,t,n){var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},o.prototype.text=function(e){return e},a.parse=function(e,t,n){var r=new a(t,n);return r.parse(e)},a.prototype.parse=function(e){this.inline=new i(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},a.prototype.next=function(){return this.token=this.tokens.pop()},a.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},a.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},a.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,i,o="",a="";for(n="",e=0;e<this.token.header.length;e++)r={header:!0,align:this.token.align[e]},n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(o+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",i=0;i<t.length;i++)n+=this.renderer.tablecell(this.inline.output(t[i]),{header:!1,align:this.token.align[i]});a+=this.renderer.tablerow(n)}return this.renderer.table(o,a);case"blockquote_start":for(var a="";"blockquote_end"!==this.next().type;)a+=this.tok();return this.renderer.blockquote(a);case"list_start":for(var a="",l=this.token.ordered;"list_end"!==this.next().type;)a+=this.tok();return this.renderer.list(a,l);case"list_item_start":for(var a="";"list_item_end"!==this.next().type;)a+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(a);case"loose_item_start":for(var a="";"list_item_end"!==this.next().type;)a+=this.tok();return this.renderer.listitem(a);case"html":var s=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(s);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},u.exec=u,h.options=h.setOptions=function(e){return f(h.defaults,e),h},h.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new o,xhtml:!1},h.Parser=a,h.parser=a.parse,h.Renderer=o,h.Lexer=t,h.lexer=t.lex,h.InlineLexer=i,h.inlineLexer=i.output,h.parse=h,"undefined"!=typeof n&&"object"==typeof r?n.exports=h:"function"==typeof e&&e.amd?e(function(){return h}):this.marked=h}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],18:[function(e,t,n){(function(n,r){"use strict";var i=function(e,t,n,i){if(i=i||{},this.dictionary=null,this.rules={},this.dictionaryTable={},this.compoundRules=[],this.compoundRuleCodes={},this.replacementTable=[],this.flags=i.flags||{},e){if(this.dictionary=e,"undefined"!=typeof window&&"chrome"in window&&"extension"in window.chrome&&"getURL"in window.chrome.extension)t||(t=this._readFile(chrome.extension.getURL("lib/typo/dictionaries/"+e+"/"+e+".aff"))),n||(n=this._readFile(chrome.extension.getURL("lib/typo/dictionaries/"+e+"/"+e+".dic")));else{if(i.dictionaryPath)var o=i.dictionaryPath;else if("undefined"!=typeof r)var o=r+"/dictionaries";else var o="./dictionaries";t||(t=this._readFile(o+"/"+e+"/"+e+".aff")),n||(n=this._readFile(o+"/"+e+"/"+e+".dic"))}this.rules=this._parseAFF(t),this.compoundRuleCodes={};for(var a=0,l=this.compoundRules.length;l>a;a++)for(var s=this.compoundRules[a],c=0,u=s.length;u>c;c++)this.compoundRuleCodes[s[c]]=[];"ONLYINCOMPOUND"in this.flags&&(this.compoundRuleCodes[this.flags.ONLYINCOMPOUND]=[]),this.dictionaryTable=this._parseDIC(n);for(var a in this.compoundRuleCodes)0==this.compoundRuleCodes[a].length&&delete this.compoundRuleCodes[a];for(var a=0,l=this.compoundRules.length;l>a;a++){for(var f=this.compoundRules[a],h="",c=0,u=f.length;u>c;c++){var d=f[c];h+=d in this.compoundRuleCodes?"("+this.compoundRuleCodes[d].join("|")+")":d}this.compoundRules[a]=new RegExp(h,"i")}}return this};i.prototype={load:function(e){for(var t in e)this[t]=e[t];return this},_readFile:function(t,r){if(r||(r="utf8"),"undefined"!=typeof XMLHttpRequest){var i=new XMLHttpRequest;return i.open("GET",t,!1),i.overrideMimeType&&i.overrideMimeType("text/plain; charset="+r),i.send(null),i.responseText}if("undefined"!=typeof e){var o=e("fs");try{if(o.existsSync(t)){var a=o.statSync(t),l=o.openSync(t,"r"),s=new n(a.size);return o.readSync(l,s,0,s.length,null),s.toString(r,0,s.length)}console.log("Path "+t+" does not exist.")}catch(c){return console.log(c),""}}},_parseAFF:function(e){var t={};e=this._removeAffixComments(e);for(var n=e.split("\n"),r=0,i=n.length;i>r;r++){var o=n[r],a=o.split(/\s+/),l=a[0];if("PFX"==l||"SFX"==l){for(var s=a[1],c=a[2],u=parseInt(a[3],10),f=[],h=r+1,d=r+1+u;d>h;h++){var o=n[h],p=o.split(/\s+/),m=p[2],g=p[3].split("/"),v=g[0];"0"===v&&(v="");var y=this.parseRuleCodes(g[1]),x=p[4],b={};b.add=v,y.length>0&&(b.continuationClasses=y),"."!==x&&("SFX"===l?b.match=new RegExp(x+"$"):b.match=new RegExp("^"+x)),"0"!=m&&("SFX"===l?b.remove=new RegExp(m+"$"):b.remove=m),f.push(b)}t[s]={type:l,combineable:"Y"==c,entries:f},r+=u}else if("COMPOUNDRULE"===l){for(var u=parseInt(a[1],10),h=r+1,d=r+1+u;d>h;h++){var o=n[h],p=o.split(/\s+/);this.compoundRules.push(p[1])}r+=u}else if("REP"===l){var p=o.split(/\s+/);3===p.length&&this.replacementTable.push([p[1],p[2]])}else this.flags[l]=a[1]}return t},_removeAffixComments:function(e){return e=e.replace(/#.*$/gm,""),e=e.replace(/^\s\s*/m,"").replace(/\s\s*$/m,""),e=e.replace(/\n{2,}/g,"\n"),e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},_parseDIC:function(e){function t(e,t){e in r&&"object"==typeof r[e]||(r[e]=[]),r[e].push(t)}e=this._removeDicComments(e);for(var n=e.split("\n"),r={},i=1,o=n.length;o>i;i++){var a=n[i],l=a.split("/",2),s=l[0];if(l.length>1){var c=this.parseRuleCodes(l[1]);"NEEDAFFIX"in this.flags&&-1!=c.indexOf(this.flags.NEEDAFFIX)||t(s,c);for(var u=0,f=c.length;f>u;u++){var h=c[u],d=this.rules[h];if(d)for(var p=this._applyRule(s,d),m=0,g=p.length;g>m;m++){var v=p[m];if(t(v,[]),d.combineable)for(var y=u+1;f>y;y++){var x=c[y],b=this.rules[x];if(b&&b.combineable&&d.type!=b.type)for(var w=this._applyRule(v,b),k=0,S=w.length;S>k;k++){var C=w[k];t(C,[])}}}h in this.compoundRuleCodes&&this.compoundRuleCodes[h].push(s)}}else t(s.trim(),[])}return r},_removeDicComments:function(e){return e=e.replace(/^\t.*$/gm,"")},parseRuleCodes:function(e){if(!e)return[];if(!("FLAG"in this.flags))return e.split("");if("long"===this.flags.FLAG){for(var t=[],n=0,r=e.length;r>n;n+=2)t.push(e.substr(n,2));return t}return"num"===this.flags.FLAG?textCode.split(","):void 0},_applyRule:function(e,t){for(var n=t.entries,r=[],i=0,o=n.length;o>i;i++){var a=n[i];if(!a.match||e.match(a.match)){var l=e;if(a.remove&&(l=l.replace(a.remove,"")),"SFX"===t.type?l+=a.add:l=a.add+l,r.push(l),"continuationClasses"in a)for(var s=0,c=a.continuationClasses.length;c>s;s++){var u=this.rules[a.continuationClasses[s]];u&&(r=r.concat(this._applyRule(l,u)))}}}return r},check:function(e){var t=e.replace(/^\s\s*/,"").replace(/\s\s*$/,"");if(this.checkExact(t))return!0;if(t.toUpperCase()===t){var n=t[0]+t.substring(1).toLowerCase();if(this.hasFlag(n,"KEEPCASE"))return!1;if(this.checkExact(n))return!0}var r=t.toLowerCase();if(r!==t){if(this.hasFlag(r,"KEEPCASE"))return!1;if(this.checkExact(r))return!0}return!1},checkExact:function(e){var t=this.dictionaryTable[e];if("undefined"==typeof t){if("COMPOUNDMIN"in this.flags&&e.length>=this.flags.COMPOUNDMIN)for(var n=0,r=this.compoundRules.length;r>n;n++)if(e.match(this.compoundRules[n]))return!0;return!1}if("object"==typeof t){for(var n=0,r=t.length;r>n;n++)if(!this.hasFlag(e,"ONLYINCOMPOUND",t[n]))return!0;return!1}},hasFlag:function(e,t,n){if(t in this.flags){if("undefined"==typeof n)var n=Array.prototype.concat.apply([],this.dictionaryTable[e]);if(n&&-1!==n.indexOf(this.flags[t]))return!0}return!1},alphabet:"",suggest:function(e,t){function n(e){for(var t=[],n=0,r=e.length;r>n;n++){for(var i=e[n],o=[],a=0,l=i.length+1;l>a;a++)o.push([i.substring(0,a),i.substring(a,i.length)]);for(var s=[],a=0,l=o.length;l>a;a++){var u=o[a];u[1]&&s.push(u[0]+u[1].substring(1))}for(var f=[],a=0,l=o.length;l>a;a++){var u=o[a];u[1].length>1&&f.push(u[0]+u[1][1]+u[1][0]+u[1].substring(2))}for(var h=[],a=0,l=o.length;l>a;a++){var u=o[a];if(u[1])for(var d=0,p=c.alphabet.length;p>d;d++)h.push(u[0]+c.alphabet[d]+u[1].substring(1))}for(var m=[],a=0,l=o.length;l>a;a++){var u=o[a];if(u[1])for(var d=0,p=c.alphabet.length;p>d;d++)h.push(u[0]+c.alphabet[d]+u[1])}t=t.concat(s),t=t.concat(f),t=t.concat(h),t=t.concat(m)}return t}function r(e){for(var t=[],n=0;n<e.length;n++)c.check(e[n])&&t.push(e[n]);return t}function i(e){function i(e,t){return e[1]<t[1]?-1:1}for(var o=n([e]),a=n(o),l=r(o).concat(r(a)),s={},u=0,f=l.length;f>u;u++)l[u]in s?s[l[u]]+=1:s[l[u]]=1;var h=[];for(var u in s)h.push([u,s[u]]);h.sort(i).reverse();for(var d=[],u=0,f=Math.min(t,h.length);f>u;u++)c.hasFlag(h[u][0],"NOSUGGEST")||d.push(h[u][0]);return d}if(t||(t=5),this.check(e))return[];for(var o=0,a=this.replacementTable.length;a>o;o++){var l=this.replacementTable[o];if(-1!==e.indexOf(l[0])){var s=e.replace(l[0],l[1]);if(this.check(s))return[s]}}var c=this;return c.alphabet="abcdefghijklmnopqrstuvwxyz",i(e)}},"undefined"!=typeof t&&(t.exports=i)}).call(this,e("buffer").Buffer,"/node_modules/typo-js")},{buffer:3,fs:2}],19:[function(e,t,n){var r=e("codemirror");r.commands.tabAndIndentMarkdownList=function(e){var t=e.listSelections(),n=t[0].head,r=e.getStateAfter(n.line),i=r.list!==!1;if(i)return void e.execCommand("indentMore");if(e.options.indentWithTabs)e.execCommand("insertTab");else{var o=Array(e.options.tabSize+1).join(" ");e.replaceSelection(o)}},r.commands.shiftTabAndUnindentMarkdownList=function(e){var t=e.listSelections(),n=t[0].head,r=e.getStateAfter(n.line),i=r.list!==!1;if(i)return void e.execCommand("indentLess");if(e.options.indentWithTabs)e.execCommand("insertTab");else{var o=Array(e.options.tabSize+1).join(" ");e.replaceSelection(o)}}},{codemirror:10}],20:[function(e,t,n){"use strict";function r(e){return e=U?e.replace("Ctrl","Cmd"):e.replace("Cmd","Ctrl")}function i(e,t,n){e=e||{};var r=document.createElement("a");return t=void 0==t?!0:t,e.title&&t&&(r.title=a(e.title,e.action,n),U&&(r.title=r.title.replace("Ctrl","⌘"),r.title=r.title.replace("Alt","⌥"))),r.tabIndex=-1,r.className=e.className,r}function o(){var e=document.createElement("i");return e.className="separator",e.innerHTML="|",e}function a(e,t,n){var i,o=e;return t&&(i=Y(t),n[i]&&(o+=" ("+r(n[i])+")")),o}function l(e,t){t=t||e.getCursor("start");var n=e.getTokenAt(t);if(!n.type)return{};for(var r,i,o=n.type.split(" "),a={},l=0;l<o.length;l++)r=o[l],"strong"===r?a.bold=!0:"variable-2"===r?(i=e.getLine(t.line),/^\s*\d+\.\s/.test(i)?a["ordered-list"]=!0:a["unordered-list"]=!0):"atom"===r?a.quote=!0:"em"===r?a.italic=!0:"quote"===r?a.quote=!0:"strikethrough"===r?a.strikethrough=!0:"comment"===r?a.code=!0:"link"===r?a.link=!0:"tag"===r?a.image=!0:r.match(/^header(\-[1-6])?$/)&&(a[r.replace("header","heading")]=!0);return a}function s(e){var t=e.codemirror;t.setOption("fullScreen",!t.getOption("fullScreen")),t.getOption("fullScreen")?(V=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=V;var n=t.getWrapperElement();/fullscreen/.test(n.previousSibling.className)?n.previousSibling.className=n.previousSibling.className.replace(/\s*fullscreen\b/,""):n.previousSibling.className+=" fullscreen";var r=e.toolbarElements.fullscreen;/active/.test(r.className)?r.className=r.className.replace(/\s*active\s*/g,""):r.className+=" active";var i=t.getWrapperElement().nextSibling;/editor-preview-active-side/.test(i.className)&&N(e)}function c(e){P(e,"bold",e.options.blockStyles.bold)}function u(e){P(e,"italic",e.options.blockStyles.italic)}function f(e){P(e,"strikethrough","~~")}function h(e){function t(e){if("object"!=typeof e)throw"fencing_line() takes a 'line' object (not a line number, or line text).  Got: "+typeof e+": "+e;return e.styles&&e.styles[2]&&-1!==e.styles[2].indexOf("formatting-code-block")}function n(e){return e.state.base.base||e.state.base}function r(e,r,i,o,a){i=i||e.getLineHandle(r),o=o||e.getTokenAt({line:r,ch:1}),a=a||!!i.text&&e.getTokenAt({line:r,ch:i.text.length-1});var l=o.type?o.type.split(" "):[];return a&&n(a).indentedCode?"indented":-1===l.indexOf("comment")?!1:n(o).fencedChars||n(a).fencedChars||t(i)?"fenced":"single"}function i(e,t,n,r){var i=t.line+1,o=n.line+1,a=t.line!==n.line,l=r+"\n",s="\n"+r;a&&o++,a&&0===n.ch&&(s=r+"\n",o--),E(e,!1,[l,s]),e.setSelection({line:i,ch:0},{line:o,ch:0})}var o,a,l,s=e.options.blockStyles.code,c=e.codemirror,u=c.getCursor("start"),f=c.getCursor("end"),h=c.getTokenAt({line:u.line,ch:u.ch||1}),d=c.getLineHandle(u.line),p=r(c,u.line,d,h);if("single"===p){var m=d.text.slice(0,u.ch).replace("`",""),g=d.text.slice(u.ch).replace("`","");c.replaceRange(m+g,{line:u.line,ch:0},{line:u.line,ch:99999999999999}),u.ch--,u!==f&&f.ch--,c.setSelection(u,f),c.focus()}else if("fenced"===p)if(u.line!==f.line||u.ch!==f.ch){for(o=u.line;o>=0&&(d=c.getLineHandle(o),!t(d));o--);var v,y,x,b,w=c.getTokenAt({line:o,ch:1}),k=n(w).fencedChars;t(c.getLineHandle(u.line))?(v="",y=u.line):t(c.getLineHandle(u.line-1))?(v="",y=u.line-1):(v=k+"\n",y=u.line),t(c.getLineHandle(f.line))?(x="",b=f.line,0===f.ch&&(b+=1)):0!==f.ch&&t(c.getLineHandle(f.line+1))?(x="",b=f.line+1):(x=k+"\n",b=f.line+1),0===f.ch&&(b-=1),c.operation(function(){c.replaceRange(x,{line:b,ch:0},{line:b+(x?0:1),ch:0}),c.replaceRange(v,{line:y,ch:0},{line:y+(v?0:1),ch:0})}),c.setSelection({line:y+(v?1:0),ch:0},{line:b+(v?1:-1),ch:0}),c.focus()}else{var S=u.line;if(t(c.getLineHandle(u.line))&&("fenced"===r(c,u.line+1)?(o=u.line,S=u.line+1):(a=u.line,S=u.line-1)),void 0===o)for(o=S;o>=0&&(d=c.getLineHandle(o),!t(d));o--);if(void 0===a)for(l=c.lineCount(),a=S;l>a&&(d=c.getLineHandle(a),!t(d));a++);c.operation(function(){c.replaceRange("",{line:o,ch:0},{line:o+1,ch:0}),c.replaceRange("",{line:a-1,ch:0},{line:a,ch:0})}),c.focus()}else if("indented"===p){if(u.line!==f.line||u.ch!==f.ch)o=u.line,a=f.line,0===f.ch&&a--;else{for(o=u.line;o>=0;o--)if(d=c.getLineHandle(o),!d.text.match(/^\s*$/)&&"indented"!==r(c,o,d)){o+=1;break}for(l=c.lineCount(),a=u.line;l>a;a++)if(d=c.getLineHandle(a),!d.text.match(/^\s*$/)&&"indented"!==r(c,a,d)){a-=1;break}}var C=c.getLineHandle(a+1),L=C&&c.getTokenAt({line:a+1,ch:C.text.length-1}),T=L&&n(L).indentedCode;T&&c.replaceRange("\n",{line:a+1,ch:0});for(var M=o;a>=M;M++)c.indentLine(M,"subtract");c.focus()}else{var N=u.line===f.line&&u.ch===f.ch&&0===u.ch,A=u.line!==f.line;N||A?i(c,u,f,s):E(c,!1,["`","`"])}}function d(e){var t=e.codemirror;I(t,"quote")}function p(e){var t=e.codemirror;O(t,"smaller")}function m(e){var t=e.codemirror;O(t,"bigger")}function g(e){var t=e.codemirror;O(t,void 0,1)}function v(e){var t=e.codemirror;O(t,void 0,2)}function y(e){var t=e.codemirror;O(t,void 0,3)}function x(e){var t=e.codemirror;I(t,"unordered-list")}function b(e){var t=e.codemirror;I(t,"ordered-list")}function w(e){var t=e.codemirror;R(t)}function k(e){var t=e.codemirror,n=l(t),r=e.options,i="http://";return r.promptURLs&&(i=prompt(r.promptTexts.link),!i)?!1:void E(t,n.link,r.insertTexts.link,i)}function S(e){var t=e.codemirror,n=l(t),r=e.options,i="http://";return r.promptURLs&&(i=prompt(r.promptTexts.image),!i)?!1:void E(t,n.image,r.insertTexts.image,i)}function C(e){var t=e.codemirror,n=l(t),r=e.options;E(t,n.table,r.insertTexts.table)}function L(e){var t=e.codemirror,n=l(t),r=e.options;E(t,n.image,r.insertTexts.horizontalRule)}function T(e){var t=e.codemirror;t.undo(),t.focus()}function M(e){var t=e.codemirror;t.redo(),t.focus()}function N(e){var t=e.codemirror,n=t.getWrapperElement(),r=n.nextSibling,i=e.toolbarElements["side-by-side"],o=!1;/editor-preview-active-side/.test(r.className)?(r.className=r.className.replace(/\s*editor-preview-active-side\s*/g,""),i.className=i.className.replace(/\s*active\s*/g,""),n.className=n.className.replace(/\s*CodeMirror-sided\s*/g," ")):(setTimeout(function(){t.getOption("fullScreen")||s(e),r.className+=" editor-preview-active-side"},1),i.className+=" active",n.className+=" CodeMirror-sided",o=!0);var a=n.lastChild;if(/editor-preview-active/.test(a.className)){a.className=a.className.replace(/\s*editor-preview-active\s*/g,"");var l=e.toolbarElements.preview,c=n.previousSibling;l.className=l.className.replace(/\s*active\s*/g,""),c.className=c.className.replace(/\s*disabled-for-preview*/g,"")}var u=function(){r.innerHTML=e.options.previewRender(e.value(),r)};t.sideBySideRenderingFunction||(t.sideBySideRenderingFunction=u),o?(r.innerHTML=e.options.previewRender(e.value(),r),t.on("update",t.sideBySideRenderingFunction)):t.off("update",t.sideBySideRenderingFunction),t.refresh()}function A(e){var t=e.codemirror,n=t.getWrapperElement(),r=n.previousSibling,i=e.options.toolbar?e.toolbarElements.preview:!1,o=n.lastChild;o&&/editor-preview/.test(o.className)||(o=document.createElement("div"),o.className="editor-preview",n.appendChild(o)),/editor-preview-active/.test(o.className)?(o.className=o.className.replace(/\s*editor-preview-active\s*/g,""),i&&(i.className=i.className.replace(/\s*active\s*/g,""),r.className=r.className.replace(/\s*disabled-for-preview*/g,""))):(setTimeout(function(){o.className+=" editor-preview-active"},1),i&&(i.className+=" active",r.className+=" disabled-for-preview")),o.innerHTML=e.options.previewRender(e.value(),o);var a=t.getWrapperElement().nextSibling;/editor-preview-active-side/.test(a.className)&&N(e)}function E(e,t,n,r){if(!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)){var i,o=n[0],a=n[1],l=e.getCursor("start"),s=e.getCursor("end");r&&(a=a.replace("#url#",r)),t?(i=e.getLine(l.line),o=i.slice(0,l.ch),a=i.slice(l.ch),e.replaceRange(o+a,{line:l.line,ch:0})):(i=e.getSelection(),e.replaceSelection(o+i+a),l.ch+=o.length,l!==s&&(s.ch+=o.length)),e.setSelection(l,s),e.focus()}}function O(e,t,n){if(!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)){for(var r=e.getCursor("start"),i=e.getCursor("end"),o=r.line;o<=i.line;o++)!function(r){var i=e.getLine(r),o=i.search(/[^#]/);i=void 0!==t?0>=o?"bigger"==t?"###### "+i:"# "+i:6==o&&"smaller"==t?i.substr(7):1==o&&"bigger"==t?i.substr(2):"bigger"==t?i.substr(1):"#"+i:1==n?0>=o?"# "+i:o==n?i.substr(o+1):"# "+i.substr(o+1):2==n?0>=o?"## "+i:o==n?i.substr(o+1):"## "+i.substr(o+1):0>=o?"### "+i:o==n?i.substr(o+1):"### "+i.substr(o+1),e.replaceRange(i,{line:r,ch:0},{line:r,ch:99999999999999})}(o);e.focus()}}function I(e,t){if(!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)){for(var n=l(e),r=e.getCursor("start"),i=e.getCursor("end"),o={quote:/^(\s*)\>\s+/,"unordered-list":/^(\s*)(\*|\-|\+)\s+/,"ordered-list":/^(\s*)\d+\.\s+/},a={quote:"> ","unordered-list":"* ","ordered-list":"1. "},s=r.line;s<=i.line;s++)!function(r){var i=e.getLine(r);i=n[t]?i.replace(o[t],"$1"):a[t]+i,e.replaceRange(i,{line:r,ch:0},{line:r,ch:99999999999999})}(s);e.focus()}}function P(e,t,n,r){if(!/editor-preview-active/.test(e.codemirror.getWrapperElement().lastChild.className)){r="undefined"==typeof r?n:r;var i,o=e.codemirror,a=l(o),s=n,c=r,u=o.getCursor("start"),f=o.getCursor("end");a[t]?(i=o.getLine(u.line),s=i.slice(0,u.ch),c=i.slice(u.ch),"bold"==t?(s=s.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/,""),c=c.replace(/(\*\*|__)/,"")):"italic"==t?(s=s.replace(/(\*|_)(?![\s\S]*(\*|_))/,""),c=c.replace(/(\*|_)/,"")):"strikethrough"==t&&(s=s.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/,""),c=c.replace(/(\*\*|~~)/,"")),o.replaceRange(s+c,{line:u.line,ch:0},{line:u.line,ch:99999999999999}),"bold"==t||"strikethrough"==t?(u.ch-=2,u!==f&&(f.ch-=2)):"italic"==t&&(u.ch-=1,u!==f&&(f.ch-=1))):(i=o.getSelection(),"bold"==t?(i=i.split("**").join(""),i=i.split("__").join("")):"italic"==t?(i=i.split("*").join(""),i=i.split("_").join("")):"strikethrough"==t&&(i=i.split("~~").join("")),o.replaceSelection(s+i+c),u.ch+=n.length,f.ch=u.ch+i.length),o.setSelection(u,f),o.focus()}}function R(e){if(!/editor-preview-active/.test(e.getWrapperElement().lastChild.className))for(var t,n=e.getCursor("start"),r=e.getCursor("end"),i=n.line;i<=r.line;i++)t=e.getLine(i),t=t.replace(/^[ ]*([# ]+|\*|\-|[> ]+|[0-9]+(.|\)))[ ]*/,""),e.replaceRange(t,{line:i,ch:0},{line:i,ch:99999999999999})}function D(e,t){for(var n in t)t.hasOwnProperty(n)&&(t[n]instanceof Array?e[n]=t[n].concat(e[n]instanceof Array?e[n]:[]):null!==t[n]&&"object"==typeof t[n]&&t[n].constructor===Object?e[n]=D(e[n]||{},t[n]):e[n]=t[n]);return e}function H(e){for(var t=1;t<arguments.length;t++)e=D(e,arguments[t]);return e}function W(e){var t=/[a-zA-Z0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g,n=e.match(t),r=0;if(null===n)return r;for(var i=0;i<n.length;i++)r+=n[i].charCodeAt(0)>=19968?n[i].length:1;return r}function B(e){e=e||{},e.parent=this;var t=!0;if(e.autoDownloadFontAwesome===!1&&(t=!1),e.autoDownloadFontAwesome!==!0)for(var n=document.styleSheets,r=0;r<n.length;r++)n[r].href&&n[r].href.indexOf("//maxcdn.bootstrapcdn.com/font-awesome/")>-1&&(t=!1);if(t){var i=document.createElement("link");i.rel="stylesheet",i.href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css",document.getElementsByTagName("head")[0].appendChild(i)}if(e.element)this.element=e.element;else if(null===e.element)return void console.log("SimpleMDE: Error. No element was found.");if(void 0===e.toolbar){e.toolbar=[];for(var o in K)K.hasOwnProperty(o)&&(-1!=o.indexOf("separator-")&&e.toolbar.push("|"),(K[o]["default"]===!0||e.showIcons&&e.showIcons.constructor===Array&&-1!=e.showIcons.indexOf(o))&&e.toolbar.push(o))}e.hasOwnProperty("status")||(e.status=["autosave","lines","words","cursor"]),e.previewRender||(e.previewRender=function(e){return this.parent.markdown(e)}),e.parsingConfig=H({highlightFormatting:!0},e.parsingConfig||{}),e.insertTexts=H({},X,e.insertTexts||{}),e.promptTexts=Z,e.blockStyles=H({},J,e.blockStyles||{}),e.shortcuts=H({},G,e.shortcuts||{}),void 0!=e.autosave&&void 0!=e.autosave.unique_id&&""!=e.autosave.unique_id&&(e.autosave.uniqueId=e.autosave.unique_id),this.options=e,this.render(),!e.initialValue||this.options.autosave&&this.options.autosave.foundSavedValue===!0||this.value(e.initialValue)}function _(){if("object"!=typeof localStorage)return!1;try{localStorage.setItem("smde_localStorage",1),localStorage.removeItem("smde_localStorage")}catch(e){return!1}return!0}var F=e("codemirror");e("codemirror/addon/edit/continuelist.js"),e("./codemirror/tablist"),e("codemirror/addon/display/fullscreen.js"),e("codemirror/mode/markdown/markdown.js"),e("codemirror/addon/mode/overlay.js"),e("codemirror/addon/display/placeholder.js"),e("codemirror/addon/selection/mark-selection.js"),e("codemirror/mode/gfm/gfm.js"),e("codemirror/mode/xml/xml.js");var z=e("codemirror-spell-checker"),j=e("marked"),U=/Mac/.test(navigator.platform),q={toggleBold:c,toggleItalic:u,drawLink:k,toggleHeadingSmaller:p,toggleHeadingBigger:m,drawImage:S,toggleBlockquote:d,toggleOrderedList:b,toggleUnorderedList:x,toggleCodeBlock:h,togglePreview:A,toggleStrikethrough:f,toggleHeading1:g,toggleHeading2:v,toggleHeading3:y,cleanBlock:w,drawTable:C,drawHorizontalRule:L,undo:T,redo:M,toggleSideBySide:N,toggleFullScreen:s},G={toggleBold:"Cmd-B",toggleItalic:"Cmd-I",drawLink:"Cmd-K",toggleHeadingSmaller:"Cmd-H",toggleHeadingBigger:"Shift-Cmd-H",cleanBlock:"Cmd-E",drawImage:"Cmd-Alt-I",toggleBlockquote:"Cmd-'",toggleOrderedList:"Cmd-Alt-L",toggleUnorderedList:"Cmd-L",toggleCodeBlock:"Cmd-Alt-C",togglePreview:"Cmd-P",toggleSideBySide:"F9",toggleFullScreen:"F11"},Y=function(e){for(var t in q)if(q[t]===e)return t;return null},$=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0);
}(navigator.userAgent||navigator.vendor||window.opera),e},V="",K={bold:{name:"bold",action:c,className:"fa fa-bold",title:"Bold","default":!0},italic:{name:"italic",action:u,className:"fa fa-italic",title:"Italic","default":!0},strikethrough:{name:"strikethrough",action:f,className:"fa fa-strikethrough",title:"Strikethrough"},heading:{name:"heading",action:p,className:"fa fa-header",title:"Heading","default":!0},"heading-smaller":{name:"heading-smaller",action:p,className:"fa fa-header fa-header-x fa-header-smaller",title:"Smaller Heading"},"heading-bigger":{name:"heading-bigger",action:m,className:"fa fa-header fa-header-x fa-header-bigger",title:"Bigger Heading"},"heading-1":{name:"heading-1",action:g,className:"fa fa-header fa-header-x fa-header-1",title:"Big Heading"},"heading-2":{name:"heading-2",action:v,className:"fa fa-header fa-header-x fa-header-2",title:"Medium Heading"},"heading-3":{name:"heading-3",action:y,className:"fa fa-header fa-header-x fa-header-3",title:"Small Heading"},"separator-1":{name:"separator-1"},code:{name:"code",action:h,className:"fa fa-code",title:"Code"},quote:{name:"quote",action:d,className:"fa fa-quote-left",title:"Quote","default":!0},"unordered-list":{name:"unordered-list",action:x,className:"fa fa-list-ul",title:"Generic List","default":!0},"ordered-list":{name:"ordered-list",action:b,className:"fa fa-list-ol",title:"Numbered List","default":!0},"clean-block":{name:"clean-block",action:w,className:"fa fa-eraser fa-clean-block",title:"Clean block"},"separator-2":{name:"separator-2"},link:{name:"link",action:k,className:"fa fa-link",title:"Create Link","default":!0},image:{name:"image",action:S,className:"fa fa-picture-o",title:"Insert Image","default":!0},table:{name:"table",action:C,className:"fa fa-table",title:"Insert Table"},"horizontal-rule":{name:"horizontal-rule",action:L,className:"fa fa-minus",title:"Insert Horizontal Line"},"separator-3":{name:"separator-3"},preview:{name:"preview",action:A,className:"fa fa-eye no-disable",title:"Toggle Preview","default":!0},"side-by-side":{name:"side-by-side",action:N,className:"fa fa-columns no-disable no-mobile",title:"Toggle Side by Side","default":!0},fullscreen:{name:"fullscreen",action:s,className:"fa fa-arrows-alt no-disable no-mobile",title:"Toggle Fullscreen","default":!0},"separator-4":{name:"separator-4"},guide:{name:"guide",action:"https://simplemde.com/markdown-guide",className:"fa fa-question-circle",title:"Markdown Guide","default":!0},"separator-5":{name:"separator-5"},undo:{name:"undo",action:T,className:"fa fa-undo no-disable",title:"Undo"},redo:{name:"redo",action:M,className:"fa fa-repeat no-disable",title:"Redo"}},X={link:["[","](#url#)"],image:["![](","#url#)"],table:["","\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n"],horizontalRule:["","\n\n-----\n\n"]},Z={link:"URL for the link:",image:"URL of the image:"},J={bold:"**",code:"```",italic:"*"};B.prototype.markdown=function(e){if(j){var t={};return this.options&&this.options.renderingConfig&&this.options.renderingConfig.singleLineBreaks===!1?t.breaks=!1:t.breaks=!0,this.options&&this.options.renderingConfig&&this.options.renderingConfig.codeSyntaxHighlighting===!0&&window.hljs&&(t.highlight=function(e){return window.hljs.highlightAuto(e).value}),j.setOptions(t),j(e)}},B.prototype.render=function(e){if(e||(e=this.element||document.getElementsByTagName("textarea")[0]),!this._rendered||this._rendered!==e){this.element=e;var t=this.options,n=this,i={};for(var o in t.shortcuts)null!==t.shortcuts[o]&&null!==q[o]&&!function(e){i[r(t.shortcuts[e])]=function(){q[e](n)}}(o);i.Enter="newlineAndIndentContinueMarkdownList",i.Tab="tabAndIndentMarkdownList",i["Shift-Tab"]="shiftTabAndUnindentMarkdownList",i.Esc=function(e){e.getOption("fullScreen")&&s(n)},document.addEventListener("keydown",function(e){e=e||window.event,27==e.keyCode&&n.codemirror.getOption("fullScreen")&&s(n)},!1);var a,l;if(t.spellChecker!==!1?(a="spell-checker",l=t.parsingConfig,l.name="gfm",l.gitHubSpice=!1,z({codeMirrorInstance:F})):(a=t.parsingConfig,a.name="gfm",a.gitHubSpice=!1),this.codemirror=F.fromTextArea(e,{mode:a,backdrop:l,theme:"paper",tabSize:void 0!=t.tabSize?t.tabSize:2,indentUnit:void 0!=t.tabSize?t.tabSize:2,indentWithTabs:t.indentWithTabs!==!1,lineNumbers:!1,autofocus:t.autofocus===!0,extraKeys:i,lineWrapping:t.lineWrapping!==!1,allowDropFileTypes:["text/plain"],placeholder:t.placeholder||e.getAttribute("placeholder")||"",styleSelectedText:void 0!=t.styleSelectedText?t.styleSelectedText:!0}),t.forceSync===!0){var c=this.codemirror;c.on("change",function(){c.save()})}this.gui={},t.toolbar!==!1&&(this.gui.toolbar=this.createToolbar()),t.status!==!1&&(this.gui.statusbar=this.createStatusbar()),void 0!=t.autosave&&t.autosave.enabled===!0&&this.autosave(),this.gui.sideBySide=this.createSideBySide(),this._rendered=this.element;var u=this.codemirror;setTimeout(function(){u.refresh()}.bind(u),0)}},B.prototype.autosave=function(){if(_()){var e=this;if(void 0==this.options.autosave.uniqueId||""==this.options.autosave.uniqueId)return void console.log("SimpleMDE: You must set a uniqueId to use the autosave feature");null!=e.element.form&&void 0!=e.element.form&&e.element.form.addEventListener("submit",function(){localStorage.removeItem("smde_"+e.options.autosave.uniqueId)}),this.options.autosave.loaded!==!0&&("string"==typeof localStorage.getItem("smde_"+this.options.autosave.uniqueId)&&""!=localStorage.getItem("smde_"+this.options.autosave.uniqueId)&&(this.codemirror.setValue(localStorage.getItem("smde_"+this.options.autosave.uniqueId)),this.options.autosave.foundSavedValue=!0),this.options.autosave.loaded=!0),localStorage.setItem("smde_"+this.options.autosave.uniqueId,e.value());var t=document.getElementById("autosaved");if(null!=t&&void 0!=t&&""!=t){var n=new Date,r=n.getHours(),i=n.getMinutes(),o="am",a=r;a>=12&&(a=r-12,o="pm"),0==a&&(a=12),i=10>i?"0"+i:i,t.innerHTML="Autosaved: "+a+":"+i+" "+o}this.autosaveTimeoutId=setTimeout(function(){e.autosave()},this.options.autosave.delay||1e4)}else console.log("SimpleMDE: localStorage not available, cannot autosave")},B.prototype.clearAutosavedValue=function(){if(_()){if(void 0==this.options.autosave||void 0==this.options.autosave.uniqueId||""==this.options.autosave.uniqueId)return void console.log("SimpleMDE: You must set a uniqueId to clear the autosave value");localStorage.removeItem("smde_"+this.options.autosave.uniqueId)}else console.log("SimpleMDE: localStorage not available, cannot autosave")},B.prototype.createSideBySide=function(){var e=this.codemirror,t=e.getWrapperElement(),n=t.nextSibling;n&&/editor-preview-side/.test(n.className)||(n=document.createElement("div"),n.className="editor-preview-side",t.parentNode.insertBefore(n,t.nextSibling));var r=!1,i=!1;return e.on("scroll",function(e){if(r)return void(r=!1);i=!0;var t=e.getScrollInfo().height-e.getScrollInfo().clientHeight,o=parseFloat(e.getScrollInfo().top)/t,a=(n.scrollHeight-n.clientHeight)*o;n.scrollTop=a}),n.onscroll=function(){if(i)return void(i=!1);r=!0;var t=n.scrollHeight-n.clientHeight,o=parseFloat(n.scrollTop)/t,a=(e.getScrollInfo().height-e.getScrollInfo().clientHeight)*o;e.scrollTo(0,a)},n},B.prototype.createToolbar=function(e){if(e=e||this.options.toolbar,e&&0!==e.length){var t;for(t=0;t<e.length;t++)void 0!=K[e[t]]&&(e[t]=K[e[t]]);var n=document.createElement("div");n.className="editor-toolbar";var r=this,a={};for(r.toolbar=e,t=0;t<e.length;t++)if(("guide"!=e[t].name||r.options.toolbarGuideIcon!==!1)&&!(r.options.hideIcons&&-1!=r.options.hideIcons.indexOf(e[t].name)||("fullscreen"==e[t].name||"side-by-side"==e[t].name)&&$())){if("|"===e[t]){for(var s=!1,c=t+1;c<e.length;c++)"|"===e[c]||r.options.hideIcons&&-1!=r.options.hideIcons.indexOf(e[c].name)||(s=!0);if(!s)continue}!function(e){var t;t="|"===e?o():i(e,r.options.toolbarTips,r.options.shortcuts),e.action&&("function"==typeof e.action?t.onclick=function(t){t.preventDefault(),e.action(r)}:"string"==typeof e.action&&(t.href=e.action,t.target="_blank")),a[e.name||e]=t,n.appendChild(t)}(e[t])}r.toolbarElements=a;var u=this.codemirror;u.on("cursorActivity",function(){var e=l(u);for(var t in a)!function(t){var n=a[t];e[t]?n.className+=" active":"fullscreen"!=t&&"side-by-side"!=t&&(n.className=n.className.replace(/\s*active\s*/g,""))}(t)});var f=u.getWrapperElement();return f.parentNode.insertBefore(n,f),n}},B.prototype.createStatusbar=function(e){e=e||this.options.status;var t=this.options,n=this.codemirror;if(e&&0!==e.length){var r,i,o,a=[];for(r=0;r<e.length;r++)if(i=void 0,o=void 0,"object"==typeof e[r])a.push({className:e[r].className,defaultValue:e[r].defaultValue,onUpdate:e[r].onUpdate});else{var l=e[r];"words"===l?(o=function(e){e.innerHTML=W(n.getValue())},i=function(e){e.innerHTML=W(n.getValue())}):"lines"===l?(o=function(e){e.innerHTML=n.lineCount()},i=function(e){e.innerHTML=n.lineCount()}):"cursor"===l?(o=function(e){e.innerHTML="0:0"},i=function(e){var t=n.getCursor();e.innerHTML=t.line+":"+t.ch}):"autosave"===l&&(o=function(e){void 0!=t.autosave&&t.autosave.enabled===!0&&e.setAttribute("id","autosaved")}),a.push({className:l,defaultValue:o,onUpdate:i})}var s=document.createElement("div");for(s.className="editor-statusbar",r=0;r<a.length;r++){var c=a[r],u=document.createElement("span");u.className=c.className,"function"==typeof c.defaultValue&&c.defaultValue(u),"function"==typeof c.onUpdate&&this.codemirror.on("update",function(e,t){return function(){t.onUpdate(e)}}(u,c)),s.appendChild(u)}var f=this.codemirror.getWrapperElement();return f.parentNode.insertBefore(s,f.nextSibling),s}},B.prototype.value=function(e){return void 0===e?this.codemirror.getValue():(this.codemirror.getDoc().setValue(e),this)},B.toggleBold=c,B.toggleItalic=u,B.toggleStrikethrough=f,B.toggleBlockquote=d,B.toggleHeadingSmaller=p,B.toggleHeadingBigger=m,B.toggleHeading1=g,B.toggleHeading2=v,B.toggleHeading3=y,B.toggleCodeBlock=h,B.toggleUnorderedList=x,B.toggleOrderedList=b,B.cleanBlock=w,B.drawLink=k,B.drawImage=S,B.drawTable=C,B.drawHorizontalRule=L,B.undo=T,B.redo=M,B.togglePreview=A,B.toggleSideBySide=N,B.toggleFullScreen=s,B.prototype.toggleBold=function(){c(this)},B.prototype.toggleItalic=function(){u(this)},B.prototype.toggleStrikethrough=function(){f(this)},B.prototype.toggleBlockquote=function(){d(this)},B.prototype.toggleHeadingSmaller=function(){p(this)},B.prototype.toggleHeadingBigger=function(){m(this)},B.prototype.toggleHeading1=function(){g(this)},B.prototype.toggleHeading2=function(){v(this)},B.prototype.toggleHeading3=function(){y(this)},B.prototype.toggleCodeBlock=function(){h(this)},B.prototype.toggleUnorderedList=function(){x(this)},B.prototype.toggleOrderedList=function(){b(this)},B.prototype.cleanBlock=function(){w(this)},B.prototype.drawLink=function(){k(this)},B.prototype.drawImage=function(){S(this)},B.prototype.drawTable=function(){C(this)},B.prototype.drawHorizontalRule=function(){L(this)},B.prototype.undo=function(){T(this)},B.prototype.redo=function(){M(this)},B.prototype.togglePreview=function(){A(this)},B.prototype.toggleSideBySide=function(){N(this)},B.prototype.toggleFullScreen=function(){s(this)},B.prototype.isPreviewActive=function(){var e=this.codemirror,t=e.getWrapperElement(),n=t.lastChild;return/editor-preview-active/.test(n.className)},B.prototype.isSideBySideActive=function(){var e=this.codemirror,t=e.getWrapperElement(),n=t.nextSibling;return/editor-preview-active-side/.test(n.className)},B.prototype.isFullscreenActive=function(){var e=this.codemirror;return e.getOption("fullScreen")},B.prototype.getState=function(){var e=this.codemirror;return l(e)},B.prototype.toTextArea=function(){var e=this.codemirror,t=e.getWrapperElement();t.parentNode&&(this.gui.toolbar&&t.parentNode.removeChild(this.gui.toolbar),this.gui.statusbar&&t.parentNode.removeChild(this.gui.statusbar),this.gui.sideBySide&&t.parentNode.removeChild(this.gui.sideBySide)),e.toTextArea(),this.autosaveTimeoutId&&(clearTimeout(this.autosaveTimeoutId),this.autosaveTimeoutId=void 0,this.clearAutosavedValue())},t.exports=B},{"./codemirror/tablist":19,codemirror:10,"codemirror-spell-checker":4,"codemirror/addon/display/fullscreen.js":5,"codemirror/addon/display/placeholder.js":6,"codemirror/addon/edit/continuelist.js":7,"codemirror/addon/mode/overlay.js":8,"codemirror/addon/selection/mark-selection.js":9,"codemirror/mode/gfm/gfm.js":11,"codemirror/mode/markdown/markdown.js":12,"codemirror/mode/xml/xml.js":14,marked:17}]},{},[20])(20)});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-datepicker/vue-datepicker.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3faef998\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./node_modules/vue-datepicker/vue-datepicker.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./node_modules/vue-datepicker/vue-datepicker.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3faef998\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./node_modules/vue-datepicker/vue-datepicker.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3faef998"
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
Component.options.__file = "node_modules/vue-datepicker/vue-datepicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3faef998", Component.options)
  } else {
    hotAPI.reload("data-v-3faef998", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3faef998\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./node_modules/vue-datepicker/vue-datepicker.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cov-vue-date" }, [
    _c("div", { staticClass: "datepickbox" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.date.time,
            expression: "date.time"
          }
        ],
        staticClass: "cov-datepicker",
        style: _vm.option.inputStyle ? _vm.option.inputStyle : {},
        attrs: {
          type: "text",
          title: "input date",
          readonly: "readonly",
          placeholder: _vm.option.placeholder,
          required: _vm.required
        },
        domProps: { value: _vm.date.time },
        on: {
          click: _vm.showCheck,
          foucus: _vm.showCheck,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.date, "time", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _vm.showInfo.check
      ? _c(
          "div",
          {
            staticClass: "datepicker-overlay",
            style: {
              background: _vm.option.overlayOpacity
                ? "rgba(0,0,0," + _vm.option.overlayOpacity + ")"
                : "rgba(0,0,0,0.5)"
            },
            on: {
              click: function($event) {
                _vm.dismiss($event)
              }
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "cov-date-body",
                style: {
                  "background-color": _vm.option.color
                    ? _vm.option.color.header
                    : "#3f51b5"
                }
              },
              [
                _c("div", { staticClass: "cov-date-monthly" }, [
                  _c(
                    "div",
                    {
                      staticClass: "cov-date-previous",
                      on: {
                        click: function($event) {
                          _vm.nextMonth("pre")
                        }
                      }
                    },
                    [_vm._v("«")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "cov-date-caption",
                      style: {
                        color: _vm.option.color
                          ? _vm.option.color.headerText
                          : "#fff"
                      }
                    },
                    [
                      _c("span", { on: { click: _vm.showYear } }, [
                        _c("small", [_vm._v(_vm._s(_vm.checked.year))])
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { on: { click: _vm.showMonth } }, [
                        _vm._v(_vm._s(_vm.displayInfo.month))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "cov-date-next",
                      on: {
                        click: function($event) {
                          _vm.nextMonth("next")
                        }
                      }
                    },
                    [_vm._v("»")]
                  )
                ]),
                _vm._v(" "),
                _vm.showInfo.day
                  ? _c("div", { staticClass: "cov-date-box" }, [
                      _c(
                        "div",
                        { staticClass: "cov-picker-box" },
                        [
                          _c("div", { staticClass: "week" }, [
                            _c(
                              "ul",
                              _vm._l(_vm.library.week, function(weekie) {
                                return _c("li", [_vm._v(_vm._s(weekie))])
                              })
                            )
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.dayList, function(day) {
                            return _c(
                              "div",
                              {
                                staticClass: "day",
                                class: {
                                  checked: day.checked,
                                  unavailable: day.unavailable,
                                  "passive-day": !day.inMonth
                                },
                                style: day.checked
                                  ? _vm.option.color &&
                                    _vm.option.color.checkedDay
                                    ? {
                                        background: _vm.option.color.checkedDay
                                      }
                                    : { background: "#F50057" }
                                  : {},
                                attrs: { "track-by": "$index" },
                                on: {
                                  click: function($event) {
                                    _vm.checkDay(day)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(day.value))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.showInfo.year
                  ? _c("div", { staticClass: "cov-date-box list-box" }, [
                      _c(
                        "div",
                        {
                          staticClass: "cov-picker-box date-list",
                          attrs: { id: "yearList" }
                        },
                        _vm._l(_vm.library.year, function(yearItem) {
                          return _c(
                            "div",
                            {
                              staticClass: "date-item",
                              attrs: { "track-by": "$index" },
                              on: {
                                click: function($event) {
                                  _vm.setYear(yearItem)
                                }
                              }
                            },
                            [_vm._v(_vm._s(yearItem))]
                          )
                        })
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.showInfo.month
                  ? _c("div", { staticClass: "cov-date-box list-box" }, [
                      _c(
                        "div",
                        { staticClass: "cov-picker-box date-list" },
                        _vm._l(_vm.library.month, function(monthItem) {
                          return _c(
                            "div",
                            {
                              staticClass: "date-item",
                              attrs: { "track-by": "$index" },
                              on: {
                                click: function($event) {
                                  _vm.setMonth(monthItem)
                                }
                              }
                            },
                            [_vm._v(_vm._s(monthItem))]
                          )
                        })
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.showInfo.hour
                  ? _c("div", { staticClass: "cov-date-box list-box" }, [
                      _c("div", { staticClass: "cov-picker-box date-list" }, [
                        _c("div", { staticClass: "watch-box" }, [
                          _c("div", { staticClass: "hour-box" }, [
                            _c("div", {
                              staticClass: "mui-pciker-rule mui-pciker-rule-ft"
                            }),
                            _vm._v(" "),
                            _c(
                              "ul",
                              _vm._l(_vm.hours, function(hitem) {
                                return _c(
                                  "li",
                                  {
                                    staticClass: "hour-item",
                                    class: { active: hitem.checked },
                                    on: {
                                      click: function($event) {
                                        _vm.setTime("hour", hitem, _vm.hours)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(hitem.value))]
                                )
                              })
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "min-box" },
                            [
                              _c("div", {
                                staticClass:
                                  "mui-pciker-rule mui-pciker-rule-ft"
                              }),
                              _vm._v(" "),
                              _vm._l(_vm.mins, function(mitem) {
                                return _c(
                                  "div",
                                  {
                                    staticClass: "min-item",
                                    class: { active: mitem.checked },
                                    on: {
                                      click: function($event) {
                                        _vm.setTime("min", mitem, _vm.mins)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(mitem.value))]
                                )
                              })
                            ],
                            2
                          )
                        ])
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "button-box" }, [
                  _c(
                    "span",
                    {
                      on: {
                        click: function($event) {
                          _vm.showInfo.check = false
                        }
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.option.buttons
                            ? _vm.option.buttons.cancel
                            : "Cancel"
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", { on: { click: _vm.picked } }, [
                    _vm._v(
                      _vm._s(_vm.option.buttons ? _vm.option.buttons.ok : "Ok")
                    )
                  ])
                ])
              ]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3faef998", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMultiselect=e():t.VueMultiselect=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=4)}([function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t){return 0!==t&&(!(!Array.isArray(t)||0!==t.length)||!t)}function o(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}function l(t,e,i,n){return t.filter(function(t){return o(n(t,i),e)})}function r(t){return t.filter(function(t){return!t.$isLabel})}function a(t,e){return function(i){return i.reduce(function(i,n){return n[t]&&n[t].length?(i.push({$groupLabel:n[e],$isLabel:!0}),i.concat(n[t])):i},[])}}function u(t,e,i,s,o){return function(r){return r.map(function(r){var a;if(!r[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var u=l(r[i],t,e,o);return u.length?(a={},n(a,s,r[s]),n(a,i,u),a):[]})}}Object.defineProperty(e,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=i(2),p=function(t){return t&&t.__esModule?t:{default:t}}(h),d=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(t){return e.reduce(function(t,e){return e(t)},t)}};e.default={data:function(){return{search:"",isOpen:!1,prefferedOpenDirection:"below",optimizedHeight:this.maxHeight,internalValue:this.value||0===this.value?(0,p.default)(Array.isArray(this.value)?this.value:[this.value]):[]}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return s(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1}},mounted:function(){this.multiple||this.clearOnSelect||console.warn("[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false."),!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.")},computed:{filteredOptions:function(){var t=this.search||"",e=t.toLowerCase().trim(),i=this.options.concat();return i=this.internalSearch?this.groupValues?this.filterAndFlat(i,e,this.label):l(i,e,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(this.isNotSelected):i,this.taggable&&e.length&&!this.isExistingOption(e)&&("bottom"===this.tagPosition?i.push({isTag:!0,label:e}):i.unshift({isTag:!0,label:e})),i.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map(function(e){return e[t.trackBy]}):this.internalValue},optionKeys:function(){var t=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(e){return t.customLabel(e,t.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(t,e){this.resetAfter&&this.internalValue.length&&(this.search="",this.internalValue=[])},search:function(){this.$emit("search-change",this.search,this.id)},value:function(t){this.internalValue=this.getInternalValue(t)}},methods:{getValue:function(){return this.multiple?(0,p.default)(this.internalValue):0===this.internalValue.length?null:(0,p.default)(this.internalValue[0])},getInternalValue:function(t){return null===t||void 0===t?[]:this.multiple?(0,p.default)(t):(0,p.default)([t])},filterAndFlat:function(t,e,i){return d(u(e,i,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return d(a(this.groupValues,this.groupLabel),r)(t)},updateSearch:function(t){this.search=t},isExistingOption:function(t){return!!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isNotSelected:function(t){return!this.isSelected(t)},getOptionLabel:function(t){if(s(t))return"";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return s(e)?"":e},select:function(t,e){if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isLabel||t.$isDisabled)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.multiple?this.internalValue.push(t):this.internalValue=[t],this.$emit("select",(0,p.default)(t),this.id),this.$emit("input",this.getValue(),this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===(void 0===t?"undefined":c(t))?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);this.internalValue.splice(i,1),this.$emit("input",this.getValue(),this.id),this.$emit("remove",(0,p.default)(t),this.id),this.closeOnSelect&&e&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return t.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.prefferedOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.prefferedOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight))}},handleTouchStartStop:function(t,e){this.pointerSet(t),this.select(e)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(t,e){return{"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer].$isLabel&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer].$isLabel&&this.pointerBackward()):this.filteredOptions[0].$isLabel&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0)},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0}}}},function(t,e,i){"use strict";function n(t){if(Array.isArray(t))return t.map(n);if(t&&"object"===(void 0===t?"undefined":s(t))){for(var e={},i=Object.keys(t),o=0,l=i.length;o<l;o++){var r=i[o];e[r]=n(t[r])}return e}return t}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=n},function(t,e,i){"use strict";function n(t){i(6)}Object.defineProperty(e,"__esModule",{value:!0});var s=i(5),o=i.n(s),l=i(8),r=i(7),a=n,u=r(o.a,l.a,!1,a,null,null);e.default=u.exports},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.deepClone=e.pointerMixin=e.multiselectMixin=e.Multiselect=void 0;var s=i(3),o=n(s),l=i(0),r=n(l),a=i(1),u=n(a),c=i(2),h=n(c);e.default=o.default,e.Multiselect=o.default,e.multiselectMixin=r.default,e.pointerMixin=u.default,e.deepClone=h.default},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),o=n(s),l=i(1),r=n(l);e.default={name:"vue-multiselect",mixins:[o.default,r.default],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return"and "+t+" more"}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{visibleValue:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"auto"}:{width:"0",position:"absolute"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.prefferedOpenDirection}}}},function(t,e){},function(t,e){t.exports=function(t,e,i,n,s,o){var l,r=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(l=t,r=t.default);var u="function"==typeof r?r.options:r;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId=s);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var h=u.functional,p=h?u.render:u.beforeCreate;h?(u._injectStyles=c,u.render=function(t,e){return c.call(e),p(t,e)}):u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:l,exports:r,options:u}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove},attrs:{tabindex:t.searchable?-1:t.tabindex},on:{focus:function(e){t.activate()},blur:function(e){!t.searchable&&t.deactivate()},keydown:[function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key)?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerForward()):null},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key)?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerBackward()):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key)||!t._k(e.keyCode,"tab",9,e.key)?(e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null}],keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.deactivate()}}},[t._t("caret",[i("div",{staticClass:"multiselect__select",on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}}})],{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),i("div",{ref:"tags",staticClass:"multiselect__tags"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValue.length>0,expression:"visibleValue.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValue,function(e){return[t._t("tag",[i("span",{staticClass:"multiselect__tag"},[i("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),i("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keydown:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13,i.key))return null;i.preventDefault(),t.removeElement(e)},mousedown:function(i){i.preventDefault(),t.removeElement(e)}}})])],{option:e,search:t.search,remove:t.removeElement})]})],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[i("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})]:t._e(),t._v(" "),i("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),t._v(" "),t.searchable?i("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"off",placeholder:t.placeholder,disabled:t.disabled,tabindex:t.tabindex},domProps:{value:t.isOpen?t.search:t.currentOptionLabel},on:{input:function(e){t.updateSearch(e.target.value)},focus:function(e){e.preventDefault(),t.activate()},blur:function(e){e.preventDefault(),t.deactivate()},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.deactivate()},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key))return null;e.preventDefault(),t.pointerForward()},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key))return null;e.preventDefault(),t.pointerBackward()},function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key)?(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null},function(e){if(!("button"in e)&&t._k(e.keyCode,"delete",[8,46],e.key))return null;e.stopPropagation(),t.removeLastElement()}]}}):t._e(),t._v(" "),t.searchable?t._e():i("span",{staticClass:"multiselect__single",domProps:{textContent:t._s(t.currentOptionLabel)},on:{mousedown:function(e){e.preventDefault(),t.toggle(e)}}})],2),t._v(" "),i("transition",{attrs:{name:"multiselect"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},on:{focus:t.activate,mousedown:function(t){t.preventDefault()}}},[i("ul",{staticClass:"multiselect__content",style:t.contentStyle},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?i("li",[i("span",{staticClass:"multiselect__option"},[t._t("maxElements",[t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")])],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,function(e,n){return i("li",{key:n,staticClass:"multiselect__element"},[e&&(e.$isLabel||e.$isDisabled)?t._e():i("span",{staticClass:"multiselect__option",class:t.optionHighlight(n,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(i){i.stopPropagation(),t.select(e)},touchstart:function(i){i.stopPropagation(),i.preventDefault(),t.handleTouchStartStop(n,e)},mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.pointerSet(n)}}},[t._t("option",[i("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?i("span",{staticClass:"multiselect__option multiselect__option--disabled",class:t.optionHighlight(n,e)},[t._t("option",[i("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2):t._e()])}):t._e(),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[i("span",{staticClass:"multiselect__option"},[t._t("noResult",[t._v("No elements found. Consider changing the search query.")])],2)]),t._v(" "),t._t("afterList")],2)])])],2)},s=[],o={render:n,staticRenderFns:s};e.a=o}])});

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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3faef998\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./node_modules/vue-datepicker/vue-datepicker.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3faef998\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./node_modules/vue-datepicker/vue-datepicker.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("577f5839", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../css-loader/index.js!../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3faef998\",\"scoped\":true,\"hasInlineConfig\":true}!../vue-loader/lib/selector.js?type=styles&index=0&bustCache!./vue-datepicker.vue", function() {
     var newContent = require("!!../css-loader/index.js!../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3faef998\",\"scoped\":true,\"hasInlineConfig\":true}!../vue-loader/lib/selector.js?type=styles&index=0&bustCache!./vue-datepicker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


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