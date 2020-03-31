/* eslint-disable */
import RcCalendar from 'rc-calendar'
import createPicker from './createPicker'
import wrapPicker from './wrapPicker'
import RangePicker from './RangePicker'
import './datepicker.css'

function _extends() {
  // eslint-disable-next-line
  _extends =
    Object.assign ||
    function(target) {
      for (let i = 1; i < arguments.length; i++) {
        const source = arguments[i]

        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  return _extends.apply(this, arguments)
}

const DatePicker = wrapPicker(createPicker(RcCalendar), 'date')

_extends(DatePicker, {
  RangePicker: wrapPicker(RangePicker, 'date'),
})

export default DatePicker
// # sourceMappingURL=index.js.map
