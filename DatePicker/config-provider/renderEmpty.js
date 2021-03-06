import * as React from 'react'
// import Empty from '../empty';
import { ConfigConsumer } from './context'

var renderEmpty = function renderEmpty(componentName) {
  return React.createElement(ConfigConsumer, null, function(_ref) {
    var getPrefixCls = _ref.getPrefixCls
    var prefix = getPrefixCls('empty')

    switch (componentName) {
      case 'Table':
      case 'List':
        // return React.createElement(Empty, {
        return React.createElement('span', {
          // image: Empty.PRESENTED_IMAGE_SIMPLE,
        })

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        // return React.createElement(Empty, {
        return React.createElement('span', {
          // image: Empty.PRESENTED_IMAGE_SIMPLE,
          className: ''.concat(prefix, '-small'),
        })

      default:
        // return React.createElement(Empty, null);
        return React.createElement('span', null)
    }
  })
}

export default renderEmpty
//# sourceMappingURL=renderEmpty.js.map
