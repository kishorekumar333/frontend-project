import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiterlogin',
  templateUrl: './recruiterlogin.component.html',
  styleUrls: ['./recruiterlogin.component.css']
})
export class RecruiterloginComponent implements OnInit {
  users=[
    {
      email: "kishore.kumar333@",
      password: 'kishore123'
    },
    {
      email: "satish333@",
      password: 'satish123'
    }
  ]

  constructor( private router: Router) { }

  ngOnInit() {
  }
  recruiterlogin(){
    this.router.navigate(['/recruiterregister'])
  }
}
