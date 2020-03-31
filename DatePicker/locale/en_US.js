/* eslint-disable */
import CalendarLocale from 'rc-calendar/es/locale/ru_RU'
import TimePickerLocale from './timePickerLocale_ru_RU' // Merge into a locale object

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  return _extends.apply(this, arguments)
}

var locale = {
  lang: _extends(
    {
      placeholder: 'Select date',
      rangePlaceholder: ['Start date', 'End Date'],
    },
    CalendarLocale
  ),
  timePickerLocale: _extends({}, TimePickerLocale),
} // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale
//# sourceMappingURL=en_US.js.map
