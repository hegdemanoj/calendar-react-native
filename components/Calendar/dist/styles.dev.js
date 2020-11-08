"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.CurrentMonthDates = exports.OtherMonthDates = exports.CalendarDatesView = exports.Divider = exports.CalendarBody = exports.WeekDaysContainer = exports.WeekDays = exports.MonthYear = exports.CalendarHeader = exports.MonthArrow = void 0;

var _reactNative = require("react-native");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\nflex-direction: column;\nfont-family: Montserrat-Medium;\ncolor: #111111;\nfont-size: 15;\npadding:5px;\nwidth:40;\nheight:40;\ntext-align:center;\ntext-alignVertical:center;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\nfont-family: Montserrat-Medium;\ncolor: #ECEDF1;\nfont-size: 15;\npadding:5px;\nwidth:40;\nheight:40;\ntext-align:center;\ntext-alignVertical:center;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\nflex-direction: row;\npadding:5px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nheight:1;\nborder-width:.5;\nwidth: 250;\nborder-color:#ECEDF1;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\npadding-top:50;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\npadding:5px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nflex-direction:row;\nfont-family: Montserrat-Medium;\ncolor: #ECEDF1;\nfont-size: 15;\npadding:5px;\ntext-align:center;\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nfont-family:Montserrat-SemiBold;\nfont-size:18;\nwidth:165;\ntext-align:center;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    color: #111111;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nwidth:50;\ntext-align:center;\nfont-family:Montserrat-SemiBold;\n font-size:18;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MonthArrow = _styledComponents["default"].Text(_templateObject());

exports.MonthArrow = MonthArrow;

var CalendarHeader = _styledComponents["default"].View(_templateObject2());

exports.CalendarHeader = CalendarHeader;

var MonthYear = _styledComponents["default"].Text(_templateObject3());

exports.MonthYear = MonthYear;

var WeekDays = _styledComponents["default"].Text(_templateObject4());

exports.WeekDays = WeekDays;

var WeekDaysContainer = _styledComponents["default"].View(_templateObject5());

exports.WeekDaysContainer = WeekDaysContainer;

var CalendarBody = _styledComponents["default"].View(_templateObject6());

exports.CalendarBody = CalendarBody;

var Divider = _styledComponents["default"].View(_templateObject7());

exports.Divider = Divider;

var CalendarDatesView = _styledComponents["default"].View(_templateObject8());

exports.CalendarDatesView = CalendarDatesView;

var OtherMonthDates = _styledComponents["default"].Text(_templateObject9());

exports.OtherMonthDates = OtherMonthDates;

var CurrentMonthDates = _styledComponents["default"].Text(_templateObject10());

exports.CurrentMonthDates = CurrentMonthDates;

var styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'column',
    opacity: 1
  },
  currmonthdates: {},
  othermonthdates: {// display: 'flex',
    // flexDirection: 'column',
  },
  weeknames: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Montserrat-Medium',
    color: '#ECEDF1',
    fontSize: 15,
    padding: 5,
    textAlign: 'center'
  },
  monthnames: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: '#111111'
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  line: {},
  holiday: {
    height: 10,
    width: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    position: 'absolute',
    right: 0
  }
});

exports.styles = styles;