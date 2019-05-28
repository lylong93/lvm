

function tml(template){
	// 使用？ 变为非贪婪模式
	const startExp = new RegExp(/<[^/]+?>/g)

	const endExp = new RegExp(/<\/[a-z]+>/g)

	const tetExp = new RegExp(/[ a-z]+</g)

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
				currentAst.value=ast
			}
			
		}
		// console.log(Asts)
	}

	return Asts
}


function parse (template) {
	const asts = tml(template)

	return asts
}

export default parse