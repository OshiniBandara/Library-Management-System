import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from "@angular/http";

@Component({
  selector: 'app-menustudent',
  templateUrl: './menustudent.component.html',
  styleUrls: ['./menustudent.component.css']
})
export class MenustudentComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:Http) { }
  url='http://localhost:9000/books';
  ngOnInit() {
  }

}
