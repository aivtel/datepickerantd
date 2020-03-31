const __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
// Object.defineProperty(exports, '__esModule', { value: true })
const generate_1 = __importDefault(require('./generate'))

export const generate = generate_1.default
const presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666',
}
const presetPalettes = {}
Object.keys(presetPrimaryColors).forEach(function(key) {
  presetPalettes[key] = generate_1.default(presetPrimaryColors[key])
  presetPalettes[key].primary = presetPalettes[key][5]
})
const { red } = presetPalettes
const { volcano } = presetPalettes
const { gold } = presetPalettes
const { orange } = presetPalettes
const { yellow } = presetPalettes
const { lime } = presetPalettes
const { green } = presetPalettes
const { cyan } = presetPalettes
const { blue } = presetPalettes
const { geekblue } = presetPalettes
const { purple } = presetPalettes
const { magenta } = presetPalettes
const { grey } = presetPalettes
export {
  presetPrimaryColors,
  presetPalettes,
  red,
  volcano,
  gold,
  orange,
  yellow,
  lime,
  green,
  cyan,
  blue,
  geekblue,
  purple,
  magenta,
  grey,
}
