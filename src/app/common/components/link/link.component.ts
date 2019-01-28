import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../models/Message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  constructor(public router: Router) { }

  @Input() messageObject: Message;
  
  href: String;

  ngOnInit() {
    this.href = window.location.href;
  }
  copyUrl(copyElemet){
    copyElemet.select();
    document.execCommand('copy');
    copyElemet.setSelectionRange(0, 0);
  }
}
