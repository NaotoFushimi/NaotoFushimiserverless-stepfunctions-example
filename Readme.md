# Serverless-StepFunction-Example
serverless-stepfunctions Example Project.

## Usage

## init
```bash

npm install 
# or 
yarn install

```
## build / deploy
```bash
# build
npm run build

# Function deploy
./node_modules/.bin/serverless deploy --profile <YOUR AWS-CLI PROFILE>

# Step Functions deploy
./node_modules/.bin/serverless deploy stepf  --profile <YOUR AWS-CLI PROFILE>

# invoke test
./node_modules/.bin/serverless invoke stepf --state testStateMachine-v3 --profile  <YOUR AWS-CLI PROFILE>

```

