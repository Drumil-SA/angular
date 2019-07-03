import { Component, OnInit } from '@angular/core';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = "No server was created";
serverName = "TestServer";
array1 = ['a','b','c','d','e'];
showSecret = false;
log=[];
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }
  ngOnInit() {
  }
  
  onToggleDetails(){
     this.showSecret = !this.showSecret;
     this.log.push(new Date());
  }
  onCreateServer(){
    this.serverCreationStatus = "Server was created";
  }
  onUpdateServerName(event1 : any){
     this.serverName = (<HTMLInputElement>event1.target).value;
  }
  getArray(){
    return this.array1;
  }
}
