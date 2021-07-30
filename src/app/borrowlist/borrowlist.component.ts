import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from "@angular/http";

@Component({
  selector: 'app-borrowlist',
  templateUrl: './borrowlist.component.html',
  styleUrls: ['./borrowlist.component.css']
})
export class BorrowlistComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
  }

}
