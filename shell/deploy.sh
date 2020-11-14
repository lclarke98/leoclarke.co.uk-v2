#!/bin/sh
 ssh -i "lclarke.pem" ubuntu@ec2-18-130-145-135.eu-west-2.compute.amazonaws.com<<EOF
 cd ~/node-app
 git pull
 npm install — production
 pm2 restart all
 exit
EOF