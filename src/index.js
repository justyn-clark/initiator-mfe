import 'babel-polyfill'
import '../src/scss/style.scss'
import cute from './cute.jpg'
import secondary from './secondary'

var rootEl = document.getElementById('root')
var imageEl = document.createElement('img')
imageEl.src = cute
rootEl.appendChild(imageEl)

secondary()
