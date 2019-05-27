import initMxin from './init'
import initOther from './other'

function Lve (options) {
	this._init(options)
}

initOther(Lve)
initMxin(Lve)

window.Lve= Lve