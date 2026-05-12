#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

npm run build

cd ../spike01.github.io
cp -r ../blog/dist/ .

git add .

msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi

git commit -m "$msg"
git push origin main

cd ../blog
