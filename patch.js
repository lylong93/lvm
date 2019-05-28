import {insert} from './unit'


function createElement(vnode){
	const {name,value} = vnode
	
	// if(name.indexOf('com')==0) {
	// 		console.log(vnode)
	// 		return 
	// }else {
		const elm = document.createElement(name)
		if(value) {
			elm.textContent = vnode.value.name
		}
		return elm
	// }
	
}

function createElm(oldVnode,vnode) {

	const tag = createElement(vnode)

	if(vnode.child) {
		createElm(tag,vnode.child)
	}

	insert(oldVnode,tag)
}


function path(oldVnode, vnode) {
	// debugger

	//首次渲染oldVnode是真实节点
	
	// console.log(vnode)
	createElm(oldVnode,vnode)
}
export default path