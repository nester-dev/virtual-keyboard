module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'no-tabs': 'off',
		indent: 'off',
		'linebreak-style': 'off',
		'no-plusplus': 'off',
		'import/extensions': 'off',
	},
};
