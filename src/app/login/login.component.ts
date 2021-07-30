import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  apsw: any;
  aun: any;
  spsw: any;
  sun; any;

  constructor(private http:Http,private route:ActivatedRoute, private router: Router) {
  }
  url='http://localhost:9000/books';
  ngOnInit() {
  }

  submitAuth() {
    console.log("clicked")
    psw:this.apsw;
    uname:this.aun;
    this.router.navigate(['/menu']);
    location.reload();
  }
  submitSu(){
    console.log("clicked")
    this.router.navigate(['/menustudent']);
    spsw:this.spsw;
    sun:this.sun;;
  location.reload();
  }
}
