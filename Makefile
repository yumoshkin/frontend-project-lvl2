install:
	npm ci

gendiff:
	node src/bin/gendiff.js -h

publish:
	npm publish --dry-run

lint:
	npx eslint .
	