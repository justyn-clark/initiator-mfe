import 'babel-polyfill'
import React from "react"
import { render } from "react-dom"
import '../src/scss/style.scss'
import './js/modules/global'
import './js/modules/config'
import './js/modules/utils'
import './js/modules/sidebar'
import './js/modules/droplet'
import './js/modules/youtubeData'
import './js/modules/canIUseData'
// import './js/modules/menu'

import clickHandlers from './js/modules/handleClicks'

clickHandlers()
// EVT.on('init', MFE.utils.resize)

//function showSize() {
//  window.onresize = MFE.utils.resize
//}
//
//showSize()
