#!/bin/bash
echo Deploy to AWS starting .....
ecs-cli up --keypair MikeDev --capability-iam --size 3 --instance-type t2.medium
ecs-cli compose --file aws.yml up

echo Scale up to n size machines
ecs-cli compose --file aws.yml scale 3

echo Kill container fail stop test
ecs-cli compose --file aws.yml down
ecs-cli compose --file aws.yml service up

echo Clean up 
ecs-cli compose --file aws.yml service rm
ecs-cli down --force

ecs-cli ps
