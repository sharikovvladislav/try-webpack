
all: help

help:
	echo help

dev-build:
    webpack

prod-build:
    NODE_ENV=production webpack

test:
    npm run test