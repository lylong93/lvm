import mountComponent from './life'
import patch from './patch'

const initOther =(Lve) =>{
Lve.prototype.$mount = function(el) {

	const _el = document.querySelector(el)
	
	mountComponent(this,_el)
}


Lve.prototype._render = function() {
	let voden = '<div>voden</div>'
	return voden
}

Lve.prototype._patch = patch

Lve.prototype._update = function(voden) {
	const vm = this
	vm.$el = vm._patch(vm.$el,voden)
	}
}

export default initOther