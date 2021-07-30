import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from "@angular/http";


@Component({
  selector: 'app-returndvd',
  templateUrl: './returndvd.component.html',
  styleUrls: ['./returndvd.component.css']
})
export class ReturndvdComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:Http) { }
  url='http://localhost:9000/books';
  ngOnInit() {
  }

}
