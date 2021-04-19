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
		'vue/attribute-hyphenation': 'never',
		'vue/max-attributes-per-line': [
			'wran',
			{
				singleline: 3,
				multiline: {
					max: 8,
					allowFirstLine: true
				}
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
};
