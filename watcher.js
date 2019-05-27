class Watcher{
	constructor(vm,fn){
		this.vm = vm
		this.expFn = fn

		this.getter = this.expFn

		this.get()
	}
	get() {
		let value = this.getter() // fn即updateComponent
	}

}
export default Watcher