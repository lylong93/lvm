
import mountComponent from './life'
import patch from './patch'
import {act} from './unit'

const reExp = new RegExp(/{{[ \Sa-z]}}/g)

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
	
	// 处理vnode
	function _c(ast) {
		let _value =null;
		if(ast.value && ast.value.name.match(reExp)) {
			_value = ast.value.name
		}
		if(ast.name.indexOf('com')==0) {
		// 组件
		creatComVnode(ast,vm)
		} else if(_value) {
			// 模拟render时
			//如果是内容元素替换{{}}
			// 触发了get
			ast.value.name = ast.value.name.replace(reExp,function() {
				const i = ast.value.name.match(/\{\{(.*)\}\}/)[1] // 贪婪匹配到 {{}}中内容
				return vm._data[i]
			})
			ast 
		}else {
			 ast
		}

		if(ast.child) {
			_c(ast.child)
		}
	}

	function creatComVnode(ast,vm) {
		const sub = vm.extend(ast)
		ast._istemplate = true
		ast.sub = sub
		// return ast
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