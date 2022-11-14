# file-storage-cli
ocliff cli framework for file storage challenge



Please follow below mentioned steps for building and running CLI for file-storage service


Please make sure that you have latest version of NPM module and node version

My Local sysyem versions are mentioned below
$ npm -v
9.1.1

$ node -v
v16.15.0



After you have node and npm in your local - please clone this CLI code into your local machine

1. open this code in VS-CODE till folder fs-store

npm install -g oclif
npm install --save @types/axios
npm install -D @types/node-fetch

Run
> npm link
> npm run build



After successful above steps

Run Below commands to test the application

Example commands to Test:
fs-store upload-file C:/Users/Raman/Downloads/Milestones.xlsx
fs-store delete-file Milestones.xlsx
fs-store list-files


