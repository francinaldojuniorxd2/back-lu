"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sequelizeTypescript = require("sequelize-typescript");
var _invoice = _interopRequireDefault(require("./invoice.model"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
let InvoiceValues = exports.default = (_dec = (0, _sequelizeTypescript.Table)({
  tableName: 'invoice_values',
  underscored: true,
  timestamps: true
}), _dec2 = (0, _sequelizeTypescript.Column)({
  field: 'id',
  type: _sequelizeTypescript.DataType.UUID,
  defaultValue: _sequelizeTypescript.Sequelize.fn('gen_random_uuid'),
  unique: true,
  primaryKey: true,
  allowNull: false
}), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _sequelizeTypescript.Column)({
  field: 'key',
  type: _sequelizeTypescript.DataType.TEXT,
  allowNull: false
}), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _sequelizeTypescript.Column)({
  field: 'quantity',
  type: _sequelizeTypescript.DataType.INTEGER,
  allowNull: true
}), _dec7 = Reflect.metadata("design:type", Number), _dec8 = (0, _sequelizeTypescript.Column)({
  field: 'value',
  type: _sequelizeTypescript.DataType.DECIMAL(10, 2),
  allowNull: false
}), _dec9 = Reflect.metadata("design:type", Number), _dec10 = (0, _sequelizeTypescript.Column)({
  field: 'created_at',
  type: _sequelizeTypescript.DataType.DATE,
  defaultValue: _sequelizeTypescript.Sequelize.fn('NOW'),
  allowNull: true
}), _dec11 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec12 = (0, _sequelizeTypescript.ForeignKey)(() => _invoice.default), _dec13 = (0, _sequelizeTypescript.Column)({
  field: 'invoice_id',
  type: _sequelizeTypescript.DataType.UUID,
  allowNull: false
}), _dec14 = Reflect.metadata("design:type", String), _dec15 = (0, _sequelizeTypescript.Column)({
  field: 'updated_at',
  type: _sequelizeTypescript.DataType.DATE,
  defaultValue: _sequelizeTypescript.Sequelize.fn('NOW'),
  allowNull: true
}), _dec16 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec17 = (0, _sequelizeTypescript.BelongsTo)(() => _invoice.default, {
  foreignKey: 'invoice_id',
  targetKey: 'id'
}), _dec18 = Reflect.metadata("design:type", typeof _invoice.default === "undefined" ? Object : _invoice.default), _dec(_class = (_class2 = class InvoiceValues extends _sequelizeTypescript.Model {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "key", _descriptor2, this);
    _initializerDefineProperty(this, "quantity", _descriptor3, this);
    _initializerDefineProperty(this, "value", _descriptor4, this);
    _initializerDefineProperty(this, "createdAt", _descriptor5, this);
    _initializerDefineProperty(this, "invoiceId", _descriptor6, this);
    _initializerDefineProperty(this, "updatedAt", _descriptor7, this);
    _initializerDefineProperty(this, "invoice", _descriptor8, this);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "key", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "quantity", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "invoiceId", [_dec12, _dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "updatedAt", [_dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "invoice", [_dec17, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);