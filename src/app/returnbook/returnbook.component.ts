import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from "@angular/http";

@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:Http) { }
  url='http://localhost:9000/books';
  ngOnInit() {
  }

}
