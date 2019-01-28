import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Message } from '../../models/Message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  text: Message;
  chForm: Boolean = false;
  messageObject: Message;
  
  ngOnInit() {
  }

  addNewMessage() {
    this.chForm = true;
    this.apiService.saveMessage(this.text)
      .subscribe((res) => {
        return this.messageObject = res;
      });
  }
}
