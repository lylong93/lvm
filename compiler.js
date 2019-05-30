

function tml(template,data){
	// 使用？ 变为非贪婪模式
	const startExp = new RegExp(/<[^/]+?>/g)

	const endExp = new RegExp(/<\/[a-z]+>/g)

	const tetExp = new RegExp(/[ \Sa-z]+</g)

	// 响应式
	const reExp = new RegExp(/{{[ \Sa-z]}}/g)

	const ELEMENTTYPE= 1
	const TEXTTYPE= 2

	let Asts
	let currentAst
	// debugger
	while(template) {

		let startTag = template.match(startExp)
		let endTag = template.match(endExp)
		
		const teTag = template.match(tetExp)
		

		let step 
		// debugger
		if(startTag && template.indexOf(startTag[0])===0) {
			// console.log(startTag)
			step = startTag[0].length

			_create(startTag[0],ELEMENTTYPE)

			nextStep(step)
			continue
			// tml(template)
		}

		if(teTag  && template.indexOf(teTag[0])===0) {

			// console.log(teTag)
			step = teTag[0].length -1

			_create(teTag[0],TEXTTYPE)

			nextStep(step)
			continue
			// tml(template)
		}

		if(endTag) {
			// console.log(endTag)
			step = endTag[0].length
			nextStep(step)
			//结束这次循环
			// tml(template)
			continue
		}
	}

	function nextStep(step) {
		// console.log(template)
		template=template.substring(step)
		// console.log(template)
	}

	function _create(tag,type) {
		//分解标签可获得更多属性以便实现 事件 样式

		const tagarr = tag.replace(/[<|>]/g,'').split(' ')
	
		let ast= Object.create(null)
		ast.name = tagarr[0]
		// 简单定义开头以com的为组件
		if(ast.name.indexOf('com')==0) {
			ast.component = true
		}
		ast.type = type
		ast.parent=null;
		ast.child=null;
		ast.arrts=tagarr

		if(!Asts) {
			Asts=ast
			currentAst = ast
		} else {
			if(type === ELEMENTTYPE) {
				currentAst.child=ast
				currentAst = ast
			} else {
				//如果是内容元素替换{{}}
				// 触发了get
				// if(ast.name.match(reExp)) {
				// 	ast.name = ast.name.replace(reExp,function() {
				// 		const i = ast.name.match(/\{\{(.*)\}\}/)[1] // 贪婪匹配到 {{}}中内容
				// 		return data[i]
				// 	})
				// 	// console.log(ast)
				// 	currentAst.value=ast
				// }else {
					currentAst.value=ast
				// }
				
			}
			
		}
		// console.log(Asts)
	}

	return Asts
}


function parse (vm) {
	let template = vm.$options.template
	let _data = vm._data

	const asts = tml(template,_data)

	return asts
}

export default parse