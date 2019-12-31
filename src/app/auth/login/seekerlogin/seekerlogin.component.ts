import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-seekerlogin',
  templateUrl: './seekerlogin.component.html',
  styleUrls: ['./seekerlogin.component.css']
})
export class SeekerloginComponent implements OnInit {

  constructor(private router:Router ) { }
  
  ngOnInit() {
  }
  seekerLogin()
  {
    this.router.navigate(['/sekerregister']);
  }
  
}
