module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"scope-case": [0, "always"],
		"type-enum": [
			2,
			"always",
			[
				"build",
				"chore",
				"ci",
				"docs",
				"feat",
				"fix",
				"perf",
				"refactor",
				"revert",
				"style",
				"test",
				"workflow"
			]
		]
	}
};
