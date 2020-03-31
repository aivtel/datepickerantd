import ReactIcon from './ReactIcon/ReactIcon'
export function setTwoToneColor(primaryColor) {
  return ReactIcon.setTwoToneColors({
    primaryColor: primaryColor,
  })
}
export function getTwoToneColor() {
  var colors = ReactIcon.getTwoToneColors()
  return colors.primaryColor
}
//# sourceMappingURL=twoTonePrimaryColor.js.map
