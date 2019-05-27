import {insert} from './unit'

function createElement() {

	const node = document.createElement('div')

	return node
}


function createElm(o) {

	const children =[]
	
	const vnode = createElement()


	// console.log(vnode.elm)
	// // creatchildren 
	// if(Array.isArray(children)) {
	// 	for (let i = 0; i<children.length; i++) {
	// 		createElm(children[i])
	// 	}
	// }
	const prentelm = o;
	insert(prentelm,vnode)
}


function path(oldVnode, vnode) {
	console.log(oldVnode)
	createElm(oldVnode)
}
export default path