module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
		'plugin:prettier/recommended' // 添加 prettier 插件
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		eqeqeq: 0, // 剔除必须使用全等
		//'default-case': 2,
		'space-before-function-paren': [0, 'always'], // 函数定义时括号前面要不要有空格
		'vue/attribute-hyphenation': 'off',
		'vue/max-attributes-per-line': [
			'warn',
			{
				singleline: 3,
				multiline: {
					max: 8,
					allowFirstLine: true
				}
			}
		],
		'class-methods-use-this': 0,
		'import/no-named-as-default': 0,
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.js', '.jsx']
			}
		],

		'prettier/prettier': [
			'error',
			{
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
				jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
				trailingComma: 'none', // 末尾不需要逗号
				rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
				rangeEnd: Infinity,
				requirePragma: false, // 不需要写文件开头的 @prettier
				insertPragma: false, // 不需要自动在文件开头插入 @prettier
				printWidth: 120,
				quoteProps: 'as-needed'
			}
		]
	},
	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				mocha: true
			}
		}
	]
}
