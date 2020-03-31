// eslint-disable-next-line import/prefer-default-export

import warning, { resetWarned } from 'rc-util/es/warning'
export { resetWarned }
export default (function(valid, component, message) {
  warning(valid, '[antd: '.concat(component, '] ').concat(message))
})
export function formatDate(value, format) {
  if (!value) {
    return ''
  }

  if (Array.isArray(format)) {
    format = format[0]
  }

  return value.format(format)
}

export function getDataOrAriaProps(props) {
  return Object.keys(props).reduce(function(prev, key) {
    if (
      (key.substr(0, 5) === 'data-' ||
        key.substr(0, 5) === 'aria-' ||
        key === 'role') &&
      key.substr(0, 7) !== 'data-__'
    ) {
      prev[key] = props[key]
    }

    return prev
  }, {})
}

export function interopDefault(m) {
  return m['default'] || m
}

export function generateShowHourMinuteSecond(format) {
  // Ref: http://momentjs.com/docs/#/parsing/string-format/
  return {
    showHour:
      format.indexOf('H') > -1 ||
      format.indexOf('h') > -1 ||
      format.indexOf('k') > -1,
    showMinute: format.indexOf('m') > -1,
    showSecond: format.indexOf('s') > -1,
  }
}
