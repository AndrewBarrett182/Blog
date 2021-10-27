#!/usr/bin/env bash

curl -O "https://academy-project-blogs.s3-eu-west-1.amazonaws.com/teaching_code.doc"
curl -O "https://academy-project-blogs.s3-eu-west-1.amazonaws.com/IDC.md"
curl -O "https://academy-project-blogs.s3-eu-west-1.amazonaws.com/milestones.txt"
mkdir -p blogs && mv teaching_code.doc blogs && mv IDC.md blogs && mv milestones.txt blogs