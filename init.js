import parse from './compiler'
import initData from './initData'

const initMxin=(Lve)=> {

let id =0 ;
Lve.prototype._init = function (options){
	const vm = this
	console.log(window)
	window.ttt =vm
	vm.id=id++

	vm.$options = options

	// 响应式
	if(vm.$options.data) {
		initData(vm)
	}
	
	vm.ast = parse(vm)

	if (options.component) {
		this.$mount(vm.$options.parent)
	}

	// console.log(vm)
	if(vm.$options.el) {
		vm.$mount(vm.$options.el)
	}
 }
}

export default initMxin 