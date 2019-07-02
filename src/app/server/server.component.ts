import { Component } from '@angular/core';
 

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})

export class ServerComponent{
    serverId: number= 10;
    serverStatus: string = "offline";
    isDisable = true;
    Username="";
    getServerStatus(){
        return this.serverStatus;
    }
    setButtonStatus($value){
        if($value == ""){
            this.isDisable = true;
        }else{
            this.isDisable = false;
        }
    }
}