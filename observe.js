import Dep from './dep'

class Observe {
	constructor(data) {
		this.value = data
		this.walk(this.value)
	}
	walk(obj){
		let keys = Object.keys(obj)
		for (var i =0; i <keys.length; i++) {
			defReactive(obj,keys[i])
		}
	}
}


function defReactive(obj,key) {
	console.log(obj)
	let value = obj[key]
	const dep = new Dep()
	Object.defineProperty(obj,key,{
		enumerable: true,
   		configurable: true,
		get:function(){
			dep.addSub(dep)
			// console.log(Dep.target)
			return value
		},
		set:function() {
			debugger
			console.log('set')
			dep.notify()
		},

	})

}

export default Observe