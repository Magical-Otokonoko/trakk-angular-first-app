import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../web-api-consume/golf-consumer/auth.service';

@Component({
  selector: 'app-redirect-message',
  templateUrl: './redirect-message.component.html',
  styleUrls: ['./redirect-message.component.scss']
})
export class RedirectMessageComponent implements OnInit {

  url: string;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.url = this.authService.redirectUrl;
  }
}
