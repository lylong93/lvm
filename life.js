import Watcher from './Watcher'

function mountComponent (vm,el) {
	vm.$el = el

	let updateComponent =() => {
		vm._update(vm._render())
	}

	var watch = new Watcher (vm,updateComponent)
}

export default mountComponent 