
all: help

help:
	echo help

dev-build:
    webpack

stats:
    webpack --json --profile > stats.json

prod-build:
    NODE_ENV=production webpack

test:
    npm run test