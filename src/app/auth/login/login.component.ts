import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() email: any;
  @Input() password: any;
    
  constructor() { }

  ngOnInit() {
    const userDetails= {
      email: this.email,
      password: this.email
    }
  }

}
