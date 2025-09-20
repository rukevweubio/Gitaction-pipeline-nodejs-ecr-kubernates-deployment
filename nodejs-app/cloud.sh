aws cloudformation create-stack \
  --stack-name nodejs-app-stack \
  --template-body file://cloud.yml \
  --parameters ParameterKey=VpcCidr,ParameterValue=10.0.0.0/16 \
               ParameterKey=SubnetCidr,ParameterValue=10.0.1.0/24 \
               ParameterKey=AvailabilityZone,ParameterValue=us-east-1a \
  --capabilities CAPABILITY_NAMED_IAM \
  --profile vscode
