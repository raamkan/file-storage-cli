import {Command} from '@oclif/core';
import {get} from 'node:http';

export class ListFiles extends Command {

  public async run(): Promise<void> {
  
  get('http://localhost:8080/files', res => {
      res.on('data', d => {
        const details = JSON.parse(d);
        console.log("Total Number of files from inventory");
          for(let i = 0; i < details.length; i++) {
            console.log(i+1 ," : ", details[i]);
          }
      })
    }).on('error', e => {
      this.error(e)
    })
  }
}
