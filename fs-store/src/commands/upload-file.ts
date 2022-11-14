import {Command} from '@oclif/core'
import * as fs from 'fs';
import * as path from 'path';
import fetch, { RequestInit } from "node-fetch";
import FormData  = require("form-data");

export class UploadFile extends Command {

  static args = [{name: 'upload'}]

  public async run(): Promise<void> {
    const {args} = await this.parse(UploadFile)

  console.log(`running my command with args: ${args.upload}`)
  console.log();
  const fsStorageFile = fs.createReadStream(args.upload);

  const form = new FormData();
  form.append("file", fsStorageFile);


    const requestOptions: RequestInit  = {
            method: 'POST',
            body: form
    };

  await fetch(`http://localhost:8080/upload`, requestOptions)
    .then(
      (response) => {
        let statusCode = response.status;
      if(statusCode == 200){
        console.log("Successfully uploaded file : " + `${args.upload}`);
      } else {
        Promise.resolve(response).then(res => res.json()).then(data => console.log(data));
      }
    })
  }
}
