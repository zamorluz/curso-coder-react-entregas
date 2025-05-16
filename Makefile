COMMAND=$(MAKECMDGOALS)
WORDS  = $(words $(COMMAND))
ARGS = $(wordlist 2,$(WORDS),$(COMMAND))

IMAGE_NAME=coder-react-entregas
AWS_REGION=us-east-2
AWS_ECR_ID=368539636127
AWS_REGISTRY_URL=$(AWS_ECR_ID).dkr.ecr.$(AWS_REGION).amazonaws.com

run:
	@cd src && npm install && npm run dev
ecr:
	@aws ecr get-login-password --profile $(ARGS) --region $(AWS_REGION) | docker login --username AWS --password-stdin $(AWS_REGISTRY_URL)
build: 
	@docker build --platform linux/amd64 -t $(AWS_REGISTRY_URL)/$(IMAGE_NAME):latest . 
push:
	@docker push $(AWS_REGISTRY_URL)/$(IMAGE_NAME):latest
publish: 
	@cd src && npm publish --access public
test:
	@cd src && npm install && npm test
	@make coverage-report
coverage-report:
	@open src/coverage/lcov-report/index.html