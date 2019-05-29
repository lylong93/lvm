
import mountComponent from './life'
import patch from './patch'
import {act} from './unit'

const initOther =(Lve) =>{
Lve.prototype.$mount = function(el) {
	mountComponent(this,el)
}
/**
	 ast to render to voden
**/
Lve.prototype._render = function() {
	// debugger
	const vm = this
	let voden = vm.ast

	_c(vm.ast)

	function creatComVnode(ast,vm) {
		const sub = vm.extend(ast)
		ast._istemplate = true
		ast.sub = sub
		// return ast
	}

	// 处理vnode
	function _c(ast) {

		if(ast.name.indexOf('com')==0) {
		// 组件
			 creatComVnode(ast,vm)
		} else {
			 ast
		}

		if(ast.child) {
			_c(ast.child)
		}
	}

	return voden
}

Lve.prototype._patch = patch

Lve.prototype._update = function(voden) {
	act.current=this
	// console.log(act)
	const vm = this
	vm.$el = vm._patch(vm.$el,voden)
}

Lve.prototype.extend = function(voden) {

	const sup = this

	const sub = function (options) {
		sup.constructor.prototype._init(options)
	}
	sub.prototype = Object.create(this.constructor.prototype)
	return sub
}

}


export default initOther