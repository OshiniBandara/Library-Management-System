import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from "@angular/http";

@Component({
  selector: 'app-borrowdvd',
  templateUrl: './borrowdvd.component.html',
  styleUrls: ['./borrowdvd.component.css']
})
export class BorrowdvdComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:Http) { }
  url='http://localhost:9000/books';
  ngOnInit() {
  }

}
