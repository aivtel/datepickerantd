import _defineProperty2 from 'babel-runtime/helpers/defineProperty'

import _extends3 from 'babel-runtime/helpers/extends'

import _objectWithoutProperties2 from 'babel-runtime/helpers/objectWithoutProperties'

import _classCallCheck2 from 'babel-runtime/helpers/classCallCheck'

import _createClass2 from 'babel-runtime/helpers/createClass'

import _possibleConstructorReturn2 from 'babel-runtime/helpers/possibleConstructorReturn'

import _inherits2 from 'babel-runtime/helpers/inherits'

import _react from 'react'

import * as _utils from './utils'

// Object.defineProperty(exports, '__esModule', {
//   value: true,
// })

const _defineProperty3 = _interopRequireDefault(_defineProperty2)

const _extends4 = _interopRequireDefault(_extends3)

const _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2)

const _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

const _createClass3 = _interopRequireDefault(_createClass2)

const _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2)

const _inherits3 = _interopRequireDefault(_inherits2)

const React = _interopRequireWildcard(_react)

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  }
  const newObj = {}
  if (obj != null) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]
    }
  }
  newObj.default = obj
  return newObj
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
}

const Icon = (function(_React$Component) {
  ;(0, _inherits3.default)(Icon, _React$Component)

  function Icon() {
    ;(0, _classCallCheck3.default)(this, Icon)
    return (0, _possibleConstructorReturn3.default)(
      this,
      (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments),
    )
  }

  ;(0, _createClass3.default)(
    Icon,
    [
      {
        key: 'render',
        value: function render() {
          let _extends2

          const _props = this.props
          const { type } = _props
          const { className } = _props
          const { onClick } = _props
          const { style } = _props
          const { primaryColor } = _props
          const { secondaryColor } = _props
          const rest = (0, _objectWithoutProperties3.default)(_props, [
            'type',
            'className',
            'onClick',
            'style',
            'primaryColor',
            'secondaryColor',
          ])

          let target = void 0
          let colors = twoToneColorPalette
          if (primaryColor) {
            colors = {
              primaryColor,
              secondaryColor: secondaryColor || (0, _utils.getSecondaryColor)(primaryColor),
            }
          }
          if ((0, _utils.isIconDefinition)(type)) {
            target = type
          } else if (typeof type === 'string') {
            target = Icon.get(type, colors)
            if (!target) {
              // log(`Could not find icon: ${type}`);
              return null
            }
          }
          if (!target) {
            ;(0, _utils.log)(`type should be string or icon definiton, but got ${type}`)
            return null
          }
          if (target && typeof target.icon === 'function') {
            target = (0, _extends4.default)({}, target, {
              icon: target.icon(colors.primaryColor, colors.secondaryColor),
            })
          }
          return (0, _utils.generate)(
            target.icon,
            `svg-${target.name}`,
            (0, _extends4.default)(
              ((_extends2 = {
                className,
                onClick,
                style,
              }),
              (0, _defineProperty3.default)(_extends2, 'data-icon', target.name),
              (0, _defineProperty3.default)(_extends2, 'width', '1em'),
              (0, _defineProperty3.default)(_extends2, 'height', '1em'),
              (0, _defineProperty3.default)(_extends2, 'fill', 'currentColor'),
              (0, _defineProperty3.default)(_extends2, 'aria-hidden', 'true'),
              (0, _defineProperty3.default)(_extends2, 'focusable', 'false'),
              _extends2),
              rest,
            ),
          )
        },
      },
    ],
    [
      {
        key: 'add',
        value: function add() {
          const _this2 = this

          for (var _len = arguments.length, icons = Array(_len), _key = 0; _key < _len; _key++) {
            icons[_key] = arguments[_key]
          }

          icons.forEach(function(icon) {
            _this2.definitions.set((0, _utils.withSuffix)(icon.name, icon.theme), icon)
          })
        },
      },
      {
        key: 'clear',
        value: function clear() {
          this.definitions.clear()
        },
      },
      {
        key: 'get',
        value: function get(key) {
          const colors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : twoToneColorPalette

          if (key) {
            let target = this.definitions.get(key)
            if (target && typeof target.icon === 'function') {
              target = (0, _extends4.default)({}, target, {
                icon: target.icon(colors.primaryColor, colors.secondaryColor),
              })
            }
            return target
          }
        },
      },
      {
        key: 'setTwoToneColors',
        value: function setTwoToneColors(_ref) {
          const { primaryColor } = _ref
          const { secondaryColor } = _ref

          twoToneColorPalette.primaryColor = primaryColor
          twoToneColorPalette.secondaryColor = secondaryColor || (0, _utils.getSecondaryColor)(primaryColor)
        },
      },
      {
        key: 'getTwoToneColors',
        value: function getTwoToneColors() {
          return (0, _extends4.default)({}, twoToneColorPalette)
        },
      },
    ],
  )
  return Icon
})(React.Component)

Icon.displayName = 'IconReact'
Icon.definitions = new _utils.MiniMap()
// exports['default'] = Icon
// module.exports = exports.default

export default Icon
