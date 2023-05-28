import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { clientService } from 'src/service/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  card: any = [];

  constructor(private clientService: clientService) {

  }

  ngOnInit(): void {
  this.getUser()
  }

  getUser(){
    this.clientService.apiData.subscribe((res)=> this.card= res)
  }

  dell(Event: any){
    this.clientService.apiDelete(Event).subscribe(()=> {
    console.log("item excluido com sucesso")
    })
  }
}
