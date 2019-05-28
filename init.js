import parse from './compiler'

const initMxin=(Lve)=> {
Lve.prototype._init = function (options){
	const vm = this

	vm.$options = options

	vm.ast = parse(vm.$options.template)

	// console.log(vm)
	if(vm) {
		vm.$mount(vm.$options.el)
	}
 }
}

export default initMxin 