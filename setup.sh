#!/bin/sh

# create dev-enviroment
cd $HOME
npm install -g n
n lts
# install package by yarn
cd myPortrait
yarn install

echo "Finished !"
