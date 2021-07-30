import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from "@angular/http";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:Http) { }
  url='http://localhost:9000/books';
  ngOnInit() {
    
  }

}
