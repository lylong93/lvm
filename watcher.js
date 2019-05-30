import {pushTarget,popTarget} from './dep.js'

class Watcher{
	constructor(vm,fn){
		this.vm = vm
		this.expFn = fn

		this.getter = this.expFn

		this.get()
	}
	get() {
		pushTarget(this)
		let value = this.getter() // fn即updateComponent
		popTarget(this)
	}
	update() {
		next(this.get())
	}

}



function next(cb) {
	 Promise.resolve().then({
	 	cb
	 })
}
export default Watcher