import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from "@angular/http";

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:Http) { }
  url='http://localhost:9000/books';
  ngOnInit() {
  }

}
