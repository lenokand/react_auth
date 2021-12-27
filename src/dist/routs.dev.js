"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.privateRouts = exports.publicRouts = void 0;

var _const = require("./utils/const");

var _SeoSubmenu = _interopRequireDefault(require("./components/SeoSubmenu"));

var _MainPage = _interopRequireDefault(require("./components/MainPage"));

var _Autorisation = _interopRequireDefault(require("./components/Autorisation"));

var _DialogSupport = _interopRequireDefault(require("./components/DialogSupport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import Autorisation from "./component/Autorisation";
// import Dialog from "./components/Dialog";
// import Guid from "./components/Guid";
var publicRouts = [{
  path: _const.LOGIN_ROUTE,
  Component: _Autorisation["default"] // Component:SeoSubmenu

}, {
  path: _const.FORGOT_ROUTE,
  Component: _Autorisation["default"] // Component:SeoSubmenu

}]; // export const supportRouts = [
//     {
//         path: CHAT_ROUTE_SUPPORT,
//         Component: DialogSupport
//     },
// ]

exports.publicRouts = publicRouts;
var privateRouts = [// {
//     path: CHAT_ROUTE_SUPPORT,
//     Component: DialogSupport
// },
{
  path: _const.CHAT_ROUTE,
  Component: _MainPage["default"]
}, {
  path: _const.MAIN_ROUTE,
  Component: _MainPage["default"]
}, {
  path: _const.SEO_ROUTE,
  Component: _MainPage["default"]
}, {
  path: _const.DOC_ROUTE,
  Component: _MainPage["default"]
}, {
  path: _const.NOTIFICSTION_ROUTE,
  Component: _MainPage["default"]
}, {
  path: _const.SETTINGS_ROUTE,
  Component: _MainPage["default"]
}, {
  path: _const.SEO_MAIN_ROUTE,
  Component: _MainPage["default"]
}, {
  path: _const.SEO_Position_ROUTE,
  Component: _MainPage["default"]
}, {
  path: _const.SEO_INDEX_ROUTE,
  Component: _MainPage["default"]
}, {
  path: _const.SEO_REPORT_ROUTE,
  Component: _MainPage["default"]
}, {
  path: _const.SEO_SERVICES_ROUTE,
  Component: _MainPage["default"]
}, {
  path: _const.SEO_INSPECTION_ROUTE,
  Component: _MainPage["default"]
}, {
  path: _const.SEO_NEWS_ROUTE,
  Component: _MainPage["default"]
}, {
  path: _const.SEO_DETAILS_ROUTE,
  Component: _MainPage["default"]
}, {
  path: _const.SEO_CONTACTS_ROUTE,
  Component: _MainPage["default"]
}];
exports.privateRouts = privateRouts;