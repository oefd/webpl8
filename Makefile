.PHONY: build
build:
	npx tsc

.PHONY: test
test: build
	npm run test

.PHONY: clean
clean:
	rm -rf bin

all: build
