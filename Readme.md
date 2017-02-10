# Serverless-StepFunctions-Filter-Example
serverless-stepfunctions Example Project.
  
See Detail [Wano Developer Blog](https://developers.wano.co.jp/aws-stepfunctions%E3%81%A7%E3%83%9E%E3%82%A4%E3%82%AF%E3%83%AD%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%81%8B%E3%82%89%E7%8A%B6%E6%85%8B%E7%AE%A1%E7%90%86%E3%82%92%E3%81%AA%E3%82%8B%E3%81%B9%E3%81%8F/)  
  
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
./node_modules/.bin/serverless invoke stepf --state testStateMachine-v5 --profile  <YOUR AWS-CLI PROFILE>

```

