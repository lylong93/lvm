const initMxin=(Lve)=> {
Lve.prototype._init = function (options){
	const vm = this

	vm.$options = options

	if(vm) {
		vm.$mount(vm.$options.el)
	}
 }
}

export default initMxin 