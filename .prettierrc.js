module.exports = {
	tabWidth: 2, // tab缩进大小,默认为2
	useTabs: true, // 使用tab缩进，默认false
	semi: false, // 使用分号, 默认true
	singleQuote: true, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
	TrailingCooma: 'none', // 行尾逗号,默认none,可选 none|es5|all,es5 包括es5中的数组、对象,all 包括函数对象等所有可选
	bracketSpacing: true, // 对象中的空格 默认true
	jsxBracketSameLine: false, // JSX标签闭合位置 默认false 在jsx中把'>' 单独放一行
	arrowParens: 'avoid', // 箭头函数参数括号，默认avoid 可选 avoid| always,avoid 能省略括号的时候就省略 例如x => x，always 总是有括号
	htmlWhitespaceSensitivity: 'ignore', //html空格严格程度，可选<css|strict|ignore>
	proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
	requireConfig: false, // Require a 'prettierconfig' to format prettier

	// trailingComma: 'es5' // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
	// tslintIntegration": false // 不让prettier使用tslint的代码格式进行校验
	// eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
	// jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
	// parser": "babylon", // 格式化的解析器，默认是babylon

	insertPragma: false,
	printWidth: 120,
	quoteProps: 'as-needed',
	requirePragma: false
}
