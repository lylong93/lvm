import {insert} from './unit'

import {act} from './unit'

let o ;
let nowdiv;
function createElement(vnode){
	const {name,value,component} = vnode
	
	if(component) {
		// debugger
		vnode.sub({
			template:'<p>ppp</p>',
			ctag:'p',
			component:true,
			parent:act.current.ast
		})

	}

	const elm = document.createElement(name)

	// console.log(elm)
	if(value) {
		elm.textContent = vnode.value.name
	}
	// debugger// o =elm
	// console.log(elm)
	// nowdiv = elm
	return elm
	
}

function createElm(oldVnode,vnode) {

	// 可以用一个栈结构管理当前的作用对象,使insert到正确的父节点
	// stack
	// 未实现

	const tag = createElement(vnode)
	if(vnode.child) {
		createElm(tag,vnode.child)
	}
	// debugger
	insert(oldVnode,tag)
	return oldVnode
}


function path(oldVnode, vnode) {
	// debugger

	let parElm
	//组件
	// debugger
	if(oldVnode.name) {
		parElm = document.createElement(oldVnode.name)
		const o = createElm(parElm,vnode)
		// var b = document.querySelector('body')
		// let a= Object.assign(nowdiv)
		// console.log(nowdiv)
		insert(nowdiv,o)
		//移除旧
		// remov()
	}else {
		parElm = document.querySelector(oldVnode)
		 nowdiv = parElm
		createElm(parElm,vnode)
	}
	// const 

	// console.log(parElm)
	// console.log(vnode)


	

	// console.log(vnode)

	// insert(parElm)
}
export default path