import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Message } from '../../models/Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }
  
  password: string;
  isOpen: Boolean = false;
  msg: String;
  ngOnInit() {
  }

  getDecryptMessage(){
    this.route.params.subscribe(params => {
      let query: Message = {
        url: params['url'],
        pwd: this.password,
      }
      return this.apiService.getDecryptoMessage(query).subscribe(res => {
        console.log(res.msg);
        if(res.msg !== false){
          this.isOpen = true;
          return this.msg = res.msg;
        }
      });
    }); 
  }
}
