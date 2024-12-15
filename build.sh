#!/bin/bash

directories=(
  "validation-pseudo-class"
  "color-mix"
  "css-scope"
  "container-query"
  "css-anchor"
)
default_prefix=""
prefix="${prefix:-$default_prefix}"
base="${prefix}/"

cd projects
rm -rf gateway/public/demo
mkdir -p gateway/public/demo

original_directory=$(pwd)

for dir in "${directories[@]}"; do
  if [ -d "$dir" ]; then
    echo "Entering directory: $dir"
    cd "$dir" || exit 1

    echo "Running script: yarn build"
    yarn build --base "${base}demo/${dir}" -l silent

    echo "Copying files to gateway"
    cp -r dist $original_directory/gateway/public/demo/$dir

    cd "$original_directory" || exit 1
  else
    echo "Directory $dir does not exist."
  fi
done

echo "Completed processing all directories."

echo "Start building gateway"
cd gateway
yarn build --base $base -l silent
echo "Completed app build."
