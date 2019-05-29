import parse from './compiler'

const initMxin=(Lve)=> {

let id =0 ;
Lve.prototype._init = function (options){

	const vm = this

	vm.id=id++

	vm.$options = options

	vm.ast = parse(vm.$options.template)

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