import {Command} from '@oclif/core';
import fetch from 'node-fetch';

export default class DeleteFile extends Command {

  static args = [{name: 'fileName'}]

  public async run(): Promise<void> {

    const {args} = await this.parse(DeleteFile)
    console.log(`running my command with args: ${args.fileName}`)
    
    const requestOptions = {
        method: 'DELETE'
    };

    await fetch(`http://localhost:8080/remove?fileName=${args.fileName}`, requestOptions)
      .then(
        (response) => {
          if(response.status == 200){
            console.log("Successfully delete file : " + `${args.fileName}`);
          } else if(response.status == 404){
            Promise.resolve(response).then(res => res.json()).then(data => console.log(" TimeStamp : " + `${data.timestamp}` + "\n" +  " Http Status : 404 " + "\n" + " Message : " + `${data.message}`));
          }
      })
    }
}
