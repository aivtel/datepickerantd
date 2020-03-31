// Object.defineProperty(exports, '__esModule', { value: true })
const newViewBox = '64 64 896 896'
const fill = 'fill'
const outline = 'outline'

function getNode(viewBox) {
  const paths = []
  for (let _i = 1; _i < arguments.length; _i++) {
    paths[_i - 1] = arguments[_i]
  }
  return {
    tag: 'svg',
    attrs: { viewBox, focusable: false },
    children: paths.map(function(path) {
      if (Array.isArray(path)) {
        return {
          tag: 'path',
          attrs: {
            fill: path[0],
            d: path[1],
          },
        }
      }
      return {
        tag: 'path',
        attrs: {
          d: path,
        },
      }
    }),
  }
}
function getIcon(name, theme, icon) {
  return {
    name,
    theme,
    icon,
  }
}

export const CloseCircleFill = getIcon(
  'close-circle',
  fill,
  getNode(
    newViewBox,
    'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z',
  ),
)

export const CalendarOutline = getIcon(
  'calendar',
  outline,
  getNode(
    newViewBox,
    'M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z',
  ),
)
