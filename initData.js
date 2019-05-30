import Observe from './observe'

function initData(vm) {
		const data = vm.$options.data()
		vm._data = data
		let keys =  Object.keys(data)
		for(let i in keys) {
			proxy(vm,'_data',keys[i])
		}
		observe(data)
		// proxy(vm)
}

function proxy(target,mid,key) {
	var data = target[mid][key]
	target[key] = data
}
function observe(data){
	// console.log(data)
	let ob = new Observe(data)
}
export default initData 