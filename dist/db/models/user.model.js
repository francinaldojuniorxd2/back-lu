"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UserN = exports.NUser = void 0;
var _sequelizeTypescript = require("sequelize-typescript");
var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
const UserN = exports.UserN = 'Not a model';
const NUser = exports.NUser = 'Not a model';
let User = exports.default = (_dec = (0, _sequelizeTypescript.Table)({
  timestamps: true,
  tableName: 'user'
}), _dec2 = Reflect.metadata("design:type", String), _dec3 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = (_class2 = class User extends _sequelizeTypescript.Model {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "name", _descriptor, this);
    _initializerDefineProperty(this, "birthday", _descriptor2, this);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "name", [_sequelizeTypescript.Column, _dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "birthday", [_sequelizeTypescript.Column, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);